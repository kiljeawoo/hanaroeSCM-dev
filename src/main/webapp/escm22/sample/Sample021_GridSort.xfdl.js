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
                this.set_name("Sample021_GridSort");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,817);
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"INT\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"INT\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"INT\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">100</Col><Col id=\"Column3\">가</Col><Col id=\"Column4\">1</Col><Col id=\"Column5\">a</Col><Col id=\"Column6\">100</Col><Col id=\"Column7\">가</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">101</Col><Col id=\"Column3\">나</Col><Col id=\"Column4\">2</Col><Col id=\"Column5\">b</Col><Col id=\"Column6\">101</Col><Col id=\"Column7\">나</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">c</Col><Col id=\"Column2\">102</Col><Col id=\"Column3\">다</Col><Col id=\"Column4\">3</Col><Col id=\"Column5\">c</Col><Col id=\"Column6\">102</Col><Col id=\"Column7\">다</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">d</Col><Col id=\"Column2\">103</Col><Col id=\"Column3\">라</Col><Col id=\"Column4\">4</Col><Col id=\"Column5\">d</Col><Col id=\"Column6\">103</Col><Col id=\"Column7\">라</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">e</Col><Col id=\"Column2\">104</Col><Col id=\"Column3\">마</Col><Col id=\"Column4\">5</Col><Col id=\"Column5\">e</Col><Col id=\"Column6\">104</Col><Col id=\"Column7\">마</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">f</Col><Col id=\"Column2\">105</Col><Col id=\"Column3\">바</Col><Col id=\"Column4\">6</Col><Col id=\"Column5\">f</Col><Col id=\"Column6\">105</Col><Col id=\"Column7\">바</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">g</Col><Col id=\"Column2\">106</Col><Col id=\"Column3\">사</Col><Col id=\"Column4\">7</Col><Col id=\"Column5\">g</Col><Col id=\"Column6\">106</Col><Col id=\"Column7\">사</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">h</Col><Col id=\"Column2\">107</Col><Col id=\"Column3\">아</Col><Col id=\"Column4\">8</Col><Col id=\"Column5\">h</Col><Col id=\"Column6\">107</Col><Col id=\"Column7\">아</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">i</Col><Col id=\"Column2\">108</Col><Col id=\"Column3\">자</Col><Col id=\"Column4\">9</Col><Col id=\"Column5\">i</Col><Col id=\"Column6\">108</Col><Col id=\"Column7\">자</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">j</Col><Col id=\"Column2\">109</Col><Col id=\"Column3\">차</Col><Col id=\"Column4\">10</Col><Col id=\"Column5\">j</Col><Col id=\"Column6\">109</Col><Col id=\"Column7\">차</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">k</Col><Col id=\"Column2\">110</Col><Col id=\"Column3\">카</Col><Col id=\"Column4\">11</Col><Col id=\"Column5\">k</Col><Col id=\"Column6\">110</Col><Col id=\"Column7\">카</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">l</Col><Col id=\"Column2\">111</Col><Col id=\"Column3\">타</Col><Col id=\"Column4\">12</Col><Col id=\"Column5\">l</Col><Col id=\"Column6\">111</Col><Col id=\"Column7\">타</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column1\">m</Col><Col id=\"Column2\">112</Col><Col id=\"Column3\">파</Col><Col id=\"Column4\">13</Col><Col id=\"Column5\">m</Col><Col id=\"Column6\">112</Col><Col id=\"Column7\">파</Col></Row><Row><Col id=\"Column0\">14</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">113</Col><Col id=\"Column3\">하</Col><Col id=\"Column4\">14</Col><Col id=\"Column5\">b</Col><Col id=\"Column6\">113</Col><Col id=\"Column7\">하</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"INT\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"INT\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"INT\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"INT\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">100</Col><Col id=\"Column3\">가</Col><Col id=\"Column4\">1</Col><Col id=\"Column5\">a</Col><Col id=\"Column6\">100</Col><Col id=\"Column7\">가</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">101</Col><Col id=\"Column3\">나</Col><Col id=\"Column4\">2</Col><Col id=\"Column5\">b</Col><Col id=\"Column6\">101</Col><Col id=\"Column7\">나</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">c</Col><Col id=\"Column2\">102</Col><Col id=\"Column3\">다</Col><Col id=\"Column4\">3</Col><Col id=\"Column5\">c</Col><Col id=\"Column6\">102</Col><Col id=\"Column7\">다</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">d</Col><Col id=\"Column2\">103</Col><Col id=\"Column3\">라</Col><Col id=\"Column4\">4</Col><Col id=\"Column5\">d</Col><Col id=\"Column6\">103</Col><Col id=\"Column7\">라</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">e</Col><Col id=\"Column2\">104</Col><Col id=\"Column3\">마</Col><Col id=\"Column4\">5</Col><Col id=\"Column5\">e</Col><Col id=\"Column6\">104</Col><Col id=\"Column7\">마</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">f</Col><Col id=\"Column2\">105</Col><Col id=\"Column3\">바</Col><Col id=\"Column4\">6</Col><Col id=\"Column5\">f</Col><Col id=\"Column6\">105</Col><Col id=\"Column7\">바</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">g</Col><Col id=\"Column2\">106</Col><Col id=\"Column3\">사</Col><Col id=\"Column4\">7</Col><Col id=\"Column5\">g</Col><Col id=\"Column6\">106</Col><Col id=\"Column7\">사</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">h</Col><Col id=\"Column2\">107</Col><Col id=\"Column3\">아</Col><Col id=\"Column4\">8</Col><Col id=\"Column5\">h</Col><Col id=\"Column6\">107</Col><Col id=\"Column7\">아</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">i</Col><Col id=\"Column2\">108</Col><Col id=\"Column3\">자</Col><Col id=\"Column4\">9</Col><Col id=\"Column5\">i</Col><Col id=\"Column6\">108</Col><Col id=\"Column7\">자</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">j</Col><Col id=\"Column2\">109</Col><Col id=\"Column3\">차</Col><Col id=\"Column4\">10</Col><Col id=\"Column5\">j</Col><Col id=\"Column6\">109</Col><Col id=\"Column7\">차</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">k</Col><Col id=\"Column2\">110</Col><Col id=\"Column3\">카</Col><Col id=\"Column4\">11</Col><Col id=\"Column5\">k</Col><Col id=\"Column6\">110</Col><Col id=\"Column7\">카</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">l</Col><Col id=\"Column2\">111</Col><Col id=\"Column3\">타</Col><Col id=\"Column4\">12</Col><Col id=\"Column5\">l</Col><Col id=\"Column6\">111</Col><Col id=\"Column7\">타</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column1\">m</Col><Col id=\"Column2\">112</Col><Col id=\"Column3\">파</Col><Col id=\"Column4\">13</Col><Col id=\"Column5\">m</Col><Col id=\"Column6\">112</Col><Col id=\"Column7\">파</Col></Row><Row><Col id=\"Column0\">14</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">113</Col><Col id=\"Column3\">하</Col><Col id=\"Column4\">14</Col><Col id=\"Column5\">b</Col><Col id=\"Column6\">113</Col><Col id=\"Column7\">하</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "5.27%", "31", null, "361", "7.13%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"Column4\"/><Cell col=\"5\" disptype=\"normal\" text=\"Column5\"/><Cell col=\"6\" disptype=\"normal\" text=\"Column6\"/><Cell col=\"7\" disptype=\"normal\" text=\"Column7\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:Column4\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:Column5\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:Column6\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "5.27%", "419", null, "385", "7.13%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"AAA\"/><Cell col=\"2\" rowspan=\"2\" text=\"BBB\"/><Cell col=\"3\" rowspan=\"2\" text=\"CCC\"/><Cell col=\"4\" colspan=\"3\" text=\"DDD\"/><Cell col=\"7\" rowspan=\"2\" text=\"EEE\"/><Cell row=\"1\" text=\"Column0\"/><Cell row=\"1\" col=\"1\" text=\"Column1\"/><Cell row=\"1\" col=\"4\" text=\"Column4\"/><Cell row=\"1\" col=\"5\" text=\"Column5\"/><Cell row=\"1\" col=\"6\" text=\"Column6\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 817, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample021_GridSort");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Sample021_GridSort.xfdl", "lib::comLib.xjs");
        this.registerScript("Sample021_GridSort.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        /************************************************************************
         정렬기능(sort)
         
         - Grid의 onheadclick이벤트에 gfn_gridSort함수를 선언합니다.
         - 정렬기능을 적용할 컬럼을 onheadclick이벤트 안에서 지정합니다.
           ex) if(e.cell != 4) : 다섯번째 컬럼을 제외하고 적용. 지정안하면 모든컬럼적용
         - 두줄로 된 Head인 경우 아래 cell클릭시 정렬처리됨. 샘플화면 하단Grid참조(Grid01)
         - 해당컬럼이 숫자타입인 경우, 데이터셋의 컬럼Type이 number type(int/float..)이여야 함
           
        ************************************************************************/

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        }

        this.Grid00_onheadclick = function(obj,e)
        {
        	if(e.cell != 4){ //정렬기능 적용할 컬럼 지정
        		this.gfn_gridSort(obj,e);
        	}
        }

        this.Grid01_onheadclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Grid00.addEventHandler("onheadclick", this.Grid00_onheadclick, this);
            this.Grid01.addEventHandler("onheadclick", this.Grid01_onheadclick, this);

        };

        this.loadIncludeScript("Sample021_GridSort.xfdl", true);

       
    };
}
)();
