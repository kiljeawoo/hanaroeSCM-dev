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
                this.set_name("pagingBTN");
                this._setFormPosition(0,0,338,29);
            }
            this.style.set_background("#ffffffff");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "294", "10", "12", "15", null, null, this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "0", "228", "10", null, null, this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_next", "absolute", "306", "8", "14", "14", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_PageNext");
            this.addChild(obj.name, obj);

            obj = new Button("btn_previous", "absolute", "18", "8", "14", "14", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_PagePrevious");
            this.addChild(obj.name, obj);

            obj = new Button("btn_end", "absolute", "324", "8", "14", "14", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PageNextP");
            this.addChild(obj.name, obj);

            obj = new Button("btn_first", "absolute", "0", "8", "14", "14", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_PagePreviousP");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "0", "24", "228", "5", null, null, this);
            obj.set_taborder("17");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "9.47%", "9", null, "15", "86.98%", null, this);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("sta_page4", "absolute", "254", "0", "43", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_page3", "absolute", "200", "0", "43", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("4");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_page2", "absolute", "146", "0", "43", "29", null, null, this);
            obj.set_taborder("26");
            obj.set_text("3");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_page1", "absolute", "92", "0", "43", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_text("2");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_page0", "absolute", "38", "0", "43", "29", null, null, this);
            obj.set_taborder("28");
            obj.set_text("1");
            obj.set_cssclass("sta_WF_PageS");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 338, 29, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pagingBTN");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("pagingBTN_5.xfdl", "lib::comLib.xjs");
        this.registerScript("pagingBTN_5.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var iStartPageNo    = 0;   // 전체 페이지 순서
        var iUnitSelRowNo   = 0;  // 한번 Server호출시 가져올 row갯수
        var iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        var iMaxPageNum     = 5;  // 화면에 보여줄 최대 Page번호 갯수
        //var iServerRowCount = 30;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        var iTotCnt = 0;
        var lsDivPage = "";//페이지 컴포넌트 경로
        var lsDivPageNum = "";//총건수 컴포넌트 경로
        var lsTotCntDst = "";//총건수 사용여부
        var lsFuncNm = "";//화면호출변수명
        var objDivNm =""; //부모디비전명

        this.btn_page_onclick = function(obj,e)
        {
        	var iNo = new Number(obj.text);
        	var iPageNo = iNo % 5;

        	objDivNm = obj.parent.name;
        	
        	if (iPageNo == 0)
        	{
        		iPageNo = 5;
        	}
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		//eval(lsFuncNm + "(" +  iNo + ")");
        		this.lookupFunc(lsFuncNm + "(" +  iNo + ")").call();
        	} else	{
        		this.lookupFunc("fn_paging").call(iNo,objDivNm);
        	}
        	
        	this.fn_btnColorSet(iPageNo-1);
           
        }

        //-------------------------------------------------------------------------------------------------
        // Page번호 Setting
        //-------------------------------------------------------------------------------------------------
        this.fn_SetPageNo = function(iVStartPageNo){

        	var sPage   = iVStartPageNo*iMaxPageNum;
        	var iPageNo = 0;	//페이지번호

        	// 이전버튼 처리
        	if(iVStartPageNo < 1){
        		this.btn_first.set_visible(false);
        		this.btn_previous.set_visible(false);
        	} else {
        		this.btn_first.set_visible(true);
        		this.btn_previous.set_visible(true);
        	}

        	// 마지막 버튼 처리
        	if(iTotCnt <= ((sPage + 5 )*iUnitSelRowNo)){
        		this.btn_next.set_visible(false);
        		this.btn_end.set_visible(false);		
        	}else{
        		this.btn_next.set_visible(true);
        		this.btn_end.set_visible(true);	
        	}

        	var nCnt = "";
        	// 인덱스 번호 처리
        	for(var i=0; i<iMaxPageNum; i++){
        		iPageNo = sPage+i+1;
        		this.all["sta_page"+i].set_visible(true);
        		this.all["sta_page"+i].set_text(iPageNo);
        		this.all["sta_page"+i].set_tooltiptext(iPageNo);
        		
        		if (iTotCnt > ((iPageNo - 1 )*iUnitSelRowNo))
        		{
        			this.all["sta_page"+i].set_visible(true);
        			nCnt = i;			
        		}else
        		{
        			this.all["sta_page"+i].set_visible(false);
        		}
        	}
        	
        	this.fn_setButtonOrder(nCnt+1);
        }

        this.btn_next_onclick = function(obj,e)
        {
        	iStartPageNo=iStartPageNo+1;
        	
        	this.fn_SetPageNo(iStartPageNo);
        	this.fn_btnColorSet(0);//버튼색상설정	
        	objDivNm   = obj.parent.name;
        	var iValue = (iStartPageNo*iMaxPageNum) + 1;
        	
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		this.all[lsFuncNm + "(" +  iValue + ")"];
        	} else
        	{
        		this.lookupFunc("fn_paging").call(iValue, objDivNm);
        	}
        }

        this.btn_previous_onclick = function(obj,e)
        {
        	iStartPageNo=iStartPageNo-1;
        	this.fn_SetPageNo(iStartPageNo);	
        	this.fn_btnColorSet(9);//버튼색상설정
        	objDivNm = obj.parent.name;
        	var iValue = ((iStartPageNo + 1)*iMaxPageNum);
        	
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		this.all[lsFuncNm + "(" +  iValue + ")"];
        	} else
        	{
        		this.lookupFunc("fn_paging").call(iValue, objDivNm);
        	}	
        }

        this.btn_first_onclick = function(obj,e)
        {
        	iStartPageNo=0;
        	this.fn_SetPageNo(iStartPageNo);	
        	this.fn_btnColorSet(0);//버튼색상설정
        	objDivNm = obj.parent.name;
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		this.all[lsFuncNm + "(" +  1 + ")"];
        	} else
        	{
        		this.lookupFunc("fn_paging").call(1, objDivNm);
        	}		

        }

        this.btn_end_onclick = function(obj,e)
        {
        	iStartPageNo = parseInt(iTotCnt / (iUnitSelRowNo * 5));
        	
            var iNam = iTotCnt % iUnitSelRowNo;//나머지

        	var iValue = parseInt((iTotCnt/iUnitSelRowNo)) % 5;

        	var jValue = parseInt((iTotCnt / iUnitSelRowNo)) + 1;	
        	var jTValue = parseInt(jValue % 5);//페이지 끝번호
        	
        	
        	
        	objDivNm = obj.parent.name;

        	if (iNam == 0)
        	{
        		iValue = iValue - 1;
        		jValue = jValue - 1;
        		//iStartPageNo = iStartPageNo -1;
        	}
        	
        	if (iValue == -1)
        	{
        		iValue = 9;
        	}

        	if (iNam == 0)
        	{
        		jTValue = parseInt(jValue % 5);//페이지 끝번호
        		
        		if (jTValue == 0)
        		{
        			iStartPageNo = iStartPageNo-1;
        			this.fn_SetPageNo(iStartPageNo);			
        		} else
        		{
        			this.fn_SetPageNo(iStartPageNo);			
        		}
        	} else
        	{
        		this.fn_SetPageNo(iStartPageNo);	
        	}
        	
        	this.fn_btnColorSet(iValue);//버튼색상설정

        
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		this.all[lsFuncNm + "(" +  jValue + ")"];
        	} else
        	{
        		this.lookupFunc("fn_paging").call(jValue,objDivNm);
        	}	
        }

        //업무화면에서 호출
        this.fn_pageSet = function(sTotalRowCnt,sPageSize,sdivPage,sNowPage,sCalFuncNm,sTotCntDst,sDivPageNum)
        {
        	iTotCnt = sTotalRowCnt;
        	
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(sCalFuncNm))
        	{
        		lsFuncNm = sCalFuncNm;
        	}
        		
        	if (iTotCnt > 0)
        	{
        		//this.all[sdivPage].visible = true; //2015
        		this.set_visible(true);
        		 
        	} else
        	{

        		if (this.gfn_isNull(sTotalRowCnt))
        		{	
        			
        		}	
        		//this.all[sdivPage].visible = false; //2015
        		this.set_visible(false);
        	}
        	
        	iUnitSelRowNo = sPageSize;
        	
        	//현재페이지가 첫 페이지 일경우
        	if (sNowPage == 1)
        	{
        		iStartPageNo=0;	
        	}
        	
        	this.fn_SetPageNo(iStartPageNo);	
        		
        	//현재페이지가 첫 페이지 일경우
        	if (sNowPage == 1)
        	{
        		this.fn_btnColorSet(0);
        	}		
        }

        //버튼색상설정
        this.fn_btnColorSet = function(sNo)
        {	
            
        	for (var iLoop=0;iLoop < 5; iLoop++)
        	{
        		if (iLoop == sNo)
        		{
        			this.all["sta_page"+iLoop].set_cssclass("sta_WF_PageS");
        		} else
        		{
        			this.all["sta_page"+iLoop].set_cssclass("sta_WF_Page");		
        		}
        	}
        	
        	this.fn_setButtonPos();//버튼위치조정	
        }

        /***********************************************************************************************
         * 함수명     : this.fn_setButtonPos()
         * 설명       : 버튼위치 세팅
         * parameter   : void
         * return      : void
        ***********************************************************************************************/ 
        this.fn_setButtonPos = function() {
        	
        	var iPos = 5;
        	
        	for (var iLoop=0;iLoop < 5; iLoop++)
        	{
        		if (this.all["sta_page"+iLoop].visible == false)
        		{
        			iPos = iLoop;
        			break;
        		} 
        	}
        	
        	this.fn_setButtonOrder(iPos);
        }

        /***********************************************************************************************
         * 함수명     : fn_setButtonOrder()
         * 설명       : 버튼위치 정렬
         * parameter   : iPos - 안보이는 버튼 시작위치
         * return      : void
        ***********************************************************************************************/ 
        this.fn_setButtonOrder = function(iPos) 
        {
        	if (iPos == 5)
        	{
        		this.btn_first.set_left(0);
        		this.btn_previous.set_left(18);
        		this.btn_next.set_left(306);
        		this.btn_end.set_left(324);
        		
        		this.sta_page0.set_left(38);
        		this.sta_page1.set_left(92);
        		this.sta_page2.set_left(146);
        		this.sta_page3.set_left(200);
        		this.sta_page4.set_left(254);		
        		
        	} else if (iPos == 1)
        	{
        		this.btn_first.set_left(102);//18
        		this.btn_previous.set_left(120);//26
        		
        		this.sta_page0.set_left(146);
        		
        	} else if (iPos == 2)
        	{
        		this.btn_first.set_left(75);
        		this.btn_previous.set_left(93);
        		
        		this.sta_page0.set_left(119);
        		this.sta_page1.set_left(173);
        		
        	} else if (iPos == 3)
        	{
        		this.btn_first.set_left(48);
        		this.btn_previous.set_left(66);
        		
        		this.sta_page0.set_left(92);
        		this.sta_page1.set_left(146);
        		this.sta_page2.set_left(200);
        					
        	} else if (iPos == 4)
        	{
        		this.btn_first.set_left(21);
        		this.btn_previous.set_left(39);
        		
        		this.sta_page0.set_left(65);
        		this.sta_page1.set_left(119);
        		this.sta_page2.set_left(173);
        		this.sta_page3.set_left(227);
        	}		
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize", this.pagingBTN_onsize, this);
            this.btn_next.addEventHandler("onclick", this.btn_next_onclick, this);
            this.btn_previous.addEventHandler("onclick", this.btn_previous_onclick, this);
            this.btn_end.addEventHandler("onclick", this.btn_end_onclick, this);
            this.btn_first.addEventHandler("onclick", this.btn_first_onclick, this);
            this.sta_page4.addEventHandler("onclick", this.btn_page_onclick, this);
            this.sta_page3.addEventHandler("onclick", this.btn_page_onclick, this);
            this.sta_page2.addEventHandler("onclick", this.btn_page_onclick, this);
            this.sta_page1.addEventHandler("onclick", this.btn_page_onclick, this);
            this.sta_page0.addEventHandler("onclick", this.btn_page_onclick, this);

        };

        this.loadIncludeScript("pagingBTN_5.xfdl", true);

       
    };
}
)();
