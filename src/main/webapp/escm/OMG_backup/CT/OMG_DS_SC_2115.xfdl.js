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
                this.set_name("OMG_DS_SC_2115");
                this.set_titletext("계약담당자 변경신청");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rsclist", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_DRUP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COLB_COMP_SGNT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_APV_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STS_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_REQ_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_save", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_DRUP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COLB_COMP_SGNT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_APV_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STS_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_REQ_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_elt", this);
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_REQ_STAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrwKd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sts", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrwKdMC_Temp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_TYPE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_M\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_D\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_buyerCode", this);
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrwKdMC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TYPE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_M\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_D\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_authBranch", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"AUTH_CHECK\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "5", "30", null, "99", "10", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "16", "36", "118", "21", null, null, this.div_search);
            obj.set_taborder("71");
            obj.set_text("메인계약서종류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_kd", "absolute", "503", "36", "175", "21", null, null, this.div_search);
            obj.set_taborder("72");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static131", "absolute", "242", "65", "10", "21", null, null, this.div_search);
            obj.set_taborder("73");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "141", "65", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("74");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "252", "65", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("75");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static02", "absolute", "390", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("76");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_contDay", "absolute", "15", "65", "106", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_contDay_innerdataset = new Dataset("cbo_contDay_innerdataset", this.div_search.cbo_contDay);
            cbo_contDay_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">계약서변경일</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약시작일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">계약만료일</Col></Row></Rows>");
            obj.set_innerdataset(cbo_contDay_innerdataset);
            obj.set_taborder("77");
            obj.set_value("0");
            obj.set_text("계약서변경일");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Div("div_mnCtrwKd", "absolute", "141", "36", "211", "21", null, null, this.div_search);
            obj.set_taborder("78");
            obj.set_enable("false");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_sts", "absolute", "503", "10", "174", "21", null, null, this.div_search);
            obj.set_taborder("79");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_kd", "absolute", "390", "36", "106", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_kd_innerdataset = new Dataset("cbo_kd_innerdataset", this.div_search.cbo_kd);
            cbo_kd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약자상호</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">GLN 코드</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">-선택(협력업체)-</Col></Row></Rows>");
            obj.set_innerdataset(cbo_kd_innerdataset);
            obj.set_taborder("80");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_text("-선택(협력업체)-");
            obj.set_index("2");
            obj = new Static("Static12", "absolute", "0", "0", "414", "20", null, null, this.div_search);
            obj.set_taborder("81");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_DT_YN", "absolute", "699", "65", "11.7%", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_DT_YN_innerdataset = new Dataset("rdo_DT_YN_innerdataset", this.div_search.rdo_DT_YN);
            rdo_DT_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_DT_YN_innerdataset);
            obj.set_taborder("82");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_visible("false");
            obj = new Edit("edt_userId", "absolute", "503", "65", "175", "21", null, null, this.div_search);
            obj.set_taborder("84");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "688", "36", "113", "21", null, null, this.div_search);
            obj.set_taborder("85");
            obj.set_text("계약담당자 선택");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "16", "10", "118", "21", null, null, this.div_search);
            obj.set_taborder("86");
            obj.set_text("계악서 구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_mnCtrwKdM2", "absolute", "141", "10", "211", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("87");
            obj.set_innerdataset("ds_buyerCode");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Combo("buyer_kd", "absolute", "389", "65", "106", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var buyer_kd_innerdataset = new Dataset("buyer_kd_innerdataset", this.div_search.buyer_kd);
            buyer_kd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사번</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">성명</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">-선택(계약담당자)-</Col></Row></Rows>");
            obj.set_innerdataset(buyer_kd_innerdataset);
            obj.set_taborder("88");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_text("-선택(계약담당자)-");
            obj.set_index("2");

            obj = new Button("btu_div", "absolute", "43.59%", "128", "63", "12", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "10", "116", null, null, "5", "-45", this);
            obj.set_taborder("4");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_rsclist", "absolute", "0", "47", null, null, "52.28%", "56", this.div_list);
            obj.set_taborder("36");
            obj.set_binddataset("ds_rsclist");
            obj.set_autofittype("none");
            obj.set_scrollpixel("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"40\"/><Column size=\"101\"/><Column size=\"85\"/><Column size=\"163\"/><Column size=\"141\"/><Column size=\"100\"/><Column size=\"122\"/><Column size=\"159\"/><Column size=\"62\"/><Column size=\"68\"/><Column size=\"93\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"계약서번호\"/><Cell col=\"3\" text=\"계약담당자명\"/><Cell col=\"4\" text=\"계약담당자소속\"/><Cell col=\"5\" text=\"계약서종류\"/><Cell col=\"6\" text=\"거래처코드\"/><Cell col=\"7\" text=\"계약자상호\"/><Cell col=\"8\" text=\"계약시작일\"/><Cell col=\"9\" text=\"해지여부\"/><Cell col=\"10\" text=\"상태\"/><Cell col=\"11\" text=\"변경신청상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:ELT_CTRW_NO\"/><Cell col=\"3\" text=\"bind:BUYER_NM\"/><Cell col=\"4\" text=\"bind:BUYER_NA_TRPL_NM\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:MN_CTRW_KD_NM\"/><Cell col=\"6\" text=\"bind:NA_TRPL_C\"/><Cell col=\"7\" text=\"bind:MTALNM\"/><Cell col=\"8\" text=\"bind:CTR_DT\" mask=\"@@@@-@@-@@~@@@@-@@-@@\" combodisplay=\"display\"/><Cell col=\"9\" text=\"bind:STS_CANCEL\"/><Cell col=\"10\" text=\"bind:STS_NM\"/><Cell col=\"11\" text=\"bind:CHG_REQ_STAT\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_leftMove", "absolute", "49.11%", "229", "22", "22", null, null, this.div_list);
            obj.set_taborder("39");
            obj.set_cssclass("btn_WF_ShuttleL");
            obj.set_visible("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_rightMove", "absolute", "49.11%", "206", "22", "22", null, null, this.div_list);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_rsclist_0", "absolute", "52.92%", "47", null, null, "0", "56", this.div_list);
            obj.set_taborder("41");
            obj.set_binddataset("ds_save");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"40\"/><Column size=\"109\"/><Column size=\"83\"/><Column size=\"155\"/><Column size=\"138\"/><Column size=\"101\"/><Column size=\"146\"/><Column size=\"90\"/><Column size=\"52\"/><Column size=\"103\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"계약서번호\"/><Cell col=\"3\" text=\"계약담당자명\"/><Cell col=\"4\" text=\"계약담당자소속\"/><Cell col=\"5\" text=\"계약서종류\"/><Cell col=\"6\" text=\"거래처코드\"/><Cell col=\"7\" text=\"계약자상호\"/><Cell col=\"8\" text=\"해지여부\"/><Cell col=\"9\" text=\"상태\"/><Cell col=\"10\" text=\"변경신청상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:ELT_CTRW_NO\"/><Cell col=\"3\" text=\"bind:BUYER_NM\"/><Cell col=\"4\" text=\"bind:BUYER_NA_TRPL_NM\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:MN_CTRW_KD_NM\"/><Cell col=\"6\" text=\"bind:NA_TRPL_C\"/><Cell col=\"7\" text=\"bind:MTALNM\"/><Cell col=\"8\" text=\"bind:STS_CANCEL\"/><Cell col=\"9\" text=\"bind:STS_NM\"/><Cell col=\"10\" text=\"bind:CHG_REQ_STAT\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "5", "58", "21", "10", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 99, this.div_search,
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
            		p.set_taborder("4");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_2115");
            		p.set_titletext("계약담당자 변경신청");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::multiCheckCombo.xfdl");
            this._addPreloadList("fdl", "common::multiCheckCombo.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2115.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2115.xfdl", function() {
        //include "lib::comLib.xjs";

        this.chkDay ="";

        this.fv_sts = ""; //전자 계약서 상태값
        this.fv_stsTemp = ""; //전자 계약서 상태값
        this.fv_stsNm = ""; //전자 계약서 상태값
        this.fv_stsNmTemp = ""; //전자 계약서 상태값
        this.fv_mnCtrwKd = ""; //전자 계약서 종류
        this.fv_mnCtrwKdTemp = ""; //전자 계약서 종류
        this.fv_mnCtrwKdNm = ""; //전자 계약서 종류
        this.fv_mnCtrwKdNmTemp = ""; //전자 계약서 종류

        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	
        	   var param = [  
               {code:"ELT_STS"           ,     dsName:"ds_sts", selecttype:""},
               {code:"MN_CTRW_KD"        ,     dsName:"ds_mnCtrwKd", selecttype:""}
            ];
        	this.gfn_setPortalCommonCode(param); 
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.chkDay = this.gfn_minusMonth(toDay, 1);
        	
        	this.div_search.cal_from.set_value(this.chkDay);
        	this.div_search.cal_to.set_value(toDay);
        	// this.div_search.edt_userId.set_value(application.gv_userId);
        	this.div_search.rdo_DT_YN.set_value("Y");
        	
        	
        	this.div_list.grd_rsclist.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        //	this.search_m();	// 자기가 신청한 남의 계약
        //	this.search();	// 신청할 수 있는 남의 계약
        	
        	this.codeLoad();	//계약담당자 구분하는 함수
        	this.getDS()			//데이터셋 가져오기
        	
        	this.fn_checkBranch();            // 직매장여부 체크 
        }

        /*
         * 직매장 로그인 시 Y/N 리턴 
         */
        this.fn_checkBranch = function()
        {

        	var sParams = "branch_dsc="+ "01"  // 대리점 구분 01 직매장 
        				+ " mb_id=";
        	var sSvcID        = "branchCheck";
        	var sURL          = "svc::rest/pt/checkBranch";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_authBranch=ds_authBranch";  // 
        	var sArgument     =  sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {

        //상태값  정의 -> 사용하는 상태값만 정의
           for(var i = this.ds_sts.rowcount-1 ; 0 <= i ; i--){		

        		if(this.ds_sts.getColumn(i, "SIMP_C") == "6"){
        			this.ds_sts.deleteRow(i);
        		}
        		
        		if(this.ds_sts.getColumn(i, "SIMP_C") == "7"){
        				this.ds_sts.deleteRow(i);
        		}
        		
        		if(this.ds_sts.getColumn(i, "SIMP_C") == "5"){
        			this.ds_sts.deleteRow(i);
        		}
        		if(this.ds_sts.getColumn(i, "SIMP_C") == "A"){
        			this.ds_sts.deleteRow(i);
        		}
        		if(this.ds_sts.getColumn(i, "SIMP_C") == "8"){
        			this.ds_sts.deleteRow(i);
        		}
        	}	

        
        	this.div_search.div_sts.setFunctionName("fn_afterCallSts"); //후처리함수 선언
        	
        	//선택사항. 선언안하면 기본으로 설정됨. Width:140, displayrowcount:5
        	this.div_search.div_sts._setWidth(180);                  //가로사이즈 설정(단, 140보다 작으면 기본사이즈인 140으로 설정됨)
        	this.div_search.div_sts._setDisplayCount(9);            //보여줄 Row수. Combo의 displayrowcount와 동일.
        	
        	this.div_search.div_sts._binddataset(this.ds_sts,"SIMP_C","SIMP_CNM");

        // 	this.div_search.div_mnCtrwKd.setFunctionName("fn_afterCall"); //후처리함수 선언
        // 	
        // 	//선택사항. 선언안하면 기본으로 설정됨. Width:140, displayrowcount:5
        // 	this.div_search.div_mnCtrwKd._setWidth(250);                  //가로사이즈 설정(단, 140보다 작으면 기본사이즈인 140으로 설정됨)
        // 	this.div_search.div_mnCtrwKd._setDisplayCount(9);            //보여줄 Row수. Combo의 displayrowcount와 동일.
        // 	
        // 	this.div_search.div_mnCtrwKd._binddataset(this.ds_mnCtrwKd,"SIMP_C","SIMP_CNM");

        
        	//콤보에 최상단Row보이도록 설정
        	//this.Combo01.set_index(0);
        }

        
        /* 계약담당자 구분하기  */
        this.codeLoad = function()
        {

        	var sSvcID        = "codeLoad";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltctrwCDList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_buyerCode=ds_buyerCode" ;
        	var sArgument     = "SIMP_TPC=ELT_DEPT_DSC";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 모든 계약서들의 데이터셋을 불러올 함수
        this.getDS = function()
        {
        	var sSvcID        = "getDS";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltctrwDSList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_mnCtrwKdMC=ds_mnCtrwKdMC" ;
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        var dsrow;
        // 계약담당자 코드별 해당 데이터셋 뽑아오기
        this.fn_codeDSC = function(param1)
        {	
        	var ctype;
        	var cdm;
        	var cdd;
        	var simpcnm;
        //param1 : 11 (CD_M) 

        	for(var i = 0; i < this.ds_mnCtrwKdMC.rowcount; i++) 
        	{ 
        	
        		cdm = this.ds_mnCtrwKdMC.getColumn(i, "CD_M");  /*Dataset 값을 가져옴. */
        		cdd = this.ds_mnCtrwKdMC.getColumn(i, "CD_D");
        		ctype = this.ds_mnCtrwKdMC.getColumn(i, "CD_TYPE");		
        	
        		if(cdm == param1 && ctype == 'MN_CTRW_KD'){

        			simpcnm = this.ds_mnCtrwKdMC.getColumn(i, "SIMP_CNM");
        			
        			this.ds_mnCtrwKdMC_Temp.addRow();
        			this.ds_mnCtrwKdMC_Temp.setColumn(this.ds_mnCtrwKdMC_Temp.rowposition, "CD_TYPE", ctype) /*Dataset 에 값을 셋팅함 */
        			this.ds_mnCtrwKdMC_Temp.setColumn(this.ds_mnCtrwKdMC_Temp.rowposition, "CD_M", cdm)
        			this.ds_mnCtrwKdMC_Temp.setColumn(this.ds_mnCtrwKdMC_Temp.rowposition, "CD_D", cdd)
        			this.ds_mnCtrwKdMC_Temp.setColumn(this.ds_mnCtrwKdMC_Temp.rowposition, "SIMP_CNM", simpcnm)
        			
        		}
        	} 
        	dsrow = this.ds_mnCtrwKdMC_Temp.rowcount; // 데이터셋의 크기
        //	alert('줄 수 : ' + dsrow);
        	
        	this.div_search.div_mnCtrwKd.setFunctionName("fn_afterCall"); //후처리함수 선언
        	this.div_search.div_mnCtrwKd._setWidth(250);
        	this.div_search.div_mnCtrwKd._setDisplayCount(dsrow);            //보여줄 Row수. Combo의 displayrowcount와 동일.
        	this.div_search.div_mnCtrwKd._binddataset(this.ds_mnCtrwKdMC_Temp,"CD_D","SIMP_CNM");
        	
        }

        /* 내 계약서 조회*/
        // 자기가 신청한 남의 계약 (우측)
        this.search_m = function()
        {
        	var login_id =application.gv_userId;
        	var param = "BUYER_ENO="+login_id
        				+" CHECK=2"+
        				" fv_mnCtrwKd="+this.fv_mnCtrwKd
        				;
        	var sSvcID        = "search_m";//통신아이디
        	var sURL          = "svc::rest/ct/eltctrw/retrieveChgelt";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_save=ds_save";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		
        }
        //멀티 콤보  - > 상태값
        this.fn_afterCallSts = function (sVal)
        {
        	if (sVal.rowcount == 0) {
        		this.fv_sts = "";
        		this.fv_stsNm = "";
        	} else {
        		for(var i = 0 ; i < sVal.rowcount; i++){
        			if(i == 0 ){
        				this.fv_sts = sVal.getColumn(i, "SIMP_C") ;
        				this.fv_stsNm = sVal.getColumn(i, "SIMP_CNM") ;
        			}else{
        				this.fv_sts += "."+sVal.getColumn(i, "SIMP_C") ;
        				this.fv_stsNm += ","+sVal.getColumn(i, "SIMP_CNM") ;
        			}
        		}
        	}
        }	

        //멀티 콤보  - > 메인 계약서 종류
        this.fn_afterCall = function (sVal)
        {
        	if (sVal.rowcount == 0) {
        		this.fv_mnCtrwKd = "";
        		this.fv_mnCtrwKdNm = "";
        	} else {
        		for(var i = 0 ; i < sVal.rowcount; i++){		
        			if(i == 0 ){
        				this.fv_mnCtrwKd = sVal.getColumn(i, "CD_D");
        				this.fv_mnCtrwKdNm = sVal.getColumn(i, "SIMP_CNM");
        			}else{
        				this.fv_mnCtrwKd += "."+sVal.getColumn(i, "CD_D") ;
        				this.fv_mnCtrwKdNm += ","+sVal.getColumn(i, "SIMP_CNM") ;
        			}
        		}
        	}
        }

        //
        this.div_list_Grid01_oncellclick = function(obj,e)
        {
        	if(e.cell==0){
        		this.gfn_singleChk(obj,e);	
        	}
        	else{
        		/*
        		var cslt_rq_no = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "CSLT_RQ_NO");
        		
        		var oArg = {paramMode:"U", dsArg:this.ds_rsclist, CSLT_RQ_NO:cslt_rq_no};
        		var sOption = "autosize=true,title=true";
        		var sPopupCallBack = "fn_popupAfter";       
        		this.gfn_openPopup("popId","OMG.BT::OMG_DS_SC_3121.xfdl",oArg,sOption,sPopupCallBack);
        		*/
        	}
        	
        }

        /*전자계약 조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	if(this.fn_validationCheck()){
        		//this.ds_rsclist.clearData();
        		this.search_m();
        		this.search();		
        		
        	}
        }
        /*조회*/
        // 신청할 수 있는 남의 계약 (좌측)
        this.search = function(){

        		var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        		var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        		var cboContDay = this.gfn_nullToEmpty(this.div_search.cbo_contDay.value);  //계약시작0, 만료일1
        		
        		var edtkd = this.gfn_nullToEmpty(this.div_search.edt_kd.value);  // 값 입력(계약자상호,  GLN 코드)
        		var cbokd = this.gfn_nullToEmpty(this.div_search.cbo_kd.value);  //계약자상호1,  GLN 코드2
        		var buyerkd = this.gfn_nullToEmpty(this.div_search.buyer_kd.value);  //1-사번,  2-이름
        				
        		var buyerDsc = this.gfn_nullToEmpty(this.div_search.cbo_mnCtrwKdM2.value);	//11 상품본부 , 31 수산 , 32 축산
        		
        		//var edt_buyerA = this.gfn_nullToEmpty(this.div_search.edt_buyera.value);  //계약담당자소속0
        		//var edt_buyerB = this.gfn_nullToEmpty(this.div_search.edt_buyerb.value);  //계약담당자소속1
        		
        		param = "cbo_contDay="+cboContDay+
        				" cal_from="+calFrom+
        				" cal_to="+calTo+
        				" edtkd="+edtkd+
        				" cbokd="+cbokd+
        				" buyerkd="+buyerkd+
        				" fv_sts="+this.fv_sts+
        				" fv_mnCtrwKd="+this.fv_mnCtrwKd+
        				" buyerDsc="+buyerDsc
        				 ;
        				
        				// 계약담당자 사번(이름) 설정
        				param =param + " buyerInfo="+this.gfn_nullToEmpty(this.div_search.edt_userId.value) ;
        				
        				/*
        				if(this.div_search.rdo_DT_YN.value == "Y" ){
        					if(this.div_search.edt_userId.value !="" ) {
        						param =param + " buyerEno="+this.div_search.edt_userId.value ;
        					}else{
        					   alert("계약담당자 아이디를 입력 하세요. ")
        					   return 
        					}
        					
        				}else{
        					param =param + " buyerEno=" ;
        				
        				}
        				
        				*/
        				
        				
        		var sSvcID        = "search";//통신아이디
        		var sURL          = "svc::rest/ct/eltctrw/retrieveEltCtrwListCh";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_rsclist=ds_rsclist";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);	
        		
        	
        	this.fv_mnCtrwKdNmTemp = this.fv_mnCtrwKdNm ;
        	this.fv_stsNmTemp = this.fv_stsNm;
        	this.fv_mnCtrwKdTemp = this.fv_mnCtrwKd;
        	this.fv_stsTemp = this.fv_sts;
        			
        // 	this.div_search.div_mnCtrwKd._clearValue();
        // 	this.fv_mnCtrwKd = "";
        // 	this.div_search.div_sts._clearValue();
        // 	this.fv_sts = "";
        	this.fv_stsNm = "";
        	this.fv_mnCtrwKdNm = "";

        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "updateStat"){
        			alert("계약담당자이관 신청이 완료되었습니다.");
        			this.search();
        			this.search_m();
        		}
        		
        		if(svcID == "updateBuyer"){
        			alert("계약담당자이관이 완료되었습니다.");
        			this.search_m();
        		}
        		if(svcID == "updatecancelBuyer"){
        			alert("계약담당자이관 취소가 완료되었습니다.");
        			this.search();
        			this.search_m();
        		}
        		if(svcID == "codeLoad"){			
        			this.ds_buyerCode.insertRow(0);
                    this.ds_buyerCode.setColumn(0,"SIMP_C","");
                    this.ds_buyerCode.setColumn(0,"SIMP_CNM","=========선택=========");
                    this.div_search.cbo_mnCtrwKdM2.set_index(0);
        		}
        		
        		if (svcID == "branchCheck") {

                    /*
                     *  직매장이 아닌 사업장인 경우
                     */
        			if (application.gv_userType == "03"  &&  this.ds_authBranch.getColumn(0, "AUTH_CHECK") != "Y" ) {
        				 // alert('직매장 -> ' + this.ds_authBranch.getColumn(0, "AUTH_CHECK"));
        				 // this.btn_save.set_visible(true);
        				 alert("하나로유통 직매장만 사용 가능한 메뉴 입니다. ");
        				 this.set_enable(false);
        			} 
        		}// branchCheck
        	}
        //trace( "ds_rsclist " +this.ds_rsclist.saveXML());
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	var calFrom = this.div_search.cal_from.value;
        	var calTo = this.div_search.cal_to.value;
        	var buyer = this.div_search.cbo_mnCtrwKdM2.value;

        	if(this.div_search.div_mnCtrwKd.enable == true){
        		if(this.gfn_isNull(buyer)){
        		alert("계약서 구분을 지정해 주시기 바랍니다.");
        		return false;
        		}
        	}

        	if(this.gfn_isNull(calFrom)){
        		this.gfn_getMessage("alert", "validation.message.fromDate.no.data");
        		return false;
        	}
        	
        	if(this.gfn_isNull(calTo)){
        		this.gfn_getMessage("alert", "validation.message.toDate.no.data");
        		return false;
        	}
        	
        	if(this.gfn_getDiffDay(calFrom, calTo) < 0){
        		this.gfn_getMessage("alert", "validation.message.fromData.toDate.confirm");
        		return false;
        	}else{
        		/*
        		if(this.gfn_getDiffDay(this.div_search.cal_YMD_FR.value,this.div_search.cal_YMD_TO.value) > 31){
        			this.alert('기간을 31일 이내로 선택 하세요');
        			return false;
        		}
        		*/	
        	}
        	
        	return true;
        }
        this.btn_save = function(){
        	var count = this.ds_elt.getRowCount(); //변경할 전자계약 건수
        	if(confirm(count+"건의 전자계약을 이관하시겠습니까?")){
        		var sSvcID        = "updateStat";//통신아이디
        		var sURL          = "svc::rest/ct/eltctrw/EltupdateStat";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_elt=ds_elt";//보내는데이터셋
        		var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = "";// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		
        		
        	}
        	
        }

        /*변경 승인*/
        this.btn_approve = function(){
        	var count = this.ds_elt.getRowCount(); //변경할 전자계약 건수
        	if(confirm(count+"건의 계약서 계약담당자 변경 승인하시겠습니까?")){
        		var sSvcID        = "updateBuyer";//통신아이디
        		var sURL          = "svc::rest/ct/eltctrw/EltupdateBuyer";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_elt=ds_elt";//보내는데이터셋
        		var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = "";// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        /*변경 취소*/
        this.btn_cancel = function(){
        	var count = this.ds_elt.getRowCount(); //변경할 전자계약 건수
        	if(confirm(count+"건의 계약서 계약담당자 변경 취소하시겠습니까?")){
        		var sSvcID        = "updatecancelBuyer";//통신아이디
        		var sURL          = "svc::rest/ct/eltctrw/EltupdateStat";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_elt=ds_elt";//보내는데이터셋
        		var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = "";// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.div_list_btu_div_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        /*오른쪽 그리드로 옮김*/
        this.btn_moveData_onclick = function(obj,e)
        {
        	var isRowChecked = '0';
        	var eltcheck = 0;
        	this.ds_elt.clearData();
        	var saveCnt = this.ds_rsclist.getRowCount();
        	var selectCnt = this.checkIndexCnt(this.div_list.grd_rsclist);
        	var login_id =application.gv_userId;
        	var login_nm =application.gv_userName;
        	
        	if(selectCnt == 0){
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1850.alert.save3'));
        		return;
        	}else{
        		for(var i = 0; i < saveCnt ; i++){
        			isRowChecked =  this.ds_rsclist.getColumn(i, 'ISCHECKED');
        			if(isRowChecked == '1'){
        				var elt_no = this.ds_rsclist.getColumn(i, 'ELT_CTRW_NO');
        				var buyer_eno = this.ds_rsclist.getColumn(i, 'BUYER_ENO');
        				var buyer_nm = this.ds_rsclist.getColumn(i, 'BUYER_NM');
        				this.ds_elt.addRow();
        				this.ds_elt.setColumn(eltcheck,"ELT_CTRW_NO",elt_no);
        				this.ds_elt.setColumn(eltcheck,"BUYER_ENO",buyer_eno);
        				this.ds_elt.setColumn(eltcheck,"BUYER_NM",buyer_nm);
        				this.ds_elt.setColumn(eltcheck,"CHG_BUYER_ENO",login_id);
        				this.ds_elt.setColumn(eltcheck,"CHG_BUYER_NM",login_nm);
        				this.ds_elt.setColumn(eltcheck,"CHG_REQ_STAT","Y");
        				eltcheck++;
        				
        			}
        		}
        		this.btn_save();
        	}
        	
        }

        /*승인신청 저장*/
        this.btn_insert_onclick = function(obj,e)
        {
        	var isRowChecked = '0';
        	var eltcheck = 0;
        	this.ds_elt.clearData();
        	var saveCnt = this.ds_save.getRowCount();
        	var login_id =application.gv_userId;
        	var selectCnt = this.checkIndexCnt(this.div_list.grd_rsclist_0);
        	
        	if(selectCnt == 0){
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1850.alert.save3'));
        		return;
        	}else{
        		for(var i = 0; i < saveCnt ; i++){
        			isRowChecked =  this.ds_save.getColumn(i, 'ISCHECKED');
        			if(isRowChecked == '1'){
        				var elt_no = this.ds_save.getColumn(i, 'ELT_CTRW_NO');
        				this.ds_elt.addRow();
        				this.ds_elt.setColumn(eltcheck,"ELT_CTRW_NO",elt_no);
        				this.ds_elt.setColumn(eltcheck,"BUYER_ENO",login_id);
        				eltcheck++;
        			}
        		}
        		this.btn_approve();
        	}
        }

        this.div_list_grd_rsclist_0_oncellclick = function(obj,e)
        {
        	if(e.cell == 0){

        	}
        }

        this.div_list_grd_rsclist_oncellclick = function(obj,e)
        {
        	var login_id =application.gv_userId;

        	if(e.cell == 0){
        		if(this.ds_rsclist.getColumn(e.row,"BUYER_ENO") == login_id){
        			alert("다른 계약담당자의 전자계약서 이관이 가능합니다.");
        			this.ds_rsclist.setColumn(e.row,"ISCHECKED",0);
        		}else{

        		}
        		if(this.ds_rsclist.getColumn(e.row,"CHG_REQ_STAT") == '승인신청'){
        			alert("이미 신청된 전자계약입니다.");
        			this.ds_rsclist.setColumn(e.row,"ISCHECKED",0);
        		}else if(this.ds_rsclist.getColumn(e.row,"CHG_REQ_STAT") == '보류'){
        			alert("보류중인 계약서입니다.");
        			this.ds_rsclist.setColumn(e.row,"ISCHECKED",0);
        		}else{

        		}
        	}
        }

        this.div_list_btn_leftMove_onclick = function(obj,e)
        {
        	var isRowChecked = '0';
        	var eltcheck = 0;
        	this.ds_elt.clearData();
        	var saveCnt = this.ds_save.getRowCount();
        	var login_id =application.gv_userId;
        	var selectCnt = this.checkIndexCnt(this.div_list.grd_rsclist_0);
        	
        	if(selectCnt == 0){
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1850.alert.save3'));
        		return;
        	}else{
        		for(var i = 0; i < saveCnt ; i++){
        			isRowChecked =  this.ds_save.getColumn(i, 'ISCHECKED');
        			if(isRowChecked == '1'){
        				var elt_no = this.ds_save.getColumn(i, 'ELT_CTRW_NO');
        				this.ds_elt.addRow();
        				this.ds_elt.setColumn(eltcheck,"ELT_CTRW_NO",elt_no);
        				this.ds_elt.setColumn(eltcheck,"CHG_REQ_STAT","N");
        				eltcheck++;
        			}
        		}
        		this.btn_cancel();
        	}
        }

        this.div_list_grd_rsclist_onheadclick = function(obj,e)
        {
        	if(e.cell == 0){
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

        this.div_list_grd_rsclist_0_onheadclick = function(obj,e)
        {
        	if(e.cell == 0){
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }
        /* Validation Check */
        this.fn_validationCheck = function(){
        	var buyer = this.div_search.cbo_mnCtrwKdM2.value;
        	if(this.gfn_isNull(buyer)){
        		alert("계약서 구분을 지정해 주시기 바랍니다.");
        		return false;
        		
        	}

        	return true;
        }
        this.div_search_cbo_mnCtrwKdM2_onitemchanged = function(obj,e)
        {
        	this.ds_mnCtrwKdMC_Temp.clearData();
        	this.div_search.div_mnCtrwKd._clearValue();
        //	this.ds_mnCtrwKdMC_Temp.insertRow(0);
        	
        	var buyerCD=this.div_search.cbo_mnCtrwKdM2.value;	//cd_m 값
        //	alert("buyerCD : "+buyerCD);
        	
        	if(buyerCD > 0 ){	
        		this.div_search.div_mnCtrwKd.set_enable(true);
        		this.fn_codeDSC(buyerCD);

        	}else{
         		this.div_search.div_mnCtrwKd.set_enable(false);
         	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.div_mnCtrwKd.addEventHandler("onclick", this.div_search_div_mnCtrwKd_onclick, this);
            this.div_search.cbo_mnCtrwKdM2.addEventHandler("onitemchanged", this.div_search_cbo_mnCtrwKdM2_onitemchanged, this);
            this.btu_div.addEventHandler("onclick", this.div_list_btu_div_onclick, this);
            this.div_list.grd_rsclist.addEventHandler("oncellclick", this.div_list_grd_rsclist_oncellclick, this);
            this.div_list.grd_rsclist.addEventHandler("onheadclick", this.div_list_grd_rsclist_onheadclick, this);
            this.div_list.btn_leftMove.addEventHandler("onclick", this.div_list_btn_leftMove_onclick, this);
            this.div_list.btn_rightMove.addEventHandler("onclick", this.btn_moveData_onclick, this);
            this.div_list.grd_rsclist_0.addEventHandler("oncellclick", this.div_list_grd_rsclist_0_oncellclick, this);
            this.div_list.grd_rsclist_0.addEventHandler("onheadclick", this.div_list_grd_rsclist_0_onheadclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2115.xfdl");
        this.loadPreloadList();
       
    };
}
)();
