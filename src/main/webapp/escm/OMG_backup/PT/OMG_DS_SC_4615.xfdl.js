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
                this.set_name("OMG_DS_SC_4615");
                this.set_titletext("모바일 앱");
                this._setFormPosition(0,0,810,1222);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_DSC\">수주</Col><Col id=\"MENU_NM\">수주내역 조회 / 상세</Col></Row><Row><Col id=\"MENU_DSC\">수주</Col><Col id=\"MENU_NM\">사업장별R1 수주조회 / 상세</Col></Row><Row><Col id=\"MENU_DSC\">배송</Col><Col id=\"MENU_NM\">배송예정서 일반등록</Col></Row><Row><Col id=\"MENU_DSC\">배송</Col><Col id=\"MENU_NM\">배송예정서 직송등록</Col></Row><Row><Col id=\"MENU_DSC\">배송</Col><Col id=\"MENU_NM\">배송예정서 신선등록</Col></Row><Row><Col id=\"MENU_NM\">배송예정서 축산등록</Col><Col id=\"MENU_DSC\">배송</Col></Row><Row><Col id=\"MENU_NM\">배송예정서 수산등록</Col><Col id=\"MENU_DSC\">배송</Col></Row><Row><Col id=\"MENU_DSC\">배송</Col><Col id=\"MENU_NM\">배송예정서 PB직송등록</Col></Row><Row><Col id=\"MENU_NM\">배송예정 거래처별 조회 / 상세</Col><Col id=\"MENU_DSC\">배송</Col></Row><Row><Col id=\"MENU_NM\">배송예정 상품별 조회 / 상세</Col><Col id=\"MENU_DSC\">배송</Col></Row><Row><Col id=\"MENU_NM\">배송예정결과 조회</Col><Col id=\"MENU_DSC\">배송</Col></Row><Row><Col id=\"MENU_DSC\">검수</Col><Col id=\"MENU_NM\">검수실적_전표별 / 상세</Col></Row><Row><Col id=\"MENU_NM\">검수실적_직송분 / 상세</Col><Col id=\"MENU_DSC\">검수</Col></Row><Row><Col id=\"MENU_DSC\">반품</Col><Col id=\"MENU_NM\">반품입고 내역 조회 / 상세</Col></Row><Row><Col id=\"MENU_DSC\">회계</Col><Col id=\"MENU_NM\">매출세금계산서결과</Col></Row><Row><Col id=\"MENU_DSC\">회계</Col><Col id=\"MENU_NM\">일잔액원장 조회</Col></Row><Row><Col id=\"MENU_DSC\">회계</Col><Col id=\"MENU_NM\">월잔액원장 조회</Col></Row><Row><Col id=\"MENU_DSC\">회계</Col><Col id=\"MENU_NM\">이용료명세서</Col></Row><Row><Col id=\"MENU_DSC\">기타</Col><Col id=\"MENU_NM\">공지사항</Col></Row><Row><Col id=\"MENU_DSC\">기타</Col><Col id=\"MENU_NM\">설정</Col></Row><Row><Col id=\"MENU_DSC\">기타</Col><Col id=\"MENU_NM\">푸쉬 내역</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "15", "15", "780", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_text("모바일 앱");
            obj.set_cssclass("sta_INFO_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "175", "780", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("모바일 앱 설치 방법");
            obj.set_cssclass("sta_INFO_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "15", "500", "780", "25", null, null, this);
            obj.set_taborder("3");
            obj.set_text("모바일 앱 서비스 내용");
            obj.set_cssclass("sta_INFO_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "15", "45", "780", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_text("서비스 명 : 하나로eSCM 모바일 앱");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "15", "70", "780", "25", null, null, this);
            obj.set_taborder("6");
            obj.set_text("서비스 개요 : 하나로 eSCM 웹에서 제공되는 수주, 배송, 검수, 반품, 회계업무, 공지사항,");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "15", "120", "780", "25", null, null, this);
            obj.set_taborder("7");
            obj.set_text("PUSH 기능 강화 예정(시스템 장애/복구 알림, PUSH 목록 보기)");
            obj.set_cssclass("sta_INFO_txt1");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "15", "95", "780", "25", null, null, this);
            obj.set_taborder("9");
            obj.set_text("PUSH 기능(공지사항, 수주내역, 배송예정결과오류, 반품입고내역, 매출세금계산서 결과(역발행))을 제공.");
            obj.set_cssclass("sta_INFO_txt1");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "15", "205", "780", "25", null, null, this);
            obj.set_taborder("10");
            obj.set_text("아래의 QR코드를 해당 스마트 폰에서 읽어 앱을 설치하시면 됩니다.");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "15", "230", "780", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("QR코드 사용법을 모르는 경우");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "15", "255", "780", "25", null, null, this);
            obj.set_taborder("12");
            obj.set_text("1) 안드로이드 폰은 플레이 스토어에서 “하나로 eSCM”으로 검색하여 설치");
            obj.style.set_padding("0 0 0 27");
            obj.style.set_font("bold 10 맑은 고딕, Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "15", "280", "780", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("2) iOS 앱은 아이폰에서 앱 설치 페이지로 이동하여 앱 설치 진행 (QR코드 추천)");
            obj.style.set_padding("0 0 0 27");
            obj.style.set_font("bold 10 맑은 고딕, Gulim");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "42", "315", "282", "156", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("URL('theme://images/new/app_qr.png') left middle");
            obj.style.set_border("0 solid #bfbfbfff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01", "absolute", "15", "530", "286", "518", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("URL('theme://images/new/app_img.png') left middle");
            obj.style.set_border("0 solid #bfbfbfff");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_menu", "absolute", "316", "530", "479", "589", null, null, this);
            obj.set_taborder("16");
            obj.set_binddataset("ds_menu");
            obj.set_autofittype("col");
            obj.style.set_border("2 solid #808e9aff,0 none #00000000,0 none #00000000,0 none #00000000");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"358\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell style=\"line:1 solid #c2c8c9ff,1 solid #c2c8c9ff,0 none #c2c8c9ff,0 none #c2c8c9ff;background:#f1f4f9ff;color:#4b4a4aff;font:bold 10 맑은 고딕, Gulim;\" text=\"구분\"/><Cell col=\"1\" style=\"line:1 solid #c2c8c9ff,0 none #c2c8c9ff,0 none #c2c8c9ff,0 none #c2c8c9ff;background:#f1f4f9ff;color:#4b4a4aff;font:bold 10 맑은 고딕, Gulim;\" text=\"화면\"/></Band><Band id=\"body\"><Cell style=\"line:1 solid #c2c8c9ff,1 solid #c2c8c9ff,1 solid #c2c8c9ff,0 none #c2c8c9ff;background:#ffffffff;background2:#ffffffff;font:10 맑은 고딕, Gulim;selectbackground:#ffffffff;selectfont:10 맑은 고딕, Gulim;selectline:1 solid #c2c8c9ff,1 solid #c2c8c9ff,1 solid #c2c8c9ff,0 none #c2c8c9ff;\" text=\"bind:MENU_DSC\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"1\" style=\"line:1 solid #c2c8c9ff,0 none #c2c8c9ff;background:#ffffffff;background2:#ffffffff;font:10 맑은 고딕, Gulim;selectbackground:#ffffffff;selectfont:10 맑은 고딕, Gulim;selectline:1 solid #c2c8c9ff,0 none #c2c8c9ff;\" text=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ios", "absolute", "524", "281", "160", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("iOS앱 설치페이지(모바일)");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 810, 1222, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("모바일 앱");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4615.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4615.xfdl", function() {
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

        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.btn_ios_onclick = function(obj,e)
        {
        	window.open("https://www.nhescm.co.kr/mobile/app.html"); // 제정 내용
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_ios.addEventHandler("onclick", this.btn_ios_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4615.xfdl");

       
    };
}
)();
