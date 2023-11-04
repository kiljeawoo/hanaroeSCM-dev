(function()
{
    return function()
    {
        // Theme, Component URI Setting
        this._theme_uri = "./_theme_/";
        this._globalvar_uri = "globalvars.xml";
        this.loadTypedefition = function()
        {
            // this._addService(prefixid, type, url, cachelevel, codepage, language, version, communication);
            this._addService("default_typedef.xml", "ANALYSIS.BIZ", "form", "./ANALYSIS/BIZ/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "ANALYSIS.INFO", "form", "./ANALYSIS/INFO/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "ANALYSIS.MARKET", "form", "./ANALYSIS/MARKET/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "ANALYSIS.STS", "form", "./ANALYSIS/STS/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "MOB.MD", "form", "./MOB/MD/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "MDS.DELIVERY", "form", "./MDS/DELIVERY", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "PDA.CN", "form", "./PDA/CN/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "PDS.BALANCE", "form", "./PDS/BALANCE/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "PDS.BAS", "form", "./PDS/BAS/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "PDS.COMPANY", "form", "./PDS/COMPANY/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "PDS.COUPON", "form", "./PDS/COUPON/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "PDS.DMART", "form", "./PDS/DMART/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "PDS.OUTER", "form", "./PDS/OUTER/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "PDS.PARTNER", "form", "./PDS/PARTNER/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "PDS.PAY", "form", "./PDS/PAY/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "PDS.PRICAT", "form", "./PDS/PRICAT/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "PDS.RECADV", "form", "./PDS/RECADV/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "PDS.SALES", "form", "./PDS/SALES/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "PDS.STOCK", "form", "./PDS/STOCK/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "SCM.DELIVERY", "form", "./SCM/DELIVERY/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "SCM.EVENT", "form", "./SCM/EVENT/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "SCM.ORDER", "form", "./SCM/ORDER/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "SCM.RECADV", "form", "./SCM/RECADV/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "SCM.RESERVE", "form", "./SCM/RESERVE/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "SCM.RETANN", "form", "./SCM/RETANN/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "OMG.BT", "form", "./OMG/BT/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "OMG.BL", "form", "./OMG/BL/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "OMG.CT", "form", "./OMG/CT/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "OMG.MG", "form", "./OMG/MG/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "OMG.PT", "form", "./OMG/PT/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "OMG.TX", "form", "./OMG/TX/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "lib", "js", "./lib/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "guide", "form", "./guide/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "template", "form", "./template/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "sample", "form", "./sample/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "sample.rMateChart", "form", "./rMateChart/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "frame", "form", "./frame/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "common", "form", "./common/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "css", "file", "./css/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "img", "form", "./img/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "POPUP", "form", "./POPUP/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "svc", "JSP", "http://localhost:8080/nhvan/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "svc_admin", "JSP", "http://localhost:8090/nhadmin/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "svc_prod", "JSP", "http://www.nhescm.co.kr:8090/mplug/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "svc_dev", "JSP", "http://121.156.58.242:8090/mplug/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "dsLayout", "bs", "http://121.156.58.242:8090/mplug/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "SYS.BATCH", "form", "./SYS/BATCH/", "dynamic", null, "", "0", "0");

            this._component_uri = (this._arg_compurl ? this._arg_compurl : "./nexacro14lib/component/");
            // load components
            var registerclass = [
            		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
            		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
            		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
            		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
            		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
            		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
            		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
            		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
            		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
            		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
            		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
            		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
            		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
            		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
            		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
            		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
            		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
            		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
            		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
            		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
            		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
            		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
            		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
            		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
            		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
            		{"id":"ExcelExportObject", "classname":"nexacro.ExcelExportObject", "type":"JavaScript"},
            		{"id":"ExcelImportObject", "classname":"nexacro.ExcelImportObject", "type":"JavaScript"}
            ];
            this._addClasses(registerclass);
        };
        
        this.on_loadGlobalVariables = function()
        {
            // global variable
            this._addVariable("gv_quickviewmode", "true", "false");
            this._addVariable("gv_httpcode", null, false);
            this._addVariable("gv_userKey", null, "true");
            this._addVariable("gv_userId", null, false);
            this._addVariable("gv_glnCode", "8801099000016", false);
            this._addVariable("gv_userId", "test11", false);
            this._addVariable("gv_glnCode", "8801099000016", false);
            this._addVariable("gv_mbcoType", "1", false);
            this._addVariable("gv_companyName", "대상에프엔에프(주)", false);
            this._addVariable("gv_userName", "홍길동", false);
            this._addVariable("gv_userId", null, false);
            this._addVariable("gv_glnCode", null, false);
            this._addVariable("gv_mbcoType", null, false);
            this._addVariable("gv_companyName", null, false);
            this._addVariable("gv_userName", null, false);
            this._addVariable("gv_companyType", null, false);
            this._addVariable("gv_lastLoginDt", null, false);
            this._addVariable("gv_userType", null, false);
            this._addVariable("gv_server_url", "http://localhost:8080/nhvan/", false);
            this._addVariable("gv_chartJS_url", "http://localhost:8080/nhvan/escm/chart/rMateChartH5_local", false);
            this._addVariable("gv_chartHtml_url", "http://localhost:8080/nhvan/escm/chart/rMateChartH5/Html/nexacroChartH5.html", false);
            this._addVariable("gv_firstLoginYn", null, false);
            this._addVariable("gv_userCvDsc", null, false);
            this._addVariable("gv_userStatus", null, false);
            this._addVariable("gv_ozViewer_url", "http://localhost:8080/nhvan/oz/ozViewer.nh", false);
            this._addVariable("gv_serverAdmin_url", "http://localhost:8090/nhadmin/", false);
            this._addVariable("gv_serviceHtml_url", "http://localhost:8080/nhvan/", false);
            this._addVariable("gv_userTPC", "user", false);
            this._addVariable("gv_userAuth", null, false);
            this._addVariable("gv_pwOverTermYn", null, false);
            this._addVariable("gv_today", null, false);
            this._addVariable("gv_hoffApvYn", null, false);
            this._addVariable("gv_systemAuth", null, false);
            this._addVariable("gv_menuCntWarningFlag", null, false);
            this._addVariable("gv_naUsrSysKdc", null, false);
            this._addVariable("gv_serverType", "LOCAL", false);
            this._addVariable("gv_redirect_url", "http://localhost:8080/nhvan/escm/index.html", false);
            this._addVariable("gv_bizNumber", null, false);
            this._addVariable("gv_version", "2015112701", false);
            this._addVariable("gv_changeMb", "N", false);
            this._addVariable("gv_changeElt", "N", false);
            this._addVariable("gv_ozViewer", "HTML5", false);
            this._addVariable("gv_upGlnCode", null, false);
            this._addVariable("gv_billingUserID", null, false);
            this._addVariable("gv_billingUserName", null, false);
            this._addVariable("gv_noAuthMenuGroup", null, false);
            this._addVariable("gv_userSystemCode", null, false);
            this._addVariable("gv_weakPwYn", null, false);
            this._addVariable("gv_trplDtlTpc", null, false);

            // global image

            // global dataset
            var obj = null;
            obj = new Dataset("gds_servertime", this);
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_LEVEL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SVC_GROUP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"FILE_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"FILE_PATH\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"DISPLAY_YN\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"USR_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">01000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">SCM</Col><Col id=\"FILE_PATH\">SCM</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01001000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">수주업무</Col><Col id=\"FILE_PATH\">SCM&gt;수주업무</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01001001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">수주등록</Col><Col id=\"SVC_GROUP\">SCM.ORDER</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0100</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;수주업무&gt;수주등록</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01001002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">수주내역조회</Col><Col id=\"SVC_GROUP\">SCM.ORDER</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0110</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;수주업무&gt;수주내역조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01001003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">TC수주내역조회</Col><Col id=\"SVC_GROUP\">SCM.ORDER</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0120</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;수주업무&gt;TC수주내역조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01002000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">행사업무</Col><Col id=\"FILE_PATH\">SCM&gt;행사업무        </Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01002001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">예약행사수주현황</Col><Col id=\"SVC_GROUP\">SCM.EVENT</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0200</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;행사업무&gt;예약행사수주현황</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01002002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">예약행사집계현황</Col><Col id=\"SVC_GROUP\">SCM.EVENT</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0210</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;행사업무&gt;예약행사집계현황</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01002003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">예약행사진행현황</Col><Col id=\"SVC_GROUP\">SCM.EVENT</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0220</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;행사업무&gt;예약행사진행현황</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"USR_AUTH\"/><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01002004</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">행사가격변경조회</Col><Col id=\"SVC_GROUP\">SCM.EVENT</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0230</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;행사업무&gt;행사가격변경조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01003000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">배송업무</Col><Col id=\"FILE_PATH\">SCM&gt;배송업무</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01003001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">배송예정서일반등록</Col><Col id=\"SVC_GROUP\">SCM.DELIVERY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0300</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;배송업무&gt;배송예정서일반등록</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01003002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">배송예정서직송등록</Col><Col id=\"SVC_GROUP\">SCM.DELIVERY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0310</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;배송업무&gt;배송예정서직송등록</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01003003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">배송예정일괄등록</Col><Col id=\"SVC_GROUP\">SCM.DELIVERY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0320</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;배송업무&gt;배송예정일괄등록</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01003004</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">배송예정거래처별조회</Col><Col id=\"SVC_GROUP\">SCM.DELIVERY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0330</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;배송업무&gt;배송예정거래처별조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01003005</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">배송예정상품별조회</Col><Col id=\"SVC_GROUP\">SCM.DELIVERY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0340</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;배송업무&gt;배송예정상품별조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01003006</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">배송예정결과조회</Col><Col id=\"SVC_GROUP\">SCM.DELIVERY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0350</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;배송업무&gt;배송예정결과조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01003007</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">미입고현황조회</Col><Col id=\"SVC_GROUP\">SCM.DELIVERY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0360</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;배송업무&gt;미입고현황조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01003008</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">미입고패널티조회</Col><Col id=\"SVC_GROUP\">SCM.DELIVERY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0370</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;배송업무&gt;미입고패널티조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01003009</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">물류센터결품내역</Col><Col id=\"SVC_GROUP\">SCM.DELIVERY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0380</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;배송업무&gt;물류센터결품내역</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01003015</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">배송예정서공판장등록</Col><Col id=\"SVC_GROUP\">SCM.DELIVERY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0311</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;배송업무&gt;배송예정서공판장등록</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01004000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">입고예약업무</Col><Col id=\"FILE_PATH\">SCM&gt;입고예약업무</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01004001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">입고예약등록</Col><Col id=\"SVC_GROUP\">SCM.RESERVE</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0400</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;입고예약업무&gt;입고예약등록</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01004002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">공급처차량관리</Col><Col id=\"SVC_GROUP\">SCM.RESERVE</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0410</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;입고예약업무&gt;공급처차량관리</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01005000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">검수업무</Col><Col id=\"FILE_PATH\">SCM&gt;검수업무</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01005001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">검수실적_전표별</Col><Col id=\"SVC_GROUP\">SCM.RECADV</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0500</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;검수업무&gt;검수실적_전표별</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01005002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">검수실적_직송분</Col><Col id=\"SVC_GROUP\">SCM.RECADV</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0510</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;검수업무&gt;검수실적_직송분</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01006000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">반품업무</Col><Col id=\"FILE_PATH\">SCM&gt;반품업무</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01006001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">반품입고의뢰조회</Col><Col id=\"SVC_GROUP\">SCM.RETANN</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0600</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;반품업무&gt;반품입고의뢰조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">01006002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">반품입고확인등록</Col><Col id=\"SVC_GROUP\">SCM.RETANN</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0610</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">SCM&gt;반품업무&gt;반품입고확인등록</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">부가정보</Col><Col id=\"FILE_PATH\">부가정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02001000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">출고정보</Col><Col id=\"FILE_PATH\">부가정보&gt;출고정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02001001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">물류센터 출고실적</Col><Col id=\"SVC_GROUP\">PDS.OUTER</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0700</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;출고정보&gt;물류센터 출고실적</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02001002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">주류물류센터출고실적</Col><Col id=\"SVC_GROUP\">PDS.OUTER</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0710</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;출고정보&gt;주류물류센터출고실적</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02002000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">판매정보</Col><Col id=\"FILE_PATH\">부가정보&gt;판매정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02002001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">일자별 정보</Col><Col id=\"SVC_GROUP\">PDS.SALES</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0800</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;판매정보&gt;일자별정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02002002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">기간별 정보</Col><Col id=\"SVC_GROUP\">PDS.SALES</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0810</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;판매정보&gt;기간별정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02002003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">점포별/상품별 정보</Col><Col id=\"SVC_GROUP\">PDS.SALES</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0820</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;판매정보&gt;점포별/상품별 정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02002004</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">PDS.SALES</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0821</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02002005</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">상품별/점포별 정보</Col><Col id=\"SVC_GROUP\">PDS.SALES</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0830</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;판매정보&gt;상품별/점포별 정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02002006</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">PDS.SALES</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0831</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02002007</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">주류 판매 실적</Col><Col id=\"SVC_GROUP\">PDS.SALES</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0840</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;판매정보&gt;주류판매실적</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02002008</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">자료수신</Col><Col id=\"SVC_GROUP\">PDS.SALES</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0850</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;판매정보&gt;자료수신</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02003000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">재고정보</Col><Col id=\"FILE_PATH\">부가정보&gt;재고정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02003001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">일자별 정보</Col><Col id=\"SVC_GROUP\">PDS.STOCK</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0900</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;재고정보&gt;일자별정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02003002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">기간별 정보</Col><Col id=\"SVC_GROUP\">PDS.STOCK</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0910</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;재고정보&gt;기간별정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02003003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">점포별/상품별 정보</Col><Col id=\"SVC_GROUP\">PDS.STOCK</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0920</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;재고정보&gt;점포별/상품별 정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02003004</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">PDS.STOCK</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0921</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02003005</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">상품별/점포별 정보</Col><Col id=\"SVC_GROUP\">PDS.STOCK</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0930</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;재고정보&gt;상품별/점포별 정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02003006</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">PDS.STOCK</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0931</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02003007</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">자료수신</Col><Col id=\"SVC_GROUP\">PDS.STOCK</Col><Col id=\"FILE_NAME\">VAN_DS_SC_0940</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;재고정보&gt;자료수신</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02004000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">납품정보</Col><Col id=\"FILE_PATH\">부가정보&gt;납품정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02004001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">일자별 정보</Col><Col id=\"SVC_GROUP\">PDS.RECADV</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1000</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;납품정보&gt;일자별정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02004002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">기간별 정보</Col><Col id=\"SVC_GROUP\">PDS.RECADV</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1010</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;납품정보&gt;기간별정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02004003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">점포별/상품별 정보</Col><Col id=\"SVC_GROUP\">PDS.RECADV</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1020</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;납품정보&gt;점포별/상품별 정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02004004</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">PDS.RECADV</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1021</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02004005</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">상품별/점포별 정보</Col><Col id=\"SVC_GROUP\">PDS.RECADV</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1030</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;납품정보&gt;상품별/점포별 정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02004006</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">PDS.RECADV</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1031</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02004007</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">점포별/상품별 미납정보</Col><Col id=\"SVC_GROUP\">PDS.RECADV</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1040</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;납품정보&gt;점포별/싱픔별 미납정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02004008</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">PDS.RECADV</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1041</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02004009</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">자료수신</Col><Col id=\"SVC_GROUP\">PDS.RECADV</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1050</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;납품정보&gt;자료수신</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02004010</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">수수료</Col><Col id=\"SVC_GROUP\">PDS.RECADV</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1060</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;납품정보&gt;수수료관리(본사)</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02004011</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">수수료 현황</Col><Col id=\"SVC_GROUP\">PDS.RECADV</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1070</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;납품정보&gt;수수료현황</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02005000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">잔액장정보</Col><Col id=\"FILE_PATH\">부가정보&gt;잔액장정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02005001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">일잔액원장조회</Col><Col id=\"SVC_GROUP\">PDS.BALANCE</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1100</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;잔액장정보&gt;일잔액원장조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02005002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">월잔액원장조회</Col><Col id=\"SVC_GROUP\">PDS.BALANCE</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1110</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;잔액장정보&gt;월잔액원장조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02005003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">월잔액원장조회(마트분사)</Col><Col id=\"SVC_GROUP\">PDS.BALANCE</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1120</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;잔액장정보&gt;월잔액원장조회(마트분사)</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02005004</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">일선수금원장조회</Col><Col id=\"SVC_GROUP\">PDS.BALANCE</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1130</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;잔액장정보&gt;일선수금원장조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02005005</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">미수금원장조회(농협기준)</Col><Col id=\"SVC_GROUP\">PDS.BALANCE</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1140</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;잔액장정보&gt;미수금원장조회(농협기준)</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02006000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">정산정보</Col><Col id=\"FILE_PATH\">부가정보&gt;정산정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02006001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">외상매출회수예정</Col><Col id=\"SVC_GROUP\">PDS.PAY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1200</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;정산정보&gt;외상매출회수예정</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02006002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">외상매출회수내역</Col><Col id=\"SVC_GROUP\">PDS.PAY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1210</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;정산정보&gt;외상매출회수내역</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02006003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">세무매출실적</Col><Col id=\"SVC_GROUP\">PDS.PAY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1220</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;정산정보&gt;세무매출실적</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02006004</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">세무매입실적</Col><Col id=\"SVC_GROUP\">PDS.PAY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1230</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;정산정보&gt;세무매입실적</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02006005</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">사후장려금실적</Col><Col id=\"SVC_GROUP\">PDS.PAY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1240</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;정산정보&gt;사후장려금실적</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02006006</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">기타당좌자산회수내역</Col><Col id=\"SVC_GROUP\">PDS.PAY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1250</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;정산정보&gt;기타당좌자산회수내역</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02007000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">거래관계관리</Col><Col id=\"FILE_PATH\">부가정보&gt;거래관계관리</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02007001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">자체 거래관계 등록 (R1)</Col><Col id=\"SVC_GROUP\">PDS.PARTNER</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1300</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;거래관계관리&gt;자체거래관계등록 (R1)</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02007002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">PDS.PARTNER</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1301</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02007003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">PDS.PARTNER</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1302</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02007004</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">하나로마트 거래관계 등록 (R2)</Col><Col id=\"SVC_GROUP\">PDS.PARTNER</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1310</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;거래관계관리&gt;하나로마트거래관계등록(R2)</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02007005</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">탄력가격업체 거래관계 등록 (R3)</Col><Col id=\"SVC_GROUP\">PDS.PARTNER</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1320</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;거래관계관리&gt;탄력가격업체거래관계등록(R3)</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02007006</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">거래관계 조회</Col><Col id=\"SVC_GROUP\">PDS.PARTNER</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1330</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;거래관계관리&gt;거래관계조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02007007</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">PDS.PARTNER</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1331</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02007008</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">사업장 조회</Col><Col id=\"SVC_GROUP\">PDS.PARTNER</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1340</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;거래관계관리&gt;사업장조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02008000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">본지사관리</Col><Col id=\"FILE_PATH\">부가정보&gt;본지사관리</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02008001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">자사정보조회</Col><Col id=\"SVC_GROUP\">PDS.COMPANY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1400</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;본지사관리&gt;자사정보조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02008002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">자사사용자관리</Col><Col id=\"SVC_GROUP\">PDS.COMPANY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1410</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;본지사관리&gt;자사사용자관리</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02008003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">본지사조회</Col><Col id=\"SVC_GROUP\">PDS.COMPANY</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1420</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;본지사관리&gt;본지사조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02009000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">상품정보관리</Col><Col id=\"FILE_PATH\">부가정보&gt;상품정보관리</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02009001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">상품기준정보조회</Col><Col id=\"SVC_GROUP\">PDS.PRICAT</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1500</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;상품정보관리&gt;상품기준정보조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02009002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">상품상세조회</Col><Col id=\"SVC_GROUP\">PDS.PRICAT</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1510</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;상품정보관리&gt;상품상세조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02009003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">상품공급가격조회</Col><Col id=\"SVC_GROUP\">PDS.PRICAT</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1520</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;상품정보관리&gt;상품공급가격조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02009004</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">상품공급가격이력</Col><Col id=\"SVC_GROUP\">PDS.PRICAT</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1530</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;상품정보관리&gt;상품공급가격이력</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02009005</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">신규상품등록</Col><Col id=\"SVC_GROUP\">PDS.PRICAT</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1540</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;상품정보관리&gt;신규상품등록</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02009006</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">신규상품일괄등록</Col><Col id=\"SVC_GROUP\">PDS.PRICAT</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1550</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;상품정보관리&gt;신규상품일괄등록</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02009007</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">신규상품등록내역조회</Col><Col id=\"SVC_GROUP\">PDS.PRICAT</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1560</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;상품정보관리&gt;신규상품등록내역조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02009008</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">상품정보변경</Col><Col id=\"SVC_GROUP\">PDS.PRICAT</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1570</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;상품정보관리&gt;상품정보변경</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02009009</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">사업장매입가격조회</Col><Col id=\"SVC_GROUP\">PDS.PRICAT</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1580</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;상품정보관리&gt;사업장매입가격조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02010000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">할인쿠폰</Col><Col id=\"FILE_PATH\">부가정보&gt;할인쿠폰</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02010001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">할인쿠폰등록</Col><Col id=\"SVC_GROUP\">PDS.COUPON</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1600</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;할인쿠폰&gt;할인쿠폰등록</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02010002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">할인쿠폰조회</Col><Col id=\"SVC_GROUP\">PDS.COUPON</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1610</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;할인쿠폰&gt;할인쿠폰조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02010003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">PDS.COUPON</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1611</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02010004</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">쿠폰실적</Col><Col id=\"SVC_GROUP\">PDS.COUPON</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1620</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;할인쿠폰&gt;쿠폰실적</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02010005</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">쿠폰대금</Col><Col id=\"SVC_GROUP\">PDS.COUPON</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1630</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;할인쿠폰&gt;쿠폰대금</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02010006</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">PDS.COUPON</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1631</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">02010007</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">쿠폰거래사무소조회</Col><Col id=\"SVC_GROUP\">PDS.COUPON</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1640</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">부가정보&gt;할인쿠폰&gt;쿠폰거래사무소조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">정보분석</Col><Col id=\"FILE_PATH\">정보분석</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03001000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">BI조회</Col><Col id=\"FILE_PATH\">정보분석&gt;BI조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03001001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">월별 일평균 매출추이</Col><Col id=\"SVC_GROUP\">ANALYSIS.BIZ</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1700</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;BI조회&gt;월별 일평균 매출추이</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03001002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">누적 매출추이</Col><Col id=\"SVC_GROUP\">ANALYSIS.BIZ</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1710</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;BI조회&gt;누적 매출추이</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03001003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">점포 일평균 매출 TOP10</Col><Col id=\"SVC_GROUP\">ANALYSIS.BIZ</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1720</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;BI조회&gt;점포 일평균 매출 TOP10</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03001004</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">상품 일평균 매출 TOP10</Col><Col id=\"SVC_GROUP\">ANALYSIS.BIZ</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1730</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;BI조회&gt;상품 일평균 매출 TOP10</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03001005</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">분류 일평균 매출 TOP10</Col><Col id=\"SVC_GROUP\">ANALYSIS.BIZ</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1740</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;BI조회&gt;분류 일평균 매출 TOP10</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03001006</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">상품 판매순위 TOP10</Col><Col id=\"SVC_GROUP\">ANALYSIS.BIZ</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1750</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;BI조회&gt;상품 판매순위 TOP10</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03001007</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">점포 판매순위 TOP10</Col><Col id=\"SVC_GROUP\">ANALYSIS.BIZ</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1760</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;BI조회&gt;점포 판매순위 TOP10</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03001008</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">분류 판매순위 TOP10</Col><Col id=\"SVC_GROUP\">ANALYSIS.BIZ</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1770</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;BI조회&gt;분류 판매순위 TOP10</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03002000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">정보분석</Col><Col id=\"FILE_PATH\">정보분석&gt;정보분석</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03002001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">자사 월별 판매추이</Col><Col id=\"SVC_GROUP\">ANALYSIS.INFO</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1801</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;정보분석&gt;자사 월별 판매추이</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03002002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">ANALYSIS.INFO</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1801</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03002003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">자사 주별 판매추이</Col><Col id=\"SVC_GROUP\">ANALYSIS.INFO</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1811</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;정보분석&gt;자사 주별 판매추이</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03002004</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">ANALYSIS.INFO</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1811</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03002005</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">자사 일별 판매추이</Col><Col id=\"SVC_GROUP\">ANALYSIS.INFO</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1821</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;정보분석&gt;자사 일별 판매추이</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03002006</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">ANALYSIS.INFO</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1821</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03002007</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">자사 월별 재고추이</Col><Col id=\"SVC_GROUP\">ANALYSIS.INFO</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1831</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;정보분석&gt;자사 월별 재고추이</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03002008</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">ANALYSIS.INFO</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1831</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03002009</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">자사 주별 재고추이</Col><Col id=\"SVC_GROUP\">ANALYSIS.INFO</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1841</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;정보분석&gt;자사 주별 재고추이</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03002010</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">ANALYSIS.INFO</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1841</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03002011</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">관심 점포/상품 등록</Col><Col id=\"SVC_GROUP\">ANALYSIS.INFO</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1850</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;정보분석&gt;관심 점포/상품 등록</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">시장분석</Col><Col id=\"FILE_PATH\">정보분석&gt;시장분석</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">월별 시장점유율</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1900</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;시장분석&gt;월별 시장점유율</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1901</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">주별 시장점유율</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1910</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;시장분석&gt;주별 시장점유율</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003004</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1911</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003005</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">월별 시장점유율 상세</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1920</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;시장분석&gt;월별 시장점유율 상세</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003006</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1921</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003007</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">주별 시장점유율 상세</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1930</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;시장분석&gt;주별 시장점유율 상세</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003008</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1931</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003009</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">월별 판매순위 랭킹</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1940</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;시장분석&gt;월별 판매순위 랭킹</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003010</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1941</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003011</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">주별 판매순위 랭킹</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1950</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;시장분석&gt;주별 판매순위 랭킹</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003012</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1951</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003013</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">점포별 ABC분석</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1960</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;시장분석&gt;점포별 ABC분석</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003014</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">월별 경쟁사 시장분석</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1970</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;시장분석&gt;월별 경쟁사 시장분석</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003015</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1971</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003016</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">주별 경쟁사 시장분석</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1980</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;시장분석&gt;주별 경쟁사 시장분석</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003017</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1981</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">03003018</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">분류 경쟁사 판매정보</Col><Col id=\"SVC_GROUP\">ANALYSIS.MARKET</Col><Col id=\"FILE_NAME\">VAN_DS_SC_1990</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">정보분석&gt;시장분석&gt;분류 경쟁사 판매정보</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">22000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">세금계산서</Col><Col id=\"FILE_PATH\">세금계산서</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">22001000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">문서보관함</Col><Col id=\"FILE_PATH\">세금계산서&gt;문서보관함</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">22001001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">매출보관함</Col><Col id=\"SVC_GROUP\">OMG.TX</Col><Col id=\"FILE_NAME\">OMG_DS_SC_3110</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">세금계산서&gt;문서보관함&gt;매출보관함</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">22001002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">매출세금계산서 상세</Col><Col id=\"SVC_GROUP\">OMG.TX</Col><Col id=\"FILE_NAME\">OMG_DS_SC_3111</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">세금계산서&gt;문서보관함&gt;매출세금계산서상세</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">22001003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">매출세금계산서 출력</Col><Col id=\"SVC_GROUP\">OMG.TX</Col><Col id=\"FILE_NAME\">OMG_DS_SC_3112</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">세금계산서&gt;문서보관함&gt;매출세금계산서출력</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">22001004</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">매입보관함</Col><Col id=\"SVC_GROUP\">OMG.TX</Col><Col id=\"FILE_NAME\">OMG_DS_SC_3120</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">세금계산서&gt;문서보관함&gt;매입보관함</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">22001005</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">매입세금계산서 상세</Col><Col id=\"SVC_GROUP\">OMG.TX</Col><Col id=\"FILE_NAME\">OMG_DS_SC_3121</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">세금계산서&gt;문서보관함&gt;매입보관함&gt;매입세금계산서 상세</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">22001006</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">매입세금계산서 출력</Col><Col id=\"SVC_GROUP\">OMG.TX</Col><Col id=\"FILE_NAME\">OMG_DS_SC_3122</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">세금계산서&gt;문서보관함&gt;매입보관함&gt;매입세금계산서 출력</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">22002000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">매출/매입합계표</Col><Col id=\"FILE_PATH\">세금계산서&gt;매출/매입합계표</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">22002001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">매출합계표</Col><Col id=\"SVC_GROUP\">OMG.TX</Col><Col id=\"FILE_NAME\">OMG_DS_SC_3210</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">세금계산서&gt;매출합계표</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">22002002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">매입합계표</Col><Col id=\"SVC_GROUP\">OMG.TX</Col><Col id=\"FILE_NAME\">OMG_DS_SC_3220</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">세금계산서&gt;매입합계표</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">22003000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">국세청신고</Col><Col id=\"FILE_PATH\">세금계산서&gt;국세청신고</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">22003001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">신고현황</Col><Col id=\"SVC_GROUP\">OMG.TX</Col><Col id=\"FILE_NAME\">OMG_DS_SC_3310</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">세금계산서&gt;국세청신고&gt;신고현황</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">22003002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">신고실패문서 재처리</Col><Col id=\"SVC_GROUP\">OMG.TX</Col><Col id=\"FILE_NAME\">OMG_DS_SC_3320</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">세금계산서&gt;국세청신고&gt;신고실패문서 재처리</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">22004000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">인증서</Col><Col id=\"FILE_PATH\">세금계산서&gt;인증서</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">22004001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">인증서조회</Col><Col id=\"SVC_GROUP\">OMG.TX</Col><Col id=\"FILE_NAME\">OMG_DS_SC_3410</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">세금계산서&gt;인증서조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">22004002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">인증서 등록</Col><Col id=\"SVC_GROUP\">OMG.TX</Col><Col id=\"FILE_NAME\">OMG_DS_SC_3420</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">세금계산서&gt;인증서등록</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">23000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">계약상담</Col><Col id=\"FILE_PATH\">계약상담</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">23001000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">신청</Col><Col id=\"FILE_PATH\">계약상담&gt;신청</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">23001001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">상담신청조회</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_1110</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">계약상담&gt;신청&gt;상담신청조회</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">23001002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">상담신청등록</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_1111</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">계약상담&gt;신청&gt;상담신청등록</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">23001003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">상담신청상세</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_1112</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">계약상담&gt;신청&gt;상담신청상세</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">23001004</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">신청내역확인팝업</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_1113</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">계약상담&gt;신청&gt;신청내역확인팝업</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">23001005</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">결재양식작성</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_1120</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">계약상담&gt;신청&gt;결재양식작성</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">23001006</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">상담신청이력</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_1130</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">계약상담&gt;신청&gt;상담신청이력</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">23002000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">신청내역</Col><Col id=\"FILE_PATH\">계약상담&gt;신청내역</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">23002001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">신청내역조회</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_1210</Col><Col id=\"FILE_PATH\">계약상담&gt;신청내역&gt;신청내역조회</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">23002002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">신청내역확인</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_1211</Col><Col id=\"FILE_PATH\">계약상담&gt;신청내역&gt;신청내역확인</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">23002003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">신청내역상세</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_1212</Col><Col id=\"FILE_PATH\">계약상담&gt;신청내역&gt;신청내역상세</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">24000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">전자계약</Col><Col id=\"FILE_PATH\">전자계약</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">24001000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">전자계약서</Col><Col id=\"FILE_PATH\">전자계약&gt;전자계약서</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">24001001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">전자계약서조회[농협]</Col><Col id=\"SVC_GROUP\">OMG.CT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_2110</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">전자계약&gt;전자계약서&gt;전자계약서조회[농협]</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">24001002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">전자계약서신청상세[농협]</Col><Col id=\"SVC_GROUP\">OMG.CT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_2111</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">전자계약&gt;전자계약서&gt;전자계약서신청상세[농협]</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">24001003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">신규전자계약서작성</Col><Col id=\"SVC_GROUP\">OMG.CT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_2113</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">전자계약&gt;전자계약서&gt;신규전자계약서작성</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">24001004</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">전자계약서조회[협력업체]</Col><Col id=\"SVC_GROUP\">OMG.CT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_2120</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">전자계약&gt;전자계약서&gt;전자계약서조회[협력업체]</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">24001005</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">전자계약서신청상세[협력업체]</Col><Col id=\"SVC_GROUP\">OMG.CT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_2121</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">전자계약&gt;전자계약서&gt;전자계약서신청상세[협력업체]</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">24001006</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">계약서 변경 이력 상세</Col><Col id=\"SVC_GROUP\">OMG.CT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_2120</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">전자계약&gt;전자계약서&gt;계약서 변경 이력 상세</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">24002000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">전자계약서변경</Col><Col id=\"FILE_PATH\">전자계약&gt;전자계약서변경</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">24002001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">계약변경대상조회</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_2210</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">전자계약&gt;전자계약서변경&gt;계약변경대상조회</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">24002002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">계약서일괄변경</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_2211</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">전자계약&gt;전자계약서변경&gt;계약서일괄변경</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">24003000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">전자계약서관리</Col><Col id=\"FILE_PATH\">전자계약&gt;전자계약서관리</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">24003001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">계약서양식조회</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_2310</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">전자계약&gt;전자계약서관리&gt;계약서양식조회</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">24003002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">계약서양식등록</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_2310</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">전자계약&gt;전자계약서관리&gt;계약서양식등록</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">24003003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">필수서류관리화면</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_2320</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">전자계약&gt;전자계약서관리&gt;필수서류관리화면</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">커뮤니티</Col><Col id=\"FILE_PATH\">커뮤니티</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25001000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">질의응답</Col><Col id=\"FILE_PATH\">커뮤니티&gt;질의응답</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25001001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">질의응답조회</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4110</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">커뮤니티&gt;질의응답&gt;질의응답조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25001002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">질의응답상세</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4111</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">커뮤니티&gt;질의응답&gt;질의응답상세</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25001003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">질의응답등록/수정</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4112</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">커뮤니티&gt;질의응답&gt;질의응답등록/수정</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25002000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">자료실</Col><Col id=\"FILE_PATH\">커뮤니티&gt;자료실</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25002001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">자료실조회</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4110</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">커뮤니티&gt;자료실&gt;자료실조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25002002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">자료실상세</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4211</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">커뮤니티&gt;자료실&gt;자료실상세</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25002003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">자료실등록/수정</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4112</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">커뮤니티&gt;자료실&gt;자료실등록/수정</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25003000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">Voc(고객의소리)</Col><Col id=\"FILE_PATH\">커뮤니티&gt;Voc(고객의소리)</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25003001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">Voc(고객의소리)조회</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4110</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">커뮤니티&gt;Voc(고객의소리)&gt;Voc(고객의소리)조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25003002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">Voc(고객의소리)상세</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4311</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">커뮤니티&gt;Voc(고객의소리)&gt;Voc(고객의소리)상세</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25003003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">Voc(고객의소리)등록/수정</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4112</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">커뮤니티&gt;Voc(고객의소리)&gt;Voc(고객의소리)등록/수정</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25004000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">공지사항(NH)</Col><Col id=\"FILE_PATH\">커뮤니티&gt;공지사항(NH)</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25004001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">농협공지사항조회</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4510</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">공지사항&gt;공지사항(NH)&gt;농협공지사항조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25004002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">농협공지사항상세</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4511</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">공지사항&gt;공지사항(NH)&gt;농협공지사항상세</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25005000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">공지사항(eSCM)</Col><Col id=\"FILE_PATH\">커뮤니티&gt;공지사항(eSCM)</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25005001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">eSCM공지사항조회</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4110</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">커뮤니티&gt;공지사항(eSCM)&gt;eSCM공지사항조회</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25005002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">eSCM공지사항상세</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4411</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">공지사항&gt;공지사항(NH)&gt;eSCM공지사항상세</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row><Row><Col id=\"MENU_ID\">25005003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">eSCM공지사항등록/수정</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4112</Col><Col id=\"FILE_TYPE\">XFDL</Col><Col id=\"FILE_PATH\">공지사항&gt;공지사항(NH)&gt;eSCM공지사항등록/수정 </Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col><Col id=\"VERSION\">1.0</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_msg", this);
            obj._setContents("<ColumnInfo><Column id=\"KEY\" type=\"string\" size=\"32\"/><Column id=\"MESSAGE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_openMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_myMenu", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_userInfoMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_LEVEL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SVC_GROUP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"FILE_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"FILE_PATH\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"DISPLAY_YN\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_authorityWorkplace", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NA_TRPL_C\">8801099000016</Col><Col id=\"CLNTNM\">[8801099000016] 대상에프앤에프(주)</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000023</Col><Col id=\"CLNTNM\">[8801099000023] 대상에프앤에프(주)동부지점</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000030</Col><Col id=\"CLNTNM\">[8801099000030] 대상에프앤에프(주)서부지점</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000047</Col><Col id=\"CLNTNM\">[8801099000047] 대상에프앤에프(주)남부지점(안양)</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000054</Col><Col id=\"CLNTNM\">[8801099000054] 대상에프앤에프(주)남부지점(강원)</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000061</Col><Col id=\"CLNTNM\">[8801099000061] 대상에프앤에프(주)대전지점</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000078</Col><Col id=\"CLNTNM\">[8801099000078] 대상에프앤에프(주)광주지점</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000085</Col><Col id=\"CLNTNM\">[8801099000085] 대상에프앤에프(주)대구지점</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000092</Col><Col id=\"CLNTNM\">[8801099000092] 대상에프앤에프(주)부산지점</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000108</Col><Col id=\"CLNTNM\">[8801099000108] 대상에프앤에프(주)신선지점</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000115</Col><Col id=\"CLNTNM\">[8801099000115] 대상에프앤에프(주)지호상사</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000122</Col><Col id=\"CLNTNM\">[8801099000122] 대상에프앤에프(주)청원유통</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000139</Col><Col id=\"CLNTNM\">[8801099000139] 대상에프앤에프(주)승진상사</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000146</Col><Col id=\"CLNTNM\">[8801099000146] 대상에프앤에프(주)여주대상</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000153</Col><Col id=\"CLNTNM\">[8801099000153] 대상에프앤에프(주)청정원상사(위탁)</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000160</Col><Col id=\"CLNTNM\">[8801099000160] 대상에프앤에프(주)대성상사</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000177</Col><Col id=\"CLNTNM\">[8801099000177] 대상에프앤에프(주)대상위탁상사</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000184</Col><Col id=\"CLNTNM\">[8801099000184] 대상에프앤에프(주)청정원상사(홍성)</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000191</Col><Col id=\"CLNTNM\">[8801099000191] 대상에프앤에프(주)홍성위탁</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000207</Col><Col id=\"CLNTNM\">[8801099000207] 대상에프앤에프(주)해송유통</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000214</Col><Col id=\"CLNTNM\">[8801099000214] 대상에프앤에프(주)청정원태안위탁</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000221</Col><Col id=\"CLNTNM\">[8801099000221] 대상에프앤에프(주)송암상사</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_serviceInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">서비스소개</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">10100000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">eSCM서비스</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4610</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">10200000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">전자세금계산서서비스</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4611</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">10300000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">판매상세정보 서비스</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4612</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">10400000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">데이터 마트</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4613</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">10600000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">모바일 앱</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4615</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">10700000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">마감간소화</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4616</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">가입안내</Col><Col id=\"MENU_ID\">20000000</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">20100000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">서비스가입안내</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4620</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">20200000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">서비스변경안내</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4621</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">20300000</Col><Col id=\"MENU_NAME\">개인정보처리방침</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4622</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">20400000</Col><Col id=\"MENU_NAME\">이용약관</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4623</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">30000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">서비스이용료</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_NAME\">서비스이용료안내</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ID\">30100000</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4630</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_NAME\">공동인증서</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ID\">40000000</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_NAME\">공동인증서란?</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ID\">40100000</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4640</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_NAME\">공동인증서 신청방법</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ID\">40200000</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4641</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"MENU_ID\">40300000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"MENU_NAME\">공동인증서 발급신청</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4642</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ID\">50000000</Col><Col id=\"MENU_NAME\">고객지원</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">50100000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">FAQ</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4650</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">50200000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">오시는길</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4652</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_serviceBT", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">01000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">마트상품</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col><Col id=\"SVC_GROUP\">[Undefined]</Col></Row><Row><Col id=\"MENU_ID\">01010000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">계약의 특징</Col><Col id=\"SVC_GROUP\">[Undefined]</Col><Col id=\"FILE_NAME\">[Undefined]</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"FILE_PATH\">[Undefined]</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">01010001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">계약의 특징11</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_0001</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">01020000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">상담안내</Col><Col id=\"SVC_GROUP\">[Undefined]</Col><Col id=\"FILE_NAME\"/><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"FILE_PATH\">[Undefined]</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">01020001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">신규계약업체 선정기준표</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_0009</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"FILE_PATH\">[Undefined]</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">01020002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">계약대상상품</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_0004</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"FILE_PATH\">[Undefined]</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">01020003</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">계약절차도</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_0005</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"FILE_PATH\">[Undefined]</Col><Col id=\"DISPLAY_YN\">N</Col><Col id=\"USE_YN\">N</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">01020004</Col><Col id=\"MENU_NAME\">계약상세안내</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_0006</Col></Row><Row><Col id=\"MENU_ID\">01020005</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">상담 및 계약시 제출 서류</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_0007</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"FILE_PATH\">[Undefined]</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_NAME\">상담신청</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ID\">01030000</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"SVC_GROUP\"/><Col id=\"FILE_NAME\"/></Row><Row><Col id=\"MENU_NAME\">신규계약 상담신청</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">01030001</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_1111</Col></Row><Row><Col id=\"MENU_ID\">01030002</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">신규계약 상담신청(수산)</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_2111</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"FILE_PATH\"/><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">01040000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">진행결과보기</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col><Col id=\"FILE_TYPE\">xfdl</Col></Row><Row><Col id=\"MENU_ID\">01040001</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">진행결과보기</Col><Col id=\"SVC_GROUP\">OMG.BT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_1210_01</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">01050000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">오시는길</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"FILE_NAME\"/></Row><Row><Col id=\"MENU_NAME\">오시는길</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">01050001</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4651</Col><Col id=\"SVC_GROUP\">OMG.PT</Col></Row><Row><Col id=\"MENU_ID\">98000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">자료실</Col><Col id=\"SVC_GROUP\">[Undefined]</Col><Col id=\"FILE_NAME\">[Undefined]</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"FILE_PATH\">[Undefined]</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">98010000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">계약정보 자료실</Col><Col id=\"SVC_GROUP\">OMG.PT</Col><Col id=\"FILE_NAME\">OMG_DS_SC_4110</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"FILE_PATH\">[Undefined]</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">99000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">부패행위신고센터</Col><Col id=\"FILE_TYPE\">xfdl</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">99010000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">가공생필ㆍ수산</Col><Col id=\"SVC_GROUP\"/><Col id=\"FILE_NAME\"/><Col id=\"FILE_TYPE\"/><Col id=\"FILE_PATH\">[Undefined]</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">99020000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">판매장ㆍ테넌트</Col><Col id=\"SVC_GROUP\"/><Col id=\"FILE_NAME\"/><Col id=\"FILE_TYPE\"/><Col id=\"FILE_PATH\">[Undefined]</Col><Col id=\"DISPLAY_YN\">Y</Col><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_push", this);
            obj._setContents("<ColumnInfo><Column id=\"mobileAppID\" type=\"STRING\" size=\"256\"/><Column id=\"messageID\" type=\"STRING\" size=\"256\"/><Column id=\"publishType\" type=\"STRING\" size=\"256\"/><Column id=\"messageType\" type=\"STRING\" size=\"256\"/><Column id=\"messageTitle\" type=\"STRING\" size=\"256\"/><Column id=\"messageBody\" type=\"STRING\" size=\"256\"/><Column id=\"createUserID\" type=\"STRING\" size=\"256\"/><Column id=\"createUserName\" type=\"STRING\" size=\"256\"/><Column id=\"targetUsers\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"mobileAppID\">10</Col><Col id=\"messageID\">[Undefined]</Col><Col id=\"publishType\">T</Col><Col id=\"messageType\">[Undefined]</Col><Col id=\"messageTitle\">[Undefined]</Col><Col id=\"messageBody\">[Undefined]</Col><Col id=\"createUserID\">admin</Col><Col id=\"createUserName\">관리자</Col><Col id=\"targetUsers\">[Undefined]</Col><Col id=\"url\">http://www.softzam.com</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_pushInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DVIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_STSC_A\" type=\"STRING\" size=\"10\"/><Column id=\"PUSH_STSC_B\" type=\"STRING\" size=\"10\"/><Column id=\"PUSH_STSC_C\" type=\"STRING\" size=\"10\"/><Column id=\"PUSH_STSC_D\" type=\"STRING\" size=\"10\"/><Column id=\"PUSH_STSC_E\" type=\"STRING\" size=\"10\"/><Column id=\"PUSH_STSC_F\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_eventInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SID\" type=\"STRING\" size=\"256\"/><Column id=\"EVENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SID\">VAN_DS_SC_0300</Col><Col id=\"EVENT_NAME\">SAVE_AUTH</Col><Col id=\"PARAM\">0</Col></Row><Row><Col id=\"SID\">VAN_DS_SC_0310</Col><Col id=\"EVENT_NAME\">SAVE_AUTH</Col><Col id=\"PARAM\">0</Col></Row><Row><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"SID\">VAN_DS_SC_0300</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"SID\">VAN_DS_SC_0301</Col><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"SID\">VAN_DS_SC_0302</Col><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"SID\">VAN_DS_SC_0310</Col><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"SID\">VAN_DS_SC_1850</Col><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"SID\">VAN_DS_SC_0300</Col><Col id=\"EVENT_NAME\">ON_ACTIVATE</Col><Col id=\"PARAM\">searchOrder</Col></Row><Row><Col id=\"SID\">OMG_MG_TX_1010</Col><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"SID\">VAN_DS_SC_0100</Col><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"SID\">Intro</Col><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"SID\">Potal</Col><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"SID\">OMG_DS_SC_2111</Col><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"SID\">OMG_DS_SC_2114</Col><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"SID\">OMG_DS_SC_1130</Col><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"SID\">Potal_admin</Col><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col><Col id=\"SID\">VAN_DS_SC_0200</Col></Row><Row><Col id=\"SID\">VAN_DS_SC_0210</Col><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"SID\">VAN_DS_SC_0220</Col><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"SID\">VAN_DS_SC_0230</Col><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"SID\">VAN_DS_SC_0390</Col><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"SID\">VAN_DS_SC_0390</Col><Col id=\"EVENT_NAME\">ON_ACTIVATE</Col><Col id=\"PARAM\">searchOrder</Col></Row><Row><Col id=\"SID\">VAN_DS_SC_0301</Col><Col id=\"EVENT_NAME\">ON_ACTIVATE</Col><Col id=\"PARAM\">searchOrder</Col></Row><Row><Col id=\"SID\">VAN_DS_SC_0302</Col><Col id=\"EVENT_NAME\">ON_ACTIVATE</Col><Col id=\"PARAM\">searchOrder</Col></Row><Row><Col id=\"SID\">VAN_DS_SC_0311</Col><Col id=\"EVENT_NAME\">ON_ACTIVATE</Col><Col id=\"PARAM\">searchOrder</Col></Row><Row><Col id=\"SID\">VAN_DS_SC_0312</Col><Col id=\"EVENT_NAME\">ON_ACTIVATE</Col><Col id=\"PARAM\">searchOrder</Col></Row><Row><Col id=\"SID\">VAN_DS_SC_0312</Col><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col></Row><Row><Col id=\"EVENT_NAME\">GRID_RESIZE</Col><Col id=\"PARAM\">-1</Col><Col id=\"SID\">VAN_DS_SC_0313</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_session", this);
            obj._setContents("<ColumnInfo><Column id=\"userKey\" type=\"STRING\" size=\"256\"/><Column id=\"userID\" type=\"STRING\" size=\"256\"/><Column id=\"glnCode\" type=\"STRING\" size=\"256\"/><Column id=\"mbcoType\" type=\"STRING\" size=\"256\"/><Column id=\"companyName\" type=\"STRING\" size=\"256\"/><Column id=\"userName\" type=\"STRING\" size=\"256\"/><Column id=\"commanyType\" type=\"STRING\" size=\"256\"/><Column id=\"lastLoginDt\" type=\"STRING\" size=\"256\"/><Column id=\"userType\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_gln", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_authorityWorkplaceLiq", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NA_TRPL_C\">8801099000016</Col><Col id=\"CLNTNM\">[8801099000016] 대상에프앤에프(주)</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000023</Col><Col id=\"CLNTNM\">[8801099000023] 대상에프앤에프(주)동부지점</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000030</Col><Col id=\"CLNTNM\">[8801099000030] 대상에프앤에프(주)서부지점</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000047</Col><Col id=\"CLNTNM\">[8801099000047] 대상에프앤에프(주)남부지점(안양)</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000054</Col><Col id=\"CLNTNM\">[8801099000054] 대상에프앤에프(주)남부지점(강원)</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000061</Col><Col id=\"CLNTNM\">[8801099000061] 대상에프앤에프(주)대전지점</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000078</Col><Col id=\"CLNTNM\">[8801099000078] 대상에프앤에프(주)광주지점</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000085</Col><Col id=\"CLNTNM\">[8801099000085] 대상에프앤에프(주)대구지점</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000092</Col><Col id=\"CLNTNM\">[8801099000092] 대상에프앤에프(주)부산지점</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000108</Col><Col id=\"CLNTNM\">[8801099000108] 대상에프앤에프(주)신선지점</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000115</Col><Col id=\"CLNTNM\">[8801099000115] 대상에프앤에프(주)지호상사</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000122</Col><Col id=\"CLNTNM\">[8801099000122] 대상에프앤에프(주)청원유통</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000139</Col><Col id=\"CLNTNM\">[8801099000139] 대상에프앤에프(주)승진상사</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000146</Col><Col id=\"CLNTNM\">[8801099000146] 대상에프앤에프(주)여주대상</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000153</Col><Col id=\"CLNTNM\">[8801099000153] 대상에프앤에프(주)청정원상사(위탁)</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000160</Col><Col id=\"CLNTNM\">[8801099000160] 대상에프앤에프(주)대성상사</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000177</Col><Col id=\"CLNTNM\">[8801099000177] 대상에프앤에프(주)대상위탁상사</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000184</Col><Col id=\"CLNTNM\">[8801099000184] 대상에프앤에프(주)청정원상사(홍성)</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000191</Col><Col id=\"CLNTNM\">[8801099000191] 대상에프앤에프(주)홍성위탁</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000207</Col><Col id=\"CLNTNM\">[8801099000207] 대상에프앤에프(주)해송유통</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000214</Col><Col id=\"CLNTNM\">[8801099000214] 대상에프앤에프(주)청정원태안위탁</Col></Row><Row><Col id=\"NA_TRPL_C\">8801099000221</Col><Col id=\"CLNTNM\">[8801099000221] 대상에프앤에프(주)송암상사</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_alcoholic_drink_biz_place", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;


            

        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("escm");
            this.set_version("");
            this.set_tracemode("new");
            this.set_themeid("escm.xtheme");
            this.set_addcookietovariable("true");
            this.set_loadingimage("URL('theme://images/loading.gif')");
            this.set_httptimeout("900");

            if (this._is_attach_childframe)
            	return;

            // frame
            var mainframe = this.createMainFrame("mainframe", "absolute", "0", "0", "1010", "651", null, null, this);
            mainframe.set_resizable("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_openalign("center middle");
            mainframe.set_openstatus("normal");
            mainframe.set_titletext("하나로 eSCM");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray
            var tray = null;

        };
        

        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("childframe", "absolute", null, null, null, null, null, null, "", this);
            this.addChild(obj.name, obj);
            this.frame = obj;
            obj.set_formurl(application._quickview_formurl);
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj = null;
        };
        
        this.on_initEvent = function()
        {

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
        
        // script Compiler
        this.registerScript("escm.xadl", function() {
        this.afrm_VFrameSet0 = "";       		//최상단 VFrame 절대경로
        this.afrm_HFrameSet0 = "";				//최상단 HFrame 절대경로
        this.afrm_LoginFrame = "";       		//LoginFrame 절대경로
        this.afrm_TopFrame   = "";       	    //TopFrame 절대경로
        this.afrm_FrameSet   = "";	     		//FrameSet0 절대경로
        this.afrm_MDIFrame   = "";      		//MDIFrame  절대경로
        this.afrm_PotalFrame = "";              
        this.afrm_VFrameSet1 = "";

        
        // == 인증서 정책  관련 		===================================== //
        // -- 기업/기관 범용 OID 모음
        var FIRST_COMP_CERT_POLICIES = "1 2 410 200012 1 1 3:전자거래범용(기업용)|1 2 410 200004 5 1 1 7:전자거래범용(기업용)|1 2 410 200005 1 1 5:전자거래범용(기업용)|1 2 410 200004 5 2 1 1:전자거래범용(기업용)|1 2 410 200004 5 4 1 2:전자거래범용(기업용)|1 2 410 200004 5 3 1 1:전자거래범용(기관용)|1 2 410 200004 5 3 1 2:전자거래범용(기업용)|";
        //-- 개인 범용 OID 모음
        var FIRST_INDI_CERT_POLICIES = "1 2 410 200012 1 1 1:전자거래범용(개인용)|1 2 410 200004 5 1 1 5:전자거래범용(개인용)|1 2 410 200005 1 1 1:전자거래범용(개인용)|1 2 410 200004 5 2 1 2:전자거래범용(개인용)|1 2 410 200004 5 4 1 1:전자거래범용(개인용)|1 2 410 200004 5 3 1 9:전자거래범용(개인용)|";
        //-- 개인 + 기업/기관 범용 OID 모음
        var GENERAL_PURPOSE_CERT_POLICIES = FIRST_COMP_CERT_POLICIES + FIRST_INDI_CERT_POLICIES;
        // 보고자하는 인증서 정책 모음. 
        var POLICIES = FIRST_COMP_CERT_POLICIES + FIRST_INDI_CERT_POLICIES; 

        // 서명시 필요한 Config 조절.
        // 서명 생성시 인증서 포함 여부, 0 : 서명자 인증서만 포함.(기본), 1 : 서명자 & CA 인증서 포함.
        var INC_CERT_SIGN 		= 0;
        // 서명 생성시 서명시간 포함 여부, 0 : 미포함, 1 : 포함(기본)
        var INC_SIGN_TIME_SIGN	= 0;
        // 서명 생성시 CRL 인증서 포함 여부, 0 : 미포함 (기본), 1 : 포함, 
        var INC_CRL_SIGN		= 0;
        // 서명 생성시 원본데이타 포함 여부 , 0 : 미포함, 1 : 포함(기본)
        var INC_CONTENT_SIGN 	= 1;

        // 인증서 검증에 필요한 Config 조절
        // 사용자 인증서 검증 조건, 0 : CRL 체크 안함. 1 : 현재시간기준으로 유효한 CRL 사용(기본), 2 : 현재 시간기준으로 유효한 CRL 못 구할 시 이전 CRL 사용.
        var USING_CRL_CHECK		= 1;
        // CA 인증서 검증 조건, 0 : ARL 체크 안함. 1 : 현재시간기준으로 유효한 ARL 사용(기본), 2 : 현재 시간기준으로 유효한 CRL 못 구할 시 이전 ARL 사용.
        var USING_ARL_CHECK		= 1;

        

        
        //어플리케이션 처음구동( form의 form_onload와 같은기능)
        this.application_onload = function(obj,e)
        {
        	//개발시 편의를 위해 사용된 변수
        	//런쳐구동시 false처리
        	this.gv_quickviewmode = false;

        	//각 프레임 바라볼수 있도록. 화면에서는  this-> application으로 변경해서 호출하여 사용
        	//예) application.afrm_VFrameSet0.form.grd_list
        	this.afrm_VFrameSet0 = application.mainframe.VFrameSet0;
        	this.afrm_HFrameSet0 = application.mainframe.VFrameSet0.HFrameSet0;
        	this.afrm_TopFrame   = application.mainframe.VFrameSet0.TopFrame;
        	this.afrm_LeftFrame  = application.mainframe.VFrameSet0.HFrameSet0.LeftFrame;
        	this.afrm_PotalFrame = application.mainframe.VFrameSet0.HFrameSet0.PotalFrame;
        	this.afrm_VFrameSet1 = application.mainframe.VFrameSet0.HFrameSet0.VFrameSet1;
        	this.afrm_FrameSet   = application.mainframe.VFrameSet0.HFrameSet0.VFrameSet1.FrameSet0;
        	this.afrm_MDIFrame   = application.mainframe.VFrameSet0.HFrameSet0.VFrameSet1.MdiFrame;
        	//접속주소 리턴
        	var adlUrl = application.xadl;	
        	//trace(adlUrl);
        	
        	var checkServer = adlUrl.substring(0,4);
        	
        	if(checkServer.indexOf('file') != -1 || adlUrl.indexOf('localhost') != -1){//로컬
        		application.gv_serverType = 'LOCAL';
        		application.gv_version = 'pass';
        		iconUrl = "http://localhost:8080/nhvan/escm/nhvan.ico";
        	}else{ //운영서버 or 개발서버
        	
        		 //http://www.nhescm.co.kr/escm/escm.xadl.js 운영
        		 //http://121.156.58.242/escm/escm.xadl.js 개발
        		
        		 var devMode = false;
        		
        		 if(adlUrl.indexOf('121.156.58.242') != -1){ 
        			devMode = true;
        		 }else if(adlUrl.indexOf('www.nhescm.co.kr') != -1){ 
        			devMode = false;		 
        		 }else{ 
        			this.alert('주소설정이 잘못되었습니다.\n관리자에게 문의하세요.');
        			return;
        		 }
        		 
        		 var domain = "";
        		 
        		 if(devMode){ //개발
        			domain = "http://121.156.58.242";
        			application.gv_serverType = 'DEV';
        		 }else{	//운영	
        			domain = "https://www.nhescm.co.kr"; 
        			application.gv_serverType = 'ADMIN';
        		 }
        		 
        		 application.services['svc'].url 	= domain + "/nhvan/";
        		 application.gv_server_url       	= domain + "/nhvan/";
        		 application.gv_chartJS_url      	= domain + "/escm/chart/rMateChartH5";
        		 application.gv_chartHtml_url    	= domain + "/escm/chart/rMateChartH5/Html/nexacroChartH5.html";
        		 application.gv_ozViewer_url     	= domain + "/nhvan/oz/ozViewer.nh";
        		 application.gv_serviceHtml_url  	= domain + "/";
        		 application.gv_userId = "";
        		 application.gv_redirect_url        = domain + "/escm/index.html";		 
        		 iconUrl = domain+"/escm/nhvan.ico";		 
        		 
        		 if(devMode){ //개발
        			application.services['svc_admin'].url = domain + ":8080/nhvanadmin/";
        			application.gv_serverAdmin_url        = domain + ":8080/nhvanadmin/";
        		 }else{//운영
        			application.services['svc_admin'].url = domain + ":8443/nhvanadmin/";
        			application.gv_serverAdmin_url        = domain + ":8443/nhvanadmin/";
        		 }
        	}
        	
        	
        	/*********인증서 설치 여부 체크 ******************/
        // 	var nRet;
        // 	// 모든 Condition 설정.
        // 	POLICIES += "1 2 410 200004 5 2 1 6 460:농협하나로유통 특법인 인증서|"
        // 	try
        // 	{
        // 		var objTs = new Plugin();
        // 		objTs.set_classid("{55D9860A-AB9C-44A1-BB74-75AF7F805333}");
        // 		objTs.set_mimetype("application/x-shockwave-flash");
        // 		objTs.init("objTs", "absolute", 0, 0, 0, 0, null, null);
        // 		alert(objTs.isLoaded());
        // 		objTs.show();
        // 
        // 		nRet = objTs.callMethod("SetConfig","test", CA_LDAP_INFO, CTL_INFO, POLICIES, 
        // 								INC_CERT_SIGN, INC_SIGN_TIME_SIGN, INC_CRL_SIGN, INC_CONTENT_SIGN,
        // 								USING_CRL_CHECK, USING_ARL_CHECK);
        // 								
        // 		trace("SetConfig :: nRet :: " + nRet);
        // 		
        // 	}
        // 	catch(e)
        // 	{
        // 		alert("인증서 설치가 제대로 되지 않았습니다. \nTSToolkit v2.0.6.4를 설치하여 주십시오.");
        // 		//화면이동
        // 		location.href = "http://localhost:8080/nhvan/escm/QuickView.html?formname=_test%3A%3Ainstall.xfdl";
        // 		return false;
        // 	}
        // 	
        // 	try
        // 	{
        // 		var nRet, rvalue, signedti;
        // 		rtn = true;
        // 		var objTsXml = new Plugin();
        // 		objTsXml.set_classid("{BBC1A21F-05A2-44ED-B67E-E7C762F0BE23}");
        // 		objTsXml.init("objTsXml", "absolute", 0, 0, 0, 0, null, null);
        // 		objTsXml.set_mimetype("application/x-shockwave-flash");
        // 		objTsXml.init("objTs", "absolute", 0, 0, 0, 0, null, null);
        // 		alert(objTsXml.isLoaded());
        // 		objTs.show();
        // 		nRet = objTsXml.callMethod("init");//{BBC1A21F-05A2-44ED-B67E-E7C762F0BE23}
        // 		
        // 		trace("init :: nRet :: " + nRet);
        // 	}
        // 	catch(e)
        // 	{	
        // 		alert("인증서 설치가 제대로 되지 않았습니다. \nTSXMLToolkit v3.0.0.6를 설치하여 주십시오.");
        // 		//화면이동
        // 		location.href = "http://localhost:8080/nhvan/escm/QuickView.html?formname=_test%3A%3Ainstall.xfdl";
        // 		return false;
        // 	}
        	
        	/*********로그인 여부 체크************/
        	var svcID = "retrieveSessionIs";
        	var strURL = "svc::rest/pt/retrieveSessionIs" + "?userKey="+application.gv_userKey;
        	var inData = "";
        	var outData = "gds_session=ds_session";
        	var otherArg = "";
        	var isHttpAsync = true;
        	application.transaction(svcID, strURL, inData, outData, otherArg, "adl_callback", isHttpAsync, 2);
        		
        	if(system.navigatorname!="nexacro")
        	{
        		if(system.navigatorname=="IE" && (system.navigatorversion=="8" || system.navigatorversion=="9") )
        		{
        			
        		}
        		else
        		{
        			window.history.pushState(null, null, location.href); 

        			window.onpopstate = function(event) { 
        				window.history.go(1); 
        			};
        			window.onbeforeunload = function(e) 
        			{ 
        				//return 'message';
        			};
        		}
        	}
        	else 
        	{
        		//svcID = "retrieveSessionIs"
        	}
        	
        	
        	//아이콘 생성
        	var iconUrl = '';
        	var headTag = window.document.getElementsByTagName("head")[0];
        	var headChildNodes = headTag.childNodes;
        	var appendIndex = 0;
        	for(var i=0 ; i<headTag.childNodes.length ; i++){
        		var nodeName = headChildNodes[i].nodeName;
        		if(nodeName.toLowerCase().indexOf('script') != -1){
        			appendIndex = i;
        			break;
        		}
        	}	
        	var linkEle = document.createElement("link");
        	
        	
        	linkEle.setAttribute("href", iconUrl);
        	linkEle.setAttribute("rel","shortcut icon");
        	headTag.insertBefore(linkEle, headChildNodes[appendIndex]);
        	
        	this.replaceDatasum(); 
        }

        
        this.adl_callback = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0)
        	{
        // 		if(application.gv_quickviewmode == false){
        // 			if(ErrorCode == -100) {
        // 				this.gfn_getMessage("alert", ErrorMsg);
        // 				this.gfn_clearGlobal();
        // 				return;
        // 			}
        // 		}
        		trace("SessionBox Check오류.");
        		this.afrm_VFrameSet0.LoginFrame.set_formurl("frame::Intro.xfdl");
        	}
        	else
        	{
        		
        		if(application.gds_session.rowcount > 0)
        		{
        			this.afrm_VFrameSet0.set_separatesize("0,65,*");
        			this.afrm_HFrameSet0.set_separatesize("0,0,*");
        			this.afrm_VFrameSet0.LoginFrame.set_formurl("frame::Intro.xfdl");
        			application.gv_userTPC = "user";
        			application.gv_userKey         = this.nvl(application.gds_session.getColumn(0, "userKey"), "");
        			application.gv_userId          = this.nvl(application.gds_session.getColumn(0, "userID"), "");
        			application.gv_glnCode         = this.nvl(application.gds_session.getColumn(0, "glnCode"), "");
        			application.gv_mbcoType        = this.nvl(application.gds_session.getColumn(0, "mbcoType"), "");
        			application.gv_companyName     = this.nvl(application.gds_session.getColumn(0, "companyName"), "");
        			application.gv_userName        = this.nvl(application.gds_session.getColumn(0, "userName"), "");
        			application.gv_companyType     = this.nvl(application.gds_session.getColumn(0, "commanyType"), "");
        			application.gv_lastLoginDt     = this.nvl(application.gds_session.getColumn(0, "lastLoginDt"), "");
        			application.gv_userType        = this.nvl(application.gds_session.getColumn(0, "userType"), "");
        			application.gv_firstLoginYn    = this.nvl(application.gds_session.getColumn(0, "firstLoginYn"), "");
        			application.gv_userCvDsc       = this.nvl(application.gds_session.getColumn(0, "userCvDsc"), "");
        			application.gv_userStatus      = this.nvl(application.gds_session.getColumn(0, "userStatus"), "");
        			application.gv_userAuth        = this.nvl(application.gds_session.getColumn(0, "userAuth"), "");
        			application.gv_pwOverTermYn    = this.nvl(application.gds_session.getColumn(0, "pwOverTermYn"), "");
        			application.gv_hoffApvYn       = this.nvl(application.gds_session.getColumn(0, "hoffApvYn"), "");
        			application.gv_naUsrSysKdc     = this.nvl(application.gds_session.getColumn(0, "naUsrSysKdc"), "");
        			application.gv_svcStatus	   = this.nvl(application.gds_session.getColumn(0, "svcStatus"), "");
        			application.gv_bizNumber	   = this.nvl(application.gds_session.getColumn(0, "bizNumber"), "");
        			application.gv_changeMb		   = this.nvl(application.gds_session.getColumn(0, "CHANGE_MB"), "");
        			application.gv_changeElt       = this.nvl(application.gds_session.getColumn(0, "CHANGE_ELT"), "");
        			application.gv_upGlnCode       = this.nvl(application.gds_session.getColumn(0, "upGlnCode"), "");
        			application.gv_billingUserID   = this.nvl(application.gds_session.getColumn(0, "billingUserID"), "");
        			application.gv_billingUserName = this.nvl(application.gds_session.getColumn(0, "billingUserName"), "");
        			application.gv_noAuthMenuGroup = this.nvl(application.gds_session.getColumn(0, "noAuthMenuGroup"), "");
        			application.gv_userSystemCode = this.nvl(application.gds_session.getColumn(0, "userSystemCode"), "");
        			application.gv_weakPwYn = this.nvl(application.gds_session.getColumn(0, "weakPwYn"), "");
        			application.gv_trplDtlTpc = this.nvl(application.gds_session.getColumn(0, "trplDtlTpc"), "");
        		}
        		else
        		{	
        			this.afrm_VFrameSet0.LoginFrame.set_formurl("frame::Intro.xfdl");
        		}
        	}
        }
        /**
         * @class 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
         * @param Val : 체크할 문자열(예 : null 또는 undefined 또는 "" 또는 "abc")
         * @return Boolean,	Val이 undefined, null, NaN, "", Array.length = 0인 경우 = true
         *					이외의 경우 = false
         */  
        this.isNull = function (val)
        {
        	if (new String(val).valueOf() == "undefined"){
        		return true;
        	}
        	if (val == null){
        		return true;
        	}
        	if (("x" + val == "xNaN") && (new String(val.length).valueOf() == "undefined")){
        		return true;
        	}
        	if (val.length == 0){
        		return true;
        	}
        	return false;
        }

        this.nvl = function(val,val2)
        {
            var rtnVal = (this.isNull(val)) ? val2 : val;
            return rtnVal;
        }

        this.application_onerror = function(obj,e)
        {
        	var adlUrl = application.xadl;

        	// 글로벌 변수 통신 결과 셋팅
        	this.gv_httpcode = e.errorcode;
        		
        	if (0 != e.errorcode) {
        	
        		if( e.errorcode == "-2147418039" ){
        			return true;
        		}
        	
        		if (12029 == e.statuscode) {
        			alert("Server Status Code is (" + e.statuscode + ")");
        			return true;
        		} else {
        			 var strErrMsg  = "\n";
        			 strErrMsg += "=========== Application On Error ===========\n";
        			 strErrMsg += "StatusCode : " + e.statuscode + " \n";
        			 strErrMsg += "ErrorCode  : " + e.errorcode + " \n";
        			 strErrMsg += "Errormsg   : " + e.errormsg + " \n";
        			 strErrMsg += "errorobj   : " + e.errorobj + " \n";
        			 strErrMsg += "eventid    : " + e.eventid + " \n";		//onerror
        			 strErrMsg += "locationuri: " + e.locationuri + " \n";//""
        			 strErrMsg += "requesturi : " + e.requesturi + " \n";//""			
        			 trace("error", strErrMsg);
        		}
            }
        }

        //그리드에서 Sum처리할때 String타입도 가능하도록 처리
        this.replaceDatasum = function() 
        { 
        	var _pDataset = nexacro.Dataset.prototype; 
        	_pDataset._getSum = function (colidx, start, end, pivotidx, coltype) 
        	{ 
        		var view = this._viewRecords; 
        		var rowData; 
        		var sum = 0; 
        		var i = start; 

        		if (coltype != 4) { 
        			
        			function _getSum_loop(pthis) 
        			{ 
        				if (i < end) { 
        					rowData = view[i]; 
        					if (rowData._rtype == 16) { // ROWTYPE_GROUP  
        						i++; 
        						return false; 
        					} 
        					
        					var v = rowData[colidx]; 
        					if (!nexacro._isNumber(v)) { 

        						if(v == null || v == undefined || v == "") { 
        							v = 0; 
        						} else if(v.indexOf(".")<0) { 
        							v = parseInt(v, 10); 
        							rowData[colidx] = v; 
        						} else { 
        							v = parseFloat(v); 
        							rowData[colidx] = v; 
        						} 

        					} 
        					//if (nexacro._isNumber(rowData[colidx]) && pthis._checkRowData(rowData)) 
        					if (pthis._checkRowData(rowData)) { 
        						sum += (+v); 
        					} 
        				
        					i++; 
        					return false; 
        				} 
        		
        				return true; 
        			} 
        		
        			while (true) { 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        				if (_getSum_loop(this)) break; 
        			} 
        		} else { 
        			sum = new nexacro.Decimal; 

        			function _getSumDecimal_loop( pthis ) 
        			{ 
        				if ( i < end ){ 
        					rowData = view[i]; 
        					if ( (rowData[colidx] != null) && pthis._checkRowData( rowData ) ) { 
        						sum.addDecimal( rowData[colidx] ); 
        					} 
        					i++; 
        					return false; 
        				} 
        				return true; 
        			} 
        	
        			while (true) { 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        				if (_getSumDecimal_loop(this)) break; 
        			} 
        		} 
        		if (sum instanceof nexacro.Decimal) { 
        			return sum.isNaN() ? 0 : sum; 
        		} 

        		return (+sum) != (+sum) ? 0 : sum; 
        	}; 
        	delete _pDataset; 
        } 
        });


        this.loadTypedefition();
        this.loadScreenInfo();
        this.loadTheme("escm.xtheme");

this.loadCss("css::common.css");
this.loadCss("css::workFrame.css");
this.loadCss("css::topFrame.css");
this.loadCss("css::leftFrame.css");
this.loadCss("css::mdi.css");
this.loadCss("css::main.css");

        this.loadIncludeScript("escm.xadl");
    };
}
)();
