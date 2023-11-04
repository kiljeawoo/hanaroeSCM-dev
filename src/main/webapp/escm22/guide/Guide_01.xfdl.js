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
                this.set_name("guide02_new");
                this.set_titletext("Static/Edit/MaskEdit/Combo/Spin/TextArea/ListBox");
                this._setFormPosition(0,0,1008,1000);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("combo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">농협유통eSCM 01</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">농협유통eSCM 02</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">농협유통eSCM 03</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">농협유통eSCM 04</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">농협유통eSCM 05</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cmb", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lv\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lv\">0</Col><Col id=\"data\">농협유통eSCM</Col></Row><Row><Col id=\"lv\">1</Col><Col id=\"data\">농협유통eSCM</Col></Row><Row><Col id=\"lv\">2</Col><Col id=\"data\">농협유통eSCM</Col></Row><Row><Col id=\"lv\">3</Col><Col id=\"data\">농협유통eSCM</Col></Row><Row><Col id=\"lv\">4</Col><Col id=\"data\">농협유통eSCM</Col></Row><Row><Col id=\"lv\">5</Col><Col id=\"data\">.</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "30", "82", "120", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("농협유통eSCM");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "230", "82", "120", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("농협유통eSCM");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "109", "284", "151", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_value("농협유통eSCM");
            obj.set_tooltiptext("edit");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "109", "310", "151", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_value("농협유통eSCM");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "109", "336", "151", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_value("농협유통eSCM");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "109", "388", "151", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_value("농협유통eSCM");
            obj.set_cssclass("edt_WF_Error");
            obj.set_tooltiptext("edit");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "109", "362", "151", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_value("농협유통eSCM");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_tooltiptext("edit");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "273", "338", "173", "18", null, null, this);
            obj.set_taborder("29");
            obj.set_text("class : <b v='true'>edt_WF_Readonly</b>");
            obj.set_cssclass("sta_GID_txt");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "30", "56", "62", "18", null, null, this);
            obj.set_taborder("58");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "230", "56", "65", "18", null, null, this);
            obj.set_taborder("59");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03", "absolute", "484", "79", "503", "113", null, null, this);
            obj.set_taborder("71");
            obj.set_value("fs 글자의 크기(fontsize)를 지정합니다.  ex)<fs v='12'></fs>\r\nfc 글자의 색상(fontcolor)를 지정합니다.  ex)<fc v='red'></fc><fc v='#FF00FF'></fc>\r\nff 글자의 종류(fontface)를 지정합니다.  ex)<ff v='굴림'></ff>\r\nb 굵은글씨를(bold)를 지정합니다. ex)<b v='true'></b>\r\ni 이텔릭체를 (italic)를 지정합니다.  ex)<i v='true'></i>\r\nu 언더라인을(underline)를 지정합니다.  ex)<u v='true'></u>\r\ns 취소선(strike)를 지정합니다.  ex)<s v='true'></s>");
            obj.set_readonly("true");
            obj.set_linespace("3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "484", "55", "265", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_text("usedecorate =\"<b v='true'>true</b>\"");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            obj.getSetter("class").set("sta_WF_Info_Orange");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "416", "49", "1", "155", null, null, this);
            obj.set_taborder("75");
            obj.style.set_border("1 dashed #999999ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "0", "0", null, "30", "0", null, this);
            obj.set_taborder("102");
            obj.set_cssclass("sta_GID_Title");
            obj.set_text("Static");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "626", "284", "151", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_value("100000");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "626", "362", "151", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_value("100000");
            obj.set_mask("###,###");
            obj.set_cssclass("msk_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "626", "388", "151", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_value("100000");
            obj.set_mask("###,###");
            obj.set_cssclass("msk_WF_Error");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "626", "336", "151", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_value("100000");
            obj.set_mask("###,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "626", "310", "151", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_value("100000");
            obj.set_mask("###,###");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo04", "absolute", "109", "610", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("89");
            obj.set_displaynulltext("농협유통eSCM");
            obj.set_innerdataset("@combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_displayrowcount("5");
            obj.set_cssclass("cmb_WF_Error");
            obj.set_index("0");

            obj = new Combo("Combo03", "absolute", "109", "584", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("90");
            obj.set_displaynulltext("농협유통eSCM");
            obj.set_innerdataset("@combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_displayrowcount("5");
            obj.set_cssclass("cmb_WF_Essential");
            obj.set_index("0");

            obj = new Combo("Combo02", "absolute", "109", "558", "152", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("91");
            obj.set_displaynulltext("농협유통eSCM");
            obj.set_innerdataset("@combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_displayrowcount("5");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");
            obj.set_index("0");

            obj = new Combo("Combo01", "absolute", "109", "532", "152", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("92");
            obj.set_displaynulltext("농협유통eSCM");
            obj.set_innerdataset("@combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_displayrowcount("5");
            obj.set_enable("false");
            obj.set_index("-1");

            obj = new Combo("Combo00", "absolute", "109", "506", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("@combo");
            obj.set_displaynulltext("농협유통eSCM");
            obj.set_index("-1");

            obj = new Spin("Spin02", "absolute", "626", "558", "151", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_value("100");
            obj.set_cssclass("spn_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin03", "absolute", "626", "584", "151", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_value("100");
            obj.set_cssclass("spn_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00", "absolute", "626", "506", "151", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin01", "absolute", "626", "532", "151", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_value("100");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "39", "722", "151", "118", null, null, this);
            obj.set_taborder("140");
            obj.set_value("가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사");
            obj.getSetter("mask").set("###,###");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02", "absolute", "275", "722", "154", "118", null, null, this);
            obj.set_taborder("141");
            obj.set_value("가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사");
            obj.set_enable("false");
            obj.getSetter("mask").set("###,###");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "39", "870", "154", "118", null, null, this);
            obj.set_taborder("142");
            obj.set_value("가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사");
            obj.set_cssclass("txt_WF_Readonly");
            obj.getSetter("mask").set("###,###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea04", "absolute", "275", "870", "154", "118", null, null, this);
            obj.set_taborder("143");
            obj.set_value("가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사");
            obj.set_cssclass("txt_WF_Essential");
            obj.getSetter("mask").set("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "221", "504", "30", null, null, this);
            obj.set_taborder("144");
            obj.set_text("Edit");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "503", "221", null, "30", "0", null, this);
            obj.set_taborder("145");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "30", "286", "61", "18", null, null, this);
            obj.set_taborder("146");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "30", "312", "65", "18", null, null, this);
            obj.set_taborder("147");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "30", "338", "61", "18", null, null, this);
            obj.set_taborder("148");
            obj.set_text("읽기전용");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "30", "364", "61", "18", null, null, this);
            obj.set_taborder("149");
            obj.set_text("필수");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "30", "390", "61", "18", null, null, this);
            obj.set_taborder("150");
            obj.set_text("에러");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "27.08%", "364", "173", "18", null, null, this);
            obj.set_taborder("151");
            obj.set_text("class : <b v='true'>edt_WF_Essential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "27.08%", "390", "173", "18", null, null, this);
            obj.set_taborder("152");
            obj.set_text("class : <b v='true'>edt_WF_Error</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "790", "338", "173", "18", null, null, this);
            obj.set_taborder("153");
            obj.set_text("class : <b v='true'>msk_WF_Readonly</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "790", "364", "173", "18", null, null, this);
            obj.set_taborder("154");
            obj.set_text("class : <b v='true'>msk_WF_Essential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "790", "390", "173", "18", null, null, this);
            obj.set_taborder("155");
            obj.set_text("class : <b v='true'>msk_WF_Error</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "503", "440", null, "30", "0", null, this);
            obj.set_taborder("156");
            obj.set_text("Spin");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "440", "504", "30", null, null, this);
            obj.set_taborder("157");
            obj.set_text("Combo");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "539", "286", "61", "18", null, null, this);
            obj.set_taborder("158");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "539", "312", "65", "18", null, null, this);
            obj.set_taborder("159");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "539", "338", "61", "18", null, null, this);
            obj.set_taborder("160");
            obj.set_text("읽기전용");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "539", "364", "61", "18", null, null, this);
            obj.set_taborder("161");
            obj.set_text("필수");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "539", "390", "61", "18", null, null, this);
            obj.set_taborder("162");
            obj.set_text("에러");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "2.98%", "508", "61", "18", null, null, this);
            obj.set_taborder("163");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "2.98%", "534", "65", "18", null, null, this);
            obj.set_taborder("164");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "2.98%", "560", "61", "18", null, null, this);
            obj.set_taborder("165");
            obj.set_text("읽기전용");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "2.98%", "586", "61", "18", null, null, this);
            obj.set_taborder("166");
            obj.set_text("필수");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "2.98%", "612", "61", "18", null, null, this);
            obj.set_taborder("167");
            obj.set_text("에러");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "273", "559", "172", "18", null, null, this);
            obj.set_taborder("168");
            obj.set_text("class : <b v='true'>cmb_WF_Readonly</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "273", "585", "172", "18", null, null, this);
            obj.set_taborder("169");
            obj.set_text("class : <b v='true'>cmb_WF_Essential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "273", "611", "172", "18", null, null, this);
            obj.set_taborder("170");
            obj.set_text("class : <b v='true'>cmb_WF_Error</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "540", "508", "61", "18", null, null, this);
            obj.set_taborder("171");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "540", "534", "65", "18", null, null, this);
            obj.set_taborder("172");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "540", "560", "61", "18", null, null, this);
            obj.set_taborder("173");
            obj.set_text("읽기전용");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "540", "586", "61", "18", null, null, this);
            obj.set_taborder("174");
            obj.set_text("필수");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "503", "667", null, "30", "0", null, this);
            obj.set_taborder("175");
            obj.set_text("ListBox");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "0", "667", "504", "30", null, null, this);
            obj.set_taborder("176");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox02", "absolute", "548", "722", "154", "118", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("177");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");

            obj = new ListBox("ListBox00", "absolute", "777", "722", "154", "118", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("178");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_enable("false");

            obj = new ListBox("ListBox03", "absolute", "777", "870", "154", "118", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("179");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_cssclass("lst_WF_Essential");

            obj = new Static("Static64", "absolute", "39", "704", "61", "18", null, null, this);
            obj.set_taborder("180");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "276", "704", "65", "18", null, null, this);
            obj.set_taborder("181");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "39", "851", "61", "18", null, null, this);
            obj.set_taborder("182");
            obj.set_text("읽기전용");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "276", "851", "61", "18", null, null, this);
            obj.set_taborder("183");
            obj.set_text("필수");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "93", "851", "167", "18", null, null, this);
            obj.set_taborder("184");
            obj.set_text("class : <b v='true'>txt_WF_Readonly</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "311", "851", "167", "18", null, null, this);
            obj.set_taborder("185");
            obj.set_text("class : <b v='true'>txt_WF_Essential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox01", "absolute", "552", "870", "154", "118", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("186");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_cssclass("lst_WF_Readonly");
            obj.set_readonly("true");

            obj = new Static("Static70", "absolute", "791", "559", "172", "18", null, null, this);
            obj.set_taborder("187");
            obj.set_text("class : <b v='true'>spn_WF_Readonly</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "791", "585", "172", "18", null, null, this);
            obj.set_taborder("188");
            obj.set_text("class : <b v='true'>spn_WF_Essential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "548", "704", "61", "18", null, null, this);
            obj.set_taborder("189");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "777", "704", "65", "18", null, null, this);
            obj.set_taborder("190");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "553", "851", "61", "18", null, null, this);
            obj.set_taborder("191");
            obj.set_text("읽기전용");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "785", "851", "61", "18", null, null, this);
            obj.set_taborder("192");
            obj.set_text("필수");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "607", "851", "167", "18", null, null, this);
            obj.set_taborder("193");
            obj.set_text("class : <b v='true'>lst_WF_Readonly</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "820", "851", "167", "18", null, null, this);
            obj.set_taborder("194");
            obj.set_text("class : <b v='true'>lst_WF_Essential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "260", "304", "10", "1", null, null, this);
            obj.set_taborder("195");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "260", "284", "10", "1", null, null, this);
            obj.set_taborder("196");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "265", "285", "1", "20", null, null, this);
            obj.set_taborder("197");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "777", "304", "10", "1", null, null, this);
            obj.set_taborder("198");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "777", "284", "10", "1", null, null, this);
            obj.set_taborder("199");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "782", "285", "1", "20", null, null, this);
            obj.set_taborder("200");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "777", "526", "10", "1", null, null, this);
            obj.set_taborder("201");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", "777", "506", "10", "1", null, null, this);
            obj.set_taborder("202");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "782", "507", "1", "20", null, null, this);
            obj.set_taborder("203");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "260", "526", "10", "1", null, null, this);
            obj.set_taborder("204");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", "260", "506", "10", "1", null, null, this);
            obj.set_taborder("205");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "265", "507", "1", "20", null, null, this);
            obj.set_taborder("206");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "272", "286", "15", "17", null, null, this);
            obj.set_taborder("207");
            obj.set_text("21");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "788", "286", "15", "17", null, null, this);
            obj.set_taborder("208");
            obj.set_text("21");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "272", "508", "15", "17", null, null, this);
            obj.set_taborder("209");
            obj.set_text("21");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "788", "508", "15", "17", null, null, this);
            obj.set_taborder("210");
            obj.set_text("21");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "503", "221", "1", "779", null, null, this);
            obj.set_taborder("211");
            obj.set_cssclass("sta_GID_line");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1008, 1000, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("guide02_new");
            		p.set_titletext("Static/Edit/MaskEdit/Combo/Spin/TextArea/ListBox");

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
            this.TextArea03.addEventHandler("oneditclick", this.TextArea03_oneditclick, this);

        };

        this.loadIncludeScript("Guide_01.xfdl", true);

       
    };
}
)();
