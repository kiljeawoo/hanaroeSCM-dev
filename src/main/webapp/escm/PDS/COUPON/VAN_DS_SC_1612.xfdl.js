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
                this.set_name("VAN_DS_SC_1612");
                this.set_titletext("할인쿠폰 삭제/재전송");
                this._setFormPosition(0,0,803,490);
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DC_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CPN_C\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_SC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_MED_C\" type=\"STRING\" size=\"256\"/><Column id=\"DC_VLD_PRD_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DC_VLD_PRD_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C_CNTN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "323", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "379", "21", "159", null, this);
            obj.set_taborder("1");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "107", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "13", "42", "106", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("쿠폰바코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "13", "13", "106", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("주관업체");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "255", "66", "117", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("할인시작일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("NA_CPN_C", "absolute", "102", "39", "134", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_value("");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("CLNTNM", "absolute", "244", "13", "254", "21", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_value("");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("DC_VLD_PRD_ST_DT", "absolute", "355", "66", "142", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_dateformat("yyyyMMdd");
            obj.set_value("");
            obj = new Calendar("DC_VLD_PRD_ED_DT", "absolute", "623", "66", "150", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_dateformat("yyyyMMdd");
            obj.set_value("");
            obj = new Edit("MNGT_NA_TRPL_C", "absolute", "102", "13", "134", "21", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.set_value("");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("CPN_KDC", "absolute", "623", "13", "150", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_innerdataset("@ds_CPN_KDC");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("Static03", "absolute", "519", "13", "91", "21", null, null, this.div_search);
            obj.set_taborder("26");
            obj.set_text("쿠폰종류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "255", "40", "80", "21", null, null, this.div_search);
            obj.set_taborder("27");
            obj.set_text("쿠폰명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("CPN_WRSNM", "absolute", "355", "40", "143", "21", null, null, this.div_search);
            obj.set_taborder("28");
            obj.set_value("");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "519", "39", "93", "21", null, null, this.div_search);
            obj.set_taborder("29");
            obj.set_text("쿠폰회차");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("CPN_SC_NO", "absolute", "623", "39", "150", "21", null, null, this.div_search);
            obj.set_taborder("30");
            obj.set_value("");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "13", "66", "98", "21", null, null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("쿠폰매체");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "519", "66", "111", "21", null, null, this.div_search);
            obj.set_taborder("33");
            obj.set_text("할인종료일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("CPN_MED_C", "absolute", "100", "66", "136", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_innerdataset("@ds_CPN_MED_C");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Div("div_list", "absolute", "0", "135", null, null, "15", "2", this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "368", "0", null, "12", "357", null, this.div_list);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "42", null, null, "0", "21", this.div_list);
            obj.set_taborder("4");
            obj.set_visible("true");
            obj.set_binddataset("ds_coupon");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"250\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"주관업체\"/><Cell col=\"2\" text=\"쿠폰바코드\"/><Cell col=\"3\" text=\"쿠폰명\"/><Cell col=\"4\" text=\"회차\"/><Cell col=\"5\" text=\"쿠폰종류\"/><Cell col=\"6\" text=\"쿠폰매체\"/><Cell col=\"7\" text=\"할인시작일\"/><Cell col=\"8\" text=\"할일종료일\"/><Cell col=\"9\" text=\"진행상태\"/><Cell col=\"10\" text=\"진행내용\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:CLNTNM\"/><Cell col=\"2\" text=\"bind:NA_CPN_C\"/><Cell col=\"3\" text=\"bind:CPN_WRSNM\"/><Cell col=\"4\" text=\"bind:CPN_SC_NO\"/><Cell col=\"5\" text=\"bind:CPN_KDC\"/><Cell col=\"6\" text=\"bind:CPN_MED_C\"/><Cell col=\"7\" text=\"bind:DC_VLD_PRD_ST_DT\"/><Cell col=\"8\" text=\"bind:DC_VLD_PRD_ED_DT\"/><Cell col=\"9\" text=\"bind:PRC_TEXT\"/><Cell col=\"10\" text=\"bind:RSP_C_CNTN\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_resend", "absolute", null, "0", "52", "21", "118", null, this);
            obj.set_taborder("8");
            obj.set_text("재전송");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 107, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("Div00");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1612");
            		p.set_titletext("할인쿠폰 삭제/재전송");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1612.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1612.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	this.div_search.MNGT_NA_TRPL_C.set_value(application.gv_glnCode);
        	this.div_search.CLNTNM.set_value(application.gv_companyName);
        	var todays = this.gfn_today('yyyyMMdd');
        	this.div_search.DC_VLD_PRD_ST_DT.set_value(todays);
        	this.div_search.DC_VLD_PRD_ED_DT.set_value(todays);
        	
        	var param = [  
        		{code:"CPN_KDC", dsName:"ds_CPN_KDC", selecttype:"S"},
        		{code:"CPN_MED_C", dsName:"ds_CPN_MED_C", selecttype:"S"}
        	];
        	this.gfn_setCommonCode(param);
        	
        }

        this.fn_commonAfterOnload= function()
        {
        	this.div_search.CPN_KDC.set_index(0);
        	this.div_search.CPN_MED_C.set_index(0);
        	
        // 	this.div_search.CPN_KDC.set_index(21);
        // 	this.div_search.CPN_MED_C.set_index(1);
        // 	this.div_search.DC_VLD_PRD_ST_DT.set_value("20151201");
        // 	this.div_search.DC_VLD_PRD_ED_DT.set_value("20151231");
        // 	
        // 	this.btn_search00_onclick();
        }

        this.btn_search00_onclick = function(obj,e){
        	this.ds_coupon.clearData();
        	if(this.fn_validationCheck()) {
        		var param = "MNGT_NA_TRPL_C="+application.gv_glnCode
        					+" CPN_KDC="+this.div_search.CPN_KDC.value
        					+" NA_CPN_C="+this.div_search.NA_CPN_C.value			 // 물류센터코드 선택값
        					+" CPN_WRSNM="+this.div_search.CPN_WRSNM.value						 // 적용일자 시작
        					+" CPN_SC_NO="+this.div_search.CPN_SC_NO.value
        					+" CPN_MED_C="+this.div_search.CPN_MED_C.value
        					+" DC_VLD_PRD_ST_DT="+this.div_search.DC_VLD_PRD_ST_DT.value
        					+" DC_VLD_PRD_ED_DT="+this.div_search.DC_VLD_PRD_ED_DT.value;
        		
        		var sSvcID        = "getCouponErrorList";//통신아이디
        		var sURL          = "svc::rest/pds/coupon/getCouponErrorList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_coupon=ds_coupon";
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callback";//콜백
        		var tranType 	  = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	}
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0)
        	{
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	} else {
        		if (svcID == "getCouponErrorList") {
        			if (this.ds_coupon.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			} else {
        				for (var i = 0; i < this.ds_coupon.rowcount; i++) {
        					if (this.ds_coupon.getColumn(i, "PRC_YN") == "E") {
        						this.ds_coupon.setColumn(i, "PRC_TEXT", "오류");
        					} else if (this.ds_coupon.getColumn(i, "PRC_YN") == "P") {
        						this.ds_coupon.setColumn(i, "PRC_TEXT", "무응답");
        					} else if (this.ds_coupon.getColumn(i, "PRC_YN") == "R" || this.ds_coupon.getColumn(i, "PRC_YN") == "Y") {
        						this.ds_coupon.setColumn(i, "PRC_TEXT", "완료");
        					} else {
        						this.ds_coupon.setColumn(i, "PRC_TEXT", "대기");
        					}
        				}
        			}
        		} else if(svcID == "resendCouponErrorList") {
        			this.alert('재전송이 완료되었습니다.');
        			this.btn_search00_onclick();
        		} else if(svcID == "deleteCouponErrorList") {
        			this.alert('삭제가 완료되었습니다.');
        			this.btn_search00_onclick();
        		}
        	}
        }

        this.fn_validationCheck = function(){
        	var date1 = this.div_search.DC_VLD_PRD_ST_DT.value;
        	var date2 = this.div_search.DC_VLD_PRD_ED_DT.value;
        	
        	if(date1 != "" && date2 != ""){
        		if(this.gfn_getDiffDay(date1,date2) < 0){
        			this.alert('조회기간을 확인하십시요.');
        			return false;
        		}
        	}else if(date1 != "" && date2 == ""){
        		this.alert('할인가간을 확인하십시요. ['+date1+' - '+date2+']');
        		return false;
        	}else if(date1 == "" && date2 != ""){
        		this.alert('할인기간을 확인하십시요. ['+date1+' - '+date2+']');
        		return false;
        	}
        	
        	if(this.div_search.CPN_KDC.index == 0){
        		this.alert('조회할 쿠폰종류를 선택 하세요.');	
        		return false;
        	}
        	
        	if(this.div_search.CPN_MED_C.index == 0){
        		this.alert('조회할 쿠폰매체를 선택 하세요.');	
        		return false;
        	}
        	
        	return true;
        }

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        }

        this.div_list_grd_main00_oncellclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var chk = this.ds_coupon.getColumn(e.row, "CHK");
        		
        		if (chk == "1") {
        			this.ds_coupon.setColumn(e.row, "CHK", "0");
        		} else {
        			this.ds_coupon.setColumn(e.row, "CHK", "1");
        		}
        	}
        }

        this.btn_resend_onclick = function(obj,e)
        {
        	var cnt = 0;
        	
        	for (var i = 0; i < this.ds_coupon.rowcount; i++) {
        		var chk = this.ds_coupon.getColumn(i, "CHK");
        		
        		if (chk == "1") {
        			cnt += 1;
        		}
        	}
        	
        	if (cnt < 1) {
        		alert("재전송할 쿠폰을 선택하세요.");
        		return false;
        	}
        	
        	if (application.confirm("선택된 쿠폰을 재전송하시겠습니까?") == false) {
        		return false;
        	}
        	
        	if (this.fn_validationCheck()) {
        		var param = "MNGT_NA_TRPL_C="+application.gv_glnCode
        				  + " CPN_KDC="+this.div_search.CPN_KDC.value
        				  + " NA_CPN_C="+this.div_search.NA_CPN_C.value			 // 물류센터코드 선택값
        				  + " CPN_WRSNM="+this.div_search.CPN_WRSNM.value						 // 적용일자 시작
        				  + " CPN_SC_NO="+this.div_search.CPN_SC_NO.value
        				  + " CPN_MED_C="+this.div_search.CPN_MED_C.value
        				  + " DC_VLD_PRD_ST_DT="+this.div_search.DC_VLD_PRD_ST_DT.value
        				  + " DC_VLD_PRD_ED_DT="+this.div_search.DC_VLD_PRD_ED_DT.value;
        		
        		var sSvcID        = "resendCouponErrorList";//통신아이디
        		var sURL          = "svc::rest/pds/coupon/resendCouponErrorList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_coupon=ds_coupon";//보내는데이터셋
        		var sOutDatasets  = "";
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callback";//콜백
        		var tranType 	  = "U"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	}
        }

        this.btn_delete_onclick = function(obj,e)
        {
        	var cnt = 0;
        	
        	for (var i = 0; i < this.ds_coupon.rowcount; i++) {
        		var chk = this.ds_coupon.getColumn(i, "CHK");
        		
        		if (chk == "1") {
        			cnt += 1;
        		}
        	}
        	
        	if (cnt < 1) {
        		alert("삭제할 쿠폰을 선택하세요.");
        		return false;
        	}
        	
        	if (application.confirm("선택된 쿠폰을 삭제하시겠습니까?") == false) {
        		return false;
        	}
        	
        	if (this.fn_validationCheck()) {
        		var param = "MNGT_NA_TRPL_C="+application.gv_glnCode
        				  + " CPN_KDC="+this.div_search.CPN_KDC.value
        				  + " NA_CPN_C="+this.div_search.NA_CPN_C.value			 // 물류센터코드 선택값
        				  + " CPN_WRSNM="+this.div_search.CPN_WRSNM.value						 // 적용일자 시작
        				  + " CPN_SC_NO="+this.div_search.CPN_SC_NO.value
        				  + " CPN_MED_C="+this.div_search.CPN_MED_C.value
        				  + " DC_VLD_PRD_ST_DT="+this.div_search.DC_VLD_PRD_ST_DT.value
        				  + " DC_VLD_PRD_ED_DT="+this.div_search.DC_VLD_PRD_ED_DT.value;
        		
        		var sSvcID        = "deleteCouponErrorList";//통신아이디
        		var sURL          = "svc::rest/pds/coupon/deleteCouponErrorList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_coupon=ds_coupon";//보내는데이터셋
        		var sOutDatasets  = "";
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callback";//콜백
        		var tranType 	  = "U"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	}
        }

        this.div_list_grd_main00_onheadclick = function(obj,e)
        {
        	if (e.cell == 0 && e.row == -1) {
        		this.gfn_setGridCheckAll(obj, e);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.div_search.Static01.addEventHandler("onclick", this.div_search_Static01_onclick, this);
            this.div_search.Static02.addEventHandler("onclick", this.div_search_Static02_onclick, this);
            this.div_search.DC_VLD_PRD_ST_DT.addEventHandler("oneditclick", this.div_search_cal_fsrg00_oneditclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.div_list.grd_main00.addEventHandler("oncellclick", this.div_list_grd_main00_oncellclick, this);
            this.div_list.grd_main00.addEventHandler("onheadclick", this.div_list_grd_main00_onheadclick, this);
            this.btn_resend.addEventHandler("onclick", this.btn_resend_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1612.xfdl");
        this.loadPreloadList();
       
    };
}
)();
