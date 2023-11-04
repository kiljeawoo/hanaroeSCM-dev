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
                this.set_name("VAN_DS_SC_1530");
                this.set_titletext("상품별물류기능정보");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_hsty", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"PRGR_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGNM\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"AMN_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"TROT_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_PHD_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"PY_FDTCN\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_FBID_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_FBID_RSNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"DLMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"DLMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pay", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">[8801099000016] 대상에프앤에프(주)</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">[8801099000023] 대상에프앤에프(주)동부지점</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">[8801099000030] 대상에프앤에프(주)서부지점</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">[8801099000047] 대상에프앤에프(주)남부지점(안양)</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">[8801099000054] 대상에프앤에프(주)남부지점(강원)</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">[8801099000061] 대상에프앤에프(주)대전지점</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">[8801099000078] 대상에프앤에프(주)광주지점</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"data\">[8801099000085] 대상에프앤에프(주)대구지점</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"data\">[8801099000092] 대상에프앤에프(주)부산지점</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"data\">[8801099000108] 대상에프앤에프(주)신선지점</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"data\">[8801099000115] 대상에프앤에프(주)지호상사</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"data\">[8801099000122] 대상에프앤에프(주)청원유통</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"data\">[8801099000139] 대상에프앤에프(주)승진상사</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"data\">[8801099000146] 대상에프앤에프(주)여주대상</Col></Row><Row><Col id=\"code\">14</Col><Col id=\"data\">[8801099000153] 대상에프앤에프(주)청정원상사(위탁)</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"data\">[8801099000160] 대상에프앤에프(주)대성상사</Col></Row><Row><Col id=\"code\">16</Col><Col id=\"data\">[8801099000177] 대상에프앤에프(주)대상위탁상사</Col></Row><Row><Col id=\"code\">17</Col><Col id=\"data\">[8801099000184] 대상에프앤에프(주)청정원상사(홍성)</Col></Row><Row><Col id=\"code\">18</Col><Col id=\"data\">[8801099000191] 대상에프앤에프(주)홍성위탁</Col></Row><Row><Col id=\"code\">19</Col><Col id=\"data\">[8801099000207] 대상에프앤에프(주)해송유통</Col></Row><Row><Col id=\"code\">20</Col><Col id=\"data\">[8801099000214] 대상에프앤에프(주)청정원태안위탁</Col></Row><Row><Col id=\"code\">21</Col><Col id=\"data\">[8801099000221] 대상에프앤에프(주)송암상사</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_qslpr_tpc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NABizPlace", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"SHRT_BZPLNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_TPC\" type=\"string\" size=\"32\"/><Column id=\"BZPL_DTI_TPC\" type=\"string\" size=\"32\"/><Column id=\"BZPL_TPNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_DTI_TPNM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uptrpl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"UP_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_ABR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_good_wh", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SPYPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SPYPL_C_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FCLT_C\" type=\"STRING\" size=\"256\"/><Column id=\"SRTR_PRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZQT\" type=\"STRING\" size=\"256\"/><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_WRS_C_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SVS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SVS_QT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">0</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0%", "0", null, "21", "50.56%", null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "75", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("69");
            obj.set_text("상품");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title02", "absolute", "15", "36", "67", "21", null, null, this.div_search);
            obj.set_taborder("70");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "329", "10", "22", "21", null, null, this.div_search);
            obj.set_taborder("81");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "195", "10", "131", "21", null, null, this.div_search);
            obj.set_taborder("87");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data00", "absolute", "82", "10", "110", "21", null, null, this.div_search);
            obj.set_taborder("104");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_ctr_list00", "absolute", "82", "36", "244", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("105");
            obj.set_innerdataset("@ds_NABizPlace");
            obj.set_codecolumn("NA_BZPLC");
            obj.set_datacolumn("SHRT_BZPLNM");
            obj = new CheckBox("chk_atl_yn", "absolute", "383", "12", "80", "21", null, null, this.div_search);
            obj.set_taborder("109");
            obj.set_text("간선여부");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_BOX_WRS_C_YN", "absolute", "465", "12", "100", "21", null, null, this.div_search);
            obj.set_taborder("110");
            obj.set_text("박스상품여부");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_SVS_YN", "absolute", "567", "12", "114", "21", null, null, this.div_search);
            obj.set_taborder("111");
            obj.set_text("소분여부");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_del_yn", "absolute", "383", "36", "80", "21", null, null, this.div_search);
            obj.set_taborder("112");
            obj.set_text("삭제여부");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "104", null, null, "15", "0", this);
            obj.set_taborder("7");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "95.3%", "10", null, "20", "-0.13%", null, this.div_list);
            obj.set_taborder("22");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "42", null, null, "0", "44", this.div_list);
            obj.set_taborder("23");
            obj.set_binddataset("ds_good_wh");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"120\"/><Column size=\"204\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"88\"/><Column size=\"128\"/><Column size=\"116\"/><Column size=\"69\"/><Column size=\"92\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"64\"/><Column size=\"58\"/><Column size=\"59\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"상품코드\"/><Cell col=\"4\" text=\"상품명\"/><Cell col=\"5\" text=\"물류기능코드\"/><Cell col=\"6\" text=\"경제통합공급처\"/><Cell col=\"7\" text=\"경제통합공급처명\"/><Cell col=\"8\" text=\"간선여부\"/><Cell col=\"9\" text=\"소터처리여부\"/><Cell col=\"10\" text=\"박스당입수\"/><Cell col=\"11\" text=\"박스상품여부\"/><Cell col=\"12\" text=\"소분여부\"/><Cell col=\"13\" text=\"소분수량\"/><Cell col=\"14\" text=\"삭제일시\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:NA_BZPLC_NM\"/><Cell col=\"3\" text=\"bind:NA_WRS_C\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"5\" text=\"bind:PHD_FCLT_C\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:NA_SPYPL_C\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:NA_SPYPL_C_NM\"/><Cell col=\"8\" text=\"bind:ATL_YN\"/><Cell col=\"9\" text=\"bind:SRTR_PRC_YN\"/><Cell col=\"10\" text=\"bind:BOXPE_AQZQT\"/><Cell col=\"11\" text=\"bind:BOX_WRS_C_YN\"/><Cell col=\"12\" text=\"bind:SVS_YN\"/><Cell col=\"13\" text=\"bind:SVS_QT\"/><Cell col=\"14\" text=\"bind:DEL_DT\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "203", null, this);
            obj.set_taborder("14");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "118", null, this);
            obj.set_taborder("16");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel00", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("17");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 75, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1520");
            		p.set_titletext("상품별물류기능정보");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_edit.cbo_txt_dsc","value","ds_txt_dsc","SIMP_CNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_edit.cbo_pay","value","ds_pay","SIMP_CNM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1591.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1591.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_afterFormOnload = function()
        {
        	var param = [  
         		
         		{code:"QSLPR_TPC", dsName:"ds_qslpr_tpc", selecttype:"A"}	// 1.가격군
            ];
        	this.gfn_setCommonCode(param);
        	//콤보에 최상단Row보이도록 설정
        	this.fn_getNABizPlace(application.gv_glnCode);
        	this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_auth.chk_all.set_readonly(true);
        }

        //조회
        this.btn_search00_onclick = function(obj,e)
        {
        	var wrs_c         = this.gfn_nullToEmpty(this.div_search.edt_data00.value); 		// 상품코드
        	var wrsnm         = this.gfn_nullToEmpty(this.div_search.edt_data01.value); 
        	var na_bzplc      = this.gfn_nullToEmpty(this.div_search.cbo_ctr_list00.value);    	// 발주처 콤보
        	var atl_yn        = this.div_search.chk_atl_yn.value;    	                        // 간선여부 
        	var box_wrs_c_yn  = this.div_search.chk_BOX_WRS_C_YN.value;                         // 박스상품여부  
        	var svs_yn        = this.div_search.chk_SVS_YN.value;                               // 소분 여부 
        	var del_yn        = this.div_search.chk_del_yn.value;                               // 삭제 여부 
        	
        	
        	
        	var sVal = 	  "wrs_c="         + wrs_c
        	            + " wrsnm="        + wrsnm
        	            + " na_bzplc="     + na_bzplc
        				+ " trpl_c="       + this.getTrplCode()
        				+ " atl_yn="       + atl_yn
        				+ " box_wrs_c_yn=" + box_wrs_c_yn
        				+ " svs_yn="       + svs_yn
        				+ " del_yn="       + del_yn
        				;
        // alert(sVal);

        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/retrieveGoodWhList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_good_wh=ds_good_wh";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = sVal;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        
        /*
         * 농협사업장 코드
         */
        this.fn_getNABizPlace = function(v_nacode)
        {
        	var trpl_c = v_nacode;
        	var search_type = "default";
        	
        	var param = "search_type="+search_type+
        				" splr_na_trpl_c="+trpl_c;
        	
        	var sSvcID        = "getNABizPlace";//통신아이디
        	var sURL          = "svc::rest/common/getNABizPlace";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_NABizPlace=data";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        this.fn_callback = function(svcID,nCD,sMSG){//첫번째 인자값은 통신 ID
        	if(nCD < 0){
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}else{

        		if(svcID == "p_search"){
        			if(this.div_list.grd_main00.rowcount < 1){
        				this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        		if(svcID == "getNABizPlace"){
        		   /*
        			if (this.ds_NABizPlace.insertRow(0) != -1){
        				this.ds_NABizPlace.setColumn(0,"NA_BZPLC","00");
        				this.ds_NABizPlace.setColumn(0,"SHRT_BZPLNM","- 전체 -");
        			};
        			*/
        			this.div_search.cbo_ctr_list00.set_index(0);
        		}
        	}
        }

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }
        //상품 조회
        this.div_search_btn_popup00_onclick = function(params)
        {
        	var param = {
        				autoType:params,
        				searchCode:this.div_search.edt_data00.value,
        				searchText:this.div_search.edt_data01.value
        	};
        	
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}
        	
        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("wrs_c","POPUP::POPUP_SRC_WRS.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	var arrVal = strVal.split(",");
        	if(strId == "wrs_c"){
        		this.div_search.edt_data00.set_value(arrVal[0]);
        		this.div_search.edt_data01.set_value(arrVal[1]);
        	}
        }

        //엑셀 다운로드 버튼
        this.btn_excel_onclick = function(obj,e)
        {
        	var wrs_c = this.gfn_nullToEmpty(this.div_search.edt_data00.value); 			// 상품코드
        	var wrsnm = this.gfn_nullToEmpty(this.div_search.edt_data01.value); 
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.cbo_ctr_list00.value);    	// 발주처 콤보
        	var atl_yn  = this.div_search.chk_atl_yn.value;
        	var box_wrs_c_yn  = this.div_search.chk_BOX_WRS_C_YN.value;                         // 박스상품여부  
        	var svs_yn        = this.div_search.chk_SVS_YN.value;                               // 소분 여부 
        	
        	var params = "wrs_c=" + wrs_c
        				+"&wrsnm=" + wrsnm
        				+"&na_bzplc=" + na_bzplc
        				+"&trpl_c=" + this.getTrplCode()
        				+"&atl_yn=" + atl_yn 
        				+"&box_wrs_c_yn=" + box_wrs_c_yn
        				+"&svs_yn="       + svs_yn
        				;
        				
        				
        	if(this.div_list.grd_main00.rowcount < 1){
        		params += "&glncode=''";
        	}else{
        		
        	}
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelGoodWhList?"+params, this);
        }

        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }
        //출력
        this.btn_print00_onclick = function(obj,e)
        {
        	if(this.div_list.grd_main00.rowcount < 1){
        		this.gfn_getMessage('alert','result.message.search.no.exist.data');
        		return;
        	}
        	var bz_code = this.gfn_nullToEmpty(this.div_search.edt_data00.value);
        	var sto_gubun = this.div_search.rdo_store_chk00.value;
        	if(sto_gubun == "1"){
        		sto_gubun = "상품코드";
        	}else{
        		sto_gubun = "상품명"
        	}
        	var ctr_val = this.gfn_nullToEmpty(this.div_search.cbo_ctr_list00.value);
        	
        	var titleForm = this.getTrplCodePrint() + " ,상품코드:"+bz_code+" ,구분:"+sto_gubun+" ,발주처:"+ctr_val+
        					" ,가격군:"+pay_val+" ,과세구분:"+txt_dsc_val+" ,조작일(From):"+date_from+
        					" ,조작일(To):"+date_to
        					;
        	var param = {
        		TRPL_C_TEXT:titleForm,
        		sto_code:bz_code,
        		gubun:this.div_search.rdo_store_chk00.value,
        		TRPL_C:this.getTrplCode(),
        		
        	};
        	var ozParam = {
        		sId: 'VAN_DS_SC_1530',
        		sUrl: '/rest/oz/pds/pricat/LifeGoods/retrieveLifeGoodsHistorys',
        		paramType: 'param',
        		sParam: param
        	};
        	this.ozViewer(ozParam);	
        }

        this.div_search_edt_data00_onkeydown = function(obj,e)
        {
        	if(e.keycode ==13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.div_search_edt_data01_onkeydown = function(obj,e)
        {
        	if(e.keycode ==13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.div_search_sta_title01_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_search.edt_data01.addEventHandler("onkeydown", this.div_search_edt_data01_onkeydown, this);
            this.div_search.edt_data00.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.cbo_ctr_list00.addEventHandler("onitemchanged", this.Div00_Combo02_onitemchanged, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_excel00.addEventHandler("onclick", this.btn_excel_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1591.xfdl");
        this.loadPreloadList();
       
    };
}
)();
