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
                this.set_name("OMG_DS_SC_5060");
                this.set_classname("pattern_01");
                this.set_titletext("메뉴관리조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"MENU_SQNO\" type=\"string\" size=\"32\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"string\" size=\"32\"/><Column id=\"MENU_MN\" type=\"string\" size=\"32\"/><Column id=\"MENU_PATH\" type=\"string\" size=\"32\"/><Column id=\"UP_MENU\" type=\"string\" size=\"32\"/><Column id=\"SVC_GRPNM\" type=\"string\" size=\"32\"/><Column id=\"FLNM\" type=\"string\" size=\"32\"/><Column id=\"FL_KD\" type=\"string\" size=\"32\"/><Column id=\"SCRN_MRK_YN\" type=\"string\" size=\"32\"/><Column id=\"UYN\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_SQNO\" type=\"string\" size=\"32\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"string\" size=\"32\"/><Column id=\"MENU_MN\" type=\"string\" size=\"32\"/><Column id=\"MENU_PATH\" type=\"string\" size=\"32\"/><Column id=\"UP_MENU\" type=\"string\" size=\"32\"/><Column id=\"SVC_GRPNM\" type=\"string\" size=\"32\"/><Column id=\"FLNM\" type=\"string\" size=\"32\"/><Column id=\"FL_KD\" type=\"string\" size=\"32\"/><Column id=\"SCRN_MRK_YN\" type=\"string\" size=\"32\"/><Column id=\"UYN\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_update", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("11");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("37");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("68");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "788", "0", "15", "490", null, null, this);
            obj.getSetter("taborder").set("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.getSetter("taborder").set("72");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "95", "15", null, this);
            obj.set_taborder("85");
            obj.set_cssclass("div_WFSA_Searchbg");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_menuId", "absolute", "118", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("76");
            obj.set_maxlength("8");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("77");
            obj.set_text("메뉴ID");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "103", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("78");
            obj.set_text("서비스그룹");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "306", "36", "0", "21", null, null, this.div_search);
            obj.set_taborder("79");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "288", "10", "79", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("82");
            obj.set_text("메뉴LEVEL");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "288", "36", "79", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("83");
            obj.set_text("파일이름");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "537", "10", "79", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("85");
            obj.set_text("메뉴이름");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "537", "36", "79", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("86");
            obj.set_text("파일종류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_menuName", "absolute", "616", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("88");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "15", "62", "103", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("89");
            obj.set_text("화면표시여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "306", "62", "0", "21", null, null, this.div_search);
            obj.set_taborder("90");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_displayYn", "absolute", "118", "62", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_displayYn_innerdataset = new Dataset("cbo_displayYn_innerdataset", this.div_search.cbo_displayYn);
            cbo_displayYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">표시</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미표시</Col></Row></Rows>");
            obj.set_innerdataset(cbo_displayYn_innerdataset);
            obj.set_taborder("91");
            obj.set_index("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_text("전체");
            obj = new Static("Static07", "absolute", "288", "62", "79", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("92");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_useYn", "absolute", "367", "62", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_useYn_innerdataset = new Dataset("cbo_useYn_innerdataset", this.div_search.cbo_useYn);
            cbo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(cbo_useYn_innerdataset);
            obj.set_taborder("93");
            obj.set_value("0");
            obj.set_index("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("전체");
            obj = new Edit("edt_svcGroup", "absolute", "118", "36", "140", "21", null, null, this.div_search);
            obj.set_taborder("94");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_fileName", "absolute", "367", "36", "140", "21", null, null, this.div_search);
            obj.set_taborder("95");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_menuLevel", "absolute", "367", "10", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_menuLevel_innerdataset = new Dataset("cbo_menuLevel_innerdataset", this.div_search.cbo_menuLevel);
            cbo_menuLevel_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">대분류</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">중분류</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">소분류</Col></Row></Rows>");
            obj.set_innerdataset(cbo_menuLevel_innerdataset);
            obj.set_taborder("96");
            obj.set_value("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj.set_text("전체");
            obj = new Edit("edt_fileType", "absolute", "616", "36", "140", "21", null, null, this.div_search);
            obj.set_taborder("97");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "123", null, null, "15", "-26", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "363", "0", null, "12", "362", null, this.div_list);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_menuList", "absolute", "0", "42", null, null, "0", "26", this.div_list);
            obj.set_taborder("2");
            obj.set_binddataset("ds_menu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"111\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"메뉴ID\"/><Cell col=\"2\" text=\"메뉴LEVEL\"/><Cell col=\"3\" text=\"메뉴이름\"/><Cell col=\"4\" text=\"서비스그룹\"/><Cell col=\"5\" text=\"파일이름\"/><Cell col=\"6\" text=\"파일종류\"/><Cell col=\"7\" text=\"화면표시여부\"/><Cell col=\"8\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:MENU_ID\"/><Cell col=\"2\" text=\"bind:MENU_LVL\"/><Cell col=\"3\" text=\"bind:MENU_NM\"/><Cell col=\"4\" text=\"bind:SVC_GRPNM\"/><Cell col=\"5\" text=\"bind:FLNM\"/><Cell col=\"6\" text=\"bind:FL_KD\"/><Cell col=\"7\" text=\"bind:SCRN_MRK_YN\"/><Cell col=\"8\" text=\"bind:UYN\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "922", "1", "56", "15", null, null, this.div_list);
            obj.getSetter("taborder").set("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "922", "37", "56", "5", null, null, this.div_list);
            obj.getSetter("taborder").set("6");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("rowCount", "absolute", null, "11", "268", "21", "5", null, this.div_list);
            obj.getSetter("taborder").set("7");
            obj.set_usedecorate("true");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "508", "31", "30", "67", null, null, this);
            obj.getSetter("taborder").set("84");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1", "30", "15", "67", null, null, this);
            obj.getSetter("taborder").set("86");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "124", "56", "41", null, null, this);
            obj.getSetter("taborder").set("87");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "259", "29", "30", "67", null, null, this);
            obj.getSetter("taborder").set("88");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("85");
            		p.set_cssclass("div_WFSA_Searchbg");
            		p.set_enable("true");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("메뉴관리조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divSearch.edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divSearch.cbo_menuLevel","value","ds_in","MENU_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divSearch.edt_menuName","value","ds_in","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divSearch.edt_svcGroup","value","ds_in","SVC_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divSearch.edt_fileName","value","ds_in","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divSearch.edt_fileType","value","ds_in","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divSearch.cbo_displayYn","value","ds_in","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divSearch.cbo_useYn","value","ds_in","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5060.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_5060.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분   
           
           /*초기값세팅*/   
           this.div_search.cbo_menuLevel.set_index(0);
           this.div_search.cbo_displayYn.set_index(0);
           this.div_search.cbo_useYn.set_index(0);
           
           /*조회 호출*/
           this.btn_search.click();  
        }
         
         
         /*조회*/
        this.btn_search_onclick = function(obj,e)
        {
        		//application.gv_userId = "test";
        	
         
        	var sParams = 
        				 //"userKey="+application.gv_userId  +
        				  "menu_id="+this.gfn_nullToEmpty(this.div_search.edt_menuId.value)
        				+ " menu_lvl="+this.gfn_nullToEmpty(this.div_search.cbo_menuLevel.value)
        				+ " menu_name="+this.gfn_nullToEmpty(this.div_search.edt_menuName.value)
        				+ " svc_group="+this.gfn_nullToEmpty(this.div_search.edt_svcGroup.value)
        				+ " flnm="+this.gfn_nullToEmpty(this.div_search.edt_fileName.value)
        				+ " fl_kd="+this.gfn_nullToEmpty(this.div_search.edt_fileType.value)
        				+ " scrn_mrk_yn="+this.gfn_nullToEmpty(this.div_search.cbo_displayYn.value)
        				+ " use_yn="+this.gfn_nullToEmpty(this.div_search.cbo_useYn.value) ;
        				
        				
        	trace("sParams::"+sParams);
        	
        	var sSvcID        = "menuList";
        	var sURL          = "svc::rest/mg/retrieveMenuList";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_menu=ds_menu";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

         /*등록*/
        this.btn_insert_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:""};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","OMG.MG::OMG_DS_SC_5061.xfdl",oArg,sOption,sPopupCallBack);	
        }

         /*수정*/
        this.btn_update_onclick = function(obj,e)
        {
        	var checkCnt =0 ;	//선택된 체크박스 개수
        	var position =0 ;	//선택된 체크박스 위치
        	for(var i = 0 ; i < this.ds_menu.rowcount; i++){		
        		if(this.ds_menu.getColumn(i, "CHK") =="1"){
        			checkCnt = checkCnt +1;			
        			position = i;
        		}
        	}
        	
        	
        	if(checkCnt > 1){
        		alert("하나만 선택해주시기 바랍니다.");
        		this.ds_param.clearData();
        		return;
        	}else if(checkCnt == 0){
        		alert("수정해야할 데이터를 선택해 주시기 바랍니다.");
        		this.ds_param.clearData();
        		return;
        	}else{						
        		this.ds_param.clearData();
        		this.ds_param.insertRow(0);			
        		this.ds_param.copyRow(0,this.ds_menu,position);		
        				
        		var oArg = {paramMode:"S", dsArg:this.ds_param};			
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";    				
        		//trace("sParams::"+this.ds_param.getColumn(0, "MENU_SQNO"));	
        				
        		this.gfn_openPopup("popId","OMG.MG::OMG_DS_SC_5061.xfdl",oArg,sOption,sPopupCallBack);	
        	}
        	
        }

        /*팝업호출확인하기*/
        this.fn_popupAfter = function(strId,strVal)
        {	
        	this.btn_search.click();  
        }

        
         /*체크박스선택시 이벤트*/
        this.Div02_Grid01_onheadclick = function(obj,e)
        {	
        	if(e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	this.ds_menu.addColumn("CHK", "string");
        	for(var i = 0 ; i < this.ds_menu.rowcount; i++)
        	{
        		this.ds_menu.setColumn(i,"CHK", 0);
        	}	
        	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "menuList"){			
        			if(this.ds_menu.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}else{
        			if(this.ds_menu.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}
        	}	
        }
         
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_update.addEventHandler("onclick", this.btn_update_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.div_search.cbo_menuLevel.addEventHandler("onitemchanged", this.Div00_Combo00_onitemchanged, this);
            this.div_list.grd_menuList.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.Static04.addEventHandler("onclick", this.Static04_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
