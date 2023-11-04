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
                this.set_name("OMG_DS_SC_5030");
                this.set_titletext("기본과금정책");
                this._setFormPosition(0,0,993,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_edi", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RATE\" type=\"INT\" size=\"256\"/><Column id=\"UGQT_ST_STN\" type=\"INT\" size=\"256\"/><Column id=\"UGQT_ED_STN\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_adinf", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MM_FDAM\" type=\"INT\" size=\"256\"/><Column id=\"MSR_RT_AM\" type=\"INT\" size=\"256\"/><Column id=\"MM_SL_AM_ST_STN\" type=\"STRING\" size=\"256\"/><Column id=\"MM_SL_AM_ED_STN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_fdam", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MM_FDAM\" type=\"INT\" size=\"256\"/><Column id=\"RATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RATE_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "16", null, this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "978", "0", "15", "491", null, null, this);
            obj.set_taborder("22");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("43");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "92.75%", "21", null, "8", "1.71%", null, this);
            obj.set_taborder("44");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "68.98%", "80", null, "41", "25.38%", null, this);
            obj.set_taborder("46");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static_edi", "absolute", "0%", "32", null, "21", "87.92%", null, this);
            obj.set_taborder("47");
            obj.set_text("EDI 서비스");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static_buga", "absolute", "43.91%", "32", null, "21", "44.01%", null, this);
            obj.set_taborder("48");
            obj.set_text("부가정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static106", "absolute", "22.86%", "84", null, "28", "61.13%", null, this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("원/KB");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_Rate1", "absolute", "26.59%", "88", null, "21", "66.47%", null, this);
            obj.set_taborder("50");
            obj.style.set_align("right middle");
            obj.set_inputtype("number,comma");
            this.addChild(obj.name, obj);

            obj = new Static("Static105", "absolute", "0%", "84", null, "28", "77.04%", null, this);
            obj.set_taborder("51");
            obj.set_text("0 ~ 1,000");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0%", "55", null, "30", "77.04%", null, this);
            obj.set_taborder("52");
            obj.set_text("사용량 구간(KB)");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "22.86%", "55", null, "30", "61.13%", null, this);
            obj.set_taborder("53");
            obj.set_text("요금(KB당)");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "22.86%", "111", null, "28", "61.13%", null, this);
            obj.set_taborder("54");
            obj.set_text("원/KB");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_Rate2", "absolute", "26.59%", "115", null, "21", "66.47%", null, this);
            obj.set_taborder("55");
            obj.style.set_align("right middle");
            obj.set_inputtype("number,comma");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0%", "111", null, "28", "77.04%", null, this);
            obj.set_taborder("56");
            obj.set_text("1,001 ~ 3,000");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "22.86%", "138", null, "28", "61.13%", null, this);
            obj.set_taborder("57");
            obj.set_text("원/KB");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_Rate3", "absolute", "26.59%", "142", null, "21", "66.47%", null, this);
            obj.set_taborder("58");
            obj.style.set_align("right middle");
            obj.set_inputtype("number,comma");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "22.86%", "165", null, "28", "61.13%", null, this);
            obj.set_taborder("59");
            obj.set_text("원/KB");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_Rate4", "absolute", "26.59%", "169", null, "21", "66.47%", null, this);
            obj.set_taborder("60");
            obj.style.set_align("right middle");
            obj.set_inputtype("number,comma");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0%", "165", null, "28", "77.04%", null, this);
            obj.set_taborder("61");
            obj.set_text("5,001 ~ 10,000");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0%", "138", null, "28", "77.04%", null, this);
            obj.set_taborder("62");
            obj.set_text("3,001 ~ 5,000");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "22.86%", "192", null, "28", "61.13%", null, this);
            obj.set_taborder("63");
            obj.set_text("원/KB");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_Rate5", "absolute", "26.49%", "196", null, "21", "66.57%", null, this);
            obj.set_taborder("64");
            obj.style.set_align("right middle");
            obj.set_inputtype("number,comma");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "22.86%", "219", null, "28", "61.13%", null, this);
            obj.set_taborder("65");
            obj.set_text("원/KB");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_Rate6", "absolute", "26.49%", "223", null, "21", "66.57%", null, this);
            obj.set_taborder("66");
            obj.style.set_align("right middle");
            obj.set_inputtype("number,comma");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "22.86%", "246", null, "28", "61.13%", null, this);
            obj.set_taborder("67");
            obj.set_text("원/KB");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_Rate7", "absolute", "26.49%", "250", null, "21", "66.57%", null, this);
            obj.set_taborder("68");
            obj.style.set_align("right middle");
            obj.set_inputtype("number,comma");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0%", "246", null, "28", "77.04%", null, this);
            obj.set_taborder("69");
            obj.set_text("100,000 초과");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "0%", "219", null, "28", "77.04%", null, this);
            obj.set_taborder("70");
            obj.set_text("50,001 ~ 100,000");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0%", "192", null, "28", "77.04%", null, this);
            obj.set_taborder("71");
            obj.set_text("10,001 ~ 50,000");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "34.14%", "339", null, "39", "49.85%", null, this);
            obj.set_taborder("72");
            obj.set_text("원/월");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edit_FDAM1", "absolute", "36.25%", "348", null, "21", "55.19%", null, this);
            obj.set_taborder("73");
            obj.style.set_align("right middle");
            obj.getSetter("inputfilter").set("comma");
            obj.getSetter("inputtype").set("number,comma");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "11.28%", "339", null, "39", "65.76%", null, this);
            obj.set_taborder("74");
            obj.set_text("매출추이\r\nTOP10");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "11.28%", "310", null, "30", "65.76%", null, this);
            obj.set_taborder("75");
            obj.set_text("상세내역");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "34.14%", "310", null, "30", "49.85%", null, this);
            obj.set_taborder("76");
            obj.set_text("요금(월정액)");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "34.14%", "376", null, "39", "49.85%", null, this);
            obj.set_taborder("77");
            obj.set_text("원/월");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edit_FDAM2", "absolute", "36.25%", "386", null, "21", "55.19%", null, this);
            obj.set_taborder("78");
            obj.style.set_align("right middle");
            obj.getSetter("inputfilter").set("comma");
            obj.getSetter("inputtype").set("number,comma");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "11.28%", "376", null, "39", "65.76%", null, this);
            obj.set_taborder("79");
            obj.set_text("판매\r\n재고추이분석");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "34.14%", "414", null, "55", "49.85%", null, this);
            obj.set_taborder("80");
            obj.set_text("원/월");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edit_FDAM3", "absolute", "36.25%", "431", null, "21", "55.19%", null, this);
            obj.set_taborder("81");
            obj.style.set_align("right middle");
            obj.getSetter("inputfilter").set("comma");
            obj.getSetter("inputtype").set("number,comma");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "34.14%", "468", null, "77", "49.85%", null, this);
            obj.set_taborder("82");
            obj.set_text("원/월");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edit_FDAM4", "absolute", "36.25%", "496", null, "21", "55.19%", null, this);
            obj.set_taborder("83");
            obj.style.set_align("right middle");
            obj.getSetter("inputfilter").set("comma");
            obj.getSetter("inputtype").set("number,comma");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "11.28%", "468", null, "77", "65.76%", null, this);
            obj.set_taborder("84");
            obj.set_text("월별 경쟁사 시장분석\r\n주별 경쟁사 시장분석\r\n경쟁사 판매정보 다운로드\r\n(카테고리별)");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "11.28%", "414", null, "55", "65.76%", null, this);
            obj.set_taborder("85");
            obj.set_text("시장점유율\r\n판매순위랭킹\r\n점포별ABC");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static_edi00", "absolute", "0%", "286", null, "21", "87.92%", null, this);
            obj.set_taborder("86");
            obj.set_text("정보분석");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "0%", "468", null, "77", "88.42%", null, this);
            obj.set_taborder("87");
            obj.set_text("시장분석\r\n(타사)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "0%", "414", null, "55", "88.42%", null, this);
            obj.set_taborder("88");
            obj.set_text("시장분석\r\n(자사)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            obj.set_wordwrap("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "0%", "376", null, "39", "88.42%", null, this);
            obj.set_taborder("89");
            obj.set_text("추이분석");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "0%", "338", null, "39", "88.42%", null, this);
            obj.set_taborder("90");
            obj.set_text("BI조회");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "0%", "310", null, "30", "88.42%", null, this);
            obj.set_taborder("91");
            obj.set_text("구분");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "62.03%", "82", null, "28", "19.44%", null, this);
            obj.set_taborder("92");
            obj.set_text("만원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edit_ADAM1", "absolute", "67.37%", "86", null, "21", "25.68%", null, this);
            obj.set_taborder("93");
            obj.style.set_align("right middle");
            obj.getSetter("inputtype").set("number,comma");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "43.91%", "82", null, "28", "37.87%", null, this);
            obj.set_taborder("94");
            obj.set_text("10억 이상");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "62.03%", "53", null, "30", "19.44%", null, this);
            obj.set_taborder("95");
            obj.set_text("정액제 (월정액)");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "62.03%", "109", null, "28", "19.44%", null, this);
            obj.set_taborder("96");
            obj.set_text("만원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edit_ADAM2", "absolute", "67.37%", "113", null, "21", "25.68%", null, this);
            obj.set_taborder("97");
            obj.style.set_align("right middle");
            obj.getSetter("inputtype").set("number,comma");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "43.91%", "109", null, "28", "37.87%", null, this);
            obj.set_taborder("98");
            obj.set_text("5억 ~ 10억");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "62.03%", "136", null, "28", "19.44%", null, this);
            obj.set_taborder("99");
            obj.set_text("만원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edit_ADAM3", "absolute", "67.37%", "140", null, "21", "25.68%", null, this);
            obj.set_taborder("100");
            obj.style.set_align("right middle");
            obj.getSetter("inputtype").set("number,comma");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "62.03%", "163", null, "28", "19.44%", null, this);
            obj.set_taborder("101");
            obj.set_text("만원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edit_ADAM4", "absolute", "67.37%", "167", null, "21", "25.68%", null, this);
            obj.set_taborder("102");
            obj.style.set_align("right middle");
            obj.getSetter("inputtype").set("number,comma");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "43.91%", "163", null, "28", "37.87%", null, this);
            obj.set_taborder("103");
            obj.set_text("1억 ~ 3억");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "43.91%", "136", null, "28", "37.87%", null, this);
            obj.set_taborder("104");
            obj.set_text("3억 ~ 5억");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "62.03%", "190", null, "28", "19.44%", null, this);
            obj.set_taborder("105");
            obj.set_text("만원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edit_ADAM5", "absolute", "67.27%", "194", null, "21", "25.78%", null, this);
            obj.set_taborder("106");
            obj.style.set_align("right middle");
            obj.getSetter("inputtype").set("number,comma");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "62.03%", "217", null, "28", "19.44%", null, this);
            obj.set_taborder("107");
            obj.set_text("만원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edit_ADAM6", "absolute", "67.27%", "221", null, "21", "25.78%", null, this);
            obj.set_taborder("108");
            obj.style.set_align("right middle");
            obj.getSetter("inputtype").set("number,comma");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "62.03%", "244", null, "28", "19.44%", null, this);
            obj.set_taborder("109");
            obj.set_text("무료");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "43.91%", "244", null, "28", "37.87%", null, this);
            obj.set_taborder("111");
            obj.set_text("0.3억 미만");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "43.91%", "217", null, "28", "37.87%", null, this);
            obj.set_taborder("112");
            obj.set_text("0.3억 ~ 0.5억");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "43.91%", "190", null, "28", "37.87%", null, this);
            obj.set_taborder("113");
            obj.set_text("0.5억 ~ 1억");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "43.91%", "53", null, "30", "37.87%", null, this);
            obj.set_taborder("114");
            obj.set_text("월매출액구간");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "89.22%", "80", null, "41", "5.14%", null, this);
            obj.set_taborder("115");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "80.36%", "82", null, "28", "1.71%", null, this);
            obj.set_taborder("116");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_RTAM1", "absolute", "86%", "86", null, "21", "7.05%", null, this);
            obj.set_taborder("117");
            obj.style.set_align("right middle");
            obj.set_inputtype("number,comma");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "80.36%", "109", null, "28", "1.71%", null, this);
            obj.set_taborder("118");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_RTAM2", "absolute", "86%", "113", null, "21", "7.05%", null, this);
            obj.set_taborder("119");
            obj.style.set_align("right middle");
            obj.set_inputtype("number,comma");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "80.36%", "136", null, "28", "1.71%", null, this);
            obj.set_taborder("120");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_RTAM3", "absolute", "86%", "140", null, "21", "7.05%", null, this);
            obj.set_taborder("121");
            obj.style.set_align("right middle");
            obj.set_inputtype("number,comma");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "80.36%", "163", null, "28", "1.71%", null, this);
            obj.set_taborder("122");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_RTAM4", "absolute", "86%", "167", null, "21", "7.05%", null, this);
            obj.set_taborder("123");
            obj.style.set_align("right middle");
            obj.set_inputtype("number,comma");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "80.36%", "190", null, "28", "1.71%", null, this);
            obj.set_taborder("124");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_RTAM5", "absolute", "85.9%", "194", null, "21", "7.15%", null, this);
            obj.set_taborder("125");
            obj.style.set_align("right middle");
            obj.set_inputtype("number,comma");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "80.36%", "217", null, "28", "1.71%", null, this);
            obj.set_taborder("126");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_RTAM6", "absolute", "85.9%", "221", null, "21", "7.15%", null, this);
            obj.set_taborder("127");
            obj.style.set_align("right middle");
            obj.set_inputtype("number,comma");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "80.36%", "244", null, "28", "1.71%", null, this);
            obj.set_taborder("128");
            obj.set_text("무료");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "80.36%", "53", null, "30", "1.71%", null, this);
            obj.set_taborder("130");
            obj.set_text("종량제 SKU(건당)");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static_edi01", "absolute", "54.68%", "286", null, "21", "33.23%", null, this);
            obj.set_taborder("131");
            obj.set_text("기본요금");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "77.54%", "339", null, "39", "6.45%", null, this);
            obj.set_taborder("132");
            obj.set_text("원/월");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edit_FDAM5", "absolute", "79.66%", "350", null, "21", "11.78%", null, this);
            obj.set_taborder("133");
            obj.getSetter("inputfilter").set("comma");
            obj.getSetter("inputtype").set("number,comma");
            obj.style.set_align("right middle");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "54.68%", "339", null, "39", "22.36%", null, this);
            obj.set_taborder("134");
            obj.set_text("전자계약\r\n전자세금계산서");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "77.54%", "310", null, "30", "6.45%", null, this);
            obj.set_taborder("135");
            obj.set_text("요금(월정액)");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "54.68%", "310", null, "30", "22.36%", null, this);
            obj.set_taborder("136");
            obj.set_text("상세내역");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btn_his1", "absolute", null, "27", "57", "21", "61.13%", null, this);
            obj.set_taborder("137");
            obj.set_text("이력 조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_his2", "absolute", null, "27", "57", "21", "1.71%", null, this);
            obj.set_taborder("138");
            obj.set_text("이력 조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_his3", "absolute", null, "282", "57", "21", "49.85%", null, this);
            obj.set_taborder("139");
            obj.set_text("이력 조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_his4", "absolute", null, "282", "57", "21", "6.45%", null, this);
            obj.set_taborder("140");
            obj.set_text("이력 조회");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("기본과금정책");

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
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7110.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7110.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {

            var sParams = "";
        	var sSvcID        = "retrieveBaseChargePolicy";
        	var sURL          = "svc::rest/bl/retrieveBaseChargePolicy";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_edi=ds_edi ds_adinf=ds_adinf ds_fdam=ds_fdam";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회  

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
           
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	

        /*저장*/
        this.btn_save_onclick = function(obj,e)
        {		
        	this.ds_edi.setColumn(0,"RATE",this.Edit_Rate1.value);
        	this.ds_edi.setColumn(1,"RATE",this.Edit_Rate2.value);
        	this.ds_edi.setColumn(2,"RATE",this.Edit_Rate3.value);
        	this.ds_edi.setColumn(3,"RATE",this.Edit_Rate4.value);
        	this.ds_edi.setColumn(4,"RATE",this.Edit_Rate5.value);
        	this.ds_edi.setColumn(5,"RATE",this.Edit_Rate6.value);
        	this.ds_edi.setColumn(6,"RATE",this.Edit_Rate7.value);
        	
        	this.ds_edi.setColumn(0,"UGQT_ST_STN",0);
        	this.ds_edi.setColumn(0,"UGQT_ED_STN",1000);
        	this.ds_edi.setColumn(1,"UGQT_ST_STN",1001);
        	this.ds_edi.setColumn(1,"UGQT_ED_STN",3000);
        	this.ds_edi.setColumn(2,"UGQT_ST_STN",3001);
        	this.ds_edi.setColumn(2,"UGQT_ED_STN",5000);
        	this.ds_edi.setColumn(3,"UGQT_ST_STN",5001);
        	this.ds_edi.setColumn(3,"UGQT_ED_STN",10000);
        	this.ds_edi.setColumn(4,"UGQT_ST_STN",10001);
        	this.ds_edi.setColumn(4,"UGQT_ED_STN",50000);
        	this.ds_edi.setColumn(5,"UGQT_ST_STN",50001);
        	this.ds_edi.setColumn(5,"UGQT_ED_STN",100000);
        	this.ds_edi.setColumn(6,"UGQT_ST_STN",100000);
        	
        	this.ds_adinf.setColumn(0,"MM_FDAM",this.Edit_ADAM1.value);
        	this.ds_adinf.setColumn(1,"MM_FDAM",this.Edit_ADAM2.value);
        	this.ds_adinf.setColumn(2,"MM_FDAM",this.Edit_ADAM3.value);
        	this.ds_adinf.setColumn(3,"MM_FDAM",this.Edit_ADAM4.value);
        	this.ds_adinf.setColumn(4,"MM_FDAM",this.Edit_ADAM5.value);
        	this.ds_adinf.setColumn(5,"MM_FDAM",this.Edit_ADAM6.value);
        	this.ds_adinf.setColumn(6,"MM_FDAM","0");
        	
        	this.ds_adinf.setColumn(0,"MSR_RT_AM",this.Edit_RTAM1.value);
        	this.ds_adinf.setColumn(1,"MSR_RT_AM",this.Edit_RTAM2.value);
        	this.ds_adinf.setColumn(2,"MSR_RT_AM",this.Edit_RTAM3.value);
        	this.ds_adinf.setColumn(3,"MSR_RT_AM",this.Edit_RTAM4.value);
        	this.ds_adinf.setColumn(4,"MSR_RT_AM",this.Edit_RTAM5.value);
        	this.ds_adinf.setColumn(5,"MSR_RT_AM",this.Edit_RTAM6.value);
        	this.ds_adinf.setColumn(6,"MSR_RT_AM","0");
        	
        	this.ds_adinf.setColumn(0,"MM_SL_AM_ST_STN","10");
        	this.ds_adinf.setColumn(1,"MM_SL_AM_ST_STN","5");
        	this.ds_adinf.setColumn(2,"MM_SL_AM_ST_STN","3");
        	this.ds_adinf.setColumn(3,"MM_SL_AM_ST_STN","1");
        	this.ds_adinf.setColumn(4,"MM_SL_AM_ST_STN","0.5");
        	this.ds_adinf.setColumn(5,"MM_SL_AM_ST_STN","0.3");
        	
        	this.ds_adinf.setColumn(1,"MM_SL_AM_ED_STN","10");
        	this.ds_adinf.setColumn(2,"MM_SL_AM_ED_STN","5");
        	this.ds_adinf.setColumn(3,"MM_SL_AM_ED_STN","3");
        	this.ds_adinf.setColumn(4,"MM_SL_AM_ED_STN","1");
        	this.ds_adinf.setColumn(5,"MM_SL_AM_ED_STN","0.5");
        	this.ds_adinf.setColumn(6,"MM_SL_AM_ED_STN","0.3");	
        	
        	this.ds_fdam.setColumn(0,"MM_FDAM",this.Edit_FDAM1.value);
        	this.ds_fdam.setColumn(1,"MM_FDAM",this.Edit_FDAM2.value);
        	this.ds_fdam.setColumn(2,"MM_FDAM",this.Edit_FDAM3.value);
        	this.ds_fdam.setColumn(3,"MM_FDAM",this.Edit_FDAM4.value);
        	this.ds_fdam.setColumn(4,"MM_FDAM",this.Edit_FDAM5.value);
        	
        	this.ds_fdam.setColumn(0,"RATE_NM","BI조회");
        	this.ds_fdam.setColumn(1,"RATE_NM","추이분석");
        	this.ds_fdam.setColumn(2,"RATE_NM","시장분석(자사)");
        	this.ds_fdam.setColumn(3,"RATE_NM","시장분석(타사)");
        	this.ds_fdam.setColumn(4,"RATE_NM","기본요금");
        	
        	var sParams = "Rate1="+this.gfn_nullToEmpty(this.Edit_Rate1.value);
        	var sSvcID        = "updateBaseChargePolicy";
        	var sURL          = "svc::rest/bl/saveBaseChargePolicy";	
        	var sInDatasets   = "ds_edi=ds_edi ds_adinf=ds_adinf ds_fdam=ds_fdam";
        	var sOutDatasets  = "";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회			
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        				
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveBaseChargePolicy"){
        			this.Edit_Rate1.set_value(this.ds_edi.getColumn(0,"RATE"));
        			this.Edit_Rate2.set_value(this.ds_edi.getColumn(1,"RATE"));
        			this.Edit_Rate3.set_value(this.ds_edi.getColumn(2,"RATE"));
        			this.Edit_Rate4.set_value(this.ds_edi.getColumn(3,"RATE"));
        			this.Edit_Rate5.set_value(this.ds_edi.getColumn(4,"RATE"));
        			this.Edit_Rate6.set_value(this.ds_edi.getColumn(5,"RATE"));
        			this.Edit_Rate7.set_value(this.ds_edi.getColumn(6,"RATE"));

        			this.Edit_ADAM1.set_value(this.ds_adinf.getColumn(0,"MM_FDAM"));
        			this.Edit_ADAM2.set_value(this.ds_adinf.getColumn(1,"MM_FDAM"));
        			this.Edit_ADAM3.set_value(this.ds_adinf.getColumn(2,"MM_FDAM"));
        			this.Edit_ADAM4.set_value(this.ds_adinf.getColumn(3,"MM_FDAM"));
        			this.Edit_ADAM5.set_value(this.ds_adinf.getColumn(4,"MM_FDAM"));
        			this.Edit_ADAM6.set_value(this.ds_adinf.getColumn(5,"MM_FDAM"));

        			this.Edit_RTAM1.set_value(this.ds_adinf.getColumn(0,"MSR_RT_AM"));
        			this.Edit_RTAM2.set_value(this.ds_adinf.getColumn(1,"MSR_RT_AM"));
        			this.Edit_RTAM3.set_value(this.ds_adinf.getColumn(2,"MSR_RT_AM"));
        			this.Edit_RTAM4.set_value(this.ds_adinf.getColumn(3,"MSR_RT_AM"));
        			this.Edit_RTAM5.set_value(this.ds_adinf.getColumn(4,"MSR_RT_AM"));
        			this.Edit_RTAM6.set_value(this.ds_adinf.getColumn(5,"MSR_RT_AM"));

        			this.Edit_FDAM1.set_value(this.ds_fdam.getColumn(0,"MM_FDAM"));
        			this.Edit_FDAM2.set_value(this.ds_fdam.getColumn(1,"MM_FDAM"));
        			this.Edit_FDAM3.set_value(this.ds_fdam.getColumn(2,"MM_FDAM"));
        			this.Edit_FDAM4.set_value(this.ds_fdam.getColumn(3,"MM_FDAM"));
        			this.Edit_FDAM5.set_value(this.ds_fdam.getColumn(4,"MM_FDAM"));
        			}
        		else if(svcID == "updateBaseChargePolicy"){
        			
        			this.gfn_getMessage("alert", "result.message.save.success");
        			return;		
        		}
        	}	
        }

        this.btn_his1_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"S"};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","OMG.BL::OMG_DS_SC_7111.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.btn_his2_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"S"};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","OMG.BL::OMG_DS_SC_7112.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.btn_his3_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"S"};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","OMG.BL::OMG_DS_SC_7113.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.btn_his4_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"S"};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","OMG.BL::OMG_DS_SC_7114.xfdl",oArg,sOption,sPopupCallBack);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_his1.addEventHandler("onclick", this.btn_his1_onclick, this);
            this.btn_his2.addEventHandler("onclick", this.btn_his2_onclick, this);
            this.btn_his3.addEventHandler("onclick", this.btn_his3_onclick, this);
            this.btn_his4.addEventHandler("onclick", this.btn_his4_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7110.xfdl");
        this.loadPreloadList();
       
    };
}
)();
