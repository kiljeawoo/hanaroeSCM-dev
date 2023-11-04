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
                this.set_name("frmGauge");
                this.set_titletext("Gauge");
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
            		p.set_classname("frmGauge");
            		p.set_titletext("Gauge");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("frmGauge.xfdl", "lib::comChart.xjs");
        this.registerScript("frmGauge.xfdl", function(exports) {
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
         * 게이지 차트를 설정하는 예제입니다.
         * 엔터프라이즈 버젼에만 포함되는 차트(Metrix, Scroll, Image, RealTime, Slide, Gauge등)를 사용할 경우
         *      nexacroChartH5Sample.html의 rMateChartCreate 함수에서 포함할 차트js 파일을 rMateIntegrationH5.js로
         *      설정하시기 바랍니다.
         */

        this.form_onload = function(obj,e)
        {	
        	// <필수> Chart 기본설정함수(obj,후처리함수명)
        	this.gfn_setRMateChart(this.chart1,"rMateChartOnLoad");
        }

        // chartVars에 rMateOnLoadCallFunction 으로 아래 함수를 설정하여 rMateChartH5가 로딩된후 불려지게 할 수 있습니다.
        this.rMateChartOnLoad = function(id) {
        //trace("rMateChartOnLoad");
        	this.rMateChartSetLayout(this.chart1, layoutStr);
        	this.rMateChartSetData(this.chart1, dataArr);
        }

        this.frmGauge_onbeforeclose = function(obj,e) {
        	this.rMateChartClear(this.chart1);
        }

        this.Button00_onclick = function(obj,e) {
        	this.rMateChartSaveAsImage(this.chart1);
        }

        var dataArr = [50];

        var layoutStr = '\
        <rMateChart frameColor="0xEEEEEE" cornerRadius="12" borderStyle="none">\
            <Options>\
                <Caption text="게이지 - Notice" fontFamily="맑은 고딕"/>\
            </Options>\
            <NumberFormatter id="numFmt" precision="0"/>\
            <HalfCircularGauge frameType="flat" minimumAngle="180" \
            maximumAngle="360" minimum="0" maximum="100" interval="25" minorInterval="5" formatter="{numFmt}" \
            padding="-10" labelGap="-10" valueXOffset="0" valueYOffset="0" tickLabelStyleName="tickLabelStyle" \
            valueLabelStyleName="valueLabelStyle" tickGap="-40" editMode="true" \
            liveDragging="true" showDataTip="true" needleCoverRadius="25" needleThickness="16" pointThickness="0" needleLengthRatio="0.85" \
            needlePointStyle="steeple" needleBackLengthRatio="0" tickLabelPlacement="outside" showTrackColor="true" \
            trackColors="[#4bbfef,#f4ca1b,#ee7d33,#e61f18]" trackAlphas="[1,1,1,1,1]" trackValues="[0,25,50,75,100]" \
            trackLabels="[보통,주의,경고,위험]" trackLabelsXOffset="[-20,15,-15,20]" trackLabelsYOffset="[30,-20,-20,30]" \
            trackLabelStyleName="trackLabelStyle" trackOuterRadius="1.06" trackInnerRadius="0" minorTickRadius="3" \
            showValueLabel="true" isValueTop="true" tickRadius="0" enableFilter="false" bounceAnimating="true">\
                <frameStroke>\
                    <Stroke color="#555555" weight="10"/>\
                </frameStroke>\
                <frameFill>\
                    <SolidColor alpha="0"/>\
                </frameFill>\
                <needleFill>\
                    <SolidColor color="#555555"/>\
                </needleFill>\
                <needleStroke>\
                    <Stroke color="#555555"/>\
                </needleStroke>\
                <needleCoverFill>\
                    <SolidColor color="#555555"/>\
                </needleCoverFill>\
                <needleCoverStroke>\
                    <Stroke color="#555555"/>\
                </needleCoverStroke>\
                <minorTickFill>\
                    <SolidColor color="#555555"/>\
                </minorTickFill>\
                <minorTickStroke>\
                    <Stroke color="#555555"/>\
                </minorTickStroke>\
            </HalfCircularGauge>\
            <Style>\
        		.tickLabelStyle{\
        			color:#555555;\
        			fontSize:16;\
        			fontFamily:"맑은 고딕";\
        			fontWeight:bold;}\
        		.valueLabelStyle{\
        			borderStyle:none;\
        			backgroundAlpha:0;\
        			color:#ffffff;\
        			fontSize:20;\
        			textAlign:center;\
        			fontFamily:"맑은 고딕";\
        		fontWeight:bold;}\
        		.trackLabelStyle{\
        			fontSize:30;\
        			fontFamily:"맑은 고딕";\
        			fontWeight:bold;\
        			color:#ffffff;}\
            </Style>\
        </rMateChart>\
        '; 
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onbeforeclose", this.frmGauge_onbeforeclose, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("frmGauge.xfdl", true);

       
    };
}
)();
