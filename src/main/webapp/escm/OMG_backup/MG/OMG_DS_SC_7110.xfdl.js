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
                this.set_name("OMG_DS_SC_7110");
                this.set_titletext("메일발송");
                this._setFormPosition(0,0,803,650);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mail", this);
            obj._setContents("<ColumnInfo><Column id=\"sender\" type=\"STRING\" size=\"256\"/><Column id=\"usrTpc\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"receiver\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mail_cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_file", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uploadresult", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static08", "absolute", "163", "111", "625", "89", null, null, this);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "163", "35", "625", "39", null, null, this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "98.13%", "1", "15", "1195", null, null, this);
            obj.set_taborder("1");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "3.11%", "677", null, "20", "-27.15%", null, this);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "2.86%", "857", null, "20", "-22.04%", null, this);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "745", "5", "43", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "1.49%", "9", null, "21", "84.81%", null, this);
            obj.set_taborder("13");
            obj.set_text("메일발송");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0%", "1", null, "1195", "98.51%", null, this);
            obj.set_taborder("66");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "11", "35", "153", "39", null, null, this);
            obj.set_taborder("67");
            obj.set_text("발신자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11", "73", "153", "39", null, null, this);
            obj.set_taborder("69");
            obj.set_text("사용자유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "163", "73", "625", "39", null, null, this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "163", "199", "625", "39", null, null, this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "11", "199", "153", "39", null, null, this);
            obj.set_taborder("72");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "11", "237", "153", "294", null, null, this);
            obj.set_taborder("73");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "163", "237", "625", "294", null, null, this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("sender", "absolute", "173", "43", "605", "22", null, null, this);
            obj.set_taborder("75");
            this.addChild(obj.name, obj);

            obj = new Edit("title", "absolute", "173", "207", "605", "22", null, null, this);
            obj.set_taborder("76");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("content", "absolute", "173", "246", "604", "272", null, null, this);
            obj.set_taborder("77");
            obj.set_dragscrolltype("horz");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cbx_01", "absolute", "181", "84", "95", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("협력업체");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cbx_02", "absolute", "301", "84", "80", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_text("본부");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cbx_03", "absolute", "406", "84", "115", "21", null, null, this);
            obj.set_taborder("80");
            obj.set_text("하나로마트");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cbx_04", "absolute", "541", "84", "140", "21", null, null, this);
            obj.set_taborder("81");
            obj.set_text("세금계산서전용");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save00", "absolute", "652", "5", "88", "21", null, null, this);
            obj.set_taborder("82");
            obj.set_text("HTML 에디터");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "11", "111", "153", "89", null, null, this);
            obj.set_taborder("84");
            obj.set_text("추가 수신자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cbx_99", "absolute", "671", "84", "110", "21", null, null, this);
            obj.set_taborder("86");
            obj.set_text("운영자");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file", "absolute", "11", "577", "778", "29", null, null, this);
            obj.set_taborder("88");
            obj.set_binddataset("ds_file");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"631\"/><Column size=\"81\"/></Columns><Rows><Row size=\"29\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"selectbackground: ;\" text=\"bind:CHK\"/><Cell col=\"1\" style=\"align:left;selectbackground: ;\" text=\"bind:ORGFNAME\" expandshow=\"hide\"/><Cell col=\"2\" style=\"align:right;\" text=\"expr:FILESIZE + ' KB'\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new FileUpload("btn_file", "absolute", "644", "547", "72", "21", null, null, this);
            obj.set_taborder("89");
            obj.set_multiselect("true");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow", "absolute", "718", "547", "72", "21", null, null, this);
            obj.set_taborder("90");
            obj.set_text("파일삭제");
            this.addChild(obj.name, obj);

            obj = new Static("st_title", "absolute", "12", "547", "301", "21", null, null, this);
            obj.set_taborder("91");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new TextArea("receiver", "absolute", "173", "119", "604", "72", null, null, this);
            obj.set_taborder("92");
            obj.set_dragscrolltype("none");
            obj.set_lengthunit("ascii");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 650, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("메일발송");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divSearch.edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divSearch.cbo_menuLevel","value","ds_in","MENU_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divSearch.edt_menuName","value","ds_in","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divSearch.edt_svcGroup","value","ds_in","SVC_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divSearch.edt_fileName","value","ds_in","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divSearch.edt_fileType","value","ds_in","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divSearch.cbo_displayYn","value","ds_in","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divSearch.cbo_useYn","value","ds_in","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","sender","value","ds_mail","sender");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7110.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7110.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {   
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function() // 페이지 로딩 후 실행 부분
        {
        	this.ds_mail.addRow();
        	this.ds_mail.setColumn(0, "sender", "\"농협경제지주\"[NHeSCM]\<callcenter@nhescm.co.kr>");
        	this.sender.set_value(this.ds_mail.getColumn(0, "sender"));
        }

        this.fn_save_onclick = function(obj,e)
        {
        	this.arr = new Array(5);
        	
        	if (this.cbx_01.value) {
        		this.arr[0] = "01";
        	}
        	if (this.cbx_02.value) {
        		this.arr[1] = "02";
        	}
        	if (this.cbx_03.value) {
        		this.arr[2] = "03";
        	}
        	if (this.cbx_04.value) {
        		this.arr[3] = "04";
        	}
        	if (this.cbx_99.value) {
        		this.arr[4] = "99";
        	}
        	/*
        	if (this.gfn_isNull(this.arr[0]) && this.gfn_isNull(this.arr[1]) && this.gfn_isNull(this.arr[2]) && this.gfn_isNull(this.arr[3]) && this.gfn_isNull(this.arr[4])) {
        		alert("최소 한개의 사용자유형을 체크해야 합니다.");
        		return;
        	}
        	*/
        	if (this.gfn_isNull(this.arr[0]) && this.gfn_isNull(this.arr[1]) && this.gfn_isNull(this.arr[2]) && this.gfn_isNull(this.arr[3]) && this.gfn_isNull(this.arr[4]) 
        		&& this.gfn_isNull(this.receiver.value)) {
        		alert("최소 한개의 사용자유형을 체크하거나 추가수신자를 입력하세요.");
        		return;
        	}
        	
        	if (this.gfn_isNull(this.title.value)) {
        		alert("제목을  입력하세요.");
        		return;
        	}
        	if (this.gfn_isNull(this.content.value)) {
        		alert("내용을  입력하세요.");
        		return;
        	}
        	
        	this.ds_mail.setColumn(0, "usrTpc", this.arr.toString());
        	this.ds_mail.setColumn(0, "title",this.title.value);
        	this.ds_mail.setColumn(0, "content",this.content.value);
        	this.ds_mail.setColumn(0, "receiver",this.receiver.value);

        	var sSvcID        = "sendMail";
        	var sURL          = "svc::rest/mg/mail/sendMail";
        	var sInDatasets   = "ds_mail=ds_mail ds_file=ds_file";
        	var sOutDatasets  = "ds_mail_cnt=ds_mail_cnt";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "sendMail") {
        			alert(this.ds_mail_cnt.getColumn(0, "CNT") + "건의 메일이 발송되었습니다.");
         			this.title.set_value(null);
        			this.content.set_value(null);
         			this.receiver.set_value(null);
        			this.cbx_01.set_value(false);
        			this.cbx_02.set_value(false);
        			this.cbx_03.set_value(false);
        			this.cbx_04.set_value(false);
        			this.cbx_99.set_value(false);
        			this.ds_file.clearData();
        			this.ds_uploadresult.clearData();
        			this.btn_file.deleteItem(0);
        			this.btn_file.appendItem();
        			this.grd_file.set_height(29);
        		}
        	}
        } 

        this.FileUpload_onsuccess = function(obj,e)
        {	
        	if (e.datasets == null) {
        		// trace("업로드 실패");
        	} else {
        		// trace("업로드 성공");
        		this.ds_file.addRow();
        		this.ds_uploadresult.copyData(e.datasets[0]);
        		this.ds_file.copyRow(this.ds_file.rowposition, this.ds_uploadresult, 0);
        		this.ds_file.setColumn(this.ds_file.rowposition,"CHK", 0);
        		this.fn_setDesign();
        	}	
        }

        this.fn_setDesign = function()
        {
        	//첨부파일 유무에 따른 디자인
        	var grdHeight;
        	if (this.ds_file.rowcount < 3) {
        		grdHeight = nexacro.toNumber(this.grd_file.getRealRowSize(0)) * nexacro.toNumber(this.ds_file.rowcount);
        	} else {
        		grdHeight = nexacro.toNumber(this.grd_file.getRealRowSize(0)) * 2.5;
        	}
        	this.grd_file.set_height(grdHeight);
        }

        this.FileUpload_onerror = function(obj,e)
        {

        }

        //UPLOAD
        this.FileUpload_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.btn_delRow_onclick = function(obj,e)
        {
        	var i = 0;
        	if (this.ds_file.findRow("CHK", "1") < 0) {
        		alert("선택된 파일이 없습니다.");
        		return;
        	}
        	var nRow = -1;
        	while (true) {
        		nRow = this.ds_file.findRow("CHK", "1");
        		if (nRow < 0) break;
        		this.ds_file.deleteRow(nRow);
        	}
        	
        	this.fn_setDesign();
        }

        this.fn_htmlEditor_onclick = function(obj,e)
        {
        	system.execBrowser("https://html-online.com/editor/");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_file.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.fn_save_onclick, this);
            this.title.addEventHandler("oneditclick", this.title_oneditclick, this);
            this.btn_save00.addEventHandler("onclick", this.fn_htmlEditor_onclick, this);
            this.cbx_99.addEventHandler("onchanged", this.fn_changed, this);
            this.btn_file.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.btn_file.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.btn_file.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.btn_delRow.addEventHandler("onclick", this.btn_delRow_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7110.xfdl");

       
    };
}
)();
