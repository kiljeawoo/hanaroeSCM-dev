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
                this.set_titletext("Button");
                this._setFormPosition(0,0,1008,1832);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "83", "153", "53", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("일이삼");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "83", "179", "65", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("일이삼사");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "83", "205", "77", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("일이삼사오");
            this.addChild(obj.name, obj);

            obj = new Button("Button11", "absolute", "83", "231", "89", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("일이삼사오육");
            this.addChild(obj.name, obj);

            obj = new Button("Button12", "absolute", "83", "257", "101", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("일이삼사오육칠");
            this.addChild(obj.name, obj);

            obj = new Button("Button13", "absolute", "83", "127", "41", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("일이");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "553", "132", "52", "246", null, null, this);
            obj.set_taborder("15");
            obj.set_text("W : 41\r\nW : 53\r\nW : 65\r\nW : 77\r\nW : 89\r\nW : 101\r\nW : 113\r\nw : 125\r\nW : 137\r\n\r\n");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            obj.style.set_linespace("15");
            obj.style.set_align("left top");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "83", "283", "113", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("일이삼사오육칠팔");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "83", "309", "125", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("일이삼사오육칠팔구");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "83", "335", "137", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("일이삼사오육칠팔구십");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "138", "153", "53", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("일이삼");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "150", "179", "65", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("일이삼사");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "162", "205", "77", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("일이삼사오");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "174", "231", "89", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("일이삼사오육");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", "186", "257", "101", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("일이삼사오육칠");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button14", "absolute", "126", "127", "41", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("일이");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button15", "absolute", "198", "283", "113", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("일이삼사오육칠팔");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button16", "absolute", "210", "309", "125", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("일이삼사오육칠팔구");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button17", "absolute", "222", "335", "137", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("일이삼사오육칠팔구십");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button18", "absolute", "618", "153", "53", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("일이삼");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button19", "absolute", "618", "179", "65", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("일이삼사");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button20", "absolute", "618", "205", "77", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("일이삼사오");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button21", "absolute", "618", "231", "89", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button22", "absolute", "618", "257", "101", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("일이삼사오육칠");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button23", "absolute", "618", "127", "41", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("일이");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button24", "absolute", "618", "283", "113", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("일이삼사오육칠팔");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button25", "absolute", "618", "309", "125", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("일이삼사오육칠팔구");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button26", "absolute", "618", "335", "137", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("일이삼사오육칠팔구십");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button27", "absolute", "673", "153", "53", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("일이삼");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button28", "absolute", "685", "179", "65", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("일이삼사");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button29", "absolute", "697", "205", "77", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("일이삼사오");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button30", "absolute", "709", "231", "89", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_text("일이삼사오육");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button31", "absolute", "721", "257", "101", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("일이삼사오육칠");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button32", "absolute", "661", "127", "41", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("일이");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button33", "absolute", "733", "283", "113", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_text("일이삼사오육칠팔");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button34", "absolute", "745", "309", "125", "21", null, null, this);
            obj.set_taborder("59");
            obj.set_text("일이삼사오육칠팔구");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button35", "absolute", "757", "335", "137", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_text("일이삼사오육칠팔구십");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "41", "474", "34", null, null, this);
            obj.set_taborder("62");
            obj.set_text("- Default 버튼은 기본과 그리드모듈버튼에 사용되며 한 글자가 늘어날 때마다\r\n  width값이 12px씩  증가");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Button("Button36", "absolute", "927", "1216", "54", "29", null, null, this);
            obj.set_taborder("64");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button37", "absolute", "871", "1216", "54", "29", null, null, this);
            obj.set_taborder("65");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button69", "absolute", "83", "903", "58", "21", null, null, this);
            obj.set_taborder("66");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button38", "absolute", "143", "903", "58", "21", null, null, this);
            obj.set_taborder("69");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button40", "absolute", "674", "1112", "54", "29", null, null, this);
            obj.set_taborder("71");
            obj.set_text("일이");
            obj.set_cssclass("btn_WF_Popup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "553", "903", "140", "21", null, null, this);
            obj.set_taborder("72");
            this.addChild(obj.name, obj);

            obj = new Button("Button67", "absolute", "696", "903", "21", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "553", "929", "140", "21", null, null, this);
            obj.set_taborder("75");
            this.addChild(obj.name, obj);

            obj = new Button("Button41", "absolute", "696", "929", "21", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button42", "absolute", "83", "1112", "22", "22", null, null, this);
            obj.set_taborder("77");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.addChild(obj.name, obj);

            obj = new Button("Button43", "absolute", "83", "1139", "22", "22", null, null, this);
            obj.set_taborder("78");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.addChild(obj.name, obj);

            obj = new Button("Button44", "absolute", "83", "1166", "22", "22", null, null, this);
            obj.set_taborder("79");
            obj.set_cssclass("btn_WF_ShuttleU");
            this.addChild(obj.name, obj);

            obj = new Button("Button45", "absolute", "83", "1193", "22", "22", null, null, this);
            obj.set_taborder("80");
            obj.set_cssclass("btn_WF_ShuttleD");
            this.addChild(obj.name, obj);

            obj = new Button("Button46", "absolute", "107", "1112", "22", "22", null, null, this);
            obj.set_taborder("84");
            obj.set_cssclass("btn_WF_ShuttleL");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button47", "absolute", "107", "1139", "22", "22", null, null, this);
            obj.set_taborder("85");
            obj.set_cssclass("btn_WF_ShuttleR");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button48", "absolute", "107", "1166", "22", "22", null, null, this);
            obj.set_taborder("86");
            obj.set_cssclass("btn_WF_ShuttleU");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button49", "absolute", "107", "1193", "22", "22", null, null, this);
            obj.set_taborder("87");
            obj.set_cssclass("btn_WF_ShuttleD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button70", "absolute", "83", "1350", "14", "14", null, null, this);
            obj.set_taborder("92");
            obj.set_cssclass("btn_WF_PagePreviousP");
            this.addChild(obj.name, obj);

            obj = new Button("Button71", "absolute", "297", "1350", "14", "14", null, null, this);
            obj.set_taborder("93");
            obj.set_cssclass("btn_WF_PageNextP");
            this.addChild(obj.name, obj);

            obj = new Button("Button72", "absolute", "99", "1350", "14", "14", null, null, this);
            obj.set_taborder("94");
            obj.set_cssclass("btn_WF_PagePrevious");
            this.addChild(obj.name, obj);

            obj = new Button("Button73", "absolute", "281", "1350", "14", "14", null, null, this);
            obj.set_taborder("95");
            obj.set_cssclass("btn_WF_PageNext");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "127", "1350", "14", "16", null, null, this);
            obj.set_taborder("96");
            obj.set_text("1");
            obj.set_cssclass("sta_WF_PageS");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "155", "1350", "14", "16", null, null, this);
            obj.set_taborder("98");
            obj.set_text("3");
            obj.set_cssclass("sta_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "169", "1350", "14", "16", null, null, this);
            obj.set_taborder("99");
            obj.set_text("4");
            obj.set_cssclass("sta_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Button("Button68", "absolute", "550", "1564", "21", "21", null, null, this);
            obj.set_taborder("100");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Button("Button74", "absolute", "83", "1571", "63", "12", null, null, this);
            obj.set_taborder("101");
            obj.set_cssclass("btn_WFSA_SearchOpen");
            this.addChild(obj.name, obj);

            obj = new Button("Button75", "absolute", "83", "1609", "63", "12", null, null, this);
            obj.set_taborder("102");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "183", "1350", "14", "16", null, null, this);
            obj.set_taborder("103");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "197", "1350", "14", "16", null, null, this);
            obj.set_taborder("104");
            obj.set_text("6");
            obj.set_cssclass("sta_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "211", "1350", "14", "16", null, null, this);
            obj.set_taborder("105");
            obj.set_text("7");
            obj.set_cssclass("sta_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "225", "1350", "14", "16", null, null, this);
            obj.set_taborder("106");
            obj.set_text("8");
            obj.set_cssclass("sta_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "239", "1350", "14", "16", null, null, this);
            obj.set_taborder("107");
            obj.set_text("9");
            obj.set_cssclass("sta_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "253", "1350", "14", "16", null, null, this);
            obj.set_taborder("108");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "141", "1350", "14", "16", null, null, this);
            obj.set_taborder("111");
            obj.set_text("2");
            obj.set_cssclass("sta_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "701", "945", "1", "35", null, null, this);
            obj.set_taborder("115");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "523", "41", "470", "21", null, null, this);
            obj.set_taborder("150");
            obj.set_text("- CRUD버튼은 최소2글자부터 시작하여 한 글자가 늘어날 때마다 width값이 12px씩 증가");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "504", "30", null, null, this);
            obj.set_taborder("151");
            obj.set_text("Common Button");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "503", "0", null, "30", "0", null, this);
            obj.set_taborder("152");
            obj.set_text("CRUD Button");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "83", "99", "62", "18", null, null, this);
            obj.set_taborder("153");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "157", "99", "65", "18", null, null, this);
            obj.set_taborder("154");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Button("Button50", "absolute", "791", "151", "53", "21", null, null, this);
            obj.set_taborder("155");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button51", "absolute", "889", "151", "41", "21", null, null, this);
            obj.set_taborder("156");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button52", "absolute", "932", "151", "58", "21", null, null, this);
            obj.set_taborder("157");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button53", "absolute", "846", "151", "41", "21", null, null, this);
            obj.set_taborder("158");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button54", "absolute", "385", "151", "89", "21", null, null, this);
            obj.set_taborder("159");
            obj.set_text("엑셀다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("Button55", "absolute", "330", "151", "53", "21", null, null, this);
            obj.set_taborder("160");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button56", "absolute", "275", "151", "53", "21", null, null, this);
            obj.set_taborder("161");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "27", "132", "52", "246", null, null, this);
            obj.set_taborder("163");
            obj.set_text("W : 41\r\nW : 53\r\nW : 65\r\nW : 77\r\nW : 89\r\nW : 101\r\nW : 113\r\nw : 125\r\nW : 137\r\n\r\n");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            obj.style.set_linespace("15");
            obj.style.set_align("left top");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "618", "99", "62", "18", null, null, this);
            obj.set_taborder("164");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "691", "99", "65", "18", null, null, this);
            obj.set_taborder("165");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "382", "135", "15", "17", null, null, this);
            obj.set_taborder("166");
            obj.set_text("2");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "326", "135", "15", "17", null, null, this);
            obj.set_taborder("167");
            obj.set_text("2");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", "383", "150", "2", "21", null, null, this);
            obj.set_taborder("168");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "328", "150", "2", "21", null, null, this);
            obj.set_taborder("169");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "844", "150", "2", "21", null, null, this);
            obj.set_taborder("170");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "887", "150", "2", "21", null, null, this);
            obj.set_taborder("171");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "930", "150", "2", "21", null, null, this);
            obj.set_taborder("172");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "886", "135", "15", "17", null, null, this);
            obj.set_taborder("173");
            obj.set_text("2");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "842", "135", "15", "17", null, null, this);
            obj.set_taborder("174");
            obj.set_text("2");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "927", "135", "15", "17", null, null, this);
            obj.set_taborder("175");
            obj.set_text("2");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "0", "830", null, "30", "0", null, this);
            obj.set_taborder("176");
            obj.set_text("Search Button");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "83", "873", "62", "18", null, null, this);
            obj.set_taborder("177");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "143", "873", "65", "18", null, null, this);
            obj.set_taborder("178");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "210", "904", "197", "18", null, null, this);
            obj.set_taborder("179");
            obj.set_text("class : <b v='true'>btn_WFSA_Searchbtn</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "751", "904", "62", "18", null, null, this);
            obj.set_taborder("180");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "751", "930", "65", "18", null, null, this);
            obj.set_taborder("181");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "631", "978", "183", "18", null, null, this);
            obj.set_taborder("182");
            obj.set_text("class : <b v='true'>btn_WF_Searchbtn</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "0", "1025", "504", "30", null, null, this);
            obj.set_taborder("183");
            obj.set_text("Shuttle Button");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "503", "1025", null, "30", "0", null, this);
            obj.set_taborder("184");
            obj.set_text("POPUP Button");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "145", "1195", "197", "18", null, null, this);
            obj.set_taborder("185");
            obj.set_text("class : <b v='true'>btn_WF_ShuttleD</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "145", "1168", "197", "18", null, null, this);
            obj.set_taborder("186");
            obj.set_text("class : <b v='true'>btn_WF_ShuttleU</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "145", "1141", "197", "18", null, null, this);
            obj.set_taborder("187");
            obj.set_text("class : <b v='true'>btn_WF_ShuttleR</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "145", "1114", "197", "18", null, null, this);
            obj.set_taborder("188");
            obj.set_text("class : <b v='true'>btn_WF_ShuttleL</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "812", "1117", "153", "18", null, null, this);
            obj.set_taborder("189");
            obj.set_text("class : <b v='true'>btn_WF_Popup</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "0", "1272", null, "30", "0", null, this);
            obj.set_taborder("190");
            obj.set_text("Page");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "0", "1500", "504", "30", null, null, this);
            obj.set_taborder("191");
            obj.set_text("SearchBox(div) Fold/Unfold Button");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "503", "1500", null, "30", "0", null, this);
            obj.set_taborder("192");
            obj.set_text("Favorite Button");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "591", "1566", "197", "18", null, null, this);
            obj.set_taborder("193");
            obj.set_text("class : <b v='true'>btn_WF_Bookmark</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "163", "1566", "217", "18", null, null, this);
            obj.set_taborder("194");
            obj.set_text("class : <b v='true'>btn_WFSA_SearchOpen</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "163", "1604", "217", "18", null, null, this);
            obj.set_taborder("195");
            obj.set_text("class : <b v='true'>btn_WFSA_SearchClose</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "523", "70", "183", "18", null, null, this);
            obj.set_taborder("196");
            obj.set_text("class : <b v='true'>btn_WF_CRUD</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "106", "931", "23", "17", null, null, this);
            obj.set_taborder("197");
            obj.set_text("58");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "61", "906", "16", "17", null, null, this);
            obj.set_taborder("198");
            obj.set_text("21");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "701", "879", "19", "17", null, null, this);
            obj.set_taborder("199");
            obj.set_text("21");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "728", "906", "19", "17", null, null, this);
            obj.set_taborder("200");
            obj.set_text("21");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "87", "1088", "19", "17", null, null, this);
            obj.set_taborder("201");
            obj.set_text("22");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "61", "1115", "19", "17", null, null, this);
            obj.set_taborder("202");
            obj.set_text("22");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "716", "923", "10", "1", null, null, this);
            obj.set_taborder("203");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "716", "903", "10", "1", null, null, this);
            obj.set_taborder("204");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "721", "904", "1", "20", null, null, this);
            obj.set_taborder("205");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "696", "897", "21", "1", null, null, this);
            obj.set_taborder("208");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "696", "893", "1", "10", null, null, this);
            obj.set_taborder("209");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "716", "893", "1", "10", null, null, this);
            obj.set_taborder("210");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "73", "1133", "10", "1", null, null, this);
            obj.set_taborder("213");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "73", "1112", "10", "1", null, null, this);
            obj.set_taborder("214");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "78", "1113", "1", "21", null, null, this);
            obj.set_taborder("215");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "83", "1106", "22", "1", null, null, this);
            obj.set_taborder("216");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "83", "1102", "1", "10", null, null, this);
            obj.set_taborder("217");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "104", "1102", "1", "10", null, null, this);
            obj.set_taborder("218");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "83", "928", "58", "1", null, null, this);
            obj.set_taborder("220");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "83", "924", "1", "10", null, null, this);
            obj.set_taborder("221");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "140", "924", "1", "10", null, null, this);
            obj.set_taborder("222");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", "74", "923", "10", "1", null, null, this);
            obj.set_taborder("224");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "74", "903", "10", "1", null, null, this);
            obj.set_taborder("225");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "79", "904", "1", "20", null, null, this);
            obj.set_taborder("226");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "110", "1540", "19", "17", null, null, this);
            obj.set_taborder("227");
            obj.set_text("63");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "84", "1558", "63", "1", null, null, this);
            obj.set_taborder("228");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "83", "1554", "1", "10", null, null, this);
            obj.set_taborder("229");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "146", "1554", "1", "10", null, null, this);
            obj.set_taborder("230");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "63", "1566", "19", "17", null, null, this);
            obj.set_taborder("231");
            obj.set_text("12");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "555", "1539", "19", "17", null, null, this);
            obj.set_taborder("233");
            obj.set_text("21");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "527", "1567", "19", "17", null, null, this);
            obj.set_taborder("234");
            obj.set_text("21");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "540", "1584", "10", "1", null, null, this);
            obj.set_taborder("235");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static96", "absolute", "540", "1564", "10", "1", null, null, this);
            obj.set_taborder("236");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static97", "absolute", "545", "1565", "1", "20", null, null, this);
            obj.set_taborder("237");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", "550", "1557", "21", "1", null, null, this);
            obj.set_taborder("238");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", "550", "1553", "1", "10", null, null, this);
            obj.set_taborder("239");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static100", "absolute", "570", "1553", "1", "10", null, null, this);
            obj.set_taborder("240");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button57", "absolute", "552", "1329", "14", "14", null, null, this);
            obj.set_taborder("241");
            obj.set_cssclass("btn_WF_PagePreviousP");
            this.addChild(obj.name, obj);

            obj = new Button("Button58", "absolute", "552", "1348", "14", "14", null, null, this);
            obj.set_taborder("242");
            obj.set_cssclass("btn_WF_PagePrevious");
            this.addChild(obj.name, obj);

            obj = new Button("Button59", "absolute", "552", "1367", "14", "14", null, null, this);
            obj.set_taborder("243");
            obj.set_cssclass("btn_WF_PageNext");
            this.addChild(obj.name, obj);

            obj = new Button("Button60", "absolute", "552", "1386", "14", "14", null, null, this);
            obj.set_taborder("244");
            obj.set_cssclass("btn_WF_PageNextP");
            this.addChild(obj.name, obj);

            obj = new Button("Button61", "absolute", "568", "1329", "14", "14", null, null, this);
            obj.set_taborder("245");
            obj.set_cssclass("btn_WF_PagePreviousP");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button62", "absolute", "568", "1348", "14", "14", null, null, this);
            obj.set_taborder("246");
            obj.set_cssclass("btn_WF_PagePrevious");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button63", "absolute", "568", "1367", "14", "14", null, null, this);
            obj.set_taborder("247");
            obj.set_cssclass("btn_WF_PageNext");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button64", "absolute", "568", "1386", "14", "14", null, null, this);
            obj.set_taborder("248");
            obj.set_cssclass("btn_WF_PageNextP");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static101", "absolute", "601", "1327", "217", "18", null, null, this);
            obj.set_taborder("249");
            obj.set_text("class : <b v='true'>btn_WF_PagePreviousP</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static102", "absolute", "601", "1346", "217", "18", null, null, this);
            obj.set_taborder("250");
            obj.set_text("class : <b v='true'>btn_WF_PagePrevious</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "601", "1365", "217", "18", null, null, this);
            obj.set_taborder("251");
            obj.set_text("class : <b v='true'>btn_WF_PageNext</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "601", "1384", "217", "18", null, null, this);
            obj.set_taborder("252");
            obj.set_text("class : <b v='true'>btn_WF_PageNextP</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "568", "1441", "14", "16", null, null, this);
            obj.set_taborder("253");
            obj.set_text("2");
            obj.set_cssclass("sta_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "568", "1462", "14", "16", null, null, this);
            obj.set_taborder("254");
            obj.set_text("2");
            obj.set_cssclass("sta_WF_PageS");
            this.addChild(obj.name, obj);

            obj = new Static("Static103", "absolute", "601", "1440", "217", "18", null, null, this);
            obj.set_taborder("255");
            obj.set_text("class : <b v='true'>sta_WF_Page</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static104", "absolute", "601", "1461", "217", "18", null, null, this);
            obj.set_taborder("256");
            obj.set_text("class : <b v='true'>sta_WF_PageS</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "59", "1349", "19", "17", null, null, this);
            obj.set_taborder("257");
            obj.set_text("14");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "73", "1363", "10", "1", null, null, this);
            obj.set_taborder("258");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "73", "1350", "10", "1", null, null, this);
            obj.set_taborder("259");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "78", "1350", "1", "14", null, null, this);
            obj.set_taborder("260");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "83", "1325", "19", "17", null, null, this);
            obj.set_taborder("261");
            obj.set_text("14");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "83", "1344", "14", "1", null, null, this);
            obj.set_taborder("262");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "83", "1340", "1", "10", null, null, this);
            obj.set_taborder("263");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "96", "1340", "1", "10", null, null, this);
            obj.set_taborder("264");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button65", "absolute", "618", "1112", "54", "29", null, null, this);
            obj.set_taborder("265");
            obj.set_text("일이");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button39", "absolute", "687", "1146", "67", "29", null, null, this);
            obj.set_taborder("266");
            obj.set_text("일이삼");
            obj.set_cssclass("btn_WF_Popup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button66", "absolute", "618", "1146", "67", "29", null, null, this);
            obj.set_taborder("267");
            obj.set_text("일이삼");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button76", "absolute", "700", "1180", "80", "29", null, null, this);
            obj.set_taborder("268");
            obj.set_text("일이삼사");
            obj.set_cssclass("btn_WF_Popup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button77", "absolute", "618", "1180", "80", "29", null, null, this);
            obj.set_taborder("269");
            obj.set_text("일이삼사");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button78", "absolute", "713", "1214", "93", "29", null, null, this);
            obj.set_taborder("270");
            obj.set_text("일이삼사오");
            obj.set_cssclass("btn_WF_Popup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button79", "absolute", "618", "1214", "93", "29", null, null, this);
            obj.set_taborder("271");
            obj.set_text("일이삼사오");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static105", "absolute", "553", "1122", "52", "134", null, null, this);
            obj.set_taborder("272");
            obj.set_text("W : 54\r\nW : 67\r\nW : 80\r\nW : 93");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            obj.style.set_linespace("23");
            obj.style.set_align("left top");
            this.addChild(obj.name, obj);

            obj = new Static("Static106", "absolute", "925", "1214", "2", "31", null, null, this);
            obj.set_taborder("273");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "922", "1198", "15", "17", null, null, this);
            obj.set_taborder("274");
            obj.set_text("2");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", "568", "1441", "14", "16", null, null, this);
            obj.set_taborder("275");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);

            obj = new Static("Static109", "absolute", "544", "1441", "19", "17", null, null, this);
            obj.set_taborder("277");
            obj.set_text("16");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static110", "absolute", "558", "1455", "10", "1", null, null, this);
            obj.set_taborder("278");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static111", "absolute", "558", "1441", "10", "1", null, null, this);
            obj.set_taborder("279");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static112", "absolute", "563", "1442", "1", "14", null, null, this);
            obj.set_taborder("280");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static113", "absolute", "568", "1418", "19", "17", null, null, this);
            obj.set_taborder("281");
            obj.set_text("14");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static114", "absolute", "568", "1437", "14", "1", null, null, this);
            obj.set_taborder("282");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "568", "1433", "1", "10", null, null, this);
            obj.set_taborder("283");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static116", "absolute", "581", "1433", "1", "10", null, null, this);
            obj.set_taborder("284");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static117", "absolute", "503", "1025", "1", "248", null, null, this);
            obj.set_taborder("285");
            obj.set_cssclass("sta_GID_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static118", "absolute", "503", "0", "1", "390", null, null, this);
            obj.set_taborder("286");
            obj.set_cssclass("sta_GID_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static119", "absolute", "503", "1500", "1", "191", null, null, this);
            obj.set_taborder("287");
            obj.set_cssclass("sta_GID_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static120", "absolute", "523", "1064", "470", "21", null, null, this);
            obj.set_taborder("288");
            obj.set_text("- 최소 2글자부터 시작하여 한 글자가 늘어날 때마다 버튼 Width가 13px씩 증가");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Button("Button81", "absolute", "719", "535", "53", "21", null, null, this);
            obj.set_taborder("291");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Group");
            this.addChild(obj.name, obj);

            obj = new Button("Button82", "absolute", "83", "564", "53", "21", null, null, this);
            obj.set_taborder("292");
            obj.set_text("일이");
            obj.set_cssclass("btn_WF_Group");
            this.addChild(obj.name, obj);

            obj = new Button("Button83", "absolute", "83", "590", "65", "21", null, null, this);
            obj.set_taborder("293");
            obj.set_text("일이삼");
            obj.set_cssclass("btn_WF_Group");
            this.addChild(obj.name, obj);

            obj = new Button("Button84", "absolute", "83", "616", "77", "21", null, null, this);
            obj.set_taborder("294");
            obj.set_text("일이삼사");
            obj.set_cssclass("btn_WF_Group");
            this.addChild(obj.name, obj);

            obj = new Button("Button85", "absolute", "83", "642", "89", "21", null, null, this);
            obj.set_taborder("295");
            obj.set_text("일이삼사오");
            obj.set_cssclass("btn_WF_Group");
            this.addChild(obj.name, obj);

            obj = new Button("Button86", "absolute", "83", "668", "101", "21", null, null, this);
            obj.set_taborder("296");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("btn_WF_Group");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "719", "611", "111", "91", null, null, this);
            obj.set_taborder("297");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new ListBox("ListBox02", "absolute", "0", "0", "110", "87", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var ListBox02_innerdataset = new Dataset("ListBox02_innerdataset", this.Div00.ListBox02);
            ListBox02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">엑셀버튼명1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">엑셀버튼명2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">엑셀버튼명3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">엑셀버튼명4</Col></Row></Rows>");
            obj.set_innerdataset(ListBox02_innerdataset);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Static("Static122", "absolute", "0", "389", null, "30", "0", null, this);
            obj.set_taborder("298");
            obj.set_text("Group Button");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static123", "absolute", "27", "568", "52", "232", null, null, this);
            obj.set_taborder("299");
            obj.set_text("W : 53\r\nW : 65\r\nW : 77\r\nW : 89\r\nW : 101\r\nW : 113\r\nw : 125\r\nW : 137\r\nW : 149\r\n\r\n");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            obj.style.set_linespace("15");
            obj.style.set_align("left top");
            this.addChild(obj.name, obj);

            obj = new Button("Button87", "absolute", "83", "694", "113", "21", null, null, this);
            obj.set_taborder("300");
            obj.set_text("일이삼사오육칠");
            obj.set_cssclass("btn_WF_Group");
            this.addChild(obj.name, obj);

            obj = new Button("Button88", "absolute", "83", "720", "125", "21", null, null, this);
            obj.set_taborder("301");
            obj.set_text("일이삼사오육칠팔");
            obj.set_cssclass("btn_WF_Group");
            this.addChild(obj.name, obj);

            obj = new Button("Button89", "absolute", "83", "746", "137", "21", null, null, this);
            obj.set_taborder("302");
            obj.set_text("일이삼사오육칠팔구");
            obj.set_cssclass("btn_WF_Group");
            this.addChild(obj.name, obj);

            obj = new Static("Static124", "absolute", "20", "434", "470", "50", null, null, this);
            obj.set_taborder("303");
            obj.set_text("- 그룹버튼은 최소2글자부터 시작하여 한 글자가 늘어날 때마다 width값이 12px씩 증가\r\n- 엑셀버튼 여러개 사용 시, 콤보형태 디자인의 그룹버튼\r\n- 그룹버튼 클릭 시, 리스트박스로 보여짐");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Button("Button90", "absolute", "83", "772", "149", "21", null, null, this);
            obj.set_taborder("304");
            obj.set_text("일이삼사오육칠팔구십");
            obj.set_cssclass("btn_WF_Group");
            this.addChild(obj.name, obj);

            obj = new Button("Button91", "absolute", "664", "535", "53", "21", null, null, this);
            obj.set_taborder("305");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button92", "absolute", "774", "535", "41", "21", null, null, this);
            obj.set_taborder("306");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button93", "absolute", "817", "535", "58", "21", null, null, this);
            obj.set_taborder("307");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static125", "absolute", "717", "534", "2", "21", null, null, this);
            obj.set_taborder("309");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static126", "absolute", "772", "534", "2", "21", null, null, this);
            obj.set_taborder("310");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static127", "absolute", "815", "534", "2", "21", null, null, this);
            obj.set_taborder("311");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static128", "absolute", "771", "519", "15", "17", null, null, this);
            obj.set_taborder("312");
            obj.set_text("2");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static129", "absolute", "715", "519", "15", "17", null, null, this);
            obj.set_taborder("313");
            obj.set_text("2");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static130", "absolute", "812", "519", "15", "17", null, null, this);
            obj.set_taborder("314");
            obj.set_text("2");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button94", "absolute", "719", "589", "53", "21", null, null, this);
            obj.set_taborder("315");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Group");
            this.addChild(obj.name, obj);

            obj = new Button("Button99", "absolute", "553", "1587", "15", "21", null, null, this);
            obj.set_taborder("320");
            obj.set_cssclass("btn_WF_BookmarkS");
            this.addChild(obj.name, obj);

            obj = new Static("Static131", "absolute", "591", "1589", "197", "18", null, null, this);
            obj.set_taborder("321");
            obj.set_text("class : <b v='true'>btn_WF_BookmarkS</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static132", "absolute", "772", "1588", "101", "21", null, null, this);
            obj.set_taborder("322");
            obj.set_text("선택된 스타일");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Button("Button95", "absolute", "138", "564", "53", "21", null, null, this);
            obj.set_taborder("323");
            obj.set_text("일이");
            obj.set_cssclass("btn_WF_Group");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button96", "absolute", "150", "590", "65", "21", null, null, this);
            obj.set_taborder("324");
            obj.set_text("일이삼");
            obj.set_cssclass("btn_WF_Group");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button97", "absolute", "162", "616", "77", "21", null, null, this);
            obj.set_taborder("325");
            obj.set_text("일이삼사");
            obj.set_cssclass("btn_WF_Group");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button98", "absolute", "174", "642", "89", "21", null, null, this);
            obj.set_taborder("326");
            obj.set_text("일이삼사오");
            obj.set_cssclass("btn_WF_Group");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button100", "absolute", "186", "668", "101", "21", null, null, this);
            obj.set_taborder("327");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("btn_WF_Group");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button101", "absolute", "198", "694", "113", "21", null, null, this);
            obj.set_taborder("328");
            obj.set_text("일이삼사오육칠");
            obj.set_cssclass("btn_WF_Group");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button102", "absolute", "210", "720", "125", "21", null, null, this);
            obj.set_taborder("329");
            obj.set_text("일이삼사오육칠팔");
            obj.set_cssclass("btn_WF_Group");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button103", "absolute", "222", "746", "137", "21", null, null, this);
            obj.set_taborder("330");
            obj.set_text("일이삼사오육칠팔구");
            obj.set_cssclass("btn_WF_Group");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button104", "absolute", "234", "772", "149", "21", null, null, this);
            obj.set_taborder("331");
            obj.set_text("일이삼사오육칠팔구십");
            obj.set_cssclass("btn_WF_Group");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static133", "absolute", "20", "494", "183", "18", null, null, this);
            obj.set_taborder("332");
            obj.set_text("class : <b v='true'>btn_WF_Group</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static134", "absolute", "83", "536", "62", "18", null, null, this);
            obj.set_taborder("333");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static135", "absolute", "157", "536", "65", "18", null, null, this);
            obj.set_taborder("334");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static121", "absolute", "571", "1626", "240", "21", null, null, this);
            obj.set_taborder("335");
            obj.set_text("결품내역 조회");
            obj.set_cssclass("sta_WF_Location");
            this.addChild(obj.name, obj);

            obj = new Button("Button80", "absolute", "553", "1626", "15", "21", null, null, this);
            obj.set_taborder("336");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static136", "absolute", "0", "1675", null, "30", "0", null, this);
            obj.set_taborder("337");
            obj.set_text("Grid Row Size expand/reduce Button");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Button("Button105", "absolute", "83", "1776", "22", "21", null, null, this);
            obj.set_taborder("338");
            obj.set_cssclass("btn_WF_Grdreduce");
            this.addChild(obj.name, obj);

            obj = new Button("Button106", "absolute", "83", "1750", "22", "21", null, null, this);
            obj.set_taborder("339");
            obj.set_cssclass("btn_WF_Grdexpand");
            this.addChild(obj.name, obj);

            obj = new Button("Button107", "absolute", "107", "1776", "22", "21", null, null, this);
            obj.set_taborder("340");
            obj.set_cssclass("btn_WF_Grdreduce");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button108", "absolute", "107", "1750", "22", "21", null, null, this);
            obj.set_taborder("341");
            obj.set_cssclass("btn_WF_Grdexpand");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static137", "absolute", "145", "1751", "197", "18", null, null, this);
            obj.set_taborder("342");
            obj.set_text("class : <b v='true'>btn_WF_Grdexpand</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static138", "absolute", "145", "1777", "197", "18", null, null, this);
            obj.set_taborder("343");
            obj.set_text("class : <b v='true'>btn_WF_Grdreduce</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static139", "absolute", "59", "1753", "19", "17", null, null, this);
            obj.set_taborder("345");
            obj.set_text("21");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static140", "absolute", "72", "1770", "10", "1", null, null, this);
            obj.set_taborder("346");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static141", "absolute", "72", "1750", "10", "1", null, null, this);
            obj.set_taborder("347");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static142", "absolute", "77", "1751", "1", "20", null, null, this);
            obj.set_taborder("348");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static143", "absolute", "83", "1743", "21", "1", null, null, this);
            obj.set_taborder("349");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static144", "absolute", "83", "1739", "1", "10", null, null, this);
            obj.set_taborder("350");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static145", "absolute", "104", "1739", "1", "10", null, null, this);
            obj.set_taborder("351");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static146", "absolute", "88", "1725", "19", "17", null, null, this);
            obj.set_taborder("352");
            obj.set_text("22");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 111, 91, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("297");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1008, 1832, this,
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
        this.registerScript("Guide_03.xfdl", function() {
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
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button43.addEventHandler("onclick", this.Button43_onclick, this);

        };

        this.loadIncludeScript("Guide_03.xfdl");

       
    };
}
)();
