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
                this.set_classname("guide02_new");
                this.set_titletext("Static/Edit/MaskEdit/Combo/Spin/TextArea/ListBox");
                this._setFormPosition(0,0,1008,1529);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("combo", this);
            obj.set_firefirstcount("0");
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
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lv\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lv\">0</Col><Col id=\"data\">농협유통eSCM</Col></Row><Row><Col id=\"lv\">1</Col><Col id=\"data\">농협유통eSCM</Col></Row><Row><Col id=\"lv\">2</Col><Col id=\"data\">농협유통eSCM</Col></Row><Row><Col id=\"lv\">3</Col><Col id=\"data\">농협유통eSCM</Col></Row><Row><Col id=\"lv\">4</Col><Col id=\"data\">농협유통eSCM</Col></Row><Row><Col id=\"lv\">5</Col><Col id=\"data\">.</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ListBox("ListBox01", "absolute", "774", "878", "204", "166", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("226");
            obj.set_innerdataset("@ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_enable("false");

            obj = new ListBox("ListBox00", "absolute", "532", "878", "204", "166", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("225");
            obj.set_innerdataset("@ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");

            obj = new MaskEdit("MaskEdit01", "absolute", "580", "529", "247", "54", null, null, this);
            obj.set_taborder("215");
            obj.set_value("100000");
            obj.set_mask("###,###");
            obj.set_cssclass("msk_WF_Basic");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "30", "67", "168", "54", null, null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("농협유통eSCM");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "230", "67", "168", "54", null, null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("농협유통eSCM");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "72", "201", "210", "54", null, null, this);
            obj.set_taborder("7");
            obj.set_value("농협유통eSCM");
            obj.set_tooltiptext("edit");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "72", "260", "210", "54", null, null, this);
            obj.set_taborder("8");
            obj.set_value("농협유통eSCM");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "30", "41", "61", "18", null, null, this);
            obj.getSetter("taborder").set("58");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "230", "41", "61", "18", null, null, this);
            obj.getSetter("taborder").set("59");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "0", "0", "1008", "30", null, null, this);
            obj.getSetter("taborder").set("102");
            obj.set_cssclass("sta_GID_Title");
            obj.set_text("Static");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "580", "201", "210", "54", null, null, this);
            obj.set_taborder("16");
            obj.set_value("100000");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "580", "260", "210", "54", null, null, this);
            obj.set_taborder("15");
            obj.set_value("100000");
            obj.set_mask("###,###");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01", "absolute", "72", "588", "238", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("92");
            obj.set_displaynulltext("농협유통eSCM");
            obj.set_innerdataset("@combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_index("-1");
            obj.set_displayrowcount("5");
            obj.set_enable("false");

            obj = new Combo("Combo00", "absolute", "72", "529", "238", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("@combo");
            obj.set_displaynulltext("농협유통eSCM");

            obj = new TextArea("TextArea00", "absolute", "2.98%", "878", "204", "166", null, null, this);
            obj.set_taborder("140");
            obj.getSetter("mask").set("###,###");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02", "absolute", "26.88%", "878", "204", "166", null, null, this);
            obj.set_taborder("141");
            obj.set_value("가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사");
            obj.set_enable("false");
            obj.getSetter("mask").set("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "151", "504", "30", null, null, this);
            obj.getSetter("taborder").set("144");
            obj.set_text("Edit");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "503", "151", "505", "30", null, null, this);
            obj.getSetter("taborder").set("145");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "1.19%", "219", "61", "18", null, null, this);
            obj.getSetter("taborder").set("146");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "1.19%", "278", "61", "18", null, null, this);
            obj.getSetter("taborder").set("147");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "503", "479", "505", "30", null, null, this);
            obj.getSetter("taborder").set("156");
            obj.set_text("Spin");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "479", "504", "30", null, null, this);
            obj.getSetter("taborder").set("157");
            obj.set_text("Combo");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "518", "219", "61", "18", null, null, this);
            obj.getSetter("taborder").set("158");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "518", "278", "61", "18", null, null, this);
            obj.getSetter("taborder").set("159");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "1.19%", "547", "61", "18", null, null, this);
            obj.getSetter("taborder").set("163");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "1.19%", "606", "61", "18", null, null, this);
            obj.getSetter("taborder").set("164");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "518", "547", "61", "18", null, null, this);
            obj.getSetter("taborder").set("171");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "518", "606", "61", "18", null, null, this);
            obj.getSetter("taborder").set("172");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "0", "797", "504", "30", null, null, this);
            obj.getSetter("taborder").set("176");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "30", "852", "61", "18", null, null, this);
            obj.getSetter("taborder").set("180");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "271", "852", "65", "18", null, null, this);
            obj.getSetter("taborder").set("181");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "503", "176", "1", "1354", null, null, this);
            obj.getSetter("taborder").set("211");
            obj.set_cssclass("sta_GID_line");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "580", "529", "46", "54", null, null, this);
            obj.set_taborder("214");
            obj.set_cssclass("btn_WF_SpinPrev");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "580", "588", "247", "54", null, null, this);
            obj.set_taborder("216");
            obj.set_value("100000");
            obj.set_mask("###,###");
            obj.set_enable("false");
            obj.set_cssclass("msk_WF_Basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "781", "529", "46", "54", null, null, this);
            obj.set_taborder("217");
            obj.set_cssclass("btn_WF_SpinNext");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "580", "588", "46", "54", null, null, this);
            obj.set_taborder("218");
            obj.set_cssclass("btn_WF_SpinPrev");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "781", "588", "46", "54", null, null, this);
            obj.set_taborder("219");
            obj.set_cssclass("btn_WF_SpinNext");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "503", "797", "505", "30", null, null, this);
            obj.getSetter("taborder").set("220");
            obj.set_text("ListBox");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "532", "852", "61", "18", null, null, this);
            obj.getSetter("taborder").set("223");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "774", "852", "65", "18", null, null, this);
            obj.getSetter("taborder").set("224");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "30", "1402", "192", "54", null, null, this);
            obj.set_taborder("227");
            obj.set_text("농협유통VAN");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("tklhytyty");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01", "absolute", "250", "1402", "192", "54", null, null, this);
            obj.set_taborder("228");
            obj.set_text("농협유통VAN");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02", "absolute", "30", "1440", "192", "54", null, null, this);
            obj.set_taborder("229");
            obj.set_text("농협유통VAN");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03", "absolute", "250", "1440", "192", "54", null, null, this);
            obj.set_taborder("230");
            obj.set_text("농협유통VAN");
            obj.set_value("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "521", "1402", "215", "54", null, null, this);
            this.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("231");
            obj.set_index("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");

            obj = new Radio("Radio01", "absolute", "774", "1402", "215", "54", null, null, this);
            this.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("232");
            obj.set_index("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_enable("false");

            obj = new Static("Static09", "absolute", "503", "1316", "505", "30", null, null, this);
            obj.getSetter("taborder").set("233");
            obj.set_text("Radio");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "0", "1316", "504", "30", null, null, this);
            obj.getSetter("taborder").set("234");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "30", "1373", "95", "18", null, null, this);
            obj.getSetter("taborder").set("235");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "250", "1373", "98", "18", null, null, this);
            obj.getSetter("taborder").set("236");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "541", "1373", "95", "18", null, null, this);
            obj.getSetter("taborder").set("237");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "774", "1373", "98", "18", null, null, this);
            obj.getSetter("taborder").set("238");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "72", "319", "210", "54", null, null, this);
            obj.set_taborder("239");
            obj.set_value("농협유통eSCM");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_tooltiptext("edit");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "72", "378", "210", "54", null, null, this);
            obj.set_taborder("240");
            obj.set_value("농협유통eSCM");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tooltiptext("edit");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "580", "319", "210", "54", null, null, this);
            obj.set_taborder("241");
            obj.set_value("100000");
            obj.set_mask("###,###");
            obj.set_cssclass("msk_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05", "absolute", "580", "378", "210", "54", null, null, this);
            obj.set_taborder("242");
            obj.set_value("100000");
            obj.set_mask("###,###");
            obj.set_cssclass("msk_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02", "absolute", "72", "647", "238", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("243");
            obj.set_displaynulltext("농협유통eSCM");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_displayrowcount("5");
            obj.set_cssclass("cmb_WF_Essential");

            obj = new Combo("Combo03", "absolute", "72", "706", "238", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("244");
            obj.set_displaynulltext("농협유통eSCM");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_displayrowcount("5");
            obj.set_cssclass("cmb_WF_Readonly");

            obj = new MaskEdit("MaskEdit06", "absolute", "580", "647", "247", "54", null, null, this);
            obj.set_taborder("245");
            obj.set_value("100000");
            obj.set_mask("###,###");
            obj.set_cssclass("spn_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "580", "647", "46", "54", null, null, this);
            obj.set_taborder("246");
            obj.set_cssclass("btn_WF_SpinPrevessential");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "781", "647", "46", "54", null, null, this);
            obj.set_taborder("247");
            obj.set_cssclass("btn_WF_WF_SpinNextessential");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07", "absolute", "580", "706", "247", "54", null, null, this);
            obj.set_taborder("248");
            obj.set_value("100000");
            obj.set_mask("###,###");
            obj.set_cssclass("spn_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "580", "706", "46", "54", null, null, this);
            obj.set_taborder("249");
            obj.set_cssclass("btn_WF_SpinPrev");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "781", "706", "46", "54", null, null, this);
            obj.set_taborder("250");
            obj.set_cssclass("btn_WF_SpinNext");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "30", "1106", "204", "166", null, null, this);
            obj.set_taborder("251");
            obj.set_value("가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사");
            obj.set_cssclass("txt_WF_Essential");
            obj.getSetter("mask").set("###,###");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea04", "absolute", "271", "1106", "204", "166", null, null, this);
            obj.set_taborder("252");
            obj.set_value("가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사");
            obj.set_cssclass("txt_WF_Readonly");
            obj.getSetter("mask").set("###,###");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox02", "absolute", "532", "1106", "204", "166", null, null, this);
            this.addChild(obj.name, obj);
            var ListBox02_innerdataset = new Dataset("ListBox02_innerdataset", this.ListBox02);
            ListBox02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\"/></Row></Rows>");
            obj.set_innerdataset(ListBox02_innerdataset);
            obj.set_taborder("253");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("lst_WF_Essential");

            obj = new ListBox("ListBox03", "absolute", "774", "1106", "204", "166", null, null, this);
            this.addChild(obj.name, obj);
            var ListBox03_innerdataset = new Dataset("ListBox03_innerdataset", this.ListBox03);
            ListBox03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\"/></Row></Rows>");
            obj.set_innerdataset(ListBox03_innerdataset);
            obj.set_taborder("254");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("lst_WF_Readonly");

            obj = new Static("Static19", "absolute", "12", "396", "61", "18", null, null, this);
            obj.getSetter("taborder").set("255");
            obj.set_text("읽기전용");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "12", "337", "61", "18", null, null, this);
            obj.getSetter("taborder").set("256");
            obj.set_text("필수");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "298", "337", "173", "18", null, null, this);
            obj.getSetter("taborder").set("258");
            obj.set_text("class : <b v='true'>edt_WF_Essential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "321", "665", "173", "18", null, null, this);
            obj.getSetter("taborder").set("259");
            obj.set_text("class : <b v='true'>cmb_WF_Essential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "806", "337", "173", "18", null, null, this);
            obj.getSetter("taborder").set("260");
            obj.set_text("class : <b v='true'>msk_WF_Essential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "298", "396", "173", "18", null, null, this);
            obj.getSetter("taborder").set("261");
            obj.set_text("class : <b v='true'>edt_WF_Readonly</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "806", "396", "173", "18", null, null, this);
            obj.getSetter("taborder").set("262");
            obj.set_text("class : <b v='true'>msk_WF_Readonly</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "321", "724", "173", "18", null, null, this);
            obj.getSetter("taborder").set("263");
            obj.set_text("class : <b v='true'>cmb_WF_Readonly</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "838", "665", "173", "18", null, null, this);
            obj.getSetter("taborder").set("264");
            obj.set_text("class : <b v='true'>spn_WF_Essential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "838", "724", "173", "18", null, null, this);
            obj.getSetter("taborder").set("265");
            obj.set_text("class : <b v='true'>spn_WF_Readonly</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "12", "724", "61", "18", null, null, this);
            obj.getSetter("taborder").set("266");
            obj.set_text("읽기전용");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "12", "665", "61", "18", null, null, this);
            obj.getSetter("taborder").set("267");
            obj.set_text("필수");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "518", "396", "61", "18", null, null, this);
            obj.getSetter("taborder").set("268");
            obj.set_text("읽기전용");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "518", "337", "61", "18", null, null, this);
            obj.getSetter("taborder").set("269");
            obj.set_text("필수");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "518", "724", "61", "18", null, null, this);
            obj.getSetter("taborder").set("270");
            obj.set_text("읽기전용");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "518", "665", "61", "18", null, null, this);
            obj.getSetter("taborder").set("271");
            obj.set_text("필수");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "30", "1077", "61", "18", null, null, this);
            obj.getSetter("taborder").set("272");
            obj.set_text("필수");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "271", "1077", "61", "18", null, null, this);
            obj.getSetter("taborder").set("273");
            obj.set_text("읽기전용");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "532", "1077", "61", "18", null, null, this);
            obj.getSetter("taborder").set("274");
            obj.set_text("필수");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "774", "1077", "61", "18", null, null, this);
            obj.getSetter("taborder").set("275");
            obj.set_text("읽기전용");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "72", "1077", "173", "18", null, null, this);
            obj.getSetter("taborder").set("276");
            obj.set_text("class : <b v='true'>txt_WF_Essential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "331", "1077", "173", "18", null, null, this);
            obj.getSetter("taborder").set("277");
            obj.set_text("class : <b v='true'>txt_WF_Readonly</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "573", "1077", "173", "18", null, null, this);
            obj.getSetter("taborder").set("278");
            obj.set_text("class : <b v='true'>lst_WF_Essential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "835", "1077", "173", "18", null, null, this);
            obj.getSetter("taborder").set("279");
            obj.set_text("class : <b v='true'>lst_WF_Readonly</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1008, 1529, this,
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
            this.Radio00.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Radio01.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.ListBox02.addEventHandler("onitemclick", this.ListBox00_onitemclick, this);
            this.ListBox03.addEventHandler("onitemclick", this.ListBox00_onitemclick, this);

        };

        this.loadIncludeScript("M_Guide_01.xfdl");

       
    };
}
)();
