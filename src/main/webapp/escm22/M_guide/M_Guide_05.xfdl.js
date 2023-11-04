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
                this.set_name("M_SearchArea");
                this.set_classname("M_SearchArea");
                this.set_titletext("Mobile_Search Area");
                this._setFormPosition(0,0,1008,1935);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static60", "absolute", "0", "0", "1008", "30", null, null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("Search Area");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "15", "559", "297", "21", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("1줄  [조회영역사이즈 : H 154 ] ");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "810", "297", "21", null, null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("2줄  [조회영역사이즈 : H 216 ] ");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "15", "211", null, "291", "451", null, this);
            obj.set_taborder("47");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "102", "15", "425", "54", null, null, this.Div05);
            obj.set_taborder("69");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "20", "15", "82", "54", null, null, this.Div05);
            obj.getSetter("taborder").set("70");
            obj.set_text("가나");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "20", "83", "102", "54", null, null, this.Div05);
            obj.getSetter("taborder").set("71");
            obj.set_text("가나다");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "142", "152", "385", "54", null, null, this.Div05);
            obj.set_taborder("72");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "20", "152", "122", "54", null, null, this.Div05);
            obj.getSetter("taborder").set("73");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "162", "220", "365", "54", null, null, this.Div05);
            obj.set_taborder("74");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "20", "220", "142", "54", null, null, this.Div05);
            obj.getSetter("taborder").set("75");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "122", "83", "405", "54", null, null, this.Div05);
            obj.set_taborder("77");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "15", "140", "225", "21", null, null, this);
            obj.getSetter("taborder").set("57");
            obj.set_text("Label width 정의");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "69", "171", "138", "21", null, null, this);
            obj.getSetter("taborder").set("60");
            obj.set_text("right padding : 25px");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "15", "49", "915", "75", null, null, this);
            obj.getSetter("taborder").set("85");
            obj.set_text("- Search Area에 들어가는 Label Component와 입력 Component는 한 조합으로 쓰이고 둘의  heigt값은 54px로 고정이나 width는 가변적임.\r\n- Label Component는 두 글자를 기준 w82 으로 한 글자씩 늘어날 때마다 20px이 들어남.\r\n- 입력컴포넌트의 경우 Position Right 15px로 고정.\r\n- 여러 줄 일 때 Label Componenet 최대 글자 수 넓이를 기준으로 정렬.");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "15", "584", "540", "154", null, null, this);
            obj.set_taborder("92");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "137", "16", "388", "54", null, null, this.Div00);
            obj.set_taborder("81");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "16", "122", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("82");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button27", "absolute", "15", "85", "510", "49", null, null, this.Div00);
            obj.set_taborder("83");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button31", "absolute", "15", "738", "540", "16", null, null, this);
            obj.set_taborder("94");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "15", "835", "540", "216", null, null, this);
            obj.set_taborder("95");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "137", "16", "388", "54", null, null, this.Div01);
            obj.set_taborder("84");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "16", "102", "54", null, null, this.Div01);
            obj.getSetter("taborder").set("85");
            obj.set_text("가나다");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("Button27", "absolute", "15", "147", "510", "49", null, null, this.Div01);
            obj.set_taborder("86");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "78", "122", "54", null, null, this.Div01);
            obj.getSetter("taborder").set("87");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "137", "78", "388", "54", null, null, this.Div01);
            obj.set_taborder("88");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "15", "1051", "540", "16", null, null, this);
            obj.set_taborder("97");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "15", "1148", "540", "278", null, null, this);
            obj.set_taborder("99");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "137", "16", "388", "54", null, null, this.Div02);
            obj.set_taborder("89");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "16", "102", "54", null, null, this.Div02);
            obj.getSetter("taborder").set("90");
            obj.set_text("가나다");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button27", "absolute", "15", "209", "510", "49", null, null, this.Div02);
            obj.set_taborder("91");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "78", "122", "54", null, null, this.Div02);
            obj.getSetter("taborder").set("92");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "137", "78", "388", "54", null, null, this.Div02);
            obj.set_taborder("93");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "137", "140", "388", "54", null, null, this.Div02);
            obj.set_taborder("94");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "140", "122", "54", null, null, this.Div02);
            obj.getSetter("taborder").set("95");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "15", "1426", "540", "16", null, null, this);
            obj.set_taborder("101");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "15", "1123", "297", "21", null, null, this);
            obj.getSetter("taborder").set("102");
            obj.set_text("3줄  [조회영역사이즈 : H 278 ] ");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "15", "1523", "540", "340", null, null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "137", "16", "388", "54", null, null, this.Div03);
            obj.set_taborder("96");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "16", "102", "54", null, null, this.Div03);
            obj.getSetter("taborder").set("97");
            obj.set_text("가나다");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button27", "absolute", "15", "271", "510", "49", null, null, this.Div03);
            obj.set_taborder("98");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "78", "122", "54", null, null, this.Div03);
            obj.getSetter("taborder").set("99");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "137", "78", "388", "54", null, null, this.Div03);
            obj.set_taborder("100");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "137", "140", "388", "54", null, null, this.Div03);
            obj.set_taborder("101");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "140", "122", "54", null, null, this.Div03);
            obj.getSetter("taborder").set("102");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "202", "122", "54", null, null, this.Div03);
            obj.getSetter("taborder").set("103");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "137", "202", "388", "54", null, null, this.Div03);
            obj.set_taborder("104");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "15", "1863", "540", "16", null, null, this);
            obj.set_taborder("105");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "15", "1498", "297", "21", null, null, this);
            obj.getSetter("taborder").set("106");
            obj.set_text("4줄  [조회영역사이즈 : H 340 ] ");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "92", "221", "450", "1", null, null, this);
            obj.getSetter("taborder").set("108");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "541", "216", "1", "10", null, null, this);
            obj.getSetter("taborder").set("109");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "112", "217", "1", "10", null, null, this);
            obj.getSetter("taborder").set("110");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "301", "194", "27", "17", null, null, this);
            obj.getSetter("taborder").set("111");
            obj.set_text("428");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "92", "217", "1", "10", null, null, this);
            obj.getSetter("taborder").set("112");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", "103", "191", "1", "30", null, null, this);
            obj.getSetter("taborder").set("113");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "546", "226", "1", "53", null, null, this);
            obj.getSetter("taborder").set("114");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "541", "226", "10", "1", null, null, this);
            obj.getSetter("taborder").set("115");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "542", "279", "10", "1", null, null, this);
            obj.getSetter("taborder").set("116");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "553", "244", "21", "17", null, null, this);
            obj.getSetter("taborder").set("117");
            obj.set_text("54");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "35", "285", "82", "1", null, null, this);
            obj.getSetter("taborder").set("118");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "116", "280", "1", "10", null, null, this);
            obj.getSetter("taborder").set("119");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "35", "281", "1", "10", null, null, this);
            obj.getSetter("taborder").set("120");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "66", "286", "27", "17", null, null, this);
            obj.getSetter("taborder").set("121");
            obj.set_text("82");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "35", "353", "102", "1", null, null, this);
            obj.getSetter("taborder").set("122");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "136", "348", "1", "10", null, null, this);
            obj.getSetter("taborder").set("123");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "35", "349", "1", "10", null, null, this);
            obj.getSetter("taborder").set("124");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "66", "354", "27", "17", null, null, this);
            obj.getSetter("taborder").set("125");
            obj.set_text("102");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "35", "422", "122", "1", null, null, this);
            obj.getSetter("taborder").set("126");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "156", "417", "1", "10", null, null, this);
            obj.getSetter("taborder").set("127");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "35", "418", "1", "10", null, null, this);
            obj.getSetter("taborder").set("128");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "66", "423", "27", "17", null, null, this);
            obj.getSetter("taborder").set("129");
            obj.set_text("122");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "35", "490", "141", "1", null, null, this);
            obj.getSetter("taborder").set("130");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "176", "485", "1", "10", null, null, this);
            obj.getSetter("taborder").set("131");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "35", "486", "1", "10", null, null, this);
            obj.getSetter("taborder").set("132");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "66", "491", "27", "17", null, null, this);
            obj.getSetter("taborder").set("133");
            obj.set_text("142");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "593", "203", "269", "21", null, null, this);
            obj.getSetter("taborder").set("135");
            obj.set_text("한글자 늘어날 때마다 라벨 width값 <fc v='red'>+20</fc> 늘어남 ");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "565", "584", "1", "169", null, null, this);
            obj.getSetter("taborder").set("136");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "560", "584", "10", "1", null, null, this);
            obj.getSetter("taborder").set("137");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "561", "753", "10", "1", null, null, this);
            obj.getSetter("taborder").set("138");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "572", "663", "31", "17", null, null, this);
            obj.getSetter("taborder").set("139");
            obj.set_text("154");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "565", "835", "1", "232", null, null, this);
            obj.getSetter("taborder").set("140");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "560", "835", "10", "1", null, null, this);
            obj.getSetter("taborder").set("141");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "561", "1066", "10", "1", null, null, this);
            obj.getSetter("taborder").set("142");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "572", "945", "31", "17", null, null, this);
            obj.getSetter("taborder").set("143");
            obj.set_text("216");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "565", "1148", "1", "293", null, null, this);
            obj.getSetter("taborder").set("144");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "560", "1148", "10", "1", null, null, this);
            obj.getSetter("taborder").set("145");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "561", "1441", "10", "1", null, null, this);
            obj.getSetter("taborder").set("146");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "572", "1285", "31", "17", null, null, this);
            obj.getSetter("taborder").set("147");
            obj.set_text("278");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "565", "1523", "1", "356", null, null, this);
            obj.getSetter("taborder").set("148");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "560", "1523", "10", "1", null, null, this);
            obj.getSetter("taborder").set("149");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "561", "1878", "10", "1", null, null, this);
            obj.getSetter("taborder").set("150");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "572", "1693", "31", "17", null, null, this);
            obj.getSetter("taborder").set("151");
            obj.set_text("340");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "540", "610", "1", "10", null, null, this);
            obj.getSetter("taborder").set("152");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "554", "610", "1", "10", null, null, this);
            obj.getSetter("taborder").set("153");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "540", "614", "15", "1", null, null, this);
            obj.getSetter("taborder").set("154");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "540", "592", "21", "17", null, null, this);
            obj.getSetter("taborder").set("155");
            obj.set_text("15");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "452", "585", "1", "15", null, null, this);
            obj.getSetter("taborder").set("157");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "448", "585", "9", "1", null, null, this);
            obj.getSetter("taborder").set("158");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "457", "583", "21", "17", null, null, this);
            obj.getSetter("taborder").set("159");
            obj.set_text("15");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "448", "599", "9", "1", null, null, this);
            obj.getSetter("taborder").set("160");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "452", "718", "1", "19", null, null, this);
            obj.getSetter("taborder").set("161");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "448", "718", "9", "1", null, null, this);
            obj.getSetter("taborder").set("162");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "457", "719", "21", "17", null, null, this);
            obj.getSetter("taborder").set("163");
            obj.set_text("20");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "448", "737", "9", "1", null, null, this);
            obj.getSetter("taborder").set("164");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "452", "654", "1", "15", null, null, this);
            obj.getSetter("taborder").set("165");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "448", "654", "9", "1", null, null, this);
            obj.getSetter("taborder").set("166");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "457", "652", "21", "17", null, null, this);
            obj.getSetter("taborder").set("167");
            obj.set_text("15");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "448", "668", "9", "1", null, null, this);
            obj.getSetter("taborder").set("168");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "452", "905", "1", "8", null, null, this);
            obj.getSetter("taborder").set("169");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "448", "905", "9", "1", null, null, this);
            obj.getSetter("taborder").set("170");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "461", "900", "21", "17", null, null, this);
            obj.getSetter("taborder").set("171");
            obj.set_text("8");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "448", "912", "9", "1", null, null, this);
            obj.getSetter("taborder").set("172");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "603", "431", "189", "18", null, null, this);
            obj.getSetter("taborder").set("173");
            obj.set_text("class : <b v='true'>div_WFSA_Searchbg</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "550", "440", "51", "1", null, null, this);
            obj.getSetter("taborder").set("174");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "108", "516", "189", "18", null, null, this);
            obj.getSetter("taborder").set("175");
            obj.set_text("class : <b v='true'>sta_WFSA_Label</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "130", "468", "1", "52", null, null, this);
            obj.getSetter("taborder").set("176");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "823", "400", "68", "17", null, null, this);
            obj.getSetter("taborder").set("177");
            obj.set_text("6 : 162");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "823", "423", "68", "17", null, null, this);
            obj.getSetter("taborder").set("178");
            obj.set_text("7 : 182");
            obj.set_visible("false");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 291, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("47");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 154, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("92");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 216, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("95");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 278, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("99");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 340, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("103");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1008, 1935, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("M_SearchArea");
            		p.set_titletext("Mobile_Search Area");

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

        this.loadIncludeScript("M_Guide_05.xfdl");

       
    };
}
)();
