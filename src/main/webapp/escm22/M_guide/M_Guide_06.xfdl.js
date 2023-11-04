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
                this.set_name("Guide_08");
                this.set_classname("Guide_01");
                this.set_titletext("Mobile_Detail Data Area");
                this._setFormPosition(0,0,1008,2506);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_radio", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">전체검사 신청서</Col></Row><Row><Col id=\"Column0\">완료검사 신청서</Col></Row><Row><Col id=\"Column0\">미완료검사 신청서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static04", "absolute", "15", "870", "195", "64", null, null, this);
            obj.getSetter("taborder").set("345");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "15", "744", "195", "64", null, null, this);
            obj.getSetter("taborder").set("94");
            obj.set_text("가나");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "15", "807", "195", "64", null, null, this);
            obj.getSetter("taborder").set("103");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "15", "1336", "225", "21", null, null, this);
            obj.getSetter("taborder").set("40");
            obj.set_text("Output type");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "210", "744", "345", "64", null, null, this);
            obj.getSetter("taborder").set("95");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "214", "749", "326", "54", null, null, this);
            obj.set_taborder("98");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", null, "30", "0", null, this);
            obj.getSetter("taborder").set("102");
            obj.set_text("Detail Data Area");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "210", "807", "345", "64", null, null, this);
            obj.getSetter("taborder").set("104");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "214", "812", "326", "54", null, null, this);
            obj.set_taborder("105");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "15", "69", "915", "75", null, null, this);
            obj.getSetter("taborder").set("176");
            obj.set_text("- Input Area에 들어가는 Label Component와 입력 Component는 한 조합으로 쓰이고 둘의  heigt값은 54px로 고정이나 width는 가변적임.\r\n- Label Component Width 는 4글자 기준 최소 w133으로부터 한 글자씩 늘어날 때마다 20px이 들어남. (1글자~3글자까지 w133)\r\n- 입력컴포넌트의 경우 Position Right 15px로 고정.\r\n- 여러 줄 일 때 Label Componenet 최대 글자 수 넓이를 기준으로 정렬.");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static206", "absolute", "15", "1559", "225", "21", null, null, this);
            obj.getSetter("taborder").set("297");
            obj.set_text("Data pattern");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "32", "1454", "172", "18", null, null, this);
            obj.getSetter("taborder").set("318");
            obj.set_text("class : <b v='true'>sta_WF_Label</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "352", "1454", "177", "18", null, null, this);
            obj.getSetter("taborder").set("319");
            obj.set_text("class : <b v='true'>sta_WF_LabelBg</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static226", "absolute", "0%", "1524", null, "1", "0%", null, this);
            obj.getSetter("taborder").set("326");
            obj.set_cssclass("sta_GID_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "15", "46", "225", "21", null, null, this);
            obj.getSetter("taborder").set("344");
            obj.set_text("Input type");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "210", "870", "345", "64", null, null, this);
            obj.getSetter("taborder").set("347");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "214", "875", "326", "54", null, null, this);
            obj.set_taborder("348");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "698", "109", "540", "54", null, null, this);
            obj.getSetter("taborder").set("349");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "15", "1014", "128", "64", null, null, this);
            obj.getSetter("taborder").set("350");
            obj.set_text("가나다라\r\n마바사");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "143", "1014", "412", "64", null, null, this);
            obj.getSetter("taborder").set("351");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "147", "1019", "393", "54", null, null, this);
            obj.set_taborder("352");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "15", "1158", "128", "122", null, null, this);
            obj.getSetter("taborder").set("353");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "143", "1158", "412", "122", null, null, this);
            obj.getSetter("taborder").set("354");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "147", "1163", "393", "54", null, null, this);
            obj.set_taborder("355");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "147", "1221", "393", "54", null, null, this);
            obj.set_taborder("356");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "15", "1372", "128", "64", null, null, this);
            obj.getSetter("taborder").set("357");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "143", "1372", "412", "64", null, null, this);
            obj.getSetter("taborder").set("358");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("농협하나로유통");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "228", "133", "64", null, null, this);
            obj.getSetter("taborder").set("359");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "148", "228", "407", "64", null, null, this);
            obj.getSetter("taborder").set("360");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "152", "233", "388", "54", null, null, this);
            obj.set_taborder("361");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "15", "352", "153", "64", null, null, this);
            obj.getSetter("taborder").set("362");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "168", "352", "387", "64", null, null, this);
            obj.getSetter("taborder").set("363");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07", "absolute", "172", "357", "368", "54", null, null, this);
            obj.set_taborder("364");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "15", "476", "173", "64", null, null, this);
            obj.getSetter("taborder").set("365");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "188", "476", "367", "64", null, null, this);
            obj.getSetter("taborder").set("366");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08", "absolute", "192", "481", "348", "54", null, null, this);
            obj.set_taborder("367");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "208", "600", "347", "64", null, null, this);
            obj.getSetter("taborder").set("369");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09", "absolute", "212", "605", "328", "54", null, null, this);
            obj.set_taborder("370");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "15", "600", "193", "64", null, null, this);
            obj.getSetter("taborder").set("368");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "15", "1857", "368", "54", null, null, this);
            obj.set_taborder("374");
            obj.set_value("100000");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "571", "1698", "368", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("378");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("Calendar01", "absolute", "571", "1857", "174", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("379");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("Calendar02", "absolute", "766", "1857", "174", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("380");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static09", "absolute", "746", "1857", "20", "54", null, null, this);
            obj.getSetter("taborder").set("381");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "196", "2020", "15", "54", null, null, this);
            obj.getSetter("taborder").set("384");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "571", "2020", "368", "54", null, null, this);
            obj.set_taborder("387");
            obj.set_value("123456011111111");
            obj.set_mask("######-##-#######");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "15", "1698", "100", "54", null, null, this);
            obj.set_taborder("388");
            obj.set_displaynulltext("010");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "122", "1698", "127", "54", null, null, this);
            obj.set_taborder("389");
            obj.set_displaynulltext("1234");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "256", "1698", "127", "54", null, null, this);
            obj.set_taborder("390");
            obj.set_displaynulltext("1234");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05", "absolute", "15", "2020", "174", "54", null, null, this);
            obj.set_taborder("391");
            obj.set_displaynulltext("123456");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit06", "absolute", "210", "2020", "174", "54", null, null, this);
            obj.set_taborder("392");
            obj.set_displaynulltext("1234567");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10", "absolute", "15", "2194", "310", "54", null, null, this);
            obj.set_taborder("393");
            this.addChild(obj.name, obj);

            obj = new Button("Button67", "absolute", "329", "2194", "54", "54", null, null, this);
            obj.set_taborder("394");
            obj.set_cssclass("btn_WF_SearchBtn");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07", "absolute", "571", "2194", "368", "54", null, null, this);
            obj.set_taborder("395");
            obj.set_mask("##:##");
            obj.set_value("4482");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit08", "absolute", "15", "2370", "145", "54", null, null, this);
            obj.set_taborder("396");
            obj.set_displaynulltext("145");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit09", "absolute", "181", "2370", "145", "54", null, null, this);
            obj.set_taborder("397");
            obj.set_displaynulltext("145");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "167", "2370", "17", "54", null, null, this);
            obj.getSetter("taborder").set("398");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "330", "2370", "54", "54", null, null, this);
            obj.set_taborder("399");
            obj.set_cssclass("btn_WF_SearchBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "15", "1673", "120", "21", null, null, this);
            obj.getSetter("taborder").set("400");
            obj.set_text("→ 전화번호");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "15", "1831", "191", "21", null, null, this);
            obj.getSetter("taborder").set("401");
            obj.set_text("→ 집계치, 금액등의 숫자");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "15", "1995", "191", "21", null, null, this);
            obj.getSetter("taborder").set("402");
            obj.set_text("→ 주민번호");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "15", "2168", "191", "21", null, null, this);
            obj.getSetter("taborder").set("403");
            obj.set_text("→ 검색");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "15", "2344", "191", "21", null, null, this);
            obj.getSetter("taborder").set("404");
            obj.set_text("→ 우편번호");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "571", "1673", "120", "21", null, null, this);
            obj.getSetter("taborder").set("405");
            obj.set_text("→ 날짜1");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "571", "1831", "120", "21", null, null, this);
            obj.getSetter("taborder").set("406");
            obj.set_text("→ 날짜2");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "571", "1995", "120", "21", null, null, this);
            obj.getSetter("taborder").set("407");
            obj.set_text("→ 계좌/신용카드번호");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "571", "2168", "120", "21", null, null, this);
            obj.getSetter("taborder").set("408");
            obj.set_text("→ 시간");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "15", "1132", "191", "21", null, null, this);
            obj.getSetter("taborder").set("409");
            obj.set_text("→ 입력컴퍼넌트가 두줄일 때");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "15", "988", "191", "21", null, null, this);
            obj.getSetter("taborder").set("410");
            obj.set_text("→ 라벨글자수가 8글자 이상일 때");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "15", "718", "212", "21", null, null, this);
            obj.getSetter("taborder").set("411");
            obj.set_text("→ 라벨글자수가 다른 여러 줄 일때");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "143", "1401", "1", "10", null, null, this);
            obj.getSetter("taborder").set("412");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "157", "1401", "1", "10", null, null, this);
            obj.getSetter("taborder").set("413");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "143", "1405", "15", "1", null, null, this);
            obj.getSetter("taborder").set("414");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "143", "1381", "21", "17", null, null, this);
            obj.getSetter("taborder").set("415");
            obj.set_text("15");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "79", "1428", "1", "31", null, null, this);
            obj.getSetter("taborder").set("416");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "412", "1428", "1", "31", null, null, this);
            obj.getSetter("taborder").set("417");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "564", "228", "1", "64", null, null, this);
            obj.getSetter("taborder").set("418");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "559", "228", "10", "1", null, null, this);
            obj.getSetter("taborder").set("419");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "560", "291", "10", "1", null, null, this);
            obj.getSetter("taborder").set("420");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "15", "299", "133", "1", null, null, this);
            obj.getSetter("taborder").set("421");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "147", "294", "1", "10", null, null, this);
            obj.getSetter("taborder").set("422");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "15", "295", "1", "10", null, null, this);
            obj.getSetter("taborder").set("423");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "15", "422", "153", "1", null, null, this);
            obj.getSetter("taborder").set("424");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "167", "417", "1", "10", null, null, this);
            obj.getSetter("taborder").set("425");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "15", "418", "1", "10", null, null, this);
            obj.getSetter("taborder").set("426");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "15", "547", "173", "1", null, null, this);
            obj.getSetter("taborder").set("427");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "187", "542", "1", "10", null, null, this);
            obj.getSetter("taborder").set("428");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "15", "543", "1", "10", null, null, this);
            obj.getSetter("taborder").set("429");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "15", "670", "193", "1", null, null, this);
            obj.getSetter("taborder").set("430");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "207", "665", "1", "10", null, null, this);
            obj.getSetter("taborder").set("431");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "15", "666", "1", "10", null, null, this);
            obj.getSetter("taborder").set("432");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "540", "396", "1", "10", null, null, this);
            obj.getSetter("taborder").set("433");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "554", "396", "1", "10", null, null, this);
            obj.getSetter("taborder").set("434");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "540", "400", "15", "1", null, null, this);
            obj.getSetter("taborder").set("435");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "540", "376", "21", "17", null, null, this);
            obj.getSetter("taborder").set("436");
            obj.set_text("15");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "571", "252", "21", "17", null, null, this);
            obj.getSetter("taborder").set("437");
            obj.set_text("64");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "68", "300", "27", "17", null, null, this);
            obj.getSetter("taborder").set("438");
            obj.set_text("133");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "78", "423", "27", "17", null, null, this);
            obj.getSetter("taborder").set("440");
            obj.set_text("153");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "88", "548", "27", "17", null, null, this);
            obj.getSetter("taborder").set("441");
            obj.set_text("173");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "98", "671", "27", "17", null, null, this);
            obj.getSetter("taborder").set("442");
            obj.set_text("193");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "122", "219", "432", "1", null, null, this);
            obj.getSetter("taborder").set("445");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "554", "214", "1", "10", null, null, this);
            obj.getSetter("taborder").set("446");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "147", "215", "1", "10", null, null, this);
            obj.getSetter("taborder").set("447");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "333", "200", "27", "17", null, null, this);
            obj.getSetter("taborder").set("448");
            obj.set_text("387");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "121", "215", "1", "10", null, null, this);
            obj.getSetter("taborder").set("449");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "105", "180", "138", "21", null, null, this);
            obj.getSetter("taborder").set("451");
            obj.set_text("right padding : 25px");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", "136", "198", "1", "22", null, null, this);
            obj.getSetter("taborder").set("452");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "488", "305", "177", "18", null, null, this);
            obj.getSetter("taborder").set("453");
            obj.set_text("class : <b v='true'>sta_WF_LabelBg</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", "548", "284", "1", "25", null, null, this);
            obj.getSetter("taborder").set("454");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "117", "305", "172", "18", null, null, this);
            obj.getSetter("taborder").set("455");
            obj.set_text("class : <b v='true'>sta_WF_Label</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "132", "284", "1", "25", null, null, this);
            obj.getSetter("taborder").set("456");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "563", "1159", "1", "121", null, null, this);
            obj.getSetter("taborder").set("457");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "558", "1158", "10", "1", null, null, this);
            obj.getSetter("taborder").set("458");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "559", "1279", "10", "1", null, null, this);
            obj.getSetter("taborder").set("459");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "570", "1210", "24", "17", null, null, this);
            obj.getSetter("taborder").set("460");
            obj.set_text("122");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "519", "1217", "21", "4", null, null, this);
            obj.getSetter("taborder").set("463");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "543", "1209", "15", "17", null, null, this);
            obj.getSetter("taborder").set("464");
            obj.set_text("4");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "143", "1159", "21", "4", null, null, this);
            obj.getSetter("taborder").set("465");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "167", "1151", "15", "17", null, null, this);
            obj.getSetter("taborder").set("466");
            obj.set_text("4");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static96", "absolute", "143", "1275", "21", "4", null, null, this);
            obj.getSetter("taborder").set("467");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static97", "absolute", "167", "1267", "15", "17", null, null, this);
            obj.getSetter("taborder").set("468");
            obj.set_text("4");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", "143", "1207", "4", "21", null, null, this);
            obj.getSetter("taborder").set("469");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", "141", "1227", "14", "17", null, null, this);
            obj.getSetter("taborder").set("470");
            obj.set_text("4");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "15", "1581", "555", "47", null, null, this);
            obj.getSetter("taborder").set("471");
            obj.set_text("- 각 Component의  height값은 54px로 고정이나 width는 가변적임. \r\n- 화면 폭에 꼭 맞게 맞추되 가변적인 Width는 맨 앞 Component로 조정 한다.");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static100", "absolute", "15", "1761", "368", "1", null, null, this);
            obj.getSetter("taborder").set("472");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static101", "absolute", "382", "1757", "1", "10", null, null, this);
            obj.getSetter("taborder").set("473");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static102", "absolute", "15", "1757", "1", "10", null, null, this);
            obj.getSetter("taborder").set("474");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static103", "absolute", "172", "1762", "27", "17", null, null, this);
            obj.getSetter("taborder").set("475");
            obj.set_text("127");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static104", "absolute", "306", "1762", "27", "17", null, null, this);
            obj.getSetter("taborder").set("476");
            obj.set_text("127");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static105", "absolute", "114", "1757", "1", "10", null, null, this);
            obj.getSetter("taborder").set("477");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static106", "absolute", "122", "1757", "1", "10", null, null, this);
            obj.getSetter("taborder").set("478");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "248", "1757", "1", "10", null, null, this);
            obj.getSetter("taborder").set("479");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", "256", "1757", "1", "10", null, null, this);
            obj.getSetter("taborder").set("480");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static109", "absolute", "39", "1762", "53", "17", null, null, this);
            obj.getSetter("taborder").set("481");
            obj.set_text("100(±α)");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static110", "absolute", "571", "1757", "1", "10", null, null, this);
            obj.getSetter("taborder").set("482");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static111", "absolute", "938", "1757", "1", "10", null, null, this);
            obj.getSetter("taborder").set("483");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static112", "absolute", "571", "1761", "368", "1", null, null, this);
            obj.getSetter("taborder").set("484");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static113", "absolute", "729", "1762", "53", "17", null, null, this);
            obj.getSetter("taborder").set("485");
            obj.set_text("368(±α)");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static114", "absolute", "15", "1916", "1", "10", null, null, this);
            obj.getSetter("taborder").set("486");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static116", "absolute", "382", "1916", "1", "10", null, null, this);
            obj.getSetter("taborder").set("487");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static117", "absolute", "15", "1920", "368", "1", null, null, this);
            obj.getSetter("taborder").set("488");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static118", "absolute", "172", "1921", "53", "17", null, null, this);
            obj.getSetter("taborder").set("489");
            obj.set_text("368(±α)");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static119", "absolute", "15", "2083", "368", "1", null, null, this);
            obj.getSetter("taborder").set("490");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static120", "absolute", "382", "2079", "1", "10", null, null, this);
            obj.getSetter("taborder").set("491");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static121", "absolute", "15", "2079", "1", "10", null, null, this);
            obj.getSetter("taborder").set("492");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static122", "absolute", "192", "2084", "23", "17", null, null, this);
            obj.getSetter("taborder").set("493");
            obj.set_text("20");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static123", "absolute", "284", "2084", "27", "17", null, null, this);
            obj.getSetter("taborder").set("494");
            obj.set_text("174");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static124", "absolute", "188", "2079", "1", "10", null, null, this);
            obj.getSetter("taborder").set("495");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static125", "absolute", "210", "2079", "1", "10", null, null, this);
            obj.getSetter("taborder").set("496");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static128", "absolute", "75", "2084", "53", "17", null, null, this);
            obj.getSetter("taborder").set("499");
            obj.set_text("174(±α)");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static126", "absolute", "571", "2079", "1", "10", null, null, this);
            obj.getSetter("taborder").set("500");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static127", "absolute", "938", "2079", "1", "10", null, null, this);
            obj.getSetter("taborder").set("501");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static129", "absolute", "571", "2083", "368", "1", null, null, this);
            obj.getSetter("taborder").set("502");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static130", "absolute", "729", "2084", "53", "17", null, null, this);
            obj.getSetter("taborder").set("503");
            obj.set_text("368(±α)");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static131", "absolute", "571", "2253", "1", "10", null, null, this);
            obj.getSetter("taborder").set("504");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static132", "absolute", "938", "2253", "1", "10", null, null, this);
            obj.getSetter("taborder").set("505");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static133", "absolute", "571", "2257", "368", "1", null, null, this);
            obj.getSetter("taborder").set("506");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static134", "absolute", "729", "2258", "53", "17", null, null, this);
            obj.getSetter("taborder").set("507");
            obj.set_text("368(±α)");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static135", "absolute", "15", "2257", "368", "1", null, null, this);
            obj.getSetter("taborder").set("508");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static136", "absolute", "382", "2253", "1", "10", null, null, this);
            obj.getSetter("taborder").set("509");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static137", "absolute", "15", "2253", "1", "10", null, null, this);
            obj.getSetter("taborder").set("510");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static138", "absolute", "325", "2172", "13", "17", null, null, this);
            obj.getSetter("taborder").set("511");
            obj.set_text("4");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static139", "absolute", "345", "2258", "22", "17", null, null, this);
            obj.getSetter("taborder").set("512");
            obj.set_text("54");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static140", "absolute", "325", "2194", "4", "25", null, null, this);
            obj.getSetter("taborder").set("513");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static142", "absolute", "143", "2258", "53", "17", null, null, this);
            obj.getSetter("taborder").set("515");
            obj.set_text("310(±α)");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static141", "absolute", "329", "2253", "1", "10", null, null, this);
            obj.getSetter("taborder").set("516");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static143", "absolute", "15", "2433", "368", "1", null, null, this);
            obj.getSetter("taborder").set("517");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static144", "absolute", "382", "2429", "1", "10", null, null, this);
            obj.getSetter("taborder").set("518");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static145", "absolute", "15", "2429", "1", "10", null, null, this);
            obj.getSetter("taborder").set("519");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static146", "absolute", "163", "2434", "22", "17", null, null, this);
            obj.getSetter("taborder").set("520");
            obj.set_text("20");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static147", "absolute", "240", "2434", "27", "17", null, null, this);
            obj.getSetter("taborder").set("521");
            obj.set_text("145");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static148", "absolute", "159", "2429", "1", "10", null, null, this);
            obj.getSetter("taborder").set("522");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static149", "absolute", "181", "2429", "1", "10", null, null, this);
            obj.getSetter("taborder").set("523");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static150", "absolute", "61", "2434", "53", "17", null, null, this);
            obj.getSetter("taborder").set("524");
            obj.set_text("145(±α)");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static151", "absolute", "330", "2429", "1", "10", null, null, this);
            obj.getSetter("taborder").set("525");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static152", "absolute", "345", "2434", "22", "17", null, null, this);
            obj.getSetter("taborder").set("526");
            obj.set_text("54");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static153", "absolute", "571", "1920", "368", "1", null, null, this);
            obj.getSetter("taborder").set("527");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static154", "absolute", "938", "1916", "1", "10", null, null, this);
            obj.getSetter("taborder").set("528");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static155", "absolute", "571", "1916", "1", "10", null, null, this);
            obj.getSetter("taborder").set("529");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static156", "absolute", "748", "1921", "23", "17", null, null, this);
            obj.getSetter("taborder").set("530");
            obj.set_text("20");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static157", "absolute", "840", "1921", "27", "17", null, null, this);
            obj.getSetter("taborder").set("531");
            obj.set_text("174");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static158", "absolute", "744", "1916", "1", "10", null, null, this);
            obj.getSetter("taborder").set("532");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static159", "absolute", "766", "1916", "1", "10", null, null, this);
            obj.getSetter("taborder").set("533");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static160", "absolute", "631", "1921", "53", "17", null, null, this);
            obj.getSetter("taborder").set("534");
            obj.set_text("174(±α)");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "593", "203", "269", "21", null, null, this);
            obj.getSetter("taborder").set("535");
            obj.set_text("한글자 늘어날 때마다 라벨 width값 <fc v='red'>+20</fc> 늘어남 ");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "114", "1766", "19", "17", null, null, this);
            obj.getSetter("taborder").set("536");
            obj.set_text("7");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "250", "1766", "15", "17", null, null, this);
            obj.getSetter("taborder").set("537");
            obj.set_text("7");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1008, 2506, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Guide_01");
            		p.set_titletext("Mobile_Detail Data Area");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("M_Guide_06.xfdl", function() {
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

        this.Div02_Static03_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("M_Guide_06.xfdl");

       
    };
}
)();
