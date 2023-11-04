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
                this.set_titletext("데이터팝업");
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
            		p.set_titletext("데이터팝업");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0370_P00.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0370_P00.xfdl", function() {
        //include "lib::comLib.xjs";

        this.objRtnArr = new Array(2); //팝업창 close시 전달할 값을 위한 배열 선언

        this.form_onload = function(obj,e)
        {
        	//trace("paramMode : "+this.getOwnerFrame().paramMode);
        	//trace("dsArg : "+this.parent.param);
        	
        	trace("SPYPL_NA_TRPL_C_GRID : "+this.getOwnerFrame().SPYPL_NA_TRPL_C_GRID);
        	trace("DVYAA_NA_TRPL_C_GRID : "+this.getOwnerFrame().DVYAA_NA_TRPL_C_GRID);
        	trace("NA_DVY_PLASH_SLPNO_GRID : "+this.getOwnerFrame().NA_DVY_PLASH_SLPNO_GRID);
        	trace("DVY_PLA_SQNO_GRID : "+this.getOwnerFrame().DVY_PLA_SQNO_GRID);
        	
        	trace("CNF_CMENO_POP : "+this.getOwnerFrame().CNF_CMENO_POP);
        	
        	
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
        		param = "spypl_na_trpl_c="+this.getOwnerFrame().SPYPL_NA_TRPL_C_GRID+
        				" dvyaa_na_trpl_c="+this.getOwnerFrame().DVYAA_NA_TRPL_C_GRID+
        				" na_dvy_plash_slpno="+this.getOwnerFrame().NA_DVY_PLASH_SLPNO_GRID+
        				" dvy_pla_sqno="+this.getOwnerFrame().DVY_PLA_SQNO_GRID+
        				" cnf_cmeno="+this.getOwnerFrame().CNF_CMENO_POP+
        				" ls_cmeno="+this.getOwnerFrame().CNF_CMENO_POP;
        						
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
        			trace("뜨세요");
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

        this.loadIncludeScript("VAN_DS_SC_0370_P00.xfdl");

       
    };
}
)();
