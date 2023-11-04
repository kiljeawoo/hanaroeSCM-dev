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
                this.set_name("OMG_DS_SC_6512");
                this.set_titletext("응대내역등록");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_hpNo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"30\" value=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_adminInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_qstClc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"30\" value=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_qstIns", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RC_SQNO\" type=\"STRING\" size=\"18\"/><Column id=\"PRC_STSC\" type=\"STRING\" size=\"2\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"9\"/><Column id=\"QSTRNM\" type=\"STRING\" size=\"50\"/><Column id=\"HP\" type=\"STRING\" size=\"3\"/><Column id=\"HP01\" type=\"STRING\" size=\"4\"/><Column id=\"HP02\" type=\"STRING\" size=\"4\"/><Column id=\"HP02\" type=\"STRING\" size=\"4\"/><Column id=\"QST_CNTN\" type=\"STRING\" size=\"2000\"/><Column id=\"ACT_CNTN\" type=\"STRING\" size=\"2000\"/><Column id=\"QST_CLC\" type=\"STRING\" size=\"50\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_qstLst", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RC_SQNO\" type=\"STRING\" size=\"18\"/><Column id=\"PRC_STSC\" type=\"STRING\" size=\"2\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"9\"/><Column id=\"QSTRNM\" type=\"STRING\" size=\"50\"/><Column id=\"HP\" type=\"STRING\" size=\"3\"/><Column id=\"HP01\" type=\"STRING\" size=\"4\"/><Column id=\"HP02\" type=\"STRING\" size=\"4\"/><Column id=\"QSTR_TELNO\" type=\"STRING\" size=\"14\"/><Column id=\"QST_CNTN\" type=\"STRING\" size=\"2000\"/><Column id=\"ACT_CNTN\" type=\"STRING\" size=\"2000\"/><Column id=\"QST_CLC\" type=\"STRING\" size=\"50\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"9\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"9\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"20\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_status", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">02</Col><Col id=\"DATA\">처리중</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"DATA\">완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static10", "absolute", "1.49%", "206", null, "29", "1.87%", null, this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1.25%", "206", null, "29", "91.55%", null, this);
            obj.set_taborder("47");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static101", "absolute", "1.49%", "58", null, "29", "1.87%", null, this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1.49%", "86", null, "58", "1.87%", null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "1.49%", "30", null, "29", "1.87%", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "98.13%", "1", "15", "1195", null, null, this);
            obj.set_taborder("1");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "92.78%", "5", null, "21", "1.87%", null, this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "0.25%", "184", null, "20", "1.87%", null, this);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "3.11%", "517", null, "20", "-29.64%", null, this);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "2.86%", "697", null, "20", "-24.53%", null, this);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "80.57%", "5", null, "21", "14.07%", null, this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "1.49%", "9", null, "21", "84.81%", null, this);
            obj.set_taborder("13");
            obj.set_text("응대기록");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "1.37%", "30", null, "29", "84.81%", null, this);
            obj.set_taborder("14");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_NA_TRPL_C", "absolute", "16.31%", "34", null, "21", "55.67%", null, this);
            obj.set_taborder("15");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("200");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.37%", "86", null, "58", "84.81%", null, this);
            obj.set_taborder("18");
            obj.set_text("문의내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1.49%", "143", null, "42", "1.87%", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "1.37%", "143", null, "42", "84.81%", null, this);
            obj.set_taborder("23");
            obj.set_text("조치분류");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "1.37%", "58", null, "29", "84.81%", null, this);
            obj.set_taborder("34");
            obj.set_text("문의자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_USR_NM", "absolute", "16.31%", "62", null, "21", "55.67%", null, this);
            obj.set_taborder("35");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "50.19%", "58", null, "29", "35.99%", null, this);
            obj.set_taborder("37");
            obj.set_text("문의자연락처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static125", "absolute", "72.48%", "62", "10", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static126", "absolute", "80.7%", "62", "9", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HP02", "absolute", "81.57%", "62", null, "21", "11.46%", null, this);
            obj.set_taborder("42");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_HP", "absolute", "65.13%", "62", null, "21", "27.65%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_readonly("false");
            obj.set_innerdataset("ds_hpNo");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Edit("edt_HP01", "absolute", "73.6%", "62", null, "21", "19.43%", null, this);
            obj.set_taborder("39");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_from", "absolute", "8.97%", "210", null, "21", "78.58%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static07", "absolute", "21.54%", "210", "10", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_to", "absolute", "22.67%", "210", null, "21", "64.88%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Combo("cbo_spy_tpc01", "absolute", "72.6%", "210", null, "21", "18.68%", null, this);
            this.addChild(obj.name, obj);
            var cbo_spy_tpc01_innerdataset = new Dataset("cbo_spy_tpc01_innerdataset", this.cbo_spy_tpc01);
            cbo_spy_tpc01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">처리중</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">처리완료</Col></Row></Rows>");
            obj.set_innerdataset(cbo_spy_tpc01_innerdataset);
            obj.set_taborder("62");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_text("전체");
            obj.set_index("0");

            obj = new Combo("cbo_spy_tpc02", "absolute", "89.17%", "210", null, "21", "2.37%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("64");
            obj.set_codecolumn("MB_ID");
            obj.set_datacolumn("USR_NM");
            obj.set_displaynulltext("    --선택--");
            obj.set_innerdataset("@ds_adminInfo");

            obj = new Grid("grd_result", "absolute", "1.49%", "242", null, null, "1.87%", "8", this);
            obj.set_taborder("65");
            obj.set_binddataset("ds_qstLst");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"46\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"처리상태\"/><Cell col=\"2\" text=\"등록일자\"/><Cell col=\"3\" text=\"업체명\"/><Cell col=\"4\" text=\"문의자\"/><Cell col=\"5\" text=\"연락처\"/><Cell col=\"6\" text=\"문의내용\"/><Cell col=\"7\" text=\"조치내용\"/><Cell col=\"8\" text=\"응대등록\"/><Cell col=\"9\" text=\"응대완료\"/><Cell col=\"10\" text=\"완료일자\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:PRC_STSC\" combodataset=\"ds_status\" combocodecol=\"CODE\" combodatacol=\"DATA\" tooltiptext=\"bind:PRC_STSC\"/><Cell col=\"2\" displaytype=\"normal\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:FSRG_DTM\" mask=\"@@@@-@@-@@ @@:@@\" maskchar=\" \" tooltiptext=\"bind:FSRG_DTM\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:QSTRNM\" tooltiptext=\"bind:QSTRNM\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_AlignRight\" expr=\"bind:QSTR_TELNO\" tooltiptext=\"bind:QSTR_TELNO\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:QST_CNTN\" tooltiptext=\"bind:QST_CNTN\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ACT_CNTN\" tooltiptext=\"bind:ACT_CNTN\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:FS_RGM\" tooltiptext=\"bind:FS_RGM\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:LS_CHGM\" tooltiptext=\"bind:LS_CHGM\"/><Cell col=\"10\" text=\"bind:LSCHG_DTM\" mask=\"@@@@-@@-@@ @@:@@\" tooltiptext=\"bind:LSCHG_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0%", "1", null, "1195", "98.51%", null, this);
            obj.set_taborder("66");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "50.19%", "30", null, "29", "35.99%", null, this);
            obj.set_taborder("67");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CLNTNM", "absolute", "65.13%", "34", null, "21", "6.85%", null, this);
            obj.set_taborder("68");
            obj.set_maxlength("200");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_QST_CNTN", "absolute", "16.31%", "90", null, "50", "55.67%", null, this);
            obj.set_taborder("69");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "50.19%", "86", null, "58", "35.99%", null, this);
            obj.set_taborder("70");
            obj.set_text("조치내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_ACT_CNTN", "absolute", "65.13%", "90", null, "50", "6.85%", null, this);
            obj.set_taborder("71");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00", "absolute", "50.19%", "5", null, "21", "35.99%", null, this);
            obj.set_taborder("72");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_spy_tpc_s", "absolute", "65.13%", "5", null, "21", "21.3%", null, this);
            this.addChild(obj.name, obj);
            var cbo_spy_tpc_s_innerdataset = new Dataset("cbo_spy_tpc_s_innerdataset", this.cbo_spy_tpc_s);
            cbo_spy_tpc_s_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">처리중</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">처리완료</Col></Row></Rows>");
            obj.set_innerdataset(cbo_spy_tpc_s_innerdataset);
            obj.set_taborder("73");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("02");
            obj.set_text("처리중");
            obj.set_index("0");

            obj = new Edit("Edit_comnum", "absolute", "43.21%", "211", null, "21", "47.82%", null, this);
            obj.set_taborder("75");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_comname", "absolute", "52.43%", "211", null, "21", "38.11%", null, this);
            obj.set_taborder("76");
            this.addChild(obj.name, obj);

            obj = new Button("btn_comname", "absolute", "62.14%", "211", null, "21", "35.24%", null, this);
            obj.set_taborder("77");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "1.49%", "186", null, "21", "84.81%", null, this);
            obj.set_taborder("79");
            obj.set_text("응대내역");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", "86.67%", "5", null, "21", "7.97%", null, this);
            obj.set_taborder("80");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "35.62%", "206", null, "29", "57.16%", null, this);
            obj.set_taborder("81");
            obj.set_text("업체조회");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "65.13%", "206", null, "29", "27.65%", null, this);
            obj.set_taborder("82");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "81.69%", "206", null, "29", "11.08%", null, this);
            obj.set_taborder("83");
            obj.set_text("응대자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "86.05%", "21", null, "14", "8.47%", null, this);
            obj.set_taborder("84");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("응대내역등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divSearch.edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divSearch.cbo_menuLevel","value","ds_in","MENU_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divSearch.edt_menuName","value","ds_in","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divSearch.edt_svcGroup","value","ds_in","SVC_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divSearch.edt_fileName","value","ds_in","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divSearch.edt_fileType","value","ds_in","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divSearch.cbo_displayYn","value","ds_in","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divSearch.cbo_useYn","value","ds_in","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","cbo_spy_tpc01","value","ds_dataM","SPY_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","cbo_spy_tpc02","value","ds_dataM","SPY_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","cbo_spy_tpc_s","value","ds_qstIns","PRC_STSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edt_NA_TRPL_C","value","ds_qstIns","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_CLNTNM","value","ds_qstIns","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_USR_NM","value","ds_qstIns","QSTRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","cbo_HP","value","ds_qstIns","HP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_HP01","value","ds_qstIns","HP01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edt_HP02","value","ds_qstIns","HP02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","ta_QST_CNTN","value","ds_qstIns","QST_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","ta_ACT_CNTN","value","ds_qstIns","ACT_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6512.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6512.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {   
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	// 페이지 로딩후 실행부분   
        	/*초기값세팅*/
        	var param = [   		
         		{code:"HP"	,     dsName:"ds_hpNo", selecttype:"N"},
         		{code:"QST_CLC"	, dsName:"ds_qstClc", selecttype:"N"}
            ];

            this.gfn_setPortalCommonCode(param);
        	this.cbo_spy_tpc_s.set_index(0);
        	this.cbo_spy_tpc01.set_index(0);

        	var toDay = this.gfn_today("yyyyMMdd");
        	var fromDay = this.gfn_minusDate(toDay, 7);
        	this.cal_from.set_value(fromDay);
        	this.cal_to.set_value(toDay);

        	this.fn_retrieveAdminInfList();
        	this.grd_result.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        // gfn_setCommonCode, gfn_setPortalCommonCode처리 후 호출(CallBack)할 함수
        this.fn_commonAfterOnload = function()
        {
        //	조치분류에 대해 공통코드에 등록된 내역에 대해 동적 체크박스 생성
        //	trace("ds_qstClc:" + this.ds_qstClc.saveXML());
        	var	chkBoxId = "";
        	var	chkBoxName = "";
        	var	chkTrueVal = "";
        	var nLeft = 20;
        	var nTop = 0;
        	var objCheckBox;
        	var chkProp;

        	for(var i = 1; i < this.ds_qstClc.getRowCount(); i++)
        	{
         		chkBoxId = "chk_" + this.gfn_lpad(i, 2, '0');
        	//	trace("chkBoxId set:" + chkBoxId);
         		chkTrueVal = this.ds_qstClc.getColumn(i, "SIMP_C");
         		chkBoxName = this.ds_qstClc.getColumn(i, "SIMP_CNM");
         		     if (i%2 == 1) nTop = 145;
         		else if (i%2 == 0) nTop = 165;
         		objCheckBox = new CheckBox(chkBoxId, "absolute", nLeft + '%', nTop, 200, 20, null, null);
         		this.addChild(chkBoxId, objCheckBox); 
        		// Add Object to Parent Form
        		this.addChild(chkBoxId, objCheckBox);
        		// Insert Object to Parent Form
        		this.insertChild(1, chkBoxId, objCheckBox);
        		// Show Object
        		objCheckBox.show();

         		chkProp = eval("this." + chkBoxId);
        		chkProp.set_text(chkBoxName);
        		chkProp.set_truevalue(chkTrueVal);

        		if (i%2 == 0) nLeft = nLeft + 15;
        	}
        }
         
        /*응대자 조회*/
        this.fn_retrieveAdminInfList = function (){		
        	var sSvcID        = "retrieveAdminInfList";
        	var sURL          = "svc::rest/common/retrieveAdminInfList";		 
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_adminInfo=ds_adminInfo" ;	
        	var sArgument     =  "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*응대내역 조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	var fromDt			= this.cal_from.value;
        	var toDt			= this.cal_to.value;
        	var trplC			= this.gfn_nullToEmpty(this.Edit_comnum.value);
        	var clntNm			= this.gfn_nullToEmpty(this.Edit_comname.value);
        	var rslt			= "";
        	if(this.cbo_spy_tpc01.value != "00") rslt = this.cbo_spy_tpc01.value;
        	var resp			= "";
        	if(this.cbo_spy_tpc02.value != "0") resp = this.cbo_spy_tpc02.value;
        	var sParams			=  "FROM_DT="	+ fromDt
        						+ " TO_DT="		+ toDt
        						+ " TRPL_C="	+ trplC
        						+ " CLNTNM="	+ clntNm
        						+ " RSLT="		+ rslt
        						+ " RESP="		+ resp
        						;
        //	trace("sParams:" + sParams);
        	this.fn_search(sParams);
        }
         
        /*조회-서비스 Call*/ 
        this.fn_search = function(sParams)
        {
        	var sSvcID			= "retrieveRspBrkList";
        	var sURL			= "svc::rest/mg/mbcslt/retrieveRspBrkList";
        	var sInDatasets		= "";
        	var sOutDatasets	= "ds_qstLst=ds_qstLst";
        	var sArgument		= sParams;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	var fromDt			= this.cal_from.value;
        	var toDt			= this.cal_to.value;
        	var trplC			= this.gfn_nullToEmpty(this.Edit_comnum.value);
        	var clntNm			= this.gfn_nullToEmpty(this.Edit_comname.value);
        	var rslt			= "";
        	if(this.cbo_spy_tpc01.value != "00") rslt = this.cbo_spy_tpc01.value;
        	var resp			= "";
        	if(this.cbo_spy_tpc02.value != "0") resp = this.cbo_spy_tpc02.value;
        	var sParams			=  "FROM_DT="	+ fromDt
        						+ "&TO_DT="		+ toDt
        						+ "&TRPL_C="	+ trplC
        						+ "&CLNTNM="	+ clntNm
        						+ "&RSLT="		+ rslt
        						+ "&RESP="		+ resp
        						;

        	this.fn_excel(sParams);
        }

        this.fn_excel = function(sParams)
        {
        	trace("엑셀 다운로드 params >>> " + sParams);
        	this.web_downExcel.set_url(application.gv_serverAdmin_url + "rest/excel/mg/mbcslt/downloadExcelRspBrkList?" + sParams);
        }

        /*저장*/
        this.btn_save_onclick = function(obj,e)
        {
        	/*validation 체크*/
        	var	chkBoxId = "";
        	var chkProp;
        	var clcString = "";
        	// 조치분류 체크값에 대해 QST_CLC에 담아 서버로 보낸다
        	for(var i = 1; i < this.ds_qstClc.getRowCount(); i++)
        	{
        		chkBoxId = "chk_" + this.gfn_lpad(i, 2, '0');
         		chkProp = eval("this." + chkBoxId);
        	//	trace("chkBoxId save:" + chkBoxId);
         	//	trace("chkProp.value:" + chkProp.value);
        		if (chkProp.value != false)
        		{
        	//		trace("chkProp.truevalue:" + chkProp.truevalue);
        			clcString = clcString + "," + chkProp.truevalue;
        		}
        	}
        	if(clcString.length > 0) clcString = clcString.substr(1);
        //	trace("clcString:" + clcString);
        	this.ds_qstIns.setColumn(0, "QST_CLC", clcString);
        //	trace("ds_qstIns:" + this.ds_qstIns.saveXML());

        	var sParams       = "";
        	var sSvcID        = "saveRspBrkRg";
        	var sURL          = "svc::rest/mg/mbcslt/saveRspBrkRg";		 
        	var sInDatasets   = "ds_qstIns=ds_qstIns";
        	var sOutDatasets  = "";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U";	// U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.grd_result_oncellclick = function(obj,e)
        {
        	var strRtn = this.gfn_getMessage("confirm", "confirm.message.overwrite.rspbrkrg");
        	if (strRtn == false) return;
        /*
        	trace("cell:" + e.cell + " col:" + e.col + " row:" + e.row);
        	this.edt_NA_TRPL_C.set_value(this.ds_qstLst.getColumn(e.row, "NA_TRPL_C"));
        	this.edt_CLNTNM.set_value(this.ds_qstLst.getColumn(e.row, "CLNTNM"));
        	this.edt_USR_NM.set_value(this.ds_qstLst.getColumn(e.row, "QSTRNM"));
        	this.ta_QST_CNTN.set_value(this.ds_qstLst.getColumn(e.row, "QST_CNTN"));
        	this.ta_ACT_CNTN.set_value(this.ds_qstLst.getColumn(e.row, "ACT_CNTN"));
        */
        	var bSucc = this.ds_qstIns.copyRow(0, this.ds_qstLst, e.row);
        //	trace("ds_qstIns:" + this.ds_qstIns.saveXML());

        	this.cbo_HP.set_value((this.ds_qstLst.getColumn(e.row, "QSTR_TELNO")).substr(0, 3));
        	if(this.ds_qstLst.getColumn(e.row, "QSTR_TELNO").length == 10)
        		this.edt_HP01.set_value((this.ds_qstLst.getColumn(e.row, "QSTR_TELNO")).substr(3, 3));
        	else if(this.ds_qstLst.getColumn(e.row, "QSTR_TELNO").length == 11)
        		this.edt_HP01.set_value((this.ds_qstLst.getColumn(e.row, "QSTR_TELNO")).substr(3, 4));
        	this.edt_HP02.set_value(this.ds_qstLst.getColumn(e.row, "QSTR_TELNO").substr((this.ds_qstLst.getColumn(e.row, "QSTR_TELNO")).length - 4, 4));

        //	조치분류에 대해 기등록된 내역을 입력창에 셋팅
        	var	chkBoxId = "";
        	var chkProp;
        	var clcArr = new Array();
        	for(var i = 1; i < this.ds_qstClc.getRowCount(); i++)
        	{
         		chkBoxId = "chk_" + this.gfn_lpad(i, 2, '0');
         		chkProp = eval("this." + chkBoxId);
        		chkProp.set_value(false);
        	}

        //	trace("ds_qstIns:" + this.ds_qstIns.getColumn(0, "QST_CLC"));
        	if(this.ds_qstIns.getColumn(0, "QST_CLC").length > 0)
        	{
        		clcArr = this.ds_qstIns.getColumn(0, "QST_CLC").split(",");
        		for(i in clcArr)
        		{
        //			trace("clcArr:" + clcArr[i]);
        			chkBoxId = "chk_" + clcArr[i];
        //			trace("chkBoxId get:" + chkBoxId);
        			chkProp = eval("this." + chkBoxId);
        			chkProp.set_value(true);
        		}
        	}
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {			 	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveAdminInfList"){
        		//	trace("this.ds_adminInfo:" + this.ds_adminInfo.saveXML());
        			this.cbo_spy_tpc02.set_index(0);
        			this.btn_search_onclick();
        		}
        		else if(svcID == "retrieveRspBrkList"){
        		//	trace("this.ds_qstIns:" + this.ds_qstIns.saveXML());
        		}
        		else if(svcID == "saveRspBrkRg"){
        	 		if(ErrorCode == 1)
        	 		{
        	 			this.gfn_getMessage("alert", "result.message.save.success");		
        	 			this.btn_search_onclick();
        	 		}
        		}
        	//	this.resetScroll();	
        	}	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static09.addEventHandler("onclick", this.Static09_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.grd_result.addEventHandler("oncellclick", this.grd_result_oncellclick, this);
            this.Static12.addEventHandler("onclick", this.Static12_onclick, this);
            this.btn_comname.addEventHandler("onclick", this.div_search_btn_comname_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static09_onclick, this);
            this.Static15.addEventHandler("onclick", this.Static09_onclick, this);
            this.Static16.addEventHandler("onclick", this.Static09_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6512.xfdl", true);

       
    };
}
)();
