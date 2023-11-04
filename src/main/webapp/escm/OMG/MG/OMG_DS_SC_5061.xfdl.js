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
                this.set_name("OMG_DS_SC_5061");
                this.set_classname("popup01");
                this.set_titletext("메뉴관리상세");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,767,415);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_in", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_SQNO\" type=\"string\" size=\"32\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/><Column id=\"MENU_PATH\" type=\"string\" size=\"32\"/><Column id=\"UP_MENU\" type=\"string\" size=\"32\"/><Column id=\"SVC_GRPNM\" type=\"string\" size=\"32\"/><Column id=\"FLNM\" type=\"string\" size=\"32\"/><Column id=\"FL_KD\" type=\"string\" size=\"32\"/><Column id=\"SCRN_MRK_YN\" type=\"string\" size=\"32\"/><Column id=\"UYN\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dupCheck", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DUP_CHECK\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lcMenu", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mcMenu", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static38", "absolute", "126", "132", null, "29", "17", null, this);
            obj.getSetter("taborder").set("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "126", "160", null, "29", "17", null, this);
            obj.getSetter("taborder").set("19");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "126", "188", null, "29", "17", null, this);
            obj.getSetter("taborder").set("22");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "126", "216", null, "29", "17", null, this);
            obj.getSetter("taborder").set("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "126", "244", null, "29", "17", null, this);
            obj.getSetter("taborder").set("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "126", "272", null, "29", "17", null, this);
            obj.getSetter("taborder").set("27");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "126", "300", null, "29", "17", null, this);
            obj.getSetter("taborder").set("79");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "126", "76", null, "29", "17", null, this);
            obj.getSetter("taborder").set("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("upper_level1", "absolute", "126", "104", null, "29", "17", null, this);
            obj.getSetter("taborder").set("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "47", "41", "21", "13", null, this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "51", "135", "21", null, null, this);
            obj.getSetter("taborder").set("11");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("메뉴관리");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "76", "110", "29", null, null, this);
            obj.getSetter("taborder").set("12");
            obj.set_text("메뉴레벨");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "104", "110", "29", null, null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("상위메뉴");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "17", "132", "110", "29", null, null, this);
            obj.getSetter("taborder").set("16");
            obj.set_text("메뉴ID");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "17", "160", "110", "29", null, null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("메뉴이름");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "17", "188", "110", "29", null, null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("서비스그룹");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "17", "244", "110", "29", null, null, this);
            obj.getSetter("taborder").set("24");
            obj.set_text("파일종류");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_upperMenu01", "absolute", "130", "108", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NM");
            obj.set_innerdataset("@ds_lcMenu");

            obj = new Static("Static01", "absolute", "674", "396", "91", "17", null, null, this);
            obj.getSetter("taborder").set("68");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "674", "357", "91", "10", null, null, this);
            obj.getSetter("taborder").set("69");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "750", "76", "17", "67", null, null, this);
            obj.getSetter("taborder").set("70");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "32", "91", "15", null, null, this);
            obj.getSetter("taborder").set("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.getSetter("taborder").set("72");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "674", "68", "91", "8", null, null, this);
            obj.getSetter("taborder").set("73");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.getSetter("taborder").set("74");
            obj.set_text("메뉴관리");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("brn_cls", "absolute", "729", "0", "37", "32", null, null, this);
            obj.set_taborder("75");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "17", "272", "110", "29", null, null, this);
            obj.getSetter("taborder").set("76");
            obj.set_text("메뉴경로");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "17", "300", "110", "29", null, null, this);
            obj.getSetter("taborder").set("77");
            obj.set_text("화면표시여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "17", "328", "110", "29", null, null, this);
            obj.getSetter("taborder").set("78");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_displyYn", "absolute", "130", "304", "158", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_displyYn_innerdataset = new Dataset("rdo_displyYn_innerdataset", this.rdo_displyYn);
            rdo_displyYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_displyYn_innerdataset);
            obj.set_taborder("81");
            obj.set_index("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("N");
            obj.set_direction("vertical");

            obj = new Button("btn_dupCheck", "absolute", "551", "136", "65", "21", null, null, this);
            obj.set_taborder("83");
            obj.set_text("중복확인");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_upperMenu02", "absolute", "273", "108", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("84");
            obj.set_index("-1");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NM");
            obj.set_innerdataset("@ds_mcMenu");

            obj = new Static("Static17", "absolute", "259", "138", "9", "19", null, null, this);
            obj.getSetter("taborder").set("86");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "404", "138", "9", "19", null, null, this);
            obj.getSetter("taborder").set("87");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "47", "43", "21", "55", null, this);
            obj.set_taborder("95");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_menuId01", "absolute", "130", "136", "122", "21", null, null, this);
            obj.set_readonly("true");
            obj.set_taborder("99");
            obj.set_maxlength("2");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_menuId02", "absolute", "273", "136", "123", "21", null, null, this);
            obj.set_readonly("true");
            obj.set_taborder("100");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_menuId03", "absolute", "419", "136", "122", "21", null, null, this);
            obj.set_readonly("true");
            obj.set_taborder("101");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileType", "absolute", "130", "248", "122", "21", null, null, this);
            obj.set_taborder("104");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_svcGroup", "absolute", "130", "192", "122", "21", null, null, this);
            obj.set_taborder("105");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_menuName", "absolute", "130", "164", "122", "21", null, null, this);
            obj.set_taborder("106");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "696", "367", "54", "29", null, null, this);
            obj.set_taborder("107");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button65", "absolute", "640", "367", "54", "29", null, null, this);
            obj.set_taborder("108");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_menuLevel", "absolute", "130", "80", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_menuLevel_innerdataset = new Dataset("cbo_menuLevel_innerdataset", this.cbo_menuLevel);
            cbo_menuLevel_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">대메뉴</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">중메뉴</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">소메뉴</Col></Row></Rows>");
            obj.set_innerdataset(cbo_menuLevel_innerdataset);
            obj.set_taborder("113");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            obj.set_index("-1");

            obj = new Edit("edt_menuPath", "absolute", "130", "276", "449", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_menuSeq", "absolute", "56", "380", "58", "28", null, null, this);
            obj.set_taborder("119");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DupCheck", "absolute", "116", "380", "58", "28", null, null, this);
            obj.set_taborder("120");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_clickDupBtn", "absolute", "176", "380", "58", "28", null, null, this);
            obj.set_taborder("121");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "126", "328", null, "29", "17", null, this);
            obj.getSetter("taborder").set("122");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "17", "216", "110", "29", null, null, this);
            obj.getSetter("taborder").set("123");
            obj.set_text("파일이름");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName", "absolute", "130", "220", "266", "21", null, null, this);
            obj.set_taborder("124");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn", "absolute", "130", "333", "158", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_useYn_innerdataset = new Dataset("rdo_useYn_innerdataset", this.rdo_useYn);
            rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용안함</Col></Row></Rows>");
            obj.set_innerdataset(rdo_useYn_innerdataset);
            obj.set_taborder("82");
            obj.set_index("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("N");
            obj.set_direction("vertical");

            obj = new Edit("edt_upMenu02", "absolute", "296", "380", "58", "28", null, null, this);
            obj.set_taborder("125");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_upMenu01", "absolute", "236", "380", "58", "28", null, null, this);
            obj.set_taborder("126");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 415, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("메뉴관리상세");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","edt_fileName","value","ds_in","MENU_MN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_DupCheck","value","ds_dupCheck","DUP_CHECK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_menuName","value","ds_in","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_svcGroup","value","ds_in","SVC_GRPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_fileType","value","ds_in","FL_KD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","rdo_displyYn","value","ds_in","SCRN_MRK_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","rdo_useYn","value","ds_in","UYN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_menuPath","value","ds_in","MENU_PATH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","cbo_menuLevel","value","ds_in","MENU_LVL");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5061.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_5061.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function()
        {
             //페이지 로딩후 실행부분      
        	var fv_paramMode = this.getOwnerFrame().paramMode;		
        	
        	//중복체크 초기값세팅
        	this.edt_clickDupBtn.set_value("N");
        	this.edt_DupCheck.set_value("N");
        			
        	if(fv_paramMode == "S"){			
        		this.search();  
        		//alert("ds_in::"+this.ds_in.saveXML());
        	}else if(fv_paramMode == "U"){		
        		this.cbo_menuLevel.set_index(0);	
        		this.edt_menuId01.set_readonly(false);
        		this.edt_menuId02.set_value("000");
        		this.edt_menuId03.set_value("000");	
        		
        		/*대메뉴 DataSet호출*/
        		this.fn_getUpperCommonCombo1();
        		
        		/*대메뉴,중메뉴 콤보내용 전체 세팅*/
        		this.ds_mcMenu.insertRow(0);			
        		this.ds_mcMenu.setColumn(0,"MENU_NM","전체");
        		this.ds_mcMenu.setColumn(0,"MENU_ID","0");
        		this.cbo_upperMenu01.set_index(0);	
        		this.cbo_upperMenu02.set_index(0);
        	}
        }

         
         
        /*등록*/
        this.insert = function()
        {
        	if(this.fn_validationCheck()){
        			
        		var sMenuId = this.gfn_nullToEmpty(this.edt_menuId01.value) + this.gfn_nullToEmpty(this.edt_menuId02.value) + this.gfn_nullToEmpty(this.edt_menuId03.value);			
        		var sUpperId ;
        		if(this.cbo_menuLevel.value =="2"){
        			sUpperId = this.cbo_upperMenu01.value;
        		}else if(this.cbo_menuLevel.value =="3"){
        			sUpperId = this.cbo_upperMenu02.value;
        		}else{
        			sUpperId = "";
        		}
        		var sParams = 
        				 //"userKey="+application.gv_userId  +
        				   "menu_id="+sMenuId
        				+ " up_menu="+sUpperId
        				+ " menu_path="+this.gfn_nullToEmpty(this.edt_menuPath.value)				
        				+ " menu_lvl="+this.gfn_nullToEmpty(this.cbo_menuLevel.value)
        				+ " menu_name="+this.gfn_nullToEmpty(this.edt_menuName.value)
        				+ " svc_group="+this.gfn_nullToEmpty(this.edt_svcGroup.value)
        				+ " flnm="+this.gfn_nullToEmpty(this.edt_fileName.value)
        				+ " fl_kd="+this.gfn_nullToEmpty(this.edt_fileType.value)
        				+ " scrn_mrk_yn="+this.gfn_nullToEmpty(this.rdo_displyYn.value)
        				+ " use_yn="+this.gfn_nullToEmpty(this.rdo_useYn.value) ;
        		
        					
        					
        		var sSvcID        = "insert";
        		var sURL          = "svc::rest/mg/insertMenu";							     
        		var sInDatasets   = "";
        		var sOutDatasets  = "";	
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        			
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        

        /*수정*/
        this.update = function()
        {
        	if(this.fn_validationCheck()){
        			
        		var sMenuId = this.gfn_nullToEmpty(this.edt_menuId01.value) + this.gfn_nullToEmpty(this.edt_menuId02.value) + this.gfn_nullToEmpty(this.edt_menuId03.value);			
        		var sUpperId ;
        		
        		if(this.cbo_menuLevel.value =="2"){
        			sUpperId = this.cbo_upperMenu01.value;
        		}else if(this.cbo_menuLevel.value =="3"){
        			sUpperId = this.cbo_upperMenu02.value;
        		}else{
        			sUpperId = "";
        		}
        		var sParams = 
        				 //"userKey="+application.gv_userId  +
        				   "menu_id="+sMenuId
        				+ " up_menu="+sUpperId
        				+ " menu_path="+this.gfn_nullToEmpty(this.edt_menuPath.value)				
        				+ " menu_lvl="+ this.ds_in.getColumn(0,"MENU_LVL")
        				+ " menu_name="+this.gfn_nullToEmpty(this.edt_menuName.value)
        				+ " svc_group="+this.gfn_nullToEmpty(this.edt_svcGroup.value)
        				+ " flnm="+this.gfn_nullToEmpty(this.edt_fileName.value)
        				+ " fl_kd="+this.gfn_nullToEmpty(this.edt_fileType.value)
        				+ " scrn_mrk_yn="+this.gfn_nullToEmpty(this.rdo_displyYn.value)
        				+ " menu_sqno="+this.gfn_nullToEmpty(this.edt_menuSeq.value)
        				+ " use_yn="+this.gfn_nullToEmpty(this.rdo_useYn.value) ;
        		
        									
        		var sSvcID        = "update";
        		var sURL          = "svc::rest/mg/updateMenu";							     
        		var sInDatasets   = "";
        		var sOutDatasets  = "";	
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        					
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        

        
         /*조회*/
        this.search = function()
        {	
        	var ds_parent = this.parent.dsArg;		
        	this.ds_in.copyRow(0,ds_parent,0);
        	
        	this.edt_menuSeq.set_value(this.ds_in.getColumn(0,"MENU_SQNO"));
        	var sSvcID        = "search";
        	var sURL          = "svc::rest/mg/retrieveMenu";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_in=ds_in";	
        	var sArgument     = "menu_sqno="+this.ds_in.getColumn(0,"MENU_SQNO");
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        /*화면 로딩시 호출되는 콤보 데이터셋정보
          초기로딩시 상위 대메뉴콤보만 가져오며, 메뉴레벨이 중메뉴 및 소메뉴일 경우, 그에 해당하는 메뉴를 가져온다.
        */
        this.fn_getUpperCommonCombo1 = function(){		
        	var sMenuLvl = "";
        	 
        	if(this.getOwnerFrame().paramMode =="S"){
        		if(this.cbo_menuLevel.value= "2"){			
        			sMenuLvl = this.gfn_nullToEmpty(this.cbo_menuLevel.value) -1;			
        		}else if(this.cbo_menuLevel.value= "3"){				
        			sMenuLvl = this.gfn_nullToEmpty(this.cbo_menuLevel.value) -2;			
        		}else{
        			sMenuLvl = this.gfn_nullToEmpty(this.cbo_menuLevel.value);
        		}
        	}else if (this.getOwnerFrame().paramMode=="U"){
        		sMenuLvl = this.gfn_nullToEmpty(this.cbo_menuLevel.value);
        	}
        	
        	var sParam 		  = "ds_lcMenu=ds_lcMenu codeKey=ds_lcMenu menu_lvl="+sMenuLvl ;
        	var sSvcID        = "combo1";
        	var sURL          = "svc::rest/mg/getMenuCombo";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_lcMenu=ds_lcMenu ds_mcMenu=ds_mcMenu";	
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        

        

        
        /*중메뉴선택시 validation*/
        this.fn_getUpperCommonCombo2 = function(obj,e)
        {		
        	if(this.cbo_upperMenu01.value == ""){
        		alert("상위메뉴 첫번째값을 선택해주시기 바랍니다.");						
        		this.cbo_upperMenu01.setFocus();
        		return;
        	}
        	var sMenuId = this.gfn_nullToEmpty(this.edt_menuId01.value);
        	
        	
        	var sParam 		  = "ds_mcMenu=ds_mcMenu codeKey=ds_mcMenu menu_lvl=2 upperId="+sMenuId;	
        	var sSvcID        = "combo2";
        	var sURL          = "svc::rest/mg/getMenuCombo";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_mcMenu=ds_mcMenu";	
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);		
        }

        

        /* Validation Check */
        this.fn_validationCheck = function(){

        	if(this.gfn_isNull(this.edt_menuId01.value)){	
        		this.alert('메뉴ID중 첫번째 값을 입력 하세요.');
        		this.edt_menuId01.setFocus();
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edt_menuId02.value)){
        		this.alert('메뉴ID중 두번째 값을 입력 하세요');
        		this.edt_menuId02.setFocus();
        		return false;
        	}	
        	
        	if(this.gfn_isNull(this.edt_menuId03.value)){
        		this.alert('메뉴ID중 세번째 값을 입력 하세요');
        		this.edt_menuId02.setFocus();
        		return false;
        	}				
        	if(this.gfn_isNull(this.edt_menuName.value)){
        		this.alert('메뉴이름을 입력 하세요');
        		this.edt_menuName.setFocus();
        		return false;
        	}
        	
        	/*등록시 validation check*/
        	if(this.getOwnerFrame().paramMode== "U"){
        		if(this.edt_clickDupBtn.value !="Y"){
        			alert("메뉴ID 중복확인을 해주시기 바랍니다.");			
        			return;
        		}
        		if(this.edt_DupCheck.value !='Y'){
        			alert("동일한 메뉴ID가 존재 합니다.");
        			this.edt_clickDupBtn.set_value("N");
        			return;
        		}
        	}else if(this.getOwnerFrame().paramMode== "S"){
        		//alert("수정");
        		//alert("수정전ID: "+ this.ds_in.getOrgColumn(0,"MENU_ID"));
        		//alert("화면ID: "+ this.edt_menuId01.value+this.edt_menuId02.value+this.edt_menuId03.value);
        		
        		if(this.ds_in.getOrgColumn(0,"MENU_ID") != (this.edt_menuId01.value+this.edt_menuId02.value+this.edt_menuId03.value)){
        			if(this.edt_clickDupBtn.value !="Y"){
        				alert("메뉴ID 중복확인을 해주시기 바랍니다.");			
        				return;
        			}
        				if(this.edt_DupCheck.value !='Y'){
        				alert("동일한 메뉴ID가 존재 합니다.");
        				this.edt_clickDupBtn.set_value("N");
        			return;
        		}
        		}
        		
        		
        	}
        	return true;
        }

        
        /*메뉴레벨에 따른 이벤트컨트롤*/
        this.fn_menuOnitemchanged = function(obj,e)
        {
        	//레벨변경시 메뉴명,메뉴경로변경
        	this.edt_menuName.set_value("");
        	this.edt_menuPath.set_value("");
        	
        	// 대메뉴 선택
        	if(this.cbo_menuLevel.value == "1"){	
        		this.cbo_upperMenu01.set_readonly(true);
        		this.cbo_upperMenu02.set_readonly(true);
        		this.cbo_upperMenu01.set_index(-1);
        		this.cbo_upperMenu02.set_index(-1);
        		this.edt_menuId01.set_readonly(false);
        		this.edt_menuId01.set_value("");
        		this.edt_menuId02.set_value("000");
        		this.edt_menuId03.set_value("000");		
        	}
        	// 중메뉴 선택
        	else if(this.cbo_menuLevel.value == "2"){	
        		this.cbo_upperMenu01.set_readonly(false);		
        		this.cbo_upperMenu02.set_readonly(true);				
        		this.edt_menuId01.set_readonly(false);
        		this.edt_menuId02.set_readonly(false);		
        		this.edt_menuId01.set_value("");
        		this.edt_menuId02.set_value("");
        		this.edt_menuId03.set_value("000");
        	}
        	// 소메뉴 선택
        	else if(this.cbo_menuLevel.value == "3"){		
        		this.cbo_upperMenu01.set_readonly(false);
        		this.cbo_upperMenu02.set_readonly(false);
        		this.cbo_upperMenu01.set_index(0);
        		this.cbo_upperMenu02.set_index(0);
        		this.edt_menuId01.set_readonly(true);
        		this.edt_menuId02.set_readonly(true);
        		this.edt_menuId03.set_readonly(false);
        		this.edt_menuId01.set_value("");
        		this.edt_menuId02.set_value("");
        		this.edt_menuId03.set_value("");
        	}
        }

        
        /*창닫기*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }
         
          
        /*저장버튼 액션정의*/
        this.btn_save_onclick = function(obj,e)
        {	
        	if(this.getOwnerFrame().paramMode== "U"){ //등록			
        		this.insert();	
        	}else if(this.getOwnerFrame().paramMode== "S"){	 //수정
        	     this.update();
        	}
        }
          
         

         /*메뉴ID 중복체크*/
        this.fn_dupCheck = function(obj,e)
        {
        	if(this.gfn_isNull(this.edt_menuId01.value)){	
        		this.alert('메뉴ID중 첫번째 값을 입력 하세요.');
        		this.edt_menuId01.setFocus();
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edt_menuId02.value)){
        		this.alert('메뉴ID중 두번째 값을 입력 하세요');
        		this.edt_menuId02.setFocus();
        		return false;
        	}	
        	
        	if(this.gfn_isNull(this.edt_menuId03.value)){
        		this.alert('메뉴ID중 세번째 값을 입력 하세요');
        		this.edt_menuId02.setFocus();
        		return false;
        	}			
        	this.edt_clickDupBtn.set_value("Y");
        	
        	
        	var param = "menu_id="+this.edt_menuId01.value + this.edt_menuId02.value + this.edt_menuId03.value;
        	var sSvcID        = "dupCheck";
        	var sURL          = "svc::rest/mg/dupCheckMenuId";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_dupCheck=ds_dupCheck";	
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회	
        	//trace("param:"+param);		
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*메뉴레벨에 따른 경로*/
        this.edt_menuName_onkillfocus = function(obj,e)
        {
        	var pMenuLvl ;
        		
        	if(this.cbo_menuLevel.text == "대메뉴"){		
        		this.edt_menuPath.set_value(this.gfn_nullToEmpty(this.edt_menuName.value));
        	}else if(this.cbo_menuLevel.text =="중메뉴"){		
        		this.edt_menuPath.set_value(this.cbo_upperMenu01.text+">"+this.gfn_nullToEmpty(this.edt_menuName.value));
        	}else if(this.cbo_menuLevel.text =="소메뉴"){		
        		this.edt_menuPath.set_value(this.cbo_upperMenu01.text+">"+this.cbo_upperMenu02.text+">"+this.gfn_nullToEmpty(this.edt_menuName.value));
        	}
        }

        
        /*상위메뉴1번째 선택시 입력되는 내용*/
        this.cbo_upperMenu01_onitemchanged = function(obj,e)
        {	
        	if(this.cbo_upperMenu01.value =="0"){		
        		this.edt_menuPath.set_value("");
        	}else{	
        		this.edt_menuId01.set_value(this.cbo_upperMenu01.value.substring(0,2));
        		this.edt_menuId01.set_readonly(true);
        		this.edt_menuPath.set_value(this.cbo_upperMenu01.text);
        	}	
        	this.cbo_upperMenu02.set_index(0);
        }

        

        /*두번째 상위메뉴를 선택했을때의 이벤트*/
        this.cbo_upperMenu02_onitemchanged = function(obj,e)
        {	
        	this.edt_menuId02.set_value(this.cbo_upperMenu02.value.substring(2,5));
        	this.edt_menuId02.set_readonly(true);	
        	this.edt_menuPath.set_value(this.cbo_upperMenu01.text+">"+this.cbo_upperMenu02.text+">"+this.gfn_nullToEmpty(this.edt_menuName.value));
        }

         
         
        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	
        	if(ErrorCode < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID =="insert"){
        			if(this.ds_dupCheck.value =="N"){
        				this.gfn_getMessage("alert", "동일한 메뉴ID가 존재 합니다.");
        				this.edt_clickDupBtn.set_value("N");
        				return;
        			}else if(this.ds_dupCheck.value =="Y"){
        				this.gfn_getMessage("alert", "사용가능한 메뉴ID입니다.");
        			}			
        			if(ErrorCode == 1){
        				this.gfn_getMessage("alert", "result.message.save.success");		
        				this.close(); 
        			}		
        			
        		}else if(svcID=="update"){		
        			if(ErrorCode == 1){
        				this.gfn_getMessage("alert", "result.message.save.success");		
        				this.close(); 
        			}
        		}else if(svcID=="combo1"){			
        			var nRow = this.ds_lcMenu.findRow("MENU_ID",this.edt_upMenu01.value);				
        			
        			this.ds_lcMenu.insertRow(0);			
        			this.ds_lcMenu.setColumn(0,"MENU_ID","0");
        			this.ds_lcMenu.setColumn(0,"MENU_NM","전체");			
        			
        			if(this.getOwnerFrame().paramMode== "U"){ //등록			
        				this.cbo_upperMenu01.set_index(0);			
        			}else if(this.getOwnerFrame().paramMode== "S"){	 //수정					
        				
        				if(this.cbo_menuLevel.value != 1){					
        					this.cbo_upperMenu01.set_index(nRow+1);		
        					this.cbo_upperMenu01.set_readonly(false);
        				}else{					
        					this.cbo_upperMenu01.set_index(0);		
        					this.cbo_upperMenu01.set_readonly(true);
        					this.edt_menuId01.set_readonly(false);
        					this.ds_mcMenu.insertRow(0);			
        					this.ds_mcMenu.setColumn(0,"MENU_ID","0");
        					this.ds_mcMenu.setColumn(0,"MENU_NM","전체");
        					this.cbo_upperMenu02.set_index(0);		
        				}
        			}								
        		}else if(svcID=="combo2"){		
        			
        			var nRow = this.ds_mcMenu.findRow("MENU_ID",this.edt_upMenu02.value);		
        					
        			if(this.ds_mcMenu.rowcount ==0){
        				alert(this.cbo_upperMenu01.text+"에 해당하는 중메뉴가 존재하지 않습니다. 중메뉴를 등록해주시기 바랍니다.");				
        				return;
        			}	
        			
        			this.ds_mcMenu.insertRow(0);			
        			this.ds_mcMenu.setColumn(0,"MENU_ID","0");
        			this.ds_mcMenu.setColumn(0,"MENU_NM","전체");
        				
        			if(this.getOwnerFrame().paramMode== "U"){ //등록			
        				this.cbo_upperMenu02.set_index(0);			
        			}else if(this.getOwnerFrame().paramMode== "S"){	 //수정
        				this.cbo_upperMenu02.set_index(nRow+1);	 
        				this.cbo_upperMenu02.set_readonly(false);
        				if(this.cbo_menuLevel.text == "소메뉴"){
        					this.edt_menuId03.set_readonly(false);
        				}
        			}			
        			
        					
        		}else if(svcID =="dupCheck"){			
        			if(this.edt_DupCheck.value =="N"){
        				alert("동일한 메뉴ID가 존재 합니다.");		
        				this.edt_clickDupBtn.set_value("N");
        				return;
        			}else if(this.edt_DupCheck.value =="Y"){
        				alert("사용가능한 메뉴ID입니다.");				
        			}else{
        				alert("정해지지 않은 값입니다.");				
        				return;
        			}
        		}else if(svcID == "search"){	
        		
        			this.edt_menuId01.set_value(this.ds_in.getColumn(0,"MENU_ID").substring(0,2));
        			this.edt_menuId02.set_value(this.ds_in.getColumn(0,"MENU_ID").substring(2,5));
        			this.edt_menuId03.set_value(this.ds_in.getColumn(0,"MENU_ID").substring(5,8));						
        					
        			if(this.cbo_menuLevel.value =="2"){					
        				this.edt_upMenu01.set_value(this.ds_in.getColumn(0,"UP_MENU").substring(0,2)+"000000");
        				this.fn_getUpperCommonCombo1();								
        			}else if(this.cbo_menuLevel.value=="3"){								
        				this.edt_upMenu01.set_value(this.ds_in.getColumn(0,"UP_MENU").substring(0,2)+"000000");
        				this.edt_upMenu02.set_value(this.ds_in.getColumn(0,"UP_MENU"));
        				this.fn_getUpperCommonCombo1();
        				this.fn_getUpperCommonCombo2();
        				
        				var sMenuId= this.gfn_nullToEmpty(this.edt_upMenu02.value) ;				
        				var sParam 		  = "ds_mcMenu=ds_mcMenu codeKey=ds_mcMenu menu_lvl=2 upperId="+sMenuId;	
        				var sSvcID        = "combo2";
        				var sURL          = "svc::rest/mg/getMenuCombo";
        				var sInDatasets   = "";
        				var sOutDatasets  = "ds_mcMenu=ds_mcMenu";	
        				var sArgument     = sParam;
        				var sCallbackFunc = "fn_callBack";
        				var sTranType     = "S"; // U:저장/삭제, S:조회
        					
        				this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);		
        			}else{
        				this.fn_getUpperCommonCombo1();								
        			}			
        		}
        	}	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.cbo_upperMenu01.addEventHandler("onitemchanged", this.cbo_upperMenu01_onitemchanged, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.brn_cls.addEventHandler("onclick", this.btn_close_onclick, this);
            this.rdo_displyYn.addEventHandler("onitemclick", this.Radio01_onitemclick, this);
            this.btn_dupCheck.addEventHandler("onclick", this.fn_dupCheck, this);
            this.cbo_upperMenu02.addEventHandler("ondropdown", this.fn_getUpperCommonCombo2, this);
            this.cbo_upperMenu02.addEventHandler("onitemchanged", this.cbo_upperMenu02_onitemchanged, this);
            this.Static17.addEventHandler("onclick", this.Static16_onclick, this);
            this.Static16.addEventHandler("onclick", this.Static16_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.edt_menuName.addEventHandler("onkillfocus", this.edt_menuName_onkillfocus, this);
            this.cbo_menuLevel.addEventHandler("onitemchanged", this.fn_menuOnitemchanged, this);
            this.rdo_useYn.addEventHandler("onitemclick", this.Radio00_onitemclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5061.xfdl");

       
    };
}
)();
