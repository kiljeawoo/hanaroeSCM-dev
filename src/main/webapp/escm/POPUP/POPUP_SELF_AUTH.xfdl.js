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
                this.set_name("CHUCK");
                this.set_titletext("회원인증");
                this._setFormPosition(0,0,760,398);
            }
            this.style.set_border("1 solid #808080ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_auth", this);
            obj._setContents("<ColumnInfo><Column id=\"MD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL1\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_officeInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BZNO1\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO2\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO3\" type=\"STRING\" size=\"30\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"30\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"30\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"30\"/><Column id=\"USR_TELNO\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL01\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL02\" type=\"STRING\" size=\"30\"/><Column id=\"SMS_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"EMAIL_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"USR_HP\" type=\"STRING\" size=\"30\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"30\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"30\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"30\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"30\"/><Column id=\"FZIP\" type=\"STRING\" size=\"30\"/><Column id=\"RZIP\" type=\"STRING\" size=\"30\"/><Column id=\"TEL1\" type=\"STRING\" size=\"30\"/><Column id=\"TEL2\" type=\"STRING\" size=\"30\"/><Column id=\"TEL3\" type=\"STRING\" size=\"30\"/><Column id=\"HP1\" type=\"STRING\" size=\"30\"/><Column id=\"HP2\" type=\"STRING\" size=\"30\"/><Column id=\"HP3\" type=\"STRING\" size=\"30\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"30\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"30\"/><Column id=\"MB_CV_DSC\" type=\"STRING\" size=\"30\"/></ColumnInfo><Rows><Row><Col id=\"BZNO1\"/><Col id=\"BZNO2\"/><Col id=\"BZNO3\"/><Col id=\"NA_TRPL_C\"/><Col id=\"COMP_TPC\"/><Col id=\"MB_ID\"/><Col id=\"MB_PW\"/><Col id=\"USR_NM\"/><Col id=\"USR_TELNO\"/><Col id=\"USR_EMAIL01\"/><Col id=\"USR_EMAIL02\"/><Col id=\"SMS_RMS_YN\"/><Col id=\"EMAIL_RMS_YN\"/><Col id=\"USR_HP\"/><Col id=\"CLNTNM\"/><Col id=\"REPMNM\"/><Col id=\"DONGUP\"/><Col id=\"DONGBW\"/><Col id=\"FZIP\"/><Col id=\"RZIP\"/><Col id=\"TEL1\"/><Col id=\"TEL2\"/><Col id=\"TEL3\"/><Col id=\"HP1\"/><Col id=\"HP2\"/><Col id=\"HP3\"/><Col id=\"BIRTH\"/><Col id=\"SEX_DSC\"/><Col id=\"MB_CV_DSC\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_api_result", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "37.11%", "129", null, "20", "58.03%", null, this);
            obj.set_taborder("6");
            obj.set_text("@");
            obj.style.set_font("bold 14 Gulim");
            this.addChild(obj.name, obj);

            obj = new Div("email_input_container", "absolute", "17.89%", "115", null, "50", "2.11%", null, this);
            obj.set_taborder("17");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Div("employe_number_input_container", "absolute", "17.89%", "43", null, "50", "2.11%", null, this);
            obj.set_taborder("15");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_MB_ID", "absolute", "144", "51", "250", "35", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("9");
            obj.style.set_font("14 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "43.5%", "346", "100", "40", null, null, this);
            obj.set_taborder("10");
            obj.set_text("인증");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_font("bold 14 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("email_user_id_input_box", "absolute", "144", "122", "138", "35", null, null, this);
            obj.set_taborder("11");
            obj.set_maxlength("25");
            obj.style.set_font("bold 14 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("email_domain_input_box", "absolute", "320", "123", "208", "35", null, null, this);
            obj.set_taborder("12");
            obj.set_maxlength("25");
            obj.style.set_font("bold 14 Gulim");
            obj.style.set_cursor("default");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "17", "8", "135", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("회사 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Div("employe_number_title", "absolute", "2.24%", "43", "120", "50", null, null, this);
            obj.set_taborder("14");
            obj.set_text("사원번호");
            obj.style.set_background("lightcyan");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Div("email_title", "absolute", "2.24%", "115", "120", "50", null, null, this);
            obj.set_taborder("16");
            obj.set_text("이메일");
            obj.style.set_background("lightcyan");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 608, 50, this.email_input_container,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.email_input_container.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 50, this.employe_number_input_container,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.employe_number_input_container.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 760, 398, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("회원인증");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item10","edt_MB_ID","value","ds_userInfo","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","email_user_id_input_box","value","ds_userInfo","USR_EMAIL01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","email_domain_input_box","value","ds_userInfo","USR_EMAIL02");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POPUP_SELF_AUTH.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_SELF_AUTH.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	console.log(document.getElementById(obj.edt_MB_ID._unique_id));
        	
        }

        this.fn_afterFormOnload = function()
        {

        }
        //회가인 3. 회원인증창을 그냥 닫았을 때.
        //alert 메시지 정도만 신경써주면 된다.
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        //회가인 4. 서버에 회원 인증을 요청하는 코드이며 경통과 api를 사용하여 값을 받아온다.
        //mbId:사번, email_1&2 =앞&뒤, usrTpc=유저유형(본부,사업장)
         this.Button00_onclick = function(obj,e)
        {

        	if(this.gfn_isNull(this.edt_MB_ID.value)){
        		alert('사원번호를 입력하여 주십시오.');
        		return;
        	}
        	if(this.gfn_isNull(this.email_user_id_input_box.value) || this.gfn_isNull(this.email_domain_input_box.value))
        	{
        		alert('이메일을 입력하여 주십시오.');
        		return;
        	}
        	console.log(fn_joinUser_params.usrTpc);
        	//서버에 인증을 요청하는 코드
        	var param = "mbId="+this.edt_MB_ID.value
        		+" email_1="+this.email_user_id_input_box.value
        		+" email_2="+this.email_domain_input_box.value
        		+" usrTpc="+fn_joinUser_params.usrTpc;
        				
        	var sSvcID        = "check_authority";
        	var sURL          = "svc::rest/pt/usrinf/check_authority";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_officeInfo=ds_officeInfo ds_api_result=ds_api_result";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회	
        	 
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        }

        
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	//회가인 5. api정보 요청으로 가져온 값들을 
        	//회원가입 화면에 쓰기위해 localstorage에 param_obj 를 저장하고 
        	//메인화면에 공유하기위해 close함수에 param_obj 를 인자로 넣어준다.
        	if(svcID =="check_authority"){
        		console.log(this.ds_api_result)
        		if(ErrorCode == -1){
        			alert('이미 존재하는 사번입니다.');
        		}
        		else if(ErrorCode == -2){
        			alert('중복검사중 오류가 발생하였습니다.');
        		}
        		else if(ErrorCode == -2){
        			alert('인터페이스 통신중 오류가 발생하였습니다.');
        		}
        		else if(this.ds_api_result.getColumn(0,'tgrmRspC') == '1'){
        			alert('존재하지 않는 사번입니다.');
        		}else if(this.ds_api_result.getColumn(0,'tgrmRspC') == '2'){
        			alert('소비유통시스템 10-2001 사용자정보 화면에서 이메일 주소를 등록후 재시도 바랍니다.');
        		}else if(this.ds_api_result.getColumn(0,'tgrmRspC') == '3'){
        			alert('소비유통시스템에 등록된 이메일주소와 입력한 이메일주소가 다릅니다. \n '
        					+'소비유통시스템 10-2001 사용자정보에서 등록한 이메일주소를 입력해주시기 바랍니다.');
        		}else if(this.ds_api_result.getColumn(0,'tgrmRspC') == '0'){
        			//사원 정보 요청결과 
        			let ds_api_result_obj={};
        			for(let i=0; i<this.ds_api_result.getColCount(); i++){
        				ds_api_result_obj[this.ds_api_result.getColID(i)] = this.ds_api_result.getColumn(0,this.ds_api_result.getColID(i));
        			}
        			let ds_officeInfo_obj={};
        			for(let i=0; i<this.ds_officeInfo.getColCount(); i++){
        				ds_officeInfo_obj[this.ds_officeInfo.getColID(i)] = this.ds_officeInfo.getColumn(0,this.ds_officeInfo.getColID(i));
        			}
        			
        			let param_obj={
        				'ds_api_result_obj' : ds_api_result_obj,
        				'ds_officeInfo_obj' : ds_officeInfo_obj
        			}
        			//
        			localStorage.setItem('param_obj',JSON.stringify(param_obj));
        			
        			console.log(param_obj.ds_api_result_obj.tgrmRspC);

        			//when mb_id is ''
        			if (ds_officeInfo_obj.MB_ID==''){
        				alert('employe_number is not exist');
        				this.close();
        			}
        			//if it gets correct person data.
        			ds_officeInfo_obj.MB_ID = this.edt_MB_ID.value;
        			ds_officeInfo_obj.USR_EMAIL01 = this.email_user_id_input_box.value;
        			ds_officeInfo_obj.USR_EMAIL02 = this.email_domain_input_box.value;
        			console.log(param_obj);
        			//console.log(JSON.stringify(param_obj));
        			this.close(JSON.stringify(param_obj));
        		}
        			console.log('auth_check');
        			console.log('이메일 인증값 확인');
        			console.log(this.ds_api_result);
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.edt_MB_ID.addEventHandler("onchanged", this.Div05_edt_MB_ID_onchanged, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("POPUP_SELF_AUTH.xfdl");

       
    };
}
)();
