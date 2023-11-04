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
                this.set_name("OMG_DS_SC_9060");
                this.set_titletext("계약상담 신청자 조회");
                this.set_visible("true");
                this._setFormPosition(0,0,456,390);
            }
            this.style.set_border("2 solid #067394ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BZNO\" type=\"STRING\" size=\"256\" sumtext=\"사업자 번호\"/><Column id=\"CHRRNM\" type=\"STRING\" size=\"256\" sumtext=\"이름\"/><Column id=\"CHRR_MPNO\" type=\"STRING\" size=\"256\" sumtext=\"신청자 핸드폰\"/><Column id=\"RQ_DT\" type=\"STRING\" size=\"256\" sumtext=\"신청일자\"/><Column id=\"MAJ_LATC\" type=\"STRING\" size=\"256\" sumtext=\"주요품목\"/><Column id=\"CONM\" type=\"STRING\" size=\"256\" sumtext=\"업체명\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("btn_newTop", "absolute", "0", "0", "456", "30", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close", "absolute", "416", "0", "37", "30", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "47", "58", "21", "15", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "39", "17", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "8", "120", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_text("사업자등록번호");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "-4", "15", "800", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "134", "125", "103", "5", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new MaskEdit("mae_bzno", "absolute", "138", "8", "200", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_trimtype("right");
            obj.set_limitbymask("integer");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_bzpl", "absolute", "17", "130", null, "246", "17", null, this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_search");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"74\"/><Column size=\"124\"/><Column size=\"80\"/><Column size=\"96\"/><Column size=\"136\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"신청자\"/><Cell col=\"1\" text=\"업체명\"/><Cell col=\"2\" text=\"신청날짜\"/><Cell col=\"3\" text=\"핸드폰\"/><Cell col=\"4\" text=\"주력품목\"/></Band><Band id=\"body\"><Cell text=\"expr:comp.parent.fn_name(CHRRNM)\"/><Cell col=\"1\" text=\"expr:comp.parent.fn_name(CONM)\"/><Cell col=\"2\" text=\"bind:RQ_DT\" mask=\"####-##-##\"/><Cell col=\"3\" text=\"expr:comp.parent.fn_telNo_mask(CHRR_MPNO)\"/><Cell col=\"4\" expr=\"bind:MAJ_LATC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "289", "115", "103", "15", null, null, this);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "213", "105", "103", "10", null, null, this);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 39, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 456, 390, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_3212");
            		p.set_titletext("계약상담 신청자 조회");
            		p.style.set_border("2 solid #067394ff");
            		p.set_visible("true");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_9060.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_9060.xfdl", function() {
        //include "lib::comLib.xjs"

        this.OMG_DS_SC_9060_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	this.grd_bzpl.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        this.btn_search_onclick = function(obj,e)
        {
        	if(this.fn_validationCheck() ){
        		this.fn_search();
        	}
        	
        }

        
        this.fn_search =  function()
        {
        		maeBzno = this.gfn_nullToEmpty(this.div_search.mae_bzno.value);  //사업자등록번호
        		param = " mae_bzno="+maeBzno ;
        				
        		var sSvcID        = "search";//통신아이디
        		var sURL          = "svc::rest/pt/comn/retrieveCtrRqCptInq";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_search=ds_search";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        

        

        

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "search"){

        			if(this.ds_search.rowcount > 0)
        			{ 
        		
        			}else if(this.ds_search.rowcount == 0){

        //				alert("조회된 건수가 없습니다");
        				return false;
        			}
        		}
        	}
        	
        	
        }

        this.fn_popupAfter = function(strId,strVal)
        {

        }

        this.fn_afterFormOnload = function()
        {

         	this.div_search.mae_bzno.set_value( this.parent.mae_bzno.value);
        }

        
        this.btn_Close_onclick = function(obj,e)
        {
        	this.parent.div_search.set_visible(false);	
        }

        //전화 번호 타입 변경
        this.fn_telNo_mask = function(strTelNo){

        var telNo = "" ;
        	 if(strTelNo.length > 8 ){
        		var RegPhonNum = ""; 
        		var num= "****"; 
        		
        		

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
                    
                 telNo = naTrplCVal[0] + "-" + naTrplCVal[1] + "-"+ num;   

        	}
        	return telNo ;
        }

        this.fn_name = function(name)
        {
           var sName = "";
           
           for(var i = 0 ; i < name.length; i++)
           {
              if(i%2 == 0)
              {   
                 sName += name.substr(i, 1);
              }
              else
              {
                 sName += "*";
              }
              
           }
           return sName ;
        }

        /* Validation Check */
        this.fn_validationCheck = function(){

        if(this.gfn_isNull(this.div_search.mae_bzno.value)){
        		this.div_search.mae_bzno.setFocus();
        		this.alert('사업자등록번호 값을 입력 하세요.');
        		return false;
        	}else if(this.gfn_length(this.gfn_replace(this.div_search.mae_bzno.value, " ", "")) < 10){
        		this.div_search.mae_bzno.setFocus();
        		this.alert('사업자등록번호 값 10자리를 확인 후 다시 입력 하세요.');
        		return false;
        		
        	}else {	
        	    var strNumb = this.div_search.mae_bzno.value ;
        	    
        	    if(strNumb =='0000000000'){
        			alert("사업자등록번호가 잘못되었습니다."); 
        			return false; 
        		}
        	    
        	    
                var sumMod = 0 ;
                sumMod        +=        parseInt(strNumb.substring(0,1)); 
                sumMod        +=        parseInt(strNumb.substring(1,2)) * 3 % 10; 
                sumMod        +=        parseInt(strNumb.substring(2,3)) * 7 % 10; 
                sumMod        +=        parseInt(strNumb.substring(3,4)) * 1 % 10; 
                sumMod        +=        parseInt(strNumb.substring(4,5)) * 3 % 10; 
                sumMod        +=        parseInt(strNumb.substring(5,6)) * 7 % 10; 
                sumMod        +=        parseInt(strNumb.substring(6,7)) * 1 % 10; 
                sumMod        +=        parseInt(strNumb.substring(7,8)) * 3 % 10; 
                sumMod        +=        Math.floor(parseInt(strNumb.substring(8,9)) * 5 / 10); 
                sumMod        +=        parseInt(strNumb.substring(8,9)) * 5 % 10; 
                sumMod        +=        parseInt(strNumb.substring(9,10)); 
                
                if        (sumMod % 10        !=        0) 
                { 
        			alert("사업자등록번호가 잘못되었습니다."); 
        			this.div_search.mae_bzno.setFocus();
        			return false; 
                } 
        		
        	}
        	
        	return true;
        }

        

        this.OMG_DS_SC_9060_onkeydown = function(obj,e)
        {
        		 // 13 ==  enter
         	if (e.keycode==13  ){
         		this.btn_search.click() ;
         	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_9060_onload, this);
            this.addEventHandler("onkeydown", this.OMG_DS_SC_9060_onkeydown, this);
            this.btn_Close.addEventHandler("onclick", this.btn_Close_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_bzpl.addEventHandler("oncellclick", this.grd_bzpl_oncellclick, this);
            this.grd_bzpl.addEventHandler("oncelldblclick", this.btn_confirm_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_9060.xfdl");

       
    };
}
)();
