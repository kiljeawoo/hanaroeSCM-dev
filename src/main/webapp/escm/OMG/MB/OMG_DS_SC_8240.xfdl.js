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
                this.set_name("OMG_DS_SC_8240");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("배송예정 상품별 조회");
                this._setFormPosition(0,0,540,748);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_list", "absolute", "0", "278", null, null, "0", "0", this);
            obj.set_taborder("52");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "16", null, null, "0", "0", this.div_list);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"187\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"60\"/><Row size=\"60\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"상품코드\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"상품명\"/><Cell col=\"2\" colspan=\"2\" cssclass=\"Cellgrd_WF_Head\" text=\"배송예정상태\"/><Cell row=\"1\" text=\"수주처코드\"/><Cell row=\"1\" col=\"1\" text=\"수주처명\"/><Cell row=\"1\" col=\"2\" cssclass=\"Cellgrd_WF_Head\" text=\"총수량\"/><Cell row=\"1\" col=\"3\" cssclass=\"Cellgrd_WF_Head\" text=\"총금액\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"text\"/><Cell col=\"2\" colspan=\"2\" cssclass=\"Cellgrd_WF_txt\"/><Cell row=\"1\" colspan=\"2\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" wordwrap=\"none\"/><Cell row=\"1\" col=\"2\" displaytype=\"normal\" style=\"align: ;\" cssclass=\"Cellgrd_WF_txt\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" cssclass=\"Cellgrd_WF_txt\" wordwrap=\"char\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_searchControl00", "absolute", "0", "0", null, "16", "0", null, this.div_list);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", "540", "278", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "15", "209", "510", "49", null, null, this.div_search);
            obj.set_taborder("86");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "157", "16", "174", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("87");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Calendar("cal_to", "absolute", "351", "16", "174", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("88");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Static("Static03", "absolute", "15", "110", "142", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("92");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_dvy_plash_slpno", "absolute", "471", "78", "54", "54", null, null, this.div_search);
            obj.set_taborder("97");
            obj.set_cssclass("btn_WF_SearchBtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_dvy_plash_slpno", "absolute", "157", "78", "310", "54", null, null, this.div_search);
            obj.set_taborder("98");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "331", "16", "20", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("99");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "16", "142", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("102");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_dvy_plash_slpno00", "absolute", "29.07%", "140", null, "54", "2.78%", null, this.div_search);
            obj.set_taborder("104");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "418", "258", "91", "20", null, null, this);
            obj.getSetter("taborder").set("48");
            obj.style.set_background("#dc143c33");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "525", "44", "15", "218", null, null, this);
            obj.getSetter("taborder").set("50");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "317", "194", "88", "15", null, null, this);
            obj.getSetter("taborder").set("51");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);

            obj = new Div("div_order", "absolute", "554", "0", "540", "1000", null, null, this);
            obj.set_taborder("54");
            obj.set_text("div_pup_van_seq");
            obj.style.set_background("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Div("div_search01", "absolute", "0%", "0", null, "154", "0%", null, this.div_order);
            obj.set_taborder("9");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.div_order.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "2.78%", "16", null, "54", "74.63%", null, this.div_order.div_search01);
            obj.getSetter("taborder").set("101");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_order.div_search01.addChild(obj.name, obj);
            obj = new Button("btn_searchOrder", "absolute", "2.78%", "85", null, "49", "2.78%", null, this.div_order.div_search01);
            obj.set_taborder("102");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.div_order.div_search01.addChild(obj.name, obj);
            obj = new Calendar("cal_order_to", "absolute", "341", "16", null, "54", "15", null, this.div_order.div_search01);
            this.div_order.div_search01.addChild(obj.name, obj);
            obj.set_taborder("103");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static09", "absolute", "58.89%", "16", null, "54", "36.3%", null, this.div_order.div_search01);
            obj.getSetter("taborder").set("104");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.div_order.div_search01.addChild(obj.name, obj);
            obj = new Calendar("cal_order_from", "absolute", "136", "16", null, "54", "219", null, this.div_order.div_search01);
            this.div_order.div_search01.addChild(obj.name, obj);
            obj.set_taborder("105");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static00", "absolute", "89.81%", "134", null, "20", "-6.3%", null, this.div_order);
            obj.getSetter("taborder").set("11");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.div_order.addChild(obj.name, obj);
            obj = new Div("div_master01", "absolute", "0", "154", "540", "846", null, null, this.div_order);
            obj.set_taborder("12");
            this.div_order.addChild(obj.name, obj);
            obj = new Static("Static66", "absolute", "0%", "5", null, "38", "60%", null, this.div_order.div_master01);
            obj.getSetter("taborder").set("6");
            obj.set_text("검색결과 <fc v='#fff44f'><fs v='17'>002</fs></fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_GridCount01");
            this.div_order.div_master01.addChild(obj.name, obj);
            obj = new Static("Static65", "absolute", "0%", "16", null, "48", "0%", null, this.div_order.div_master01);
            obj.getSetter("taborder").set("7");
            obj.set_cssclass("sta_WF_Gridbg");
            this.div_order.div_master01.addChild(obj.name, obj);
            obj = new Grid("grd_order", "absolute", "0%", "64", null, "782", "0%", null, this.div_order.div_master01);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"300\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"발주번호\"/><Cell col=\"1\" text=\"발주처명\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:ODR_SLPNO\" wordwrap=\"char\"/><Cell col=\"1\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:SHRT_BZPLNM\"/></Band></Format></Formats>");
            this.div_order.div_master01.addChild(obj.name, obj);
            obj = new Button("btn_searchControl01", "absolute", "0", "0", "540", "16", null, null, this.div_order.div_master01);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.div_order.div_master01.addChild(obj.name, obj);

            obj = new Div("div_detail", "absolute", "1108", "0", "540", "834", null, null, this);
            obj.set_taborder("55");
            obj.set_visible("false");
            obj.style.set_background("white");
            this.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0%", "54", null, "122", "62.41%", null, this.div_detail);
            obj.getSetter("taborder").set("0");
            obj.set_text("상품");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "37.59%", "54", null, "122", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "38.33%", "59", null, "54", "2.78%", null, this.div_detail);
            obj.set_taborder("2");
            this.div_detail.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "38.33%", "117", null, "54", "2.78%", null, this.div_detail);
            obj.set_taborder("3");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "97.22%", "55", null, "93", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("4");
            obj.set_visible("false");
            obj.style.set_background("#00ffff33");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static44", "absolute", "0%", "175", null, "64", "62.41%", null, this.div_detail);
            obj.getSetter("taborder").set("5");
            obj.set_text("규격/단위");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static45", "absolute", "37.59%", "175", null, "64", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("6");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0%", "238", null, "64", "62.41%", null, this.div_detail);
            obj.getSetter("taborder").set("7");
            obj.set_text("BOX입수");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "37.59%", "238", null, "64", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0%", "301", null, "64", "62.41%", null, this.div_detail);
            obj.getSetter("taborder").set("9");
            obj.set_text("수주량/배송예정량");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "37.59%", "301", null, "64", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("10");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0%", "364", null, "64", "62.41%", null, this.div_detail);
            obj.getSetter("taborder").set("11");
            obj.set_text("계약단가/납품단가");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "37.59%", "364", null, "64", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("12");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0%", "427", null, "64", "62.41%", null, this.div_detail);
            obj.getSetter("taborder").set("13");
            obj.set_text("금액/부가세");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "37.59%", "427", null, "64", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("14");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static63", "absolute", "0", "0", "540", "55", null, null, this.div_detail);
            obj.getSetter("taborder").set("17");
            obj.set_cssclass("sta_WF_CRUDbg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Button("Button40", "absolute", "84.26%", "4", null, "46", "2.78%", null, this.div_detail);
            obj.set_taborder("18");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit01", "absolute", "38.33%", "369", null, "54", "34.63%", null, this.div_detail);
            obj.set_taborder("19");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "65.37%", "369", null, "54", "29.81%", null, this.div_detail);
            obj.getSetter("taborder").set("20");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit02", "absolute", "70.19%", "369", null, "54", "2.78%", null, this.div_detail);
            obj.set_taborder("21");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit03", "absolute", "38.33%", "432", null, "54", "34.63%", null, this.div_detail);
            obj.set_taborder("22");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "65.37%", "432", null, "54", "29.81%", null, this.div_detail);
            obj.getSetter("taborder").set("23");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit04", "absolute", "70.19%", "432", null, "54", "2.78%", null, this.div_detail);
            obj.set_taborder("24");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit06", "absolute", "38.33%", "306", null, "54", "34.63%", null, this.div_detail);
            obj.set_taborder("28");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "65.37%", "306", null, "54", "29.81%", null, this.div_detail);
            obj.getSetter("taborder").set("29");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit07", "absolute", "70.19%", "306", null, "54", "2.78%", null, this.div_detail);
            obj.set_taborder("30");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit08", "absolute", "38.33%", "243", null, "54", "34.63%", null, this.div_detail);
            obj.set_taborder("31");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "65.37%", "180", null, "54", "29.81%", null, this.div_detail);
            obj.getSetter("taborder").set("32");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit09", "absolute", "38.33%", "180", null, "54", "40.56%", null, this.div_detail);
            obj.set_taborder("33");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit10", "absolute", "70.19%", "180", null, "54", "8.7%", null, this.div_detail);
            obj.set_taborder("34");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "92.41%", "180", null, "54", "2.78%", null, this.div_detail);
            obj.getSetter("taborder").set("36");
            obj.set_text("g");
            obj.style.set_align("center middle");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "60.56%", "180", null, "54", "34.63%", null, this.div_detail);
            obj.getSetter("taborder").set("37");
            obj.set_text("g");
            obj.style.set_align("center middle");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "97.22%", "554", null, "93", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("40");
            obj.set_visible("false");
            obj.style.set_background("#00ffff33");
            this.div_detail.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("52");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 154, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("44");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 154, this.div_order.div_search01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_order.div_search01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 846, this.div_order.div_master01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");

            	}
            );
            this.div_order.div_master01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 1000, this.div_order,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("54");
            		p.set_text("div_pup_van_seq");
            		p.style.set_background("white");
            		p.set_visible("false");

            	}
            );
            this.div_order.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 834, this.div_detail,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("55");
            		p.set_visible("false");
            		p.style.set_background("white");

            	}
            );
            this.div_detail.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 748, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("배송예정 상품별 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8240.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8240.xfdl", function() {
        //include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.div_list.grd_master.set_nodatatext("데이터가 없습니다.");
        	this.div_order.div_master01.grd_order.set_nodatatext("데이터가 없습니다.");
        	this.div_sche.div_master02.grd_sche.set_nodatatext("데이터가 없습니다.");
        	
        	//this.gfn_setInitForm(obj,e);
        	var today = this.gfn_today('yyyyMMdd');
        	
        	this.div_search.cal_from.set_value(this.gfn_minusDate(today,7));	
        	this.div_search.cal_to.set_value(today);
        	
        	this.div_order.div_search01.cal_order_from.set_value(this.gfn_minusDate(today, 1));
        	this.div_order.div_search01.cal_order_to.set_value(this.gfn_addDate(today, 7));
        	
        	this.div_sche.div_search02.cal_sche_from.set_value(this.gfn_minusDate(today, 1));
        	this.div_sche.div_search02.cal_sche_to.set_value(this.gfn_addDate(today, 7));
        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {		
        	
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) < 0){
        	
        		//조회 시작일과 종료일을 다시 확인해 주세요
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	}else{
        		if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 31){

        		//기간을 31일 이내로 선택해 주세요
        		this.gfn_getMessage("alert", "validation.message.selectDateIn31Day");
        		return false;
        		}
        	}
        	
        	if(this.gfn_isNull(this.div_search.edt_odr_slpno.value)){
        		alert("발주번호를 선택해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.div_search.edt_odrpl_na_trpl_c.value)){
        		alert("발주처를 선택해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.div_search.edt_dvy_plash_slpno.value)){
        		alert("배송예정서 번호를 선택해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.div_search.cbo_date.value)){
        		alert("조회 일자를 선택해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.div_search.rdo_confirm.value)){
        		alert("조회 구분을 선택해 주세요");
        		return false;
        	}
        	
        	return true;
        }

        

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	
        }

        this.div_list_grd_master_oncellclick = function(obj,e)
        {
        	var nLeft = 0;
        	var nTop = 0;
        	this.div_detail.move(nLeft, nTop);
        	this.div_detail.bringToFront();
        	this.div_detail.set_visible(true);
        }

        /*발주번호 팝업*/
        this.div_search_btn_odr_slpno_onclick = function(obj,e)
        {
        		var nLeft = 0;
        		var nTop = 0;
        		this.div_order.move(nLeft, nTop);
        		this.div_order.bringToFront();
        		this.div_order.set_visible(true);
        		
        		//this.gfn_callDetailMenu("div_order", "발주번호 조회", "미입고 패널티^배송예정서;직송등록^");
        }

        /*배송예정서 팝업*/
        this.div_search_btn_dvy_plash_slpno_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.div_search.edt_odrpl_na_trpl_c.value)){
        		alert("발주처를 선택해 주세요");
        		return false;
        	}else{
        		var nLeft = 0;
        		var nTop = 0;
        		this.div_sche.move(nLeft, nTop);
        		this.div_sche.bringToFront();
        		this.div_sche.set_visible(true);
        	}
        	//this.gfn_callDetailMenu("div_sche", "배송예정서번호 조회", "미입고 패널티^배송예정서;직송등록^");
        }

        this.div_sche_div_search02_btn_searchSche_onclick = function(obj,e)
        {
        	this.fn_searchSche();
        }

        this.div_order_div_search01_btn_searchOrder_onclick = function(obj,e)
        {
        	this.fn_searchOrder();
        }

        /*발주번호 조회*/
        this.fn_searchOrder = function(){
        	
        	var dvy_rqr_dt_fr = this.gfn_nullToEmpty(this.div_order.div_search01.cal_order_from.value);
        	var dvy_rqr_dt_to = this.gfn_nullToEmpty(this.div_order.div_search01.cal_order_to.value);
        	
        }

        /*배송예정서 조회*/
        this.fn_searchSche = function(){
        	
        	var sche_from = this.gfn_nullToEmpty(this.div_sche.div_search02.cal_sche_from.value);
        	var sche_to = this.gfn_nullToEmpty(this.div_sche.div_search02.cal_sche_to.value);
        	
        }

        this.div_order_div_master01_grd_order_oncellclick = function(obj,e)
        {
        	this.div_order.bringToPrev();
        	this.div_order.set_visible(false);
        	
        	
        	
        	//openMenu에 등록된 Division삭제
        	this.gfn_topMenuBackMobile();
        }

        this.div_sche_div_master02_grd_sche_oncellclick = function(obj,e)
        {
        	this.div_sche.bringToPrev();
        	this.div_sche.set_visible(false);
        	
        	
        	//openMenu에 등록된 Division삭제
        	this.gfn_topMenuBackMobile();
        }

        this.div_list_btn_searchControl00_onclick = function(obj,e)
        {
        	this.gfn_mobileSearchDivResize(obj, this.div_search, this.div_list);
        }

        this.div_order_div_master01_btn_searchControl01_onclick = function(obj,e)
        {
        	this.gfn_mobileSearchDivResize(obj, this.div_order.div_search01, this.div_order.div_master01);
        }

        this.div_sche_div_master02_btn_searchControl02_onclick = function(obj,e)
        {
        	this.gfn_mobileSearchDivResize(obj, this.div_sche.div_search02, this.div_sche.div_master02);
        }
        //셀클릭 임시
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	var nLeft = 0;
        	var nTop = 0;
        	this.div_detail.move(nLeft, nTop);
        	this.div_detail.bringToFront();
        	this.div_detail.set_visible(true);
        	this.gfn_callDetailMenu("div_detail", "배송예정 상품별 상세", "배송예정 상품별^배송예정;거래처별^미입고;패널티");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.div_list_grd_master_oncellclick, this);
            this.div_list.btn_searchControl00.addEventHandler("onclick", this.div_list_btn_searchControl00_onclick, this);
            this.div_search.btn_search.addEventHandler("onclick", this.div_search_btn_search_onclick, this);
            this.div_search.btn_dvy_plash_slpno.addEventHandler("onclick", this.div_search_btn_dvy_plash_slpno_onclick, this);
            this.div_order.div_search01.btn_searchOrder.addEventHandler("onclick", this.div_order_div_search01_btn_searchOrder_onclick, this);
            this.div_order.div_master01.grd_order.addEventHandler("oncellclick", this.div_order_div_master01_grd_order_oncellclick, this);
            this.div_order.div_master01.btn_searchControl01.addEventHandler("onclick", this.div_order_div_master01_btn_searchControl01_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8240.xfdl");

       
    };
}
)();
