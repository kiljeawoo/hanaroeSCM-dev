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
                this.set_name("OMG_DS_SC_0000");
                this.set_classname("pattern_01");
                this.set_titletext("서비스권한관리");
                this._setFormPosition(0,0,993,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "127", "21", null, null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("서비스");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "281", "10", "79", "21", null, null, this.Div00);
            obj.getSetter("taborder").set("2");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "35.45%", "10", null, "21", "49.08%", null, this.Div00);
            obj.set_taborder("16");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "83", "10", "151", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_text("Combo00");

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "569", "61", "55", "10", null, null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "921", "21", "55", "8", null, null, this);
            obj.getSetter("taborder").set("21");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "978", "0", "15", "491", null, null, this);
            obj.getSetter("taborder").set("22");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "923", "160", "55", "5", null, null, this);
            obj.getSetter("taborder").set("25");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.81%", "0", null, "21", "71.5%", null, this);
            obj.getSetter("taborder").set("37");
            obj.set_text("상품정보 > 상품정보 ><fc v ='#4e4d47'><b v='true'> 매출 세금게산서 조회</b></fc>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Location");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "732", "72", "56", "41", null, null, this);
            obj.getSetter("taborder").set("39");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "0", "113", null, null, "15", "0", this);
            obj.set_taborder("40");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"대메뉴\"/><Cell col=\"1\" text=\"중메뉴\"/><Cell col=\"2\" text=\"소메뉴\"/><Cell col=\"3\" text=\"EDI서비스\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "816", "45", "20", "67", null, null, this);
            obj.getSetter("taborder").set("41");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("서비스권한관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_0000.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_0000.xfdl", function() {
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

        
        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분  
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_save = function()
        {
        	var sSvcID        = "save";
        	var sURL          = "svc::rest/portal/saveBbsContent";
        	var sInDatasets   = "ds_bbs=ds_bbs";
        	var sOutDatasets  = "";	
        	var sArgument     = "noticeYn=" + this.noticeYn;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_getBbsContent = function()
        {
        	var sSvcID        = "getBbsContent";
        	var sURL          = "svc::rest/portal/getBbsContent";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bbs=ds_bbs";	
        	var sArgument     = "boardId="+ this.Combo00.value +
        	                    " documentId=" + this.documentId;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {			
         	if(ErrorCode < 0) //에러
         	{
        		trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
         	}
         	else 
         	{
        		switch(svcID)
        		{
        			case "save":
        				alert("저장되었습니다.");
        				this.go("OMG.PT::OMG_DS_SC_1640.xfdl");
        				break;
        				
        			case "getBbsContent":
        				if(this.Combo01.value == '2')//tempCode
        				{
        					this.ds_bbs.setColumn(0, "TITLE", "RE :: " + this.ds_bbs.getColumn(0, "TITLE"));
        					this.ds_bbs.setColumn(0, "CONTENT", "\n\n======================================\n" + this.ds_bbs.getColumn(0, "DOCUMENT_ID"));
        					this.ds_bbs.setColumn(0, "PARENT_DOC_ID", this.ds_bbs.getColumn(0, "CONTENT"));
        				}
        				break; 
        				
        			case "getBbsList22":
        				this.Combo02.set_index(0);
        				this.documentId = this.Combo02.value
        				this.fn_getBbsContent();
        				break;
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_save":
        			if(this.fn_checkValidation())
        			{
        				this.fn_save();
        			}
        			break;
        			
        		case "btn_search":
        			
        			break;
        	}
        }

        
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	
        this.fn_checkValidation = function()
        {
        	if(this.gfn_isNull(this.edt_title.value))
        	{
        		alert("제목을 입력해 주세요.");
        		return false;
        	}
        	if(this.gfn_isNull(this.txt_content.value))
        	{
        		alert("내용을 입력해 주세요.");
        		return false;
        	}
        	return true;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_save.addEventHandler("onclick", this.common_onclick, this);
            this.btn_search.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_0000.xfdl");

       
    };
}
)();
