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
                this.set_name("OMG_DS_SC_9030");
                this.set_cssclass("frm_WF_PopupBg");
                this.set_titletext("경제통합코드 조회");
                this._setFormPosition(0,0,486,353);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tbTrTrplCif", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"MPSVNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPHNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPSQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COPNO_CIF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZCCNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "47", "58", "21", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "43", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_comp", "absolute", "148", "10", "257", "21", null, null, this.div_search);
            obj.set_taborder("18");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_comp", "absolute", "15", "10", "130", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_comp_innerdataset = new Dataset("cbo_comp_innerdataset", this.div_search.cbo_comp);
            cbo_comp_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">거래처코드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">거래처명</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">사업자등록번호</Col></Row></Rows>");
            obj.set_innerdataset(cbo_comp_innerdataset);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_text("경제통합거래처");
            obj.set_index("0");

            obj = new Grid("grd_tbTrTrplCif", "absolute", "17", "134", null, "163", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_tbTrTrplCif");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"130\"/><Column size=\"160\"/><Column size=\"107\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"경제통합거래처코드\"/><Cell col=\"2\" text=\"거래처명\"/><Cell col=\"3\" text=\"사업자등록번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:NA_TRPL_C\"/><Cell col=\"2\" text=\"bind:CLNTNM\"/><Cell col=\"3\" text=\"bind:BIZ_NUMBER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", "359", "307", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "415", "307", "54", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "76", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "469", "76", "15", "67", null, null, this);
            obj.set_taborder("9");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "363", "336", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "363", "297", "91", "10", null, null, this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "363", "68", "91", "8", null, null, this);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "242", "32", "91", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "363", "119", "76", "15", null, null, this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("btn_newTop", "absolute", "0", "0", "486", "30", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "446", "0", "37", "32", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 486, 353, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("경제통합코드 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_9030.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_9030.xfdl", function() {
        //include "lib::comLib.xjs";
        this.new_elt = "";
        this.objRtnArr = new Array(21); //팝업창 close시 전달할 값을 위한 배열 선언

        this.form_onload = function(obj,e)
        {
            //new_elt  ==  true   신규 계약서 작성시
            //new_elt  ==  false  계약서 수정시
        	this.new_elt = this.getOwnerFrame().new_elt;
        	this.ds_tbTrTrplCif.clearData();
        	this.grd_tbTrTrplCif.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	if (this.gfn_nullToEmpty(this.parent.natrplc) != "") {
        		this.div_search.cbo_comp.set_enable(false);
        		this.div_search.edt_comp.set_enable(false);
        		this.div_search.cbo_comp.set_value("1");
        		this.div_search.edt_comp.set_value(this.parent.natrplc);
        		this.search();
        	}
        }

         /*조회*/
        this.search = function()
        {	
        	var cboComp = this.gfn_nullToEmpty(this.div_search.cbo_comp.value);  //경제통합거래처코드, 업체명 선택 ,사업자번호 
        	var edtComp = this.gfn_nullToEmpty(this.div_search.edt_comp.value);  //경제통합거래처코드, 업체명 ,사업자번호 입력값

        	// trace( "edtComp"  + this.gfn_nullToEmpty(this.div_search.edt_comp.value) );
        	param = "cbo_comp="+cboComp+" edt_comp="+edtComp;

        	if (this.fn_validationCheck()) {
        		var sSvcID        = "search";
        		var sURL          = "svc::rest/pt/comn/retrieveNaBzplCList";
        		var sInDatasets   = "";
        		var sOutDatasets  = "ds_tbTrTrplCif=ds_tbTrTrplCif";	
        		var sArgument     = param
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.fn_validationCheck = function()
        {
        	var cboComp = this.gfn_nullToEmpty(this.div_search.cbo_comp.value);

        	if (this.gfn_nullToEmpty(this.div_search.edt_comp.value) == "") {
        		alert("조회 대상을 입력하세요. ");
        		this.div_search.edt_comp.setFocus();
        		return false;	
        	} else {
        		if (cboComp == "1") {
        			if (this.gfn_length(this.gfn_replace(this.div_search.edt_comp.value, " ", "")) != 13) {
        				this.div_search.edt_comp.setFocus() ;
        				this.alert('경제통합거래처코드번호 값 13자리를 확인 후 다시 입력 하세요.');
        				return false;
        			}
        		} else if(cboComp == "3") {
        			if (this.gfn_length(this.gfn_replace(this.div_search.edt_comp.value ," ", "")) != 10) {
        				this.div_search.edt_comp.setFocus();
        				this.alert('사업자등록번호 값 10자리를 확인 후 다시 입력 하세요.');
        				return false;
        			}
        		}
        	}	
        	return true;	
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "search") {
        			if (this.ds_tbTrTrplCif.rowcount == 0) {
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			} else if (this.ds_tbTrTrplCif.rowcount == 1) {
        				var i  =   this.ds_tbTrTrplCif.rowposition;
        				var StrTbTrTrplCif = this.fn_getSelectedDsStr(i);
        				if(StrTbTrTrplCif == "tmp"){
        					alert("임시 거래처코드(GLN) 일 경우 테넌트 전자계약을 진행할 수 없습니다.\n경제통합시스템에 정식 거래처코드 등록 후 전자계약을 진행하시기 바랍니다.");
        					return false;
        				}else{
        					this.close(StrTbTrTrplCif);
        				}	
        			}
        		} else {
        			if(this.ds_tbTrTrplCif.rowcount == 0){
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}
        	}
        	// trace(this.ds_tbTrTrplCif.saveXML());
        }

        
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_ok_onclick = function(obj,e)
        {
        	var StrTbTrTrplCif = "";
        	var checkCnt =0 ;	//선택된 체크박스 개수
        	//alert("this.ds_rclist.rowcount==>"+this.ds_rclist.rowcount);
        	if (this.ds_tbTrTrplCif.rowcount > 0) {
        		for (var i = 0; i < this.ds_tbTrTrplCif.rowcount; i++) {
        			if (this.ds_tbTrTrplCif.getColumn(i, "ISCHECKED") == 1) {
        				checkCnt = checkCnt +1;
        				StrTbTrTrplCif = this.fn_getSelectedDsStr(i);
        			}
        		}
        		if (checkCnt > 1) {
        			alert("경제 통합코드 하나만 선택해주시기 바랍니다.");
        			return false;
        		} else if(checkCnt == 0) {
        			alert("경제 통합코드 선택해 주시기 바랍니다.");
        			return false;
        		} else {
        			if(StrTbTrTrplCif == "tmp"){
        				alert("임시 거래처코드(GLN) 일 경우 테넌트 전자계약을 진행할 수 없습니다.\n경제통합시스템에 정식 거래처코드 등록 후 전자계약을 진행하시기 바랍니다.");
        				return false;
        			}else{
        				this.close(StrTbTrTrplCif);
        			}
        		}	
        	} else {
        		alert("경제 통합코드를 조회 하세요");
        		return false;
        	}
        }

        this.fn_getSelectedDsStr = function(idx)
        {
        	var StrTbTrTrplCif = "";
        	if (idx == undefined || idx < 0) {
        		return StrTbTrTrplCif;
        	}
        	
        	var tmp = '0';
        	
        	if(this.gfn_nullToEmpty(this.parent.buyercd) == "14") {
        		var natrplc = this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "NA_TRPL_C"))
        		if(natrplc.substr(0, 1) == '5'){
        			tmp = "1";
        		}
        	}
        	
        	var clntnm = this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "CLNTNM")); // 거래처명
        	if (clntnm != "" && clntnm.indexOf(",") != -1) {
        		clntnm = clntnm.replace(/,/g, "，");
        	}
        	var repmnm = this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "REPMNM")); // 대표자명
        	if (repmnm != "" && repmnm.indexOf(",") != -1) {
        		repmnm = repmnm.replace(/,/g, "，");
        	}
        	
        	if(tmp == "0"){ 
        		StrTbTrTrplCif = "NA_TRPL_C#" + this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "NA_TRPL_C"));      //경제통합거래처코드
        		StrTbTrTrplCif += ",CLNTNM#" + clntnm;            //거래처명
        		StrTbTrTrplCif += ",TRPL_ABR_NM#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "TRPL_ABR_NM"));   //거래처약어명
        		StrTbTrTrplCif += ",FZIP#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "FZIP"));                 //앞자리우편번호
        		StrTbTrTrplCif += ",RZIP#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "RZIP"));                 //뒷자리우편번호
        		StrTbTrTrplCif += ",ZIP_SQNO#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "ZIP_SQNO"));         //우편번호일련번호
        		StrTbTrTrplCif += ",DONGUP#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "DONGUP"));             //동이상주소
        		StrTbTrTrplCif += ",DONGBW#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "DONGBW"));             //동이하주소
        		StrTbTrTrplCif += ",ATEL#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "ATEL"));                 //전화지역번호
        		StrTbTrTrplCif += ",HTEL#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "HTEL"));                 //전화국번호
        		StrTbTrTrplCif += ",STEL#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "STEL"));                //전화일련번호
        		StrTbTrTrplCif += ",MPSVNO#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "MPSVNO"));            //휴대전화서비스번호
        		StrTbTrTrplCif += ",MPHNO#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "MPHNO"));              //휴대전화국번호
        		StrTbTrTrplCif += ",MPSQNO#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "MPSQNO"));            //휴대전화일련번호
        		StrTbTrTrplCif += ",TR_STOP_YN#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "TR_STOP_YN"));    //거래중지여부
        		StrTbTrTrplCif += ",TR_STOP_RSNC#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "TR_STOP_RSNC"));//거래중지사유코드
        		StrTbTrTrplCif += ",TR_STOP_DT#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "TR_STOP_DT"));    //거래중지일자
        		StrTbTrTrplCif += ",COPNO_CIF_NO#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "COPNO_CIF_NO"));//법인등록번호
        		StrTbTrTrplCif += ",REPMNM#"+ repmnm;            //대표자명
        		StrTbTrTrplCif += ",BZCCNM#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "BZCCNM"));            //업종코드명
        		StrTbTrTrplCif += ",BZTPNM#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "BZTPNM"));            //업태명
        		StrTbTrTrplCif += ",BIZ_NUMBER#"+ this.gfn_nullToEmpty(this.ds_tbTrTrplCif.getColumn(idx, "BIZ_NUMBER"));    //사업자등록번호
        	}else{
        		StrTbTrTrplCif = 'tmp';
        	}	
        	return StrTbTrTrplCif;
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_tbTrTrplCif.clearData();
        	this.search();  	
        }

        this.grd_tbTrTrplCif_oncelldblclick = function(obj,e)
        {
        	var i  =   this.ds_tbTrTrplCif.rowposition  ;
        	var StrTbTrTrplCif = this.fn_getSelectedDsStr(i);
        	
        	if(StrTbTrTrplCif == "tmp"){
        		alert("임시 거래처코드(GLN) 일 경우 테넌트 전자계약을 진행할 수 없습니다.\n경제통합시스템에 정식 거래처코드 등록 후 전자계약을 진행하시기 바랍니다.");
        		return false;
        	}else{
        		this.close(StrTbTrTrplCif);
        	}
        }

        this.OMG_DS_SC_9030_onkeyup = function(obj,e)
        {
        	 // 13 ==  enter
         	if (e.keycode==13) {
         		this.btn_search.click();
         	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onkeyup", this.OMG_DS_SC_9030_onkeyup, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.cbo_comp.addEventHandler("onitemchanged", this.Div00_cbo_comp_onitemchanged, this);
            this.grd_tbTrTrplCif.addEventHandler("oncellclick", this.grd_tbTrTrplCif_oncellclick, this);
            this.grd_tbTrTrplCif.addEventHandler("oncelldblclick", this.grd_tbTrTrplCif_oncelldblclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_9030.xfdl");

       
    };
}
)();
