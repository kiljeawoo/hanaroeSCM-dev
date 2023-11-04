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
                this.set_name("popup01");
                this.set_titletext("팝업 소속사업장별 조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,1000,365);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"INT\" size=\"256\"/><Column id=\"ODR_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"ODR_QT\" type=\"FLOAT\" size=\"256\"/><Column id=\"ODR_VAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOX_QT\" type=\"FLOAT\" size=\"256\"/><Column id=\"ODR_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FCLT_C\" type=\"STRING\" size=\"256\"/><Column id=\"SVS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SVS_UNT_QT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "17", "47", null, "300", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\" band=\"left\"/><Column size=\"115\" band=\"left\"/><Column size=\"240\" band=\"left\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"입수\"/><Cell col=\"6\" text=\"단가\"/><Cell col=\"7\" text=\"수주량\"/><Cell col=\"8\" text=\" BOX수량\"/><Cell col=\"9\" text=\"수주금액\"/><Cell col=\"10\" text=\"부가세액\"/><Cell col=\"11\" text=\"공병금액\"/><Cell col=\"12\" text=\"물류기능코드\"/><Cell col=\"13\" text=\"소분여부\"/><Cell col=\"14\" text=\"소분단위수량\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:WRSNM\"/><Cell col=\"3\" text=\"bind:WRS_STDNM\"/><Cell col=\"4\" text=\"bind:NA_WRS_UNT_C\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:BOXPE_AQZ\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_PCS\" mask=\"#,##0.99\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_QT\" mask=\"#,##0\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BOX_QT\" mask=\"#,##0.##\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_AM\" mask=\"#,##0\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_VAT\" mask=\"#,##0\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_AM\" mask=\"#,##0\"/><Cell col=\"12\" text=\"bind:PHD_FCLT_C\"/><Cell col=\"13\" expr=\"expr:SVS_YN == '0' ? '부' : '여'\"/><Cell col=\"14\" displaytype=\"number\" text=\"bind:SVS_UNT_QT\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "363", "32", "91", "15", null, null, this);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "67", "17", "67", null, null, this);
            obj.set_taborder("12");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", null, "0", "55", "32", "0", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("14");
            obj.set_text("소속사업장별 상품조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1000, 365, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("팝업 소속사업장별 조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0110_P03.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0110_P03.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.gridAutoResizeM(this.Grid00);
        	this.Grid00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	var odrpl_na_trpl_c = this.getOwnerFrame().odrpl_na_trpl_c;
        	var odrpl_na_team_c = this.getOwnerFrame().odrpl_na_team_c;
        	var odr_dt = this.getOwnerFrame().odr_dt;
        	var odr_slpno = this.getOwnerFrame().odr_slpno;
        	
        	var params = "";
        	params = " odrpl_na_trpl_c="+odrpl_na_trpl_c
        			 +	" odrpl_na_team_c="+odrpl_na_team_c
        			 +	" odr_dt=" + odr_dt
        			 +	" odr_slpno=" + odr_slpno
        			 +	" idx=3";
        	//trace(params);
        	var sSvcID        = "retrieveOrderTrd";//통신아이디
        	var sURL          = "svc::/rest/scm/order/retrieveOrderTrd";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "retrieveOrderTrd") {
        			if (this.ds_dataM.rowcount == 0) {
        				this.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));	
        			} else {
        				this.Grid00.set_selecttype("area");
        			}
        		}
        	}
        }

        this.Grid00_onkeydown = function(obj,e)
        {
        	if (e.ctrlKey) {
        		if (e.keycode == 67) {
        			//데이터 복사 ctrl + c 키 동작
        			var strGrdDsNm = obj.binddataset;
        			var v_clip = "";
        			var strSeperate = "\t";
        			
        			for (var i=obj.selectstartrow; i<=obj.selectendrow; i++) {
        				for (var j=obj.selectstartcol; j<=obj.selectendcol; j++) {
        					if (j < obj.selectendcol) {
        						if (j == 0) {
        							v_clip += (Number(i)+1) + strSeperate;
        						} else {
        							v_clip += obj.getCellValue(i,j) + strSeperate;
        						}
        					} else {
        						if (j == 0) {
        							v_clip += (Number(i)+1);
        						} else {
        							v_clip += obj.getCellValue(i,j);
        						}
        					}
        				}
        				if (i < obj.selectendrow) {
        					v_clip += "\r\n";
        				}
        			}
        			
        			if (nexacro.Browser == "Runtime" || (nexacro.Browser == "IE" && nexacro.Browser == "8")) {
        				system.clearClipboard();
        				system.setClipboard("CF_TEXT", v_clip);
        			} else {
        				var tempElem = document.createElement('textarea');
        				tempElem.value = v_clip;  
        				document.body.appendChild(tempElem);
        				tempElem.select();
        				window.document.execCommand("copy");
        				window.document.body.removeChild(tempElem);
        			}
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Grid00.addEventHandler("onkeydown", this.Grid00_onkeydown, this);
            this.Button01.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0110_P03.xfdl", true);

       
    };
}
)();
