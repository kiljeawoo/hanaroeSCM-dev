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
                this.set_name("OMG_DS_SC_211310");
                this.set_titletext("PB상품공급 계약서");
                this._setFormPosition(0,0,788,195);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_addEltCtrwDtl01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"ADD_CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"부가계약서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"PB_CTRW_TINM\" type=\"STRING\" size=\"256\" sumtext=\"PB계약서 제목\"/><Column id=\"CNR_DT\" type=\"STRING\" size=\"256\" sumtext=\"검수일\"/><Column id=\"PSG_MM\" type=\"STRING\" size=\"256\" sumtext=\"경과분/월\"/><Column id=\"PSG_DD\" type=\"STRING\" size=\"256\" sumtext=\"경과분/일\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\" sumtext=\"비율1\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\" sumtext=\"비율2\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\" sumtext=\"비율3\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_etcEltStylAmm201", this);
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


            
            // UI Components Initialize
            obj = new Static("Static11", "absolute", "13.96%", "83", null, "29", "0%", null, this);
            obj.set_taborder("707");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "27", null, "29", "86%", null, this);
            obj.set_taborder("708");
            obj.set_text("PB  계약서 제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "14%", "27", null, "29", "0%", null, this);
            obj.set_taborder("709");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "0", "83", null, "29", "86.04%", null, this);
            obj.set_taborder("710");
            obj.set_text("검수일로부터");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

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

            obj = new Static("Static00", "absolute", "25%", "87", null, "21", "72.21%", null, this);
            obj.set_taborder("716");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "30.33%", "83", null, "29", "55.96%", null, this);
            obj.set_taborder("717");
            obj.set_text("경과분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_psgMm", "absolute", "44.42%", "87", null, "21", "45.56%", null, this);
            obj.set_taborder("2");
            obj.set_inputtype("number");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "54.95%", "87", null, "21", "38.07%", null, this);
            obj.set_taborder("719");
            obj.set_text("월( )회");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pbCtrwTinm", "absolute", "14.34%", "31", null, "21", "32.61%", null, this);
            obj.set_taborder("0");
            obj.set_maxlength("64");
            obj.set_value("자기상표부착상품(PB) 거래 계약서");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_psgDd", "absolute", "61.42%", "87", null, "21", "31.98%", null, this);
            obj.set_taborder("3");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cnrDt", "absolute", "14.34%", "87", null, "21", "75.63%", null, this);
            obj.set_taborder("1");
            obj.set_inputtype("number");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("725");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "83.12%", "87", null, "21", "14.21%", null, this);
            obj.set_taborder("727");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_psgDd00", "absolute", "68.27%", "87", null, "21", "25.13%", null, this);
            obj.set_taborder("728");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "55", null, "29", "86.04%", null, this);
            obj.set_taborder("729");
            obj.set_text("비율1");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "14%", "55", null, "29", "0%", null, this);
            obj.set_taborder("730");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "30.33%", "55", null, "29", "55.96%", null, this);
            obj.set_taborder("731");
            obj.set_text("비율2");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "58.76%", "55", null, "29", "27.54%", null, this);
            obj.set_taborder("732");
            obj.set_text("비율3");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("etc1", "absolute", "14.34%", "59", null, "21", "75.63%", null, this);
            obj.set_taborder("733");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("etc2", "absolute", "44.42%", "59", null, "21", "45.56%", null, this);
            obj.set_taborder("734");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("etc3", "absolute", "73.22%", "59", null, "21", "16.75%", null, this);
            obj.set_taborder("735");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.83%", "111", null, "80", "0%", null, this);
            obj.set_taborder("736");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "111", null, "80", "86.04%", null, this);
            obj.set_taborder("737");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "14.34%", "115", null, "72", "0.38%", null, this);
            obj.set_taborder("738");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_psgDd01", "absolute", "75.13%", "87", null, "21", "18.27%", null, this);
            obj.set_taborder("739");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 195, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("PB상품공급 계약서");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_pbCtrwTinm","value","ds_addEltCtrwDtl01","PB_CTRW_TINM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_psgMm","value","ds_addEltCtrwDtl01","PSG_MM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_psgDd","value","ds_addEltCtrwDtl01","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_cnrDt","value","ds_addEltCtrwDtl01","CNR_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_psgDd00","value","ds_addEltCtrwDtl01","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","etc1","value","ds_addEltCtrwDtl01","ETC1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","etc2","value","ds_addEltCtrwDtl01","ETC2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","etc3","value","ds_addEltCtrwDtl01","ETC3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","txa_sctrSjt","value","ds_eltCtrwDtl01","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edt_psgDd01","value","ds_addEltCtrwDtl01","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211310.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211310.xfdl", function() {
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

        		if(this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "201"){

        			this.ds_etcEltStylAmm201.copyRow(0, this.parent.ds_etcEltStylAmm ,i);   	
        			
        			
        		}
        	} 

        	 
           for(var i = 0 ; i < this.parent.ds_addEltCtrwDtl.rowcount; i++){		

        		if(this.parent.ds_addEltCtrwDtl.getColumn(i, "ADD_CTRW_KDC") =="201"){
        		
        			fv_position = i;
        			fv_chk = 1 ;
        			this.ds_addEltCtrwDtl01.addRow();
        			this.ds_addEltCtrwDtl01.copyRow(0, this.parent.ds_addEltCtrwDtl ,fv_position);   	
        			
        		trace(this.ds_addEltCtrwDtl01.saveXML())	;
        			
        		var edt_psgDd = this.ds_addEltCtrwDtl01.getColumn(0,"PSG_DD") ;	
        							
        		if(edt_psgDd == "초"   || edt_psgDd == "말"  ){
        				this.edt_psgDd.set_value(edt_psgDd);
        				this.edt_psgDd00.set_value("");
        				this.edt_psgDd01.set_value("");
        		}else{

        			var edt_psgDd = edt_psgDd.split("|");

        			if(edt_psgDd.length == 3) {
        				this.edt_psgDd.set_value(edt_psgDd[0]);
        				this.edt_psgDd00.set_value(edt_psgDd[1]);
        				this.edt_psgDd01.set_value(edt_psgDd[2]);
        			}else if(edt_psgDd.length == 2){
        				this.edt_psgDd.set_value(edt_psgDd[0]);
        				this.edt_psgDd00.set_value(edt_psgDd[1]);
        			}else if(edt_psgDd.length == 1) {
        				this.edt_psgDd.set_value(edt_psgDd[0]);
        			}
        		}
        			
        			
        			
        		}else{
        			fv_position = i;
        		}
        	}
        		
         	
        	if (fv_chk == 0 ){

        		var nRow = this.parent.ds_addEltCtrwDtl.addRow();
        		fv_position = nRow;
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ADD_CTRW_KDC" , "201") ;		
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "CHG_SQNO" ,this.parent.ds_register.getColumn(0 ,"CHG_SQNO" ) ) ;		
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "PB_CTRW_TINM" ,"자기상표부착상품(PB) 거래 계약서" ) ;		
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC1" ,"100분의 5" ) ;
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC2" ,"100분의 5" ) ;
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC3" ,"100분의 20" ) ;
        		
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm201.getColumn(0,"CTRW_STY_VER") ) ;		
        		this.ds_addEltCtrwDtl01.addRow();
        		this.ds_addEltCtrwDtl01.copyRow(0, this.parent.ds_addEltCtrwDtl ,fv_position);
        		
        		

        		
        	}

        }

        

        this.OMG_DS_SC_211310_ontextchanged = function(obj,e)
        {

        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "PB_CTRW_TINM" , this.edt_pbCtrwTinm.value) ; //PB계약서 제목
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "CNR_DT" , this.edt_cnrDt.value) ; //검수일
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "PSG_MM" , this.edt_psgMm.value) ; //경과분 월
        	
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC1" , this.etc1.value) ; //비율1
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC2" , this.etc2.value) ; //비율2
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC3" , this.etc3.value) ; //비율3
        	

        	var psgDdTemp1 = "";
        	var psgDdTemp2 = "";
        	var psgDd = "";
        	
        	//psgDd = this.gfn_isNull(this.edt_psgDd.value)  + "/" + this.gfn_isNull(this.edt_psgDd00.value) + "/" + this.gfn_isNull(this.edt_psgDd01.value) + "/";
        	psgDd = this.edt_psgDd.value + "/";
        	if(this.edt_psgDd00.value) psgDd += this.edt_psgDd00.value + "/";
        	if(this.edt_psgDd01.value) psgDd += this.edt_psgDd01.value;
        	
        	var ar = psgDd.split("/");
        	var val = "";
        	for(var i=0; i<ar.length; i++){
        		if(ar[i] != '') val += ar[i] + "|";
        	}
        	val = val.substring(0,val.length-1);
        	
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "PSG_DD" ,val) ; //경과분 일

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
         		this.alert(strTitletext + " 비율1을 입력하세요. ");
         		return false;
         	}
         	
         	if(this.gfn_isNull(this.etc2.value) ){
        		this.etc2.setFocus();
         		this.alert(strTitletext + " 비율2을 입력하세요. ");
         		return false;
         	}
         	
         	if(this.gfn_isNull(this.etc3.value) ){
        		this.etc3.setFocus();
         		this.alert(strTitletext + " 비율3을 입력하세요. ");
         		return false;
         	}
        	
        	if(this.gfn_isNull(this.edt_cnrDt.value)){
        		this.edt_cnrDt.setFocus();
        		this.alert(strTitletext + " 검수일을 입력하세요.");
        		return false;
        	}else{

         		var  IntEdtCnrDt =  nexacro.toNumber(this.edt_cnrDt.value);
         		
        		if (IntEdtCnrDt < 1 || IntEdtCnrDt > 99) {
        			this.alert(strTitletext + " 검수 일자을 정확하게  입력하세요.");
        		this.edt_cnrDt.setFocus();	
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
        		this.alert(strTitletext + " 경과분 월()회을 정확하게  입력하세요.");
        		return false;	
        	}
        	
        	
        	
        	
        	
        	
        	
        	if(this.gfn_isNull(this.edt_psgDd.value) ==true   &&  this.gfn_isNull(this.edt_psgDd00.value) ==true){
        		this.edt_psgDd.setFocus();
        		this.alert(strTitletext + " 경과분 일을 입력하세요.");
        		return false;
        	}else{
        	
        	
        		if(this.edt_psgDd.value == "말" ||  this.edt_psgDd00.value == "말" || this.edt_psgDd.value == "초" ||  this.edt_psgDd00.value == "초" ){
        			
        		  
        		}else{

        				if(this.gfn_length(this.edt_psgDd.value) > 0) {
        				
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
        				
        				if(this.gfn_isNum(this.edt_psgDd00.value) == false){
        						this.edt_psgDd00.setFocus();	
        					this.alert(strTitletext + " 경과분(두번째) 일을 정확하게  입력하세요.");
        					return false;	
        				}
        				
        				var  IntEdtPsgDd00 =  nexacro.toNumber(this.edt_psgDd.value);
        				if (IntEdtPsgDd00 < 1 || IntEdtPsgDd00 > 99) { 	
        						this.edt_psgDd00.setFocus();	
        					this.alert(strTitletext + " 경과분(두번째) 일을 정확하게  입력하세요.");
        					return false;	
        				}
        				
        			}
        		}
        	}
        	
        	return true;
        }

        
        this.Button10_onclick = function(obj,e)
        {
        	this.fn_validationCheck();
        }
        this.text_changed = function(){
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "SCTR_SJT" , this.txa_sctrSjt.value) ;         //특약사항
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static04.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Button10.addEventHandler("onclick", this.Button10_onclick, this);
            this.edt_psgMm.addEventHandler("ontextchanged", this.OMG_DS_SC_211310_ontextchanged, this);
            this.edt_pbCtrwTinm.addEventHandler("ontextchanged", this.OMG_DS_SC_211310_ontextchanged, this);
            this.edt_psgDd.addEventHandler("ontextchanged", this.OMG_DS_SC_211310_ontextchanged, this);
            this.edt_cnrDt.addEventHandler("ontextchanged", this.OMG_DS_SC_211310_ontextchanged, this);
            this.edt_psgDd00.addEventHandler("ontextchanged", this.OMG_DS_SC_211310_ontextchanged, this);
            this.Static03.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static07.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static09.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.OMG_DS_SC_211301_ontextchanged, this);
            this.txa_sctrSjt.addEventHandler("onchanged", this.text_changed, this);
            this.edt_psgDd01.addEventHandler("ontextchanged", this.OMG_DS_SC_211310_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211310.xfdl");

       
    };
}
)();
