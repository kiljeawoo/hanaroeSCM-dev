//XJS=comChart.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path, "lib::rMateChartH5.xjs");
        this.addIncludeScript(path, "lib::rMateChartH5License.xjs");
        this.registerScript(path, function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::rMateChartH5.xjs", null, exports); }	//include "lib::rMateChartH5.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::rMateChartH5License.xjs", null, exports); }	//include "lib::rMateChartH5License.xjs";

        this.getRMateChartH5License = function(wb){	
        	
        	var license = '';
        	if(application.gv_serverType == 'LOCAL' || !application.gv_serverType){			     //로컬서버
        		license = wb.rMateChartH5License_local;
        	}else if(application.gv_serverType == 'DEV' || application.gv_serverType == 'ADMIN'){//개발,운영
        		license = wb.rMateChartH5License;
        	}
        	return license;
        };

        this.chartBtnAddEvent = function(){

        	var btn = this.getChartInfo().btn;
        	var eventResult = btn.addEventHandler("onclick", this.chartBtn, this);	
        	if(eventResult == -1){
        		this.alert('[Chart] EventHandler(button onclick) Add Fail!');
        		return;
        	}		
        };

        //챠트
        this.chartBtn = function(){
        		
        	var webComp = this.getChartInfo().webComp; //show,hide
        	var grid = this.getChartInfo().grid; //show,hide
        	var ds = this.getChartInfo().ds;
        	var btn = this.getChartInfo().btn;
        	var btn_text = btn.text;
        	var chartData = this.getChartData();
        		
        	if(btn_text == this.getChartInfo().chartText){ //현재 버튼의 텍스트가 '챠트'
        	
        		if(ds.getRowCount() == 0 || !chartData){
        			this.alert(this.getChartInfo().emptyText);
        			return;
        		}
        				
        		btn.set_text(this.getChartInfo().listText);
        		grid.set_visible(false);
        		webComp.set_visible(true);		
        		if(this.rMateChartChartIDArr.length == 0){ //최초 초기화
        			this.chartInit(); 
        		}else{	//새로 고침
        			this.rMateChartOnLoad();
        		}
        	}else{
        		btn.set_text(this.getChartInfo().chartText);
        		grid.set_visible(true);
        		webComp.set_visible(false);
        	}	
        };

        
        //챠트 정보
        this.getChartInfo = function(){

        	var chartProp = this.chartInfoProp();
        	
        	for(var keys in chartProp){
        		if(!chartProp[keys]){
        			switch(keys){
        				case "webComp": this.alert('[Chart] has no Web Brower Component!'); break;
        				case "ds": this.alert('[Chart] has no Dataset!'); break;
        				case "grid": this.alert('[Chart] has no grid!'); break;
        				case "btn": this.alert('[Chart] has no button!'); break;
        				case "chartInfo": this.alert('[Chart] has no chartInfo!'); break;
        				case "chartText": this.alert('[Chart] has no chartText!'); break;
        				case "listText": this.alert('[Chart] has no listText!'); break;
        				case "emptyText": this.alert('[Chart] has no emptyText!'); break;
        			}			
        			return;
        		};
        	}
        	return chartProp;
        };

        //초기화
        this.chartInit = function(){
        	
        	var ds = this.getChartInfo().ds;
        	var eventResult = ds.addEventHandler("onload", this.rMateChartOnLoad, this);	
        	if(eventResult == -1){
        		this.alert('[Chart] EventHandler(dataset onload) Add Fail!');
        		return;
        	}		
        	var htmlUrl       = application.gv_chartHtml_url;//'http://localhost:8080/nhvan/rMateChartH5/Html/nexacroChartH5.html';
        	var scriptRootUrl = application.gv_chartJS_url;//'http://localhost:8080/nhvan/rMateChartH5';
        	this.rMateChartCreate(this.getChartInfo().webComp, scriptRootUrl, htmlUrl, this.makeChartVars());
        };

        //차트 변수 지정
        this.makeChartVars = function() {
        	
        	var chartVars = '';
        	var rMateOnLoadCallFunction = 'rMateChartOnLoad';
        	chartVars += 'rMateOnLoadCallFunction='+rMateOnLoadCallFunction;
        	return chartVars;
        };

        //챠트 데이터 로딩후 그리기
        this.rMateChartOnLoad = function() {

        	var webComp = this.getChartInfo().webComp;
        	var chartData = this.getChartData();
        	var ds = this.getChartInfo().ds;
        	
        	if(ds.getRowCount() == 0 || !chartData){
        		if(this.getChartInfo().btn.text == this.getChartInfo().listText){
        			this.alert(this.getChartInfo().emptyText);
        		}
        		return;
        	}
        		
        	var layoutStr = this.getChartLayout(this.objClone(chartData));
        	var name = {};
        	if(this.isNameMake()){
        		name = chartData[chartData.length-1];
        		chartData.pop();
        	}
        	
        	this.rMateChartSetLayout(webComp, layoutStr);
        	this.rMateChartSetData(webComp, chartData);
        };

        //y축 디스플레이 이름정보객체 생성여부
        this.isNameMake = function(){
        	
        	var chartInfo = this.getChartInfo().chartInfo;
        	var nameMake = false;	
        	if(chartInfo.yAxis.indexOf(":") != -1) nameMake = true;
        	return nameMake;
        };

        //데이터셋 -> 챠트데이터 변환
        this.getChartData = function(){
        	
        	var ds = this.getChartInfo().ds;
        	if(ds.getRowCount() == 0){
        		return;
        	}
        	
        	var chartInfo = this.getChartInfo().chartInfo;
        	var orgKeyString = ds.keystring;
        	ds.set_keystring(chartInfo.orderBy); //정렬
        	
        	var chartData = [];	
        	var data = {};
        	var name = {};
        	var _xAxisData = "";
        	for(var i=0 ; i<ds.getRowCount() ; i++){	
        		
        		var xAxis = chartInfo.xAxis;
        		var xAxisData = ds.getColumn(i, chartInfo.xAxis);
        		var yAxis = chartInfo.yAxis;
        		var yAxisData = ds.getColumn(i, chartInfo.yAxisData);
        		var yViewName = "";		
        		
        		if(this.isNameMake()){
        			var _code = chartInfo.yAxis.split(":")[0];
        			var _name = chartInfo.yAxis.split(":")[1];
        			yAxis = ds.getColumn(i, _code);
        			yViewName = ds.getColumn(i, _name);
        		}else{
        			yAxisData = ds.getColumn(i, yAxis);		
        		}
        	
        		if(i==0){
        			data[xAxis] = xAxisData;
        			data[yAxis] = yAxisData;
        			_xAxisData = xAxisData;
        			if(this.isNameMake()) name[yAxis] = yViewName;
        		}else{
        			if(_xAxisData == xAxisData){
        				data[yAxis] = yAxisData;
        				if(this.isNameMake()) name[yAxis] = yViewName;
        			}else{
        				chartData.push(data);	
        				data = {};
        				data[xAxis] = xAxisData;
        				data[yAxis] = yAxisData;
        				_xAxisData = xAxisData;
        			}
        		}
        	}
        	
        	chartData.push(data);
        	
        	//차트 데이터
        	/*
        	for(var i=0 ; i<chartData.length ; i++){
        		var json = chartData[i];
        		for(var keys in json){
        			trace(keys + " : "+json[keys]);
        		}
        		trace("--------------------------");
        	}
        	
        	//Y축 디스플레이 텍스트
        	for(var keys in name){
        		trace(keys + " : "+name[keys]);
        	}
        	*/
        	
        	if(this.isNameMake()){ 		
        		chartData.push(name);
        	}
        	
        	ds.set_keystring(orgKeyString);
        	return chartData;
        };

        //챠트 레이아웃 생성
        this.getChartLayout = function(chartData){

        	var chartInfo = this.getChartInfo().chartInfo;
        	var chartType = chartInfo.chartType;
        	var subTitle = chartInfo.subTitle;
        	if(!subTitle) subTitle = "";
        	
        	var name = {};
        	if(this.isNameMake()){
        		name = chartData[chartData.length-1];
        		chartData.pop();
        	}	
        	
        	var yAxisStr = "";
        	var json = chartData[0];
        	
        	for(var keys in json){
        		if(keys == chartInfo.xAxis) continue;
        		var yField = keys;
        		var displayName = chartInfo.displayName;
        		if(this.isNameMake()){
        			displayName = name[keys];
        		}
        //trace(yField +" > "+displayName);

        //챠트 타입에 따른 레이아웃
        if(chartType == 'LINE'){

        yAxisStr += "\
        <Line2DSeries id='"+chartInfo.chartId+"' yField='"+yField+"' displayName='"+displayName+"' itemRenderer='CircleItemRenderer'>\
        	<showDataEffect><SeriesInterpolate/></showDataEffect>\
        </Line2DSeries>\
        ";

        }else if(chartType == 'COLUMN'){

        yAxisStr += "\
        <Column3DSeries id='"+chartInfo.chartId+"' yField='"+yField+"' displayName='"+displayName+"'>\
        	<showDataEffect><SeriesInterpolate/></showDataEffect>\
        	<fills>\
        		<SolidColor color='0x336699'/>\
        		<SolidColor color='0x3366FF'/>\
        		<SolidColor color='0x6666FF'/>\
        		<SolidColor color='0x9966FF'/>\
        		<SolidColor color='0xCC6699'/>\
        		<SolidColor color='0xCC0066'/>\
        	</fills>\
        </Column3DSeries >\
        ";

        }else if(chartType == 'PIE'){

        yAxisStr += "\
        <Pie2DSeries id='"+chartInfo.chartId+"' nameField='"+chartInfo.xAxis+"' field='"+yField+"' labelPosition='inside' color='#ffffff' startAngle='90'>\
        	<showDataEffect>\
        		<SeriesInterpolate duration='1000'/>\
        	</showDataEffect>\
        </Pie2DSeries>\
        ";
        }
        	}//end for
        	
        	var layoutStr = "";
        	
        if(chartType == 'LINE' || chartType == 'COLUMN'){

        	var useVisibleCheck = 'true'; //체크박스
        	var visibleItemSize = 12;//스크롤바 유효 개수
        	var scrollLayOut = "";
        	
        	if(chartData.length > visibleItemSize){
        	scrollLayOut = "\
        		<horizontalAxisRenderers>\
                    <ScrollableAxisRenderer axis='{"+chartInfo.chartId+"}' visibleItemSize='"+visibleItemSize+"' fontFamily='맑은 고딕'/>\
                </horizontalAxisRenderers>\
                ";
        	}
        	
        	layoutStr = "\
        <rMateChart backgroundColor='0xFFFFFF' cornerRadius='12' borderStyle='none'>\
        	<Options>\
        		<Caption text='"+chartInfo.title+"'/>\
        		<SubCaption text='"+subTitle+"' textAlign='right'/>\
        		<Legend useVisibleCheck='"+useVisibleCheck+"' horizontalGap='0' position='bottom' horizontalScrollPolicy='off' defaultMouseOverAction='true'/>\
        	</Options>\
        	<NumberFormatter id='numfmt' useThousandsSeparator='true'/>\
        	<Line2DChart showDataTips='true' paddingTop='0' dataTipJsFunction='dataTipFunc'>\
        		<horizontalAxis>\
        			<CategoryAxis padding='0.5' id='"+chartInfo.chartId+"' categoryField='"+chartInfo.xAxis+"' labelJsFunction='axisLabelFunc'/>\
        		</horizontalAxis>"+scrollLayOut+"\
        		<verticalAxis>\
        			<LinearAxis formatter='{numfmt}'/>\
        		</verticalAxis>\
        		<series>"+yAxisStr+"</series>\
        	</Line2DChart>\
        </rMateChart>\
        ";	
        		
        }else if(chartType == 'PIE'){

        layoutStr = "\
        <rMateChart backgroundColor='0xFFFFFF' borderStyle='none' cornerRadius='5'>\
        	<Options>\
        		<Caption text='"+chartInfo.title+"'/>\
        		<SubCaption text='"+subTitle+"' textAlign='right' fontSize='12'/>\
        		<Legend position='right' direction='vertical'/>\
        	</Options>\
        	<Pie2DChart showDataTips='true'>\
        		<series>"+yAxisStr+"</series>\
        	</Pie2DChart>\
        </rMateChart>\
        ";
        }
        	return layoutStr;
        };

        //객체 복사
        this.objClone = function(obj) {
        	
            if(null == obj || "object" != typeof obj){
        		return obj;
            }
            var copy = obj.constructor();
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)){ 
        			copy[attr] = obj[attr];
                }
            }
            return copy;
        };
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();
