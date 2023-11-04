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
                this.set_name("VAN_DS_SC_0912");
                this.set_titletext("물류센터 재고현황 일별");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj._setContents("<ColumnInfo><Column id=\"A3\" type=\"STRING\" size=\"256\"/><Column id=\"A8\" type=\"STRING\" size=\"256\"/><Column id=\"A9\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"A1\" type=\"STRING\" size=\"256\"/><Column id=\"A2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"A12\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"A15\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"A30\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"A31\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"A17\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"A32\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"A33\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"A34\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"A35\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"A29\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"A36\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"A4\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NABizPlace", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"SHRT_BZPLNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_TPC\" type=\"string\" size=\"32\"/><Column id=\"BZPL_DTI_TPC\" type=\"string\" size=\"32\"/><Column id=\"BZPL_TPNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_DTI_TPNM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "117", null, this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "74", null, this);
            obj.set_taborder("0");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "14", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("조회일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title03", "absolute", "15", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("37");
            obj.set_text("물류센터");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_date", "absolute", "94", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static12", "absolute", "233", "57", "103", "10", null, null, this.div_search);
            obj.set_taborder("55");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_wrs_chk", "absolute", "414", "10", "132", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_wrs_chk_innerdataset = new Dataset("rdo_wrs_chk_innerdataset", this.div_search.rdo_wrs_chk);
            rdo_wrs_chk_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">구간</Col></Row></Rows>");
            obj.set_innerdataset(rdo_wrs_chk_innerdataset);
            obj.set_taborder("56");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Edit("edt_wrs_c_from", "absolute", "546", "10", "110", "21", null, null, this.div_search);
            obj.set_taborder("57");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_between00", "absolute", "656", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("58");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_wrs_c_to", "absolute", "666", "10", "110", "21", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_nacode", "absolute", "94", "36", "362", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_innerdataset("ds_NABizPlace");
            obj.set_codecolumn("NA_BZPLC");
            obj.set_datacolumn("SHRT_BZPLNM");
            obj.set_displayrowcount("20");
            obj = new Static("sta_title01", "absolute", "333", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("61");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("5");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "78.3%", "10", null, "20", "16.88%", null, this.div_list);
            obj.set_taborder("26");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "42", null, null, "0", "44", this.div_list);
            obj.set_taborder("27");
            obj.set_binddataset("ds_master");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"재고일자\"/><Cell col=\"2\" rowspan=\"2\" text=\"상품코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"4\" rowspan=\"2\" text=\"물류센터코드\"/><Cell col=\"5\" rowspan=\"2\" text=\"물류센터명\"/><Cell col=\"6\" rowspan=\"2\" text=\"물류기능\"/><Cell col=\"7\" rowspan=\"2\" text=\"입수\"/><Cell col=\"8\" colspan=\"3\" text=\"총재고\"/><Cell col=\"11\" colspan=\"5\" text=\"가용재고\"/><Cell col=\"16\" colspan=\"2\" text=\"반품재고\"/><Cell row=\"1\" col=\"8\" text=\"수량\"/><Cell row=\"1\" col=\"9\" text=\"박스\"/><Cell row=\"1\" col=\"10\" text=\"금액\"/><Cell row=\"1\" col=\"11\" text=\"수량\"/><Cell row=\"1\" col=\"12\" text=\"박스\"/><Cell row=\"1\" col=\"13\" text=\"금액\"/><Cell row=\"1\" col=\"14\" text=\"일평균 출고량\"/><Cell row=\"1\" col=\"15\" text=\"예상 소진일자\"/><Cell row=\"1\" col=\"16\" text=\"수량\"/><Cell row=\"1\" col=\"17\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:A3\"/><Cell col=\"2\" text=\"bind:A8\"/><Cell col=\"3\" text=\"bind:A9\"/><Cell col=\"4\" text=\"bind:A1\"/><Cell col=\"5\" text=\"bind:A2\"/><Cell col=\"6\" text=\"bind:A4\"/><Cell col=\"7\" text=\"bind:A12\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:A15\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:A30\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:A31\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:A17\"/><Cell col=\"12\" displaytype=\"number\" text=\"bind:A32\"/><Cell col=\"13\" displaytype=\"number\" text=\"bind:A33\"/><Cell col=\"14\" displaytype=\"number\" text=\"bind:A34\"/><Cell col=\"15\" text=\"bind:A35\"/><Cell col=\"16\" displaytype=\"number\" text=\"bind:A29\"/><Cell col=\"17\" displaytype=\"number\" text=\"bind:A36\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 317, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_0900");
            		p.set_titletext("물류센터 재고현황 일별");

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
        this.addIncludeScript("VAN_DS_SC_0912.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0912.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
           
        	//권한사업장 콤보박스 변경시 농협사업장 조회
           this.div_auth.setFunctionName("fn_afterCall");	
        };
        this.fn_afterFormOnload = function()
        {
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.fn_getNABizPlace(application.gv_glnCode);
        	
        	this.div_search.cal_date.set_value(this.gfn_today("yyyyMMdd"));
        	
        }

        //권한사업장 콤보박스 변경시 농협사업장 조회
        this.fn_afterCall = function(sVal)
        {
        	this.fn_getNABizPlace(sVal);
        }

        //물류센터 조회
        this.fn_getNABizPlace = function(v_nacode)
        {
        	var nacode = v_nacode;
        	var search_type = "added";
        	
        	var param = "search_type="+search_type+
        				" splr_na_trpl_c="+nacode;
        	
        	trace("##### fn_getNABizPlace PARAM ################"+param);
        	
        	var sSvcID        = "getNABizPlace";//통신아이디
        	var sURL          = "svc::rest/common/getNABizPlace";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_NABizPlace=data";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.search = function()
        {
        	this.ds_master.clearData();
        	
        	if(!this.validation()){return};
        	
        	var PHD_NA_BZPLC = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value); 					//물류센터	
        	var WRS_P = this.gfn_nullToEmpty(this.div_search.rdo_wrs_chk.value);						//상품코드 구분(0:전체 1:구간)
        	var WRS_C_FM_PI = "";
        	var WRS_C_FM_PO = "";
        	var PHD_STPL_DT = this.div_search.cal_date.value;
        	
        	if(WRS_P == 0){		
        	}else{
        		WRS_C_FM_PI = this.gfn_nullToEmpty(this.div_search.edt_wrs_c_from.value);				//구간시작
        		WRS_C_FM_PO = this.gfn_nullToEmpty(this.div_search.edt_wrs_c_to.value);					//구간종료
        	}	
        				
        	var params = "PHD_NA_BZPLC="+PHD_NA_BZPLC
        				+" WRS_P="+WRS_P
        				+" WRS_C_FM_PI="+WRS_C_FM_PI
        				+" WRS_C_FM_PO="+WRS_C_FM_PO
        				+" PHD_STPL_DT="+PHD_STPL_DT
        				+" TRPL_C="+this.getTrplCode();
        				
        	trace("##### fn_search PARAM ################"+params);
        	
        	var sSvcID        = "centerStock_Daily";//통신아이디
        	var sURL          = "svc::rest/stock/centerStock_Daily";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_master=ds_master";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {

        	trace("fn_callback");

        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        	
        		if(svcID == "centerStock_Daily"){											
        			if(this.ds_M.rowcount > 0){
        				trace("centerStock_WRS");
        				trace(this.ds_M.saveXML());
        			
        			}else{	
        				trace("centerStockWRS_NULL");
        			}
        		};
        		
        		if(svcID == "getNABizPlace") {
        			
        			if(this.ds_NABizPlace.rowcount != 0){
        			
        				for (var i=0; i < this.ds_NABizPlace.rowcount ;i++)			
        				{
        					/*
        					if (this.ds_NABizPlace.getColumn(i,0) == '8808983000015'){					
        						this.ds_NABizPlace.deleteRow(i);					
        					}
        					*/
        						
        					this.ds_NABizPlace.setColumn(i,"SHRT_BZPLNM","["+this.ds_NABizPlace.getColumn(i,0)+"] "+this.ds_NABizPlace.getColumn(i,1));
        				}

        				if (this.ds_NABizPlace.insertRow(0) != -1){
        					this.ds_NABizPlace.setColumn(0,"NA_BZPLC","");
        					this.ds_NABizPlace.setColumn(0,"SHRT_BZPLNM","- 선택 -");
        				};
        			
        				this.div_search.cbo_nacode.set_index(0);
        			}
        		};
        	}
        }

        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.div_search_cbo_bzpl_list_onitemchanged = function(obj,e)
        {
        	this.div_search.edt_data00.set_value(this.div_search.cbo_bzpl_list.value);
        	this.div_search.edt_data01.set_value(this.div_search.cbo_bzpl_list.text);
        }

        //유효성 체크
        this.validation = function()
        {
        	if(this.gfn_isNull(this.div_search.cbo_nacode.value)){
        		
        		alert("물류센터를 선택하세요.");
        		return false;
        	}	
        	return true;
        }

        //상품코드 라디오 버튼
        this.div_search_rdo_wrs_chk_onitemchanged = function(obj,e)
        {
        	//전체
        	if(this.div_search.rdo_wrs_chk.value=='0'){
        		this.div_search.edt_wrs_c_from.set_value('');
        		this.div_search.edt_wrs_c_to.set_value('');		
        	}
        }

        
        this.btn_excel_onclick = function(obj,e)
        {

        	//this.ds_master.clearData();
        	
        	if(!this.validation()){return};
        	
        	var PHD_NA_BZPLC = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value); 					//물류센터	
        	var WRS_P = this.gfn_nullToEmpty(this.div_search.rdo_wrs_chk.value);						//상품코드 구분(0:전체 1:구간)
        	var WRS_C_FM_PI = "";
        	var WRS_C_FM_PO = "";
        	var PHD_STPL_DT = this.div_search.cal_date.value;
        	
        	if(WRS_P == 0){		
        	}else{
        		WRS_C_FM_PI = this.gfn_nullToEmpty(this.div_search.edt_wrs_c_from.value);				//구간시작
        		WRS_C_FM_PO = this.gfn_nullToEmpty(this.div_search.edt_wrs_c_to.value);					//구간종료
        	}	
        				
        	var params = "PHD_NA_BZPLC="+PHD_NA_BZPLC
        				+"&WRS_P="+WRS_P
        				+"&WRS_C_FM_PI="+WRS_C_FM_PI
        				+"&WRS_C_FM_PO="+WRS_C_FM_PO
        				+"&PHD_STPL_DT="+PHD_STPL_DT
        				+"&TRPL_C="+this.getTrplCode();
        	
        	//params = encodeURI(encodeURI(params));
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelCenterStock_Daily?"+params, this);
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.search, this);
            this.div_search.cal_date.addEventHandler("oneditclick", this.div_search_cal_date_oneditclick, this);
            this.div_search.rdo_wrs_chk.addEventHandler("onitemchanged", this.div_search_rdo_wrs_chk_onitemchanged, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0912.xfdl");
        this.loadPreloadList();
       
    };
}
)();
