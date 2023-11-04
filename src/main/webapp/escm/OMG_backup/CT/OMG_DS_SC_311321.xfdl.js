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
                this.set_name("OMG_DS_SC_311321");
                this.set_titletext("판매장려금 약정서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,788,285);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pmiwDtl08", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"BUY_AM\" type=\"STRING\" size=\"256\" sumtext=\"구매금액\"/><Column id=\"EVT_TINM\" type=\"STRING\" size=\"256\" sumtext=\"행사제목\"/><Column id=\"EVT_PRD_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 시작일자\"/><Column id=\"EVT_PRD_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 종료일자\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC6\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC7\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC8\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC9\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCA\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCB\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCC\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCD\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCF\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCG\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCH\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_etcEltStylAmm301", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static08", "absolute", "13.83%", "27", null, "29", "0%", null, this);
            obj.set_taborder("715");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", null, "0", "78", "21", "15", null, this);
            obj.set_taborder("717");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("725");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "0.13%", "27", null, "29", "83.25%", null, this);
            obj.set_taborder("726");
            obj.set_text("약정기간");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_evtPrdStDt", "absolute", "17.39%", "31", null, "21", "69.92%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");

            obj = new Static("Static108", "absolute", "31.47%", "31", null, "21", "66.5%", null, this);
            obj.set_taborder("728");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_evtPrdEdDt", "absolute", "34.39%", "31", null, "21", "52.92%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");

            obj = new Static("Static01", "absolute", "13.83%", "55", null, "117", "0%", null, this);
            obj.set_taborder("731");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("v1", "absolute", "42.01%", "66", null, "21", "46.57%", null, this);
            obj.set_taborder("732");
            obj.set_value("0~3");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("v2", "absolute", "42.01%", "91", null, "21", "46.57%", null, this);
            obj.set_taborder("734");
            obj.set_value("3~6");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("v3", "absolute", "42.01%", "116", null, "21", "46.57%", null, this);
            obj.set_taborder("736");
            obj.set_value("6~10");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("v4", "absolute", "42.01%", "141", null, "21", "46.57%", null, this);
            obj.set_taborder("740");
            obj.set_value("10");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("v5", "absolute", "74.11%", "66", null, "21", "14.47%", null, this);
            obj.set_taborder("744");
            obj.set_value("0.7");
            obj.set_mask("90.0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("v6", "absolute", "74.11%", "91", null, "21", "14.47%", null, this);
            obj.set_taborder("745");
            obj.set_value("1.3");
            obj.set_mask("90.0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("v7", "absolute", "74.11%", "116", null, "21", "14.47%", null, this);
            obj.set_taborder("746");
            obj.set_value("1.7");
            obj.set_mask("90.0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("v8", "absolute", "74.11%", "141", null, "21", "14.47%", null, this);
            obj.set_taborder("748");
            obj.set_value("2.0");
            obj.set_mask("90.0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.83%", "199", null, "80", "0%", null, this);
            obj.set_taborder("778");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "17.39%", "203", null, "72", "0.38%", null, this);
            obj.set_taborder("780");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "55", null, "118", "83.25%", null, this);
            obj.set_taborder("730");
            obj.set_text("성과장려금\r\n결정기준");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "13.83%", "171", null, "29", "0%", null, this);
            obj.set_taborder("786");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "29.31%", "176", null, "21", "68.91%", null, this);
            obj.set_taborder("781");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_buyAm", "absolute", "17.39%", "175", "90", "21", null, null, this);
            obj.set_taborder("729");
            obj.set_mask("+999.00");
            obj.set_limitbymask("both");
            obj.set_value("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "0", "171", null, "29", "83.25%", null, this);
            obj.set_taborder("806");
            obj.set_text("신상품입점장려금율");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "199", null, "80", "83.25%", null, this);
            obj.set_taborder("779");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17.39%", "66", null, "21", "57.87%", null, this);
            obj.set_taborder("807");
            obj.set_text("분기당 전년대비 구매금액 신장률");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17.39%", "91", null, "21", "57.87%", null, this);
            obj.set_taborder("808");
            obj.set_text("분기당 전년대비 구매금액 신장률");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "17.39%", "116", null, "21", "57.87%", null, this);
            obj.set_taborder("809");
            obj.set_text("분기당 전년대비 구매금액 신장률");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "17.39%", "141", null, "21", "57.87%", null, this);
            obj.set_taborder("810");
            obj.set_text("분기당 전년대비 구매금액 신장률");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "53.3%", "66", null, "21", "25.76%", null, this);
            obj.set_taborder("811");
            obj.set_text("% 미만, 분기별 구매금액의");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "85.41%", "66", null, "21", "5.46%", null, this);
            obj.set_taborder("812");
            obj.set_text("% 수취");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "85.41%", "91", null, "21", "5.46%", null, this);
            obj.set_taborder("813");
            obj.set_text("% 수취");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "53.3%", "91", null, "21", "25.76%", null, this);
            obj.set_taborder("814");
            obj.set_text("% 미만, 분기별 구매금액의");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "85.41%", "116", null, "21", "5.46%", null, this);
            obj.set_taborder("815");
            obj.set_text("% 수취");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "53.3%", "116", null, "21", "25.76%", null, this);
            obj.set_taborder("816");
            obj.set_text("% 미만, 분기별 구매금액의");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "85.41%", "141", null, "21", "5.46%", null, this);
            obj.set_taborder("817");
            obj.set_text("% 수취");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "53.3%", "141", null, "21", "25.76%", null, this);
            obj.set_taborder("818");
            obj.set_text("% 이상, 분기별 구매금액의");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "0", "59.26%", "21", null, null, this);
            obj.set_taborder("819");
            obj.set_text("[판매장려금 약정서]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 285, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("판매장려금 약정서");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","cal_evtPrdStDt","value","ds_pmiwDtl08","EVT_PRD_ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cal_evtPrdEdDt","value","ds_pmiwDtl08","EVT_PRD_ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","mae_buyAm","value","ds_pmiwDtl08","BUY_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","v1","value","ds_pmiwDtl08","ETC1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","v2","value","ds_pmiwDtl08","ETC2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","v3","value","ds_pmiwDtl08","ETC3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","v4","value","ds_pmiwDtl08","ETC4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","v5","value","ds_pmiwDtl08","ETC5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","v6","value","ds_pmiwDtl08","ETC6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","v7","value","ds_pmiwDtl08","ETC7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","v8","value","ds_pmiwDtl08","ETC8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","txa_sctrSjt","value","ds_pmiwDtl08","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_311321.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_311321.xfdl", function() {
        //include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0 ;  //데이터 체크

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	// 폼양식
           for (var i = 0; i < this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "308") {
        			this.ds_etcEltStylAmm301.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	for (var i = 0 ; i < this.parent.ds_pmiwDtl.rowcount; i++) {
        		if (this.parent.ds_pmiwDtl.getColumn(i, "PMIW_KDC") == "308") {
        			fv_position = i;
        			fv_chk = 1 ;
        			if (this.gfn_nullToEmpty(this.parent.ds_pmiwDtl.getColumn(i, "CTRW_STY_VER")) == "") {
        				this.parent.ds_pmiwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm503.getColumn(0,"CTRW_STY_VER"));
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_pmiwDtl.getColumn(i, "CHG_SQNO")) == "") {
        				this.parent.ds_pmiwDtl.setColumn(fv_position, "CHG_SQNO" , this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        			}
        			this.ds_pmiwDtl08.addRow();
        			this.ds_pmiwDtl08.copyRow(0, this.parent.ds_pmiwDtl, fv_position);
        		}
        	}

        	if (fv_chk == 0 ) {
        		var toDay = this.gfn_today("yyyyMMdd");
        		var toEndDay = this.gfn_today("yyyy") + "1231";
        		var nRow = this.parent.ds_pmiwDtl.addRow();
        		fv_position = nRow;
        		
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "PMIW_KDC", "308");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm301.getColumn(0,"CTRW_STY_VER"));
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "EVT_PRD_ST_DT", this.parent.cal_ctrStDt.value);
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "EVT_PRD_ED_DT", this.parent.cal_ctrEdDt.value);

        		// 성과장려금 결정기준
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC1", "0~3");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC2", "3~6");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC3", "6~10");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC4", "10");

        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC5", "0.7");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC6", "1.3");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC7", "1.7");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC8", "2.0");

        		//신상품 입점 장려금율
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "BUY_AM", "10");

        		this.ds_pmiwDtl08.addRow();
        		this.ds_pmiwDtl08.copyRow(0, this.parent.ds_pmiwDtl ,fv_position);
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	var strTitletext = "판매장려금 약정서";

         	if (this.gfn_isNull(this.mae_buyAm.value)) {
        		this.mae_buyAm.setFocus();
         		this.alert(strTitletext + " 신상품 입점 장려금율을 입력하세요.");
         		return false;
         	}

        	if (this.gfn_isNull(this.v1.value)) {
        		this.v1.setFocus();
         		this.alert(strTitletext + " 결정기준을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v2.value)) {
        		this.v2.setFocus();
         		this.alert(strTitletext + " 결정기준을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v3.value)) {
        		this.v3.setFocus();
         		this.alert(strTitletext + " 결정기준을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v4.value)) {
        		this.v4.setFocus();
         		this.alert(strTitletext + " 결정기준을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v5.value)) {
        		this.v5.setFocus();
         		this.alert(strTitletext + " 결정기준을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v6.value)) {
        		this.v6.setFocus();
         		this.alert(strTitletext + " 결정기준을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v7.value)) {
        		this.v7.setFocus();
         		this.alert(strTitletext + " 결정기준을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v8.value)) {
        		this.v8.setFocus();
         		this.alert(strTitletext + " 결정기준을 입력하세요.");
         		return false;
         	}

        	this.parent.ds_pmiwDtl.setColumn(fv_position, "BUY_AM", this.mae_buyAm.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC1", this.v1.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC2", this.v2.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC3", this.v3.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC4", this.v4.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC5", this.v5.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC6", this.v6.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC7", this.v7.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC8", this.v8.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value);         //특약사항
        	return true;
        }

        this.txatext_changed = function(obj,e)
        {
        	var text = this.txa_sctrSjt.value;
        	if (!this.gfn_isNull(text)) {
        		var lc = text.indexOf("^");
        		if (lc != -1) {
        			alert('^는 사용하실 수 없습니다.');
        			text = nexacro.replaceAll(text, "^", " ");
        			this.txa_sctrSjt.set_value(text);
        		}
         	}
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value) ;         //특약사항
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.txatext_changed, this);
            this.Static00.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static25.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static04.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static07.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static15.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static16.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static02.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static03.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static05.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static06.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static10.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static11.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static13.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static14.addEventHandler("onclick", this.Div06_Static04_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_311321.xfdl");

       
    };
}
)();
