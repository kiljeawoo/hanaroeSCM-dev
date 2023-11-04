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
                this.set_name("OMG_DS_SC_3121");
                this.set_titletext("상담신청상세");
                this._setFormPosition(0,0,803,597);
            }
            this.style.set_color("#999999ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_receive", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STS\" type=\"string\" size=\"32\"/><Column id=\"TINM\" type=\"string\" size=\"32\"/><Column id=\"ST_DT\" type=\"string\" size=\"32\"/><Column id=\"CHRG_BUYER_NM\" type=\"string\" size=\"32\"/><Column id=\"RLTM_NTC_CHK\" type=\"string\" size=\"32\"/><Column id=\"CNTN\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_in", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TINM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"RLTM_NTC_SMS\" type=\"STRING\" size=\"256\"/><Column id=\"CHRW_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"RLTM_NTC_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CHRR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNGCN\" type=\"STRING\" size=\"256\"/><Column id=\"TMS_STS\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"CSLT_RQ_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctrSts", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "58", null, this);
            obj.set_taborder("132");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("133");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "9", "41", "110", "29", null, null, this);
            obj.set_taborder("146");
            obj.set_text("입력결과");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "9", "69", "110", "29", null, null, this);
            obj.set_taborder("147");
            obj.set_text("전송상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "109", "41", null, "29", "15", null, this);
            obj.set_taborder("152");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "109", "69", null, "29", "15", null, this);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_tmsSts", "absolute", "117", "73", "308", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("160");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_WF_Essential");
            obj.set_innerdataset("@ds_ctrSts");
            obj.set_index("-1");

            obj = new Button("btn_popup", "absolute", null, "113", "65", "21", "15", null, this);
            obj.set_taborder("183");
            obj.set_text("신청내역");
            this.addChild(obj.name, obj);

            obj = new Edit("edt", "absolute", "521", "73", "263", "21", null, null, this);
            obj.set_taborder("188");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "788", "0", "15", "181", null, null, this);
            obj.set_taborder("194");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "9", "114", "301", "21", null, null, this);
            obj.set_taborder("196");
            obj.set_text("수신내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "15", "21", "871", "20", null, null, this);
            obj.set_taborder("198");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "15", "139", null, "123", "15", null, this);
            obj.set_taborder("200");
            obj.set_binddataset("ds_receive");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"373\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"날짜\"/><Cell col=\"3\" text=\"실시간 통지방법\"/><Cell col=\"4\" text=\"등록자\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell text=\"bind:STS\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:TINM\"/><Cell col=\"2\" text=\"bind:ST_DT\"/><Cell col=\"3\" text=\"bind:RLTM_NTC_CHK\"/><Cell col=\"4\" text=\"bind:CHRG_BUYER_NM\"/><Cell col=\"5\" text=\"bind:CNTN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "9", "272", "110", "78", null, null, this);
            obj.set_taborder("202");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "109", "272", null, "78", "15", null, this);
            obj.set_taborder("203");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_cntn", "absolute", "113", "276", "671", "70", null, null, this);
            obj.set_taborder("204");
            obj.set_wordwrap("char");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "9", "366", "301", "21", null, null, this);
            obj.set_taborder("205");
            obj.set_text("통보내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "391", "110", "29", null, null, this);
            obj.set_taborder("206");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "9", "419", "110", "122", null, null, this);
            obj.set_taborder("207");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "109", "391", null, "29", "15", null, this);
            obj.set_taborder("208");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "109", "419", null, "122", "15", null, this);
            obj.set_taborder("209");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_tinm", "absolute", "113", "395", "671", "21", null, null, this);
            obj.set_taborder("213");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_cntn01", "absolute", "113", "423", "671", "114", null, null, this);
            obj.set_taborder("214");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "9", "540", "110", "29", null, null, this);
            obj.set_taborder("215");
            obj.set_text("실시간통지");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "109", "540", null, "29", "15", null, this);
            obj.set_taborder("216");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "9", "568", "110", "29", null, null, this);
            obj.set_taborder("217");
            obj.set_text("담당바이어");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "109", "568", null, "29", "15", null, this);
            obj.set_taborder("218");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "408", "568", "110", "29", null, null, this);
            obj.set_taborder("219");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_buyerAtel", "absolute", "521", "572", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("222");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_innerdataset("@ds_hp");
            obj.set_index("-1");

            obj = new Static("Static09", "absolute", "633", "572", "9", "21", null, null, this);
            obj.set_taborder("223");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "574", "572", "9", "21", null, null, this);
            obj.set_taborder("224");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerNm", "absolute", "113", "572", "292", "21", null, null, this);
            obj.set_taborder("227");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_rltmNtcSms", "absolute", "126", "544", "54", "21", null, null, this);
            obj.set_taborder("230");
            obj.set_text("SMS");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_rltmNtcEmail", "absolute", "415", "544", "66", "21", null, null, this);
            obj.set_taborder("231");
            obj.set_text("E-Mail");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrrEmail", "absolute", "480", "544", "250", "21", null, null, this);
            obj.set_taborder("233");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("234");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "408", "69", "110", "29", null, null, this);
            obj.set_taborder("156");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_sum00", "absolute", "126", "46", "86", "21", null, null, this);
            obj.set_taborder("235");
            obj.set_displaynulltext("0");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "225", "46", "10", "21", null, null, this);
            obj.set_taborder("236");
            obj.set_text("점");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_chrwMpsqno", "absolute", "304", "544", "48", "21", null, null, this);
            obj.set_taborder("239");
            obj.set_value("1234");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_chrwMphno", "absolute", "245", "544", "48", "21", null, null, this);
            obj.set_taborder("240");
            obj.set_value("1234");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_chrwMpsvno", "absolute", "183", "544", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("241");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            obj.set_enable("false");
            obj.set_innerdataset("@ds_hp");
            obj.set_index("-1");

            obj = new Static("Static03", "absolute", "236", "545", "9", "21", null, null, this);
            obj.set_taborder("242");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "295", "545", "9", "21", null, null, this);
            obj.set_taborder("243");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("etd_buyerHtel", "absolute", "583", "572", "48", "21", null, null, this);
            obj.set_taborder("244");
            obj.set_maxlength("4");
            obj.set_password("false");
            obj.set_inputtype("number");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("etd_buyerStel", "absolute", "642", "572", "48", "21", null, null, this);
            obj.set_taborder("245");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "597", "871", "20", null, null, this);
            obj.set_taborder("246");
            obj.set_visible("true");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Button("btn_send", "absolute", null, "365", "65", "21", "15", null, this);
            obj.set_taborder("247");
            obj.set_text("발송");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 597, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("상담신청상세");
            		p.style.set_color("#999999ff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_tinm","value","ds_in","TINM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","txa_cntn01","value","ds_in","CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","chk_rltmNtcSms","value","ds_in","RLTM_NTC_SMS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","chk_rltmNtcEmail","value","ds_in","RLTM_NTC_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_chrrEmail","value","ds_in","CHRR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_buyerNm","value","ds_in","CHRG_BUYER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","mae_sum00","value","ds_in","EVL_HDNGCN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","rdo_tmsSts","value","ds_in","TMS_STS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt","value","ds_in","STS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","etd_buyerHtel","value","ds_in","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","etd_buyerStel","value","ds_in","");
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
        this.addIncludeScript("OMG_DS_SC_3121.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_3121.xfdl", function() {
        //include "lib::comLib.xjs";

        
        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); //공통
           
           var param = [  
           //    {code:"USR_TP"       ,     dsName:"ds_USR_TP",    selecttype:"A"},
               {code:"HP"             ,     dsName:"ds_hp",        selecttype:""},
               {code:"CTR_STS"        ,     dsName:"ds_ctrSts",    selecttype:""}
            ];

           this.gfn_setPortalCommonCode(param); 
           
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	
        	//콤보에 최상단Row보이도록 설정
        	this.cbo_buyerAtel.set_index(0);
        	this.cbo_chrwMpsvno.set_index(0);

        // 	SIMP_C	ds_ctrSts
        // 1	신청
        // 2	보완
        // 3	재신청
        // 4	접수
        // 5	거절
        // 6	완료
           	   for(var i = this.ds_ctrSts.rowcount-1 ; 0 <= i ; i--){		

        			
        			if(this.ds_ctrSts.getColumn(i, "SIMP_C") == "6"){

        				this.ds_ctrSts.deleteRow(i);
        			}
        		
        			if(this.ds_ctrSts.getColumn(i, "SIMP_C") == "3"){
        					this.ds_ctrSts.deleteRow(i);
        			}
        		
        			if(this.ds_ctrSts.getColumn(i, "SIMP_C") == "1"){
        					this.ds_ctrSts.deleteRow(i);
        			}
        		}	
        	
        }

        

        this.fn_afterFormOnload = function()
        {

             //페이지 로딩후 실행부분      
        	var fv_paramMode = this.getOwnerFrame().paramMode;		
        	
        //조회 호출
           this.search();  
           

        		
        	
        }

         /*조회*/
        this.search = function()
        {	

        	var fv_CSLT_RQ_NO =  this.gfn_isEmpty(this.getOwnerFrame().CSLT_RQ_NO );		
              if( fv_CSLT_RQ_NO == "" ){
        			fv_CSLT_RQ_NO = "20150000000007" ;
        		}
        	var sSvcID        = "search";
        	var sURL          = "svc::rest/businessTalk/retrieveCounselingList";
        	var sInDatasets   = "ds_param=ds_param";
        	var sOutDatasets  = "ds_in=ds_in ds_receive=ds_receive";	
        	var sArgument     = "cslt_rq_no="+ fv_CSLT_RQ_NO;

        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	//trace(this.ds_param.saveXML());	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	
        	if(ErrorCode < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID =="insert"){
        			if(ErrorCode == 1){
        				this.gfn_getMessage("alert", "result.message.save.success");		
        				this.close(); 
        			}		
        		}else if(svcID == "search"){	
        			if(this.ds_in.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        			

        		//	chrr_telno
        		if(this.ds_in.getColumn(0,"CHRW_TELNO") != undefined ){
         			var chrw_tel =  this.ds_in.getColumn(0,"CHRW_TELNO") ;
         				this.fn_telNo(chrw_tel, this.cbo_chrwMpsvno, this.mae_chrwMpsqno, this.mae_chrwMphno);
         		}
        // 			//buyer_telno
        		if(this.ds_in.getColumn(0,"BUYER_TELNO") != undefined ){
         			var buyer_telno = this.ds_in.getColumn(0,"BUYER_TELNO") ;
         				this.fn_telNo(buyer_telno, this.cbo_buyerAtel, this.etd_buyerHtel, this.etd_buyerStel);
         		}		
        			
        		var sts =  this.ds_in.getColumn(0,"STS");
        			if(sts >= 5  ){
        				this.disable();
        			}
        			
        			
        			
        			
        		}else{
        			if(this.ds_in.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}
        	}
        	

        		
        		
        		
        		
        }

        /* 입력저장 */
        this.btn_save_onclick = function(obj,e)
        {
        	this.insert();
        }

        /*등록*/
        this.insert = function()
        {
        	if(this.fn_validationCheck()){
        			
        			var chrw_telno = this.gfn_nullToEmpty(this.cbo_chrwMpsvno.value) 
        				            +this.gfn_nullToEmpty(this.mae_chrwMpsqno.value) 
        							+this.gfn_nullToEmpty(this.mae_chrwMphno.value)  ;
        			var buyer_telno = this.gfn_nullToEmpty(this.cbo_buyerAtel.value) 
        							+this.gfn_nullToEmpty(this.etd_buyerHtel.value) 
        							+this.gfn_nullToEmpty(this.etd_buyerStel.value) ;
        			
        		var sParams =	" cslt_rq_no="+this.ds_in.getColumn(0,"CSLT_RQ_NO") 
        						+" buyer_email="+this.ds_in.getColumn(0,"BUYER_EMAIL") 
        						+" cntn="+this.gfn_nullToEmpty(this.txa_cntn01.value)				
        						+" tinm="+this.gfn_nullToEmpty(this.edt_tinm.value)                  
        						+" cntn="+this.gfn_nullToEmpty(this.txa_cntn01.value)                
        						+" rltm_ntc_sms="+this.gfn_nullToEmpty(this.chk_rltmNtcSms.value)    
        						+" chrw_telno=" + chrw_telno
        						+" rltm_ntc_email="+this.gfn_nullToEmpty(this.chk_rltmNtcEmail.value)
        						+" chrr_email="+this.gfn_nullToEmpty(this.edt_chrrEmail.value)       
        						+" chrg_buyer_nm="+this.gfn_nullToEmpty(this.edt_buyerNm.value)      
        						+" buyer_telno="+buyer_telno
        						+" evl_hdngcn="+this.gfn_nullToEmpty(this.mae_sum00.value)           
        						+" tms_sts="+this.gfn_nullToEmpty(this.rdo_tmsSts.value)             
        						
        						  ;   
        					
        		var sSvcID        = "insert";
        		var sURL          = "svc::rest/businessTalk/insertCounseling";							     
        		trace(sParams);
        		var sInDatasets   = "";
        		var sOutDatasets  = "";	
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        			
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        
         /*닫기*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.disable = function(obj,e)
        {
         
          //상태가 거절, 완료 일 때  모두 비활성화

        		this.rdo_tmsSts.set_enable(false);
        		this.edt_tinm.set_enable(false);
        		this.txa_cntn01.set_enable(false);
        		this.chk_rltmNtcSms.set_enable(false);
        		this.chk_rltmNtcEmail.set_enable(false);
        		this.edt_buyerNm.set_enable(false);
        		this.cbo_buyerAtel.set_enable(false);
        		this.etd_buyerHtel.set_enable(false);
        		this.etd_buyerStel.set_enable(false);
        		this.btn_save.set_visible(false);
          
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	if(this.gfn_isNull(this.rdo_tmsSts.value))
        	{
        		this.rdo_tmsSts.set_index(0);
        		alert('전송 상태를 선택 하세요.');
        		return false;
        	}
        		
        	if(this.gfn_isNull(this.edt_tinm.value))
        	{
        		this.edt_tinm.setFocus();
        		alert('통보내역 제목을 입력 하세요.');
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.txa_cntn01.value))
        	{
        		this.txa_cntn01.setFocus();
        		alert('통보내역 내용을 입력 하세요.');
        		return false;
        	}
        	
        	return true;
        	
        }

        

        

        this.ds_receive_onrowposchanged = function(obj,e)
        {
        	
        	this.txa_cntn.set_value(obj.getColumn(e.newrow ,"CNTN")  ) 

        }

        
        this.btn_popup_onclick = function(obj,e)
        {

        var cslt_rq_no = this.ds_in.getColumn(0,"CSLT_RQ_NO") ;

        		var oArg = {paramMode:"S", CSLT_RQ_NO:cslt_rq_no};
        		var sOption = "autosize=true,title=true";
        		var sPopupCallBack = "fn_popupAfter";    
        				
        		trace("sParams::"+this.ds_in.getColumn(0,"CSLT_RQ_NO") );
        				
        		this.gfn_openPopup("popId","OMG.BT::OMG_DS_SC_1113.xfdl",oArg,sOption,sPopupCallBack);
        }

        //전화 번호 타입 변경
        this.fn_telNo = function(strTelNo,strVal1,strVal2,strVal3){

        	 if(strTelNo.length > 8 ){
        		var RegPhonNum = ""; 

        		//문자열 길이에 따른 값 처리
        		if(strTelNo.length == 9 ) {
        			RegPhonNum = /([0-9]{2})([0-9]{3})([0-9]+)/; 
        		} else if(strTelNo.length == 10){
        			if(strTelNo.substring(0,2)=="02"){
        				RegPhonNum = /([0-9]{2})([0-9]{4})([0-9]+)/; 
        			}else{
        				RegPhonNum = /([0-9]{3})([0-9]{3})([0-9]+)/;
        			}
        		} else if(strTelNo.length > 10){ 
        			RegPhonNum = /([0-9]{3})([0-9]{4})([0-9]+)/; 
        		}

        		strTelNo = strTelNo.replace(RegPhonNum, "$1-$2-$3"); 

        		var naTrplCVal = strTelNo.split("-");

        			 strVal1.set_value(naTrplCVal[0]);
        			 strVal2.set_value(naTrplCVal[1]);
        			 strVal3.set_value(naTrplCVal[2]);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_receive.addEventHandler("onrowposchanged", this.ds_receive_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.rdo_tmsSts.addEventHandler("onitemclick", this.Radio01_onitemclick, this);
            this.btn_popup.addEventHandler("onclick", this.btn_popup_onclick, this);
            this.cbo_buyerAtel.addEventHandler("onitemchanged", this.Combo08_onitemchanged, this);
            this.chk_rltmNtcSms.addEventHandler("onclick", this.CheckBox00_onclick, this);
            this.cbo_chrwMpsvno.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.btn_send.addEventHandler("onclick", this.btn_popup_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_3121.xfdl");
        this.loadPreloadList();
       
    };
}
)();
