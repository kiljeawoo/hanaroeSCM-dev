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
                this.set_name("OMG_DS_SC_9010");
                this.set_titletext("주소조회");
                this.set_visible("true");
                this._setFormPosition(0,0,600,500);
            }
            this.style.set_border("2 solid #067394ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_zip", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"DTCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PROVNM\" type=\"STRING\" size=\"256\"/><Column id=\"CCWNM\" type=\"STRING\" size=\"256\"/><Column id=\"TTVNM\" type=\"STRING\" size=\"256\"/><Column id=\"RODNM_C\" type=\"STRING\" size=\"256\"/><Column id=\"RODNM\" type=\"STRING\" size=\"256\"/><Column id=\"BLD_NO_MHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BLD_NO_SHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CCWN_BLDNM\" type=\"STRING\" size=\"256\"/><Column id=\"LWDG_C\" type=\"STRING\" size=\"256\"/><Column id=\"LWDGNM\" type=\"STRING\" size=\"256\"/><Column id=\"LTNO_MHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"LTNO_SHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"RINM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">13</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_provnm", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_zipSearch", "absolute", null, "7", "58", "21", "17", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "35", null, "153", "17", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_search", "absolute", "104", "71", "168", "21", null, null, this.div_search);
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "-4", "15", "800", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_provnm", "absolute", "104", "40", "168", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_innerdataset("@ds_provnm");
            obj.set_index("-1");
            obj = new Static("Static01", "absolute", "22", "40", "74", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_text("시도");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("st_cond1", "absolute", "22", "71", "74", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("도로명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("st_cond2", "absolute", null, "71", "74", "21", "194", null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("건물번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_search2", "absolute", null, "71", "70", "21", "118", null, this.div_search);
            obj.set_taborder("7");
            obj.set_inputtype("number");
            obj.style.set_align("center");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_comp", "absolute", "22", "10", "196", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_comp_innerdataset = new Dataset("rdo_comp_innerdataset", this.div_search.rdo_comp);
            rdo_comp_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">도로명주소</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">지번주소</Col></Row></Rows>");
            obj.set_innerdataset(rdo_comp_innerdataset);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_value("2");
            obj = new Edit("edt_search3", "absolute", null, "71", "70", "21", "22", null, this.div_search);
            obj.set_taborder("8");
            obj.set_inputtype("number");
            obj.style.set_align("center");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", null, "71", "10", "21", "100", null, this.div_search);
            obj.set_taborder("9");
            obj.set_text("-");
            obj.style.set_align("center");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("st_hint", "absolute", "22", "101", null, "43", "22", null, this.div_search);
            obj.set_taborder("10");
            obj.set_usedecorate("true");
            obj.set_wordwrap("char");
            obj.style.set_background("#fbfbfbff");
            obj.style.set_border("1 solid #d2d2d2ff");
            obj.style.set_color("#555555ff");
            obj.style.set_padding("3px 3px 3px 3px");
            obj.set_text("검색 예시) ㈜농협하나로유통 본사 주소 : 서울특별시 마포구 신촌로 66\r\n시도 : <b v='true'><fc v='blue'>서울특별시</fc></b> / 도로명 : <b v='true'><fc v='blue'>신촌로</fc></b> / 건물번호 : <b v='true'><fc v='blue'>66</fc></b>(본번)");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_zip", "absolute", "17", "200", null, null, "17", "76", this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_zip");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\" band=\"left\"/><Column size=\"70\"/><Column size=\"77\"/><Column size=\"74\"/><Column size=\"108\"/><Column size=\"95\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"153\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"83\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"1\" text=\"우편번호\"/><Cell col=\"2\" text=\"시도명\"/><Cell col=\"3\" text=\"시군구명\"/><Cell col=\"4\" text=\"읍면동명\"/><Cell col=\"5\" text=\"도로명\"/><Cell col=\"6\" text=\"본번\"/><Cell col=\"7\" text=\"부번\"/><Cell col=\"8\" text=\"시군구용건물명\"/><Cell col=\"9\" text=\"법정동명\"/><Cell col=\"10\" text=\"지번본번\"/><Cell col=\"11\" text=\"지번부번\"/><Cell col=\"12\" text=\"리명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:DTCT_NO\"/><Cell col=\"2\" text=\"bind:PROVNM\"/><Cell col=\"3\" text=\"bind:CCWNM\"/><Cell col=\"4\" text=\"bind:TTVNM\"/><Cell col=\"5\" text=\"bind:RODNM\"/><Cell col=\"6\" text=\"bind:BLD_NO_MHZNO\"/><Cell col=\"7\" text=\"bind:BLD_NO_SHZNO\"/><Cell col=\"8\" text=\"bind:CCWN_BLDNM\"/><Cell col=\"9\" text=\"bind:LWDGNM\"/><Cell col=\"10\" text=\"bind:LTNO_MHZNO\"/><Cell col=\"11\" text=\"bind:LTNO_SHZNO\"/><Cell col=\"12\" text=\"bind:RINM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm", "absolute", null, null, "54", "29", "75", "8", this);
            obj.set_taborder("20");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", null, null, "54", "29", "17", "8", this);
            obj.set_taborder("21");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging", "absolute", "59", null, null, "29", "63", "46", this);
            obj.set_taborder("22");
            obj.set_text("Div03");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 153, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 600, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_3212");
            		p.set_titletext("주소조회");
            		p.style.set_border("2 solid #067394ff");
            		p.set_visible("true");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_9010.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_9010.xfdl", function() {
        //include "lib::comLib.xjs"

        //this.new_elt = "";

        this.OMG_DS_SC_9010_onload = function(obj,e)
        {

        	this.gfn_setInitForm(obj, e); //공통
        	var param = [
               {code:"ADDR_PROVNM"    ,     dsName:"ds_provnm", selecttype:""}
            ];

            this.gfn_setPortalCommonCode(param);
        //    this.new_elt = this.getOwnerFrame().new_elt ;
            this.grd_zip.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	var cnt = this.ds_provnm.insertRow();
        	this.ds_provnm.setColumn(cnt , "CTRW_KDC" ,"" )
        	this.ds_provnm.setColumn(cnt , "SIMP_CNM" , "선택")
        	this.div_search.cbo_provnm.set_index(0);
        }

        this.btn_zipSearch_onclick = function(obj,e)
        {
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        }

        this.fn_zipSearch =  function()
        {

        	if(this.fn_validationCheck()){
        		var cbo_comp = this.div_search.rdo_comp.value;  //1 지번 주소  , 2 도로명 주소
        		var provnm = this.gfn_nullToEmpty(this.div_search.cbo_provnm.value);  //시도 선택
        		
        		// 도로명에는 공백이 존재하지 않으므로
        		if (cbo_comp == "2" && this.div_search.edt_search.value.indexOf(" ") != -1) {
        			this.div_search.edt_search.set_value(this.allTrim(this.div_search.edt_search.value));
        		}
        		
        		var edtSearch = this.gfn_nullToEmpty(this.div_search.edt_search.value); // 도로명, 동/읍/면
        		var edtSearch2 = this.gfn_nullToEmpty(this.div_search.edt_search2.value);
        		var edtSearch3 = this.gfn_nullToEmpty(this.div_search.edt_search3.value);
        		var param = " cbo_comp="+cbo_comp+" provnm="+provnm + " edt_zip="+edtSearch + " edt_zip2="+edtSearch2 + " edt_zip3="+edtSearch3;

        		var sSvcID        = "search";//통신아이디
        		var sURL          = "svc::rest/pt/comn/retrieveAdrInq";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        		var sOutDatasets  = "ds_zip=ds_zip ds_pageVO=ds_pageVO";		//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		//API 호출

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        
        /* Validation Check */
        this.fn_validationCheck = function(){
        	//trace( "시도 [" + this.gfn_nullToEmpty(this.div_search.cbo_provnm.value) +"]") ;
        	if(this.gfn_nullToEmpty(this.div_search.cbo_provnm.value) == ""){
        		this.div_search.edt_search.setFocus();
        		this.alert('시도를 선택하세요. ');
        		return false;
        	}

        	if(this.gfn_isNull(this.div_search.edt_search.value)){
        		this.div_search.edt_search.setFocus();
        		this.alert(this.div_search.rdo_comp.value == 1 ? '조회할 동/읍/면을 입력 하세요.' : '조회할 도로명을 입력 하세요.');
        		return false;
        	}

        	if(this.gfn_isNull(this.div_search.edt_search2.value) && !this.gfn_isNull(this.div_search.edt_search3.value)){
        		this.div_search.edt_search2.setFocus();
        		this.alert((this.div_search.rdo_comp.value == 1 ? '지번' : '건물번호') + '본번도 함께 입력해주시기 바랍니다.');
        		return false;
        	}

        	return true;
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "search"){
        			if(this.ds_zip.rowcount > 0)
        			{
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				this.div_paging.fn_pageSet(sTotal, sPagesize,"div_paging",lsNowPage);

        			}else if(this.ds_zip.rowcount == 0){

        				this.div_paging.fn_pageSet(0, 10,"div_paging",lsNowPage);
        				return false;
        			}
        		}
        	}

        }

        this.fn_popupAfter = function(strId,strVal)
        {
        //	trace(" strId : " + strId + " strVal : " + strVal);
        }

        this.fn_afterFormOnload = function()
        {
        //	trace("fn_afterFormOnload");
        }

        this.btn_newClose_onclick = function(obj,e)
        {
        	//if(this.new_elt  ==  true){
        		this.close("");
        // 	}else{
        // 		this.parent.div_addr.set_visible(false);
        // 	}
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	//if(this.new_elt  ==  true){
        		this.close("");
        // 	}else{
        // 		this.parent.div_addr.set_visible(false);
        // 	}
        }

        this.grd_zip_oncellclick = function(obj,e)
        {
        	if(e.cell==0){
        		this.gfn_singleChk(obj,e);
        	}
        }

        this.btn_confirm_onclick = function(obj,e)
        {
        	var zipCode;
        	if (this.ds_zip.rowcount > 0) {
        		for(var i = 0; i < this.ds_zip.rowcount; i++) {
        			if(this.ds_zip.getColumn(i, "ISCHECKED") == 1) {
        				zipCode = this.returnAddrStr(i);
        			}
        		}
        		if(this.gfn_isNull(zipCode)){
        			alert("입력할 주소를 체크 하세요");
        			return false;
        		}
        	} else {
        		alert("주소를 조회 하세요");
        		return false;
        	}
        	this.close(zipCode);
        }

        

        /************************************************************************************************
         * 페이징처리
        ************************************************************************************************/
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_zip.clearData();     //Grid에 Binding된 Dataset명

        	this.ds_pageVO.addRow();

        	var vPageSize   = 50; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; 	//전체건수. 화면조회후 리턴받아 사용

         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);

        	var argumentObj = "";

        	lsNowPage = vPageNum;//현재페이지 설정

        	this.fn_zipSearch();

        }

        this.grd_zip_oncelldblclick = function(obj,e)
        {
        	var i  =   this.ds_zip.rowposition  ;
        	var zipCode = this.returnAddrStr(i);
        	
         	this.close(zipCode);
        }

        /************************************************************************************************
         * 선택주소 데이터 조합
        ************************************************************************************************/
        this.returnAddrStr = function(row)
        {
        	var strZip = this.ds_zip.getColumn(row,"DTCT_NO");
        	var addr1 = this.ds_zip.getColumn(row,"PROVNM");
        	var addr2 = this.ds_zip.getColumn(row,"CCWNM");
        	var addr3 = this.ds_zip.getColumn(row,"LWDGNM");
        	var addr4 = this.ds_zip.getColumn(row,"RODNM");
        	var addr5 = this.ds_zip.getColumn(row,"BLD_NO_MHZNO");
        	var addr6 = this.ds_zip.getColumn(row,"BLD_NO_SHZNO");
        	var addr7 = this.ds_zip.getColumn(row,"BLD_AMNNO");	
        	var addr8 = this.ds_zip.getColumn(row,"LTNO_MHZNO");
        	var addr9 = this.ds_zip.getColumn(row,"LTNO_SHZNO");
        	var addr10 = this.ds_zip.getColumn(row,"TTVNM");
        	var addr11 = this.ds_zip.getColumn(row,"RINM");

        	/**
        	 *  FZIP : 우편번호 앞 3자리
        	 *  RZIP : 우편번호 뒤 2자리
        	 *  DONGUP : 기본주소
        	 *  DONGBW : 상세주소
        	 *  GBN : 도로명주소여부
        	 *  BLD_AMNNO : 건물관리번호
        	 */
        	var zipCode  = "FZIP#" + strZip.substr(0,3);
        	zipCode += ",RZIP#" + strZip.substr(3,2);
        	
        	if (this.div_search.rdo_comp.value == 1) {
        		// 지번
        		zipCode += ",DONGUP#" + addr1 + " " + addr2;
        		if (this.gfn_nullToEmpty(addr3) != "") {
        			zipCode += " " + addr3; // 동
        		}
        		if (this.gfn_nullToEmpty(addr10) != "") {
        			zipCode += " " + addr10; // 면
        			if (this.gfn_nullToEmpty(addr11) != "") {
        				zipCode += " " + addr11; // 리
        			}
        		}
        		zipCode += " " + addr8;
        		if (!this.gfn_isNull(addr9) && addr9 != "0") {
        			zipCode += "-"+addr9; // 부번이 있을 경우 추가
        		}
        	} else {
        		// 도로명
        		zipCode += ",DONGUP#" + addr1 + " " + addr2;
        		if (this.gfn_nullToEmpty(addr10) != "") {
        			zipCode += " " + addr10;
        		}
        		zipCode += " " + addr4 + " " + addr5;
        		if (!this.gfn_isNull(addr6) && addr6 != "0") {
        			zipCode += "-"+addr6; // 부번이 있을 경우 추가
        		}
        		if (!this.gfn_isNull(addr3)) {
        			zipCode += " (" + addr3 + ")"; // 법정동명 추가
        		}
        	}
        	zipCode += ",DONGBW#";
        	zipCode += ",GBN#" + this.div_search.rdo_comp.value; // 주소구분(1지번,2도로명)
        	zipCode += ",BLD_AMNNO#" + addr7; // 건물관리번호

        	return zipCode;
        }

        this.OMG_DS_SC_9010_onkeydown = function(obj,e)
        {
        	// 13 ==  enter
         	if (e.keycode==13  ){
         		this.btn_zipSearch.click() ;
         	}
        }

        this.div_search_rdo_comp_onitemchanged = function(obj,e)
        {
        	this.div_search.edt_search.set_value("");
        	this.div_search.edt_search2.set_value("");
        	this.div_search.edt_search3.set_value("");

        	if (obj.value==1) {
        		this.div_search.st_cond1.set_text("동/읍/면");
        		this.div_search.st_cond2.set_text("지번");
        		this.div_search.st_hint.set_text("검색 예시) ㈜농협하나로유통 본사 주소 : 서울 마포구 노고산동 49-31<br>시도 : <b v='true'><fc v='blue'>서울특별시</fc></b> / 동.읍.면 : <b v='true'><fc v='blue'>노고산동</fc></b> / 지번 : <b v='true'><fc v='blue'>49</fc></b>(본번), <b v='true'><fc v='blue'>31</fc></b>(부번)");
        	} else {
        		this.div_search.st_cond1.set_text("도로명");
        		this.div_search.st_cond2.set_text("건물번호");
        		this.div_search.st_hint.set_text("검색 예시) ㈜농협하나로유통 본사 주소 : 서울 마포구 신촌로 66<br>시도 : <b v='true'><fc v='blue'>서울특별시</fc></b> / 도로명 : <b v='true'><fc v='blue'>신촌로</fc></b> / 건물번호 : <b v='true'><fc v='blue'>66</fc></b>(본번)");
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_9010_onload, this);
            this.addEventHandler("onkeydown", this.OMG_DS_SC_9010_onkeydown, this);
            this.btn_zipSearch.addEventHandler("onclick", this.btn_zipSearch_onclick, this);
            this.div_search.rdo_comp.addEventHandler("onitemchanged", this.div_search_rdo_comp_onitemchanged, this);
            this.grd_zip.addEventHandler("oncelldblclick", this.grd_zip_oncelldblclick, this);
            this.btn_confirm.addEventHandler("onclick", this.btn_confirm_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_9010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
