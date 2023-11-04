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
                this.set_name("Sample004_Transaction");
                this.set_classname("Sample004_Transaction");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_LEVEL\" type=\"string\" size=\"32\"/><Column id=\"SVC_GROUP\" type=\"string\" size=\"32\"/><Column id=\"FILE_NAME\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"FILT_PATH\" type=\"string\" size=\"32\"/><Column id=\"DISPLAY_YN\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_list00", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILT_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "2.93%", "46", null, "365", "26.27%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"MENU_SEQ\"/><Cell col=\"1\" disptype=\"normal\" text=\"MENU_ID\"/><Cell col=\"2\" disptype=\"normal\" text=\"MENU_LEVEL\"/><Cell col=\"3\" disptype=\"normal\" text=\"MENU_NAME\"/><Cell col=\"4\" disptype=\"normal\" text=\"SVC_GROUP\"/><Cell col=\"5\" disptype=\"normal\" text=\"FILE_NAME\"/><Cell col=\"6\" disptype=\"normal\" text=\"FILE_TYPE\"/><Cell col=\"7\" disptype=\"normal\" text=\"FILT_PATH\"/><Cell col=\"8\" disptype=\"normal\" text=\"DISPLAY_YN\"/><Cell col=\"9\" disptype=\"normal\" text=\"USE_YN\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:MENU_SEQ\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:MENU_ID\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:MENU_LEVEL\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:MENU_NAME\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:SVC_GROUP\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:FILE_NAME\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:FILE_TYPE\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:FILT_PATH\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:DISPLAY_YN\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "75.49%", "50", null, "21", "12.79%", null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample004_Transaction");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("TEST_Menu.xfdl", "lib::comLib.xjs");
        this.registerScript("TEST_Menu.xfdl", function() {
        //include "lib::comLib.xjs";

        /*************************************************************************************************
         * 서버 호출
         * @param svcID  서비스ID CallBack에서 svcID로 분기처리
         * @param strURL  서비스 URL
         * @param inData  서버로 전송할 DataSet
         *                예: ds_select=ds_select:A ds_select2=ds_select2
         * @param outData  서버로부터 전송 받을  DataSet
         *                 예:  ds_master=ds_servername
         * @param otherArg  서버로 전송할 기타 Argument
         *                  예: key=value key2=value2
         * @param callBackFnc  서버에서 처리가 완료된 후 Callback 받을 Function 명
         *
         * @param tranType 저장/조회 구분값.  U:저장/삭제, S:조회
         * @param isSync  동기식으로 설정할지 여부. 특별한 상황이외엔 비동기설정 (비동기: false)
         * @return 없음
         ************************************************************************************************/

        this.Button00_onclick = function(obj,e)
        {
        	var sSvcID        = "getMenu";
        	var sURL          = "svc::rest/manage/getMenuListAll";		// svc = http://localhost:8080/nhvan/
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_list00=ds_menu";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function()
        {
        	trace(this.ds_list00.saveXML());
        }
         
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("TEST_Menu.xfdl");

       
    };
}
)();
