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
                this.set_name("VAN_DS_SC_1511");
                this.set_titletext("상품정보통합관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cser_ctr_tpc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_trtwrs", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"PD_YY\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZ_METC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"SL_UPR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"INPD_QT\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"SL_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"RVO_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"STPL_PD_VIAPD_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"STPL_PD_GRD_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"VIAPD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SVS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SVS_UNT_QT\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_BULK\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_WDTH_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LEN_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_WRS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_BAS_QT\" type=\"STRING\" size=\"256\"/><Column id=\"MART_DIV_BKG_ODR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRA_WRS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"STPL_AMN_WRS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"STPL_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"STPL_AMN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"PD_YY_AMN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ODR_FBID_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ODR_FBID_RSNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RVO_FBID_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RVO_FBID_RSNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">[8801099000016] 대상에프앤에프(주)</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">[8801099000023] 대상에프앤에프(주)동부지점</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">[8801099000030] 대상에프앤에프(주)서부지점</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">[8801099000047] 대상에프앤에프(주)남부지점(안양)</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">[8801099000054] 대상에프앤에프(주)남부지점(강원)</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">[8801099000061] 대상에프앤에프(주)대전지점</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">[8801099000078] 대상에프앤에프(주)광주지점</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"data\">[8801099000085] 대상에프앤에프(주)대구지점</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"data\">[8801099000092] 대상에프앤에프(주)부산지점</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"data\">[8801099000108] 대상에프앤에프(주)신선지점</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"data\">[8801099000115] 대상에프앤에프(주)지호상사</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"data\">[8801099000122] 대상에프앤에프(주)청원유통</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"data\">[8801099000139] 대상에프앤에프(주)승진상사</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"data\">[8801099000146] 대상에프앤에프(주)여주대상</Col></Row><Row><Col id=\"code\">14</Col><Col id=\"data\">[8801099000153] 대상에프앤에프(주)청정원상사(위탁)</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"data\">[8801099000160] 대상에프앤에프(주)대성상사</Col></Row><Row><Col id=\"code\">16</Col><Col id=\"data\">[8801099000177] 대상에프앤에프(주)대상위탁상사</Col></Row><Row><Col id=\"code\">17</Col><Col id=\"data\">[8801099000184] 대상에프앤에프(주)청정원상사(홍성)</Col></Row><Row><Col id=\"code\">18</Col><Col id=\"data\">[8801099000191] 대상에프앤에프(주)홍성위탁</Col></Row><Row><Col id=\"code\">19</Col><Col id=\"data\">[8801099000207] 대상에프앤에프(주)해송유통</Col></Row><Row><Col id=\"code\">20</Col><Col id=\"data\">[8801099000214] 대상에프앤에프(주)청정원태안위탁</Col></Row><Row><Col id=\"code\">21</Col><Col id=\"data\">[8801099000221] 대상에프앤에프(주)송암상사</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">0</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_trntel", this);
            obj._setContents("<ColumnInfo><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cif", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"UP_NA_TRPL_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel00", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("5");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "95", "15", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_00", "absolute", "15", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_02", "absolute", "15", "62", "79", "21", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_text("일자구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_01", "absolute", "15", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_03", "absolute", "450", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("10");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_daily_sel", "absolute", "334", "62", "230", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_daily_sel_innerdataset = new Dataset("rdo_daily_sel_innerdataset", this.div_search.rdo_daily_sel);
            rdo_daily_sel_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">등록일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">변경일</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">삭제일</Col></Row></Rows>");
            obj.set_innerdataset(rdo_daily_sel_innerdataset);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.set_index("1");
            obj = new Combo("cbo_sign_list00", "absolute", "529", "10", "244", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("@ds_cser_ctr_tpc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj = new Calendar("cal_lschg00", "absolute", "94", "62", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_lschg01", "absolute", "216", "62", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static04", "absolute", "200", "62", "10", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data00", "absolute", "94", "36", "110", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_cssclass("WF_Essential");
            obj.set_inputtype("number");
            obj.set_readonly("false");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "207", "36", "131", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "341", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data02", "absolute", "94", "10", "110", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_cssclass("WF_Essential");
            obj.set_inputtype("number");
            obj.set_readonly("false");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data03", "absolute", "207", "10", "131", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup01", "absolute", "341", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data04", "absolute", "365", "10", "55", "21", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "232", "31", "103", "5", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "233", "83", "103", "10", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "232", "57", "103", "5", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "233", "0", "103", "10", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data05", "absolute", "365", "10", "55", "21", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "123", null, null, "15", "0", this);
            obj.set_taborder("8");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "42", null, null, "0", "44", this.div_list);
            obj.set_taborder("11");
            obj.set_binddataset("ds_trtwrs");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"팀코드\"/><Cell col=\"4\" text=\"팀명\"/><Cell col=\"5\" text=\"상품코드\"/><Cell col=\"6\" text=\"상품명\"/><Cell col=\"7\" text=\"상품약어명\"/><Cell col=\"8\" text=\"매입단가\"/><Cell col=\"9\" text=\"최소발주수량\"/><Cell col=\"10\" text=\"최대발주수량\"/><Cell col=\"11\" text=\"공병상품코드\"/><Cell col=\"12\" text=\"공병단가\"/><Cell col=\"13\" text=\"공급처코드\"/><Cell col=\"14\" text=\"공급처명\"/><Cell col=\"15\" text=\"공급처팀코드\"/><Cell col=\"16\" text=\"공급처팀명\"/><Cell col=\"17\" text=\"주관거래처코드\"/><Cell col=\"18\" text=\"주관거래처명\"/><Cell col=\"19\" text=\"주관팀코드\"/><Cell col=\"20\" text=\"주관팀명\"/><Cell col=\"21\" text=\"계약유형코드\"/><Cell col=\"22\" text=\"과세구분코드\"/><Cell col=\"23\" text=\"수주가능여부\"/><Cell col=\"24\" text=\"발주가능여부\"/><Cell col=\"25\" text=\"직송여부\"/><Cell col=\"26\" text=\"박스상품여부\"/><Cell col=\"27\" text=\"직송시작일자\"/><Cell col=\"28\" text=\"직송종료일자\"/><Cell col=\"29\" text=\"직송기준수량\"/><Cell col=\"30\" text=\"생산년도관리여부\"/><Cell col=\"31\" text=\"발주금지사유코드\"/><Cell col=\"32\" text=\"수주금지사유코드\"/><Cell col=\"33\" text=\"최종변경일시\"/><Cell col=\"34\" text=\"최종변경자\"/><Cell col=\"35\" text=\"삭제일시\"/><Cell col=\"36\" text=\"박스당입수\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"3\" text=\"bind:NA_TEAM_C\"/><Cell col=\"4\" text=\"bind:TEAM_NM\"/><Cell col=\"5\" text=\"bind:NA_WRS_C\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:WRS_ABR_NM\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:BYNG_UPR\"/><Cell col=\"9\" text=\"bind:MIN_ODR_QT\"/><Cell col=\"10\" text=\"bind:MAX_ODR_QT\"/><Cell col=\"11\" text=\"bind:VCBT_NA_WRS_C\"/><Cell col=\"12\" text=\"bind:VCBT_UPR\"/><Cell col=\"13\" text=\"bind:SPYPL_NA_TRPL_C\"/><Cell col=\"14\" style=\"align:left;\" text=\"bind:SPYPL_NA_TRPL_NM\"/><Cell col=\"15\" text=\"bind:SPYPL_NA_TEAM_C\"/><Cell col=\"16\" text=\"bind:SPYPL_NA_TEAM_NM\"/><Cell col=\"17\" text=\"bind:MNGT_NA_TRPL_C\"/><Cell col=\"18\" style=\"align:left;\" text=\"bind:MNGT_NA_TRPL_NM\"/><Cell col=\"19\" text=\"bind:MNGT_NA_TEAM_C\"/><Cell col=\"20\" text=\"bind:MNGT_NA_TEAM_NM\"/><Cell col=\"21\" text=\"bind:CTR_TPC\"/><Cell col=\"22\" text=\"bind:TXT_DSC\"/><Cell col=\"23\" text=\"bind:RVO_PSB_YN\" expr=\"expr:RVO_PSB_YN=='1'?'여':'부'\"/><Cell col=\"24\" text=\"bind:ODR_PSB_YN\" expr=\"expr:ODR_PSB_YN=='1'?'여':'부'\"/><Cell col=\"25\" text=\"bind:DDLY_YN\" expr=\"expr:DDLY_YN=='1'?'여':'부'\"/><Cell col=\"26\" text=\"bind:BOX_WRS_YN\" expr=\"expr:BOX_WRS_YN=='1'?'여':'부'\"/><Cell col=\"27\" text=\"bind:DDLY_ST_DT\"/><Cell col=\"28\" text=\"bind:DDLY_ED_DT\"/><Cell col=\"29\" text=\"bind:DDLY_BAS_QT\"/><Cell col=\"30\" text=\"bind:PD_YY_AMN_YN\" expr=\"expr:PD_YY_AMN_YN=='1'?'여':'부'\"/><Cell col=\"31\" text=\"bind:NA_ODR_FBID_RSNC_NM\"/><Cell col=\"32\" text=\"bind:NA_RVO_FBID_RSNC_NM\"/><Cell col=\"33\" text=\"bind:LSCHG_DTM\"/><Cell col=\"34\" text=\"bind:LS_CMENO\"/><Cell col=\"35\" text=\"bind:DEL_DTM\"/><Cell col=\"36\" text=\"bind:BOXPE_AQZ\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "28.55%", null, "338", "44", null, "0", this.div_list);
            obj.set_taborder("13");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "78.3%", "10", null, "20", "16.88%", null, this.div_list);
            obj.set_taborder("14");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "203", null, this);
            obj.set_taborder("9");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print00", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("10");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "161", null, this);
            obj.set_taborder("11");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1511");
            		p.set_titletext("상품정보통합관리");

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
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1511.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1511.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	var param = [  
        		{code:"CSER_CTR_TPC", dsName:"ds_cser_ctr_tpc", selecttype:"A"}
        	];
        	this.gfn_setCommonCode(param);
        	this.div_search.cbo_sign_list00.set_index(0);
        	this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        //조회 전 계약유형 조회
        this.searchTrnrel = function()
        {
        	var edt01 = this.gfn_nullToEmpty(this.div_search.edt_data02.value); 	// 1.사업장코드
        	var edt02 = this.gfn_nullToEmpty(this.div_search.edt_data05.value);		// 2.사업장팀코드
        	
        	var params = "bzplc_code="+edt01
        				 +" bzplc_team="+edt02
        				 +" TRPL_C="+this.getTrplCode();
        	
        	var sSvcID        = "search_rel";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/retrieveTrnRel";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_trntel=ds_trntel ds_cif=ds_cif";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출 
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType, true);
        }

        //조회버튼
        this.btn_search00_onclick = function(obj,e)
        {
        	if(this.gfn_nullToEmpty(this.div_search.edt_data02.value) != ""){
        		this.searchTrnrel();
        	}
        	this.fn_paging(1); //처음 조회 시 페이지를 확인한다.
        }
        //페이징 처리
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();  
        	this.ds_trtwrs.clearData();     //Grid에 Binding된 Dataset명	
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 10; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	this.search();
        }

        /* 페이지 숫자 위치 설정*/
        this.div_list_onsize = function(obj,e)
        {	
        	var nLeft = (e.cx/2)-(this.div_list.div_page.width/2);
        	this.div_list.div_page.set_left(nLeft);
        }

        //조회구간
        this.search = function()
        {
        	var edt00 = this.gfn_nullToEmpty(this.div_search.edt_data00.value); 	// 1.상품코드
        	var edt01 = this.gfn_nullToEmpty(this.div_search.edt_data02.value); 	// 2.사업장코드
        	var edt02 = this.gfn_nullToEmpty(this.div_search.edt_data05.value);		// 3.사업장팀코드
        	var datesel = this.div_search.rdo_daily_sel.value;						// 4.일자구분 radio 코드 값
        	var date1 = this.gfn_nullToEmpty(this.div_search.cal_lschg00.value); 	// 5.일자구분 시작일
        	var date2 = this.gfn_nullToEmpty(this.div_search.cal_lschg01.value); 	// 6.일자구분 종료일
        	var ctr_tpc = this.div_search.cbo_sign_list00.value;					// 7.계약유형코드
        	
        	
        	if(edt00 == "" && edt01 == ""){
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1511.view.input.wrs.code'));
        		return false;
        	}
        	
        	if(edt00.length < 7){
        	    // alert("상품코드를 7자리 이상 입력하세요.");
        	    // return false;
        	}
        	

        	// 일자구분 Validation CHECK
        	if(date1 != "" && date2 != ""){
        		if(this.gfn_getDiffDay(this.div_search.cal_lschg00.value,this.div_search.cal_lschg01.value) < 0){
        			this.alert(this.gfn_getTextMessage('validation.message.fromDate.toDate.reConfirm'));
        			return false;
        		}else{
        			if(this.gfn_getDiffDay(this.div_search.cal_lschg00.value,this.div_search.cal_lschg01.value) > 31){
        				this.alert(this.gfn_getTextMessage('validation.message.selectDateIn31Day'));
        				return false;
        			}
        		}
        	}else if(date1 != "" && date2 == ""){
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1511.view.transaction.history')+' ['+date1+' - '+date2+']');
        		return false;
        	}else if(date1 == "" && date2 != ""){
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1511.view.transaction.history')+' ['+date1+' - '+date2+']');
        		return false;
        	}
        	

        	var sVal =  "sto_code="+edt00
        				+" datesel="+datesel
        				+" bzplc_code="+edt01
        				+" bzplc_team="+edt02
        				+" date1="+date1
        				+" date2="+date2
        				+" ctr_tpc="+ctr_tpc;
        				
        	if(this.ds_trntel.getColumn(0,"CSER_CTR_TPC") == "4"){
        		sVal += " TRPL_C="+this.ds_cif.getColumn(0,"UP_NA_TRPL_C");
        	}else{
        		sVal += " TRPL_C="+this.getTrplCode();
        	}
        	
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/retrievePricatDetails";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	var sOutDatasets  = "ds_trtwrs=ds_trtwrs ds_pageVO=ds_pageVO";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = sVal;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출 
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	
        }

        this.fn_callback = function(svcID,nCD,sMSG)//첫번째 인자값은 통신 ID
        {
        	if(nCD < 0){
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}else{
        		//페이징 처리 보고
        		if(svcID == "p_search"){
        			var p_sum = 0;
        			if(this.div_list.grd_main00.rowcount > 0){
        				for(var i=0;i<this.ds_trtwrs.rowcount;i++){
        					if(this.ds_trtwrs.getColumn(i,"CTR_TPC") == 1){
        						this.ds_trtwrs.setColumn(i,"CTR_TPC","중앙본부계통계약");
        					}else if(this.ds_trtwrs.getColumn(i,"CTR_TPC") == 2){
        						this.ds_trtwrs.setColumn(i,"CTR_TPC","지역본부계통계약");
        					}else if(this.ds_trtwrs.getColumn(i,"CTR_TPC") == 3){
        						this.ds_trtwrs.setColumn(i,"CTR_TPC","시군지부계통계약");
        					}else if(this.ds_trtwrs.getColumn(i,"CTR_TPC") == 4){
        						this.ds_trtwrs.setColumn(i,"CTR_TPC","자체계약");
        					}else{
        						this.ds_trtwrs.setColumn(i,"CTR_TPC","본점계약");
        					}
        					
        					if(this.ds_trtwrs.getColumn(i,"TXT_DSC") == 1){
        						this.ds_trtwrs.setColumn(i,"TXT_DSC","과세");
        					}else if(this.ds_trtwrs.getColumn(i,"TXT_DSC") == 2){
        						this.ds_trtwrs.setColumn(i,"TXT_DSC","면세");
        					}else{
        						this.ds_trtwrs.setColumn(i,"TXT_DSC","영세");
        					}
        				}
        				
        				
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				
        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_main00,div_page",lsNowPage);

        				p_sum = 100;
        				//합계대비의 합계  100으로 설정
        				this.div_list.grd_main00.setCellProperty("Summ",3,"text",p_sum);
        				
        				//현재페이지							
        				var sCurrentPage = this.ds_pageVO.getColumn(0, "CURRENT_PAGE")
        			}else{
        				this.div_list.div_page.fn_pageSet(0, 0,"grd_main00,div_page",lsNowPage);//페이징 설정				
        				
        				this.div_list.grd_main00.setCellProperty("Summ",1,"text",0);
        				this.div_list.grd_main00.setCellProperty("Summ",2,"text",0);
        				this.div_list.grd_main00.setCellProperty("Summ",3,"text",0);
        				this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        	}
        }

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        //수요처 조회
        this.div_search_btn_popup01_onclick = function(params)	// param -> true: 자동검색 , false: 수동검색
        {
        	if(params == true){	
        		if((this.gfn_nullToEmpty(this.div_search.edt_data02.value).length > 0 && this.gfn_nullToEmpty(this.div_search.edt_data02.value).length < 7) || this.gfn_nullToEmpty(this.div_search.edt_data02.value).length > 13){
        			this.gfn_getMessage('alert','msg.van_ds_sc_1320.view.code.length');
        			return;
        		}
        		if(this.gfn_nullToEmpty(this.div_search.edt_data03.value).length == 1){
        			this.gfn_getMessage('alert','msg.van_ds_sc_1320.view.cser.length');
        			return;
        		}
        	}

        	var code = this.div_search.edt_data02.value;		// 사업장 코드 Edit 박스
        	var textname = this.div_search.edt_data03.value;	// 사업장 명 Edit 박스
        	
        	var param = {
        				autoType:params,
        				searchCode:code,
        				searchText:textname
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}
        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("pvopl_trpl","POPUP::POPUP_SRC_RVOPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);
        }

        //상품 조회
        this.div_search_btn_popup00_onclick = function(params)
        {
        	if(params == true){	
        		if(this.gfn_nullToEmpty(this.div_search.edt_data00.value).length > 0 && this.gfn_nullToEmpty(this.div_search.edt_data00.value).length < 7){
        			this.gfn_getMessage('alert','msg.van_ds_sc_1530.view.wrsc.moredata');
        			return;
        		}
        		if(this.gfn_nullToEmpty(this.div_search.edt_data01.value).length == 1){
        			this.gfn_getMessage('alert','msg.van_ds_sc_1530.view.wrsnm.moredata');
        			return;
        		}
        	}

        	var code = this.div_search.edt_data00.value;
        	var textname = this.div_search.edt_data01.value;
        	var param = {
        				autoType:params,
        				searchCode:code,
        				searchText:textname
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}
        	
        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("src_wrs","POPUP::POPUP_SRC_WRS.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if(strVal != undefined){
        		var arrVal = strVal.split(",");
        		if(strId == "src_wrs"){
        			this.div_search.edt_data00.set_value(arrVal[0]);
        			this.div_search.edt_data01.set_value(arrVal[1]);
        		}
        		if(strId == "pvopl_trpl"){
        			this.div_search.edt_data02.set_value(arrVal[0]);
        			this.div_search.edt_data03.set_value(arrVal[1]);
        			if(arrVal[3] == ""){
        				this.div_search.edt_data04.set_value("00");
        			}else{
        				this.div_search.edt_data04.set_value(arrVal[3]);
        			}
        			if(arrVal[2] == ""){
        				this.div_search.edt_data05.set_value("팀없음");
        			}else{
        				this.div_search.edt_data05.set_value(arrVal[2]);
        			}
        			
        		}
        	}
        }

        this.btn_print00_onclick = function(obj,e)
        {
        	if(this.div_list.grd_main00.rowcount < 1){
        		this.gfn_getMessage('alert','result.message.search.no.exist.data');
        		return;
        	}
        	
        	var cser_code = this.gfn_nullToEmpty(this.div_search.edt_data00.value);
        	var bz_code = this.gfn_nullToEmpty(this.div_search.edt_data02.value);
        	var bz_team = this.gfn_nullToEmpty(this.div_search.edt_data05.value);
        	var ctr_tpc = this.div_search.cbo_sign_list00.value;
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_lschg00.value);
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_lschg01.value);
        	var rdo_sep = this.div_search.rdo_daily_sel.value;
        	
        	var titleForm = this.getTrplCodePrint()+" ,상품코드:"+cser_code+" ,사업장:"+bz_code+" ,사업장 팀코드:"+bz_team
        					+" ,계약유형:"+ctr_tpc+" ,조회일자 ["+from_date+" ~ "+to_date+"]"
        					+" ,일자구분:"+rdo_sep
        	;
        	var trpl = "";
        	if(this.ds_trntel.getColumn(0,"CSER_CTR_TPC") == "4"){
        		trpl = this.ds_cif.getColumn(0,"UP_NA_TRPL_C");
        	}else{
        		trpl = this.getTrplCode();
        	}
        	
        	var ozParam = {
        		sId: 'VAN_DS_SC_1511',
        		sUrl: '/rest/oz/pds/pricat/Product/retrievePricatDetails',
        		paramType: 'param',
        		sParam: {
        			TRPL_C:trpl,
        			TRPL_C_TEXT:titleForm,
        			sto_code:cser_code,
        			bzplc_code:bz_code,
        			bzplc_team:bz_team,
        			ctr_tp:ctr_tpc,
        			datesel:rdo_sep,
        			fromdate:from_date,
        			todate:to_date
        		}
        	};
        	this.ozViewer(ozParam);
        }

        //엑셀 다운로드 버튼
        this.btn_excel_onclick = function(obj,e)
        {
        	var params = "sto_code="+this.gfn_nullToEmpty(this.div_search.edt_data00.value)		//상품코드
        				+"&datesel="+this.div_search.rdo_daily_sel.value						//일자구분
        				+"&bzplc_code="+this.gfn_nullToEmpty(this.div_search.edt_data02.value)	//사업장코드
        				+"&bzplc_team="+this.gfn_nullToEmpty(this.div_search.edt_data05.value)	//사업장팀코드
        				+"&date1="+this.gfn_nullToEmpty(this.div_search.cal_lschg00.value)		//일자구분 시작일
        				+"&date2="+this.gfn_nullToEmpty(this.div_search.cal_lschg01.value)		//일자구분 종료일
        				+"&ctr_tpc="+this.div_search.cbo_sign_list00.value;						//계약유형코드
        	
        	var trpl = "";
        	if(this.ds_trntel.getColumn(0,"CSER_CTR_TPC") == "4"){
        		params += "&TRPL_C="+this.ds_cif.getColumn(0,"UP_NA_TRPL_C");
        	}else{
        		if(this.div_list.grd_main00.rowcount < 1){
        			params += "&TRPL_C=null";
        		}else{
        			params += "&TRPL_C="+this.getTrplCode();	// 권한사업장코드
        		}
        	}
        	
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelPricatDetails?"+params, this);	
        }

        //상품코드 이벤트
        this.div_search_edt_data00_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.div_search_edt_data01_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        //사업장 코드
        this.div_search_edt_data02_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup01_onclick(true); // true: 자동검색 , false: 수동검색
        	}
        }

        //사업장명 이벤트
        this.div_search_edt_data03_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup01_onclick(true);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onsize", this.div_list_onsize, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.btn_excel00.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_search.edt_data00.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.edt_data01.addEventHandler("onkeydown", this.div_search_edt_data01_onkeydown, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_search.edt_data02.addEventHandler("onkeydown", this.div_search_edt_data02_onkeydown, this);
            this.div_search.edt_data03.addEventHandler("onkeydown", this.div_search_edt_data03_onkeydown, this);
            this.div_search.btn_popup01.addEventHandler("onclick", this.div_search_btn_popup01_onclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_print00.addEventHandler("onclick", this.btn_print00_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1511.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
