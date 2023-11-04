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
                this.set_name("frm_VAN_DS_SC_0770");
                this.set_titletext("제주물류센터출고실적");
                this._setFormPosition(0,0,803,1007);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_gridMaster", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_RVO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_DLR_CPL_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FILP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_DLR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MRK_PHD_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"SVS_QT\" type=\"INT\" size=\"256\"/><Column id=\"SDIV_SVS_QT\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_SELPR\" type=\"INT\" size=\"256\"/><Column id=\"WRS_GRD_DSC\" type=\"INT\" size=\"256\"/><Column id=\"WRS_GRD_BOX_DSC\" type=\"FLOAT\" size=\"256\"/><Column id=\"CUS_CNR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CUS_CNR_QT\" type=\"INT\" size=\"256\"/><Column id=\"CUS_CNR_BOX_QT\" type=\"FLOAT\" size=\"256\"/><Column id=\"CUS_CNR_AMT\" type=\"INT\" size=\"256\"/><Column id=\"PHD_CNR_QT\" type=\"INT\" size=\"256\"/><Column id=\"PHD_CNR_BOX_QT\" type=\"FLOAT\" size=\"256\"/><Column id=\"PHD_CNR_AMT\" type=\"INT\" size=\"256\"/><Column id=\"BKG_EVT_YY\" type=\"STRING\" size=\"256\"/><Column id=\"BKG_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SVS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AUT_ODR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ACTL_SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ACTL_SPYPL_NA_TRPL_C_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_NA_TRPL_C_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_PHD_DLR_DSC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_date", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">수주일자</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">출고일자</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">기표일자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sum", this);
            obj._setContents("<ColumnInfo><Column id=\"SVS_QT\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_SELPR\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_GRD_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_GRD_BOX_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"CUS_CNR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"CUS_CNR_BOX_QT\" type=\"STRING\" size=\"256\"/><Column id=\"CUS_CNR_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_CNR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_CNR_BOX_QT\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_CNR_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "200", null, this);
            obj.set_taborder("49");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "70", "15", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_text("일자구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "214", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static131", "absolute", "314", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_text("~");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "756", "-2", null, "69", "201", null, this.div_search);
            obj.set_taborder("60");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_phd_dlr_dsc", "absolute", "557", "36", "128", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("61");
            obj.set_innerdataset("@ds_PHD_DLR_DSC");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");
            obj = new Calendar("cal_to", "absolute", "324", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("65");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_visible("false");
            obj = new Combo("cbo_date", "absolute", "118", "10", "93", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("66");
            obj.set_innerdataset("@ds_date");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("출고일자");
            obj.set_value("2");
            obj.set_index("1");
            obj = new Static("Static02", "absolute", "454", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("67");
            obj.set_text("출고구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_trade_type", "absolute", "118", "36", "128", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_trade_type_innerdataset = new Dataset("cbo_trade_type_innerdataset", this.div_search.cbo_trade_type);
            cbo_trade_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">- 선택 -</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">출고</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">입고반품</Col></Row></Rows>");
            obj.set_innerdataset(cbo_trade_type_innerdataset);
            obj.set_taborder("68");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("- 선택 -");
            obj.set_index("0");
            obj = new Static("Static04", "absolute", "15", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("69");
            obj.set_text("출고반품구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "98", null, null, "15", "-2", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_gradD_excel", "absolute", null, "358", "41", "21", "0", null, this.div_list);
            obj.set_taborder("31");
            obj.set_text("엑셀");
            obj.set_visible("false");
            obj.set_enable("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "936", "-1", null, "15", "2", null, this.div_list);
            obj.set_taborder("32");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "936", "35", null, "5", "2", null, this.div_list);
            obj.set_taborder("34");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_h05", "absolute", "811", "18", "136", "15", null, null, this.div_list);
            obj.set_taborder("39");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelD", "absolute", "596", "340", "57", "21", null, null, this.div_list);
            obj.set_taborder("42");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "224", "706", "338", "44", null, null, this.div_list);
            obj.set_taborder("43");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "41", null, "665", "0", null, this.div_list);
            obj.set_taborder("24");
            obj.set_binddataset("ds_gridMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"사업장코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"사업장명\"/><Cell col=\"3\" rowspan=\"2\" text=\"수주일자\"/><Cell col=\"4\" rowspan=\"2\" text=\"출고일자\"/><Cell col=\"5\" rowspan=\"2\" text=\"기표일자\"/><Cell col=\"6\" rowspan=\"2\" text=\"출고구분\"/><Cell col=\"7\" rowspan=\"2\" text=\"고객코드\"/><Cell col=\"8\" rowspan=\"2\" text=\"고객명\"/><Cell col=\"9\" rowspan=\"2\" text=\"상품코드\"/><Cell col=\"10\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"11\" rowspan=\"2\" text=\"규격\"/><Cell col=\"12\" rowspan=\"2\" text=\"표시단위\"/><Cell col=\"13\" rowspan=\"2\" text=\"입수\"/><Cell col=\"14\" rowspan=\"2\" text=\"소분입수\"/><Cell col=\"15\" rowspan=\"2\" text=\"물류판매가\"/><Cell col=\"16\" colspan=\"2\" text=\"출고/반품 완료수량\"/><Cell col=\"18\" rowspan=\"2\" text=\"고객검수일자\"/><Cell col=\"19\" colspan=\"2\" text=\"고객검수수량\"/><Cell col=\"21\" rowspan=\"2\" text=\"고객검수금액\"/><Cell col=\"22\" colspan=\"2\" text=\"물류검수수량\"/><Cell col=\"24\" rowspan=\"2\" text=\"물류검수금액\"/><Cell col=\"25\" rowspan=\"2\" text=\"예약행사년도\"/><Cell col=\"26\" rowspan=\"2\" text=\"예약행사번호\"/><Cell col=\"27\" rowspan=\"2\" text=\"소분여부\"/><Cell col=\"28\" rowspan=\"2\" text=\"자동발주여부\"/><Cell col=\"29\" rowspan=\"2\" text=\"공급처코드\"/><Cell col=\"30\" rowspan=\"2\" text=\"공급처명\"/><Cell col=\"31\" rowspan=\"2\" text=\"배송지코드\"/><Cell col=\"32\" rowspan=\"2\" text=\"배송지명\"/><Cell row=\"1\" col=\"16\" text=\"낱개\"/><Cell row=\"1\" col=\"17\" text=\"BOX\"/><Cell row=\"1\" col=\"19\" text=\"낱개\"/><Cell row=\"1\" col=\"20\" text=\"BOX\"/><Cell row=\"1\" col=\"22\" text=\"낱개\"/><Cell row=\"1\" col=\"23\" text=\"BOX\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"bind:RN\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:PHD_NA_BZPLC\"/><Cell col=\"2\" style=\"align:center middle;\" text=\"bind:PHD_NA_BZPLC_NM\"/><Cell col=\"3\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:PHD_RVO_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:PHD_DLR_CPL_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:FILP_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" style=\"align:center middle;\" text=\"bind:PHD_DLR_DSC\"/><Cell col=\"7\" style=\"align:center middle;\" text=\"bind:NA_TRPL_C\"/><Cell col=\"8\" style=\"align:center middle;\" text=\"bind:NA_TRPL_C_NM\"/><Cell col=\"9\" style=\"align:center middle;\" text=\"bind:NA_WRS_C\"/><Cell col=\"10\" style=\"align:center middle;\" text=\"bind:WRS_ABR_NM\"/><Cell col=\"11\" style=\"align:center middle;\" text=\"bind:WRS_STDNM\"/><Cell col=\"12\" style=\"align:center middle;\" text=\"bind:WRS_MRK_PHD_UNT_C\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:center middle;\" text=\"bind:SVS_QT\" mask=\"###,##0\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:center middle;\" text=\"bind:SDIV_SVS_QT\" mask=\"###,##0\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:center middle;\" text=\"bind:PHD_SELPR\" mask=\"###,##0\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:center middle;\" text=\"bind:WRS_GRD_DSC\" mask=\"###,##0\"/><Cell col=\"17\" displaytype=\"number\" edittype=\"mask\" style=\"align:center middle;\" text=\"bind:WRS_GRD_BOX_DSC\" mask=\"###,##0.##\"/><Cell col=\"18\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:CUS_CNR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:center middle;\" text=\"bind:CUS_CNR_QT\" mask=\"###,##0\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:center middle;\" text=\"bind:CUS_CNR_BOX_QT\" mask=\"###,##0.##\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:center middle;\" text=\"bind:CUS_CNR_AMT\" mask=\"###,##0\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:center middle;\" text=\"bind:PHD_CNR_QT\" mask=\"###,##0\"/><Cell col=\"23\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:PHD_CNR_BOX_QT\" mask=\"###,##0.##\"/><Cell col=\"24\" displaytype=\"number\" style=\"align:center middle;\" text=\"bind:PHD_CNR_AMT\" mask=\"###,##0\" calendardisplaynulltype=\"default\"/><Cell col=\"25\" style=\"align:center middle;\" text=\"bind:BKG_EVT_YY\"/><Cell col=\"26\" style=\"align:center middle;\" text=\"bind:BKG_EVT_NO\"/><Cell col=\"27\" style=\"align:center middle;\" text=\"bind:SVS_YN\"/><Cell col=\"28\" style=\"align:center middle;\" text=\"bind:AUT_ODR_YN\"/><Cell col=\"29\" style=\"align:center middle;\" text=\"bind:ACTL_SPYPL_NA_TRPL_C\"/><Cell col=\"30\" style=\"align:center middle;\" text=\"bind:ACTL_SPYPL_NA_TRPL_C_NM\"/><Cell col=\"31\" style=\"align:center middle;\" text=\"bind:DVY_NA_TRPL_C\"/><Cell col=\"32\" style=\"align:center middle;\" text=\"bind:DVY_NA_TRPL_C_NM\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" displaytype=\"number\" style=\"align:center;\" text=\"합계\"/><Cell col=\"5\" displaytype=\"number\"/><Cell col=\"6\" displaytype=\"number\"/><Cell col=\"7\" displaytype=\"number\"/><Cell col=\"8\" displaytype=\"number\"/><Cell col=\"9\" displaytype=\"number\"/><Cell col=\"10\" displaytype=\"number\"/><Cell col=\"11\" displaytype=\"number\"/><Cell col=\"12\" displaytype=\"number\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:center middle;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'SVS_QT')\" mask=\"###,##0\"/><Cell col=\"14\" displaytype=\"number\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:center middle;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PHD_SELPR')\" mask=\"###,##0\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:center middle;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'WRS_GRD_DSC')\" mask=\"###,##0\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:center middle;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'WRS_GRD_BOX_DSC')\" mask=\"###,##0.##\"/><Cell col=\"18\" displaytype=\"number\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:center middle;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'CUS_CNR_QT')\" mask=\"###,##0\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:center middle;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'CUS_CNR_BOX_QT')\" mask=\"###,##0.##\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:center middle;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'CUS_CNR_AMT')\" mask=\"###,##0\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:center middle;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PHD_CNR_QT')\" mask=\"###,##0\"/><Cell col=\"23\" displaytype=\"number\" style=\"align:center middle;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PHD_CNR_BOX_QT')\" mask=\"###,##0.##\"/><Cell col=\"24\" displaytype=\"number\" style=\"align:center middle;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PHD_CNR_AMT')\" mask=\"###,##0\"/><Cell col=\"25\" displaytype=\"number\"/><Cell col=\"26\" displaytype=\"number\"/><Cell col=\"27\" displaytype=\"number\"/><Cell col=\"28\" displaytype=\"number\"/><Cell col=\"29\" displaytype=\"number\"/><Cell col=\"30\" displaytype=\"number\"/><Cell col=\"31\" displaytype=\"number\"/><Cell col=\"32\" displaytype=\"number\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "30", null, "69", "977", null, this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "85", "30", null, "69", "886", null, this);
            obj.set_taborder("8");
            obj.set_text("22");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "923", "308", null, "15", "15", null, this);
            obj.set_taborder("15");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "923", "344", null, "5", "15", null, this);
            obj.set_taborder("16");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel00", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("50");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 70, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 367, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div02");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 1007, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("제주물류센터출고실적");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0770.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0770.xfdl", function() {
        //include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	
        	var param = [
         		{code:"PHD_DLR_DSC",   dsName:"ds_PHD_DLR_DSC",   selecttype:"A"}	// 출고구분
            ];

        	this.gfn_setCommonCode(param);
        }

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	this.div_search.cbo_phd_dlr_dsc.set_index(0);
        	
        	for (var i = 0; i < this.ds_PHD_DLR_DSC.rowcount; i++) {
        		//출고 - 반품출고 삭제 - ??
        		if (this.ds_PHD_DLR_DSC.getColumn(i,0) == '05') {
        			this.ds_PHD_DLR_DSC.deleteRow(i);
        		}	
        	}
        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {
        	//그리드 nodata
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));

        	this.authChkDisable();	
        	this.div_search.cal_from.set_value(this.gfn_today("yyyyMMdd"));	
        //	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	if(this.gfn_isNull(this.div_search.cbo_trade_type.value)){
        		//거래구분을 선택 하세요.
        		this.alert("출고반품구분을 선택하세요.");
        		return;
        	}
        	
        // 	if (this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) < 0) {
        // 		//조회 시작일과 종료일을 다시 확인해 주세요
        // 		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        // 		return;
        // 	} else if (this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 1) {
        // 		this.alert("기간을 1일 이내로 선택해주세요.");
        // 		return;
        // 	}
        	
        	return true;
        }

        
        /* search */
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1,"div_page");// 처음조회시 1페이지를 조회한다.
        }

        this.fn_search = function(){
        	this.ds_gridMaster.clearData();
        	this.ds_sum.clearData();
        	
        	if(this.fn_validationCheck()){
        		
        		//권한사업장 코드
        		var trplC = application.gv_glnCode;
        		
        		var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value);	//거래구분
        		var dateCode = this.gfn_nullToEmpty(this.div_search.cbo_date.value);  //일자구분
        		var cal_from = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        //		var cal_to = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        		var phd_dlr_dsc = this.gfn_nullToEmpty(this.div_search.cbo_phd_dlr_dsc.value);  //물류출고구분
        		
        		param = "trade_type="+trade_type+
        				" dateCode="+dateCode+
        				" cal_from="+cal_from+
        				" phd_dlr_dsc="+phd_dlr_dsc+
        				" TRPL_C="+trplC;
        						
        		trace("##MASTER##PARAM##->"+param);
        		
        		var sSvcID        = "retrieveJejuWrsMasterList";//통신아이디
        		var sURL          = "svc::rest/center/retrieveJejuWrsMasterList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_gridMaster=ds_gridMaster ds_sum=ds_sum";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        // 엑셀 다운로드 성공
        this.fn_excelDownload_onsuccess = function(obj,e)
        {
        	trace("excel download : success");
        }
        // 엑셀 다운로드 실패
        this.fn_excelDownload_onerror = function(obj,e)
        {
        	trace("excel download : error");
        }

        /*엑셀 버튼(마스터)*/
        this.btn_excel00_onclick = function(obj,e)
        {
        	if(this.fn_validationCheck()){
        		var today = this.gfn_today("yyyyMMdd");
        		
        		this.exportObj = new ExcelExportObject("Export00", this);
        		this.exportObj.addEventHandler("onsuccess" , this.fn_excelDownload_onsuccess , this);
        		this.exportObj.addEventHandler("onerror", this.fn_excelDownload_onerror, this);
        		
        		this.exportObj.set_exportfilename("JejuWrsMasterList_" + today);
        		this.exportObj.set_exporturl(application.gv_server_url + "XExportImport");
        		this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.div_list.grd_master, "Sheet1!A1");
        		this.exportObj.exportData();
        	}
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "retrieveJejuWrsMasterList"){
        			
        		}
        	}
        }

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum,objDivNm)
        {
        	this.ds_pageVO.clearData();  
        	this.ds_gridMaster.clearData();     //Grid에 Binding된 Dataset명	
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 20; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
        	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
        	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
        	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	this.fn_search();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.cbo_date.addEventHandler("onitemchanged", this.Div01_Combo02_onitemchanged, this);
            this.div_search.cbo_trade_type.addEventHandler("onitemchanged", this.div_search_cbo_PHD_DLR_DSC_onitemchanged, this);
            this.div_list.addEventHandler("onsize", this.div_list_onsize, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.btn_gradD_excel.addEventHandler("onclick", this.div_list_btn_gradD_excel_onclick, this);
            this.div_list.grd_master.addEventHandler("onselectchanged", this.div_list_Grid00_onselectchanged, this);
            this.btn_search.addEventHandler("onclick", this.fn_search, this);
            this.btn_excel00.addEventHandler("onclick", this.btn_excel00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0770.xfdl");
        this.loadPreloadList();
       
    };
}
)();
