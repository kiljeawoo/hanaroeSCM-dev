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
                this.set_name("OMG_DS_SC_211340");
                this.set_titletext("협력사원 매장근무 요청서");
                this._setFormPosition(0,0,788,220);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_etcEltCtrw01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호   \"/><Column id=\"ETC_CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"기타 계약서종류  \"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼   \"/><Column id=\"LBRCS\" type=\"STRING\" size=\"256\" sumtext=\"인건비\"/><Column id=\"LBRCS_CLCN_BASS\" type=\"STRING\" size=\"256\" sumtext=\"인건비 산출근거\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\" sumtext=\"기타\"/><Column id=\"ETC_CLCN_BASS\" type=\"STRING\" size=\"256\" sumtext=\"기타 산출근거\"/><Column id=\"NED_BASS\" type=\"STRING\" size=\"256\" sumtext=\"소용비용 산출근거\"/><Column id=\"NED_SS\" type=\"STRING\" size=\"256\" sumtext=\"소용비용 계\"/><Column id=\"MSLAM\" type=\"STRING\" size=\"256\" sumtext=\"월매출액\"/><Column id=\"MSLAM_PFT\" type=\"STRING\" size=\"256\" sumtext=\"월매출액이익\"/><Column id=\"RLZ_XPC_PFT\" type=\"STRING\" size=\"256\" sumtext=\"실현예상이익\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_etcEltStylAmm501", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CTRW_KDC\" type=\"STRING\" size=\"5000\" sumtext=\"계약서내용\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", "467", "21", null, null, this);
            obj.set_taborder("745");
            obj.set_text("협력사원 매장근무 요청서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "711", "0", "77", "21", null, null, this);
            obj.set_taborder("746");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "234", "51", "205", "29", null, null, this);
            obj.set_taborder("749");
            obj.set_text("월 소요액");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "101", "51", "134", "29", null, null, this);
            obj.set_taborder("750");
            obj.set_text("세부내역");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "437", "51", null, "29", "0", null, this);
            obj.set_taborder("751");
            obj.set_text("산출근거");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "101", "79", "134", "29", null, null, this);
            obj.set_taborder("752");
            obj.set_text("인건비");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "101", "107", "134", "29", null, null, this);
            obj.set_taborder("753");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "101", "135", "134", "29", null, null, this);
            obj.set_taborder("754");
            obj.set_text("계(a)");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", null, "30", "78", "21", "0", null, this);
            obj.set_taborder("755");
            obj.set_text("(단워 : 천원)");
            obj.set_cssclass("sta_WF_GridCount");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "234", "79", "205", "29", null, null, this);
            obj.set_taborder("756");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "234", "107", "205", "29", null, null, this);
            obj.set_taborder("757");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "234", "135", "205", "29", null, null, this);
            obj.set_taborder("758");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "437", "79", null, "29", "0", null, this);
            obj.set_taborder("759");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "437", "107", null, "29", "0", null, this);
            obj.set_taborder("760");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "437", "135", null, "29", "0", null, this);
            obj.set_taborder("761");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "0", "27", "218", "21", null, null, this);
            obj.set_taborder("762");
            obj.set_text("1. 종업원 파견에 따른 소요비용");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "0", "191", "235", "29", null, null, this);
            obj.set_taborder("764");
            obj.set_text("실현예상이익(b-a)");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "0%", "79", "102", "85", null, null, this);
            obj.set_taborder("767");
            obj.set_text("소용비용");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "234", "191", null, "29", "0%", null, this);
            obj.set_taborder("776");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lbrcsClcnBass", "absolute", "440", "83", null, "21", "0.76%", null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_etcClcnBass", "absolute", "440", "111", null, "21", "0.76%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("805");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lbrcs", "absolute", "237", "83", "198", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_etc", "absolute", "237", "111", "198", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_pmtnEmpeSs", "absolute", "237", "138", "198", "21", null, null, this);
            obj.set_taborder("808");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rlzXpcPft", "absolute", "237", "195", null, "21", "0.76%", null, this);
            obj.set_taborder("814");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "51", "102", "29", null, null, this);
            obj.set_taborder("815");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "0", "163", "102", "29", null, null, this);
            obj.set_taborder("816");
            obj.set_text("예상이익");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "101", "163", "134", "29", null, null, this);
            obj.set_taborder("817");
            obj.set_text("월매출액");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_maeNedBass", "absolute", "440", "138", null, "21", "0.76%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "234", "163", null, "29", "0", null, this);
            obj.set_taborder("819");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_mslam", "absolute", "237", "167", "198", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "437", "163", "134", "29", null, null, this);
            obj.set_taborder("821");
            obj.set_text("월매출이익(b)");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_mslamPft", "absolute", "573", "167", null, "21", "0.76%", null, this);
            obj.set_taborder("6");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 220, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("협력사원 매장근무 요청서");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item5","edt_lbrcsClcnBass","value","ds_etcEltCtrw01","LBRCS_CLCN_BASS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_etcClcnBass","value","ds_etcEltCtrw01","ETC_CLCN_BASS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","mae_lbrcs","value","ds_etcEltCtrw01","LBRCS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","mae_etc","value","ds_etcEltCtrw01","ETC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","mae_pmtnEmpeSs","value","ds_etcEltCtrw01","NED_SS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","mae_rlzXpcPft","value","ds_etcEltCtrw01","RLZ_XPC_PFT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_maeNedBass","value","ds_etcEltCtrw01","NED_BASS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","mae_mslam","value","ds_etcEltCtrw01","MSLAM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","mae_mslamPft","value","ds_etcEltCtrw01","MSLAM_PFT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211340.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211340.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0 ;  //데이터 체크 

        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {

        	// this.ds_addEltCtrwDtl01.copyData(this.parent.ds_addEltCtrwDtl);   

        	// 폼양식
           for(var i = 0 ; i < this.parent.ds_etcEltStylAmm.rowcount; i++){		

        		if(this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "501"){

        			this.ds_etcEltStylAmm501.copyRow(0, this.parent.ds_etcEltStylAmm ,i);   	
        		}
        	}		 

        	 for(var i = 0 ; i < this.parent.ds_etcEltCtrw.rowcount; i++){		

        		if(this.parent.ds_etcEltCtrw.getColumn(i, "ETC_CTRW_KDC") =="501"){
        		
        			fv_position = i;
        			fv_chk = 1 ;
        			this.ds_etcEltCtrw01.addRow();
        			this.ds_etcEltCtrw01.copyRow(0, this.parent.ds_etcEltCtrw ,fv_position);   	
        			
        		}
        	 }
        	
        	if (fv_chk == 0 ){
        	
        		var nRow = this.parent.ds_etcEltCtrw.addRow();
        		fv_position = nRow;
        		this.parent.ds_etcEltCtrw.setColumn(fv_position, "ETC_CTRW_KDC" , "501") ;	
        		this.parent.ds_etcEltCtrw.setColumn(fv_position, "CHG_SQNO" ,this.parent.ds_register.getColumn(0 ,"CHG_SQNO" ) ) ;	
        			
        			
        		this.parent.ds_etcEltCtrw.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm501.getColumn(0,"CTRW_STY_VER") ) ;		
        		this.ds_etcEltCtrw01.addRow();
        		this.ds_etcEltCtrw01.copyRow(0, this.parent.ds_etcEltCtrw ,fv_position);   	
        		
        		
        		if(application.gv_serverType  ==  "LOCAL") {//개발			
        			this.mae_lbrcs.set_value("111") ;
        			this.mae_etc.set_value("224,544,552") ;
        			this.edt_lbrcsClcnBass.set_value("TRERT") ;
        			this.edt_etcClcnBass.set_value("SSSSS") ;
        			this.edt_maeNedBass.set_value("UUUUU") ;
        			this.mae_mslam.set_value("4444") ;
        			this.mae_mslamPft.set_value("5555") ;
        			this.OMG_DS_SC_211340_ontextchanged();

        		}
        		
        			
        	}
        	
        // 		trace("**********************OMG_DS_SC_211340_ontextchanged***************************");
        // 		trace(this.parent.ds_etcEltCtrw.saveXML());	
        // 		trace("*************************************************");
        	
         		
        }

        

        this.OMG_DS_SC_211340_ontextchanged = function(obj,e)
        {

        	
        	var num01 = 0;
        	var num02 = 0;
        	var num03 = 0;
        	

        	if(this.mae_lbrcs.value != undefined){
        		 num01 = nexacro.toNumber(this.mae_lbrcs.value);  // 인건비
        	}
        	if(this.mae_etc.value != undefined){

        		 num02 = nexacro.toNumber(this.mae_etc.value);  // 기타
        	}
        	this.mae_pmtnEmpeSs.set_value(num01 + num02 );   // 소용 비용 소계
        	
        	// 월매출이익 
        	if(this.mae_mslamPft.value != undefined){
        		 num03 = nexacro.toNumber(this.mae_mslamPft.value);
        	}
        	
        	 // 실현예상이익(b-a)
        	this.mae_rlzXpcPft.set_value((num01 + num02) - num03 );  
        	
        	this.parent.ds_etcEltCtrw.setColumn(fv_position, "LBRCS" , this.mae_lbrcs.value) ;   //월 소요액 인건비
        	this.parent.ds_etcEltCtrw.setColumn(fv_position, "LBRCS_CLCN_BASS" , this.edt_lbrcsClcnBass.value) ;  //인건비 산출근거
        	this.parent.ds_etcEltCtrw.setColumn(fv_position, "ETC" , this.mae_etc.value) ;   //월 소요액  기타비 
        	this.parent.ds_etcEltCtrw.setColumn(fv_position, "ETC_CLCN_BASS" , this.edt_etcClcnBass.value) ;//기타 산출근거      
        	this.parent.ds_etcEltCtrw.setColumn(fv_position, "NED_SS" , this.mae_pmtnEmpeSs.value) ;  //계      
        	this.parent.ds_etcEltCtrw.setColumn(fv_position, "NED_BASS" , this.edt_maeNedBass.value) ;  //계  산출 근거
        	
        	this.parent.ds_etcEltCtrw.setColumn(fv_position, "MSLAM" , this.mae_mslam.value) ; //월매출액
        	this.parent.ds_etcEltCtrw.setColumn(fv_position, "MSLAM_PFT" , this.mae_mslamPft.value) ; //월매출액이익
        	this.parent.ds_etcEltCtrw.setColumn(fv_position, "RLZ_XPC_PFT" , this.mae_rlzXpcPft.value) ; //실현 예상 이익 
        	

        }

        
        /* Validation Check */
        this.fn_validationCheck = function(){

        	var strTitletext = "협력사원 매장근무 요청서";

         	if(this.gfn_isNull(this.mae_lbrcs.value) ){
        		this.mae_lbrcs.setFocus();
         		this.alert(strTitletext + " 소요비용 인건비를 입력하세요. ");
         		return false;
         	}
        	
        	if(this.gfn_isNull(this.edt_lbrcsClcnBass.value)){
        		this.edt_lbrcsClcnBass.setFocus();
        		this.alert(strTitletext + " 소요비용 인건비 산출근거을 입력하세요.");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.mae_etc.value)){
        		this.mae_etc.setFocus();
        		this.alert(strTitletext + " 소요비용 기타비을 입력하세요.");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edt_etcClcnBass.value)){
        		this.edt_etcClcnBass.setFocus();
        		this.alert(strTitletext + " 소요비용  기타 산출근거을 입력하세요.");
        		return false;
        	}
        	
        // 	if(this.gfn_isNull(this.mae_mmSlAmDspcBf1.value)){
        // 		this.mae_mmSlAmDspcBf1.setFocus();
        // 		this.alert(strTitletext + "소요비용 기타 산");
        // 		return false;
        // 	}
        	
        	if(this.gfn_isNull(this.mae_mslam.value)){
        		this.mae_mslam.setFocus();
        		this.alert(strTitletext + " 예상이익 월 매출액을 입력하세요.");
        		return false;
        	}

        	if(this.gfn_isNull(this.mae_mslamPft.value)){
        		this.mae_mmSlAmDspcBf2.setFocus();
        		this.alert(strTitletext + " 예상이익 월 매출액이익(b)을 입력하세요. ");
        		return false;
        	}
        	his.parent.ds_sctrwDtl.setColumn(fv_position, "SCTR_SJT" , this.txa_sctrSjt.value) ;         //특약사항

        	return true;
        }
        this.text_changed = function(){
        	this.parent.ds_sctrwDtl.setColumn(fv_position, "SCTR_SJT" , this.txa_sctrSjt.value) ;         //특약사항
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.edt_lbrcsClcnBass.addEventHandler("ontextchanged", this.OMG_DS_SC_211340_ontextchanged, this);
            this.edt_etcClcnBass.addEventHandler("ontextchanged", this.OMG_DS_SC_211340_ontextchanged, this);
            this.mae_lbrcs.addEventHandler("ontextchanged", this.OMG_DS_SC_211340_ontextchanged, this);
            this.mae_etc.addEventHandler("ontextchanged", this.OMG_DS_SC_211340_ontextchanged, this);
            this.mae_pmtnEmpeSs.addEventHandler("ontextchanged", this.OMG_DS_SC_211340_ontextchanged, this);
            this.mae_rlzXpcPft.addEventHandler("ontextchanged", this.OMG_DS_SC_211340_ontextchanged, this);
            this.edt_maeNedBass.addEventHandler("ontextchanged", this.OMG_DS_SC_211340_ontextchanged, this);
            this.mae_mslam.addEventHandler("ontextchanged", this.OMG_DS_SC_211340_ontextchanged, this);
            this.mae_mslamPft.addEventHandler("ontextchanged", this.OMG_DS_SC_211340_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211340.xfdl", true);

       
    };
}
)();
