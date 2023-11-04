//XJS=comGrid.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        /*
         ===============================================================================
        	Grid관련 공통함수들은 여기에 작성한다. 
         ===============================================================================
         ● gfn_gridSort              : 그리드의 Sort를 처리한다.
         ● gfn_clearSortMark         : Seleted Column을 제외한 Sort Mark 제거
         ● gfn_setGridCheckAll       : 그리드 Head중 check box가 있을 경우, check box 클릭 이벤트 발생시 전체 row에 대한 check/uncheck 설정 함수
         ★ gfn_exportExcel           : 그리드를 Excel로 Export하는 함수
         ★ gfn_importExcel           : 그리드를 Excel로 Import하는 함수
         ● gfn_checkExistFindDlg     : 이전에 Find form을 띄워 놓은 것이 있다면 Close한다.
         ● gfn_getCellBind           : 그리드 cell에 바인딩된 데이타셋의 컬럼ID를 구함
         ● gfn_setImportant          : 그리드 필수입력 Column List 설정
         ● gfn_getColumnIdx          : 그리드에서 바인드된 컬럼명으로 컬럼 index를 리턴하는 함수
         ● gfn_getCellIdx            : 그리드에서 바인드된 컬럼명을 리턴하는 함수
         ● gfn_getDataset            : 해당 데이터셋명으로 검색하여 데이터셋찾아서 리턴 없으면 -1을 반환
         ● gfn_checkImportant        : 그리드 필수입력항목 체크
         ● gfn_setFocusByColumnId    : 필수입력체크시 입력안된 Component로 Focus 이동
         */

        // 헤더 클릭시 정렬
        this.fv_constAscMark    = "▼";
        this.fv_constDescMark   = "▲";
        this.fv_constSortFlag   = false;
        this.fv_exportObject    = "";
        this.fv_exportFileName  = "";
        this.fv_exportCondition = "";

        /**
         * @class 그리드의 Sort를 처리한다.
         * @param obj:Grid
         * @param e:GridClickEventInfo
         * @return None
         */  
        this.gfn_gridSort = function (obj,e)
        {
        	var strType = obj.getCellProperty("head", e.cell, "displaytype");
        	if (strType == "checkbox"){
        		return false;
        	}
        	
        	var bindDs = this.gfn_getDataset(obj.binddataset);
        	if (bindDs.rowcount == 0){
        		return false;
        	}
        	
        	var BodyColId = (obj.getCellProperty("body", e.col, "text")).toString().split(":");
        	if (BodyColId[0] != "bind"){
        		alert("정렬이 불가능한 셀입니다.");
        		return false;
        	}
        	
        	var nColspan = obj.getCellProperty("head", e.cell, "colspan");
        	if(nColspan > 1){
        		alert("정렬이 불가능한 셀입니다.");
        		return false;	
        	}
        	
        	for (var i=0; i<obj.getCellCount("head"); i++){
        		if (obj.getCellText(-1, i) == "undefined"){
        			continue;
        		}
        		var strHeadText = obj.getCellText(-1, i);
        		
        		if (i == e.cell){
        			if (strHeadText.substr(strHeadText.length - 1) == this.fv_constAscMark){
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 2) + " " + this.fv_constDescMark);
        				bindDs.set_keystring("S:-" + BodyColId[1]);
        			} else if (strHeadText.substr(strHeadText.length - 1) == this.fv_constDescMark){
        				if (strHeadText.substr(strHeadText.length - 1) == this.fv_constDescMark){
        					obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 2));
        				}
        				bindDs.set_keystring("");
        			} else {
        				obj.setCellProperty("head", i, "text", strHeadText + " " + this.fv_constAscMark);
        				bindDs.set_keystring("S:+" + BodyColId[1]);
        			}
        		} else {	// 정렬표시 삭제
        			if (strHeadText.substr(strHeadText.length - 1) == this.fv_constAscMark || strHeadText.substr(strHeadText.length - 1) == this.fv_constDescMark){
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 2));
        			}
        		}
        	}
        	
        	//정렬한후 데이터셋 ROW POSITION 첫번째로 이동
        	var strSelectType = obj.selecttype;
        	if (strSelectType == "area"){
        		obj.set_selecttype("row");
        		bindDs.set_rowposition(0);
        		obj.set_selecttype("area");
        	} else {
        		bindDs.set_rowposition(0);
        	}
        }

        /**
         * @class 그리드의 Sort Mark 제거
         * @param obj:Grid
         * @param ?(nCell: cell index)
         * @return None
         */  
        this.gfn_clearSortMark = function(obj)
        {
        	var nColCnt = obj.getCellCount("head");
        	var sRepText = "";
        	for (var ii=0; ii<nColCnt; ii++){
        		var sheadType = obj.getCellProperty("head", ii, "displaytype");
                var sheadText = obj.getCellProperty("head", ii, "text");	
                
        		if(sheadType == "checkbox"|| sheadText =="") {
        			continue;
        		}
        		
        		sRepText = obj.getCellProperty("head", ii, "text").split(this.fv_constAscMark).join("").split(this.fv_constDescMark).join("");
        		obj.setCellProperty("head", ii, "text", sRepText);
        	}
        	var bindDs = this.gfn_getDataset(obj.binddataset);
        	bindDs.set_keystring("");
        }

        /**
         * @class 그리드 Head중 check box가 있을 경우, check box 클릭 이벤트 발생시 전체 row에 대한 check/uncheck 설정 함수
         * @param obj:Grid
         * @param e:GridClickEventInfo
         * @return None
         */  
        this.gfn_setGridCheckAll = function (obj,e)
        {
        	if (obj.readonly == true){
        		return;
        	}
        	
        	var strVal = "";
        	var strChkCol = "";
        	var dsObj = "";
        	
        	dsObj = this.gfn_getDataset(obj.binddataset);
        		
        	if (this.gfn_isNull(dsObj)){
        		return;
        	}
        	strChkCol = this.gfn_nvl(obj.getCellProperty("body", e.col, "text"), "");
        	strChkCol = strChkCol.split("bind:").join("");
        	
        	var strType = obj.getCellProperty("head", e.cell, "displaytype");
        	if (strType != "checkbox"){
        		return;
        	}
        	
        	// Head셋팅
        	strVal = obj.getCellProperty("head", e.cell, "text");
        	if (this.gfn_isNull(strVal)){
        		strVal = "0";
        	}
        	
        	if (strVal == "0"){
        		obj.setCellProperty("head", e.cell, "text", '1');
        		strVal = "1";
        	} else {
        		obj.setCellProperty("head", e.cell, "text", '0');
        		strVal = "0";
        	}
        	
        	// Body셋팅
        	dsObj.set_enableevent(false);
        	for (var i=0; i<dsObj.rowcount; i++){
        		dsObj.setColumn(i, strChkCol, strVal);
        	}
        	dsObj.set_enableevent(true);
        }

        /**
         * @class 그리드를 Excel로 Export하는 함수
         * @param obj:Grid (단일Export - Grid Object, 다수Export - Array Objec[Grid Object,Grid Object])	
         * @param sFileName - Export될 파일명
         * @return None
         */  
        this.gfn_exportExcel = function(obj,sFileName,objCondition)
        {
        	this.fv_exportObject    = obj;
        	this.fv_exportFileName  = sFileName;
        	this.fv_exportCondition = objCondition;
        	
        	this._gfn_exportExcelProcess();    
        }

        this._gfn_exportExcelProcess = function()
        {
            var obj        = this.fv_exportObject;
            var sFileName  = this.fv_exportFileName;
            var oCondition = this.fv_exportCondition;
        	var oGrid      = "";
        	var sSheetName = "";
        	var strType    = obj.toString().toUpperCase();
        	
        	var regExp = /[?*:\/\[\]]/g;  //(엑셀에서 지원하지않는 모든 문자)
        	
        	sFileName = sFileName.toString().replace(regExp, "");	
        	sSheetName = sFileName;
        	
        	if(!application.gv_quickviewmode){
        		if (!this.gfn_isNull(sFileName)){
        			sFileName = sFileName+"_"+this.gfn_today("yyyyMMddHHmmss");
        		} else {
        			sFileName = this.gfn_today("yyyyMMddHHmmss");
        		}
        	}
        	
        	
        		
        	this.exportObj = new ExcelExportObject();
        	var sSvcUrl = application.services["svc"].url+"XExportImport";
        	
        	if(application.gv_userTPC == "admin"){
        		sSvcUrl = application.services["svc_admin"].url+"XExportImport";
        	}
        	
        	
         	this.exportObj.addEventHandler("onerror", this._gfn_exportExcel_onerror, this);
        	this.exportObj.addEventHandler("onsuccess", this._gfn_exportExcel_onsuccess, this);
        	this.exportObj.addEventHandler("onprogress", this._gfn_exportExcel_onprogress, this);
        	
        	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	//this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL);
        	this.exportObj.set_exportuitype("exportprogress");
        	this.exportObj.set_exporteventtype("itemrecord");

        	//this.exportObj.set_exportmessageprocess("%d[%d/%d]");	
        	this.exportObj.set_exportmessageprocess("%d Item, %d Recrod, %d Total");
        		
        	this.exportObj.set_exporturl(sSvcUrl);
        	this.exportObj.set_exportfilename(sFileName);
        	
        	if (strType == "[OBJECT GRID]"){
        	
        		oGrid = obj;
        		sSheetName = sSheetName+"1";
        				
        		if(!this.gfn_isNull(oCondition)){
        			
        			this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, oCondition,  sSheetName + "!A1","","allrecord","suppress","none","background","font", "both");
        			this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, oGrid,  sSheetName + "!A4","allband","allrecord","suppress","none","background","font", "both");
        			
        		}else{
        	    	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, oGrid,  sSheetName + "!A1","allband","allrecord","suppress","none","background","font", "both");
        	    }
        	} else {
        	
        		for (var i=0; i<obj.length; i++){
        	        sSheetName = sSheetName+(i+1);
        	        oGrid = obj[i];
        	        this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, oGrid,  sSheetName + "!A1","allband","allrecord","suppress","none","background","font", "both");
        	    }
        	}
        	var result = this.exportObj.exportData();
        }

        /*----------------------------------------------------------------------------------------------------
         *  Excel Export & Import 성공 및 실패 여부
         ----------------------------------------------------------------------------------------------------*/
        this._gfn_exportExcel_onerror = function(obj,e)
        {
        	trace( "\n=========== onerror event start===================");
        	trace("\ne.eventid 				:"+e.eventid 				);
        	trace( "\ne.id 					:"+e.id 					);
        	trace( "\ne.fromobject 			:"+e.fromobject 			);
        	trace( "\ne.fromreferenceobject 	:"+e.fromreferenceobject 	);
        	trace ("\ne.errorcode 			:"+e.errorcode 				);
        	trace("\ne.errormsg 			:"+e.errormsg 				);
        }

        /*----------------------------------------------------------------------------------------------------
         *  Excel Export & Import 성공 및 실패 여부
         ----------------------------------------------------------------------------------------------------*/
        this._gfn_exportExcel_onsuccess = function(obj,e)
        {
        	trace( "\n=========== onsuccess event start=================");
        	trace( "\ne.eventid : " + e.eventid 							);
        	trace( "\ne.url: " +  e.url									);	
        	trace( "\ne.id 					:"+e.id 					);
        	trace( "\ne.fromobject 			:"+e.fromobject 			);
        	trace( "\ne.fromreferenceobject 	:"+e.fromreferenceobject 	);
        }

        this._gfn_exportExcel_onprogress = function(obj,e)
        {
        	/*
        	trace( "\n=========== onprogress event start================");
        	trace( "\ne.eventid 				:"+e.eventid 			 );
        	trace( "\ne.id 					:"+e.id 					 );
        	trace( "\ne.fromobject 			:"+e.fromobject 			 );
        	trace( "\ne.fromreferenceobject 	:"+e.fromreferenceobject );
        	trace( "\ne.itemindex 			:"+e.itemindex 				 );
        	trace( "\ne.itemtype 			:"+e.itemtype 				 );
        	trace( "\ne.recordindex 			:"+e.recordindex  		 );	
        	*/
        }

        /**
         * @class 그리드를 Excel로 Import하는 함수
         * @param obj:Grid (단일Export - Grid Object, 다수Export - Array Objec[Grid Object,Grid Object])
         * @return None
         */  
        this.gfn_importExcel = function(obj,sSheet)
        {
        	var sDs = obj.binddataset;
        	
        	this.importObj = new ExcelImportObject("ExcelImportObject", this);
            var sSvcUrl = application.services["svc"].url+"XImport";
            
            if(application.gv_userTPC == "admin"){
        		sSvcUrl = application.services["svc_admin"].url+"XImport";
        	}
        	this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
        	this.importObj.set_importurl(sSvcUrl);
            this.importObj.set_importfilemode("local");
            //this.importObj.importData("", "[command=getsheetdata;output=outDs;Head=Sheet1!A1:Z1;body=Sheet1!A3;]","["+sDs+"=outDs]","");
            this.importObj.importData("", "[command=getsheetdata;output=outDs;Head=Sheet1!A1:Z1;body=Sheet1!A3;]","[ds_importExcel=outDs]","");
        	this.importObj.addEventHandler("onsuccess", this._gfn_excelImportObject_onsuccess, this);
        	this.importObj.addEventHandler("onerror", this._gfn_excelImportObject_onerror, this);
        }

        this._gfn_excelImportObject_onsuccess = function(obj,e)
        {
        	trace("=========== onsuccess event start============");
        	trace("e.eventid:"+e.eventid);
        	trace("e.fromobject:"+e.fromobject);
        	trace("e.fromreferenceobject:"+e.fromreferenceobject);
        	trace("e.url:"+e.url);
        }

        this._gfn_excelImportObject_onerror = function(obj,e)
        {
        	trace("=========== onerror event start============");
        	trace("e.eventid:"+e.eventid);
        	trace("e.fromobject:"+e.fromobject);
        	trace("e.fromreferenceobject:"+e.fromreferenceobject);
        	trace("e.errorcode:"+e.errorcode);
        	trace("e.errormsg:"+e.errormsg);
        }

        /**
         * @class 이전에 Find form을 띄워 놓은 것이 있다면 Close한다.
         * @param objGrid - 부모 그리드
         * @return None
         */  
        this.gfn_checkExistFindDlg = function()
        {
        	var obj = application.popupframes["__GirdFindForm__"];
        	// obj가 존재하는 경우라면 삭제한다.
        	if(obj != null) {
        		obj.destroy();
        	}
        }

        /**
         * @class 그리드 dataset에 filter가 적용되어 있는지 여부 판단.
         * @param objGrid - 그리드
         * @return 적용되어 있으면 true 아니면 false
         */ 
        this.gfn_isFiterString = function(objGrid)
        {
        	var bRet = false;
        	// bind되어 있는 데이터 셋을 가져온다.
        	var objBindDs = objGrid.getBindDataset();
        	if (this.gfn_isNull(objBindDs)){
        		bRet = false;
        	}
        	if (!Eco.isEmpty(objBindDs.filterstr.current)){
        		bRet = true;
        	}
        	return bRet;
        }

        /**
         * @class 그리드의 cell에 바인딩된 데이타셋의 컬럼ID를 구함
         * @param objGrid - Grid object
         * @param cellIdx - cell index
         * @param band - Grid band
         * @return 컬럼ID
         */  
        this.gfn_getCellBind = function(obj,cellIdx,band)
        {
        	if (Eco.isEmpty(band)){
        		band = "body";
        	}
        	var cellText = obj.getCellProperty(band, cellIdx, "text");
        	if (Eco.isEmpty(cellText)){
        		return "";
        	}
        	var arrText = cellText.split(":");
        	if (arrText[0].toLowerCase() != "bind"){
        		return "";
        	}
        	return arrText[1];
        }

        /**
         * @class 그리드에서 바인드된 컬럼명으로 컬럼 index를 리턴하는 함수
         * @param obj - Grid Object
         * @param strCol - 바인드된 컬럼명
         * @param strBand - 얻고자 하는 Cell의 영역('Head'/'Body'/'Summ'('Summary'))
         * @return int 컬럼 index
         */  
        this.gfn_getColumnIdx = function (obj,strCol,strBand)
        {
        	if (strBand == null){
        		strBand = "Body";
        	}
        	
        	var nCnt = obj.getCellCount(strBand);
        	var strCellCol;
        	for (var i=0; i<nCnt; i++){
        		if (strCol == this.gfn_getCellBind(obj, i, strBand)){
        			return i ;
        		}
        	}
        	return -1;
        }

        /**
         * @class Bind되어 있는 Dataset에 해당되는 ColumnId 를 가지고 있는 Cell의 Index
         * @param obj - Grid Object
         * @param sCompColumnId - sCompColumnId 비교할 ColumnId
         * @return Cell Index/못찾으면 '-1' 을 반환
         */  
        this.gfn_getCellIdx = function (obj,strCompColumnId)
        {
            //Cell Id에 해당하는 번호를 반환함
            var arrColumnId = new Array();
            var nCellCnt = obj.getCellCount("body");
            for (var i=0; i<nCellCnt; i++){
                var strColumnId = obj.getCellProperty("body", i, "text").toString().replace("bind:", "");
                if (strColumnId == strCompColumnId) return i;
            }
            return -1;
        }

        /**
         * @class 해당 데이터셋명으로 검색하여 데이터셋찾아서 리턴 없으면 -1을 반환
         * @param sDsNm     - 데이터셋명
         * @return Dataset
         */   
        this.gfn_getDataset = function(sDsNm)
        {
            return Eco.XComp.query(this, "typeOf == 'Dataset' && prop[name] == '"+sDsNm+"'")[0];
        }

        /**
         * @class 그리드 필수입력 Column List 설정
         * @param objDs - 필수입력 설정할 Dataset Object
         * @param sList - 필수입력 처리할 Column List
         * @param objGrid - Grid Object
         * @return N/A
         */  
        this.gfn_setImportant = function (objDs,sList,objGrid)
        {
        	var i= "";
        	var j= "";
        	var arrList = sList.split(" ");
        	var arrData = "";
        	var nColIdx = "";
        	var nColCount = "";
        	var nHeadCount = 0;
        	objDs.checkImportant = sList;
        	
        	if (this.gfn_isNull(objGrid)==false){
        		for (idx=0; idx<objGrid.getFormatRowCount(); idx++){
        			if (objGrid.getFormatRowProperty(idx, "band")=="head"){
        				nHeadCount++;
        			}
        		}
        		
        		for (i=0; i<arrList.length; i++){
        			arrData = arrList[i].toString().split("=");
        			nColIdx = this.gfn_getColumnIdx(objGrid, arrData[0]);
        			
        			for (j=0; j<objGrid.getCellCount("head"); j++){
        				if (nColIdx==objGrid.getCellProperty("Head", j, "col")
        				 && nHeadCount-1==objGrid.getCellProperty("Head", j, "row")){
        					 objGrid.setCellProperty("Head", j, "color", "#e67e00ff");
        					 objGrid.setCellProperty("Head", j, "color2", "#e67e00ff");
        					 objGrid.setCellProperty("Head", j, "background", "URL('theme://images/bg_grd_head_est.png') stretch 7,7 left top");
        				}
        				
        				if (nColIdx==objGrid.getCellProperty("Head", j, "col")
        				 && objGrid.getCellProperty("Head", j, "rowspan")>1
        				 && nHeadCount == objGrid.getCellProperty("Head", j, "row") + objGrid.getCellProperty("Head", j, "rowspan")){
        					 objGrid.setCellProperty("Head", j, "color", "#e67e00ff");
        					 objGrid.setCellProperty("Head", j, "color2", "#e67e00ff");
        					 objGrid.setCellProperty("Head", j, "background", "URL('theme://images/bg_grd_head_est.png') stretch 7,7 left top");
        				}
        			//trace("nHeadCount : "+nHeadCount + "   nColIdx : "+nColIdx);
        			}
        		}
        	}
        }

        /**
         * @class 그리드 필수입력항목 체크
         * @param objDs - 필수입력 체크할 Dataset Object
         * @return N/A
         */
        this.gfn_checkImportant = function(obj,arrParam)
        {
        	var objGrid = obj;
        	
        	var arrList = arrParam.split(",");
        	
        	if(arrList.length == 0 ) return false; 
        	
        	var dsBind = this.gfn_getDataset(objGrid.binddataset);
        	 
        	if( dsBind != undefined ) {
        		for( var iRow=0; iRow<dsBind.rowcount; iRow++ ) {
        			var iRowType = dsBind.getRowType( iRow );
        			if( iRowType == 8 ) continue;
        			
        			for( var i=0; i<arrList.length; i++ ) {
        				var sColNm = arrList[i];				
        				var iCellIdx = this.gfn_getCellIdx( objGrid, sColNm );
        				var sColVal = String( dsBind.getColumn( iRow, sColNm ) ).trim();
        				
        				if( this.gfn_isNull(sColVal)) {
        					
        					this.alert( "필수항목컬럼을 입력하세요." ,   "Warning", "warning");
         					objGrid.setFocus();
        					dsBind.set_rowposition(iRow);
        					var bSucc = objGrid.setCellPos(iCellIdx);
        					
        					if (bSucc){
        						objGrid.showEditor(true);
        						objGrid.setFocus();
        					}
        										
        					return false;
        				}
        			}
        		}
        	}
        	
        	return true;
        }

        /**
         * @class 필수입력체크시 입력안된 Component로 Focus 이동
         * @param sColumnId - 필수입력 체크시 입력안된 ColumnId
         * @return N/A
         */  
        this.gfn_setFocusByColumnId = function (sColumnId)
        {
        	for (var i=0; i<this.binds.length; i++){
        		if (this.binds[i].columnid == sColumnId){
        			this.all[this.binds[i].compid].setFocus();
        		}
        	}
        }

        /***********************************************************************************************
         * Function     : gfn_singleChk(obj, e)  
         * parameter    : 1. obj : Grid Object
         *				  2. e   : GridClickEventInfo
         * Return       :
         * Grid 싱글체크기능(row체크시 그외 row 체크해제) 
        ***********************************************************************************************/ 
        this.gfn_singleChk = function (obj,e) 
        {  
            var strChkVal = "";
            var objDS = "";
            var nCell  = e.cell;   
            var nRow   = e.row; 
            
            if (obj.readonly == true) 
            {
                return;
            }
            
            objDS = this.gfn_getDataset(obj.binddataset);
        	if (this.gfn_isNull(objDS)){
        		return;
        	}    
            
            strChkVal = this.gfn_nullToEmpty(obj.getCellProperty("body", nCell, "text"));
            strChkVal = strChkVal.replace("bind:", "");
            
            // Body셋팅
            for(var i=0; i<objDS.rowcount; i++) 
            {
        		if(i != nRow){
        			objDS.setColumn(i, strChkVal, 0);
        		}
            }
        }

        /**
         * @class 그리드의 내용을 범위로 지정하여 복사(Ctrl+C) 할 수 있음
         * @param obj:Grid (단일Export - Grid Object, 다수Export - Array Objec[Grid Object,Grid Object])
         * @param e:KeyEventInfo
         * @return None
         */  
        this.gfn_gridCopy = function (obj,e)
        {
        	// Ctrl + C
        	trace(e.ctrlKey +"/"+ e.keycode);
        	
        	if (e.ctrlKey && e.keycode == 67){
        		this.gfn_clipboardCopy(obj);
        	} else if (e.ctrlKey && e.keycode == 86){	// Ctrl + V
        		this.gfn_clipboardPaste(obj);
        	}
        }

        /**
         * @class Clipboard에 Copy된 내용을 그리드의 선택된 영역에 Copy 한다.
         * @param objGrid: Area Select 된 Grid
         * @param ct_separator: Colunm 구분자
         * @param arrEditColor: Edit Color Table
         * @return None gfn_clipboardPaste(objGrid, ",", arrEditColor);
         */  
        this.gfn_clipboardCopy = function (objGrid)
        {
        	var orgDataset = this.gfn_getDataset(objGrid.binddataset);
        	var strColID;
        	var strValue;
        	var strClipboard = "";
        	var nAreaStartRow;
        	var nAreaEndRow;
        	var nAreaStartCol;
        	var nAreaEndCol;

        // 	if (objGrid.selecttype == "area"){
        // 		nAreaStartRow = objGrid.selectstartrow;
        // 		nAreaEndRow = objGrid.selectendrow;
        // 		nAreaStartCol = objGrid.selectstartcol;
        // 		nAreaEndCol = objGrid.selectendcol;
        // 	} else {
        		nAreaStartRow = objGrid.selectstartrow;
        		nAreaEndRow = objGrid.selectendrow;
        		nAreaStartCol = 0;
        		nAreaEndCol = objGrid.getCellCount("Body")-1;
        //	}

        	for (var nRow = nAreaStartRow; nRow <= nAreaEndRow; nRow++){
        		for (var nCell = nAreaStartCol; nCell < nAreaEndCol; nCell++){
        			strColID = String(objGrid.getCellProperty("body", nCell, "text"));
        			strValue = this.gfn_isEmpty(orgDataset.getColumn(nRow, strColID.substr(5)));
        			strClipboard = strClipboard + strValue + ct_separator;
        		}
        		strClipboard = strClipboard.substr(0, strClipboard.length - 1);
        		strClipboard = strClipboard + "\n";
        	}
        	
        	strClipboard = strClipboard.substr(0, strClipboard.length - 1);
        	system.setClipboard("CF_TEXT", strClipboard);
        	application.gv_arrClipboard = strClipboard;
        	
        	return;
        }

        /**
         * @class Clipboard에 Copy된 내용을 그리드의 선택된 영역에 Paste 한다.
         * @param objGrid: Area Select 된 Grid
         * @param ct_separator: Colunm 구분자
         * @param arrEditColor: Edit Color Table
         * @return None gfn_clipboardPaste(objGrid, ",", arrEditColor);
         */  
        this.gfn_clipboardPaste = function (objGrid)
        {
        	var orgDataset = this.gfn_getDataset(objGrid.binddataset);
        	var nSearchRow = 0;
        	var nSearchCol = 0;
        	var strColID;
        	var strValue;
        	var strEditType;
        	var strBgColor;
            var strClipboardData = "";
            
        	// 숫자 자릿수 구분은 comma 를 사용하기 때문에 호환을 위해서 comma 를 제거한다.
        	try{
        	   strClipboardData = system.getClipboard("CF_TEXT").split(",").join("");
        	}catch(e){}
        	
        	if (this.gfn_isNull(strClipboardData)){
        	    strClipboardData = application.gv_arrClipboard.split(",").join("");
        	}
        	
        	// 유럽의 숫자 자릿수 구분은 space 를 사용하기 때문에 호환을 위해서 space 를 제거한다.
        	strClipboardData = strClipboardData.split(" ").join("");
        	var strClipboardRecord = strClipboardData.split("\n");
        	var strClipboardColunm;
        	
        	var nAreaStartRow;
        	var nAreaEndRow;
        	var nAreaStartCol;
        	var nAreaEndCol;

        // 	if (objGrid.selecttype == "area"){
        // 		nAreaStartRow = objGrid.selectstartrow;
        // 		nAreaEndRow = objGrid.selectendrow;
        // 		nAreaStartCol = objGrid.selectstartcol;
        // 		nAreaEndCol = objGrid.selectendcol;
        // 	} else {
        		nAreaStartRow = objGrid.selectstartrow;
        		nAreaEndRow = objGrid.selectendrow;
        		nAreaStartCol = 0;
        		nAreaEndCol = objGrid.getCellCount("Body")-1;
        //	}

        	for (var nRow = nAreaStartRow; nRow < (parseInt(nAreaStartRow) + parseInt(strClipboardRecord.length)); nRow++){
        		strClipboardColunm = strClipboardRecord[nSearchRow].split(ct_separator);
        		nSearchCol = 0;
        		var nAreaCell = parseInt(nAreaStartCol) + parseInt(strClipboardColunm.length);
        		for (var nCell = nAreaStartCol; nCell < nAreaCell; nCell++){
        			strColID = String(objGrid.getCellProperty("body", nCell, "text")).substr(5);
        			strEditType = objGrid.getCellProperty("body", nCell, "edittype");
        			strValue = strClipboardColunm[nSearchCol];

                    //에디터 타입이 none이거나 값이 없으면 카피 안함
        			if (!(strEditType == "none" || this.gfn_isNull(strValue))){
        				orgDataset.setColumn(nRow, strColID, strValue);
        			}
        			nSearchCol++;
        		}
        		nSearchRow++;
        	}
        	return;
        }

        /********************************************************************************************
         * Function   : gfn_selectTreePos()
         * Parameter  : 1. objGrid Grid
         *              2. oColumn Tree Column명
         *              3. strVal  찾을컬럼값 
         * Return     : none
         *
         * Tree Grid의 원하는 Row 펼쳐보이기
         * (중요) Grid의 Column값 처음Row에 해당하는것으로 선택됨.
        *********************************************************************************************/
        this.gfn_selectTreePos = function(objGrid,oColumn,strVal)
        {
        	var nTPRow;
        	var nTFRow;
        	var compare;
        	var j = 1;
        	var array = new Array();
        	var ods   = this.objects[objGrid.binddataset];
        	
        	var nFrow = ods.findRow(oColumn, strVal);
        	var total = ods.getRowCount();
        	
        	objGrid.set_treeinitstatus("expand,all");
        	nTPRow = objGrid.getTreeParentRow(nFrow);	
        	array[0] = nTPRow;
        	while(nTPRow != -1)
        	{
        		nTPRow = this.gfn_parentNode(objGrid, nTPRow);
        		array[j] = nTPRow;
        		j++;
        	}
        	
        	while(nFrow <=total)
        	{
        		if(objGrid.getTreeChildCount(total, false) > 0)
        		{
        			for(var i = 0; i < array.length; i ++)
        			{
        				if(array[i] == total) compare = 1;				
        			}
        			
        			if(compare != 1)
        			{
        				objGrid.setTreeStatus(total,false); // 펼쳐주기				
        			}
        			compare = 0;
        		}
        		total--;
        	}
        	
        	if(nTPRow == -1) {
        		nTFRow = nFrow;
        	} else { 
        		nTFRow = nTPRow -1;
        	}
        	
        	while(nTFRow>=0)
        	{
        		if(objGrid.getTreeChildCount(nTFRow, false) > 0)
        		{
        			for(var i = 0; i < array.length; i ++)
        			{				
        				if(array[i] == nTFRow) compare = 1;								
        			}
        			if(compare != 1)
        			{				
        				objGrid.setTreeStatus(nTFRow,false); // 펼쳐주기				
        			}
        			compare = 0;
        		}				
        		nTFRow--;	 
        	}
        	 
        	ods.set_rowposition(nFrow);
        	objGrid.setFocus();
        }

        /********************************************************************************************
         * Function   : gfn_parentNode()
         * Parameter  : 1. objGrid Grid
         *              2. nRow    선택된 Row
         * Return     : none
         *
         * 선택된 Row에 해당하는 Parent Row 구하기
         * (중요) Grid의 Column값 처음Row에 해당하는것으로 선택됨
        *********************************************************************************************/
        this.gfn_parentNode = function(objGrid,nRow)
        {
        	return objGrid.getTreeParentRow(nRow);	
        }
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
