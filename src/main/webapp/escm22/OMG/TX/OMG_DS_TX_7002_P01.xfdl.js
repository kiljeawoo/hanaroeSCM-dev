﻿(function()
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
                this.set_name("OMG_DS_TX_7002");
                this.set_titletext("마감간소화 상품 상세 내역");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,800,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail_data", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM1\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM2\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM3\" type=\"STRING\" size=\"256\"/><Column id=\"BLB_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DFC_AM\" type=\"STRING\" size=\"256\"/><Column id=\"SAM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_excel", "absolute", null, "47", "41", "21", "17", null, this);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_detail", "absolute", "15", "115", null, null, "15", "58", this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_detail_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell colspan=\"8\" text=\"매입상세내역\"/><Cell row=\"1\" text=\"상품코드\"/><Cell row=\"1\" col=\"1\" text=\"상품명\"/><Cell row=\"1\" col=\"2\" text=\"과세구분&#13;&#10;코드명\"/><Cell row=\"1\" col=\"3\" text=\"매입수량\"/><Cell row=\"1\" col=\"4\" text=\"매입단가\"/><Cell row=\"1\" col=\"5\" text=\"공급금액\"/><Cell row=\"1\" col=\"6\" text=\"매입부가세\"/><Cell row=\"1\" col=\"7\" text=\"매입합계금액\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" style=\"align:left;\" text=\"bind:ITEM3\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:BLB_AM\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:DFC_AM\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:SAM\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:SAM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("8");
            obj.set_text("마감간소화 상품 상세 내역");
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

            obj = new Static("sta_result", "absolute", "15", "89", "80", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("전표번호 :");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_result00", "absolute", "15", "47", "150", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("세금계산서 승인 번호 :");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_info1", "absolute", "190", "47", "300", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("20210302083747kteba19031 (일반/과세)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("sta_info2", "absolute", "190", "68", "300", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("8808983000015/상품본부");
            this.addChild(obj.name, obj);

            obj = new Static("sta_result01", "absolute", "15", "68", "170", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("실매입처코드/실매입처명 :");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_info3", "absolute", "91", "89", "110", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("2021-01-01-00001");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1111");
            		p.set_titletext("마감간소화 상품 상세 내역");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_TX_7002_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_TX_7002_P01.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.PBC_SQNO;
        this.GLN;

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	this.PBC_SQNO = this.fn_nullToEmpty(this.parent.pbc_sqno);
        	this.GLN = this.fn_nullToEmpty(this.parent.gln);

        	this.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	if (this.gfn_isNull(this.PBC_SQNO) || this.gfn_isNull(this.GLN)) {
        		this.alert("잘못된 정보입니다.");
        		this.close();
        	}
        	this.search();
        }

        //조회
        this.search = function()
        {
        	var bas = this.div_search.edt_data00.value;
        	var adj_bzplc = this.div_search.edt_data03.value;
        	var adjpl_c = this.div_search.edt_data01.value;
        	var params = "BAS_YM="+bas
        				 +" ADJ_NA_BZPLC="+adj_bzplc
        				 +" NA_ADJPL_C="+adjpl_c;

        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/balance/getMonthlyBalanceDetailList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_detail_data=DATASET";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)//첫번째 인자값은 통신 ID
        {
        	if (nCD < 0) {
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}
        }

        this.btn_print00_onclick = function(obj,e)
        {
        	var pbc = "";
        	var gln = "";
        	
        	var ozParam = {
        		sId: 'OMG_DS_TX_7002',
        		sUrl: '/rest/oz/pds/balance/getMonthlyBalanceDetailList',
        		paramType: 'param',
        		sParam:{
        			PBC_SQNO:pbc,
        			GLN:gln
        		}
        	};
        	this.ozViewer(ozParam);
        }

        this.common_onclick = function(obj,e)
        {
        	if (obj.id == "btn_close" || obj.id == "btn_close2") {
        		this.close();
        	} else if (obj.id == "btn_excel") {
        		
        	} else if (obj.id == "btn_print") {
        		
        	}
        }

        this.grd_detail_oncelldblclick = function(obj,e)
        {
        	var oArg = {pbc_sqno:"U", gln:""};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("detailSlpWrs","OMG.TX::OMG_DS_TX_7002_P01.xfdl", oArg, sOption, sPopupCallBack);

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_excel.addEventHandler("onclick", this.common_onclick, this);
            this.grd_detail.addEventHandler("oncelldblclick", this.grd_detail_oncelldblclick, this);
            this.btn_close2.addEventHandler("onclick", this.common_onclick, this);
            this.btn_print.addEventHandler("onclick", this.common_onclick, this);
            this.btn_close.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_TX_7002_P01.xfdl", true);

       
    };
}
)();
