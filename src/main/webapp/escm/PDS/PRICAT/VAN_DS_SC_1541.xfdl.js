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
                this.set_name("VAN_DS_SC_1541");
                this.set_titletext("등록신청내역 조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main_req", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"VAN_C_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_OBJ_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"CTCPL_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"APV_RQ_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_C_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SMA_APL_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_WRS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MFT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"WHT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PAK_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_BRAN_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_CSTD_METC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DSTR_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UZC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_IPO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_QT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTL_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"BSC_UNT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"RFID_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"FOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"SLGT_ETR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DSTR_TER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DSTR_TER_MRK_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MODIFY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CNF_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"CNF_DMT\" type=\"STRING\" size=\"256\"/><Column id=\"CNF_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_REJ_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"EDI_IF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SZE_SEX_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_QLT_GRDC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PROENV_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"GAP_ATTC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_NACF_QLT_ATTC_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PDAA_C\" type=\"STRING\" size=\"256\"/><Column id=\"ACHMI_LATCNM\" type=\"STRING\" size=\"256\"/><Column id=\"ACHMI_IGRQT\" type=\"STRING\" size=\"256\"/><Column id=\"FTLZ_PHAC_IGRDRT\" type=\"STRING\" size=\"256\"/><Column id=\"FTLZ_NTRG_IGRDRT\" type=\"STRING\" size=\"256\"/><Column id=\"FTLZ_KLM_IGRDRT\" type=\"STRING\" size=\"256\"/><Column id=\"FMACH_PATS_CLF_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NUMN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GEN_LON_LMT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_LON_LMT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_STD_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SGRT\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SDL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_AHL_CN\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_STD_THKN\" type=\"STRING\" size=\"256\"/><Column id=\"CICL_WRS_STD_DMTR_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CICL_WRS_STD_DPTH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"FED_PD_METC\" type=\"STRING\" size=\"256\"/><Column id=\"SNUM_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"CVS_QT\" type=\"STRING\" size=\"256\"/><Column id=\"CVS_NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_FL_CN\" type=\"STRING\" size=\"256\"/><Column id=\"KNET_WRS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"FMACH_FOMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "47", "58", "21", "17", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "107", "17", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Calendar("cal_fsrg00", "absolute", "271", "26", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Calendar("cal_fsrg01", "absolute", "392", "26", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Edit("edt_van_c", "absolute", "392", "57", "154", "21", null, null, this.div_search);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_van_code", "absolute", "245", "57", "126", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_van_code_innerdataset = new Dataset("cbo_van_code_innerdataset", this.div_search.cbo_van_code);
            cbo_van_code_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">등록신청내역코드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">등록신청내역명</Col></Row></Rows>");
            obj.set_innerdataset(cbo_van_code_innerdataset);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Static("Static00", "absolute", "204", "26", "67", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("등록일");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "377", "26", "15", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_text("등록신청내역 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "695", "32", "91", "15", null, null, this);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "695", "68", "91", "8", null, null, this);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "710", "183", "76", "15", null, null, this);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_main", "absolute", "17", "198", null, null, "17", "56", this);
            obj.set_taborder("13");
            obj.set_binddataset("ds_main_req");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"코드신청번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"코드신청&#13;&#10;상태코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"코드신청&#13;&#10;대상구분코드\"/><Cell col=\"4\" rowspan=\"2\" text=\"연락처&#13;&#10;전화번호\"/><Cell col=\"5\" rowspan=\"2\" text=\"접수일시\"/><Cell col=\"6\" rowspan=\"2\" text=\"접수자&#13;&#10;개인번호\"/><Cell col=\"7\" rowspan=\"2\" text=\"접수자&#13;&#10;사업장코드\"/><Cell col=\"8\" rowspan=\"2\" text=\"처리일시\"/><Cell col=\"9\" rowspan=\"2\" text=\"처리자&#13;&#10;개인번호\"/><Cell col=\"10\" rowspan=\"2\" text=\"처리자&#13;&#10;사업장코드\"/><Cell col=\"11\" rowspan=\"2\" text=\"신청거절&#13;&#10;사유코드\"/><Cell col=\"12\" rowspan=\"2\" text=\"신청내용\"/><Cell col=\"13\" rowspan=\"2\" text=\"처리내용\"/><Cell col=\"14\" rowspan=\"2\" text=\"승인신청&#13;&#10;사업장코드\"/><Cell col=\"15\" rowspan=\"2\" text=\"삭제여부\"/><Cell col=\"16\" rowspan=\"2\" text=\"최초등록일시\"/><Cell col=\"17\" rowspan=\"2\" text=\"최초등록자&#13;&#10;개인번호\"/><Cell col=\"18\" rowspan=\"2\" text=\"최초등록자&#13;&#10;사업장코드\"/><Cell col=\"19\" rowspan=\"2\" text=\"최종변경일시\"/><Cell col=\"20\" rowspan=\"2\" text=\"최종변경자&#13;&#10;개인번호\"/><Cell col=\"21\" rowspan=\"2\" text=\"최종변경자&#13;&#10;사업장코드\"/><Cell col=\"22\" rowspan=\"2\" text=\"자체상품&#13;&#10;신청사유코드\"/><Cell col=\"23\" rowspan=\"2\" text=\"바이어접수일시\"/><Cell col=\"24\" rowspan=\"2\" text=\"바이어&#13;&#10;접수자&#13;&#10;개인번호\"/><Cell col=\"25\" rowspan=\"2\" text=\"바이어&#13;&#10;접수자&#13;&#10;사업장코드\"/><Cell col=\"26\" rowspan=\"2\" text=\"바이어&#13;&#10;처리일시\"/><Cell col=\"27\" rowspan=\"2\" text=\"바이어&#13;&#10;처리자&#13;&#10;개인번호\"/><Cell col=\"28\" rowspan=\"2\" text=\"바이어&#13;&#10;처리자&#13;&#10;사업장코드\"/><Cell col=\"29\" rowspan=\"2\" text=\"개당&#13;&#10;납품단가\"/><Cell col=\"30\" rowspan=\"2\" text=\"박스당&#13;&#10;납품단가\"/><Cell col=\"31\" rowspan=\"2\" text=\"매출액당&#13;&#10;수수료율\"/><Cell col=\"32\" rowspan=\"2\" text=\"판촉지원&#13;&#10;인원수\"/><Cell col=\"33\" rowspan=\"2\" text=\"상품취급&#13;&#10;경쟁점수\"/><Cell col=\"34\" rowspan=\"2\" text=\"추정매출&#13;&#10;기여금\"/><Cell col=\"35\" rowspan=\"2\" text=\"대체삭제&#13;&#10;상품코드\"/><Cell col=\"36\" rowspan=\"2\" text=\"계통상품&#13;&#10;확인여부\"/><Cell col=\"37\" rowspan=\"2\" text=\"납품거래처명\"/><Cell col=\"38\" rowspan=\"2\" text=\"납품거래처&#13;&#10;전화번호\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_C_RQ_NO\"/><Cell col=\"2\" text=\"bind:NA_C_RQ_STSC\"/><Cell col=\"3\" text=\"bind:NA_C_RQ_OBJ_DSC\"/><Cell col=\"4\" text=\"bind:CTCPL_TELNO\"/><Cell col=\"5\" text=\"bind:CNF_DMT\"/><Cell col=\"6\" text=\"bind:FSRGMN_ENO\"/><Cell col=\"7\" text=\"bind:FSRGMN_NA_BZPLC\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" text=\"bind:NA_C_RQ_REJ_RSNC\"/><Cell col=\"12\" text=\"bind:RQ_CNTN\"/><Cell col=\"13\"/><Cell col=\"14\" text=\"bind:APV_RQ_NA_BZPLC\"/><Cell col=\"15\" text=\"bind:DEL_YN\"/><Cell col=\"16\" text=\"bind:FSRG_DTM\"/><Cell col=\"17\" text=\"bind:FSRGMN_ENO\"/><Cell col=\"18\" text=\"bind:FSRGMN_NA_BZPLC\"/><Cell col=\"19\" text=\"bind:LSCHG_DTM\"/><Cell col=\"20\" text=\"bind:LS_CMENO\"/><Cell col=\"21\" text=\"bind:LSCGMN_NA_BZPLC\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, null, "91", "17", "17", "0", this);
            obj.set_taborder("14");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", "676", "444", "54", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle", "absolute", null, "444", "54", "29", "17", null, this);
            obj.set_taborder("16");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "434", "91", "10", "17", null, this);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 107, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1541");
            		p.set_titletext("등록신청내역 조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1541.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1541.xfdl", function() {
        //include "lib::comLib.xjs";

        var TRPL_C = application.gv_glnCode; // 로그인 사업장코드
        var TRPL_NM = application.gv_companyName; //로그인 사업장명
        this.objRtnArr = new Array(1);

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function() //onload
        {
        		var searchParam =
        	{
        				form: this,									//고정
        				param:[{
        						edit: this.div_search.edt_van_c,	//타겟 컴포넌트
        						fnc: 'btn_search_onclick'			//엔터키 눌렀을시 실행할 함수 이름
        				}]
        	};
        	this.addEventEnterSearch(searchParam);
        	this.div_search.cal_fsrg00.set_value(this.gfn_today('yyyyMM')+'01');
        	this.div_search.cal_fsrg01.set_value(this.gfn_today('yyyyMMdd'));
        	this.div_search.cbo_van_code.set_value(2);
        	this.grd_main.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }
        this.btn_search_onclick = function(obj,e)
        {
        	var gubun = "";
        	if(this.parent.gubun == "1"){
        		gubun = "T";
        	}else{
        		gubun = "Y";
        	}

        	var params 		  = "NA_WRS_RADIO="+this.div_search.cbo_van_code.value
        						+" start_date="+this.div_search.cal_fsrg00.value
        						+" end_date="+this.div_search.cal_fsrg01.value
        						+" NA_WRS_C='"+this.gfn_nullToEmpty(this.div_search.edt_van_c.value)+"'"
        						+" GUBUN="+gubun;

        	var sSvcID        = "pop_van_search";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/retrieveNewGoodsPopUp";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_main_req=ds_main_req";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0){
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}else{
        		if(svcID == "pop_van_search"){
        			if(this.grd_main.rowcount < 1){
        				this.grd_main.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        	}
        }

        this.btn_ok_onclick = function(obj,e)
        {	
        	if(this.ds_main_req.rowcount > 0){
        		this.objRtnArr[0] = this.ds_main_req.getColumn(this.ds_main_req.rowposition,"VAN_C_RQ_NO");
        		this.close(this.objRtnArr.toString());
        	}else{
        		this.close();
        	}
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.grd_main_oncellclick = function(obj,e)
        {
        	this.btn_ok_onclick();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_main.addEventHandler("oncellclick", this.grd_main_oncellclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancle.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1541.xfdl");

       
    };
}
)();
