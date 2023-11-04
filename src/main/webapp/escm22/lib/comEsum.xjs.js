//XJS=comEsum.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(exports) {
        /**

        기    능:  전체 체크박스 선택/해제
        함 수 명:  this.gridCheckboxInit();
        파라미터:  1. 자동등록할 경우, 파라미터 사용안함
        		    2. 수동등록할 경우, 해당 이벤트를 사용할 그리드를 배열에 넣어서 파라미터로 넘긴다.
        설    명:	

        1. 해당 이벤트를 사용할 그리드 자동 검색
         폼 onload 함수에 this.gridCheckboxInit(); 선언 
        [예제]
        	this.fn_afterFormOnload = function(){
        		this.gridCheckboxInit();	//이벤트 등록
        	}

        2. 해당 이벤트를 사용할 그리드를 수동 등록
           위와 동일하나 해당 이벤트를 사용할 그리드를 배열로 만들어서 파라미터로 넘긴다.
        [예제]
        	this.fn_afterFormOnload = function(){
        		var gridArr = [gridObj1,gridObj2]; //배열생성
        		this.gridCheckboxInit(gridArr);    //이벤트 등록
        	}

        -------------------------------------------------------------------------------------------------------------------

        기    능:  2개의 그리드 간 데이터 이동(원본 그리드의 체크된 데이터를 타켓 그리드로 이동)
        함 수 명:  this.gridDataMove(orgGrid, targetGrid);
        파라미터:  orgGrid = 원본그리드 , targetGrid= 타겟 그리드
        설    명:	원본 그리드에 체크박스가 있는 경우에만 동작함

        [예제]
        	this.gridDataMove(orgGrid, targetGrid);
        	
        	
        -------------------------------------------------------------------------------------------------------------------	

        기    능:  폼에서 서버로 전송할 파라미터값 자동 생성
        함 수 명:  1. this.getParam(compObj, isDebug);
        			2. this.getParamJson(compObj, isDebug);
        			3. this.getParamJsonToString(json, isDebug); (트랜젝션 5번째 인자)
        			4. this.getParamJsonToDs(dsName, json, isDebug); (트랜젝션 3번째 인자)
        파라미터:  compObj> 검색할 컴포넌트 (Object or String)
        			isDebug> 콘솔 표시 여부 (Boolean) 생략시 false
        			json> String으로 변환될 JSON Object
        			dsName> 데이터셋 이름 (String)
        [예제]
        	현재 폼 전체 검색 		> this.components
        	부분 검색(객체)   		> this.div_search 
        	부분 검색(컴포넌트 ID)	> 'div_search'
        	생략시						>  this.div_search 사용	
        	
        설      명: 
        			 1. 파라미터로 넘어온 컴포넌트내 아래요소만 골라내서 파라미터를 생성한다.
        			 (검색대상> Edit, MaskEdit, Combo, Radio, CheckBox, ListBox, Calendar)
        			 - 값이 NULL일 경우 공백으로 치환

        			 2. 파라미터값을 최초 JSON으로 생성후 String으로 변환한다.
        			 
        			 3. 생성된 파라미터 값을 변경할 필요가 없을 경우 1번 함수만 사용
        			 
        			 4. 생성된 파라미터 값을 수정/추가/삭제 해야 할 경우는 2,3번 함수 사용

        
        1. 생성된 파라미터 값을 변경할 필요가 없을 경우에만 사용한다.

        함 수 명:  this.getParam(compObj, isDebug);
        파라미터:  위설명
        설     명:  트랜젝션 5번째 값 리턴
        			파라미터 결과 값이 JSON, Java, Text 3가지로 콘솔에 출력된다.

        [예제]
        		var param = this.getParam('div_search', true);
        		

        2. 파라미터값을 JSON으로 리턴

        함 수 명:  this.getParamJson(compObj, isDebug);
        파라미터:  위설명
        설     명:  만약 파라미터 값을 부분적으로 수정/추가/삭제 해야 할 경우 사용한다.
        			 JSON으로 리턴받아서, 변경후 3번 함수 사용.
        			
        [예제]
        	var json = this.getParamJson(this.div_search, true); //파라미터 정보릂 JSON으로 리턴
        	json.name1 = '변경할값'; //json 안에 같은 프로퍼티명이 있다면 수정
        	json.name2 = '추가할값'; //json 안에 같은 프로퍼티명이 없다면 추가
        	delete json.name3; 		  //name3 프로퍼티 삭제
        	
        	var param = this.getParamJsonToString(json, true); // JSON -> String 으로 변경 
        	

        추가> 데이터셋으로 변환할 경우 자료형 지정방법(기본자료형은 STRING)
        	   프로퍼티명 = 값;타입
        [예제]
        	json.num1 = json.num1+";int"
        	json.num1 = json.num1+";FLOAT"
        	
        	var ds = this.getParamJsonToDs('ds_name', json, true);
        	
        자료형 종류(대소문자 구별없음)
         INT, FLOAT, DATE, TIME, DATETIME, BLOB, BIGDECIMAL, STRING(기본형이므로 생략)

        
        3. JSON -> String  변환

        함 수 명:  this.getParamJsonToString(json, isDebug);
        파라미터:  위설명
        설     명:  트랜젝션 5번째 인자에 사용할 값

        [예제]
        		var param = this.getParamJsonToString(json, true);

        
        4. JSON -> DataSet  변환

        함 수 명:  this.getParamJsonToDs(dsName, json, isDebug);
        파라미터:  위설명
        설     명:  트랜젝션 3번째 인자에 사용할 값			

        [예제]
        		var ds = this.getParamJsonToDs('ds_test', json, true);
        		
        트랜젝션 3번재 인자 사용시
        		
        		'ds_test=ds_test'
        		
        -------------------------------------------------------------------------------------------------------------------	

        기    능:  그리드 컬럼 정렬
        함 수 명:  this.gridSortInit(grid, arr);
        파라미터:  grid = 적용할 그리드 객체, arr = 정렬을 적용할 컬럼정보 배열 (생략시 전체 컬럼 적용)
        설    명:	그리드 헤더 클릭시 해당 컬럼 오름,내림차순 정렬.
        			숫자 컬럼 정렬은 그리드의 해당 컬럼 Body > displaytype = number 로 설정.
        			
        *정렬을 적용할 파라미터 생성방법
        1. 그리드의 전체 컬럼 적용
        	- 2번째 파라미터 생략

        예) this.gridSortInit(this.div_list.grd_list);

        
        2. 헤더의 인덱스와 바디의 인덱스가 일치할 경우
        	- 헤더 컬럼인덱스 0번째를 클릭하면, 바디 컬럼인덱스 0번째가 정렬
        	- 헤더 컬럼인덱스 1번째를 클릭하면, 바디 컬럼인덱스 1번째가 정렬

        예)	this.gridSortInit(this.div_list.grd_list, [0,1]);

        
        3. 헤더의 인덱스와 바디의 인덱스가 불일치할 경우
        	- 헤더 컬럼인덱스 0번째를 클릭하면, 바디 컬럼인덱스 0번째가 정렬
        	- 헤더 컬럼인덱스 1번째를 클릭하면, 바디 컬럼인덱스 2번째가 정렬
        	
        	JSON 형식> [{헤더컬럼인덱스 : 바디컬럼인덱스, ...}]

        [예제]	
        	var arr = [{0:0},{1,2}]
        	this.gridSortInit(this.div_list.grd_list, arr);

        
        -------------------------------------------------------------------------------------------------------------------	

        기    능:  라디오버튼 자동 정렬
        함 수 명:  this.rdoAutoSize(rdoArr, padding);
        파라미터:  rdoArr: 정렬을 적용시킬 라디오버튼 컴포넌트의 배열
        			padding: 요소간 간격사이즈 (기본:10px)
        설    명:  onload에 위치 or 데이터를 유동적으로 받아올경우 트랜젝션 콜백함수에 위치	
        			
        [예제] 
        	var rdo1 = this.div_search.rdo_search1;
        	var rdo2 = this.div_search.rdo_search2;
        	var rdo3 = this.div_search.rdo_search3;
        	var rdoArr = [rdo1,rdo2,rdo3];
        	this.rdoAutoSize(rdoArr);

        */

        //싱글 체크박스 이벤트
        this.addEventSingleCheckbox = function(grid){

        	var oncellclick = grid.addEventHandler("oncellclick", this.singleCheckbox, this);
        	if(oncellclick == -1){
        		this.alert('[그리드싱글체크박스] 이벤트핸들러 등록 실패!');
        		return;
        	}
        	grid.preCheck = -1;
        };

        this.singleCheckbox = function(obj,e){
        	
        	var ds = obj.getBindDataset();
        	var colIdx = this.getCheckboxColIdx(obj);
        	var colId = this.getBindColName(obj, colIdx);
        	if(e.cell != colIdx){
        		return;
        	}
        		
        	//같은 row 클릭시 체크 선택/해제
        	if(obj.preCheck == e.row){
        		ds.setColumn(e.row, colId, '0');
        		obj.preCheck = -1;
        		if(obj.afterFnc) obj.afterFnc(false, e.row);
        		return;
        	}	
        	
        	//체크박스 초기화
        	for(var i=0;i<ds.getRowCount();i++){
        		ds.setColumn(i, colId, '0');
        	}	
        	ds.setColumn(e.row, colId, '1');
        	obj.preCheck = e.row;	
        	if(obj.afterFnc) obj.afterFnc(true, e.row);
        };

        /** 전체 체크박스 기능 이벤트 등록 **/

        var grid_save = []; //그리드 저장을 위한 전역변수
        this.gridCheckboxInit = function(gridArr){ //컴포넌트의 모든 그리드를 grid_save 배열에 저장

        	if(arguments.length > 0){
        		var objType = Object.prototype.toString.call(gridArr);
        		if(objType != '[object Array]'){
        			alert('parameter type is only Array!\nthis is'+objType);
        			return;
        		}else{
        			for(var i = 0; i < gridArr.length; i++){
        				if(gridArr[i].valueOf() != "[object Grid]"){
        					alert('array in type only [object Grid]');
        					return;
        				}else{
        					grid_save.push(gridArr[i]);
        				}
        			}
        		}
        	}else{
        		var components = this.components;
        		for( var i = 0 ; i < components.length ; i++ ){
        			if(components[i].valueOf() == "[object Div]"){
        				var divcomponents = components[i].components;
        				for( var j = 0 ; j < divcomponents.length ; j++ ){
        					if(divcomponents[j].valueOf() == "[object Grid]"){
        						grid_save.push(divcomponents[j]);
        					}
        				}
        			}else if(components[i].valueOf() == "[object Grid]"){
        				grid_save.push(components[i]);
        			}
        		}
        	}
        	
        	for(var i=0 ; i <grid_save.length; i++){
        			
        		if(this.getCheckboxColIdx(grid_save[i]) != -1){
        			var oncellclick = grid_save[i].addEventHandler("oncellclick", this.gridCheckbox, this);
        			var onheadclick = grid_save[i].addEventHandler("onheadclick", this.gridCheckbox, this);
        			var ds = grid_save[i].getBindDataset();
        			var onload = ds.addEventHandler("onload", this.gridCheckbox, this);		
        			var onrowsetchanged = ds.addEventHandler("onrowsetchanged", this.gridCheckbox, this);		
        			if(oncellclick == -1 || onheadclick == -1 || onload == -1 || onrowsetchanged == -1){
        				this.alert('[그리드체크박스] 이벤트핸들러 등록 실패!');
        				return;
        			}	
        		}
        	}	
        };

        this.gridCheckbox = function(grid,event){ //이벤트 동작

        	var eventType = event.eventid;
        	if(eventType == 'onload' || eventType == 'onrowsetchanged'){ //dataset 'onload' or 'onrowsetchanged'일경우 grid 셋팅
        		for(var i=0 ; i<grid_save.length; i++){
        			if(grid.id == grid_save[i].getBindDataset().id){
        				grid = grid_save[i];
        			}
        		}
        	}
        	
        	var colCount = grid.getCellCount("Head");
        	var cb_colIdx = this.getCheckboxColIdx(grid);
        	if(cb_colIdx == -1) return; //그리드 헤드 컬럼에 체크박스가 없으면 종료
        	var ds = grid.getBindDataset(); //그리드에 바인딩된 데이타셋
        		
        	if(eventType == 'onload'){	//데이터셋 로드시에 데이터셋에 체크박스 컬럼없으면 생성
        	    var colId = this.getBindColName(grid, cb_colIdx);
        	    var isCheckCol = false;
        		for(var i=0;i<ds.colcount;i++){
        			if(ds.getColID(i) == colId) isCheckCol = true; 
        		}
        		
        		if(!isCheckCol){ //리턴된 데이터셋에 체크박스 컬럼이 없으면
        			ds.addColumn(colId, "string"); //체크박스컬럼 생성
        			for(var i=0; i<ds.rowcount; i++){
        				ds.setColumn(i, colId, "0"); //체크해제로 셋팅
        			}
        		}
        	}
        	
        	if(ds.rowcount == 0){ //데이터가 없으면 종료
        		grid.setCellProperty("Head", cb_colIdx, "expr", 0);
        		return;
        	}
        	
        	if(eventType == 'onheadclick'){	//head Click
        		if(cb_colIdx != event.cell) return; //체크박스컬럼 클릭이 아니므로 종료
        		var checkVal = grid.getCellProperty("Head", cb_colIdx, "expr");
        		if(checkVal == 1) checkVal = 0;
        		else checkVal = 1;
        		grid.setCellProperty("Head", cb_colIdx, "expr", checkVal);
        		var colId = this.getBindColName(grid, cb_colIdx);
        		for(var i=0; i<ds.rowcount; i++){
        			ds.setColumn(i, colId, checkVal);
        		}
        	
        	}else{ //onload, oncellclick, onrowsetchanged
        		if(eventType == 'oncellclick'){
        			if(cb_colIdx != event.cell) return; //체크박스 컬럼 클릭이 아니면 종료
        		}
        		var colId = this.getBindColName(grid, cb_colIdx);
        		var isCheck = 1;
        		for(var i=0; i<ds.rowcount; i++){
        			var check = ds.getColumn(i, colId);	
        			if(!this.isChecked(check)){
        				isCheck = 0;
        				break;
        			}
        		}		
        		grid.setCellProperty("Head", cb_colIdx, "expr", isCheck);
        	}
        	
        	if(event.row == -1 || event.row == undefined) return;
        	
        	if(grid.afterFnc) grid.afterFnc(this, this.isChecked(ds.getColumn(event.row, colId)), event.row);
        };

        //체크박스가 있는 컬럼 인덱스
        this.getCheckboxColIdx = function(grid){

        	var checkedColIdx = -1;
        	var colCount = grid.getCellCount('Body');
        	for(var i=0; i<colCount; i++){
        		var displayType = grid.getCellProperty('Body', i, "displaytype");
        		if(displayType == 'checkbox'){
        			checkedColIdx = i;
        			break;
        		}
        	}
        	return checkedColIdx;
        };

        //체크 여부
        this.isChecked = function(check){
        	
        	if(check){
        		if(check == "0" || check.toLowerCase() == "false" ){
        			return false;
        		}else{
        			return true;
        		}
        	}else{
        		return false;
        	}
        };

        //그리드 인덱스와 바인드된 데이터셋의 컬럼명
        this.getBindColName = function(grid,idx){
        		
        	var colId = grid.getCellProperty("Body", idx, "text").toString();
        	if(colId.indexOf('bind:') != -1){ 
        		colId = colId.replace("bind:", ""); 
        		//return colId;	
        	}else{ 
        		colId = "";
        		//alert('해당 그리드 인덱스에 바인드된 정보가 없습니다.');
        		//return;
        	}	
        	return colId;
        };

        //그리드 Body에 바인드 되어있는 컬럼 인덱스 찾기
        this.getIndexByColId =function(grid,bindName){ 

        	var result = -1;
        	for(var i = 0 ; i < grid.getCellCount("Body") ; i++){
        		var colId = grid.getCellProperty("Body", i, "text").toString();
        		if(colId.indexOf('bind:') != -1){ 
        			colId = colId.replace("bind:", ""); 
        			if(colId == bindName){
        				return i;
        			}
        		}
        	}
        };

        //그리드내에 체크된 데이터셋의 인덱스를 리턴(콤마로 연결)
        this.checkColIndex = function(grid){

        	var checkIdx = "";
        	var colIdx = this.getCheckboxColIdx(grid);
        	var colId = this.getBindColName(grid, colIdx);
        	var ds = grid.getBindDataset();
        	for(var i=0; i<ds.rowcount; i++){
        		var check = ds.getColumn(i, colId);
        		if(this.isChecked(check)) checkIdx += i+",";
        	}
        	
        	if(checkIdx) return checkIdx.substring(0, checkIdx.length-1);
        	else return checkIdx;	
        };

        
        //그리드 체크박스 - 체크된 갯수 리턴
        this.checkIndexCnt = function(grid){

        	var checkCnt = 0;
        	var colIdx = this.getCheckboxColIdx(grid);
        	var colId = this.getBindColName(grid, colIdx);
        	var ds = grid.getBindDataset();
        	for(var i=0; i<ds.rowcount; i++){
        		var check = ds.getColumn(i, colId);
        		if(this.isChecked(check)) checkCnt++;
        	}
        	return checkCnt;
        };

        //그리드간 체크된 데이터 이동 
        this.gridDataMove = function(orgGrid,targetGrid,afterFnc){
        		
        	if(!this.checkColIndex(orgGrid)){ //오리지널 그리드에서 체크된 데이터가 있는지 검사
        		this.alert('체크된 항목이 없습니다.');
        		return;
        	
        	}else{
        	
        		var checkedIdx = this.checkColIndex(orgGrid).split(",");	
        		var orgDs = orgGrid.getBindDataset();
        		var targetDs = targetGrid.getBindDataset();		
        		var colIdx = this.getCheckboxColIdx(orgGrid); //그리드의 체크박스 인덱스
        		var colId = this.getBindColName(orgGrid, colIdx); //데이터셋의 체크박스와 바인드된 컬럼명
        		var addDsRow = []; //타겟 데이터셋에 복사할 ROW		
        		targetDs.deleteRow(targetDs.addRow()); //api 버그로 인해서 추가!
        		for(var i=0; i<checkedIdx.length; i++){
        			var addDsCol = []; //타겟 데이터셋에 복사할 OBJ
        			for(var j=0; j<orgDs.colcount; j++){	
        				var data = orgDs.getColumn(checkedIdx[i], j);
        				if(orgDs.getColID(j) == colId){ //데이터셋의 체크박스 컬럼값은 0
        					data = 0;  
        				}
        				var obj = {};
        				obj.colId = orgDs.getColID(j);
        				obj.colVal = data;
        				addDsCol.push(obj);
        			}
        			addDsRow.push(addDsCol);
        		}
        	
        		orgDs.deleteMultiRows(checkedIdx); //오리지널 데이터셋에서 체크된 인덱스 삭제
        		
        		for(var i=0; i<addDsRow.length; i++){
        			var addDsCol = addDsRow[i];
        			var addIdx = targetDs.addRow(); 
        			for(var j=0; j<addDsCol.length; j++){
        				targetDs.setColumn(addIdx, addDsCol[j].colId, addDsCol[j].colVal);
        			}
        		}
        		
        		//오리지널 && 타겟 데이터셋 체크박스 리셋
        		for(var i=0; i<orgDs.getRowCount(); i++){
        			orgDs.setColumn(i, this.getBindColName(orgGrid, this.getCheckboxColIdx(orgGrid)), 0);
        		}
        		for(var i=0; i<targetDs.getRowCount(); i++){
        			targetDs.setColumn(i, this.getBindColName(targetGrid, this.getCheckboxColIdx(targetGrid)), 0);
        		}
        		
        	}
        	if(afterFnc) afterFnc(this);
        };

        //그리드 페이지 값 초기화
        this.initPageing = function(pageNum,rowBlockCount,pageBlockCount,totalRowCount){ //전체 글의 갯수(DB)

        	var page = {};	
        	page.pageNum = pageNum; //현재 페이지 번호	
        	page.rowBlockCount = rowBlockCount; //한페이지에 보여줄 글의 갯수		
        	page.pageBlockCount = pageBlockCount; //페이지 블록에 보여질 페이지 갯수	
        	page.totalRowCount = totalRowCount; //전체 글의 갯수(DB)
        	page.startRow = 0; //시작 행번호 (rownum)
        	page.endRow = 0; //끝 행번호
        	page.startPageNum = 0; //시작페이지 번호
        	page.endPageNum = 0; //끝 페이지 번호
        	page.totalPageCount = 0; //전체 페이지 갯수	
        	page.startRow = (page.pageNum-1)*page.rowBlockCount+1;
        	page.endRow = page.startRow+(page.rowBlockCount-1);
        	page.startPageNum = (page.pageNum-1)/(page.pageBlockCount*page.pageBlockCount)+1;
        	page.endPageNum = page.startPageNum+(page.pageBlockCount-1);
        	page.totalPageCount = Math.ceil((totalRowCount/rowBlockCount));
        	if(page.endPageNum > page.totalPageCount){
        		page.endPageNum = page.totalPageCount;
        	}
        	if(page.endRow > page.totalRowCount) page.endRow = page.totalRowCount;
        	return page;
        }

        //파라미터 자동 생성
        this.getParam = function(compObj,isDebug){

        	var json = this.getParamJson(compObj, isDebug);
        	return this.getParamJsonToString(json, isDebug);
        };

        //파라미터 관련 컴포넌트의 값 JSON으로 리턴
        this.getParamJson = function(compObj,isDebug,getComboText){
        		
        	dupIdArr = []; 
        	dupIdOrgArr = [];
        	var obj;
        	var errMsg = '';	
        	if(compObj == null){
        		obj = this.div_search;
        		errMsg = '[this.div_search] is not found!';
        	}else if(typeof compObj == 'string'){
        		obj = this.lookup(compObj);
        		errMsg = 'ID ['+compObj+'] is not found!';
        	}else if(typeof compObj == 'object'){
        		obj = compObj;
        	}else{
        		errMsg = 'parameter type is wrong!';
        	}
        	
        	if(!obj){ 
        		alert(errMsg);
        		return;
        	}
        	
        	if(obj.valueOf() == '[object Div]'){
        		obj = obj.components;
        	}	
        	var isDebug = isDebug || false;
        	var getComboText = getComboText || false;
        	var jsonObj = this.findAllComp(obj, getComboText);
        	
        	/*
        	if(arguments.length == 2){
        	
        	}
        	*/
        	//권한사업장 전체 체크 
        	delete jsonObj.AUTHORITYWORKPLACE;
        	delete jsonObj.ALL;
        	//jsonObj.TRPL_C = this.getTrplCode();	
        	
        	var jsonResult = "\n\n[JSON Result]\n";
        	var dupIdResult = "\n\n[Duplication Result]";
        	
        	if(!this.dupIdCheck()){
        		dupIdResult += ' - none';
        	}else{
        		dupIdResult += "\n";
        	}
        	
        	for(var keys in jsonObj){
        		jsonResult += keys + ' : ' + jsonObj[keys] + '\n';
        	}	
        		
        	if(isDebug){ 		
        		trace(jsonResult);
        		trace(dupIdResult + this.dupIdCheck());
        	}
        		
        	return jsonObj;
        };

        
        //JSON -> String 변환
        this.getParamJsonToString = function(json,isDebug){
        	
        	var javaCode = "";	
        	var param = "";
        	
        	for(var keys in json){
        		javaCode += 'String '+ keys + ' = requestHelper.getParameter("' + keys + '");\n';
        		param += keys + "=" + json[keys] + " ";
        	}
        	
        	if( param.length > 0 ){
        		param = param.substring(0, param.length-1);
        	}
        	
        	if(isDebug){	
        		if(javaCode) trace("\n\n[JAVA CODE]\n"+javaCode);	
        		if(param) trace("\n\n[Parameter Result]\n" + param);	
        	}
        	
        	return param;
        };

        //JSON -> DataSet 변환
        this.getParamJsonToDs = function(dsName,json,isDebug){
        	
        	this.removeChild(dsName); 
        	
        	var javaCode = "\n\n[JAVA VO CODE]\n";
        	var dsLog = "\n\n[DataSet Result]\n";
        	var ds = new Dataset;	
        		
        	for(var keys in json){
        		
        		var id = keys;
        		var val = json[keys].toString();
        		trace(id +":"+val);
        		var _val = "";
        		var dsType = "";
        		var javaType = "";
        		var rs = val.lastIndexOf(';');
        		
        		if(rs != -1){
        			_val = val.substring(0, rs);
        			var _type = val.substring(rs+1, val.length);			
        			if(_type.length == 0){
        				_val = val;
        				dsType = "STRING";
        				javaType = "String";
        			}else{			
        				if(_type.toLowerCase() == 'int'){ 
        					if(isNaN(_val) == true){
        						this.alert('['+_val+'] is not Number!\nfn:getParamJsonToDs');
        						return;
        					}
        					dsType = "INT";
        					javaType = "int";
        				}else if(_type.toLowerCase() == 'float'){
        					if(isNaN(_val) == true){
        						this.alert('['+_val+'] is not Number!\nfn:getParamJsonToDs');
        						return;
        					}
        					dsType = "FLOAT";
        					javaType = "float";
        				}else if(_type.toLowerCase() == 'date'){ 
        					dsType = "DATE";
        					javaType = "Date";
        				}else if(_type.toLowerCase() == 'time'){ 
        					dsType = "TIME";
        					javaType = "Date";
        				}else if(_type.toLowerCase() == 'datetime'){ 
        					dsType = "DATETIME";
        					javaType = "Date";
        				}else if(_type.toLowerCase() == 'blob'){ 
        					dsType = "BLOB";
        					javaType = "";
        					trace(id+': BLOB is not support!\nfn:getParamJsonToDs');
        					return;
        				}else if(_type.toLowerCase() == 'bigdecimal'){ 
        					dsType = "BIGDECIMAL";
        					javaType = "BigDecimal";
        				}else{ 
        					dsType = "STRING";
        					javaType = "String";
        				}
        			}
        		}else{
        			_val = val;
        			dsType = "STRING";
        			javaType = "String";
        		}
        		
        		var result = ds.addColumn(id, dsType);
        		if(result == -1){
        			trace('Column Add Fail!\nfn:getParamJsonToDs');
        			return;
        		}	
        		javaCode += "private " + javaType + " "+id + ";\n";
        		dsLog += id + "("+dsType+") = " + _val + "\n";
        	}
        	
        	var rowNm = ds.addRow();	
        	
        	for(var keys in json){
        		
        		var id = keys;
        		var val = json[keys].toString();
        		var rs = val.lastIndexOf(';');
        		var _val = "";
        		if(rs != -1){
        			_val = val.substring(0, rs);
        			var _type = val.substring(rs+1, val.length);			
        			if(_type.length == 0){
        				_val = val;
        			}			
        		}else{
        			_val = val;
        		}
        		ds.setColumn(rowNm, id, _val);
        	}
        	
        	if(isDebug){	
        		trace(javaCode);	
        		trace(dsLog);	
        	}
        	
        	ds.set_name(dsName);
        	this.addChild(dsName, ds); 
        	return ds;
        };

        

        //중복 ID 디버그를 위한
        var dupIdArr = []; 
        var dupIdOrgArr = [];

        //컴포넌트 검색
        this.findAllComp = function(components,getComboText){
        	
        	var saveObj = {};
        	var jsonObj = {};	
        	var paramType = ['[object Edit]','[object MaskEdit]','[object Combo]','[object Radio]','[object CheckBox]','[object ListBox]','[object Calendar]']; //파라미터로 만들 컴포넌트 종류
        	for( var i = 0 ; i < components.length ; i++ ){		
        		
        		var comp = components[i];
        		var componentsType = comp.valueOf();	
        		//trace(componentsType); //타입확인
        		if(componentsType == "[object Div]"){			
        			saveObj = this.mergeObjectProperty([saveObj, this.findAllComp(comp.components, getComboText)]);
        		}else{	
        			for( var j = 0; j < paramType.length ; j++ ){
        				if(componentsType == paramType[j]){
        					
        					var compValue = '';
        					if(getComboText){ 
        						if(componentsType == '[object Combo]' || componentsType == '[object Radio]'){
        							compValue = comp.text;
        						}else{
        							compValue = comp.value;
        						}
        					}else{
        						compValue = comp.value;
        					}
        					
        					var compId = comp.id;
        					if(typeof compValue == 'undefined'){
        						compValue = "";
        					}	
        					if(compValue == null){
        						compValue = "";
        					}	
        					dupIdOrgArr.push(compId);
        					if(compId.indexOf('_') != -1){
        						var arr = compId.split('_');
        						compId = "";
        						for( var k = 0 ; k < arr.length ; k++ ){
        							if(k == 0) continue;
        							if(k != arr.length -1) compId += arr[k] + "_";
        							else compId += arr[k];
        						}					
        					}		
        					//trace(compId+" : "+compValue);
        					dupIdArr.push(compId);
        					compId = compId.toUpperCase(); //키값 대문자로 변경
        					jsonObj[compId] = compValue;
        				}
        			}
        		}
        	}	
        	return this.mergeObjectProperty([saveObj, jsonObj]);
        };

        
        //오브젝트 병합
        this.mergeObjectProperty = function (objectArray) {
        	
        	var resultObject = {};

        	for(var i = 0, length = objectArray.length; i < length; i++) {

        		var object = objectArray[i];

        		for (var property in object) {
        			if (object.hasOwnProperty(property)) {
        				resultObject[property] = object[property];
        			}
        		}
        	}
        	return resultObject;
        };

        
        //중복ID 리턴
        this.dupIdCheck = function(){
        	
        	var dupIndex = [];
        	var results = [];
        	
        	for (var i=0; i<dupIdArr.length; i++) {
        		
        		var key = dupIdArr[i].toString();		
        		if (!results[key]) {
        			results[key] = 1;
        		} else {						
        			results[key] = results[key] + 1;
        			dupIndex.push(i);
        		}
        	}
        	
        	var str = "";
        	
        	for (var i in results) {
        		if(results[i] > 1){
        			var key = i;
        			for(var j=0 ; j < dupIdArr.length; j++){
        				if(dupIdArr[j] == key){
        					dupIndex.push(j);
        					break;
        				}
        			}
        		}
        	}
        	
        	dupIndex.sort();
        	
        	for(var i=0 ; i<dupIndex.length ; i++){
        		var id = dupIdOrgArr[dupIndex[i]];
        		str += id+", ";
        	}
        	
        	if(str) str = str.substring(0, str.length-2);	
        	return str;
        	
        };

        //그리드정렬 초기화
        this.gridSortInit = function(grid,arr){

        	var indexArr = [];
        	
        	if(arguments.length == 2){
        	
        		if(grid.valueOf() == '[object Dataset]'){
        			grid = grid.grid;
        			indexArr = grid.indexArr;
        		}else{
        			if(Object.prototype.toString.call(arr) != '[object Array]'){
        				alert('[Grid Sort]2nd parameter type is only Array!\nthis is' + Object.prototype.toString.call(arr));
        				return;
        			}
        			for(var i = 0 ; i < arr.length ; i++){							
        				if(typeof arr[i] == 'number'){
        					var colName = this.getBindColName(grid, arr[i]);
        					indexArr.push({headIndex: arr[i], bodyIndex: arr[i], colName: colName});					
        				}else if(typeof arr[i] == 'object'){
        					var json = arr[i];
        					for(var keys in json){
        						var colName = this.getBindColName(grid, json[keys]);
        						indexArr.push({headIndex: keys, bodyIndex: json[keys], colName: colName});					
        					}
        				}
        			}
        		}		
        	}else if(arguments.length == 1){
        		//이부분 수정 (바디,헤더 인덱스 매칭값)
        		var bodyIndex = 0;
        		for(var i = 0 ; i < grid.getCellCount("Head") ; i++){			
        			var colspan = grid.getCellProperty("Head", i, "colspan");
        			if(colspan > 1 ) continue;			
        			var colName = this.getBindColName(grid, bodyIndex);
        			//trace(i + " : " + bindName);			
        			indexArr.push({headIndex: i, bodyIndex: bodyIndex, colName: colName});					
        			bodyIndex++;
        		}
        	}else{	
        	
        		this.alert('parameter error!');
        		return;
        	}
        	
        	if(indexArr.length > grid.getCellCount("Head")){
        		alert('Index over\nmax: '+grid.getCellCount("Head")+'\tnow: '+iindexArr.length);
        		return;
        	}
        	
        	for(var i = 0 ; i < indexArr.length ; i++){ //스타일 cursor 추가				
        		grid.setCellProperty("Head", indexArr[i].headIndex, "style", "cursor:hand;");
        		var title = grid.getCellText(-1 , indexArr[i].headIndex);		
        		title = title.replace(sortAsc, "");
        		title = title.replace(sortDesc, "");
        		grid.setCellProperty("Head", indexArr[i].headIndex, "text", title);
        	}
        			
        	grid.indexArr = indexArr;
        	var ds = grid.getBindDataset();
        	ds.grid = grid;
        	ds.indexArr = indexArr;
        	var onheadclick = grid.addEventHandler("onheadclick", this.gridSortClickEvent, this);	
        	var onload = ds.addEventHandler("onload", this.gridSortInit, this);	
        	if(onheadclick == -1 || onload == -1){
        		this.alert('[그리드정렬] 이벤트핸들러 등록 실패!');
        		return;
        	}	
        };

        var sortAsc = "▲"; //오름
        var sortDesc = "▼"; //내림
        //헤드 더블클릭 이벤트
        this.gridSortClickEvent = function(grid,event){
        		
        	var indexArr = grid.indexArr;	
        	
        	for (var i = 0 ; i < indexArr.length ; i++){
        		
        		var headIndex = indexArr[i].headIndex;
        		var bodyIndex = indexArr[i].bodyIndex;
        		var colName = indexArr[i].colName;
        		
        		var displayType_h = grid.getCellProperty('Head', headIndex, "displaytype");
        		var displayType_b = grid.getCellProperty('Body', bodyIndex, "displaytype");
        		
        		if(displayType_h == 'checkbox'){ //체크박스 컬럼 제외
        			continue;
        		}
        	
        		if(headIndex == event.cell){
        			
        			var ds = grid.getBindDataset();		
        			
        			if(ds.getRowCount() == 0) return; //데이터셋이 없으면 종료
        			
        			var title = grid.getCellText(-1, headIndex);
        			var orderType = "";
        			//trace('bind colName> '+colName);
        			if(title.indexOf(sortAsc) == -1 && title.indexOf(sortDesc) == -1){ //최초
        			
        				title += " "+sortDesc; //최초 내림 
        				orderType = "-";
        			}else if(title.indexOf(sortAsc) != -1){ //현재 오름
        				
        				title = title.replace(sortAsc, sortDesc);
        				orderType = "-";
        			}else if(title.indexOf(sortDesc) != -1){ //현재 내림
        			
        				title = title.replace(sortDesc, sortAsc);				
        				orderType = "+";
        			}
        			
        			grid.setCellProperty("Head", headIndex, "text", title);
        			
        			if(displayType_b == 'number'){ //숫자컬럼만
        				this.sortForNumber(grid, colName, orderType);
        			}else{
        				ds.set_keystring("S:"+orderType+colName);			
        			}			
        		}
        	}		
        	
        };

        //숫자컬럼 정렬
        this.sortForNumber = function(grid,colId,orderType){
        	
        	var orgData = [];
        	var ds = grid.getBindDataset();		
        	
        	for(var i = 0 ; i < ds.getRowCount() ; i++){
        		
        		var num = ds.getColumn(i, colId).toString().replace(/,/gi,""); //콤마 제거
        		if(isNaN(num) == true){ //숫자아니면 종료
        			alert(num + 'is not Number!');
        			return;		
        		}else{		
        			num = num * 1;	
        			orgData.push({orgIndex: i, value: num});
        		}
        	}
        		
        	var temp = 0;
        	var num1 = 0;
        	var num2 = 0;
        	
        	//버블정렬
        	for(var i = orgData.length ; i > 0 ; i--){
        				
        		for(var j = 0 ; j < i-1 ; j++){														
        			if(orderType == '+') { //오름
        				num1 = orgData[j].value;
        				num2 = orgData[j+1].value;
        			}else{ //내림
        				num1 = orgData[j+1].value;
        				num2 = orgData[j].value;
        			}
        			if(num1 > num2){									
        				temp = orgData[j];
        				orgData[j] = orgData[j+1];
        				orgData[j+1] = temp;
        			}			
        		}				
        	}
        	//데이터셋 이동
        	for(var i = 0 ; i < orgData.length ; i++){		
        		
        		var orgIndex = orgData[i].orgIndex;
        		var moveIndex = i;
        		ds.moveRow(orgIndex, i);				
        		for(var j = 0 ; j < orgData.length ; j++){		
        			var index = orgData[j].orgIndex;
        			if(orgIndex > index && moveIndex <= index){
        				orgData[j].orgIndex += 1;
        			}
        		}
        	}
        };

        /* 라디오버튼 자동 정렬  */
        this.rdoAutoSize = function(rdoArr,padding){

        	var strSize = {'kor1':30,'etc1':25,'kor':12,'etc':7};
        	
        	var padding = padding || 10;
        	
        	var size =  0;
        	var maxIndex = 0;
        	
        	for(var i=0 ; i<rdoArr.length ; i++){
        	
        		var ds = rdoArr[i].getInnerDataset();
        		
        		for(var j=0 ; j<ds.getRowCount() ; j++){
        				
        			var str = ds.getColumn(j, 'datacolumn');
        			var tempSize = 0;
        			for(var k=0 ; k<str.length ; k++){
        				var _str = str.charAt(k);
        				if(this.korTextCheck(_str) ){ //한글
        					if(k==0){ 
        						tempSize += strSize.kor1;
        					}else{ 
        						tempSize += strSize.kor;
        					}
        					//trace(_str + " k> "+tempSize);
        				}else{ //기타
        					if(k==0) tempSize += strSize.etc1;
        					else tempSize += strSize.etc;
        					//trace(_str + " e> "+tempSize);
        				}
        			}
        			
        			if(tempSize > size ){
        				size = tempSize;
        				maxIndex = i;
        			}
        			tempSize = 0;
        			//trace(size+">--------------------------");
        		}	
        	}
        	size += padding ;
        	//trace('last> '+size);
        	
        	for(var i=0 ; i<rdoArr.length ; i++){
        	
        		var ds = rdoArr[i].getInnerDataset();
        		var rowCnt = ds.getRowCount();
        		var rdoWidth = size * rowCnt;
        		rdoArr[i].set_width(rdoWidth);
        	}
        };

        //한글검사
        this.korTextCheck = function korTextCheck(str){
           for(i=0; i<str.length; i++){
        		if(!((str.charCodeAt(i) > 0x3130 && str.charCodeAt(i) < 0x318F) || (str.charCodeAt(i) >= 0xAC00 && str.charCodeAt(i) <= 0xD7A3)))
        		return false;
        		else return true;
        	}
        };

        //선택한 권한사업장 코드 리턴
        //파라미터: 콤보박스 , 체크박스
        //전체 선택시 콤마로 연결
        this.getTrplCode = function(combo,chkbox){

        	if(arguments.length != 0 && arguments.length != 2){
        		this.alert('Parameter length only 0 or 2');
        		return;
        	};
        	
        	var trpl_c = '';
        	
        	if(this.isHeadquarters()){ //본사인 경우에는 권한사업장 컴포넌트가 존재
        		var trplCode;
        		var allCheck;
        		try{
        			if(combo) trplCode = combo;
        			else trplCode = this.getAuthComp().combo;
        			if(chkbox) allCheck = this.getAuthComp().check;
        			else allCheck = this.div_auth.chk_all;
        		}catch(e){
        			trace('ERROR: 권한사업장 또는 전체 체크박스 컴포넌트가 존재하지 않습니다.');
        			return;
        		}
        		
        		//권한사업장 전체 체크 
        		if(allCheck){
        			if(allCheck.value == true){ //전체 체크시
        				
        				var ds = trplCode.getInnerDataset();
        				var code = '';
        				for(var i=0 ; i<ds.getRowCount();i++){
        					code += ds.getColumn(i, 0) + ',';
        				}
        				if(code.indexOf(',') != -1){
        					code = code.substring(0, code.length-1);
        				}
        				trpl_c = code;
        			}else{
        				trpl_c = trplCode.value;
        			}
        		}
        	}else{ //지사
        		trpl_c = 'undefined';
        	}	
        	return trpl_c;
        };

        
        //출력을 위한 권한사업장 code,name 리턴
        this.getTrplCodePrint = function(combo,chkbox){

        	if(arguments.length != 0 && arguments.length != 2){
        		this.alert('Parameter length only 0 or 2');
        		return;
        	};
        	
        	var searchText = '사업장: ';
        	
        	if(this.isHeadquarters()){ //본사인 경우에는 권한사업장 컴포넌트가 존재
        		var trplCode;
        		var allCheck;
        		try{
        			if(combo) trplCode = combo;
        			else trplCode = this.getAuthComp().combo;
        			if(chkbox) allCheck = this.getAuthComp().check;
        			else allCheck = this.div_auth.chk_all;
        		}catch(e){
        			trace('ERROR: 권한사업장 또는 전체 체크박스 컴포넌트가 존재하지 않습니다.');
        			return;
        		}
        		
        		//권한사업장 전체 체크 
        		if(allCheck){
        			if(allCheck.value == true){ //전체 체크시
        				searchText += '전체';
        				/*
        				var ds = trplCode.getInnerDataset();				
        				
        				for(var i=0 ; i<ds.getRowCount() ; i++){
        				
        					//var code = '[' + ds.getColumn(i, 0) + ']';
        					var name = ds.getColumn(i, 1) + ',';
        					searchText += name;
        				}
        				
        				if(searchText.indexOf(',') != -1){
        					searchText = searchText.substring(0, searchText.length-1);
        				}
        				*/
        				
        			}else{
        				//var code = trplCode.value;
        				var name = trplCode.text;
        				searchText += name;
        			}
        		}
        	}else{ //지사
        		var code = '[' + application.gv_glnCode + ']';
        		var name = application.gv_companyName;
        		searchText += code+name;
        	}	
        	
        	return searchText;
        };

        //본사 지사 확인(true 본사, 위탁대리점 / false 지사)
        this.isHeadquarters = function(){
        	return (application.gv_mbcoType == 1 || application.gv_mbcoType == 5 || (application.gv_mbcoType == 2 && application.gv_userSystemCode == "21")) ? true : false;
        };

        //본사인 경우만 > 권한사업장 한개씩만 선택(체크박스 숨김)
        this.authChkDisable = function(){
        	
        	if(this.isHeadquarters()){
        		this.getAuthComp().check.set_visible(false);
        	}
        };

        //권한사업장 이벤트 등록
        this.addEventAuth = function(eventName,fnc){
        	
        	var eventName = eventName || 'onitemchanged';
        	var fnc = fnc || this.search;
        	this.getAuthComp().combo.addEventHandler(eventName, fnc, this);
        };

        //권한사업장 컴포넌트 
        this.getAuthComp = function(){

        	var comp = {};
        	comp.div = this.div_auth;
        	comp.combo= comp.div.cbo_authorityWorkplace;
        	comp.check= comp.div.chk_all;
        	return comp;
        };

        //오즈
        this.ozViewer = function(ozParam,viewName,httpPost)
        {
        	var url = application.gv_ozViewer_url;
        	// GET/POST 방식 (옵션)
        	if (httpPost == undefined) {
        		httpPost = false;
        	}
        	
        	//파라미터 유효성 검사
        	if(!ozParam){
        		this.alert('Param Error: param length 0!');
        		return;
        	}
        	if(!ozParam.sId){
        		this.alert('Param Error: [sId] empty');
        		return;
        	}
        	if(!ozParam.paramType){
        		this.alert('Param Error: [paramType] empty');
        		return;
        	}	
        	if(ozParam.paramType == 'csv'){ 
        		if(!ozParam.sParam){
        			this.alert('Param Error: [sParam] empty');
        			return;
        		}
        		if(!ozParam.sUrl) ozParam.sUrl = '';
        	}else{ // param		
        		if(!ozParam.sUrl){
        			this.alert('Param Error: [sUrl] empty');
        			return;
        		}	
        		if(!ozParam.sParam) ozParam.sParam = '';
        	}
        	var wbId = "wb_oz";
        	this.removeChild(wbId);
        	var wb = new WebBrowser;	
        	wb.set_visible(false);
        	var result = this.addChild(wbId, wb);
        	if(result == -1){
        		this.alert('web brower initialization fail!');
        		return;
        	}
        	wb.show();	
        	var serverUrl = application.services['svc'].url; //서버주소	
        	if (application.gv_userTPC == "admin") { //admin일때
        		serverUrl = application.gv_serverAdmin_url; //서버주소/nhvan/oz/ozViewer.nh
        		url = application.gv_serverAdmin_url + "oz/ozViewer.nh";
        	}
        	var sId = ozParam.sId;
        	var sUrl = ozParam.sUrl;
        	var paramType = ozParam.paramType;
        	if(serverUrl.charAt(serverUrl.length-1) == '/'){
        		if(sUrl.charAt(0) == '/'){
        			sUrl = sUrl.substring(1, sUrl.length);
        		}
        	}else{
        		if(sUrl.charAt(0) != '/'){
        			sUrl = '/'+sUrl;
        		}
        	}
        	sUrl = serverUrl + sUrl;
        	var sParam = '';
        	if(ozParam.sParam){ 
        		for(var keys in ozParam.sParam){
        			sParam += keys+"//COL//"+ozParam.sParam[keys]+"//END//";
        		}	
        		sParam = sParam.substring(0, sParam.length-7);
        	}
        	
        	sParam = this.htmlEntityEnc(sParam);
        	var sName = this.getScreenName();
        	
        	url += "?serverType="+application.gv_serverType;
        	// 더 이상 FLASH 뷰어타입을 지원하지 않음
        // 	if (viewerType == "HTML5" || viewerType == "FLASH") {
        // 		url += '&viewer='+viewerType;
        // 	} else {
        // 		if(application.gv_ozViewer) url += '&viewer='+application.gv_ozViewer;
        // 	}
        	url += '&viewer='+"HTML5";
        	if(viewName) url += '&viewName='+viewName
        	url += "&sName="+sName+"&sId="+sId+"&sUrl="+sUrl+"&paramType="+paramType+"&sParam="+sParam;
        	var encURL = encodeURI(encodeURI(url));
        	if (!httpPost && encURL.length < 2000) {
        		// GET 요청
        		system.execBrowser(encURL);
        		//wb.set_url("javascript:window.open('"+url+"','popup','top=0px,left=0px,height=600px,width=800px')");	
        	} else {
        		// POST 요청으로 변환 - 빈 팝업창에 form 태그를 생성하고, submit 한다.
        		var win = window.open('');
        		if (win == null) {
        			alert('팝업차단을 해제해 주시기 바랍니다.');
        			return;
        		} else {
        			win.focus();
        		}
        		
        		var action = url.split('?')[0];
        		var params = [];
        		if (url.indexOf('?') > -1) {
        			params = url.split('?')[1].split('&');
        		}
        		
        		var str = '<form name="ozViewer_form" action="' + action + '" method="POST">';
        		for (var i = 0; i < params.length; i++) {
        			var param = params[i].split('=');
        			str += '<input type="hidden" name="' + param[0] + '" value="' + param[1] + '" />';
        		}
        		str += '</form>';
        		
        		win.document.charset = 'utf-8';
        		win.document.write(str);
        		win.document.forms[0].submit(); // form submit
        	}
        };

        //lsh
        this.addOzBtn = function(param)
        {
        	//파라미터 유효성 검사
        	var form = param.form;
        	var ozBtn = param.ozBtn;
        	var ozFnc =	param.ozFnc;
        	
        	if(!form){
        		alert('form 정보가 없습니다.');
        		return;
        	}
        	if(!ozBtn){
        		alert('오즈버튼 컴포넌트 정보가 없습니다.');
        		return;
        	}
        	if(!ozFnc){
        		alert('오즈 실행함수 정보가 없습니다.');
        		return;
        	}
        	
        	var objPopupDiv = new PopupDiv(); 
        	objPopupDiv.init("oz_popup", "absolute", 0, 0, 120, 76, null, null);
        	this.addChild("oz_popup", objPopupDiv); 
        	objPopupDiv.show();
        	
        	
        	ozBtn.ozPopup = objPopupDiv;
        	ozBtn.clearEventHandler("onclick");
        	ozBtn.addEventHandler('onclick', this.ozListShow, this);
        	
        	var objListBox = new ListBox();  
        	objListBox.init("oz_listBox", "absolute", 0, 0, 120, 76, null, null);
        	objListBox.set_codecolumn('code');
        	objListBox.set_datacolumn('data');
        	
        	var ds = new Dataset;
        	ds.addColumn("code", "string");
        	ds.addColumn("data", "string");
        	var row = ds.addRow();
        	ds.setColumn(row, "data", "FLASH");
        	ds.setColumn(row, "code", "FLASH");
        	row = ds.addRow();
        	ds.setColumn(row, "data", "HTML5");
        	ds.setColumn(row, "code", "HTML5");
        	objListBox.set_innerdataset(ds);	
        	
        	param.ozPopup = objPopupDiv;
        	objListBox.ozParam = param;
        	objListBox.addEventHandler('onitemclick', this.ozBtnClick, this);
        	objPopupDiv.addChild("oz_listBox", objListBox);
        	objListBox.show();
        };

        //lsh
        this.addOzBtnAdd = function(param){

        	//파라미터 유효성 검사
        	var form = param.form;
        	var ozBtn = param.ozBtn;
        	var ozFnc =	param.ozFnc;
        	
        	if(!form){
        		alert('form 정보가 없습니다.');
        		return;
        	}
        	if(!ozBtn){
        		alert('오즈버튼 컴포넌트 정보가 없습니다.');
        		return;
        	}
        	if(!ozFnc){
        		alert('오즈 실행함수 정보가 없습니다.');
        		return;
        	}
        	
        	var objPopupDiv = new PopupDiv(); 
        	objPopupDiv.init("oz_popup", "absolute", 0, 0, 149, 70, null, null);
        	this.addChild("oz_popup", objPopupDiv); 
        	objPopupDiv.show();
        	
        	
        	ozBtn.ozPopup = objPopupDiv;
        	ozBtn.clearEventHandler("onclick");
        	ozBtn.addEventHandler('onclick', this.ozListShow, this);
        	
        	var objListBox = new ListBox();  
        	objListBox.init("oz_listBox", "absolute", 0, 0, 149, 70, null, null);
        	objListBox.set_codecolumn('code');
        	objListBox.set_datacolumn('data');
        	
        	var ds = new Dataset;
        	ds.addColumn("code", "string");
        	ds.addColumn("data", "string");
        	var row = ds.addRow();
        	
        	//ds.setColumn(row, "data", "FLASH(발주순서)");
        	//ds.setColumn(row, "code", "FLASH");
        	//row = ds.addRow();
        	
        	ds.setColumn(row, "data", "HTML5(발주순서)");
        	ds.setColumn(row, "code", "HTML5");
        	row = ds.addRow();
        	
        	//ds.setColumn(row, "data", "FLASH(상품명)");
        	//ds.setColumn(row, "code", "FLASH_NM");
        	//row = ds.addRow();
        	
        	ds.setColumn(row, "data", "HTML5(상품명)");
        	ds.setColumn(row, "code", "HTML5_NM");
        	row = ds.addRow();
        	//ds.setColumn(row, "data", "FLASH(상품코드)");
        	//ds.setColumn(row, "code", "FLASH_CD");
        	//row = ds.addRow();
        	
        	ds.setColumn(row, "data", "HTML5(상품코드)");
        	ds.setColumn(row, "code", "HTML5_CD");
        	objListBox.set_innerdataset(ds);	
        	
        	param.ozPopup = objPopupDiv;
        	objListBox.ozParam = param;
        	objListBox.addEventHandler('onitemclick', this.ozBtnClick1, this);
        	objPopupDiv.addChild("oz_listBox", objListBox);
        	objListBox.show();
        };

        this.ozListShow = function(obj,e){
        	
        	var ozPopup = obj.ozPopup;
        	var nX = system.clientToScreenX(obj, 0) - system.clientToScreenX(application.mainframe, 0); 
        	var nY = system.clientToScreenY(obj, parseInt(obj.height)) - system.clientToScreenY(application.mainframe, 0);	
        	ozPopup.trackPopup(nX, nY);
        };

        this.ozBtnClick = function(obj,e){
        	
        	var param = obj.ozParam;
        	var ozPopup = param.ozPopup;
        	var form = param.form;
        	if(e.index == 0){
        		application.gv_ozViewer = 'FLASH';
        	}else{ 
        		if(system.navigatorname == "IE" && (system.navigatorversion == "8" || system.navigatorversion == "9")){
        			alert('해당 브라우저는 HTML5뷰어를 지원하지 않습니다.\n최신버젼을 사용하시거나 크롬에서 실행하세요.');
        			ozPopup.closePopup();
        			return;
        		}
        		application.gv_ozViewer = 'HTML5';
        	}
        	
        	ozPopup.closePopup();
        	if(form[param.ozFnc]) form[param.ozFnc]();
        };

        this.ozBtnClick1 = function(obj,e){
        	
        	var param = obj.ozParam;
        	var ozPopup = param.ozPopup;
        	var form = param.form;
        	
        	if(e.index == 0){
        		if(system.navigatorname == "IE" && (system.navigatorversion == "8" || system.navigatorversion == "9")){
        			alert('해당 브라우저는 HTML5뷰어를 지원하지 않습니다.\n최신버젼을 사용하시거나 크롬에서 실행하세요.');
        			ozPopup.closePopup();
        			return;
        		}
        		application.gv_ozViewer = 'HTML5';
        	}else if(e.index == 1){
        		form.ozType.value = "NM";
        		if(system.navigatorname == "IE" && (system.navigatorversion == "8" || system.navigatorversion == "9")){
        			alert('해당 브라우저는 HTML5뷰어를 지원하지 않습니다.\n최신버젼을 사용하시거나 크롬에서 실행하세요.');
        			ozPopup.closePopup();
        			return;
        		}
        		application.gv_ozViewer = 'HTML5';
        	}else if(e.index == 2){
        		form.ozType.value = "CD";
        		if(system.navigatorname == "IE" && (system.navigatorversion == "8" || system.navigatorversion == "9")){
        			alert('해당 브라우저는 HTML5뷰어를 지원하지 않습니다.\n최신버젼을 사용하시거나 크롬에서 실행하세요.');
        			ozPopup.closePopup();
        			return;
        		}
        	}
        	ozPopup.closePopup();
        	if(form[param.ozFnc]) form[param.ozFnc]();
        };

        /*
         *	전자계약 오즈 뷰어
         * eltType			계약서종류
         * eltCtrwNo	계약서번호
         * chgSqNo		계약서일련번호
         * tempYn		미리보기여부
         */
        this.eltOzViewer = function(eltType,eltCtrwNo,chgSqNo,tempYn){
        	if (tempYn == undefined || tempYn == "") tempYn = "N";
        	
        	//trace("[eltOzViewer] eltType=" + eltType + " / eltCtrwNo="+eltCtrwNo + " / chgSqNo="+chgSqNo + " / tempYn="+tempYn);
        	
        	var ozId = "OMG_DS_SC_211301";
        	var ozUrl = "/rest/oz/ct/eltctrw/osEltctrw";
        		
        	if (eltType == "21") {
        		// 임대차거래계약서
        		ozId = "OMG_DS_SC_311301";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "22") {
        		// 직매입거래계약서(공통)
        		ozId = "OMG_DS_SC_311304";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "23") {
        		// 특약매입거래계약서(공통)
        		ozId = "OMG_DS_SC_311305";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "31") {
        		// 위수탁거래계약서(농산)
        		ozId = "OMG_DS_SC_311302";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "32") {
        		// 직매입거래계약서(농산)
        		ozId = "OMG_DS_SC_311303";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "41") {
        		// 임대차거래계약서(테넌트)
        		ozId = "OMG_DS_SC_311501";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "43") {
        		// 특약매입거래계약서(테넌트)
        		ozId = "OMG_DS_SC_311503";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "44") {
        		// 단기 임대차거래계약서(테넌트)
        		ozId = "OMG_DS_SC_311504";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "45") {
        		// 단기 특약매입거래계약서(테넌트)
        		ozId = "OMG_DS_SC_311505";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";	
        	} else if (eltType == "51") {
        		// 직매입 거래계약서(수산)
        		ozId = "OMG_DS_SC_311601";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "52") {
        		// 특약매입 거래계약서(수산)
        		ozId = "OMG_DS_SC_311602";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        // 	} else if (eltType == "91") {
        // 		// 부속계약서 (마트상품부)
        // 		ozId = "OMG_DS_SC_211391";
        // 		ozUrl = "/rest/oz/ct/eltctrw/osEltctrw";
        	} else if (eltType == "92") {
        		// 부속계약서 (임대차)
        		ozId = "OMG_DS_SC_311392";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "94") {
        		// 부속계약서 (특약매입)
        		ozId = "OMG_DS_SC_311394";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "95") {
        		// 부속계약서 (임대차_테넌트)
        		ozId = "OMG_DS_SC_311595";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "96") {
        		// 부속계약서 (특약매입_테넌트)
        		ozId = "OMG_DS_SC_311596";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "97") {
        		// 부속계약서 (단기 임대차_테넌트)
        		ozId = "OMG_DS_SC_311597";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "98") {
        		// 부속계약서 (단기 특약매입_테넌트)
        		ozId = "OMG_DS_SC_311598";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "93") {
        		// 부속계약서 (농산)
        		ozId = "OMG_DS_SC_311393";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "24") {
        		// 스마트유통시스템 이용신청서
        		ozId = "OMG_DS_SC_311306";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "61") {
        		// 농약 원제·제품 연계사업 계약서
        		ozId = "OMG_DS_SC_311701";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "62") {
        		// 농약 구매·납품 계약서
        		ozId = "OMG_DS_SC_311702";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "63") {
        		// 제주농약 구매·납품 계약서
        		ozId = "OMG_DS_SC_311703";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "64") {
        		// 제4종복합비료 및 유기농업자재 구매·공급계약서
        		ozId = "OMG_DS_SC_311704";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "65") {
        		// 하우스용 필름 구매 공급 계약서
        		ozId = "OMG_DS_SC_311705";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "66") {
        		// 농산물포장상자 구매공급계약서
        		ozId = "OMG_DS_SC_311706";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "67") {
        		// 농업용 파이프 구매공급 계약서
        		ozId = "OMG_DS_SC_311707";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "68") {
        		// 일반자재 구매공급계약서
        		ozId = "OMG_DS_SC_311708";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "69") {
        		// 농협 매취농기계 구매납품 계약서
        		ozId = "OMG_DS_SC_311709";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "70") {
        		// 농협 수탁농기계 구매납품 계약서
        		ozId = "OMG_DS_SC_311710";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "71") {
        		// 농협 건설기계(자동차 포함) 구매납품 계약서
        		ozId = "OMG_DS_SC_311711";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "72") {
        		// 농협 수탁농기계(무인비행장치(드론 포함)) 구매납품 계약서
        		ozId = "OMG_DS_SC_311712";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "73") {
        		// 농기계 대출금 중앙결제 계약서
        		ozId = "OMG_DS_SC_311713";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "74") {
        		// 무기질비료(원예) 구매납품 계약서
        		ozId = "OMG_DS_SC_311714";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "75") {
        		// 무기질비료(일반) 구매납품 계약서
        		ozId = "OMG_DS_SC_311715";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "76") {
        		// 소포장비료 운송비 사후정산 추가 계약서
        		ozId = "OMG_DS_SC_311716";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "77") {
        		// 상토 구매납품 계약서
        		ozId = "OMG_DS_SC_311717";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "78") {
        		// 유기질(기타)비료 구매납품계약서
        		ozId = "OMG_DS_SC_311718";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "79") {
        		// 토양개량제(무상분) 규산질비료 구매납품 계약서
        		ozId = "OMG_DS_SC_311719";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "80") {
        		// 토양개량제(무상분) 석회질비료 구매납품 계약서
        		ozId = "OMG_DS_SC_311720";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else if (eltType == "81") {
        		// 토양개량제(유상분) 구매납품 계약서
        		ozId = "OMG_DS_SC_311721";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrwNew";
        	} else {
        		// 기존 전자계약(본부, 축/수산)
        		ozId = "OMG_DS_SC_211301";
        		ozUrl = "/rest/oz/ct/eltctrw/osEltctrw";
        	}
        	
        	var ozParam = {
        		sId: ozId,
        		sUrl: ozUrl,
        		paramType: 'param',
        		sParam: {ELT_CTRW_NO:eltCtrwNo, CHG_SQNO:chgSqNo, TEMP_YN:tempYn}
        	};
        	this.ozViewer(ozParam ,"ozViewerPotal", true);
        }

        //특수문자 인코딩
        this.htmlEntityEnc = function(str)
        {    
            if(!str){
                return str;
            }else{
                return this.replaceAll(str, '&', '//C1//'); 
            }
        };

        this.replaceAll = function(str,searchStr,replaceStr)
        {
            return str.split(searchStr).join(replaceStr);
        };

        this.getDate = function(addDate,format)
        {	
        	var addDate = addDate || 0;
        	var format = format || '';
        	var d = new Date();
        	d.addDate(addDate);
        	var yyyy = d.getFullYear();
        	var mm = d.getMonth()+1;
        	mm = mm < 10 ? "0"+mm : mm;
        	var dd = d.getDate();
        	dd = dd < 10 ? "0"+dd : dd;
        	return yyyy+format+mm+format+dd;
        };

        //get 화면아이디
        this.getScreenName = function()
        {
        	var title = this.parent.sNm;
        	if(!title) title = this.titletext;
        	if(!title) title = '';
        	return title;
        };

        //앞뒤 공백제거
        this.strTrim = function(str)
        {
        	return str.replace(/(^\s*)|(\s*$)/gi, "");
        };

        //모든 공백제거
        this.allTrim = function(str)
        {
        	if(!str) return '';
        	return str.replace(/ /gi, '');
        };

        //get 엑셀파일명
        this.getExcelFileName = function(title){

        	var fileName = title || this.getScreenName();
        	fileName = this.allTrim(fileName);
        	fileName += "_" + this.getDate() + ".xls";
        	return encodeURI(encodeURI(fileName));
        };

        /** 페이지 **/
        this.pageAddEvent = function(param){

        	var ds = param.m_ds;
        	ds.d_ds = param.d_ds;
        	ds.d_pageDiv = param.d_pageDiv;
        	ds.addEventHandler('onload', this.pageHide, this);
        };

        this.pageHide = function(obj,e){

        	var ds = obj.d_ds;
        	if(ds.getRowCount() == 0){
        		var page = obj.d_pageDiv.components;
        		for(var i=0; i<page.length ; i++){
        			page[i].set_visible(false);
        		}
        	}
        };

        //grid,'B',2 -> 그리드 바디의 2번째 인덱스에 매칭되는 헤더 인덱스값 리턴
        //grid,'H',2 -> 그리드 헤더의 2번째 인덱스에 매칭되는 바디 인덱스값 리턴
        this.getHeadBodyIndex = function(grid,getType,index){

        	//i=헤더인덱스
        	for(var i = 0 ; i < grid.getCellCount("Head") ; i++){			
        		
        		var colspan = grid.getCellProperty("Head", i, "colspan");
        		if(colspan > 1 ) continue;	
        		var bodyIndex = grid.getCellProperty("head", i, "col");
        		var txt = grid.getCellProperty("head", i, "text");
        		
        		if(getType == 'B') if(bodyIndex==index) return i;
        		if(getType == 'H') if(i==index) return bodyIndex;
        		//trace(i + " : " + bodyIndex);
        	}	
        };
        //삭제
        this.grdColAutoSize = function(paramArr){
        	
        	//그리드 헤더의 리사이즈 옵션 none
        	for(var i=0 ; i < paramArr.length ; i++){
        	
        		var grid = paramArr[i].grid;
        		
        		for(var j=0 ; j < grid.getCellCount("Body") ; j++){
        			
        			var headIndex = this.getHeadBodyIndex(grid, 'B', j);
        			grid.setCellProperty("Head", headIndex, "autosizecol", "none");
        		
        		}
        		var ds = grid.getBindDataset();
        		ds.autoSizeParam = paramArr[i];
        		ds.addEventHandler("onload", this.grdColAutoSizeExec, this);
        	}
        };
        //삭제
        this.grdColAutoSizeExec = function(obj,e){
        	
        	var ds = obj;
        	var grid = obj.autoSizeParam.grid;
        	var resizeIndex = obj.autoSizeParam.resizeIndex;	
        	var autosizingtype = 'col';
        	if(obj.autoSizeParam.autosizingtype) autosizingtype = obj.autoSizeParam.autosizingtype;
        	
        	if(ds.getRowCount() == 0){
        		
        		grid.set_autosizingtype('none');
        		return;
        	
        	}else{
        	
        		for(var i=0 ; i < grid.getCellCount("Body") ; i++){
        			
        			var headIndex = this.getHeadBodyIndex(grid, 'B', i);
        			
        			if( !resizeIndex || (resizeIndex.length == 1 && resizeIndex[0]== -1) ){
        						
        				grid.setCellProperty("Head", headIndex, "autosizecol", "default");
        				
        			}else{
        			
        				for(var j=0 ; j < resizeIndex.length ; j++){
        					if(resizeIndex[j] == i){
        						grid.setCellProperty("Head", headIndex, "autosizecol", "default");
        					}
        				}
        			}		
        			
        		}
        		grid.set_autosizingtype(autosizingtype);
        		grid.set_autosizebandtype('allband');
        	}
        };

        /**
         * 날짜 구하는 함수 인수값이 없을 경우 오늘 날짜를 리턴한다. 
         * @param y		연도
         * @param m		월
         * @param d		일
         * @returns yyyy-MM-dd
         */
        this.getTodayStr = function(y,m,d) {

        	return this.getDateWithOffset(y, m, d);
        	
        };
        /**
         * 타겟 날짜에 인수값을 더해준다.
         * 1. 파라미터가 없으면 오늘날짜를 리턴한다.
         * 2. 파라미터가 3개면 타겟날짜를 오늘날짜로 셋팅한다.
         * @param y				타겟날짜에 더할 년
         * @param m     		타겟날짜에 더할 월
         * @param d     		타겟날짜에 더할 일
         * @param targetDate 	타겟날짜 (형식:yyyy-MM-dd, yyyyMMdd)
         * @returns  	 		yyyy-MM-dd
         */
        this.getDateWithOffset = function(y,m,d,targetDate) {
        	
        	if(arguments.length == 0 || arguments.length == 3){	//타겟날짜는 오늘날짜로 셋팅
        		targetDate = new Date();
        	}else if(arguments.length == 4 ){
        		if(!dateChk(targetDate)){
        			return;
        		}
        		var tempDate = targetDate.replace(/-/gi,"");
        		targetDate = tempDate.substring(0,4)+'-'+tempDate.substring(4,6)+'-'+tempDate.substring(6,8);
        	}else{
        		alert('Error: parameter length is wrong!');
        		return;
        	}
        	y = y || 0;
        	m = m || 0;
        	d = d || 0;	
        	targetDate = targetDate || new Date();
        	var date = new Date(targetDate);
        	date.setFullYear(date.getFullYear() + y, date.getMonth() + m, date.getDate() + d);
        	var year = date.getFullYear();
        	var month = date.getMonth() + 1;
        	var day = date.getDate();
        	month = (month < 10) ? '0' + month : month;
        	day = (day < 10) ? '0' + day : day;
        	//var today = year + "-" + month + "-" + day;
        	var today = year + "" + month + "" + day;
        	return today;
        }

        //엔터키 검색 이벤트 등록
        this.addEventEnterSearch = function(searchParam){
        	
        	var form = searchParam.form;
        	var paramArr = searchParam.param;	
        	for(var i=0 ; i < paramArr.length ; i++){
        		var param = paramArr[i];
        		param.form = form;
        		var obj = param.edit;
        		obj.param = param;
        		obj.addEventHandler("onkeyup", this.enterSearch, this);
        	}
        };

        this.enterSearch = function(obj,e){
        	
        	var param = obj.param;
        	var form = param.form;
        	if(e.keycode == 13) form[param.fnc]();
        };

        //금액 단위변환
        this.cvtAmount = function(amount,n){

        	var n = n || 1000;	//변환 단위
        	if(amount == 0 || n == 0){ 
        		return 0;
        	}else{				//소수점 버림, 정수형 반환
        		return Math.floor(amount/n)?Math.floor(amount/n) : 0;
        	}  
        };

        //그리드 자동 리사이즈 등록
        this.addEventGridResize = function(grid){

        	grid.set_cellsizingtype('col'); //마우스로 컬럼 사이즈 조절	
        	grid.set_autosizebandtype('body');
        	grid.set_autosizingtype('both'); //자동 컬럼 사이즈 조절	
        	grid.set_extendsizetype('row');
        	grid.set_cellsizebandtype('body');
        	for(var i=0 ; i < grid.getCellCount("Body") ; i++){
        		grid.setCellProperty("Body", i, "autosizerow", "limitmin");
        		grid.setCellProperty("Body", i, "autosizecol", "limitmin");
        	}
        };

        //화면ID get
        this.getScreenId = function(url){
        	
        	var sId = url || this.url  || this.name + ".xfdl";
        	if(sId){
        		var n1 = sId.lastIndexOf(':');
        		var n2 = sId.lastIndexOf('.');
        		sId = sId.substring(n1+1, n2);		
        	}else{
        		sId = '';
        	}
        	return sId;
        };

        //메뉴아이디 get
        this.getMenuId = function(){
        	
        	var sId = this.getScreenId();
        	var ds = application.gds_menu;
        	for(var i=0 ; i< ds.getRowCount() ; i++){
        		var _sId = ds.getColumn(i, 'FILE_NAME');
        		if(sId == _sId) return ds.getColumn(i, 'MENU_ID');
        	}
        };

        //해당 화면이 글로벌 이벤트에 등록된 화면인지 검사
        this.isGlobalEvent = function(sId,eventName,rType){
        		
        	var ds = application.gds_eventInfo;
        	for(var i=0 ; i< ds.getRowCount() ; i++){
        		var _sId = ds.getColumn(i, 'SID');
        		if(!_sId) continue;
        		var _eventName = ds.getColumn(i, 'EVENT_NAME');
        		var param = ds.getColumn(i, 'PARAM');
        		if(sId == _sId && eventName == _eventName){
        		
        			if(rType == 'PARAM'){
        				return param;				
        			}else if(rType == 'INDEX'){
        				return i;
        			}else{
        				return true;
        			}
        		}
        	}
        	if(rType == 'PARAM') return '';
        	else if(rType == 'INDEX') return -1;
        	else return false;
        };

        this.formatDate = function(format,date){
           var formatDate = "";
           if(format == "yyyy-MM-dd"){
              formatDate = date.substring(0, 4) + "-" + date.substring(4, 6) + "-" + date.substring(6, 8);
           }else{
              formatDate = date;
           }
           return formatDate;
        };

        this.searPopValue = function(params){
        	if(!params.searchCode && !params.searchText && params.autoType == true){
        		this.alert("코드 또는 명칭을 입력하셔야 합니다.");
        		return false;
        	}
        	if(params.autoType == false){
        		return false;
        	}
        	return true;
        };

        this.getInfoTableDt = function(param){

        	var form = param.form;
        	var div = param.div;
        	var table = param.table;
        	
        	if(!table){
        		this.alert('테이블 정보가 없습니다.');
        		return;
        	}
        	
        	var url = application.gv_server_url+'rest/ajax/analysis/info/infoChange/getInfoTableDt';
        	$.ajax({
        		headers: { 
        			Accept : "application/json;charset=UTF-8"
        		},
        		url: url, 
        		type: 'post',
        		dataType: 'text',
        		data: {table:table},
        		async: true,
        		beforeSend: function(xhr){},
        		success: function(_data) {
        			var result = $.parseJSON(_data);
        			if (result.code != 'SUCCESS') { //실패
        				
        			} else {
        				var data = result.data;
        				var str = data[0].date;
        				if(str) str = form.formatDate("yyyy-MM-dd",str);
        				else str = '정보없음';
        				if(div){
        					str = "[최근 업데이트: "+str+"]";
        					div.set_text(str);
        				}
        			}
        		},
        		error: function(jqXHR, status, error) {
        			//alert(status + ' : ' + error);
        		},
        		complete : function (){}
        	});	
        };

        
        //배열 중복제거
        this.removeArrayDuplicate = function(array){

            var a = {};
            for(var i=0; i <array.length; i++){
                if(typeof a[array[i]] == "undefined"){
                    a[array[i]] = 1;
                }
            }
            array.length = 0;

            for(var i in a){
        		array[array.length] = i;
            }
            return array;
        };

        //버튼 disable
        this.btnDisable = function(btn){
        	
        	if(application.gv_serverType != 'ADMIN') return;
        	//운영서버만 적용
        	var arr = [];
        	if(this.isArray(btn)){
        		arr = btn;
        	}else{
        		arr.push(btn);
        	}
        	
        	var gln = application.gv_glnCode;
        	var ds = application.gds_gln;
        	var n = ds.findRow('CODE', gln);
        	if(n > -1){ //ds에 있으면 저장금지
        		for(var i=0 ; i<arr.length ; i++){
        			arr[i].clearEventHandler("onclick");
        			arr[i].addEventHandler('onclick',this.imsiAlert,this); 
        		}
        	}
        };

        this.imsiAlert = function(){

        	alert('해당기능은 이용하실 수 없습니다.');
        };

        this.isArray = function(obj){
        	var objType = Object.prototype.toString.call(obj);
        	if(objType == '[object Array]') return true;
        	else return false;
        };

        
        //그리드 자동 사이즈 조절
        this.gridAutoResizeM = function(obj){	
        	
        	obj.set_enableredraw(false);
        	obj.set_cellsizingtype('col'); //마우스로 컬럼 사이즈 조절	
        	obj.set_autosizebandtype('body');
        	obj.set_autosizingtype('both'); //자동 컬럼 사이즈 조절	
        	obj.set_extendsizetype('row');
        	obj.set_cellsizebandtype('body');
        	
        	for(var i=0 ; i < obj.getCellCount("Body") ; i++){
        		var nSize = obj.getFormatColSize(i);
        		if(nSize == 0) {
        			obj.setCellProperty("Body", i, "autosizerow", "none");
        			obj.setCellProperty("Body", i, "autosizecol", "none");
        			continue;
        		}
        		obj.setCellProperty("Body", i, "autosizerow", "limitmin");
        		obj.setCellProperty("Body", i, "autosizecol", "limitmin");
        	}
        	obj.set_enableredraw(true);
        };
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();
