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
                this.set_name("popup01");
                this.set_titletext("공급처 차량정보 조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,629,402);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PHD_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"SPYPL_VHC_PHD_IDVD_NO\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"VHCNO\" type=\"string\" size=\"32\"/><Column id=\"PHD_DVY_CAFFNM\" type=\"string\" size=\"32\"/><Column id=\"TELNO\" type=\"string\" size=\"32\"/><Column id=\"UYN\" type=\"string\" size=\"32\"/><Column id=\"DEL_YN\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button07", "absolute", null, "47", "53", "21", "76", null, this);
            obj.set_taborder("0");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "47", "58", "21", "16", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_master", "absolute", "17", "134", null, "188", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"41\"/><Column size=\"98\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"116\"/><Column size=\"155\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"차량번호\"/><Cell col=\"2\" text=\"기사명\"/><Cell col=\"3\" text=\"전화번호\"/><Cell col=\"4\" text=\"거래처코드\"/><Cell col=\"5\" text=\"거래처명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:VHCNO\"/><Cell col=\"2\" text=\"bind:PHD_DVY_CAFFNM\"/><Cell col=\"3\" text=\"bind:TELNO\"/><Cell col=\"4\" text=\"bind:NA_TRPL_C\"/><Cell col=\"5\" text=\"bind:CLNTNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "74", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "363", "361", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "363", "322", "91", "10", null, null, this);
            obj.set_taborder("11");
            obj.set_text("10");
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

            obj = new Button("btn_close", "absolute", null, "0", "46", "32", "4", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "243", "106", "91", "5", null, null, this);
            obj.set_taborder("38");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("39");
            obj.set_text("공급처 차량정보 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "43", "17", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "157", "0", "91", "10", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "165", "31", "91", "10", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_searchWord", "absolute", "161", "10", "414", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("rdo_searchType", "absolute", "15", "10", "143", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_searchType_innerdataset = new Dataset("rdo_searchType_innerdataset", this.div_search.rdo_searchType);
            rdo_searchType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">차량번호</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">기사명</Col></Row></Rows>");
            obj.set_innerdataset(rdo_searchType_innerdataset);
            obj.set_taborder("15");
            obj.set_displayrowcount("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_text("차량번호");
            obj.set_index("0");

            obj = new Static("Static07", "absolute", "579", "68", "91", "8", null, null, this);
            obj.set_taborder("42");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("str_text", "absolute", "183", "335", null, null, "184", "43", this);
            obj.set_taborder("43");
            obj.set_text("조건을 입력하고 조회버튼을 클릭하세요.");
            obj.set_cssclass("sta_WF_Location");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("41");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 629, 402, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("공급처 차량정보 조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0400_P00.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0400_P00.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        /*##################################################################################
         화면명	: 협력업체본지사 조회
         화면ID  	: VAN_DS_SC_0600_P00
         작성자 	: hroh
         작성일자 : 2015.07.14
        ####################################################################################*/

        this.objRtnArr = new Array(5); //팝업창 close시 전달할 값을 위한 배열 선언

        this.form_onload = function(obj,e) 
        {	
        	this.gfn_setInitForm(obj, e); //공통
        		
        	this.div_search.edt_searchWord.set_value(this.getOwnerFrame().code);	
        	this.fn_search();

        };

        this.fn_afterFormOnload = function(){	
        	
        };

        //Search
        this.fn_search = function(){
        	this.ds_dataM.clearData();	
        	
        	var searchType = this.gfn_nullToEmpty(this.div_search.rdo_searchType.value); //조회구분(1.차량번호, 2:기사명)
        	var searchWord = this.gfn_nullToEmpty(this.div_search.edt_searchWord.value); //조회단어		
        	
        	var na_trpl_c = this.gfn_nullToEmpty(this.getOwnerFrame().p_trplC); //권한사업장	
        	
        	var params =  	"searchType=" + searchType
        					+ " searchWord=" + searchWord
        					+ " TRPL_C=" + na_trpl_c;
        	
        	trace("params : " + params);	
        	
        	var sSvcID        = "retrieveCarList";//통신아이디
        	var sURL          = "svc::/rest/reserve/retrieveCarList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_car";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveCarList"){
        			//this.gfn_getMessage("alert", "result.message.save.success");
        			
        			if(this.ds_dataM.rowcount != 0){
        			
        			//초기 클릭 안되어 있게 만듬
        			this.ds_dataM.set_enableevent(false);
        			this.ds_dataM.set_rowposition(-1);
        			this.ds_dataM.set_enableevent(true);
        			//"조회결과 : ?건이 조회되었습니다."
        			this.str_text.set_text(this.gfn_getTextMessage("msg.van_ds_sc_0400_P00.view.search.result.text1")
        									+this.ds_dataM.rowcount+this.gfn_getTextMessage("msg.van_ds_sc_0400_P00.view.search.result.text2"));
        			}else if(this.ds_dataM.rowcount == 0){
        			//조회결과가 없습니다.
        			this.str_text.set_text(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        			
        			
        			}
        		}
        	}
        }

        //Close
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        //Event
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        }

        this.grd_master_oncellclick = function(obj,e)
        {		
        	
        	//연락처가 통으로 들어와 '-' 단위로 스플릿해서 나눠서 넣어줘야함	
           	var telno = this.ds_dataM.getColumn(this.ds_dataM.rowposition,"TELNO"); 	
           	var lstTelNo = telno.split('-');
           	/*
           	var vhcno = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "VHCNO");
        	var phd_dvy_caffnm = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "PHD_DVY_CAFFNM");	

        	this.opener.div_list.cbo_num01.set_value(lstTelNo[0]);
        	this.opener.div_list.mae_num02.set_value(lstTelNo[1]);
        	this.opener.div_list.mae_num03.set_value(lstTelNo[2]);
        		
        	this.opener.div_list.edt_vhcno.set_value(vhcno);
        	this.opener.div_list.edt_phd_dvy_caffnm.set_value(phd_dvy_caffnm);
        	*/
        	//this.opener.fn_search();
        		
        	this.objRtnArr[0] = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "VHCNO"); //차량번호
        	this.objRtnArr[1] = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "PHD_DVY_CAFFNM"); //기사명
        	this.objRtnArr[2] = lstTelNo[0]; //연락처1
        	this.objRtnArr[3] = lstTelNo[1]; //연락처2
        	this.objRtnArr[4] = lstTelNo[2]; //연락처3
        	trace(this.objRtnArr.toString());
        	this.close(this.objRtnArr.toString());
        	
        	this.close();
        }

        this.div_search_edt_searchWord_onkeydown = function(obj,e)
        {
        	if(e.keycode==13)
        	{
        		this.fn_search();
        	}
        	
        }

        /*초기화버튼*/
        this.Button07_onclick = function(obj,e)
        {
        	this.ds_dataM.clearData();
        	this.div_search.edt_searchWord.set_value("");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dataM.addEventHandler("onrowposchanged", this.ds_car_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_master.addEventHandler("oncellclick", this.grd_master_oncellclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_search.edt_searchWord.addEventHandler("onkeydown", this.div_search_edt_searchWord_onkeydown, this);
            this.div_search.rdo_searchType.addEventHandler("onitemchanged", this.div_search_cbo_nacode_onitemchanged, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0400_P00.xfdl", true);

       
    };
}
)();
