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
                this.set_titletext("농협공지사항상세");
                this.set_scrollbars("autoboth");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_notice", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_SQNO\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ST_DTM\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ED_DTM\" type=\"string\" size=\"32\"/><Column id=\"OFANC_TINM\" type=\"string\" size=\"32\"/><Column id=\"OFANC_CNTN\" type=\"string\" size=\"32\"/><Column id=\"OFANC_PRU_NT\" type=\"string\" size=\"32\"/><Column id=\"BBRD_DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"CKNL_DSC\" type=\"string\" size=\"32\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"32\"/><Column id=\"FS_RGM\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_DT\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_USER\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_DT\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_USER\" type=\"string\" size=\"32\"/><Column id=\"REPALY\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_PUP_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_PUP_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_PUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REIMG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"OFANC_TINM\"/><Col id=\"BLTN_ST_DTM\"/><Col id=\"REPALY\"/><Col id=\"REIMG\"/><Col id=\"ISCHECKED\"/><Col id=\"BBRD_SQNO\"/><Col id=\"BLTN_ED_DTM\"/><Col id=\"OFANC_CNTN\"/><Col id=\"OFANC_PRU_NT\"/><Col id=\"BBRD_DEL_YN\"/><Col id=\"CKNL_DSC\"/><Col id=\"FSRG_DTM\"/><Col id=\"FS_RGM\"/><Col id=\"FSRGMN_BZPLC\"/><Col id=\"INIT_REG_DT\"/><Col id=\"INIT_REG_USER\"/><Col id=\"LAST_CHG_DT\"/><Col id=\"LAST_CHG_USER\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_noticeFile", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BBRD_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_XCRNM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_modify", "absolute", null, "15", "41", "21", "147", null, this);
            obj.set_taborder("132");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", null, "15", "41", "21", "104", null, this);
            obj.set_taborder("133");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
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
            obj.set_binddataset("ds_noticeFile");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"631\"/><Column size=\"81\"/></Columns><Rows><Row size=\"29\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"selectbackground: ;\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" style=\"align:left;selectbackground: ;\" text=\"bind:ORGFNAME\" expandshow=\"hide\"/><Cell col=\"2\" style=\"align:right;\" text=\"expr:FILESIZE + ' KB'\"/></Band></Format></Formats>");
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
            obj = new Button("btn_popup", "absolute", null, "4", "67", "21", "5", null, this.div_pop);
            obj.set_taborder("22");
            obj.set_text("미리보기");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", null, "0", "110", "29", "140", null, this.div_pop);
            obj.set_taborder("23");
            obj.set_text("삭제");
            obj.set_cssclass("sta_WF_Label");
            this.div_pop.addChild(obj.name, obj);
            obj = new CheckBox("chk_bbrdPupYn00", "absolute", "82.96%", "4", "15", "21", null, null, this.div_pop);
            obj.set_taborder("24");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_pop.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "15", "41", "21", "61", null, this);
            obj.set_taborder("161");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "127", "45", "409", "27", null, null, this);
            obj.set_taborder("162");
            obj.set_readonly("true");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "15", "41", "21", "17", null, this);
            obj.set_taborder("164");
            obj.set_text("출력");
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
            		p.set_titletext("농협공지사항상세");
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
            obj = new BindItem("item7","div_pop.chk_bbrdPupYn00","value","ds_notice","BBRD_DEL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4511.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4511.xfdl", function() {
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
        	this.noticeSeq = this.parent.noticeSeq;
        	this.fn_retrieveNacfOfanc();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveNacfOfanc = function()
        {
        	var sSvcID        = "retrieveNacfOfanc";
        	var sURL          = "svc::rest/pt/blbd/retrieveNacfOfanc";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_notice=ds_notice ds_noticeFile=ds_noticeFile";	
        	var sArgument     = "noticeSeq="+ this.noticeSeq ;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_updateblbdCntn = function()
        {

        
        	if( this.fn_Validationcheck() == true){
        		var sSvcID        = "updateblbdCntn";
        		var sURL          = "svc::rest/pt/blbd/updateNacfOfanc";
        		var sInDatasets   = "ds_notice=ds_notice ";
        		var sOutDatasets  = "";	
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        		
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
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
        			case "retrieveNacfOfanc":
        				//첨부파일 목록 갯수에 따라서 디자인 변경해준다.
        				this.position();
        				this.fn_reDraw();
        				if(this.ds_noticeFile.rowcount > 0)
        				{	
        					this.ds_noticeFile.addColumn("SEAL", "string");
        					for(var i = 0 ; i < this.ds_noticeFile.rowcount ; i++)
        					{
        						this.ds_noticeFile.setColumn(i, "SEAL", "ofanc");
        					}
        				}
        				break;
        			case "updateblbdCntn":
        				alert("저장되었습니다.");
        				this.close();
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
        		case "btn_down":
        			if(this.ds_noticeFile.findRow("ISCHECKED", "1") < 0)
        			{
        				alert("선택된 파일이 없습니다.");
        				return;
        			}
        			this.gfn_callDownload(this.ds_noticeFile, "ISCHECKED");	// 두번째 인자에 체크박스에 bind된 컬럼명
        			break;
        			
        		case "btn_print":
        			var nRow;
        			var ozfile = "notice";
        			
        			var param = {
        				noticeSeq:this.ds_notice.getColumn(0, "BBRD_SQNO"),
        				userPlz:application.gv_glnCode + " " + application.gv_companyName,
        				userName:application.gv_userId + " " + application.gv_userName
        			}
        			var ozParam = {
        			sId: ozfile,
        			sUrl: '/rest/oz/pt/blbd/retrieveNacfOfancForOz',
        			paramType: 'param',
        			sParam: param
        			};
        			this.ozViewer(ozParam, "ozViewerPotal");
        			
        			break;
        	}
        }

        
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_reDraw = function()
        {
        	var grdHeight = nexacro.toNumber(this.grd_file.getRealRowSize(0)) * nexacro.toNumber(this.ds_noticeFile.rowcount);

        	if(this.ds_noticeFile.rowcount > 0)
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

        this.st_content_onclick = function(obj,e)
        {
        	
        }

        //eSCM공지사항만 화면 틀리게 보임
        this.position = function()
        {
        	
        	
        	if(application.gv_userTPC  == "admin"){

         		this.div_pop.set_visible(true) ;
         		this.btn_save.set_visible(true) ;
         		
        	}else{
        	 	this.st_content.set_top(98) ;
        		this.txt_content.set_top(109) ;
        	
        	}
        }

        

        this.div_pop_btn_popup_onclick = function(obj,e)
        {
        	
           
           this.framename= "test";
        	this.url="";
        	this.BlbdId="";
        	this.BbrdId="";
        	this.systemFileName = "" ;
        	this.bbrd_cntn = "" ;
        	this.BlbdId = "201506090001" ;
        	
        	this.bbrd_cntn = this.ds_notice.getColumn(0, "OFANC_CNTN")  ;
        	
        	try{
        		application.open(this.framename, "OMG.PT::OMG_DS_SC_9091.xfdl", this, {URL:this.url ,FRAME_NAME:this.framename,  BBRD_CNTN:this.bbrd_cntn, BLBD_ID:this.BlbdId , BBRD_ID:this.BbrdId , SYSTEMFILENAME:this.systemFileName }, "showtitlebar=true showstatusbar=true autosize=false", 50, 50 ,600 ,650);				

           } catch(e){
                 
        //        application.popupframes(["test"].form.close()); 
           trace("e :  " + e);

        		alert(  "팝업 창을 닫고 다시 하세요. ") ;
        		
           }   
           
           
        }

        
        this.fn_Validationcheck = function()
        {
        	if( this.ds_notice.getColumn(0,"BBRD_PUP_YN") == "1"  ) {
        	
        		if(this.gfn_nullToEmpty(this.div_pop.cal_from.value) == "" ){
        			alert("팝업 게시 시작 일자를입력해 주세요.");
        			return false;
        		
        		}
        		
        		
        		if(this.gfn_nullToEmpty(this.div_pop.cal_to.value) == ""){
        		
        			alert("팝업 게시 종료일자  를입력해 주세요.");
        			return false;
        		}
        		
        	}
        	return true;
        }

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_modify.addEventHandler("onclick", this.common_onclick, this);
            this.Button08.addEventHandler("onclick", this.common_onclick, this);
            this.btn_down.addEventHandler("onclick", this.common_onclick, this);
            this.st_content.addEventHandler("onclick", this.st_content_onclick, this);
            this.txt_content.addEventHandler("oneditclick", this.TextArea01_oneditclick, this);
            this.div_pop.chk_bbrdPupYn.addEventHandler("onchanged", this.chk_bbrdPupYn_onchanged, this);
            this.div_pop.btn_popup.addEventHandler("onclick", this.div_pop_btn_popup_onclick, this);
            this.div_pop.chk_bbrdPupYn00.addEventHandler("onchanged", this.chk_bbrdPupYn_onchanged, this);
            this.btn_save.addEventHandler("onclick", this.fn_updateblbdCntn, this);
            this.btn_print.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4511.xfdl");

       
    };
}
)();
