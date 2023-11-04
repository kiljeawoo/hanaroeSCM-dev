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
                this.set_name("OMG_DS_SC_2110");
                this.set_classname("pattern_01");
                this.set_titletext("계약서일괄서명");
                this._setFormPosition(0,0,993,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rsclist", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_APD_CHG_CHK_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"STYL_AMM_CHG_CHK_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_APD_CHG_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"STYL_AMM_CHG_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_DRUP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BF_CTR_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sts", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrwKd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "117", "15", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "16", "10", "118", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("메인계약서종류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_naTrplC", "absolute", "527", "36", "211", "21", null, null, this.div_search);
            obj.set_taborder("49");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_st_dt", "absolute", "527", "61", "211", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static02", "absolute", "414", "10", "118", "21", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_mnCtrwKd", "absolute", "141", "10", "211", "21", null, null, this.div_search);
            obj.set_taborder("62");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_sts", "absolute", "527", "10", "211", "21", null, null, this.div_search);
            obj.set_taborder("63");
            obj.set_url("common::multiCheckCombo.xfdl");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0", "0", "414", "10", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "242", "66", "10", "21", null, null, this.div_search);
            obj.set_taborder("67");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "141", "61", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("68");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "252", "61", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("69");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Combo("cbo_contDay", "absolute", "15", "61", "106", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_contDay_innerdataset = new Dataset("cbo_contDay_innerdataset", this.div_search.cbo_contDay);
            cbo_contDay_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">계약시작일</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약만료일</Col></Row></Rows>");
            obj.set_innerdataset(cbo_contDay_innerdataset);
            obj.set_taborder("70");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj.set_text("계약시작일");
            obj.set_value("0");
            obj = new Static("Static01", "absolute", "134", "56", "103", "5", null, null, this.div_search);
            obj.set_taborder("72");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "133", "82", "103", "10", null, null, this.div_search);
            obj.set_taborder("73");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "414", "61", "118", "21", null, null, this.div_search);
            obj.set_taborder("74");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "414", "36", "118", "21", null, null, this.div_search);
            obj.set_taborder("75");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "16", "36", "118", "21", null, null, this.div_search);
            obj.set_taborder("76");
            obj.set_text("계약자 상호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_mtalNm", "absolute", "141", "36", "211", "21", null, null, this.div_search);
            obj.set_taborder("77");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_DT_YN", "absolute", "527", "85", "11.68%", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_DT_YN_innerdataset = new Dataset("rdo_DT_YN_innerdataset", this.div_search.rdo_DT_YN);
            rdo_DT_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_DT_YN_innerdataset);
            obj.set_taborder("78");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Static("Static10", "absolute", "414", "85", "113", "21", null, null, this.div_search);
            obj.set_taborder("79");
            obj.set_text("바이어 미선택");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_userId", "absolute", "141", "86", "210", "21", null, null, this.div_search);
            obj.set_taborder("80");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "15", "86", "105", "21", null, null, this.div_search);
            obj.set_taborder("81");
            obj.set_text("바이어");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "133", "106", "103", "10", null, null, this.div_search);
            obj.set_taborder("82");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "922", "21", "56", "8", null, null, this);
            obj.set_taborder("56");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "978", "0", "15", "490", null, null, this);
            obj.set_taborder("57");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "145", null, null, "15", "0", this);
            obj.set_taborder("69");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "-93", "228", "21", null, null, this.div_list);
            obj.set_taborder("2");
            obj.set_text("상담 신청 조회");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_rsclist", "absolute", "0", "40", null, null, "0", "15", this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_rsclist");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"32\"/><Column size=\"86\"/><Column size=\"33\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"131\"/><Column size=\"249\"/><Column size=\"162\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"197\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" colspan=\"2\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"첨부파일변경\"/></Cell><Cell col=\"3\" colspan=\"2\" displaytype=\"text\" edittype=\"checkbox\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"checkbox\" text=\"계약서문구변경\"/></Cell><Cell col=\"5\" text=\"계약서종류\"/><Cell col=\"6\" text=\"거래처코드\"/><Cell col=\"7\" text=\"계약자상호\"/><Cell col=\"8\" text=\"계약기간\"/><Cell col=\"9\" text=\"계약일자\"/><Cell col=\"10\" text=\"상태\"/><Cell col=\"11\" text=\"계약서 변경 사항\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" colspan=\"2\" displaytype=\"expr:DCM_APD_CHG_CHK&gt;'0'?'checkbox':'none'\" edittype=\"expr:DCM_APD_CHG_CHK&gt;'0'?'checkbox':'none'\" text=\"bind:DCM_APD_CHG_CHK_TEMP\"/><Cell col=\"3\" colspan=\"2\" displaytype=\"expr:STYL_AMM_CHG_CHK&gt;'0'?'checkbox':'none'\" edittype=\"expr:STYL_AMM_CHG_CHK&gt;'0'?'checkbox':'none'\" text=\"bind:STYL_AMM_CHG_CHK_TEMP\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:MN_CTRW_KD_NM\" combodataset=\"ds_contstyle\" combocodecol=\"code\" combodatacol=\"style\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:NA_TRPL_C\"/><Cell col=\"7\" text=\"bind:MTALNM\"/><Cell col=\"8\" text=\"bind:CTR_DT\" mask=\"@@@@-@@-@@~@@@@-@@-@@\" calendardisplay=\"display\"/><Cell col=\"9\" text=\"bind:CTRW_DRUP_DT\" mask=\"@@@@-@@-@@\"/><Cell col=\"10\" text=\"bind:STS_NM\"/><Cell col=\"11\" text=\"bind:CHG_NM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btu_div", "absolute", "46.83%", "0", "63", "12", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static47", "absolute", "0", "13", "238", "21", null, null, this.div_list);
            obj.set_taborder("14");
            obj.set_text("전자계약조회");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("79");
            obj.set_url("common::location.xfdl");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "142", "61", "103", "5", null, null, this);
            obj.set_taborder("82");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "161", null, this);
            obj.set_taborder("84");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "1024", "32", "125", "14", null, null, this);
            obj.set_taborder("85");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("86");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_history", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("87");
            obj.set_text("이력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 117, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("73");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 393, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("69");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("계약서일괄서명");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::multiCheckCombo.xfdl");
            this._addPreloadList("fdl", "common::multiCheckCombo.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2230.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2230.xfdl", function() {
        //include "lib::comLib.xjs";

        this.chkDay;

        this.fv_sts = ""; //전자 계약서 상태값
        this.fv_mnCtrwKd = ""; //전자 계약서 종류
        this.fv_mnCtrwKdTemp = ""; //전자 계약서 종류
        this.fv_mnCtrwKdNm = ""; //전자 계약서 종류
        this.fv_mnCtrwKdNmTemp = ""; //전자 계약서 종류

        
        /* Form Load */
        this.OMG_DS_SC_2120_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	
        	   var param = [  
               {code:"ELT_STS"           ,     dsName:"ds_sts", selecttype:""},
               {code:"MN_CTRW_KD"        ,     dsName:"ds_mnCtrwKd", selecttype:""}
            ];

           this.gfn_setPortalCommonCode(param); 
        	
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.chkDay = this.gfn_minusMonth(toDay, 2);
        	
        	this.div_search.cal_from.set_value(this.chkDay);
        	this.div_search.cal_to.set_value(toDay);
        	//this.div_search.cal_st_dt.set_value(toDay);
        	this.div_search.edt_userId.set_value(application.gv_userId);
        	this.div_search.rdo_DT_YN.set_value("Y");
        	
        	this.div_list.grd_rsclist.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {

        //상태값  정의 -> 사용하는 상태값만 정의
           for(var i = this.ds_sts.rowcount-1 ; 0 <= i ; i--){		

        		if(this.ds_sts.getColumn(i, "SIMP_C") == "6"){
        			this.ds_sts.deleteRow(i);
        		}
        		
        		if(this.ds_sts.getColumn(i, "SIMP_C") == "7"){
        				this.ds_sts.deleteRow(i);
        		}
        		
        		if(this.ds_sts.getColumn(i, "SIMP_C") == "5"){
        			this.ds_sts.deleteRow(i);
        		}
        	}	

        
        	this.div_search.div_sts.setFunctionName("fn_afterCallSts"); //후처리함수 선언
        	
        	//선택사항. 선언안하면 기본으로 설정됨. Width:140, displayrowcount:5
        	this.div_search.div_sts._setWidth(180);                  //가로사이즈 설정(단, 140보다 작으면 기본사이즈인 140으로 설정됨)
        	this.div_search.div_sts._setDisplayCount(9);            //보여줄 Row수. Combo의 displayrowcount와 동일.
        	
        	this.div_search.div_sts._binddataset(this.ds_sts,"SIMP_C","SIMP_CNM");

        	this.div_search.div_mnCtrwKd.setFunctionName("fn_afterCall"); //후처리함수 선언
        	
        	//선택사항. 선언안하면 기본으로 설정됨. Width:140, displayrowcount:5
        	this.div_search.div_mnCtrwKd._setWidth(250);                  //가로사이즈 설정(단, 140보다 작으면 기본사이즈인 140으로 설정됨)
        	this.div_search.div_mnCtrwKd._setDisplayCount(9);            //보여줄 Row수. Combo의 displayrowcount와 동일.
        	
        	this.div_search.div_mnCtrwKd._binddataset(this.ds_mnCtrwKd,"SIMP_C","SIMP_CNM");

        
        	//콤보에 최상단Row보이도록 설정
        	//this.Combo01.set_index(0);
        }

        //멀티 콤보  - > 상태값
        this.fn_afterCallSts = function (sVal)
        {
        	for(var i = 0 ; i < sVal.rowcount; i++){		
        	
        		if(i == 0 ){
        			this.fv_sts = sVal.getColumn(i, "SIMP_C") ;
        		}else{
        			this.fv_sts += "."+sVal.getColumn(i, "SIMP_C") ;
        		}
        	}
        	
        }	

        //멀티 콤보  - > 메인 계약서 종류
        this.fn_afterCall = function (sVal)
        {
        		
        	for(var i = 0 ; i < sVal.rowcount; i++){		
        	
        		if(i == 0 ){
        			this.fv_mnCtrwKd = sVal.getColumn(i, "SIMP_C");
        			this.fv_mnCtrwKdNm = sVal.getColumn(i, "SIMP_CNM");
        		}else{
        			this.fv_mnCtrwKd += "."+sVal.getColumn(i, "SIMP_C") ;
        			this.fv_mnCtrwKdNm += ","+sVal.getColumn(i, "SIMP_CNM") ;
        		}
        	}
        	
        	
        }

        

        /*전자계약 조회*/
        this.btn_search_onclick = function(obj,e)
        {

        	this.search();		
        	
        }
        /*조회*/
        this.search = function(){

        
        	if(this.fn_validationCheck()){

        		var cboContDay = this.gfn_nullToEmpty(this.div_search.cbo_contDay.value);  //계약시작0, 만료일1
        		var calFrom    = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        		var calTo      = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        		var calStDt    = this.gfn_nullToEmpty(this.div_search.cal_st_dt.value);  //계약작성일
        		//var mnCtrwKd   = this.gfn_nullToEmpty(this.div_search.div_mnCtrwKd.value);  //계약서 종류
        		var edtNaTrplC = this.gfn_nullToEmpty(this.div_search.edt_naTrplC.value);  // 거래처코드
        		var edtMtalNm = this.gfn_nullToEmpty(this.div_search.edt_mtalNm.value);  // 거래처코드
        		
        		param = "cbo_contDay="+cboContDay+
        				" cal_from="+calFrom+
        				" cal_to="+calTo+
        				" cal_st_dt="+calStDt+
        				" mn_Ctrw_Kd="+this.fv_mnCtrwKd+
        				" edt_naTrplC="+edtNaTrplC+
        				" edt_mtalNm="+edtMtalNm
        				;
        				
        					if(this.div_search.rdo_DT_YN.value == "Y" ){
        					param =param + " buyerEno="+this.div_search.edt_userId.value ;
        				}else{
        					param =param + " buyerEno=" ;
        				
        				}
        				
        				
        		var sSvcID        = "search";//통신아이디
        		var sURL          = "svc::rest/ct/eltctrwchg/retrieveCtrwChgObjList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_rsclist=ds_rsclist";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		
        	}	
        			
        	this.fv_mnCtrwKdNmTemp = this.fv_mnCtrwKdNm ;
        	this.fv_mnCtrwKdTemp = this.fv_mnCtrwKd;
        			
        	this.div_search.div_mnCtrwKd._clearValue();
        	this.fv_mnCtrwKd = "";
        	this.fv_mnCtrwKdNm = "";		
        			

        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "search"){
        			if(this.ds_rsclist.rowcount == 0){
        			
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}

        		}else if(svcID == "update"){
        			this.gfn_getMessage("alert", "result.message.save.success");		
        			this.reload();
        			

        		}
        	}

        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	var calFrom = this.div_search.cal_from.value;
        	var calTo = this.div_search.cal_to.value;
        	if(this.gfn_isNull(calFrom)){
        		this.gfn_getMessage("alert", "validation.message.fromDate.no.data");
        		return false;
        	}
        	
        	if(this.gfn_isNull(calTo)){
        		this.gfn_getMessage("alert", "validation.message.toDate.no.data");
        		return false;
        	}
        	
        	if(this.gfn_getDiffDay(calFrom, calTo) < 0){
        		this.gfn_getMessage("alert", "validation.message.fromData.toDate.confirm");
        		return false;
        	}
        	
        	return true;
        }

        this.fn_popupAfter = function(strId,strVal)
        {

        }

        this.fn_afterFormOnload = function()
        {

        }

        this.btn_history_onclick = function(obj,e)
        {
        	
        	var elt_ctrw_no;
        	if(this.ds_rsclist.rowcount > 0){
        		for(var i = 0; i < this.ds_rsclist.rowcount; i++){
        			if(this.ds_rsclist.getColumn(i, "ISCHECKED") == 1)
        			{
        				elt_ctrw_no = this.ds_rsclist.getColumn(i, "ELT_CTRW_NO");
        				//alert("elt_ctrw_no==>"+elt_ctrw_no);
        				if(!this.gfn_isNull(elt_ctrw_no)){
        					var oArg = {paramMode:"S", dsArg:this.ds_rsclist, elt_ctrw_no:elt_ctrw_no};
        					var sOption = "autosize=true,title=true";
        					var sPopupCallBack = "fn_popupAfter";       
        					this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2114.xfdl",oArg,sOption,sPopupCallBack);
        				}
        			}
        		}
        		if(this.gfn_isNull(cslt_rq_no)){
        			alert("elt_ctrw_no==>"+elt_ctrw_no);
        			alert("이력을 조회할 상담신청내역을 체크 하세요");
        		}
        	}else{
        		alert("상담신청내역을 조회 하세요");
        		return false;
        	}
        	
        }

        this.div_rsclist_oncellclick = function(obj,e)
        {
        	var elt_ctrw_no = "";

        	if(e.cell==0){
        		this.gfn_singleChk(obj,e);	
        	}else {

        		CtrwChg = 0;
        			elt_ctrw_no = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "ELT_CTRW_NO") ; 
        			chg_sqno = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "CHG_SQNO") ; 
        			var oArg = {paramMode:"U", dsArg:this.ds_rsclist, ELT_CTRW_NO:elt_ctrw_no ,CHG_SQNO:chg_sqno ,CTRW_CHG:CtrwChg };
        			var sOption = "autosize=true,title=true";
        			var sPopupCallBack = "fn_popupAfter";       
        			this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2111.xfdl",oArg,sOption,sPopupCallBack);
        			
        	
        	
        	}
        // 	else if(e.cell==7){
        // 
        // 		CtrwChg = 0;
        // 	    
        // 	    if(this.gfn_isNull(this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "BF_CTR_NO")) == false  ){
        // 
        // 			elt_ctrw_no = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "BF_CTR_NO") ; 
        // 			var oArg = {paramMode:"U", dsArg:this.ds_rsclist, ELT_CTRW_NO:elt_ctrw_no ,CTRW_CHG:CtrwChg };
        // 			var sOption = "autosize=true,title=true";
        // 			var sPopupCallBack = "fn_popupAfter";       
        // 			this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2111_01.xfdl",oArg,sOption,sPopupCallBack);
        // 			
        // 		}else{
        // 			alert("개별 변경 계약서가 없습니다.   "  ) ;
        // 	    }
        // 	
        // 	}else{
        // 	
        // 		if(this.gfn_isNull(this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "BF_CTR_NO")) == true  ){
        // 			elt_ctrw_no = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "ELT_CTRW_NO");
        // 			//재검토 요청상태일때  = 1
        // 			//전자 계약변경 대상 = 2
        // 			var CtrwChg = "2";
        // 			
        // 			var oArg = {paramMode:"U", dsArg:this.ds_rsclist, ELT_CTRW_NO:elt_ctrw_no ,CTRW_CHG:CtrwChg };
        // 			var sOption = "autosize=true,title=true";
        // 			var sPopupCallBack = "fn_popupAfter";       
        // 			this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2111_01.xfdl",oArg,sOption,sPopupCallBack);
        // 		}else{
        // 			alert("개별 변경 계약서가 있을 경우 계약서 개별 변경이 불가능합니다.  "  ) ;
        // 		}
        // 	}
        	
        	
        }

        
        this.fn_popupAfter = function(){

        	this.search();

        }

        this.div_list_btu_div_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        
        this.btn_excel_onclick = function(obj,e)
        {
        	this.fn_excel();
        }
        this.fn_excel = function(){

        	var toDay = this.gfn_today("yyyyMMdd");
        	var fileName = "계약 일괄 변경 대상조회"+toDay+".xls";//엑셀 파일 이름
        				
        	var cboContDay = this.gfn_nullToEmpty(this.div_search.cbo_contDay.value);  //계약시작0, 만료일1
        	var calFrom    = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        	var calTo      = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        	var calStDt    = this.gfn_nullToEmpty(this.div_search.cal_st_dt.value);  //계약작성일
        	var mnCtrwKd   = this.gfn_nullToEmpty(this.div_search.div_mnCtrwKd.value);  //계약서 종류
        	var edtNaTrplC = this.gfn_nullToEmpty(this.div_search.edt_naTrplC.value);  // 거래처코드
        	var edtMtalNm = this.gfn_nullToEmpty(this.div_search.edt_mtalNm.value);  // 거래처코드
        	
        	param = "cbo_contDay="+cboContDay+
        			"&cal_from="+calFrom+
        			"&cal_to="+calTo+
        			"&cal_st_dt="+calStDt+
        			"&mn_Ctrw_Kd="+this.fv_mnCtrwKdTemp+
        			"&edt_naTrplC="+edtNaTrplC+
        			"&edt_mtalNm="+edtMtalNm+
        			"&fv_mnCtrwKdNm="+this.fv_mnCtrwKdNmTemp+
        			"&fileName="+fileName;
        			;

        	param = encodeURI(encodeURI(param));
        	//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/downloadExcelCtrwChgObjList?"+param);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelCtrwChgObjList?"+param, this);
        	
        }

        this.OMG_DS_SC_2110_onkeydown = function(obj,e)
        {
        	if (e.keycode==13  ){
        		this.btn_search.click();
        	}
        }
        	 /*체크박스선택시 이벤트*/
        this.div_list_grd_rsclist_onheadclick = function(obj,e)
        {

        		/*대메뉴선택시*/	
        	if(e.col ==1){		
        		
        		strVal =  this.div_list.grd_rsclist.getSubCellProperty("head", 1,0, "text");
        		if (this.gfn_isNull(strVal)){
        			strVal = "0";
        		}
        		
        		if (strVal == "0"){
        			this.div_list.grd_rsclist.setSubCellProperty("Head", 1,0, "text", "1");
        			
        			strVal222 =  this.div_list.grd_rsclist.getSubCellProperty("head", 1,0, "text");
        			strVal = "1";
        		} else {
        		    
        			this.div_list.grd_rsclist.setSubCellProperty("Head", 1,0, "text", "0");
        			strVal = "0";
        		}
        		
        		for (var i=0; i<this.ds_rsclist.rowcount; i++){
        			if( this.ds_rsclist.getColumn(i, "DCM_APD_CHG_CHK" ) > 0   ){
        				this.ds_rsclist.setColumn(i, "DCM_APD_CHG_CHK_TEMP", strVal);
        			}	
        		}

        	}
        	else if(e.col=='3'){

        		strVal =  this.div_list.grd_rsclist.getSubCellProperty("head", 2,0, "text");
        				
        		if (this.gfn_isNull(strVal)){
        			strVal = "0";
        		}
        		
        		if (strVal == "0"){
        			this.div_list.grd_rsclist.setSubCellProperty("Head", 2,0, "text", "1");
        			
        			strVal = "1";
        		} else {
        			this.div_list.grd_rsclist.setSubCellProperty("Head", 2,0, "text", "0");
        			
        			strVal = "0";
        		}
        			
        		for (var i=0; i<this.ds_rsclist.rowcount; i++){
        			if( this.ds_rsclist.getColumn(i, "STYL_AMM_CHG_CHK" ) > 0   ){
        				this.ds_rsclist.setColumn(i, "STYL_AMM_CHG_CHK_TEMP", strVal);
        			}	
        		}

        
        	} 	 
        	
        //	trace("ds_rsclist ssttt " + this.ds_rsclist.saveXML());
        }

        this.div_list_grd_rsclist_oncellclick = function(obj,e)
        {
        			
        	if(e.col ==1){		
        		
        		strVal = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "DCM_APD_CHG_CHK_TEMP") ; 

        		if (this.gfn_isNull(strVal)){
        			strVal = "0";
        		}

        		if (strVal == "0"){
        			this.div_list.grd_rsclist.setSubCellProperty("Head", 1,0, "text", "0");
        		} 

        	}else if(e.col=='3'){
        	
        		strVal = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "STYL_AMM_CHG_CHK_TEMP") ; 
        		
        		if (this.gfn_isNull(strVal)){
        			strVal = "0";
        		}
        		
        		if (strVal == "0"){
        			this.div_list.grd_rsclist.setSubCellProperty("Head", 2,0, "text", "0");
        		} 

        	} 	 
        	
        	
        //	trace("ds_rsclist YYYY " + this.ds_rsclist.saveXML());
        }

        this.btn_save_onclick = function(obj,e)
        {

        		
        	if(this.fn_validationCheckSave() == true	){						
        		var sSvcID        = "update";
        		var sURL          = "svc::rest/ct/eltctrwchg/saveCtrwChgObj";
        		var sInDatasets   = "ds_rsclist=ds_rsclist" ;
        		var sOutDatasets  = "";	
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        		
        		
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        			
        	}		
        		
        }

        /* Validation Check */
        this.fn_validationCheckSave = function(){

        	 if (this.ds_rsclist.rowcount == 0 ){
        			this.alert("계약서 일괄변경 내역을 조회 하세요");
        			return false;
        	 }
          
        	 var chk = "";
        	  for (var i=0; i<this.ds_rsclist.rowcount; i++){
        	  
        			if( this.ds_rsclist.getColumn(i, "DCM_APD_CHG_CHK_TEMP" ) > 0  || this.ds_rsclist.getColumn(i, "STYL_AMM_CHG_CHK_TEMP" ) > 0  ){
        	//trace("ELT_CTRW_NO   = >>  "   + this.ds_rsclist.getColumn(i, "ELT_CTRW_NO" ) );	
        			
        				chk = 1;
        			}	
        	 }
        	 
        	 if(chk == "" ){
        			alert("일괄변경할 내역을 체크 하세요");
        		return false;
        	  }

        
        	return true;
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_2120_onload, this);
            this.addEventHandler("onkeydown", this.OMG_DS_SC_2110_onkeydown, this);
            this.div_search.Static12.addEventHandler("onclick", this.div_search_Static12_onclick, this);
            this.div_search.cbo_contDay.addEventHandler("onitemchanged", this.div_search_cbo_contDay00_onitemchanged, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_list.grd_rsclist.addEventHandler("onheadclick", this.div_list_grd_rsclist_onheadclick, this);
            this.div_list.grd_rsclist.addEventHandler("oncellclick", this.div_list_grd_rsclist_oncellclick, this);
            this.div_list.btu_div.addEventHandler("onclick", this.div_list_btu_div_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_history.addEventHandler("onclick", this.btn_history_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2230.xfdl");
        this.loadPreloadList();
       
    };
}
)();
