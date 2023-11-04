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
                this.set_name("OMG_DS_SC_9040");
                this.set_titletext("회원 조회");
                this._setFormPosition(0,0,486,351);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mbInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "15", "58", "21", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "44", null, "73", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_comp", "absolute", "17", "40", "388", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_comp", "absolute", "275", "8", "130", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_comp_innerdataset = new Dataset("cbo_comp_innerdataset", this.div_search.cbo_comp);
            cbo_comp_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">아이디</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">거래처번호</Col></Row></Rows>");
            obj.set_innerdataset(cbo_comp_innerdataset);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_text("경제통합거래처");
            obj.set_visible("false");
            obj.set_index("0");
            obj = new Radio("rdo_comp", "absolute", "17", "8", "159", "25", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_comp_innerdataset = new Dataset("rdo_comp_innerdataset", this.div_search.rdo_comp);
            rdo_comp_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">아이디</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">거래처번호</Col></Row></Rows>");
            obj.set_innerdataset(rdo_comp_innerdataset);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");

            obj = new Grid("grd_mbInfo", "absolute", "17", "132", null, "163", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_mbInfo");
            obj.set_autofittype("col");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"130\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"회원아이디\"/><Cell col=\"2\" text=\"회원이름\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:MB_ID\"/><Cell col=\"2\" text=\"bind:USR_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", "359", "305", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "415", "305", "54", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "44", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "469", "44", "15", "67", null, null, this);
            obj.set_taborder("9");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "363", "334", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "363", "295", "91", "10", null, null, this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "363", "36", "91", "8", null, null, this);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "242", "0", "91", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "363", "117", "76", "15", null, null, this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 73, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 486, 351, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("회원 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_9040.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_9040.xfdl", function() {
        //include "lib::comLib.xjs";

        this.objRtnArr = new Array(2); //팝업창 close시 전달할 값을 위한 배열 선언

        this.form_onload = function(obj,e)
        {
        	this.ds_mbInfo.clearData();	
        	this.div_search.edt_comp.set_maxlength(9);
        	this.div_search.edt_comp.set_inputtype("numberandenglish");
        	
        	//this.div_search.cbo_comp.set_index(0);
        	this.div_search.rdo_comp.set_index(0);
        	if(!this.gfn_isNull(this.parent.dsArg.getColumn(0, "MB_ID"))){			
        		this.div_search.edt_comp.set_value(this.parent.dsArg.getColumn(0,"MB_ID"));
        		this.btn_search.click();
        	}else{
        		this.div_search.edt_comp.set_value("");
        		this.div_search.edt_comp.setFocus();
        	}		
        }

        	
         /*조회*/
        this.search = function()
        {	
        	if(this.gfn_isNull(this.div_search.edt_comp.value)){
        		//alert(this.div_search.cbo_comp.text+" 을/를 입력해 주시기바랍니다.");
        		alert(this.div_search.rdo_comp.text+" 을/를 입력해 주시기바랍니다.");
        		return false;
        	}
        	
        	var sParam = "searchType="+this.gfn_nullToEmpty(this.div_search.rdo_comp.value) // cbo_comp
        		       +" searchText="+this.gfn_nullToEmpty(this.div_search.edt_comp.value);
        	var sSvcID        = "search";
        	var sURL          = "svc::rest/mg/mbcslt/retrieveUsrInfList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_mbInfo=ds_mbInfo";	
        	var sArgument     = sParam
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);	
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
        	var paramData = "";
        	var nRow = this.ds_mbInfo.findRow("ISCHECKED", 1);
        	if( nRow > -1){
        		this.objRtnArr[0] = this.ds_mbInfo.getColumn(nRow,"MB_ID");
        		this.objRtnArr[1] = this.ds_mbInfo.getColumn(nRow,"MB_PW");
        		
        		this.close(this.objRtnArr.toString());
        	}else{
        		alert("선택된 행이 없습니다.");
        		return;
        	}
        }

        this.btn_search_onclick = function(obj,e)
        {	
        	 if( this.gfn_length(this.div_search.edt_comp.value)<2)
        	{
        		alert("두 글자 이상 입력해 주세요.");
        		return;
        	}
        	this.search();  	
        }

        this.grd_mbInfo_oncellclick = function(obj,e)
        {	
        	if(e.cell==0){
        		this.gfn_singleChk(obj,e);	
        	}
        }

        
        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	
        	if(ErrorCode < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{		
        		if(svcID == "search"){	
        			if(this.ds_mbInfo.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}else{
        			if(this.ds_mbInfo.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}
        	}	
        }

        
        this.grd_mbInfo_oncelldblclick = function(obj,e)
        {
        	
        	if(this.ds_mbInfo.rowcount > 0){		
        		this.objRtnArr[0] = this.ds_mbInfo.getColumn(e.row,"MB_ID");
        		this.objRtnArr[1] = this.ds_mbInfo.getColumn(e.row,"MB_PW");		
        		this.close(this.objRtnArr.toString());
        	}else{
        		this.close();
        	}
        }

        this.div_search_edt_comp_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		obj.updateToDataset();
        		this.btn_search.click();
        	}
        }

        this.Div00_cbo_comp_onitemchanged = function(obj,e)
        {
        	this.div_search.edt_comp.set_value("");
        	if(obj.value == '1'){
        		this.div_search.edt_comp.set_maxlength(9);
        		this.div_search.edt_comp.set_inputtype("numberandenglish");
        	}else{
        		this.div_search.edt_comp.set_maxlength(25);
        		this.div_search.edt_comp.set_inputtype("number");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.edt_comp.addEventHandler("onkeydown", this.div_search_edt_comp_onkeydown, this);
            this.div_search.cbo_comp.addEventHandler("onitemchanged", this.Div00_cbo_comp_onitemchanged, this);
            this.div_search.rdo_comp.addEventHandler("onitemchanged", this.Div00_cbo_comp_onitemchanged, this);
            this.grd_mbInfo.addEventHandler("oncellclick", this.grd_mbInfo_oncellclick, this);
            this.grd_mbInfo.addEventHandler("oncelldblclick", this.grd_mbInfo_oncelldblclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_9040.xfdl");

       
    };
}
)();
