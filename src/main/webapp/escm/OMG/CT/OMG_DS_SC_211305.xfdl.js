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
                this.set_name("OMG_DS_SC_211305");
                this.set_titletext("특약매입거래(  )거래계약서");
                this._setFormPosition(0,0,788,187);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_etcEltStylAmm105", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_eltCtrwDtl05", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"MN_CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"메인계약서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"CNR_DT\" type=\"STRING\" size=\"256\" sumtext=\"검수일\"/><Column id=\"PSG_MM\" type=\"STRING\" size=\"256\" sumtext=\"경과분/월\"/><Column id=\"PSG_DD\" type=\"STRING\" size=\"256\" sumtext=\"경과분/일\"/><Column id=\"ETR_FEE\" type=\"STRING\" size=\"256\" sumtext=\"수탁수수료\"/><Column id=\"PHD_FEERT\" type=\"STRING\" size=\"256\" sumtext=\"물류수수료율\"/><Column id=\"LIG_PLTPE\" type=\"STRING\" size=\"256\" sumtext=\"주류파렛트당\"/><Column id=\"MEXP_DD\" type=\"STRING\" size=\"256\" sumtext=\"관리비일\"/><Column id=\"RT\" type=\"STRING\" size=\"256\" sumtext=\"마진율\"/><Column id=\"BLM_GRMY\" type=\"STRING\" size=\"256\" sumtext=\"하자보증금\"/><Column id=\"WRS_PRM_PY\" type=\"STRING\" size=\"256\" sumtext=\"상품대금 지금\"/><Column id=\"GRMY\" type=\"STRING\" size=\"256\" sumtext=\"보증금\"/><Column id=\"WRS_SPYAM\" type=\"STRING\" size=\"256\" sumtext=\"상품공급액\"/><Column id=\"CTR_CLO\" type=\"STRING\" size=\"256\" sumtext=\"계약해지\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_TINM\" type=\"STRING\" size=\"256\" sumtext=\"제목\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static11", "absolute", "13.83%", "54", null, "29", "0%", null, this);
            obj.set_taborder("711");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "13.83%", "27", null, "29", "0%", null, this);
            obj.set_taborder("714");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "13.83%", "81", null, "29", "0%", null, this);
            obj.set_taborder("719");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "30.96%", "53", null, "29", "55.08%", null, this);
            obj.set_taborder("713");
            obj.set_text("하자보증금율");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "30.96%", "27", null, "29", "55.08%", null, this);
            obj.set_taborder("715");
            obj.set_text("경과분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_psgMm", "absolute", "45.3%", "31", null, "21", "44.42%", null, this);
            obj.set_taborder("1");
            obj.style.set_align("right middle");
            obj.set_maxlength("2");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "27", null, "29", "86%", null, this);
            obj.set_taborder("712");
            obj.set_text("검수일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "0", "2", "57.99%", "21", null, null, this);
            obj.set_taborder("718");
            obj.set_text("특약매입거래( )거래계약서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "27.54%", "61", null, "21", "69.54%", null, this);
            obj.set_taborder("724");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.83%", "107", null, "80", "0%", null, this);
            obj.set_taborder("733");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "62.06%", "59", null, "21", "35.15%", null, this);
            obj.set_taborder("725");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "56.09%", "31", null, "21", "37%", null, this);
            obj.set_taborder("728");
            obj.set_text(" 월( ) 회");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "27.54%", "31", null, "21", "69.54%", null, this);
            obj.set_taborder("729");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "84.52%", "31", null, "21", "13.07%", null, this);
            obj.set_taborder("730");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_psgDd", "absolute", "63.32%", "31", null, "21", "30.33%", null, this);
            obj.set_taborder("2");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "0", "55", null, "29", "86%", null, this);
            obj.set_taborder("720");
            obj.set_text("마진율");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "14.21%", "111", null, "72", "0.7%", null, this);
            obj.set_taborder("7");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1000");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "697", "0", "9.77%", "21", null, null, this);
            obj.set_taborder("735");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cnrDt", "absolute", "14.21%", "31", null, "21", "73.22%", null, this);
            obj.set_taborder("0");
            obj.style.set_align("right middle");
            obj.set_inputtype("number");
            obj.set_maxlength("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "107", null, "80", "86%", null, this);
            obj.set_taborder("732");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_blmGr", "absolute", "45.3%", "59", null, "21", "38.58%", null, this);
            obj.set_taborder("5");
            obj.set_mask("+999.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rt", "absolute", "14.21%", "59", null, "21", "73.22%", null, this);
            obj.set_taborder("4");
            obj.set_mask("+999.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("744");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_psgDd00", "absolute", "70.43%", "31", null, "21", "23.22%", null, this);
            obj.set_taborder("3");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0%", "81", null, "27", "86%", null, this);
            obj.set_taborder("745");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14.21%", "84", null, "21", "76.9%", null, this);
            obj.set_taborder("746");
            obj.set_text("특약매입");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("white");
            obj.style.set_border("0 none white");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "34.77%", "84", null, "21", "56.35%", null, this);
            obj.set_taborder("747");
            obj.set_text("거래계약서");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("white");
            obj.style.set_border("0 none white");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CtrwTinm", "absolute", "22.08%", "84", null, "21", "64.47%", null, this);
            obj.set_taborder("6");
            obj.set_maxlength("64");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_psgDd01", "absolute", "77.28%", "31", null, "21", "16.37%", null, this);
            obj.set_taborder("748");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 187, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("특약매입거래(  )거래계약서");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","edt_psgMm","value","ds_eltCtrwDtl05","PSG_MM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","txa_sctrSjt","value","ds_eltCtrwDtl05","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_cnrDt","value","ds_eltCtrwDtl05","CNR_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","mae_blmGr","value","ds_eltCtrwDtl05","RT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","mae_rt","value","ds_eltCtrwDtl05","BLM_GRMY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_CtrwTinm","value","ds_eltCtrwDtl05","CTRW_TINM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211305.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211305.xfdl", function() {
        //include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0 ;  //데이터 체크 

        
        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); //공통
          
        }

        this.fn_afterFormOnload = function()
        {
         		
        	// 폼양식
           for(var i = 0 ; i < this.parent.ds_etcEltStylAmm.rowcount; i++){		

        		if(this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "105"){

        			this.ds_etcEltStylAmm105.copyRow(0, this.parent.ds_etcEltStylAmm ,i);   	
        		}
        	}	

        
           for(var i = 0 ; i < this.parent.ds_eltCtrwDtl.rowcount; i++){		

        		if(this.parent.ds_eltCtrwDtl.getColumn(i, "MN_CTRW_KDC") == "105"){
        		
        			fv_position = i;
        			fv_chk = 1 ;

        			this.parent.ds_eltCtrwDtl.setColumn(i, "PHD_FEERT" , " ") ;       //물류수수료율
        			this.parent.ds_eltCtrwDtl.setColumn(i, "LIG_PLTPE" , " ") ;       //주류파렛트당
        			this.parent.ds_eltCtrwDtl.setColumn(i, "MEXP_DD" , " ") ;           //관리비일
        			this.parent.ds_eltCtrwDtl.setColumn(i, "ETR_FEE" , " ") ;           //관리비일
        			
        	//		this.parent.ds_eltCtrwDtl.setColumn(i, "BLM_GRMY" , " ") ;         //하자보증금
        	//		this.parent.ds_eltCtrwDtl.setColumn(i, "RT" , " ") ;  //마진율
        			this.parent.ds_eltCtrwDtl.setColumn(i, "WRS_PRM_PY" , " ") ;         //상품대금 지금 
        			this.parent.ds_eltCtrwDtl.setColumn(i, "GRMY" , " ") ;  //보증금
        			this.parent.ds_eltCtrwDtl.setColumn(i, "WRS_SPYAM" , " ") ;         //상품공급액
        			this.parent.ds_eltCtrwDtl.setColumn(i, "CTR_CLO" , " ") ;  //계약해지  		
        			this.parent.ds_eltCtrwDtl.setColumn(i, "PHD_FEERT1" , " ") ; 
         			this.parent.ds_eltCtrwDtl.setColumn(i, "PHD_FEERT2" , " ") ;	

        			this.parent.ds_eltCtrwDtl.setColumn(i, "ETC1" , " ") ; 
        			this.parent.ds_eltCtrwDtl.setColumn(i, "ETC2" , " ") ; 
        			this.parent.ds_eltCtrwDtl.setColumn(i, "ETC3" , " ") ; 
        			
        			if (this.gfn_isNull(this.parent.ds_eltCtrwDtl.getColumn(i, "CTRW_TINM"))){
        				this.parent.ds_eltCtrwDtl.setColumn(i, "CTRW_TINM" ,"단기행사용" ) ;		
        			}
        			
        			if(this.parent.ds_eltCtrwDtl.getColumn(i, "CTRW_STY_VER") == "" ){
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm105.getColumn(0,"CTRW_STY_VER") ) ;		

        			}

        			//this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm102.getColumn(0,"CTRW_STY_VER") ) ;
        			this.ds_eltCtrwDtl05.addRow();
        			this.ds_eltCtrwDtl05.copyRow(0, this.parent.ds_eltCtrwDtl ,fv_position);   	

        			

        			var edt_psgDd = this.ds_eltCtrwDtl05.getColumn(0,"PSG_DD") ;

        
        			if(edt_psgDd =="초"  ||edt_psgDd =="말" ){
        				this.edt_psgDd.set_value(edt_psgDd);
        				this.edt_psgDd00.set_value("");
        				this.edt_psgDd01.set_value("");
        			}else{

        				var edt_psgDd = edt_psgDd.split("|");
        				if(edt_psgDd.length == 3){
        					this.edt_psgDd.set_value(edt_psgDd[0]);
        					this.edt_psgDd00.set_value(edt_psgDd[1]);
        					this.edt_psgDd01.set_value(edt_psgDd[2]);
        				}else if(edt_psgDd.length == 2) {
        					this.edt_psgDd.set_value(edt_psgDd[0]);
        					this.edt_psgDd00.set_value(edt_psgDd[1]);
        				}else if(edt_psgDd.length == 1) {
        					this.edt_psgDd.set_value(edt_psgDd[0]);
        				}
        			}
        			
        		}
        	}
        	
        	if (fv_chk == 0 ){
        	
        		this.parent.ds_eltCtrwDtl.deleteAll();
        		var nRow = this.parent.ds_eltCtrwDtl.addRow();
        		fv_position = nRow;
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "MN_CTRW_KDC" , "105") ;		
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO" , this.parent.ds_register.getColumn(0 ,"CHG_SQNO" ) ) ;		
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm105.getColumn(0,"CTRW_STY_VER") ) ;		
        		
        		
        		this.ds_eltCtrwDtl05.addRow();
        		this.ds_eltCtrwDtl05.copyRow(0, this.parent.ds_eltCtrwDtl ,fv_position);   	
        		
        		
        		this.parent.position_chk();	
        	}
        	
        // 		trace("**********************OMG_DS_SC_211304_ontextchanged***************************");
        // 		trace(this.parent.ds_eltCtrwDtl.saveXML());	
        // 		trace("*************************************************");
         		
        }

        this.OMG_DS_SC_211305_ontextchanged = function(obj,e)
        {
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CNR_DT" , this.edt_cnrDt.value) ;           //검수일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "PSG_MM" , this.edt_psgMm.value) ;           //경과분 월 ()회

        	var psgDdTemp1 = "";
        	var psgDdTemp2 = "";
        	var psgDd = "";
        	
        	//psgDd = gfn_isNull(this.edt_psgDd.value)  + "/" + gfn_isNull(this.edt_psgDd00.value) + "/" + gfn_isNull(this.edt_psgDd01.value) + "/";
        	
        	psgDd = this.edt_psgDd.value + "/";
        	if(this.edt_psgDd00.value) psgDd += this.edt_psgDd00.value + "/";
        	if(this.edt_psgDd01.value) psgDd += this.edt_psgDd01.value;
        	
        	var ar = psgDd.split("/");
        	var val = "";
        	for(var i=0; i<ar.length; i++){
        		if(ar[i] != '') val += ar[i] + "|";
        	}
        	val = val.substring(0,val.length-1);
        	
        	this.ds_eltCtrwDtl05.setColumn(0,"PSG_DD" , val) ;
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "PSG_DD" , val) ;             //경과분/일
        	//this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETR_FEE" , this.mae_etrFee.value) ;           //수탁수수료
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "RT" , this.mae_rt.value) ;         //마진율
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "BLM_GRMY" , this.mae_blmGr.value) ;  //하자보증금율
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_TINM" , this.edt_CtrwTinm.value) ;         //계약서이름
        }

        
        /* Validation Check */
        this.fn_validationCheck = function(){

        	var strTitletext = "특약매입거래 거래계약서";

         	if(this.gfn_isNull(this.edt_cnrDt.value) ){
        		this.edt_cnrDt.setFocus();
         		this.alert(strTitletext + " 검수일자를 입력하세요. ");
         		return false;
         	}else{
         		var  IntEdtCnrDt =  nexacro.toNumber(this.edt_cnrDt.value);
         		
        		if (IntEdtCnrDt < 1 || IntEdtCnrDt > 99) {
        			this.edt_cnrDt.setFocus();
        			this.alert(strTitletext + " 검수 일자을 정확하게  입력하세요.");
        			return false;	
        		}
         	
         	}

        	if(this.gfn_isNull(this.edt_psgMm.value)){
        		this.edt_psgMm.setFocus();
        		this.alert(strTitletext + " 경과분 월()회을 입력하세요.");
        		return false;
        	}
        	
        	var  IntEdtPsgMm =  nexacro.toNumber(this.edt_psgMm.value);

         	if (IntEdtPsgMm < 1 || IntEdtPsgMm > 10) {
         		this.edt_psgMm.setFocus();
         		this.alert(strTitletext + " 경과분 월( )회 을 정확하게  입력하세요.");
         		return false;	
         	}
        	
        	
        	
        	
        	if(this.gfn_isNull(this.edt_psgDd.value) ==true   &&  this.gfn_isNull(this.edt_psgDd00.value) ==true){
        		this.edt_psgDd.setFocus();
        		this.alert(strTitletext + " 경과분 일을 입력하세요.");
        		return false;
        	}else{
        	
        	
        		if(this.edt_psgDd.value == "말" ||  this.edt_psgDd00.value == "말"  ||  this.edt_psgDd01.value == "말" || this.edt_psgDd.value == "초" ||  this.edt_psgDd00.value == "초" ||  this.edt_psgDd01.value == "초"){
        //			trace("말");
        		  
        		}else{
        			

        			if(this.gfn_length(this.edt_psgDd.value) > 0) {
        				
        //				trace("this.edt_psgDd.value" + this.edt_psgDd.value);
        				
        				if(this.gfn_isNum(this.edt_psgDd.value) == false){
        					this.edt_psgDd.setFocus();	
        					this.alert(strTitletext + " 경과분(첫번째) 일을 정확하게  입력하세요.");
        					return false;	
        				}
         				var  IntEdtPsgDd =  nexacro.toNumber(this.edt_psgDd.value);
          		
        				if (IntEdtPsgDd < 1 || IntEdtPsgDd > 99) {

        					this.edt_psgDd.setFocus();	
        					this.alert(strTitletext + " 경과분(첫번째) 일을 정확하게  입력하세요.");
        					return false;	
        				}
        					
        					
        					
        			}
        			if(this.gfn_length(this.edt_psgDd00.value) > 0) {	
        				
        				if(this.gfn_isNum(this.edt_psgDd00.value) ==  false){
        						this.edt_psgDd00.setFocus();	
        					this.alert(strTitletext + " 경과분(두번째) 일을 정확하게  입력하세요.");
        					return false;	
        				}
        				
        				var  IntEdtPsgDd00 =  nexacro.toNumber(this.edt_psgDd00.value);
         		
        				if (IntEdtPsgDd00 < 1 || IntEdtPsgDd00 > 99) {

        					this.edt_psgDd00.setFocus();	
        					this.alert(strTitletext + " 경과분(두번째) 일을 정확하게  입력하세요.");
        					return false;	
        				}
        				
        			}
        			
        			if(this.gfn_length(this.edt_psgDd01.value) > 0) {	
        				
        				if(this.gfn_isNum(this.edt_psgDd01.value) == false){
        						this.edt_psgDd01.setFocus();	
        					this.alert(strTitletext + " 경과분(세번째) 일을 정확하게  입력하세요.");
        					return false;	
        				}
        				var  IntEdtPsgDd01 =  nexacro.toNumber(this.edt_psgDd01.value);
        				if (IntEdtPsgDd01 < 1 || IntEdtPsgDd00 > 99) { 	
        						this.edt_psgDd01.setFocus();	
        					this.alert(strTitletext + " 경과분(세번째) 일을 정확하게  입력하세요.");
        					return false;	
        				}
        				
        			}
        		}
        	}
        		
        // 	if(this.gfn_isNull(this.mae_etrFee.value)){
        // 		this.mae_etrFee.setFocus();
        // 		this.alert(strTitletext + " 수탁수루료을 입력하세요.");
        // 		return false;
        // 	}
        	
        	if(this.gfn_isNull(this.mae_blmGr.value)){
        		this.mae_blmGr.setFocus();
        		this.alert(strTitletext + " 하자보증금율 입력하세요.");
        		return false;
        	}	
        	
        	if(this.gfn_isNull(this.mae_rt.value)){
        		this.mae_rt.setFocus();
        		this.alert(strTitletext + " 마진율을  입력하세요.");
        		return false;
        	}
        	
        	
        	if(this.gfn_isNull(this.edt_CtrwTinm.value)){
        		this.edt_CtrwTinm.setFocus();
        		this.alert(strTitletext + " 계약서 제목을 입력하세요.");
        		return false;
        	}		
        	
        	
        // 	if(this.gfn_isNull(this.txa_sctrSjt.value)){
        // 		this.txa_sctrSjt.setFocus();
        // 		this.alert(strTitletext + " 특약사항을 입력하세요.");
        // 		return false;
        // 	}

        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "SCTR_SJT" , this.txa_sctrSjt.value) ;         //특약사항
        	return true;
        }

        this.Button00_onclick = function(obj,e)
        {
        	//this.fn_validationCheck();
        // 	trace(this.ds_eltCtrwDtl05.saveXML()) ;
        // 	trace(this.parent.ds_eltCtrwDtl.saveXML()) ;
        }

        this.txatext_changed = function(obj,e)
        {
        	var text = this.txa_sctrSjt.value;
        	if(!this.gfn_isNull(text) ){
        		var lc = text.indexOf("^");
        		if(lc != -1 ){
        			alert('^는 사용하실 수 없습니다.');
        			text = nexacro.replaceAll(text,"^"," ");
        			this.txa_sctrSjt.set_value(text);
        		}
         	}
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "SCTR_SJT" , this.txa_sctrSjt.value) ;         //특약사항
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.edt_psgMm.addEventHandler("ontextchanged", this.OMG_DS_SC_211305_ontextchanged, this);
            this.Static86.addEventHandler("onclick", this.Static86_onclick, this);
            this.edt_psgDd.addEventHandler("ontextchanged", this.OMG_DS_SC_211305_ontextchanged, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.txatext_changed, this);
            this.txa_sctrSjt.addEventHandler("oneditclick", this.txa_sctrSjt_oneditclick, this);
            this.Button10.addEventHandler("onclick", this.Button00_onclick, this);
            this.edt_cnrDt.addEventHandler("ontextchanged", this.OMG_DS_SC_211305_ontextchanged, this);
            this.mae_blmGr.addEventHandler("ontextchanged", this.OMG_DS_SC_211305_ontextchanged, this);
            this.mae_rt.addEventHandler("ontextchanged", this.OMG_DS_SC_211305_ontextchanged, this);
            this.edt_psgDd00.addEventHandler("ontextchanged", this.OMG_DS_SC_211305_ontextchanged, this);
            this.edt_CtrwTinm.addEventHandler("ontextchanged", this.OMG_DS_SC_211305_ontextchanged, this);
            this.edt_psgDd01.addEventHandler("ontextchanged", this.OMG_DS_SC_211305_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211305.xfdl");

       
    };
}
)();
