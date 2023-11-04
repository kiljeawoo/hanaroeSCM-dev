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
                this.set_name("VAN_DS_SC_0381");
                this.set_titletext("수산부 결품내역관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLA_QT\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTAGE_QT\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_WRS_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTAGE_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTAGE_REASON\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_odrpl_na_team_c", this);
            obj._setContents("<ColumnInfo><Column id=\"CSER_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_list", "absolute", "0", "103", null, null, "15", "20", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd", "absolute", "0", "36", null, null, "0", "-1", this.div_list);
            obj.set_taborder("31");
            obj.set_binddataset("ds_data");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"180\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"300\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"35\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"발주처\"/><Cell col=\"3\" rowspan=\"2\" text=\"배송예정일자\"/><Cell col=\"4\" rowspan=\"2\" text=\"상품코드\"/><Cell col=\"5\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"6\" rowspan=\"2\" text=\"수주량\"/><Cell col=\"7\" rowspan=\"2\" text=\"배송예정량\"/><Cell col=\"8\" rowspan=\"2\" text=\"결품수량\"/><Cell col=\"9\" rowspan=\"2\" text=\"납품단가\"/><Cell col=\"10\" rowspan=\"2\" text=\"결품금액\"/><Cell col=\"11\" rowspan=\"2\" text=\"비고(배송처)\"/><Cell col=\"12\" rowspan=\"2\" text=\"비고(결품사유)\"/><Cell row=\"1\" col=\"1\" text=\"발주처\"/><Cell row=\"1\" col=\"2\" text=\"팀\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:ODRPL_NA_TRPL_NM\"/><Cell col=\"2\" text=\"bind:ODRPL_NA_TEAM_NM\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:DVY_PLA_DT\" mask=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"bind:NA_WRS_C\"/><Cell col=\"5\" text=\"bind:WRSNM\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:ODR_QT\" mask=\"###,###\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:DVY_PLA_QT\" mask=\"###,###\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:SHORTAGE_QT\" mask=\"###,###\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:DVY_WRS_UPR\" mask=\"###,###\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:SHORTAGE_AMT\" mask=\"###,###\"/><Cell col=\"11\" text=\"bind:RMK_CNTN\"/><Cell col=\"12\" text=\"bind:SHORTAGE_REASON\" wordwrap=\"char\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" style=\"align:center;\" text=\"합계\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:dataset.getSum('ODR_QT')\" mask=\"###,###\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:dataset.getSum('DVY_PLA_QT')\" mask=\"###,###\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:dataset.getSum('SHORTAGE_QT')\" mask=\"###,###\"/><Cell col=\"9\" displaytype=\"number\" expr=\"expr:dataset.getSum('DVY_AM')\" mask=\"###,###\"/><Cell col=\"10\" displaytype=\"number\" expr=\"expr:dataset.getSum('SHORTAGE_AMT')\" mask=\"###,###\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "331", "0", null, "12", "330", null, this.div_list);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "379", "21", "158", null, this);
            obj.set_taborder("35");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "74", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "41", "89", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("배송예정일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static131", "absolute", "222", "41", "10", "21", null, null, this.div_search);
            obj.set_taborder("54");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("dvy_from", "absolute", "121", "41", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("55");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("dvy_to", "absolute", "232", "41", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("56");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static05", "absolute", "15", "10", "87", "21", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_odrpl_na_trpl_c", "absolute", "121", "10", "200", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_odrpl_na_trpl_c_innerdataset = new Dataset("cbo_odrpl_na_trpl_c_innerdataset", this.div_search.cbo_odrpl_na_trpl_c);
            cbo_odrpl_na_trpl_c_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\"> - 선택 - </Col></Row><Row><Col id=\"codecolumn\">8808983326641</Col><Col id=\"datacolumn\">(주)농협유통 수산사업부(본부)</Col></Row><Row><Col id=\"codecolumn\">8808983326634</Col><Col id=\"datacolumn\">(주)농협유통 수산사업부(영남)</Col></Row></Rows>");
            obj.set_innerdataset(cbo_odrpl_na_trpl_c_innerdataset);
            obj.set_taborder("72");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("");
            obj = new Combo("cbo_odrpl_na_team_c", "absolute", "505", "10", "105", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_odrpl_na_team_c_innerdataset = new Dataset("cbo_odrpl_na_team_c_innerdataset", this.div_search.cbo_odrpl_na_team_c);
            cbo_odrpl_na_team_c_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">수산신선팀</Col></Row><Row><Col id=\"codecolumn\">16</Col><Col id=\"datacolumn\">수산건어팀</Col></Row><Row><Col id=\"codecolumn\">17</Col><Col id=\"datacolumn\">수산식자재팀</Col></Row></Rows>");
            obj.set_innerdataset(cbo_odrpl_na_team_c_innerdataset);
            obj.set_taborder("73");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj = new Static("Static01", "absolute", "429", "10", "77", "21", null, null, this.div_search);
            obj.set_taborder("74");
            obj.set_text("발주처팀");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "130", null, this);
            obj.set_taborder("21");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "53", "21", "75", null, this);
            obj.set_taborder("34");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Group");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "36", "408", null, this);
            obj.set_taborder("36");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "1", "15", "490", null, null, this);
            obj.set_taborder("37");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 978, 800, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 74, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("수산부 결품내역관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0381.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0381.xfdl", function() {
        //include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        }

        /* Form Init*/
        this.form_init = function(obj,e)
        {
        	//권한사업장 표시 여부(1:본사)
        	if(application.gv_mbcoType != '1'){
        		this.Div00.visible = false;
        	}	
        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {
        	this.div_search.dvy_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"), 3));	
        	this.div_search.dvy_to.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"), -3));
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	if (this.gfn_getDiffDay(this.div_search.dvy_from.value,this.div_search.dvy_to.value) < 0) {
        		//조회 시작일과 종료일을 다시 확인해 주세요
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	} else {
        		if (this.gfn_getDiffDay(this.div_search.dvy_from.value,this.div_search.dvy_to.value) > 31) {
        			//기간을 31일 이내로 선택해 주세요
        			this.gfn_getMessage("alert", "validation.message.selectDateIn31Day");
        			return false;
        		}
        	}
        	
        	if (this.gfn_isNull(this.div_search.cbo_odrpl_na_trpl_c.value)) {
        		this.alert("발주처를 선택하셔야 합니다.");
        		this.div_search.cbo_odrpl_na_trpl_c.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.div_search.cbo_odrpl_na_team_c.value)) {
        		this.alert("발주처팀을 선택하셔야 합니다.");
        		this.div_search.cbo_odrpl_na_team_c.setFocus();
        		return false;
        	}
        	
        	return true;
        }

        /* search */
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_data.clearData();
        	
        	var spyplNaTrplC = this.getTrplCode();
        	var dvyaaNaTrplC = this.div_search.cbo_odrpl_na_trpl_c.value;
        	var dvyaaNaTeamC = this.div_search.cbo_odrpl_na_team_c.value;
        	var dvyFrom = this.div_search.dvy_from.value;
        	var dvyTo = this.div_search.dvy_to.value;
        	
        	if (this.fn_validationCheck()) {
        		var sSvcID        = "retrieveShortageReasonList";//통신아이디
        		var sURL          = "svc::rest/delivery/sea/retrieveShortageReasonList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_data=ds_data";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = "spyplNaTrplC=" + spyplNaTrplC + " dvyaaNaTrplC=" + dvyaaNaTrplC + " dvyaaNaTeamC=" + dvyaaNaTeamC + " dvyFrom=" + dvyFrom + " dvyTo=" + dvyTo;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.cbo_odrpl_na_trpl_c_onitemchanged = function(obj,e)
        {
        	if (this.gfn_isNull(this.div_search.cbo_odrpl_na_trpl_c.value)) {
        		this.div_search.cbo_odrpl_na_team_c.set_enable(false);
        		this.div_search.cbo_odrpl_na_team_c.set_value(null);
        	} else {
        		this.div_search.cbo_odrpl_na_team_c.set_enable(true);
        	}
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg) {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	} else {
        		if (svcID == "retrieveShortageReasonList") {
        			if (this.ds_data.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			} else {
        				
        			}
        		}
        	}
        }

        // this.btn_popup_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        // {
        // 	var trplC = this.getTrplCode();//권한사업장
        // 	var oArg = {form_id:"VAN_DS_SC_0302", trplC:trplC, DSTR_TER_YN:'N'};
        // 	var sOption = "autosize=true,title=false";
        // 	var sPopupCallBack = "fn_popupAfter";    
        // 	this.gfn_openPopup("POPUP_TRNREL_ODRPL","POPUP::POPUP_TRNREL_ODRPL.xfdl",oArg,sOption,sPopupCallBack);
        // }

        // this.msk_odrpl_na_trpl_c_onkeydown = function(obj:MaskEdit, e:nexacro.KeyEventInfo)
        // {
        // 	if(e.keycode == '13'){
        // 		var trplO = this.gfn_nullToEmpty(this.div_search.msk_odrpl_na_trpl_c.value);
        // 		if(this.gfn_length(trplO) < 6){
        // 			alert("발주처 코드["+trplO+"] 6자리 이상 입력해 주세요");
        // 			return false;
        // 		}
        // 		
        // 		var idx = "0";
        // 
        // 		//발주처코드 6자리일 경우 강제로 8808983을 붙혀준다.
        // 		if(trplO.length == 6){
        // 			trplO = '8808983' + trplO;
        // 		}
        // 		
        // 		var trplC = this.getTrplCode();//권한사업장
        // 		var oArg = {form_id:"VAN_DS_SC_0381", trplC:trplC, idx:idx, auto:"1", trplO:trplO};
        // 		var sOption = "autosize=true,title=false";
        // 		var sPopupCallBack = "fn_popupAfter";    
        // 		this.gfn_openPopup("POPUP_TRNREL_ODRPL","POPUP::POPUP_TRNREL_ODRPL.xfdl",oArg,sOption,sPopupCallBack);
        // 	}
        // }

        // this.fn_popupAfter = function(strId, strVal)
        // {
        // 	trace(" searchWRS strId : " + strId + " strVal : " + strVal);
        // 	var paramsArr = '';
        // 	if(strVal){
        // 		paramsArr = strVal.split(",");
        // 	}else{
        // 		return;
        // 	}	
        // 
        // 	if(strId == "POPUP_TRNREL_ODRPL"){
        // 		var valueArr = strVal.split(",");
        // 		
        // 		this.div_search.msk_odrpl_na_trpl_c.set_value(valueArr[0]);
        // 	}
        // }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_list.grd.addEventHandler("oncellclick", this.div_list_grd_oncellclick, this);
            this.div_search.cbo_odrpl_na_trpl_c.addEventHandler("onitemchanged", this.cbo_odrpl_na_trpl_c_onitemchanged, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0381.xfdl");
        this.loadPreloadList();
       
    };
}
)();
