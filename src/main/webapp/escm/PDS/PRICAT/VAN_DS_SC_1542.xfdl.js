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
                this.set_name("VAN_DS_SC_1542");
                this.set_titletext("거래처조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,456,333);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cif", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NAAC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NAAC_DSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_main00", "absolute", "17", "144", null, null, "17", "56", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_cif");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"거래처코드\"/><Cell col=\"2\" text=\"거래처명\"/><Cell col=\"3\" text=\"거래처구분\"/><Cell col=\"4\" text=\"중조구분\"/><Cell col=\"5\" text=\"본지사구분\"/><Cell col=\"6\" text=\"중지여부\"/><Cell col=\"7\" text=\"삭제여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_TRPL_C\"/><Cell col=\"2\" text=\"bind:CLNTNM\"/><Cell col=\"3\" text=\"bind:NA_TRPL_DSC\"/><Cell col=\"4\" text=\"bind:NAAC_DSC_NM\"/><Cell col=\"5\" text=\"bind:NA_MBCO_DSC\" expr=\"expr:NA_MBCO_DSC=='1'?'본사(소)':'지사(소)'\"/><Cell col=\"6\" text=\"bind:TR_STOP_YN\" expr=\"expr:TR_STOP_YN=='1'?'여':'부'\"/><Cell col=\"7\" text=\"bind:DEL_YN\" expr=\"expr:DEL_YN=='1'?'여':'부'\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "347", "32", "91", "15", null, null, this);
            obj.set_taborder("1");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "47", "58", "21", "17", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "347", "68", "91", "8", null, null, this);
            obj.set_taborder("3");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "53", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_trpl_code", "absolute", "148", "15", "256", "21", null, null, this.div_search);
            obj.set_taborder("8");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_trpl_combo", "absolute", "15", "15", "130", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_trpl_combo_innerdataset = new Dataset("cbo_trpl_combo_innerdataset", this.div_search.cbo_trpl_combo);
            cbo_trpl_combo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">거래처코드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">거래처명</Col></Row></Rows>");
            obj.set_innerdataset(cbo_trpl_combo_innerdataset);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");

            obj = new Static("Static05", "absolute", "362", "129", "76", "15", null, null, this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("6");
            obj.set_text("거래처조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "277", "91", "10", "17", null, this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", null, "287", "54", "29", "73", null, this);
            obj.set_taborder("8");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle", "absolute", null, "287", "54", "29", "17", null, this);
            obj.set_taborder("9");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, null, "91", "17", "17", "0", this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "422", "96", null, "15", "17", null, this);
            obj.set_taborder("11");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 53, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 456, 333, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1542");
            		p.set_titletext("거래처조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1542.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1542.xfdl", function() {
        //include "lib::comLib.xjs";

        var TRPL_C = application.gv_glnCode; // 로그인 사업장코드
        var TRPL_NM = application.gv_companyName; //로그인 사업장명
        this.objRtnArr = new Array(2);

        var autoPop = this.parent.autoPop;

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	var searchParam =
        	{
        				form: this,							//고정
        				param:[{
        						edit: this.div_search.edt_trpl_code,		//타겟 컴포넌트
        						fnc: 'btn_search_onclick'		//엔터키 눌렀을시 실행할 함수 이름
        				}]
        	};
        	this.addEventEnterSearch(searchParam);
        	
        	this.div_search.cbo_trpl_combo.set_index(0);
        	
        	if(autoPop.autoType){
        		if(autoPop.searchCode && autoPop.searchText){
        			this.div_search.cbo_trpl_combo.set_value("1");
        			this.div_search.edt_trpl_code.set_value(autoPop.searchCode);
        		}
        		if(autoPop.searchCode && !autoPop.searchText){
        			this.div_search.cbo_trpl_combo.set_value("1");
        			this.div_search.edt_trpl_code.set_value(autoPop.searchCode);
        		}
        		if(!autoPop.searchCode && autoPop.searchText){
        			this.div_search.cbo_trpl_combo.set_value("2");
        			this.div_search.edt_trpl_code.set_value(autoPop.searchText);
        		}
        		if(!autoPop.searchCode && !autoPop.searchText){
        			return;
        		}
        		this.btn_search_onclick();
        	}
        	
        	this.div_search.edt_trpl_code.set_value(this.parent.spTrpl);
        	this.div_search.edt_trpl_code.setFocus(true);
        	
        }

        //조회
        this.btn_search_onclick = function(obj,e)
        {
        	var combo_trpl = this.div_search.cbo_trpl_combo.value;
        	var edt_trpl = this.div_search.edt_trpl_code.value;
        	
        	var params = "combo_trpl="+combo_trpl		// 거래처구분콤보박스
        				+" edt_trpl="+edt_trpl;			// 거래처 명,코드
        	
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/retrieveNewGoodsTrplPopUp";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_cif=ds_cif";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0){
        		this.getMessage('alert',sMSG);
        		return;
        	}else{
        		if(svcID == "p_search"){
        			if(this.ds_cif.rowcount == 0){
        				this.gfn_getMessage('alert','result.message.search.no.exist.data');
        			}else if(this.ds_cif.rowcount == 1){
        				if(autoPop.autoType){
        					this.grd_main00.selectRow(0);
        					this.btn_ok_onclick();
        				}
        			}else{
        				this.grd_main00.selectRow(0);
        				this.ds_cif.setFocus();
        			}
        		}
        	}
        }

        //확인키
        this.btn_ok_onclick = function(obj,e)
        {
        	this.objRtnArr[0] = this.ds_cif.getColumn(this.ds_cif.rowposition,"NA_TRPL_C");
        	this.objRtnArr[1] = this.ds_cif.getColumn(this.ds_cif.rowposition,"CLNTNM");
        	trace(this.objRtnArr);
        	this.close(this.objRtnArr.toString());
        }

        //닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.grd_main00_oncellclick = function(obj,e)
        {
        	this.btn_ok_onclick();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.grd_main00.addEventHandler("oncellclick", this.grd_main00_oncellclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancle.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1542.xfdl");

       
    };
}
)();
