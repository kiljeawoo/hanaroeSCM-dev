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
                this.set_titletext("농협공지사항(보기)");
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

            obj = new Dataset("ds_noticeFile", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BBRD_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_XCRNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BBRD_SQNO\">file</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
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

            obj = new Button("btn_modify", "absolute", null, "0", "41", "21", "101", null, this);
            obj.set_taborder("132");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", null, "0", "41", "21", "58", null, this);
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

            obj = new Static("Static21", "absolute", "109", "85", null, "29", "35", null, this);
            obj.getSetter("taborder").set("136");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "376", "366", null, "10", "328", null, this);
            obj.getSetter("taborder").set("137");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", null, "29", "141", "29", "15", null, this);
            obj.getSetter("taborder").set("139");
            obj.set_text("2015-04-23 10:11:11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "109", "29", null, "29", "264", null, this);
            obj.getSetter("taborder").set("140");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "29", "110", "29", null, null, this);
            obj.getSetter("taborder").set("141");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", null, "29", "110", "29", "155", null, this);
            obj.getSetter("taborder").set("142");
            obj.set_text("날짜");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", null, "57", "141", "29", "15", null, this);
            obj.getSetter("taborder").set("143");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "57", "110", "29", null, null, this);
            obj.getSetter("taborder").set("144");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", null, "57", "110", "29", "155", null, this);
            obj.getSetter("taborder").set("145");
            obj.set_text("조회수");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "109", "57", null, "29", "264", null, this);
            obj.getSetter("taborder").set("146");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("관리자");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file", "absolute", "109", "85", null, "29", "15", null, this);
            obj.set_taborder("150");
            obj.set_binddataset("ds_noticeFile");
            obj.set_selecttype("row");
            obj.set_autofittype("col");
            obj.set_scrollbars("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"580\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"29\"/></Rows><Band id=\"body\"><Cell colspan=\"3\"><Cell style=\"align:left;selectbackground:#ffffffff;\" text=\"bind:APDFLNM\"/><Cell col=\"1\" displaytype=\"button\" edittype=\"button\" style=\"selectbackground:#ffffffff;\" text=\"저장\"/><Cell col=\"2\" displaytype=\"button\" style=\"selectbackground:#ffffffff;\" text=\"삭제\"/></Cell></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "-27", "112", null, "15", "727", null, this);
            obj.getSetter("taborder").set("138");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("st_content", "absolute", "0", "113", null, null, "15", "0", this);
            obj.getSetter("taborder").set("147");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_content", "absolute", "16", "128", null, null, "31", "16", this);
            obj.set_taborder("148");
            obj.set_value("가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사\r\n");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.set_cssclass("txt_WF_file");
            obj.getSetter("mask").set("###,###");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("농협공지사항(보기)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item11","Static21","text","ds_notice","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Static12","text","ds_notice","BLTN_ST_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Static13","text","ds_notice","OFANC_TINM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Static16","text","ds_notice","OFANC_PRU_NT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Static19","text","ds_notice","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","txt_content","text","ds_notice","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","txt_content","value","ds_notice","OFANC_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","OMG_DS_SC_1641","","ds_notice","");
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
        this.addIncludeScript("OMG_DS_SC_1631.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1631.xfdl", function() {
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
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.noticeSeq = '1111111111';
        	this.fn_retrieveNoticeContent();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveNoticeContent = function()
        {
        	var sSvcID        = "retrieveNoticeContent";
        	var sURL          = "svc::rest/portal/retrieveNoticeContent";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_notice=ds_notice ds_noticeFile=ds_noticeFile";	
        	var sArgument     = "noticeSeq="+ this.noticeSeq ;
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
        			case "retrieveNoticeContent":
        				application.trace(this.ds_notice.saveXML());
        				//첨부파일 목록 갯수에 따라서 디자인 변경해준다.
        				this.fn_reDraw();
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
        			
        			break;
        	}
        }

        
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/

        this.fn_reDraw = function()
        {
        	var grdHeight = nexacro.toNumber(this.grd_file.getRealRowSize(0)) * nexacro.toNumber(this.ds_noticeFile.rowcount);
        	
        	this.grd_file.set_height(grdHeight);
        	this.st_file.set_height(grdHeight);
        	
        	var stTop = nexacro.toNumber(this.grd_file.top) + nexacro.toNumber(this.grd_file.height) -1;
        	this.st_content.set_top(stTop);
        	this.txt_content.set_top(stTop+15 -1);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_modify.addEventHandler("onclick", this.common_onclick, this);
            this.Button08.addEventHandler("onclick", this.common_onclick, this);
            this.Button00.addEventHandler("onclick", this.common_onclick, this);
            this.grd_file.addEventHandler("onheadclick", this.grd_file_onheadclick, this);
            this.txt_content.addEventHandler("oneditclick", this.TextArea01_oneditclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1631.xfdl");
        this.loadPreloadList();
       
    };
}
)();
