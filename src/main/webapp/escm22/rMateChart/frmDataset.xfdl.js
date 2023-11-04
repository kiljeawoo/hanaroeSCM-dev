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
                this.set_name("frmDataset");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Month\" type=\"STRING\" size=\"20\"/><Column id=\"Profit\" type=\"INT\" size=\"0\"/></ColumnInfo><Rows><Row><Col id=\"Month\">Jan</Col><Col id=\"Profit\">900</Col></Row><Row><Col id=\"Month\">Feb</Col><Col id=\"Profit\">1400</Col></Row><Row><Col id=\"Month\">Mar</Col><Col id=\"Profit\">1500</Col></Row><Row><Col id=\"Month\">Apr</Col><Col id=\"Profit\">1900</Col></Row><Row><Col id=\"Month\">May</Col><Col id=\"Profit\">1400</Col></Row><Row><Col id=\"Month\">Jun</Col><Col id=\"Profit\">2000</Col></Row><Row><Col id=\"Month\">Jul</Col><Col id=\"Profit\">1800</Col></Row><Row><Col id=\"Month\">Aug</Col><Col id=\"Profit\">2500</Col></Row><Row><Col id=\"Month\">Sep</Col><Col id=\"Profit\">3000</Col></Row><Row><Col id=\"Month\">Oct</Col><Col id=\"Profit\">2000</Col></Row><Row><Col id=\"Month\">Nov</Col><Col id=\"Profit\">2100</Col></Row><Row><Col id=\"Month\">Dec</Col><Col id=\"Profit\">1700</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Month\" type=\"STRING\" size=\"20\"/><Column id=\"Revenue\" type=\"INT\" size=\"0\"/><Column id=\"Cost\" type=\"INT\" size=\"0\"/><Column id=\"Profit\" type=\"INT\" size=\"0\"/></ColumnInfo><Rows><Row><Col id=\"Month\">Jan</Col><Col id=\"Profit\">10000</Col><Col id=\"Revenue\">15000</Col><Col id=\"Cost\">5000</Col></Row><Row><Col id=\"Month\">Feb</Col><Col id=\"Profit\">5000</Col><Col id=\"Revenue\">15000</Col><Col id=\"Cost\">10000</Col></Row><Row><Col id=\"Month\">Mar</Col><Col id=\"Profit\">5000</Col><Col id=\"Revenue\">12000</Col><Col id=\"Cost\">7000</Col></Row><Row><Col id=\"Month\">Apr</Col><Col id=\"Profit\">10200</Col><Col id=\"Revenue\">30200</Col><Col id=\"Cost\">20000</Col></Row><Row><Col id=\"Month\">May</Col><Col id=\"Profit\">10000</Col><Col id=\"Revenue\">28000</Col><Col id=\"Cost\">18000</Col></Row><Row><Col id=\"Month\">Jun</Col><Col id=\"Profit\">9000</Col><Col id=\"Revenue\">12000</Col><Col id=\"Cost\">3000</Col></Row><Row><Col id=\"Month\">Jul</Col><Col id=\"Profit\">10000</Col><Col id=\"Revenue\">22000</Col><Col id=\"Cost\">12000</Col></Row><Row><Col id=\"Month\">Aug</Col><Col id=\"Profit\">8000</Col><Col id=\"Revenue\">13000</Col><Col id=\"Cost\">5000</Col></Row><Row><Col id=\"Month\">Sep</Col><Col id=\"Profit\">10000</Col><Col id=\"Revenue\">22000</Col><Col id=\"Cost\">12000</Col></Row><Row><Col id=\"Month\">Oct</Col><Col id=\"Profit\">11000</Col><Col id=\"Revenue\">29000</Col><Col id=\"Cost\">18000</Col></Row><Row><Col id=\"Month\">Nov</Col><Col id=\"Profit\">9000</Col><Col id=\"Revenue\">18000</Col><Col id=\"Cost\">9000</Col></Row><Row><Col id=\"Month\">Dec</Col><Col id=\"Profit\">15000</Col><Col id=\"Revenue\">30000</Col><Col id=\"Cost\">15000</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Month\" type=\"STRING\" size=\"20\"/><Column id=\"Revenue\" type=\"INT\" size=\"0\"/><Column id=\"Cost\" type=\"INT\" size=\"0\"/><Column id=\"Profit\" type=\"INT\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new WebBrowser("chart1", "absolute", "19", "21", "96.58%", "91.02%", null, null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "86.72%", "94.79%", "11.72%", "3.39%", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Add Dataset");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "71.19%", "94.79%", "14.75%", "3.39%", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Change Dataset");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmDataset");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("frmDataset.xfdl", "lib::comChart.xjs");
        this.registerScript("frmDataset.xfdl", function(exports) {
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
         * rMateChartH5.xjs의 rMateChartDataSetToXml 와 rMateChartDataSetToXmlWithColumn 함수를 이용하여
         * Dataset의 자료를 xml로 변환하여 차트에 설정하는 예제입니다.
         */
        this.form_onload = function(obj,e)
        {	
        	// <필수> Chart 기본설정함수(obj,후처리함수명)
        	this.gfn_setRMateChart(this.chart1,"rMateChartOnLoad");
        }

        // flashVars에 rMateOnLoadCallFunction 으로 아래 함수를 설정하여 rMateChart가 로딩된후 불려지게 할 수 있습니다.
        this.rMateChartOnLoad = function() {
        //trace("rMateChartOnLoad");
        //아래에서 필요에 따라 4종류의 함수중 원하는 작업을 하시면 됩니다.
        //	this.rMateChartSetLayoutURL(this.chart1, "http://demo.riamore.net/flashdemo/chart/Samples/LayoutXml/LabelField_Column_Func_Layout.xml");
        	this.rMateChartSetLayout(this.chart1, layoutStr);
        //	rMateChartSetLayout(this.chart1, pieLayoutStr);

        //	this.rMateChartSetDataURL(this.chart1, "http://demo.riamore.net/flashdemo/chart/Samples/DataXml/multiData2.xml");
        	this.rMateChartSetData(this.chart1, this.rMateChartDataSetToXml(this.Dataset00));
        //	this.rMateChartSetData(this.chart1, chartData);	// 배열
        }

        

        this.frmDataset_onbeforeclose = function(obj,e) {
        	this.rMateChartClear(this.chart1);
        }

        this.Dataset01_onrowsetchanged = function(obj,e)
        {
        //trace("Dataset01_onrowsetchanged");
        	this.rMateChartSetData(this.chart1, this.rMateChartDataSetToXmlWithColumn(this.Dataset01, "Month,Profit"));
        }

        
        this.Button00_onclick = function(obj,e) {
        	this.Dataset02.clearData();
        	this.Dataset02.addRow();
        	var i = this.Dataset02.rowcount - 1;
        	this.Dataset02.setColumn(i, "Month", "Jan");
        	this.Dataset02.setColumn(i, "Profit", 15000);
        	this.Dataset02.setColumn(i, "Revenue", 14000);
        	this.Dataset02.setColumn(i, "Cost", 13000);
        	this.Dataset01.appendData(this.Dataset02);
        }

        this.Button01_onclick = function(obj,e) {
        	this.rMateChartSetData(this.chart1, this.rMateChartDataSetToXmlWithColumn(this.Dataset01, "Month,Profit"));
        }

        
        var layoutStr = "\
        <rMateChart cornerRadius='12' borderStyle='solid'>\
        	<Options><Caption text='Annual Report'/></Options>\
        	<Line2DChart showDataTips='true'>\
        		<horizontalAxis><CategoryAxis categoryField='Month'/></horizontalAxis>\
        		<series>\
        			<Line2DSeries yField='Profit' displayName='Profit' itemRenderer='CircleItemRenderer' radius='5'>\
        				<showDataEffect><SeriesInterpolate/></showDataEffect>\
        				<lineStroke><Stroke color='0x339966' weight='2'/></lineStroke>\
        				<stroke><Stroke color='0x339966' weight='2'/></stroke>\
        			</Line2DSeries>\
        		</series>\
        	</Line2DChart>\
        </rMateChart>\
        ";

        var pieLayoutStr = "\
        <rMateChart backgroundColor='0xFFFFFF' cornerRadius='12' borderStyle='solid'>\
        	<Options>\
        		<Caption text='Anual Report'/> \
        	</Options>\
        	<Pie3DChart showDataTips='true'>\
        		<series>\
        			<Pie3DSeries field='Profit' nameField='Month' displayName='Profit' labelPosition='inside'>\
        				<showDataEffect>\
        					<SeriesInterpolate/>\
        				</showDataEffect>\
        			</Pie3DSeries>\
        		</series>\
        	</Pie3DChart>\
        </rMateChart>";

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Dataset01.addEventHandler("onrowsetchanged", this.Dataset01_onrowsetchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onbeforeclose", this.frmDataset_onbeforeclose, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("frmDataset.xfdl", true);

       
    };
}
)();
