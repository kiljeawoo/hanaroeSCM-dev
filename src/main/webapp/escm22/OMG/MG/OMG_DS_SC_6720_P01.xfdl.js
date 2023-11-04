(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("OMG_DS_SC_6720_P01");
                this.set_titletext("본부 담당자 등록/수정");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,767,275);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_hurMb", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"1\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"UYN\" type=\"STRING\" size=\"256\"/><Column id=\"ORGUYN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_close", "absolute", null, "47", "41", "21", "13", null, this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "51", "202", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("본부 담당자 등록/수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "126", "76", null, "29", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "750", "76", "17", "67", null, null, this);
            obj.set_taborder("5");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "32", "91", "15", null, null, this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.set_taborder("7");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "674", "68", "91", "8", null, null, this);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_text("본부 담당자 관리");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("brn_cls", "absolute", "729", "0", "37", "32", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "47", "43", "21", "55", null, this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "17", "174", "110", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "126", "174", null, "29", "17", null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn", "absolute", "131", "178", "158", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_useYn_innerdataset = new Dataset("rdo_useYn_innerdataset", this.rdo_useYn);
            rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용안함</Col></Row></Rows>");
            obj.set_innerdataset(rdo_useYn_innerdataset);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("Y");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Static("Static01", "absolute", "17", "104", "110", "71", null, null, this);
            obj.set_taborder("20");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "126", "104", null, "71", "17", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "282", "76", "110", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("담당자 ID");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mbId", "absolute", "396", "80", "186", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_bsnDsc", "absolute", "131", "80", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_bsnDsc_innerdataset = new Dataset("cbo_bsnDsc_innerdataset", this.cbo_bsnDsc);
            cbo_bsnDsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">BAS</Col><Col id=\"datacolumn\">채권채무</Col></Row><Row><Col id=\"codecolumn\">BT</Col><Col id=\"datacolumn\">계약상담</Col></Row><Row><Col id=\"codecolumn\">ELT_SMS</Col><Col id=\"datacolumn\">전자계약SMS</Col></Row></Rows>");
            obj.set_innerdataset(cbo_bsnDsc_innerdataset);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new TextArea("txt_rmk", "absolute", "131", "108", null, "63", "25", null, this);
            obj.set_taborder("29");
            obj.set_imemode("none");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_cssclass("txt_WF_file");
            obj.set_maxlength("250");
            obj.set_dragscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "76", "110", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", null, null, "40", "21", "10", this);
            obj.set_taborder("31");
            obj.set_text("채권채무 담당자는 마트상품부(8808983000015) 소속이어야 합니다.\r\n운영관리>회원상담>회원조회에서 거래처코드 확인하시기 바랍니다.");
            obj.set_usedecorate("true");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_buyerDsc", "absolute", "585", "80", "108", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_buyerDsc_innerdataset = new Dataset("cbo_buyerDsc_innerdataset", this.cbo_buyerDsc);
            cbo_buyerDsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">바이어구분</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">상품본부</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">공통</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">농산본부</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">테넌트</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">수산</Col></Row></Rows>");
            obj.set_innerdataset(cbo_buyerDsc_innerdataset);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("00");
            obj.set_text("바이어구분");
            obj.set_visible("false");

            obj = new Static("Static11", "absolute", "17", null, null, "40", "21", "-36", this);
            obj.set_taborder("37");
            obj.set_text("전자계약SMS 담당자 입력 예시 : 홍길동#01012345678\r\n담당자가 여러명일 경우 콤마(,)로 구분");
            obj.set_usedecorate("true");
            obj.set_wordwrap("char");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 275, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("본부 담당자 등록/수정");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_mbId","value","ds_hurMb","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cbo_bsnDsc","value","ds_hurMb","BSN_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","rdo_useYn","value","ds_hurMb","UYN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","txt_rmk","value","ds_hurMb","RMK");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6720_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6720_P01.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e) //공통
        {
           this.gfn_setInitForm(obj, e);
        }

        this.fn_afterFormOnload = function() //페이지 로딩후 실행부분
        {
        	var fv_paramMode = this.getOwnerFrame().paramMode;
        	
        	this.ds_hurMb.clearData();
        	this.ds_hurMb.addRow();
        	
        	// 체크박스로 선택된 row의 수정업데이트  모드일 경우 실행
        	if (fv_paramMode == "U") {
        		this.cbo_bsnDsc.set_enable(false);
        		this.search();
            } else {
         		this.cbo_bsnDsc.set_index(0);
        		this.rdo_useYn.set_index(0);
            }
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /*저장 버튼 이벤트*/
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.getOwnerFrame().paramMode== "I"){ //추가등록
        		this.insert();
        	}else if(this.getOwnerFrame().paramMode== "U"){	 //수정업데이트
        	    this.update();
        	}
        }

        /*창닫기 버튼 이벤트*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /* 등록 및 수정시 사용되는 Validation Check */
        this.fn_validationCheck = function(){
        	// 입력값 체크
        	if(this.gfn_isNull(this.edt_mbId.value)){
        		this.alert('담당자 ID를 입력바랍니다.');
        		this.edt_mbId.setFocus();
        		return false;
        	}
        	
        	// 전자계약 알림
        	if (this.cbo_bsnDsc.value == "ELT_SMS") {
        		if (this.cbo_buyerDsc.value == "00") {
        			this.alert('바이어구분을 선택해주세요.');
        			this.cbo_buyerDsc.setFocus();
        			return false;
        		}
        		
        		if (this.gfn_isNull(this.txt_rmk.value)) {
        			this.alert('SMS 알림을 수신받을 담당자 정보를 입력해주세요.\nex) 홍길동#01012345678');
        			this.cbo_buyerDsc.setFocus();
        			return false;
        		} else if (!this.fn_validEltInfo()) {
        			this.txt_rmk.setFocus();
        			return false;
        		}
        	}
            return true;
        }

        /*추가등록*/
        this.insert = function()
        {
        	if (this.fn_validationCheck()) {
        		this.ds_hurMb.setColumn(0, "BSN_DSC", this.gfn_nullToEmpty(this.cbo_bsnDsc.value));
        		this.ds_hurMb.setColumn(0, "RMK", this.gfn_nullToEmpty(this.txt_rmk.value));
        		this.ds_hurMb.setColumn(0, "UYN", this.gfn_nullToEmpty(this.rdo_useYn.value));
        		if (this.cbo_bsnDsc.value == "ELT_SMS") {
        			this.ds_hurMb.setColumn(0, "MB_ID", this.gfn_nullToEmpty(this.cbo_buyerDsc.value)); // 전자계약은 바이어 구분을 ID로 저장
        		} else {
        			this.ds_hurMb.setColumn(0, "MB_ID", this.gfn_nullToEmpty(this.edt_mbId.value));
        		}
        		
        		var sSvcID        = "insertHurMb";
        		var sURL          = "svc::rest/mg/insertHurMb";
        		var sInDatasets   = "ds_hurMb=ds_hurMb";
        		var sOutDatasets  = "";
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

         /*공통코드조회 화면에서 체크박스 선택 후 수정버튼 클릭시 해당 row 정보 조회*/
        this.search = function()
        {
         	var ds_parent = this.parent.dsArg;
         	this.ds_hurMb.copyRow(0, ds_parent, 0);
         	if (this.ds_hurMb.getColumn(0, "BSN_DSC") == "ELT_SMS") {
        		this.cbo_buyerDsc.set_value(this.ds_hurMb.getColumn(0, "MB_ID"));
        		this.fn_bsnDscChanged("ELT_SMS");
         	}
        }

        /*수정*/
        this.update = function()
        {
        	if (this.fn_validationCheck()) {
        		this.ds_hurMb.setColumn(0, "BSN_DSC", this.gfn_nullToEmpty(this.cbo_bsnDsc.value));
        		this.ds_hurMb.setColumn(0, "RMK", this.gfn_nullToEmpty(this.txt_rmk.value));
        		this.ds_hurMb.setColumn(0, "UYN", this.gfn_nullToEmpty(this.rdo_useYn.value));
        		if (this.cbo_bsnDsc.value == "ELT_SMS") {
        			this.ds_hurMb.setColumn(0, "MB_ID", this.gfn_nullToEmpty(this.cbo_buyerDsc.value)); // 전자계약은 바이어 구분을 ID로 저장
        		} else {
        			this.ds_hurMb.setColumn(0, "MB_ID", this.gfn_nullToEmpty(this.edt_mbId.value));
        		}
        		
        		var sSvcID        = "updateHurMb";
        		var sURL          = "svc::rest/mg/updateHurMb";
        		var sInDatasets   = "ds_hurMb=ds_hurMb";
        		var sOutDatasets  = "";
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0){
        		if(ErrorCode == -2){
        			alert(ErrorMsg);
        			return;
        		}else{
        			this.gfn_getMessage("alert", "error.message.server.exception");
        			return;
        		}
        	}else{
        		if(svcID =="insertHurMb"){
        			if(ErrorCode == 1){
        				this.gfn_getMessage("alert", "result.message.save.success");
        				this.close();
        			}
        		}else if(svcID=="updateHurMb"){
        			if(ErrorCode == 1){
        				this.gfn_getMessage("alert", "result.message.save.success");
        				this.close();
        			}
        		}
        	}
        }

        this.rdo_useYn_canitemchange = function(obj,e)
        {
        	this.ds_hurMb.setColumn(0, "ORGUYN", this.gfn_nullToEmpty(this.rdo_useYn.value));
        }

        this.cbo_bsnDsc_onitemchanged = function(obj,e)
        {
        	this.fn_bsnDscChanged(e.postvalue);
        }

        this.fn_bsnDscChanged = function(val)
        {
        	this.edt_mbId.set_enable(val != "ELT_SMS");
        	this.cbo_buyerDsc.set_visible(val == "ELT_SMS");
        	this.Static07.set_visible(val != "ELT_SMS");
        	this.Static11.set_visible(val == "ELT_SMS");
        	
        	if (val == "ELT_SMS") {
        		this.edt_mbId.set_value("SMS");
        		this.Static11.set_bottom(10);
        		this.Static19.set_text("전자계약 구분");
        		this.Static01.set_text("담당자정보");
        	} else {
        		this.Static19.set_text("담당자 ID");
        		this.Static01.set_text("비고");
        	}
        }

        this.fn_validEltInfo = function()
        {
        	var val = this.gfn_nullToEmpty(this.txt_rmk.value);
        	if (!this.gfn_isNull(val)) {
        		var list = val.split(",");
        		for (var i=0; i<list.length; i++) {
        			if (!this.gfn_isNull(list[i])) {
        				var info = list[i].split("#");
        				if (info.length != 2) {
        					this.alert("담당자 정보를 양식에 맞게 입력해주세요.\nex) 홍길동#01012345678");
        					return false; // 이름#연락처 형태가 아님
        				} else if (this.gfn_isNull(info[0])) {
        					this.alert("담당자 이름이 입력되지 않았습니다.");
        					return false; // 이름이 공백
        				} else if (this.gfn_isNull(info[1]) || isNaN(info[1]) || info[1].length < 10 || info[1].length > 11) {
        					this.alert("연락처 정보가 올바르게 입력되지 않았습니다.");
        					return false; // 연락처가 공백 또는 형식이 맞지 않음
        				}
        			}
        		}
        		return true;
        	}
        	this.alert("담당자 정보를 양식에 맞게 입력해주세요.\nex) 홍길동#01012345678");
        	return false;
        }

        this.txt_rmk_onkillfocus = function(obj,e)
        {
        	if (this.cbo_bsnDsc.value == "ELT_SMS") {
        		var data = obj.value;
        		data = data.replace(/\s/g, ""); // 공백제거
        		data = data.replace(/(?:,)+/g, ","); // 연속된 콤마 하나로 합치기
        		data = data.replace(/(,+$)|(^,+)/g, ""); // 앞뒤 콤마 제거
        		obj.set_value(data);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.brn_cls.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.rdo_useYn.addEventHandler("canitemchange", this.rdo_useYn_canitemchange, this);
            this.Static01.addEventHandler("onclick", this.Static07_onclick, this);
            this.cbo_bsnDsc.addEventHandler("onitemchanged", this.cbo_bsnDsc_onitemchanged, this);
            this.txt_rmk.addEventHandler("onkillfocus", this.txt_rmk_onkillfocus, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6720_P01.xfdl", true);

       
    };
}
)();
