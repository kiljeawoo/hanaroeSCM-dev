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
                this.set_name("OMG_DS_TX_5001");
                this.set_titletext("세금계산서상세");
                this.set_enable("true");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_combo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
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
            obj.getSetter("firenextcount").set("0");
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
            obj.getSetter("firenextcount").set("0");
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
            obj.getSetter("firenextcount").set("0");
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
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uploadresult", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"SEAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_item", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTaxForSvc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_elsg", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ELSG_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_R_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_title00", "absolute", "157", "15", "67", "29", null, null, this);
            obj.set_taborder("305");
            obj.set_text("승인번호");
            obj.style.set_padding("2 7 0 8");
            obj.style.set_font("9 Gulim");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sync", "absolute", null, "23", "65", "21", "102", null, this);
            obj.set_taborder("310");
            obj.set_text("즉시전송");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_result", "absolute", null, "23", "89", "21", "102", null, this);
            obj.set_taborder("312");
            obj.set_text("처리결과조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "17", "503", "134", "29", null, null, this);
            obj.set_taborder("130");
            obj.set_text("합계금액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "477", "503", "132", "29", null, null, this);
            obj.set_taborder("131");
            obj.set_text("외상미수금");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "150", "503", "110", "29", null, null, this);
            obj.set_taborder("132");
            obj.set_text("현금");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "259", "503", "110", "29", null, null, this);
            obj.set_taborder("133");
            obj.set_text("수표");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "368", "503", "110", "29", null, null, this);
            obj.set_taborder("134");
            obj.set_text("어음");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "608", "503", null, "57", "17", null, this);
            obj.set_taborder("140");
            obj.set_text("위 금액을          함       ");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "17", "342", null, "162", "17", null, this);
            obj.set_taborder("178");
            obj.set_binddataset("ds_taxDetail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"158\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"월\"/><Cell col=\"1\" text=\"일\"/><Cell col=\"2\" text=\"품목\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"단가\"/><Cell col=\"6\" text=\"공급가액\"/><Cell col=\"7\" text=\"세액\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:TR_DT_MON\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:TR_DT_DAY\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:LATCNM\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:STD\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:QT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:UPR\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPPR\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXA\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:RMK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "-16", "562", "737", "20", null, null, this);
            obj.set_taborder("282");
            obj.set_visible("true");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "17", "54", "47.82%", "229", null, null, this);
            obj.set_taborder("288");
            obj.set_text("Div00");
            obj.style.set_border("2 solid #d11255ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "0", "23", null, null, "0", this.Div00);
            obj.set_taborder("0");
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
            obj.set_taborder("1");
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
            obj.set_taborder("2");
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
            obj.set_taborder("3");
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
            obj.set_taborder("4");
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
            obj.set_taborder("5");
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
            obj.set_taborder("6");
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
            obj.set_taborder("7");
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
            obj.set_taborder("8");
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
            obj.set_taborder("10");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "85", "84", null, "57", "0", null, this.Div00);
            obj.set_taborder("11");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            obj.set_wordwrap("char");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "85", "140", "103", "29", null, null, this.Div00);
            obj.set_taborder("12");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "85", "168", null, null, "0", "0", this.Div00);
            obj.set_taborder("13");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "249", "140", null, "29", "0", null, this.Div00);
            obj.set_taborder("14");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "313", "56", null, "29", "0", null, this.Div00);
            obj.set_taborder("15");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "313", "0", null, "57", "0", null, this.Div00);
            obj.set_taborder("16");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 15 Gulim");
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

            obj = new Div("Div02", "absolute", "50.06%", "54", null, "229", "17", null, this);
            obj.set_taborder("290");
            obj.set_text("Div00");
            obj.style.set_border("2 solid #0a07c6ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "0", "23", null, null, "0", this.Div02);
            obj.set_taborder("17");
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
            obj.set_taborder("18");
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
            obj.set_taborder("19");
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
            obj.set_taborder("20");
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
            obj.set_taborder("21");
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
            obj.set_taborder("22");
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
            obj.set_taborder("23");
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
            obj.set_taborder("24");
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
            obj.set_taborder("25");
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
            obj.set_taborder("27");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_padding("2 2 2 2");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "85", "84", null, "57", "0", null, this.Div02);
            obj.set_taborder("28");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_padding("2 2 2 2");
            obj.set_wordwrap("char");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "85", "140", "103", "29", null, null, this.Div02);
            obj.set_taborder("29");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_padding("2 2 2 2");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "85", "168", null, "29", "0", null, this.Div02);
            obj.set_taborder("30");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_padding("2 2 2 2");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "249", "140", null, "29", "0", null, this.Div02);
            obj.set_taborder("31");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_padding("2 2 2 2");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "313", "56", null, "29", "0", null, this.Div02);
            obj.set_taborder("32");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_padding("2 2 2 2");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "313", "0", null, "57", "0", null, this.Div02);
            obj.set_taborder("33");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_padding("2 2 2 2");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 15 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "23", null, "63", "29", null, "0", this.Div02);
            obj.set_taborder("34");
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
            obj.set_taborder("35");
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

            obj = new Grid("Grid00", "absolute", "17", "283", null, "59", "17", null, this);
            obj.set_taborder("291");
            obj.set_binddataset("ds_tax");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"230\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"작성일자\"/><Cell col=\"1\" text=\"공급가액\"/><Cell col=\"2\" text=\"세액\"/><Cell col=\"3\" text=\"합계금액\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:CRT_DT\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXA_TT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:RMK1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "17", "531", "134", "29", null, null, this);
            obj.set_taborder("292");
            obj.set_mask("#,###,###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "694", "520", "35", "24", null, null, this);
            obj.set_taborder("293");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "259", "531", "110", "29", null, null, this);
            obj.set_taborder("296");
            obj.set_mask("#,###,###");
            obj.set_value("0");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "368", "531", "110", "29", null, null, this);
            obj.set_taborder("297");
            obj.set_mask("#,###,###");
            obj.set_value("0");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "477", "531", "132", "29", null, null, this);
            obj.set_taborder("298");
            obj.set_mask("#,###,###");
            obj.set_value("0");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "150", "531", "110", "29", null, null, this);
            obj.set_taborder("299");
            obj.set_mask("#,###,###");
            obj.set_value("0");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xml", "absolute", null, "23", "38", "21", "61", null, this);
            obj.set_taborder("301");
            obj.set_text("XML");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "23", "41", "21", "17", null, this);
            obj.set_taborder("302");
            obj.set_text("출력");
            this.addChild(obj.name, obj);

            obj = new Static("st_state", "absolute", "58", "15", "100", "29", null, null, this);
            obj.set_taborder("303");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title01", "absolute", "17", "15", "42", "29", null, null, this);
            obj.set_taborder("304");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 8");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", null, "23", "65", "21", "61", null, this);
            obj.set_taborder("307");
            obj.set_text("발행취소");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title02", "absolute", "410", "15", "65", "29", null, null, this);
            obj.set_taborder("308");
            obj.set_text("수정사유");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 8");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("st_state00", "absolute", "474", "15", "140", "29", null, null, this);
            obj.set_taborder("309");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            obj.set_wordwrap("none");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_sync", "absolute", "679", "3", "63", "17", null, null, this);
            obj.set_taborder("311");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_issue", "absolute", null, "23", "41", "21", "129", null, this);
            obj.set_taborder("314");
            obj.set_text("발행");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "223", "15", "188", "29", null, null, this);
            obj.set_taborder("313");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Plugin("TSXMLToolkit", "absolute", "404", "3", null, "13", "306", null, this);
            obj.setProperty("visible", "false");
            obj.setProperty("classid", "{BBC1A21F-05A2-44ED-B67E-E7C762F0BE23}");
            obj.setProperty("taborder", "315");
            obj.setProperty("mimetype", "application/x-shockwave-flash");
            obj.setProperty("codebase", "https://www.nhescm.co.kr/escm/download/TSXMLToolkit.cab#version=3.0.1.3\\");
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
            		p.set_titletext("세금계산서상세");
            		p.set_enable("true");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item25","Div00.Static01","text","ds_tax","SPLR_MTALNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","Div00.Static08","text","ds_tax","SPLR_ID_TXREG");
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
            obj = new BindItem("item1","Div02.Static08","text","ds_tax","BUY_ID_TXREG");
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
            obj = new BindItem("item12","st_state","text","ds_tax","TXBIL_STSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","st_state00","text","ds_tax","MOD_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Edit00","value","ds_tax","NTS_TMS_SQNO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_TX_5001.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_TX_5001.xfdl", "lib::comTSToolKit.xjs");
        this.registerScript("OMG_DS_TX_5001.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";
        //include "lib::comTSToolKit.xjs";

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
         		{code:"TXBIL_STSC",   dsName:"ds_combo",   selecttype:"N"}
            ];
            this.gfn_setPortalCommonCode(param);   

        	this.sqNo = this.getOwnerFrame().sqNo;
        	this.fn_retrieveDetail();
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload = function()
        {
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_createXml = function()
        {
        	var sSvcID        = "createXml";
        	var sURL          = "svc::rest/tx/createXml";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_uploadresult=ds_uploadresult";	
        	var sArgument     = "PBC_SQNO=" + this.sqNo;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_retrieveDetail = function()
        {
        	var sSvcID        = "retrieveDetail";
        	var sURL          = "svc::rest/tx/retrieveDetail";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_taxDetail=ds_taxDetail ds_tax=ds_tax";	
        	var sArgument     = "PBC_SQNO=" + this.sqNo;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_taxCancel = function()
        {
        	var sSvcID        = "taxCancel";
        	var sURL          = "svc::rest/tx/taxCancel";
        	var sInDatasets   = "ds_tax=ds_tax";
        	var sOutDatasets  = "";	
        	var sArgument     = "userId=" + application.gv_userId;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_insertTxbilElsg = function(objDs)
        {
        	/*
        	this.ds_elsg.clearData();
        	
        	for(var j = 0 ; j < objDs.rowcount; j++)
        	{
        		this.ds_elsg.addRow();
        		this.ds_elsg.setColumn(j, "ELSG_CNTN", objDs.getColumn(j, "ELSG_CNTN"));
        		this.ds_elsg.setColumn(j, "PBC_SQNO", objDs.getColumn(j, "PBC_SQNO"));
        		this.ds_elsg.setColumn(j, "SIGN_R_VAL", objDs.getColumn(j, "SIGN_R_VAL"));
        		this.ds_elsg.setColumn(j, "FS_RGM", application.gv_userId);
        		this.ds_elsg.setColumn(j, "LS_CHGM", application.gv_userId);
        	
        	}
        	*/
        	
        	var sSvcID        = "insertTxbilElsg";
        	var sURL          = "svc::rest/tx/insertTxbilElsg";
        	var sInDatasets   = "ds_elsg=ds_elsg";
        	var sOutDatasets  = "";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) { //에러
        		this.alert("에러발생  :  " +  ErrorMsg );
         	} else  {
        		switch(svcID) {
        			case "createXml":
        				if (this.ds_uploadresult.rowcount > 0) {
        					this.ds_uploadresult.addColumn("SEAL", "string");
        					for (var i = 0; i < this.ds_uploadresult.rowcount; i++) {
        						this.ds_uploadresult.setColumn(i, "SEAL", "tmp");
        					}
        					this.gfn_callDownload(this.ds_uploadresult);
        				} else {
        					alert("다시시도해 주십시오.");
        				}
        				break;
        				
        			case "retrieveDetail":
        				if (String(this.ds_tax.getColumn(0, "SPLR_BZNO")).trim(' ').length > 10) {
        					this.Div00.MaskEdit01.set_mask("######-#######");
        				}
        				if (String(this.ds_tax.getColumn(0, "BUY_BZNO")).trim(' ').length > 10) {
        					this.Div02.MaskEdit00.set_mask("######-#######");
        				}
        				
        				if (this.ds_tax.getColumn(0, "TXBIL_STSC") == '국세청신고완료') { // 00:접수완료
        					this.btn_xml.set_visible(true);
        				} else if (this.ds_tax.getColumn(0, "TXBIL_STSC") == '발행') {
        					//this.btn_sync.set_visible(true);
        					this.btn_xml.set_visible(true);
        				} else if (this.ds_tax.getColumn(0, "TXBIL_STSC") == '국세청접수') {
        					//this.btn_result.set_visible(true);
        					this.btn_xml.set_visible(true);
        				} else if (this.ds_tax.getColumn(0, "TXBIL_STSC") == '발행오류') {
        					this.btn_xml.set_visible(true);
        				} else if (this.ds_tax.getColumn(0, "TXBIL_STSC") == '수신' || this.ds_tax.getColumn(0, "TXBIL_STSC") == '미발행') { //수신, 미발행
        					//바이어,본부 일경우에는 [발행]버튼 숨기기
        					//if(application.gv_userType == '01')
        					//{
        					//	this.btn_issue.set_visible(true);
        					//}
        					if (this.ds_tax.getColumn(0, "TXBIL_STSC") == '미발행') {
        						// this.btn_issue.set_visible(true);
        					}
        				}
        				break;
        				
        			case "taxCancel":
        				alert("발행취소 되었습니다.");
        				this.reload();
        				break;
        				
        			case "insertTxbilElsg":
        				alert("발행되었습니다.");
        				this.reload();
        				break;
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_xml":
        			if (this.ds_tax.getColumn(0, "CRT_DT") < "20160101") {
        				alert("2016년 이전 발행 세금계산서의 XML문서는\nNH-eBill 에서 다운로드 가능합니다.");
        				return;
        			}
        			this.fn_createXml();
        			break;
        			
        		case "btn_print": 
        			var nRow;
        			var pbcSqno = "";
        			var ozfile = "OMG_DS_TX_BUYER";//청색
        			
        			var param = {
        				PBC_SQNO:this.ds_tax.getColumn(0, "PBC_SQNO"),
        				USR_TPC:application.gv_userTPC
        			}
        			
        			if (this.ds_tax.getColumn(0, "SPLR_BZNO") == "1148164826") {
        				var ozfile = "OMG_DS_TX_BUYER";//청색
        			} else if (this.ds_tax.getColumn(0, "NA_TRPL_C")==application.gv_glnCode) { //매출(세금)계산서|역발행|
        			   /*
        			    * 현재 로직으로는 본사에서 대리점 세금계산서를 출력하면 공급받는자용 청색 세금계산서가 출력됨
        			    */
        				ozfile = "OMG_DS_TX_SELLER";//적색
        			}
        			
        			/*
        				TXBIL_KD	0301	일반 계산서
        				TXBIL_KD	0303	위수탁 계산서
        				TXBIL_KD	0304	수입 계산서
        				TXBIL_KD	0401	수정 일반 계산서
        				TXBIL_KD	0403	수정 위수탁 계산서
        				TXBIL_KD	0404	수정 수입 계산서
        				
        				03, 04로 시작하는 코드는 세금계산서
        			*/
        			var txbilKdVal = this.ds_tax.getColumn(0, "TXBIL_KD").substr(0,2);
        			if (txbilKdVal=='03' || txbilKdVal=='04') {
        				ozfile = "OMG_DS_TX_SELLER";//적색
        			}

        			var ozParam = {
        				sId: ozfile,
        				sUrl: '/rest/oz/tx/retrieveSlTxbilForOz',
        				paramType: 'param',
        				sParam: param
        			};
        			this.ozViewer(ozParam ,"ozViewerPotal");
        			break;
        			
        		case "btn_cancel":
        			this.fn_taxCancel();
        			break;
        		
        		case "btn_sync":
        			var url = ""
        			//this.setWaitCursor(true);
        			if (application.gv_serverType == 'ADMIN') {
        				url = "https://tax.nhescm.co.kr:4443/sendServlet?doc_Dsc=01&pbc_Sqno=" + this.ds_tax.getColumn(0, "PBC_SQNO");
        			} else {
        				url = "http://121.156.58.244:4040/sendServlet?doc_Dsc=01&pbc_Sqno=" + this.ds_tax.getColumn(0, "PBC_SQNO");
        			}
        			
        			this.web_sync.set_url(url);
        			this.btn_sync.set_enable(false);
        			break;
        			
        		case "btn_result":
        			var url ="";	
        			//this.setWaitCursor(true);
        			if (application.gv_serverType == 'ADMIN') {
        				url = "https://tax.nhescm.co.kr:4443/sendServlet?doc_Dsc=03&pbc_Sqno=" + this.ds_tax.getColumn(0, "PBC_SQNO");
        			} else {
        				url = "http://121.156.58.244:4040/sendServlet?doc_Dsc=03&pbc_Sqno=" + this.ds_tax.getColumn(0, "PBC_SQNO");
        			}
        			
        			this.web_sync.set_url(url);
        			this.btn_result.set_enable(false);
        			break;
        			
        		case "btn_issue":
        			this.ds_tax.addColumn("ELSG_CNTN", "string");//생성된 taxInvoice return
        			this.ds_tax.addColumn("SIGN_R_VAL", "string");//생성된 rvalue return
        			
        			// 지연발금가산세 경고 추가 
        			var msg = "이 세금계산서는 발행마감일 이후 발행에 해당하며 발행시,\n매출처와 매입처에 지연발급가산세가 각각 1% 부과 됩니다.\n";
        				msg = msg + "발행하시겠습니까?";
        				
        			var crtDtSubStr = this.ds_tax.getColumn(0, "CRT_DT").substr(0,6);
        			//this.alert("crtDtSubStr = " + crtDtSubStr);
        			
        			if (crtDtSubStr == "201601" || crtDtSubStr == "201602") {
        				if (!this.confirm(msg, "confirm", "question")) {
        					return false;
        				} else {
        					this.alert("세금계산서 발행을 진행합니다.인증서 창이 안 나올 경우 콜센타에 문의하십시오");
        				}
        			}
        			
        			this.gfn_eTaxSignOpenWeb(this.ds_tax, "fn_callbackDti");
        			
        			/* 
        			var rtnvalue = this.gfn_eTaxSign(this.TSXMLToolkit, this.ds_tax, this.dsTaxForSvc, this.ds_item);
        			
        			if(rtnvalue)
        			{
        				this.fn_insertTxbilElsg(this.ds_tax);
        			}
        			else
        			{
        				alert("인증실패");
        			}
        			*/
        			break;
        	}
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        var reuserdata = "";
        this.web_sync_onusernotify = function(obj,e)
        {
        // 	if(e.userdata == "notify" ){
        // 	  if(e.userdata !=reuserdata)
        // 		{
        // 		//alert("완료되었습니다.");
        // 			this.setWaitCursor(false);
        // 		}
        // 	   reuserdata = e.userdata;
        // 	}
        }

        this.fn_callbackDti = function(rValue,srValue,invoice)
        {
        	var taxInvoice;//Array
        	var objDs = this.ds_tax;
        	taxInvoice = invoice.split("#$");
        	var taxSrValue;//Array
        	taxSrValue = srValue.split("#$");
        	this.ds_elsg.clearData();
        	
        	var objDs = this.ds_tax;
        	
        	if (rValue == "SUC") {
        		for(var j = 0; j < objDs.rowcount; j++) {
        			this.ds_elsg.addRow();
        			this.ds_elsg.setColumn(j, "ELSG_CNTN", taxInvoice[j]);
        			this.ds_elsg.setColumn(j, "PBC_SQNO", objDs.getColumn(j, "PBC_SQNO"));
        			this.ds_elsg.setColumn(j, "SIGN_R_VAL", taxSrValue[j]);
        			this.ds_elsg.setColumn(j, "FS_RGM", application.gv_userId);
        			this.ds_elsg.setColumn(j, "LS_CHGM", application.gv_userId);
        		}
        		this.fn_insertTxbilElsg(this.ds_tax);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_sync.addEventHandler("onclick", this.common_onclick, this);
            this.btn_result.addEventHandler("onclick", this.common_onclick, this);
            this.btn_xml.addEventHandler("onclick", this.common_onclick, this);
            this.btn_print.addEventHandler("onclick", this.common_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.common_onclick, this);
            this.web_sync.addEventHandler("onusernotify", this.web_sync_onusernotify, this);
            this.btn_issue.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_TX_5001.xfdl");

       
    };
}
)();
