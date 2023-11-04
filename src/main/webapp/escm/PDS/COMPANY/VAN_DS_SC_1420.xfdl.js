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
                this.set_name("frm_VAN_DS_SC_1420");
                this.set_titletext("본지사조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cif", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NUMBER\" type=\"INT\" size=\"7\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"NA_MBCO_DSC\" type=\"INT\" size=\"7\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"TR_STOP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"TR_STOP_RSNC\" type=\"STRING\" size=\"2\"/><Column id=\"TR_STOP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cif_mbco", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("6");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "0", null, null, "0", "0", this.div_list);
            obj.set_taborder("11");
            obj.set_binddataset("ds_cif");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"140\"/><Column size=\"240\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"본/지사 코드\"/><Cell col=\"2\" text=\"본/지사 명\"/><Cell col=\"3\" text=\"본/지사구분\"/><Cell col=\"4\" text=\"삭제여부\"/><Cell col=\"5\" text=\"중지여부\"/><Cell col=\"6\" text=\"거래중지사유\"/><Cell col=\"7\" text=\"등록일시\"/><Cell col=\"8\" text=\"최초등록자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_TRPL_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"3\" text=\"bind:NA_MBCO_DSC\" expr=\"expr:NA_MBCO_DSC=='1'?'본사(소)':'지사(소)'\"/><Cell col=\"4\" text=\"bind:DEL_YN\" expr=\"expr:DEL_YN=='1'?'삭제':'부'\"/><Cell col=\"5\" text=\"bind:TR_STOP_YN\" expr=\"expr:TR_STOP_YN=='0'?'부':'여'\"/><Cell col=\"6\" text=\"bind:TR_STOP_NM\"/><Cell col=\"7\" text=\"bind:FSRG_DTM\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "79", null, this);
            obj.set_taborder("7");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print00", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("4");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_0180");
            		p.set_titletext("본지사조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1420.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1420.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function()
        {
        	this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_auth.chk_all.set_visible(true);
        	
        	/*
        	var ozParam = {
        					form:this, 						//공통
        					ozBtn:this.btn_print00, 		//출력버튼 
        					ozFnc:'btn_print00_onclick'		//오즈실행 함수명
        				  };
        	this.addOzBtn(ozParam);
        	*/
        }

        this.btn_search00_onclick = function(obj,e)
        {
        	this.ds_cif.clearData();
        	var json = this.getParamJson(this.components);
        	json.TRPL_C = this.getTrplCode();
        	var params = this.getParamJsonToString(json);
        	
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/company/Company/CompanyTypes";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_cif=ds_cif";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        
        this.fn_callback = function(svcID,nCD,sMSG)//첫번째 인자값은 통신 ID
        {
        	if(nCD < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "p_search" && sMSGD == "SYSTEMERROR"){
        			this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        		}
        	}
        }

        this.btn_print00_onclick = function(obj,e)
        {
        	if(this.div_list.grd_main00.rowcount < 1){
        		this.gfn_getMessage('alert','result.message.search.no.exist.data');
        		return;
        	}
        	var trpl_text = this.getTrplCodePrint();
        	var ozParam = {
        		sId: 'VAN_DS_SC_1420',
        		sUrl: '/rest/oz/pds/company/Company/CompanyTypes',
        		paramType: 'param',
        		sParam: {
        			TRPL_C:this.getTrplCode(),
        			TRPL_C_TEXT:trpl_text
        		}
        	};
        	this.ozViewer(ozParam);	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.btn_print00.addEventHandler("onclick", this.btn_print00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1420.xfdl");
        this.loadPreloadList();
       
    };
}
)();
