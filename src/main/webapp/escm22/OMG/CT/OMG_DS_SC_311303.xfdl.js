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
                this.set_name("OMG_DS_SC_311301");
                this.set_titletext("직매입거래계약서 (농산)");
                this._setFormPosition(0,0,788,780);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_etcEltStylAmm101", this);
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

            obj = new Dataset("ds_eltCtrwDtl01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"MN_CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"메인계약서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"CNR_DT\" type=\"STRING\" size=\"256\" sumtext=\"검수일\"/><Column id=\"PSG_MM\" type=\"STRING\" size=\"256\" sumtext=\"경과분/월\"/><Column id=\"PSG_DD\" type=\"STRING\" size=\"256\" sumtext=\"경과분/일\"/><Column id=\"ETR_FEE\" type=\"STRING\" size=\"256\" sumtext=\"수탁수수료\"/><Column id=\"PHD_FEERT\" type=\"STRING\" size=\"256\" sumtext=\"물류수수료율\"/><Column id=\"LIG_PLTPE\" type=\"STRING\" size=\"256\" sumtext=\"주류파렛트당\"/><Column id=\"MEXP_DD\" type=\"STRING\" size=\"256\" sumtext=\"관리비일\"/><Column id=\"RT\" type=\"STRING\" size=\"256\" sumtext=\"마진율\"/><Column id=\"BLM_GRMY\" type=\"STRING\" size=\"256\" sumtext=\"하자보증금\"/><Column id=\"WRS_PRM_PY\" type=\"STRING\" size=\"256\" sumtext=\"상품대금 지금\"/><Column id=\"GRMY\" type=\"STRING\" size=\"256\" sumtext=\"보증금\"/><Column id=\"WRS_SPYAM\" type=\"STRING\" size=\"256\" sumtext=\"상품공급액\"/><Column id=\"CTR_CLO\" type=\"STRING\" size=\"256\" sumtext=\"계약해지\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_TINM\" type=\"STRING\" size=\"256\" sumtext=\"제목\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"BRAND_N\" type=\"STRING\" size=\"256\" sumtext=\"브랜드명\"/><Column id=\"RETURN_DATE\" type=\"STRING\" size=\"256\" sumtext=\"반품기간\"/><Column id=\"PHD_FEERT1\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEERT2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\"/><Column id=\"ETC6\" type=\"STRING\" size=\"256\"/><Column id=\"ETC7\" type=\"STRING\" size=\"256\"/><Column id=\"ETC8\" type=\"STRING\" size=\"256\"/><Column id=\"ETC9\" type=\"STRING\" size=\"256\"/><Column id=\"ETCA\" type=\"STRING\" size=\"256\"/><Column id=\"ETC10\" type=\"STRING\" size=\"256\" sumtext=\"우편번호1\"/><Column id=\"ETC11\" type=\"STRING\" size=\"256\" sumtext=\"우편번호2\"/><Column id=\"ETC12\" type=\"STRING\" size=\"256\" sumtext=\"주소1\"/><Column id=\"ETC13\" type=\"STRING\" size=\"256\" sumtext=\"주소2\"/><Column id=\"ETC14\" type=\"STRING\" size=\"256\" sumtext=\"점유면적\"/><Column id=\"ETC15\" type=\"STRING\" size=\"256\" sumtext=\"공유면적\"/><Column id=\"ETC16\" type=\"STRING\" size=\"256\" sumtext=\"면적 계\"/><Column id=\"ETC17\" type=\"STRING\" size=\"256\" sumtext=\"임대차기간 시작일\"/><Column id=\"ETC18\" type=\"STRING\" size=\"256\" sumtext=\"임대차기간 종료일\"/><Column id=\"ETC19\" type=\"STRING\" size=\"256\" sumtext=\"임대보증금\"/><Column id=\"ETC20\" type=\"STRING\" size=\"256\" sumtext=\"월임대료 금액\"/><Column id=\"ETC21\" type=\"STRING\" size=\"256\" sumtext=\"월임대료 %\"/><Column id=\"ETC22\" type=\"STRING\" size=\"256\" sumtext=\"업종\"/><Column id=\"ETC23\" type=\"STRING\" size=\"256\" sumtext=\"매장명\"/><Column id=\"ETC24\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품1 4000 바이트\"/><Column id=\"ETC25\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품2 4000 바이트\"/><Column id=\"ETC26\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품3 4000 바이트\"/><Column id=\"ETC27\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품4 4000 바이트\"/><Column id=\"ETC28\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품5 4000 바이트\"/><Column id=\"ETC29\" type=\"STRING\" size=\"256\" sumtext=\"임대보증금 납부일자\"/><Column id=\"ETC30\" type=\"STRING\" size=\"256\" sumtext=\"임대보증금 연체료율\"/><Column id=\"ETC31\" type=\"STRING\" size=\"256\" sumtext=\"보증금 공제\"/><Column id=\"ETC32\" type=\"STRING\" size=\"256\" sumtext=\"임대료 납부일\"/><Column id=\"ETC33\" type=\"STRING\" size=\"256\" sumtext=\"임대료 연체료율\"/><Column id=\"ETC34\" type=\"STRING\" size=\"256\" sumtext=\"판매대금 지급일\"/><Column id=\"ETC35\" type=\"STRING\" size=\"256\" sumtext=\"관리비 및 시설 이용료 납부\"/><Column id=\"ETC36\" type=\"STRING\" size=\"256\" sumtext=\"비밀유지기간\"/><Column id=\"ETC37\" type=\"STRING\" size=\"256\" sumtext=\"임대보증금\"/><Column id=\"ETC38\" type=\"STRING\" size=\"256\" sumtext=\"지연이자\"/><Column id=\"ETC39\" type=\"STRING\" size=\"256\" sumtext=\"임대료 위약벌\"/><Column id=\"ETC40\" type=\"STRING\" size=\"256\"/><Column id=\"ETC41\" type=\"STRING\" size=\"256\"/><Column id=\"ETC42\" type=\"STRING\" size=\"256\"/><Column id=\"ETC43\" type=\"STRING\" size=\"256\"/><Column id=\"ETC44\" type=\"STRING\" size=\"256\"/><Column id=\"ETC45\" type=\"STRING\" size=\"256\"/><Column id=\"ETC46\" type=\"STRING\" size=\"256\"/><Column id=\"ETC47\" type=\"STRING\" size=\"256\"/><Column id=\"ETC48\" type=\"STRING\" size=\"256\"/><Column id=\"ETC49\" type=\"STRING\" size=\"256\"/><Column id=\"ETC50\" type=\"STRING\" size=\"256\"/><Column id=\"ETC51\" type=\"STRING\" size=\"256\"/><Column id=\"ETC52\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctEtcItemList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_file", this);
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
            obj = new Static("Static05", "absolute", "16.75%", "94", null, "29", "0.89%", null, this);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "16.88%", "197", null, "29", "0.89%", null, this);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "16.75%", "66", null, "29", "0.89%", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "0", "40", "59.26%", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "0", "66", null, "29", "80.96%", null, this);
            obj.set_taborder("42");
            obj.set_text("계약의 유효기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_ETC17", "absolute", "19.42%", "70", null, "21", "68.4%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_readonly("false");
            obj.set_enable("false");

            obj = new Static("Static131", "absolute", "31.85%", "70", null, "21", "67.01%", null, this);
            obj.set_taborder("44");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_ETC18", "absolute", "32.99%", "70", null, "21", "54.7%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            obj.set_value("null");
            obj.set_readonly("false");

            obj = new Static("Static03", "absolute", "0", "172", "59.26%", "21", null, null, this);
            obj.set_taborder("77");
            obj.set_text("납품장소 및 납품기일");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "10", "59.26%", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("[직매입거래계약서]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "144", "59.26%", "21", null, null, this);
            obj.set_taborder("81");
            obj.set_text("[첨부 1]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "0", "252", "59.26%", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_text("납품 대상 상품 내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "0", "197", null, "29", "80.96%", null, this);
            obj.set_taborder("88");
            obj.set_text("납품장소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC21", "absolute", "19.67%", "201", null, "21", "51.4%", null, this);
            obj.set_taborder("8");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC22", "absolute", "63.32%", "201", null, "21", "5.58%", null, this);
            obj.set_taborder("9");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "49.75%", "197", null, "29", "37.31%", null, this);
            obj.set_taborder("92");
            obj.set_text("납품기일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "16.88%", "646", null, "129", "0.89%", null, this);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "0%", "646", null, "129", "80.96%", null, this);
            obj.set_taborder("96");
            obj.set_text("기타특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "0%", "276", null, "249", "0.89%", null, this);
            obj.set_taborder("111");
            obj.set_binddataset("ds_ctEtcItemList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"343\"/><Column size=\"211\"/><Column size=\"172\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"삭제\"/><Cell col=\"1\" text=\"상품품목\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"단가(VAT포함)\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ISCHECKED\" autosizecol=\"none\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:center middle;\" text=\"bind:ITEM_NAME\" editlimit=\"190\" editlengthunit=\"ascii\" autosizecol=\"none\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:QTY\" autosizecol=\"none\"/><Cell col=\"3\" edittype=\"text\" style=\"align:center;\" text=\"bind:UPR\" editlimit=\"190\" editlengthunit=\"ascii\" autosizecol=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow", "absolute", "91.5%", "251", null, "21", "0.89%", null, this);
            obj.set_taborder("16");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow", "absolute", "83.12%", "251", null, "21", "9.26%", null, this);
            obj.set_taborder("17");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC23", "absolute", "18.4%", "251", null, "21", "32.36%", null, this);
            obj.set_taborder("15");
            obj.set_maxlength("190");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_ETC52", "absolute", "19.67%", "651", null, "118", "1.78%", null, this);
            obj.set_taborder("18");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "16.88%", "567", null, "80", "0.89%", null, this);
            obj.set_taborder("148");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0%", "567", null, "80", "80.96%", null, this);
            obj.set_taborder("149");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_SCTR_SJT", "absolute", "19.67%", "572", null, "70", "1.78%", null, this);
            obj.set_taborder("150");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("998");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "544", "59.26%", "21", null, null, this);
            obj.set_taborder("151");
            obj.set_text("특약사항 등");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "94", null, "29", "80.96%", null, this);
            obj.set_taborder("152");
            obj.set_text("취급수수료율");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_fee", "absolute", "19.42%", "98", "420", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_fee_innerdataset = new Dataset("rdo_fee_innerdataset", this.rdo_fee);
            rdo_fee_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">2.2% [계통, 일반거래처]</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">4.0% [공판장(중도매인)]</Col></Row></Rows>");
            obj.set_innerdataset(rdo_fee_innerdataset);
            obj.set_taborder("154");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.style.set_padding("2 0 0 0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 780, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("직매입거래계약서 (농산)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item15","edt_ETC17","value","ds_eltCtrwDtl01","ETC17");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edt_ETC18","value","ds_eltCtrwDtl01","ETC18");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","edt_ETC21","value","ds_eltCtrwDtl01","ETC21");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edt_ETC22","value","ds_eltCtrwDtl01","ETC22");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_ETC23","value","ds_eltCtrwDtl01","ETC23");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edt_ETC52","value","ds_eltCtrwDtl01","ETC52");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_SCTR_SJT","value","ds_eltCtrwDtl01","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_311303.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_311303.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0 ;  //데이터 체크
        this.ETC1_ENABLE = true; // 취급수수료율 적용 여부 (false는 기존 2.2% 고정일 때 작성한 계약서 수정을 막기 위함)

        this.form_onload = function(obj,e)
        {   
        	this.gfn_setInitForm(obj, e); //공통
        	//this.ds_eltCtrwDtl01.addRow();
        }

        this.fn_afterFormOnload = function()
        {
        	// 폼양식
        	for (var i = 0 ; i < this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "132") {
        			this.ds_etcEltStylAmm101.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}
        	//trace(this.parent.ds_eltCtrwDtl.saveXML()) ;
        	this.parent.ds_eltCtrwDtl.set_enableevent(false);

        	for (var i = 0; i < this.parent.ds_eltCtrwDtl.rowcount; i++) {
        		if (this.parent.ds_eltCtrwDtl.getColumn(i, "MN_CTRW_KDC") == "132") {
        			fv_chk = 1 ;
        			
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CTRW_STY_VER")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm101.getColumn(0,"CTRW_STY_VER") ) ;		
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CHG_SQNO")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO" , this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        			}
        			var etc1 = this.parent.ds_eltCtrwDtl.getColumn(i, "ETC1");
        			if (this.gfn_nullToEmpty(etc1) == "") {
        				// 작성 시에는 기본값이 선택되지 않도록 함
        				var eltCtrwNo = this.parent.ds_register.getColumn(0, "ELT_CTRW_NO");
        				if (!this.gfn_isNull(eltCtrwNo)) {
        					// 기존 직매입 계약서는 중도매인 값을 선택할 수 없게함 (ETC1 값이 없고 재검토 요청일 때)
        					this.ETC1_ENABLE = false;
        					this.rdo_fee.set_value("1");
        					this.rdo_fee.set_enable(this.ETC1_ENABLE);
        					
        					this.fn_setHandlingFee(); // 취급수수료 율
        				}
        			} else {
        				this.rdo_fee.set_value(etc1 == "2.2" ? "1" : "2");
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "ETC21")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC21", '"구매자"가 지정한 장소 (물류센터, 판매장 등)'); // 납품장소 기본값
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "ETC22")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC22", '"구매자"가 지정한 일자'); // 납품기일 기본값
        			}
        			/*
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "SCTR_SJT")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "SCTR_SJT", 
        					'① "구매자"가 "공급자"에게 대금 지급 시. 물류센터 경유분에 대해 물류수수료(일반 : 4.4%, 친환경 : 5.5%), 직송분에 대해 취급수수료(2.2%)를 차감하고 지급한다.'
        					+ '\n② "공급자"가 납품 시 잔류농약검사 등 품질검사를 위한 시료채취 수량은 검수수량에서 차감한다.'
        					+ '\n③ "구매자"가 요청한 입고방법(물류기기 사용, 저온차량 입고, 입고시간 등)을 반드시 준수한다.'
        				);
        			}
        			*/
        			
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC17", this.parent.cal_ctrStDt.value) ; // 계약 시작일
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC18", this.parent.cal_ctrEdDt.value) ; // 계약 종료일
        						
        	        //this.ds_eltCtrwDtl01.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음
        			this.ds_eltCtrwDtl01.addRow();
        			this.ds_eltCtrwDtl01.copyRow(0, this.parent.ds_eltCtrwDtl, fv_position);
        			
        			this.search_item_list();
        			
        			// alert(this.ds_eltCtrwDtl01.saveXML());
        			this.parent.ds_eltCtrwDtl.set_enableevent(true);
        		}
        	}
        	
        	// fv_chk값이 0으로 오는 경우가 없어 주석처리
        	/*
        	if (fv_chk == 0) {
        		this.parent.ds_eltCtrwDtl.deleteAll();
        		var nRow = this.parent.ds_eltCtrwDtl.addRow();
        		fv_position = nRow;

        		//	this.parent.ds_evtAmPmiw.deleteAll(); 
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm101.getColumn(0, "CTRW_STY_VER"));
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "MN_CTRW_KDC", "132");
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO" , this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        		
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC17", this.parent.cal_ctrStDt.value); // 계약 시작일
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC18", this.parent.cal_ctrEdDt.value); // 계약 종료일
        		
        		this.ds_eltCtrwDtl01.addRow();
        		this.ds_eltCtrwDtl01.copyRow(0, this.parent.ds_eltCtrwDtl ,fv_position);
        	}
        	*/
        }

        /*
         * 취급수수료율 선택
         */
        this.fn_setHandlingFee = function()
        {
        	var fee = "2.2"; // 기본값 [2.2%]
        	if (this.rdo_fee.value == "2") {
        		// 중도매인 거래용 [4.0%]
        		fee = "4.0";
        	} else if (this.gfn_isNull(this.rdo_fee.value)) {
        		this.rdo_fee.set_value("1");
        	}
        	var sctr = 
        		'① "구매자"가 "공급자"에게 대금 지급 시. 물류센터 경유분에 대해 물류수수료(일반 : 4.4%, 친환경 : 5.5%), 직송분에 대해 취급수수료('+fee+'%)를 차감하고 지급한다.\n' +
        		'② "공급자"가 납품 시 잔류농약검사 등 품질검사를 위한 시료채취 수량은 검수수량에서 차감한다.\n' +
        		'③ "구매자"가 요청한 입고방법(물류기기 사용, 저온차량 입고, 입고시간 등)을 반드시 준수한다.'
        	;
        	
        	if (this.ETC1_ENABLE) {
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC1" , fee); // 취급수수료율
        	}
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "SCTR_SJT", sctr); // 특약사항
        	this.edt_SCTR_SJT.set_value(sctr); // 특약사항(화면)
        }

        /*
         * 편집값 세팅 
         */
        this.OMG_DS_SC_311301_ontextchanged = function(obj,e)
        {
        	// 꺽쇠 사용 방지
        	var text = this.edt_ETC52.value;
        	if (!this.gfn_isNull(text)) {
        		var lc = text.indexOf("^");
        		if (lc != -1 ) {
        			alert('^는 사용하실 수 없습니다.');
        			text = nexacro.replaceAll(text,"^"," ");
        			this.edt_ETC52.set_value(text);
        		}
         	}

        //  this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC10" , this.edt_ETC10.value) ; // 손해배상 10% 미만
        // 	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC11" , this.edt_ETC11.value) ; // 손해배상 10% 이상
        	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC17" , this.edt_ETC17.value) ; // 계약유효 시작일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC18" , this.edt_ETC18.value) ; // 계약유효 종료일
        	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC21" , this.edt_ETC21.value) ; // [첨부1] 납품장소
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC22" , this.edt_ETC22.value) ; // [첨부1] 납품기일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC23" , this.edt_ETC23.value) ; // [첨부1] 납품대상상품내역
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC52" , this.edt_ETC52.value) ; // [첨부1] 기타특약사항
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
            var strTitletext = "직매입거래계약서";
        /*
            // 발주금액 대비 미납금액의 비율 손해배상 비율
            if (this.gfn_nullToEmpty(this.edt_ETC10.value) == "") {
        		alert("발주금액 대비 미납금액의 비율 10%미만 손해배상 비율을 입력해주세요.");
        		this.edt_ETC10.setFocus();
        		return false;
        	}
        	
        	// 판매대행 수수료
        	if (this.gfn_nullToEmpty(this.edt_ETC11.value) == "") {
        		alert("발주금액 대비 미납금액의 비율 10%이상 손해배상 비율을 입력해주세요.");
        		this.edt_ETC11.setFocus();
        		return false;
        	}
        	// 계약 유효기간 시작
        	if (this.gfn_nullToEmpty(this.edt_ETC17.value) == "") {
        		alert("계약 유효기간 시작날짜를 입력해주세요.");
        		this.edt_ETC17.setFocus();
        		return false;
        	}

        	// 계약 유효기간 종료
        	if (this.gfn_nullToEmpty(this.edt_ETC18.value) == "") {
        		alert("계약 유효기간  종료날짜를 입력해주세요.");
        		this.edt_ETC18.setFocus();
        		return false;
        	}
        */
        	// 일반, 중도매인 취급수수료율 구분
        	if (this.ETC1_ENABLE && this.gfn_nullToEmpty(this.rdo_fee.value) == "") {
        		alert("취급수수료율을 선택해주세요.");
        		this.rdo_fee.setFocus();
        		return false;
        	}
        	
        	// [첨부1] 납품장소
        	if (this.gfn_nullToEmpty(this.edt_ETC21.value) == "") {
        		alert("납품장소를 입력해주세요.");
        		this.edt_ETC21.setFocus();
        		return false;
        	}

        	// [첨부1] 납품기일
        	if (this.gfn_nullToEmpty(this.edt_ETC22.value) == "") {
        		alert("납품기일을 입력해주세요.");
        		this.edt_ETC22.setFocus();
        		return false;
        	}
        	
        	// [첨부1] 납품 대상 상품 내역
        	if (this.ds_ctEtcItemList.getRowCount() == 0 && this.gfn_nullToEmpty(this.edt_ETC23.value) == "") {
        		alert("납품 대상 상품 리스트를 작성하거나 납품 대상 상품 내역을 입력해주세요.");
        		this.edt_ETC23.setFocus();
        		return false;
        	} else if (this.ds_ctEtcItemList.getRowCount() > 0) {
        		for (var i=0; i<this.ds_ctEtcItemList.getRowCount(); i++) {
        			var c2 = this.ds_ctEtcItemList.getColumn(i, "ITEM_NAME");
        			var c3 = this.ds_ctEtcItemList.getColumn(i, "QTY");
        			var c4 = this.ds_ctEtcItemList.getColumn(i, "UPR");
        			
        			if (this.gfn_nullToEmpty(c2) == "" || this.gfn_nullToEmpty(c3) == "" || this.gfn_nullToEmpty(c4) == "") {
        				alert("납품 대상 상품 리스트에 입력되지 않은 행이 있습니다.\n해당 행을 입력하시거나 불필요한 경우 행삭제를 해주세요.");
        				return false;
        			}
        		}
        	}
        	
        	return true;
        }

        /* 납품 대상 상품 내역 행추가 */
        this.btn_addrow_onclick = function(obj,e)
        {
        	var nRow = this.ds_ctEtcItemList.addRow();
        	
        	//ds_rsclist
        	this.ds_ctEtcItemList.setColumn(nRow, "ISCHECKED", "0");
        	this.ds_ctEtcItemList.setColumn(nRow, "ELT_CTRW_NO", "");
        	this.ds_ctEtcItemList.setColumn(nRow, "CHG_SQNO", "001" );
        	//this.ds_ctEtcItemList.setColumn(nRow, "SQNO", 	this.ds_ctEtcItemList.rowcount );
        	
        	this.ds_ctEtcItemList.set_updatecontrol(false); //
        	this.ds_ctEtcItemList.setRowType(nRow, Dataset.ROWTYPE_INSERT);
        	this.ds_ctEtcItemList.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음
        }

        /* 납품 대상 상품 내역 행삭제 */
        this.btn_delrow_onclick = function(obj,e)
        {
        	var cnt = this.ds_ctEtcItemList.getRowCount();
        	if (cnt > 0) {
        		var updateDel = false;
        		for (var i=this.ds_ctEtcItemList.getRowCount()-1; i>=0; i--) {
        			if (this.ds_ctEtcItemList.getColumn(i, "ISCHECKED") == "1") {
        				if (this.gfn_nullToEmpty(this.ds_ctEtcItemList.getColumn(i, "SQNO")) != "") {
        					updateDel = true;
        					continue;
        				}
        				this.ds_ctEtcItemList.deleteRow(i);
        			}
        		}
        		if (updateDel) {
        			alert("계약서 작성시 입력한 기존 항목들은 화면에서 바로 행삭제가 되지 않으며, 계약서 수정시 오른쪽 체크박스를 선택한 항목들이 삭제됩니다.");
        		}
        	}
        }

        /* 판매상품내역  조회*/
        this.search_item_list = function()
        {	
        	var eltCtrwNo  = this.parent.ds_register.getColumn(0 ,"ELT_CTRW_NO");    //전자계약서번호
        	var chgSqno    =  this.parent.ds_register.getColumn(0 ,"CHG_SQNO");   // 변경일련번호
        	//var ctrwStyVer = this.ds_ctEtcItemList.getColumn(curRow, "CTRW_STY_VER");  
        	
        	param = " eltCtrwNo=" + eltCtrwNo +
        			" chgSqno=" + chgSqno
        			;
        			
        	var sSvcID        = "searchItemList";//통신아이디
        	var sURL          = "svc::rest/ct/eltctrw/retrievetEtcItemList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_ctEtcItemList=ds_ctEtcItemList";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "searchItemList") {
        			if (this.ds_ctEtcItemList.rowcount == 0) {
        				var nRow = this.ds_ctEtcItemList.addRow();
        				this.ds_ctEtcItemList.setColumn(nRow, "ISCHECKED", "0");
        				this.ds_ctEtcItemList.setColumn(nRow, "ELT_CTRW_NO", "");
        				this.ds_ctEtcItemList.setColumn(nRow, "CHG_SQNO", "001" );
        				this.ds_ctEtcItemList.setColumn(nRow, "ITEM_NAME", "농산물(과일,채소 등)");
        				this.ds_ctEtcItemList.setColumn(nRow, "QTY", '"구매자"의 발주량에 따름');
        				this.ds_ctEtcItemList.setColumn(nRow, "UPR", "상호 협의 단가" );
        			}
        		}
        	}
        }

        // 판매상품리스트 그리드 삭제 체크
        this.Grid00_oncellclick = function(obj,e)
        {
        	if (e.col == 0) {
        		var chk = this.ds_ctEtcItemList.getColumn(e.row, "ISCHECKED");
        		if (chk == "0") {
        			this.ds_ctEtcItemList.setColumn(e.row, "ISCHECKED", "1");
        		} else {
        			this.ds_ctEtcItemList.setColumn(e.row, "ISCHECKED", "0");
        		}
        	}
        }

        this.rdo_fee_onitemchanged = function(obj,e)
        {
        	this.fn_setHandlingFee();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_file.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.edt_ETC21.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC22.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);
            this.btn_addRow.addEventHandler("onclick", this.btn_addrow_onclick, this);
            this.btn_delRow.addEventHandler("onclick", this.btn_delrow_onclick, this);
            this.edt_ETC23.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC52.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_SCTR_SJT.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.rdo_fee.addEventHandler("onitemchanged", this.rdo_fee_onitemchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_311303.xfdl", true);

       
    };
}
)();
