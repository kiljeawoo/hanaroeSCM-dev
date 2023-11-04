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
                this.set_name("OMG_DS_SC_3135");
                this.set_titletext("착오에의한이중발행");
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
            obj._setContents("<ColumnInfo><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LATCNM\" type=\"STRING\" size=\"256\"/><Column id=\"STD\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"QT\" type=\"STRING\" size=\"256\"/><Column id=\"UPR\" type=\"STRING\" size=\"256\"/><Column id=\"SPPR\" type=\"STRING\" size=\"256\"/><Column id=\"TXA\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("");
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

            obj = new Dataset("ds_modC", this);
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_save", "absolute", null, "15", "41", "21", "17", null, this);
            obj.set_taborder("280");
            obj.set_text("발행");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "857", "-18", "1", "490", null, null, this);
            obj.set_taborder("107");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "17", "494", "134", "29", null, null, this);
            obj.set_taborder("331");
            obj.set_text("합계금액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Gulim");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "477", "494", "134", "29", null, null, this);
            obj.set_taborder("332");
            obj.set_text("외상미수금");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "150", "494", "110", "29", null, null, this);
            obj.set_taborder("333");
            obj.set_text("현금");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "259", "494", "110", "29", null, null, this);
            obj.set_taborder("334");
            obj.set_text("수표");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "368", "494", "110", "29", null, null, this);
            obj.set_taborder("335");
            obj.set_text("어음");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "610", "494", null, "57", "17", null, this);
            obj.set_taborder("340");
            obj.set_text("위 금액을          함       ");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "17", "332", null, "162", "17", null, this);
            obj.set_taborder("341");
            obj.set_binddataset("ds_taxDetail");
            obj.set_autofittype("col");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"158\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"월\"/><Cell col=\"1\" text=\"일\"/><Cell col=\"2\" text=\"품목\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"단가\"/><Cell col=\"6\" text=\"공급가액\"/><Cell col=\"7\" text=\"세액\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:TR_DT_MON\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:TR_DT_DAY\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:LATCNM\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:STD\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:QT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:UPR\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPPR\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXA\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:RMK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "17", "44", "47.95%", "229", null, null, this);
            obj.set_taborder("343");
            obj.set_text("Div00");
            obj.style.set_border("2 solid #d11255ff");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "0", "23", null, null, "0", this.Div01);
            obj.set_taborder("18");
            obj.set_text("공\r\n\r\n급\r\n\r\n자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#feb6b7ff");
            obj.style.set_border("1 solid #e74449ff");
            obj.style.set_color("#cc0d15ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "23", "0", "63", "57", null, null, this.Div01);
            obj.set_taborder("19");
            obj.set_text("등록\r\n번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "255", "0", "59", "57", null, null, this.Div01);
            obj.set_taborder("20");
            obj.set_text("종사업장\r\n번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "23", "56", "63", "29", null, null, this.Div01);
            obj.set_taborder("21");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "255", "56", "59", "29", null, null, this.Div01);
            obj.set_taborder("22");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "23", "84", "63", "57", null, null, this.Div01);
            obj.set_taborder("23");
            obj.set_text("사업장\r\n주소");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "23", "140", "63", "29", null, null, this.Div01);
            obj.set_taborder("24");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "187", "140", "63", "29", null, null, this.Div01);
            obj.set_taborder("25");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "23", "168", "63", "57", null, null, this.Div01);
            obj.set_taborder("26");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "85", "56", "171", "29", null, null, this.Div01);
            obj.set_taborder("27");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "85", "84", null, "57", "0", null, this.Div01);
            obj.set_taborder("28");
            obj.set_wordwrap("char");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "85", "140", "103", "29", null, null, this.Div01);
            obj.set_taborder("29");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "85", "168", null, null, "0", "0", this.Div01);
            obj.set_taborder("30");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "249", "140", null, "29", "0", null, this.Div01);
            obj.set_taborder("31");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "313", "56", null, "29", "0", null, this.Div01);
            obj.set_taborder("32");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "313", "0", null, "57", "0", null, this.Div01);
            obj.set_taborder("33");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit01", "absolute", "85", "0", "171", "57", null, null, this.Div01);
            obj.set_taborder("34");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_maskchar(" ");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 15 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid03", "absolute", "17", "273", null, "59", "17", null, this);
            obj.set_taborder("345");
            obj.set_binddataset("ds_tax");
            obj.set_autofittype("col");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"230\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"작성일자\"/><Cell col=\"1\" text=\"공급가액\"/><Cell col=\"2\" text=\"세액\"/><Cell col=\"3\" text=\"합계금액\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"none\" text=\"bind:CRT_DT\" calendardisplay=\"display\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXA_TT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AM\"/><Cell col=\"4\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMK1\" editdisplay=\"display\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "17", "522", "134", "29", null, null, this);
            obj.set_taborder("346");
            obj.set_mask("#,###,###");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "694", "511", "35", "24", null, null, this);
            obj.set_taborder("347");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "17", "15", "399", "21", null, null, this);
            obj.set_taborder("352");
            obj.set_text("수정하여 교부하는 전자세금계산서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "44", "17", "73", null, null, this);
            obj.set_taborder("358");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "171", "0", "91", "15", null, null, this);
            obj.set_taborder("359");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "150", "522", "110", "29", null, null, this);
            obj.set_taborder("365");
            obj.set_mask("#,###,###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "259", "522", "110", "29", null, null, this);
            obj.set_taborder("366");
            obj.set_mask("#,###,###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "368", "522", "110", "29", null, null, this);
            obj.set_taborder("367");
            obj.set_mask("#,###,###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "477", "522", "134", "29", null, null, this);
            obj.set_taborder("368");
            obj.set_mask("#,###,###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "248", "551", "91", "17", null, null, this);
            obj.set_taborder("369");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "50.06%", "44", null, "229", "17", null, this);
            obj.set_taborder("370");
            obj.set_text("Div00");
            obj.style.set_border("2 solid #0a07c6ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "0", "23", null, null, "0", this.Div02);
            obj.set_taborder("46");
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
            obj.set_taborder("47");
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
            obj.set_taborder("48");
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
            obj.set_taborder("49");
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
            obj.set_taborder("50");
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
            obj.set_taborder("51");
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
            obj.set_taborder("52");
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
            obj.set_taborder("53");
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
            obj.set_taborder("54");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "23", null, "63", "29", null, "0", this.Div02);
            obj.set_taborder("55");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit00", "absolute", "85", "0", "171", "57", null, null, this.Div02);
            obj.set_taborder("56");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_maskchar(" ");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 15 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "313", "0", null, "57", "0", null, this.Div02);
            obj.set_taborder("57");
            obj.set_readonly("true");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "85", "56", "171", "29", null, null, this.Div02);
            obj.set_taborder("58");
            obj.set_readonly("true");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "313", "56", null, "29", "0", null, this.Div02);
            obj.set_taborder("59");
            obj.set_readonly("true");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "85", "84", null, "57", "0", null, this.Div02);
            obj.set_taborder("60");
            obj.set_readonly("true");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit06", "absolute", "249", "140", null, "29", "0", null, this.Div02);
            obj.set_taborder("61");
            obj.set_readonly("true");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "85", "140", "103", "29", null, null, this.Div02);
            obj.set_taborder("62");
            obj.set_readonly("true");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "85", "168", null, "29", "0", null, this.Div02);
            obj.set_taborder("63");
            obj.set_readonly("false");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit07", "absolute", "85", "196", null, null, "0", "0", this.Div02);
            obj.set_taborder("64");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_buyer", "absolute", "231", "60", "21", "21", null, null, this.Div02);
            obj.set_taborder("65");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 229, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("343");
            		p.set_text("Div00");
            		p.style.set_border("2 solid #d11255ff");
            		p.set_enable("true");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 229, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("370");
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
            		p.set_titletext("착오에의한이중발행");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item14","MaskEdit01","value","ds_tax","TOT_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Static27","text","ds_tax","RCT_RQS_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div01.MaskEdit01","value","ds_tax","SPLR_BZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Div01.Static01","text","ds_tax","SPLR_MTALNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Div01.Static06","text","ds_tax","SPLR_REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Div01.Static02","text","ds_tax","SPLR_ADR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","Div01.Static05","text","ds_tax","SPLR_BZC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","Div01.Static03","text","ds_tax","SPLR_BZTPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","Div01.Static04","text","ds_tax","SPLR_CHRR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","Static11","text","ds_tax","STL_METHC1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","Static12","text","ds_tax","STL_METHC2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","Static15","text","ds_tax","STL_METHC3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","Static10","text","ds_tax","STL_METHC4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","MaskEdit00","value","ds_tax","STL_AM1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","MaskEdit02","value","ds_tax","STL_AM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","MaskEdit03","value","ds_tax","STL_AM3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","MaskEdit04","value","ds_tax","STL_AM4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div02.MaskEdit00","value","ds_tax","BUY_BZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div02.Edit00","value","ds_tax","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div02.Edit02","value","ds_tax","BUY_REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div02.Edit01","value","ds_tax","BUY_MTALNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div02.Edit03","value","ds_tax","BUY_ADR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div02.Edit04","value","ds_tax","BUY_BZTPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div02.Edit06","value","ds_tax","BUY_BZC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div02.Edit05","value","ds_tax","BUY_CHRR_EMAIL1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div02.Edit07","value","ds_tax","BUY_CHRR_EMAIL2");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_3136.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_3136.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.flag = true;
        this.sqNo = "20150504122106nheba18798";
        this.modC = "";
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
         		{code:"TXBIL_STSC",   dsName:"ds_combo",   selecttype:"N"},
         		{code:"MOD_C",   dsName:"ds_modC",   selecttype:"S"},
         		{code:"STL_METHC",   dsName:"ds_combo2",   selecttype:"S"}
            ];
            this.gfn_setPortalCommonCode(param);   
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload = function()
        {
        	trace("fn_commonAfterOnload");
        	this.sqNo = this.getOwnerFrame().sqNo;
        	this.modC = this.getOwnerFrame().modC;
        	
        	this.fn_retrieveSlTxbilForMod();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_insertTaxMod = function()
        {
        	this.ds_tax.setColumn(0, "FS_RGM", application.gv_userId);
        	this.ds_tax.setColumn(0, "MOD_C", this.modC);
        	this.ds_tax.setColumn(0, "MOD_TAX_PBC_SQNO", this.ds_tax.getColumn(0, "PBC_SQNO"));
        	this.ds_tax.setColumn(0, "MOD_TAX_NTS_TMS_SQNO", this.ds_tax.getColumn(0, "NTS_TMS_SQNO"));
        	//this.ds_tax.setColumn(0, "CRT_DT", this.gfn_today("yyyyMMdd"));
        	 
        	//this.ds_taxDetail.setColumn(0, "TR_DT", this.gfn_today("yyyyMMdd"));
        	
        	var sSvcID        = "insertTaxMod";
        	var sURL          = "svc::rest/tx/insertTaxMod";
        	var sInDatasets   = "ds_taxDetailMod=ds_taxDetail ds_taxMod=ds_tax";
        	var sOutDatasets  = "";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        this.fn_retrieveSlTxbilForMod = function()
        {
        	var sSvcID        = "retrieveSlTxbilForMod";
        	var sURL          = "svc::rest/tx/retrieveSlTxbilForMod";
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
        			case "retrieveSlTxbilForMod":
        				this.ds_tax.setColumn(0,"TXBIL_KD", "02" + String(this.ds_tax.getColumn(0,"TXBIL_KD")).substr(2,2));
        				this.fn_reverseAmt();
        				break;
        				
        			case "insertTaxMod":
        				alert("발행되었습니다.");
        				this.close();
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
        		case "btn_save":
        			this.fn_insertTaxMod();
        			break;
        	}
        	
        }

        this.ds_tax_oncolumnchanged = function(obj,e)
        {
        	if(e.col == 2)
        	{
        		if(e.newvalue == undefined)
        		{
        			return false;
        		}
        		if(String(e.newvalue) > this.gfn_today("yyyyMMdd"))//작성일자가 미래날자이면 안된다.
        		{
        			alert("오늘 이후의 날짜는 선택할 수 없습니다.");
        			return false;
        		}
        		else if(String(e.newvalue).substr(0,6) != String(this.ds_tax.getColumn(0, "CRT_DT")).substr(0,6) )//작성일자와 품목란에 거래일자가 동일하거나 동일월인지 확인
        		{
        			alert("작성일자와 거래일자는 동일월 이어야 합니다.");
        			return false;
        		}	
        	}
        }

        
        this.ds_tax_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "CRT_DT")
        	{
        		//작성일과 품목란의 거래일자가 동일월이어야 한다.
        		if(e.newvalue == undefined)
        		{
        			return false;
        		}
        		if(String(e.newvalue) > this.gfn_today("yyyyMMdd"))//작성일은 미래일이면 안된다.
        		{
        			alert("오늘 이후의 날짜는 선택할 수 없습니다.");
        			return false;
        		}
        	}
        }
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_reverseAmt = function()
        {
        	for(var i = 0 ; i < this.ds_taxDetail.rowcount ; i++)
        	{
        		this.ds_taxDetail.setColumn(i, "SPPR", - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_taxDetail.getColumn(i, "SPPR"))));
        		this.ds_taxDetail.setColumn(i, "TXA", - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_taxDetail.getColumn(i, "TXA"))));
        		this.ds_taxDetail.setColumn(i, "QT", "");
        		this.ds_taxDetail.setColumn(i, "UPR", "");
        	}
        	this.ds_tax.setColumn(0, "SPRTT",  - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "SPRTT"))));
        	this.ds_tax.setColumn(0, "TXA_TT",  - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "TXA_TT"))));
        	this.ds_tax.setColumn(0, "TOT_AM", - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "TOT_AM"))));
        	this.ds_tax.setColumn(0, "STL_AM1", - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "STL_AM1"))));
        	this.ds_tax.setColumn(0, "STL_AM2", - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "STL_AM2"))));
        	this.ds_tax.setColumn(0, "STL_AM3", - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "STL_AM3"))));
        	this.ds_tax.setColumn(0, "STL_AM4", - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "STL_AM4"))));
        }

        /************************************************************************************************
         * 페이징처리
        ************************************************************************************************/

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_tax.addEventHandler("oncolumnchanged", this.ds_tax_oncolumnchanged, this);
            this.ds_tax.addEventHandler("cancolumnchange", this.ds_tax_cancolumnchange, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.common_onclick, this);
            this.Static05.addEventHandler("onclick", this.Static05_onclick, this);
            this.Div02.btn_buyer.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_3136.xfdl", true);

       
    };
}
)();
