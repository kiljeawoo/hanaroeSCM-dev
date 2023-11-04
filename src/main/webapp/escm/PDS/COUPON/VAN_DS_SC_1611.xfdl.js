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
                this.set_titletext("할인쿠폰 상세 조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,803,558);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_coupon", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CPN_C\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"DC_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_SC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_MED_C\" type=\"STRING\" size=\"256\"/><Column id=\"DC_VLD_PRD_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DC_VLD_PRD_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EFOC_MBDC\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DC_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"DC_BAS_QT\" type=\"STRING\" size=\"256\"/><Column id=\"DC_BAS_BUY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DC_AM\" type=\"STRING\" size=\"256\"/><Column id=\"TRT_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"MFT_CONM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_CPN_KDC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"13\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"13\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_CPN_MED_C", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"13\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"13\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_CPN_EFOC_MBDC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"13\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"13\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_CPN_DC_TPC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"13\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"13\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static51", "absolute", "17", "51", "135", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("쿠폰마스터 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "76", "110", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("쿠폰종류");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "104", "110", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_text("할인기간시작일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "126", "76", null, "29", "17", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "126", "104", null, "29", "17", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "17", "132", "110", "29", null, null, this);
            obj.set_taborder("16");
            obj.set_text("쿠폰명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "17", "160", "110", "29", null, null, this);
            obj.set_taborder("17");
            obj.set_text("주관업체");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "126", "132", null, "29", "17", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "126", "160", null, "29", "17", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "17", "188", "110", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("쿠폰매체");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "17", "216", "110", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_text("쿠폰적용매수");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "126", "188", null, "29", "17", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "126", "216", null, "29", "17", null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "17", "244", "110", "29", null, null, this);
            obj.set_taborder("24");
            obj.set_text("쿠폰할인유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "126", "244", null, "29", "17", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "400", "76", "110", "29", null, null, this);
            obj.set_taborder("36");
            obj.set_text("쿠폰바코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "400", "104", "110", "29", null, null, this);
            obj.set_taborder("37");
            obj.set_text("할인기간종료일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "400", "132", "110", "29", null, null, this);
            obj.set_taborder("38");
            obj.set_text("쿠폰회차");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "400", "160", "110", "29", null, null, this);
            obj.set_taborder("39");
            obj.set_text("주관사업장");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "400", "188", "110", "29", null, null, this);
            obj.set_taborder("40");
            obj.set_text("행사번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "400", "216", "110", "29", null, null, this);
            obj.set_taborder("41");
            obj.set_text("쿠폰시행주체");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("NA_CPN_C", "absolute", "513", "80", "264", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "785", "76", "17", "67", null, null, this);
            obj.set_taborder("70");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "32", "91", "15", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.set_taborder("72");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "710", "68", "91", "8", null, null, this);
            obj.set_taborder("73");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("74");
            obj.set_text("할인쿠폰 상세조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("75");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "17", "279", "135", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_text("할인 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "17", "304", "110", "29", null, null, this);
            obj.set_taborder("77");
            obj.set_text("할인기준수량");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "17", "332", "110", "29", null, null, this);
            obj.set_taborder("78");
            obj.set_text("할인액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "126", "304", null, "29", "17", null, this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "126", "332", null, "29", "17", null, this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "400", "304", "110", "29", null, null, this);
            obj.set_taborder("98");
            obj.set_text("할인기준금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "400", "332", "110", "29", null, null, this);
            obj.set_taborder("99");
            obj.set_text("취급수수료");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_main00", "absolute", "2", "391", null, null, "3", "18", this);
            obj.set_taborder("112");
            obj.set_binddataset("ds_coupon");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_scrollbars("autoboth");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"130\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"65\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"제조업체명\"/><Cell col=\"4\" text=\"등록경로\"/><Cell col=\"5\" text=\"등록일\"/><Cell col=\"6\" text=\"수정일\"/><Cell col=\"7\" text=\"최종수정 사업장\"/><Cell col=\"8\" text=\"최종 사용자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DC_NA_WRS_C\"/><Cell col=\"2\" text=\"bind:WRSNM\"/><Cell col=\"3\" text=\"bind:CLNTNM\"/><Cell col=\"4\" text=\"1\"/><Cell col=\"5\" text=\"bind:FSRG_DTM\"/><Cell col=\"6\" text=\"bind:LSCHG_DTM\"/><Cell col=\"7\" text=\"bind:LSCGMN_NA_BZPLC\"/><Cell col=\"8\" text=\"bind:LS_CMENO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "17", "367", "135", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("쿠폰할인상품");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Edit("DC_VLD_PRD_ST_DT", "absolute", "130", "108", "264", "21", null, null, this);
            obj.set_taborder("124");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("CPN_WRSNM", "absolute", "130", "136", "264", "21", null, null, this);
            obj.set_taborder("125");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("MNGT_NA_TRPL_C", "absolute", "130", "164", "110", "21", null, null, this);
            obj.set_taborder("126");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("CPN_APL_PUC", "absolute", "130", "220", "264", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("DC_VLD_PRD_ED_DT", "absolute", "513", "108", "264", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("CPN_SC_NO", "absolute", "513", "136", "264", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11", "absolute", "513", "192", "264", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("DC_BAS_BUY_AM", "absolute", "513", "308", "264", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("DC_BAS_QT", "absolute", "130", "308", "264", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("DC_AM", "absolute", "130", "337", "264", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("TRT_FEE", "absolute", "513", "337", "264", "21", null, null, this);
            obj.set_taborder("139");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("CLNTNM", "absolute", "242", "164", "152", "21", null, null, this);
            obj.set_taborder("140");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("MNGT_NA_BZPLC", "absolute", "513", "164", "111", "21", null, null, this);
            obj.set_taborder("141");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("BZPLC_NM", "absolute", "626", "164", "150", "21", null, null, this);
            obj.set_taborder("142");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("CPN_KDC", "absolute", "130", "80", "264", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("143");
            obj.set_innerdataset("@ds_CPN_KDC");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_readonly("true");

            obj = new Combo("CPN_MED_C", "absolute", "130", "192", "262", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("144");
            obj.set_innerdataset("@ds_CPN_MED_C");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_readonly("true");

            obj = new Combo("CPN_DC_TPC", "absolute", "130", "248", "264", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("145");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_CPN_DC_TPC");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Combo("CPN_EFOC_MBDC", "absolute", "513", "220", "264", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("146");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_CPN_EFOC_MBDC");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 558, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("할인쿠폰 상세 조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1611.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1611.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.grd_main00.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));	
        	trace("P_MNGT_NA_TRPL_C : "+this.parent.P_MNGT_NA_TRPL_C);
        	trace("P_CPN_KDC : "+this.parent.P_CPN_KDC);
        	trace("P_NA_CPN_C : "+this.parent.P_NA_CPN_C);
        	var MNGT_NA_TRPL_C = this.parent.P_MNGT_NA_TRPL_C;
        	var CPN_KDC = this.parent.P_CPN_KDC;
        	var NA_CPN_C = this.parent.P_NA_CPN_C;
        	this.fn_getCouponDetailList(MNGT_NA_TRPL_C, CPN_KDC, NA_CPN_C);
        	
        	var param = [  
        		{code:"CPN_KDC", dsName:"ds_CPN_KDC", selecttype:"S"},
        		{code:"CPN_MED_C", dsName:"ds_CPN_MED_C", selecttype:"S"},
        		{code:"CPN_EFOC_MBDC", dsName:"ds_CPN_EFOC_MBDC", selecttype:""},
        		{code:"CPN_DC_TPC", dsName:"ds_CPN_DC_TPC", selecttype:""}
        		
        	];
        	this.gfn_setCommonCode(param);
        }

        this.fn_commonAfterOnload= function()
        {
        	this.div_search.CPN_KDC.set_index(0);
        	this.div_search.CPN_MED_C.set_index(0);
        }

        this.fn_getCouponDetailList = function(MNGT_NA_TRPL_C,CPN_KDC,NA_CPN_C){
        	this.ds_coupon.clearData();
        	var param = "MNGT_NA_TRPL_C="+MNGT_NA_TRPL_C
        				+" CPN_KDC="+CPN_KDC
        				+" NA_CPN_C="+NA_CPN_C;
        	var sSvcID        = "getCouponDetailList";//통신아이디
        	var sURL          = "svc::rest/pds/coupon/getCouponDetailList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_coupon=DATASET";
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0)
        	{
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}else{
        		if(svcID == "getCouponDetailList"){										
        			if(this.ds_coupon.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}else{
        				var nRow = this.ds_coupon.findRowExpr("DC_NA_WRS_C == '"+this.parent.P_DC_NA_WRS_C+"' && CPN_SC_NO == '"+this.parent.P_CPN_SC_NO+"'");
        				this.fn_getCoupon(nRow);
        				this.ds_coupon.set_rowposition(nRow);
        			}			
        		}	
        	}	
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.fn_getCoupon = function(row){
        	this.CPN_KDC.set_value(this.ds_coupon.getColumn(row,"CPN_KDC"));
        	this.CPN_MED_C.set_value(this.ds_coupon.getColumn(row,"CPN_MED_C"));
        	this.DC_VLD_PRD_ST_DT.set_value(this.ds_coupon.getColumn(row,"DC_VLD_PRD_ST_DT"));
        	this.DC_VLD_PRD_ED_DT.set_value(this.ds_coupon.getColumn(row,"DC_VLD_PRD_ED_DT"));
        	this.CLNTNM.set_value(this.ds_coupon.getColumn(row,"CLNTNM"));
        	this.CPN_APL_PUC.set_value(this.ds_coupon.getColumn(row,"CPN_APL_PUC"));
        	
        	this.CPN_DC_TPC.set_value(this.ds_coupon.getColumn(row,"CPN_DC_TPC"));
        	this.CPN_EFOC_MBDC.set_value(this.ds_coupon.getColumn(row,"CPN_EFOC_MBDC"));
        	
        	this.CPN_SC_NO.set_value(this.ds_coupon.getColumn(row,"CPN_SC_NO"));
        	this.CPN_WRSNM.set_value(this.ds_coupon.getColumn(row,"CPN_WRSNM"));
        	this.DC_AM.set_value(this.ds_coupon.getColumn(row,"DC_AM"));
        	this.DC_BAS_BUY_AM.set_value(this.ds_coupon.getColumn(row,"DC_BAS_BUY_AM"));
        	this.DC_BAS_QT.set_value(this.ds_coupon.getColumn(row,"DC_BAS_QT"));
        	this.MNGT_NA_TRPL_C.set_value(this.ds_coupon.getColumn(row,"MNGT_NA_TRPL_C"));
        	this.NA_CPN_C.set_value(this.ds_coupon.getColumn(row,"NA_CPN_C"));
        	this.TRT_FEE.set_value(this.ds_coupon.getColumn(row,"TRT_FEE"));
        }

        this.grd_main00_oncellclick = function(obj,e)
        {
        	this.fn_getCoupon(e.row);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_coupon.addEventHandler("onrowposchanged", this.ds_coupon_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.grd_main00.addEventHandler("oncellclick", this.grd_main00_oncellclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1611.xfdl");

       
    };
}
)();
