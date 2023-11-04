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
                this._setFormPosition(0,0,1010,150);
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
            obj._setContents("<ColumnInfo><Column id=\"SITEURL\" type=\"STRING\" size=\"256\"/><Column id=\"SITENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SITENAME\">관련사이트</Col><Col id=\"SITEURL\">0</Col></Row><Row><Col id=\"SITEURL\">1</Col><Col id=\"SITENAME\">────────</Col></Row><Row><Col id=\"SITEURL\">http://www.nhabgroup.com/</Col><Col id=\"SITENAME\">농협경제지주</Col></Row><Row><Col id=\"SITEURL\">http://www.nhfngroup.com/</Col><Col id=\"SITENAME\">NH농협금융지주</Col></Row><Row><Col id=\"SITENAME\">남해화학</Col><Col id=\"SITEURL\">http://www.nhchem.co.kr/</Col></Row><Row><Col id=\"SITENAME\">농민신문사</Col><Col id=\"SITEURL\">http://www.nongmin.com/</Col></Row><Row><Col id=\"SITENAME\">농우바이오</Col><Col id=\"SITEURL\">http://www.nongwoobio.co.kr/</Col></Row><Row><Col id=\"SITENAME\">농협대학교</Col><Col id=\"SITEURL\">http://www.nonghyup.ac.kr/n_main.asp</Col></Row><Row><Col id=\"SITENAME\">농협목우촌</Col><Col id=\"SITEURL\">http://www.moguchon.co.kr/</Col></Row><Row><Col id=\"SITENAME\">농협물류</Col><Col id=\"SITEURL\">http://www.nonghyuplogis.com/</Col></Row><Row><Col id=\"SITENAME\">농협사료</Col><Col id=\"SITEURL\">http://www.nonghyupsaryo.com/</Col></Row><Row><Col id=\"SITENAME\">농협아그로</Col><Col id=\"SITEURL\">http://www.nonghyupagro.com/</Col></Row><Row><Col id=\"SITENAME\">농협유통</Col><Col id=\"SITEURL\">http://www.nhhanaro.co.kr/</Col></Row><Row><Col id=\"SITENAME\">농협자산관리</Col><Col id=\"SITEURL\">http://www.acamco.co.kr/</Col></Row><Row><Col id=\"SITENAME\">농협재단</Col><Col id=\"SITEURL\">http://jaedan.nonghyup.com/</Col></Row><Row><Col id=\"SITENAME\">농협정보시스템</Col><Col id=\"SITEURL\">http://www.nonghyupit.com</Col></Row><Row><Col id=\"SITENAME\">농협케미컬</Col><Col id=\"SITEURL\">http://www.nhchemical.com/</Col></Row><Row><Col id=\"SITENAME\">농협홍삼</Col><Col id=\"SITEURL\">http://www.hansamin.org/page/main.html</Col></Row><Row><Col id=\"SITENAME\">농협흙사랑</Col><Col id=\"SITEURL\">http://www.nhheuksarang.com/</Col></Row><Row><Col id=\"SITENAME\">안성팜랜드</Col><Col id=\"SITEURL\">http://www.nhasfarmland.com/</Col></Row><Row><Col id=\"SITENAME\">우리선물</Col><Col id=\"SITEURL\">http://www.futures.co.kr/</Col></Row><Row><Col id=\"SITENAME\">협동기획</Col><Col id=\"SITEURL\">http://www.nhman.co.kr/</Col></Row><Row><Col id=\"SITENAME\">NH개발</Col><Col id=\"SITEURL\">http://www.nhd.co.kr/</Col></Row><Row><Col id=\"SITENAME\">NH농협생명</Col><Col id=\"SITEURL\">http://www.nhlife.co.kr/main.nhl</Col></Row><Row><Col id=\"SITENAME\">NH농협선물</Col><Col id=\"SITEURL\">http://www.nfutures.co.kr/</Col></Row><Row><Col id=\"SITENAME\">NH농협손해보험</Col><Col id=\"SITEURL\">http://www.nhfire.co.kr/index.nhfire</Col></Row><Row><Col id=\"SITENAME\">NH농협은행</Col><Col id=\"SITEURL\">https://www.nhbank.com</Col></Row><Row><Col id=\"SITENAME\">NH농협캐피탈</Col><Col id=\"SITEURL\">http://www.nhcapital.co.kr/</Col></Row><Row><Col id=\"SITENAME\">NH무역</Col><Col id=\"SITEURL\">http://www.nhtra.co.kr/</Col></Row><Row><Col id=\"SITENAME\">NH저축은행</Col><Col id=\"SITEURL\">http://www.nhsavingsbank.co.kr/</Col></Row><Row><Col id=\"SITENAME\">NH축산자재몰</Col><Col id=\"SITEURL\">http://nhjajae.nonghyup.com/</Col></Row><Row><Col id=\"SITENAME\">NH투자증권</Col><Col id=\"SITEURL\">http://www.nhwm.com/</Col></Row><Row><Col id=\"SITENAME\">NH-CA자산운용</Col><Col id=\"SITEURL\">http://www.nh-ca.com/</Col></Row><Row><Col id=\"SITEURL\">http://www.nonghyupmall.com</Col><Col id=\"SITENAME\">농협몰</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "0", "63", "165", "24", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_INTRO_FooterLogo");
            obj.style.set_background("URL('theme://images/new/footer_logo.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_help", "absolute", "190", "15", "820", "33", null, null, this);
            obj.set_taborder("12");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_01", "absolute", "0", "0", "120", null, null, "0", this.div_help);
            obj.set_taborder("0");
            obj.set_text("개인정보처리방침");
            obj.set_cssclass("btn_INTRO_Footer");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 10 맑은 고딕, Gulim");
            obj.style.set_cursor("hand");
            this.div_help.addChild(obj.name, obj);
            obj = new Button("btn_02", "absolute", "150", "0", "65", null, null, "0", this.div_help);
            obj.set_taborder("1");
            obj.set_text("이용약관");
            obj.set_cssclass("btn_INTRO_Footer");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 10 맑은 고딕, Gulim");
            obj.style.set_cursor("hand");
            this.div_help.addChild(obj.name, obj);
            obj = new Static("btn_03", "absolute", "245", "0", "165", null, null, "0", this.div_help);
            obj.set_taborder("2");
            obj.set_text("부패행위신고센터 (");
            obj.style.set_background("transparent");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("#6b6b6bff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 13 맑은 고딕, Gulim");
            this.div_help.addChild(obj.name, obj);
            obj = new Combo("cmb_familySite", "absolute", null, "0", "170", "33", "0", null, this.div_help);
            this.div_help.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@ds_relatedSites");
            obj.set_codecolumn("SITEURL");
            obj.set_datacolumn("SITENAME");
            obj.set_displayrowcount("10");
            obj.set_cssclass("cmb_INTRO_FamilySite2");
            obj.style.set_font("9 맑은 고딕, Gulim");
            obj.style.set_cursor("hand");
            obj.set_value("0");
            obj.set_text("관련사이트");
            obj = new Static("Static00", "absolute", "488", "0", "21", null, null, "0", this.div_help);
            obj.set_taborder("6");
            obj.set_text("/");
            obj.style.set_color("#6b6b6bff");
            obj.style.set_align("middle");
            obj.style.set_font("bold 10 맑은 고딕, Gulim");
            this.div_help.addChild(obj.name, obj);
            obj = new Static("btn_00", "absolute", "602", "0", "25", null, null, "0", this.div_help);
            obj.set_taborder("7");
            obj.set_text(")");
            obj.style.set_background("transparent");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("#6b6b6bff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 13 맑은 고딕, Gulim");
            this.div_help.addChild(obj.name, obj);
            obj = new Button("btn_04", "absolute", "397", "0", "100", null, null, "0", this.div_help);
            obj.set_taborder("4");
            obj.set_text("가공생필ㆍ수산");
            obj.set_cssclass("btn_INTRO_Footer");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 10 맑은 고딕, Gulim");
            obj.style.set_cursor("hand");
            this.div_help.addChild(obj.name, obj);
            obj = new Button("btn_05", "absolute", "508", "0", "100", null, null, "0", this.div_help);
            obj.set_taborder("5");
            obj.set_text("판매장ㆍ테넌트");
            obj.set_cssclass("btn_INTRO_Footer");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 10 맑은 고딕, Gulim");
            obj.style.set_cursor("hand");
            this.div_help.addChild(obj.name, obj);

            obj = new Div("div_copyright", "absolute", "190", "63", "820", "70", null, null, this);
            obj.set_taborder("13");
            obj.set_text("Div01");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "44", null, "22", "0", null, this.div_copyright);
            obj.set_taborder("0");
            obj.set_text("하나로 eSCM사이트는 익스플로러 8이상을 권장 합니다. 익스플로러 7이하일 경우 구글 크롬을 설치 후 사용하시기 바랍니다.");
            obj.set_cssclass("sta_INTRO_FooterAdress");
            obj.style.set_color("#6f6f6fff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 맑은 고딕, Gulim");
            this.div_copyright.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "22", null, "22", "0", null, this.div_copyright);
            obj.set_taborder("1");
            obj.set_text("Copyright 농협경제지주. All Rights Reserved. 이 시스템은 (주)이썸테크가 운영 관리합니다.");
            obj.set_cssclass("sta_INTRO_FooterAdress");
            obj.style.set_color("#6f6f6fff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 맑은 고딕, Gulim");
            this.div_copyright.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "0", null, "22", "0", null, this.div_copyright);
            obj.set_taborder("2");
            obj.set_text("서울특별시 서대문구 통일로 81 NH농협생명빌딩 서관 8층      대표전화번호 : 1522-1211      FAX : 02-318-3456");
            obj.set_cssclass("sta_INTRO_FooterAdress");
            obj.style.set_color("#6f6f6fff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 맑은 고딕, Gulim");
            this.div_copyright.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 820, 33, this.div_help,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.set_scrollbars("none");

            	}
            );
            this.div_help.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 820, 70, this.div_copyright,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.set_text("Div01");
            		p.set_scrollbars("none");

            	}
            );
            this.div_copyright.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1010, 150, this,
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
        this.addIncludeScript("main_bottom_new.xfdl", "lib::comLib.xjs");
        this.registerScript("main_bottom_new.xfdl", function(exports) {
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

        this.btn_05_onclick = function(obj,e)
        {
        	//system.execBrowser("http://www.nonghyup.com/Complaint/Complaint_Tel.aspx");
        	window.open("https://www.redwhistle.org/report/reportNew.asp?organ=7862&RType=1");
        }

        this.cmb_familySite_onitemchanged = function(obj,e)
        {
        	if (e.postvalue != "0" && e.postvalue != "1") {
        		system.execBrowser(e.postvalue);
        	} else {
        		obj.set_value("0");
        	}
        }

        this.btn_04_onclick = function(obj,e)
        {
        	window.open("http://www.redwhistle.org/report/report.asp?organ=7655");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_help.btn_01.addEventHandler("onclick", this.btn_01_onclick, this);
            this.div_help.btn_02.addEventHandler("onclick", this.btn_02_onclick, this);
            this.div_help.cmb_familySite.addEventHandler("onitemchanged", this.cmb_familySite_onitemchanged, this);
            this.div_help.btn_04.addEventHandler("onclick", this.btn_04_onclick, this);
            this.div_help.btn_05.addEventHandler("onclick", this.btn_05_onclick, this);

        };

        this.loadIncludeScript("main_bottom_new.xfdl", true);

       
    };
}
)();
