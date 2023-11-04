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
                this.set_name("OMG_DS_SC_7230");
                this.set_titletext("입금 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rvInq", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RFL_DT\" type=\"STRING\" size=\"8\"/><Column id=\"RV_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"RV_AM\" type=\"INT\" size=\"256\"/><Column id=\"RV_DT\" type=\"STRING\" size=\"8\"/><Column id=\"RV_METH_C\" type=\"STRING\" size=\"1\"/><Column id=\"RV_BNK\" type=\"STRING\" size=\"3\"/><Column id=\"ACNO\" type=\"STRING\" size=\"16\"/><Column id=\"PAY_DSC\" type=\"STRING\" size=\"1\"/><Column id=\"PRCRZT\" type=\"STRING\" size=\"1\"/><Column id=\"ERR_C\" type=\"STRING\" size=\"4\"/><Column id=\"TR_CNTN\" type=\"STRING\" size=\"128\"/><Column id=\"TR_REC_SJT_CNTN\" type=\"STRING\" size=\"128\"/><Column id=\"TR_STOR\" type=\"STRING\" size=\"128\"/><Column id=\"RV_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"ORG_RV_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BZNO\" type=\"STRING\" size=\"13\"/><Column id=\"ORD_RV_AM\" type=\"INT\" size=\"256\"/><Column id=\"BD_RV_AM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_payMeth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bnkC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_payDsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rslt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"DATA\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">실패</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">성공</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rvInq_na", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RFL_DT\" type=\"STRING\" size=\"8\"/><Column id=\"RV_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"RQS_BAC\" type=\"INT\" size=\"256\"/><Column id=\"RV_AM\" type=\"INT\" size=\"256\"/><Column id=\"RV_DT\" type=\"STRING\" size=\"8\"/><Column id=\"RQS_MM\" type=\"STRING\" size=\"84\"/><Column id=\"RV_METH_C\" type=\"STRING\" size=\"1\"/><Column id=\"RV_BNK\" type=\"STRING\" size=\"3\"/><Column id=\"ACNO\" type=\"STRING\" size=\"16\"/><Column id=\"PAY_DSC\" type=\"STRING\" size=\"1\"/><Column id=\"PRCRZT\" type=\"STRING\" size=\"1\"/><Column id=\"ERR_C\" type=\"STRING\" size=\"4\"/><Column id=\"TR_CNTN\" type=\"STRING\" size=\"128\"/><Column id=\"TR_REC_SJT_CNTN\" type=\"STRING\" size=\"128\"/><Column id=\"TR_STOR\" type=\"STRING\" size=\"128\"/><Column id=\"RV_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"ORG_RV_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BZNO\" type=\"STRING\" size=\"13\"/><Column id=\"ORD_RV_AM\" type=\"INT\" size=\"256\"/><Column id=\"BD_RV_AM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelListDown", "absolute", null, "0", "41", "21", "78", null, this);
            obj.set_taborder("37");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("68");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("72");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "102", null, null, "15", "-1", this);
            obj.set_taborder("81");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "74", null, null, "0", "8", this.Div02);
            obj.set_taborder("2");
            obj.set_binddataset("ds_rvInq");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"입금일\"/><Cell col=\"2\" text=\"거래처코드\"/><Cell col=\"3\" text=\"업체명\"/><Cell col=\"4\" text=\"입금액\"/><Cell col=\"5\" text=\"일반입금액\"/><Cell col=\"6\" text=\"대손입금액\"/><Cell col=\"7\" text=\"납부방법\"/><Cell col=\"8\" text=\"은행\"/><Cell col=\"9\" text=\"계좌번호\"/><Cell col=\"10\" text=\"이상납부\"/><Cell col=\"11\" text=\"결과\"/><Cell col=\"12\" text=\"에러사유\"/><Cell col=\"13\" text=\"입금반영일\"/><Cell col=\"14\" text=\"거래내용\"/><Cell col=\"15\" text=\"거래기록사항\"/><Cell col=\"16\" text=\"거래점\"/><Cell col=\"17\" text=\"사업자번호\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"expr:dataset.getRowType(currow)==2||((dataset.getRowType(currow)==1||dataset.getRowType(currow)==4)&amp;&amp;RV_METH_C=='N'&amp;&amp;PAY_DSC!='M')?'date':'none'\" text=\"bind:RV_DT\" tooltiptext=\"bind:RV_DT\"/><Cell col=\"2\" edittype=\"expr:(dataset.getRowType(currow)==2||RV_TRPL_C==null)?'normal':'none'\" editfilter=\"integer\" text=\"bind:RV_TRPL_C\" tooltiptext=\"bind:RV_TRPL_C\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"expr:dataset.getRowType(currow)==2?'normal':'none'\" editfilter=\"integer\" style=\"align:right;\" text=\"bind:RV_AM\" tooltiptext=\"bind:RV_AM\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" editfilter=\"none\" style=\"align:right;\" text=\"bind:ORD_RV_AM\" tooltiptext=\"bind:ORD_RV_AM\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" editfilter=\"none\" style=\"align:right;\" text=\"bind:BD_RV_AM\" tooltiptext=\"bind:BD_RV_AM\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"expr:dataset.getRowType(currow)==2?'combo':'none'\" text=\"bind:RV_METH_C\" combodataset=\"ds_payMeth\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\" combodisplay=\"edit\" tooltiptext=\"bind:RV_METH_C\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"expr:dataset.getRowType(currow)==2?'normal':'none'\" text=\"bind:RV_BNK\" combodataset=\"ds_bnkC\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\" combodisplay=\"edit\" tooltiptext=\"bind:RV_BNK\"/><Cell col=\"9\" edittype=\"expr:dataset.getRowType(currow)==2?'normal':'none'\" text=\"bind:ACNO\" tooltiptext=\"bind:ACNO\"/><Cell col=\"10\" displaytype=\"combo\" text=\"bind:PAY_DSC\" combodataset=\"ds_payDsc\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\" tooltiptext=\"bind:PAY_DSC\"/><Cell col=\"11\" displaytype=\"combo\" text=\"bind:PRCRZT\" combodataset=\"ds_rslt\" combocodecol=\"CODE\" combodatacol=\"DATA\" tooltiptext=\"bind:PRCRZT\"/><Cell col=\"12\" text=\"bind:ERR_C\" tooltiptext=\"bind:ERR_C\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"expr:dataset.getRowType(currow)==2?'date':'none'\" text=\"bind:RFL_DT\" tooltiptext=\"bind:RFL_DT\"/><Cell col=\"14\" edittype=\"expr:dataset.getRowType(currow)==2?'normal':'none'\" text=\"bind:TR_CNTN\" tooltiptext=\"bind:TR_CNTN\"/><Cell col=\"15\" edittype=\"expr:dataset.getRowType(currow)==2?'normal':'none'\" text=\"bind:TR_REC_SJT_CNTN\" tooltiptext=\"bind:TR_REC_SJT_CNTN\"/><Cell col=\"16\" edittype=\"expr:dataset.getRowType(currow)==2?'normal':'none'\" text=\"bind:TR_STOR\" tooltiptext=\"bind:TR_STOR\"/><Cell col=\"17\" edittype=\"none\" text=\"bind:BZNO\" tooltiptext=\"bind:BZNO\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" expr=\"dataset.getCountNF()\" tooltiptext=\"expr:dataset.getCountNF()\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"number\" expr=\"dataset.getSum(&quot;RV_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;RV_AM&quot;)\"/><Cell col=\"5\" displaytype=\"number\" expr=\"dataset.getSum(&quot;ORD_RV_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;ORD_RV_AM&quot;)\"/><Cell col=\"6\" displaytype=\"number\" expr=\"dataset.getSum(&quot;BD_RV_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;BD_RV_AM&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:center;\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\" style=\"align:center middle;\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "363", "1", null, "12", "362", null, this.Div02);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);
            obj = new Div("div_search", "absolute", "0", "15", null, "49", "0", null, this.Div02);
            obj.set_taborder("3");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_title_fileName", "absolute", "15", "10", "67", "21", null, null, this.Div02.div_search);
            obj.set_taborder("138");
            obj.set_text("File 명");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div02.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "771", "-1", "15", "145", null, null, this.Div02.div_search);
            obj.set_taborder("139");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div02.div_search.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload00", "absolute", "71", "11", "319", "21", null, null, this.Div02.div_search);
            obj.set_taborder("140");
            obj.set_multiselect("true");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.set_index("0");
            this.Div02.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "32.94%", "31", null, "10", "53.96%", null, this.Div02.div_search);
            obj.set_taborder("141");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div02.div_search.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "72", "56", "41", null, null, this);
            obj.set_taborder("87");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0.12%", "30", null, "42", "98.01%", null, this);
            obj.set_taborder("88");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "75", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "72", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("입금일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "10.81%", "10", null, "21", "76.84%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static08", "absolute", "23.41%", "10", null, "21", "75.32%", null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "24.68%", "10", null, "21", "62.85%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static00", "absolute", "39.82%", "10", null, "21", "50.64%", null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("업체조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comnum", "absolute", "48.35%", "10", null, "21", "42.75%", null, this.div_search);
            obj.set_taborder("17");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comname", "absolute", "57.51%", "10", null, "21", "33.08%", null, this.div_search);
            obj.set_taborder("18");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_comname", "absolute", "67.18%", "10", null, "21", "30.15%", null, this.div_search);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cb_payMeth", "absolute", "72.52%", "10", null, "21", "15.78%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.style.set_align("left middle");
            obj.set_innerdataset("@ds_payMeth");
            obj.set_index("-1");
            obj = new Combo("cb_rslt", "absolute", "86.9%", "10", null, "21", "1.4%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_innerdataset("@ds_rslt");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.style.set_align("left middle");
            obj = new Combo("cb_bnkC", "absolute", "10.81%", "43", null, "21", "76.84%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_innerdataset("@ds_bnkC");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.style.set_align("left middle");
            obj = new Edit("Edit_acct", "absolute", "24.68%", "43", null, "21", "62.85%", null, this.div_search);
            obj.set_taborder("23");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "43", "72", "21", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cb_badDebt", "absolute", "72.52%", "43", null, "21", "15.78%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cb_badDebt_innerdataset = new Dataset("cb_badDebt_innerdataset", this.div_search.cb_badDebt);
            cb_badDebt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">대손</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">일반</Col></Row></Rows>");
            obj.set_innerdataset(cb_badDebt_innerdataset);
            obj.set_taborder("25");
            obj.style.set_align("left middle");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Static("Static02", "absolute", "58.91%", "99", null, "21", "31.55%", null, this.div_search);
            obj.set_taborder("26");
            obj.set_text("업체조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "13.95%", "7", null, "14", "80.57%", null, this);
            obj.set_taborder("104");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_na_insert", "absolute", null, "0", "41", "21", "222", null, this);
            obj.set_taborder("105");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_na_delete", "absolute", null, "0", "41", "21", "174", null, this);
            obj.set_taborder("106");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_na_save", "absolute", null, "0", "41", "21", "126", null, this);
            obj.set_taborder("107");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_na_upload", "absolute", null, "0", "41", "21", "271", null, this);
            obj.set_taborder("108");
            obj.set_text("무통장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "318", null, this);
            obj.set_taborder("109");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_findUpload", "absolute", null, "0", "96", "21", "378", null, this);
            obj.set_taborder("110");
            obj.set_text("Exce 내용보기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 49, this.Div02.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div02.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 420, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("81");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 75, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("103");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("입금 조회");

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
        this.addIncludeScript("OMG_DS_SC_7230.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7230.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        /* Form Init: 페이지 호출 후 실행 */
        this.form_init = function(obj,e)
        {
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.div_search.cal_from.set_value(this.gfn_firstDate(toDay));
        	this.div_search.cal_to.set_value(toDay);
        }

        /* Form Onload: DataSet 로딩 후 실행 */
        this.form_onload = function(obj,e)
        {	// 페이지 로딩후 실행부분
        	this.gfn_setInitForm(obj, e); //공통

            var param = [  
        		{code:"PAY_METH"	, dsName:"ds_payMeth"	, selecttype:"A"},
        		{code:"BNK_C"		, dsName:"ds_bnkC"		, selecttype:"A"},
        		{code:"PAY_DSC"		, dsName:"ds_payDsc"	, selecttype:""}
            ];

        	this.gfn_setPortalCommonCode(param); 
        }

        this.fn_afterFormOnload = function() //onload
        {

        }

        // gfn_setCommonCode, gfn_setPortalCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        //	trace("this.ds_payMeth:" + this.ds_payMeth.saveXML());
        	this.div_search.cb_bnkC.set_index(0);
        	this.div_search.cb_payMeth.set_index(0);
        	this.div_search.cb_rslt.set_index(1);
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* 콜백 함수 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {

        	if(ErrorCode < 0)
        	{

        	}
        	else
        	{
        		if(svcID == "retrieveRvInqList")
        		{
        		//	trace("ds_rvInq:" + this.ds_rvInq.saveXML());
        			if(this.ds_rvInq.rowcount==0)
        			{
        				this.Div02.Grid01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        		else if(svcID == "applyNoAccount")
        		{
        			this.alert("변경내역을 반영 하였습니다.");
        			// 무통장 입금반영 결과확인
        			var fromDt			= this.div_search.cal_from.value;
        			var toDt			= this.div_search.cal_to.value;
        			var payMeth			= "all";
        			var rslt			= this.gfn_nullToEmpty(this.div_search.cb_rslt.value);
        			var badDebt			= this.div_search.cb_badDebt.value;
        			var sParams			= "FROM_DT="	+ fromDt
        								+ " TO_DT="		+ toDt
        								+ " PAY_METH="	+ payMeth
        								+ " RSLT="		+ rslt
        								+ " BADDEBT="	+ badDebt
        								;

        			// 변경내역 저장 데이터셋 초기화
        			this.ds_rvInq_na.clearData();
        			this.fn_search(sParams);
        		}
        		else if(svcID == "uploadNoAccount")
        		{

        			/*
        			       데이터셋의 rowtype 을 insert 바꾼다
        			 
        					Row Type Value Description 
        					Dataset.ROWTYPE_EMPTY 0 존재하지 않는 행의 상태 
        					Dataset.ROWTYPE_NORMAL 1 초기 행의 상태 
        					Dataset.ROWTYPE_INSERT 2 추가된 행의 상태 
        					Dataset.ROWTYPE_UPDATE 4 수정된 행의 상태 
        					Dataset.ROWTYPE_DELETE 8 삭제된 행의 상태 
        					Dataset.ROWTYPE_GROUP 16 그룹 정보 행의 상태 

        			 */

        
        			 for(var i = 0, length = this.ds_rvInq.getRowCount(); i < length; i++) {
        				 var rv_dt   = this.ds_rvInq.getColumn(i, "RV_DT");
        					 rv_dt = rv_dt.replace("/", "");  // / 제거
        					 rv_dt = rv_dt.replace("/", "");  // / 제거
        			     this.ds_rvInq.setRowType(i, Dataset.ROWTYPE_INSERT);

        			     // 입금 반영일은 오늘 
        			     this.ds_rvInq.setColumn(i, "RV_DT",  rv_dt)                     ;
        			     this.ds_rvInq.setColumn(i, "RFL_DT", this.gfn_today("yyyyMMdd"));
        			     
        			 } // for
                  
                    // false 로 원복해야 그리드 편집수정가능
                    this.ds_rvInq.set_updatecontrol(true);
        		}
        		//
        	} // if(ErrorCode < 0)
        } // ca

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /* 조회조건 영역 펼치기, 접기 */
        this.Div02_Button75_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.Div02);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	
        /* 무통장 입금내역 그리드 추가 */
        this.btn_na_insert_onclick = function(obj,e)
        {
        	var rownum;
        	rownum = this.ds_rvInq.addRow();
        	// 초기값 설정
        	this.ds_rvInq.setColumn(rownum, "RV_DT", this.gfn_today("yyyyMMdd"));
        	this.ds_rvInq.setColumn(rownum, "RV_METH_C", 'N');
        	this.ds_rvInq.setColumn(rownum, "RV_BNK", '011');
        	this.ds_rvInq.setColumn(rownum, "ACNO", '3010182425331');
        	this.ds_rvInq.setColumn(rownum, "RFL_DT", this.gfn_today("yyyyMMdd"));
        }

        /* 무통장 입금내역 그리드 삭제 */
        this.btn_na_delete_onclick = function(obj,e)
        {
        	this.ds_rvInq.deleteRow(this.ds_rvInq.rowposition);
        }

        /* 무통장 입금내역 그리드 저장 */
        this.btn_na_save_onclick = function(obj,e)
        {
        	for(var i = 0, length = this.ds_rvInq.getRowCount(); i < length; i++)
        	{
        //		trace("ds_rvInq RV_DT:" + this.ds_rvInq.getColumn(i, "RV_DT") + " RV_TRPL_C:" + this.ds_rvInq.getColumn(i, "RV_TRPL_C") + " getRowType:" + this.ds_rvInq.getRowType(i));
        		if(this.ds_rvInq.getRowType(i) == "2" || this.ds_rvInq.getRowType(i) == "4")	// ADD OR UPDATE
        		{
        			if(this.ds_rvInq.getRowType(i) == "4")
        			{
        				this.ds_rvInq.setColumn(i, "ORG_RV_DT", this.ds_rvInq.getOrgColumn(i, "RV_DT"));
        			}	
        			var nRow = this.ds_rvInq_na.addRow();
        			var bSucc = this.ds_rvInq_na.copyRow(nRow, this.ds_rvInq, i);
        		}
        	}

        	if(this.ds_rvInq_na.getRowCount() > 0)
        	{
        	
        		if(this.fn_validationCheck())
        		{
                    /*
                     * C	자동이체
                     * M	오납
                     * N	무통장
                     * O	과납
                     * V	가상계좌
                     */
                     
        			var msg = "";
        			var mis_cnt = 0;
        			var nai_cnt = 0;
        			var nau_cnt = 0;
        			for(var i = 0, length = this.ds_rvInq_na.getRowCount(); i < length; i++)
        			{
        				     if(this.ds_rvInq_na.getColumn(i, "PAY_DSC") == 'M') mis_cnt++;
        				else if(this.ds_rvInq_na.getColumn(i, "RV_METH_C") == 'N' && this.ds_rvInq_na.getColumn(i, "ORG_RV_DT") == null) nai_cnt++;
        				else if(this.ds_rvInq_na.getColumn(i, "RV_METH_C") == 'N' && this.ds_rvInq_na.getColumn(i, "ORG_RV_DT") != null) nau_cnt++;
        			}
        			trace("mis_cnt:" + mis_cnt);
        			trace("nai_cnt:" + nai_cnt);
        			trace("nau_cnt:" + nau_cnt);
        			if(mis_cnt > 0) msg = " " + msg + mis_cnt + "건의 오납";
        			if(nai_cnt > 0) msg = " " + msg + nai_cnt + "건의 무통장 입금";
        			if(nau_cnt > 0) msg = " " + msg + nau_cnt + "건의 무통장 변경";

        			var ret = application.confirm(msg + "에 대해 반영 합니다.", "Question", "QUESTION");
        			if (ret == false)
        			{
        				this.reload();
        			}
        		}
        		else return;
        	}
        	else if(this.ds_rvInq_na.getRowCount() == 0)
        	{
        		alert("처리할 내역이 없습니다");
        		return;
        	}

        //	trace("ds_rvInq_na:" + this.ds_rvInq_na.saveXML());
        	var params	      = "";
        	var sSvcID        = "applyNoAccount"; 				// 통신아이디
        	var sURL          = "svc::rest/bl/applyNoAccount";	// 호출할 서버 페이지 주소
        	var sInDatasets   = "in_ds=ds_rvInq_na:A";			// 보내는데이터셋
        	var sOutDatasets  = "";
        	var sArgument     = params							// 파라미터
        	var sCallbackFunc = "fn_callBack";					// 콜백
        	var tranType 	  = "U";							// U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        /* 입력필수값 검증 */
        this.fn_validationCheck = function()
        {
        	for(var i = 0, length = this.ds_rvInq_na.getRowCount(); i < length; i++)
        	{
        		if(this.gfn_isNull(this.ds_rvInq_na.getColumn(i, "RV_AM")))
        		{
        			this.alert("입금액을 입력해주세요.");
        			return false;
        		}
        	}
        	return true;
        }

        /* 검색결과 그리드 엑셀다운로드 */
        this.btn_excelListDown_onclick = function(obj,e)
        {
        //	this.gfn_exportExcel(this.Div02.Grid01, "입금조회");
        	var fromDt			= this.div_search.cal_from.value;
        	var toDt			= this.div_search.cal_to.value;
        	var trplC			= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm			= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);
        	var payMeth			= this.gfn_nullToEmpty(this.div_search.cb_payMeth.value);
        	var rslt			= this.gfn_nullToEmpty(this.div_search.cb_rslt.value);
        	var bnkC			= this.gfn_nullToEmpty(this.div_search.cb_bnkC.value);
        	if(bnkC == "all")	bnkC = "";
        	var acct			= this.gfn_nullToEmpty(this.div_search.Edit_acct.value);
        	var badDebt			= this.div_search.cb_badDebt.value;

        	var sParams			= "FROM_DT="	+ fromDt
        						+ "&TO_DT="		+ toDt
        						+ "&TRPL_C="	+ trplC
        						+ "&CLNTNM="	+ clntNm
        						+ "&PAY_METH="	+ payMeth
        						+ "&RSLT="		+ rslt
        						+ "&BNKC="		+ bnkC
        						+ "&ACCT="		+ acct
        						+ "&BADDEBT="	+ badDebt
        						;

        	this.fn_excel(sParams);
        }

        this.fn_excel = function(sParams)
        {
        	trace("엑셀 다운로드 params >>> " + sParams);
        	this.web_downExcel.set_url(application.gv_serverAdmin_url + "rest/excel/bl/downloadExcelRvInq?" + sParams);
        }

        /* 입금 조회 */
        this.btn_search_onclick = function(obj,e)
        {
        	var fromDt			= this.div_search.cal_from.value;
        	var toDt			= this.div_search.cal_to.value;
        	var trplC			= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm			= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);
        	var payMeth			= this.gfn_nullToEmpty(this.div_search.cb_payMeth.value);
        	var rslt			= this.gfn_nullToEmpty(this.div_search.cb_rslt.value);
        	var bnkC			= this.gfn_nullToEmpty(this.div_search.cb_bnkC.value);
        	if(bnkC == "all")	bnkC = "";
        	var acct			= this.gfn_nullToEmpty(this.div_search.Edit_acct.value);
        	var badDebt			= this.div_search.cb_badDebt.value;

        	var sParams			= "FROM_DT="	+ fromDt
        						+ " TO_DT="		+ toDt
        						+ " TRPL_C="	+ trplC
        						+ " CLNTNM="	+ clntNm
        						+ " PAY_METH="	+ payMeth
        						+ " RSLT="		+ rslt
        						+ " BNKC="		+ bnkC
        						+ " ACCT="		+ acct
        						+ " BADDEBT="	+ badDebt
        						;
        //	trace("sParams:" + sParams);
        	this.fn_search(sParams);
        }

        this.fn_search = function(sParams)
        {
        	var sSvcID			= "retrieveRvInqList";
        	var sURL			= "svc::rest/bl/retrieveRvInqList";
        	var sInDatasets		= "";
        	var sOutDatasets	= "ds_rvInq=ds_rvInq";
        	var sArgument		= sParams;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S";									// U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 업체 조회
        this.div_search_btn_comname_onclick = function(obj,e)
        {
        	var oArg = "";
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("trplSearchPopup","OMG.BL::OMG_DS_SC_7230_P01.xfdl",oArg,sOption,sPopupCallBack);
        }
        this.Grid01_oncellclick = function(obj,e)
        {	
        	//trace("msg:" + application.gds_msg.saveXML());
        	//alert("cell:" + e.cell + " col:" + e.col + " row:" + e.row);
        	var RV_TRPL_C	= this.ds_rvInq.getColumn(e.row, "RV_TRPL_C");

        	// 
        	if (e.col == 3)
        	{
        		var oArg = {NA_TRPL_C:RV_TRPL_C};
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("svcHistPopup","OMG.BL::OMG_DS_SC_7231.xfdl",oArg,sOption,sPopupCallBack);
        	}
        }

        // 팝업작업 후 진행함수
        this.fn_popupAfter = function(strId,strVal)
        {
        	// trace(" strId : " + strId + " strVal : " + strVal);
        	if(strVal != ''){
        		var paramsArr = strVal.split(",");
        	
        		if(strId == "trplSearchPopup"){
        			this.div_search.Edit_comnum.set_value(paramsArr[0]);
        			this.div_search.Edit_comname.set_value(paramsArr[1]);
        		}
        	}
        }

        // 초기화
        this.btn_clear00_onclick = function(obj,e)
        {
        	//this.reload();
        	this.ds_rvInq.deleteAll();
        }

        this.FileUpload00_onsuccess = function(obj,e)
        {
        	if( e.datasets == null )
        	{
        		trace("업로드 실패");
        		//this.div_search.txa_excel00.set_value("업로드 실패");
        	} else {
        		trace("업로드 성공");
        		//this.div_search.txa_excel00.set_value("업로드 성공");
        		
        		this.ds_uploadresult.clear();
        		this.ds_uploadresult.copyData(e.datasets[0]);		
        		this.ds_uploadresult.addColumn("CHK", "string"); //멀티건 인경우 'CHK'컬럼추가
        	}	
        }
        this.FileUpload00_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.FileUpload00_onerror = function(obj,e)
        {
        	trace("FileUpload00_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }

        this.div_search_btn_findUpload_onclick = function(obj,e)
        {
             this.ds_rvInq.deleteAll();
             this.ds_rvInq.set_updatecontrol(false); // 엑셀업로드시 false 로 변경후 저장시 true 로 원복
           
        	var params	       = "systemFileName="+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME");
        	    params	       = params + " dsName=ds_rvInq";
        	
        	
        	var sSvcID        = "uploadNoAccount";//통신아이디
        	var sURL          = "svc::rest/bl/uploadNoAccount";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_rvInq=ds_rvInq";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var tranType 	  = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excelListDown.addEventHandler("onclick", this.btn_excelListDown_onclick, this);
            this.Div02.Grid01.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.Div02.Grid01.addEventHandler("oncellclick", this.Grid01_oncellclick, this);
            this.Div02.Button75.addEventHandler("onclick", this.Div02_Button75_onclick, this);
            this.Div02.div_search.FileUpload00.addEventHandler("onsuccess", this.FileUpload00_onsuccess, this);
            this.Div02.div_search.FileUpload00.addEventHandler("onerror", this.FileUpload00_onerror, this);
            this.Div02.div_search.FileUpload00.addEventHandler("onitemchanged", this.FileUpload00_onitemchanged, this);
            this.div_search.Static05.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_search.cal_from.addEventHandler("oneditclick", this.div_search_cal_from_oneditclick, this);
            this.div_search.btn_comname.addEventHandler("onclick", this.div_search_btn_comname_onclick, this);
            this.div_search.Static01.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.btn_na_insert.addEventHandler("onclick", this.btn_na_insert_onclick, this);
            this.btn_na_delete.addEventHandler("onclick", this.btn_na_delete_onclick, this);
            this.btn_na_save.addEventHandler("onclick", this.btn_na_save_onclick, this);
            this.btn_na_upload.addEventHandler("onclick", this.btn_na_upload_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_findUpload.addEventHandler("onclick", this.div_search_btn_findUpload_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7230.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
