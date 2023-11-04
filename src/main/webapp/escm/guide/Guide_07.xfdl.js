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
                this.set_name("Guide08_n");
                this.set_titletext("Class Component");
                this._setFormPosition(0,0,1008,1000);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static60", "absolute", "0", "0", null, "30", "0", null, this);
            obj.set_taborder("0");
            obj.set_text("Class Name Component");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "19", "265", "110", "29", null, null, this);
            obj.set_taborder("1");
            obj.set_text("출력Label");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "19", "217", "80", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("조회label");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "19", "370", "67", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("권한사업장");
            obj.set_cssclass("sta_WF_MiniTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "128", "265", "128", "29", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Data ");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "19", "98", "110", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "106", "283", "1", "29", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "19", "54", "199", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("- Bullet Title");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "117", "98", "183", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("class : <b v='true'>sta_WF_Subtitle</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "117", "217", "183", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("class : <b v='true'>sta_WFSA_Label</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "117", "370", "173", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("class : <b v='true'>sta_WF_MiniTitle</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "19", "305", "160", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("class : <b v='true'>sta_WF_Label</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "207", "305", "163", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("class : <b v='true'>sta_WF_Labelbg</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "229", "283", "1", "29", null, null, this);
            obj.set_taborder("27");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "19", "888", "21", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("chk_WF_allSlct");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "19", "683", "318", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("- 결제 계좌정보등록은 농협사업장으로 문의 바랍니다.");
            obj.set_cssclass("sta_WF_DescriptionE02");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "18", "844", "115", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("[처리대상건수 <fc v='#0084ab'><b v='true'>0</b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_GridCount");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "19", "441", "199", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("- Location");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "19", "565", "199", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("- Description");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "19", "168", "199", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("- Label Static");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "148", null, "1", "0", null, this);
            obj.set_taborder("34");
            obj.style.set_border("1 dashed #999999ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "421", null, "1", "0", null, this);
            obj.set_taborder("35");
            obj.style.set_border("1 dashed #999999ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "0", "545", null, "1", "0", null, this);
            obj.set_taborder("36");
            obj.style.set_border("1 dashed #999999ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "354", "683", "224", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("class : <b v='true'>sta_WF_DescriptionE02</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "774", null, "1", "0", null, this);
            obj.set_taborder("38");
            obj.style.set_border("1 dashed #999999ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "18", "793", "199", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("- ETC.");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "148", "844", "181", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("class : <b v='true'>sta_WF_GridCount</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "148", "888", "163", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("class : <b v='true'>chk_WF_allSlct</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "323", "844", "199", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("그리드 상단(모듈버튼 좌측)에 배치");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "305", "888", "204", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("전체화면 데이터 선택스타일 체크박스");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01", "absolute", "44", "888", "21", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("chk_WF_allSlct");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "19", "714", null, "21", "66.47%", null, this);
            obj.set_taborder("45");
            obj.set_text("- 결제 계좌정보등록은 농협사업장으로 문의 바랍니다.");
            obj.set_cssclass("sta_WF_DescriptionB02");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "354", "714", "224", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("class : <b v='true'>sta_WF_DescriptionB02</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "19", "618", null, "21", "66.47%", null, this);
            obj.set_taborder("47");
            obj.set_text("결제 계좌정보등록은 농협사업장으로 문의 바랍니다.");
            obj.set_cssclass("sta_WF_DescriptionE01");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "354", "618", "224", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("class : <b v='true'>sta_WF_DescriptionE02</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "19", "649", null, "21", "66.47%", null, this);
            obj.set_taborder("49");
            obj.set_text("결제 계좌정보등록은 농협사업장으로 문의 바랍니다.");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "354", "649", "224", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("class : <b v='true'>sta_WF_DescriptionB02</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "19", "487", "240", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("결품내역 조회");
            obj.set_cssclass("sta_WF_Location");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "117", "487", "173", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("class : <b v='true'>sta_WF_Location</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1008, 1000, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Guide08_n");
            		p.set_titletext("Class Component");

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

        this.loadIncludeScript("Guide_07.xfdl");

       
    };
}
)();
