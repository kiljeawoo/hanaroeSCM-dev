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
                this.set_name("OMG_DS_SC_7111");
                this.set_cssclass("frm_WF_PopupBg");
                this.set_titletext("EDI서비스 요금 이력");
                this._setFormPosition(0,0,652,407);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rate", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RATE_ST_DTM\" type=\"STRING\" size=\"14\"/><Column id=\"RATE_ED_DTM\" type=\"STRING\" size=\"14\"/><Column id=\"UGQT_STN\" type=\"INT\" size=\"256\"/><Column id=\"RATE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button09", "absolute", null, "47", "58", "21", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "17", "76", null, "43", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "17", "10", "102", "21", null, null, this.Div00);
            obj.set_taborder("21");
            obj.set_text("사용량 구간");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("combo", "absolute", "119", "10", "120", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var combo_innerdataset = new Dataset("combo_innerdataset", this.Div00.combo);
            combo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0 ~ 1,000</Col></Row><Row><Col id=\"codecolumn\">1001</Col><Col id=\"datacolumn\">1,001 ~ 3,000</Col></Row><Row><Col id=\"codecolumn\">3001</Col><Col id=\"datacolumn\">3,001 ~ 5,000</Col></Row><Row><Col id=\"codecolumn\">5001</Col><Col id=\"datacolumn\">5,001 ~ 10,000</Col></Row><Row><Col id=\"codecolumn\">10001</Col><Col id=\"datacolumn\">10,001 ~ 50,000</Col></Row><Row><Col id=\"codecolumn\">50001</Col><Col id=\"datacolumn\">50,001 ~ 100,000</Col></Row><Row><Col id=\"codecolumn\">100000</Col><Col id=\"datacolumn\">100,000 초과</Col></Row></Rows>");
            obj.set_innerdataset(combo_innerdataset);
            obj.set_taborder("20");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_index("0");
            obj = new Static("Static01", "absolute", "259", "10", "119", "21", null, null, this.Div00);
            obj.set_taborder("22");
            obj.set_text("요금적용 시작일");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("cal_st", "absolute", "376", "10", "101", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj = new Calendar("cal_dt", "absolute", "502", "10", "99", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_value("null");
            obj.set_editformat("yyyy-MM-dd");
            obj = new Static("Static02", "absolute", "485", "12", "13", "17", null, null, this.Div00);
            obj.set_taborder("25");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "17", "134", null, "226", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_rate");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"128\"/><Column size=\"114\"/><Column size=\"107\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사용량 구간(KB)\"/><Cell col=\"1\" text=\"요금적용 시작일\"/><Cell col=\"2\" text=\"요금적용 종료일\"/><Cell col=\"3\" text=\"요금(KB당)\"/></Band><Band id=\"body\"><Cell text=\"bind:UGQT_STN\"/><Cell col=\"1\" text=\"bind:RATE_ST_DTM\" mask=\"####-##-##\"/><Cell col=\"2\" text=\"bind:RATE_ED_DTM\" mask=\"####-##-##\"/><Cell col=\"3\" text=\"bind:RATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "76", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", null, "76", "17", "67", "0", null, this);
            obj.set_taborder("9");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, null, "91", "17", "2", "0", this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", null, "68", "91", "8", "2", null, this);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "32", "91", "15", "123", null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", null, "119", "76", "15", "17", null, this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("EDI 서비스 요금 이력");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "3.24%", "51", null, "21", "71.05%", null, this);
            obj.set_taborder("18");
            obj.set_text("조회 조건");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 652, 407, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("EDI서비스 요금 이력");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7111.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7111.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.objRtnArr = new Array(2); //팝업창 close시 전달할 값을 위한 배열 선언

        this.form_onload = function(obj,e)
        {
        	this.Div00.cal_st.set_value(this.fn_FirstDay());
        	this.Div00.cal_dt.set_value(this.fn_Today());
        }

        this.fn_Today = function()
        {
        	var objDate = new Date();
        	var sToday = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0");
        	    sToday += objDate.getDate().toString().padLeft(2, "0");
        	    trace(sToday);
        	return sToday;
        }

        this.fn_FirstDay = function()
        {
        	var objDate = new Date();
        	var sToday = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0");
        	    sToday += "01"
        	    trace(sToday);
        	return sToday;
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /* 조회 */
        this.Button09_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.Div00.cal_st.value)){
        		this.alert("요금적용 기간을 입력해주세요");
        		this.edit_user_id.setFocus();
        		return false;
        	}else if(this.gfn_isNull(this.Div00.cal_dt.value)){
        		this.alert("요금적용 기간을 입력해주세요");
        		this.edit_user_id.setFocus();
        		return false;
        	}else {
        		var sParams = "combo="+this.gfn_nullToEmpty(this.Div00.combo.value)
        					+ " cal_st="+this.gfn_nullToEmpty(this.Div00.cal_st.value+"000000")
        					+ " cal_dt="+this.gfn_nullToEmpty(this.Div00.cal_dt.value+"235959")
        					;
        		var sSvcID        = "retrieveEdiHst";
        		var sURL          = "svc::rest/bl/retrieveEdiHst";	
        		var sInDatasets   = "";
        		var sOutDatasets  = "ds_rate=ds_rate";	
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회  

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        				
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveEdiHst"){

        			}
        	}	
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button09.addEventHandler("onclick", this.Button09_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7111.xfdl", true);

       
    };
}
)();
