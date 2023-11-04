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
                this.set_name("OMG_DS_SC_211324");
                this.set_titletext("혁신점포 기준율 약정서");
                this.set_scrollbars("none");
                this.set_visible("false");
                this._setFormPosition(0,0,788,80);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lgqtTrFeePmiw", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"FEERT_HMW_UNDR\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 1억미만\"/><Column id=\"FEERT_HMW1_HMW2\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 1/2억\"/><Column id=\"FEERT_HMW2_HMW3\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 2/3억\"/><Column id=\"FEERT_HMW3_HMW5\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 3/5억\"/><Column id=\"FEERT_HMW5_HMW10\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 5/10억\"/><Column id=\"FEERT_HMW10_OVR\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 10억이상\"/><Column id=\"FEERT_HMW_UNDR_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"FEERT_HMW1_HMW2_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"FEERT_HMW2_HMW3_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"FEERT_HMW3_HMW5_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"FEERT_HMW5_HMW10_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"FEERT_HMW10_OVR_TINM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_etcEltStylAmm305", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식일련번호\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pmiwDtl05", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"BUY_AM\" type=\"STRING\" size=\"256\" sumtext=\"구매금액\"/><Column id=\"EVT_TINM\" type=\"STRING\" size=\"256\" sumtext=\"행사제목\"/><Column id=\"EVT_PRD_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 시작일자\"/><Column id=\"EVT_PRD_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 종료일자\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static86", "absolute", "0", "0", "467", "21", null, null, this);
            obj.set_taborder("716");
            obj.set_text("혁신점포 기준율 약정서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "710", "0", "78", "21", null, null, this);
            obj.set_taborder("717");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "15", "1812", "803", "20", null, null, this);
            obj.set_taborder("725");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "15", "2695", "803", "20", null, null, this);
            obj.set_taborder("727");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "22", "414", "15", null, null, this);
            obj.set_taborder("728");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "45", null, "31", "76.27%", null, this);
            obj.set_taborder("750");
            obj.set_text("혁신점포 기준율");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("basic_rate", "absolute", "23.6%", "45", null, "31", "60.91%", null, this);
            obj.set_taborder("8");
            obj.set_mask("!999.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "38.96%", "45", null, "31", "57.11%", null, this);
            obj.set_taborder("754");
            obj.set_text("%");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #bfbfbfff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 31, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("754");
            		p.set_text("%");
            		p.style.set_background("white");
            		p.style.set_border("1 solid #bfbfbfff");
            		p.style.set_color("black");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 80, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("혁신점포 기준율 약정서");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item13","basic_rate","value","ds_pmiwDtl05","ETC1");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211324.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211324.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0; //데이터 체크

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	// 폼양식
        	for (var i = 0; i < this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "305") {
        			this.ds_etcEltStylAmm305.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	for (var i = 0; i < this.parent.ds_pmiwDtl.rowcount; i++) {
        		if (this.parent.ds_pmiwDtl.getColumn(i, "PMIW_KDC") == "305") {
        			fv_position = i;
        			fv_chk = 1;
        			this.ds_pmiwDtl05.addRow();
        			this.ds_pmiwDtl05.copyRow(0, this.parent.ds_pmiwDtl, fv_position);
        		}
        	}

        	if (fv_chk == 0) {
        		var nRow = this.parent.ds_pmiwDtl.addRow();
        		fv_position = nRow;
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "PMIW_KDC", "305");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm305.getColumn(0, "CTRW_STY_VER"));

        		this.ds_pmiwDtl05.addRow();
        		this.ds_pmiwDtl05.copyRow(0, this.parent.ds_pmiwDtl, fv_position);
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	var strTitletext = "혁신점포 기준율 약정서";

        	if (this.gfn_isNull(this.basic_rate.value)) {
        		this.basic_rate.setFocus();
         		this.alert(strTitletext + " 기준율을 입력하세요. ");
         		return false;
         	}
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC1", this.basic_rate.value); //기준율을 ds에 저장
        	return true;
        }

        this.OMG_DS_SC_211324_ontextchanged = function(obj,e)
        {
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC1", this.basic_rate.value); //기준율 변경시 값 저장
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_lgqtTrFeePmiw.addEventHandler("oncolumnchanged", this.ds_lgqtTrFeePmiw_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.basic_rate.addEventHandler("ontextchanged", this.OMG_DS_SC_211324_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211324.xfdl", true);

       
    };
}
)();
