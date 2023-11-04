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
                this.set_name("OMG_DS_SC_7180");
                this.set_titletext("농협하나로유통 상품본부 업데이트");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,803,149);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rqbrk", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RMS_MM\" type=\"STRING\" size=\"6\"/><Column id=\"RMS_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"10\"/><Column id=\"EDI_UGQT\" type=\"INT\"/><Column id=\"ADINF_UGQT\" type=\"INT\"/><Column id=\"SLAM\" type=\"INT\"/><Column id=\"FDAM_MSR_RT_C\" type=\"INT\"/><Column id=\"BASIC_RATE\" type=\"INT\"/><Column id=\"EDI_UG_AM\" type=\"INT\"/><Column id=\"ADINF_UG_AM\" type=\"INT\"/><Column id=\"IA_BI_UG_AM\" type=\"INT\"/><Column id=\"IA_PG_UG_AM\" type=\"INT\"/><Column id=\"IA_MA_UG_AM\" type=\"INT\"/><Column id=\"IA_CTGR_UG_AM\" type=\"INT\"/><Column id=\"SMS_UG_AM\" type=\"INT\"/><Column id=\"PAY_UNAPL_YN\" type=\"STRING\" size=\"10\"/><Column id=\"SPPR\" type=\"INT\"/><Column id=\"VAT_AM\" type=\"INT\"/><Column id=\"FS_RQS_AM\" type=\"INT\"/><Column id=\"PRXP_COMP_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"LS_RQS_AM\" type=\"INT\"/><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"50\"/><Column id=\"PBC_SQNO_N\" type=\"INT\"/><Column id=\"REMARKS\" type=\"STRING\" size=\"100\"/><Column id=\"LATE_AM\" type=\"INT\"/><Column id=\"CTGR_SL_UGQT\" type=\"INT\"/><Column id=\"CTGR_SL_UG_AM\" type=\"INT\"/><Column id=\"BAD_DEBT_AM\" type=\"INT\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_resultSum", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SUMHAP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPPRHAP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TXAHAP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TTHAP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rqbrk_temp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RMS_MM\" type=\"STRING\" size=\"6\"/><Column id=\"RMS_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"10\"/><Column id=\"EDI_UGQT\" type=\"INT\"/><Column id=\"ADINF_UGQT\" type=\"INT\"/><Column id=\"SLAM\" type=\"INT\"/><Column id=\"FDAM_MSR_RT_C\" type=\"INT\"/><Column id=\"BASIC_RATE\" type=\"INT\"/><Column id=\"EDI_UG_AM\" type=\"INT\"/><Column id=\"ADINF_UG_AM\" type=\"INT\"/><Column id=\"IA_BI_UG_AM\" type=\"INT\"/><Column id=\"IA_PG_UG_AM\" type=\"INT\"/><Column id=\"IA_MA_UG_AM\" type=\"INT\"/><Column id=\"IA_CTGR_UG_AM\" type=\"INT\"/><Column id=\"SMS_UG_AM\" type=\"INT\"/><Column id=\"PAY_UNAPL_YN\" type=\"STRING\" size=\"10\"/><Column id=\"SPPR\" type=\"INT\"/><Column id=\"VAT_AM\" type=\"INT\"/><Column id=\"FS_RQS_AM\" type=\"INT\"/><Column id=\"PRXP_COMP_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"LS_RQS_AM\" type=\"INT\"/><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"50\"/><Column id=\"PBC_SQNO_N\" type=\"INT\"/><Column id=\"REMARKS\" type=\"STRING\" size=\"100\"/><Column id=\"LATE_AM\" type=\"INT\"/><Column id=\"CTGR_SL_UGQT\" type=\"INT\"/><Column id=\"CTGR_SL_UG_AM\" type=\"INT\"/><Column id=\"BAD_DEBT_AM\" type=\"INT\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_close", "absolute", null, "47", "41", "21", "19", null, this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "51", "228", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("농협하나로유통 상품본부 업데이트");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_text("상품본부문자발송내역");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("brn_cls", "absolute", "765", "0", "37", "32", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "47", "43", "21", "61", null, this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "17", "76", null, null, "19", "12", this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_rqbrk");
            obj.set_cellsizingtype("col");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"사용월\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" text=\"업체코드\"/><Cell col=\"4\" text=\"본지사\"/><Cell col=\"5\" text=\"최종청구금액\"/><Cell col=\"6\" text=\"대납업체코드\"/><Cell col=\"7\" text=\"발행일련번호\"/><Cell col=\"8\" text=\"전월매출금액\"/><Cell col=\"9\" text=\"EDI사용량\"/><Cell col=\"10\" text=\"부가정보사용량\"/><Cell col=\"11\" text=\"정액종량\"/><Cell col=\"12\" text=\"기본료\"/><Cell col=\"13\" text=\"EDI사용금액\"/><Cell col=\"14\" text=\"부가정보금액\"/><Cell col=\"15\" text=\"BI조회금액\"/><Cell col=\"16\" text=\"추이분석금액\"/><Cell col=\"17\" text=\"시장분석자사금액\"/><Cell col=\"18\" text=\"시장분석타사금액\"/><Cell col=\"19\" text=\"판매상세정보 사용건수\"/><Cell col=\"20\" text=\"판매상세정보 사용금액\"/><Cell col=\"21\" text=\"SMS사용금액\"/><Cell col=\"22\" text=\"연체료\"/><Cell col=\"23\" text=\"납부미적용\"/><Cell col=\"24\" text=\"공급가\"/><Cell col=\"25\" text=\"부가세\"/><Cell col=\"26\" text=\"최초청구금액\"/><Cell col=\"27\" text=\"대손금액\"/><Cell col=\"28\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:RMS_MM\" mask=\"@@@@-@@\" tooltiptext=\"bind:RMS_MM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"3\" text=\"bind:RMS_TRPL_C\" tooltiptext=\"bind:RMS_TRPL_C\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:NA_MBCO_DSC\" combodataset=\"ds_mbco\" combocodecol=\"CODE\" combodatacol=\"DATA\" tooltiptext=\"bind:NA_MBCO_DSC\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LS_RQS_AM\" tooltiptext=\"bind:LS_RQS_AM\"/><Cell col=\"6\" text=\"bind:PRXP_COMP_TRPL_C\" tooltiptext=\"bind:PRXP_COMP_TRPL_C\"/><Cell col=\"7\" text=\"bind:PBC_SQNO\" tooltiptext=\"bind:PBC_SQNO\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLAM\" tooltiptext=\"bind:SLAM\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EDI_UGQT\" tooltiptext=\"bind:EDI_UGQT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ADINF_UGQT\" tooltiptext=\"bind:ADINF_UGQT\"/><Cell col=\"11\" displaytype=\"combo\" text=\"bind:FDAM_MSR_RT_C\" combodataset=\"ds_fdam\" combocodecol=\"CODE\" combodatacol=\"DATA\" tooltiptext=\"bind:FDAM_MSR_RT_C\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BASIC_RATE\" tooltiptext=\"bind:BASIC_RATE\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EDI_UG_AM\" tooltiptext=\"bind:EDI_UG_AM\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ADINF_UG_AM\" tooltiptext=\"bind:ADINF_UG_AM\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:IA_BI_UG_AM\" tooltiptext=\"bind:IA_BI_UG_AM\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:IA_PG_UG_AM\" tooltiptext=\"bind:IA_PG_UG_AM\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:IA_MA_UG_AM\" tooltiptext=\"bind:IA_MA_UG_AM\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:IA_CTGR_UG_AM\" tooltiptext=\"bind:IA_CTGR_UG_AM\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CTGR_SL_UGQT\" tooltiptext=\"bind:CTGR_SL_UG_AM\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CTGR_SL_UG_AM\" tooltiptext=\"bind:CTGR_SL_UG_AM\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMS_UG_AM\" tooltiptext=\"bind:SMS_UG_AM\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LATE_AM\" tooltiptext=\"bind:LATE_AM\"/><Cell col=\"23\" text=\"bind:PAY_UNAPL_YN\" tooltiptext=\"bind:PAY_UNAPL_YN\"/><Cell col=\"24\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:SPPR\" tooltiptext=\"bind:SPPR\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VAT_AM\" tooltiptext=\"bind:VAT_AM\"/><Cell col=\"26\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FS_RQS_AM\" tooltiptext=\"bind:FS_RQS_AM\"/><Cell col=\"27\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BAD_DEBT_AM\" tooltiptext=\"bind:BAD_DEBT_AM\"/><Cell col=\"28\" style=\"align:left;\" text=\"bind:REMARKS\" tooltiptext=\"bind:REMARKS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 149, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("농협하나로유통 상품본부 업데이트");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7180_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7180_P01.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e) //공통
        {
           this.gfn_setInitForm(obj, e);
        }

        this.fn_afterFormOnload = function() //페이지 로딩후 실행부분
        {
        	var fv_paramMode = this.getOwnerFrame().paramMode;
        	
        	this.ds_resultSum.clearData();
        	this.ds_resultSum.addRow();
        	
        	if(fv_paramMode == "U")
        	{
        		this.search();
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /*저장 버튼 이벤트*/
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.getOwnerFrame().paramMode== "U")
        	{	 
        	   this.update();
        	}
        }

        /*창닫기 버튼 이벤트*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /* 등록 및 수정시 사용되는 Validation Check */
        this.fn_validationCheck = function()
        {
        	if(this.gfn_isNull(this.ds_rqbrk.getColumn(0, 'SPPR')))
        	{
        		alert("공급가액을 입력 하세요.");	
        		this.row();
        		return false;
        	}
            return true;
        }

         /*수정버튼 클릭시 해당 row 정보 조회*/
        this.search = function()
        {
         	var ds_parent = this.parent.dsArg;
         	this.ds_resultSum.copyRow(0,ds_parent,0);
         	var sParams			= "BY_DT=" + ds_parent.getColumn(0, 'YM')

        						+ " TRPL_C=" + "8808983000015"
        						+ " CLNTNM=" + "";						
        	var sSvcID			= "retrieveUgfeRqBrkList";
        	var sURL			= "svc::rest/bl/retrieveUgfeRqBrkList";
        	var sInDatasets		= "";
        	var sOutDatasets	= "ds_rqbrk=ds_rqbrk";
        	var sArgument		= sParams;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S"; // U:저장/삭제, S:조회
        	
        	
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);					
        }

        /*수정*/
        this.update = function()
        {
        	if(this.fn_validationCheck()){
        		var sSvcID        = "updateItemHofcTextBrk";
        		var sURL          = "svc::rest/bl/updateItemHofcTextBrk";
        		var sInDatasets   = "ds_rqbrk=ds_rqbrk";
        		var sOutDatasets  = "";
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID=="updateItemHofcTextBrk"){
        			if(ErrorCode == 0){
        				this.gfn_getMessage("alert", "result.message.save.success");
        				this.close("U");
        			}
        		}
        		if(svcID == "retrieveUgfeRqBrkList")
        		{
        			if(this.ds_rqbrk.rowcount==0)
        			{
        				this.Grid01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}else
        			{
        				this.autoAm();
        			}
        		}
        	}
        }

        this.autoAm = function()
        {	
        	this.row();
        	this.ds_rqbrk.setColumn(0, "SMS_UG_AM", this.ds_resultSum.getColumn(0, 'SPPRHAP'));
        	this.ds_rqbrk.setColumn(0, "SPPR", this.ds_resultSum.getColumn(0, 'SPPRHAP'));
        	this.ds_rqbrk.setColumn(0, "VAT_AM", this.ds_resultSum.getColumn(0, 'TXAHAP'));
        	this.ds_rqbrk.setColumn(0, "FS_RQS_AM", this.ds_resultSum.getColumn(0, 'TTHAP'));
        	this.ds_rqbrk.setColumn(0, "LS_RQS_AM", this.ds_resultSum.getColumn(0, 'TTHAP'));	
        }

        this.row = function()
        {
        	this.Grid01.selectRow(0); 
        	this.Grid01.setCellPos(24);
        	this.Grid01.hscrollbar.set_pos(1980);
        	this.Grid01.showEditor(true);
        }	

        this.ds_rqbrk_oncolumnchanged = function(obj,e)
        {
        	this.ds_rqbrk.setColumn(0, "SMS_UG_AM", this.ds_rqbrk.getColumn(0, 'SPPR'));
        	this.ds_rqbrk.setColumn(0, "SPPR", this.ds_rqbrk.getColumn(0, 'SPPR'));
        	this.ds_rqbrk.setColumn(0, "VAT_AM", parseFloat(this.ds_rqbrk.getColumn(0, 'SPPR') * 0.1).toFixed(1));
        	this.ds_rqbrk.setColumn(0, "FS_RQS_AM", this.ds_rqbrk.getColumn(0, 'SPPR') + this.ds_rqbrk.getColumn(0, 'VAT_AM'));
        	this.ds_rqbrk.setColumn(0, "LS_RQS_AM", this.ds_rqbrk.getColumn(0, 'FS_RQS_AM'));
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_rqbrk.addEventHandler("oncolumnchanged", this.ds_rqbrk_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.brn_cls.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7180_P01.xfdl", true);

       
    };
}
)();
