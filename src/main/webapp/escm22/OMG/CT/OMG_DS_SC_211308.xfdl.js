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
                this.set_name("OMG_DS_SC_211308");
                this.set_titletext("특약매입_거래계약서(농협유통_수산)");
                this._setFormPosition(0,0,788,245);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_etcEltStylAmm108", this);
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

            obj = new Dataset("ds_eltCtrwDtl08", this);
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
            obj = new Static("Static11", "absolute", "13.83%", "55", null, "29", "0%", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "13.83%", "27", null, "29", "0%", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "27", null, "29", "86%", null, this);
            obj.set_taborder("6");
            obj.set_text("상품대금 지급");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "30.96%", "55", null, "29", "55.08%", null, this);
            obj.set_taborder("7");
            obj.set_text("보증금");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "30.96%", "27", null, "29", "55.08%", null, this);
            obj.set_taborder("9");
            obj.set_text("상품공급액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "0", "2", "57.99%", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("특약매입_거래계약서(농협유통_수산)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "0", "55", null, "29", "86%", null, this);
            obj.set_taborder("11");
            obj.set_text("하자보증금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "27.54%", "59", null, "21", "69.54%", null, this);
            obj.set_taborder("12");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "62.06%", "61", null, "21", "35.03%", null, this);
            obj.set_taborder("13");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.83%", "83", null, "80", "0%", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "62.06%", "31", null, "21", "35.15%", null, this);
            obj.set_taborder("14");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "27.54%", "31", null, "21", "69.54%", null, this);
            obj.set_taborder("15");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "83", null, "80", "86%", null, this);
            obj.set_taborder("16");
            obj.set_text("마진율");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_rt", "absolute", "14.21%", "87", null, "72", "0.76%", null, this);
            obj.set_taborder("4");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "697", "0", "9.77%", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_wrsSpyam", "absolute", "45.3%", "31", null, "21", "38.58%", null, this);
            obj.set_taborder("1");
            obj.set_mask("+999.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_grmy", "absolute", "45.3%", "59", null, "21", "38.58%", null, this);
            obj.set_taborder("3");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_blmGrmy", "absolute", "14.21%", "59", null, "21", "73.22%", null, this);
            obj.set_taborder("2");
            obj.set_mask("+999.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_wrsPrmPy", "absolute", "14.21%", "31", null, "21", "73.1%", null, this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "13.83%", "162", null, "80", "0%", null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "162", null, "80", "86.04%", null, this);
            obj.set_taborder("21");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "14.21%", "166", null, "72", "0.51%", null, this);
            obj.set_taborder("22");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1000");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 245, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("특약매입_거래계약서(농협유통_수산)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item6","txa_rt","value","ds_eltCtrwDtl08","RT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","mae_wrsSpyam","value","ds_eltCtrwDtl08","WRS_SPYAM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","mae_grmy","value","ds_eltCtrwDtl08","GRMY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","mae_blmGrmy","value","ds_eltCtrwDtl08","BLM_GRMY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","edt_wrsPrmPy","value","ds_eltCtrwDtl08","WRS_PRM_PY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","txa_sctrSjt","value","ds_eltCtrwDtl01","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211308.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211308.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

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

        		if(this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "108"){

        			this.ds_etcEltStylAmm108.copyRow(0, this.parent.ds_etcEltStylAmm ,i);   	
        		}
        	}	

        
           for(var i = 0 ; i < this.parent.ds_eltCtrwDtl.rowcount; i++){		

        		if(this.parent.ds_eltCtrwDtl.getColumn(i, "MN_CTRW_KDC") == "108"){
        		
        			fv_position = i;
        			fv_chk = 1 ;

        			this.parent.ds_eltCtrwDtl.setColumn(i, "PHD_FEERT" , "") ;       //물류수수료율
        			this.parent.ds_eltCtrwDtl.setColumn(i, "CNR_DT" , "") ;           //검수일
        			this.parent.ds_eltCtrwDtl.setColumn(i, "PSG_MM" , "") ;             //경과분/월
        			this.parent.ds_eltCtrwDtl.setColumn(i, "PSG_DD" , "") ;             //경과분/일
        			this.parent.ds_eltCtrwDtl.setColumn(i, "ETR_FEE" , "") ;           //수탁수수료
        //			this.parent.ds_eltCtrwDtl.setColumn(i, "SCTR_SJT" , "") ;         //특약사항
        			this.parent.ds_eltCtrwDtl.setColumn(i, "CTRW_TINM" , "") ;  //계약서 제목
        			//this.parent.ds_eltCtrwDtl.setColumn(i, "BLM_GRMY" , " ") ;         //하자보증금
        			//this.parent.ds_eltCtrwDtl.setColumn(i, "RT" , " ") ;  //마진율
        			//this.parent.ds_eltCtrwDtl.setColumn(i, "WRS_PRM_PY" , " ") ;         //상품대금 지금 
        			//this.parent.ds_eltCtrwDtl.setColumn(i, "GRMY" , " ") ;  //보증금
        			//this.parent.ds_eltCtrwDtl.setColumn(i, "WRS_SPYAM" , " ") ;         //상품공급액
        			this.parent.ds_eltCtrwDtl.setColumn(i, "CTR_CLO" , "") ;  //계약해지  
        			
        			
        			if(this.parent.ds_eltCtrwDtl.getColumn(i, "CTRW_STY_VER") == "" ){
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm108.getColumn(0,"CTRW_STY_VER") ) ;		

        			}

        			//this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm102.getColumn(0,"CTRW_STY_VER") ) ;
        			this.ds_eltCtrwDtl08.addRow();
        			this.ds_eltCtrwDtl08.copyRow(0, this.parent.ds_eltCtrwDtl ,fv_position);   	
        		
        			
        		}
        	}
        	
        	if (fv_chk == 0 ){
        	
        		this.parent.ds_eltCtrwDtl.deleteAll();
        		var nRow = this.parent.ds_eltCtrwDtl.addRow();
        		fv_position = nRow;
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "MN_CTRW_KDC" , "108") ;		
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO" , this.parent.ds_register.getColumn(0 ,"CHG_SQNO" ) ) ;		
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm108.getColumn(0,"CTRW_STY_VER") ) ;		
        		
        		
        		this.ds_eltCtrwDtl08.addRow();
        		this.ds_eltCtrwDtl08.copyRow(0, this.parent.ds_eltCtrwDtl ,fv_position);   	
        		
        		
        		this.parent.position_chk();	
        	}
        	
        		trace("**********************OMG_DS_SC_211308_ontextchanged***************************");
        		trace(this.parent.ds_eltCtrwDtl.saveXML());	
        		trace("*************************************************");
         		
        }

        this.OMG_DS_SC_211308_ontextchanged = function(obj,e)
        {
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "WRS_PRM_PY" , this.edt_wrsPrmPy.value) ;           //수탁수수료
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "WRS_SPYAM" , this.mae_wrsSpyam.value) ;           //수탁수수료
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "BLM_GRMY" , this.mae_blmGrmy.value) ;         //판매대금
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "GRMY" , this.mae_grmy.value) ;  //판매된 상품대금
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "RT" , this.txa_rt.value) ;         //특약사항
        	
        	
        }

        
        /* Validation Check */
        this.fn_validationCheck = function(){

        	var strTitletext = "특약매입_거래계약서(농협유통_수산) ";

        	if(this.gfn_isNull(this.edt_wrsPrmPy.value)){
        		this.edt_wrsPrmPy.setFocus();
        		this.alert(strTitletext + " 상품대금 지금을 입력하세요.");
        		return false;
        	}
        		
        	if(this.gfn_isNull(this.mae_wrsSpyam.value)){
        		this.mae_wrsSpyam.setFocus();
        		this.alert(strTitletext + " 상품공급액을 입력하세요.");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.mae_blmGrmy.value)){
        		this.mae_blmGrmy.setFocus();
        		this.alert(strTitletext + " 하자보증금을  입력하세요.");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.mae_grmy.value)){
        		this.mae_grmy.setFocus();
        		this.alert(strTitletext + " 보증금을 입력하세요.");
        		return false;
        	}	

        	if(this.gfn_isNull(this.txa_rt.value)){
        		this.txa_rt.setFocus();
        		this.alert(strTitletext + " 마진율을 입력하세요.");
        		return false;
        	}		
        	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "SCTR_SJT" , this.txa_sctrSjt.value) ;         //특약사항
        	return true;
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.fn_validationCheck();
        	trace(this.ds_eltCtrwDtl08.saveXML()) ;
        	trace(this.parent.ds_eltCtrwDtl.saveXML()) ;
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
            this.txa_rt.addEventHandler("ontextchanged", this.OMG_DS_SC_211308_ontextchanged, this);
            this.Button10.addEventHandler("onclick", this.Button00_onclick, this);
            this.mae_wrsSpyam.addEventHandler("ontextchanged", this.OMG_DS_SC_211308_ontextchanged, this);
            this.mae_grmy.addEventHandler("ontextchanged", this.OMG_DS_SC_211308_ontextchanged, this);
            this.mae_blmGrmy.addEventHandler("ontextchanged", this.OMG_DS_SC_211308_ontextchanged, this);
            this.edt_wrsPrmPy.addEventHandler("ontextchanged", this.OMG_DS_SC_211308_ontextchanged, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.txatext_changed, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211308.xfdl", true);

       
    };
}
)();
