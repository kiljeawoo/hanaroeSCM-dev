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
                this.set_name("OMG_DS_SC_6513");
                this.set_titletext("청구및 납부내역");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static87", "absolute", "98.13%", "1", "15", "1195", null, null, this);
            obj.set_taborder("1");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "1.12%", "445", null, "20", "-26.28%", null, this);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "2.86%", "613", null, "20", "-22.54%", null, this);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "1.49%", "9", null, "21", "78.08%", null, this);
            obj.set_taborder("13");
            obj.set_text("청구 및 납부내역");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result", "absolute", "1.49%", "39", null, "207", "15", null, this);
            obj.set_taborder("65");
            obj.set_binddataset("ds_dataD");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사용월\"/><Cell col=\"1\" text=\"사용료\"/><Cell col=\"2\" text=\"할인할증\"/><Cell col=\"3\" text=\"공급가\"/><Cell col=\"4\" text=\"부가세\"/><Cell col=\"5\" text=\"청구액\"/><Cell col=\"6\" text=\"반영액\"/><Cell col=\"7\" text=\"잔액\"/><Cell col=\"8\" text=\"납부상태\"/><Cell col=\"9\" text=\"입금일\"/><Cell col=\"10\" text=\"방법\"/><Cell col=\"11\" text=\"은행\"/><Cell col=\"12\" text=\"계좌번호\"/><Cell col=\"13\" text=\"적요\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" cssclass=\"Cellgrd_WF_AlignRight\" mask=\"####/##\"/><Cell col=\"1\" displaytype=\"number\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"3\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"4\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"6\" displaytype=\"number\"/><Cell col=\"7\" displaytype=\"number\"/><Cell col=\"8\"/><Cell col=\"9\" mask=\"####-##-##\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" text=\"합계\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0%", "1", null, "1195", "98.51%", null, this);
            obj.set_taborder("66");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "1.49%", "265", null, "21", "79.7%", null, this);
            obj.set_taborder("67");
            obj.set_text("납부방식 변경내역");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "1.49%", "246", null, "20", "-23.91%", null, this);
            obj.set_taborder("68");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result00", "absolute", "1.49%", "287", null, "159", "15", null, this);
            obj.set_taborder("69");
            obj.set_binddataset("ds_dataD");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"46\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"123\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"123\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"변경일자\"/><Cell col=\"2\" colspan=\"5\" text=\"변경전\"/><Cell col=\"7\" colspan=\"5\" text=\"변경후\"/><Cell row=\"1\" col=\"2\" text=\"방법\"/><Cell row=\"1\" col=\"3\" text=\"은행\"/><Cell row=\"1\" col=\"4\" text=\"계좌번호\"/><Cell row=\"1\" col=\"5\" text=\"출금일\"/><Cell row=\"1\" col=\"6\" text=\"사업자/주민번호\"/><Cell row=\"1\" col=\"7\" text=\"방법\"/><Cell row=\"1\" col=\"8\" text=\"은행\"/><Cell row=\"1\" col=\"9\" text=\"계좌번호\"/><Cell row=\"1\" col=\"10\" text=\"출금일\"/><Cell row=\"1\" col=\"11\" text=\"사업자/주민번호\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_AlignRight\" mask=\"####/##/##\"/><Cell col=\"2\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"7\" displaytype=\"normal\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.49%", "465", null, "21", "79.7%", null, this);
            obj.set_taborder("70");
            obj.set_text("통장입금내역");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result01", "absolute", "1.49%", "487", null, null, "15", "-124", this);
            obj.set_taborder("71");
            obj.set_binddataset("ds_dataD");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"92\"/><Column size=\"144\"/><Column size=\"92\"/><Column size=\"218\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"입금반영일자\"/><Cell col=\"1\" text=\"은행\"/><Cell col=\"2\" displaytype=\"number\" text=\"입금반영금액\"/><Cell col=\"3\" text=\"납부방식\"/><Cell col=\"4\" text=\"적요\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" cssclass=\"Cellgrd_WF_AlignRight\" mask=\"####/##/##\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignRight\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("청구및 납부내역");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divSearch.edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divSearch.cbo_menuLevel","value","ds_in","MENU_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divSearch.edt_menuName","value","ds_in","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divSearch.edt_svcGroup","value","ds_in","SVC_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divSearch.edt_fileName","value","ds_in","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divSearch.edt_fileType","value","ds_in","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divSearch.cbo_displayYn","value","ds_in","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divSearch.cbo_useYn","value","ds_in","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6513.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6513.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); //공통
           this.grd_result.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
           this.grd_result00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
           this.grd_result01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분   
           /*초기값세팅*/   
           this.div_search.cbo_PAY_STS_C.set_index(0);
           this.div_search.cbo_PRC_STSC.set_index(0);
           this.div_search.cbo_pageNum.set_index(0);
           
           /*조회 호출*/
           this.btn_search.click();  
           
        }
         
         
         /*조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
         /*Paging 처리*/
        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();
        	this.ds_mb.clearData();     //Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = this.div_search.cbo_pageNum.value; //Grid에 보여줄 Row수 선택
        	var vTotalCount = 0;	//전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	this.fn_retrieveMbInqList();
        } 

        /*조회-서비스 Call*/ 
        this.fn_retrieveMbInqList = function()
        {
        	var sParams = "MB_ID="+this.gfn_nullToEmpty(this.div_search.edt_MB_ID.value)
        				+ " USR_NM="+this.gfn_nullToEmpty(this.div_search.edt_USR_NM.value)
        				+ " PAY_STS_C="+this.gfn_nullToEmpty(this.div_search.cbo_PAY_STS_C.value)
        				+ " NA_TRPL_C="+this.gfn_nullToEmpty(this.div_search.edt_NA_TRPL_C.value)
        				+ " CLNTNM="+this.gfn_nullToEmpty(this.div_search.edt_CLNTNM.value)
        				+ " PRC_STSC="+this.gfn_nullToEmpty(this.div_search.cbo_PRC_STSC.value)
        				;
        	
        	var sSvcID        = "mbList";
        	var sURL          ="svc::rest/mg/mbcslt/retrieveMbInqList";	
        	 
        	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_mb=ds_mb ds_pageVO=ds_pageVO" ;	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*팝업호출확인하기*/
        this.fn_popupAfter = function(strId,strVal)
        {	
        	this.btn_search.click();  
        }

        
         /*체크박스선택시 이벤트*/
        this.Div02_Grid01_onheadclick = function(obj,e)
        {	
        	if(e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        	var page_size    = this.ds_pageVO.getColumn(0,"PAGE_SIZE");
        	var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        	
        	this.ds_mb.addColumn("CHK", "string");
        	this.ds_mb.addColumn("NUMBER", "string");
        	
        	for(var i = 0 ; i < this.ds_mb.rowcount; i++)
        	{
        		this.ds_mb.setColumn(i,"CHK",0);
        	 	//this.ds_mb.setColumn(i,"NUMBER",(current_page-1)*(page_size)+(i+1));
        		this.ds_mb.setColumn(i,"NUMBER",sTotal - (current_page-1) * page_size - i);
        	}
        	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "mbList"){			
        	 		if(this.ds_mb.rowcount > 0)
        				{ 		
        					this.div_list.div_paging.fn_pageSet(sTotal, page_size,"div_paging",current_page);	
        				}	
        	 		else if(this.ds_mb.rowcount == 0){
        	 			//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        	 			this.div_list.div_paging.fn_pageSet(0, 0,"div_paging",current_page);
        	 		}
        		}else{
        			if(this.ds_mb.rowcount == 0){
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}
        		this.resetScroll();	
        	}	
        }
         

        this.btn_MB_INF_onclick = function(obj,e)
        {
        	var checkCnt =0 ;	//선택된 체크박스 개수
        	var position =0 ;	//선택된 체크박스 위치
        	for(var i = 0 ; i < this.ds_mb.rowcount; i++){		
        		if(this.ds_mb.getColumn(i, "CHK") =="1"){
        			checkCnt = checkCnt +1;			
        			position = i;
        		}
        	}

        	if(checkCnt > 1){
        		alert("하나만 선택해주시기 바랍니다.");
        		this.ds_param.clearData();
        		return;
        	}else if(checkCnt == 0){
        		alert("회원정보를 보기 위한 회원을 선택해 주시기 바랍니다.");
        		this.ds_param.clearData();
        		return;
        	}else{
        		var mb_id = this.ds_mb.getColumn(this.ds_mb.rowposition, "MB_ID");
        		alert("MB_ID=" + mb_id);
        		var oArg = {paramMode:"U", dsArg:this.ds_mb, MB_ID:mb_id};
        		var sOption = "autosize=true,title=true";
        		var sPopupCallBack = "fn_popupAfter";       
        		//this.gfn_openPopup("popId","OMG.MG::OMG_DS_SC_6511.xfdl",oArg,sOption,sPopupCallBack);
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6513.xfdl", true);

       
    };
}
)();
