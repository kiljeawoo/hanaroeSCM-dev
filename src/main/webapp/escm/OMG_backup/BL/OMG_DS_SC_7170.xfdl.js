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
                this.set_name("OMG_DS_SC_7170");
                this.set_titletext("빌링원천조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_billSrcInq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">ORDERS</Col><Col id=\"data\">주문서</Col></Row><Row><Col id=\"code\">ORDCHG</Col><Col id=\"data\">주문변경서</Col></Row><Row><Col id=\"code\">ORDRES</Col><Col id=\"data\">주문예정서</Col></Row><Row><Col id=\"code\">DESRSP</Col><Col id=\"data\">배송응답서</Col></Row><Row><Col id=\"code\">CONADV</Col><Col id=\"data\">검수확정서</Col></Row><Row><Col id=\"code\">CONRET</Col><Col id=\"data\">반품확정서</Col></Row><Row><Col id=\"code\">SILRPT</Col><Col id=\"data\">마트별공급실적</Col></Row><Row><Col id=\"code\">SLSRPT</Col><Col id=\"data\">판매정보</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("68");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "433", "10", "75", "21", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("날짜");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comnum", "absolute", "88", "10", "96", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comname", "absolute", "187", "10", "154", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_comname", "absolute", "344", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "1.91%", "10", null, "21", "89.06%", null, this.div_search);
            obj.set_taborder("25");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_search", "absolute", "495", "10", "92", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_value("20150504");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static07", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("72");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "71", null, null, "15", "-1", this);
            obj.set_taborder("81");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "30%", "0", null, "12", "30%", null, this.Div02);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "42", null, null, "0", "1", this.Div02);
            obj.set_taborder("2");
            obj.set_binddataset("ds_billSrcInq");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_summarytype("default");
            obj.set_autoenter("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"0\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"날짜\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" text=\"레벨\"/><Cell col=\"4\" text=\"문서명\"/><Cell col=\"5\" text=\"건수\"/><Cell col=\"6\" text=\"라인수\"/><Cell col=\"7\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" style=\"align: ;\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" text=\"bind:LS_RMS_DT\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:COM_NAME\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:DOC_NAME\" combodataset=\"ds_code\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:CNT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LINE_CN\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EDI_SIZE\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(CNT)&quot;)\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "72", "56", "41", null, null, this);
            obj.set_taborder("87");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0.12%", "30", null, "42", "98.01%", null, this);
            obj.set_taborder("88");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("103");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 420, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("81");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("빌링원천조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","div_search.cal_search","value","ds_condition","STARTDT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7170.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7170.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        // Form Onload: DataSet 로딩 후 실행
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통 
        }

        // gfn_setInitForm 처리 후 호출(CallBack)할 함수
        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분
           this.div_search.cal_search.set_value(this.gfn_today("yyyyMMdd"));
           this.Div02.Grid01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 콜백 함수
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	trace("svcID:" + svcID + " ErrorCode:" + ErrorCode);
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	else
        	{
        		switch(svcID)
        		{
        			case "retrieveBillSrcInq":
        				this.ds_billSrcInq.addColumn("COM_NAME");
        				for(var i = 0 ; i < this.ds_billSrcInq.rowcount ; i++)
        				{
        					this.ds_billSrcInq.setColumn(i, "COM_NAME", this.div_search.Edit_comname.value);
        				}
        				break;
        		}
        	}	
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        // 조회조건 영역 펼치기, 접기
        this.Div02_Button75_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.Div02);
        }

        // 오납 조회
        this.btn_search_onclick = function(obj,e)
        {
        	if(this.fn_checkValication())
        	{
        		var sParams			= "NA_TRPL_C=" + this.div_search.Edit_comnum.value
        							+ " searchDate=" + this.div_search.cal_search.value
        							;
        		var sSvcID			= "retrieveBillSrcInq";
        		var sURL			= "svc::rest/bl/rvanm/retrieveBillSrcInq";
        		var sInDatasets		= "";
        		var sOutDatasets	= "ds_billSrcInq=ds_billSrcInq";
        		var sArgument		= sParams;
        		var sCallbackFunc	= "fn_callBack";
        		var sTranType		= "S"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        	
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	
        this.fn_checkValication = function()
        {
        	if(this.gfn_isNull(this.div_search.Edit_comnum.value))
        	{
        		alert("업체 조회를 해주십시오.");
        		return false;
        	}
        	return true;
        }
        // 업체 조회
        this.div_search_btn_comname_onclick = function(obj,e)
        {
        	var oArg = "";
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("trplSearchPopup","OMG.BL::OMG_DS_SC_7230_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        // 팝업작업 후 진행함수
        this.fn_popupAfter = function(strId,strVal)
        {
        	// trace(" strId : " + strId + " strVal : " + strVal);
        	if(strVal != ''){
        		var paramsArr = strVal.split(",");
        	
        		if(strId == "trplSearchPopup"){
        			this.div_search.Edit_comnum.set_value(paramsArr[0]);
        			this.div_search.Edit_comname.set_value(paramsArr[1]);
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.btn_comname.addEventHandler("onclick", this.div_search_btn_comname_onclick, this);
            this.div_search.Static05.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_search.cal_search.addEventHandler("onkeydown", this.Calendar_onkeydown, this);
            this.div_search.cal_search.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.Div02.Button75.addEventHandler("onclick", this.Div02_Button75_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7170.xfdl");
        this.loadPreloadList();
       
    };
}
)();
