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
                this.set_name("OMG_DS_SC_211313");
                this.set_titletext("PB상품공급 계약서(축산)");
                this._setFormPosition(0,0,788,135);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_etcEltStylAmm202", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식일련번호\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서종류코드\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_addEltCtrwDtl02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"ADD_CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"부가계약서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"PB_CTRW_TINM\" type=\"STRING\" size=\"256\" sumtext=\"PB계약서 제목\"/><Column id=\"CNR_DT\" type=\"STRING\" size=\"256\" sumtext=\"검수일\"/><Column id=\"PSG_MM\" type=\"STRING\" size=\"256\" sumtext=\"경과분/월\"/><Column id=\"PSG_DD\" type=\"STRING\" size=\"256\" sumtext=\"경과분/일\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_TINM\" type=\"STRING\" size=\"256\" sumtext=\"계약서제목\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\" sumtext=\"물류수수료율\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\"/><Column id=\"ETC6\" type=\"STRING\" size=\"256\"/><Column id=\"ETC7\" type=\"STRING\" size=\"256\" sumtext=\"주류파렛트당\"/><Column id=\"ETC8\" type=\"STRING\" size=\"256\" sumtext=\"관리비일\"/><Column id=\"ETC9\" type=\"STRING\" size=\"256\"/><Column id=\"ETCA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static86", "absolute", "0", "2", "467", "21", null, null, this);
            obj.set_taborder("711");
            obj.set_text("PB상품공급 계약서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", null, "0", "77", "21", "15", null, this);
            obj.set_taborder("712");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("725");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.83%", "51", null, "80", "0%", null, this);
            obj.set_taborder("736");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "51", null, "80", "86.04%", null, this);
            obj.set_taborder("737");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("middle");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "14.59%", "58", null, "72", "0.25%", null, this);
            obj.set_taborder("738");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "13.83%", "27", null, "29", "0.25%", null, this);
            obj.set_taborder("741");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("etc1", "absolute", "14.34%", "31", null, "21", "61.04%", null, this);
            obj.set_taborder("751");
            obj.set_maxlength("5");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "27", null, "29", "86.04%", null, this);
            obj.set_taborder("757");
            obj.set_text("브랜드명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 135, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("PB상품공급 계약서(축산)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item5","etc1","value","ds_addEltCtrwDtl02","CNR_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","txa_sctrSjt","value","ds_addEltCtrwDtl02","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211313.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211313.xfdl", function(exports) {
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

        		if(this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "202"){

        			this.ds_etcEltStylAmm202.copyRow(0, this.parent.ds_etcEltStylAmm ,i);   	
        			
        			
        		}
        	} 

        	 
           for(var i = 0 ; i < this.parent.ds_addEltCtrwDtl.rowcount; i++){		

        		if(this.parent.ds_addEltCtrwDtl.getColumn(i, "ADD_CTRW_KDC") =="202"){
        		
        			fv_position = i;
        			fv_chk = 1 ;
        			this.ds_addEltCtrwDtl02.addRow();
        			this.ds_addEltCtrwDtl02.copyRow(0, this.parent.ds_addEltCtrwDtl ,fv_position);   	
        			
        		trace(this.ds_addEltCtrwDtl02.saveXML())	;
        			
        		var etc1 = this.ds_addEltCtrwDtl02.getColumn(0,"ETC1") ;	
        		
        		trace("edt_psgDd 1=>>  " +edt_psgDd)	;
        		
        			/**
        			if(edt_psgDd == "초"   || edt_psgDd == "말"  ){
        					this.edt_psgDd.set_value(edt_psgDd);
        					this.edt_psgDd00.set_value("");
        			}else{

        				var edt_psgDd = edt_psgDd.split("|");
        				if(edt_psgDd.length == 2) {
        					this.edt_psgDd.set_value(edt_psgDd[0]);
        					this.edt_psgDd00.set_value(edt_psgDd[1]);
        				}else if(edt_psgDd.length == 1) {
        					this.edt_psgDd.set_value(edt_psgDd[0]);
        				}
        			}
        			**/
        			
        			
        		}
        // 		else{
        // 			fv_position = i;
        // 		}
        	}
        		
         	
        	if (fv_chk == 0 ){

        		var nRow = this.parent.ds_addEltCtrwDtl.addRow();
        		fv_position = nRow;
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ADD_CTRW_KDC" , "202") ;		
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "CHG_SQNO" ,this.parent.ds_register.getColumn(0 ,"CHG_SQNO" ) ) ;		
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "PB_CTRW_TINM" ,"PB 거래 계약서(축산)" ) ;		
        		
        		
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm202.getColumn(0,"CTRW_STY_VER") ) ;		
        		this.ds_addEltCtrwDtl02.addRow();
        		this.ds_addEltCtrwDtl02.copyRow(0, this.parent.ds_addEltCtrwDtl ,fv_position);   	
        		

        		
        	}
        	
        // 		trace("**********************OMG_DS_SC_211310_ontextchanged***************************");
        // 		trace(this.parent.ds_addEltCtrwDtl.saveXML());	
        // 		trace("*************************************************");	

        }

        

        this.OMG_DS_SC_211313_ontextchanged = function(obj,e)
        {
        	var text = this.txa_sctrSjt.value;
        	var lc = text.indexOf("^");
        	if(lc != -1 ){
        		alert('^는 사용하실 수 없습니다.');
        		text = text.replace(/^/g,"");
        		this.txa_sctrSjt.set_value(text);
        	}
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "PB_CTRW_TINM" , this.edt_pbCtrwTinm.value) ; //PB계약서 제목
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "CNR_DT" , this.edt_cnrDt.value) ; //검수일
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "PSG_MM" , this.edt_psgMm.value) ; //경과분 월
        	
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC1" , this.etc1.value) ; //비율1
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC2" , this.etc2.value) ; //비율2
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC3" , this.etc3.value) ; //비율3
        	

        	var psgDdTemp1 = "";
        	var psgDdTemp2 = "";
        	var psgDd = "";
        	
        	trace("edt_psgDd  =>>>  " + this.gfn_isNull(this.edt_psgDd.value));
        	
        	if(( this.gfn_isNull(this.edt_psgDd.value) == false )  && (this.gfn_isNull(this.edt_psgDd00.value) == false) ){
        		 psgDd = this.edt_psgDd.value  + "|" + this.edt_psgDd00.value;             //경과분/일
        	}else if(this.gfn_isNull(this.edt_psgDd.value) == false ) {
        		psgDd = this.edt_psgDd.value ;             //경과분/일
        	}else if(this.gfn_isNull(this.edt_psgDd00.value) == false) {
        		psgDd = this.edt_psgDd00.value ;             //경과분/일
        	}
        	
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "PSG_DD" ,psgDd) ; //경과분 일
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "SCTR_SJT" , this.txa_sctrSjt.value) ;         //특약사항
        }

        
        /* Validation Check */
        this.fn_validationCheck = function(){

        	var strTitletext = "PB상품공급 계약서";
        	
        	/**
         	if(this.gfn_isNull(this.edt_pbCtrwTinm.value) ){
        		this.edt_pbCtrwTinm.setFocus();
         		this.alert(strTitletext + " PB계약서 제목을 입력하세요. ");
         		return false;
         	}
        	**/
        	
        	if(this.gfn_isNull(this.etc1.value) ){
        		this.etc1.setFocus();
         		this.alert(strTitletext + " 물류대행수수료율을 입력하세요. ");
         		return false;
         	}
         	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "SCTR_SJT" , this.txa_sctrSjt.value) ;         //특약사항
         	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC1" , this.etc1.value) ;         //특약사항
        	
        	return true;
        }

        
        this.Button10_onclick = function(obj,e)
        {
        	this.fn_validationCheck();
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
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "SCTR_SJT" , this.txa_sctrSjt.value) ;         //특약사항
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button10.addEventHandler("onclick", this.Button10_onclick, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.txatext_changed, this);
            this.Static03.addEventHandler("onclick", this.Div06_Static04_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211313.xfdl", true);

       
    };
}
)();
