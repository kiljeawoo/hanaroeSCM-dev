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
                this.set_name("pattern_01");
                this.set_titletext("Detail");
                this._setFormPosition(0,0,750,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
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


            
            // UI Components Initialize
            obj = new Static("Static86", "absolute", "3", "0", "737", "15", null, null, this);
            obj.set_taborder("288");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "733", "0", "17", "479", null, null, this);
            obj.set_taborder("289");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "0", "6", "17", "479", null, null, this);
            obj.set_taborder("290");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "17", "15", "716", "43", null, null, this);
            obj.set_taborder("292");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "9", "107", "21", null, null, this.Div02);
            obj.set_taborder("52");
            obj.set_text("회원정보변경");
            obj.style.set_font("bold 9 arial");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button51", "absolute", "662", "9", "41", "21", null, null, this.Div02);
            obj.set_taborder("55");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "17", "74", "135", "21", null, null, this);
            obj.set_taborder("293");
            obj.set_text("회사 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "17", "58", "717", "20", null, null, this);
            obj.set_taborder("294");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "125", "95", "609", "29", null, null, this);
            obj.set_taborder("295");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "16", "95", "110", "29", null, null, this);
            obj.set_taborder("296");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "352", "95", "130", "29", null, null, this);
            obj.set_taborder("297");
            obj.set_text("경제통합거래처코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "16", "123", "110", "29", null, null, this);
            obj.set_taborder("298");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "125", "123", "609", "29", null, null, this);
            obj.set_taborder("299");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static96", "absolute", "352", "123", "130", "29", null, null, this);
            obj.set_taborder("300");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static97", "absolute", "16", "151", "110", "29", null, null, this);
            obj.set_taborder("301");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", "125", "151", "609", "29", null, null, this);
            obj.set_taborder("302");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", "352", "151", "130", "29", null, null, this);
            obj.set_taborder("303");
            obj.set_text("업체유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static100", "absolute", "16", "179", "110", "29", null, null, this);
            obj.set_taborder("304");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static101", "absolute", "125", "179", "609", "29", null, null, this);
            obj.set_taborder("305");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static102", "absolute", "16", "207", "110", "58", null, null, this);
            obj.set_taborder("306");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static103", "absolute", "125", "207", "609", "58", null, null, this);
            obj.set_taborder("307");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "129", "214", "601", "21", null, null, this);
            obj.set_taborder("308");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07", "absolute", "129", "238", "601", "21", null, null, this);
            obj.set_taborder("309");
            this.addChild(obj.name, obj);

            obj = new Static("Static104", "absolute", "17", "265", "717", "20", null, null, this);
            obj.set_taborder("310");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static105", "absolute", "17", "281", "135", "21", null, null, this);
            obj.set_taborder("311");
            obj.set_text("회원 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static106", "absolute", "16", "302", "110", "29", null, null, this);
            obj.set_taborder("312");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "125", "302", "609", "29", null, null, this);
            obj.set_taborder("313");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", "352", "302", "130", "29", null, null, this);
            obj.set_taborder("314");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static109", "absolute", "16", "330", "110", "29", null, null, this);
            obj.set_taborder("315");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static110", "absolute", "125", "330", "609", "29", null, null, this);
            obj.set_taborder("316");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static111", "absolute", "352", "330", "130", "29", null, null, this);
            obj.set_taborder("317");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static112", "absolute", "16", "358", "110", "29", null, null, this);
            obj.set_taborder("318");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static113", "absolute", "125", "358", "609", "29", null, null, this);
            obj.set_taborder("319");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static114", "absolute", "16", "386", "110", "29", null, null, this);
            obj.set_taborder("320");
            obj.set_text("회원전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "125", "386", "609", "29", null, null, this);
            obj.set_taborder("321");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static116", "absolute", "352", "386", "130", "29", null, null, this);
            obj.set_taborder("322");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static117", "absolute", "16", "414", "110", "58", null, null, this);
            obj.set_taborder("323");
            obj.set_text("휴대전화인증");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static118", "absolute", "125", "414", "609", "58", null, null, this);
            obj.set_taborder("324");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static119", "absolute", "16", "471", "110", "29", null, null, this);
            obj.set_taborder("325");
            obj.set_text("수신 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static120", "absolute", "125", "471", "609", "29", null, null, this);
            obj.set_taborder("326");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static121", "absolute", "17", "515", "135", "21", null, null, this);
            obj.set_taborder("327");
            obj.set_text("권한 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static122", "absolute", "17", "499", "717", "20", null, null, this);
            obj.set_taborder("328");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static123", "absolute", "16", "536", "110", "29", null, null, this);
            obj.set_taborder("329");
            obj.set_text("회원권한");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static124", "absolute", "125", "536", "609", "29", null, null, this);
            obj.set_taborder("330");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo25", "absolute", "488", "390", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo25_innerdataset = new Dataset("Combo25_innerdataset", this.Combo25);
            Combo25_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(Combo25_innerdataset);
            obj.set_taborder("334");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static125", "absolute", "541", "390", "9", "21", null, null, this);
            obj.set_taborder("335");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit12", "absolute", "550", "390", "48", "21", null, null, this);
            obj.set_taborder("336");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Static("Static126", "absolute", "600", "390", "9", "21", null, null, this);
            obj.set_taborder("337");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit13", "absolute", "609", "390", "48", "21", null, null, this);
            obj.set_taborder("338");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo26", "absolute", "132", "390", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo26_innerdataset = new Dataset("Combo26_innerdataset", this.Combo26);
            Combo26_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(Combo26_innerdataset);
            obj.set_taborder("339");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static127", "absolute", "185", "390", "9", "21", null, null, this);
            obj.set_taborder("340");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit14", "absolute", "194", "390", "48", "21", null, null, this);
            obj.set_taborder("341");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Static("Static128", "absolute", "244", "390", "9", "21", null, null, this);
            obj.set_taborder("342");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit15", "absolute", "253", "390", "48", "21", null, null, this);
            obj.set_taborder("343");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit16", "absolute", "129", "99", "35", "21", null, null, this);
            obj.set_taborder("344");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Static("Static129", "absolute", "166", "99", "9", "21", null, null, this);
            obj.set_taborder("345");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit17", "absolute", "175", "99", "30", "21", null, null, this);
            obj.set_taborder("346");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Static("Static130", "absolute", "207", "99", "9", "21", null, null, this);
            obj.set_taborder("347");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit18", "absolute", "216", "99", "65", "21", null, null, this);
            obj.set_taborder("348");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit19", "absolute", "485", "99", "245", "21", null, null, this);
            obj.set_taborder("349");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit20", "absolute", "129", "127", "220", "21", null, null, this);
            obj.set_taborder("350");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo27", "absolute", "485", "127", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo27_innerdataset = new Dataset("Combo27_innerdataset", this.Combo27);
            Combo27_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(Combo27_innerdataset);
            obj.set_taborder("351");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static131", "absolute", "538", "127", "9", "21", null, null, this);
            obj.set_taborder("352");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit21", "absolute", "547", "127", "48", "21", null, null, this);
            obj.set_taborder("353");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Static("Static132", "absolute", "597", "127", "9", "21", null, null, this);
            obj.set_taborder("354");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit22", "absolute", "606", "127", "48", "21", null, null, this);
            obj.set_taborder("355");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit23", "absolute", "129", "155", "220", "21", null, null, this);
            obj.set_taborder("356");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "485", "155", "183", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">공급업체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">쿠폰관리</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("357");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new MaskEdit("MaskEdit24", "absolute", "129", "183", "35", "21", null, null, this);
            obj.set_taborder("358");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Static("Static133", "absolute", "166", "183", "9", "21", null, null, this);
            obj.set_taborder("359");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit25", "absolute", "175", "183", "35", "21", null, null, this);
            obj.set_taborder("360");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08", "absolute", "129", "306", "220", "21", null, null, this);
            obj.set_taborder("361");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11", "absolute", "129", "334", "220", "21", null, null, this);
            obj.set_taborder("362");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit12", "absolute", "485", "306", "245", "21", null, null, this);
            obj.set_taborder("363");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit13", "absolute", "485", "334", "245", "21", null, null, this);
            obj.set_taborder("364");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit14", "absolute", "129", "362", "122", "21", null, null, this);
            obj.set_taborder("365");
            this.addChild(obj.name, obj);

            obj = new Static("Static134", "absolute", "256", "362", "13", "21", null, null, this);
            obj.set_taborder("366");
            obj.set_text("@");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit17", "absolute", "273", "362", "122", "21", null, null, this);
            obj.set_taborder("367");
            this.addChild(obj.name, obj);

            obj = new Button("Button11", "absolute", "129", "418", "89", "21", null, null, this);
            obj.set_taborder("368");
            obj.set_text("인증번호생성");
            this.addChild(obj.name, obj);

            obj = new Static("Static135", "absolute", "223", "418", "297", "21", null, null, this);
            obj.set_taborder("369");
            obj.set_text("인증번호를 생성하여 등록된 휴대폰으로 전송합니다.");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit18", "absolute", "129", "445", "89", "21", null, null, this);
            obj.set_taborder("370");
            this.addChild(obj.name, obj);

            obj = new Static("Static136", "absolute", "223", "445", "249", "21", null, null, this);
            obj.set_taborder("371");
            obj.set_text("휴대폰으로 전송된 인증번호를 입력해주세요.");
            this.addChild(obj.name, obj);

            obj = new Button("Button13", "absolute", "475", "445", "41", "21", null, null, this);
            obj.set_taborder("372");
            obj.set_text("인증");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01", "absolute", "129", "475", "58", "21", null, null, this);
            obj.set_taborder("373");
            obj.set_text("SMS");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02", "absolute", "201", "475", "58", "21", null, null, this);
            obj.set_taborder("374");
            obj.set_text("메일");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03", "absolute", "129", "540", "58", "21", null, null, this);
            obj.set_taborder("375");
            obj.set_text("빌링");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04", "absolute", "201", "540", "90", "21", null, null, this);
            obj.set_taborder("376");
            obj.set_text("전자계약");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05", "absolute", "299", "540", "90", "21", null, null, this);
            obj.set_taborder("377");
            obj.set_text("세금계산서");
            this.addChild(obj.name, obj);

            obj = new Static("Static137", "absolute", "269", "515", "30", "84", null, null, this);
            obj.set_taborder("378");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "16", "628", "719", "50", null, null, this);
            obj.set_taborder("382");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static121", "absolute", "1", "0", "135", "21", null, null, this.Div00);
            obj.set_taborder("12");
            obj.set_text("인감 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static123", "absolute", "0", "21", "110", "29", null, null, this.Div00);
            obj.set_taborder("13");
            obj.set_text("인감이미지");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static124", "absolute", "109", "21", "609", "29", null, null, this.Div00);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload00", "absolute", "111", "25", "601", "24", null, null, this.Div00);
            obj.set_taborder("15");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "16", "700", "719", "454", null, null, this);
            obj.set_taborder("383");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static121", "absolute", "1", "0", "135", "21", null, null, this.Div03);
            obj.set_taborder("57");
            obj.set_text("서비스 이용");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static123", "absolute", "0", "21", "110", "58", null, null, this.Div03);
            obj.set_taborder("58");
            obj.set_text("기본서비스 이용");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static124", "absolute", "109", "21", "609", "58", null, null, this.Div03);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "78", "110", "29", null, null, this.Div03);
            obj.set_taborder("60");
            obj.set_text("부가정보 이용");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "109", "78", "609", "29", null, null, this.Div03);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "106", "110", "29", null, null, this.Div03);
            obj.set_taborder("62");
            obj.set_text("정보분석 이용");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "109", "106", "609", "29", null, null, this.Div03);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "115", "27", "586", "46", null, null, this.Div03);
            obj.set_taborder("64");
            obj.set_text("SCM업무, EDI서비스, 세금계산서는 기본서비스로 제공됩니다.\r\nEDI서비스, SCM업무는 이용량(KR)에 따라 청구됩니다. 상세정보는 서비스이용료를 참조바랍니다.");
            this.Div03.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox01", "absolute", "115", "84", "58", "21", null, null, this.Div03);
            obj.set_taborder("65");
            obj.set_text("SMS");
            this.Div03.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "184", "84", "150", "21", null, null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Div03.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">정액제</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">종량제</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("66");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Static("Static137", "absolute", "237", "40", "22", "84", null, null, this.Div03);
            obj.set_taborder("67");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div03.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox00", "absolute", "115", "111", "58", "21", null, null, this.Div03);
            obj.set_taborder("68");
            obj.set_text("BI조회");
            this.Div03.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox02", "absolute", "187", "111", "74", "21", null, null, this.Div03);
            obj.set_taborder("69");
            obj.set_text("추이분석");
            this.Div03.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox03", "absolute", "272", "111", "112", "21", null, null, this.Div03);
            obj.set_taborder("70");
            obj.set_text("시장분석(자사)");
            this.Div03.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox04", "absolute", "392", "111", "132", "21", null, null, this.Div03);
            obj.set_taborder("71");
            obj.set_text("시장분석(경쟁사)");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "168", "88", "19", "84", null, null, this.Div03);
            obj.set_taborder("72");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "253", "88", "19", "84", null, null, this.Div03);
            obj.set_taborder("73");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "373", "88", "19", "84", null, null, this.Div03);
            obj.set_taborder("74");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "1", "151", "135", "21", null, null, this.Div03);
            obj.set_taborder("75");
            obj.set_text("납부 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "119", "171", "599", "29", null, null, this.Div03);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "119", "199", "599", "29", null, null, this.Div03);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static110", "absolute", "119", "227", "599", "29", null, null, this.Div03);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static111", "absolute", "336", "227", "135", "29", null, null, this.Div03);
            obj.set_taborder("79");
            obj.set_text("생년월일/사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "119", "255", "599", "29", null, null, this.Div03);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "336", "255", "135", "29", null, null, this.Div03);
            obj.set_taborder("81");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "119", "283", "599", "29", null, null, this.Div03);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "119", "311", "599", "29", null, null, this.Div03);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "119", "339", "599", "58", null, null, this.Div03);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "119", "396", "599", "58", null, null, this.Div03);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "0", "283", "120", "29", null, null, this.Div03);
            obj.set_taborder("86");
            obj.set_text("통장사본");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "339", "120", "58", null, null, this.Div03);
            obj.set_taborder("87");
            obj.set_text("예금주의\r\n출금이체동의서");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "0", "396", "120", "58", null, null, this.Div03);
            obj.set_taborder("88");
            obj.set_text("금융거래 정보의\r\n제공동의서");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "311", "120", "29", null, null, this.Div03);
            obj.set_taborder("89");
            obj.set_text("사업자등록증 사본");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "0", "171", "120", "29", null, null, this.Div03);
            obj.set_taborder("90");
            obj.set_text("결제방식");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "0", "199", "120", "29", null, null, this.Div03);
            obj.set_taborder("91");
            obj.set_text("희망출금일");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static109", "absolute", "0", "227", "120", "29", null, null, this.Div03);
            obj.set_taborder("92");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "0", "255", "120", "29", null, null, this.Div03);
            obj.set_taborder("93");
            obj.set_text("거래은행");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Radio("Radio01", "absolute", "125", "176", "586", "21", null, null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Div03.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">CMS계좌(농협)이체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">CMS계좌이체</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">가상계좌</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">KT전화요금</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("94");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Radio("Radio02", "absolute", "125", "204", "220", "21", null, null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            var Radio02_innerdataset = new Dataset("Radio02_innerdataset", this.Div03.Radio02);
            Radio02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">15일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">20일</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">28일</Col></Row></Rows>");
            obj.set_innerdataset(Radio02_innerdataset);
            obj.set_taborder("95");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Edit("Edit18", "absolute", "123", "231", "89", "21", null, null, this.Div03);
            obj.set_taborder("96");
            this.Div03.addChild(obj.name, obj);
            obj = new Radio("Radio03", "absolute", "218", "231", "107", "21", null, null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            var Radio03_innerdataset = new Dataset("Radio03_innerdataset", this.Div03.Radio03);
            Radio03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">개인</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">법인</Col></Row></Rows>");
            obj.set_innerdataset(Radio03_innerdataset);
            obj.set_taborder("97");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Edit("Edit00", "absolute", "474", "231", "240", "21", null, null, this.Div03);
            obj.set_taborder("98");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "474", "259", "240", "21", null, null, this.Div03);
            obj.set_taborder("99");
            this.Div03.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "123", "259", "210", "21", null, null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Div03.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">농협은행</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">우리은행</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("100");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new FileUpload("FileUpload00", "absolute", "121", "287", "593", "24", null, null, this.Div03);
            obj.set_taborder("101");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.Div03.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload01", "absolute", "121", "315", "593", "24", null, null, this.Div03);
            obj.set_taborder("102");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.Div03.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "123", "343", "522", "50", null, null, this.Div03);
            obj.set_taborder("103");
            this.Div03.addChild(obj.name, obj);
            obj = new TextArea("TextArea01", "absolute", "123", "400", "522", "50", null, null, this.Div03);
            obj.set_taborder("104");
            this.Div03.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox05", "absolute", "660", "357", "46", "21", null, null, this.Div03);
            obj.set_taborder("105");
            obj.set_text("동의");
            this.Div03.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox06", "absolute", "660", "413", "47", "21", null, null, this.Div03);
            obj.set_taborder("106");
            obj.set_text("동의");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static122", "absolute", "2", "135", "717", "20", null, null, this.Div03);
            obj.set_taborder("107");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static138", "absolute", "16", "1158", "447", "21", null, null, this);
            obj.set_taborder("384");
            obj.set_text("* 업무시간외 회원가입시 익일 업무처리가 됩니다.");
            obj.set_cssclass("sta_WF_DescriptionE02");
            obj.set_visible("false");
            obj.style.set_padding("2 0 0 3");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 716, 43, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("292");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 719, 50, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("382");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 719, 454, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("383");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 750, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("Detail");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("createAccount.xfdl", function(exports) {
        var nBasicBottom = nexacro.toNumber(this.Static124.top) + nexacro.toNumber(this.Static124.height);

        this.pattern_01_onload = function(obj,e)
        {	
        }

        this.CheckBox03_onchanged = function(obj,e)
        {
        	if(e.postvalue == 1){		
        		this.Div00.set_top(nBasicBottom+20);
        		this.Div00.set_visible(true);
        		
        		var nDiv00Bottom = nexacro.toNumber(this.Div00.top) + nexacro.toNumber(this.Div00.height);
        		
        		if(this.Div03.visible){	
        			
        			this.Div03.set_top(nDiv00Bottom+20);
        			var nDiv03Bottom = nexacro.toNumber(this.Div03.top) + nexacro.toNumber(this.Div03.height);
        			this.Static138.set_top(nDiv03Bottom);
        		}else{
        			//맨밑 Static (* 업무시간외 회원가입시 익일 업무처리가 됩니다.)
        			this.Static138.set_top(nDiv00Bottom);
        			this.Static138.set_visible(true);
        		}
        		
        		
        	}else{
        		this.Div00.set_visible(false);
        		
        		if(this.Div03.visible){	
        			this.Div03.set_top(nBasicBottom+20);
        			var nDiv03Bottom = nexacro.toNumber(this.Div03.top) + nexacro.toNumber(this.Div03.height);
        			this.Static138.set_top(nDiv03Bottom);
        		}else{
        			this.Static138.set_visible(false);
        		}
        		
        	}
        	this.resetScroll();
        }

        this.CheckBox04_onchanged = function(obj,e)
        {
        	if(e.postvalue == 1){		
        		
        		
        		
        		
        		if(this.Div00.visible){	
        			
        			var nDiv00Bottom = nexacro.toNumber(this.Div00.top) + nexacro.toNumber(this.Div00.height);
        			this.Div03.set_top(nDiv00Bottom+20);
        			this.Div03.set_visible(true);
        			var nDiv03Bottom = nexacro.toNumber(this.Div03.top) + nexacro.toNumber(this.Div03.height);
        			this.Static138.set_top(nDiv03Bottom);
        		}else{
        			this.Div03.set_top(nBasicBottom+20);
        			this.Div03.set_visible(true);
        			var nDiv03Bottom = nexacro.toNumber(this.Div03.top) + nexacro.toNumber(this.Div03.height);
        			//맨밑 Static (* 업무시간외 회원가입시 익일 업무처리가 됩니다.)
        			this.Static138.set_top(nDiv03Bottom);
        			this.Static138.set_visible(true);
        		}
        		
        		
        	}else{
        		this.Div03.set_visible(false);
        		
        		if(this.Div00.visible){	
        			var nDiv00Bottom = nexacro.toNumber(this.Div00.top) + nexacro.toNumber(this.Div00.height);
        			this.Static138.set_top(nDiv00Bottom);
        		}else{
        			this.Static138.set_visible(false);
        		}
        		
        	}
        	this.resetScroll();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.pattern_01_onload, this);
            this.CheckBox03.addEventHandler("onchanged", this.CheckBox03_onchanged, this);
            this.CheckBox04.addEventHandler("onchanged", this.CheckBox04_onchanged, this);

        };

        this.loadIncludeScript("createAccount.xfdl", true);

       
    };
}
)();
