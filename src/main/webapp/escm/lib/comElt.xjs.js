//XJS=comElt.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        this.authCallback;

        /*
         * 전자계약 권한체크
         * @param form(Form object)
         * @param callback(Funciton name)
         */
        this.gfn_checkEltAuth = function(form,callback)
        {
        	this.authCallback = callback;
        	
        	if (!form.ds_eltAuth) {
        		var ds = new Dataset;
        		form.addChild("ds_eltAuth", ds);
        	}
        	
        	var sSvcID        = "checkEltAuth";
        	var sURL          = "svc::rest/ct/eltCtrw/checkEltAuth";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_eltAuth=ds_eltAuth";
        	var sArgument     =  "";
        	var sCallbackFunc = "fn_authCallBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*
         * 전자계약 권한체크 콜백
         */
        this.fn_authCallBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "checkEltAuth") {
        			try{
        				this.lookupFunc(this.authCallback).call();
        			} catch(e){
        				trace("Not found callback method");
        			}
        		}
        	}
        }

        /*
         * 전자계약 권한여부 확인
         *
         * 점장권한(CHIEF_YN) 또는 특정권한(ELT_AUTH_DSC)을 가지고 있는지 검사
         *
         * 전자계약관리자권한 (ELT_AUTH_DSC) - 컬럼명 : ELT_#{ELT_AUTH_DSC} (Y/N)
         * - A1 : 계약체결 최종서명 권한
         * - A2 : 담당자 변경 승인 권한
         * - A3 : 전자계약 양식 관리(점장권한 불가)
         * - A4 : 필수서류 양식 관리(점장권한 불가)
         * - A5 : 파견약정서 관리
         * - 11 : 마트상품부 전자계약 관리
         * - 12 : 공통 전자계약 관리
         * - 13 : 농산본부 전자계약 관리
         * - 14 : 테넌트 전자계약 관리
         * - 15 : 수산 전자계약 관리
         * - 16 : 자재부 전자계약 관리
         * - 99 : 모든권한
         */
        this.gfn_hasEltAuth = function(eltAuthDsc)
        {
        	var hasAuth = false;
        	for (var i = 0; i < this.ds_eltAuth.rowcount; i++) {
        		var chiefYn = this.ds_eltAuth.getColumn(i, "CHIEF_YN");
        		var auth99 = this.ds_eltAuth.getColumn(i, "ELT_99");
        		var auth = this.ds_eltAuth.getColumn(i, eltAuthDsc);
        		
        		if (eltAuthDsc != "ELT_A1" && eltAuthDsc != "ELT_A2" && eltAuthDsc != "ELT_A5") { chiefYn = "N"; } // 점장권한 불가
        		if (auth99 == "Y" || auth == "Y" || chiefYn == "Y") { hasAuth = true; break; }
        	}
        	return hasAuth;
        }

        /*
         * 전자계약 사용가능 여부
         * 사업장 회원은 직매장 목록에 등록된 사업자번호일 때만 가능
         */
        this.gfn_eltAvailable = function()
        {
        	if (application.gv_userType == "03" && this.ds_eltAuth.rowcount == 0) {
        		return false;
        	}
        	return true;
        }

        /*
         * 전자계약 바이어 구분 확인
         * @param type(바이어 구분 코드)
         * @param mnCtrwKd(메인계약서 코드)
         */
        this.gfn_equalEltType = function(type,mnCtrwKd)
        {
        	if (type == "11" && (mnCtrwKd == "1" || mnCtrwKd == "12")) {
        		return true; // 마트상품부
        	} else if (type == "12" && (mnCtrwKd == "21" || mnCtrwKd == "22" || mnCtrwKd == "23" || mnCtrwKd == "92" || mnCtrwKd == "94")) {
        		return true; // 공통(직영점)
        	} else if (type == "13" && (mnCtrwKd == "31" || mnCtrwKd == "32" || mnCtrwKd == "93")) {
        		return true; // 농산본부
        	} else if (type == "14" && (mnCtrwKd == "41" || mnCtrwKd == "43" || mnCtrwKd == "44" || mnCtrwKd == "45" || mnCtrwKd == "95" || mnCtrwKd == "96" || mnCtrwKd == "97" || mnCtrwKd == "98")) {
        		return true; // 테넌트
        	} else if (type == "15" && (mnCtrwKd == "51" || mnCtrwKd == "52" )) {
        		return true; // 수산
        	} else if (type == "16" && (mnCtrwKd == "61" || mnCtrwKd == "62" || mnCtrwKd == "63" || mnCtrwKd == "64" || mnCtrwKd == "65" || mnCtrwKd == "66" || mnCtrwKd == "67" || mnCtrwKd == "68" || mnCtrwKd == "69" || mnCtrwKd == "70" || mnCtrwKd == "71" || mnCtrwKd == "72" || mnCtrwKd == "73" || mnCtrwKd == "74" || mnCtrwKd == "75" || mnCtrwKd == "76" || mnCtrwKd == "77" || mnCtrwKd == "78" || mnCtrwKd == "79" || mnCtrwKd == "80" || mnCtrwKd == "81" )) {
        		return true; // 자재부
        	}
        	return false;
        }
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
