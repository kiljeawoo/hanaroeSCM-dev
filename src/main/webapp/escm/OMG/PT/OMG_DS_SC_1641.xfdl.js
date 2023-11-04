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
                this.set_name("OMG_DS_SC_1641");
                this.set_classname("pattern_01");
                this.set_titletext("eSCM공지사항(보기)");
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
            obj._setContents("<ColumnInfo><Column id=\"BLBD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_TI\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ST_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ED_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CKNL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_INQ_CN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_RGMNM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN\" type=\"STRING\" size=\"256\"/><Column id=\"LSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSRGMN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BLBD_ID\">1</Col><Col id=\"BBRD_ID\">가나다라마바</Col><Col id=\"BBRD_TI\">20150202</Col><Col id=\"BBRD_CNTN\">200243</Col><Col id=\"BLTN_ST_DTM\">가나다라마바아자</Col><Col id=\"BLTN_ED_DTM\">ABC123456789</Col><Col id=\"CKNL_DSC\">가나다라마바아자</Col><Col id=\"BBRD_DEL_YN\">가나다라마바아자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bbsList", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"BLBD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_TI\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ST_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ED_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CKNL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_INQ_CN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_RGMNM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN\" type=\"STRING\" size=\"256\"/><Column id=\"LSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSRGMN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHECK\">1</Col><Col id=\"BLBD_ID\">가나다라마바</Col><Col id=\"BBRD_ID\">20150202</Col><Col id=\"BBRD_TI\">200243</Col><Col id=\"BBRD_CNTN\">가나다라마바아자</Col><Col id=\"BLTN_ST_DTM\">ABC123456789</Col><Col id=\"BLTN_ED_DTM\">가나다라마바아자</Col><Col id=\"CKNL_DSC\">가나다라마바아자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_file", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BLBD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN\" type=\"STRING\" size=\"256\"/><Column id=\"LSRG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_01", "absolute", "109", "85", null, "29", "15", null, this);
            obj.getSetter("taborder").set("136");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file", "absolute", "109", "85", null, "29", "15", null, this);
            obj.set_taborder("152");
            obj.set_binddataset("ds_file");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"580\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"29\"/></Rows><Band id=\"body\"><Cell colspan=\"3\"><Cell style=\"align:left;selectbackground:#ffffffff;\" text=\"bind:APDFLNM\"/><Cell col=\"1\" displaytype=\"button\" edittype=\"button\" style=\"selectbackground:#ffffffff;\" text=\"저장\"/><Cell col=\"2\" displaytype=\"button\" style=\"selectbackground:#ffffffff;\" text=\"삭제\"/></Cell></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("105");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "-18", "15", "490", null, null, this);
            obj.getSetter("taborder").set("107");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "92.53%", "21", null, "8", "1.87%", null, this);
            obj.getSetter("taborder").set("108");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_modify", "absolute", null, "0", "41", "21", "103", null, this);
            obj.set_taborder("132");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "0", "41", "21", "147", null, this);
            obj.set_taborder("133");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("134");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("st_file", "absolute", "0", "85", "110", "29", null, null, this);
            obj.getSetter("taborder").set("135");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "376", "366", null, "10", "328", null, this);
            obj.getSetter("taborder").set("137");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "666", "21", null, "8", "34", null, this);
            obj.getSetter("taborder").set("138");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "647", "29", null, "29", "15", null, this);
            obj.getSetter("taborder").set("139");
            obj.set_text("2015-04-23 10:11:11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "109", "29", "430", "29", null, null, this);
            obj.getSetter("taborder").set("140");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "29", "110", "29", null, null, this);
            obj.getSetter("taborder").set("141");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "538", "29", "110", "29", null, null, this);
            obj.getSetter("taborder").set("142");
            obj.set_text("날짜");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("st_boarder", "absolute", "0", "113", null, null, "15", "0", this);
            obj.getSetter("taborder").set("147");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "647", "57", null, "29", "15", null, this);
            obj.getSetter("taborder").set("143");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "57", "110", "29", null, null, this);
            obj.getSetter("taborder").set("144");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "538", "57", "110", "29", null, null, this);
            obj.getSetter("taborder").set("145");
            obj.set_text("조회수");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "109", "57", "430", "29", null, null, this);
            obj.getSetter("taborder").set("146");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "262", "5", "162", "23", null, null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">201506090001</Col><Col id=\"datacolumn\">eSCM</Col></Row><Row><Col id=\"codecolumn\">201506090002</Col><Col id=\"datacolumn\">자료실</Col></Row><Row><Col id=\"codecolumn\">201506090003</Col><Col id=\"datacolumn\">잘의응답</Col></Row><Row><Col id=\"codecolumn\">201506090004</Col><Col id=\"datacolumn\">고객의소리</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("149");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Combo("Combo01", "absolute", "434", "5", "168", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("150");
            obj.set_innerdataset("@ds_bbsList");
            obj.set_codecolumn("BBRD_ID");
            obj.set_datacolumn("BBRD_TI");

            obj = new TextArea("txt_content", "absolute", "16", "129", null, null, "31", "16", this);
            obj.set_taborder("148");
            obj.set_value("가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사\r\n");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.set_cssclass("txt_WF_file");
            obj.getSetter("mask").set("###,###");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reply", "absolute", null, "0", "41", "21", "59", null, this);
            obj.set_taborder("151");
            obj.set_text("답글");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("eSCM공지사항(보기)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item11","st_01","text","ds_bbs","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Static12","text","ds_bbs","LSRG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Static13","text","ds_bbs","BBRD_TI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Static16","text","ds_bbs","BBRD_INQ_CN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Static19","text","ds_bbs","BBRD_RGMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","txt_content","text","ds_bbs","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","txt_content","value","ds_bbs","BBRD_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","OMG_DS_SC_1641","","ds_bbs","");
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
        this.addIncludeScript("OMG_DS_SC_1641.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1641.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        //this.objRtnArr = new Array(2); //팝업창 close시 전달할 값을 위한 배열 선언
        this.boardId = "";
        this.documentId = "";

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
           
        	this.Combo00.set_index(0);
        	this.boardId = nexacro.toNumber(this.Combo00.value);
        	this.bbsType = E_SCM;
        	
        	this.setButtonVisible();
        	this.fn_setType();
        	this.fn_getDocId();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_getBbsContent = function()
        {
        	
        	var sSvcID        = "retrieveBbsContent";
        	var sURL          = "svc::rest/portal/retrieveBbsContent";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bbs=ds_bbs ds_file=ds_file";	
        	var sArgument     = "boardId="+ this.boardId +
        	                    " documentId=" + this.documentId;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_getDocId = function()
        {
        	var sSvcID        = "retrieveBbsList";
        	var sURL          = "svc::rest/portal/retrieveBbsList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bbsList=ds_bbs";	
        	var sArgument     = "title="+"" + " boardId="+ this.Combo00.value + " noticeYn=" + this.noticeYn;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	trace("sArgument >>>>>>>>>>>>>>>>>>>> " + sArgument)
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
        			case "retrieveBbsContent":
        				application.trace(this.ds_bbs.saveXML());
        				this.fn_reDraw();
        				break;
        			
        			case "retrieveBbsList":
        				trace(this.ds_bbsList.saveXML());
        				this.Combo01.set_index(0);
        				this.documentId = this.Combo01.value;
        				
        				this.fn_getBbsContent();
        				break;
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_modify":
        			this.go("OMG.PT::OMG_DS_SC_1642.xfdl");
        			break;
        		case "btn_reply":
        			this.go("OMG.PT::OMG_DS_SC_1642.xfdl");
        			break;
        	}
        }

        
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/

        

        this.Combo00_onitemchanged = function(obj,e)
        {
        	this.bbsType = nexacro.toNumber(e.postvalue);
        	this.boardId = nexacro.toNumber(e.postvalue);
        	this.fn_setType();
        	this.fn_getDocId();
        	
        }

        
        this.Combo01_onitemchanged = function(obj,e)
        {
        	this.documentId = e.postvalue;
        	this.fn_getBbsContent();
        }

        // this.fn_attachDesign = function(attachYn)
        // {
        // 	if(attachYn)
        // 	{ 
        // 		this.txt_content.set_top(nexacro.toNumber(this.st_file.top) + nexacro.toNumber(this.st_file.height) -1 + 16);
        // 		this.st_boarder.set_top(nexacro.toNumber(this.st_file.top) + nexacro.toNumber(this.st_file.height) -1 );
        // 	}
        // 	else
        // 	{
        // 		this.txt_content.set_top(nexacro.toNumber(this.st_file.top) + 16);
        // 		this.st_boarder.set_top(this.st_file.top);
        // 	}
        // }

        this.fn_reDraw = function()
        {
        	var grdHeight = nexacro.toNumber(this.grd_file.getRealRowSize(0)) * nexacro.toNumber(this.ds_file.rowcount);
        	
        	this.grd_file.set_height(grdHeight);
        	this.st_file.set_height(grdHeight);
        	//this.st_file.set_height();
        	var stTop = nexacro.toNumber(this.grd_file.top) + nexacro.toNumber(this.grd_file.height) -1;
        	
        	
        	this.st_boarder.set_top(stTop);
        	this.txt_content.set_top(stTop+15 -1);
        }

        this.fn_setType = function()
        {
        	switch(this.bbsType)
        	{
        		case E_SCM:
        			this.noticeYn = 'Y';
        			//this.fn_attachDesign(false);
        			break;
        		case REFERENCE_ROOM:
        			//this.fn_attachDesign(false);
        			this.noticeYn = 'N';
        			break;
        		case QUESTION_N_ANSWER:
        		case VOICE_OF_CUSTOMER:
        			this.noticeYn = 'N';
        			//this.fn_attachDesign(false);
        			break;
        	}
        }

        this.setButtonVisible = function()
        {
        	this.btn_delete.set_visible(false);
        	this.btn_modify.set_visible(false);
        // 	switch()
        // 	{
        // 	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.grd_file.addEventHandler("onheadclick", this.grd_file_onheadclick, this);
            this.btn_modify.addEventHandler("onclick", this.common_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.common_onclick, this);
            this.Button00.addEventHandler("onclick", this.common_onclick, this);
            this.Combo00.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.Combo01.addEventHandler("onitemchanged", this.Combo01_onitemchanged, this);
            this.btn_reply.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1641.xfdl");
        this.loadPreloadList();
       
    };
}
)();
