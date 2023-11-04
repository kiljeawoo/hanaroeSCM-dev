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
                this.set_name("OMG_DS_SC_2120");
                this.set_titletext("전자계약서조회 협력업체");
                this._setFormPosition(0,0,993,490);
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
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_BLG\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_CHRR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"STS_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"BF_CTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BF_CTR_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_CTR_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_eltSts", this);
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

            obj = new Dataset("ds_excel", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_BLG\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_CHRR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"STS_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"BF_CTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BF_CTR_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_CTR_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "106", "21", null, null, this.div_search);
            obj.set_taborder("39");
            obj.set_text("계약담당자소속");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "10", "118", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("메인계약서종류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_buyer_blg", "absolute", "141", "36", "216", "21", null, null, this.div_search);
            obj.set_taborder("49");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static131", "absolute", "599", "36", "10", "21", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "496", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "612", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static02", "absolute", "387", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_contDay", "absolute", "387", "36", "106", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_contDay_innerdataset = new Dataset("cbo_contDay_innerdataset", this.div_search.cbo_contDay);
            cbo_contDay_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">계약서변경일</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약시작일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">계약만료일</Col></Row></Rows>");
            obj.set_innerdataset(cbo_contDay_innerdataset);
            obj.set_taborder("60");
            obj.set_value("0");
            obj.set_text("계약서변경일");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Div("div_eltSts", "absolute", "496", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("63");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_mnCtrwKd", "absolute", "141", "10", "216", "21", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_history", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("11");
            obj.set_text("이력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "922", "21", "56", "8", null, null, this);
            obj.set_taborder("56");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "978", "0", "15", "490", null, null, this);
            obj.set_taborder("57");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "95", null, null, "15", "0", this);
            obj.set_taborder("69");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "48", null, null, "0", "20", this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_rsclist");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"121\"/><Column size=\"220\"/><Column size=\"200\"/><Column size=\"141\"/><Column size=\"200\"/><Column size=\"222\"/><Column size=\"68\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"계약서번호\"/><Cell col=\"3\" text=\"계약서종류\"/><Cell col=\"4\" text=\"계약담당자소속\"/><Cell col=\"5\" text=\"계약담당자거래처코드\"/><Cell col=\"6\" text=\"계약담당자 상호\"/><Cell col=\"7\" text=\"계약 기간\"/><Cell col=\"8\" text=\"해지여부\"/><Cell col=\"9\" text=\"진행상태\"/><Cell col=\"10\" text=\"계약담당자 최초 등록시간\"/><Cell col=\"11\" text=\"관련 계약서 건수\"/><Cell col=\"12\" text=\"관련 계약서 번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:ELT_CTRW_NO\"/><Cell col=\"3\" displaytype=\"normal\" text=\"bind:MN_CTRW_KD_NM\"/><Cell col=\"4\" text=\"bind:BUYER_BLG\"/><Cell col=\"5\" text=\"bind:BUYER_NA_TRPL_C\"/><Cell col=\"6\" text=\"bind:CTR_CHRR_MTALNM\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CTR_DT\" mask=\"@@@@-@@-@@ @ @@@@-@@-@@\"/><Cell col=\"8\" text=\"bind:STS_CANCEL\"/><Cell col=\"9\" text=\"expr:STS_EXP == 'Y' ? '지연계약서' : STS_NM\"/><Cell col=\"10\" text=\"bind:FSRG_DTM\"/><Cell col=\"11\" text=\"expr:ATCH_CTR_CNT == '0' ? '없음' : ATCH_CTR_CNT + '건'\"/><Cell col=\"12\" displaytype=\"expr:ATCH_CTR_CNT &gt; '1' ? 'button' : 'normal'\" text=\"expr:ATCH_CTR_CNT == '0' ? '' : ATCH_CTR_CNT == '1' ? BF_CTR_NO != null ? BF_CTR_NO : ATCH_CTR_NO : '보기'\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_searchClose", "absolute", "46.83%", "0", "63", "12", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "0", "113", "238", "21", null, null, this);
            obj.set_taborder("77");
            obj.set_text("전자계약조회");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("79");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("81");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "553", "5", "125", "14", null, null, this);
            obj.set_taborder("82");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel", "absolute", "9", "508", null, null, "-9", "-175", this);
            obj.set_taborder("83");
            obj.set_binddataset("ds_rsclist");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"121\"/><Column size=\"220\"/><Column size=\"200\"/><Column size=\"141\"/><Column size=\"200\"/><Column size=\"222\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell style=\"font:bold 11 arial;linespace:12;\" text=\"순번\"/><Cell col=\"1\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약서번호\"/><Cell col=\"2\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약서종류\"/><Cell col=\"3\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약담당자소속\"/><Cell col=\"4\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약담당자거래처코드\"/><Cell col=\"5\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약담당자 상호\"/><Cell col=\"6\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약 기간\"/><Cell col=\"7\" style=\"font:bold 11 arial;linespace:12;\" text=\"진행상태\"/><Cell col=\"8\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약담당자 최초 등록시간\"/><Cell col=\"9\" style=\"font:bold 11 arial;linespace:12;\" text=\"관련 계약서 건수\"/><Cell col=\"10\" style=\"font:bold 11 arial;linespace:12;\" text=\"관련 계약서 번호\"/></Band><Band id=\"body\"><Cell style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"expr:currow+1\"/><Cell col=\"1\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:ELT_CTRW_NO\"/><Cell col=\"2\" displaytype=\"normal\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:MN_CTRW_KD_NM\"/><Cell col=\"3\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:BUYER_BLG\"/><Cell col=\"4\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:BUYER_NA_TRPL_C\"/><Cell col=\"5\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:CTR_CHRR_MTALNM\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:CTR_DT\" mask=\"@@@@-@@-@@ @ @@@@-@@-@@\"/><Cell col=\"7\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"expr:STS_EXP == 'Y' ? '지연계약서' : STS_NM\"/><Cell col=\"8\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:FSRG_DTM\"/><Cell col=\"9\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"expr:ATCH_CTR_CNT == '0' ? '없음' : ATCH_CTR_CNT + '건'\"/><Cell col=\"10\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"expr:ATCH_CTR_CNT == '0' ? '' : ATCH_CTR_CNT == '1' ? BF_CTR_NO != null ? BF_CTR_NO : ATCH_CTR_NO : ATCH_CTR_NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_redwhistle", "absolute", null, "0", "120", "21", "161", null, this);
            obj.set_taborder("84");
            obj.set_text("부패행위신고센터");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 216, 21, this.div_search.div_mnCtrwKd,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("65");
            		p.set_url("common::multiCheckCombo.xfdl");

            	}
            );
            this.div_search.div_mnCtrwKd.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("73");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 393, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("69");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("전자계약서조회 협력업체");

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
        this.addIncludeScript("OMG_DS_SC_2120.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2120.xfdl", function() {
        //include "lib::comLib.xjs";

        this.fv_sts = "";
        this.fv_stsTemp = ""; //전자 계약서 상태값
        this.fv_stsNm = ""; //전자 계약서 상태값
        this.fv_stsNmTemp = ""; //전자 계약서 상태값

        this.fv_mnCtrwKd = "";
        this.fv_mnCtrwKdTemp = ""; //전자 계약서 종류
        this.fv_mnCtrwKdNm = ""; //전자 계약서 종류
        this.fv_mnCtrwKdNmTemp = ""; //전자 계약서 종류

        this.chkDay;

        

        

        

        

        /* Form Load */
        this.OMG_DS_SC_2120_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.chkDay = this.gfn_minusMonth(toDay, 1);
        	
        	this.div_search.cal_from.set_value(this.chkDay);
        	this.div_search.cal_to.set_value(toDay);
        	
        	var param = [  
               {code:"ELT_STS",     dsName:"ds_eltSts",    selecttype:""},
               {code:"MN_CTRW_KD",     dsName:"ds_mnCtrwKd", selecttype:""}
            ];

        	this.gfn_setPortalCommonCode(param);
        	
        	this.div_list.Grid01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        
        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        //콤보에 최상단Row보이도록 설정
        // 	this.cbo_buyerAtel.set_index(0);
        // 	this.cbo_chrwMpsvno.set_index(0);
        	
        // 	SIMP_C	ds_eltSts
        // 1	계약서작성
        // 2	협력업체서명   
        // 3	재검토요청     
        // 4	보완
        // 5	계약기간변경
        // 6	문구변경
        // 7	개별변경
        // 8	거절             
        // 9	완료	
           for(var i = this.ds_eltSts.rowcount-1 ; 0 <= i ; i--){
        		if(this.ds_eltSts.getColumn(i, "SIMP_C") == "7"){
        			this.ds_eltSts.deleteRow(i);
        		}
        		if(this.ds_eltSts.getColumn(i, "SIMP_C") == "6"){
        				this.ds_eltSts.deleteRow(i);
        		}
        		if(this.ds_eltSts.getColumn(i, "SIMP_C") == "5"){
        				this.ds_eltSts.deleteRow(i);
        		}
        	}

        	this.div_search.div_eltSts._binddataset(this.ds_eltSts,"SIMP_C","SIMP_CNM");
        	this.div_search.div_eltSts.setFunctionName("fn_afterCallSts"); //후처리함수 선언
        	
        	this.div_search.div_mnCtrwKd._binddataset(this.ds_mnCtrwKd,"SIMP_C","SIMP_CNM");
        	this.div_search.div_mnCtrwKd.setFunctionName("fn_afterCall"); //후처리함수 선언
        	this.div_search.div_mnCtrwKd._setWidth(216);                  //가로사이즈 설정(단, 140보다 작으면 기본사이즈인 140으로 설정됨)
        	this.div_search.div_mnCtrwKd._setDisplayCount(9);            //보여줄 Row수. Combo의 displayrowcount와 동일.
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
        				this.fv_mnCtrwKd = sVal.getColumn(i, "SIMP_C");
        				this.fv_mnCtrwKdNm = sVal.getColumn(i, "SIMP_CNM");
        			}else{
        				this.fv_mnCtrwKd += "."+sVal.getColumn(i, "SIMP_C") ;
        				this.fv_mnCtrwKdNm += ","+sVal.getColumn(i, "SIMP_CNM") ;
        			}
        		}
        	}
        }

        this.div_list_Grid01_oncellclick = function(obj,e)
        {
        	if (e.cell==0) {
        		this.gfn_singleChk(obj,e);	
        	} else if (e.cell == 12) {
        		var cnt = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "ATCH_CTR_CNT");
        		if (cnt > 1) {
        			// 관련 계약서 건수가 2이상일 때 '보기' 버튼 처리
        			var elt_ctrw_no = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "ELT_CTRW_NO");
        			var chg_sqno = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "CHG_SQNO");
        			var bf_ctr_no = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "BF_CTR_NO");
        			var bf_ctr_sqno = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "BF_CTR_SQNO");
        			
        			var oArg = {ELT_CTRW_NO:elt_ctrw_no ,CHG_SQNO:chg_sqno, BF_CTR_NO:bf_ctr_no, BF_CTR_SQNO:bf_ctr_sqno};
        			
        			var sOption = "autosize=true,title=true";
        			var sPopupCallBack = "fn_popupAfter";       
        			this.gfn_openPopup("relatedEltPop","POPUP::POPUP_ELT_RELATED.xfdl",oArg,sOption,sPopupCallBack);
        		}
        	} else {
        		var elt_ctrw_no = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "ELT_CTRW_NO");
        		var chg_sqno = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "CHG_SQNO");
        		var bf_ctr_no = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "BF_CTR_NO");
        		var bf_ctr_sqno = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "BF_CTR_SQNO");
        		
        		var oArg = {paramMode:"U", dsArg:this.ds_rsclist, ELT_CTRW_NO:elt_ctrw_no, CHG_SQNO:chg_sqno, BF_CTR_NO:bf_ctr_no, BF_CTR_SQNO:bf_ctr_sqno};
        		var sOption = "autosize=true,title=true";
        		var sPopupCallBack = "fn_popupAfter";       
        		this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2121.xfdl",oArg,sOption,sPopupCallBack);
        	}
        }

        /*전자계약 조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_rsclist.clearData();

        	if(this.fn_validationCheck()){
        		
        		var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        		var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        		var cboContDay = this.gfn_nullToEmpty(this.div_search.cbo_contDay.value);  //계약시작0, 만료일1
        		var edtBuyerBlg = this.gfn_nullToEmpty(this.div_search.edt_buyer_blg.value);  //계약담당자소속
        		
        		param = " cbo_ctrw="+this.fv_mnCtrwKd+
        				" cal_from="+calFrom+
        				" cal_to="+calTo+
        				" cbo_sts="+this.fv_sts+
        				" cbo_contDay="+cboContDay+
        				" edt_buyer_blg="+edtBuyerBlg;
        			
        		trace("보내는 값 :" +param);
        		var sSvcID        = "search";//통신아이디
        		var sURL          = "svc::rest/ct/eltctrw/retrieveSubEltCtrwList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_rsclist=ds_rsclist";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}			
        	
        	this.fv_mnCtrwKdNmTemp = this.fv_mnCtrwKdNm ;
        	this.fv_stsNmTemp = this.fv_stsNm;
        	this.fv_mnCtrwKdTemp = this.fv_mnCtrwKd;
        	this.fv_stsTemp = this.fv_sts;
        	
        //  	this.div_search.div_eltSts._clearValue();
        //  	this.div_search.div_mnCtrwKd._clearValue();
        // 	this.fv_sts = "";
        // 	this.fv_mnCtrwKd = "";
        	this.fv_stsNm = "";
        	this.fv_mnCtrwKdNm = "";
        	
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "search") {
        			if(this.ds_rsclist.rowcount == 0){
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		} else if (svcID == "excelSearch") {
        			if (this.ds_excel.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");	
        			} else if (this.ds_excel.rowcount > 0) {
        				var today = this.gfn_today("yyyyMMdd");
        				
        				this.exportObj = new ExcelExportObject("Export00", this);
        				this.exportObj.addEventHandler("onsuccess" , this.fn_excelDownload_onsuccess , this);
        				this.exportObj.addEventHandler("onerror", this.fn_excelDownload_onerror, this);
        				
        				this.exportObj.set_exportfilename("excelElt"+today);
        				this.exportObj.set_exporturl(application.gv_server_url + "XExportImport");
        				this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_excel, "Sheet1!A1");
        				this.exportObj.exportData();
        			}
        		}
        	}

        //trace("ds_rsclist" + this.ds_rsclist.saveXML());
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	var calFrom = this.div_search.cal_from.value;
        	var calTo = this.div_search.cal_to.value;
        	if (this.gfn_isNull(calFrom)) {
        		this.gfn_getMessage("alert", "validation.message.fromDate.no.data");
        		return false;
        	}
        	
        	if (this.gfn_isNull(calTo)) {
        		this.gfn_getMessage("alert", "validation.message.toDate.no.data");
        		return false;
        	}
        	
        	if (this.gfn_getDiffDay(calFrom, calTo) < 0) {
        		this.gfn_getMessage("alert", "validation.message.fromData.toDate.confirm");
        		return false;
        	} else {
        		/*
        		if(this.gfn_getDiffDay(this.div_search.cal_YMD_FR.value,this.div_search.cal_YMD_TO.value) > 31){
        			this.alert('기간을 31일 이내로 선택 하세요');
        			return false;
        		}
        		*/	
        	}
        	/*
        	if(Number(calFrom) - Number(chkDay) < 0){
        		this.alert("최근 3개월까지 조회 가능합니다.");
        		return false;
        	}
        	
        	if(Number(calTo) - Number(chkDay) < 0){
        		this.alert("최근 3개월까지 조회 가능합니다.");
        		return false;
        	}
        	*/
        	return true;
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	//trace(" strId : " + strId + " strVal : " + strVal);
        }

        this.fn_afterFormOnload = function()
        {
        	//trace("fn_afterFormOnload");
        }

        this.btn_history_onclick = function(obj,e)
        {
        	var elt_ctrw_no;
        	if (this.ds_rsclist.rowcount > 0) {
        		for (var i = 0; i < this.ds_rsclist.rowcount; i++) {
        			if (this.ds_rsclist.getColumn(i, "ISCHECKED") == 1) {
        				elt_ctrw_no = this.ds_rsclist.getColumn(i, "ELT_CTRW_NO");
        				if (!this.gfn_isNull(elt_ctrw_no)) {
        					var oArg = {paramMode:"S", dsArg:"",elt_ctrw_no:elt_ctrw_no};
        					var sOption = "autosize=true,title=true";
        					var sPopupCallBack = "fn_popupAfter";       
        					this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2114.xfdl",oArg,sOption,sPopupCallBack);
        				}
        			}
        		}
        		if (this.gfn_isNull(elt_ctrw_no)) {
        			alert("이력을 조회할 상담신청내역을 체크 하세요");
        		}
        	} else {
        		alert("상담신청내역을 조회 하세요");
        		return false;
        	}
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	this.fn_excel();
        }

        this.fn_excel = function(){
        /*
        	var toDay = this.gfn_today("yyyyMMdd");
        	var fileName = "전자계약서조회"+toDay+".xls";//엑셀 파일 이름
        	
        	var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        		var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        		var cboContDay = this.gfn_nullToEmpty(this.div_search.cbo_contDay.value);  //계약시작0, 만료일1

        		
        		var edtBuyerBlg = this.gfn_nullToEmpty(this.div_search.edt_buyer_blg.value);  //계약담당자소속
        		
        		application.gv_glnCode ;

        		param = "&cbo_ctrw="+this.fv_mnCtrwKdTemp+
        				"&cal_from="+calFrom+
        				"&cal_to="+calTo+
        				"&cbo_sts="+this.fv_stsTemp+
        				"&cbo_contDay="+cboContDay+
        				"&edt_buyer_blg="+edtBuyerBlg+
        				"&fv_stsNm="+this.fv_stsNmTemp+
        				"&NaTrplC="+application.gv_glnCode+
        				"&fv_mnCtrwKdNm="+this.fv_mnCtrwKdNmTemp+
        				"&fileName="+fileName
        				;
        				
        			//trace("param  = >>"  + param)	;

        	param = encodeURI(encodeURI(param));

        	this.web_downExcel.set_url(application.gv_server_url+"rest/excel/downloadExcelSubEltCtrw?"+param);
        //	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelSubEltCtrw?"+param, this);
        */
        	if (this.fn_validationCheck()) {
        		var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        		var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        		var cboContDay = this.gfn_nullToEmpty(this.div_search.cbo_contDay.value);  //계약시작0, 만료일1
        		var edtBuyerBlg = this.gfn_nullToEmpty(this.div_search.edt_buyer_blg.value);  //계약담당자소속
        		
        		param = " cbo_ctrw="+this.fv_mnCtrwKd+
        				" cal_from="+calFrom+
        				" cal_to="+calTo+
        				" cbo_sts="+this.fv_sts+
        				" cbo_contDay="+cboContDay+
        				" edt_buyer_blg="+edtBuyerBlg;

        		var sSvcID        = "excelSearch";//통신아이디
        		var sURL          = "svc::rest/ct/eltctrw/retrieveSubEltCtrwList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_excel=ds_rsclist";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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

        this.OMG_DS_SC_2120_onkeydown = function(obj,e)
        {
        	if (e.keycode==13  ){
        		this.btn_search.click()
        	}
        }

        this.btn_redwhistle_onclick = function(obj,e)
        {
        	application.open("pop_redwhistle", "POPUP::POPUP_REDWHISTLE.xfdl", this, null, "showtitlebar=false showstatusbar=false autosize=false", 100, 100, 737,800);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_2120_onload, this);
            this.addEventHandler("onkeydown", this.OMG_DS_SC_2120_onkeydown, this);
            this.div_search.cbo_contDay.addEventHandler("onitemchanged", this.div_search_cbo_contDay_onitemchanged, this);
            this.btn_history.addEventHandler("onclick", this.btn_history_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_list.Grid01.addEventHandler("oncellclick", this.div_list_Grid01_oncellclick, this);
            this.div_list.btn_searchClose.addEventHandler("onclick", this.div_list_btn_searchClose_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.grd_excel.addEventHandler("oncellclick", this.div_list_Grid01_oncellclick, this);
            this.btn_redwhistle.addEventHandler("onclick", this.btn_redwhistle_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2120.xfdl");
        this.loadPreloadList();
       
    };
}
)();
