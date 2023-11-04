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
                this.set_name("SYS_BATCH_1030");
                this.set_titletext("배치처리현황");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,700);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_m", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"32\"/><Column id=\"CERT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SSL_URL\" type=\"STRING\" size=\"256\"/><Column id=\"CN\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_BEFORE\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIFICATION\" type=\"STRING\" size=\"256\"/><Column id=\"MP_1\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_1\" type=\"STRING\" size=\"256\"/><Column id=\"MP_2\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_2\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IP_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "18", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("6");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("조회년");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "430", "1", "30", "43", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_search", "absolute", "96", "8", "105", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy");
            obj.set_value("null");
            obj.set_editformat("yyyy");

            obj = new Static("Static05", "absolute", "83.31%", "29", null, "69", "12.95%", null, this);
            obj.set_taborder("14");
            obj.set_text("69");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, "650", "15", null, this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "667", "1", "56", "41", null, null, this.div_list);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "347", "0", null, "12", "363", null, this.div_list);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0.76%", "42", null, "549", "0%", null, this.div_list);
            obj.set_taborder("8");
            obj.set_binddataset("ds_m");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"118\"/><Column size=\"93\"/><Column size=\"117\"/><Column size=\"99\"/><Column size=\"218\"/><Column size=\"105\"/><Column size=\"81\"/><Column size=\"100\"/><Column size=\"53\"/><Column size=\"124\"/><Column size=\"186\"/><Column size=\"122\"/><Column size=\"192\"/><Column size=\"126\"/><Column size=\"124\"/><Column size=\"77\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"선택\"/><Cell col=\"1\" text=\"시스템명\"/><Cell col=\"2\" text=\"인증서 ID\"/><Cell col=\"3\" text=\"인증서명\"/><Cell col=\"4\" text=\"인증서종류\"/><Cell col=\"5\" text=\"SSL주소\"/><Cell col=\"6\" text=\"물리경로\"/><Cell col=\"7\" text=\"시작일\"/><Cell col=\"8\" text=\"종료일\"/><Cell col=\"9\" text=\"알림\"/><Cell col=\"10\" text=\"휴대폰1\"/><Cell col=\"11\" text=\"이메일1\"/><Cell col=\"12\" text=\"휴대폰2\"/><Cell col=\"13\" text=\"이메일2\"/><Cell col=\"14\" text=\"비고\"/><Cell col=\"15\" text=\"최종변경일시\"/><Cell col=\"16\" text=\"최종변경자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:center middle;\" text=\"bind:SYS_NAME\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:CERT_ID\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:CERT_NAME\"/><Cell col=\"4\" edittype=\"text\" style=\"align:center;\" text=\"bind:CERT_TYPE\"/><Cell col=\"5\" edittype=\"text\" style=\"align:left;\" text=\"bind:SSL_URL\"/><Cell col=\"6\" edittype=\"text\" style=\"align:left;\" text=\"bind:CERT_PATH\"/><Cell col=\"7\" edittype=\"text\" text=\"bind:NOT_BEFORE\"/><Cell col=\"8\" edittype=\"text\" text=\"bind:NOT_AFTER\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:NOTIFICATION\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"text\" text=\"bind:MP_1\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"text\" text=\"bind:EMAIL_1\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"text\" text=\"bind:MP_2\"/><Cell col=\"13\" displaytype=\"text\" edittype=\"text\" text=\"bind:EMAIL_2\"/><Cell col=\"14\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMK\"/><Cell col=\"15\" edittype=\"text\" style=\"align:center;\" text=\"bind:LSCHG_DTM\"/><Cell col=\"16\" edittype=\"text\" text=\"bind:LS_CHGM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_addRow", "absolute", "92.01%", "11", null, "21", "0.38%", null, this.div_list);
            obj.set_taborder("9");
            obj.set_text("행추가");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "42", "21", "82", null, this);
            obj.set_taborder("15");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("URL('theme://images/btn_WF_CRUD.png') stretch 7,7");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 965, 444, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 700, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("배치처리현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SYS_BATCH_1030.xfdl", "lib::comLib.xjs");
        this.registerScript("SYS_BATCH_1030.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        /* 페이지 로딩 후 실행부분 */
        this.fn_afterFormOnload = function()
        {
        	/* 초기값세팅 */
        	this.div_search.cal_search.set_value(this.gfn_today("yyyy"));

        	/* 조회 호출 */
        	this.btn_search.click();  
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
         
        /* 조회버튼 이벤트 */
        this.btn_search_onclick = function(obj,e)
        {
            this.fn_retrieveCertInfoList(); // 처음조회시 1페이지를 조회한다.
        }

        /* 리스트  조회*/
        this.fn_retrieveCertInfoList = function()
        {
            // alert('search_item_list');
        	// this.ds_ctEtcItemList.clearData();
        	
            var curRow = this.ds_m.rowposition;
            var bas_y = this.div_search.cal_search.getYear();
            
            // alert(bas_y);
            // var bas_y = bas_dt.substring(0, 3);
            // alert(bas_dt.nodeType);

        	// var eltCtrwNo  = this..ds_m.getColumn(curRow, "ELT_CTRW_NO");    //전자계약서번호
        	// var chgSqno    =  this..ds_m.getColumn(curRow, "CHG_SQNO");   // 변경일련번호
        	// var ctrwStyVer = this.ds_ctEtcItemList.getColumn(curRow, "CTRW_STY_VER");  
        	// 
        	
        	param = " BAS_Y=" + bas_y

        			;
        			
        	var sSvcID        = "retrieveCertList";//통신아이디
        	var sURL          = "svc::rest/sys/retrieveCertInfoList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_m=ds_m";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        }

        // 행추가
        this.btn_addrow_onclick = function(obj,e)
        {
            if(this.ds_m.rowcount < 1){
                this.ds_m.addColumn("BSN_DSC"   ); //" BSN_DSC	업무구분: ESCM, CONSULT, ETC"   
                this.ds_m.addColumn("CERT_ID" ); // 인증서명                
                this.ds_m.addColumn("CERT_NAME" ); // 인증서명                
                this.ds_m.addColumn("CERT_TYPE" ); // 인증서종류: SSL, SIGN                    
                this.ds_m.addColumn("SYS_NAME"  ); // 시스템명                                 
                this.ds_m.addColumn("SSL_URL"   ); // SSL URL 주소                             
                this.ds_m.addColumn("CN"        ); // Common Name: 도메인 명칭                 
                this.ds_m.addColumn("CERT_PATH" ); // 인증서경로                               
                this.ds_m.addColumn("NOT_BEFORE"); // notBefore    시작일                      
                this.ds_m.addColumn("NOT_AFTER" ); // notAfter     종료일                      
                this.ds_m.addColumn("HOST_NAME" ); // 호스트명                                 
                this.ds_m.addColumn("IP_ADDRESS"); // 아이피 주소                              
                this.ds_m.addColumn("RMK"       ); // 비고                                     
                this.ds_m.addColumn("FSRG_DTM"  ); // 최초등록일시                             
                this.ds_m.addColumn("FS_RGM"    ); // 최초등록자                               
                this.ds_m.addColumn("LSCHG_DTM" ); // 최종변경일시                             
                this.ds_m.addColumn("LS_CHGM"   ); // 최종변경자                               
            }
        	var nRow = this.ds_m.addRow();
        	 this.ds_m.setColumn(this.ds_m.rowposition, "BSN_DSC", "ESCM");

        	this.ds_m.set_updatecontrol(false); //
        	this.ds_m.setRowType(nRow, Dataset.ROWTYPE_INSERT);
        	this.ds_m.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음

        
        } // 

        /*
         * 저장
         */
         this.btn_save_onclick = function(obj,e)
        {

            // alert('btn_save_onclick');
            
        	var dsParams = "";
        	var params = "";

        	//trace("[ Params ] >>>>>> " + params);	
        	dsParams = "ds_m=ds_m ";

        	var sSvcID        = "saveCertInfoList";//통신아이디
        	var sURL          = "svc::rest/sys/saveCertInfoList";// 호출할 서버 페이지 주소
        	var sInDatasets   = dsParams;//보내는데이터셋
        	var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /* 조회-서비스 Call */

        /* 콜백메소드 */
        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {

            // alert(svcID);
            
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveCertInfoList"){
        			if(this.ds_rsclist.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		} else if(svcID == "saveCertInfoList"){
        		    alert("저장되었습니다.");
        			this.fn_retrieveCertList();
        		}

        	}

          //trace("ds_rsclist" + this.ds_rsclist.saveXML());
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.Static02.addEventHandler("onclick", this.div_search_Static02_onclick, this);
            this.div_search.cal_search.addEventHandler("onchanged", this.cal_dvy_pla_dt_onchanged, this);
            this.div_search.cal_search.addEventHandler("oneditclick", this.cal_search_oneditclick, this);
            this.div_search.cal_search.addEventHandler("ontextchanged", this.cal_dvy_pla_dt_ontextchanged, this);
            this.Static05.addEventHandler("onclick", this.Static04_onclick, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.div_list.btn_addRow.addEventHandler("onclick", this.btn_addrow_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);

        };

        this.loadIncludeScript("SYS_BATCH_1030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
