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
                this.set_name("frmItemClick");
                this.set_titletext("Chart item click");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("chart1", "absolute", "1.46%", "2.47%", "96.97%", "91.28%", null, null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "83.79%", "94.79%", "14.65%", "3.39%", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Get chart snapshot");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmItemClick");
            		p.set_titletext("Chart item click");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("frmItemClick.xfdl", "lib::comChart.xjs");
        this.registerScript("frmItemClick.xfdl", function() {
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
         * 차트에서 개별 item을 클릭시 선언된 함수가 호출되는 예제입니다.
         * 레이아웃에서 itemClickJsFunction에 불려질 함수명을 넣어주고
         * 해당 함수에서 필요한 작업을 하게 됩니다.
         */

        this.form_onload = function(obj,e)
        {	
        	// <필수> Chart 기본설정함수(obj,후처리함수명)
        	this.gfn_setRMateChart(this.chart1,"rMateChartOnLoad");
        }

        // chartVars에 rMateOnLoadCallFunction 으로 아래 함수를 설정하여 rMateChartH5가 로딩된후 불려지게 할 수 있습니다.
        this.rMateChartOnLoad = function(id) {
        	this.rMateChartSetLayout(this.chart1, layoutStr);
        	this.rMateChartSetData(this.chart1, dataStr);
        }

        this.frmItemClick_onbeforeclose = function(obj,e) {
        	this.rMateChartClear(this.chart1);
        }

        this.Button00_onclick = function(obj,e) {
        	// 현재 차트의 이미지가 base64로 인코딩된 문자열이 반환됩니다. - HTML5모드에서만 동작, Runtime일 경우 sateToImageObject기능 사용
        	var base64src = this.rMateChartGetSnapshot(this.chart1);

        	if (base64src && base64src != "")
        		alert("차트의 이미지가 base64로 인코딩된 문자열로 반환되었습니다.");
        }

        // 레이아웃의 itemClickJsFunction에 클릭시 불려질 함수명을 넣어줍니다.
        // ** HTML5모드만을 사용할 경우 chartClick를 window.NEXACROWEBBROWSER.parent.chartClick 로 주시면 이 Form의 chartClick가 실행됩니다.
        var layoutStr = '\
        <rMateChart cornerRadius="12" borderStyle="solid">\
        	<Options><Caption text="Annual Report"/></Options>\
        	<Line2DChart showDataTips="true" itemClickJsFunction="chartClick">\
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

        var dataStr = "<items>\
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
        </items>";

        
        ///////////////// 아래의 예제 함수들은 rMateChartH5와 연동하여 불려지는 함수들이며 위에 정의한 htmlUrl 의 html 내에도 정의되어야 합니다. - 함수의 사용에 관련된 자세한 내용은 rMateChart for HTML5를 참조하시기 바랍니다.  //////////////////////

        
        /*
        // 챠트에서 item클릭시 불려지는 함수 설정
        // layout XML 에서 Chart 속성을 넣을때 itemClickJsFunction를 주고,만든 javascript 함수명을 넣어줍니다
        // 예) <Column3DChart showDataTips="true" itemClickJsFunction="chartClick">
        //
        // 파라메터 설명
        // seriesId : layout XML에서 부여한 series의 id가 있을 경우, 해당 id를 보내줍니다.
        // displayText : 화면상에 보여주는 dataTip(마우스 올라갔을때 보여주는 박스-tooltip)의 내용
        // index : 클릭된 item(막대나 파이조각등)의 index 번호 - 맨 왼쪽 또는 맨 위 것이 0번입니다
        // data : 해당 item의 값을 표현하기 위해 입력된 data(row값에 해당 - data로 입력된 종류에 따라 XML문자열 또는 배열의 Object가 됩니다)
        // values : 해당 item의 값 (배열로 전달되며, 챠트 종류에 따라 아래와 같이 들어옵니다.)
                    BarSeries     0:x축값 1:y축값
                    ColumnSeries  0:x축값 1:y축값
                    AreaSeries    0:x축값 1:y축값
                    BubbleSeries  0:x축값 1:y축값 2:radius값
                    LineSeries    0:x축값 1:y축값
                    HLOCSeries    0:x축값 1:open값 2:low값 3:high값 4:close값
                    PieSeries     0:값
        */
        this.chartClick = function(seriesId,displayText,index,data,values) {
        	alert("chartClick called seriesId:"+seriesId+"\n displayText:"+displayText+"\n index:"+index+"\n data:"+data+"\n values:"+values);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onbeforeclose", this.frmItemClick_onbeforeclose, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("frmItemClick.xfdl");

       
    };
}
)();
