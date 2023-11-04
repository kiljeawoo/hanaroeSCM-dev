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
                this.set_name("OMG_DS_SC_8211");
                this.set_titletext("교육신청 상세");
                this.set_scrollbars("autoboth");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_edu_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SUBSCRIPTION_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_edu_cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_edu_blacklist", this);
            obj._setContents("<ColumnInfo><Column id=\"BLACKLIST_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "126", "44", null, "29", "266", null, this);
            obj.set_taborder("163");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "644", "71", "142", "30", null, null, this);
            obj.set_taborder("159");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "376", "430", null, "10", "328", null, this);
            obj.set_taborder("137");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", null, "44", "141", "29", "17", null, this);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "17", "44", "110", "29", null, null, this);
            obj.set_taborder("141");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", null, "44", "110", "29", "157", null, this);
            obj.set_taborder("142");
            obj.set_text("등록일시");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "17", "72", "110", "29", null, null, this);
            obj.set_taborder("144");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", null, "72", "110", "29", "157", null, this);
            obj.set_taborder("145");
            obj.set_text("조회수");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "126", "72", null, "29", "266", null, this);
            obj.set_taborder("146");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("st_title", "absolute", "17", null, "301", "21", null, "52", this);
            obj.set_taborder("155");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down", "absolute", null, null, "72", "21", "17", "48", this);
            obj.set_taborder("156");
            obj.set_text("다운로드");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file", "absolute", "17", null, null, "29", "17", "15", this);
            obj.set_taborder("157");
            obj.set_binddataset("ds_file");
            obj.set_scrollbars("autoboth");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"631\"/><Column size=\"81\"/></Columns><Rows><Row size=\"29\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"selectbackground: ;\" text=\"bind:CHK\"/><Cell col=\"1\" style=\"align:left;selectbackground: ;\" text=\"bind:ORGFNAME\" expandshow=\"hide\"/><Cell col=\"2\" style=\"align:right;\" text=\"expr:FILESIZE + ' KB'\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_content", "absolute", "17", "128", null, null, "17", "15", this);
            obj.set_taborder("147");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_content", "absolute", "32", "139", null, null, "33", "31", this);
            obj.set_taborder("148");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.set_cssclass("txt_WF_file");
            obj.getSetter("mask").set("###,###");
            obj.style.set_background("#ffffff00");
            this.addChild(obj.name, obj);

            obj = new Div("div_pop", "absolute", "17", "100", null, "30", "17", null, this);
            obj.set_taborder("160");
            obj.set_text("Div00");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "90", "0", null, "29", "0", null, this.div_pop);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "152", "0", "110", "29", null, null, this.div_pop);
            obj.set_taborder("13");
            obj.set_text("팝업게시기간");
            obj.set_cssclass("sta_WF_Label");
            this.div_pop.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "377", "4", "100", "21", null, null, this.div_pop);
            this.div_pop.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_from", "absolute", "266", "4", "100", "21", null, null, this.div_pop);
            this.div_pop.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static131", "absolute", "367", "9", "10", "21", null, null, this.div_pop);
            obj.set_taborder("16");
            obj.set_text("~");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static123", "absolute", "0", "0", "110", "29", null, null, this.div_pop);
            obj.set_taborder("18");
            obj.set_text("팝업");
            obj.set_cssclass("sta_WF_Label");
            this.div_pop.addChild(obj.name, obj);
            obj = new CheckBox("chk_bbrdPupYn", "absolute", "16.08%", "4", "15", "21", null, null, this.div_pop);
            obj.set_taborder("21");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_pop.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", null, "4", "80", "21", "5", null, this.div_pop);
            obj.set_taborder("22");
            obj.set_text("미리보기");
            this.div_pop.addChild(obj.name, obj);

            obj = new Button("btn_subscription", "absolute", null, "15", "41", "21", "17", null, this);
            obj.set_taborder("161");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "127", "45", "409", "27", null, null, this);
            obj.set_taborder("162");
            obj.set_readonly("true");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "15", "41", "21", "61", null, this);
            obj.set_taborder("164");
            obj.set_text("출력");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 30, this.div_pop,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("160");
            		p.set_text("Div00");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_pop.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("교육신청 상세");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item9","Static12","text","ds_notice","FSRG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Static19","text","ds_notice","FS_RGM");
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
            obj = new BindItem("item2","MaskEdit00","value","ds_notice","OFANC_PRU_NT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_pop.chk_bbrdPupYn","value","ds_notice","BBRD_PUP_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_pop.cal_from","value","ds_notice","BBRD_PUP_ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_pop.cal_to","value","ds_notice","BBRD_PUP_ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Edit00","value","ds_notice","OFANC_TINM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8211.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8211.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.seq = "";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); // 공통
        }

        this.fn_afterFormOnload = function()
        {
        	// 페이지 로딩후 실행부분
        	try {
        		this.seq = this.parent.seq;
        	} catch(e) {
        		trace("부모화면 필요");
        	}
        	
        	this.fn_retrieveEducationDetails();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveEducationDetails = function()
        {
        	var sSvcID        = "retrieveEducationDetails";
        	var sURL          = "svc::rest/mg/edu/retrieveEducationDetails";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_edu_detail=ds_edu_detail";
        	var sArgument     = "seq=" + this.seq;
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
        			case "retrieveEducationDetails":
        				 var fileNm = this.ds_edu_detail.getColumn(0, "FILENAME");
        				 
        				 if (!this.gfn_isNull(fileNm)) {
        					this.ds_file.addRow();
        					
        					this.ds_file.setColumn(0, "CHK", "0");
        					this.ds_file.setColumn(0, "FILENAME", this.ds_edu_detail.getColumn(0, "FILENAME"));
        					this.ds_file.setColumn(0, "ORGFNAME", this.ds_edu_detail.getColumn(0, "ORGFNAME"));
        					this.ds_file.setColumn(0, "FILESIZE", this.ds_edu_detail.getColumn(0, "FILESIZE"));
        					this.ds_file.setColumn(0, "SYSTEMFILENAME", this.ds_edu_detail.getColumn(0, "SYSTEMFILENAME"));
        				 }
        				 
        				 this.position();
        				 this.fn_reDraw();
        				 
        				 if (this.ds_edu_detail.getColumn(0, "SUBSCRIPTION_YN") == "N") {
        					this.btn_subscription.set_visible(false);
        				 }
        				 
        				 var title = this.ds_edu_detail.getColumn(0, "TITLE");
        				 var content = this.ds_edu_detail.getColumn(0, "CONTENT");
        				 var regNm = this.ds_edu_detail.getColumn(0, "REG_NM");
        				 var regDt = this.ds_edu_detail.getColumn(0, "REG_DT");
        				 var cnt = this.ds_edu_detail.getColumn(0, "CNT");
        				 
        				 this.Edit00.set_value(title);				// 제목
        				 this.txt_content.set_value(content);		// 내용
        				 this.Static19.set_text(regNm);				// 작성자
        				 this.Static12.set_text(regDt);				// 등록일시
        				 this.MaskEdit00.set_value(cnt);			// 조회수
        				 
        				 break;
        			
        			case "checkEducationMemberValidation":
        				 var cnt = this.ds_edu_cnt.getColumn(0, "MEMBER_CNT");
        				 var blackListYn = this.ds_edu_blacklist.getColumn(0, "BLACKLIST_YN");
        				 
        				 if (blackListYn == "Y") {
        					this.alert("해당 업체는 전월 불참사유로 인해 당월에 교육신청 등록할 수 없습니다.");
        				 } else {
        					 //if (cnt < 2) {
        					 if(cnt < 1) {
        					 	var eduDt = this.ds_edu_detail.getColumn(0, "EDU_DATE");
        						//application.open("Modeless", "OMG.MG::OMG_DS_SC_8212.xfdl", this.getOwnerFrame(), {SEQ:this.seq, EDU_DT:eduDt, CNT:cnt}, "showtitlebar=true", 0, 0, 400, 300, this);
        						application.open("Modeless", "OMG.MG::OMG_DS_SC_8214.xfdl", this.getOwnerFrame(), {SEQ:this.seq, EDU_DT:eduDt, CNT:cnt}, "showtitlebar=true", 0, 0, 400, 300, this);
        					 } else {
        						//this.alert("하나의 업체에서 2명이상 교육신청 등록할 수 없습니다.");
        						this.alert("하나의 업체에서 1명이상 교육신청 등록할 수 없습니다.");
        					 }
        				 }
        				 
        				 break;
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_reDraw = function()
        {
        	var grdHeight = nexacro.toNumber(this.grd_file.getRealRowSize(0)) * nexacro.toNumber(this.ds_file.rowcount);
        	
        	if(this.ds_file.rowcount > 0)
        	{
        		this.grd_file.set_height(grdHeight);
        			
        		this.txt_content.set_bottom(60 + grdHeight);
        		this.st_content.set_bottom(60 + grdHeight);
        		this.btn_down.set_bottom(20 + grdHeight);
        		this.st_title.set_bottom(22 + grdHeight);
        	}
        	else
        	{
        		this.st_content.set_bottom(15);
        		this.txt_content.set_bottom(31);
        	}
        }

        this.position = function()
        {
        	this.st_content.set_top(98);
        	this.txt_content.set_top(109);
        }

        this.fn_subscription = function(obj,e)
        {
        	var sSvcID        = "checkEducationMemberValidation";
        	var sURL          = "svc::rest/mg/edu/checkEducationMemberValidation";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_edu_cnt=ds_edu_cnt ds_edu_blacklist=ds_edu_blacklist";
        	var sArgument     = "seq=" + this.seq + " gln=" + application.gv_glnCode;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_print = function(obj,e)
        {
        	
        }

        this.fn_download = function(obj,e)
        {
        	if (this.ds_file.findRow("CHK", "1") < 0)
        	{
        		this.alert("선택된 파일이 없습니다.");
        		return;
        	}
        	
        	this.gfn_callDownload(this.ds_file, "CHK");	// 두번째 인자에 체크박스에 bind된 컬럼명
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_file.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_down.addEventHandler("onclick", this.fn_download, this);
            this.st_content.addEventHandler("onclick", this.st_content_onclick, this);
            this.txt_content.addEventHandler("oneditclick", this.TextArea01_oneditclick, this);
            this.div_pop.chk_bbrdPupYn.addEventHandler("onchanged", this.chk_bbrdPupYn_onchanged, this);
            this.div_pop.btn_popup.addEventHandler("onclick", this.div_pop_btn_popup_onclick, this);
            this.btn_subscription.addEventHandler("onclick", this.fn_subscription, this);
            this.btn_print.addEventHandler("onclick", this.fn_print, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8211.xfdl");

       
    };
}
)();
