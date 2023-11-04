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
                this.set_name("popup01");
                this.set_cssclass("frm_WF_PopupBg");
                this.set_titletext("경재통합코드 조회화면");
                this._setFormPosition(0,0,456,353);
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
            obj.set_value("8803712000014");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_comp", "absolute", "15", "10", "130", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_comp_innerdataset = new Dataset("cbo_comp_innerdataset", this.div_search.cbo_comp);
            cbo_comp_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">경제통합거래처</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">거래처명</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">사업자등록번호</Col></Row></Rows>");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"107\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"경재통합거래처코드\"/><Cell col=\"2\" text=\"거래처명\"/><Cell col=\"3\" text=\"사업자등록번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:NA_TRPL_C\"/><Cell col=\"2\" text=\"bind:CLNTNM\"/><Cell col=\"3\" text=\"bind:BIZ_NUMBER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", "329", "307", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "385", "307", "54", "29", null, null, this);
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

            obj = new Static("Static00", "absolute", "439", "76", "17", "67", null, null, this);
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

            obj = new Static("btn_newTop", "absolute", "0", "0", "456", "30", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "419", "0", "37", "32", null, null, this);
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
            obj = new Layout("default", "", 456, 353, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("경재통합코드 조회화면");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("popup01.xfdl", "lib::comLib.xjs");
        this.registerScript("popup01.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.objRtnArr = new Array(21); //팝업창 close시 전달할 값을 위한 배열 선언

        this.form_onload = function(obj,e)
        {
        // 	trace("paramMode : "+this.getOwnerFrame().paramMode);
        // 	trace("dsArg : "+this.parent.dsArg.rowcount);
        	this.ds_tbTrTrplCif.clearData();
        }

        	
         /*조회*/
        this.search = function()
        {	

        	
        		var cboComp = this.gfn_nullToEmpty(this.div_search.cbo_comp.value);  //경제통합거래처코드, 업체명 선택 ,사업자번호 
        		var edtComp = this.gfn_nullToEmpty(this.div_search.edt_comp.value);  //경제통합거래처코드, 업체명 ,사업자번호 입력값

        		param = "cbo_comp="+cboComp+" edt_comp="+edtComp;

        
        	var sSvcID        = "search";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveNaBzplCList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_tbTrTrplCif=ds_tbTrTrplCif";	
        	var sArgument     = param

        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	//trace(this.ds_param.saveXML());	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	
        	if(ErrorCode < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "search"){	
        			if(this.ds_tbTrTrplCif.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}else{
        			if(this.ds_tbTrTrplCif.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}
        	}
        	
        		trace(this.ds_tbTrTrplCif.saveXML());
        		
        }

        
        this.btn_cancel_onclick = function(obj,e)
        {
        	//this.close();
        	this.parent.div_naTrplC.set_visible(false);
        }

        this.btn_close_onclick = function(obj,e)
        {
        	//this.close();
        	
        	this.parent.div_naTrplC.set_visible(false);
        }

        this.btn_ok_onclick = function(obj,e)
        {
        var StrTbTrTrplCif = "";
        	
        	//alert("this.ds_rclist.rowcount==>"+this.ds_rclist.rowcount);
        	if(this.ds_tbTrTrplCif.rowcount > 0){
        		for(var i = 0; i < this.ds_tbTrTrplCif.rowcount; i++){
        			if(this.ds_tbTrTrplCif.getColumn(i, "ISCHECKED") == 1)
        			{
        			
        				StrTbTrTrplCif = "NA_TRPL_C#" + this.ds_tbTrTrplCif.getColumn(i, "NA_TRPL_C");      //경제통합거래처코드
        				StrTbTrTrplCif += ",CLNTNM#" + this.ds_tbTrTrplCif.getColumn(i, "CLNTNM");            //거래처명
        				StrTbTrTrplCif += ",TRPL_ABR_NM#"+ this.ds_tbTrTrplCif.getColumn(i, "TRPL_ABR_NM");   //거래처약어명
        				StrTbTrTrplCif += ",FZIP#"+ this.ds_tbTrTrplCif.getColumn(i, "FZIP");                 //앞자리우편번호
        				StrTbTrTrplCif += ",RZIP#"+ this.ds_tbTrTrplCif.getColumn(i, "RZIP");                 //뒷자리우편번호
        				StrTbTrTrplCif += ",ZIP_SQNO#"+ this.ds_tbTrTrplCif.getColumn(i, "ZIP_SQNO");         //우편번호일련번호
        				StrTbTrTrplCif += ",DONGUP#"+ this.ds_tbTrTrplCif.getColumn(i, "DONGUP");             //동이상주소
        				StrTbTrTrplCif += ",DONGBW#"+ this.ds_tbTrTrplCif.getColumn(i, "DONGBW");             //동이하주소
        				StrTbTrTrplCif += ",ATEL#"+ this.ds_tbTrTrplCif.getColumn(i, "ATEL");                 //전화지역번호
        				StrTbTrTrplCif += ",HTEL#"+ this.ds_tbTrTrplCif.getColumn(i, "HTEL");                 //전화국번호
        				StrTbTrTrplCif += ",STEL#"+ this.ds_tbTrTrplCif.getColumn(i, "STEL");                //전화일련번호
        				StrTbTrTrplCif += ",MPSVNO#"+ this.ds_tbTrTrplCif.getColumn(i, "MPSVNO");            //휴대전화서비스번호
        				StrTbTrTrplCif += ",MPHNO#"+ this.ds_tbTrTrplCif.getColumn(i, "MPHNO");              //휴대전화국번호
        				StrTbTrTrplCif += ",MPSQNO#"+ this.ds_tbTrTrplCif.getColumn(i, "MPSQNO");            //휴대전화일련번호
        				StrTbTrTrplCif += ",TR_STOP_YN#"+ this.ds_tbTrTrplCif.getColumn(i, "TR_STOP_YN");    //거래중지여부
        				StrTbTrTrplCif += ",TR_STOP_RSNC#"+ this.ds_tbTrTrplCif.getColumn(i, "TR_STOP_RSNC");//거래중지사유코드
        				StrTbTrTrplCif += ",TR_STOP_DT#"+ this.ds_tbTrTrplCif.getColumn(i, "TR_STOP_DT");    //거래중지일자
        				StrTbTrTrplCif += ",COPNO_CIF_NO#"+ this.ds_tbTrTrplCif.getColumn(i, "COPNO_CIF_NO");//법인등록번호
        				StrTbTrTrplCif += ",REPMNM#"+ this.ds_tbTrTrplCif.getColumn(i, "REPMNM");            //대표자명
        				StrTbTrTrplCif += ",BZCCNM#"+ this.ds_tbTrTrplCif.getColumn(i, "BZCCNM");            //업종코드명
        				StrTbTrTrplCif += ",BZTPNM#"+ this.ds_tbTrTrplCif.getColumn(i, "BZTPNM");            //업태명
        				StrTbTrTrplCif += ",BIZ_NUMBER#"+ this.ds_tbTrTrplCif.getColumn(i, "BIZ_NUMBER");    //사업자등록번호
        	
        			}
        		}
        	
        	
        		this.parent.div_naTrplC.set_visible(false);
        		this.parent.fn_naTrplC(StrTbTrTrplCif);
        		
        		this.ds_tbTrTrplCif.clearData();
        		
        	}else{
        		alert("경재 통합코드를 조회 하세요");
        		return false;
        	}

        
        }
        this.btn_search_onclick = function(obj,e)
        {
        this.ds_tbTrTrplCif.clearData();
          this.search();  	
        }

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.cbo_comp.addEventHandler("onitemchanged", this.Div00_cbo_comp_onitemchanged, this);
            this.grd_tbTrTrplCif.addEventHandler("oncellclick", this.grd_tbTrTrplCif_oncellclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("popup01.xfdl", true);

       
    };
}
)();
