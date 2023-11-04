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
                this.set_titletext("Master Detail(1:n)");
                this._setFormPosition(0,0,803,490);
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
            obj = new Div("Div00", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "115", "21", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("사용자 조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Radio("Radio01", "absolute", "130", "10", "157", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Div00.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용자ID</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용자명</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Edit("Edit00", "absolute", "282", "10", "151", "21", null, null, this.Div00);
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("129");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "109", "86", null, "29", "0", null, this.Div02);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "42", "110", "45", null, null, this.Div02);
            obj.set_taborder("0");
            obj.set_text("회원ID\r\n[7~9자리]");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "109", "42", null, "45", "0", null, this.Div02);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "86", "110", "29", null, null, this.Div02);
            obj.set_taborder("2");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "114", "110", "45", null, null, this.Div02);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "383", "86", "110", "29", null, null, this.Div02);
            obj.set_taborder("4");
            obj.set_text("실명인증여부");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "0", "158", "110", "29", null, null, this.Div02);
            obj.set_taborder("5");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "186", "110", "29", null, null, this.Div02);
            obj.set_taborder("6");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "0", "214", "110", "29", null, null, this.Div02);
            obj.set_taborder("7");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "0", "242", "110", "45", null, null, this.Div02);
            obj.set_taborder("8");
            obj.set_text("사업장 [회원\r\n가입사업장]");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "109", "242", null, "45", "0", null, this.Div02);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "109", "114", null, "45", "0", null, this.Div02);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "109", "158", null, "29", "0", null, this.Div02);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "109", "186", null, "29", "0", null, this.Div02);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "109", "214", null, "29", "0", null, this.Div02);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "383", "114", "110", "45", null, null, this.Div02);
            obj.set_taborder("14");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "383", "186", "110", "29", null, null, this.Div02);
            obj.set_taborder("15");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static35", "absolute", "383", "214", "110", "29", null, null, this.Div02);
            obj.set_taborder("16");
            obj.set_text("SMS수신");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "383", "242", "110", "45", null, null, this.Div02);
            obj.set_taborder("17");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "113", "254", "267", "21", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj = new Edit("Edit00", "absolute", "496", "254", "288", "21", null, null, this.Div02);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Radio("Radio01", "absolute", "500", "218", "127", "21", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Div02.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">수신</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미수신</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Edit("Edit02", "absolute", "113", "54", "163", "21", null, null, this.Div02);
            obj.set_taborder("22");
            obj.set_cssclass("WF_Essential");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", "279", "54", "65", "21", null, null, this.Div02);
            obj.set_taborder("23");
            obj.set_text("중복확인");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static38", "absolute", "348", "54", "128", "21", null, null, this.Div02);
            obj.set_taborder("24");
            obj.set_text("(첫2자 영문,영숫조합)");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "113", "126", "163", "21", null, null, this.Div02);
            obj.set_taborder("25");
            obj.set_cssclass("WF_Essential");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", "279", "126", "101", "21", null, null, this.Div02);
            obj.set_taborder("26");
            obj.set_text("사용자그룹설정");
            this.Div02.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "117", "86", "124", "29", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Div02.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("27");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Button("Button10", "absolute", "496", "126", "53", "21", null, null, this.Div02);
            obj.set_taborder("28");
            obj.set_text("초기화");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static39", "absolute", "553", "114", "217", "45", null, null, this.Div02);
            obj.set_taborder("29");
            obj.set_text("(회원가입사업장 거래코드 뒤 7자리로\r\n초기화 됩니다.)");
            this.Div02.addChild(obj.name, obj);
            obj = new Radio("Radio02", "absolute", "500", "86", "124", "29", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            var Radio02_innerdataset = new Dataset("Radio02_innerdataset", this.Div02.Radio02);
            Radio02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(Radio02_innerdataset);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("Static40", "absolute", "110", "87", "7", "28", null, null, this.Div02);
            obj.set_taborder("31");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "267", "162", "170", "21", null, null, this.Div02);
            obj.set_taborder("33");
            obj.set_enable("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit06", "absolute", "440", "162", "344", "21", null, null, this.Div02);
            obj.set_taborder("35");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "301", "81", null, "5", "351", null, this.Div02);
            obj.set_taborder("36");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div02.addChild(obj.name, obj);
            obj = new Combo("Combo08", "absolute", "496", "190", "51", "21", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            var Combo08_innerdataset = new Dataset("Combo08_innerdataset", this.Div02.Combo08);
            Combo08_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(Combo08_innerdataset);
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Static("Static17", "absolute", "608", "190", "9", "21", null, null, this.Div02);
            obj.set_taborder("38");
            obj.set_text("-");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "549", "190", "9", "21", null, null, this.Div02);
            obj.set_taborder("39");
            obj.set_text("-");
            this.Div02.addChild(obj.name, obj);
            obj = new Combo("Combo03", "absolute", "113", "190", "51", "21", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            var Combo03_innerdataset = new Dataset("Combo03_innerdataset", this.Div02.Combo03);
            Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(Combo03_innerdataset);
            obj.set_taborder("42");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Static("Static31", "absolute", "225", "190", "9", "21", null, null, this.Div02);
            obj.set_taborder("43");
            obj.set_text("-");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "166", "190", "9", "21", null, null, this.Div02);
            obj.set_taborder("44");
            obj.set_text("-");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", null, "16", "95", "21", "67", null, this.Div02);
            obj.set_taborder("47");
            obj.set_text("정보추가/수정");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", null, "16", "65", "21", "0", null, this.Div02);
            obj.set_taborder("48");
            obj.set_text("정보삭제");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button04", "absolute", null, "302", "53", "21", "0", null, this.Div02);
            obj.set_taborder("50");
            obj.set_text("행삭제");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button03", "absolute", null, "302", "53", "21", "55", null, this.Div02);
            obj.set_taborder("51");
            obj.set_text("행추가");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static41", "absolute", null, "302", "114", "21", "111", null, this.Div02);
            obj.set_taborder("52");
            obj.set_text("[처리대상건수 <fc v='#0084ab'><b v='true'>0</b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_GridCount");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "328", null, null, "0", "0", this.Div02);
            obj.set_taborder("53");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"136\"/><Column size=\"80\"/><Column size=\"139\"/><Column size=\"145\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"경제통합 공급처모드\"/><Cell col=\"2\" text=\"적용일자\"/><Cell col=\"3\" text=\"경제통합 상품코드\"/><Cell col=\"4\" text=\"경제통합 사업장코드\"/><Cell col=\"5\" text=\"발주일자\"/><Cell col=\"6\" text=\"발주전표번호\"/><Cell col=\"7\" text=\"발주상세 일련번호\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "113", "218", "267", "21", null, null, this.Div02);
            obj.set_taborder("21");
            this.Div02.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit00", "absolute", "175", "190", "48", "21", null, null, this.Div02);
            obj.set_taborder("54");
            this.Div02.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit01", "absolute", "234", "190", "48", "21", null, null, this.Div02);
            obj.set_taborder("55");
            this.Div02.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit02", "absolute", "617", "190", "48", "21", null, null, this.Div02);
            obj.set_taborder("56");
            this.Div02.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit03", "absolute", "558", "190", "48", "21", null, null, this.Div02);
            obj.set_taborder("57");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "493", "84", "7", "28", null, null, this.Div02);
            obj.set_taborder("59");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static142", "absolute", "173", "162", "9", "21", null, null, this.Div02);
            obj.set_taborder("60");
            obj.set_text("-");
            this.Div02.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit12", "absolute", "113", "162", "58", "21", null, null, this.Div02);
            obj.set_taborder("61");
            obj.set_value("123");
            obj.set_enable("false");
            this.Div02.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit13", "absolute", "182", "162", "58", "21", null, null, this.Div02);
            obj.set_taborder("62");
            obj.set_value("456");
            obj.set_enable("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button06", "absolute", "243", "162", "21", "21", null, null, this.Div02);
            obj.set_taborder("63");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button07", "absolute", "46.07%", "0", "62", "12", null, null, this.Div02);
            obj.set_taborder("64");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "310", "30", "95", "10", null, null, this);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("105");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "310", "61", "95", "10", null, null, this);
            obj.set_taborder("106");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "-18", "15", "490", null, null, this);
            obj.set_taborder("107");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "92.53%", "21", null, "8", "1.87%", null, this);
            obj.set_taborder("108");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "92.53%", "72", null, "15", "1.87%", null, this);
            obj.set_taborder("111");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0.12%", "30", null, "41", "98.01%", null, this);
            obj.set_taborder("115");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "92.53%", "358", null, "15", "1.87%", null, this);
            obj.set_taborder("114");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "92.53%", "394", null, "5", "1.87%", null, this);
            obj.set_taborder("113");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", null, "0", "53", "21", "161", null, this);
            obj.set_taborder("130");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", null, "0", "67", "21", "489", null, this);
            obj.set_taborder("131");
            obj.set_text("권한사업장");
            obj.set_cssclass("sta_WF_MiniTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("132");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("133");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("134");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", null, "0", "18", "21", "222", null, this);
            obj.set_taborder("135");
            obj.set_text("CheckBox00");
            obj.set_cssclass("chk_WF_allSlct");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, "5", "5", "11", "215", null, this);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_Vdash");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", null, "0", "244", "21", "245", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("138");
            obj.set_value("0");
            obj.set_text("(주)도루코하나로상사[29001038000010]");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_displayrowcount("5");
            obj.set_cssclass("WF_Essential");
            obj.set_index("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("129");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("Master Detail(1:n)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("pattern_04.xfdl");
        this.loadPreloadList();
       
    };
}
)();
