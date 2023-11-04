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
                this.set_name("OMG_DS_SC_1630");
                this.set_classname("pattern_01");
                this.set_titletext("농협공지사항(목록)");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_notice", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_SQNO\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ST_DTM\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ED_DTM\" type=\"string\" size=\"32\"/><Column id=\"OFANC_TINM\" type=\"string\" size=\"32\"/><Column id=\"OFANC_CNTN\" type=\"string\" size=\"32\"/><Column id=\"OFANC_PRU_NT\" type=\"string\" size=\"32\"/><Column id=\"BBRD_DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"CKNL_DSC\" type=\"string\" size=\"32\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_DT\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_USER\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_DT\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_USER\" type=\"string\" size=\"32\"/><Column id=\"REPALY\" type=\"STRING\" size=\"256\"/><Column id=\"REIMG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"OFANC_TINM\">시스템 점검 안내(2015.04.15 19:00~2..</Col><Col id=\"BLTN_ST_DTM\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 20</Col><Col id=\"REIMG\"/></Row><Row><Col id=\"OFANC_TINM\">국세청전송중단안내(2015.02.17~02.23)</Col><Col id=\"BLTN_ST_DTM\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 60</Col><Col id=\"REIMG\">URL('img::btn_calMonthNext.png')</Col></Row><Row><Col id=\"OFANC_TINM\">개인정보취급방침 개정 안내</Col><Col id=\"BLTN_ST_DTM\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 20</Col></Row><Row><Col id=\"OFANC_TINM\">3월 서비스이용내역 발송 안내</Col><Col id=\"BLTN_ST_DTM\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 60</Col><Col id=\"REIMG\">URL('img::btn_calMonthNext.png')</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div02", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("7");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "302", null, null, "29", "258", "0", this.Div02);
            obj.set_taborder("9");
            obj.set_url("common::pagingBTN.xfdl");
            obj.set_text("Div03");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_write", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("10");
            obj.set_text("쓰기");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("11");
            obj.set_url("common::location.xfdl");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "788", "0", "15", "490", null, null, this);
            obj.getSetter("taborder").set("12");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_search", "absolute", "15", "10", "348", "21", null, null, this.div_search);
            obj.set_taborder("96");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0", "71", null, null, "15", "29", this);
            obj.set_taborder("15");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "42", null, null, "0", "1", this.Div03);
            obj.set_taborder("8");
            obj.set_binddataset("ds_notice");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"45\"/><Column size=\"497\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"No.\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"날짜\"/><Cell col=\"4\" text=\"조회수\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:OFANC_TINM\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:BLTN_ST_DTM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:OFANC_PRU_NT\"/></Band></Format></Formats>");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "922", "1", "56", "15", null, null, this.Div03);
            obj.getSetter("taborder").set("9");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "922", "37", "56", "5", null, null, this.Div03);
            obj.getSetter("taborder").set("10");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1", "30", "15", "42", null, null, this);
            obj.getSetter("taborder").set("16");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "72", "56", "41", null, null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");
            		p.set_text("Div02");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("농협공지사항(목록)");

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
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_1630.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1630.xfdl", function() {
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
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분
           this.div_search.edt_search.set_value("");
           this.fn_retrieveNoticeList();
        }

        
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveNoticeList = function()
        {
        	var sSvcID        = "retrieveNoticeList";
        	var sURL          = "svc::rest/portal/retrieveNoticeList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_notice=ds_notice";	
        	var sArgument     = "title="+this.div_search.edt_search.value;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0) //에러
         	{
        		trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
         	}
         	else 
         	{
        		switch(svcID)
        		{
        			case "retrieveNoticeList":
        				application.trace(this.ds_notice.saveXML());
        				break;
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_search":	
        			this.fn_retrieveNoticeList();
        			break;
        		case "btn_write":
        			this.go("OMG.PT::OMG_DS_SC_1631.xfdl");
        			break;
        		case "btn_delete":
        			break;
        	}
        }

        this.grd_oncellclick = function(obj,e)
        { 
        	this.fn_openNoticeDetail(e.row);
        	//this.go("OMG.PT::OMG_DS_SC_1631.xfdl");
        }

        this.div_search_edt_search_onkeydown = function(obj,e)
        {
        	if(e.keycode = '13')
        	{
        		this.fn_retrieveNoticeList();
        	}
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
         
        this.fn_openNoticeDetail = function(nRow)
        {
        	var oArg = {noticeSeq:this.ds_notice.getColumn(nRow, "BBRD_SQNO")};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","OMG.PT::OMG_DS_SC_1632.xfdl",oArg,sOption,sPopupCallBack);	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_delete.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_write.addEventHandler("onclick", this.btn_onclick, this);
            this.div_search.edt_search.addEventHandler("onkeydown", this.div_search_edt_search_onkeydown, this);
            this.Div03.Grid01.addEventHandler("oncellclick", this.grd_oncellclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1630.xfdl");
        this.loadPreloadList();
       
    };
}
)();
