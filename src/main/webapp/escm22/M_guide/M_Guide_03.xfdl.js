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
                this.set_name("Guide_06");
                this.set_classname("Guide_01");
                this.set_titletext("Button");
                this._setFormPosition(0,0,1008,1934);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "83", "180", "91", "46", null, null, this);
            obj.set_taborder("0");
            obj.set_text("일이삼");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "83", "233", "112", "46", null, null, this);
            obj.set_taborder("1");
            obj.set_text("일이삼사");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "83", "286", "133", "46", null, null, this);
            obj.set_taborder("2");
            obj.set_text("일이삼사오");
            this.addChild(obj.name, obj);

            obj = new Button("Button11", "absolute", "83", "339", "154", "46", null, null, this);
            obj.set_taborder("3");
            obj.set_text("일이삼사오육");
            this.addChild(obj.name, obj);

            obj = new Button("Button12", "absolute", "83", "392", "175", "46", null, null, this);
            obj.set_taborder("4");
            obj.set_text("일이삼사오육칠");
            this.addChild(obj.name, obj);

            obj = new Button("Button13", "absolute", "83", "127", "70", "46", null, null, this);
            obj.set_taborder("5");
            obj.set_text("일이");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "83", "445", "196", "46", null, null, this);
            obj.set_taborder("19");
            obj.set_text("일이삼사오육칠팔");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "83", "498", "217", "46", null, null, this);
            obj.set_taborder("20");
            obj.set_text("일이삼사오육칠팔구");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "83", "551", "238", "46", null, null, this);
            obj.set_taborder("21");
            obj.set_text("일이삼사오육칠팔구십");
            this.addChild(obj.name, obj);

            obj = new Button("Button14", "absolute", "158", "127", "70", "46", null, null, this);
            obj.set_taborder("27");
            obj.set_text("일이");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "41", "376", "34", null, null, this);
            obj.getSetter("taborder").set("62");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_text("- Default 버튼은 링크시 사용하며 최소 2글자부터 시작하여\r\n한 글자가 늘어날 때마다 버튼 width가 21px씩 증가");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "470", "1135", "250", "54", null, null, this);
            obj.set_taborder("72");
            this.addChild(obj.name, obj);

            obj = new Button("Button67", "absolute", "725", "1135", "54", "54", null, null, this);
            obj.set_taborder("73");
            obj.set_cssclass("btn_WF_SearchBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "470", "1194", "250", "54", null, null, this);
            obj.set_taborder("75");
            this.addChild(obj.name, obj);

            obj = new Button("Button41", "absolute", "725", "1194", "54", "54", null, null, this);
            obj.set_taborder("76");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "422", "30", null, null, this);
            obj.getSetter("taborder").set("151");
            obj.set_text("Common Button");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "83", "99", "62", "18", null, null, this);
            obj.getSetter("taborder").set("153");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "158", "99", "65", "18", null, null, this);
            obj.getSetter("taborder").set("154");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "27", "144", "52", "462", null, null, this);
            obj.getSetter("taborder").set("163");
            obj.set_text("W : 70\r\nW : 91\r\nW : 112\r\nW : 133\r\nW : 154\r\nW : 175\r\nW : 196\r\nw : 217\r\nW : 238\r\n\r\n");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            obj.style.set_linespace("42");
            obj.style.set_align("left top");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "82", "868", "62", "18", null, null, this);
            obj.getSetter("taborder").set("177");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "157", "868", "65", "18", null, null, this);
            obj.getSetter("taborder").set("178");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "470", "833", "197", "18", null, null, this);
            obj.getSetter("taborder").set("179");
            obj.set_text("class : <b v='true'>btn_WFSA_SearchBtn</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Button("Button27", "absolute", "470", "877", "510", "49", null, null, this);
            obj.set_taborder("297");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button28", "absolute", "82", "949", "91", "46", null, null, this);
            obj.set_taborder("298");
            obj.set_text("일이삼");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button29", "absolute", "82", "896", "70", "46", null, null, this);
            obj.set_taborder("299");
            obj.set_text("일이");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button30", "absolute", "82", "1805", "470", "33", null, null, this);
            obj.set_taborder("300");
            obj.set_text("추가정보 더보기");
            obj.set_cssclass("btn_WF_InputControlBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button31", "absolute", "82", "1613", "540", "16", null, null, this);
            obj.set_taborder("301");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button26", "absolute", "636", "551", "238", "46", null, null, this);
            obj.set_taborder("302");
            obj.set_text("일이삼사오육칠팔구십");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button25", "absolute", "636", "498", "217", "46", null, null, this);
            obj.set_taborder("303");
            obj.set_text("일이삼사오육칠팔구");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button24", "absolute", "636", "445", "196", "46", null, null, this);
            obj.set_taborder("304");
            obj.set_text("일이삼사오육칠팔");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button23", "absolute", "636", "127", "70", "46", null, null, this);
            obj.set_taborder("305");
            obj.set_text("일이");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button22", "absolute", "636", "392", "175", "46", null, null, this);
            obj.set_taborder("306");
            obj.set_text("일이삼사오육칠");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button21", "absolute", "636", "339", "154", "46", null, null, this);
            obj.set_taborder("307");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button20", "absolute", "636", "286", "133", "46", null, null, this);
            obj.set_taborder("308");
            obj.set_text("일이삼사오");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button19", "absolute", "636", "233", "112", "46", null, null, this);
            obj.set_taborder("309");
            obj.set_text("일이삼사");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button18", "absolute", "636", "180", "91", "46", null, null, this);
            obj.set_taborder("310");
            obj.set_text("일이삼");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "630", "99", "62", "18", null, null, this);
            obj.getSetter("taborder").set("311");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "711", "99", "65", "18", null, null, this);
            obj.getSetter("taborder").set("312");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "711", "127", "70", "46", null, null, this);
            obj.set_taborder("313");
            obj.set_text("일이");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "636", "57", "183", "18", null, null, this);
            obj.getSetter("taborder").set("314");
            obj.set_text("class : <b v='true'>btn_WF_CRUD</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "572", "144", "52", "462", null, null, this);
            obj.getSetter("taborder").set("315");
            obj.set_text("W : 70\r\nW : 91\r\nW : 112\r\nW : 133\r\nW : 154\r\nW : 175\r\nW : 196\r\nw : 217\r\nW : 238\r\n\r\n");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            obj.style.set_linespace("42");
            obj.style.set_align("left top");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "421", "0", "587", "30", null, null, this);
            obj.getSetter("taborder").set("316");
            obj.set_text("CRUD Button");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "82", "1320", "238", "46", null, null, this);
            obj.set_taborder("317");
            obj.set_text("일이삼사오육칠팔구십");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "82", "1267", "217", "46", null, null, this);
            obj.set_taborder("318");
            obj.set_text("일이삼사오육칠팔구");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "82", "1214", "196", "46", null, null, this);
            obj.set_taborder("319");
            obj.set_text("일이삼사오육칠팔");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", "82", "1161", "175", "46", null, null, this);
            obj.set_taborder("320");
            obj.set_text("일이삼사오육칠");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button15", "absolute", "82", "1108", "154", "46", null, null, this);
            obj.set_taborder("321");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button16", "absolute", "82", "1055", "133", "46", null, null, this);
            obj.set_taborder("322");
            obj.set_text("일이삼사오");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button17", "absolute", "82", "1002", "112", "46", null, null, this);
            obj.set_taborder("323");
            obj.set_text("일이삼사");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button32", "absolute", "157", "896", "70", "46", null, null, this);
            obj.set_taborder("324");
            obj.set_text("일이");
            obj.set_cssclass("btn_WF_GridBtn");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "777", "422", "30", null, null, this);
            obj.getSetter("taborder").set("325");
            obj.set_text("Grid Module Button");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "27", "913", "52", "462", null, null, this);
            obj.getSetter("taborder").set("326");
            obj.set_text("W : 70\r\nW : 91\r\nW : 112\r\nW : 133\r\nW : 154\r\nW : 175\r\nW : 196\r\nw : 217\r\nW : 238\r\n\r\n");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            obj.style.set_linespace("42");
            obj.style.set_align("left top");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "421", "777", "587", "30", null, null, this);
            obj.getSetter("taborder").set("327");
            obj.set_text("Search Button");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "82", "833", "183", "18", null, null, this);
            obj.getSetter("taborder").set("328");
            obj.set_text("class : <b v='true'>btn_WF_GridBtn</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Button("Button33", "absolute", "470", "931", "510", "49", null, null, this);
            obj.set_taborder("329");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "0", "1525", "1008", "30", null, null, this);
            obj.getSetter("taborder").set("330");
            obj.set_text("Search Open/Close Button");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Button("Button34", "absolute", "82", "1636", "540", "16", null, null, this);
            obj.set_taborder("331");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button35", "absolute", "82", "1843", "470", "33", null, null, this);
            obj.set_taborder("332");
            obj.set_text("추가정보 더보기");
            obj.set_cssclass("btn_WF_InputControlBtn");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "1710", "1008", "30", null, null, this);
            obj.getSetter("taborder").set("333");
            obj.set_text("Information Open/Close Button");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "692", "1081", "197", "18", null, null, this);
            obj.getSetter("taborder").set("334");
            obj.set_text("class : <b v='true'>btn_WF_SearchBtn</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "82", "1585", "239", "18", null, null, this);
            obj.getSetter("taborder").set("335");
            obj.set_text("class : <b v='true'>btn_WF_SearchControlBtn</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "82", "1775", "239", "18", null, null, this);
            obj.getSetter("taborder").set("336");
            obj.set_text("class : <b v='true'>btn_WF_InputControlBtn</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "83", "1887", "470", "1", null, null, this);
            obj.getSetter("taborder").set("337");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "551", "1882", "1", "10", null, null, this);
            obj.getSetter("taborder").set("338");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "304", "1888", "27", "17", null, null, this);
            obj.getSetter("taborder").set("340");
            obj.set_text("470");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "82", "1883", "1", "10", null, null, this);
            obj.getSetter("taborder").set("341");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "565", "1851", "27", "17", null, null, this);
            obj.getSetter("taborder").set("342");
            obj.set_text("33");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "83", "1663", "539", "1", null, null, this);
            obj.getSetter("taborder").set("343");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "621", "1658", "1", "10", null, null, this);
            obj.getSetter("taborder").set("344");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "339", "1664", "27", "17", null, null, this);
            obj.getSetter("taborder").set("345");
            obj.set_text("540");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "82", "1659", "1", "10", null, null, this);
            obj.getSetter("taborder").set("346");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "638", "1635", "27", "17", null, null, this);
            obj.getSetter("taborder").set("347");
            obj.set_text("16");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "558", "1843", "1", "33", null, null, this);
            obj.getSetter("taborder").set("348");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "554", "1843", "10", "1", null, null, this);
            obj.getSetter("taborder").set("349");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "554", "1875", "10", "1", null, null, this);
            obj.getSetter("taborder").set("350");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "632", "1636", "1", "16", null, null, this);
            obj.getSetter("taborder").set("351");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "627", "1636", "10", "1", null, null, this);
            obj.getSetter("taborder").set("352");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "627", "1651", "10", "1", null, null, this);
            obj.getSetter("taborder").set("353");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "795", "1212", "27", "17", null, null, this);
            obj.getSetter("taborder").set("354");
            obj.set_text("54");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "788", "1194", "1", "54", null, null, this);
            obj.getSetter("taborder").set("355");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "784", "1194", "10", "1", null, null, this);
            obj.getSetter("taborder").set("356");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "784", "1247", "10", "1", null, null, this);
            obj.getSetter("taborder").set("357");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "746", "1259", "24", "17", null, null, this);
            obj.getSetter("taborder").set("358");
            obj.set_text("54");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "778", "1253", "1", "10", null, null, this);
            obj.getSetter("taborder").set("360");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "725", "1257", "54", "1", null, null, this);
            obj.getSetter("taborder").set("361");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "725", "1253", "1", "10", null, null, this);
            obj.getSetter("taborder").set("362");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "441", "949", "23", "17", null, null, this);
            obj.getSetter("taborder").set("363");
            obj.set_text("49");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "459", "931", "1", "49", null, null, this);
            obj.getSetter("taborder").set("364");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "455", "931", "10", "1", null, null, this);
            obj.getSetter("taborder").set("365");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "455", "979", "10", "1", null, null, this);
            obj.getSetter("taborder").set("366");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "470", "990", "510", "1", null, null, this);
            obj.getSetter("taborder").set("367");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "979", "985", "1", "10", null, null, this);
            obj.getSetter("taborder").set("368");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "709", "991", "27", "17", null, null, this);
            obj.getSetter("taborder").set("369");
            obj.set_text("510");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "470", "986", "1", "10", null, null, this);
            obj.getSetter("taborder").set("370");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "246", "911", "23", "17", null, null, this);
            obj.getSetter("taborder").set("371");
            obj.set_text("46");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "236", "896", "1", "49", null, null, this);
            obj.getSetter("taborder").set("372");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "232", "896", "10", "1", null, null, this);
            obj.getSetter("taborder").set("373");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "232", "943", "10", "1", null, null, this);
            obj.getSetter("taborder").set("374");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "247", "142", "23", "17", null, null, this);
            obj.getSetter("taborder").set("375");
            obj.set_text("46");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "237", "127", "1", "49", null, null, this);
            obj.getSetter("taborder").set("376");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "233", "127", "10", "1", null, null, this);
            obj.getSetter("taborder").set("377");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "233", "174", "10", "1", null, null, this);
            obj.getSetter("taborder").set("378");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "800", "142", "23", "17", null, null, this);
            obj.getSetter("taborder").set("379");
            obj.set_text("46");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "790", "127", "1", "49", null, null, this);
            obj.getSetter("taborder").set("380");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "786", "127", "10", "1", null, null, this);
            obj.getSetter("taborder").set("381");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "786", "174", "10", "1", null, null, this);
            obj.getSetter("taborder").set("382");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "421", "0", "1", "1525", null, null, this);
            obj.getSetter("taborder").set("383");
            obj.set_cssclass("sta_GID_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "520", "650", "411", "55", null, null, this);
            obj.getSetter("taborder").set("384");
            obj.set_cssclass("sta_WF_CRUDbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "20", "1406", "346", "58", null, null, this);
            obj.getSetter("taborder").set("385");
            obj.set_cssclass("sta_WF_Gridbg");
            this.addChild(obj.name, obj);

            obj = new Button("Button36", "absolute", "131", "1412", "70", "46", null, null, this);
            obj.set_taborder("386");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button37", "absolute", "206", "1412", "70", "46", null, null, this);
            obj.set_taborder("387");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button38", "absolute", "281", "1412", "70", "46", null, null, this);
            obj.set_taborder("388");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button39", "absolute", "750", "654", "91", "46", null, null, this);
            obj.set_taborder("389");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button40", "absolute", "846", "654", "70", "46", null, null, this);
            obj.set_taborder("390");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "565", "741", "183", "18", null, null, this);
            obj.getSetter("taborder").set("391");
            obj.set_text("class : <b v='true'>sta_WF_CRUDbg</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "622", "694", "1", "49", null, null, this);
            obj.getSetter("taborder").set("392");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "36", "1484", "183", "18", null, null, this);
            obj.getSetter("taborder").set("393");
            obj.set_text("class : <b v='true'>sta_WF_Gridbg</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "93", "1437", "1", "49", null, null, this);
            obj.getSetter("taborder").set("394");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "765", "1097", "1", "48", null, null, this);
            obj.getSetter("taborder").set("395");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "201", "1437", "5", "27", null, null, this);
            obj.getSetter("taborder").set("396");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "276", "1437", "5", "27", null, null, this);
            obj.getSetter("taborder").set("397");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "201", "1464", "14", "17", null, null, this);
            obj.getSetter("taborder").set("398");
            obj.set_text("5");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "275", "1464", "14", "17", null, null, this);
            obj.getSetter("taborder").set("399");
            obj.set_text("5");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "352", "1464", "24", "17", null, null, this);
            obj.getSetter("taborder").set("400");
            obj.set_text("15");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "365", "1437", "1", "10", null, null, this);
            obj.getSetter("taborder").set("401");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "351", "1441", "15", "1", null, null, this);
            obj.getSetter("taborder").set("402");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "351", "1437", "1", "10", null, null, this);
            obj.getSetter("taborder").set("403");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", "917", "704", "24", "17", null, null, this);
            obj.getSetter("taborder").set("404");
            obj.set_text("15");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "930", "677", "1", "10", null, null, this);
            obj.getSetter("taborder").set("405");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "916", "681", "15", "1", null, null, this);
            obj.getSetter("taborder").set("406");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", "916", "677", "1", "10", null, null, this);
            obj.getSetter("taborder").set("407");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "841", "677", "5", "27", null, null, this);
            obj.getSetter("taborder").set("408");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "840", "704", "14", "17", null, null, this);
            obj.getSetter("taborder").set("409");
            obj.set_text("5");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "720", "1133", "5", "27", null, null, this);
            obj.getSetter("taborder").set("410");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "719", "1114", "14", "17", null, null, this);
            obj.getSetter("taborder").set("411");
            obj.set_text("5");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1008, 1934, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Guide_01");
            		p.set_titletext("Button");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("M_Guide_03.xfdl", function() {
        this.Button00_onclick = function(obj,e)
        {
        	var nX   = system.clientToScreenX(obj, 0);
            var nY   = system.clientToScreenY(obj, 21);
        	this.PopupMenu00.trackPopup(nX, nY);
        }

        this.Button01_onclick = function(obj,e)
        {
        	var i, j;
        	this.ProgressBar02.pos = 0;
        	for( i = 0 ; i < 200 ; i+=2 )
        	{
        		this.ProgressBar02.stepIt();
        		this.updateWindow();
        	}
        }

        this.Button43_onclick = function(obj,e)
        {
        	
        }

        this.Button02_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("M_Guide_03.xfdl");

       
    };
}
)();
