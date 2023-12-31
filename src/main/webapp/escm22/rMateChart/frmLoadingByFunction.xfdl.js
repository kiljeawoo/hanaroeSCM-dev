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
                this.set_name("frmLoadingByFunction");
                this.set_titletext("Loading by Function");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("chart1", "absolute", "1.76%", "2.21%", "96.58%", "90.63%", null, null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "83.79%", "94.79%", "14.65%", "3.39%", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Save As Image");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmLoadingByFunction");
            		p.set_titletext("Loading by Function");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("frmLoadingByFunction.xfdl", "lib::comChart.xjs");
        this.registerScript("frmLoadingByFunction.xfdl", function(exports) {
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
         * 차트가 로딩된 후 rMateOnLoadCallFunction에 의해 지정된 함수가 불려져 차트의 레이아웃과 데이타를 설정하는 예제입니다.
         * 이때 rMateChartSetLayoutURL 함수는 레이아웃url을 설정하여 레이아웃을 해당 url에서 가져올 수 있고
         *      rMateChartSetLayout 함수는 직접 레이아웃 xml을 문자열로 넣어줄 수 있고
         *      rMateChartSetDataURL 함수는 데이타url을 설정하여 데이타를 해당 url에서 가져올 수 있고
         *      rMateChartSetData 함수는 직접 데이타를 xml문자열이나 배열로 넣어줄 수 있게 됩니다.
         */

        this.form_onload = function(obj,e)
        {	
        	// <필수> Chart 기본설정함수(obj,후처리함수명)
        	this.gfn_setRMateChart(this.chart1,"rMateChartOnLoad");
        }

        // chartVars에 rMateOnLoadCallFunction 으로 아래 함수를 설정하여 rMateChartH5가 로딩된후 불려지게 할 수 있습니다.
        this.rMateChartOnLoad = function(id) {
        //trace("rMateChartOnLoad");
        //아래에서 필요에 따라 6종류의 함수중 원하는 작업을 하시면 됩니다.
        //	this.rMateChartSetLayoutURL(this.chart1, "./LayoutXml/Line_2D_Segment_Layout.xml");
        	this.rMateChartSetLayout(this.chart1, layoutStr);
        //	this.rMateChartSetLayout(this.chart1, pieLayoutStr);

        //	this.rMateChartSetDataURL(this.chart1, "./DataXml/multiData2.xml");
        	this.rMateChartSetData(this.chart1, chartData);
        //	this.rMateChartSetData(this.chart1, dataStr);
        }

        this.frmLoadingByFunction_onbeforeclose = function(obj,e) {
        	this.rMateChartClear(this.chart1);
        }

        this.Button00_onclick = function(obj,e) {
        	this.rMateChartSaveAsImage(this.chart1);
        }

        
        var layoutStr = '\
        <rMateChart cornerRadius="12" borderStyle="solid">\
        	<Options><Caption text="Annual Report"/></Options>\
        	<Line2DChart showDataTips="true">\
        		<horizontalAxis><CategoryAxis categoryField="Month"/></horizontalAxis>\
        		<series>\
        			<Line2DSeries yField="Profit" displayName="Profit" itemRenderer="CircleItemRenderer" radius="5">\
        				<showDataEffect><SeriesInterpolate/></showDataEffect>\
        				<lineStroke><Stroke color="0x339966" weight="2"/></lineStroke>\
        				<stroke><Stroke color="0x339966" weight="2"/></stroke>\
        			</Line2DSeries>\
        		</series>\
        	</Line2DChart>\
        </rMateChart>\
        ';

        var pieLayoutStr = '\
        <rMateChart backgroundColor="0xFFFFFF" cornerRadius="12" borderStyle="solid">\
        	<Options>\
        		<Caption text="Anual Report"/>\
        	</Options>\
        	<Pie3DChart showDataTips="true">\
        		<series>\
        			<Pie3DSeries field="Profit" nameField="Month" displayName="Profit" labelPosition="inside">\
        				<showDataEffect>\
        					<SeriesInterpolate/>\
        				</showDataEffect>\
        			</Pie3DSeries>\
        		</series>\
        	</Pie3DChart>\
        </rMateChart>\
        ';

        var dataStr = "\
        <items>\
        	<item>\
        		<Month>Jan</Month>\
        		<Profit>900</Profit>\
        	</item>\
        	<item>\
        		<Month>Feb</Month>\
        		<Profit>1400</Profit>\
        	</item>\
        	<item>\
        		<Month>Mar</Month>\
        		<Profit>1500</Profit>\
        	</item>\
        	<item>\
        		<Month>Apr</Month>\
        		<Profit>1900</Profit>\
        	</item>\
        	<item>\
        		<Month>May</Month>\
        		<Profit>1400</Profit>\
        	</item>\
        	<item>\
        		<Month>Jun</Month>\
        		<Profit>2000</Profit>\
        	</item>\
        	<item>\
        		<Month>Jul</Month>\
        		<Profit>1800</Profit>\
        	</item>\
        	<item>\
        		<Month>Aug</Month>\
        		<Profit>2500</Profit>\
        	</item>\
        	<item>\
        		<Month>Sep</Month>\
        		<Profit>3000</Profit>\
        	</item>\
        	<item>\
        		<Month>Oct</Month>\
        		<Profit>2000</Profit>\
        	</item>\
        	<item>\
        		<Month>Nov</Month>\
        		<Profit>2100</Profit>\
        	</item>\
        	<item>\
        		<Month>Dec</Month>\
        		<Profit>1700</Profit>\
        	</item>\
        </items>\
        ";

        var chartData = [{"Month":"Jan", "Revenue":15000, "Cost":5000, "Profit":10000},
        	{"Month":"Feb", "Revenue":15000, "Cost":10000, "Profit":5000},
        	{"Month":"Mar", "Revenue":12000 , "Cost":7000, "Profit":5000},
        	{"Month":"Apr", "Revenue":30200, "Cost":20000, "Profit":10200},
        	{"Month":"May", "Revenue":28000, "Cost":18000, "Profit":10000},
        	{"Month":"Jun", "Revenue":12000, "Cost":3000, "Profit":9000},
        	{"Month":"Jul", "Revenue":22000, "Cost":12000, "Profit":10000},
        	{"Month":"Aug", "Revenue":13000, "Cost":5000, "Profit":8000},
        	{"Month":"Sep", "Revenue":22000, "Cost":12000, "Profit":10000},
        	{"Month":"Oct", "Revenue":29000, "Cost":18000, "Profit":11000},
        	{"Month":"Nov", "Revenue":18000, "Cost":9000, "Profit":9000},
        	{"Month":"Dec", "Revenue":30000, "Cost":15000, "Profit":15000} ];
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onbeforeclose", this.frmLoadingByFunction_onbeforeclose, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("frmLoadingByFunction.xfdl", true);

       
    };
}
)();
