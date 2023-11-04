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
                this.set_name("VAN_DS_SC_0370_popup");
                this.set_titletext("미납확인");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,456,184);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("grd01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_summit", "absolute", "162", "138", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("예");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cencle", "absolute", "218", "138", "54", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("아니오");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "175", "167", "91", "17", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "363", "32", "91", "15", null, null, this);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "439", "67", "17", "67", null, null, this);
            obj.set_taborder("11");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "67", "17", "67", null, null, this);
            obj.set_taborder("12");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "419", "0", "37", "32", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("14");
            obj.set_text("미납확인");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "96", "80", "270", "35", null, null, this);
            obj.set_taborder("15");
            obj.set_text("해당 패널티 내역을 확인처리 하시겠습니까?");
            obj.set_cssclass("sta_WF_Location");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 456, 184, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("미납확인");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0360_P00.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0360_P00.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.objRtnArr = new Array(2); //팝업창 close시 전달할 값을 위한 배열 선언

        this.form_onload = function(obj,e)
        {		
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_cencle_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_summit_onclick = function(obj,e)
        {
        		param = "na_bzplc="+this.getOwnerFrame().NA_BZPLC_GRID+
        				" str_pla_dt="+this.getOwnerFrame().STR_PLA_DT_GRID+
        				" slpno="+this.getOwnerFrame().SLPNO_GRID+
        				" NA_TRPL_C="+this.getOwnerFrame().NA_TRPL_C_GRID+
        				" NA_WRS_C="+this.getOwnerFrame().NA_WRS_C_GRID+
        				" NA_TEAM_C="+this.getOwnerFrame().NA_TEAM_C_GRID;				
        						
        		trace("##POPUP##PARAM##->"+param);
        		
        		var sSvcID        = "updateCnfDtm";//통신아이디
        		var sURL          = "svc::rest/delivery/updateCnfDtm";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "updateCnfDtm"){			
        			trace("수정성공");
        			this.opener.btn_search_onclick();
        			this.close(this.objRtnArr.toString());
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_summit.addEventHandler("onclick", this.btn_summit_onclick, this);
            this.btn_cencle.addEventHandler("onclick", this.btn_cencle_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0360_P00.xfdl", true);

       
    };
}
)();
