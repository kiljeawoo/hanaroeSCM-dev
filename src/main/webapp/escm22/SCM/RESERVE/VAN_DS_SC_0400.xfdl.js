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
                this.set_name("VAN_DS_SC_0400");
                this.set_titletext("입고예약관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_reserveCenter", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"VHCNO\" type=\"string\" size=\"32\"/><Column id=\"PHD_DVY_CAFFNM\" type=\"string\" size=\"32\"/><Column id=\"TELNO\" type=\"string\" size=\"32\"/><Column id=\"PHD_PAS_SRTR_BKG_TMI\" type=\"string\" size=\"32\"/><Column id=\"PHD_PAS_BLK_BKG_TMI\" type=\"string\" size=\"32\"/><Column id=\"STPL_CSTD_ELT_TAG_BKG_TMI\" type=\"string\" size=\"32\"/><Column id=\"STPL_CSTD_GEN_BKG_TMI\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"CRUD_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"VHC_BKG_PHD_IDVD_NO\" type=\"string\" size=\"32\"/><Column id=\"VHC_BKG_DT\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN_ENO\" type=\"string\" size=\"32\"/><Column id=\"LS_CMENO\" type=\"string\" size=\"32\"/><Column id=\"STR_PHD_IDVD_NO\" type=\"string\" size=\"32\"/><Column id=\"PRC_YN\" type=\"string\" size=\"32\"/><Column id=\"RSP_C_CNTN\" type=\"string\" size=\"32\"/><Column id=\"VHC_ENTRUK_BKG_TMI\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dlvpnsht", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"VHCNO\" type=\"string\" size=\"32\"/><Column id=\"PHD_DVY_CAFFNM\" type=\"string\" size=\"32\"/><Column id=\"TELNO\" type=\"string\" size=\"32\"/><Column id=\"PHD_PAS_SRTR_BKG_TMI\" type=\"string\" size=\"32\"/><Column id=\"PHD_PAS_BLK_BKG_TMI\" type=\"string\" size=\"32\"/><Column id=\"STPL_CSTD_ELT_TAG_BKG_TMI\" type=\"string\" size=\"32\"/><Column id=\"STPL_CSTD_GEN_BKG_TMI\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"CRUD_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"VHC_BKG_PHD_IDVD_NO\" type=\"string\" size=\"32\"/><Column id=\"VHC_BKG_DT\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN_ENO\" type=\"string\" size=\"32\"/><Column id=\"LS_CMENO\" type=\"string\" size=\"32\"/><Column id=\"STR_PHD_IDVD_NO\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cbo_slpno", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"VHCNO\" type=\"string\" size=\"32\"/><Column id=\"PHD_DVY_CAFFNM\" type=\"string\" size=\"32\"/><Column id=\"TELNO\" type=\"string\" size=\"32\"/><Column id=\"PHD_PAS_SRTR_BKG_TMI\" type=\"string\" size=\"32\"/><Column id=\"PHD_PAS_BLK_BKG_TMI\" type=\"string\" size=\"32\"/><Column id=\"STPL_CSTD_ELT_TAG_BKG_TMI\" type=\"string\" size=\"32\"/><Column id=\"STPL_CSTD_GEN_BKG_TMI\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"CRUD_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"VHC_BKG_PHD_IDVD_NO\" type=\"string\" size=\"32\"/><Column id=\"VHC_BKG_DT\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN_ENO\" type=\"string\" size=\"32\"/><Column id=\"LS_CMENO\" type=\"string\" size=\"32\"/><Column id=\"STR_PHD_IDVD_NO\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rsvTime", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HHMM\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"HHMM\">07:00</Col></Row><Row><Col id=\"HHMM\">07:20</Col></Row><Row><Col id=\"HHMM\">07:40</Col></Row><Row><Col id=\"HHMM\">08:00</Col></Row><Row><Col id=\"HHMM\">08:20</Col></Row><Row><Col id=\"HHMM\">08:40</Col></Row><Row><Col id=\"HHMM\">09:00</Col></Row><Row><Col id=\"HHMM\">09:20</Col></Row><Row><Col id=\"HHMM\">09:40</Col></Row><Row><Col id=\"HHMM\">10:00</Col></Row><Row><Col id=\"HHMM\">10:20</Col></Row><Row><Col id=\"HHMM\">10:40</Col></Row><Row><Col id=\"HHMM\">11:00</Col></Row><Row><Col id=\"HHMM\">11:20</Col></Row><Row><Col id=\"HHMM\">11:40</Col></Row><Row><Col id=\"HHMM\">12:00</Col></Row><Row><Col id=\"HHMM\">12:20</Col></Row><Row><Col id=\"HHMM\">12:40</Col></Row><Row><Col id=\"HHMM\">13:00</Col></Row><Row><Col id=\"HHMM\">13:20</Col></Row><Row><Col id=\"HHMM\">13:40</Col></Row><Row><Col id=\"HHMM\">14:00</Col></Row><Row><Col id=\"HHMM\">14:20</Col></Row><Row><Col id=\"HHMM\">14:40</Col></Row><Row><Col id=\"HHMM\">15:00</Col></Row><Row><Col id=\"HHMM\">15:20</Col></Row><Row><Col id=\"HHMM\">15:40</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("예약일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_vhc_bkg_dt", "absolute", "94", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static01", "absolute", "528", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "224", "10", "115", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_text("배송예정서번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_dvy_plash_slpno", "absolute", "339", "10", "135", "21", null, null, this.div_search);
            obj.set_taborder("10");
            obj.set_positionstep("1");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_dvy_plash_slpno", "absolute", "477", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_vhcno", "absolute", "607", "10", "127", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_positionstep("1");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_dvy_plash_slpno00", "absolute", "500", "10", "54", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("129");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "327", "42", null, "29", "0", null, this.div_list);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "327", "98", null, "29", "0", null, this.div_list);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "327", "70", null, "29", "0", null, this.div_list);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "218", "42", "110", "29", null, null, this.div_list);
            obj.set_taborder("2");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "512", "42", "110", "29", null, null, this.div_list);
            obj.set_taborder("4");
            obj.set_text("기사명");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd", "absolute", "0", "300", null, null, "0", "0", this.div_list);
            obj.set_taborder("53");
            obj.set_binddataset("ds_reserveCenter");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"차량번호\"/><Cell col=\"2\" text=\"운전자명\"/><Cell col=\"3\" text=\"연락처\"/><Cell col=\"4\" text=\"TC(소터)\"/><Cell col=\"5\" text=\"TC(벌크)\"/><Cell col=\"6\" text=\"DC(일반)\"/><Cell col=\"7\" text=\"공급업체코드\"/><Cell col=\"8\" text=\"공급업체명\"/><Cell col=\"9\" text=\"삭제\"/><Cell col=\"10\" text=\"진행상태\"/><Cell col=\"11\" text=\"결과수신\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:VHCNO\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PHD_DVY_CAFFNM\"/><Cell col=\"3\" text=\"bind:TELNO\"/><Cell col=\"4\" expr=\"expr:PHD_PAS_SRTR_BKG_TMI == '' ? '' : PHD_PAS_SRTR_BKG_TMI.substr(0,2)+':'+PHD_PAS_SRTR_BKG_TMI.substr(2,2)\"/><Cell col=\"5\" expr=\"expr:PHD_PAS_BLK_BKG_TMI == '' ? '' : PHD_PAS_BLK_BKG_TMI.substr(0,2)+':'+PHD_PAS_BLK_BKG_TMI.substr(2,2)\"/><Cell col=\"6\" expr=\"expr:STPL_CSTD_GEN_BKG_TMI == '' ? '' : STPL_CSTD_GEN_BKG_TMI.substr(0,2)+':'+STPL_CSTD_GEN_BKG_TMI.substr(2,2)\"/><Cell col=\"7\" text=\"bind:NA_TRPL_C\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"none\" expr=\"expr:CRUD_DSC == 'D' ? '1' : '0'\" suppress=\"0\"/><Cell col=\"10\" text=\"expr:PRC_YN == 'Y' ? '성공' : PRC_YN == 'E' ? '에러' : PRC_YN == 'N' ? '처리 중' : '진행 전'\"/><Cell col=\"11\" text=\"expr:PRC_YN == 'N' ? '' : RSP_C_CNTN\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "328", "100", "7", "28", null, null, this.div_list);
            obj.set_taborder("59");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static47", "absolute", "218", "17", "203", "21", null, null, this.div_list);
            obj.set_taborder("60");
            obj.set_text("차량정보입력");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_phd_dvy_caffnm", "absolute", "625", "46", "159", "21", null, null, this.div_list);
            obj.set_taborder("63");
            obj.set_positionstep("1");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "218", "98", "110", "29", null, null, this.div_list);
            obj.set_taborder("65");
            obj.set_text("DOCK구분");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_vhcno", "absolute", "331", "46", "154", "21", null, null, this.div_list);
            obj.set_taborder("61");
            obj.set_positionstep("1");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_vhcno", "absolute", "488", "46", "21", "21", null, null, this.div_list);
            obj.set_taborder("62");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "42", "203", "187", null, null, this.div_list);
            obj.set_taborder("73");
            obj.set_binddataset("ds_dlvpnsht");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"배송예정서번호\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_DVY_PLASH_SLPNO\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "17", "203", "21", null, null, this.div_list);
            obj.set_taborder("74");
            obj.set_text("배송예정서 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "218", "70", "110", "29", null, null, this.div_list);
            obj.set_taborder("75");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "327", "126", null, "29", "0", null, this.div_list);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "218", "126", "110", "29", null, null, this.div_list);
            obj.set_taborder("77");
            obj.set_text("예약시간");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "512", "70", "110", "29", null, null, this.div_list);
            obj.set_taborder("78");
            obj.set_text("삭제여부");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new CheckBox("chk_delYn", "absolute", "629", "74", "56", "21", null, null, this.div_list);
            obj.set_taborder("79");
            obj.set_text("삭제");
            obj.set_truevalue("D");
            obj.set_falsevalue("I");
            obj.set_value("I");
            obj.set_enable("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Combo("cbo_rsvTime", "absolute", "331", "130", "453", "21", null, null, this.div_list);
            this.div_list.addChild(obj.name, obj);
            obj.set_taborder("80");
            obj.set_text("[] 선택안됨");
            obj.set_codecolumn("HHMM");
            obj.set_datacolumn("HHMM");
            obj.set_innerdataset("@ds_rsvTime");
            obj.set_index("0");
            obj = new Static("Static13", "absolute", "218", "154", "110", "75", null, null, this.div_list);
            obj.set_taborder("83");
            obj.set_text("배송예정서(목록)");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "327", "154", null, "75", "0", null, this.div_list);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "331", "208", null, "21", "62", null, this.div_list);
            obj.set_taborder("86");
            obj.set_text("* 좌측(배송예정서정보)에서 해당 차량에 배정된 항목을 선택하십시요.");
            obj.set_cssclass("sta_WF_DescriptionB02");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_processingNumber", "absolute", "348", "15", null, "21", "139", null, this.div_list);
            obj.set_taborder("89");
            obj.set_usedecorate("true");
            obj.style.set_align("right middle");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "279", "203", "21", null, null, this.div_list);
            obj.set_taborder("90");
            obj.set_text("차량예약내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Combo("cbo_num01", "absolute", "331", "74", "53", "21", null, null, this.div_list);
            this.div_list.addChild(obj.name, obj);
            var cbo_num01_innerdataset = new Dataset("cbo_num01_innerdataset", this.div_list.cbo_num01);
            cbo_num01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row><Row><Col id=\"codecolumn\">016</Col><Col id=\"datacolumn\">016</Col></Row><Row><Col id=\"codecolumn\">017</Col><Col id=\"datacolumn\">017</Col></Row><Row><Col id=\"codecolumn\">018</Col><Col id=\"datacolumn\">018</Col></Row><Row><Col id=\"codecolumn\">019</Col><Col id=\"datacolumn\">019</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">031</Col><Col id=\"datacolumn\">031</Col></Row><Row><Col id=\"codecolumn\">032</Col><Col id=\"datacolumn\">032</Col></Row><Row><Col id=\"codecolumn\">033</Col><Col id=\"datacolumn\">033</Col></Row><Row><Col id=\"codecolumn\">041</Col><Col id=\"datacolumn\">041</Col></Row><Row><Col id=\"codecolumn\">042</Col><Col id=\"datacolumn\">042</Col></Row><Row><Col id=\"codecolumn\">043</Col><Col id=\"datacolumn\">043</Col></Row><Row><Col id=\"codecolumn\">051</Col><Col id=\"datacolumn\">051</Col></Row><Row><Col id=\"codecolumn\">052</Col><Col id=\"datacolumn\">052</Col></Row><Row><Col id=\"codecolumn\">053</Col><Col id=\"datacolumn\">053</Col></Row><Row><Col id=\"codecolumn\">054</Col><Col id=\"datacolumn\">054</Col></Row><Row><Col id=\"codecolumn\">055</Col><Col id=\"datacolumn\">055</Col></Row><Row><Col id=\"codecolumn\">061</Col><Col id=\"datacolumn\">061</Col></Row><Row><Col id=\"codecolumn\">062</Col><Col id=\"datacolumn\">062</Col></Row><Row><Col id=\"codecolumn\">063</Col><Col id=\"datacolumn\">063</Col></Row><Row><Col id=\"codecolumn\">064</Col><Col id=\"datacolumn\">064</Col></Row></Rows>");
            obj.set_innerdataset(cbo_num01_innerdataset);
            obj.set_taborder("91");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");
            obj = new Static("Static33", "absolute", "385", "74", "11", "21", null, null, this.div_list);
            obj.set_taborder("92");
            obj.set_text("-");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "448", "74", "9", "21", null, null, this.div_list);
            obj.set_taborder("94");
            obj.set_text("-");
            this.div_list.addChild(obj.name, obj);
            obj = new CheckBox("chk_docktype1", "absolute", "335", "102", "75", "21", null, null, this.div_list);
            obj.set_taborder("96");
            obj.set_text("TC(소터)");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_list.addChild(obj.name, obj);
            obj = new CheckBox("chk_docktype2", "absolute", "435", "102", "75", "21", null, null, this.div_list);
            obj.set_taborder("97");
            obj.set_text("TC(벌크)");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_list.addChild(obj.name, obj);
            obj = new CheckBox("chk_docktype3", "absolute", "535", "102", "75", "21", null, null, this.div_list);
            obj.set_taborder("98");
            obj.set_text("DC(일반)");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_rowUpdate", "absolute", null, "15", "82", "21", "55", null, this.div_list);
            obj.set_taborder("99");
            obj.set_text("행추가/수정");
            this.div_list.addChild(obj.name, obj);
            obj = new ListBox("lst_slpno", "absolute", "331", "158", "453", "50", null, null, this.div_list);
            this.div_list.addChild(obj.name, obj);
            obj.set_taborder("100");
            obj.set_innerdataset("@ds_cbo_slpno");
            obj.set_datacolumn("NA_DVY_PLASH_SLPNO");
            obj.set_codecolumn("STR_PHD_IDVD_NO");
            obj = new Edit("edt_hidden_updateYn", "absolute", null, "13", "74", "21", "282", null, this.div_list);
            obj.set_taborder("101");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_clear", "absolute", null, "15", "53", "21", "0", null, this.div_list);
            obj.set_taborder("102");
            obj.set_text("CLEAR");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("mae_num03", "absolute", "456", "74", "53", "21", null, null, this.div_list);
            obj.set_taborder("103");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("mae_num02", "absolute", "394", "74", "53", "21", null, null, this.div_list);
            obj.set_taborder("104");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_hidden_idx", "absolute", null, "13", "74", "21", "389", null, this.div_list);
            obj.set_taborder("105");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0", "230", "778", "40", null, null, this.div_list);
            obj.set_taborder("106");
            obj.set_text("* 입고예약 등록 : 차량번호 한 건씩 등록하시기 바랍니다.(차량번호 입력 - DOCK구분/예약시간 선택 - 배송예정서 선택 - 행추가 - 저장)\r\n* 입고예약 수정 : 기존 예약건을 삭제 후 재등록하시기 바랍니다. (예약내역 선택 - 삭제여부 체크 - 행수정 - 저장)");
            this.div_list.addChild(obj.name, obj);

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

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("132");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("133");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("134");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "195", "16", "30", "67", null, null, this);
            obj.set_taborder("139");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "159", null, this);
            obj.set_taborder("141");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("129");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("입고예약관리");

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
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0400.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0400.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {
        	//그리드클릭 이벤트 등록
        	this.div_list.Grid00.addEventHandler("oncellclick", this.grd_afterFnc1, this);
        	this.div_list.grd.addEventHandler("oncellclick", this.grd_afterFnc2, this);
        	this.div_list.cbo_num01.set_index(0);
        	this.div_list.sta_processingNumber.set_text(this.gfn_setRowCount(0));
        	this.div_list.grd.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_list.Grid00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_search.cal_vhc_bkg_dt.set_value(this.gfn_today("yyyyMMdd"));

        	//권한사업장 콤보박스 변경시 거래처코드 가져오기
        	this.div_auth.setFunctionName("fn_afterCall");
        	this.div_auth.chk_all.set_visible(false);

        	this.div_search.edt_dvy_plash_slpno00.set_value(application.gv_glnCode);

        	//행추가인지 수정인지 구분값
        	this.div_list.edt_hidden_updateYn.set_value("");
        	this.div_list.edt_hidden_idx.set_value("");

        	//예약시간 가져오기
        	//this.fn_getRsvTime(this.div_search.cal_vhc_bkg_dt.value);

        	//페이지 로딩시 바로 조회.
        	this.fn_search();
        	this.fn_search_dlvpnsht();
        };

        //권한사업장 콤보박스 변경시 권한사업장 코드 가져옴
        this.fn_afterCall = function(sVal)
        {
        	this.div_search.edt_dvy_plash_slpno00.set_value(sVal);
        }

        /* 배송예정서번호 돋보기 버튼 클릭시 */
        this.div_search_btn_dvy_plash_slpno_onclick = function(obj,e)
        {
        	var param = "";
        	if (this.div_search.edt_dvy_plash_slpno00.value != null) {
        		param = this.gfn_nullToEmpty(this.div_search.edt_dvy_plash_slpno00.value);
        	} else {
        		param = application.gv_glnCode;
        	}

        	var oArg = {AuthorityNo:param, ddly_yn:"0"};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("VAN_DS_SC_0400", "SCM.DELIVERY::VAN_DS_SC_0370_P01.xfdl", oArg, sOption, sPopupCallBack);
        }

        /* 현재시간이후 예약시간 가져오기*/
        this.fn_getRsvTime = function(dt)
        {
        	var param = "SEARCH_DT="+dt;

        	var sSvcID        = "get20MinList";//통신아이디
        	var sURL          = "svc::rest/common/get20MinList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_rsvTime=DATASET";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*Grid Init*/
        this.fn_init = function()
        {
        	this.ds_reserveCenter.clearData();
        	this.fn_comp_clear(); //입력정보 init
        	this.fn_comp_enable(true);
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	if (this.gfn_isNull(this.div_search.cal_vhc_bkg_dt.value)) {
        		this.alert('예약일자를 입력해 주세요');
        		return false;
        	}
        	return true;
        }

        /* search */
        this.fn_search = function()
        {
        	if (!this.fn_validationCheck()) return;

        	//행추가인지 수정인지 구분값
        	this.div_list.edt_hidden_updateYn.set_value("");
        	this.div_list.edt_hidden_idx.set_value("");

        	this.fn_init();

        	var vhc_bkg_dt = this.gfn_nullToEmpty(this.div_search.cal_vhc_bkg_dt.value); //예약일자
        	var dvy_plash_slpno = this.gfn_nullToEmpty(this.div_search.edt_dvy_plash_slpno.value); //배송예정서번호
        	var vhcno = this.gfn_nullToEmpty(this.div_search.edt_vhcno.value); //차량번호

        	//권한사업장 코드
        	var trplC = this.getTrplCode();

        	var param = "vhc_bkg_dt="+vhc_bkg_dt+
        				" dvy_plash_slpno="+dvy_plash_slpno+
        				" vhcno="+vhcno+
        				" TRPL_C=" + trplC;

        	var sSvcID        = "retrieveReserveCenterList";//통신아이디
        	var sURL          = "svc::rest/reserve/retrieveReserveCenterList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_reserveCenter=ds_reserveCenter";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 조회버튼 클릭시 */
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        	this.fn_search_dlvpnsht();
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	} else {
        		if (svcID == "retrieveReserveCenterList") {
        			//처리대상건수
        			this.div_list.sta_processingNumber.set_text(this.gfn_setRowCount(0));

        			//예약시간
        			this.div_list.cbo_rsvTime.set_index(0);

        			if (this.ds_reserveCenter.rowcount == 0) {
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		} else if (svcID == "retrieveReserveSlpnoList") {
        			/*
        			for (var i=0;i<this.ds_dlvpnsht.rowcount;i++) {
        				this.ds_cbo_slpno.setColumn(i,"SLPNO",i);
        				// this.ds_cbo_slpno.saveXML();
        			}
        			*/
        		} else if (svcID == "saveReserveCenter") {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			this.fn_search();
        		} else if (svcID == "get20MinList") {
        			this.div_list.cbo_rsvTime.set_index(0);
        		}
        	}
        }

        //배송예정서 Search - 권한사업장에 있는 것에 대한 배송예정서리스트
        this.fn_search_dlvpnsht = function()
        {
        	this.ds_dlvpnsht.clearData();

        	var vhc_bkg_dt = this.gfn_nullToEmpty(this.div_search.cal_vhc_bkg_dt.value); //예약일자
        	var dvy_plash_slpno = this.gfn_nullToEmpty(this.div_search.edt_dvy_plash_slpno.value); //배송예정서번호
        	var vhcno = this.gfn_nullToEmpty(this.div_search.edt_vhcno.value); //차량번호

        	//권한사업장 코드
        	var trplC = this.getTrplCode();

        	var params = "vhc_bkg_dt="+vhc_bkg_dt+
        				" dvy_plash_slpno="+dvy_plash_slpno+
        				" vhcno="+vhcno+
        				" TRPL_C=" + trplC;

        	var sSvcID        = "retrieveReserveSlpnoList";//통신아이디
        	var sURL          = "svc::/rest/reserve/retrieveReserveSlpnoList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dlvpnsht=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /* 차량번호 돋보기 클릭시*/
        this.div_list_btn_vhcno_onclick = function(obj,e)
        {
        	var vhcno = this.gfn_nullToEmpty(this.div_list.edt_vhcno.value); //차량번호

        	if (this.div_auth.visible == true) {
        		trplC = this.div_search.edt_dvy_plash_slpno00.value;
        	} else {
        		trplC = application.gv_glnCode;
        	}

        	var oArg = {code:vhcno, p_trplC:trplC};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("RESERVE_VHCNO","SCM.RESERVE::VAN_DS_SC_0400_P00.xfdl",oArg,sOption,sPopupCallBack);
        }

        /*팝업 애프터 */
        this.fn_popupAfter = function(strId,strVal)
        {
        	var strValNo = strVal.split(',');
        	this.div_list.edt_vhcno.set_value(strValNo[0]);
        	this.div_list.edt_phd_dvy_caffnm.set_value(strValNo[1]);
        	this.div_list.cbo_num01.set_value(strValNo[2]);
        	this.div_list.mae_num02.set_value(strValNo[3]);
        	this.div_list.mae_num03.set_value(strValNo[4]);

        	this.ds_cbo_slpno.clearData();
        }

        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        /* 그리드 row 클릭시 입력창으로 데이터 넘어감*/
        this.grd_afterFnc2 = function(obj,e)
        {
        	var row = this.ds_reserveCenter.rowposition;
        	
        	// 경통 처리 중인 건은 편집 불가 (200420)
        	if (this.ds_reserveCenter.getColumn(row, "PRC_YN") == 'N') {
        		this.alert("해당 예약건은 경통 처리가 진행 중 입니다. 잠시 후 다시 조회해주세요.");
        		return;
        	}
        	
        	this.div_list.edt_vhcno.set_value(this.ds_reserveCenter.getColumn(row, "VHCNO"));
           	this.div_list.edt_phd_dvy_caffnm.set_value(this.ds_reserveCenter.getColumn(row, "PHD_DVY_CAFFNM"));
           	
        	//행추가인지 수정인지 구분값
        	this.div_list.edt_hidden_updateYn.set_value("update");
        	this.div_list.edt_hidden_idx.set_value(this.ds_reserveCenter.getColumn(row, "VHC_BKG_PHD_IDVD_NO"));

           	//연락처가 통으로 들어와 '-' 단위로 스플릿해서 나눠서 넣어줘야함
           	var telno = this.ds_reserveCenter.getColumn(row, "TELNO");
           	var lstTelNo = telno.split('-');

        	this.div_list.cbo_num01.set_value(lstTelNo[0]);
        	this.div_list.mae_num02.set_value(lstTelNo[1]);
        	this.div_list.mae_num03.set_value(lstTelNo[2]);

        	//삭제 여부 추후 추가
        	if (this.ds_reserveCenter.getColumn(row, "CRUD_DSC") == 'D') {
        		this.div_list.chk_delYn.set_value(true);
        		if (this.ds_reserveCenter.getColumn(row, "PRC_YN") == "Y") {
        			this.fn_comp_enable(false);
        		}
        	} else {
        		this.div_list.chk_delYn.set_value(false);
        		if (this.gfn_isNull(this.div_list.edt_hidden_idx.value)) {
        			this.fn_comp_enable(true);
        		} else {
        			this.fn_comp_enable(false, true);
        		}
        	}

        	//체크박스 여부
        	var chk_docktype1_yn = this.ds_reserveCenter.getColumn(row, "PHD_PAS_SRTR_BKG_TMI");
        	var chk_docktype2_yn = this.ds_reserveCenter.getColumn(row, "PHD_PAS_BLK_BKG_TMI");
        	var chk_docktype3_yn = this.ds_reserveCenter.getColumn(row, "STPL_CSTD_GEN_BKG_TMI");

        	//소터
        	if (this.gfn_isNull(chk_docktype1_yn) || chk_docktype1_yn == ':') {
        		this.div_list.chk_docktype1.set_value('0');
        	} else {
        		this.div_list.chk_docktype1.set_value('1');
        		this.div_list.cbo_rsvTime.set_value(this.fn_getRsvTime(chk_docktype1_yn));
        	}

        	//벌크
        	if (this.gfn_isNull(chk_docktype2_yn) || chk_docktype2_yn == ':') {
        		this.div_list.chk_docktype2.set_value('0');
        	} else {
        		this.div_list.chk_docktype2.set_value('1');
        		this.div_list.cbo_rsvTime.set_value(this.fn_getRsvTime(chk_docktype2_yn));
        	}

        	//일반
        	if (this.gfn_isNull(chk_docktype3_yn) || chk_docktype3_yn == ':') {
        		this.div_list.chk_docktype3.set_value('0');
        	} else {
        		this.div_list.chk_docktype3.set_value('1');
        		this.div_list.cbo_rsvTime.set_value(this.fn_getRsvTime(chk_docktype3_yn));
        	}

        	//this.div_list.txa_slpno.set_value(this.ds_reserveCenter.getColumn(this.ds_reserveCenter.rowposition,"NA_DVY_PLASH_SLPNO")); //배송예정서목록
        	
        	//배송예정서목록에 조회
        	if (!this.gfn_isNull(this.div_list.edt_hidden_idx.value)) {
        		var vhcno = this.div_list.edt_vhcno.value;
        		var na_trpl_c = this.ds_reserveCenter.getColumn(row, "NA_TRPL_C");
        		var vhc_bkg_dt = this.ds_reserveCenter.getColumn(row, "VHC_BKG_DT");
        		var vhc_bkg_phd_idvd_no = this.div_list.edt_hidden_idx.value;

        		var params = "vhc_bkg_dt="+vhc_bkg_dt+
        					" vhcno="+nexacro.wrapQuote(vhcno)+
        					" na_trpl_c="+na_trpl_c+
        					" vhc_bkg_phd_idvd_no=" + vhc_bkg_phd_idvd_no;

        		var sSvcID        = "retrieveReserveSlpnoVhcBkgList";//통신아이디
        		var sURL          = "svc::/rest/reserve/retrieveReserveSlpnoVhcBkgList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_cbo_slpno=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	} else {
        		this.ds_cbo_slpno.clearData();
        	}
        }

        // 예약시간 콤보
        this.fn_getRsvTime = function(time)
        {
        	if (this.gfn_isNull(time) || time.length != 4) {
        		return "07:00";
        	}
        	return time.substring(0,2) + ":" + time.substring(2,4);
        }

        // 입력칸 활성/비활성
        this.fn_comp_enable = function(flag,isMdfy)
        {
        	if (this.gfn_isNull(isMdfy)) {
        		isMdfy = flag;
        	}
        	this.div_list.btn_rowUpdate.set_enable(isMdfy);
        	this.div_list.chk_delYn.set_enable(isMdfy);	
        	this.div_list.edt_vhcno.set_enable(flag);
        	this.div_list.edt_phd_dvy_caffnm.set_enable(flag);
        	this.div_list.cbo_num01.set_enable(flag);
        	this.div_list.mae_num02.set_enable(flag);
        	this.div_list.mae_num03.set_enable(flag);
        	this.div_list.chk_docktype1.set_enable(flag);
        	this.div_list.chk_docktype2.set_enable(flag);
        	this.div_list.chk_docktype3.set_enable(flag);
        	this.div_list.cbo_rsvTime.set_enable(flag);
        	this.div_list.Grid00.set_enable(flag);
        }

        /* 입력정보 초기화 */
        this.fn_comp_clear = function()
        {
        	this.div_list.edt_vhcno.set_value('');
        	this.div_list.edt_phd_dvy_caffnm.set_value('');
        	this.div_list.cbo_num01.set_value('010');
        	this.div_list.mae_num02.set_value('');
        	this.div_list.mae_num03.set_value('');
        	this.div_list.chk_delYn.set_value('I');
        	this.div_list.chk_docktype1.set_value('0');
        	this.div_list.chk_docktype2.set_value('0');
        	this.div_list.chk_docktype3.set_value('0');
        	this.div_list.cbo_rsvTime.set_value('');
        	this.div_list.lst_slpno.set_value('');

        	this.ds_cbo_slpno.clearData();
        }

        this.grd_afterFnc1 = function(obj,e)
        {
        	//클릭한 값
        	var select_slpno = this.ds_dlvpnsht.getColumn(this.ds_dlvpnsht.rowposition,"NA_DVY_PLASH_SLPNO"); //배송예정서번호
        	var select_idvdno = this.ds_dlvpnsht.getColumn(this.ds_dlvpnsht.rowposition,"STR_PHD_IDVD_NO"); //입고물류개별번호

        	var rowCount = this.ds_cbo_slpno.rowcount;
        	var dupCount = 0; //중복여부

        	if (rowCount == 0) {
        		var rowNum = this.ds_cbo_slpno.addRow();
        		this.ds_cbo_slpno.setColumn(rowNum,"NA_DVY_PLASH_SLPNO",select_slpno);
        		this.ds_cbo_slpno.setColumn(rowNum,"STR_PHD_IDVD_NO",select_idvdno);
        	} else {
        		//클릭시 리스트 박스 내로 이동 중복제거하여 추가
        		for (var i=0; i < rowCount ; i++) {
        			if (this.ds_cbo_slpno.getColumn(i,"NA_DVY_PLASH_SLPNO") == select_slpno) {
        				dupCount = dupCount+1;
        				//이미 선택되어 있는 배송예정서 입니다. 다른 배송예정서를 선택해주세요.
        				this.gfn_getMessage("alert", "msg.van_ds_sc_0400.view.dup");
        				return true;
        			}
        		}

        		if (dupCount == 0) {
        			var rowNum = this.ds_cbo_slpno.addRow();
        			this.ds_cbo_slpno.setColumn(rowNum,"NA_DVY_PLASH_SLPNO",select_slpno);
        			this.ds_cbo_slpno.setColumn(rowNum,"STR_PHD_IDVD_NO",select_idvdno);
        		}
        	}
        }

        this.div_list_btn_rowUpdate_onclick = function(obj,e)
        {
        	this.fn_isUpdate();
        }

        this.fn_isUpdate = function()
        {
        	if (!this.fn_crud_validation()) return;
        	
        	if (this.div_list.edt_hidden_updateYn.value == "update") {
        		this.fn_rowInsert("UPDATE");
        		return;
        	}
        	
        	var duplicateRowCount = 0;
        	for (var i=0;i<this.div_list.grd.rowcount;i++) {
        		var vhcno = this.ds_reserveCenter.getColumn(i,"VHCNO");
        		var na_trpl_c = this.ds_reserveCenter.getColumn(i,"NA_TRPL_C");
        		var no = this.ds_reserveCenter.getColumn(i,"VHC_BKG_PHD_IDVD_NO");
        		var crud = this.ds_reserveCenter.getColumn(i,"CRUD_DSC");
        		
        		// 삭제건은 체크하지 않음 (200413)
        		if (crud == "D") {
        			continue;
        		}

        		var authNum = "";
        		if (application.gv_mbcoType == 1) {
        			//본사일경우
        			authNum = this.div_auth.cbo_authorityWorkplace.value;
        		} else {
        			//지사일경우
        			authNum = application.gv_glnCode;
        		}

        		// 이미 등록된 차량일 경우 수정 여부 확인
        		if (vhcno == this.div_list.edt_vhcno.value && na_trpl_c==authNum) {
        			++duplicateRowCount;
        			if (!this.gfn_isNull(no)) {
        				this.alert("[ 차량번호 : "+this.div_list.edt_vhcno.value+" / 공급업체코드 : "+na_trpl_c+" ] 는(은) 이미 등록된 자료입니다.\n수정을 원하시면 삭제 후 재등록하시기 바랍니다.");
        				return;
        			} else {
        				if (application.confirm("[ 차량번호 : "+this.div_list.edt_vhcno.value+" / 공급업체코드 : "+na_trpl_c+" ] 는(은) 이미 입력한 자료입니다. 수정하시겠습니까?")) {
        					this.div_list.edt_hidden_idx.set_value(no);
        					// this.fn_rowUpdate();
        					this.fn_rowInsert("UPDATE");
        				} else {
        					return;
        				}
        			}
        		}
        	}

        	// 신규 등록
        	if (duplicateRowCount == 0) {
        		this.fn_rowInsert("INSERT");
        	}
        }

        this.fn_rowUpdate = function()
        {
        	var rsvTime = this.div_list.cbo_rsvTime.value;
        	rsvTime = rsvTime.replace(/:/gi, '');

        	//var rowNum = this.ds_reserveCenter.findRow("VHCNO", this.div_list.edt_vhcno.value);
        	var rowNum = this.ds_reserveCenter.findRow("VHC_BKG_PHD_IDVD_NO", this.div_list.edt_hidden_idx.value);

        	//차량입차예약시분
        	this.ds_reserveCenter.setColumn(rowNum, "VHC_ENTRUK_BKG_TMI", rsvTime);
        	
        	var tel = this.div_list.cbo_num01.value + "-" + this.div_list.mae_num02.value + "-" + this.div_list.mae_num03.value;
        	this.ds_reserveCenter.setColumn(rowNum, 'TELNO', tel);
        	
        	//소터 체크 박스 체크시
        	if (this.div_list.chk_docktype1.value == 1) {
        		//eval("this.ds_reserveCenter.setColumn(this.ds_reserveCenter.rowposition, 'PHD_PAS_SRTR_BKG_TMI', '"+rsvTime+"')");
        		this.ds_reserveCenter.setColumn(rowNum, 'PHD_PAS_SRTR_BKG_TMI', rsvTime);
        	} else {
        		this.ds_reserveCenter.setColumn(rowNum, 'PHD_PAS_SRTR_BKG_TMI', '');
        	}
        	
        	//벌크 체크 박스 체크시
        	if (this.div_list.chk_docktype2.value == 1) {
        		this.ds_reserveCenter.setColumn(rowNum, 'PHD_PAS_BLK_BKG_TMI', rsvTime);
        	} else {
        		this.ds_reserveCenter.setColumn(rowNum, 'PHD_PAS_BLK_BKG_TMI', '');
        	}
        	
        	//일반 체크 박스 체크시
        	if (this.div_list.chk_docktype3.value == 1) {
        		this.ds_reserveCenter.setColumn(rowNum, 'STPL_CSTD_GEN_BKG_TMI', rsvTime);
        	} else {
        		this.ds_reserveCenter.setColumn(rowNum, 'STPL_CSTD_GEN_BKG_TMI', '');
        	}
        	
        	this.ds_reserveCenter.setColumn(rowNum, 'VHCNO', this.div_list.edt_vhcno.value);
        	this.ds_reserveCenter.setColumn(rowNum, 'PHD_DVY_CAFFNM', this.div_list.edt_phd_dvy_caffnm.value);
        	this.ds_reserveCenter.setColumn(rowNum, 'CRUD_DSC', this.div_list.chk_delYn.value);
        }

        this.fn_crud_validation = function()
        {
        	if (this.gfn_isNull(this.div_list.edt_vhcno.value) >12 || this.gfn_length(this.div_list.edt_vhcno.value) < 7) {
        		//차량번호는 정확하게 입력하셔야 합니다.\n 예) 경기12다1234 또는 45마4567
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0400.view.save.validation.vhcno");
        		return false;
        	}

        	if (this.gfn_isNull(this.div_list.edt_phd_dvy_caffnm.value)) {
        		//기사명을 입력해 주세요.
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0410.view.save.validation.caffnm");
        		return false;
        	}
        	
        	if (this.div_list.chk_docktype1.value == 0 && this.div_list.chk_docktype2.value == 0 && this.div_list.chk_docktype3.value == 0) {
        		this.alert("DOCK구분을 선택해주세요.");
        		return false;
        	}

        	if (this.gfn_isNull(this.div_list.cbo_rsvTime.value)) {
        		//예약시간을 입력해 주세요.
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0400.view.save.validation.rsvtime");
        		return false;
        	}

        	if (this.gfn_isNull(this.div_list.mae_num02.value) || this.gfn_length(this.div_list.mae_num02.value) < 4) {
        		//중간 연락처를 4자리 입력해 주세요.
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0410.view.save.validation.tel1");
        		return false;
        	}

        	if (this.gfn_isNull(this.div_list.mae_num03.value) || this.gfn_length(this.div_list.mae_num03.value) < 4) {
        		//끝자리 연락처 4자리 입력해 주세요.
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0410.view.save.validation.tel2");
        		return false;
        	}

        	if (this.div_list.lst_slpno.getCount() == 0) {
        		//차량예약할 배송예정서가 없습니다.다시 조회 버튼을 클릭하십시요.
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0400.view.save.validation.nosearch");
        		return false;
        	}
        	return true;
        }

        /* 저장버튼 클릭시 */
        this.btn_save_onclick = function(obj,e)
        {
        	if (this.fn_crud_validation()) {
        		var dsParams = "ds_reserveCenter=ds_reserveCenter:U ds_cbo_slpno=ds_cbo_slpno:U";

        		var sSvcID        = "saveReserveCenter";//통신아이디
        		var sURL          = "svc::/rest/reserve/saveReserveCenter";// 호출할 서버 페이지 주소
        		var sInDatasets   = dsParams;//보내는데이터셋
        		var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = "";// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	}
        }

        this.fn_rowInsert = function(flag)
        {
        	var rsvTime = this.div_list.cbo_rsvTime.value;
        	rsvTime = rsvTime.replace(/:/gi, '');
        	
        	var row;
        	if (flag == "UPDATE") {
        		// 수정
        		row = this.ds_reserveCenter.findRow("VHC_BKG_PHD_IDVD_NO", this.div_list.edt_hidden_idx.value);
        	} else {
        		// 신규 (수정이외에는 신규 처리하도록 else)
        		row = this.ds_reserveCenter.addRow();
        		this.ds_reserveCenter.setColumn(row, "PHD_NA_BZPLC", '8808983300108');
        		this.ds_reserveCenter.setColumn(row, "VHC_BKG_DT", (this.div_search.cal_vhc_bkg_dt.value));
        		
        		if (application.gv_mbcoType == 1) {
        			//본사일경우
        			this.ds_reserveCenter.setColumn(row, "NA_TRPL_C", this.div_auth.cbo_authorityWorkplace.value);
        			this.ds_reserveCenter.setColumn(row, "CLNTNM", (this.div_auth.cbo_authorityWorkplace.text).substr(16));
        		} else {
        			//지사일경우
        			this.ds_reserveCenter.setColumn(row, "NA_TRPL_C", application.gv_glnCode);
        			this.ds_reserveCenter.setColumn(row, "CLNTNM", application.gv_companyName);
        		}
        	}

        	//차량입차예약시분
        	this.ds_reserveCenter.setColumn(row, "VHC_ENTRUK_BKG_TMI", rsvTime);

        	var tel = this.div_list.cbo_num01.value + "-" + this.div_list.mae_num02.value + "-" + this.div_list.mae_num03.value;
        	this.ds_reserveCenter.setColumn(row, 'TELNO', tel);
        	
        	//소터 체크 박스 체크시
        	if (this.div_list.chk_docktype1.value == 1) {
        		//eval("this.ds_reserveCenter.setColumn(this.ds_reserveCenter.rowposition, 'PHD_PAS_SRTR_BKG_TMI', '"+rsvTime+"')");
        		this.ds_reserveCenter.setColumn(row, 'PHD_PAS_SRTR_BKG_TMI', rsvTime);
        	} else {
        		this.ds_reserveCenter.setColumn(row, 'PHD_PAS_SRTR_BKG_TMI', '');
        	}
        	
        	//벌크 체크 박스 체크시
        	if (this.div_list.chk_docktype2.value == 1) {
        		this.ds_reserveCenter.setColumn(row, 'PHD_PAS_BLK_BKG_TMI', rsvTime);
        	} else {
        		this.ds_reserveCenter.setColumn(row, 'PHD_PAS_BLK_BKG_TMI', '');
        	}
        	
        	//일반 체크 박스 체크시
        	if (this.div_list.chk_docktype3.value == 1) {
        		this.ds_reserveCenter.setColumn(row, 'STPL_CSTD_GEN_BKG_TMI', rsvTime);
        	} else {
        		this.ds_reserveCenter.setColumn(row, 'STPL_CSTD_GEN_BKG_TMI', '');
        	}
        	
        	this.ds_reserveCenter.setColumn(row, 'VHCNO', this.div_list.edt_vhcno.value);
        	this.ds_reserveCenter.setColumn(row, 'PHD_DVY_CAFFNM', this.div_list.edt_phd_dvy_caffnm.value);
        	this.ds_reserveCenter.setColumn(row, 'CRUD_DSC', this.div_list.chk_delYn.value);
        	this.btn_save.set_enable(true);
        	this.fn_setProcCount();
        	
        }

        this.fn_setProcCount = function()
        {
        	var updated = 0;
        	for (var i=0; i<this.ds_reserveCenter.rowcount; i++) {
        		var type = this.ds_reserveCenter.getRowType(i);
        		if (type == Dataset.ROWTYPE_INSERT || type == Dataset.ROWTYPE_UPDATE) {
        			updated++;
        		}
        	}
        	this.div_list.sta_processingNumber.set_text(this.gfn_setRowCount(updated));
        }

        /* 예약일자가 변경될때마다 예약시간 변경*/
        this.div_search_cal_vhc_bkg_dt_onchanged = function(obj,e)
        {
        	//예약시간 가져오기
        	//this.fn_getRsvTime(obj.value);
        }

        this.btn_print_onclick = function(obj,e)
        {
        	//조회결과 없을시 출력 안됨.
        	if (this.ds_reserveCenter.rowcount == 0) {
        		alert("출력할 결과가 없습니다. 조회버튼을 눌러주세요.");
        		return;
        	}

        	var vhc_bkg_dt = this.gfn_nullToEmpty(this.div_search.cal_vhc_bkg_dt.value); //예약일자
        	var dvy_plash_slpno = this.gfn_nullToEmpty(this.div_search.edt_dvy_plash_slpno.value); //배송예정서번호
        	var vhcno = this.gfn_nullToEmpty(this.div_search.edt_vhcno.value); //차량번호

        	var param = {
        		TRPL_C:this.getTrplCode(),
        		vhc_bkg_dt:vhc_bkg_dt,
        		dvy_plash_slpno:dvy_plash_slpno,
        		vhcno:vhcno
        	}
        	var ozParam = {
        		sId: 'VAN_DS_SC_0400',
        		sUrl: '/rest/oz/reserve/printReserveCenterList',
        		paramType: 'param',
        		sParam: param
        	};
        	this.ozViewer(ozParam);
        }

        /* 초기화 버튼 */
        this.div_list_btn_clear_onclick = function(obj,e)
        {
        	this.ds_reserveCenter.clearData();
        	this.ds_cbo_slpno.clearData();
        	this.btn_save.set_enable(false);
        	this.div_list.edt_vhcno.set_value('');
        	this.div_list.edt_phd_dvy_caffnm.set_value('');
        	this.div_list.cbo_num01.set_value('010');
        	this.div_list.mae_num02.set_value('');
        	this.div_list.mae_num03.set_value('');
        	this.div_list.chk_delYn.set_value('I');
        	this.div_list.chk_docktype1.set_value('0');
        	this.div_list.chk_docktype2.set_value('0');
        	this.div_list.chk_docktype3.set_value('0');
        	this.div_list.edt_hidden_idx.set_value("");
        	this.div_list.edt_hidden_updateYn.set_value("");
        	this.div_list.sta_processingNumber.set_text(this.gfn_setRowCount(0));
        	this.fn_comp_enable(true);
        }

        this.VAN_DS_SC_0400_onkeydown = function(obj,e)
        {
        	var key = this.gfn_onkeydown(e);
        	
        	if(key=="F")
        	{	
        		this.btn_search_onclick();
        	}
        	
        	if(this.btn_save.enable && key=="S")
        	{
        		this.btn_save_onclick();
        	}
        	
        	if(key=="P")
        	{
        		this.btn_print_onclick();
        	}
        }

        this.btn_search_onmousemove = function(obj,e)
        {
        	this.gfn_onmousemove(obj, "F");
        }

        this.btn_print_onmousemove = function(obj,e)
        {
        	this.gfn_onmousemove(obj, "P");
        }

        this.btn_save_onmousemove = function(obj,e)
        {
        	this.gfn_onmousemove(obj, "S");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onkeydown", this.VAN_DS_SC_0400_onkeydown, this);
            this.div_search.cal_vhc_bkg_dt.addEventHandler("onchanged", this.div_search_cal_vhc_bkg_dt_onchanged, this);
            this.div_search.btn_dvy_plash_slpno.addEventHandler("onclick", this.div_search_btn_dvy_plash_slpno_onclick, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.btn_vhcno.addEventHandler("onclick", this.div_list_btn_vhcno_onclick, this);
            this.div_list.btn_rowUpdate.addEventHandler("onclick", this.div_list_btn_rowUpdate_onclick, this);
            this.div_list.btn_clear.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);
            this.btn_print.addEventHandler("onmousemove", this.btn_print_onmousemove, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_save.addEventHandler("onmousemove", this.btn_save_onmousemove, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_search.addEventHandler("onmousemove", this.btn_search_onmousemove, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0400.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
