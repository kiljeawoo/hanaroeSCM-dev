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
                this.set_name("VAN_DS_SC_1640");
                this.set_titletext("할인쿠폰거래사무소조회");
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
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CPN_C_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_CPN_KDC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"13\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"13\"/></ColumnInfo>");
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
            obj.set_text("조회일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("START_DT", "absolute", "89", "13", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_dateformat("yyyyMMdd");
            obj = new Static("Static131", "absolute", "193", "13", "10", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("END_DT", "absolute", "206", "13", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_dateformat("yyyyMMdd");
            obj = new Combo("CPN_KDC", "absolute", "397", "13", "178", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.set_innerdataset("@ds_CPN_KDC");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("Static03", "absolute", "324", "13", "107", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("쿠폰종류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_is_na_all", "absolute", "92", "42", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_is_na_all_innerdataset = new Dataset("rdo_is_na_all_innerdataset", this.div_search.rdo_is_na_all);
            rdo_is_na_all_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">one</Col><Col id=\"datacolumn\">사업장</Col></Row></Rows>");
            obj.set_innerdataset(rdo_is_na_all_innerdataset);
            obj.set_taborder("47");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("all");
            obj.set_direction("vertical");
            obj = new Edit("NA_BZPLC", "absolute", "261", "42", "132", "21", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("NA_BZPLC_NM", "absolute", "396", "42", "152", "21", null, null, this.div_search);
            obj.set_taborder("49");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            obj.style.set_background("#ffffffff");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "551", "42", "21", "21", null, null, this.div_search);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"110\"/><Column size=\"190\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"사업장\"/><Cell col=\"3\" text=\"사업자번호\"/><Cell col=\"4\" text=\"대표자명\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"우편번호\"/><Cell col=\"7\" text=\"기본주소\"/><Cell col=\"8\" text=\"상세주소\"/><Cell col=\"9\" text=\"쿠폰건수\"/><Cell col=\"10\" text=\"상품건수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:TRPL_ABR_NM\" wordwrap=\"char\"/><Cell col=\"3\" text=\"bind:BIZ_NUMBER\"/><Cell col=\"4\" text=\"bind:REPMNM\"/><Cell col=\"5\" text=\"bind:TEL_NO\"/><Cell col=\"6\" text=\"bind:NO_ZIP\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DONGUP\" wordwrap=\"char\"/><Cell col=\"8\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DONGBW\" wordwrap=\"char\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:NA_CPN_C_CNT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:NA_WRS_C_CNT\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "76", null, this);
            obj.set_taborder("10");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
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
            		p.set_titletext("할인쿠폰거래사무소조회");

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
        this.addIncludeScript("VAN_DS_SC_1640.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1640.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	this.div_list.grd_main.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	var todays = this.gfn_today('yyyyMMdd');
        	this.div_search.START_DT.set_value(this.gfn_minusDate(todays,7));
        	this.div_search.END_DT.set_value(todays);
        	
        	var param = [  
        		{code:"CPN_KDC", dsName:"ds_CPN_KDC", selecttype:"S"},
        	];
        	this.gfn_setCommonCode(param);
        	
        }

        this.fn_commonAfterOnload= function()
        {
        	this.div_search.CPN_KDC.set_index(0);
        }

        this.btn_search00_onclick = function(obj,e){
        	
        	if(this.fn_validationCheck()) {
        		this.ds_main.clearData();
        		//권한사업장 코드
        		var trplC = this.getTrplCode();
        		var na_bizcode = this.div_search.NA_BZPLC.value;
        		if(na_bizcode == null) {
        			trace('all');
        			na_bizcode='all';
        		}
        		var param = "START_DT="+this.div_search.START_DT.value
        					+" END_DT="+this.div_search.END_DT.value
        					+" NA_BZPLC="+na_bizcode
        					+" CPN_KDC="+this.div_search.CPN_KDC.value;
        		var sSvcID        = "getCouponBizPlcList";
        		var sURL          = "svc::rest/pds/coupon/getCouponBizPlcList";
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
        		if(svcID == "getCouponBizPlcList"){
        			if(this.ds_main.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}else{							
        			}			
        		}	
        	}
        	
        }

        this.fn_validationCheck = function(){
        	if(this.div_search.CPN_KDC.index == 0){
        		this.alert('조회할 쿠폰종류를 선택 하세요.');	
        		return false;
        	}
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

        this.div_search_btn_popup_onclick = function(obj,e)
        {
        	
        	var oArg = "";
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","POPUP::POPUP_SRC_RVOPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.div_search_rdo_is_na_all_onitemchanged = function(obj,e)
        {
        	if(e.postvalue =='one') {
        		this.div_search.btn_popup.set_enable(true);
        	} else {
        		this.div_search.btn_popup.set_enable(false);
        	}
        }

        this.btn_print_onclick = function(obj,e)
        {
        		if(!this.fn_validationCheck()) {
        		return;
        	}
        		
        	var trplC = this.getTrplCode();
        	var na_bizcode = this.div_search.NA_BZPLC.value;
        	if(na_bizcode == null) {
        		trace('all');
        		na_bizcode='all';
        	}

        	var searchText = "[조회기간]:"+this.div_search.START_DT.value+" ~ "+this.div_search.END_DT.value;
        	
        	trace(searchText);
        	
        	var ozParam = {
        		sId: 'VAN_DS_SC_1640',
        		sUrl: '/rest/oz/pds/coupon/getCouponBizPlcList',
        		paramType: 'param',
        		sParam:{
        			TRPL_C_TEXT:searchText,
        			START_DT:this.gfn_nullToEmpty(this.div_search.START_DT.value),
        			END_DT:this.gfn_nullToEmpty(this.div_search.END_DT.value),
        			CPN_KDC:this.gfn_nullToEmpty(this.div_search.CPN_KDC.value),
        			NA_BZPLC:na_bizcode
        		}
        	};
        	this.ozViewer(ozParam);	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.div_search.Static01.addEventHandler("onclick", this.div_search_Static01_onclick, this);
            this.div_search.START_DT.addEventHandler("oneditclick", this.div_search_cal_fsrg00_oneditclick, this);
            this.div_search.Static131.addEventHandler("onclick", this.div_list_Static131_onclick, this);
            this.div_search.Static03.addEventHandler("onclick", this.div_search_Static03_onclick, this);
            this.div_search.rdo_is_na_all.addEventHandler("onitemchanged", this.div_search_rdo_is_na_all_onitemchanged, this);
            this.div_search.NA_BZPLC.addEventHandler("onkeyup", this.div_search_edt_na_bzplc_code_onkeyup, this);
            this.div_search.btn_popup.addEventHandler("onclick", this.div_search_btn_popup_onclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1640.xfdl");
        this.loadPreloadList();
       
    };
}
)();
