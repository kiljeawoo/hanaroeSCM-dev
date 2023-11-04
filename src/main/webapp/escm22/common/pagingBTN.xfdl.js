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
                this.set_scrollbars("none");
                this._setFormPosition(0,0,379,29);
            }
            this.style.set_background("#ffffffff");
            this.style.set_padding("0 0 0 0");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static11", "absolute", "0", "0", "228", "10", null, null, this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_next", "absolute", "344", "10", "14", "14", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_PageNext");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Button("btn_previous", "absolute", "18", "10", "14", "14", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_PagePrevious");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Button("btn_end", "absolute", "362", "10", "14", "14", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PageNextP");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Button("btn_first", "absolute", "0", "10", "14", "14", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_PagePreviousP");
            obj.style.set_cursor("hand");
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

            obj = new Static("sta_page9", "absolute", "312", "10", "30", "16", null, null, this);
            obj.set_taborder("19");
            obj.set_text("888");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("sta_page8", "absolute", "282", "10", "30", "16", null, null, this);
            obj.set_taborder("20");
            obj.set_text("888");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("sta_page7", "absolute", "252", "10", "30", "16", null, null, this);
            obj.set_taborder("21");
            obj.set_text("888");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("sta_page6", "absolute", "222", "10", "30", "16", null, null, this);
            obj.set_taborder("22");
            obj.set_text("888");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("sta_page5", "absolute", "192", "10", "30", "16", null, null, this);
            obj.set_taborder("23");
            obj.set_text("888");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("sta_page4", "absolute", "162", "10", "30", "16", null, null, this);
            obj.set_taborder("24");
            obj.set_text("888");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("sta_page3", "absolute", "132", "10", "30", "16", null, null, this);
            obj.set_taborder("25");
            obj.set_text("888");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("sta_page2", "absolute", "102", "10", "30", "16", null, null, this);
            obj.set_taborder("26");
            obj.set_text("888");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("sta_page1", "absolute", "72", "10", "30", "16", null, null, this);
            obj.set_taborder("27");
            obj.set_text("888");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("sta_page0", "absolute", "42", "10", "30", "16", null, null, this);
            obj.set_taborder("28");
            obj.set_text("888");
            obj.set_cssclass("sta_WF_PageS");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 379, 29, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pagingBTN");
            		p.style.set_background("#ffffffff");
            		p.style.set_padding("0 0 0 0");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("pagingBTN.xfdl", "lib::comLib.xjs");
        this.registerScript("pagingBTN.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var iStartPageNo    = 0;   // 전체 페이지 순서
        var iUnitSelRowNo   = 0;  // 한번 Server호출시 가져올 row갯수
        var iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        var iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        //var iServerRowCount = 30;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        var iTotCnt = 0;
        var lsDivPage = "";//페이지 컴포넌트 경로
        var lsDivPageNum = "";//총건수 컴포넌트 경로
        var lsTotCntDst = "";//총건수 사용여부
        var lsFuncNm = "";//화면호출변수명
        var objDivNm =""; //부모디비전명
        var currentPage = 0;
        var pageInfoDivName = "div_page_"; //페이지정보 DIV 이름

        this.pagingBTN_onload = function(obj,e)
        {
        	/*
        	var parentWidth = (obj.parent.getOffsetWidth()/2);
        	var divWidth    = (this.width/2);
        	this.set_left(parentWidth-divWidth);
        	*/
        }

        this.btn_page_onclick = function(obj,e)
        {
        	var iNo = new Number(obj.text);
        	currentPage = iNo;
        	var iPageNo = iNo % 10;
        	//objDivNm = obj.parent.name;
        	
        	if (iPageNo == 0)
        	{
        		iPageNo = 10;
        	}
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		//eval(lsFuncNm + "(" +  iNo + ")");
        		this.lookupFunc(lsFuncNm).call(iNo,objDivNm);
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
        	if(iTotCnt <= ((sPage + 10 )*iUnitSelRowNo)){
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
        	
        	this.fn_setButtonOrder();
        }

        this.btn_next_onclick = function(obj,e)
        {
        	iStartPageNo=iStartPageNo+1;
        	
        	this.fn_SetPageNo(iStartPageNo);
        	this.fn_btnColorSet(0);//버튼색상설정	
        	//objDivNm   = obj.parent.name;
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
        	//objDivNm = obj.parent.name;
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
        	//objDivNm = obj.parent.name;
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
        	iStartPageNo = parseInt(iTotCnt / (iUnitSelRowNo * 10));
        	
            var iNam = iTotCnt % iUnitSelRowNo;//나머지

        	var iValue = parseInt((iTotCnt/iUnitSelRowNo)) % 10;

        	var jValue = parseInt((iTotCnt / iUnitSelRowNo)) + 1;	
        	var jTValue = parseInt(jValue % 10);//페이지 끝번호
        	
        	//objDivNm = obj.parent.name;

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
        		jTValue = parseInt(jValue % 10);//페이지 끝번호
        		
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
        	
        	objDivNm = sdivPage;
        	
        	var grdId = '';
        	if(sdivPage.indexOf(',') != -1){
        		grdId = sdivPage.split(",")[0].trim();	
        		sdivPage = sdivPage.split(",")[1].trim();
        		objDivNm = sdivPage;
        	}
        	
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
        		
        	//페이지 정보 표시
        	if(grdId){
        		var grd = this.parent.all[grdId];
        		grd.addEventHandler('onsize',this.fn_setButtonOrder,this);
        		currentPage = sNowPage;
        		this.pageInfoText(grdId, sdivPage);
        	}	
        	
        }

        //업무화면에서 호출
        this.fn_pageSetText = function(sTotalRowCnt,sPageSize,sdivPage,sNowPage,sCalFuncNm,sTotCntDst,sDivPageNum)
        {
        	var grdId = '';
        	if(sdivPage.indexOf(',') != -1){
        		grdId = sdivPage.split(",")[0].trim();	
        		sdivPage = sdivPage.split(",")[1].trim();
        		objDivNm = sdivPage;
        	}
        	
        	var grd = this.parent.all[grdId];
        	grd.addEventHandler('onsize',this.fn_setButtonOrder,this);
        	currentPage = sNowPage;
        	this.pageInfoOnlyText(grdId, sdivPage, sTotalRowCnt);
        }

        this.pageInfoOnlyText = function(grdId,sdivPage,sTotalRowCnt){
        	
        	var pageDiv = this.parent.all[sdivPage];
        	var grd = this.parent.all[grdId];
        	var parentDiv = grd.parent;
        	var ds = grd.getBindDataset();
        	var rowCnt = ds.getRowCount();
        	var totPage = 0;
        	if(rowCnt != 0){
        		totPage = parseInt(iTotCnt/iUnitSelRowNo);
        		var n = iTotCnt%iUnitSelRowNo;
        		if(n != 0){
        			totPage +=1;
        		}
        	}
        	
        	var pageText = '';
        	
        	
        	if(!iTotCnt) iTotCnt = 0;
        	pageText += ' 총 '+sTotalRowCnt+'건이 검색되었습니다.';
        	
        	var grdLeft = grd.getOffsetLeft();
        	var grdTop = grd.getOffsetTop();
        	var divWidth = 250;
        	var divHeight = 20;
        	
        	if(!parentDiv.all[pageInfoDivName+grdId]){
        		var objDiv = new Div(pageInfoDivName+grdId, "absolute", grdLeft, grdTop-divHeight, divWidth+"px", divHeight+"px");
        		objDiv.style.set_align("left");
        		objDiv.set_text(pageText);
        		parentDiv.addChild(pageInfoDivName+grdId, objDiv); 
        		objDiv.show();
        	}else{
        		var objDiv = parentDiv.all[pageInfoDivName+grdId];
        		objDiv.set_text(pageText);
        	}
        };

        this.pageInfoText = function(grdId,sdivPage){
        	
        	var pageDiv = this.parent.all[sdivPage];
        	var grd = this.parent.all[grdId];
        	var parentDiv = grd.parent;
        	var ds = grd.getBindDataset();
        	var rowCnt = ds.getRowCount();
        	var totPage = 0;
        	if(rowCnt != 0){
        		totPage = parseInt(iTotCnt/iUnitSelRowNo);
        		var n = iTotCnt%iUnitSelRowNo;
        		if(n != 0){
        			totPage +=1;
        		}
        	}
        	
        	var pageText = '';
        	
        	if(totPage == 0){
        		pageText = '[ 0 / 0 ]';
        	}else{
        		pageText = '[ '+currentPage+' / '+totPage+' ]';
        	}
        	
        	if(!iTotCnt) iTotCnt = 0;
        	pageText += ' 총 '+iTotCnt+'건이 검색되었습니다.';
        	
        	var grdLeft = grd.getOffsetLeft();
        	var grdTop = grd.getOffsetTop();
        	var divWidth = 250;
        	var divHeight = 20;
        	
        	if(!parentDiv.all[pageInfoDivName+grdId]){
        		var objDiv = new Div(pageInfoDivName+grdId, "absolute", grdLeft, grdTop-divHeight, divWidth+"px", divHeight+"px");
        		objDiv.style.set_align("left");
        		objDiv.set_text(pageText);
        		parentDiv.addChild(pageInfoDivName+grdId, objDiv); 
        		objDiv.show();
        	}else{
        		var objDiv = parentDiv.all[pageInfoDivName+grdId];
        		objDiv.set_text(pageText);
        	}
        };

        this.clearPageInfo = function(){
        	
        	var comp = this.parent.all;
        	
        	for(var i=0 ; i<comp.length; i++){
        		
        		var compType = comp[i].valueOf();
        		if(compType == "[object Div]"){
        			trace(comp[i].id);
        		}
        		
        	
        	}
        	

        };

        
        //버튼색상설정
        this.fn_btnColorSet = function(sNo)
        {	
            
        	for (var iLoop=0;iLoop < 10; iLoop++)
        	{
        		if (iLoop == sNo)
        		{
        			this.all["sta_page"+iLoop].set_cssclass("sta_WF_PageS");
        		} else
        		{
        			this.all["sta_page"+iLoop].set_cssclass("sta_WF_Page");		
        		}
        	}
        	
        	this.fn_setButtonOrder();//버튼위치조정	
        }

        this.getMaxPageNum = function(){
        	
        	var iPos = 10;	
        	for (var iLoop=0;iLoop < 10; iLoop++)
        	{
        		if (this.all["sta_page"+iLoop].visible == false)
        		{
        			iPos = iLoop;
        			break;
        		} 
        	}
        	return iPos;
        }

        /***********************************************************************************************
         * 함수명     : lfn_setButtonOrder()
         * 설명       : 버튼위치 정렬
         * parameter   : 
         * return      : void
        ***********************************************************************************************/ 
        this.fn_setButtonOrder = function() 
        {		
        	var iPos = this.getMaxPageNum();
        	
        	if(iPos < 1 ) return;
        	
        	this.set_left(0);
        	this.set_width(788);
        	this.set_height(30);
        	this.set_scrollbars('none');
        	this.set_style("align:center");
        	
        	var pageAllComp = [this.btn_first,this.btn_previous,this.btn_next,this.btn_end,
        		this.sta_page0,
        		this.sta_page1,
        		this.sta_page2,
        		this.sta_page3,
        		this.sta_page4,
        		this.sta_page5,
        		this.sta_page6,
        		this.sta_page7,
        		this.sta_page8,
        		this.sta_page9
        	];
        	
        	var pageComp = [
        		this.sta_page0,
        		this.sta_page1,
        		this.sta_page2,
        		this.sta_page3,
        		this.sta_page4,
        		this.sta_page5,
        		this.sta_page6,
        		this.sta_page7,
        		this.sta_page8,
        		this.sta_page9
        	];
        	
        	var pageTextLength = this.all["sta_page"+(iPos-1)].text.length;
        	
        	//사이즈 조절(default:1글자 20px, 1글자 증가 +5)
        	var default_width = 20 + (pageTextLength-1) * 5;
        	for(var i=0 ; i< iPos ; i++){
        		pageComp[i].set_width(default_width);
        	}
        	
        	//위치 조정
        	var padding1 = 3; //(처음,이전) or (다음,마지막) 버튼 사이 간격
        	var padding2 = 7; //(이전버튼,시작숫자) or (마지막숫자,다음버튼) 사이 간격
        	var padding3 = 4; // 숫자 사이 간격
        	
        	//가운데 정렬
        	var total_width = 0;
        	for(var i=0 ; i<pageAllComp.length ; i++){
        		
        		if(pageAllComp[i].visible == true){
        			total_width += pageAllComp[i].width*1;
        			if(i==0 || i==3) total_width += padding1;
        			else if(i==1 || i==2) total_width += padding2;
        			else total_width += padding3;
        		}
        	}
        	
        	this.set_width(total_width);
        	var pWidth = this.parent.getOffsetWidth();
        	var mLeft = (pWidth-total_width)/2;
        	this.set_left(mLeft);
        	
        	var startLeft = 0;
        	var startWidth = 0;	
        	if(this.btn_first.visible == true){
        		this.btn_first.set_left(startLeft);		
        		startLeft = this.btn_first.left*1;
        		startWidth = this.btn_first.width*1;
        	}
        	if(this.btn_previous.visible == true){
        		this.btn_previous.set_left(startLeft + startWidth + padding1);
        		startLeft = this.btn_previous.left*1;
        		startWidth = this.btn_previous.width*1;
        	}
        	
        	for(var i=0 ; i<iPos ; i++){
        	
        		if(i==0){
        			if(startLeft == 0 && startWidth == 0) pageComp[i].set_left(0);
        			else pageComp[i].set_left(startLeft + startWidth + padding2);
        		}else{ 
        			pageComp[i].set_left(pageComp[i-1].left*1 + pageComp[i-1].width*1 + padding3);
        		}		
        		if(i==iPos-1){
        			startLeft = pageComp[i].left;
        			startWidth = pageComp[i].width;
        		}
        	}
        	
        	if(this.btn_next.visible == true){
        		this.btn_next.set_left(startLeft + startWidth + padding2);
        		startLeft = this.btn_next.left*1;
        		startWidth = this.btn_next.width*1;
        	}
        	if(this.btn_end.visible == true){
        		this.btn_end.set_left(startLeft + startWidth + padding2);
        	}
        }

        //페이지 이벤트
        this.addPageEvent = function(param){

        	var form = param.form;
        	var m_grd = param.m_grd;
        	var m_ds = m_grd.getBindDataset();
        	var m_pageDiv = param.m_pageDiv;
        	var m_afterFnc = param.m_afterFnc;
        	
        	var d_grd = param.d_grd;	
        	var d_ds = d_grd.getBindDataset();
        	var d_pageDiv = param.d_pageDiv;
        	var d_afterFnc = param.d_afterFnc;
        	
        	//그리드 클릭 이벤트 등록
        	if(m_afterFnc){
        		m_grd.addEventHandler("oncellclick", m_afterFnc, form);
        		m_grd.style.set_cursor('pointer');
        	}
        	if(d_afterFnc){ 
        		d_grd.addEventHandler("oncellclick", d_afterFnc, form);
        		d_grd.style.set_cursor('pointer');
        	}
        	
        	var pageInfo = {
        		form: form,
        		m_grd: m_grd,
        		m_ds: m_ds,
        		m_pageDiv: m_pageDiv,
        		d_grd: d_grd,
        		d_ds: d_ds,
        		d_pageDiv: d_pageDiv
        	}	
        	m_ds.pageInfo = pageInfo;
        	m_ds.addEventHandler('onload', this.pageCompHide, this);
        };

        this.pageCompHide = function(obj,e){

        	var pageInfo = obj.pageInfo;
        	pageInfo.d_ds.clearData(); 

        	//var pageDiv = this.all[pageInfoDivName+d_grd.id];
        	
        	if(pageInfo.d_ds.getRowCount() == 0){
        		var page = pageInfo.d_pageDiv.components;
        		for(var i=0; i<page.length ; i++){
        			page[i].set_visible(false);
        		}
        		var pageInfo = pageInfo.d_grd.parent.all[pageInfoDivName+pageInfo.d_grd.name];
        		if(pageInfo){
        			pageInfo.set_text('[ 0 / 0 ] 총 0건이 검색되었습니다.');
        		}
        	}
        };
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.pagingBTN_onload, this);
            this.btn_next.addEventHandler("onclick", this.btn_next_onclick, this);
            this.btn_previous.addEventHandler("onclick", this.btn_previous_onclick, this);
            this.btn_end.addEventHandler("onclick", this.btn_end_onclick, this);
            this.btn_first.addEventHandler("onclick", this.btn_first_onclick, this);
            this.sta_page9.addEventHandler("onclick", this.btn_page_onclick, this);
            this.sta_page8.addEventHandler("onclick", this.btn_page_onclick, this);
            this.sta_page7.addEventHandler("onclick", this.btn_page_onclick, this);
            this.sta_page6.addEventHandler("onclick", this.btn_page_onclick, this);
            this.sta_page5.addEventHandler("onclick", this.btn_page_onclick, this);
            this.sta_page4.addEventHandler("onclick", this.btn_page_onclick, this);
            this.sta_page3.addEventHandler("onclick", this.btn_page_onclick, this);
            this.sta_page2.addEventHandler("onclick", this.btn_page_onclick, this);
            this.sta_page1.addEventHandler("onclick", this.btn_page_onclick, this);
            this.sta_page0.addEventHandler("onclick", this.btn_page_onclick, this);

        };

        this.loadIncludeScript("pagingBTN.xfdl", true);

       
    };
}
)();
