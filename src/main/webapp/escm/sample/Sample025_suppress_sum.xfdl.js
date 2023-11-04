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
                this.set_name("Sample025_suppress_sum");
                this.set_titletext("소계+합계");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_item", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_keystring("G:+a,+c");
            obj._setContents("<ColumnInfo><Column id=\"a\" type=\"STRING\" size=\"256\"/><Column id=\"b\" type=\"STRING\" size=\"256\"/><Column id=\"c\" type=\"STRING\" size=\"256\"/><Column id=\"d\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"a\">농심</Col><Col id=\"b\">신라면</Col><Col id=\"c\">라면</Col><Col id=\"d\">200</Col></Row><Row><Col id=\"a\">농심</Col><Col id=\"b\">너구리</Col><Col id=\"c\">라면</Col><Col id=\"d\">410</Col></Row><Row><Col id=\"a\">CJ</Col><Col id=\"c\">라면</Col><Col id=\"b\">짜파로니</Col><Col id=\"d\">500</Col></Row><Row><Col id=\"a\">CJ</Col><Col id=\"c\">라면</Col><Col id=\"b\">불닭볶음면</Col><Col id=\"d\">200</Col></Row><Row><Col id=\"c\">과자</Col><Col id=\"d\">500</Col><Col id=\"a\">농심</Col><Col id=\"b\">비스켓</Col></Row><Row><Col id=\"c\">과자</Col><Col id=\"d\">700</Col><Col id=\"a\">농심</Col><Col id=\"b\">초콜릿</Col></Row><Row><Col id=\"c\">과자</Col><Col id=\"d\">800</Col><Col id=\"a\">CJ</Col><Col id=\"b\">스낵</Col></Row><Row><Col id=\"c\">과자</Col><Col id=\"d\">900</Col><Col id=\"a\">CJ</Col><Col id=\"b\">새우깡</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_subsum", this);
            obj.set_preload("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_keystring("G:col1,-col2");
            obj._setContents("<ColumnInfo><Column type=\"STRING\" size=\"255\" id=\"col1\"/><Column type=\"STRING\" size=\"256\" id=\"col2\"/><Column type=\"STRING\" size=\"255\" id=\"col3\"/><Column type=\"INT\" size=\"255\" id=\"col4\"/></ColumnInfo><Rows><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">심양</Col><Col id=\"col3\">맛있을라면</Col><Col id=\"col4\">1</Col></Row><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">심양</Col><Col id=\"col3\">심양라면</Col><Col id=\"col4\">2</Col></Row><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">농섬</Col><Col id=\"col3\">센라면</Col><Col id=\"col4\">3</Col></Row><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">농섬</Col><Col id=\"col3\">언성탕면</Col><Col id=\"col4\">4</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">방그레</Col><Col id=\"col3\">투깨더</Col><Col id=\"col4\">5</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">방그레</Col><Col id=\"col3\">바바빅</Col><Col id=\"col4\">6</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">로데</Col><Col id=\"col3\">메롱바</Col><Col id=\"col4\">7</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">로데</Col><Col id=\"col3\">스크롤바</Col><Col id=\"col4\">8</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_suppress", this);
            obj.set_preload("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column type=\"STRING\" size=\"255\" id=\"col1\"/><Column type=\"STRING\" size=\"256\" id=\"col2\"/><Column type=\"STRING\" size=\"255\" id=\"col3\"/><Column type=\"INT\" size=\"255\" id=\"col4\"/></ColumnInfo><Rows><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">심양</Col><Col id=\"col3\">맛있을라면</Col><Col id=\"col4\">1</Col></Row><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">심양</Col><Col id=\"col3\">심양라면</Col><Col id=\"col4\">2</Col></Row><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">농섬</Col><Col id=\"col3\">센라면</Col><Col id=\"col4\">3</Col></Row><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">농섬</Col><Col id=\"col3\">언성탕면</Col><Col id=\"col4\">4</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">방그레</Col><Col id=\"col3\">투깨더</Col><Col id=\"col4\">5</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">방그레</Col><Col id=\"col3\">바바빅</Col><Col id=\"col4\">6</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">로데</Col><Col id=\"col3\">메롱바</Col><Col id=\"col4\">7</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">로데</Col><Col id=\"col3\">스크롤바</Col><Col id=\"col4\">8</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_subsum00", this);
            obj.set_preload("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_keystring("G:col1,-col2");
            obj._setContents("<ColumnInfo><Column type=\"STRING\" size=\"255\" id=\"col1\"/><Column type=\"STRING\" size=\"256\" id=\"col2\"/><Column type=\"STRING\" size=\"255\" id=\"col3\"/><Column type=\"INT\" size=\"255\" id=\"col4\"/></ColumnInfo><Rows><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">심양</Col><Col id=\"col3\">맛있을라면</Col><Col id=\"col4\">1</Col></Row><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">심양</Col><Col id=\"col3\">심양라면</Col><Col id=\"col4\">2</Col></Row><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">농섬</Col><Col id=\"col3\">센라면</Col><Col id=\"col4\">3</Col></Row><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">농섬</Col><Col id=\"col3\">언성탕면</Col><Col id=\"col4\">4</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">방그레</Col><Col id=\"col3\">투깨더</Col><Col id=\"col4\">5</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">방그레</Col><Col id=\"col3\">바바빅</Col><Col id=\"col4\">6</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">로데</Col><Col id=\"col3\">메롱바</Col><Col id=\"col4\">7</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">로데</Col><Col id=\"col3\">스크롤바</Col><Col id=\"col4\">8</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_suppress00", this);
            obj.set_preload("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column type=\"STRING\" size=\"255\" id=\"col1\"/><Column type=\"STRING\" size=\"256\" id=\"col2\"/><Column type=\"STRING\" size=\"255\" id=\"col3\"/><Column type=\"INT\" size=\"255\" id=\"col4\"/></ColumnInfo><Rows><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">심양</Col><Col id=\"col3\">맛있을라면</Col><Col id=\"col4\">1</Col></Row><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">심양</Col><Col id=\"col3\">심양라면</Col><Col id=\"col4\">2</Col></Row><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">농섬</Col><Col id=\"col3\">센라면</Col><Col id=\"col4\">3</Col></Row><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">농섬</Col><Col id=\"col3\">언성탕면</Col><Col id=\"col4\">4</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">방그레</Col><Col id=\"col3\">투깨더</Col><Col id=\"col4\">5</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">방그레</Col><Col id=\"col3\">바바빅</Col><Col id=\"col4\">6</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">로데</Col><Col id=\"col3\">메롱바</Col><Col id=\"col4\">7</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">로데</Col><Col id=\"col3\">스크롤바</Col><Col id=\"col4\">8</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid01", "absolute", "21", "325", "358", "391", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_subsum");
            obj.set_autofittype("col");
            obj.set_suppresslevel("allcompare");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"rowlevel\"/><Cell col=\"1\" text=\"col1\"/><Cell col=\"2\" text=\"col2\"/><Cell col=\"3\" text=\"col3\"/><Cell col=\"4\" text=\"col4\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.getRowLevel(currow)\"/><Cell col=\"1\" style=\"background:lightgreen;background2:lightgreen;\" text=\"expr:dataset.getRowLevel(currow) == 0 ? col1 : dataset.getColumn(currow-dataset.getRowLevel(currow), &quot;col1&quot;)\" suppress=\"1\"/><Cell col=\"2\" style=\"background:EXPR(dataset.getRowLevel(currow) == 0 ? 'lightblue' : ( dataset.getRowLevel(currow) == 1 ? 'lightblue' : 'lightgreen' ));background2:EXPR(dataset.getRowLevel(currow) == 0 ? 'lightblue' : ( dataset.getRowLevel(currow) == 1 ? 'lightblue' : 'lightgreen' ));\" text=\"expr:dataset.getRowLevel(currow) &lt; 2 ? dataset.getColumn(currow-dataset.getRowLevel(currow), &quot;col2&quot;) : getColumn(currow-dataset.getRowLevel(currow), &quot;col1&quot;)\" suppress=\"2\"/><Cell col=\"3\" style=\"background:EXPR(dataset.getRowLevel(currow) == 1 ? 'lightblue' : ( dataset.getRowLevel(currow) == 2 ? 'lightgreen' : '' ));background2:EXPR(dataset.getRowLevel(currow) == 1 ? 'lightblue' : ( dataset.getRowLevel(currow) == 2 ? 'lightgreen' : '' ));\" text=\"bind:col3\" subsumtext=\"소계\"/><Cell col=\"4\" style=\"background:EXPR(dataset.getRowLevel(currow) == 1 ? 'lightblue' : ( dataset.getRowLevel(currow) == 2 ? 'lightgreen' : '' ));background2:EXPR(dataset.getRowLevel(currow) == 1 ? 'lightblue' : ( dataset.getRowLevel(currow) == 2 ? 'lightgreen' : '' ));\" text=\"bind:col4\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"총계\"/><Cell col=\"4\" text=\"expr:getSum(&quot;col4&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "5", "5", "717", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("1) Suppress");
            obj.set_usedecorate("true");
            obj.style.set_border("0px solid #808080ff");
            obj.getSetter("class").set("_SS_Title3");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "25", "29", "270", "238", null, null, this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_suppress");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\" fix=\"fixed\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"col1\"/><Cell col=\"1\" text=\"col2\"/><Cell col=\"2\" text=\"col3\"/><Cell col=\"3\" text=\"col4\"/></Band><Band id=\"body\"><Cell text=\"bind:col1\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:col2\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:col3\"/><Cell col=\"3\" text=\"bind:col4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox03", "absolute", "308", "19", "414", "81", null, null, this);
            obj.set_text(" 설명 ");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "375", "40", "217", "17", null, null, this);
            obj.set_taborder("5");
            obj.set_text("Property");
            obj.set_usedecorate("true");
            obj.getSetter("class").set("_SS_Table_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "375", "56", "217", "17", null, null, this);
            obj.set_taborder("6");
            obj.set_text("contents editor <fs v='11'>⇒</fs> cell <fs v='11'>⇒</fs> suppress");
            obj.set_usedecorate("true");
            obj.getSetter("class").set("_SS_Table_Text");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "591", "40", "65", "17", null, null, this);
            obj.set_taborder("7");
            obj.set_text("Value");
            obj.set_usedecorate("true");
            obj.getSetter("class").set("_SS_Table_Title");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02", "absolute", "591", "56", "65", "17", null, null, this);
            obj.set_taborder("8");
            obj.set_value("1");
            obj.set_scrollbars("none");
            obj.set_readonly("true");
            obj.set_enableevent("false");
            obj.getSetter("class").set("_SS_Table_Text");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "319", "56", "57", "17", null, null, this);
            obj.set_taborder("9");
            obj.set_text("col1");
            obj.set_usedecorate("true");
            obj.getSetter("class").set("_SS_Table_Text");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "319", "40", "57", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Column");
            obj.set_usedecorate("true");
            obj.getSetter("class").set("_SS_Table_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "375", "72", "217", "17", null, null, this);
            obj.set_taborder("11");
            obj.set_text("contents editor <fs v='11'>⇒</fs> cell <fs v='11'>⇒</fs> suppress");
            obj.set_usedecorate("true");
            obj.getSetter("class").set("_SS_Table_Text");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "591", "72", "65", "17", null, null, this);
            obj.set_taborder("12");
            obj.set_value("2");
            obj.set_scrollbars("none");
            obj.set_readonly("true");
            obj.set_enableevent("false");
            obj.getSetter("class").set("_SS_Table_Text");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "319", "72", "57", "17", null, null, this);
            obj.set_taborder("13");
            obj.set_text("col2");
            obj.set_usedecorate("true");
            obj.getSetter("class").set("_SS_Table_Text");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "655", "56", "57", "17", null, null, this);
            obj.set_taborder("14");
            obj.set_usedecorate("true");
            obj.getSetter("class").set("_SS_Table_Text");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "655", "40", "57", "17", null, null, this);
            obj.set_taborder("15");
            obj.set_text("설명");
            obj.set_usedecorate("true");
            obj.getSetter("class").set("_SS_Table_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "655", "72", "57", "17", null, null, this);
            obj.set_taborder("16");
            obj.set_usedecorate("true");
            obj.getSetter("class").set("_SS_Table_Text");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "5", "285", "717", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("2) TotalSum + Subsum");
            obj.set_usedecorate("true");
            obj.style.set_border("0px solid #808080ff");
            obj.getSetter("class").set("_SS_Title3");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample0024_txbilTest");
            		p.set_titletext("소계+합계");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data", "", "ds_subsum");
            this._addPreloadList("data", "", "ds_suppress");
            this._addPreloadList("data", "", "ds_subsum00");
            this._addPreloadList("data", "", "ds_suppress00");
        };
        
        // User Script
        this.addIncludeScript("Sample025_suppress_sum.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("Sample025_suppress_sum.xfdl", "lib::comTSToolKit.xjs");
        this.registerScript("Sample025_suppress_sum.xfdl", function() {
        //include "lib::comLib.xjs";
        //include "lib::comTSToolKit.xjs";
        this.Button00_onclick = function(obj,e)
        {
        	var rtnvalue = this.gfn_eTaxSign(this.TSXMLToolkit, this.ds_taxCopy, this.dsTaxForSvc, this.ds_item);
        			
        	if(rtnvalue)
        	{
        		//this.fn_insertTxbilElsg(this.ds_taxCopy);
        		//trace(this.ds_taxCopy.getColumn(0, "ELSG_CNTN"));
        		this.TextArea00.set_value(this.ds_taxCopy.getColumn(0, "ELSG_CNTN"));
        		
        	}
        	else
        	{
        		alert("인증실패");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_subsum.addEventHandler("onrowsetchanged", this.ds_subsum_onrowsetchanged, this);
            this.ds_subsum00.addEventHandler("onrowsetchanged", this.ds_subsum_onrowsetchanged, this);
            this.Static04.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static19.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static21.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static20.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static03.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static05.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static13.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static14.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static15.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static00_onclick, this);

        };

        this.loadIncludeScript("Sample025_suppress_sum.xfdl");
        this.loadPreloadList();
       
    };
}
)();
