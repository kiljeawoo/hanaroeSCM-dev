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
                this.set_name("OMG_DS_TX_7002_BYNG");
                this.set_titletext("마감간소화 상품별 전표내역");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,1000,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail_tax", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"TR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_SSDY\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_AMN_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_AMN_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"SLGT_AMN_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEE_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"TRP_SVC_CST\" type=\"STRING\" size=\"256\"/><Column id=\"TRP_SVCOS_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FEE_VAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tax", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CRT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"TXBZ_TP_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_SOAC_DSNM\" type=\"string\" size=\"32\"/><Column id=\"VAT\" type=\"string\" size=\"32\"/><Column id=\"LATCNM\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_NM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_BZNO\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLNM\" type=\"string\" size=\"32\"/><Column id=\"NA_SOAC_DSC\" type=\"string\" size=\"32\"/><Column id=\"TXBZ_TP_DSNM\" type=\"string\" size=\"32\"/><Column id=\"NA_TOT_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"TXBZ_TOT_RG_SQNO\" type=\"string\" size=\"32\"/><Column id=\"TXBZ_DFN_DT\" type=\"string\" size=\"32\"/><Column id=\"TRPL_RLNO\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"RN\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"SPY_AM\" type=\"string\" size=\"32\"/><Column id=\"PUC\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_excel", "absolute", null, "47", "41", "21", "17", null, this);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_detail", "absolute", "15", "100", null, null, "15", "58", this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_detail_tax");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"3\"/><Cell col=\"3\" colspan=\"12\" text=\"수수료상세내역\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" text=\"사업장코드\"/><Cell row=\"1\" col=\"2\" text=\"사업장명\"/><Cell row=\"1\" col=\"3\" text=\"매출일자-&#13;&#10;전표번호\"/><Cell row=\"1\" col=\"4\" text=\"업체별&#13;&#10;수수료\"/><Cell row=\"1\" col=\"5\" text=\"매입장려금\"/><Cell row=\"1\" col=\"6\" text=\"관리수수료&#13;&#10;(R2)\"/><Cell row=\"1\" col=\"7\" text=\"관리부가세&#13;&#10;(R2)\"/><Cell row=\"1\" col=\"8\" text=\"관리수수료&#13;&#10;(R1)\"/><Cell row=\"1\" col=\"9\" text=\"물류수수료\"/><Cell row=\"1\" col=\"10\" text=\"물류부가세\"/><Cell row=\"1\" col=\"11\" text=\"운송용역비\"/><Cell row=\"1\" col=\"12\" text=\"운송부가세\"/><Cell row=\"1\" col=\"13\" text=\"기타수수료\"/><Cell row=\"1\" col=\"14\" text=\"기타부가세\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:NA_BZPLNM\"/><Cell col=\"3\" text=\"expr:TR_DT + '-' + NA_SLPNO\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:COMP_FEE\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:BYNG_SSDY\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:ETR_AMN_FEE\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:ETR_AMN_VAT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:SLGT_AMN_FEE\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:PHD_FEE\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:PHD_FEE_VAT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:TRP_SVC_CST\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:TRP_SVCOS_VAT\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:ETC_FEE\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:ETC_FEE_VAT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"2\" style=\"align:center;\" text=\"합 계\"/><Cell col=\"3\" style=\"align:center;\" expr=\"expr:dataset.getRowCount() + ' 건'\"/><Cell col=\"4\" displaytype=\"number\" expr=\"expr:dataset.getSum('COMP_FEE')\"/><Cell col=\"5\" displaytype=\"number\" expr=\"expr:dataset.getSum('BYNG_SSDY')\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:dataset.getSum('ETR_AMN_FEE')\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:dataset.getSum('ETR_AMN_VAT')\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:dataset.getSum('SLGT_AMN_FEE')\"/><Cell col=\"9\" displaytype=\"number\" expr=\"expr:dataset.getSum('PHD_FEE')\"/><Cell col=\"10\" displaytype=\"number\" expr=\"expr:dataset.getSum('PHD_FEE_VAT')\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:dataset.getSum('TRP_SVC_CST')\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:dataset.getSum('TRP_SVCOS_VAT')\"/><Cell col=\"13\" displaytype=\"number\" expr=\"expr:dataset.getSum('ETC_FEE')\"/><Cell col=\"14\" displaytype=\"number\" expr=\"expr:dataset.getSum('ETC_FEE_VAT')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("8");
            obj.set_text("마감간소화 수수료 세금계산서 상세내역");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "47", "41", "21", "63", null, this);
            obj.set_taborder("14");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("sta_result00", "absolute", "15", "47", "160", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("매출월 :");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("sta_result01", "absolute", "15", "68", "180", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("사업장코드/사업장명 :");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_info1", "absolute", "160", "47", "500", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("20210302083747kteba19031 (일반/과세)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_info2", "absolute", "160", "68", "500", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("8808983000015/상품본부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close2", "absolute", null, null, "70", "29", "17", "15", this);
            obj.set_taborder("21");
            obj.set_text("닫기");
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
        this.addIncludeScript("OMG_DS_TX_7002_BYNG.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_TX_7002_BYNG.xfdl", function() {
        //include "lib::comLib.xjs";

        this.CRT_YM;
        this.GLN;

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	var xml = this.gfn_nullToEmpty(this.parent.dsXml);
        	this.ds_tax.set_enableevent(false);
        	this.ds_tax.loadXML(xml);
        	this.ds_tax.set_enableevent(true);

        	this.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	if (this.ds_tax.rowcount == 0) {
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
        	var sURL = "svc::rest/tx/simplify/retrieveByngDetailList";
        	var sInDatasets = "ds_tax=ds_tax"; //보내는데이터셋
        	var sOutDatasets = "ds_detail_tax=ds_detail"; //화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument = "";
        	var sCallbackFunc = "fn_callback";
        	var sTranType = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_registerSvcDS(sSvcID, this.ds_detail_tax, false);
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_excel = function()
        {
        	excelDownHandler(this.gfn_svcUrl()+"rest/tx/simplify/excel/retrieveByngDetailList?xml=" + this.fn_makeDsToParam(), this);
        }

        this.fn_print = function(obj,e)
        {
        	var ozParam = {
        		sId: 'OMG_DS_TX_7002_BYNG',
        		sUrl: '/rest/tx/simplify/oz/retrieveByngDetailList',
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
        	var gln = this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "NA_TRPL_C")); // 0
        	var naBzplc = this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "NA_BZPLC")); // 1
        	var crtYm = this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "CRT_YM")); // 2
        	
        	var param = gln + "@" + naBzplc + "@" + crtYm;
        	
        	if (isPrint) {
        		var txbzTotRgSqno = this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "TXBZ_TOT_RG_SQNO")); // 3
        		var txbzDfnDt = this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "TXBZ_DFN_DT")); // 4
        		var txbzTpDsnm = this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "TXBZ_TP_DSNM")); // 5
        		var naBzplnm = this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "NA_BZPLNM")); // 6
        		var naTrplNm = this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "NA_TRPL_NM")); // 7
        		var latcnm = this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "LATCNM")); // 8
        		var spyAm = this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "SPY_AM")); // 9
        		var vat = this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "VAT")); // 10
        		
        		param += "@" + txbzTotRgSqno + "@" + txbzDfnDt + "@" + txbzTpDsnm + "@" + naBzplnm + "@" + naTrplNm + "@" + latcnm + "@" + spyAm + "@" + vat;
        	}
        	
        	return isPrint ? param : encodeURIComponent(param);
        }

        this.fn_setResultMsg = function()
        {
        	var crtYm = this.ds_tax.getColumn(0, "CRT_YM");
        	this.sta_info1.set_text(crtYm.substring(0,4) + "년 " + crtYm.substring(4,6) + "월");
        	this.sta_info2.set_text(this.ds_tax.getColumn(0, "NA_BZPLC") + " / " + this.ds_tax.getColumn(0, "NA_BZPLNM"));
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_excel.addEventHandler("onclick", this.common_onclick, this);
            this.btn_print.addEventHandler("onclick", this.common_onclick, this);
            this.btn_close.addEventHandler("onclick", this.common_onclick, this);
            this.btn_close2.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_TX_7002_BYNG.xfdl");

       
    };
}
)();
