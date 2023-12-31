﻿(function()
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
                this.set_name("frmDatatipFunction");
                this.set_titletext("DataTip Function");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("chart1", "absolute", "1.86%", "7.03%", "95.8%", "90.89%", null, null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "2.05%", "20", null, "28", "86.72%", null, this);
            obj.set_taborder("1");
            obj.set_text("getChartData");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "14.55%", "20", null, "28", "74.22%", null, this);
            obj.set_taborder("2");
            obj.set_text("showDataEditor");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "27.05%", "20", null, "28", "61.72%", null, this);
            obj.set_taborder("3");
            obj.set_text("removeDataEditor");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmDatatipFunction");
            		p.set_titletext("DataTip Function");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("frmDatatipFunction.xfdl", "lib::comChart.xjs");
        this.registerScript("frmDatatipFunction.xfdl", function() {
        //include "lib::comChart.xjs";

        /*
         * rMate Chart for HTML5 nexacro 샘플 소스
         *
         * rMateChartH5 version : 3.0
         * nexacro version : 14
         *
         * nexacro과 rMateChart for HTML5 간에 데이타를 주고 받는 모듈을 포함하여
         * rMateChartH5의 기능을 구현한 예제입니다.
         * 
         * rMateChart for HTML5 는 HTML5 표준과 자바스크립트로 구현된 차트 제품으로
         * nexacro의 Runtime 모드에서는 Plugin 상태에서 실행되고
         * HTML5 모드에서는 브라우져의 iframe내에서 실행되게 됩니다.
         * 이를 위해 차트 개발시 nexacro의 WebBrowser 컴포넌트(onusernotify가 지원되는 버젼)로 작성되어야 하며
         * rMateChartH5 Kit for nexacro을 통해 Runtime과 HTML5를 동시에 지원할 수 있게 됩니다.
         * 이때 WebBrowser 컴포넌트내에 넣어질 html을 필요하게 되며 이에 대한 예제는 Kit에서
         * nexacroChartH5Sample.html로 제공되고 있습니다.
         * 
         * Runtime모드로 실행될 때는 아래의 함수를 사용하는 기능은 nexacro과의 연동이 안되어
         * html내어서 별도의 동명의 자바스크립트 함수로 구현되어야 하며, 이때 함수내에서
         * nexacro내의 기능과 연동하여 사용할 수는 없습니다. (HTML5모드에서는 가능)
         *    labelJsFunction
         *    dataTipJsFunction
         *    fillJsFunction
         *    insideLabelJsFunction
         *    outsideLabelJsFunction
         *    totalLabelJsFunction
         *    tickLabelJsFunction
         *    innerTipJsFunction
         *    targetTipJsFunction
         *    seriesLabelFunc
         * 
         * - 주의사항
         *  HTML5 모드로 실행하는 경우 nexacroChartH5Sample.html은 iframe내에서 실행되므로 동일한 서버에서 불려져야
         *  브라우져의 보안정책에 위배되지 않게 됩니다. 다른 서버에서 불려질 경우 제대로 작동하지 문제가 발생하니
         *  유의하시기 바랍니다.
         */

        /*
         * 차트에서 레이아웃에 dataTipJsFunction 기능에 의거하여 함수에서 차트에 표시할 데이타팁(툴팁)을 지정하는 예제입니다.
         * 레이아웃에서 dataTipJsFunction에 불려질 함수명을 넣어주고
         * 해당 함수에서 표시할 데이타팁을 만들어 반환하게 됩니다.
         */
        this.form_onload = function(obj,e)
        {	
        	// <필수> Chart 기본설정함수(obj,후처리함수명)
        	this.gfn_setRMateChart(this.chart1,"rMateChartOnLoad","useDataEditor=true");
        }

        // chartVars에 rMateOnLoadCallFunction 으로 아래 함수를 설정하여 rMateChartH5가 로딩된후 불려지게 할 수 있습니다.
        this.rMateChartOnLoad = function(id) {
        	this.rMateChartSetLayout(this.chart1, layoutStr);
        	this.rMateChartSetData(this.chart1, chartData);
        }

        this.frmDatatipFunction_onbeforeclose = function(obj,e) {
        	this.rMateChartClear(this.chart1);
        }

        
        var layoutStr = '\
        <rMateChart backgroundColor="0xFFFFFF" borderStyle="solid" cornerRadius="5">\
        	<Options>\
        		<Caption text="Annual Report"/>\
        		<DataEditor showOnInit="true" formatter="{numFmt}" useCloseButton="false" editorHeight="94" reverseRow="true" textAlign="right"/>\
        	</Options>\
        	<Column3DChart showDataTips="true" dataTipJsFunction="dataTipFunc">\
        		/* \
        			dataTipJsFunction : Column3DChart 시리즈에 마우스 오버될 때 실행되는 Javascript함수로 \
        			html파일과 Form 내에 정의한 Javascript함수로 데이터를 보낸 후 Javascript 에서 반환되는 값을 Tooltip에 보여줍니다. \
        			** HTML5모드만을 사용할 경우 dataTipFunc를 window.NEXACROWEBBROWSER.parent.dataTipFunc 로 주시면 이 Form의 dataTipFunc가 실행됩니다. \
        		*/ \
        		<horizontalAxis>\
        			<CategoryAxis categoryField="Month" displayName="날짜"/>\
        		</horizontalAxis>\
        		<verticalAxis>\
        			<LinearAxis displayName="금액"/>\
        		</verticalAxis>\
        		<series>\
        			<Column3DSeries id="series1" yField="Profit" displayName="Profit">\
        				<showDataEffect>\
        					<SeriesInterpolate/>\
        				</showDataEffect>\
        			</Column3DSeries>\
        			<Column3DSeries id="series2" yField="Cost" displayName="Cost">\
        				<showDataEffect>\
        					<SeriesInterpolate/>\
        				</showDataEffect>\
        			</Column3DSeries>\
        			<Column3DSeries id="series3" yField="Revenue" displayName="Revenue">\
        				<showDataEffect>\
        					<SeriesInterpolate/>\
        				</showDataEffect>\
        			</Column3DSeries>\
        		</series>\
        	</Column3DChart>\
        </rMateChart>\
        ';

        // 차트 데이터
        var chartData = [{"Month":"Jan","Profit":1000,"Cost":1500,"Revenue":2300},
        				{"Month":"Feb","Profit":1400,"Cost":1400,"Revenue":1200},
        				{"Month":"Mar","Profit":1500,"Cost":1200,"Revenue":1600},
        				{"Month":"Apr","Profit":1900,"Cost":1300,"Revenue":1300},
        				{"Month":"May","Profit":1400,"Cost":900,"Revenue":1000},
        				{"Month":"Jun","Profit":2000,"Cost":1000,"Revenue":1200}];

        
        ///////////////// 아래의 예제 함수들은 rMateChartH5와 연동하여 불려지는 함수들이며 위에 정의한 htmlUrl 의 html 내에도 정의되어야 합니다. - 함수의 사용에 관련된 자세한 내용은 rMateChart for HTML5를 참조하시기 바랍니다.  //////////////////////

        
        /*
        // ------------------------- 데이터팁 사용자 정의 함수 -----------------------------------------------------
        // 챠트에서 showDataTips="true" 설정 후 마우스 오버 시 보이는 데이터팁 정의
        // layout XML 에서 Chart 속성을 넣을때 dataTipJsFunction를 주고, 만든 javascript 함수명을 넣어줍니다
        // 예) <Column3DChart showDataTips="true" dataTipJsFunction를="dataTipFunc">
        //
        // 파라메터 설명
        // seriesId : layout XML에서 부여한 series의 id가 있을 경우, 해당 id를 보내줍니다.
        // seriesName : 시리즈의 displayName 으로 정의한 시리즈 이름을 보내줍니다.
        // xName : X 축에 displayName 을 정의하였다면 X축의 displayName을 보내줍니다.
        // yName : Y 축에 displayName 을 정의하였다면 Y축의 displayName을 보내줍니다.
        // data : 해당 item의 값을 표현하기 위해 입력된 data(row값에 해당 - data로 입력된 종류에 따라 XML문자열 또는 배열의 Object가 됩니다)
        // values : 해당 item의 값 (배열로 전달되며, 챠트 종류에 따라 아래와 같이 들어옵니다.)
                    BarSeries     0:x축값 1:y축값
                    ColumnSeries  0:x축값 1:y축값
                    AreaSeries    0:x축값 1:y축값
                    BubbleSeries  0:x축값 1:y축값 2:radius값
                    LineSeries    0:x축값 1:y축값
                    HLOCSeries    0:x축값 1:open값 2:low값 3:high값 4:close값
                    PieSeries     0:값 1:퍼센트값 2:nameFiled명
        */
        this.dataTipFunc = function(seriesId,seriesName,index,xName,yName,data,values) {
        //trace("dataTipFunc seriesId:"+seriesId+" seriesName:"+seriesName+" index:"+index+" xName:"+xName+" yName:"+yName+" values:"+values+" data:"+data);
        	var str = "<table border='1' borderColor='#cc7722' cellpadding='0' cellspacing='0'>";
        	str += "<tr>";
        	str += "<td align='center'>이미지</td><td align='cneter'><img src='http://www.riamore.net/image/leftlogo.gif'></td>";
        	str += "</tr>";
        	str += "<tr>";
        	str += "<td align='center'>" + "series ID" + "</td><td align='center'>" + seriesId + "</td>";
        	str += "</tr>";
        	str += "<tr>";
        	str += "<td align='center'>" + "displayName" + "</td><td align='center'>" + seriesName + "</td>";
        	str += "</tr>";
        	str += "<tr>";
        	str += "<td align='center'>" + "item Index" + "</td><td align='center'>" + index + "</td>";
        	str += "</tr>";
        	str += "<tr>";
        	str += "<td align='center'>" + "X축 이름" + "</td><td align='center'>" + xName + "</td>";
        	str += "</tr>";
        	str += "<tr>";
        	str += "<td align='center'>" + "Y축 이름" + "</td><td align='center'>" + yName + "</td>";
        	str += "</tr>";
        	str += "<tr>";
        	str += "<td align='center'>" + "X축 값" + "</td><td align='center'>" + values[0] + "</td>";
        	str += "</tr>";
        	str += "<tr>";
        	str += "<td align='center'>" + "Y축 값" + "</td><td align='center'>" + values[1] + "</td>";
        	str += "</tr>";
        	str += "<tr>";
        	str += "<td align='center'>" + "합 계" + "</td><td align='center'>" + this.getSum(data) + "</td>";
        	str += "</tr>";
        	str += "</table>";
        	return str;
        }

        this.getSum = function(values) {
        	var sum = 0;
        	for(var v in values) {
        		sum += Number(values[v]) || 0;
        	}
        	return sum;
        }

        this.Button00_onclick = function(obj,e)
        {
        	var data = this.rMateChartGetChartData(this.chart1);
        	
        	var str= "";
        	var item;
        	for(var i=0; i<data.length; i++) {
        		item = data[i];
        		for(var p in item) {
        			str += p + " : " + item[p] + "\r";
        		}
        	}
        	alert(str);
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.rMateChartShowDataEditor(this.chart1);
        }

        this.Button02_onclick = function(obj,e)
        {
        	this.rMateChartRemoveDataEditor(this.chart1);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onbeforeclose", this.frmDatatipFunction_onbeforeclose, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("frmDatatipFunction.xfdl");

       
    };
}
)();
