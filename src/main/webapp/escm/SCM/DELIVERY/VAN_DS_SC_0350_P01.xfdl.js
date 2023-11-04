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
                this.set_name("popup01");
                this.set_titletext("배송예정 상품 조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,825,329);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DSQNO\" type=\"STRING\" size=\"256\"/><Column id=\"VAN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"INT\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"INT\" size=\"256\"/><Column id=\"ODR_PCS\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_ODR_PCS\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_VAT\" type=\"INT\" size=\"256\"/><Column id=\"ODR_AM\" type=\"INT\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLA_QT\" type=\"INT\" size=\"256\"/><Column id=\"DVY_AM\" type=\"INT\" size=\"256\"/><Column id=\"DVY_VAT\" type=\"INT\" size=\"256\"/><Column id=\"DQPD_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLA_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_UPR\" type=\"INT\" size=\"256\"/><Column id=\"VCBX_UPR\" type=\"INT\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"INT\" size=\"256\"/><Column id=\"VCBX_AM\" type=\"INT\" size=\"256\"/><Column id=\"SSDYRT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SSDY_BAS_AM\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPY_PSB_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SVS_QT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_BAS_QT\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_QT\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_WRS_UPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "17", "47", null, "226", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_dataD");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"입수\"/><Cell col=\"6\" text=\"단가\"/><Cell col=\"7\" text=\"수주량\"/><Cell col=\"8\" text=\"배송예정량\"/><Cell col=\"9\" text=\"금액\"/><Cell col=\"10\" text=\"부가세\"/><Cell col=\"11\" text=\"공병단가\"/><Cell col=\"12\" text=\"공병금액\"/></Band><Band id=\"body\"><Cell text=\"bind:DVY_PLA_SQNO\"/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:WRSNM\"/><Cell col=\"3\" text=\"bind:WRS_STDNM\"/><Cell col=\"4\" text=\"bind:NA_WRS_UNT_C\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BOXPE_AQZ\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ODR_PCS\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ODR_QT\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DVY_PLA_QT\" mask=\"#,##0\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ODR_AM\" mask=\"#,##0\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ODR_VAT\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VCBT_UPR\" mask=\"#,##0\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VCBT_AM\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button65", "absolute", "753", "283", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "733", "312", "91", "17", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "733", "273", "91", "10", null, null, this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "363", "32", "91", "15", null, null, this);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "808", "32", "17", "67", null, null, this);
            obj.set_taborder("11");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "67", "17", "67", null, null, this);
            obj.set_taborder("12");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "770", "0", null, "32", "0", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("14");
            obj.set_text("배송예정 상품 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 825, 329, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("배송예정 상품 조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0350_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0350_P01.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.Grid00.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));	
        	
        	var spypl_na_trpl_c = this.parent.Pspypl_na_trpl_c;
        	var dvyaa_na_trpl_c = this.parent.Pdvyaa_na_trpl_c;
        	var na_dvy_plash_slpno = this.parent.Pna_dvy_plash_slpno;
        	var dvy_pla_dt = this.parent.Pdvy_pla_dt;
        	var ddly_yn = this.parent.Pddly_yn;
        	var cser_ctr_tpc = this.parent.Pcser_ctr_tpc;
        	
        	var params = "spypl_na_trpl_c="+spypl_na_trpl_c
        			 + 	" dvyaa_na_trpl_c="+dvyaa_na_trpl_c
        			 +	" na_dvy_plash_slpno=" + na_dvy_plash_slpno
        			 +	" dvy_pla_dt=" + dvy_pla_dt
        			  +	" ddly_yn=" + ddly_yn
        			 +	" cser_ctr_tpc=" + cser_ctr_tpc;

        	// trace("PARAMS="+params);
        	
        	var sSvcID        = "getDeliveryNoticeOrderDetail";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/getDeliveryNoticeOrderDetail";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataD=ds_dataD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        
        this.fCalVat02 = function(dvy_am,vatRat){
        	 var lVat;

            dvy_am = this.fParseFloat(dvy_am);
            vatRat = this.fParseFloat(vatRat);
            if ( vatRat ==0 || dvy_am <= 10 ) return 0;
            lVat = Math.floor(dvy_am/((100+vatRat)/vatRat));
            return lVat;
        }

        this.fParseFloat = function(txt){
            var tmpflt= 0.0;
            if ( !isNaN(txt) && typeof txt != 'string' ) return( parseFloat(txt,10) );
            if ( isNaN(txt) ) tmpflt = parseFloat(txt.delMask(),10);
            else tmpflt =  parseFloat(txt,10) ;
            if ( isNaN(tmpflt) ) return(0.0)
            else  return( tmpflt);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0) {
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "getDeliveryNoticeOrderDetail"){
        		//trace("getDeliveryNoticeOrderDetail");
        		//trace("---"+this.ds_dataD.rowcount);
        			if(this.ds_dataD.rowcount == 0){
        				this.Grid00.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));	
        			} else {
        				for(var row=0; row < this.ds_dataD.rowcount; row++){
        					var dvy_pla_qt 	= this.gfn_getNum(this.ds_dataD.getColumn(row, "DVY_PLA_QT"));
        					var dvy_wrs_upr = this.gfn_getNum(this.ds_dataD.getColumn(row, "DVY_WRS_UPR"));
        					var txt_dsc 	= this.ds_dataD.getColumn(row, "TXT_DSC");
        					
        					var dvy_vat = 0;
        					var odr_am = 0;
        // 					trace(dvy_pla_qt);
        // 					trace(dvy_wrs_upr);
        					
        					odr_am = dvy_wrs_upr * dvy_pla_qt;
        					
        					if(txt_dsc == "1"){
        						dvy_vat = this.fCalVat02(odr_am, 10);
        					}else{
        						dvy_vat = 0;
        					}
        					
        // 					trace(odr_am);
        // 					trace(dvy_vat);
        					this.ds_dataD.setColumn(row, "DVY_VAT", dvy_vat);
        					this.ds_dataD.setColumn(row, "DVY_AM", odr_am);
        					
        // 					trace(this.ds_dataD.saveXML());
        					
        				}
        			}
        		}
        	}
        }

        this.Button65_onclick = function(obj,e)
        {
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button65.addEventHandler("onclick", this.Button65_onclick, this);
            this.Button01.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0350_P01.xfdl");

       
    };
}
)();
