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
                this.set_name("OMG_DS_SC_2120");
                this.set_titletext("전자계약서진행사항조회 협력업체 축산");
                this._setFormPosition(0,0,993,647);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rsclist", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_BLG\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_CHRR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_eltSts", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
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
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctEtcItemList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "106", "21", null, null, this.div_search);
            obj.set_taborder("39");
            obj.set_text("계약담당자소속");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "10", "118", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("메인계약서종류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_buyer_blg", "absolute", "141", "36", "290", "21", null, null, this.div_search);
            obj.set_taborder("49");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static131", "absolute", "599", "36", "10", "21", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "616", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "732", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static02", "absolute", "507", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_contDay", "absolute", "507", "36", "106", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_contDay_innerdataset = new Dataset("cbo_contDay_innerdataset", this.div_search.cbo_contDay);
            cbo_contDay_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">계약서변경일</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약시작일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">계약만료일</Col></Row></Rows>");
            obj.set_innerdataset(cbo_contDay_innerdataset);
            obj.set_taborder("60");
            obj.set_value("0");
            obj.set_text("계약서변경일");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Div("div_eltSts", "absolute", "616", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("63");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_mnCtrwKd", "absolute", "141", "10", "290", "21", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_history", "absolute", null, "0", "41", "21", "131", null, this);
            obj.set_taborder("11");
            obj.set_text("이력");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("URL('theme://images/btn_WF_CRUD.png') stretch 7,7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "18", null, this);
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

            obj = new Static("Static47", "absolute", "0", "113", "238", "21", null, null, this);
            obj.set_taborder("77");
            obj.set_text("전자계약조회");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("79");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "95", null, "533", "15", null, this);
            obj.set_taborder("84");
            obj.style.set_background("transparent");
            obj.style.set_border("0 none #808080ff,0 none #808080ff,2 none #444444ff,1 none #808080ff");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "-93", "228", "21", null, null, this.div_list);
            obj.set_taborder("14");
            obj.set_text("상담 신청 조회");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "40", null, "176", "0", null, this.div_list);
            obj.set_taborder("15");
            obj.set_binddataset("ds_rsclist");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"220\"/><Column size=\"200\"/><Column size=\"141\"/><Column size=\"200\"/><Column size=\"222\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"계약서종류\"/><Cell col=\"2\" text=\"계약담당자소속\"/><Cell col=\"3\" text=\"계약담당자거래처코드\"/><Cell col=\"4\" text=\"계약담당자 상호\"/><Cell col=\"5\" text=\"계약 기간\"/><Cell col=\"6\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:MN_CTRW_KD_NM\"/><Cell col=\"2\" text=\"bind:BUYER_BLG\"/><Cell col=\"3\" text=\"bind:BUYER_NA_TRPL_C\"/><Cell col=\"4\" text=\"bind:CTR_CHRR_MTALNM\"/><Cell col=\"5\" text=\"bind:CTR_DT\" mask=\"@@@@-@@-@@ @@@@-@@-@@\"/><Cell col=\"6\" text=\"bind:STS_NM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_searchClose", "absolute", "46.81%", "0", "63", "12", null, null, this.div_list);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0.72%", "273", null, "249", "0%", null, this.div_list);
            obj.set_taborder("17");
            obj.set_binddataset("ds_ctEtcItemList");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"220\"/><Column size=\"158\"/><Column size=\"132\"/><Column size=\"174\"/><Column size=\"222\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"삭제\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"규격(모델명)\"/><Cell col=\"3\" text=\"상품코드\"/><Cell col=\"4\" text=\"원산지\"/><Cell col=\"5\" text=\"제조업체/즉석제조\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:center middle;\" text=\"bind:ITEM_NAME\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:STANDARD\"/><Cell col=\"3\" edittype=\"text\" style=\"align:center;\" text=\"bind:ITEM_CODE\"/><Cell col=\"4\" edittype=\"text\" style=\"align:center;\" text=\"bind:COUNTRY\"/><Cell col=\"5\" edittype=\"text\" style=\"align:center;\" text=\"bind:COMPANY\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_addRow", "absolute", "91.71%", "243", null, "21", "0.61%", null, this.div_list);
            obj.set_taborder("20");
            obj.set_text("행추가");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "42", "21", "178", null, this);
            obj.set_taborder("85");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("URL('theme://images/btn_WF_CRUD.png') stretch 7,7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "42", "21", "83", null, this);
            obj.set_taborder("86");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 290, 21, this.div_search.div_mnCtrwKd,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("65");
            		p.set_url("common::multiCheckCombo.xfdl");

            	}
            );
            this.div_search.div_mnCtrwKd.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
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
            		p.set_taborder("84");
            		p.style.set_background("transparent");
            		p.style.set_border("0 none #808080ff,0 none #808080ff,2 none #444444ff,1 none #808080ff");
            		p.style.set_bordertype("normal 0 0");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 647, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("전자계약서진행사항조회 협력업체 축산");

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
        this.addIncludeScript("OMG_DS_SC_2132.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2132.xfdl", function() {
        //include "lib::comLib.xjs";

        this.fv_sts = "";
        this.fv_stsTemp = ""; //전자 계약서 상태값
        this.fv_stsNm = ""; //전자 계약서 상태값
        this.fv_stsNmTemp = ""; //전자 계약서 상태값

        this.fv_mnCtrwKd = "";
        this.fv_mnCtrwKdTemp = ""; //전자 계약서 종류
        this.fv_mnCtrwKdNm = ""; //전자 계약서 종류
        this.fv_mnCtrwKdNmTemp = ""; //전자 계약서 종류

        this.chkDay;
        this.authChk = "" ;   //권한 체크 전자 계약 권한 2

        /* Form Load */
        this.OMG_DS_SC_2120_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.chkDay = this.gfn_minusMonth(toDay, 1);
        	
        	this.div_search.cal_from.set_value(this.chkDay);
        	this.div_search.cal_to.set_value(toDay);
        	
        	var param = [  
               {code:"ELT_STS",     dsName:"ds_eltSts",    selecttype:""},
               {code:"MN_CTRW_KD",     dsName:"ds_mnCtrwKd", selecttype:""}
            ];

        	this.gfn_setPortalCommonCode(param);

        	this.div_search.div_eltSts._binddataset(this.ds_eltSts,"SIMP_C","SIMP_CNM");
        	this.div_search.div_eltSts.setFunctionName("fn_afterCall"); //후처리함수 선언
        	
        	this.div_search.div_mnCtrwKd._binddataset(this.ds_mnCtrwKd,"SIMP_C","SIMP_CNM");
        	this.div_search.div_mnCtrwKd.setFunctionName("fn_afterCallSts"); //후처리함수 선언
        	this.div_search.div_mnCtrwKd._setWidth(290);                  //가로사이즈 설정(단, 140보다 작으면 기본사이즈인 140으로 설정됨)
        	this.div_search.div_mnCtrwKd._setDisplayCount(9);            //보여줄 Row수. Combo의 displayrowcount와 동일.
        	
        	this.div_list.Grid01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	  
           var strVal = application.gv_userAuth ;
           var temp = strVal.split("|");
              for(var i=0; i<temp.length; i++) {
                 if( temp[i] == "2"){
                    this.authChk = "2" ;
                 }
              }
        	
        	
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        //콤보에 최상단Row보이도록 설정
        // 	this.cbo_buyerAtel.set_index(0);
        // 	this.cbo_chrwMpsvno.set_index(0);
        	
        // 	SIMP_C	ds_eltSts
        // 1	계약서작성
        // 2	협력업체서명   
        // 3	재검토요청     
        // 4	보완
        // 5	계약기간변경
        // 6	문구변경
        // 7	개별변경
        // 8	거절             
        // 9	완료
           	   for(var i = this.ds_eltSts.rowcount-1 ; 0 <= i ; i--){		
        		
        			if(this.ds_eltSts.getColumn(i, "SIMP_C") == "7"){
        				this.ds_eltSts.deleteRow(i);
        			}
        		
        			if(this.ds_eltSts.getColumn(i, "SIMP_C") == "6"){
        					this.ds_eltSts.deleteRow(i);
        			}
        		
        			if(this.ds_eltSts.getColumn(i, "SIMP_C") == "5"){
        					this.ds_eltSts.deleteRow(i);
        			}
        			
        			if(this.ds_eltSts.getColumn(i, "SIMP_C") == "A"){
        					this.ds_eltSts.deleteRow(i);
        			}
        		}	
        		
        		
        		
        		
        }

        

        //멀티 콤보  - > 상태 종류
        this.fn_afterCall = function (sVal)
        {
        	for(var i = 0 ; i < sVal.rowcount; i++){		
        	
        		if(i == 0 ){
        			this.fv_sts = sVal.getColumn(i, "SIMP_C");
        			this.fv_stsNm = sVal.getColumn(i, "SIMP_CNM");
        		}else{
        			this.fv_sts   += "." +sVal.getColumn(i, "SIMP_C");
        			this.fv_stsNm += "," +sVal.getColumn(i, "SIMP_CNM");
        		}
        	}
        	
        }

        
        //멀티 콤보  - > 계약서종류
        this.fn_afterCallSts = function (sVal)
        {

        	for(var i = 0 ; i < sVal.rowcount; i++){
        		
        		if(i == 0 ){
        			this.fv_mnCtrwKd = sVal.getColumn(i, "SIMP_C");
        			this.fv_mnCtrwKdNm = sVal.getColumn(i, "SIMP_CNM");
        		}else{
        			this.fv_mnCtrwKd   += "." +sVal.getColumn(i, "SIMP_C");
        			this.fv_mnCtrwKdNm += "," +sVal.getColumn(i, "SIMP_CNM");
        		}
        	}
        }	

        this.div_list_Grid01_oncellclick = function(obj,e)
        {

            // alert(this.authChk );

        	if(this.authChk == "2"){
        	
        		if(e.cell==0){
        			this.gfn_singleChk(obj,e);	
        		}
        		else{
        			
        			//this.div_dtl.set_url("") ;
        			//this.div_dtl.set_url("OMG.CT::") ;
        			//this.div_dtl.reload();
        			//this.div_dtl.search() ;
        			
        			this.search_item_list(); 

        		}
        	}else{
        		alert("전자계약 권한담당자만이 공인인증서 전자서명이 가능합니다. 회원정보변경에서 전자계약 권한을 신청해주세요.");
        	}		
        }

        /*전자계약 조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_rsclist.clearData();
        	//this.ds_ctEtcItemList.clearData(); // 대금리스트 조회 초기화 
        	
        	if(this.fn_validationCheck()){
        		
        		var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        		var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        		var cboContDay = this.gfn_nullToEmpty(this.div_search.cbo_contDay.value);  //계약시작0, 만료일1
        		var edtBuyerBlg = this.gfn_nullToEmpty(this.div_search.edt_buyer_blg.value);  //계약담당자소속
        		
        		param = " cbo_ctrw="+this.fv_mnCtrwKd+
        				" cal_from="+calFrom+
        				" cal_to="+calTo+
        				" cbo_sts="+this.fv_sts+
        				" cbo_contDay="+cboContDay+
        				" edt_buyer_blg="+edtBuyerBlg;
        				
        		var sSvcID        = "search";//통신아이디
        		var sURL          = "svc::rest/ct/eltctrw/retrieveSubEltCtrwPrgStsList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_rsclist=ds_rsclist";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}			
        	
        	this.fv_mnCtrwKdNmTemp = this.fv_mnCtrwKdNm ;
        	this.fv_stsNmTemp = this.fv_stsNm;
        	this.fv_mnCtrwKdTemp = this.fv_mnCtrwKd;
        	this.fv_stsTemp = this.fv_sts;
        	
         	this.div_search.div_eltSts._clearValue();
         	this.div_search.div_mnCtrwKd._clearValue();
        	this.fv_sts = "";
        	this.fv_mnCtrwKd = "";
        	this.fv_stsNm = "";
        	this.fv_mnCtrwKdNm = "";
        	
        }

        
        /* 대금리스트  조회*/
        this.search_item_list = function()
        {
            // alert('search_item_list');
        	// this.ds_ctEtcItemList.clearData();
        	
            var curRow = this.ds_rsclist.rowposition;

        	var eltCtrwNo  = this.ds_rsclist.getColumn(curRow, "ELT_CTRW_NO");    //전자계약서번호
        	var chgSqno    =  this.ds_rsclist.getColumn(curRow, "CHG_SQNO");   // 변경일련번호
        	//var ctrwStyVer = this.ds_ctEtcItemList.getColumn(curRow, "CTRW_STY_VER");  
        	
        	param = " eltCtrwNo=" + eltCtrwNo +
        			" chgSqno=" + chgSqno  
        			;
        			
        	var sSvcID        = "searchItemList";//통신아이디
        	var sURL          = "svc::rest/ct/eltctrw/retrievetEtcItemList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_ctEtcItemList=ds_ctEtcItemList";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        }

        
        /*
         * 저장
         */
         this.btn_save_onclick = function(obj,e)
        {

        // alert('btn_save_onclick');

        	var dsParams = "";
        	var params = "";

        	//trace("[ Params ] >>>>>> " + params);	
        	dsParams = "ds_ctEtcItemList=ds_ctEtcItemList ";

        	var sSvcID        = "saveEtcItemList";//통신아이디
        	var sURL          = "svc::rest/ct/eltctrw/saveEtcItemList";// 호출할 서버 페이지 주소
        	var sInDatasets   = dsParams;//보내는데이터셋
        	var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {

            // alert(svcID);
            
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "search"){
        			if(this.ds_rsclist.rowcount == 0){
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		} else if(svcID == "saveEtcItemList"){
        			this.search_item_list();
        		}

        	}

          //trace("ds_rsclist" + this.ds_rsclist.saveXML());
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
        	}else{
        		/*
        		if(this.gfn_getDiffDay(this.div_search.cal_YMD_FR.value,this.div_search.cal_YMD_TO.value) > 31){
        			this.alert('기간을 31일 이내로 선택 하세요');
        			return false;
        		}
        		*/	
        	}
        	/*
        	if(Number(calFrom) - Number(chkDay) < 0){
        		this.alert("최근 3개월까지 조회 가능합니다.");
        		return false;
        	}
        	
        	if(Number(calTo) - Number(chkDay) < 0){
        		this.alert("최근 3개월까지 조회 가능합니다.");
        		return false;
        	}
        	*/
        	return true;
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	//trace(" strId : " + strId + " strVal : " + strVal);
        }

        this.fn_afterFormOnload = function()
        {
        	//trace("fn_afterFormOnload");
        }

        this.btn_history_onclick = function(obj,e)
        {
        	
        	var elt_ctrw_no;
        	if(this.ds_rsclist.rowcount > 0){
        		for(var i = 0; i < this.ds_rsclist.rowcount; i++){
        			if(this.ds_rsclist.getColumn(i, "ISCHECKED") == 1)
        			{
        				elt_ctrw_no = this.ds_rsclist.getColumn(i, "ELT_CTRW_NO");
        				if(!this.gfn_isNull(elt_ctrw_no)){
        					var oArg = {paramMode:"S", dsArg:"",elt_ctrw_no:elt_ctrw_no};
        					var sOption = "autosize=true,title=true";
        					var sPopupCallBack = "fn_popupAfter";       
        					this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2114.xfdl",oArg,sOption,sPopupCallBack);
        		
        				}
        			}
        		}
        		if(this.gfn_isNull(elt_ctrw_no)){

        			alert("이력을 조회할 상담신청내역을 체크 하세요");
        		}
        	}else{
        		alert("상담신청내역을 조회 하세요");
        		return false;
        	}
        	
        }

        this.btn_excel_onclick = function(obj,e)
        {
        		this.fn_excel();
        }

        this.fn_excel = function(){

        	var toDay = this.gfn_today("yyyyMMdd");
        	var fileName = "전자계약서조회"+toDay+".xls";//엑셀 파일 이름
        	
        	var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        		var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        		var cboContDay = this.gfn_nullToEmpty(this.div_search.cbo_contDay.value);  //계약시작0, 만료일1

        		
        		var edtBuyerBlg = this.gfn_nullToEmpty(this.div_search.edt_buyer_blg.value);  //바이어소속

        		param = "&cbo_ctrw="+this.fv_mnCtrwKdTemp+
        				"&cal_from="+calFrom+
        				"&cal_to="+calTo+
        				"&cbo_sts="+this.fv_stsTemp+
        				"&cbo_contDay="+cboContDay+
        				"&edt_buyer_blg="+edtBuyerBlg+
        				"&fv_stsNm="+this.fv_stsNmTemp+
        				"&fv_mnCtrwKdNm="+this.fv_mnCtrwKdNmTemp+
        				"&fileName="+fileName;

        	param = encodeURI(encodeURI(param));

        	//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/downloadExcelSubEltCtrw?"+param);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelSubEltCtrw?"+param, this);
        	
        }

        // this.OMG_DS_SC_2120_onkeydown = function(obj:Form, e:nexacro.KeyEventInfo)
        // {
        // 	if (e.keycode==13  ){
        // 		this.btn_search.click()
        // 	}
        // }

        

        

        this.btn_rowUpdate_onclick = function(obj,e)
        {
        	if(this.fn_validationDetail()){
        		this.fn_isUpdate();
        		this.fn_detail_clear();
        		this.fn_detail_hidden_clear();
        		//this.ds_dataD.set_rowposition(-1);
        		this.edt_na_wrs_c.setFocus();
        		this.edt_na_wrs_c.setCaretPos(-1);
        		this.edt_na_wrs_c.set_enable(true);
        		this.edt_wrsnm.set_enable(true);		
        	}
        }

        this.btn_addrow_onclick = function(obj,e)
        {
        	var nRow = this.ds_ctEtcItemList.addRow();
        	
        	//ds_rsclist
        	this.ds_ctEtcItemList.setColumn(nRow, "ISCHECKED", "0");
        	this.ds_ctEtcItemList.setColumn(nRow, "ELT_CTRW_NO", this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "ELT_CTRW_NO") );
        	this.ds_ctEtcItemList.setColumn(nRow, "CHG_SQNO", this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "CHG_SQNO") );
        	//this.ds_ctEtcItemList.setColumn(nRow, "SQNO", 	this.ds_ctEtcItemList.rowcount );
        	
        	this.ds_ctEtcItemList.set_updatecontrol(false); //
        	this.ds_ctEtcItemList.setRowType(nRow, Dataset.ROWTYPE_INSERT);
        	this.ds_ctEtcItemList.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음

        	// CHG_SQNO	"001" (id=286)	
        	
        // ELT_CTRW_NO
        // CHG_SQNO

        }

        
        this.common_onclick = function(obj,e)
        {
        	this.fn_print();
        }

        

        this.fn_print = function(){
        	
        	var params = "";
        	var cnt = 0;

        	var ozParam = {
        		sId: 'OMG_DS_SC_2132',
        		sUrl: '/rest/oz/ct/eltctrw/printEtcItemList',
        		paramType: 'param',
        		sParam: params
        	};
        	
        	this.ozViewer(ozParam);
        	
        }

        
        this.btn_print_onclick = function(obj,e)
        {
            var curRow = this.ds_rsclist.rowposition; // 현재행
        	var ELT_CTRW_NO  = this.ds_rsclist.getColumn(curRow, "ELT_CTRW_NO");    //전자계약서번호
        	var CHG_SQNO    =  this.ds_rsclist.getColumn(curRow, "CHG_SQNO");   // 변경일련번호

        //alert(ELT_CTRW_NO);
        //alert(CHG_SQNO);

        	var params = {
        			eltCtrwNo: ELT_CTRW_NO,
        			chgSqno: CHG_SQNO
        		}

        	var ozParam = {
        		sId: 'OMG_DS_SC_2132',
        		sUrl: '/rest/oz/ct/eltctrw/printEtcItemList',
        		paramType: 'param',
        		sParam: params
        	};
        	
        	this.ozViewer(ozParam);
        }

        
        /*
        this.btn_print_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        {
        	var ozParam = {
        		sId: 'OMG_DS_SC_2132',
        		sUrl: '/rest/oz/scm/delivery/printTest',
        		paramType: 'param',
        		sParam: ''
        	};
        	this.ozViewer(ozParam);
        }
        */
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_2120_onload, this);
            this.btn_history.addEventHandler("onclick", this.btn_history_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_list.Grid01.addEventHandler("oncellclick", this.div_list_Grid01_oncellclick, this);
            this.div_list.btn_searchClose.addEventHandler("onclick", this.div_list_btn_searchClose_onclick, this);
            this.div_list.btn_addRow.addEventHandler("onclick", this.btn_addrow_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2132.xfdl");
        this.loadPreloadList();
       
    };
}
)();
