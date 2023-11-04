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
                this.set_name("OMG_DS_SC_2217_P01");
                this.set_titletext("전자계약파견약정서관리상세화면");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,800,350);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CTR_DT\" type=\"STRING\" size=\"30\"/><Column id=\"CTR_DSC\" type=\"STRING\" size=\"30\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"30\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"30\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"30\"/><Column id=\"SEAL\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_RGM_NM\" type=\"STRING\" size=\"30\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("text_title", "absolute", "17", "51", "560", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("선택 사업장 :");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_text("사업장별 등록현황");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("brn_cls", "absolute", null, "0", "37", "32", "5", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "15", "84", null, null, "15", "30", this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"97\"/><Column size=\"75\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"거래구분\"/><Cell col=\"2\" text=\"계약업체명\"/><Cell col=\"3\" text=\"계약기간\"/><Cell col=\"4\" text=\"파일 등록여부\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CTR_DSC\"/><Cell col=\"2\" text=\"bind:CLNTNM\"/><Cell col=\"3\" text=\"bind:CTR_DT\"/><Cell col=\"4\" text=\"expr:ORGFNAME != null ? '@' : ''\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_type00", "absolute", null, "51", "80", "21", "116", null, this);
            obj.set_taborder("13");
            obj.set_text("등록연도 :");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_year", "absolute", null, "51", "65", "21", "60", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_codecolumn("YEAR");
            obj.set_datacolumn("YEAR");
            obj.set_innerdataset("@ds_year");

            obj = new Button("btn_search", "absolute", null, "51", "41", "21", "15", null, this);
            obj.set_taborder("14");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 350, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("전자계약파견약정서관리상세화면");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2217_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2217_P01.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        this.BZNO;
        this.GLN;
        this.CLNTNM;

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e) //공통
        {
        	// 등록연도 생성(2021년부터)
        	var start = 2021;
        	var maxYear = Number(this.gfn_today("yyyy"));
        	var row = -1;
        	
        	for (var i = start; i <= maxYear; i++) {
        		row = this.ds_year.addRow();
        		this.ds_year.setColumn(row, "YEAR", i);
        	}
        	this.cbo_year.set_index(row);
        	
        	this.gfn_setInitForm(obj, e);
        }

        this.fn_afterFormOnload = function() //페이지 로딩후 실행부분
        {
        	this.BZNO = this.gfn_nullToEmpty(this.parent.bzno);
        	this.GLN = this.gfn_nullToEmpty(this.parent.gln);
        	this.CLNTNM = this.gfn_nullToEmpty(this.parent.clntnm);
        	
        	if (this.gfn_isNull(this.GLN)) {
        		this.text_title.set_text("선택 사업장 : " + this.BZNO + " / " + this.CLNTNM);
        	} else {
        		this.text_title.set_text("선택 사업장 : " + this.GLN + " / " + this.CLNTNM);
        	}
        	this.search();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /*창닫기 버튼 이벤트*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        //사업자번호로 거래처 정보조회하기
        this.search = function()
        {	
        	this.ds_list.clearData();
        	
        	var param = "bzno="+this.BZNO
        				 +" gln="+this.GLN
        				 +" year="+this.cbo_year.value
        				 ;
        	var sSvcID        = "retrieveEltPmiwDetailList";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltPmiwDetailList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_list=ds_list";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회	
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID =="retrieveEltPmiwDetailList") {
        			
        		}
        	}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.search();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.brn_cls.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2217_P01.xfdl");

       
    };
}
)();
