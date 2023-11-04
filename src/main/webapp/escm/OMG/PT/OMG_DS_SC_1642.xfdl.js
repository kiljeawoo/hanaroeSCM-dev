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
                this.set_name("OMG_DS_SC_1642");
                this.set_classname("pattern_01");
                this.set_titletext("eSCM공지사항(등록)");
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
            obj._setContents("<ColumnInfo><Column id=\"BLBD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_TI\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ST_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ED_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CKNL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_INQ_CN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_RGMNM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN\" type=\"STRING\" size=\"256\"/><Column id=\"LSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSRGMN\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"PRET_BBRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bbsList", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BLBD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_TI\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ST_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ED_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CKNL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_INQ_CN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_RGMNM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN\" type=\"STRING\" size=\"256\"/><Column id=\"LSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSRGMN\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_file", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BLBD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN\" type=\"STRING\" size=\"256\"/><Column id=\"LSRG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("105");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "796", "-16", "15", "490", null, null, this);
            obj.getSetter("taborder").set("107");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "58", null, this);
            obj.set_taborder("133");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("134");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("st_attachBoarder", "absolute", "109", "57", null, "29", "15", null, this);
            obj.getSetter("taborder").set("136");
            obj.set_cssclass("sta_WF_Labelbg");
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

            obj = new Static("Static13", "absolute", "109", "29", null, "29", "15", null, this);
            obj.getSetter("taborder").set("140");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "29", "110", "29", null, null, this);
            obj.getSetter("taborder").set("141");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title", "absolute", "113", "33", null, "21", "19", null, this);
            obj.set_taborder("151");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "126", "1", "162", "23", null, null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">201506090001</Col><Col id=\"datacolumn\">eSCM</Col></Row><Row><Col id=\"codecolumn\">201506090002</Col><Col id=\"datacolumn\">자료실</Col></Row><Row><Col id=\"codecolumn\">201506090003</Col><Col id=\"datacolumn\">잘의응답</Col></Row><Row><Col id=\"codecolumn\">201506090004</Col><Col id=\"datacolumn\">고객의소리</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("153");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Combo("Combo01", "absolute", "298", "1", "156", "23", null, null, this);
            this.addChild(obj.name, obj);
            var Combo01_innerdataset = new Dataset("Combo01_innerdataset", this.Combo01);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">등록</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">수정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">답글</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_taborder("154");
            obj.set_text("Combo01");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Combo("Combo02", "absolute", "512", "1", "168", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("155");
            obj.set_innerdataset("ds_bbsList");
            obj.set_codecolumn("BBRD_ID");
            obj.set_datacolumn("BBRD_TI");

            obj = new Static("st_file", "absolute", "0", "57", "110", "29", null, null, this);
            obj.getSetter("taborder").set("156");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file", "absolute", "109", "57", null, "29", "15", null, this);
            obj.set_taborder("157");
            obj.set_binddataset("ds_file");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"580\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"29\"/></Rows><Band id=\"body\"><Cell style=\"align:left;selectbackground:#ffffffff;\" text=\"bind:APDFLNM\"/><Cell col=\"1\" displaytype=\"button\" edittype=\"button\" style=\"selectbackground:#ffffffff;\" text=\"추가\"/><Cell col=\"2\" displaytype=\"button\" style=\"selectbackground:#ffffffff;\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_boarder", "absolute", "109", "85", null, null, "15", "0", this);
            obj.getSetter("taborder").set("147");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_content", "absolute", "126", "101", null, null, "31", "16", this);
            obj.set_taborder("148");
            obj.set_value("가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사\r\n");
            obj.set_wordwrap("char");
            obj.set_readonly("false");
            obj.set_cssclass("txt_WF_file");
            obj.getSetter("mask").set("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("st_content", "absolute", "0", "85", "110", null, null, "0", this);
            obj.getSetter("taborder").set("152");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("eSCM공지사항(등록)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item11","st_attachBoarder","text","ds_bbs","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Static13","text","ds_bbs","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","txt_content","text","ds_bbs","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","txt_content","value","ds_bbs","BBRD_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_title","value","ds_bbs","BBRD_TI");
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
        this.addIncludeScript("OMG_DS_SC_1642.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1642.xfdl", function() {
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

        //this.bbsType = E_SCM;
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
           this.Combo00.set_index(0);//tempCode  
           this.Combo01.set_index(0);//tempCode
           
           this.bbsType = nexacro.toNumber(this.Combo00.value);////tempCode
           this.ds_bbs.setColumn(0,"BOARD_ID", this.bbsType);   
        //    
           this.fn_setBoard();//게시판 유형..temp..
           this.fn_setType();
           
           
        //    try
        //    {
        // 		//수정버튼을 통하는 경우,,
        // 		//ds_bbs를 받아오자...그래서 셋팅해주기..
        // 		this.ds_bbs.copyData();
        // 		trace("this.boardId :: " + this.boardId + "\nthis.documentId ::" + this.documentId )
        // 		this.fn_getBbsContent();
        //    }
        //    catch(ex)
        //    {
        //    }
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_insertBbs = function()
        {
        	var sSvcID        = "insertBbs";
        	var sURL          = "svc::rest/portal/insertBbs";
        	var sInDatasets   = "ds_bbs=ds_bbs ds_file=ds_file";
        	var sOutDatasets  = "";	
        	var sArgument     = "noticeYn=" + this.noticeYn;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_getBbsContent = function()
        {
        	var sSvcID        = "retrieveBbsContent";
        	var sURL          = "svc::rest/portal/retrieveBbsContent";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bbs=ds_bbs ds_file=ds_file";	
        	var sArgument     = "boardId="+ this.Combo00.value +
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
        	var sArgument     = "title="+"" + " boardId="+ this.bbsType + " noticeYn=" + this.noticeYn;
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
        			case "insertBbs":
        				alert("저장되었습니다.");
        				break;
        				
        			case "retrieveBbsContent":
        				this.fn_reDraw();
        				if(this.Combo01.value == '2')//tempCode
        				{
        					this.ds_bbs.setColumn(0, "BBRD_TI", "RE :: " + this.ds_bbs.getColumn(0, "BBRD_TI"));
        					this.ds_bbs.setColumn(0, "BBRD_CNTN", "\n\n======================================\n" + this.ds_bbs.getColumn(0, "BBRD_CNTN"));
        					this.ds_bbs.setColumn(0, "PRET_BBRD_ID", this.ds_bbs.getColumn(0, "BBRD_ID"));
        					trace(this.ds_bbs.saveXML());
        				}
        				break; 
        				
        			case "retrieveBbsList":
        				this.Combo02.set_index(0);
        				this.documentId = this.Combo02.value;
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
        		case "btn_save":
        			if(this.fn_checkValidation())
        			{
        				this.ds_bbs.setColumn(0,"BLBD_ID", this.Combo00.value);
        				//this.ds_bbs.setColumn(0,"BBRD_ID", this.Combo02.value);
        				this.fn_insertBbs();
        			}
        			
        			break;
        		
        		case "btn_cancel":
        			this.close();
        			break;
        	}
        }

        
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	
        this.fn_checkValidation = function()
        {
        	if(this.gfn_isNull(this.edt_title.value))
        	{
        		alert("제목을 입력해 주세요.");
        		return false;
        	}
        	if(this.gfn_isNull(this.txt_content.value))
        	{
        		alert("내용을 입력해 주세요.");
        		return false;
        	}
        	return true;
        }

        
        this.Combo00_onitemchanged = function(obj,e)//tempCode
        {
        	this.bbsType = nexacro.toNumber(e.postvalue);
        	this.ds_bbs.setColumn(0, "BLBD_ID", this.bbsType);
        	
        	this.fn_setType();
        	
        }

        this.fn_reDraw = function()
        {
        	
        }

        this.fn_attachDesign = function(attachYn)
        {
        	var grdHeight = nexacro.toNumber(this.grd_file.getRealRowSize(0)) * nexacro.toNumber(this.ds_file.rowcount) ;
        	if(attachYn)
        	{
        		
        		this.grd_file.set_height(grdHeight);
        		this.st_file.set_height(grdHeight);
        		
        		this.st_content.set_top(nexacro.toNumber(this.st_file.top) + nexacro.toNumber(this.st_file.height) - 1);
        		this.txt_content.set_top(nexacro.toNumber(this.st_file.top) + nexacro.toNumber(this.st_file.height) -1 + 16);
        		this.st_boarder.set_top(nexacro.toNumber(this.st_file.top) + nexacro.toNumber(this.st_file.height) -1 );
        	}
        	else
        	{
        		this.st_content.set_top(this.st_file.top);
        		this.txt_content.set_top(nexacro.toNumber(this.st_file.top) + 16);
        		this.st_boarder.set_top(this.st_file.top);
        	}
        }

        this.fn_setType = function()
        {
        	switch(this.bbsType)
        	{
        		case E_SCM:
        			this.noticeYn = 'Y'
        			this.fn_attachDesign(false);
        			break;
        		case REFERENCE_ROOM:
        			this.noticeYn = 'N'
        			this.fn_attachDesign(true);
        			break;
        		case QUESTION_N_ANSWER:
        		case VOICE_OF_CUSTOMER:
        			this.noticeYn = 'N'
        			this.fn_attachDesign(false);
        			break;
        	}
        }

        this.fn_setBoard = function()
        {
        	switch(this.Combo01.value)
        	{
        		case '0':
        			this.ds_bbs.clearData();
        			this.ds_bbs.addRow();
        			//nothing
        			break;
        		
        		case '1':
        			//this.fn_getBbsContent();
        			this.fn_getDocId();//tempCode
        			break;
        			
        		case '2':
        			//this.fn_getBbsContent();
        			this.fn_getDocId();//tempCode
        			break;
        	}
        }

        

        this.Combo01_onitemchanged = function(obj,e)
        {
        	this.fn_setBoard();
        }

        this.Combo02_onitemchanged = function(obj,e)
        {
        	this.documentId = e.postvalue;
        	this.fn_getBbsContent();
        }

        
        this.grd_file_oncellclick = function(obj,e)
        {
        	if(e.cell == 1)
        	{
        		this.ds_file.setColumn(e.row, "APDFLNM", "C://temp.text");
        		//빈값이 없으면 row추가
        		var i = 0;
        		var b = true;
        		
        		while(true)
        		{	
        			if(this.gfn_isNull(this.ds_file.getColumn(i, "APDFLNM")))
        			{
        				b = false;
        				break;
        			}
        			i++;
        			if(i == this.ds_file.rowcount) break;
        		}
        		
        		if(b) this.ds_file.addRow();
        		this.fn_attachDesign(true);
        	}
        	else if(e.cell == 2)
        	{
        		if(this.ds_file.rowcount > 1) 
        		{
        			this.ds_file.deleteRow(e.row);
        		}
        		else
        		{
        			this.ds_file.setColumn(e.row, "APDFLNM", "");
        		}
        		this.fn_attachDesign(true);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.common_onclick, this);
            this.Combo00.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.Combo01.addEventHandler("onitemchanged", this.Combo01_onitemchanged, this);
            this.Combo02.addEventHandler("onitemchanged", this.Combo02_onitemchanged, this);
            this.grd_file.addEventHandler("oncellclick", this.grd_file_oncellclick, this);
            this.txt_content.addEventHandler("oneditclick", this.txt_content_oneditclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1642.xfdl");
        this.loadPreloadList();
       
    };
}
)();
