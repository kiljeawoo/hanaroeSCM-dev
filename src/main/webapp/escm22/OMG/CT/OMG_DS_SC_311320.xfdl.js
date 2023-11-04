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
                this.set_name("OMG_DS_SC_311320");
                this.set_titletext("추가약정서 (직매장)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,788,280);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pmiwDtl01", this);
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
            obj = new Static("Static49", "absolute", "13.83%", "179", null, "29", "0%", null, this);
            obj.set_taborder("856");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "13.83%", "151", null, "29", "0%", null, this);
            obj.set_taborder("853");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "13.83%", "207", null, "67", "0%", null, this);
            obj.set_taborder("889");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "0", "0", "467", "21", null, null, this);
            obj.set_taborder("716");
            obj.set_text("별지 추가 약정서");
            obj.set_cssclass("sta_WF_Subtitle");
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

            obj = new Static("Static31", "absolute", "13.83%", "39", null, "29", "0%", null, this);
            obj.set_taborder("835");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "0.13%", "39", null, "29", "83.25%", null, this);
            obj.set_taborder("839");
            obj.set_text("매장명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "42.51%", "39", null, "29", "40.86%", null, this);
            obj.set_taborder("840");
            obj.set_text("판매장");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "13.83%", "67", null, "29", "0%", null, this);
            obj.set_taborder("841");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "42.51%", "67", null, "29", "40.86%", null, this);
            obj.set_taborder("842");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "0.13%", "67", null, "29", "83.25%", null, this);
            obj.set_taborder("843");
            obj.set_text("임대료(%)(VAT포함)");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "13.83%", "95", null, "29", "0%", null, this);
            obj.set_taborder("844");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "42.51%", "95", null, "29", "40.86%", null, this);
            obj.set_taborder("845");
            obj.set_text("매장면적");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "0.13%", "95", null, "29", "83.25%", null, this);
            obj.set_taborder("846");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            obj.set_text("브랜드명");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "13.83%", "123", null, "29", "0%", null, this);
            obj.set_taborder("847");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "0.13%", "123", null, "29", "83.25%", null, this);
            obj.set_taborder("849");
            obj.set_text("매장위치");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "42.51%", "151", null, "29", "40.86%", null, this);
            obj.set_taborder("851");
            obj.set_text("수도세 부담자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "42.51%", "123", null, "29", "40.86%", null, this);
            obj.set_taborder("852");
            obj.set_text("카드수수료 부담자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "0.13%", "207", null, "67", "83.25%", null, this);
            obj.set_taborder("854");
            obj.set_text("기타운영조건");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "42.51%", "179", null, "29", "40.86%", null, this);
            obj.set_taborder("855");
            obj.set_text("전기세 부담자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "0.13%", "179", null, "29", "83.25%", null, this);
            obj.set_taborder("857");
            obj.set_text("전기세 매장명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "0.13%", "151", null, "29", "83.25%", null, this);
            obj.set_taborder("858");
            obj.set_text("수도세 매장명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Edit("v2", "absolute", "59.64%", "43", "192", "21", null, null, this);
            obj.set_taborder("869");
            obj.set_enable("false");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            this.addChild(obj.name, obj);

            obj = new Edit("v1", "absolute", "17.51%", "43", "192", "21", null, null, this);
            obj.set_taborder("870");
            obj.set_maxlength("200");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Edit("v3", "absolute", "17.51%", "71", "192", "21", null, null, this);
            obj.set_taborder("871");
            obj.set_enable("false");
            obj.set_maxlength("200");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Edit("v6", "absolute", "17.51%", "99", "192", "21", null, null, this);
            obj.set_taborder("874");
            obj.set_maxlength("200");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Edit("v7", "absolute", "17.51%", "127", "192", "21", null, null, this);
            obj.set_taborder("875");
            obj.set_maxlength("200");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("v8", "absolute", "59.64%", "99", "90", "21", null, null, this);
            obj.set_taborder("876");
            obj.set_enable("false");
            obj.set_mask("9990.0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_evtPrdStDt", "absolute", "59.64%", "70", null, "21", "27.66%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("883");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");

            obj = new Static("Static108", "absolute", "73.6%", "70", null, "21", "24.37%", null, this);
            obj.set_taborder("884");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_evtPrdEdDt", "absolute", "75.89%", "70", null, "21", "11.55%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("885");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");

            obj = new Edit("v13", "absolute", "17.51%", "155", "192", "21", null, null, this);
            obj.set_taborder("887");
            obj.set_maxlength("200");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Edit("v14", "absolute", "17.51%", "183", "192", "21", null, null, this);
            obj.set_taborder("888");
            obj.set_maxlength("200");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new TextArea("v12", "absolute", "17.51%", "211", null, "58", "1.02%", null, this);
            obj.set_taborder("890");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("4000");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_v9", "absolute", "59.77%", "127", "260", "22", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_v9_innerdataset = new Dataset("rdo_v9_innerdataset", this.rdo_v9);
            rdo_v9_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약담당자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">계약상대자</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(rdo_v9_innerdataset);
            obj.set_taborder("891");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");

            obj = new Edit("v9", "absolute", "87.94%", "127", "82", "21", null, null, this);
            obj.set_taborder("877");
            obj.set_maxlength("200");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_v10", "absolute", "59.77%", "155", "260", "22", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_v10_innerdataset = new Dataset("rdo_v10_innerdataset", this.rdo_v10);
            rdo_v10_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약담당자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">계약상대자</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(rdo_v10_innerdataset);
            obj.set_taborder("892");
            obj.set_rowcount("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Radio("rdo_v11", "absolute", "59.77%", "183", "260", "22", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_v11_innerdataset = new Dataset("rdo_v11_innerdataset", this.rdo_v11);
            rdo_v11_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약담당자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">계약상대자</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(rdo_v11_innerdataset);
            obj.set_taborder("893");
            obj.set_rowcount("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Edit("v10", "absolute", "87.94%", "155", "82", "21", null, null, this);
            obj.set_taborder("878");
            obj.set_maxlength("200");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Edit("v11", "absolute", "87.94%", "183", "82", "21", null, null, this);
            obj.set_taborder("879");
            obj.set_maxlength("200");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "71.57%", "99", null, "21", "26.02%", null, this);
            obj.set_taborder("894");
            obj.set_text("㎡");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 280, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("추가약정서 (직매장)");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","v1","value","ds_pmiwDtl01","ETC1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","v2","value","ds_pmiwDtl01","ETC2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","v3","value","ds_pmiwDtl01","ETC3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","v6","value","ds_pmiwDtl01","ETC6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","v7","value","ds_pmiwDtl01","ETC7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","v8","value","ds_pmiwDtl01","ETC8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","v9","value","ds_pmiwDtl01","ETC9");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","v10","value","ds_pmiwDtl01","ETCA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","v11","value","ds_pmiwDtl01","ETCB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cal_evtPrdStDt","value","ds_pmiwDtl01","ETC4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cal_evtPrdEdDt","value","ds_pmiwDtl01","ETC5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","v13","value","ds_pmiwDtl01","ETCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","v14","value","ds_pmiwDtl01","ETCE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","v12","value","ds_pmiwDtl01","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_311320.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_311320.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0 ;  //데이터 체크

        this.form_onload = function(obj,e)
        {   
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	// 폼양식
        	for (var i = 0 ; i < this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "307") {
        			this.ds_etcEltStylAmm301.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}
        	
        	// 수정화면 일 때
        	for (var i = 0 ; i < this.parent.ds_pmiwDtl.rowcount; i++) {
        		if (this.parent.ds_pmiwDtl.getColumn(i, "PMIW_KDC") =="307") {
        			fv_position = i;
        			fv_chk = 1;
        			this.ds_pmiwDtl01.addRow();
        			this.ds_pmiwDtl01.copyRow(0, this.parent.ds_pmiwDtl ,fv_position);
        						
        			this.rdo_v9.set_value("3");
        			this.rdo_v10.set_value("3");
        			this.rdo_v11.set_value("3");
        		}
        	}

        	if (fv_chk == 0 ) {
        		var nRow = this.parent.ds_pmiwDtl.addRow();
        		fv_position = nRow;
        		
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "PMIW_KDC" , "307") ;		
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "CHG_SQNO" , this.parent.ds_register.getColumn(0, "CHG_SQNO"));
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm301.getColumn(0, "CTRW_STY_VER"));
        		
        		var kdc = this.parent.div_mnCtrwKd.rdo_mnCtrwKdC.value; // 메인계약서 종류
        		
        		if (kdc == "121" || kdc == "141") {
        			var kd21 = (kdc == "121") ? this.parent.div_mnCtrwKd21 : this.parent.div_mnCtrwKd41;
        			var kd21etc20 = this.gfn_getNum(kd21.edt_ETC20.value); // 월 임대료
        			var kd21etc21 = this.gfn_nullToEmpty(kd21.edt_ETC21.value); // 월 매출액
        		
        			this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC1" , kd21.edt_ETC23.value); // 매장명
        			this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC2" , kd21.edt_ETC40.value); // 판매장소
        			if (kd21etc20 > 0 && kd21etc21 > 0) {
        				this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC3" , this.gfn_setComma(kd21etc20) + "("+kd21etc21 + "%)"); // 월임대료(매출액)
        			} else if (kd21etc20 > 0) {
        				this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC3" , this.gfn_setComma(kd21etc20)); // 월임대료
        			} else if (kd21etc21 > 0) {
        				this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC3" , kd21etc21 + "%"); // 월매출액%
        			}
        			this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC6" , kd21.edt_ETC23.value); // 브랜드명
        			this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC7" , kd21.edt_ETC47.value); // 매장위치
        			this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC8" , kd21.edt_ETC16.value); // 매장면적
        			this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCD", kd21.edt_ETC23.value);
        			this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCE", kd21.edt_ETC23.value);
        		} else if (kdc == "192" || kdc == "195") {
        			this.v2.set_enable(true);
        			this.v3.set_enable(true);
        			this.v8.set_enable(true);
        		}
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC4" , this.parent.cal_ctrStDt.value); // 계약시작일자
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC5" , this.parent.cal_ctrEdDt.value); // 계약종료일자
        		
        		// 라디오선택
        		this.rdo_v9.set_value("1");
        		this.rdo_v10.set_value("1");
        		this.rdo_v11.set_value("1");
        		this.v9.set_enable(false);
        		this.v10.set_enable(false);
        		this.v11.set_enable(false);
        		
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC9", "계약담당자");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCA", "계약담당자");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCB", "계약담당자");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "SCTR_SJT" , "");
        		
        		this.ds_pmiwDtl01.addRow();
        		this.ds_pmiwDtl01.copyRow(0, this.parent.ds_pmiwDtl ,fv_position);
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	var strTitletext = "[직매장 추가 약정서] ";

        	// 매장명(1)
        	if (this.gfn_isNull(this.v1.value)) {
         		this.alert(strTitletext + "매장명을 입력하세요.");
        		this.v1.setFocus();
         		return false;
         	}
         	
         	// 판매장(2), 임대료(3), 계약기간(4,5)은 자동입력
        	
        	// 브랜드명(6)
         	if (this.gfn_isNull(this.v6.value)) {
         		this.alert(strTitletext + "브랜드명을 입력하세요.");
        		this.v6.setFocus();
         		return false;
         	}
        	
        	// 매장위치(7)
         	if (this.gfn_isNull(this.v7.value)) {
         		this.alert(strTitletext + "매장위치를 입력하세요.");
        		this.v7.setFocus();
         		return false;
         	}
         	
         	// 매장면적(8)은 자동입력
        	
        	// 카드수수료 부담자(9)
         	if (this.gfn_isNull(this.v9.value)) {
         		this.alert(strTitletext + "카드수수료 부담자를 입력하세요.");
        		this.v9.setFocus();
         		return false;
         	}
        	
        	// 수도세 매장명(13)
         	if (this.gfn_isNull(this.v13.value)) {
         		this.alert(strTitletext + "수도세 매장명을 입력하세요.");
        		this.v13.setFocus();
         		return false;
         	}

        	// 수도세 부담자(10)
         	if (this.gfn_isNull(this.v10.value)) {
         		this.alert(strTitletext + "수도세 부담자를 입력하세요.");
        		this.v10.setFocus();
         		return false;
         	}

        	// 전기세 매장명(14)
         	if (this.gfn_isNull(this.v14.value)) {
         		this.alert(strTitletext + "전기세 매장명을 입력하세요.");
        		this.v14.setFocus();
         		return false;
         	}

        	// 전기세 부담자(11)
         	if (this.gfn_isNull(this.v11.value)) {
         		this.alert(strTitletext + "전기세 부담자를 입력하세요.");
        		this.v11.setFocus();
         		return false;
         	}

        	// 기타운영조건(12)
        	/*
         	if (this.gfn_isNull(this.v12.value)) {
         		this.alert(strTitletext + "기타운영조건을 입력하세요.");
        		this.v12.setFocus();
         		return false;
         	}
         	*/
         	
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC1" , this.v1.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC2" , this.v2.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC3" , this.v3.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC4" , this.cal_evtPrdStDt.value);  //  시작 일자
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC5" , this.cal_evtPrdEdDt.value);  // 종료 일자 
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC6" , this.v6.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC7" , this.v7.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC8" , this.v8.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC9" , this.v9.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCA" , this.v10.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCB" , this.v11.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "SCTR_SJT" , this.v12.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCD" , this.v13.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCE" , this.v14.value);

        	return true;
        }

        this.Cal_onchanged = function(obj,e)
        {	
        	obj.updateToDataset();

        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC4" , this.cal_evtPrdStDt.value); // 시작 일자
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC5" , this.cal_evtPrdEdDt.value); // 종료 일자 
        }

        this.txatext_changed = function(obj,e)
        {
        	var text = this.v12.value;
        	if (!this.gfn_isNull(text)) {
        		var lc = text.indexOf("^");
        		if (lc != -1) {
        			alert('^는 사용하실 수 없습니다.');
        			text = nexacro.replaceAll(text,"^"," ");
        			this.v12.set_value(text);
        		}
         	}
        	//this.parent.ds_pmiwDtl.setColumn(fv_position, "SCTR_SJT" , this.txa_sctrSjt.value); // 특약사항
        }

        // 부담자 선택
        this.rdo_v9_onitemchanged = function(obj,e)
        {
        	var target;
        	if (obj.id == "rdo_v9") {
        		target = this.v9;
        	} else if (obj.id == "rdo_v10") {
        		target = this.v10;
        	} else if (obj.id == "rdo_v11") {
        		target = this.v11;
        	}
        	
        	if (obj.value == "3") {
        		target.set_enable(true);
        		target.set_value("");
        	} else {
        		target.set_enable(false);
        		target.set_value(obj.text);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.cal_evtPrdStDt.addEventHandler("onchanged", this.Cal_onchanged, this);
            this.cal_evtPrdEdDt.addEventHandler("onchanged", this.Cal_onchanged, this);
            this.cal_evtPrdEdDt.addEventHandler("ontextchanged", this.OMG_DS_SC_211321_ontextchanged, this);
            this.v12.addEventHandler("ontextchange", this.txatext_changed, this);
            this.v12.addEventHandler("onkillfocus", this.txatext_changed, this);
            this.rdo_v9.addEventHandler("onitemchanged", this.rdo_v9_onitemchanged, this);
            this.rdo_v10.addEventHandler("onitemchanged", this.rdo_v9_onitemchanged, this);
            this.rdo_v11.addEventHandler("onitemchanged", this.rdo_v9_onitemchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_311320.xfdl", true);

       
    };
}
)();
