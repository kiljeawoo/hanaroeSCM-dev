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
                this.set_name("VAN_DS_SC_1310");
                this.set_titletext("물류출고실적 지사 관계 등록");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_RQR_NA_TRPL_C", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_master_data", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UP_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ROTS_FLEX_PR_APL_YN", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ROTS_FLEX_PR_APL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save00", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "29", null, null, "15", "0", this);
            obj.set_taborder("4");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main", "absolute", "0", "24", "400", null, null, "17", this.div_list);
            obj.set_taborder("33");
            obj.set_binddataset("ds_RQR_NA_TRPL_C");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"240\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"선택\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"거래처코드\"/><Cell col=\"3\" text=\"거래처명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECK_YN\"/><Cell col=\"1\" text=\"bind:NA_MBCO_DSC\"/><Cell col=\"2\" text=\"bind:NA_TRPL_C\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:CLNTNM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_pagename00", "absolute", "0", "-2", "500", "21", null, null, this.div_list);
            obj.set_taborder("32");
            obj.set_text("지사별 물류출고실적 조회권한 부여");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "418", "25", null, null, "0", "16", this.div_list);
            obj.set_taborder("34");
            obj.set_binddataset("ds_master_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"45\"/><Column size=\"143\"/><Column size=\"153\"/><Column size=\"126\"/><Column size=\"121\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"2\" text=\"하나로마트 거래처명\"/><Cell col=\"3\" text=\"하나로마트 거래처코드\"/><Cell col=\"4\" text=\"하나로마트 팀명\"/><Cell col=\"5\" text=\"하나로마트 팀코드\"/><Cell col=\"6\" text=\"경제통합본사거래처코드\"/><Cell col=\"7\" text=\"경제통합지사거래처코드\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_YN\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CSER_NA_TRPL_N\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:CSER_NA_TRPL_C\"/><Cell col=\"4\" text=\"bind:CSER_NA_TEAM_N\"/><Cell col=\"5\" text=\"bind:CSER_NA_TEAM_C\"/><Cell col=\"6\" text=\"bind:UP_NA_TRPL_C\"/><Cell col=\"7\" text=\"bind:NA_TRPL_C\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_YN2\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("sta_search_data", "absolute", null, "0", "21", "21", "134", null, this);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 317, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1310");
            		p.set_titletext("물류출고실적 지사 관계 등록");

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
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1323.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1323.xfdl", function() {
        //include "lib::comLib.xjs";

        var TRPL_C = application.gv_glnCode; 			//로그인 사업장코드
        var TRPL_NM = application.gv_companyName; 		//로그인 사업장명

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	this.addEventSingleCheckbox(this.div_list.grd_main); 	// 하나의 체크박스만 체크 가능(그리드)
        	this.search(); 		//권한사업장 조회
        }

        this.div_list_grd_detail_oncellclick = function(obj,e)
        {
        	var chkyn = true;
        	if (this.ds_master_data.getColumn(this.ds_master_data.rowposition, "CHECK_YN") == 0) {
        		chkyn = false;
        	}
        	if (e.cell == 1) {
        		this.update_chk(this, chkyn, this.ds_master_data.rowposition);
        	}
        }

        //오른쪽 사업장 체크박스 클릭 시 변경 사업장 입력
        this.update_chk = function(obj,result,row)
        {
        	var chkIndex = obj.getCheckIndex(); //왼쪽 그리드 체크 index

        	var na_trpl_c = obj.ds_RQR_NA_TRPL_C.getColumn(chkIndex, "NA_TRPL_C"); // 왼쪽 그리드에서 선택한 거래처코드
        	var clntnm = obj.ds_RQR_NA_TRPL_C.getColumn(chkIndex, "CLNTNM"); // 왼쪽 그리드에서 선택한 거래처명
        	var mna_trpl_c = obj.ds_master_data.getColumn(row, "SPLR"); // 오른쪽 그리드에서 선택한 거래처코드
        	var mclntnm = obj.ds_master_data.getColumn(row, "SPLRN"); // 오른쪽 그리드에서 선택한 거래처명

        	var fs_date = this.ds_master_data.getColumn(row, "FSRG_DTM");
        	var ls_date = this.ds_master_data.getColumn(row, "LSCHG_DTM");
        	
        	if (result == true) {
        		// 체크가 될때
        		if (chkIndex == undefined) {
        			obj.alert("변경할 공급처를 먼저 선택해주세요.");
        			obj.ds_master_data.setColumn(row, "CHECK_YN", "0");
        			return;
        		}
        		if (obj.ds_master_data.getColumn(row, "DELETE_YN") == "1") {
        			obj.alert("삭제 체크를 먼저 풀어주세요.");
        			obj.ds_master_data.setColumn(row, "CHECK_YN", "0");
        			return;
        		}
        		if (na_trpl_c == mna_trpl_c) {
        			obj.gfn_getMessage('alert', 'msg.van_ds_sc_1310.view.same.value');
        			obj.ds_master_data.setColumn(row, "CHECK_YN", "0");
        			return;
        		}
        		obj.ds_master_data.setColumn(row, "UPDATE_SPLR_NA_TRPL_C", clntnm); // 변경 할 거래처명을 입력한다.
        		obj.ds_master_data.setColumn(row, "UPDATE_SPLR_NA_TRPL_CODE", na_trpl_c);	// 변경 할 거래처코드를 입력한다.
        	} else if (result == false) {
        		// 체크가 풀릴때
        		obj.ds_master_data.setColumn(row, "UPDATE_SPLR_NA_TRPL_C", "");
        		obj.ds_master_data.setColumn(row, "UPDATE_SPLR_NA_TRPL_CODE", "");
        	}
        }

        this.delete_chk = function(obj,e)
        {
        	var dsMa = this.ds_master_data;
        	if (e.cell == 9) {
        		if (dsMa.getColumn(e.row, "DELETE_YN") == "0") {
        			if (this.gfn_nullToEmpty(dsMa.getColumn(e.row, "UPDATE_SPLR_NA_TRPL_C")) != "") {
        				this.alert('변경공급처가 존재할 경우 삭제할 수 없습니다.');
        				return;
        			}
        			if (this.gfn_nullToEmpty(dsMa.getColumn(e.row, "SPLRN")) == "") {
        				this.alert('삭제할 거래관계가 없습니다. 거래관계를 확인하십시요.');
        				return;
        			}
        			dsMa.setColumn(e.row, "DELETE_YN", "1");
        		} else {
        			dsMa.setColumn(e.row, "DELETE_YN", "0");
        		}
        	}
        }
        //조회
        this.search = function()
        {
        	var separator = this.sta_search_data.text;

        	var up_trpl = this.ds_RQR_NA_TRPL_C.getColumn(0, "NA_TRPL_C");
        	var upTrplC = application.gv_upGlnCode;

        	var params 		  = "separator="+separator
        						+" glncode="+application.gv_glnCode		//로그인 사업장
        						+" userId="+application.gv_userId
        						+" mbcoType="+application.gv_mbcoType	//로그인 정보
        						+" TRPL_C="+TRPL_C
        						+" UP_TRPL_C="+upTrplC;

        	trace(params);
        	var sSvcID = "";
        	var sOutDatasets = "";
        	var sInDatasets   = "";//보내는데이터셋
        	var sURL          = "svc::rest/pds/partner/Trade/retrieveHanaroTrades";// 호출할 서버 페이지 주소
        	// 화면생성 후 자동 실행
        	if (separator == "0") {
        		sSvcID  = "p_onload";
        		sOutDatasets  = "ds_RQR_NA_TRPL_C=ds_RQR_NA_TRPL_C";
        		sURL = "svc::rest/pds/partner/Trade/retrievePopData";
        	// 조회버튼 클릭시 실행
        	} else if (separator == "2") {
        		sSvcID	= "p_insert";
        		sInDatasets = "ds_master_data=ds_master_data:A"
        	}

        
        	var sArgument     = params
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        // 전체와 거래처를 비교하여 코드를 가져온다.
        this.getCode = function()
        {
        	var trplCode = '';

        	if (this.div_search.cbo_RQR_NA_TRPL_C.value != undefined) {// onload 이벤트땐 undefined
        		//전체
        		if (this.div_search.rdo_store_chk00.value == "1") {
        			var trpl_co = this.ds_RQR_NA_TRPL_C.rowcount;
        			for (var i = 0; i<trpl_co; i++) {
        				if ((i+1) < trpl_co) {
        					trplCode += this.ds_RQR_NA_TRPL_C.getColumn(i, "NA_TRPL_C")+", ";
        				} else if ((i+1) == trpl_co) {
        					trplCode += this.ds_RQR_NA_TRPL_C.getColumn(i, "NA_TRPL_C");
        				}
        			}
        		//한개
        		} else {
        			trplCode = this.div_search.cbo_RQR_NA_TRPL_C.value;
        		}
        	} else {
        		// 처음 로드 시 사업장을 가져오지 못하므로 기본 로그인 사업장을 가져온다.
        		trplCode = TRPL_C;
        	}
        	return trplCode;
        }

        //master 그리드 체크 후 변경공급처 적용
        this.chkCbox = function()
        {
        	if (fGetObj(multiFrmD.cbxdel, currow).checked) {
        		this.alert('삭제 체크하신 거래관계입니다. 삭제 체크를 먼저 해지하십시요.');
        		obj.checked = false;
        		return;
        	}
        }

        //조회버튼 클릭
        this.btn_search00_onclick = function(obj,e)
        {
        	this.sta_search_data.set_text("1"); //구분코드
        	var upTrplC = application.gv_upGlnCode;
        	var idx = this.getCheckIndex();
        	var params = "TRPL_C=" + this.ds_RQR_NA_TRPL_C.getColumn(idx, "NA_TRPL_C")+ " UP_TRPL_C="+upTrplC;
        	this.na_trplc_search(params);
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if (nCD < 0 && nCD > -999) {
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	} else {
        		if (svcID == "p_onload") {
        			this.sta_search_data.set_text(1);
        			var upTrplC = application.gv_upGlnCode;
        			this.ds_RQR_NA_TRPL_C.setColumn(0, "CHECK_YN", "1");
        			var params = "TRPL_C=" + this.ds_RQR_NA_TRPL_C.getColumn(0, "NA_TRPL_C")+ " UP_TRPL_C="+upTrplC;
        			this.na_trplc_search(params);
        		}

        		if (svcID == "p_insert" && nCD == 1) {
        			this.alert('거래관계 ['+this.div_search.sta_search_cc.text+']건이 정상 등록되었습니다.');
        			this.div_search.sta_search_data.set_text("1");
        			this.search();
        		} else if (svcID == "p_insert" && nCD == -999) {
        			this.alert(sMSG);
        		}

        		if (svcID == "na_trplc_search") {
        			trace("111");
        		}
        		
        		if (svcID == "na_trplc_insert") {
        			this.alert("저장되었습니다");
        		}
        	}
        }

        this.na_trplc_search = function(params) {

        	var sSvcID        = "na_trplc_search";//통신아이디
        	var sURL          = "svc::rest/pds/partner/Trade/selectNatrplCList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_master_data=ds_master_data";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "S"; // U:저장/삭제, S:조회
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        
        //수요처 팝업 조회
        this.div_search_btn_popup00_onclick = function(params)
        {
        	if (params == true) {
        		if ((this.gfn_nullToEmpty(this.div_search.edt_data02.value).length < 7 && this.gfn_nullToEmpty(this.div_search.edt_data02.value).length > 0) || (this.gfn_nullToEmpty(this.div_search.edt_data02.value).length > 13)) {
        			this.gfn_getMessage("alert", 'msg.van_ds_sc_1302.view.text.between');
        			return;
        		}
        		if (this.gfn_nullToEmpty(this.div_search.edt_data03.value).length == 1) {
        			this.gfn_getMessage("alert", 'msg.van_ds_sc_1302.view.input.bzplcnm');
        			return;
        		}
        	}

        	var code = this.div_search.edt_data02.value;
        	var textname = this.div_search.edt_data03.value;
        	var param = {
        				autoType:params, 
        				searchCode:code, 
        				searchText:textname
        	};
        	if (typeof params == "boolean") {
        		if (!this.searPopValue(param)) {return};
        	}

        	var oArg = {paramMode:"U", sepVal:'1310', autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("cer_trpl", "PDS.PARTNER::VAN_DS_SC_1302.xfdl", oArg, sOption, sPopupCallBack);
        }

        //팝업 닫은 후 실행
        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strVal != undefined) {
        		if (strId == "cer_trpl") {
        			this.div_search.edt_data02.set_value(strVal.split(",")[0]); //팝업 창 데이터 선택(사업장코드)
        			this.div_search.edt_data03.set_value(strVal.split(",")[3]);	//팝업 창 데이터 선택(사업장명)
        			this.div_search.sta_cser_team.set_text(strVal.split(",")[9]);
        		}
        	}
        }

        //왼쪽 그리드 체크 박스 index 값
        this.getCheckIndex = function()
        {
        	var ds = this.ds_RQR_NA_TRPL_C;
        	var selbox = "";
        	for (var i=0; i<ds.getRowCount();i++) {
        		selbox = ds.getColumn(i, "CHECK_YN");
        		if (selbox == "1") {
        			return i;
        		}
        	}
        }

        //오른쪽 삭제 체크 박스 index 값
        this.getDeleteCheckIndex = function()
        {
        	var mds = this.ds_master_data;
        	var delbox = "";
        	var delval = "";
        	for (var i=0; i<mds.getRowCount();i++) {
        		delbox = mds.getColumn(i, "DELETE_YN");
        		if (delbox == "1") {
        			delval += i+", ";
        		}
        	}
        	return delval.substring(0, delval.length-1);
        }

        //일괄적용 버튼
        this.div_list_btn_all_chk_onclick = function(obj,e)
        {
        	if (this.div_list.grd_detail.rowcount < 1)
        	{
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1310.view.allchk.notdata'));
        	}
        }

        //저장버튼 클릭
        this.btn_save00_onclick = function(obj,e)
        {
        	if (this.div_list.grd_detail.rowcount < 1) {
        		this.alert('조회를 먼저 해주세요.');
        		return;
        	}
        	this.search();
        }

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.div_search_edt_data02_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.div_search_edt_data03_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.btn_popup01_onclick = function(obj,e)
        {
        	var trplc = this.ds_RQR_NA_TRPL_C.getColumn(0, 'NA_TRPL_C');
        	var pop_trpl = this.div_search.cbo_RQR_NA_TRPL_C.value;
        	var pop_trplnm = this.div_search.cbo_RQR_NA_TRPL_C.text;

        	var oArg = {paramMode:"A", dsArg:this.ds_master_data, trpl_c:trplc , splrc:pop_trpl, splrnm:pop_trplnm};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("trnpel_search", "PDS.PARTNER::VAN_DS_SC_1311.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.div_list_grd_detail_onheadclick = function(obj,e)
        {
        	if (e.cell == 1) {
        		if (e.row == -1) {
        			for (var i=0; i<this.ds_master_data.rowcount; i++) {

        					this.ds_master_data.setColumn(i, "USE_YN", "1")
        			}
        		}
        	}
        }

        this.allchk = function(obj,result,row)
        {
        	var chkIndex = obj.getCheckIndex(); //왼쪽 그리드 체크 index

        	var na_trpl_c = obj.ds_RQR_NA_TRPL_C.getColumn(chkIndex, "NA_TRPL_C"); 	// 왼쪽 그리드에서 선택한 거래처코드
        	var clntnm = obj.ds_RQR_NA_TRPL_C.getColumn(chkIndex, "CLNTNM"); 		// 왼쪽 그리드에서 선택한 거래처명
        	var mclntnm = obj.ds_master_data.getColumn(row, "SPLRN"); 		// 오른쪽 그리드에서 선택한 거래처명

        	if (clntnm == mclntnm) {
        		obj.ds_master_data.setColumn(row, "CHECK_YN", "0");
        		return;
        	}

        	obj.ds_master_data.setColumn(row, "UPDATE_SPLR_NA_TRPL_C", clntnm);		// 변경 할 거래처명을 입력한다.
        	obj.ds_master_data.setColumn(row, "UPDATE_SPLR_NA_TRPL_CODE", na_trpl_c);	// 변경 할 거래처코드를 입력한다.
        	obj.ds_master_data.setColumn(row, "CHECK_YN", "1");
        }

        this.master_insert = function()
        {
        	var chkIdx = this.getCheckIndex();
        	var trpl_c = this.ds_RQR_NA_TRPL_C.getColumn(chkIdx, "NA_TRPL_C");

        	var params 		  =  " UP_NA_TRPL_C="+application.gv_glnCode		//로그인 사업장
        						+" TRPL_C="+trpl_c;

        	var sSvcID        = "na_trplc_insert";//통신아이디
        	var sURL          = "svc::rest/pds/partner/Trade/insertNatrplCList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_master_data=ds_master_data";//보내는데이터셋
        	var sOutDatasets  = "";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "S"; // U:저장/삭제, S:조
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save00.addEventHandler("onclick", this.master_insert, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.div_list.grd_detail.addEventHandler("oncellclick", this.div_list_grd_detail_oncellclick, this);
            this.div_list.grd_detail.addEventHandler("onheadclick", this.div_list_grd_detail_onheadclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1323.xfdl");
        this.loadPreloadList();
       
    };
}
)();
