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
                this.set_name("VAN_DS_SC_0100_P02");
                this.set_cssclass("frm_WF_PopupBg");
                this.set_titletext("상품 조회");
                this._setFormPosition(0,0,751,353);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_wrs", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_STD_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_PCS\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"PD_YY_AMN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PD_YY\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_BAS_QT\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_QT\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FCLT_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_FBID_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UP_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"UP_SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_searchType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"s_code\" type=\"string\" size=\"13\"/><Column id=\"s_name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"s_code\">name</Col><Col id=\"s_name\">상품명</Col></Row><Row><Col id=\"s_code\">code</Col><Col id=\"s_name\">상품코드</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "47", "58", "21", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "43", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("searchText", "absolute", "148", "10", "257", "21", null, null, this.div_search);
            obj.set_taborder("18");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("searchType", "absolute", "15", "10", "130", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_codecolumn("s_code");
            obj.set_datacolumn("s_name");
            obj.set_innerdataset("@ds_searchType");
            obj.set_text("상품명");
            obj.set_value("name");

            obj = new Grid("grd_wrs", "absolute", "17", "134", null, "163", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_wrs");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"135\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"상품코드\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"입수량\"/><Cell col=\"3\" text=\"면과세구분\"/><Cell col=\"4\" text=\"공병코드\"/><Cell col=\"5\" text=\"공상자코드\"/><Cell col=\"6\" text=\"규격\"/><Cell col=\"7\" text=\"단위\"/><Cell col=\"8\" text=\"수주단가\"/><Cell col=\"9\" text=\"수주부가세\"/><Cell col=\"10\" text=\"공병단가\"/><Cell col=\"11\" text=\"공상자단가\"/><Cell col=\"12\" text=\"발주금지여부\"/></Band><Band id=\"body\"><Cell text=\"bind:NA_WRS_C\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"2\" text=\"bind:BOXPE_AQZ\"/><Cell col=\"3\" text=\"bind:SIMP_CNM\"/><Cell col=\"4\" text=\"bind:VCBT_NA_WRS_C\"/><Cell col=\"5\" text=\"bind:VCBX_NA_WRS_C\"/><Cell col=\"6\" text=\"bind:WRS_STDNM\"/><Cell col=\"7\" text=\"bind:NA_WRS_STD_UNT_C\"/><Cell col=\"8\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_PCS\" mask=\"#,##0.99\"/><Cell col=\"9\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_VAT\" mask=\"#,##0\"/><Cell col=\"10\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_UPR\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBX_UPR\" mask=\"#,##0\"/><Cell col=\"12\" expr=\"expr:ODR_FBID_YN == '1' ? '발주금지' : '발주가능'\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", "329", "307", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "385", "307", "54", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "76", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "439", "76", "17", "67", null, null, this);
            obj.set_taborder("9");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "363", "336", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "363", "297", "91", "10", null, null, this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "363", "68", "91", "8", null, null, this);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "242", "32", "91", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "363", "119", "76", "15", null, null, this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "7", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("상품 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 751, 353, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("상품 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0100_P02.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0100_P02.xfdl", function() {
        //include "lib::comLib.xjs";

        var auto;//1 : auto
        var idx;//0, 1 : search gubunn
        var odrpl_na_trpl_n;
        var odrpl_na_trpl_c;
        var like;

        this.form_onload = function(obj,e)
        {
        	this.div_search.searchText.set_value('');
        	odrpl_na_trpl_c = this.getOwnerFrame().odrpl_na_trpl_c;
        	auto = this.getOwnerFrame().auto;
        	
        	idx = this.getOwnerFrame().idx;
        	odrpl_na_trpl_n = this.getOwnerFrame().odrpl_na_trpl_n;
        	
        	if(auto == "1"){
        		this.div_search.searchType.set_index(idx - 1);
        		this.div_search.searchText.set_value(this.getOwnerFrame().searchTxt);
        		this.fn_search("1");
        	}

        	this.div_search.searchText.setFocus();
        	this.div_search.searchText.setCaretPos(-1);
        	this.grd_wrs.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_ok_onclick = function(obj,e)
        {
        	this.fn_sendParent(this.ds_wrs.rowposition);
        }

        this.fn_sendParent = function(rowposition)
        {
        	if(this.ds_wrs.getColumn(rowposition,"ODR_FBID_YN") == "1"){
        		var msg = "";
        		msg = "상품코드[ " + this.ds_wrs.getColumn(rowposition,"NA_WRS_C") + "]는 발주금지된 상품입니다.";
        		alert(msg);
        		return false;
        	}
        	
        	var cser_ctr_tpc 	= this.gfn_nullToEmpty(this.getOwnerFrame().cser_ctr_tpc);
        	var up_trpl_c 		= this.gfn_nullToEmpty(this.ds_wrs.getColumn(rowposition,"UP_TRPL_C"));
        	var up_spypl_trpl_c	= this.gfn_nullToEmpty(this.ds_wrs.getColumn(rowposition,"UP_SPYPL_NA_TRPL_C"));
        	var na_usr_sys_kdc	= this.gfn_nullToEmpty(this.ds_wrs.getColumn(rowposition,"NA_USR_SYS_KDC"));
        	var spypl_na_trpl_n	= this.gfn_nullToEmpty(this.ds_wrs.getColumn(rowposition,"SPYPL_NA_TRPL_N"));
        	
        	/*
        		계약관계가 중앙계통관계이고 
        		발주처가 52, 54(물류)가 아닌경우
        		공급업체 비교
        	
        	alert(
        		"cser_ctr_tpc : " + cser_ctr_tpc + "\n"
        		 + "up_trpl_c : " + up_trpl_c + "\n"
        		+ "up_spypl_trpl_c : " + up_spypl_trpl_c + "\n"
        		+ "na_usr_sys_kdc : " + na_usr_sys_kdc + "\n"
        		+ "spypl_na_trpl_n : " + spypl_na_trpl_n + "\n"
        	);
        	*/
        	if(na_usr_sys_kdc != '52' && na_usr_sys_kdc != '54' && cser_ctr_tpc == '1' && (up_trpl_c != up_spypl_trpl_c) && this.getOwnerFrame().ddly_yn == '0'){
        		alert('계약처(' + spypl_na_trpl_n + '['+up_spypl_trpl_c+'])가 상이합니다.\n 구매본사담당바이어에게 연락바랍니다.');
        		return false;
        	}
        	
        	
        	this.objRtnArr = new Array(25); //팝업창 close시 전달할 값을 위한 배열 선언
        	this.objRtnArr[0] = this.ds_wrs.getColumn(rowposition,"NA_WRS_C");
        	this.objRtnArr[1] = this.gfn_replace(this.ds_wrs.getColumn(rowposition,"WRSNM"), ',', '');
        	this.objRtnArr[2] = this.ds_wrs.getColumn(rowposition,"BOXPE_AQZ");
        	this.objRtnArr[3] = this.gfn_replace(this.ds_wrs.getColumn(rowposition,"WRS_STDNM"), ',', '');
        	this.objRtnArr[4] = this.ds_wrs.getColumn(rowposition,"NA_WRS_STD_UNT_C");
        	this.objRtnArr[5] = this.ds_wrs.getColumn(rowposition,"ODR_PCS");
        	this.objRtnArr[6] = this.ds_wrs.getColumn(rowposition,"ODR_VAT");
        	this.objRtnArr[7] = this.ds_wrs.getColumn(rowposition,"VCBT_UPR");
        	this.objRtnArr[8] = this.ds_wrs.getColumn(rowposition,"VCBX_UPR");
        	this.objRtnArr[9] = this.ds_wrs.getColumn(rowposition,"TXT_DSC");//과세구분
        	this.objRtnArr[10] = this.ds_wrs.getColumn(rowposition,"PD_YY_AMN_YN");//생산년도관리여부
        	this.objRtnArr[11] = this.ds_wrs.getColumn(rowposition,"PD_YY");//생산년도
        	
        	this.objRtnArr[12] = this.ds_wrs.getColumn(rowposition,"NA_WRS_LCLC");//상품대분류
        	this.objRtnArr[13] = this.ds_wrs.getColumn(rowposition,"NA_WRS_MCLC");//상품중분류
        	this.objRtnArr[14] = this.ds_wrs.getColumn(rowposition,"NA_WRS_SCLC");//상품소분류
        	this.objRtnArr[15] = this.ds_wrs.getColumn(rowposition,"NA_WRS_DTCF_C");//상품상세분류
        	
        	
        	//수정내용
        	this.objRtnArr[16] = this.ds_wrs.getColumn(rowposition,"DDLY_ST_DT");//직송시작일자
        	this.objRtnArr[17] = this.ds_wrs.getColumn(rowposition,"DDLY_ED_DT");//직송종료일자
        	this.objRtnArr[18] = this.ds_wrs.getColumn(rowposition,"DDLY_BAS_QT");//직송기준수량
        	this.objRtnArr[19] = this.ds_wrs.getColumn(rowposition,"MIN_ODR_QT");//최소발주수량
        	this.objRtnArr[20] = this.ds_wrs.getColumn(rowposition,"MAX_ODR_QT");//최대발주수량
        	this.objRtnArr[21] = this.ds_wrs.getColumn(rowposition,"VCBT_NA_WRS_C");//공병상품코드
        	this.objRtnArr[22] = this.ds_wrs.getColumn(rowposition,"NA_WRS_UNT_C");
        	this.objRtnArr[23] = this.ds_wrs.getColumn(rowposition,"VCBT_QT");//공병수량
        	this.objRtnArr[24] = this.ds_wrs.getColumn(rowposition,"PHD_FCLT_C");//물류기능코드

        	trace(this.objRtnArr.toString());
        	this.close(this.objRtnArr.toString());
        }

        this.btn_search_onclick = function(obj,e)
        {
        	//this.ds_wrs.clearData();
        	this.fn_search("0");
        	
        	
        }

        this.fn_search = function(search){
        	if(this.fn_validationCheck(search)){
        		var searchType 		= this.gfn_nullToEmpty(this.div_search.searchType.value); //검색조건
        		var searchText 		= "'" + this.gfn_nullToEmpty(this.div_search.searchText.value)+ "'"; //검색어
        		var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.getOwnerFrame().odrpl_na_trpl_c);
        		var odrpl_na_team_c = this.gfn_nullToEmpty(this.getOwnerFrame().odrpl_na_team_c);
        		var prgr_c			= this.gfn_nullToEmpty(this.getOwnerFrame().prgr_c);
        		var ddly_yn 		= this.gfn_nullToEmpty(this.getOwnerFrame().ddly_yn);
        		var trplC			= this.gfn_nullToEmpty(this.getOwnerFrame().trplC);
        		var chkDate			= this.gfn_nullToEmpty(this.getOwnerFrame().chkDate);
        		var cser_ctr_tpc	= this.gfn_nullToEmpty(this.getOwnerFrame().cser_ctr_tpc);
        		var orginTrplS		= this.gfn_nullToEmpty(this.getOwnerFrame().orginTrplS);//직송
        		var like;	
        		
        		if(search == "0"){
        			like = "Y"
        		}
        		
        		var param =    "searchType="		+ searchType
        					 + " searchText="		+ searchText
        					 + " odrpl_na_trpl_c=" 	+ odrpl_na_trpl_c
        					 + " odrpl_na_team_c=" 	+ odrpl_na_team_c
        					 + " prgr_c="			+ prgr_c
        					 + " ddly_yn="			+ ddly_yn
        					 + " chkDate="			+ chkDate
        					 + " cser_ctr_tpc="		+ cser_ctr_tpc
        					 + " trplC="			+ trplC
        					 + " orginTrplS="		+ orginTrplS
        					 + " like="				+ like
        					 + " " + this.getOwnerFrame().params;//거래관계
        					
        		trace("##MASTER##PARAM##->"+param);	
        		
        		
        		var sSvcID        = "searchWRS";//통신아이디
        		var sURL          = "svc::rest/scm/order/searchWRS";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_wrs=ds_wrs";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);	
        		//this.ds_wrs.clearData();
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function(search){
        	
        	if(search == "1"){
        		if (this.gfn_length(this.div_search.searchText.value) < 2) {
        			this.alert('검색어는 2자이상이어야 합니다.');
        			return false;
        		}
        	}else{
        		if(this.div_search.searchType.index == 0 && this.gfn_length(this.div_search.searchText.value) < 2){
        			this.alert('상품명은 2자이상이어야 합니다.');
        			return false;
        		}
        		if(this.div_search.searchType.index == 1 && this.gfn_length(this.div_search.searchText.value) < 4){
        			this.alert('상품코드는 4자이상이어야 합니다.');
        			return false;
        		}
        	}
        	return true;
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0)
        	{
        		
        		if(ErrorCode  == -999){
        			this.alert(ErrorMsg);
        			
        		}else{
        			this.gfn_getMessage("alert", ErrorMsg);
        		}
        		
        		return;
        	}else{
        		if(svcID == "searchWRS"){
        			if(auto == "1" && this.ds_wrs.rowcount == 1){
        				this.fn_sendParent(0);	
        			}else if(this.ds_wrs.rowcount == 0){
        				if(this.div_search.searchType.index == 0){
        					alert("해당 조건 ["+this.div_search.searchText.value+"]의 등록된 상품이 없습니다. 조회 조건을 확인 후 다시 조회하시기 바랍니다.");
        				}else{
        					var msg =    "해당 상품은 등록되지 않은 상품입니다. 담당 바이어에게 문의하시기 바랍니다. \n" 
        								+"발주처    : " + odrpl_na_trpl_n +" [" + odrpl_na_trpl_c + "] \n"
        								+"상품코드 : " + this.div_search.searchText.value;
        					alert(msg);
        				}
        			}else{
        				this.grd_wrs.selectRow(0);
        				this.grd_wrs.setFocus();
        			}
        		}	
        	}
        }

        this.Static06_onclick = function(obj,e)
        {
        	
        }

        
        this.div_search_searchText_onkeydown = function(obj,e)
        {
        	if(e.keycode==13)
        	{
        		this.fn_search("0");
        	}
        }

        this.grd_wrs_oncellclick = function(obj,e)
        {
        	this.fn_sendParent(this.ds_wrs.rowposition);
        }

        this.grd_wrs_onkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		this.grd_wrs_oncellclick();
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.searchText.addEventHandler("onkeydown", this.div_search_searchText_onkeydown, this);
            this.grd_wrs.addEventHandler("oncellclick", this.grd_wrs_oncellclick, this);
            this.grd_wrs.addEventHandler("onkeydown", this.grd_wrs_onkeydown, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0100_P02.xfdl");

       
    };
}
)();
