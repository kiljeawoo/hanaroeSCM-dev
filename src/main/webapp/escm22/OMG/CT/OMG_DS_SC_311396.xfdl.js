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
                this.set_name("OMG_DS_SC_311396");
                this.set_titletext("부속계약서(테넌트_특약매입)");
                this._setFormPosition(0,0,788,820);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_add", this);
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"ISCHECKED\" type=\"STRING\" size=\"1\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GBN\">매장의 추가입점</Col><Col id=\"CONTENT\">본 계약에 근거하여 他매장 입점</Col><Col id=\"ISCHECKED\">0</Col></Row><Row><Col id=\"GBN\">매장도면</Col><Col id=\"CONTENT\">매장추가입점에 따른 도면첨부</Col><Col id=\"ISCHECKED\">0</Col></Row><Row><Col id=\"GBN\">대표자 변경</Col><Col id=\"CONTENT\">대표이사 등 대표자변경</Col><Col id=\"ISCHECKED\">0</Col></Row><Row><Col id=\"GBN\">계약기간의 연장</Col><Col id=\"CONTENT\">계약기간 연장과 관련한 건</Col><Col id=\"ETC\">재계약 등</Col><Col id=\"ISCHECKED\">0</Col></Row><Row><Col id=\"GBN\">임시판매수수료율</Col><Col id=\"CONTENT\">본 계약상 체결된 수수료 外 행사 등으로 인한 임시 수수료책정</Col><Col id=\"ISCHECKED\">0</Col></Row><Row><Col id=\"GBN\">임시수수료 적용기간</Col><Col id=\"CONTENT\">임시 수수료를 적용받는 기간</Col><Col id=\"ISCHECKED\">0</Col></Row><Row><Col id=\"GBN\">기  타</Col><Col id=\"CONTENT\">기타 부속합의가 필요한 사안</Col><Col id=\"ETC\">자율기재</Col><Col id=\"ISCHECKED\">0</Col></Row></Rows>");
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

            obj = new Dataset("ds_related", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bzplc", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static07", "absolute", "15.74%", "664", null, "29", "0.89%", null, this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "15.74%", "524", null, "29", "0.89%", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "15.74%", "552", null, "29", "0.89%", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "15.74%", "608", null, "29", "0.89%", null, this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "15.74%", "636", null, "29", "0.89%", null, this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "0", "50", "59.26%", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("관련계약서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "10", "59.26%", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("[부속계약서]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_origin", "absolute", null, "50", "107", "21", "0.89%", null, this);
            obj.set_taborder("0");
            obj.set_text("계약서 보기");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_related", "absolute", "0", "77", null, "113", "0.89%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_related");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"47\"/><Column size=\"138\"/><Column size=\"223\"/><Column size=\"201\"/><Column size=\"123\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" text=\"계약서번호\" mask=\"######\"/><Cell col=\"3\" text=\"계약서종류\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" text=\"계약기간\" mask=\"######\"/><Cell col=\"5\" text=\"계약서상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"padding:0 5 0 5;\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"expr:currow+1\"/><Cell col=\"2\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ELT_CTRW_NO\"/><Cell col=\"3\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:MN_CTRW_KD_NM\"/><Cell col=\"4\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:CTR_DT\"/><Cell col=\"5\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" text=\"bind:STS_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "207", "59.26%", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("부속계약서 추가내용 (최소 1개)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "16.88%", "580", null, "29", "0.89%", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "0", "580", null, "29", "80.96%", null, this);
            obj.set_taborder("22");
            obj.set_text("매장도면");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "16.88%", "692", null, "106", "0.89%", null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "0%", "692", null, "106", "80.96%", null, this);
            obj.set_taborder("24");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload", "absolute", "19.67%", "584", null, "24", "159", null, this);
            obj.set_taborder("8");
            obj.getSetter("retry").set("0");
            obj.set_scrollbars("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_ETC52", "absolute", "19.67%", "697", null, "95", "4.19%", null, this);
            obj.set_taborder("17");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2000");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delPlan", "absolute", "81.22%", "584", null, "21", "11.17%", null, this);
            obj.set_taborder("9");
            obj.set_text("변경");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "497", "59.26%", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("부속계약서 약정내용");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC16", "absolute", "28.17%", "640", null, "21", "4.19%", null, this);
            obj.set_taborder("13");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_add", "absolute", "0", "235", null, "252", "0.89%", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_add");
            obj.set_autofittype("col");
            obj.style.set_border("0 solid #808080");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"1\"/><Column size=\"158\"/><Column size=\"373\"/><Column size=\"80\"/><Column size=\"144\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" style=\"background:#f2f8faff;\" text=\"구  분\"/><Cell col=\"2\" style=\"background:#f2f8faff;\" text=\"관련내용\"/><Cell col=\"3\" style=\"background:#f2f8faff;\" text=\"선택여부\" autosizecol=\"none\"/><Cell col=\"4\" style=\"background:#f2f8faff;\" text=\"기  타\" autosizecol=\"none\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" style=\"line:1 solid #ccd3d5ff ;background:#ffffffff;background2:#ffffffff;selectbackground:#ffffffff;selectline:1 solid #ccd3d5ff ;\" text=\"bind:GBN\"/><Cell col=\"2\" style=\"line:1 solid #ccd3d5ff ;background:#ffffffff;background2:#ffffffff;selectbackground:#ffffffff;selectline:1 solid #ccd3d5ff ;\" text=\"bind:CONTENT\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"none\" style=\"line:1 solid #ccd3d5ff ;background:#ffffffff;background2:#ffffffff;selectbackground:#ffffffff;selectline:1 solid #ccd3d5ff ;\" text=\"bind:ISCHECKED\"/><Cell col=\"4\" style=\"line:1 solid #ccd3d5ff ;background:#ffffffff;background2:#ffffffff;selectbackground:#ffffffff;selectline:1 solid #ccd3d5ff ;\" text=\"bind:ETC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_ETC10", "absolute", "69.67%", "528", null, "21", "18.15%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static131", "absolute", "82.23%", "528", null, "21", "16.62%", null, this);
            obj.set_taborder("28");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_ETC11", "absolute", "83.5%", "528", null, "21", "4.19%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static06", "absolute", "0", "636", null, "29", "72.5%", null, this);
            obj.set_taborder("33");
            obj.set_text("계약담당자 혹은 계약상대자의 변경");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "0", "524", null, "29", "80.96%", null, this);
            obj.set_taborder("26");
            obj.set_text("약정기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "552", null, "29", "80.96%", null, this);
            obj.set_taborder("29");
            obj.set_text("목적물의 주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "608", null, "29", "80.96%", null, this);
            obj.set_taborder("31");
            obj.set_text("매장면적(전용)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "50%", "524", null, "29", "30.96%", null, this);
            obj.set_taborder("35");
            obj.set_text("임시수수료 적용기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_stdt", "absolute", "19.67%", "528", null, "21", "68.15%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");

            obj = new Static("Static11", "absolute", "32.23%", "528", null, "21", "66.62%", null, this);
            obj.set_taborder("37");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_eddt", "absolute", "33.5%", "528", null, "21", "54.19%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");

            obj = new Edit("edt_ETC12", "absolute", "19.67%", "556", null, "21", "4.19%", null, this);
            obj.set_taborder("7");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            obj.set_displaynulltext("(예시)농협하나로유통 성남유통센터 內 생필매장");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC13", "absolute", "19.67%", "612", null, "21", "70.3%", null, this);
            obj.set_taborder("10");
            obj.set_value("0");
            obj.set_mask("9990.0");
            obj.set_limitbymask("both");
            obj.style.set_align("right middle");
            obj.getSetter("inputtype").set("number");
            obj.getSetter("inputfilter").set("dot,comma,sign");
            obj.getSetter("maxlength").set("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "29.82%", "612", null, "21", "67.39%", null, this);
            obj.set_taborder("39");
            obj.set_text("㎡");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "62.82%", "612", null, "21", "34.39%", null, this);
            obj.set_taborder("40");
            obj.set_text("㎡");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC14", "absolute", "52.66%", "612", null, "21", "37.31%", null, this);
            obj.set_taborder("11");
            obj.set_value("0");
            obj.set_mask("9990.0");
            obj.set_limitbymask("both");
            obj.style.set_align("right middle");
            obj.getSetter("inputtype").set("number");
            obj.getSetter("inputfilter").set("dot,comma,sign");
            obj.getSetter("maxlength").set("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "95.94%", "612", null, "21", "1.27%", null, this);
            obj.set_taborder("41");
            obj.set_text("㎡");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC15", "absolute", "85.79%", "612", null, "21", "4.19%", null, this);
            obj.set_taborder("12");
            obj.set_value("0");
            obj.set_mask("9990.0");
            obj.set_limitbymask("both");
            obj.style.set_align("right middle");
            obj.getSetter("inputtype").set("number");
            obj.getSetter("inputfilter").set("dot,comma,sign");
            obj.getSetter("maxlength").set("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "32.99%", "608", null, "29", "47.97%", null, this);
            obj.set_taborder("42");
            obj.set_text("매장면적(공용)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "65.99%", "608", null, "29", "14.97%", null, this);
            obj.set_taborder("43");
            obj.set_text("매장면적(전체)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "0", "664", null, "29", "80.96%", null, this);
            obj.set_taborder("44");
            obj.set_text("판매수수료율(합계)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC23", "absolute", "19.67%", "668", null, "21", "70.3%", null, this);
            obj.set_taborder("14");
            obj.set_value("0");
            obj.set_mask("990.00");
            obj.set_limitbymask("both");
            obj.style.set_align("right middle");
            obj.getSetter("inputtype").set("number");
            obj.getSetter("inputfilter").set("dot,comma,sign");
            obj.getSetter("maxlength").set("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "29.82%", "668", null, "21", "67.39%", null, this);
            obj.set_taborder("46");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "32.99%", "664", null, "29", "47.97%", null, this);
            obj.set_taborder("47");
            obj.set_text("마진율");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC21", "absolute", "52.66%", "668", null, "21", "37.31%", null, this);
            obj.set_taborder("15");
            obj.set_value("0");
            obj.set_mask("990.00");
            obj.set_limitbymask("both");
            obj.style.set_align("right middle");
            obj.getSetter("inputtype").set("number");
            obj.getSetter("inputfilter").set("dot,comma,sign");
            obj.getSetter("maxlength").set("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "62.82%", "668", null, "21", "34.39%", null, this);
            obj.set_taborder("49");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "65.99%", "664", null, "29", "14.97%", null, this);
            obj.set_taborder("50");
            obj.set_text("부가가치세율");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC22", "absolute", "85.79%", "668", null, "21", "4.19%", null, this);
            obj.set_taborder("16");
            obj.set_value("0");
            obj.set_mask("990.00");
            obj.set_limitbymask("both");
            obj.style.set_align("right middle");
            obj.getSetter("inputtype").set("number");
            obj.getSetter("inputfilter").set("dot,comma,sign");
            obj.getSetter("maxlength").set("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "95.94%", "668", null, "21", "1.27%", null, this);
            obj.set_taborder("52");
            obj.set_text("%");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 820, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("부속계약서(테넌트_특약매입)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item18","edt_ETC52","value","ds_eltCtrwDtl01","ETC52");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_ETC16","value","ds_eltCtrwDtl01","ETC16");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edt_ETC10","value","ds_eltCtrwDtl01","ETC10");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edt_ETC11","value","ds_eltCtrwDtl01","ETC11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_ETC12","value","ds_eltCtrwDtl01","ETC12");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_ETC13","value","ds_eltCtrwDtl01","ETC13");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_ETC14","value","ds_eltCtrwDtl01","ETC14");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_ETC15","value","ds_eltCtrwDtl01","ETC15");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div00.edt_ETC20","value","ds_eltCtrwDtl01","ETC14");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div00.edt_ETC21","value","ds_eltCtrwDtl01","ETC14");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div00.edt_ETC22","value","ds_eltCtrwDtl01","ETC14");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edt_stdt","value","ds_eltCtrwDtl01","ETC8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_eddt","value","ds_eltCtrwDtl01","ETC9");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_ETC23","value","ds_eltCtrwDtl01","ETC23");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_ETC21","value","ds_eltCtrwDtl01","ETC21");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_ETC22","value","ds_eltCtrwDtl01","ETC22");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_311396.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_311396.xfdl", function() {
        //include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0 ;  //데이터 체크
        var fv_ctrw; // 본 계약서 종류

        this.form_onload = function(obj,e)
        {   
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	// 파일업로드 설정
        	var fileParam = {
        		form:this,
        		param:[{
        				fileObj: this.FileUpload,
        				maxSize:3,						//허용할 파일 사이즈(MB)
        				maxLength:1,					//허용할 파일갯수
        				ext:['jpg','jpeg','png'],		//허용할 확장자명
        				upload_after_succ: 'FileUpload_onsuccess'    	//파일 업로드 성공후 호출할 함수이름
        			}]
        	};
        	this.gfn_addEventFileUpload(fileParam);
        	
        	// 폼양식
        	for (var i = 0 ; i < this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "194") {
        			this.ds_etcEltStylAmm101.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	for (var i = 0; i < this.parent.ds_eltCtrwDtl.rowcount; i++) {
        		if (this.parent.ds_eltCtrwDtl.getColumn(i, "MN_CTRW_KDC") == "194") {
        			fv_chk = 1 ;
        			
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CTRW_STY_VER")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm101.getColumn(0,"CTRW_STY_VER") ) ;		
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CHG_SQNO")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO" , this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        			}
        						
        	        this.ds_eltCtrwDtl01.addRow();
        			this.ds_eltCtrwDtl01.copyRow(0, this.parent.ds_eltCtrwDtl, fv_position);
        			
        			// 기본약정기간
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC8")) == "") {
        				this.edt_stdt.set_value(this.parent.ds_register.getColumn(0, "CTR_ST_DT"));
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC8" , this.edt_stdt.value) ; // 약정기간 시작일
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC9")) == "") {
        				this.edt_eddt.set_value(this.parent.ds_register.getColumn(0, "CTR_ED_DT"));
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC9" , this.edt_eddt.value) ; // 약정기간 종료일	
        			}
        			
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC49")) != "") {
        				this.FileUpload.set_enable(false); // 수정시에 기본 비활성
        				this.btn_delPlan.set_visible(true);
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC7")) == "1") {
        				this.edt_ETC52.set_enable(true);
        			}
        			
        			this.fn_initAddCont();
        			if (!this.parent.new_elt) {
        				this.fn_loadRelatedElt(true);
        			}
        		}
        	}
        }

        // 추가내용 그리드 기본값 설정
        this.fn_initAddCont = function()
        {
        	if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC1")) == "1") {
        		this.ds_add.setColumn(0, "ISCHECKED", "1");
        	}
        	if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC2")) == "1") {
        		this.ds_add.setColumn(1, "ISCHECKED", "1");
        	}
        	if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC3")) == "1") {
        		this.ds_add.setColumn(2, "ISCHECKED", "1");
        	}
        	if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC4")) == "1") {
        		this.ds_add.setColumn(3, "ISCHECKED", "1");
        	}
        	if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC5")) == "1") {
        		this.ds_add.setColumn(4, "ISCHECKED", "1");
        	}
        	if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC6")) == "1") {
        		this.ds_add.setColumn(5, "ISCHECKED", "1");
        	}
        	if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC7")) == "1") {
        		this.ds_add.setColumn(6, "ISCHECKED", "1");
        	}
        }

        this.FileUpload_onerror = function(obj,e)
        {
        // 	trace("FileUpload_onerror");
        // 	trace("e.errorcode: "+e.errorcode);
        // 	trace("e.errormsg: "+e.errormsg);	
        }

        this.FileUpload_onitemchanged = function(obj,e)
        {
            // alert("FileUpload_onitemchanged");   
        	this.gfn_callUpload(obj);
        }

        /*
         * 업로드처리이벤트 
         */
        this.FileUpload_onsuccess = function(obj,e)
        {
        	if (e.datasets == null) {
        		// trace("업로드 실패");
        	} else {		
        		this.ds_uploadresult.copyData(e.datasets[0]);					
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC49" , this.ds_uploadresult.getColumn(0,"ORGFNAME")) ;             // 매장위치: 첨부파일명   
        	    this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC50" , this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME")) ;       // 매장위치:  시스템파일명
        	}	
        }

        // 도면 삭제
        this.btn_delPlan_onclick = function(obj,e)
        {
        	if (confirm("첨부파일을 변경하시겠습니까?")) {
        		this.FileUpload.set_enable(true);
        		this.FileUpload.deleteItem(0);
        		this.FileUpload.appendItem();
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC49", ""); // 매장위치: 첨부파일명   
        	    this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC50", ""); // 매장위치: 시스템파일명
        	}
        }

        /*
         * 편집값 세팅 
         */
        this.OMG_DS_SC_311301_ontextchanged = function(obj,e)
        {
        	if (obj.id == "edt_ETC13" || obj.id == "edt_ETC14") {
        		var et13 = this.gfn_isNum(this.edt_ETC13.value) ? parseFloat(this.edt_ETC13.value) : 0;
        		var et14 = this.gfn_isNum(this.edt_ETC14.value) ? parseFloat(this.edt_ETC14.value) : 0;
        		var et15Sum = et13 + et14;
        		this.edt_ETC15.set_value(et15Sum.toFixed(1));
        	} else if (obj.id == "edt_ETC52") {
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
        	} else if (obj.id == "edt_ETC21") {
        		var et21 = this.gfn_isNum(this.edt_ETC21.value) ? parseFloat(this.edt_ETC21.value) : 0;
        		var et22 = this.gfn_isNum(this.edt_ETC22.value) ? parseFloat(this.edt_ETC22.value) : 0;
        		var et23Sum = et21 + et22;
        		this.edt_ETC23.set_value(et23Sum.toFixed(1));
        	} else if (obj.id == "edt_ETC22") {
        		var et21 = this.gfn_isNum(this.edt_ETC21.value) ? parseFloat(this.edt_ETC21.value) : 0;
        		var et22 = this.gfn_isNum(this.edt_ETC22.value) ? parseFloat(this.edt_ETC22.value) : 0;
        	} else if (obj.id == "edt_ETC23") {
        		// 마진율, 부가세율 자동입력
        		if (this.gfn_isNum(this.edt_ETC23.value)) {
        			var temp = parseFloat(this.edt_ETC23.value);
        			var margin = nexacro.round(temp / 1.1, 2);
        			var vat = nexacro.round(temp - margin, 2);
        			this.edt_ETC21.set_value(margin);
        			this.edt_ETC22.set_value(vat);
        		}
         	}
        	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC8" , this.edt_stdt.value) ; // 약정기간 시작일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC9" , this.edt_eddt.value) ; // 약정기간 종료일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC10" , this.edt_ETC10.value) ; // 적용기간 시작일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC11" , this.edt_ETC11.value) ; // 적용기간 종료일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC12" , this.edt_ETC12.value) ; // 목적물의 주소 (길이체크)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC13" , this.edt_ETC13.value) ; // 매장면적(전용)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC14" , this.edt_ETC14.value) ; // 매장면적(공용)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC15" , this.edt_ETC15.value) ; // 매장면적(합계)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC16" , this.edt_ETC16.value) ; // 계약담당자 혹은 계약상대자의 변경
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC21" , this.edt_ETC21.value) ; // 판매수수료율(마진율)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC22" , this.edt_ETC22.value) ; // 판매수수료율(부가가치세율)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC23" , this.edt_ETC23.value) ; // 판매수수료율(합계)
        	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC52" , this.edt_ETC52.value) ; // 기타특약사항
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
            var strTitletext = "부속계약서";
            
            /* 추가내용 체크 (1건 이상 필수 체크) */
            var addCount = 0;
            for (var i = 0; i < this.ds_add.rowcount; i++) {
        		var check = this.ds_add.getColumn(i, "ISCHECKED");
        		switch (i) {
        			case 0 : this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC1" , check); break;
        			case 1 : this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC2" , check); break;
        			case 2 : this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC3" , check); break;
        			case 3 : this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC4" , check); break;
        			case 4 : this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC5" , check); break;
        			case 5 : this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC6" , check); break;
        			case 6 : this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC7" , check); break;
        		}
        		
        		if (check == "1") {
        			addCount++;
        		}
        	}
        	if (addCount == 0) {
        		this.alert("추가내용은 최소 1개 이상 선택해야 합니다.");
        		return false;
        	}
        	
        	/* 약정내용 체크 */
        	
        	// 적용기간
        	if (this.gfn_nullToEmpty(this.edt_ETC10.value) == "") {
        		alert("적용기간 시작일을 입력해주세요.");
        		this.edt_ETC10.setFocus();
        		return false;
        	}
        	if (this.gfn_nullToEmpty(this.edt_ETC11.value) == "") {
        		alert("적용기간 종료일을 입력해주세요.");
        		this.edt_ETC11.setFocus();
        		return false;
        	}
        	if (this.edt_ETC10.value > this.edt_ETC11.value) {
        		alert("적용기간 시작일은 종료일보다 이전이어야 합니다.");
        		this.edt_ETC11.setFocus();
        		return false;
        	}
        	
        	// 목적물의 주소
        	if (this.gfn_nullToEmpty(this.edt_ETC12.value) == "") {
        		alert("목적물의 주소를 입력해주세요.");
        		this.edt_ETC12.setFocus();
        		return false;
        	}
        	
        	// 매장도면(첨부파일)
        	if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC49")) == "") {
        		alert("매장도면 첨부파일을 등록해주세요.");
        		return false;
        	}
        	
        	// 매장면적
        	if (this.gfn_nullToEmpty(this.edt_ETC13.value) == "") {
        		alert("매장면적(전용)을 입력해주세요.");
        		this.edt_ETC13.setFocus();
        		return false;
        	}
        	if (this.gfn_nullToEmpty(this.edt_ETC14.value) == "") {
        		alert("매장면적(공용)을 입력해주세요.");
        		this.edt_ETC14.setFocus();
        		return false;
        	}
        	
        	// 계약담당자 혹은 계약상대자의 변경
        	if (this.gfn_nullToEmpty(this.edt_ETC16.value) == "") {
        		alert("계약담당자 혹은 계약상대자의 변경을 입력해주세요.");
        		this.edt_ETC16.setFocus();
        		return false;
        	}
        	
        	// 판매수수료율
        	if (this.gfn_nullToEmpty(this.edt_ETC23.value) == "") {
        		alert("판매수수료율을 입력해주세요.");
        		this.edt_ETC23.setFocus();
        		return false;
        	}
        	if (this.gfn_nullToEmpty(this.edt_ETC21.value) == "") {
        		alert("판매수수료율 마진율을 입력해주세요.");
        		this.edt_ETC21.setFocus();
        		return false;
        	}
        	if (this.gfn_nullToEmpty(this.edt_ETC22.value) == "") {
        		alert("판매수수료율 부가가치세율을 입력해주세요.");
        		this.edt_ETC22.setFocus();
        		return false;
        	}
        	
        	// 기타특약사항
        	if (this.ds_add.getColumn(6, "ISCHECKED") == 1 && this.gfn_nullToEmpty(this.edt_ETC52.value) == "") {
        		alert("추가내용 기타 선택시에는 특약사항을 입력해야합니다.");
        		this.edt_ETC52.setFocus();
        		return false;
        	}
        	
        	return true;
        }

        /*
         * 본 메인계약서에 따른 입력 폼 전환
         */
        this.fn_setEltForm = function()
        {
        	this.edt_stdt.set_value(this.parent.ds_register_org.getColumn(0, "CTR_ST_DT"));
        	this.edt_eddt.set_value(this.parent.ds_register_org.getColumn(0, "CTR_ED_DT"));
        	this.cal_onchanged();
        }

        /*
         * 관련 계약서 로드
         */
        this.fn_loadRelatedElt = function(isRe)
        {
        	this.ds_related.clearData();
        	
        	var eltCtrwNo, chgSqNo;
        	if (isRe) {
        		eltCtrwNo = this.gfn_nullToEmpty(this.parent.ds_register.getColumn(0, "BF_CTR_NO"));
        		chgSqNo = this.gfn_nullToEmpty(this.parent.ds_register.getColumn(0, "BF_CTR_SQNO"));
        	} else {
        		eltCtrwNo = this.gfn_nullToEmpty(this.parent.ds_register_org.getColumn(0, "ELT_CTRW_NO"));
        		chgSqNo = this.gfn_nullToEmpty(this.parent.ds_register_org.getColumn(0, "CHG_SQNO"));
        	}

        	var param = "relyn=Y"
        		+ " relno=" + eltCtrwNo
        		+ " relseq=" + chgSqNo
        		+ " sts=A"
        	;

        	var sSvcID        = "relatedEltList";//통신아이디
        	var sURL          = "svc::rest/ct/eltctrw/retrieveRelatedEltCtrw";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_related=ds_elt";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "relatedEltList") {
        			if (this.ds_related.rowcount > 0) {
        				this.btn_origin.set_enable(true);
        			}
        		}
        	}
        }

        // 계약서 보기
        this.btn_origin_onclick = function(obj,e)
        {
        	var rowposition = -1;
        	for (var i = 0; i < this.ds_related.rowcount; i++) {
        		if (this.ds_related.getColumn(i, "ISCHECKED") == "1") {
        			rowposition = i;
        			break;
        		}
        	}
        	
        	if (rowposition == -1) {
        		this.alert("계약서를 먼저 선택해주시기 바랍니다.");
        		return;
        	}
        	
        	var mnCtrwKd = this.gfn_nullToEmpty(this.ds_related.getColumn(rowposition, "MN_CTRW_KD"));
        	var eltCtrwNo = this.gfn_nullToEmpty(this.ds_related.getColumn(rowposition, "ELT_CTRW_NO"));
        	var chgSqNo = this.gfn_nullToEmpty(this.ds_related.getColumn(rowposition, "CHG_SQNO"));
        	
        	// trace("관련 계약서 보기 : " + mnCtrwKd + " / " + eltCtrwNo + " / " + chgSqNo);
        	
        	// comEsum.xjs
        	this.eltOzViewer(mnCtrwKd, eltCtrwNo, chgSqNo); // type, eltCtrwNo, chgSqNo
        }

        this.grd_related_oncellclick = function(obj,e)
        {
        	if (e.cell==0) {
        		this.gfn_singleChk(obj,e);
        	}
        }

        this.grd_add_oncellclick = function(obj,e)
        {
        	if (e.cell==3) {
        		var check = this.ds_add.getColumn(e.row, "ISCHECKED") == 1 ? 0 : 1;
        		this.ds_add.setColumn(e.row, "ISCHECKED", check);
        		
        		if (e.row == 0) {
        			// 매장의 추가입점
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC1" , check);
        		} else if (e.row == 1) {
        			// 매장도면
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC2" , check);
        		} else if (e.row == 2) {
        			// 대표자 변경
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC3" , check);
        		} else if (e.row == 3) {
        			// 계약기간의 연장
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC4" , check);
        		} else if (e.row == 4) {
        			// 추가임시임대료(율)
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC5" , check);
        		} else if (e.row == 5) {
        			// 임시임대료(율) 적용기간
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC6" , check);
        		} else if (e.row == 6) {
        			// 기타
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC7" , check);
        			this.edt_ETC52.set_enable(check == 1);
        			this.edt_ETC52.set_value("");
        		}
        	}
        }

        this.rdo_rent_onitemchanged = function(obj,e)
        {
        	if (obj.value == 1) {
        		// 임대료(원)
        		this.edt_ETC17.set_value("0");
        		this.edt_ETC17.set_mask("#,###,###,###");
        	} else {
        		// 임대료(율)
        		this.edt_ETC17.set_value("0");
        		this.edt_ETC17.set_mask("990.0");
        	}
        }

        this.cal_onchanged = function()
        {
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC8" , this.edt_stdt.value) ; // 약정기간 시작일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC9" , this.edt_eddt.value) ; // 약정기간 종료일	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_file.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.Static07.addEventHandler("onclick", this.Static42_onclick, this);
            this.Static79.addEventHandler("onclick", this.Static42_onclick, this);
            this.Static03.addEventHandler("onclick", this.Static42_onclick, this);
            this.Static05.addEventHandler("onclick", this.Static42_onclick, this);
            this.Static09.addEventHandler("onclick", this.Static42_onclick, this);
            this.btn_origin.addEventHandler("onclick", this.btn_origin_onclick, this);
            this.grd_related.addEventHandler("oncellclick", this.grd_related_oncellclick, this);
            this.FileUpload.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.edt_ETC52.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC52.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.btn_delPlan.addEventHandler("onclick", this.btn_delPlan_onclick, this);
            this.edt_ETC16.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC16.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.grd_add.addEventHandler("oncellclick", this.grd_add_oncellclick, this);
            this.edt_ETC10.addEventHandler("onchanged", this.cal_ctrStDt_onchanged, this);
            this.edt_ETC11.addEventHandler("onchanged", this.cal_ctrEdDt_onchanged, this);
            this.edt_ETC12.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC12.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC13.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC13.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC14.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC14.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC15.addEventHandler("onkillfocus", this.edt_ETC40_onkillfocus, this);
            this.edt_ETC15.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC23.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC23.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC21.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC21.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC22.addEventHandler("onkillfocus", this.edt_ETC40_onkillfocus, this);
            this.edt_ETC22.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_311396.xfdl");

       
    };
}
)();
