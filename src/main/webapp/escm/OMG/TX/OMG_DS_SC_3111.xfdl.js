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
                this.set_name("OMG_DS_SC_3111");
                this.set_classname("pattern_01");
                this.set_titletext("매출세금계산서상세");
                this.set_enable("true");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_combo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_taxDetail", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tax", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo2", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo3", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static13", "absolute", "310", "50", "95", "10", null, null, this);
            obj.getSetter("taborder").set("31");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0.12%", "50", null, "41", "98.01%", null, this);
            obj.getSetter("taborder").set("115");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "17", "505", "134", "29", null, null, this);
            obj.getSetter("taborder").set("130");
            obj.set_text("합계금액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "477", "505", "132", "29", null, null, this);
            obj.getSetter("taborder").set("131");
            obj.set_text("외상미수금");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "150", "505", "110", "29", null, null, this);
            obj.getSetter("taborder").set("132");
            obj.set_text("현금");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "259", "505", "110", "29", null, null, this);
            obj.getSetter("taborder").set("133");
            obj.set_text("수표");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "368", "505", "110", "29", null, null, this);
            obj.getSetter("taborder").set("134");
            obj.set_text("어음");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "608", "505", null, "57", "17", null, this);
            obj.getSetter("taborder").set("140");
            obj.set_text("위 금액을          함       ");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "376", "36", "737", "20", null, null, this);
            obj.getSetter("taborder").set("141");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "0", "6", "17", "479", null, null, this);
            obj.getSetter("taborder").set("143");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "17", "344", null, "162", "17", null, this);
            obj.set_taborder("178");
            obj.set_binddataset("ds_taxDetail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"158\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"월\"/><Cell col=\"1\" text=\"일\"/><Cell col=\"2\" text=\"품목\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"단가\"/><Cell col=\"6\" text=\"합계\"/><Cell col=\"7\" text=\"공급가액\"/><Cell col=\"8\" text=\"세액\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:TR_DT_MON\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:TR_DT_DAY\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:LATCNM\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:STD\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:QT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:UPR\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:UPR * QT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPPR\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXA\"/><Cell col=\"9\" style=\"align:left;\" text=\"bind:RMK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "786", "0", "17", "479", null, null, this);
            obj.getSetter("taborder").set("142");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_approval", "absolute", null, "15", "41", "21", "60", null, this);
            obj.set_taborder("279");
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_return", "absolute", null, "15", "41", "21", "17", null, this);
            obj.set_taborder("280");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "-16", "562", "737", "20", null, null, this);
            obj.getSetter("taborder").set("282");
            obj.set_visible("true");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancelApp", "absolute", null, "15", "65", "21", "17", null, this);
            obj.set_taborder("286");
            obj.set_text("승인취소");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "17", "56", "47.82%", "229", null, null, this);
            obj.set_taborder("288");
            obj.set_text("Div00");
            obj.style.set_border("2 solid #d11255ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "0", "23", null, null, "0", this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("공\r\n\r\n급\r\n\r\n자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#feb6b7ff");
            obj.style.set_border("1 solid #e74449ff");
            obj.style.set_color("#cc0d15ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "23", "0", "63", "57", null, null, this.Div00);
            obj.getSetter("taborder").set("1");
            obj.set_text("등록\r\n번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "255", "0", "59", "57", null, null, this.Div00);
            obj.getSetter("taborder").set("2");
            obj.set_text("종사업장\r\n번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "23", "56", "63", "29", null, null, this.Div00);
            obj.getSetter("taborder").set("3");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "255", "56", "59", "29", null, null, this.Div00);
            obj.getSetter("taborder").set("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "23", "84", "63", "57", null, null, this.Div00);
            obj.getSetter("taborder").set("5");
            obj.set_text("사업장\r\n주소");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "23", "140", "63", "29", null, null, this.Div00);
            obj.getSetter("taborder").set("6");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "187", "140", "63", "29", null, null, this.Div00);
            obj.getSetter("taborder").set("7");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "23", "168", "63", "57", null, null, this.Div00);
            obj.getSetter("taborder").set("8");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "85", "56", "171", "29", null, null, this.Div00);
            obj.getSetter("taborder").set("10");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "85", "84", null, "57", "0", null, this.Div00);
            obj.getSetter("taborder").set("11");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            obj.set_wordwrap("char");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "85", "140", "103", "29", null, null, this.Div00);
            obj.getSetter("taborder").set("12");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "85", "168", null, null, "0", "0", this.Div00);
            obj.getSetter("taborder").set("13");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "249", "140", null, "29", "0", null, this.Div00);
            obj.getSetter("taborder").set("14");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "313", "56", null, "29", "0", null, this.Div00);
            obj.getSetter("taborder").set("15");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "313", "0", null, "57", "0", null, this.Div00);
            obj.getSetter("taborder").set("16");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            this.Div00.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit01", "absolute", "85", "0", "171", "57", null, null, this.Div00);
            obj.set_taborder("18");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 15 Gulim");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "857", "-18", "1", "490", null, null, this);
            obj.getSetter("taborder").set("107");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "50.06%", "56", null, "229", "17", null, this);
            obj.set_taborder("290");
            obj.set_text("Div00");
            obj.style.set_border("2 solid #0a07c6ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "0", "23", null, null, "0", this.Div02);
            obj.getSetter("taborder").set("17");
            obj.set_text("공\r\n\r\n급\r\n\r\n받\r\n\r\n는\r\n\r\n자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#c1dbecff");
            obj.style.set_border("1 solid #424d9fff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "23", "0", "63", "57", null, null, this.Div02);
            obj.getSetter("taborder").set("18");
            obj.set_text("등록\r\n번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "255", "0", "59", "57", null, null, this.Div02);
            obj.getSetter("taborder").set("19");
            obj.set_text("종사업장\r\n번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "23", "56", "63", "29", null, null, this.Div02);
            obj.getSetter("taborder").set("20");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "255", "57", "59", "29", null, null, this.Div02);
            obj.getSetter("taborder").set("21");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #e9f1ffff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "23", "84", "63", "57", null, null, this.Div02);
            obj.getSetter("taborder").set("22");
            obj.set_text("사업장\r\n주소");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "23", "140", "63", "29", null, null, this.Div02);
            obj.getSetter("taborder").set("23");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "187", "140", "63", "29", null, null, this.Div02);
            obj.getSetter("taborder").set("24");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #e9f1ffff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "23", "168", "63", "29", null, null, this.Div02);
            obj.getSetter("taborder").set("25");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "85", "56", "171", "29", null, null, this.Div02);
            obj.getSetter("taborder").set("27");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_padding("2 2 2 2");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "85", "84", null, "57", "0", null, this.Div02);
            obj.getSetter("taborder").set("28");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_padding("2 2 2 2");
            obj.set_wordwrap("char");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "85", "140", "103", "29", null, null, this.Div02);
            obj.getSetter("taborder").set("29");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_padding("2 2 2 2");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "85", "168", null, "29", "0", null, this.Div02);
            obj.getSetter("taborder").set("30");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_padding("2 2 2 2");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "249", "140", null, "29", "0", null, this.Div02);
            obj.getSetter("taborder").set("31");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_padding("2 2 2 2");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "313", "56", null, "29", "0", null, this.Div02);
            obj.getSetter("taborder").set("32");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_padding("2 2 2 2");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "313", "0", null, "57", "0", null, this.Div02);
            obj.getSetter("taborder").set("33");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_padding("2 2 2 2");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "23", null, "63", "29", null, "0", this.Div02);
            obj.getSetter("taborder").set("34");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "85", null, null, "29", "0", "0", this.Div02);
            obj.getSetter("taborder").set("35");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_padding("2 2 2 2");
            this.Div02.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit00", "absolute", "85", "0", "171", "57", null, null, this.Div02);
            obj.set_taborder("36");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 15 Gulim");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_maskchar(" ");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "17", "285", null, "59", "17", null, this);
            obj.set_taborder("291");
            obj.set_binddataset("ds_tax");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"230\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"작성일자\"/><Cell col=\"1\" text=\"공급가액\"/><Cell col=\"2\" text=\"세액\"/><Cell col=\"3\" text=\"합계금액\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:CRT_DT\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXA_TT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:RMK1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "17", "533", "134", "29", null, null, this);
            obj.set_taborder("292");
            obj.set_mask("#,###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "694", "522", "35", "24", null, null, this);
            obj.getSetter("taborder").set("293");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title01", "absolute", "17", "15", "56", "29", null, null, this);
            obj.getSetter("taborder").set("294");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("st_state", "absolute", "72", "15", "88", "29", null, null, this);
            obj.getSetter("taborder").set("295");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_SOAC_PBC_STSC", "absolute", "168", "16", "79", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("281");
            obj.set_readonly("true");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("0");
            obj.set_innerdataset("@ds_combo");
            obj.set_enable("true");
            obj.set_visible("false");

            obj = new MaskEdit("MaskEdit01", "absolute", "259", "533", "110", "29", null, null, this);
            obj.set_taborder("296");
            obj.set_mask("#,###,###");
            obj.set_value("0");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "368", "533", "110", "29", null, null, this);
            obj.set_taborder("297");
            obj.set_mask("#,###,###");
            obj.set_value("0");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "477", "533", "132", "29", null, null, this);
            obj.set_taborder("298");
            obj.set_mask("#,###,###");
            obj.set_value("0");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "150", "533", "110", "29", null, null, this);
            obj.set_taborder("299");
            obj.set_mask("#,###,###");
            obj.set_value("0");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 229, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("288");
            		p.set_text("Div00");
            		p.style.set_border("2 solid #d11255ff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 229, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("290");
            		p.set_text("Div00");
            		p.style.set_border("2 solid #0a07c6ff");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("매출세금계산서상세");
            		p.set_enable("true");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item18","cbo_SOAC_PBC_STSC","value","ds_tax","SOAC_PBC_STSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","Div00.Static01","text","ds_tax","SPLR_MTALNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","Div00.Static08","text","ds_tax","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","Div00.Static06","text","ds_tax","SPLR_REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","Div00.Static02","text","ds_tax","SPLR_ADR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","Div00.Static05","text","ds_tax","SPLR_BZC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","Div00.Static03","text","ds_tax","SPLR_BZTPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","Div00.Static04","text","ds_tax","SPLR_CHRR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div02.Static08","text","ds_tax","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div02.Static06","text","ds_tax","BUY_REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div02.Static01","text","ds_tax","BUY_MTALNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div02.Static02","text","ds_tax","BUY_ADR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div02.Static03","text","ds_tax","BUY_BZTPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div02.Static05","text","ds_tax","BUY_BZC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div02.Static04","text","ds_tax","BUY_CHRR_EMAIL1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","Div02.Static12","text","ds_tax","BUY_CHRR_EMAIL2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","MaskEdit00","value","ds_tax","TOT_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Static00","text","ds_tax","RCT_RQS_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div00.MaskEdit01","value","ds_tax","SPLR_BZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div02.MaskEdit00","value","ds_tax","BUY_BZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Static56","text","ds_tax","STL_METHC2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Static74","text","ds_tax","STL_METHC3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Static71","text","ds_tax","STL_METHC4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","MaskEdit01","value","ds_tax","STL_AM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","MaskEdit02","value","ds_tax","STL_AM3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","MaskEdit03","value","ds_tax","STL_AM4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","MaskEdit04","value","ds_tax","STL_AM1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Static66","text","ds_tax","STL_METHC1");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_3111.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_3111.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.flag = true;
        this.sqNo = "20150504122106nheba18798";
        this.state = "2";
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분
           var param = [  
         		{code:"SOAC_PBC_STSC",   dsName:"ds_combo",   selecttype:"N"},
         		{code:"RCT_RQS_DSC",   dsName:"ds_combo2",   selecttype:"N"},
         		{code:"STL_METHC",   dsName:"ds_combo3",   selecttype:"N"}
            ];
            this.gfn_setPortalCommonCode(param);   
        //
        	this.sqNo = this.getOwnerFrame().sqNo;
        	this.fn_retrieveSlTxbilDesc();
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload = function()
        {
        	trace("fn_commonAfterOnload");
        	this.cbo_RCT_RQS_DSC.set_index(0);
        	this.cbo_SOAC_PBC_STSC.set_index(0);
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_updateSoacPbcStsc = function()
        {
        	var sSvcID        = "updateSoacPbcStsc";
        	var sURL          = "svc::rest/tx/updateSoacPbcStsc";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";	
        	var sArgument     = "PBC_SQNO=" + this.sqNo + " SOAC_PBC_STSC=" + this.state;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        this.fn_retrieveSlTxbilDesc = function()
        {
        	var sSvcID        = "retrieveSlTxbilDesc";
        	var sURL          = "svc::rest/tx/retrieveSlTxbilDesc";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_taxDetail=ds_taxDetail ds_tax=ds_tax";	
        	var sArgument     = "PBC_SQNO=" + this.sqNo;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0) //에러
         	{
        		trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
         	}
         	else 
         	{
        		switch(svcID)
        		{
        			case "retrieveSlTxbilDesc":
        				trace(1);
        				if( String(this.ds_tax.getColumn(0, "SPLR_BZNO")).trim(' ').length > 10)
        				{
        					this.Div00.MaskEdit01.set_mask("######-#######");
        				}
        				if( String(this.ds_tax.getColumn(0, "BUY_BZNO")).trim(' ').length > 10 )
        				{
        					this.Div02.MaskEdit00.set_mask("######-#######");
        				}
        				if(this.ds_tax.getColumn(0, "SOAC_PBC_STSC") == "01" || this.ds_tax.getColumn(0, "SOAC_PBC_STSC") == null)
        				{
        					this.state = "02";
        					this.fn_updateSoacPbcStsc();
        					this.ds_tax.setColumn(0, "SOAC_PBC_STSC", "02");
        					
        				}
        				this.st_state.set_text(this.cbo_SOAC_PBC_STSC.text);
        				this.fn_setBtnVisible();
        				break;
        				
        			case "updateSoacPbcStsc":
        				//this.st_state.set_text(this.cbo_SOAC_PBC_STSC.text);
        				//승인되었습니다.
        				//반려되었습니다.
        				if(this.state == "03")
        				{
        					this.ds_tax.setColumn(0, "SOAC_PBC_STSC", "03");
        					this.fn_setBtnVisible(); 
        					alert("승인되었습니다.");
        				}
        				else if(this.state == "05")
        				{
        					this.ds_tax.setColumn(0, "SOAC_PBC_STSC", "05");
        					this.fn_setBtnVisible();
        					alert("반려되었습니다.");
        				}
        				else if(this.state == "04")
        				{
        					this.ds_tax.setColumn(0, "SOAC_PBC_STSC", "04");
        					this.fn_setBtnVisible();
        					alert("승인취소 되었습니다.");
        				}
        				this.st_state.set_text(this.cbo_SOAC_PBC_STSC.text);
        				break;
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_return":
        			this.state = "05";
        			this.fn_updateSoacPbcStsc();
        			break;
        		
        		case "btn_approval":
        			this.state = "03";
        			this.fn_updateSoacPbcStsc();
        			break;
        			
        		case "btn_cancelApp":
        			this.state = "04";
        			this.fn_updateSoacPbcStsc();
        			break;
        	}
        	
        }

        this.grd_oncellclick = function(obj,e)
        {
        	//this.gfn_OpenMenuId("25002002");
        	if(e.cell != 0)
        	{
        		this.fn_openBbsNotice(e.row);
        	}
        }

        this.div_search_edt_search_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.fn_getBbsList();
        	}
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_openBbsNotice = function(nRow)
        {
        	var oArg = {menuId:this.menuId, boardId:this.ds_tax.getColumn(nRow, "BLBD_ID"), documentId:this.ds_tax.getColumn(nRow, "BBRD_ID")};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("OMG_DS_SC_4111","OMG.PT::OMG_DS_SC_4111.xfdl",oArg,sOption,sPopupCallBack);	  
        }

        this.fn_openBbsWrite = function()
        {
        	var oArg = {blbdId:this.blbdId, writeType:0, documentId:null};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("OMG_DS_SC_4112","OMG.PT::OMG_DS_SC_4112.xfdl",oArg,sOption,sPopupCallBack);	
        }

        
        /************************************************************************************************
         * 페이징처리
        ************************************************************************************************/
        this.fn_search = function()
        {
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        }

        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_tax.clearData();     //Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = this.div_search.cbo_num.value; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; 	//전체건수. 화면조회후 리턴받아 사용
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);	 
        	 
        	var argumentObj = "";
        		
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	this.fn_retrieveTaxBillList();
         
        }

        this.btn_flag_onclick = function(obj,e)
        {
        	if(this.flag)//true
        	{
        		this.div_search.set_height(43);
        		this.div_grd.set_top(nexacro.toNumber(this.div_search.height) + nexacro.toNumber(this.div_search.top) - 1);
        		this.div_grd.btn_flag.set_cssclass("btn_WFSA_SearchOpen");
        		this.flag = false;
        	}
        	else//false
        	{
        		this.div_search.set_height(95);
        		this.div_grd.set_top(nexacro.toNumber(this.div_search.height) + nexacro.toNumber(this.div_search.top - 1));
        		this.div_grd.btn_flag.set_cssclass("btn_WFSA_SearchClose");
        		this.flag = true;
        	}
        }
        this.div_grd_grd_tax_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		//전체선택
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

        this.fn_setBtnVisible = function()
        {
        	if(this.ds_tax.getColumn(0, "SOAC_PBC_STSC") == "03" ) //승인 
        	{
        		this.btn_cancelApp.set_visible(true);
        		this.btn_approval.set_visible(false);
        		this.btn_return.set_visible(false);
        	}
        	else if(this.ds_tax.getColumn(0, "SOAC_PBC_STSC") == "05" 
        			|| this.ds_tax.getColumn(0, "SOAC_PBC_STSC") == "04"
        			|| this.ds_tax.getColumn(0, "SOAC_PBC_STSC") == "06" ) //승인취소.반려.발행
        	{
        		this.btn_cancelApp.set_visible(false);
        		this.btn_approval.set_visible(false);
        		this.btn_return.set_visible(false);
        	}
        	else
        	{
        		this.btn_cancelApp.set_visible(false);
        		this.btn_approval.set_visible(true);
        		this.btn_return.set_visible(true);
        	}
        }

        this.fn_STL_METHC = function()
        {	
        	var nRow;
        	var rtnVal;
        	trace("objTxt >>>>>>>>>>>>>>>> " );
        	nRow = this.ds_combo3.findRow(SIMP_C, objTxt);
        	if(	nRow < 0)
        	{
        		return "현금";
        	}
        	rtnVal = this.ds_combo3.getColumn(nRow, "SIMP_CNM");
        	return rtnVal;
        }

        
        this.cbo_SOAC_PBC_STSC_onitemchanged = function(obj,e)
        {
        	this.st_state.set_text(this.cbo_SOAC_PBC_STSC.text);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_approval.addEventHandler("onclick", this.common_onclick, this);
            this.btn_return.addEventHandler("onclick", this.common_onclick, this);
            this.btn_cancelApp.addEventHandler("onclick", this.common_onclick, this);
            this.Static05.addEventHandler("onclick", this.Static05_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_3111.xfdl");

       
    };
}
)();
