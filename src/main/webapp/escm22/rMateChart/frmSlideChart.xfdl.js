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
                this.set_name("frmSlideChart");
                this.set_titletext("Slide Chart");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("chart1", "absolute", "1.86%", "2.47%", "95.8%", "95.44%", null, null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmSlideChart");
            		p.set_titletext("Slide Chart");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("frmSlideChart.xfdl", "lib::comChart.xjs");
        this.registerScript("frmSlideChart.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comChart.xjs", null, exports); }	//include "lib::comChart.xjs";

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
         * 슬라이드 차트가 로딩된 후 rMateOnLoadCallFunction에 의해 지정된 함수가 불려져 슬라이드 차트의 레이아웃과 데이타를 설정하는 예제입니다.
         * 이때 rMateChartSetSlideLayoutSet 함수는 직접 레이아웃 xml을 문자열로 넣어줄 수 있고
         *      rMateChartSetSlideDataSet 함수는 직접 데이타를 xml문자열이나 배열로 넣어줄 수 있게 됩니다.
         */

        this.form_onload = function(obj,e)
        {	
        	// <필수> Chart 기본설정함수(obj,후처리함수명)
        	this.gfn_setRMateChart(this.chart1,"rMateChartOnLoad");
        }

        // chartVars에 rMateOnLoadCallFunction 으로 아래 함수를 설정하여 rMateChartH5가 로딩된후 불려지게 할 수 있습니다.
        this.rMateChartOnLoad = function(id) {
        //trace("rMateChartOnLoad");
        	var layout1 = this.getCartesianLayout("Column2D","칼럼 차트로 표현",["Profit"]);
        	var layout2 = this.getCartesianLayout("Line2D","라인 차트로 표현",["Profit"]);
        	var layout3 = this.getCartesianLayout("Column3D","칼럼 3D 멀티 데이터 표현",["Profit","Cost"]);

        	// 슬라이드에 넣을 데이터와 레이아웃들.
        	layoutSet = [layout1, layout2, layout3, radarLayout];
        	dataSet = [chartData, chartData2, chartData3, chartData3];

        	// 슬라이드에서 표현할 레이아웃들 삽입.
        	this.rMateChartSetSlideLayoutSet(this.chart1, layoutSet);

        	// 슬라이드에서 표현할 데이터들 삽입.
        	this.rMateChartSetSlideDataSet(this.chart1, dataSet);
        }

        this.frmSlideChart_onbeforeclose = function(obj,e) {
        	this.rMateChartClear(this.chart1);
        }

        
        // 배열 데이터로 정의
        var chartData = [{"Month":"Jan", "Profit":13000},
        	{"Month":"Feb", "Profit":12000},
        	{"Month":"Mar", "Profit":15000},
        	{"Month":"Apr", "Profit":22200},
        	{"Month":"May", "Profit":18000},
        	{"Month":"Jun", "Profit":15000},
        	{"Month":"Jul", "Profit":22000},
        	{"Month":"Aug", "Profit":14000},
        	{"Month":"Sep", "Profit":26000},
        	{"Month":"Oct", "Profit":22000},
        	{"Month":"Nov", "Profit":28000},
        	{"Month":"Dec", "Profit":34000}];

        // 배열 데이터로 정의
        var chartData2 = [{"Month":"Jan", "Profit":5000},
        	{"Month":"Feb", "Profit":8000},
        	{"Month":"Mar", "Profit":6000},
        	{"Month":"Apr", "Profit":26200},
        	{"Month":"May", "Profit":18000},
        	{"Month":"Jun", "Profit":7000},
        	{"Month":"Jul", "Profit":12000},
        	{"Month":"Aug", "Profit":7000},
        	{"Month":"Sep", "Profit":12000},
        	{"Month":"Oct", "Profit":21000},
        	{"Month":"Nov", "Profit":10500},
        	{"Month":"Dec", "Profit":18000}];

        // XML 구조의 스트링으로 정의
        var chartData3 = "<items>"
        					+"<item>"
        					+"<Month>2003</Month>"
        					+"<Profit>3200</Profit>"
        					+"<Cost>2500</Cost>"
        					+"</item>"
        					+"<item>"
        					+"<Month>2004</Month>"
        					+"<Profit>2500</Profit>"
        					+"<Cost>4500</Cost>"
        					+"</item>"
        					+"<item>"
        					+"<Month>2005</Month>"
        					+"<Profit>3500</Profit>"
        					+"<Cost>5000</Cost>"
        					+"</item>"
        					+"<item>"
        					+"<Month>2006</Month>"
        					+"<Profit>2500</Profit>"
        					+"<Cost>3000</Cost>"
        					+"</item>"
        					+"<item>"
        					+"<Month>2007</Month>"
        					+"<Profit>4000</Profit>"
        					+"<Cost>3200</Cost>"
        					+"</item>"
        					+"<item>"
        					+"<Month>2008</Month>"
        					+"<Profit>3500</Profit>"
        					+"<Cost>4200</Cost>"
        					+"</item>"
        				+"</items>";

        
        // 레이아웃을 반환하는 함수입니다.
        // 파라메터 설명
        // type : 차트 type
        // title : 차트 Caption
        // dataField : 시리즈가 표현할 실데이터의 필드명 배열
        this.getCartesianLayout = function(type,title,dataField) {
        	var layout="<rMateChart borderStyle='solid' cornerRadius='12'>"
        				+"<Options><Caption text='" + title +"'/></Options>"
        				+"<" + type + "Chart showDataTips='true'>"
        				+"<series>";

        		for(var i=0; i<dataField.length; ++i)
        		{
        			layout += "<" + type +"Series yField='" + dataField[i] + "' displayName='" + dataField[i] + "'/>";
        		}

        		layout +="</series>"
        				+"<horizontalAxis>"
        				+	"<CategoryAxis categoryField='Month'/>"
        				+"</horizontalAxis>"
        				+"</" + type + "Chart>"
        				+"</rMateChart>";
        	return layout;
        }

        // 레이더 차트 레이아웃.
        var radarLayout = "<rMateChart borderStyle='solid' cornerRadius='12'>"
        					+"<Options><Caption text='레이더 차트 표현'/></Options>"
        					+"<RadarChart type='polygon' paddingTop='20' paddingBottom='20' showDataTips='true'>"
        					+"<radialAxis><LinearAxis id='rAxis'/></radialAxis>"
        					+"<radialAxisRenderers><Axis2DRenderer axis='{rAxis}' horizontal='true'/></radialAxisRenderers>"
        					+"<angularAxis><CategoryAxis categoryField='Month' displayName='Year'/></angularAxis>"
        					+"<series>"
        						+"<RadarSeries field='Profit' displayName='Profit' fillLineArea='false'></RadarSeries>"
        						+"<RadarSeries field='Cost' displayName='Cost' fillLineArea='false'></RadarSeries>"
        					+"</series>"
        				+"</RadarChart>"
        				+"</rMateChart>";
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onbeforeclose", this.frmSlideChart_onbeforeclose, this);

        };

        this.loadIncludeScript("frmSlideChart.xfdl", true);

       
    };
}
)();
