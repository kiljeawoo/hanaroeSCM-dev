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
                this.set_name("OMG_DS_TX_7002_SLP");
                this.set_titletext("마감간소화 전표내역");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,1300,550);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CRT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TR_DSC\" type=\"string\" size=\"32\"/><Column id=\"SMA_SPY_AM\" type=\"string\" size=\"32\"/><Column id=\"EXTX_SPY_AM\" type=\"string\" size=\"32\"/><Column id=\"TOT_AM\" type=\"string\" size=\"32\"/><Column id=\"TR_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_SPY_AM\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"BYAM\" type=\"string\" size=\"32\"/><Column id=\"BYNG_VAT\" type=\"string\" size=\"32\"/><Column id=\"NA_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"DVY_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_simplify", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CRT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"PBC_SQNO\" type=\"string\" size=\"32\"/><Column id=\"SLP_VAT\" type=\"string\" size=\"32\"/><Column id=\"TAX_SPRTT\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_TXA_TT\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_TOT_AM\" type=\"string\" size=\"32\"/><Column id=\"SLP_BYAM\" type=\"string\" size=\"32\"/><Column id=\"NA_TOT_DSC\" type=\"string\" size=\"32\"/><Column id=\"TXT_DSC\" type=\"string\" size=\"32\"/><Column id=\"TXBIL_KD\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_KDNM\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZNO\" type=\"string\" size=\"32\"/><Column id=\"NA_TOT_DSNM\" type=\"string\" size=\"32\"/><Column id=\"EQ_YN\" type=\"string\" size=\"32\"/><Column id=\"RN\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPLNM\" type=\"string\" size=\"32\"/><Column id=\"SLP_TOT_AM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail_temp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CRT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TR_DSC\" type=\"string\" size=\"32\"/><Column id=\"SMA_SPY_AM\" type=\"string\" size=\"32\"/><Column id=\"EXTX_SPY_AM\" type=\"string\" size=\"32\"/><Column id=\"TOT_AM\" type=\"string\" size=\"32\"/><Column id=\"TR_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_SPY_AM\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"BYAM\" type=\"string\" size=\"32\"/><Column id=\"BYNG_VAT\" type=\"string\" size=\"32\"/><Column id=\"NA_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"DVY_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_excel", "absolute", null, "47", "41", "21", "17", null, this);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_tax", "absolute", "15", "105", "600", null, null, "58", this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_simplify");
            obj.set_summarytype("top");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"36\" band=\"head\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"5\" text=\"(세금)계산서\"/><Cell row=\"1\" text=\"매출사업장\"/><Cell row=\"1\" col=\"1\" text=\"매출사업장명\"/><Cell row=\"1\" col=\"2\" text=\"공급가액\"/><Cell row=\"1\" col=\"3\" text=\"세액\"/><Cell row=\"1\" col=\"4\" text=\"합계액\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" expr=\"expr:dataset.getColumn(0,'NA_TRPL_C')\"/><Cell col=\"1\" style=\"align:center;\" expr=\"expr:dataset.getColumn(0,'NA_TRPLNM')\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:dataset.getColumn(0,'TAX_SPRTT')\"/><Cell col=\"3\" displaytype=\"number\" expr=\"expr:dataset.getColumn(0,'TAX_TXA_TT')\"/><Cell col=\"4\" displaytype=\"number\" expr=\"expr:dataset.getColumn(0,'TAX_TOT_AM')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("8");
            obj.set_text("마감간소화 전표내역");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close2", "absolute", null, null, "70", "29", "17", "15", this);
            obj.set_taborder("12");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "47", "41", "21", "63", null, this);
            obj.set_taborder("14");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("sta_result", "absolute", "15", "77", "800", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("※ (세금)계산서 금액이 매입금액과 <fc v='#ff0000ff'><u v='true'>일치</u></fc> 합니다.");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_result00", "absolute", "15", "47", "160", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("(세금)계산서 승인 번호 :");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_info", "absolute", "170", "47", "320", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("############ (일반/과세)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_detail", "absolute", "613", "105", null, null, "15", "58", this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_detail");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"115\"/><Column size=\"100\"/><Column size=\"115\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"115\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"36\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"8\" text=\"매입전표\"/><Cell col=\"8\" colspan=\"4\" text=\"배송예정서\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" text=\"매입사업장\"/><Cell row=\"1\" col=\"2\" text=\"매입사업장명\"/><Cell row=\"1\" col=\"3\" text=\"거래구분\"/><Cell row=\"1\" col=\"4\" text=\"매입일자-번호\"/><Cell row=\"1\" col=\"5\" text=\"공급금액\"/><Cell row=\"1\" col=\"6\" text=\"부가세\"/><Cell row=\"1\" col=\"7\" text=\"총공급금액\"/><Cell row=\"1\" col=\"8\" text=\"배송예정서&#13;&#10;번호\"/><Cell row=\"1\" col=\"9\" text=\"전표상태\"/><Cell row=\"1\" col=\"10\" text=\"배송금액\"/><Cell row=\"1\" col=\"11\" text=\"부가세\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" text=\"bind:NA_BZPLNM\"/><Cell col=\"3\" text=\"bind:NA_TR_DSC\"/><Cell col=\"4\" text=\"expr:TR_DT + '-' + NA_SLPNO\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:BYAM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:BYNG_VAT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:TOT_AM\"/><Cell col=\"8\" text=\"expr:DVY_SLPNO == null ? '배송예정서없음' : DVY_SLPNO\"/><Cell col=\"9\" text=\"bind:DVY_STSC\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:DVY_AM\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:DVY_VAT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" expr=\"expr:dataset.getSum('BYAM')\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:dataset.getSum('BYNG_VAT')\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:dataset.getSum('TOT_AM')\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" displaytype=\"number\" expr=\"expr:dataset.getSum('DVY_AM')\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:dataset.getSum('DVY_VAT')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_result01", "absolute", "618", null, "350", "21", null, "32", this);
            obj.set_taborder("20");
            obj.set_text("항목을 더블클릭하면 상세내용을 확인하실 수 있습니다.");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1300, 550, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1111");
            		p.set_titletext("마감간소화 전표내역");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_TX_7002_SLP.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_TX_7002_SLP.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.PBC_SQNO;
        this.GLN;
        this.EQ_YN;

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	var xml = this.gfn_nullToEmpty(this.parent.dsXml);
        	this.ds_simplify.set_enableevent(false);
        	this.ds_simplify.loadXML(xml);
        	this.ds_simplify.set_enableevent(true);

        	this.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	if (this.ds_simplify.rowcount == 0) {
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
        	var sURL = "svc::rest/tx/simplify/retrieveDetailList";
        	var sInDatasets = "ds_simplify=ds_simplify"; //보내는데이터셋
        	var sOutDatasets = "ds_detail=ds_detail";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument = "type=SLP";
        	var sCallbackFunc = "fn_callback";
        	var sTranType = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_registerSvcDS(sSvcID, this.ds_detail, false);
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_excel = function()
        {
        	excelDownHandler(this.gfn_svcUrl()+"rest/tx/simplify/excel/retrieveDetailList?type=SLP&xml=" + this.fn_makeDsToParam(false), this);
        }

        this.fn_print = function(obj,e)
        {
        	var ozParam = {
        		sId: 'OMG_DS_TX_7002_SLP',
        		sUrl: '/rest/tx/simplify/oz/retrieveDetailList',
        		paramType: 'param',
        		sParam:{
        			type:"SLP",
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

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "detailPop2") {
        		if (this.gfn_nullToEmpty(strVal) == "all") {
        			this.close();
        		}
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

        this.grd_detail_oncelldblclick = function(obj,e)
        {
        	this.ds_detail_temp.clearData();
        	this.ds_detail_temp.addRow();
        	this.ds_detail_temp.copyRow(0, this.ds_detail, this.ds_detail.rowposition);
        	
        	var txInfo = this.sta_info.text;
        	var txtDsc = this.ds_simplify.getColumn(0, "TXT_DSC");

        	var oArg = {dsXml:this.ds_detail_temp.saveXML(), txInfo:txInfo, txtDsc:txtDsc};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("detailPop2", "OMG.TX::OMG_DS_TX_7003_WRS.xfdl", oArg, sOption, sPopupCallBack);
        }

        /**
         * 엑셀/출력 조회 파라매터 생성
         */
        this.fn_makeDsToParam = function(isPrint)
        {
        	var pbc = this.gfn_nullToEmpty(this.ds_simplify.getColumn(0, "PBC_SQNO"));
        	var gln = this.gfn_nullToEmpty(this.ds_simplify.getColumn(0, "NA_TRPL_C"));
        	var naBzplc = this.gfn_nullToEmpty(this.ds_simplify.getColumn(0, "NA_BZPLC"));
        	var txtDsc = this.gfn_nullToEmpty(this.ds_simplify.getColumn(0, "TXT_DSC"));
        	var crtYm = this.gfn_nullToEmpty(this.ds_simplify.getColumn(0, "CRT_YM"));
        	
        	var param = pbc + "@" + gln + "@" + naBzplc + "@" + txtDsc + "@" + crtYm;
        	
        	if (isPrint) {
        		var glnNm = this.gfn_nullToEmpty(this.ds_simplify.getColumn(0, "NA_TRPLNM"));
        		var spr = this.gfn_nullToEmpty(this.ds_simplify.getColumn(0, "TAX_SPRTT"));
        		var txa = this.gfn_nullToEmpty(this.ds_simplify.getColumn(0, "TAX_TXA_TT"));
        		var tot = this.gfn_nullToEmpty(this.ds_simplify.getColumn(0, "TAX_TOT_AM"));
        		
        		param += "@" + glnNm + "@" + spr + "@" + txa + "@" + tot;
        	}
        	
        	return isPrint ? param : encodeURIComponent(param);
        }

        this.fn_setResultMsg = function()
        {
        	var msg = "※ (세금)계산서 금액이 매입금액과 <u v='true'>";
        	
        	if (this.ds_simplify.getColumn(0, "EQ_YN") == "Y") {
        		msg += "<fc v='#0000ffff'>일치</fc></u> 합니다.";
        	} else {
        		msg += "<fc v='#ff0000ff'>불일치</fc></u> 합니다. 매입사업장으로 문의해주세요.";
        	}
        	this.sta_result.set_text(msg);
        	
        	var info = this.ds_simplify.getColumn(0, "PBC_SQNO");
        	var kd = this.ds_simplify.getColumn(0, "TXBIL_KD").substr(0, 2);
        	var txtDsc = this.ds_simplify.getColumn(0, "TXT_DSC");
        	info += " (" + (kd == "02" || kd == "04" ? "수정" : "일반");
        	info += "/" + (txtDsc == "1" ? "과세" : txtDsc == "3" ? "영세" : "면세") + ")";
        	this.sta_info.set_text(info);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_excel.addEventHandler("onclick", this.common_onclick, this);
            this.grd_tax.addEventHandler("oncelldblclick", this.grd_detail_oncelldblclick, this);
            this.btn_close2.addEventHandler("onclick", this.common_onclick, this);
            this.btn_print.addEventHandler("onclick", this.common_onclick, this);
            this.btn_close.addEventHandler("onclick", this.common_onclick, this);
            this.grd_detail.addEventHandler("oncelldblclick", this.grd_detail_oncelldblclick, this);

        };

        this.loadIncludeScript("OMG_DS_TX_7002_SLP.xfdl", true);

       
    };
}
)();
