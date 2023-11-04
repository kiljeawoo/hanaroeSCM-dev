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
                this.set_name("OMG_DS_SC_5213");
                this.set_titletext("EDI서비스일별내역");
                this._setFormPosition(0,0,802,520);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_result", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RMS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERS\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRES\" type=\"STRING\" size=\"256\"/><Column id=\"DESADV\" type=\"STRING\" size=\"256\"/><Column id=\"DESRSP\" type=\"STRING\" size=\"256\"/><Column id=\"CONADV\" type=\"STRING\" size=\"256\"/><Column id=\"CONRET\" type=\"STRING\" size=\"256\"/><Column id=\"SILRPT\" type=\"STRING\" size=\"256\"/><Column id=\"SISRPT\" type=\"STRING\" size=\"256\"/><Column id=\"DLY_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"BL_DLY_SUM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static29", "absolute", "1.51%", "0", null, "20", "-22.33%", null, this);
            obj.set_taborder("117");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "1.5%", "500", null, "20", "-26.18%", null, this);
            obj.set_taborder("138");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "1.49%", "685", null, "20", "-22.42%", null, this);
            obj.set_taborder("140");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "788", "1", "14", "1195", null, null, this);
            obj.set_taborder("149");
            obj.set_text("14");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "1", "11", "1195", null, null, this);
            obj.set_taborder("150");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result", "absolute", "11", "20", null, null, "14", "20", this);
            obj.set_taborder("151");
            obj.set_binddataset("ds_result");
            obj.set_autofittype("none");
            obj.set_useselcolor("false");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"37\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"수신일자\"/><Cell col=\"1\" rowspan=\"2\" text=\"주문서\"/><Cell col=\"2\" rowspan=\"2\" text=\"주문예정서\"/><Cell col=\"3\" rowspan=\"2\" text=\"배송예정서\"/><Cell col=\"4\" rowspan=\"2\" text=\"배송예정&#13;&#10;응답서\"/><Cell col=\"5\" rowspan=\"2\" text=\"검수확정서\"/><Cell col=\"6\" rowspan=\"2\" text=\"반품확정서\"/><Cell col=\"7\" rowspan=\"2\" text=\"마트별&#13;&#10;매입실적\"/><Cell col=\"8\" rowspan=\"2\" text=\"물류센터&#13;&#10;출고실적\"/><Cell col=\"9\" colspan=\"2\" text=\"합계\"/><Cell row=\"1\" col=\"9\" text=\"수/발신&#13;&#10;Byte\"/><Cell row=\"1\" col=\"10\" text=\"빌링&#13;&#10;Byte\"/></Band><Band id=\"body\"><Cell text=\"bind:RMS_DT\" mask=\"####-##-##\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:ORDERS\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:ORDRES\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:DESADV\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:DESRSP\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:CONADV\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:CONRET\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:SILRPT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:SISRPT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:DLY_SUM\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:BL_DLY_SUM\"/></Band><Band id=\"summary\"><Cell style=\"align:left;\" text=\"합계 byte\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(ORDERS)&quot;)\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(ORDRES)&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(DESADV)&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(DESRSP)&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(CONADV)&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(CONRET)&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SILRPT)&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SISRPT)&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(DLY_SUM)&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(BL_DLY_SUM)&quot;)\"/><Cell row=\"1\" style=\"align:left;\" text=\"합계 KB\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(ORDERS)&quot;)/1024)\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(ORDRES)&quot;)/1024)\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(DESADV)&quot;)/1024)\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(DESRSP)&quot;)/1024)\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(CONADV)&quot;)/1024)\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(CONRET)&quot;)/1024)\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(SILRPT)&quot;)/1024)\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(SISRPT)&quot;)/1024)\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(DLY_SUM)&quot;)/1024)\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(BL_DLY_SUM)&quot;)/1024)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 802, 520, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("EDI서비스일별내역");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divSearch.edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divSearch.cbo_menuLevel","value","ds_in","MENU_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divSearch.edt_menuName","value","ds_in","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divSearch.edt_svcGroup","value","ds_in","SVC_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divSearch.edt_fileName","value","ds_in","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divSearch.edt_fileType","value","ds_in","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divSearch.cbo_displayYn","value","ds_in","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divSearch.cbo_useYn","value","ds_in","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5213.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_5213.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); // 공통
        	this.grd_result.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        /***************************************************
        	EDI일별사용량조회
        ****************************************************/
        this.fn_retrieveEdiSvcDtpBrk = function(RMS_MM,RMS_TRPL_C)
        {
        	var sParam = "RMS_MM=" + RMS_MM
        			   + " RMS_TRPL_C=" + RMS_TRPL_C;
        	
        	var sSvcID        = "retrieveEdiSvcDtpBrkList";
        	var sURL          = "svc::rest/pt/myinf/retrieveEdiSvcDtpBrkList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_result=ds_result";
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }
         
        /***************************************************
        	callback메소드
        ****************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if (svcID == "retrieveEdiSvcDtpBrkList") {
        		if (this.ds_result.rowcount == 0) {
        			//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			return;
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5213.xfdl", true);

       
    };
}
)();
