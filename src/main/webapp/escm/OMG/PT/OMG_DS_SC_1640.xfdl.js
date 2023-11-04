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
                this.set_name("OMG_DS_SC_1640");
                this.set_classname("pattern_01");
                this.set_titletext("eSCM공지사항(목록)");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bbs", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"BLBD_ID\" type=\"string\" size=\"32\"/><Column id=\"BBRD_ID\" type=\"string\" size=\"32\"/><Column id=\"BBRD_TI\" type=\"string\" size=\"32\"/><Column id=\"BBRD_CNTN\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ST_DTM\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ED_DTM\" type=\"string\" size=\"32\"/><Column id=\"CKNL_DSC\" type=\"string\" size=\"32\"/><Column id=\"BBRD_DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"BBRD_INQ_CN\" type=\"string\" size=\"32\"/><Column id=\"BBRD_RGMNM\" type=\"string\" size=\"32\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN\" type=\"string\" size=\"32\"/><Column id=\"LSRG_DTM\" type=\"string\" size=\"32\"/><Column id=\"LSRGMN\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BBRD_TI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_copy", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ID\" type=\"string\" size=\"32\"/><Column id=\"DOCUMENT_ID\" type=\"string\" size=\"32\"/><Column id=\"NOTICE_ED_DT\" type=\"string\" size=\"32\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"DOC_START_DT\" type=\"string\" size=\"32\"/><Column id=\"DOC_END_DT\" type=\"string\" size=\"32\"/><Column id=\"NOTICE_YN\" type=\"string\" size=\"32\"/><Column id=\"DELETE_YN\" type=\"string\" size=\"32\"/><Column id=\"COUNT\" type=\"string\" size=\"32\"/><Column id=\"USER_NAME\" type=\"string\" size=\"32\"/><Column id=\"PARENT_DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_DT\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_USER\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_DT\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_USER\" type=\"string\" size=\"32\"/><Column id=\"REPALY\" type=\"STRING\" size=\"256\"/><Column id=\"REIMG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TITLE\">시스템 점검 안내(2015.04.15 19:00~2..</Col><Col id=\"DOCUMENT_ID\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 20</Col><Col id=\"REIMG\"/></Row><Row><Col id=\"TITLE\">국세청전송중단안내(2015.02.17~02.23)</Col><Col id=\"DOCUMENT_ID\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 60</Col><Col id=\"REIMG\">URL('img::btn_calMonthNext.png')</Col></Row><Row><Col id=\"TITLE\">개인정보취급방침 개정 안내</Col><Col id=\"DOCUMENT_ID\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 20</Col></Row><Row><Col id=\"TITLE\">3월 서비스이용내역 발송 안내</Col><Col id=\"DOCUMENT_ID\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 60</Col><Col id=\"REIMG\">URL('img::btn_calMonthNext.png')</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"cccc\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">Y</Col></Row><Row><Col id=\"Column1\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div02", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("7");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "38.2%", null, null, "29", "32.74%", "0", this.Div02);
            obj.set_taborder("9");
            obj.set_url("common::pagingBTN.xfdl");
            obj.set_text("Div03");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "0", "41", "21", "120", null, this);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_write", "absolute", null, "0", "41", "21", "76", null, this);
            obj.set_taborder("10");
            obj.set_text("쓰기");
            obj.set_cssclass("btn_WF_CRUD");
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

            obj = new Combo("Combo00", "absolute", "262", "5", "162", "23", null, null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">201506090001</Col><Col id=\"datacolumn\">eSCM</Col></Row><Row><Col id=\"codecolumn\">201506090002</Col><Col id=\"datacolumn\">자료실</Col></Row><Row><Col id=\"codecolumn\">201506090003</Col><Col id=\"datacolumn\">잘의응답</Col></Row><Row><Col id=\"codecolumn\">201506090004</Col><Col id=\"datacolumn\">고객의소리</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("18");
            obj.set_text("eSCM");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj.set_value("1");

            obj = new Grid("grd_bbs", "absolute", "0", "113", null, null, "15", "29", this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_bbs");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"45\" band=\"left\"/><Column size=\"497\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"none\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"작성자\"/><Cell col=\"4\" text=\"날짜\"/><Cell col=\"5\" text=\"조회수\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" style=\"padding:EXPR(comp.parent.gfn_isNull(PRET_BBRD_ID)?'0 0 0 10':'0 0 0 60');backgroundimage:EXPR(comp.parent.gfn_isNull(PRET_BBRD_ID)?'':'img::btn_calMonthNext.png');\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:BBRD_TI\"/><Cell col=\"3\" text=\"bind:BBRD_RGMNM\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:FSRG_DTM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 10 0 10;\" text=\"bind:BBRD_INQ_CN\"/></Band></Format></Formats>");
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
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("eSCM공지사항(목록)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.edt_search","value","ds_condition","BBRD_TI");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_1640.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1640.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        const E_SCM = 201506090001;
        const REFERENCE_ROOM = 201506090002;
        const QUESTION_N_ANSWER = 201506090003;
        const VOICE_OF_CUSTOMER = 201506090004;

        this.bbsType = E_SCM;
        this.noticeYn = 'N';
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
        	this.Combo00.set_index(0);//TempCode
        	this.bbsType = E_SCM;//TempCode
        	
        	this.setType();
        	this.setButtonVisible();
        	
           this.fn_getBbsList();
        }

        
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_getBbsList = function()
        {
        	var sSvcID        = "retrieveBbsList";
        	var sURL          = "svc::rest/portal/retrieveBbsList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bbs=ds_bbs";	
        	var sArgument     = "title="+this.div_search.edt_search.value + " boardId="+ this.Combo00.value + " noticeYn=" + this.noticeYn;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_deleteBbs = function()
        {
        	var sSvcID        = "deleteBbs";
        	var sURL          = "svc::rest/portal/deleteBbs";
        	var sInDatasets   = "ds_bbs=ds_copy";
        	var sOutDatasets  = "";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
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
        			case "retrieveBbsList":
        				this.ds_copy.copyData(this.ds_bbs);
        				this.ds_copy.clearData();
        				break;
        				
        			case "deleteBbs":
        				alert("삭제되었습니다.");
        				this.fn_getBbsList();
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
        			this.fn_getBbsList();
        			break;
        		case "btn_write":
        			this.go("OMG.PT::OMG_DS_SC_1642.xfdl");
        			break;
        		case "btn_delete":
        			this.ds_copy.clearData();
        			for(var i = 0 ; i < this.ds_bbs.rowcount ; i++)
        			{
        				if(this.ds_bbs.getColumn(i, "ISCHECKED") == 1)
        				{
        					this.ds_copy.addRow();
        					this.ds_copy.copyRow(this.ds_copy.rowposition, this.ds_bbs, i);
        				}
        			}
        			
        			if(this.ds_copy.rowcount > 0)
        			{
        				this.fn_deleteBbs();
        			}
        			else
        			{
        				alert("선택해주세요.");
        			}
        			
        				
        			break;
        	}
        }

        this.grd_oncellclick = function(obj,e)
        {
        	if(e.cell != 0)
        	{
        		this.fn_openBbsNotice(e.row);
        	}
        }

        this.div_search_edt_search_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.fn_getBbsList();
        	}
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_openBbsNotice = function(nRow)
        {
        	var oArg = {boardId:this.ds_bbs.getColumn(nRow, "BLBD_ID"), documentId:this.ds_bbs.getColumn(nRow, "BBRD_ID")};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","OMG.PT::OMG_DS_SC_1643.xfdl",oArg,sOption,sPopupCallBack);	
        }

        
        this.Combo00_onitemchanged = function(obj,e)//tempCode
        {
        	this.bbsType = nexacro.toNumber(e.postvalue);
        	this.setType();
        	this.fn_getBbsList();
        }

        this.setType = function()
        {
        	switch(this.bbsType)
        	{
        		case E_SCM:
        			this.noticeYn = 'Y';	
        			this.grd_bbs.setFormatColProperty(0, "size", 0);
        			this.grd_bbs.setFormatColProperty(3, "size", 0);
        			break;
        		case REFERENCE_ROOM:
        			this.grd_bbs.setFormatColProperty(0, "size", 0);
        			this.grd_bbs.setFormatColProperty(3, "size", 0);
        			this.noticeYn = 'N';	
        			break;
        		case QUESTION_N_ANSWER:
        		case VOICE_OF_CUSTOMER:
        			this.noticeYn = 'N';	
        			this.grd_bbs.setFormatColProperty(0, "size", 0);
        			this.grd_bbs.setFormatColProperty(3, "size", 150);
        			break;
        	}
        }

        this.setButtonVisible = function()
        {
        	this.btn_delete.set_visible(false);
        // 	switch()
        // 	{
        // 	}
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
            this.Combo00.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.grd_bbs.addEventHandler("oncellclick", this.grd_oncellclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1640.xfdl");
        this.loadPreloadList();
       
    };
}
)();
