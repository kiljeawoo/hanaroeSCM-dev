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
                this.set_name("frmLabelFunction");
                this.set_titletext("Label Function");
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
            		p.set_classname("frmLabelFunction");
            		p.set_titletext("Label Function");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("frmLabelFunction.xfdl", "lib::comChart.xjs");
        this.registerScript("frmLabelFunction.xfdl", function() {
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
         * 차트에서 레이아웃에 labelJsFunction 기능에 의거하여 함수에서 차트에 표시할 라벨을 지정하는 예제입니다.
         * 레이아웃에서 labelJsFunction에 불려질 함수명을 넣어주고
         * 해당 함수에서 표시할 라벨을 만들어 반환하게 됩니다.
         */

        this.form_onload = function(obj,e)
        {	
        	// <필수> Chart 기본설정함수(obj,후처리함수명)
        	this.gfn_setRMateChart(this.chart1,"rMateChartOnLoad");
        }

        // chartVars에 rMateOnLoadCallFunction 으로 아래 함수를 설정하여 rMateChartH5가 로딩된후 불려지게 할 수 있습니다.
        this.rMateChartOnLoad = function(id) {
        	this.rMateChartSetLayout(this.chart1, layoutStr);
        	this.rMateChartSetData(this.chart1, chartData);
        }

        this.frmLabelFunction_onbeforeclose = function(obj,e) {
        	this.rMateChartClear(this.chart1);
        }

        // 스트링 형식으로 레이아웃 정의.
        var layoutStr = '\
        <rMateChart backgroundColor="0xFFFFFF" cornerRadius="12" borderStyle="solid">\
        	<Options>\
        		<Caption text="Annual Report"/>\
        	</Options>\
        	<NumberFormatter id="numFmt"/>\
        	<Column2DChart showDataTips="true">\
        		<horizontalAxis>\
        			<CategoryAxis categoryField="Month"/>\
        		</horizontalAxis>\
        		<verticalAxis>\
        			<LinearAxis formatter="{numFmt}"/>\
        		</verticalAxis>\
        		<series>\
        			/* \
        				totalLabelFunc는 스택시리즈로 묶인 컬럼들의 총 합을 구하여 \
        				사용자 정의로 표현 할 수 있게 해주는 function입니다. \
        				html파일과 Form안에 totalLabelFunc로 된 함수를 정의하십시오. \
        				** HTML5모드만을 사용할 경우 totalLabelFunc를 window.TOBEWEBBROWSER.parent.totalLabelFunc 로 주시면 이 Form의 totalLabelFunc가 실행됩니다. \
        			*/ \
        			<Column2DSet type="stacked" showTotalLabel="true" totalLabelJsFunction="totalLabelFunc">\
        				<series>\
        					/* \
        						seriesLabelFunc 는 자바스크립트 함수명 입니다. \
        						labelPosition의 값에 따라 (inside, outside) \
        						insideLabelJsFunction 또는 outsideLabelJsFunction 을 사용하십시오. \
        					*/ \
        					<Column2DSeries id="s1" yField="Profit" displayName="Profit" labelPosition="inside" styleName="seriesStyle" insideLabelJsFunction="seriesLabelFunc">\
        						<showDataEffect>\
        							<SeriesInterpolate/>\
        						</showDataEffect>\
        					</Column2DSeries>\
        					<Column2DSeries id="s2" yField="Cost" displayName="Cost" labelPosition="inside" styleName="seriesStyle" insideLabelJsFunction="seriesLabelFunc">\
        						<showDataEffect>\
        							<SeriesInterpolate/>\
        						</showDataEffect>\
        					</Column2DSeries>\
        					<Column2DSeries id="s3" yField="Revenue" displayName="Revenue" labelPosition="inside" styleName="seriesStyle" insideLabelJsFunction="seriesLabelFunc">\
        						<showDataEffect>\
        							<SeriesInterpolate/>\
        						</showDataEffect>\
        					</Column2DSeries>\
        				</series>\
        			</Column2DSet>\
        		</series>\
        	</Column2DChart>\
        	<Style>\
        		.seriesStyle{fontFamily:Arial;fontSize:10;color:0x0000FF;}\
        	</Style>\
        </rMateChart>\
        ';

        // 차트 데이터
        var chartData = [{"Month":"Jan","Profit":1000,"Cost":1500,"Revenue":2300},
        				{"Month":"Feb","Profit":1400,"Cost":1400,"Revenue":1200},
        				{"Month":"Mar","Profit":1500,"Cost":1200,"Revenue":1600},
        				{"Month":"Apr","Profit":1900,"Cost":1300,"Revenue":1300},
        				{"Month":"May","Profit":1400,"Cost":900,"Revenue":1000},
        				{"Month":"Jun","Profit":2000,"Cost":500,"Revenue":1200},
        				{"Month":"Jul","Profit":1800,"Cost":1400,"Revenue":1000},
        				{"Month":"Aug","Profit":2500,"Cost":800,"Revenue":1600},
        				{"Month":"Sep","Profit":3000,"Cost":1900,"Revenue":1200},
        				{"Month":"Oct","Profit":2000,"Cost":2300,"Revenue":1000},
        				{"Month":"Nov","Profit":2100,"Cost":2400,"Revenue":1700},
        				{"Month":"Dec","Profit":1700,"Cost":1900,"Revenue":2300}];

        
        ///////////////// 아래의 예제 함수들은 rMateChartH5와 연동하여 불려지는 함수들이며 위에 정의한 htmlUrl 의 html 내에도 정의되어야 합니다. - 함수의 사용에 관련된 자세한 내용은 rMateChart for HTML5를 참조하시기 바랍니다.  //////////////////////

        
        /*
        // ------------------------- 수치 필드 사용자 정의 함수 -----------------------------------------------------
        // 챠트의 시리즈에서 labelPosition 속성을 설정한 경우 수치 필드를 사용자 정의하는 함수입니다.
        // layout XML 에서 Series 속성을 넣을때 라벨펑션을 설정하고 속성 값으로 javascript 함수명을 넣어줍니다
        //
        // 예) <Column2DSeries yField="Profit" labelPosition="outside" outsideLabelJsFunction="seriesLabelFunc">
        //
        // 파라메터 설명
        // seriesID : 해당 시리즈의 ID.
        // index : 해당 시리즈 아이템의 인덱스.
        // data : 해당 item의 값을 표현하기 위해 입력된 data(row값에 해당 - data로 입력된 종류에 따라 XML문자열 또는 배열의 Object가 됩니다)
        // values : 해당 item의 값 (배열로 전달되며, 챠트 종류에 따라 아래와 같이 들어옵니다.)

        			Pie2DSeries,Pie3DSeries			0:값 1:퍼센트값
        			Bubble3DSeries,Matrix2DSeries   0:x축값 1:y축값 2:z값

        			Pie,Bubble시리즈를 제외한 모든 시리즈   0:x축값 1:y축값 2:min값
        			* min값은 type을 '100%' 또는 'stacked' 인 경우만 유효합니다. 쌓아올릴 경우 해당 데이터의 시작값을 의미합니다.
        //
        */
        this.seriesLabelFunc = function(seriesID,index,data,values) {
        	//trace(values);
        	return "$" + values[1];
        }

        /*
        // ------------------------- 스택 타입의 토탈 필드 사용자 정의 함수 -----------------------------------------------------
        // 챠트의 SeriesSet 에서 showTotalLabel 속성을 설정한 경우 토탈 필드를 사용자 정의하는 함수입니다.
        // layout XML 에서 Series 속성을 넣을때 labelJsFunction 주고, 만든 javascript 함수명을 넣어줍니다
        //
        // 예) <Column2DSet showTotalLabel="true" totalLabelJsFunction="totalLabelFunc">
        //
        // 파라메터 설명
        // index : 해당 시리즈 아이템의 인덱스.
        // data : 해당 item의 값을 표현하기 위해 입력된 data(row값에 해당 - data로 입력된 종류에 따라 XML문자열 또는 배열의 Object가 됩니다)
        // total : 총 합계 값.
        */
        this.totalLabelFunc = function(index,data,total) {
        	//trace(data);
        	return "$" + total;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.frmLabelFunction_onload, this);
            this.addEventHandler("onbeforeclose", this.frmLabelFunction_onbeforeclose, this);

        };

        this.loadIncludeScript("frmLabelFunction.xfdl");

       
    };
}
)();
