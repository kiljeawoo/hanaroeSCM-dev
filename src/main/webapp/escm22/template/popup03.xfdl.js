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
                this.set_name("popup01");
                this.set_titletext("업무처리팝업");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,767,357);
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


            
            // UI Components Initialize
            obj = new Button("Button65", "absolute", "640", "311", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "696", "311", "54", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", null, "47", "53", "21", "99", null, this);
            obj.set_taborder("8");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", null, "47", "41", "21", "56", null, this);
            obj.set_taborder("9");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", null, "47", "41", "21", "13", null, this);
            obj.set_taborder("10");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "17", "51", "135", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("추가정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "76", "110", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("공급처은행");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "104", "110", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "126", "76", null, "29", "17", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "126", "104", null, "29", "17", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "17", "132", "110", "29", null, null, this);
            obj.set_taborder("16");
            obj.set_text("공급유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "17", "160", "110", "29", null, null, this);
            obj.set_taborder("17");
            obj.set_text("결제기일기준");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "126", "132", null, "29", "17", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "126", "160", null, "29", "17", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "17", "188", "110", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("장려금률기준");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "17", "216", "110", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_text("발주금지사유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "126", "188", null, "29", "17", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "126", "216", null, "29", "17", null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "17", "244", "110", "29", null, null, this);
            obj.set_taborder("24");
            obj.set_text("수주금지사유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "17", "272", "110", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_text("최초등록일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "126", "244", null, "29", "17", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "126", "272", null, "29", "17", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03", "absolute", "130", "80", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_text("[00] 미입력");
            obj.set_enable("false");

            obj = new Combo("Combo06", "absolute", "130", "108", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_text("[4] 자체계약");
            obj.set_enable("false");

            obj = new Combo("Combo11", "absolute", "130", "136", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_text("[01] 매취");

            obj = new Combo("Combo12", "absolute", "130", "192", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_text("[1] 율");
            obj.set_enable("false");

            obj = new Combo("Combo13", "absolute", "130", "164", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_text("[1] 공급받는 자");
            obj.set_enable("false");

            obj = new Combo("Combo14", "absolute", "130", "248", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_text("[00] 해당없음");
            obj.set_enable("false");

            obj = new Combo("Combo15", "absolute", "130", "220", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_text("[00] 해당없음");
            obj.set_enable("false");

            obj = new Calendar("Calendar00", "absolute", "130", "276", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_enable("false");

            obj = new Static("Static59", "absolute", "261", "76", "110", "29", null, null, this);
            obj.set_taborder("36");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "261", "104", "110", "29", null, null, this);
            obj.set_taborder("37");
            obj.set_text("계통탄력가격");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "261", "132", "110", "29", null, null, this);
            obj.set_taborder("38");
            obj.set_text("리드타임");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "261", "160", "110", "29", null, null, this);
            obj.set_taborder("39");
            obj.set_text("약정과목구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "261", "188", "110", "29", null, null, this);
            obj.set_taborder("40");
            obj.set_text("장려금율(%)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "261", "216", "110", "29", null, null, this);
            obj.set_taborder("41");
            obj.set_text("발주금지일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "261", "244", "110", "29", null, null, this);
            obj.set_taborder("42");
            obj.set_text("수주금지일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "261", "272", "110", "29", null, null, this);
            obj.set_taborder("43");
            obj.set_text("최종변경일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01", "absolute", "374", "276", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.set_enable("false");

            obj = new Calendar("Calendar03", "absolute", "374", "248", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");

            obj = new Calendar("Calendar04", "absolute", "374", "220", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("46");

            obj = new MaskEdit("MaskEdit00", "absolute", "374", "192", "128", "21", null, null, this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo16", "absolute", "374", "164", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("48");
            obj.set_text("[930] 유통");
            obj.set_enable("false");

            obj = new MaskEdit("MaskEdit01", "absolute", "374", "136", "128", "21", null, null, this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo17", "absolute", "374", "108", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_text("[] 미적용");

            obj = new Edit("Edit00", "absolute", "374", "80", "128", "21", null, null, this);
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "505", "76", "110", "29", null, null, this);
            obj.set_taborder("52");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "505", "104", "110", "29", null, null, this);
            obj.set_taborder("53");
            obj.set_text("매입단가수정");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "505", "132", "110", "29", null, null, this);
            obj.set_taborder("54");
            obj.set_text("계약시작일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "505", "160", "110", "29", null, null, this);
            obj.set_taborder("55");
            obj.set_text("장려금지급시점");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "505", "188", "110", "29", null, null, this);
            obj.set_taborder("56");
            obj.set_text("장려금기준금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "505", "216", "110", "29", null, null, this);
            obj.set_taborder("57");
            obj.set_text("거래중지사유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "505", "244", "110", "29", null, null, this);
            obj.set_taborder("58");
            obj.set_text("계약해지사유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "505", "272", "110", "29", null, null, this);
            obj.set_taborder("59");
            obj.set_text("삭제일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar05", "absolute", "618", "276", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_enable("false");

            obj = new Combo("Combo18", "absolute", "618", "248", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("61");
            obj.set_text("[00] 해당없음");
            obj.set_enable("false");

            obj = new Combo("Combo19", "absolute", "618", "220", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("62");
            obj.set_text("[00] 해당없음");
            obj.set_enable("false");

            obj = new MaskEdit("MaskEdit02", "absolute", "618", "192", "128", "21", null, null, this);
            obj.set_taborder("63");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo20", "absolute", "618", "164", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("64");
            obj.set_text("[00] 해당없음");

            obj = new Calendar("Calendar06", "absolute", "618", "136", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("65");
            obj.set_cssclass("WF_Essential");

            obj = new Combo("Combo22", "absolute", "618", "108", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("66");
            obj.set_text("[0] 미적용");

            obj = new Edit("Edit09", "absolute", "618", "80", "128", "21", null, null, this);
            obj.set_taborder("67");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "674", "340", "91", "17", null, null, this);
            obj.set_taborder("68");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "674", "301", "91", "10", null, null, this);
            obj.set_taborder("69");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "750", "76", "17", "67", null, null, this);
            obj.set_taborder("70");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "32", "91", "15", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.set_taborder("72");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "674", "68", "91", "8", null, null, this);
            obj.set_taborder("73");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("74");
            obj.set_text("팝업타이틀");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "729", "0", "37", "32", null, null, this);
            obj.set_taborder("75");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 357, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("업무처리팝업");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("popup03.xfdl", true);

       
    };
}
)();
