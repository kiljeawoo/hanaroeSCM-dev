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
                this.set_name("main_bottom");
                this._setFormPosition(0,0,1008,66);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_relatedSites", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SITEURL\" type=\"STRING\" size=\"256\"/><Column id=\"SITENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SITEURL\">http://www.nhabgroup.com/</Col><Col id=\"SITENAME\">농협경제지주</Col></Row><Row><Col id=\"SITEURL\">http://www.nhfngroup.com/</Col><Col id=\"SITENAME\">NH농협금융지주</Col></Row><Row><Col id=\"SITENAME\">남해화학</Col><Col id=\"SITEURL\">http://www.nhchem.co.kr/</Col></Row><Row><Col id=\"SITENAME\">농민신문사</Col><Col id=\"SITEURL\">http://www.nongmin.com/</Col></Row><Row><Col id=\"SITENAME\">농우바이오</Col><Col id=\"SITEURL\">http://www.nongwoobio.co.kr/</Col></Row><Row><Col id=\"SITENAME\">농협대학교</Col><Col id=\"SITEURL\">http://www.nonghyup.ac.kr/n_main.asp</Col></Row><Row><Col id=\"SITENAME\">농협목우촌</Col><Col id=\"SITEURL\">http://www.moguchon.co.kr/</Col></Row><Row><Col id=\"SITENAME\">농협물류</Col><Col id=\"SITEURL\">http://www.nonghyuplogis.com/</Col></Row><Row><Col id=\"SITENAME\">농협사료</Col><Col id=\"SITEURL\">http://www.nonghyupsaryo.com/</Col></Row><Row><Col id=\"SITENAME\">농협아그로</Col><Col id=\"SITEURL\">http://www.nonghyupagro.com/</Col></Row><Row><Col id=\"SITENAME\">농협유통</Col><Col id=\"SITEURL\">http://www.nhhanaro.co.kr/</Col></Row><Row><Col id=\"SITENAME\">농협자산관리</Col><Col id=\"SITEURL\">http://www.acamco.co.kr/</Col></Row><Row><Col id=\"SITENAME\">농협재단</Col><Col id=\"SITEURL\">http://jaedan.nonghyup.com/</Col></Row><Row><Col id=\"SITENAME\">농협정보시스템</Col><Col id=\"SITEURL\">http://www.nonghyupit.com</Col></Row><Row><Col id=\"SITENAME\">농협케미컬</Col><Col id=\"SITEURL\">http://www.nhchemical.com/</Col></Row><Row><Col id=\"SITENAME\">농협홍삼</Col><Col id=\"SITEURL\">http://www.hansamin.org/page/main.html</Col></Row><Row><Col id=\"SITENAME\">농협흙사랑</Col><Col id=\"SITEURL\">http://www.nhheuksarang.com/</Col></Row><Row><Col id=\"SITENAME\">안성팜랜드</Col><Col id=\"SITEURL\">http://www.nhasfarmland.com/</Col></Row><Row><Col id=\"SITENAME\">우리선물</Col><Col id=\"SITEURL\">http://www.futures.co.kr/</Col></Row><Row><Col id=\"SITENAME\">협동기획</Col><Col id=\"SITEURL\">http://www.nhman.co.kr/</Col></Row><Row><Col id=\"SITENAME\">NH개발</Col><Col id=\"SITEURL\">http://www.nhd.co.kr/</Col></Row><Row><Col id=\"SITENAME\">NH농협생명</Col><Col id=\"SITEURL\">http://www.nhlife.co.kr/main.nhl</Col></Row><Row><Col id=\"SITENAME\">NH농협선물</Col><Col id=\"SITEURL\">http://www.nfutures.co.kr/</Col></Row><Row><Col id=\"SITENAME\">NH농협손해보험</Col><Col id=\"SITEURL\">http://www.nhfire.co.kr/index.nhfire</Col></Row><Row><Col id=\"SITENAME\">NH농협은행</Col><Col id=\"SITEURL\">https://www.nhbank.com</Col></Row><Row><Col id=\"SITENAME\">NH농협캐피탈</Col><Col id=\"SITEURL\">http://www.nhcapital.co.kr/</Col></Row><Row><Col id=\"SITENAME\">NH무역</Col><Col id=\"SITEURL\">http://www.nhtra.co.kr/</Col></Row><Row><Col id=\"SITENAME\">NH저축은행</Col><Col id=\"SITEURL\">http://www.nhsavingsbank.co.kr/</Col></Row><Row><Col id=\"SITENAME\">NH축산자재몰</Col><Col id=\"SITEURL\">http://nhjajae.nonghyup.com/</Col></Row><Row><Col id=\"SITENAME\">NH투자증권</Col><Col id=\"SITEURL\">http://www.nhwm.com/</Col></Row><Row><Col id=\"SITENAME\">NH-CA자산운용</Col><Col id=\"SITEURL\">http://www.nh-ca.com/</Col></Row><Row><Col id=\"SITEURL\">http://www.nonghyupmall.com</Col><Col id=\"SITENAME\">농협몰</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "0", "0", null, "66", "0", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_INTRO_FooterBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "36", "21", "120", "29", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_INTRO_FooterLogo");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_familySite", "absolute", "822", "35", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_codecolumn("SITEURL");
            obj.set_datacolumn("SITENAME");
            obj.set_cssclass("cmb_INTRO_FamilySite");
            obj.set_innerdataset("@ds_relatedSites");
            obj.set_displayrowcount("10");
            obj.set_readonly("false");
            obj.set_displaynulltext("관련사이트");
            obj.style.set_cursor("hand");
            obj.set_index("-1");

            obj = new Button("btn_01", "absolute", "185", "19", "98", "12", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_INTRO_Footer01");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02", "absolute", "293", "19", "55", "12", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_INTRO_Footer02");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03", "absolute", "358", "19", "75", "12", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_INTRO_Footer03");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "445", "20", "97", "12", null, null, this);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_cssclass("btn_INTRO_Footer04");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "185", "34", "578", "13", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_INTRO_FooterAdress");
            obj.set_text("서울특별시 마포구 신촌로 66 5층 농협하나로유통 / 대표전화번호 : 1522-1211 / FAX : 02-318-3456");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "185", "49", "316", "12", null, null, this);
            obj.set_taborder("8");
            obj.set_text("Copyright(C) NH Nonghyup Hanaro Club 2015. All right reserved ");
            obj.set_cssclass("sta_INTRO_FooterCopyright");
            obj.style.set_padding("0 0 0 0");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "503", "49", "244", "12", null, null, this);
            obj.set_taborder("9");
            obj.set_text("이 시스템은 kt컨소시엄이 운영 관리합니다");
            obj.style.set_padding("0 0 0 0");
            obj.set_cssclass("sta_INTRO_FooterAdress");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "185", "2", "707", "14", null, null, this);
            obj.set_taborder("10");
            obj.set_text("하나로 eSCM사이트는 익스플로러 8이상을 권장 합니다. 익스플로러 7이하일 경우 구글 크롬을 설치 후 사용 하시기 바랍니다!!");
            obj.set_cssclass("sta_INTRO_FooterAdvice");
            obj.style.set_color("#f9ffb0ff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1008, 66, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("main_bottom");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("main_bottom.xfdl", "lib::comLib.xjs");
        this.registerScript("main_bottom.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        //개인정보처리방침
        this.btn_01_onclick = function(obj,e)
        {
        	this.gfn_openIntroMenu(20300000);
        }

        //이용약관
        this.btn_02_onclick = function(obj,e)
        {
        	this.gfn_openIntroMenu(20400000);
        }

        this.btn_03_onclick = function(obj,e)
        {
        	system.execBrowser("http://www.nonghyup.com/Complaint/Complaint_Tel.aspx");
        }

        this.cmb_familySite_onitemchanged = function(obj,e)
        {
        	system.execBrowser(e.postvalue);
        }

        this.cmb_familySite_oncloseup = function(obj,e)
        {
        	this.btn_01.setFocus();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.cmb_familySite.addEventHandler("onitemchanged", this.cmb_familySite_onitemchanged, this);
            this.cmb_familySite.addEventHandler("oncloseup", this.cmb_familySite_oncloseup, this);
            this.btn_01.addEventHandler("onclick", this.btn_01_onclick, this);
            this.btn_02.addEventHandler("onclick", this.btn_02_onclick, this);
            this.btn_03.addEventHandler("onclick", this.btn_03_onclick, this);

        };

        this.loadIncludeScript("main_bottom.xfdl", true);

       
    };
}
)();
