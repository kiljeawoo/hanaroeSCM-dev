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
                this.set_name("OMG_DS_SC_5030");
                this.set_classname("pattern_01");
                this.set_titletext("서비스권한관리");
                this._setFormPosition(0,0,993,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_svc", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_svcAuth", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"UL_MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"L_MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"L_MENU_NM\" type=\"string\" size=\"32\"/><Column id=\"UM_MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"M_MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"M_MENU_NM\" type=\"string\" size=\"32\"/><Column id=\"US_MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"S_MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"S_MENU_NM\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lMenu", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mMenu", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "127", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("0");
            obj.set_text("서비스");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "281", "10", "79", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("2");
            obj.set_text("대메뉴");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_svc", "absolute", "83", "10", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_svc_innerdataset = new Dataset("cbo_svc_innerdataset", this.div_search.cbo_svc);
            cbo_svc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">- 전체 -</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">SCM</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">부가정보</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">정보분석</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">세금계산서</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">전자계약</Col></Row></Rows>");
            obj.set_innerdataset(cbo_svc_innerdataset);
            obj.set_taborder("17");
            obj.set_text("SCM");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("1");
            obj.set_value("01");
            obj = new Static("Static01", "absolute", "545", "10", "79", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("19");
            obj.set_text("중메뉴");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_lMenu", "absolute", "348", "10", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_lMenu_innerdataset = new Dataset("cbo_lMenu_innerdataset", this.div_search.cbo_lMenu);
            cbo_lMenu_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">SCM</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">부가정보</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">정보분석</Col></Row></Rows>");
            obj.set_innerdataset(cbo_lMenu_innerdataset);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Combo("cbo_mMenu", "absolute", "615", "10", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_mMenu_innerdataset = new Dataset("cbo_mMenu_innerdataset", this.div_search.cbo_mMenu);
            cbo_mMenu_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">SCM</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">부가정보</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">정보분석</Col></Row></Rows>");
            obj.set_innerdataset(cbo_mMenu_innerdataset);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

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

            obj = new Static("Static01", "absolute", "732", "72", "56", "41", null, null, this);
            obj.getSetter("taborder").set("39");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result", "absolute", "0", "113", null, null, "15", "0", this);
            obj.set_taborder("40");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_svcAuth");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"144\"/><Column size=\"27\"/><Column size=\"177\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"normal\" edittype=\"checkbox\" text=\"대메뉴\"/><Cell col=\"2\" colspan=\"2\" text=\"중메뉴\"/><Cell col=\"4\" text=\"소메뉴\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:UL_MENU_ID\" suppress=\"0\"/><Cell col=\"1\" text=\"bind:L_MENU_NM\" suppress=\"0\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:UM_MENU_ID\" suppress=\"3\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:M_MENU_NM\" suppress=\"4\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:S_MENU_NM\"/><Cell col=\"5\" displaytype=\"expr:US_MENU_ID==0?'checkbox':'none'\" edittype=\"checkbox\" text=\"bind:US_MENU_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "816", "45", "20", "67", null, null, this);
            obj.getSetter("taborder").set("41");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("43");
            obj.set_url("common::location.xfdl");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

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
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5030.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_5030.xfdl", function() {
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
           this.btn_search.click();   
           this.grd_result.update(5,this.div_search.cbo_svc.value);
           
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	trace("fn_commonAfterOnload");
        	
        	//콤보에 최상단Row보이도록 설정
        	this.cbo_svc.set_index(0);
        }

        
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
         

        
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	
         
        this.btn_search_onclick = function(obj,e)
        {
        	var sParams = 
        				  "codeKey=ds_svcAuth"  
        				+ " svc_id="+this.gfn_nullToEmpty(this.div_search.cbo_svc.value)
        				+ " lMenu_id="+this.gfn_nullToEmpty(this.div_search.cbo_lMenu.value)
        				+ " mMenu_id="+this.gfn_nullToEmpty(this.div_search.cbo_mMenu.value)
        				;
        	trace("sParams::"+sParams);
        	
        	var sSvcID        = "retrieveServiceMenuList";
        	var sURL          = "svc::rest/mg/retrieveServiceMenuList";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_svcAuth=ds_svcAuth";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	/*this.ds_menu.addColumn("CHK", "string");
        	for(var i = 0 ; i < this.ds_menu.rowcount; i++)
        	{
        		this.ds_menu.setColumn(i,"CHK", 0);
        	}	
        	*/
        	trace(this.ds_svcAuth.saveXML());
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		
        	}	
        }
         
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.common_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
