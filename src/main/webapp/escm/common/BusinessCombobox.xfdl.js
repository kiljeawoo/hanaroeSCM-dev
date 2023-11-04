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
                this.set_name("BusinessCombobox");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,275,21);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_BusinessCombobox_hC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NA_TRPL_C\">0</Col><Col id=\"CLNTNM\">[8801099000016] 대상에프앤에프(주)</Col></Row><Row><Col id=\"NA_TRPL_C\">1</Col><Col id=\"CLNTNM\">[8801099000023] 대상에프앤에프(주)동부지점</Col></Row><Row><Col id=\"NA_TRPL_C\">2</Col><Col id=\"CLNTNM\">[8801099000030] 대상에프앤에프(주)서부지점</Col></Row><Row><Col id=\"NA_TRPL_C\">3</Col><Col id=\"CLNTNM\">[8801099000047] 대상에프앤에프(주)남부지점(안양)</Col></Row><Row><Col id=\"NA_TRPL_C\">4</Col><Col id=\"CLNTNM\">[8801099000054] 대상에프앤에프(주)남부지점(강원)</Col></Row><Row><Col id=\"NA_TRPL_C\">5</Col><Col id=\"CLNTNM\">[8801099000061] 대상에프앤에프(주)대전지점</Col></Row><Row><Col id=\"NA_TRPL_C\">6</Col><Col id=\"CLNTNM\">[8801099000078] 대상에프앤에프(주)광주지점</Col></Row><Row><Col id=\"NA_TRPL_C\">7</Col><Col id=\"CLNTNM\">[8801099000085] 대상에프앤에프(주)대구지점</Col></Row><Row><Col id=\"NA_TRPL_C\">8</Col><Col id=\"CLNTNM\">[8801099000092] 대상에프앤에프(주)부산지점</Col></Row><Row><Col id=\"NA_TRPL_C\">9</Col><Col id=\"CLNTNM\">[8801099000108] 대상에프앤에프(주)신선지점</Col></Row><Row><Col id=\"NA_TRPL_C\">10</Col><Col id=\"CLNTNM\">[8801099000115] 대상에프앤에프(주)지호상사</Col></Row><Row><Col id=\"NA_TRPL_C\">11</Col><Col id=\"CLNTNM\">[8801099000122] 대상에프앤에프(주)청원유통</Col></Row><Row><Col id=\"NA_TRPL_C\">12</Col><Col id=\"CLNTNM\">[8801099000139] 대상에프앤에프(주)승진상사</Col></Row><Row><Col id=\"NA_TRPL_C\">13</Col><Col id=\"CLNTNM\">[8801099000146] 대상에프앤에프(주)여주대상</Col></Row><Row><Col id=\"NA_TRPL_C\">14</Col><Col id=\"CLNTNM\">[8801099000153] 대상에프앤에프(주)청정원상사(위탁)</Col></Row><Row><Col id=\"NA_TRPL_C\">15</Col><Col id=\"CLNTNM\">[8801099000160] 대상에프앤에프(주)대성상사</Col></Row><Row><Col id=\"NA_TRPL_C\">16</Col><Col id=\"CLNTNM\">[8801099000177] 대상에프앤에프(주)대상위탁상사</Col></Row><Row><Col id=\"NA_TRPL_C\">17</Col><Col id=\"CLNTNM\">[8801099000184] 대상에프앤에프(주)청정원상사(홍성)</Col></Row><Row><Col id=\"NA_TRPL_C\">18</Col><Col id=\"CLNTNM\">[8801099000191] 대상에프앤에프(주)홍성위탁</Col></Row><Row><Col id=\"NA_TRPL_C\">19</Col><Col id=\"CLNTNM\">[8801099000207] 대상에프앤에프(주)해송유통</Col></Row><Row><Col id=\"NA_TRPL_C\">20</Col><Col id=\"CLNTNM\">[8801099000214] 대상에프앤에프(주)청정원태안위탁</Col></Row><Row><Col id=\"NA_TRPL_C\">21</Col><Col id=\"CLNTNM\">[8801099000221] 대상에프앤에프(주)송암상사</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_BusinessCombobox", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"NA_MBCO_DSC\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Combo("cbo_BusinessCombobox", "absolute", "0", "0", "275", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_BusinessCombobox_hC");
            obj.set_codecolumn("NA_TRPL_C");
            obj.set_datacolumn("CLNTNM");
            obj.set_displayrowcount("5");
            obj.set_cssclass("WF_Essential");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 275, 21, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("BusinessCombobox");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("BusinessCombobox.xfdl", "lib::comLib.xjs");
        this.registerScript("BusinessCombobox.xfdl", function() {
        //include "lib::comLib.xjs";

        var gFunctionName; //값이 변경될때 호출할 함수명

        this.form_onload = function(obj,e)
        {
        	if(application.gv_mbcoType != 1){
        		this.set_visible(false);
        		return;
        	}
        	
        	this.fn_search();
        }

        this.fn_search = function()
        {
        	var strParam = "na_trpl_c=8809111690016" ;
        	
        	var sSvcID        = "getAuthorityWorkplace";
        	var sURL          = "svc::rest/common/getRightsBizPlace";		// svc = http://localhost:8080/nhvan/
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_BusinessCombobox=data";
        	var sArgument     = strParam;
        	var sCallbackFunc = "gfn_callBackReturn";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.ds_BusinessCombobox_onload = function(obj,e)
        {
        	this.cbo_BusinessCombobox.set_index(0);
        }

        this.cbo_BusinessCombobox_onitemchanged = function(obj,e)
        {
        	this._callBindFunction(e.postvalue); // 함수호출
        }

        /**
         * @desc 값이 변경될때 호출될 함수명을 지정한다.
         * @param sFunctionName 함수명
         */
        this.setFunctionName = function (sFunctionName) 
        {
        	gFunctionName = sFunctionName;
        }

        /**
         * @desc 값이 변경될때 마다 함수를 호출한다.
         */
        this._callBindFunction = function (sVal)
        {
        	if (!this.gfn_isNull(gFunctionName)) 
        	{	
        		try 
        		{
        // 			var callBackFunc = "this.getOwnerFrame()."+gFunctionName+"(strDateNew)";
        // 			trace("in >> "+ callBackFunc);
        //  			eval(callBackFunc);
        			this.lookupFunc(gFunctionName).call(sVal);		
        			
        		} catch(e) 
        		{
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_BusinessCombobox_hC.addEventHandler("onload", this.ds_BusinessCombobox_onload, this);
            this.ds_BusinessCombobox.addEventHandler("onload", this.ds_BusinessCombobox_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.cbo_BusinessCombobox.addEventHandler("onitemchanged", this.cbo_BusinessCombobox_onitemchanged, this);

        };

        this.loadIncludeScript("BusinessCombobox.xfdl");

       
    };
}
)();
