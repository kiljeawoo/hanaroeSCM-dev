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
                this.set_titletext("업체 담당자 조회");
                this.set_visible("true");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,458,425);
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
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_CHRR\" type=\"STRING\" size=\"256\" sumtext=\"업체담당자\"/><Column id=\"MPNO\" type=\"STRING\" size=\"256\" sumtext=\"핸드폰\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"이메일\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\" sumtext=\"회원등록상태\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\" sumtext=\"주요품목\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("btn_newTop", "absolute", "0", "0", "456", "30", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Menulist");
            obj.set_text("업체 담당자 조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close", "absolute", "416", "0", "37", "30", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "47", "58", "21", "17", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "39", "17", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "8", "120", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WFSA_Label");
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
            obj = new Edit("edt_naTrplC", "absolute", "138", "8", null, "21", "46", null, this.div_search);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_search", "absolute", "17", "130", null, "246", "17", null, this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_search");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"134\"/><Column size=\"124\"/><Column size=\"115\"/><Column size=\"138\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"업체  담당자\"/><Cell col=\"2\" text=\"핸드폰\"/><Cell col=\"3\" text=\"이메일\"/><Cell col=\"4\" text=\"회원상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:CTR_CHRR\"/><Cell col=\"2\" text=\"bind:MPNO\"/><Cell col=\"3\" text=\"bind:EMAIL\"/><Cell col=\"4\" text=\"bind:STS_NM\"/></Band></Format></Formats>");
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

            obj = new Button("btn_ok", "absolute", null, "386", "54", "29", "61", null, this);
            obj.set_taborder("33");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", null, "386", "42", "29", "17", null, this);
            obj.set_taborder("34");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "347", "376", "91", "10", null, null, this);
            obj.set_taborder("35");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "344", "415", "91", "10", null, null, this);
            obj.set_taborder("36");
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
            obj = new Layout("default", "", 458, 425, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_3212");
            		p.set_titletext("업체 담당자 조회");
            		p.style.set_border("2 solid #067394ff");
            		p.set_visible("true");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","div_search.edt_naTrplC","value","ds_register","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_9070.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_9070.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs"
        this.new_elt = "" ;
        this.OMG_DS_SC_9060_onload = function(obj,e)
        {

        	this.gfn_setInitForm(obj, e); //공통

            //new_elt  ==  true   신규 계약서 작성시
            //new_elt  ==  false  계약서 수정시

        	this.new_elt = this.getOwnerFrame().new_elt ;
        	
        	if(this.new_elt == true){
        	
        		this.div_search.edt_naTrplC.set_value(this.getOwnerFrame().NATRPIC );
        		
        		this.fn_search();
        		
        	}else{
        		this.div_search.edt_naTrplC.set_value(this.parent.edt_naTrplC.value);
        	}

        	this.grd_search.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        }

        this.btn_search_onclick = function(obj,e)
        {

        	this.fn_search();
        }

        
        this.fn_search =  function()
        {
        	var edtnaTrplC = this.gfn_nullToEmpty(this.div_search.edt_naTrplC.value);  //사업자등록번호
        	param = "edtnaTrplC="+edtnaTrplC ;
        			
        	var sSvcID        = "search";//통신아이디
        	var sURL          = "svc::rest/pt/comn/retrieveEltChrrInq";// 호출할 서버 페이지 주소
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

        				alert("회원 가입된 회원이 없습니다. ");
        				return false;
        			}
        			
        		}
        	}
        //	trace("ds_search    = >>" + this.ds_search.saveXML());
        	
        }

        this.fn_popupAfter = function(strId,strVal)
        {

        }

        this.fn_afterFormOnload = function()
        {

         	//this.div_search.edt_naTrplC.set_value( this.parent.edt_naTrplC.value);
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

        
        this.btn_cancel_onclick = function(obj,e)
        {

        	//if(this.new_elt  ==  true){
        		this.close();
        // 	}else{
        // 		this.parent.div_chrr.set_url("");
        // 		this.parent.div_chrr.set_visible(false);
        // 	}
        }

        this.btn_Close_onclick = function(obj,e)
        {
        // 	if(this.new_elt  ==  true){
         		this.close();
        // 	}else{
        // 		this.parent.div_chrr.set_url("");
        // 		this.parent.div_chrr.set_visible(false);
        // 	}
        }

        
        this.btn_confirm_onclick = function(obj,e)
        {
        	var result;
        	if(this.ds_search.rowcount > 0){
        		for(var i = 0; i < this.ds_search.rowcount; i++){
        			if(this.ds_search.getColumn(i, "ISCHECKED") == 1)
        			{
        				result = "CTR_CHRR#" + this.ds_search.getColumn(i, "CTR_CHRR");      //경제통합거래처코드
        				result += ",MPNO#" + this.ds_search.getColumn(i, "MPNO");            //거래처명
        				result += ",EMAIL#"+ this.ds_search.getColumn(i, "EMAIL");   //거래처약어명

        			}
        		}
        		if(this.gfn_isNull(result)){
        			alert("입력할 주소를 체크 하세요");
        			return false;
        		}
        	}else
        	{
        		alert("업체 담당자를 조회 하세요");
        		return false;
        	}
        	
        	//if(this.new_elt  ==  true){
        		this.close(result);
        // 	}else{
        // 	    
        // 		this.parent.fn_addr(result);
        // 		this.parent.div_chrr.set_url("");
        // 		this.parent.div_chrr.set_visible(false);
        // 		
        // 	}	
        }

        

        this.grd_search_oncelldblclick = function(obj,e)
        {

        	var result;
        	var i  =   this.ds_search.rowposition  ;
        		result = "CTR_CHRR#" + this.ds_search.getColumn(i, "CTR_CHRR");      //경제통합거래처코드
        		result += ",MPNO#" + this.ds_search.getColumn(i, "MPNO");            //거래처명
        		result += ",EMAIL#"+ this.ds_search.getColumn(i, "EMAIL");   //거래처약어명
        	
        //if(this.new_elt  ==  true){
        		this.close(result);
        // 	}else{
        // 	    
        // 		this.parent.fn_chrr(result);
        // 		this.parent.div_chrr.set_url("");
        // 		this.parent.div_chrr.set_visible(false);
        // 		
        // 	}				
        				
        }

        // this.OMG_DS_SC_9060_onkeydown = function(obj:Form, e:nexacro.KeyEventInfo)
        // {
        // 	if (e.keycode==13  ){
        //  		this.btn_search.click() ;
        //  	}
        // }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_9060_onload, this);
            this.addEventHandler("onkeydown", this.OMG_DS_SC_9060_onkeydown, this);
            this.btn_Close.addEventHandler("onclick", this.btn_Close_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_search.addEventHandler("oncelldblclick", this.grd_search_oncelldblclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_confirm_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_9070.xfdl", true);

       
    };
}
)();
