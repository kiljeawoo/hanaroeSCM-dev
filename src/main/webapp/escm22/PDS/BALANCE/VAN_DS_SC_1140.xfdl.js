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
                this.set_name("VAN_DS_SC_1140");
                this.set_titletext("미수금원장조회(농협기준)");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ADJPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ACRV_SBJC\" type=\"STRING\" size=\"256\"/><Column id=\"OCU_AM\" type=\"STRING\" size=\"256\"/><Column id=\"WDR_AM\" type=\"STRING\" size=\"256\"/><Column id=\"BAC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ACRV_SBJC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"13\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"SIMP_C\">all</Col><Col id=\"SIMP_CNM\">- 전체 -</Col></Row><Row><Col id=\"SIMP_C\">10</Col><Col id=\"SIMP_CNM\">공병(기타의당좌자산)</Col></Row><Row><Col id=\"SIMP_C\">11</Col><Col id=\"SIMP_CNM\">공상자((기타의당좌자산)</Col></Row><Row><Col id=\"SIMP_C\">16</Col><Col id=\"SIMP_CNM\">공파레트</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "323", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "379", "21", "117", null, this);
            obj.set_taborder("1");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "76", null, this);
            obj.set_taborder("8");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "81", "15", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "13", "42", "106", "21", null, null, this.div_search);
            obj.set_taborder("41");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "13", "13", "106", "21", null, null, this.div_search);
            obj.set_taborder("42");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("TR_DT", "absolute", "108", "13", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("43");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Combo("ACRV_SBJC", "absolute", "401", "13", "179", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.set_innerdataset("@ds_ACRV_SBJC");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_value("all");
            obj = new Static("Static03", "absolute", "300", "13", "107", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("미수금과목");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_is_na_all", "absolute", "110", "42", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_is_na_all_innerdataset = new Dataset("rdo_is_na_all_innerdataset", this.div_search.rdo_is_na_all);
            rdo_is_na_all_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">one</Col><Col id=\"datacolumn\">정산처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_is_na_all_innerdataset);
            obj.set_taborder("47");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("all");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Edit("NA_BZPLC", "absolute", "293", "42", "132", "21", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("NA_BZPLC_NM", "absolute", "428", "42", "152", "21", null, null, this.div_search);
            obj.set_taborder("49");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            obj.style.set_background("#ffffffff");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "583", "42", "21", "21", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_enable("false");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "110", null, null, "15", "27", this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "368", "1", null, "12", "357", null, this.div_list);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_main", "absolute", "0", "42", null, null, "0", "21", this.div_list);
            obj.set_taborder("4");
            obj.set_visible("true");
            obj.set_binddataset("ds_main");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_scrollbars("autoboth");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"110\"/><Column size=\"190\"/><Column size=\"110\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"사업장\"/><Cell col=\"3\" text=\"정산처코드\"/><Cell col=\"4\" text=\"정산처\"/><Cell col=\"5\" text=\"미수금과목\"/><Cell col=\"6\" text=\"차변누계\"/><Cell col=\"7\" text=\"대변누계\"/><Cell col=\"8\" text=\"잔액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:BZPL_NM\"/><Cell col=\"3\" text=\"bind:NA_ADJPL_C\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:CLIENT_NM\"/><Cell col=\"5\" text=\"bind:ACRV_SBJC\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:OCU_AM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:WDR_AM\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BAC\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 81, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("Div00");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1610");
            		p.set_titletext("미수금원장조회(농협기준)");

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
        this.addIncludeScript("VAN_DS_SC_1140.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1140.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
           	var searchParam =
        	{
        		form: this,									
        		param:[
        		{									
        			edit: this.div_search.TR_DT,
        			fnc: 'btn_search00_onclick'
        		},
        		{									
        			edit: this.div_search.NA_BZPLC,
        			fnc: 'btn_search00_onclick'
        		}
        		]
        	};
        	this.addEventEnterSearch(searchParam);	
        };

        this.fn_afterFormOnload = function() //onload
        {
        	this.div_list.grd_main.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	this.div_search.TR_DT.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),1));
        	/*
        	var param = [  
        		{code:"ACRV_SBJC", dsName:"ds_ACRV_SBJC", selecttype:"A"},
        	];
        	this.gfn_setCommonCode(param);
        	*/
        }

        this.fn_commonAfterOnload= function()
        {
        	this.div_search.ACRV_SBJC.set_index(0);
        }

        this.btn_search00_onclick = function(obj,e){
        	this.ds_main.clearData();
        	if(this.fn_validationCheck()) {
        		//권한사업장 코드
        		var trplC = this.getTrplCode();
        		var na_bizcode = this.div_search.NA_BZPLC.value;
        		if(na_bizcode == null) {
        			trace('all');
        			na_bizcode='all';
        		}
        		var param = "TR_DT="+this.div_search.TR_DT.value
        					+" ACRV_SBJC="+this.div_search.ACRV_SBJC.value
        					+" NA_BZPLC="+na_bizcode
        					+" TRPL_C="+trplC;
        		var sSvcID        = "getArcvOcuList";
        		var sURL          = "svc::rest/pds/balance/getArcvOcuList";
        		var sInDatasets   = "";
        		var sOutDatasets  = "ds_main=DATASET";
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callback";//콜백
        		var tranType 	  = "U"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	}
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0)
        	{
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}else{
        		if(svcID == "getArcvOcuList"){
        			if(this.ds_main.rowcount == 0){				
        				this.div_list.grd_main.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));								
        			}else{							
        			}			
        		}	
        	}
        	
        }

        this.fn_validationCheck = function(){
        	
        	return true;
        }

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	var strArray = strVal.split(',');
        	this.div_search.NA_BZPLC.set_value(strArray[0]);
        	this.div_search.NA_BZPLC_NM.set_value(strArray[1]);
        	trace(" strId : " + strId + " strVal : " + strVal);
        }

        

        this.div_search_edt_data00_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        //제조업체 팝업 조회(수요처)
        this.div_search_btn_popup00_onclick = function(params)
        {
        	var param = {
        				autoType:params,
        				searchCode:this.div_search.NA_BZPLC.value,
        				searchText:this.div_search.NA_BZPLC_NM.value
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}

        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("rvopl_trpl","POPUP::POPUP_SRC_RVOPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	if(this.fn_validationCheck()) {
        		//권한사업장 코드
        		var trplC = this.getTrplCode();
        		var na_bizcode = this.div_search.NA_BZPLC.value;
        		if(na_bizcode == null) {
        			trace('all');
        			na_bizcode='all';
        		}
        		var param = "TR_DT="+this.div_search.TR_DT.value
        					+"&ACRV_SBJC="+this.div_search.ACRV_SBJC.value
        					+"&NA_BZPLC="+na_bizcode
        					+"&TRPL_C="+trplC;
        		var strDownUrl = application.gv_server_url+"rest/excel/pds/balance/getArcvOcuList?"+param;
        		excelDownHandler(strDownUrl, this);
        		//var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        		//wbs_dw.set_url(strDownUrl);
        	}
        }

        this.div_search_rdo_is_na_all_onitemchanged = function(obj,e)
        {
        	if(e.postvalue =='one') {
        		this.div_search.NA_BZPLC.set_readonly(false);
        		this.div_search.NA_BZPLC_NM.set_readonly(false);
        		this.div_search.btn_popup.set_enable(true);
        	} else {
        		this.div_search.NA_BZPLC.set_readonly(true);
        		this.div_search.NA_BZPLC_NM.set_readonly(true);
        		this.div_search.btn_popup.set_enable(false);
        	}
        }

        this.btn_print_onclick = function(obj,e)
        {
        	alert("준비중입니다...");
        }

        this.div_search_btn_popup_onclick = function(obj,e)
        {
        	this.div_search_btn_popup00_onclick(true);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_search.Static01.addEventHandler("onclick", this.div_search_Static01_onclick, this);
            this.div_search.TR_DT.addEventHandler("oneditclick", this.div_search_cal_fsrg00_oneditclick, this);
            this.div_search.rdo_is_na_all.addEventHandler("onitemchanged", this.div_search_rdo_is_na_all_onitemchanged, this);
            this.div_search.NA_BZPLC.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.NA_BZPLC_NM.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.btn_popup.addEventHandler("onclick", this.div_search_btn_popup_onclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1140.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
