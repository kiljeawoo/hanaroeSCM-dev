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
                this.set_name("VAN_DS_SC_1550");
                this.set_titletext("신규상품요청 일괄등록");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_uploadresult", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SEAL\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_file_inform", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"CTCPL_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_excel_bind", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTCFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SMA_APL_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"SMA_APL_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_WRS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_WRS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MFT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MFT_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_NA_WRS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_QT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_NA_WRS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WHT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PAK_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_BRAN_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_CSTD_METC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_CSTD_METNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UZC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UZNM\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_PRD_CN\" type=\"STRING\" size=\"256\"/><Column id=\"DSTR_TER_MRK_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DSTR_TER_MRK_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_IPO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_IPO_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"RFID_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"RFID_UNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTL_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"SUCCESS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_download", this);
            obj._setContents("<ColumnInfo><Column id=\"SEAL\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"FILENAME\">upfile0</Col><Col id=\"FILETYPE\">application/vnd.ms-excel</Col><Col id=\"FILESIZE\">11,776</Col><Col id=\"ORGFNAME\">basefile.xls</Col><Col id=\"SEAL\">Y</Col><Col id=\"SYSTEMFILENAME\">VAN_DS_DS_1550.xls</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "306", null, this);
            obj.set_taborder("0");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", "323", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "118", null, this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save00", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "147", "15", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("110");
            obj.set_text("File 명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title02", "absolute", "15", "36", "67", "21", null, null, this.div_search);
            obj.set_taborder("111");
            obj.set_text("바이어");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title04", "absolute", "409", "10", "193", "21", null, null, this.div_search);
            obj.set_taborder("112");
            obj.set_text("[한 파일 최대건수 100건]");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title05", "absolute", "409", "36", "193", "21", null, null, this.div_search);
            obj.set_taborder("114");
            obj.set_text("신청내용/신청자 전화번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title03", "absolute", "15", "62", "101", "21", null, null, this.div_search);
            obj.set_taborder("116");
            obj.set_text("처리결과내용");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data02", "absolute", "185", "36", "130", "21", null, null, this.div_search);
            obj.set_taborder("119");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "82", "36", "100", "21", null, null, this.div_search);
            obj.set_taborder("125");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data03", "absolute", "602", "36", "83", "21", null, null, this.div_search);
            obj.set_taborder("128");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_font("8 Gulim");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data04", "absolute", "688", "36", "83", "21", null, null, this.div_search);
            obj.set_taborder("129");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_font("8 Gulim");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "318", "36", "22", "21", null, null, this.div_search);
            obj.set_taborder("130");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new TextArea("txa_excel00", "absolute", "127", "66", "644", "69", null, null, this.div_search);
            obj.set_taborder("133");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "771", "-1", "15", "145", null, null, this.div_search);
            obj.set_taborder("134");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload00", "absolute", "80", "10", "260", "21", null, null, this.div_search);
            obj.set_taborder("135");
            obj.set_multiselect("true");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.style.set_buttonsize("55");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "32.95%", "135", null, "10", "53.94%", null, this.div_search);
            obj.set_taborder("136");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_f_cancel", "absolute", "342", "10", "44", "21", null, null, this.div_search);
            obj.set_taborder("137");
            obj.set_text("취소");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_down01", "absolute", null, "0", "65", "21", "252", null, this);
            obj.set_taborder("8");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_find_file00", "absolute", null, "0", "77", "21", "173", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_text("File Upload");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "175", null, null, "15", "0", this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_excel_bind");
            obj.set_visible("false");
            obj.getSetter("titletext").set("신규상품요청 일괄등록");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\"><Cell text=\"상품코드(A)\"/></Cell><Cell col=\"2\" text=\"상품대분류코드(B)\"/><Cell col=\"3\" text=\"대분류명(C)\"/><Cell col=\"4\" text=\"상품중분류코드(D)\"/><Cell col=\"5\" text=\"중분류명(E)\"/><Cell col=\"6\" text=\"상품소분류코드(F)\"/><Cell col=\"7\" text=\"소분류명(G)\"/><Cell col=\"8\" text=\"상품세분류코드(H)\"/><Cell col=\"9\" text=\"세분류(I)\"/><Cell col=\"10\" text=\"상품명(J)\"/><Cell col=\"11\" text=\"상품약어명(K)\"/><Cell col=\"12\" text=\"상품영문명(L)\"/><Cell col=\"13\" text=\"상품규격명(M)\"/><Cell col=\"14\" text=\"과세구분코드(N)\"/><Cell col=\"15\" text=\"과세구분명(O)\"/><Cell col=\"16\" text=\"영세적용유형코드(P)\"/><Cell col=\"17\" text=\"영세적용유형(Q)\"/><Cell col=\"18\" text=\"공동상품여부(R)\"/><Cell col=\"19\" text=\"공동상품여부명(S)\"/><Cell col=\"20\" text=\"제조거래처코드(T)\"/><Cell col=\"21\" text=\"제조거래처명(U)\"/><Cell col=\"22\" text=\"상품유형코드(V)\"/><Cell col=\"23\" text=\"상품유형명(W)\"/><Cell col=\"24\" text=\"주류여부(X)\"/><Cell col=\"25\" text=\"주류여부명(Y)\"/><Cell col=\"26\" text=\"공병상품코드(Z)\"/><Cell col=\"27\" text=\"공병명(AA)\"/><Cell col=\"28\" text=\"공병수량(AB)\"/><Cell col=\"29\" text=\"공상자상품코드(AC)\"/><Cell col=\"30\" text=\"공상자명(AD)\"/><Cell col=\"31\" text=\"단량(AE)\"/><Cell col=\"32\" text=\"상품단위코드(AF)\"/><Cell col=\"33\" text=\"단위(AG)\"/><Cell col=\"34\" text=\"상품포장코드(AH)\"/><Cell col=\"35\" text=\"포장명(AI)\"/><Cell col=\"36\" text=\"상품브랜드코드(AJ)\"/><Cell col=\"37\" text=\"브랜드명(AK)\"/><Cell col=\"38\" text=\"상품보관방식코드(AL)\"/><Cell col=\"39\" text=\"보관방식명(AM)\"/><Cell col=\"40\" text=\"상품용도코드(AN)\"/><Cell col=\"41\" text=\"상품용도명(AO)\"/><Cell col=\"42\" text=\"유효기간수(AP)\"/><Cell col=\"43\" text=\"유효기간구분코드(AQ)\"/><Cell col=\"44\" text=\"유효기간구분명(AR)\"/><Cell col=\"45\" text=\"박스당입수(AS)\"/><Cell col=\"46\" text=\"수입구분코드(AT)\"/><Cell col=\"47\" text=\"수입구분명(AU)\"/><Cell col=\"48\" text=\"RFID사용여부(AV)\"/><Cell col=\"49\" text=\"RFID사용여부명(AW)\"/><Cell col=\"50\" text=\"상품설명(AX)\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" text=\"bind:NA_WRS_LCLC\"/><Cell col=\"3\" text=\"bind:WRS_LCLFNM\"/><Cell col=\"4\" text=\"bind:NA_WRS_MCLC\"/><Cell col=\"5\" text=\"bind:WRS_MCLFNM\"/><Cell col=\"6\" text=\"bind:NA_WRS_SCLC\"/><Cell col=\"7\" text=\"bind:WRS_SCLFNM\"/><Cell col=\"8\" text=\"bind:NA_WRS_DTCF_C\"/><Cell col=\"9\" text=\"bind:WRS_DTCFNM\"/><Cell col=\"10\" text=\"bind:WRSNM\"/><Cell col=\"11\" text=\"bind:WRS_ABR_NM\"/><Cell col=\"12\" text=\"bind:WRS_ENM\"/><Cell col=\"13\" text=\"bind:WRS_STDNM\"/><Cell col=\"14\" text=\"bind:TXT_DSC\"/><Cell col=\"15\" text=\"bind:TXT_NM\"/><Cell col=\"16\" text=\"bind:SMA_APL_TPC\"/><Cell col=\"17\" text=\"bind:SMA_APL_TPNM\"/><Cell col=\"18\" text=\"bind:COMM_WRS_YN\"/><Cell col=\"19\" text=\"bind:COMM_WRS_NM\"/><Cell col=\"20\" text=\"bind:MFT_NA_TRPL_C\"/><Cell col=\"21\" text=\"bind:MFT_NA_TRPL_NM\"/><Cell col=\"22\" text=\"bind:WRS_TPC\"/><Cell col=\"23\" text=\"bind:WRS_TPNM\"/><Cell col=\"24\" text=\"bind:LIQ_YN\"/><Cell col=\"25\" text=\"bind:LIQ_NM\"/><Cell col=\"26\" text=\"bind:VCBT_NA_WRS_C\"/><Cell col=\"27\" text=\"bind:VCBT_NA_WRS_NM\"/><Cell col=\"28\" text=\"bind:VCBT_QT\"/><Cell col=\"29\" text=\"bind:VCBX_NA_WRS_C\"/><Cell col=\"30\" text=\"bind:VCBX_NA_WRS_NM\"/><Cell col=\"31\" text=\"bind:WHT\"/><Cell col=\"32\" text=\"bind:NA_WRS_UNT_C\"/><Cell col=\"33\" text=\"bind:NA_WRS_UNT_NM\"/><Cell col=\"34\" text=\"bind:NA_WRS_PAK_C\"/><Cell col=\"35\" text=\"bind:NA_WRS_PAK_NM\"/><Cell col=\"36\" text=\"bind:NA_WRS_BRAN_C\"/><Cell col=\"37\" text=\"bind:NA_WRS_BRAN_NM\"/><Cell col=\"38\" text=\"bind:NA_WRS_CSTD_METC\"/><Cell col=\"39\" text=\"bind:NA_WRS_CSTD_METNM\"/><Cell col=\"40\" text=\"bind:NA_WRS_UZC\"/><Cell col=\"41\" text=\"bind:NA_WRS_UZNM\"/><Cell col=\"42\" text=\"bind:VLD_PRD_CN\"/><Cell col=\"43\" text=\"bind:DSTR_TER_MRK_DSC\"/><Cell col=\"44\" text=\"bind:DSTR_TER_MRK_DSNM\"/><Cell col=\"45\" text=\"bind:BOXPE_AQZ\"/><Cell col=\"46\" text=\"bind:NA_WRS_IPO_DSC\"/><Cell col=\"47\" text=\"bind:NA_WRS_IPO_DSNM\"/><Cell col=\"48\" text=\"bind:RFID_UYN\"/><Cell col=\"49\" text=\"bind:RFID_UNM\"/><Cell col=\"50\" text=\"bind:WRS_DTL_EXPL\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_boolChk00", "absolute", "8", "16", "42", "21", null, null, this.div_list);
            obj.set_taborder("2");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_tooltiptype("default");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_boolChk01", "absolute", "63", "16", "43", "21", null, null, this.div_list);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_tooltiptype("default");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_boolChk02", "absolute", "15.1%", "16", null, "21", "79.44%", null, this.div_list);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_tooltiptype("default");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 147, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_text("Div00");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1550");
            		p.set_titletext("신규상품요청 일괄등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","div_search.edt_data01","value","ds_file_inform","BUYER_ENO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_search.edt_data03","value","ds_file_inform","RQ_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_search.edt_data04","value","ds_file_inform","CTCPL_TELNO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1550.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1550.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	var fileParam = {
        		form:this,													//*필수 - 폼
        		param:[{//필요없는 프로퍼티는 주석처리
        				fileObj: this.div_search.FileUpload00,				//*필수 - 파일컴포넌트
        				dataset: this.ds_uploadresult,						//파일정보 데이터셋
        				maxSize:1,											//허용할 파일 사이즈(MB)
        				maxLength:1,										//허용할 파일갯수
        				ext:['xls','xlsx'],									//허용할 확장자명
        				cancelBtn: this.div_search.btn_f_cancel,			//취소버튼 컴포넌트
        				cancel_after:function(){							//취소버튼 눌렀을때 실행
        					this.form.ds_excel_bind.clearData();
        					this.form.ds_uploadresult.clearData();
        					this.form.div_search.FileUpload00.set_text("");
        					this.form.div_list.grd_main00.set_visible(false);
        					this.form.div_search.txa_excel00.set_value(""); //this대신 this.form으로 접근
        				},
        				valid_after_fail: 'FileUpload00_onerror',  			//파일검사 실패후 호출할 함수명 또는 함수(업로드전)
        				upload_after_succ: 'FileUpload00_onsuccess',    	//파일 업로드 성공후 호출할 함수명 또는 함수(업로드후)
        				upload_after_fail: 'FileUpload00_onerror'  	    	//파일 업로드 실패후 호출할 함수명 또는 함수(업로드후)
        			}]
        	};
        	this.gfn_addEventFileUpload(fileParam);							//이벤트 등록
        	
        	this.div_search.edt_data01.set_enable(true);
        	this.btnDisable(this.btn_save00);
        }

        //UPLOAD
        this.FileUpload00_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        //SINGLE DOWNLOAD
        this.btn_down01_onclick = function(obj,e)
        {
        	var systemFileName ="VAN_DS_SC_1550.data";
        	var fileName = "wares_sample.xls";
        	
        	var strDownUrl = application.gv_server_url+"rest/common/fileDownload?systemFileName="+systemFileName+"&fileName="+fileName+"&isSampleFile=Y";
        	var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        	
        	wbs_dw.set_url(strDownUrl);
        }

        this.FileUpload00_onsuccess = function(obj,e)
        {
        	this.div_search.txa_excel00.set_value("업로드 성공");		
        	this.ds_uploadresult.clear();
        	this.ds_uploadresult.copyData(e.datasets[0]);		
        	this.ds_uploadresult.addColumn("CHK", "string"); //멀티건 인경우 'CHK'컬럼추가
        }

        this.FileUpload00_onerror = function(obj,e)
        {
        	this.div_search.txa_excel00.set_value("업로드 실패");
        }

        
        this.btn_search00_onclick = function(obj,e)
        {
        	if(this.ds_uploadresult.getColumn(0,"FILENAME") == null) {
        		this.gfn_getMessage("alert",'file.attach.empty');
        		return;
        	}
        	if(this.div_list.grd_main00.visible == false){
        		this.alert("File Upload 완료한 후 조회를 클릭해주세요.");
        		return;
        	}
        	this.fFileOpenValid();
        }

        this.div_search_btn_popup00_onclick = function(params)
        {
        	var code = this.div_search.edt_data01.value;
        	var textname = this.div_search.edt_data02.value;
        	var param = {
        				autoType:params,
        				searchCode:code,
        				searchText:textname,
        				comboType:"2"
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}

        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("src_buyer","POPUP::POPUP_SRC_BUYER.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if(strVal != undefined){
        		var arrVal = strVal.split(",");
        		if(strId == "src_buyer"){
        			this.div_search.edt_data01.set_value(arrVal[0]);
        			this.div_search.edt_data02.set_value(arrVal[1]);
        		}
        	}	
        }

        //초기화
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        //파일 업로드
        this.div_search_btn_find_file00_onclick = function(obj,e)
        {
        	if(this.gfn_isEmpty(this.div_search.FileUpload00.text) == ""){
        		this.gfn_getMessage("alert",'file.attach.empty');
        		return false;
        	}
        	
        	var fileName	  = "dsName=ds_excel_bind"
        					  +" systemFileName="+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME");
        	var sSvcID        = "p_upload";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/downloadBatchNewGoods";// 호출할 서버 페이지 주소
        	var sInDatasets   = "in_ds=ds_excel_bind:A";//보내는데이터셋
        	var sOutDatasets  = "ds_excel_bind=ds_excel_bind";
        	var sArgument     = fileName;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.btn_save00_onclick = function(obj,e)
        {
        	if(this.div_list.sta_boolChk00.text == "0"){
        		this.gfn_getMessage("alert",'msg.van_ds_sc_1550.view.boolCheck');
                return false;
        	}
        	if(!this.isFileUpload(this.div_search.FileUpload00)){
        		this.alert('파일을 선택해주세요.');
        		return;
        	}
        	var bOk = this.confirm('신규상품에 대한 요청내용을 저장하시겠습니까?');
        	
        	if(bOk != true){return}
        	
        	var param = "insdata="+this.div_list.sta_boolChk01.text;
        	var sSvcID        = "p_save";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/insertBatchNewGoods";// 호출할 서버 페이지 주소
        	var sInDatasets   = "in_ds=ds_excel_bind:A";//보내는데이터셋
        	var sOutDatasets  = "";
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);	
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0){
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}else{
        		if(svcID=="p_upload" && sMSG=="SUCCESS"){
        			this.div_list.grd_main00.set_visible(true);
        		}
        		if(svcID=="p_upload" && sMSG=="OVERROWCOUNT"){
        			this.gfn_getMessage("alert",'msg.van_ds_sc_1550.view.100.overdata');
        		}
        		if(svcID=="p_save" && nCD > 0){
        			this.gfn_getMessage("alert", sMSG);
        		}
        		if(this.div_list.grd_main00.rowcount < 1){
        			this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        		}
        	}
        }

        //Validation Check
        this.fFileOpenValid = function(){
        	var texta = "";
        	var arrval = "";
        	texta = "============ 파일 체크 시작 ============\n\n";
        	
        	for(var i=1; i<this.ds_excel_bind.rowcount;i++){
        		this.div_list.sta_boolChk02.set_text('0');
        		if (this.ds_excel_bind.getColumn(i,"NA_WRS_C").length < 8 ) {
        			texta += "라인번호 ["+(i+1)+"] 상품코드 Cell 값["+this.ds_excel_bind.getColumn(i,"NA_WRS_C")+"]은 자리수를 8자리 이상으로 작성하세요. \n\n"
        			this.div_list.sta_boolChk02.set_text('1');
        		}	
        		if (this.ds_excel_bind.getColumn(i,"NA_WRS_LCLC").length != 3 ) {
        			texta += "라인번호 ["+(i+1)+"] 대분류 Cell 값["+this.ds_excel_bind.getColumn(i,"NA_WRS_LCLC")+"]은 자리수를 3자리으로 작성하세요. \n\n"
        			this.div_list.sta_boolChk02.set_text('1');
        		}

        		if (this.ds_excel_bind.getColumn(i,"NA_WRS_MCLC").length != 3 ) {
        			texta += "라인번호 ["+(i+1)+"] 중분류 Cell 값["+this.ds_excel_bind.getColumn(i,"NA_WRS_MCLC")+"]은 자리수를 3자리으로 작성하세요. \n\n"
        			this.div_list.sta_boolChk02.set_text('1');
        		}

        		if (this.ds_excel_bind.getColumn(i,"NA_WRS_SCLC").length != 3 ) {
        			texta += "라인번호 ["+(i+1)+"] 소분류 Cell 값["+this.ds_excel_bind.getColumn(i,"NA_WRS_SCLC")+"]은 자리수를 3자리으로 작성하세요. \n\n"
        			this.div_list.sta_boolChk02.set_text('1');
        		}

        		if (this.ds_excel_bind.getColumn(i,"NA_WRS_DTCF_C").length != 3 ) {
        			texta += "라인번호 ["+(i+1)+"] 세분류 Cell 값["+this.ds_excel_bind.getColumn(i,"NA_WRS_DTCF_C")+"]은 자리수를 3자리으로 작성하세요. \n\n"
        			this.div_list.sta_boolChk02.set_text('1');
        		}

        		if (this.ds_excel_bind.getColumn(i,"TXT_DSC").length != 1 ) {
        			texta += "라인번호 ["+(i+1)+"] 과세구분 Cell 값["+this.ds_excel_bind.getColumn(i,"TXT_DSC")+"]은 자리수를 1자리으로 작성하세요. \n\n"
        			this.div_list.sta_boolChk02.set_text('1');
        		}

        		if (this.ds_excel_bind.getColumn(i,"SMA_APL_TPC").length != 1 ) {
        			texta += "라인번호 ["+(i+1)+"] 영세적용유형 Cell 값["+this.ds_excel_bind.getColumn(i,"SMA_APL_TPC")+"]은 자리수를 1자리으로 작성하세요. \n\n"
        			this.div_list.sta_boolChk02.set_text('1');
        		}

        		if (this.ds_excel_bind.getColumn(i,"COMM_WRS_YN").length != 1 ) {
        			texta += "라인번호 ["+(i+1)+"] 공동상품여부 Cell 값["+this.ds_excel_bind.getColumn(i,"COMM_WRS_YN").length.innerText+"]은 자리수를 1자리으로 작성하세요. \n\n"
        			this.div_list.sta_boolChk02.set_text('1');
        		}

        		if (this.ds_excel_bind.getColumn(i,"WRS_TPC").length != 1 ) {
        			texta += "라인번호 ["+(i+1)+"] 상품유형 Cell 값["+this.ds_excel_bind.getColumn(i,"WRS_TPC")+"]은 자리수를 1자리으로 작성하세요. \n\n"
        			this.div_list.sta_boolChk02.set_text('1');
        		}

        		if (this.ds_excel_bind.getColumn(i,"LIQ_YN").length != 1 ) {
        			texta += "라인번호 ["+(i+1)+"] 주류상품여부 Cell 값["+this.ds_excel_bind.getColumn(i,"LIQ_YN")+"]은 자리수를 1자리으로 작성하세요. \n\n"
        			this.div_list.sta_boolChk02.set_text('1');
        		}

        		if (this.ds_excel_bind.getColumn(i,"WHT").length > 3 ) {
        			texta += "라인번호 ["+(i+1)+"] 단량 Cell 값["+this.ds_excel_bind.getColumn(i,"WHT")+"]은 자리수를 3자리 이하으로 작성하세요. \n\n"
        			this.div_list.sta_boolChk02.set_text('1');
        		}

        		if (this.ds_excel_bind.getColumn(i,"VLD_PRD_CN").length > 3 ) {
        			texta += "라인번호 ["+(i+1)+"] 유효기간 Cell 값["+this.ds_excel_bind.getColumn(i,"VLD_PRD_CN")+"]은 자리수를 3자리 이하으로 작성하세요. \n\n"
        			this.div_list.sta_boolChk02.set_text('1');
        		}
        		if(this.div_list.sta_boolChk02.text == '0'){
        			if(i<(this.ds_excel_bind.rowcount-1)){
        				arrval += i+",";
        			}else{
        				arrval += i;
        			}
        		}
        		
        	}
        	texta += "============ 파일 체크 완료 ============";
        	this.div_search.txa_excel00.set_value(texta);
        	this.div_list.sta_boolChk00.set_text("1");
        	this.div_list.sta_boolChk01.set_text(arrval);
        }

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.div_search_edt_data01_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.div_search_edt_data02_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_save00.addEventHandler("onclick", this.btn_save00_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.div_search.edt_data02.addEventHandler("onkeydown", this.div_search_edt_data02_onkeydown, this);
            this.div_search.edt_data01.addEventHandler("onkeydown", this.div_search_edt_data01_onkeydown, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.btn_down01.addEventHandler("onclick", this.btn_down01_onclick, this);
            this.btn_find_file00.addEventHandler("onclick", this.div_search_btn_find_file00_onclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1550.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
