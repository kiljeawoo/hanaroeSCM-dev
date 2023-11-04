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
                this.set_name("VAN_DS_SC_1111");
                this.set_titletext("월잔액원장조회 상세조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,803,700);
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
            obj = new Div("div_search", "absolute", "17", "76", null, "69", "17", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_text("거래월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title01", "absolute", "15", "36", "67", "21", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data03", "absolute", "82", "36", "105", "21", null, null, this.div_search);
            obj.set_taborder("25");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("13");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data04", "absolute", "190", "36", "131", "21", null, null, this.div_search);
            obj.set_taborder("26");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "0", "15", "67", null, null, this.div_search);
            obj.set_taborder("28");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "81", "57", "103", "10", null, null, this.div_search);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "81", "31", "103", "5", null, null, this.div_search);
            obj.set_taborder("30");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "81", "0", "103", "10", null, null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "321", "0", "30", "67", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title02", "absolute", "351", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("33");
            obj.set_text("공급업체");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data00", "absolute", "82", "10", "105", "21", null, null, this.div_search);
            obj.set_taborder("35");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "430", "10", "105", "21", null, null, this.div_search);
            obj.set_taborder("36");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("13");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data02", "absolute", "538", "10", "131", "21", null, null, this.div_search);
            obj.set_taborder("37");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_print00", "absolute", null, "47", "41", "21", "17", null, this);
            obj.set_taborder("2");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_detail", "absolute", "17", "160", null, null, "17", "58", this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_detail_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"169\"/><Column size=\"127\"/><Column size=\"127\"/><Column size=\"127\"/><Column size=\"127\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"내역\"/><Cell col=\"2\" text=\"흑자\"/><Cell col=\"3\" text=\"적자\"/><Cell col=\"4\" text=\"합계\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:ITEM2\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:ITEM3\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:BLB_AM\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:DFC_AM\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:SAM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "695", "32", "91", "15", null, null, this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "696", "68", "91", "8", null, null, this);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("8");
            obj.set_text("월잔액장상세조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "695", "145", "91", "15", null, null, this);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "87.05%", "642", null, "10", "1.87%", null, this);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", null, "652", "150", "29", "91", null, this);
            obj.set_taborder("11");
            obj.set_text("채권채무발행관리 이동");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", null, "652", "70", "29", "17", null, this);
            obj.set_taborder("12");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "699", "681", "89", "17", null, null, this);
            obj.set_taborder("13");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 700, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1111");
            		p.set_titletext("월잔액원장조회 상세조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1111.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1111.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	if (this.parent.dtVal == undefined) {
        		this.alert('입력 파라미터가 없습니다. 파라미터를 확인하십시요.');
        		return;
        	}

        	this.div_search.edt_data00.set_value(this.parent.dtVal);
        	this.div_search.edt_data01.set_value(this.parent.dsArg.getColumn(this.parent.dsArg.rowposition,"NA_ADJPL_C"));
        	this.div_search.edt_data02.set_value(this.parent.dsArg.getColumn(this.parent.dsArg.rowposition,"CLIENT_NM"));
        	this.div_search.edt_data03.set_value(this.parent.dsArg.getColumn(this.parent.dsArg.rowposition,"NA_BZPLC"));
        	this.div_search.edt_data04.set_value(this.parent.dsArg.getColumn(this.parent.dsArg.rowposition,"BZPL_NM"));
        	this.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
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
        	var searchText = "사업장:"+this.div_search.edt_data03.value+" "+this.div_search.edt_data04.value
        					 ", 거래월:"+this.div_search.edt_data00.value+
        					 ", 공급업체:"+this.div_search.edt_data01.value+" "+this.div_search.edt_data02.value;

        	// trace(searchText);

        	var ozParam = {
        		sId: 'VAN_DS_SC_1111',
        		sUrl: '/rest/oz/pds/balance/getMonthlyBalanceDetailList',
        		paramType: 'param',
        		sParam:{
        			TRPL_C_TEXT:searchText,
        			BAS_YM:this.gfn_nullToEmpty(this.div_search.edt_data00.value),
        			ADJ_NA_BZPLC:this.gfn_nullToEmpty(this.div_search.edt_data03.value),
        			NA_ADJPL_C:this.gfn_nullToEmpty(this.div_search.edt_data01.value)
        		}
        	};
        	this.ozViewer(ozParam);
        }

        this.btn_ok_onclick = function(obj,e)
        {
        	this.close(this.div_search.edt_data00.value + "|" + this.div_search.edt_data01.value);
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_print00.addEventHandler("onclick", this.btn_print00_onclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1111.xfdl");

       
    };
}
)();
