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
                this.set_name("OMG_DS_SC_1111_1");
                this.set_titletext("주소조회확인");
                this.set_visible("true");
                this._setFormPosition(0,0,456,382);
            }
            this.style.set_border("2 solid #067394ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_zip", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"POST_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"PROVNM\" type=\"STRING\" size=\"256\"/><Column id=\"CCWNM\" type=\"STRING\" size=\"256\"/><Column id=\"TTVNM\" type=\"STRING\" size=\"256\"/><Column id=\"RODNM_C\" type=\"STRING\" size=\"256\"/><Column id=\"RODNM\" type=\"STRING\" size=\"256\"/><Column id=\"BLD_NO_MHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BLD_NO_SHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CCWN_BLDNM\" type=\"STRING\" size=\"256\"/><Column id=\"LWDG_C\" type=\"STRING\" size=\"256\"/><Column id=\"LWDGNM\" type=\"STRING\" size=\"256\"/><Column id=\"LTNO_MHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"LTNO_SHZNO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">13</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("btn_newTop", "absolute", "0", "0", "456", "30", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Button("btn_newClose", "absolute", "416", "0", "37", "30", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_zipSearch", "absolute", null, "47", "58", "21", "15", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "43", "17", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_search", "absolute", "15", "10", "390", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_value("홍제동");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_zip", "absolute", "17", "134", null, "163", "17", null, this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_zip");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"77\"/><Column size=\"74\"/><Column size=\"124\"/><Column size=\"106\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"1\" text=\"시도명\"/><Cell col=\"2\" text=\"시군구명\"/><Cell col=\"3\" text=\"법정동명\"/><Cell col=\"4\" text=\"우편번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:PROVNM\"/><Cell col=\"2\" text=\"bind:CCWNM\"/><Cell col=\"3\" text=\"bind:LWDGNM\"/><Cell col=\"4\" text=\"bind:ZIP\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm", "absolute", "329", "336", "54", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "385", "336", "54", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging", "absolute", "59", "297", "338", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("Div03");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 456, 382, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_3212");
            		p.set_titletext("주소조회확인");
            		p.style.set_border("2 solid #067394ff");
            		p.set_visible("true");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_1111_1.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1111_1.xfdl", function() {
        //include "lib::comLib.xjs"

        this.OMG_DS_SC_1111_1_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.btn_zipSearch_onclick = function(obj,e)
        {

        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.

        }

        this.fn_zipSearch =  function()
        {
        	
        	if(this.fn_validationCheck()){
        		
        		edtSearch = this.div_search.edt_search.value;  //조회주소
        		
        		
        		param = " edt_zip="+edtSearch;
        		
        		
        		trace("sssssssssss   :   "+ param);
        				
        		var sSvcID        = "search";//통신아이디
        		var sURL          = "svc::rest/bt/apply/retrieveZipList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        		var sOutDatasets  = "ds_zip=ds_zip ds_pageVO=ds_pageVO";		//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        

        
        /* Validation Check */
        this.fn_validationCheck = function(){

        	if(this.gfn_isNull(this.div_search.edt_search.value)){
        		this.div_search.edt_search.setFocus();
        		this.alert('조회할 주소 값을 입력 하세요.');
        		return false;
        	}
        	return true;
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
        			
        			
        // 			this.ds_copy.copyData(this.ds_bbs);
        // 				this.ds_copy.clearData();
        				
        				if(this.ds_zip.rowcount > 0)
        				{ 
        					var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        					var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        								
        					this.div_paging.fn_pageSet(sTotal, sPagesize,"div_paging",lsNowPage);	
        			
        				}else if(this.ds_zip.rowcount == 0){
        					//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        					alert("조회된 건수가 없습니다");
        					return false;
        				}
        			
        			
        			
        			
        			
        			
        			
        			
        		}
        	}
        	
        	//trace(this.ds_zip.saveXML());
        	/*
        	var conf = application.confirm("신청자 "+ this.edt_chrr.value +" 님의 신청내역이 있습니다. 조회 화면으로 이동 하시겠습니까?");
        	if(conf == true){
        		//this.parent.go("OMG.BT::OMG_DS_SC_3211.xfdl");
        		this.fn_openRequestSum();
        		
        		return true;
        	}else{
        		return false;
        	}
        	*/
        }
        /*
        this.fn_openRequestSum = function()
        {
        	" mae_bzno="+maeBzno;
        	" edt_chrr="+edtChrr;
        	" chrr_hp="+chrr_hp;
        	
        	var oArg = {paramMode:"S", dsArg:this.ds_new, mae_bzno:maeBzno, edt_chrr:edtChrr, chrr_hp:chrr_hp};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";       
        	this.gfn_openPopup("popIdCheck","OMG.BT::OMG_DS_SC_3211.xfdl",oArg,sOption,sPopupCallBack);
        }
        */
        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        }

        this.fn_afterFormOnload = function()
        {
        	trace("fn_afterFormOnload");
        }

        this.btn_newClose_onclick = function(obj,e)
        {
        	this.parent.div_addr.set_visible(false);
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.parent.div_addr.set_visible(false);
        }

        this.grd_zip_oncellclick = function(obj,e)
        {
        	if(e.cell==0){
        		this.gfn_singleChk(obj,e);	
        	}
        }

        this.btn_confirm_onclick = function(obj,e)
        {
        	var zipCode;
        	if(this.ds_zip.rowcount > 0){
        		for(var i = 0; i < this.ds_zip.rowcount; i++){
        			if(this.ds_zip.getColumn(i, "ISCHECKED") == 1)
        			{
        				zipCode = this.ds_zip.getColumn(i,"ZIP");
        				var addr1 = this.ds_zip.getColumn(i,"PROVNM");
        				var addr2 = this.ds_zip.getColumn(i,"CCWNM");
        				var addr3 = this.ds_zip.getColumn(i,"LWDGNM");
        				var addr4 = this.ds_zip.getColumn(i,"LTNO_MHZNO");
        				var addr5 = this.ds_zip.getColumn(i,"LTNO_SHZNO");
        					
        				this.fn_zipCode(zipCode, this.parent.edt_fZip, this.parent.edt_rZip);
        				this.parent.edt_dongUp.set_value(addr1 + " " + addr2 + " " + addr3);
        				this.parent.edt_dongBw.set_value(addr4 + " " + addr5);
        			}
        		}
        		if(this.gfn_isNull(zipCode)){
        			alert("입력할 주소를 체크 하세요");
        			return false;
        		}
        	}else
        	{
        		alert("주소를 조회 하세요");
        		return false;
        	}
        	
        	
        	this.parent.div_addr.set_visible(false);
        }

        //주소 변경
        this.fn_zipCode = function(strZipCode,strVal1,strVal2){
        		if(strZipCode.length == 6){

        			strVal1.set_value(strZipCode.substr(0,3));
        			strVal2.set_value(strZipCode.substr(3,5));
        		}

        }

        
        /************************************************************************************************
         * 페이징처리
        ************************************************************************************************/
        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_zip.clearData();     //Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 10; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; 	//전체건수. 화면조회후 리턴받아 사용
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);	 
        	 
        	var argumentObj = "";
        		
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	this.fn_zipSearch();
         
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_1111_1_onload, this);
            this.btn_newClose.addEventHandler("onclick", this.btn_newClose_onclick, this);
            this.btn_zipSearch.addEventHandler("onclick", this.btn_zipSearch_onclick, this);
            this.grd_zip.addEventHandler("oncellclick", this.grd_zip_oncellclick, this);
            this.btn_confirm.addEventHandler("onclick", this.btn_confirm_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1111_1.xfdl");
        this.loadPreloadList();
       
    };
}
)();
