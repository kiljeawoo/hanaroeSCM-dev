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
                this.set_name("Intro");
                this._setFormPosition(0,0,1008,552);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bbs", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BOARD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SKIN\" type=\"string\" size=\"32\"/><Column id=\"MOBILE_SKIN\" type=\"string\" size=\"32\"/><Column id=\"BOARD_TITLE\" type=\"string\" size=\"32\"/><Column id=\"BOARD_DESCRIPTION\" type=\"string\" size=\"32\"/><Column id=\"BOARD_AUTH\" type=\"string\" size=\"32\"/><Column id=\"FILES_YN\" type=\"string\" size=\"32\"/><Column id=\"CATEGORY_YN\" type=\"string\" size=\"32\"/><Column id=\"TYPE_CODE\" type=\"string\" size=\"32\"/><Column id=\"IF_INIT_REG_DT\" type=\"string\" size=\"32\"/><Column id=\"IF_INIT_REG_USER\" type=\"string\" size=\"32\"/><Column id=\"FIR_OFFICE_CODE\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_DT\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_USER\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_DT\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_USER\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_notice", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_DT\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_USER\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_change", this);
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mbInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static08", "absolute", "0", "0", null, "330", "0", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_ADMIN_Image");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1149", "25", "21", "40", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#dc143c66");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0", "486", null, "66", "0", null, this);
            obj.set_taborder("29");
            obj.set_text("Div03");
            obj.set_url("frame::main_bottom.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "335", "330", "337", "156", null, null, this);
            obj.set_taborder("30");
            obj.set_text("Div00");
            obj.set_cssclass("div_INTRO_ContentsBg02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "20", "13", "109", "23", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_cssclass("sta_PORTAL_ContentsTitle01");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_NHmore", "absolute", "303", "14", "18", "18", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_cssclass("btn_INTRO_Plus");
            obj.style.set_cursor("hand");
            this.Div00.addChild(obj.name, obj);
            obj = new Grid("grd_notice", "absolute", "20", "44", "301", "102", null, null, this.Div00);
            obj.set_cssclass("grd_INTRO_Notice");
            obj.set_taborder("3");
            obj.set_binddataset("ds_notice");
            obj.set_scrollbars("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"15\"/><Column size=\"200\"/><Column size=\"9\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\"/></Rows><Band id=\"body\"><Cell displaytype=\"image\" style=\"padding: ;\" text=\"URL('theme://images/grdIco_INTRO_Notice.png')\"/><Cell col=\"1\" style=\"padding:0 0 0 0;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:OFANC_TINM\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"date\" style=\"align: ;color:#8f8f8fff;color2:#8f8f8fff;selectcolor:#8f8f8fff;selectfont:9 Gulim;\" text=\"bind:BLTN_ST_DTM\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "330", "336", "156", null, null, this);
            obj.set_taborder("14");
            obj.set_text("Div02");
            obj.set_cssclass("div_INTRO_ContentsBg01");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "335", "0", "1", "156", null, null, this.Div02);
            obj.set_taborder("15");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "27.08%", "75", null, "33", "36.61%", null, this.Div02);
            obj.set_taborder("16");
            obj.set_text("[평일] 09:00 ~ 18:00\r\n[점심] 12:00 ~ 13:00");
            obj.set_cssclass("sta_INTRO_CSTime");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "7.14%", "47", null, "53", "77.08%", null, this.Div02);
            obj.set_taborder("17");
            obj.set_cssclass("sta_INTRO_CSImage");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "27.08%", "40", null, "35", "7.74%", null, this.Div02);
            obj.set_taborder("18");
            obj.set_text("1522 - 1211");
            obj.set_cssclass("sta_INTRO_CSNum");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_remote", "absolute", "61.31%", "81", null, "25", "7.14%", null, this.Div02);
            obj.set_taborder("19");
            obj.set_cssclass("btn_INTRO_Remote");
            obj.style.set_cursor("hand");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "671", "330", null, "156", "0", null, this);
            obj.set_taborder("13");
            obj.set_text("Div01");
            obj.set_cssclass("div_INTRO_ContentsBg02");
            this.addChild(obj.name, obj);
            obj = new Button("btn_more", "absolute", "303", "14", "18", "18", null, null, this.Div01);
            obj.set_taborder("0");
            obj.set_cssclass("btn_INTRO_Plus");
            obj.style.set_cursor("hand");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "20", "13", "109", "23", null, null, this.Div01);
            obj.set_taborder("1");
            obj.set_cssclass("sta_PORTAL_ContentsTitle02");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "0", "1", "154", null, null, this.Div01);
            obj.set_taborder("3");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("grd_bbs", "absolute", "20", "44", "301", "102", null, null, this.Div01);
            obj.set_cssclass("grd_INTRO_Notice");
            obj.set_taborder("4");
            obj.set_binddataset("ds_bbs");
            obj.set_scrollbars("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"15\"/><Column size=\"200\"/><Column size=\"9\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\"/></Rows><Band id=\"body\"><Cell displaytype=\"image\" style=\"padding: ;\" text=\"URL('theme://images/grdIco_INTRO_Notice.png')\"/><Cell col=\"1\" style=\"padding:0 0 0 0;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:BBRD_TI\"/><Cell col=\"2\"/><Cell col=\"3\" style=\"color:#8f8f8fff;color2:#8f8f8fff;selectcolor:#8f8f8fff;selectfont:9 Gulim;\" text=\"bind:FSRG_DTM\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "1111", "25", "8", "40", null, null, this);
            obj.set_taborder("26");
            obj.set_visible("false");
            obj.style.set_background("#dc143c66");
            this.addChild(obj.name, obj);

            obj = new Div("div_change", "absolute", "0", "220", "336", "110", null, null, this);
            obj.set_taborder("33");
            obj.set_cssclass("div_ADMIN_Switch");
            this.addChild(obj.name, obj);
            obj = new Button("btn_change", "absolute", "261", "57", "48", "25", null, null, this.div_change);
            obj.set_taborder("0");
            obj.set_cssclass("btn_ADMIN_Switch");
            obj.style.set_cursor("hand");
            this.div_change.addChild(obj.name, obj);
            obj = new Edit("edt_change", "absolute", "25", "57", "231", "25", null, null, this.div_change);
            obj.set_taborder("1");
            obj.set_cssclass("edt_ADMIN_Switch");
            this.div_change.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "30", "10", "101", "16", null, null, this.div_change);
            obj.set_taborder("2");
            obj.set_cssclass("sta_ADMIN_SwitchTitle");
            this.div_change.addChild(obj.name, obj);
            obj = new Button("btn_searchP", "absolute", "225", "57", "30", "25", null, null, this.div_change);
            obj.set_taborder("3");
            obj.set_cssclass("btn_ADMIN_SwitchSearch");
            obj.style.set_cursor("hand");
            this.div_change.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1007", "0", null, "330", "0", null, this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_ADMIN_ImageBg");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 337, 156, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_text("Div00");
            		p.set_cssclass("div_INTRO_ContentsBg02");
            		p.set_scrollbars("none");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 336, 156, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_text("Div02");
            		p.set_cssclass("div_INTRO_ContentsBg01");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 156, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.set_text("Div01");
            		p.set_cssclass("div_INTRO_ContentsBg02");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 336, 110, this.div_change,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("33");
            		p.set_cssclass("div_ADMIN_Switch");

            	}
            );
            this.div_change.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1008, 552, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Intro");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_change.edt_change","value","ds_change","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "frame::main_bottom.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Potal_admin_old.xfdl", "lib::comLib.xjs");
        this.registerScript("Potal_admin_old.xfdl", function() {
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
           ///페이지 로딩후 실행부분
           this.fn_retrieveBlbdOfancMainList();
           this.fn_retrieveNacfOfancMainList();
        }

        
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveBlbdOfancMainList = function()
        {
        	var sSvcID        = "retrieveBlbdOfancMainList";
        	var sURL          = "svc::rest/pt/blbd/retrieveBlbdOfancMainList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bbs=ds_bbs";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:���옣/�궘�젣, S:議고쉶
        	
        	application.set_usewaitcursor(false);
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        this.fn_retrieveNacfOfancMainList = function()
        {
        	var sSvcID        = "retrieveNacfOfancMainList";
        	var sURL          = "svc::rest/pt/blbd/retrieveNacfOfancMainList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_notice=ds_notice";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:���옣/�궘�젣, S:議고쉶
        	
        	application.set_usewaitcursor(false);
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	application.set_usewaitcursor(true);
         	
         	if(ErrorCode > -1)
         	{
        		switch(svcID)
        		{
        			case "retrieveBlbdOfancMainList":
        			case "retrieveNacfOfancMainList":
        				break;
        			case "search":
        				if(this.ds_mbInfo.rowcount > 0)
        				{
        					if(this.ds_mbInfo.getColumn(0, "MB_ID") == this.div_change.edt_change.value)
        					{
        						application.setPrivateProfile("userid", this.ds_mbInfo.getColumn(0, "MB_ID"));
        						application.setPrivateProfile("userpw",this.ds_mbInfo.getColumn(0, "MB_PW"));
        						nexacro._setCookie('userid',this.ds_mbInfo.getColumn(0, "MB_ID"),7);
        						nexacro._setCookie('userpw',this.ds_mbInfo.getColumn(0, "MB_PW"),7);
        						this.gfn_callAdminSite(this.ds_mbInfo.getColumn(0, "MB_ID"),this.ds_mbInfo.getColumn(0, "MB_PW"));
        					}
        					else
        					{
        						this.div_change.btn_searchP.click();
        					}
        				}
        				else
        				{
        					this.div_change.btn_searchP.click();
        				}
        				break;
        				
        		}
         	}
        }
        // this.gfn_callAdminSite = function(pId, pPW)
        // {
        // 	var adlUrl = application.xadl;	
        // 
        // 	if(adlUrl.indexOf('localhost') > 0 || adlUrl.indexOf('121.0.0.1') > 0)
        // 	{//로컬
        // 		system.execBrowser("http://localhost:8080/nhvan/escm/index.html");
        // 	}
        // 	else if(adlUrl.indexOf('121.156.58.242') != -1)
        // 	{ 
        // 		system.execBrowser("http://121.156.58.242/escm/index.html");
        // 	}
        // 	else if(adlUrl.indexOf("https://www.nhescm.co.kr") != -1)
        // 	{ 
        // 		system.execBrowser("https://www.nhescm.co.kr/escm/index.html");
        // 	}
        // 	system.exit();
        // }

        this.fn_popupAfter = function(strId,strVal)
        {   
        	if(strId == "OMG_DS_SC_9040")
        	{
        		var val = strVal.split(",");
        		application.setPrivateProfile("userid", val[0]);
        		application.setPrivateProfile("userpw",val[1]);
        		nexacro._setCookie('userid',val[0],7);
        		nexacro._setCookie('userpw',val[1],7);
        		
        		this.div_change.edt_change.set_value(val[0]);
        		
        		this.gfn_callAdminSite(val[0], val[1]);
        	}
        }

        this.button_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_searchP":
        			var oArg = {paramMode:"U", dsArg:this.ds_change};
        		    var sOption = "autosize=true,title=true";
        		    var sPopupCallBack = "fn_popupAfter";     
        		    this.gfn_openPopup("OMG_DS_SC_9040","OMG.MG::OMG_DS_SC_9040.xfdl",oArg,sOption,sPopupCallBack);       
        			break;
        			
        		case "btn_more":
        			this.fn_openMenu("26004003");
        			break;
        		case "btn_NHmore":	
        			this.fn_openMenu("26004001");
        			break;
        		case "btn_change":
        			if(this.gfn_isNull(this.div_change.edt_change.value))
        			{
        				this.div_change.btn_searchP.click();
        			}		
        			else if( this.gfn_length(this.div_change.edt_change.value)<2)
        			{
        				alert("두 글자 이상 입력해 주세요.");
        				return;
        			}
        			else
        			{
        				this.fn_searchMb();
        			}
        			break;
        			
        		case "btn_remote":
        			window.open("http://939.co.kr/nhescm/");
        			break;
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.grd_oncellclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "grd_notice":
        			this.fn_openNhNotice(e.row);
        			break;
        		case "grd_bbs":
        			this.fn_openBbsNotice(e.row);
        			break;
        	}
        }

        

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_searchMb = function()
        {
        	var sParam = "searchType=1"
        				+" searchText="+this.gfn_nullToEmpty(this.div_change.edt_change.value);
        	var sSvcID        = "search";
        	var sURL          = "svc::rest/mg/mbcslt/retrieveUsrInfList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_mbInfo=ds_mbInfo";	
        	var sArgument     = sParam
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);	
        }
        this.fn_openNhNotice = function(nRow)
        {
        	var oArg = {noticeSeq:this.ds_notice.getColumn(nRow, "BBRD_SQNO")};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("OMG_DS_SC_4511","OMG.PT::OMG_DS_SC_4511.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.fn_openBbsNotice = function(nRow)
        {
        	var oArg = {blbdId:this.ds_bbs.getColumn(nRow, "BLBD_ID"), bbrdId:this.ds_bbs.getColumn(nRow, "BBRD_ID")};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("OMG_DS_SC_4111","OMG.PT::OMG_DS_SC_4111.xfdl",oArg,sOption,sPopupCallBack);	
        }
        this.div_change_edt_change_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		obj.updateToDataset();
        		this.div_change.btn_change.click();
        	}
        }

        this.fn_openMenu = function(menuId) //26004003
        {
        	var sMenuId = menuId.substr(0,2);//26
        	application.afrm_HFrameSet0.set_separatesize("190,*,0");
        	application.afrm_VFrameSet1.set_separatesize("32,*");
        	application.afrm_LeftFrame.form.ds_menu.filter("MENU_LEVEL >= 1 && MENU_ID.substr(0,2)=='"+sMenuId+"' && DISPLAY_YN!='N'");
        	
        	var nRow    = application.afrm_LeftFrame.form.ds_menu.findRow("MENU_ID",menuId);
        	var objGrid = application.afrm_LeftFrame.form.div_menu.grd_menu;
        	
        	var nTopRow      = application.gds_menu.findRow("MENU_ID", sMenuId+"000000");
        	
        	var sLFTitleText = application.gds_menu.getColumn(nTopRow,"MENU_NAME");
        	
        	application.afrm_LeftFrame.form.btn_menuList.set_text(sLFTitleText);
        	
        	//중메뉴의 첫번째 소메뉴 선택
        	var nRow2   = application.afrm_LeftFrame.form.ds_menu.findRow("MENU_ID",menuId.substr(0,5) + '000');
        	objGrid.setTreeStatus(objGrid.getTreeRow(nRow2),true);//26004000
        	application.afrm_LeftFrame.form.ds_menu.set_rowposition(nRow);
        	
        	var sMId =application.afrm_LeftFrame.form.ds_menu.getColumn(nRow,"MENU_ID");
        	
        	//해당Grid visible처리
        	application.afrm_LeftFrame.form.div_menu.grd_menu.set_visible(true);
        	application.afrm_LeftFrame.form.div_menu.grd_myInfo.set_visible(false);
        	
        	this.gfn_OpenMenuId(sMId);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Div00.btn_NHmore.addEventHandler("onclick", this.button_onclick, this);
            this.Div00.grd_notice.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.Div02.btn_remote.addEventHandler("onclick", this.button_onclick, this);
            this.Div01.btn_more.addEventHandler("onclick", this.button_onclick, this);
            this.Div01.grd_bbs.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.div_change.btn_change.addEventHandler("onclick", this.button_onclick, this);
            this.div_change.edt_change.addEventHandler("onkeydown", this.div_change_edt_change_onkeydown, this);
            this.div_change.btn_searchP.addEventHandler("onclick", this.button_onclick, this);

        };

        this.loadIncludeScript("Potal_admin_old.xfdl");
        this.loadPreloadList();
       
    };
}
)();
