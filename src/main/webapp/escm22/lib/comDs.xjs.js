//XJS=comDs.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(exports) {
        /*
         ===============================================================================
         == data 관련 공통함수들은 여기에 작성한다.
         ===============================================================================
         ● gfn_deleteData    : Dataset object에서 키에 해당되는 Row를 찾아서 삭제
         ● gfn_moveData      : Dataset object에서 키에 해당되는 Row를 찾아서 이동
         ● gfn_editData      : Dataset object에서 키에 해당되는 Row를 찾아서 값을 변경
         ★ gfn_getData       : Dataset object에서 데이터를 가져오는 함수 Null경우에는 Type에 의한 예외처리 하여 반환
         ● gfn_allRowDataCall : Dataset의 모든 행을 함수의 인자로 넘겨주고 함수 호출처리
         ● gfn_getLookupData : Dataset object에서 키에 해당되는 Row를 찾아서 칼럼값을 전달
         ● gfn_findData      : Dataset object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
         ● gfn_dsIsUpdated   : Dataset의 Row 중에서 변경된 내용이 있는지 여부를 반환
         ● gfn_isUpdatedRow  : Dataset의 Row가 변경되었는지 판단하는 함수
         ● gfn_isUpdateColumn : Dataset의 Row 에서 해당 칼럼이 변경되었는지 여부를 반환
         ● gfn_isUpdateRowFlag : Dataset의 Row가 변경되었는지 판단하는 함수
         ★ gfn_dsFilter       : Dataset의 필터한 정보를 대상 dataset으로 Copy하는 기능
         ★ gfn_isCheckDs      : 해당 데이터셋명으로 검색하여 데이터셋이 없으면 데이터셋을 생성
         ★ gfn_getDataset      : 해당 데이터셋명으로 검색하여 데이터셋찾아서 리턴 없으면 -1을 반환
         ● gfn_validCheck      : Dataset 내의 데이터 무결성을 검사하는 함수
         ● gfn_itemCheck       : Column별 Validation Check
         ● gfn_itemValueCheck  : Check 항목별 Dataset 데이터 무결성을 검사하는 함수
         ● gfn_setComboValue   : combo dataset에 data를 추가
         ● gfn_dsCopy   		: 지정한 데이터셋을 특정 Row Type만 필터링하여 복사
         */

        /**
         * @class Dataset object에서 키에 해당되는 Row를 찾아서 삭제
         * @param objDs     - Dataset
         * @param strIdCol  - 키칼럼
         * @param strId     - 키값
         * @param strSubCol - 서브키 칼럼
         * @param strSubId  - 서브키값
         * @return 없음
         */ 
        this.gfn_deleteData = function (objDs,strIdCol,strId,strSubCol,strSubId)
        {
        	var curRow = this.gfn_findData(objDs, strIdCol, strId, strSubCol, strSubId);
        	objDs.deleteRow(curRow);
        }

        /**
         * @class Dataset object에서 키에 해당되는 Row를 찾아서 이동
         * @param objDs     - Dataset
         * @param strIdCol  - 키칼럼
         * @param strId     - 키값
         * @param newRow    - 이동할 Row
         * @param strSubCol - 서브키 칼럼
         * @param strSubId  - 서브키값
         * @return 없음
         */  
        this.gfn_moveData = function (objDs,strIdCol,strId,newRow,strSubCol,strSubId)
        {
        	var curRow = this.gfn_findData(objDs, strIdCol, strId, strSubCol, strSubId);
        	objDs.moveRow(curRow, newRow);
        }

        /**
         * @class Dataset object에서 키에 해당되는 Row를 찾아서 값을 변경
         * @param objDs     - Dataset
         * @param strIdCol  - 키칼럼
         * @param strId     - 키값
         * @param valCol    - 변경할 칼럼
         * @param newVal    - 변경값
         * @param strSubCol - 서브키 칼럼
         * @param strSubId  - 서브키 값
         * @return boolean
         */  
        this.gfn_editData = function (objDs,strIdCol,strId,valCol,newVal,strSubCol,strSubId)
        {
        	var curRow = this.gfn_findData(objDs, strIdCol, strId, strSubCol, strSubId);
        	return objDs.setColumn(curRow, valCol, newVal);
        }

        /**
         * @class Dataset object에서 가져오는 함수 Null경우에는 Type에 의한 예외처리 하여 반환
         * @param ObjDs		- Dataset
         * @param nRow  	- 해당 Row
         * @param sColId    - 키칼럼
         * @param sVal    	- 키값
         * @return rtnVal
         */  
        this.gfn_getData = function(ObjDs,nRow,sColId,sVal)
        {
            var oData = ObjDs.getColumn(nRow,sColId);
            var oColInfo = ObjDs.getColumnInfo(sColId);
            if(this.gfn_isNull(oColInfo)) return "";
            var sType = oColInfo.type;
            
            if (this.gfn_isNull(sVal)){
        		switch (sType.toUpperCase()){
        			case "STRING": 
        				sVal = "";
        				break;
        			case "BIGDECIMAL":
        			case "INT":
        			case "FLOAT":
        				sVal = 0;
        				break;
        		}
        	}
            
            var rtnVal = (this.gfn_isNull(oData))?sVal:oData;
            return rtnVal;
        }

        /**
         * @class Dataset object에서 키에 해당되는 Row를 찾아서 칼럼값을 전달
         * @param ObjDs     - Dataset
         * @param strIdCol  - 키칼럼
         * @param strId     - 키값
         * @param strInfo   - Dataset 칼럼
         * @param strSubCol - 서브키칼럼
         * @param strSubId  - 서브키값
         * @return 칼럼값
         */   
        this.gfn_getLookupData = function (ObjDs,strIdCol,strId,strInfo,strSubCol,strSubId)
        {
        	var strVal;
        	var curRow = this.gfn_findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
        	if (curRow < 0){
        		return "";
        	}
        	
        	strVal = ObjDs.getColumn(curRow, strInfo);
        	if (this.gfn_isNull(strVal)){
        		return "";
        	}

        	return strVal;
        }

        /**
         * @class Dataset object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
         * @param objDs     - Dataset
         * @param strIdCol  - 키칼럼
         * @param strId     - 키값
         * @param strSubCol - 서브키 칼럼
         * @param strSubId  - 서브키값
         * @return rowpostion
         */  
        this.gfn_findData = function (objDs,strIdCol,strId,strSubCol,strSubId)
        {
        	//var arrArgument = this.gfn_findData.arguments;
        	if (this.gfn_isNull(strSubCol)){
        		return objDs.findRow(strIdCol, strId);
        	}
        	return objDs.findRowExpr(strIdCol + " == '" + strId + "' && " + strSubCol + " == '" + strSubId + "'");
        }

        /**
         * @class Dataset의 Row 중에서 변경된 내용이 있는지 여부를 판단하는 함수
         * @param objDs     - 확인 대상 Dataset
         * @return boolean true = 변경 된 데이터가 존재/false = 변경 된 데이터가 없음
         */  
        this.gfn_dsIsUpdated = function (objDs)
        {
        	if (objDs.getDeletedRowCount() > 0){
        		return true;
        	}
        	
        	if (objDs.findRowExpr("(this.getRowType(rowidx)==Dataset.ROWTYPE_UPDATE)||(this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT)") > -1){
        		return true;
        	}
        	return false;
        }

        /**
         * @class Dataset의 Row가 변경되었는지 판단하는 함수
         * @param objDs     - 확인 대상 Dataset
         * @param nRow      - row값
         * @return boolean true = 변경 된 데이터가 존재/false = 변경 된 데이터가 없음
         */   
        this.gfn_isUpdatedRow = function (objDs,nRow)
        {
        	if (objDs.updatecontrol == true){
        		if (objDs.getRowType(nRow) == 2 || objDs.getRowType(nRow) == 4){
        			return true;
        		}
        		return false;
        	} else {
        		for (var i=0; objDs.getColCount(); i++){
        			if (this.gfn_IsUpdateColumn(objDs,nRow,i) == true){
        				return true;
        			}
        		}
        	}
        	return false;
        }

        /**
         * @class Dataset의 Row 에서 해당 칼럼이 변경되었는지 판단하는 함수
         * @param ObjDs     - 대상 dataset
         * @param nRow      - row값
         * @param Column    - 칼럼명
         * @return boolean true = 변경 된 데이터가 존재/false = 변경 된 데이터가 없음
         */   
        this.gfn_isUpdateColumn = function (objDs,nRow,Column)
        {
        	if (objDs.getRowType(nRow) == 2){
        		if (this.gfn_isNull(objDs.getColumn(nRow, Column))){
        			return false;
        		}
        	} else {
        		if (objDs.getColumn(nRow, Column) == objDs.getOrgColumn(nRow, Column)){
        			return false;
        		}
        	}
        	return true;
        }

        /**
         * @class Dataset의 Row가 변경되었는지 판단하는 함수(FLAG체크)
         * @param objDs     - 확인 대상 Dataset
         * @param nRow      - row값
         * @return boolean true = 변경 된 데이터가 존재/false = 변경 된 데이터가 없음
         */ 
        this.gfn_isUpdateRowFlag = function(objDs,nRow)
        {
            var bChgFlag = false;
        	if (objDs.getOrgColumn(nRow,"FLAG") == "N"){
        		objDs.set_enableevent(false);
        		for (var i=0; i<objDs.getColCount(); i++){
                    if (objDs.getColID(i) == "FLAG") continue;
                    if (this.gfn_isNull(objDs.getOrgColumn(nRow,i))){
        				if (this.gfn_isNull(objDs.getColumn(nRow,i)) != this.gfn_isNull(objDs.getOrgColumn(nRow,i))){
        					bChgFlag = true;
        				}
                    } else {
        				if (objDs.getColumn(nRow,i) != objDs.getOrgColumn(nRow,i)){
        					bChgFlag = true;
        				}
                    }
        		}
        		objDs.set_enableevent(true);
        		if (bChgFlag){
        			if (objDs.getColumn(nRow,"FLAG") != "D"){
        				objDs.setColumn(nRow,"FLAG","U");
        			}
        		} else {
        			objDs.setColumn(nRow,"FLAG",objDs.getOrgColumn(nRow,"FLAG"));
        			//objDs.setColumn(nRow,"FLAG","N");
        		}
        	}
        	return bChgFlag;
        }

        /**
         * @class Dataset의 모든 행을 함수의 인자로 넘겨주고 함수 호출처리
         * @param ObjDs         - 대상 dataset
         * @param callFncObj    - 호출할 함수
         * @param bModifiedOnly - 변경된 데이터만 호출할지 여부
         * @return retVal
         */   
        this.gfn_allRowDataCall = function (dsObj,callFncObj,bModifiedOnly)
        {
        	var retVal;
        	for (var i=0; i<dsObj.getRowCount(); i++){
        		if (bModifiedOnly && !(dsObj.getRowType(i) == 2 || dsObj.getRowType(i) == 4)){
        			continue;
        		}
        		retVal = callFncObj(dsObj, i);
        		if (this.gfn_isNull(retVal) == false){
        			return retVal;
        		}
        	}
        }

        /**
         * @class Dataset의 필터한 정보를 대상 Dataset으로 Copy하는 기능
         * @param dsSc     		- 대상 dataset
         * @param dsTg      	- 처리 dataset
         * @param sFilterExpr	- 필터표현
         * @return N/A
         */   
        this.gfn_dsFilter = function(dsSc,dsTg,sFilterExpr)
        {
            var sKeyString = dsSc.keystring;
            if (!this.gfn_isNull(sKeyString)){
        		sKeyString = sKeyString.toString();
            }
            dsSc.set_keystring("");
            dsSc.filter(sFilterExpr);
            dsTg.copyData(dsSc,true);
            dsSc.filter("");
            
            if (!this.gfn_isNull(sKeyString)){
        		dsSc.set_keystring(sKeyString);
        	}
         }

        /**
         * @class 해당 데이터셋명으로 검색하여 데이터셋이 없으면 데이터셋을 생성
         * @param sDsNm     - 데이터셋명
         * @return Dataset
         */   
        this.gfn_isCheckDs = function(sDsNm)
        {
            var oDs = this.gfn_getDataset(sDsNm);
            if (this.gfn_isNull(oDs)){
                oDs = new Dataset;
                oDs.name = sDsNm;
                this.addChild(sDsNm, oDs);
            }
            return oDs;
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
         * @class Combo Dataset에 data를 추가
         * @param objCbo   - combo object
         * @param sCd      - code 값
         * @param sText    - text
         * @param nRow     - insert 될 row
         * @param nIdx     - combo에서 선택 되어질 index
         * @param sValue   - combo에서 선택 되어질 값
         * @return 없음
         */
         this.gfn_setComboValue = function (objCbo,sCd,sText,nRow,nIdx,sValue)
         {
        	//var objDs = objCbo.innerdataset;
        	var objDs = this.objects[objCbo.innerdataset];
        	if (this.gfn_isNull(sCd)){
        		sCd = "";
        	}
        	
        	if (this.gfn_isNull(sText)){
        		sText = "";
        	}
        	
        	if (this.gfn_isNull(nIdx)){
        		nIdx = 0;
        	}
        	
        	if (this.gfn_isNull(nRow)){
        		nRow = 0;
        	}

        	try {
        		objDs.insertRow(nRow);
        		objDs.setColumn(nRow, objCbo.codecolumn, sCd);
        		objDs.setColumn(nRow, objCbo.datacolumn, sText);
        	} catch(e) {
        		trace("Combo : " + objCbo.name + " 의 innerdataset을 재지정해 주세요.");
        	}
        	// combo값 지정
        	if (!this.gfn_isNull(nIdx)){
        		// combo값을 index로 지정
        		objCbo.set_index(nIdx);
        	}
        	if (!this.gfn_isNull(sValue)){
        		// combo값을 값으로 지정
        		objCbo.set_value(sValue);
        	}
        // 	 else {
        // 		// combo값을 index로 지정
        // 		objCbo.set_value(sValue);
        // 		objCbo.set_index(nIdx);
        // 	}	
         }
         
        /**
         * @class 지정한 데이터셋을 특정 Row Type만 필터링하여 복사
         * @param dsNameOri     - 원본 데이터셋명
         * @param dsNameTar     - 사본 데이터셋명
         * @param rowType       - 필터링할 Row Type, N:일반, I:추가, U:수정, D:삭제, 생략시 IUD
         * @param changeRowType - 변경할 Row Type, 사본의 Row Type을 강제로 변경하는 기능, 생략시 변경안함
         * @Example gfn_dsCopy("ds_a", "ds_b", "UD") // 데이터셋 'ds_a'의 Row중에 수정,삭제상태 Row만 복사하여 ds_b생성
         *			gfn_dsCopy("ds_c", "ds_d", "IU", "I") // 데이터셋 'ds_c'의 Row중에 추가,수정상태 Row만 복사하여 ds_d를 생성하고 사본의 Row Type를 전부 추가상태로 변경 
         * @return 사본 데이터셋
         */
        this.gfn_dsCopy = function(dsNameOri,dsNameTar,rowType,changeRowType)
        {
        	if (rowType == null){
        		rowType = "IUD";
        	}
        	
        	var c;
        	switch (changeRowType){
        		case "N":
        			c = Dataset.ROWTYPE_NORMAL;
        			break;
        		case "I":
        			c = Dataset.ROWTYPE_INSERT;
        			break;
        		case "U":
        			c = Dataset.ROWTYPE_UPDATE;
        			break;
        		case "D":
        			c = Dataset.ROWTYPE_DELETE;
        			break;
        		default:
        			c = null;
        			break;
        	}
        	
        	var ds_ori = this[dsNameOri];
        	var ds_tar = this[dsNameTar] = new Dataset(dsNameTar);
        	ds_tar.set_updatecontrol(false);
        	
        	for (var i=0; i<ds_ori.getColCount(); i++){
        		var ci = ds_ori.getColumnInfo(i);
        		ds_tar.addColumn(ci.id, ci.type, ci.size);
        	}
        	
        	if (rowType.indexOf("D") != -1){
        		var rowDelArr = ds_ori.getDeletedRowset();
        		for (var i=0; i<rowDelArr.length; i++){
        			var row = rowDelArr[i];
        			var nRowIdx = ds_tar.addRow();
        			for (var j=0; j<ds_ori.getColCount(); j++){
        				ds_tar.setColumn(nRowIdx, ds_ori.getColumnInfo(j).id, row[j]);
        				ds_tar.setRowType(nRowIdx, c == null ? Dataset.ROWTYPE_DELETE : c);
        			}
        		}
        // 		trace(ds_ori.saveXML());
        // 		trace(ds_tar.saveXML());
        	}
        	
        	var isNormal = rowType.indexOf("N") != -1;
        	var isInsert = rowType.indexOf("I") != -1;
        	var isUpdate = rowType.indexOf("U") != -1;
        	for (var i=0; i<ds_ori.getRowCount(); i++){
        		var t = ds_ori.getRowType(i);
        		if ((isNormal && t == Dataset.ROWTYPE_NORMAL) ||
        			(isInsert && t == Dataset.ROWTYPE_INSERT) ||
        			(isUpdate && t == Dataset.ROWTYPE_UPDATE)){
        			var nRowIdx = ds_tar.addRow();
        			for (var j=0; j<ds_ori.getColCount(); j++){
        				var colId = ds_ori.getColumnInfo(j).id;
        				ds_tar.setColumn(nRowIdx, colId, ds_ori.getColumn(i, colId));
        				ds_tar.setRowType(nRowIdx, c == null ? t : c);
        			}
        		}
        	}
        	return ds_tar;
        }

        /**
         * @class 지정한 데이터셋 중복값 체크
         * @param objDs     	- 데이터셋명
         * @param strColumnId   - 컬럼명(배열형태)
         * @return N/A
         */
        this.gfn_isDuplicationCheck = function(objDs,arrColumnId)
        {
        	var nRow;
        	var strColumnId = String(arrColumnId).split(",");
        	//중복 값 체크...find row 사용
        	for (var i=0; i<=objDs.rowcount-1; i++){
        		for (var j=0; j<strColumnId.length; j++){
        			var strColumnVal = objDs.getColumn(i,strColumnId[j]);
        			nRow = objDs.findRowExpr(strColumnId[j]+" == '"+ strColumnVal +"'",i+1,objDs.rowcount);
        			if (nRow >= 0){
        				this.gfn_msg("0015",[strColumnId[j]]);
        				objDs.set_rowposition(nRow) // set
        				return false;
        			}
        		}
        	}
        	return true;
        }

        
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();
