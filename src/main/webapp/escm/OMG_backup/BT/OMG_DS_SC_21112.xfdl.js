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
                this.set_name("OMG_DS_SC_21112");
                this.set_titletext("신규계약 (수산 건어/가공 평가표)");
                this._setFormPosition(0,0,803,940);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rdo00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"point\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">15</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">20</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">25</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">30</Col><Col id=\"point\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rdo01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"point\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">20</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">25</Col><Col id=\"point\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rdo02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"point\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">10</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">15</Col><Col id=\"point\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rdo03", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"point\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">5</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">10</Col><Col id=\"point\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rcev", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CSLT_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A1\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A2\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A3\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A4\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A5\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A6\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B1\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B11\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B2\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B3\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B4\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B5\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNGCN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_C\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uploadresult02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_C\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rdo04", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"point\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">10</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">15</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static28", "absolute", "380", "406", null, "29", "15", null, this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "380", "658", null, "29", "15", null, this);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "380", "602", null, "29", "15", null, this);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "182", "60", "29", "15", null, this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", null, "630", "60", "29", "15", null, this);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "16", "15", "120", "29", null, null, this);
            obj.set_taborder("1");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "135", "15", "246", "29", null, null, this);
            obj.set_taborder("24");
            obj.set_text("평가기준");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "380", "15", null, "29", "133", null, this);
            obj.set_taborder("25");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", null, "15", "60", "29", "74", null, this);
            obj.set_taborder("26");
            obj.set_text("배점");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", null, "15", "60", "29", "15", null, this);
            obj.set_taborder("27");
            obj.set_text("득점");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "16", "43", "120", "140", null, null, this);
            obj.set_taborder("28");
            obj.set_text("업력");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "135", "154", "246", "29", null, null, this);
            obj.set_taborder("29");
            obj.set_text("사업자 등록증 첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "380", "154", null, "29", "15", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down00", "absolute", "384", "158", null, "21", "89", null, this);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "127", "60", "29", "15", null, this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", null, "99", "60", "29", "15", null, this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", null, "71", "60", "29", "15", null, this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", null, "43", "60", "29", "15", null, this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_a01", "absolute", null, "43", "20", "113", "31", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@ds_rdo00");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_index("-1");

            obj = new Static("Static66", "absolute", null, "43", "60", "29", "74", null, this);
            obj.set_taborder("36");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", null, "71", "60", "29", "74", null, this);
            obj.set_taborder("37");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", null, "99", "60", "29", "74", null, this);
            obj.set_taborder("38");
            obj.set_text("25");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, "127", "60", "29", "74", null, this);
            obj.set_taborder("39");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "380", "127", null, "29", "133", null, this);
            obj.set_taborder("40");
            obj.set_text("10년 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "380", "99", null, "29", "133", null, this);
            obj.set_taborder("41");
            obj.set_text("5년 이상 ~ 10년 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "380", "71", null, "29", "133", null, this);
            obj.set_taborder("42");
            obj.set_text("3년 이상 ~ 5년 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "380", "43", null, "29", "133", null, this);
            obj.set_taborder("43");
            obj.set_text("1년 이상 ~ 3년 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "135", "43", "246", "113", null, null, this);
            obj.set_taborder("44");
            obj.set_text("동종업계 업력");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", null, "182", "60", "29", "74", null, this);
            obj.set_taborder("46");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "380", "182", null, "29", "133", null, this);
            obj.set_taborder("47");
            obj.set_text("3년 이상 ~ 5년 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "135", "182", "246", "57", null, null, this);
            obj.set_taborder("48");
            obj.set_text("제조시설 · OEM 보유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "16", "182", "120", "253", null, null, this);
            obj.set_taborder("49");
            obj.set_text("운영능력");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "380", "266", null, "29", "133", null, this);
            obj.set_taborder("50");
            obj.set_text("3년 이상 ~ 5년 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "380", "238", null, "29", "15", null, this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload01", "absolute", null, "242", "72", "21", "19", null, this);
            obj.set_taborder("5");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", null, "266", "60", "29", "15", null, this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", null, "294", "60", "29", "15", null, this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_a03", "absolute", null, "266", "20", "57", "31", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_innerdataset("@ds_rdo02");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_index("-1");

            obj = new Static("Static13", "absolute", null, "294", "60", "29", "74", null, this);
            obj.set_taborder("54");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "380", "294", null, "29", "133", null, this);
            obj.set_taborder("55");
            obj.set_text("5년 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "380", "350", null, "29", "133", null, this);
            obj.set_taborder("56");
            obj.set_text("수입면장 기재");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "380", "322", null, "29", "15", null, this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down02", "absolute", "384", "326", null, "21", "89", null, this);
            obj.set_taborder("58");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload02", "absolute", null, "326", "72", "21", "19", null, this);
            obj.set_taborder("8");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", null, "350", "60", "29", "15", null, this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", null, "378", "60", "29", "15", null, this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_a04", "absolute", null, "350", "20", "57", "31", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_innerdataset("@ds_rdo03");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_index("-1");

            obj = new Static("Static22", "absolute", null, "378", "60", "29", "74", null, this);
            obj.set_taborder("61");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "380", "378", null, "29", "133", null, this);
            obj.set_taborder("62");
            obj.set_text("신용장 약정서, 수입면장 기재");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down03", "absolute", "384", "410", null, "21", "89", null, this);
            obj.set_taborder("63");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", null, "266", "60", "29", "74", null, this);
            obj.set_taborder("65");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", null, "350", "60", "29", "74", null, this);
            obj.set_taborder("66");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "16", "434", "120", "113", null, null, this);
            obj.set_taborder("67");
            obj.set_text("실적");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "380", "434", null, "29", "133", null, this);
            obj.set_taborder("68");
            obj.set_text("1억이상 ~ 3억 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "380", "462", null, "29", "133", null, this);
            obj.set_taborder("69");
            obj.set_text("3억이상 ~ 5억 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", null, "434", "60", "29", "74", null, this);
            obj.set_taborder("70");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", null, "462", "60", "29", "74", null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "380", "490", null, "29", "133", null, this);
            obj.set_taborder("72");
            obj.set_text("5억 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", null, "490", "60", "29", "74", null, this);
            obj.set_taborder("73");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", null, "490", "60", "29", "15", null, this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", null, "462", "60", "29", "15", null, this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", null, "434", "60", "29", "15", null, this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_a05", "absolute", null, "434", "20", "85", "31", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("@ds_rdo04");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_index("-1");

            obj = new Static("Static39", "absolute", "380", "518", null, "29", "15", null, this);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down04", "absolute", "384", "522", null, "21", "89", null, this);
            obj.set_taborder("78");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload04", "absolute", null, "522", "72", "21", "19", null, this);
            obj.set_taborder("13");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "16", "546", "120", "141", null, null, this);
            obj.set_taborder("79");
            obj.set_text("기타\r\n(가점)");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "380", "546", null, "57", "133", null, this);
            obj.set_taborder("80");
            obj.set_text("기업 : BB 이상\r\n개인 : 4등급 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", null, "546", "60", "57", "74", null, this);
            obj.set_taborder("81");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", null, "546", "60", "57", "15", null, this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_a06", "absolute", null, "549", "25", "50", "26", null, this);
            obj.set_taborder("15");
            obj.set_value("0");
            obj.set_truevalue("5");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload05", "absolute", null, "606", "72", "21", "19", null, this);
            obj.set_taborder("16");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down05", "absolute", "384", "606", null, "21", "89", null, this);
            obj.set_taborder("83");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "380", "630", null, "29", "133", null, this);
            obj.set_taborder("84");
            obj.set_text("2년 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_a07", "absolute", null, "634", "25", "21", "26", null, this);
            obj.set_taborder("18");
            obj.set_value("0");
            obj.set_truevalue("5");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static187", "absolute", null, "686", "119", "29", "15", null, this);
            obj.set_taborder("86");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static186", "absolute", "380", "686", null, "29", "133", null, this);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static185", "absolute", "135", "686", "246", "29", null, null, this);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static184", "absolute", "16", "686", "120", "29", null, null, this);
            obj.set_taborder("89");
            obj.set_text("소계");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static199", "absolute", "15", "715", null, "20", "-4", null, this);
            obj.set_taborder("90");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_register01", "absolute", null, "735", "41", "21", "103", null, this);
            obj.set_taborder("21");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "735", "84", "21", "15", null, this);
            obj.set_taborder("22");
            obj.set_text("상담가능");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static188", "absolute", "16", "753", "423", "21", null, null, this);
            obj.set_taborder("91");
            obj.set_text("○ 계약 필수조건");
            obj.set_cssclass("sta_WF_DescriptionB01");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 0 0");
            this.addChild(obj.name, obj);

            obj = new Static("Static189", "absolute", "16", "774", "599", "21", null, null, this);
            obj.set_taborder("92");
            obj.set_text("- (선/활) 운송차량 직접운영(법인 또는 대표자 명의) 기간 3년 이상 업체");
            obj.set_cssclass("sta_WF_DescriptionB01");
            obj.style.set_background("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static190", "absolute", "16", "795", "423", "21", null, null, this);
            obj.set_taborder("93");
            obj.set_text("- (공통) 유통 전 단계 원산지 증명서 증빙 가능업체 (수입수산물 포함)");
            obj.set_cssclass("sta_WF_DescriptionB01");
            obj.style.set_background("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static191", "absolute", "16", "816", "423", "21", null, null, this);
            obj.set_taborder("94");
            obj.set_text("- (공통) 생산물책임보험(1사고당 1억원 이상 보장) 가입업체");
            obj.set_cssclass("sta_WF_DescriptionB01");
            obj.style.set_background("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static192", "absolute", "16", "837", "423", "21", null, null, this);
            obj.set_taborder("95");
            obj.set_text("- (공통) 계약자와 실 운영자 동일 원칙 (지역농협 명의도용 업체 배제)");
            obj.set_cssclass("sta_WF_DescriptionB01");
            obj.style.set_background("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static193", "absolute", "16", "858", "639", "21", null, null, this);
            obj.set_taborder("96");
            obj.set_text("신용등급(상 -> 하) : AAA, AA, A+, A, A-, BBB+, BBB, BB+, BB, B+,B, B-, CCC+,CCC, CCC-, CC, C, D");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Static("Static194", "absolute", "16", "879", "423", "21", null, null, this);
            obj.set_taborder("97");
            obj.set_text("계약종료 후 2년 내 계약상담 불가");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "16", "900", "423", "21", null, null, this);
            obj.set_taborder("98");
            obj.set_text("70점 이상 획득업체 상담 가능");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "110", "916", "279", "15", null, null, this);
            obj.set_taborder("99");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", null, "630", "60", "29", "74", null, this);
            obj.set_taborder("102");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down01", "absolute", "384", "242", null, "21", "89", null, this);
            obj.set_taborder("103");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload06", "absolute", null, "662", "72", "21", "19", null, this);
            obj.set_taborder("19");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down06", "absolute", "384", "662", null, "21", "89", null, this);
            obj.set_taborder("104");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "135", "658", "246", "29", null, null, this);
            obj.set_taborder("105");
            obj.set_text("계산서 첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "135", "630", "246", "29", null, null, this);
            obj.set_taborder("106");
            obj.set_text("농협(계통포함) 거래 업력");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "135", "602", "246", "29", null, null, this);
            obj.set_taborder("107");
            obj.set_text("신용평가서 첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "135", "546", "246", "57", null, null, this);
            obj.set_taborder("108");
            obj.set_text("기업 · 개인 신용등급");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "135", "518", "246", "29", null, null, this);
            obj.set_taborder("109");
            obj.set_text("전년 세금계산서(월별, 매월) 첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "135", "434", "246", "85", null, null, this);
            obj.set_taborder("110");
            obj.set_text("매출규모(직전년)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "135", "406", "246", "29", null, null, this);
            obj.set_taborder("111");
            obj.set_text("관련서류 첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "135", "350", "246", "57", null, null, this);
            obj.set_taborder("112");
            obj.set_text("직수입");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "135", "322", "246", "29", null, null, this);
            obj.set_taborder("113");
            obj.set_text("식품소분판매업 영업신고증 첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "135", "266", "246", "57", null, null, this);
            obj.set_taborder("114");
            obj.set_text("직접 소분판매");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "135", "238", "246", "29", null, null, this);
            obj.set_taborder("115");
            obj.set_text("공장등록증 · OEM계약서 첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "380", "210", null, "29", "133", null, this);
            obj.set_taborder("116");
            obj.set_text("5년 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", null, "210", "60", "29", "74", null, this);
            obj.set_taborder("117");
            obj.set_text("25");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", null, "210", "60", "29", "15", null, this);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_a02", "absolute", null, "182", "20", "57", "31", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@ds_rdo01");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_index("-1");

            obj = new FileUpload("FileUpload00", "absolute", null, "158", "72", "21", "19", null, this);
            obj.set_taborder("2");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload03", "absolute", null, "410", "72", "21", "19", null, this);
            obj.set_taborder("10");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down06", "absolute", null, "662", "70", "21", "-77", null, this);
            obj.set_taborder("20");
            obj.set_text("파일다운");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down03", "absolute", null, "410", "70", "21", "-77", null, this);
            obj.set_taborder("11");
            obj.set_text("파일다운");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down02", "absolute", null, "326", "70", "21", "-77", null, this);
            obj.set_taborder("23");
            obj.set_text("파일다운");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down01", "absolute", null, "242", "70", "21", "-75", null, this);
            obj.set_taborder("6");
            obj.set_text("파일다운");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down00", "absolute", null, "158", "70", "21", "-77", null, this);
            obj.set_taborder("3");
            obj.set_text("파일다운");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down05", "absolute", null, "606", "70", "21", "-77", null, this);
            obj.set_taborder("17");
            obj.set_text("파일다운");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down04", "absolute", null, "522", "70", "21", "-77", null, this);
            obj.set_taborder("14");
            obj.set_text("파일다운");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 940, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("신규계약 (수산 건어/가공 평가표)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item30","rdo_a01","value","ds_rcev","EVL_HDNG_A1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","rdo_a03","value","ds_rcev","EVL_HDNG_A3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","rdo_a04","value","ds_rcev","EVL_HDNG_A4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","rdo_a05","value","ds_rcev","EVL_HDNG_A5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","chk_a06","value","ds_rcev","EVL_HDNG_B1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","chk_a07","value","ds_rcev","EVL_HDNG_B2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","rdo_a02","value","ds_rcev","EVL_HDNG_A2");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_21112.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_21112.xfdl", function() {
        //include "lib::comLib.xjs";

        var rdoA01 = 0;
        var rdoA02 = 0;
        var rdoA03 = 0;
        var rdoA04 = 0;
        var rdoA05 = 0;
        var chkA06 = 0;
        var chkA07 = 0;

        var tot;

        this.OMG_DS_SC_21112_onload = function(obj,e)
        {
        	if(this.parent.edt_dsc.value == "popup")
        	{
        		this.btn_insert.set_visible(false);
        		this.btn_register01.set_text("저장");
        		this.btn_register01.set_right(15);
        		
        		/*조회 호출*/
        		this.parent.search();
        	}else if(this.parent.edt_dsc.value == "select"){
        		this.btn_insert.set_visible(false);
        		this.btn_register01.set_visible(false);
        		this.rdo_a01.set_readonly(true);
        		this.rdo_a02.set_readonly(true);
        		this.rdo_a03.set_readonly(true);
        		this.rdo_a04.set_readonly(true);
        		this.rdo_a05.set_readonly(true);
        		this.chk_a06.set_readonly(true);
        		this.chk_a07.set_readonly(true);	
        	}
        }

        /**
         * 건어/가공 평가표
         */

        //동종업계 업력
        this.rdo_a01_onitemchanged = function(obj,e)
        {
        	if(this.gfn_isNull(this.rdo_a01.value))
        	{
        		this.rdo_a01.set_index(0);
        	}
        	rdoA01 = this.rdo_a01.value;
        	this.FileUpload00.set_enable(true);
        	this.edt_down00.set_enable(true);
        	this.fn_sum();
        }

        //제조시설 · OEM 보유
        this.rdo_a02_onitemchanged = function(obj,e)
        {
        	if(this.gfn_isNull(this.rdo_a02.value))
        	{
        		this.rdo_a02.set_index(0);
        	}
        	rdoA02 = this.rdo_a02.value;
        	this.FileUpload01.set_enable(true);
        	this.edt_down01.set_enable(true);
        	this.fn_sum();
        }

        //직접 소분판매
        this.rdo_a03_onitemchanged = function(obj,e)
        {
        	if(this.gfn_isNull(this.rdo_a03.value))
        	{
        		this.rdo_a03.set_index(0);
        	}
        	rdoA03 = this.rdo_a03.value;
        	this.FileUpload02.set_enable(true);
        	this.edt_down02.set_enable(true);
        	this.fn_sum();
        }

        //직수입
        this.rdo_a04_onitemchanged = function(obj,e)
        {
        	if(this.gfn_isNull(this.rdo_a04.value))
        	{
        		this.rdo_a04.set_index(0);
        	}
        	rdoA04 = this.rdo_a04.value;
        	this.FileUpload03.set_enable(true);
        	this.edt_down03.set_enable(true);
        	this.fn_sum();
        }

        //매출규모(직전년)
        this.rdo_a05_onitemchanged = function(obj,e)
        {
        	if(this.gfn_isNull(this.rdo_a05.value))
        	{
        		this.rdo_a05.set_index(0);
        	}
        	rdoA05 = this.rdo_a05.value;
        	this.FileUpload04.set_enable(true);
        	this.edt_down04.set_enable(true);
        	this.fn_sum();
        }

        //기업 · 개인 신용등급
        this.chk_a06_onchanged = function(obj,e)
        {
        	if(this.chk_a06.value == 5)
        	{
        		chkA06 = 5;
        		this.FileUpload05.set_enable(true);
        		this.edt_down05.set_enable(true);
        		this.fn_sum();
        	}
        	if(this.chk_a06.value == 0)
        	{
        		chkA06 = 0;
        		this.FileUpload05.set_enable(false);
        		this.edt_down05.set_enable(false);
        		this.fn_sum();
        		
        		
        		//uncheck 삭제
        		var dmc = 05;
        		this.ds_uploadresult.deleteRow(this.ds_uploadresult.findRow("DCM_C",dmc).toString());
        		
        		
        		this.edt_down05.set_value("");
        	}
        }

        //농협(계통포함) 거래 업력
        this.chk_a07_onchanged = function(obj,e)
        {
        	if(this.chk_a07.value == 5)
        	{
        		chkA07 = 5;
        		this.FileUpload06.set_enable(true);
        		this.edt_down06.set_enable(true);
        		this.fn_sum();
        	}
        	if(this.chk_a07.value == 0)
        	{
        		chkA07 = 0;
        		this.FileUpload06.set_enable(false);
        		this.edt_down06.set_enable(false);
        		this.fn_sum();
        		
        		
        		//uncheck 삭제
        		var dmc = 05;
        		this.ds_uploadresult.deleteRow(this.ds_uploadresult.findRow("DCM_C",dmc).toString());
        		
        		
        		this.edt_down06.set_value("");
        	}
        }

        /*retrieve합계*/
        this.retrieveSum = function()
        {	
        	var nIndex = -1;
        	
        	//동종업계 업력
        	if(this.gfn_isNull(this.rdo_a01.value))
        	{
        		this.rdo_a01.set_index(nIndex);
        	}
        	rdoA01 = this.rdo_a01.value;
        	this.FileUpload00.set_enable(true);

        	//제조시설 · OEM 보유
        	if(this.gfn_isNull(this.rdo_a02.value))
        	{
        		this.rdo_a02.set_index(nIndex);
        	}
        	rdoA02 = this.rdo_a02.value;
        	this.FileUpload01.set_enable(true);
        	
        	//직접 소분판매
        	if(this.gfn_isNull(this.rdo_a03.value))
        	{
        		this.rdo_a03.set_index(nIndex);
        	}
        	rdoA03 = this.rdo_a03.value;
        	this.FileUpload02.set_enable(true);

        	//직수입
        	if(this.gfn_isNull(this.rdo_a04.value))
        	{
        		this.rdo_a04.set_index(nIndex);
        	}
        	rdoA04 = this.rdo_a04.value;
        	this.FileUpload03.set_enable(true);

        	//매출규모(직전년)
        	if(this.gfn_isNull(this.rdo_a05.value))
        	{
        		this.rdo_a05.set_index(nIndex);
        	}
        	rdoA05 = this.rdo_a05.value;
        	this.FileUpload04.set_enable(true);

        	//기업 · 개인 신용등급
        	if(this.gfn_isNull(this.chk_a06.value))
        	{
        		this.chk_a06.set_value(0);
        	}
        	chkA06 = this.chk_a06.value;
        	this.FileUpload05.set_enable(true);
        	
        	//농협(계통포함) 거래 업력
        	if(this.gfn_isNull(this.chk_a07.value))
        	{
        		this.chk_a07.set_value(0);
        	}
        	chkA07 = this.chk_a07.value;
        	this.FileUpload06.set_enable(true);
        	
        	this.fn_sum();
        }

        //합계
        this.fn_sum = function()
        {
        	var num01 = 0;
        	var num02 = 0;
        	var num03 = 0;
        	var num04 = 0;
        	var num05 = 0;
        	var num06 = 0;
        	var num07 = 0;

        	num01 = nexacro.toNumber(rdoA01);
        	num02 = nexacro.toNumber(rdoA02);
        	num03 = nexacro.toNumber(rdoA03);
        	num04 = nexacro.toNumber(rdoA04);
        	num05 = nexacro.toNumber(rdoA05);
        	num06 = nexacro.toNumber(chkA06);
        	num07 = nexacro.toNumber(chkA07);
        		
        	tot = num01 + num02 + num03 + num04 + num05 + num06 + num07;

        	this.Static187.set_text(tot);
        	
        	if(this.parent.edt_dsc.value == "popup")
        	{
        		this.parent.mae_sum00.set_value(tot);
        	}else{
        		this.parent.div00.mae_sum00.set_value(tot);
        	}
        	this.ds_rcev.setColumn(0, "EVL_HDNGCN", tot);
        	this.parent.fn_btnEnable(tot >= 70);
        	/*
        	if(tot >= 70)
        	{
        		this.parent.btn_register.set_enable(true);
        		this.btn_insert.set_enable(true);
        		this.btn_register01.set_enable(true);
        	}
        	else
        	{
        		this.parent.btn_register.set_enable(false);
        		this.btn_insert.set_enable(false);
        		this.btn_register01.set_enable(false);
        	}
        	*/
        }

        
        this.FileUpload_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        /*회사서류 파일첨부*/
        var dmc;
        var name;
        this.FileUpload_onsuccess = function(obj,e)
        {	
        	name = obj.name.substring(10,12); //첨부파일코드00~09
        	dmc = this.ds_uploadresult.findRow("DCM_C",name).toString(); //파일Row위치
        	//alert("obj.name==> "+obj.name+"e.eventid==> "+e.eventid+"e.fromobject==> "+e.fromobject.name);
        	
        	//trace("dmc =>>" + dmc)  ;
        	
        	if(dmc == -1){
        		if( e.datasets == null )
        		{
        			//trace("업로드 실패");
        			return;
        		} else {
        			//trace("업로드 성공");
        			
        			this.ds_uploadresult02.copyData(e.datasets[0]);
        			var fName = this.ds_uploadresult02.getColumn(0,"FILENAME");
        			var fType = this.ds_uploadresult02.getColumn(0,"FILETYPE");
        			var fSize = this.ds_uploadresult02.getColumn(0,"FILESIZE");
        			var orgName = this.ds_uploadresult02.getColumn(0,"ORGFNAME");
        			var sysName = this.ds_uploadresult02.getColumn(0,"SYSTEMFILENAME");
        			
        			var nRow = this.ds_uploadresult.rowposition ;
        		
        			if(this.ds_uploadresult.rowposition == "-1" ){
        				nRow = this.ds_uploadresult.addRow();1
        			}else{
        		
        				nRow = this.ds_uploadresult.addRow();
        			}
        			this.ds_uploadresult.setColumn(nRow ,"DCM_C", name);
        			this.ds_uploadresult.setColumn(nRow,"FILENAME",fName);
        			this.ds_uploadresult.setColumn(nRow,"FILETYPE",fType);
        			this.ds_uploadresult.setColumn(nRow,"FILESIZE",fSize);
        			this.ds_uploadresult.setColumn(nRow,"ORGFNAME",orgName);
        			this.ds_uploadresult.setColumn(nRow,"SYSTEMFILENAME",sysName);
        			
        			this.all["edt_down"+name].set_value(e.datasets[0].getColumn(0,"ORGFNAME"));
        		
        			//trace( this.ds_uploadresult.saveXML()		);
        		}
        		
        	}else{
        		//기존upload파일삭제
        		this.ds_uploadresult.deleteRow(dmc);
        // 		this.ds_uploadresult.appendData(e.datasets[0],false,false);
        // 		this.ds_uploadresult.setColumn(this.ds_uploadresult.rowcount -1 ,"DCM_C", name);
        		
        		this.ds_uploadresult02.copyData(e.datasets[0]);
        		
        		var fName = this.ds_uploadresult02.getColumn(0,"FILENAME");
        		var fType = this.ds_uploadresult02.getColumn(0,"FILETYPE");
        		var fSize = this.ds_uploadresult02.getColumn(0,"FILESIZE");
        		var orgName = this.ds_uploadresult02.getColumn(0,"ORGFNAME");
        		var sysName = this.ds_uploadresult02.getColumn(0,"SYSTEMFILENAME");

        		var nRow = this.ds_uploadresult.addRow();
        		
        		this.ds_uploadresult.setColumn(nRow ,"DCM_C", name);
        		this.ds_uploadresult.setColumn(nRow,"FILENAME",fName);
        		this.ds_uploadresult.setColumn(nRow,"FILETYPE",fType);
        		this.ds_uploadresult.setColumn(nRow,"FILESIZE",fSize);
        		this.ds_uploadresult.setColumn(nRow,"ORGFNAME",orgName);
        		this.ds_uploadresult.setColumn(nRow,"SYSTEMFILENAME",sysName);
        		
        		this.all["edt_down"+name].set_value(e.datasets[0].getColumn(0,"ORGFNAME"));

        	}
        	
        	//trace( this.ds_uploadresult.saveXML()		);
        }

        this.FileUpload_onerror = function(obj,e)
        {
        // 	trace("FileUpload00_onerror");
        // 	trace("e.errorcode: "+e.errorcode);
        // 	trace("e.errormsg: "+e.errormsg);
        }

        this.btn_register_onclick = function(obj,e)
        {
        	this.parent.insert();
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	if(this.edt_down00.enable == true && this.gfn_isNull(this.edt_down00.value)){
        		this.edt_down00.setFocus();
        		this.alert('사업자 등록증을 첨부 하세요.');
        		return false;
        	}
        	if(this.edt_down01.enable == true && this.gfn_isNull(this.edt_down01.value)){
        		this.edt_down01.setFocus();
        		this.alert('공장등록증 · OEM계약서를 첨부 하세요.');
        		return false;
        	}
        	if(this.edt_down02.enable == true && this.gfn_isNull(this.edt_down02.value)){
        		this.edt_down02.setFocus();
        		this.alert('식품소분판매업 영업신고증을 첨부 하세요.');
        		return false;
        	}
        	if(this.edt_down03.enable == true && this.gfn_isNull(this.edt_down03.value)){
        		this.edt_down03.setFocus();
        		this.alert('관련서류를 첨부 하세요.');
        		return false;
        	}
        	if(this.edt_down04.enable == true && this.gfn_isNull(this.edt_down04.value)){
        		this.edt_down04.setFocus();
        		this.alert('전년 세금계산서(월별, 매월)를 첨부 하세요.');
        		return false;
        	}
        	if(this.edt_down05.enable == true && this.gfn_isNull(this.edt_down05.value)){
        		this.edt_down05.setFocus();
        		this.alert('신용평가서를 첨부 하세요.');
        		return false;
        	}
        	if(this.edt_down06.enable == true && this.gfn_isNull(this.edt_down06.value)){
        		this.edt_down06.setFocus();
        		this.alert('계산서를 첨부 하세요.');
        		return false;
        	}
        	
        	return true;
        }

        this.btn_down00_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_down01.value)){
        		var dmc = this.ds_uploadresult.findRow("DCM_C","00");
        		this.ds_uploadresult.set_rowposition(dmc);
        		this.gfn_callDownload(this.ds_uploadresult);
        	}
        }

        this.btn_down01_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_down01.value)){
        		var dmc = this.ds_uploadresult.findRow("DCM_C","01");
        		this.ds_uploadresult.set_rowposition(dmc);
        		this.gfn_callDownload(this.ds_uploadresult);
        	}
        }

        this.btn_down02_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_down02.value)){
        		var dmc = this.ds_uploadresult.findRow("DCM_C","02");
        		this.ds_uploadresult.set_rowposition(dmc);
        		this.gfn_callDownload(this.ds_uploadresult);
        	}
        }

        this.btn_down03_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_down03.value)){
        		var dmc = this.ds_uploadresult.findRow("DCM_C","03");
        		this.ds_uploadresult.set_rowposition(dmc);
        		this.gfn_callDownload(this.ds_uploadresult);
        	}
        }

        this.btn_down04_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_down04.value)){
        		var dmc = this.ds_uploadresult.findRow("DCM_C","04");
        		this.ds_uploadresult.set_rowposition(dmc);
        		this.gfn_callDownload(this.ds_uploadresult);
        	}
        }

        this.btn_down05_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_down05.value)){
        		var dmc = this.ds_uploadresult.findRow("DCM_C","05");
        		this.ds_uploadresult.set_rowposition(dmc);
        		this.gfn_callDownload(this.ds_uploadresult);
        	}
        }

        this.btn_down06_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_down06.value)){
        		var dmc = this.ds_uploadresult.findRow("DCM_C","06");
        		this.ds_uploadresult.set_rowposition(dmc);
        		this.gfn_callDownload(this.ds_uploadresult);
        	}
        }

        /* 비활성화 */
        this.disable = function()
        {
        	this.rdo_a01.set_readonly(true);
        	this.rdo_a02.set_readonly(true);
        	this.rdo_a03.set_readonly(true);
        	this.rdo_a04.set_readonly(true);
        	this.rdo_a05.set_readonly(true);
        	this.chk_a06.set_readonly(true);
        	this.chk_a07.set_readonly(true);

        	this.btn_down00.set_visible(true);
        	this.btn_down00.set_right(19);
        	this.btn_down01.set_visible(true);
        	this.btn_down01.set_right(19);
        	this.btn_down02.set_visible(true);
        	this.btn_down02.set_right(19);
        	this.btn_down03.set_visible(true);
        	this.btn_down03.set_right(19);
        	this.btn_down04.set_visible(true);
        	this.btn_down04.set_right(19);
        	this.btn_down05.set_visible(true);
        	this.btn_down05.set_right(19);
        	this.btn_down06.set_visible(true);
        	this.btn_down06.set_right(19);
        	
        	this.FileUpload00.set_visible(false);
        	this.FileUpload01.set_visible(false);
        	this.FileUpload02.set_visible(false);
        	this.FileUpload03.set_visible(false);
        	this.FileUpload04.set_visible(false);
        	this.FileUpload05.set_visible(false);
        	this.FileUpload06.set_visible(false);

        	this.edt_down00.set_enable(false);
        	this.edt_down01.set_enable(false);
        	this.edt_down02.set_enable(false);
        	this.edt_down03.set_enable(false);
        	this.edt_down04.set_enable(false);
        	this.edt_down05.set_enable(false);
        	this.edt_down06.set_enable(false);
        	
        	this.btn_register01.set_enable(false);
        }

        /*sts2 보완수정 파일업로드 점수입력 비활성화*/
        this.disable2 = function()
        {
        	this.rdo_a01.set_readonly(true);
        	this.rdo_a02.set_readonly(true);
        	this.rdo_a03.set_readonly(true);
        	this.rdo_a04.set_readonly(true);
        	this.rdo_a05.set_readonly(true);
        	this.chk_a06.set_readonly(true);
        	this.chk_a07.set_readonly(true);
        	
        	//파일업로드 활성화
        	if(!this.gfn_isNull(this.edt_down00.value))
        	{
        		this.edt_down00.set_enable(true);
        	}
        	if(!this.gfn_isNull(this.edt_down01.value))
        	{
        		this.edt_down01.set_enable(true);
        	}
        	if(!this.gfn_isNull(this.edt_down02.value))
        	{
        		this.edt_down02.set_enable(true);
        	}
        	if(!this.gfn_isNull(this.edt_down03.value))
        	{
        		this.edt_down03.set_enable(true);
        	}
        	if(!this.gfn_isNull(this.edt_down04.value))
        	{
        		this.edt_down04.set_enable(true);
        	}
        	if(!this.gfn_isNull(this.edt_down05.value))
        	{
        		this.edt_down05.set_enable(true);
        	}
        	if(!this.gfn_isNull(this.edt_down06.value))
        	{
        		this.edt_down06.set_enable(true);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult02.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.OMG_DS_SC_21112_onload, this);
            this.rdo_a01.addEventHandler("onitemchanged", this.rdo_a01_onitemchanged, this);
            this.FileUpload01.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload01.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload01.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.rdo_a03.addEventHandler("onitemchanged", this.rdo_a03_onitemchanged, this);
            this.FileUpload02.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload02.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload02.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.rdo_a04.addEventHandler("onitemchanged", this.rdo_a04_onitemchanged, this);
            this.rdo_a05.addEventHandler("onitemchanged", this.rdo_a05_onitemchanged, this);
            this.FileUpload04.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload04.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload04.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.chk_a06.addEventHandler("onchanged", this.chk_a06_onchanged, this);
            this.FileUpload05.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload05.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload05.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.chk_a07.addEventHandler("onchanged", this.chk_a07_onchanged, this);
            this.btn_register01.addEventHandler("onclick", this.btn_register_onclick, this);
            this.Static192.addEventHandler("onclick", this.Static192_onclick, this);
            this.FileUpload06.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload06.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload06.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.rdo_a02.addEventHandler("onitemchanged", this.rdo_a02_onitemchanged, this);
            this.FileUpload00.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload00.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload00.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload03.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload03.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload03.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.btn_down06.addEventHandler("onclick", this.btn_down06_onclick, this);
            this.btn_down03.addEventHandler("onclick", this.btn_down03_onclick, this);
            this.btn_down02.addEventHandler("onclick", this.btn_down02_onclick, this);
            this.btn_down01.addEventHandler("onclick", this.btn_down01_onclick, this);
            this.btn_down00.addEventHandler("onclick", this.btn_down00_onclick, this);
            this.btn_down05.addEventHandler("onclick", this.btn_down05_onclick, this);
            this.btn_down04.addEventHandler("onclick", this.btn_down04_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_21112.xfdl");

       
    };
}
)();
