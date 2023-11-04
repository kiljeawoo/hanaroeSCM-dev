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
                this.set_name("OMG_DS_TX_7003_SLP");
                this.set_titletext("마감간소화 상품별 전표내역");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,1000,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail_wrs", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CRT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLNM\" type=\"string\" size=\"32\"/><Column id=\"NA_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"TR_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_STDNM\" type=\"string\" size=\"32\"/><Column id=\"TXT_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_CRC_CAN_DSC\" type=\"string\" size=\"32\"/><Column id=\"BYNG_QT\" type=\"string\" size=\"32\"/><Column id=\"BYNG_UPR\" type=\"string\" size=\"32\"/><Column id=\"BYNG_VAT\" type=\"string\" size=\"32\"/><Column id=\"BYAM\" type=\"string\" size=\"32\"/><Column id=\"TOT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_QT\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CRT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TR_DSC\" type=\"string\" size=\"32\"/><Column id=\"SMA_SPY_AM\" type=\"string\" size=\"32\"/><Column id=\"EXTX_SPY_AM\" type=\"string\" size=\"32\"/><Column id=\"TOT_AM\" type=\"string\" size=\"32\"/><Column id=\"TR_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_SPY_AM\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"SPY_AM\" type=\"string\" size=\"32\"/><Column id=\"BYNG_VAT\" type=\"string\" size=\"32\"/><Column id=\"NA_SLPNO\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_excel", "absolute", null, "47", "41", "21", "17", null, this);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_detail", "absolute", "15", "115", null, null, "15", "58", this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_detail_wrs");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"73\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"8\" text=\"매입상세내역\"/><Cell col=\"8\" colspan=\"5\" text=\"배송예정서\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" text=\"매입사업장\"/><Cell row=\"1\" col=\"2\" text=\"매입사업장명\"/><Cell row=\"1\" col=\"3\" text=\"매입일자-번호\"/><Cell row=\"1\" col=\"4\" text=\"매입수량\"/><Cell row=\"1\" col=\"5\" text=\"공급금액\"/><Cell row=\"1\" col=\"6\" text=\"부가세\"/><Cell row=\"1\" col=\"7\" text=\"총공급금액\"/><Cell row=\"1\" col=\"8\" text=\"배송예정서&#13;&#10;번호\"/><Cell row=\"1\" col=\"9\" text=\"전표&#13;&#10;상태\"/><Cell row=\"1\" col=\"10\" text=\"배송예정&#13;&#10;수량\"/><Cell row=\"1\" col=\"11\" text=\"배송금액\"/><Cell row=\"1\" col=\"12\" text=\"부가세\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:NA_BZPLNM\"/><Cell col=\"3\" text=\"expr:TR_DT + '-' + NA_SLPNO\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:BYNG_QT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:BYAM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:BYNG_VAT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:TOT_AM\"/><Cell col=\"8\" text=\"bind:NA_DVY_PLASH_SLPNO\"/><Cell col=\"9\" text=\"bind:DVY_STSC\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:DVY_QT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:DVY_AM\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:DVY_VAT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합 계\"/><Cell col=\"2\" style=\"align:center;\" expr=\"expr:dataset.getRowCount() + ' 건'\"/><Cell col=\"3\" style=\"align:center;\"/><Cell col=\"4\" displaytype=\"number\" expr=\"expr:dataset.getSum('BYNG_QT')\"/><Cell col=\"5\" displaytype=\"number\" expr=\"expr:dataset.getSum('BYAM')\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:dataset.getSum('BYNG_VAT')\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:dataset.getSum('TOT_AM')\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" displaytype=\"number\" expr=\"expr:dataset.getSum('DVY_QT')\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:dataset.getSum('DVY_AM')\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:dataset.getSum('DVY_VAT')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("8");
            obj.set_text("마감간소화 상품별 전표내역");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close_all", "absolute", null, null, "70", "29", "15", "15", this);
            obj.set_taborder("12");
            obj.set_text("모두닫기");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "47", "41", "21", "63", null, this);
            obj.set_taborder("14");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("sta_result", "absolute", "15", "89", "200", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("상품코드 / 상품명 / 매입단가 :");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_result00", "absolute", "15", "47", "160", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("(세금)계산서 승인 번호 :");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("sta_result01", "absolute", "15", "68", "180", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("매입사업장/매입사업장명 :");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_info3", "absolute", "210", "89", "500", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("8808888112113 / 상품명 / 9,999원");
            this.addChild(obj.name, obj);

            obj = new Static("sta_info1", "absolute", "210", "47", "500", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("20210302083747kteba19031 (일반/과세)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_info2", "absolute", "210", "68", "500", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("8808983000015/상품본부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close2", "absolute", null, null, "70", "29", "90", "15", this);
            obj.set_taborder("22");
            obj.set_text("뒤로가기");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1000, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1111");
            		p.set_titletext("마감간소화 상품별 전표내역");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_TX_7003_SLP.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_TX_7003_SLP.xfdl", function() {
        //include "lib::comLib.xjs";

        this.PBC_SQNO;
        this.GLN;

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	var xml = this.gfn_nullToEmpty(this.parent.dsXml);
        	this.ds_detail.set_enableevent(false);
        	this.ds_detail.loadXML(xml);
        	this.ds_detail.set_enableevent(true);

        	this.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	if (this.ds_detail.rowcount == 0) {
        		this.alert("잘못된 정보입니다.");
        		this.close();
        	}
        	
        	this.fn_setResultMsg();
        	this.search();
        }

        //조회
        this.search = function()
        {
        	var sSvcID = "search";
        	var sURL = "svc::rest/tx/simplify/retrieveSubDetailList";
        	var sInDatasets = "ds_detail=ds_detail"; //보내는데이터셋
        	var sOutDatasets = "ds_detail_wrs=ds_detail"; //화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument = "type=SLP txtdsc=" + this.parent.txtDsc;
        	var sCallbackFunc = "fn_callback";
        	var sTranType = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_registerSvcDS(sSvcID, this.ds_detail_wrs, false);
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_excel = function()
        {
        	excelDownHandler(this.gfn_svcUrl()+"rest/tx/simplify/excel/retrieveSubDetailList?type=SLP&txtdsc=" + this.parent.txtDsc + "&xml=" + this.fn_makeDsToParam(), this);
        }

        this.fn_print = function(obj,e)
        {
        	var ozParam = {
        		sId: 'OMG_DS_TX_7003_SLP',
        		sUrl: '/rest/tx/simplify/oz/retrieveSubDetailList',
        		paramType: 'param',
        		sParam:{
        			type:"SLP",
        			txtdsc:this.parent.txtDsc,
        			xml:this.fn_makeDsToParam(true)
        		}
        	};
        	this.ozViewer(ozParam);
        }

        this.fn_callback = function(svcID,nCD,sMSG)//첫번째 인자값은 통신 ID
        {
        	this.gfn_svcDsToggle(svcID, true);
        	if (nCD < 0) {
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}
        }

        this.common_onclick = function(obj,e)
        {
        	if (obj.id == "btn_close" || obj.id == "btn_close2") {
        		this.close();
        	} else if (obj.id == "btn_close_all") {
        		this.close("all");
        	} else if (obj.id == "btn_excel") {
        		this.fn_excel();
        	} else if (obj.id == "btn_print") {
        		this.fn_print();
        	}
        }

        /**
         * 엑셀 조회 파라매터 생성
         */
        this.fn_makeDsToParam = function(isPrint)
        {
        	var gln = this.gfn_nullToEmpty(this.ds_detail.getColumn(0, "NA_TRPL_C")); // 0
        	var naBzplc = this.gfn_nullToEmpty(this.ds_detail.getColumn(0, "NA_BZPLC")); // 1
        	var crtYm = this.gfn_nullToEmpty(this.ds_detail.getColumn(0, "CRT_YM")); // 2
        	var wrsC = this.gfn_nullToEmpty(this.ds_detail.getColumn(0, "NA_WRS_C")); // 3
        	var wrsNm = this.gfn_nullToEmpty(this.ds_detail.getColumn(0, "WRSNM")); // 4(엑셀), 11(오즈)
        	var upr = this.gfn_nullToEmpty(this.ds_detail.getColumn(0, "BYNG_UPR")); // 5(엑셀), 12(오즈)
        	
        	var param = gln + "@" + naBzplc + "@" + crtYm + "@" + wrsC;
        	
        	if (isPrint) {
        		var naTrDsc = this.gfn_nullToEmpty(this.ds_detail.getColumn(0, "NA_TR_DSC")); // 4
        		var spr = this.gfn_nullToEmpty(this.ds_detail.getColumn(0, "BYAM")); // 5
        		var txa = this.gfn_nullToEmpty(this.ds_detail.getColumn(0, "BYNG_VAT")); // 6
        		var tot = this.gfn_nullToEmpty(this.ds_detail.getColumn(0, "TOT_AM")); // 7
        		var stdnm = this.gfn_nullToEmpty(this.ds_detail.getColumn(0, "WRS_STDNM")); // 8
        		var qt = this.gfn_nullToEmpty(this.ds_detail.getColumn(0, "BYNG_QT")); // 9
        		var txt = this.gfn_nullToEmpty(this.ds_detail.getColumn(0, "TXT_DSC")); // 10 (오즈에서 TXT_DSNM으로 사용)
        		
        		param += "@" + naTrDsc + "@" + spr + "@" + txa + "@" + tot + "@" + stdnm + "@" + qt + "@" + txt;
        	}
        	param += "@" + wrsNm + "@" + upr;
        	
        	return isPrint ? param : encodeURIComponent(param);
        }

        this.fn_setResultMsg = function()
        {	
        	this.sta_info1.set_text(this.gfn_nullToEmpty(this.parent.txInfo));
        	this.sta_info2.set_text(this.ds_detail.getColumn(0, "NA_BZPLC") + " / " + this.ds_detail.getColumn(0, "NA_BZPLNM"));
        	this.sta_info3.set_text(this.ds_detail.getColumn(0, "NA_WRS_C") + " / " + this.ds_detail.getColumn(0, "WRSNM") + " / ￦" + this.gfn_setComma(this.ds_detail.getColumn(0, "BYNG_UPR")));
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_excel.addEventHandler("onclick", this.common_onclick, this);
            this.btn_close_all.addEventHandler("onclick", this.common_onclick, this);
            this.btn_print.addEventHandler("onclick", this.common_onclick, this);
            this.btn_close.addEventHandler("onclick", this.common_onclick, this);
            this.btn_close2.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_TX_7003_SLP.xfdl");

       
    };
}
)();
