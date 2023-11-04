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
                this.set_name("VAN_DS_SC_0410");
                this.set_titletext("공급처 차량관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_car", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PHD_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"SPYPL_VHC_PHD_IDVD_NO\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"VHCNO\" type=\"string\" size=\"32\"/><Column id=\"PHD_DVY_CAFFNM\" type=\"string\" size=\"32\"/><Column id=\"TELNO\" type=\"string\" size=\"32\"/><Column id=\"UYN\" type=\"string\" size=\"32\"/><Column id=\"DEL_YN\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_searchWord", "absolute", "294", "10", "151", "21", null, null, this.div_search);
            obj.set_taborder("71");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_searchType", "absolute", "94", "10", "200", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_searchType_innerdataset = new Dataset("rdo_searchType_innerdataset", this.div_search.rdo_searchType);
            rdo_searchType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">차량번호</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">기사명</Col></Row></Rows>");
            obj.set_innerdataset(rdo_searchType_innerdataset);
            obj.set_taborder("72");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("Static00", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("73");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "923", "72", null, "15", "15", null, this);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "923", "108", null, "5", "15", null, this);
            obj.set_taborder("13");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("14");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "41", "110", "29", null, null, this.div_list);
            obj.set_taborder("116");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "69", "110", "29", null, null, this.div_list);
            obj.set_taborder("117");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "109", "41", null, "29", "0", null, this.div_list);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "109", "69", null, "29", "0", null, this.div_list);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "300", "41", "110", "29", null, null, this.div_list);
            obj.set_taborder("122");
            obj.set_text("기사명");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "300", "69", "110", "29", null, null, this.div_list);
            obj.set_taborder("123");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_vhcno", "absolute", "118", "45", "166", "21", null, null, this.div_list);
            obj.set_taborder("125");
            obj.set_cssclass("WF_Essential");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "924", "37", null, "5", "0", null, this.div_list);
            obj.set_taborder("126");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "139", null, null, "0", "0", this.div_list);
            obj.set_taborder("133");
            obj.set_binddataset("ds_car");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"121\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"106\"/><Column size=\"82\"/><Column size=\"123\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"개별번호\"/><Cell col=\"3\" text=\"거래처코드\"/><Cell col=\"4\" text=\"거래처명\"/><Cell col=\"5\" text=\"차량번호\"/><Cell col=\"6\" text=\"기사명\"/><Cell col=\"7\" text=\"연락처\"/><Cell col=\"8\" text=\"사용여부\"/><Cell col=\"9\" text=\"삭제여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PHD_NA_BZPLC\"/><Cell col=\"2\" text=\"bind:SPYPL_VHC_PHD_IDVD_NO\"/><Cell col=\"3\" text=\"bind:NA_TRPL_C\"/><Cell col=\"4\" text=\"bind:CLNTNM\"/><Cell col=\"5\" text=\"bind:VHCNO\"/><Cell col=\"6\" text=\"bind:PHD_DVY_CAFFNM\"/><Cell col=\"7\" text=\"bind:TELNO\"/><Cell col=\"8\" displaytype=\"checkbox\" text=\"bind:UYN\"/><Cell col=\"9\" displaytype=\"checkbox\" text=\"bind:DEL_YN\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_phd_dvy_caffnm", "absolute", "418", "45", "151", "21", null, null, this.div_list);
            obj.set_taborder("138");
            obj.set_cssclass("WF_Essential");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_rowUpdate", "absolute", null, "15", "82", "21", "55", null, this.div_list);
            obj.set_taborder("139");
            obj.set_text("행추가/수정");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_clear", "absolute", null, "15", "53", "21", "0", null, this.div_list);
            obj.set_taborder("140");
            obj.set_text("CLEAR");
            this.div_list.addChild(obj.name, obj);
            obj = new Combo("cbo_num01", "absolute", "118", "73", "51", "21", null, null, this.div_list);
            this.div_list.addChild(obj.name, obj);
            var cbo_num01_innerdataset = new Dataset("cbo_num01_innerdataset", this.div_list.cbo_num01);
            cbo_num01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row><Row><Col id=\"codecolumn\">016</Col><Col id=\"datacolumn\">016</Col></Row><Row><Col id=\"codecolumn\">017</Col><Col id=\"datacolumn\">017</Col></Row><Row><Col id=\"codecolumn\">018</Col><Col id=\"datacolumn\">018</Col></Row><Row><Col id=\"codecolumn\">019</Col><Col id=\"datacolumn\">019</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">031</Col><Col id=\"datacolumn\">031</Col></Row><Row><Col id=\"codecolumn\">032</Col><Col id=\"datacolumn\">032</Col></Row><Row><Col id=\"codecolumn\">033</Col><Col id=\"datacolumn\">033</Col></Row><Row><Col id=\"codecolumn\">041</Col><Col id=\"datacolumn\">041</Col></Row><Row><Col id=\"codecolumn\">042</Col><Col id=\"datacolumn\">042</Col></Row><Row><Col id=\"codecolumn\">043</Col><Col id=\"datacolumn\">043</Col></Row><Row><Col id=\"codecolumn\">051</Col><Col id=\"datacolumn\">051</Col></Row><Row><Col id=\"codecolumn\">052</Col><Col id=\"datacolumn\">052</Col></Row><Row><Col id=\"codecolumn\">053</Col><Col id=\"datacolumn\">053</Col></Row><Row><Col id=\"codecolumn\">054</Col><Col id=\"datacolumn\">054</Col></Row><Row><Col id=\"codecolumn\">055</Col><Col id=\"datacolumn\">055</Col></Row><Row><Col id=\"codecolumn\">061</Col><Col id=\"datacolumn\">061</Col></Row><Row><Col id=\"codecolumn\">062</Col><Col id=\"datacolumn\">062</Col></Row><Row><Col id=\"codecolumn\">063</Col><Col id=\"datacolumn\">063</Col></Row><Row><Col id=\"codecolumn\">064</Col><Col id=\"datacolumn\">064</Col></Row></Rows>");
            obj.set_innerdataset(cbo_num01_innerdataset);
            obj.set_taborder("141");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");
            obj = new Static("Static33", "absolute", "169", "73", "9", "21", null, null, this.div_list);
            obj.set_taborder("143");
            obj.set_text("-");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "231", "73", "9", "21", null, null, this.div_list);
            obj.set_taborder("144");
            obj.set_text("-");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_processingNumber", "absolute", "397", "16", null, "21", "137", null, this.div_list);
            obj.set_taborder("147");
            obj.set_usedecorate("true");
            obj.style.set_align("right middle");
            this.div_list.addChild(obj.name, obj);
            obj = new CheckBox("chk_delYn", "absolute", "687", "74", "46", "19", null, null, this.div_list);
            obj.set_taborder("148");
            obj.set_text("삭제");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_font("9 Gulim");
            this.div_list.addChild(obj.name, obj);
            obj = new CheckBox("chk_userYn", "absolute", "418", "74", "138", "19", null, null, this.div_list);
            obj.set_taborder("149");
            obj.set_text("사용");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_font("9 Gulim");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_hidden_updateYn", "absolute", null, "108", "74", "21", "457", null, this.div_list);
            obj.set_taborder("150");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", null, "98", "75", "41", "1", null, this.div_list);
            obj.set_taborder("151");
            obj.set_text("41");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_hidden_updateYn00", "absolute", null, "106", "74", "21", "79", null, this.div_list);
            obj.set_taborder("152");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "569", "69", "110", "29", null, null, this.div_list);
            obj.set_taborder("118");
            obj.set_text("삭제여부");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("153");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("mae_num02", "absolute", "178", "73", "53", "21", null, null, this.div_list);
            obj.set_taborder("154");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("mae_num03", "absolute", "240", "73", "53", "21", null, null, this.div_list);
            obj.set_taborder("155");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "922", "197", null, "40", "15", null, this);
            obj.set_taborder("15");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("21");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "36", "408", null, this);
            obj.set_taborder("23");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "116", null, this);
            obj.set_taborder("24");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("공급처 차량관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0410.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0410.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var dataDArr1 = new Array('PHD_NA_BZPLC'
        						,'SPYPL_VHC_PHD_IDVD_NO'
        						,'NA_TRPL_C'
        						,'CLNTNM'
        						,'VHCNO'
        						,'PHD_DVY_CAFFNM'
        						,'TELNO'
        						,'UYN'
        						,'DEL_YN'
        						);
        						
        var dataDArr = new Array('VHCNO'
        						,'PHD_DVY_CAFFNM'
        						,'TELNO'
        						,'UYN'
        						,'DEL_YN'
        						);						

        var carArr = new Array('edt_vhcno'
        						,'edt_phd_dvy_caffnm'
        						,''			
        						,'chk_userYn'
        						,'chk_delYn'
        					);

        /* form load */
        this.form_onload = function(obj,e)
        {	
        	this.gfn_setInitForm(obj,e);	
        }	
        	
        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {		
        	this.btnDisable(this.btn_save);
        	
        	//권한사업장 표시 여부(1:본사)	
        	if(application.gv_mbcoType != '1'){
        		this.div_auth.visible = false;
        	}
        	
        	this.div_list.cbo_num01.set_index(0);
        	//처리대상건수
        	this.div_list.sta_processingNumber.set_text(this.gfn_setRowCount(this.ds_car.rowcount));
        	//그리드
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	//그리드클릭 이벤트 등록
        	this.div_list.grd_master.addEventHandler("oncellclick", this.grd_afterFnc, this);
        	//행추가인지 수정인지 구분값
        	this.div_list.edt_hidden_updateYn.set_value("");
        	
        	//페이지 로딩시 바로 조회.
        	//this.fn_search();
        };

        /*Grid Init*/
        this.fn_init = function(){
        	this.ds_car.clearData();
        	this.div_list_btn_clear_onclick(); //입력정보 init
        }

        /* 입력정보 초기화 */
        this.div_list_btn_clear_onclick = function(obj,e)
        {
        	this.div_list.edt_vhcno.set_value('');
        	this.div_list.edt_phd_dvy_caffnm.set_value('');
        	this.div_list.cbo_num01.set_value('010');
        	this.div_list.mae_num02.set_value('');
        	this.div_list.mae_num03.set_value('');
        	this.div_list.chk_userYn.set_value('0');
        	this.div_list.chk_delYn.set_value('0');
        	
        }

        /* search */
        this.fn_search = function(){
        	//행추가인지 수정인지 구분값
        	this.div_list.edt_hidden_updateYn.set_value("");	
        	
        	this.fn_init();
        	
        	var searchType = this.gfn_nullToEmpty(this.div_search.rdo_searchType.value); //조회구분(1.차량명, 2:기사명)
        	var searchWord = this.gfn_nullToEmpty(this.div_search.edt_searchWord.value); //조회단어
        	
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var param = "searchType="+searchType+
        				" searchWord="+searchWord+
        				" TRPL_C=" + trplC;
        				
        	trace("##MASTER##PARAM##->"+param);	
        		
        	var sSvcID        = "retrieveCarList";//통신아이디
        	var sURL          = "svc::rest/reserve/retrieveCarList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_car=ds_car";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        	//조회후 권한사업장 비활성화
        	//this.Div00.cbo_authorityWorkplace.set_enable(false);
        }

        /* 조회버튼 클릭시 */
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search();	
        }

        /* 저장버튼 클릭시 */
        this.btn_save_onclick = function(obj,e)
        {	
        	if(this.fn_save_validation()){
        		var dsParams = "ds_car=ds_car:U";
        		
        		var sSvcID        = "saveCar";//통신아이디
        		var sURL          = "svc::/rest/reserve/saveCar";// 호출할 서버 페이지 주소
        		var sInDatasets   = dsParams;//보내는데이터셋
        		var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = "";// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	
        	}	
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "retrieveCarList"){
        			
        			//trace(this.ds_Rcv_M.saveXML());
        										
        			//처리대상건수
        			this.div_list.sta_processingNumber.set_text(this.gfn_setRowCount(this.ds_car.rowcount));
        			
        			if(this.ds_car.rowcount == 0){				
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}
        		}
        		
        		if(svcID == "saveCar"){
        			this.gfn_getMessage("alert", "result.message.save.success");
        			this.fn_search();
        		}
        	}
        }

        this.fn_key_validation = function()
        {
        	if(this.gfn_isNull(this.div_list.edt_vhcno.value) || this.gfn_length(this.div_list.edt_vhcno.value) < 7){		
        		//정확한 정보입력 후 행추가/수정 처리하세요.	
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0410.view.save.validation.confirm");
        		if(this.div_list.edt_vhcno.enable == true)this.div_list.edt_vhcno.select();
        		return false;
        	}
        	
        	return true;	
        }

        this.fn_save_validation = function()
        {	
        	//alert(this.gfn_length(this.div_list.edt_vhcno.text));
        	
        	if(this.gfn_isNull(this.div_list.edt_vhcno.value) || this.gfn_length(this.div_list.edt_vhcno.value) < 7){
        		//차량번호를 7자리 이상 입력해 주세요.		
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0410.view.save.validation.vhcno");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.div_list.edt_phd_dvy_caffnm.value)){
        		//기사명을 입력해 주세요.
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0410.view.save.validation.caffnm");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.div_list.mae_num02.value) || this.gfn_length(this.div_list.mae_num02.value) < 4){
        		//중간 연락처를 4자리 입력해 주세요.
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0410.view.save.validation.tel1");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.div_list.mae_num03.value) || this.gfn_length(this.div_list.mae_num03.value) < 4){
        		//끝자리 연락처 4자리 입력해 주세요.
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0410.view.save.validation.tel2");
        		return false;
        	}
        		
        	return true;
        	
        }

        this.grd_afterFnc = function(obj,e)
        {
        /*
        	if(e.reason == 51)
        	{		
        		this.ds_car.set_enableevent(false);
        		this.ds_car.set_rowposition(-1);
        		this.ds_car.set_enableevent(true);
        		return;
        	}
        */	
        	this.div_list.edt_vhcno.set_value(this.ds_car.getColumn(this.ds_car.rowposition,"VHCNO"));
           	this.div_list.edt_phd_dvy_caffnm.set_value(this.ds_car.getColumn(this.ds_car.rowposition,"PHD_DVY_CAFFNM"));
           	
           	//연락처가 통으로 들어와 '-' 단위로 스플릿해서 나눠서 넣어줘야함
           	var telno = this.ds_car.getColumn(this.ds_car.rowposition,"TELNO"); 	
           	var lstTelNo = telno.split('-');

        	this.div_list.cbo_num01.set_value(lstTelNo[0]);
        	this.div_list.mae_num02.set_value(lstTelNo[1]);
        	this.div_list.mae_num03.set_value(lstTelNo[2]);
        	
        	this.div_list.chk_userYn.set_value(this.ds_car.getColumn(this.ds_car.rowposition,"UYN"));	
        	this.div_list.chk_delYn.set_value(this.ds_car.getColumn(this.ds_car.rowposition,"DEL_YN"));
        	
        	//행추가인지 수정인지 구분값
        	this.div_list.edt_hidden_updateYn.set_value("update");
        	
        }

        this.div_list_btn_rowUpdate_onclick = function(obj,e)
        {
        	this.fn_isUpdate();
        }

        this.fn_row_validation = function()
        {
        	if(this.gfn_isNull(this.div_list.edt_vhcno.value) || this.gfn_length(this.div_list.edt_vhcno.value) < 7){
        	//정확한 정보입력 후 행추가/수정 처리하세요.	
        	this.gfn_getMessage("alert", "msg.van_ds_sc_0410.view.save.validation.confirm");
        	
        	return false;
        	}
        	
        	return true;
        }    

        this.fn_isUpdate = function(){

        	if(!this.fn_row_validation()) return;
        	if(!this.fn_save_validation()) return;	
        	
        	var bok = "";
        	
        	if(this.div_list.edt_hidden_updateYn.value == 'update'){
        		//bok = application.confirm("수정하시겠습니까 ?");
        		bok = this.gfn_getMessage("alert", "msg.isUpdate");
        		this.fn_rowUpdate();
        	}else{
        		//bok = application.confirm("추가하시겠습니까 ?");
        		bok = this.gfn_getMessage("alert", "msg.isInsert");
        		this.fn_rowInsert();
        	}

        }

        this.fn_rowUpdate = function(){
        	
        	for(var i = 0; i < dataDArr.length; i++){
        		if(dataDArr[i] == 'TELNO'){			
        			var tel = this.div_list.cbo_num01.value + "-" + this.div_list.mae_num02.value + "-" + this.div_list.mae_num03.value;			
        			
        			eval("this.ds_car.setColumn(this.ds_car.rowposition, 'TELNO', '"+tel+"')");
        		}else{
        			eval("this.ds_car.setColumn(this.ds_car.rowposition, '"+dataDArr[i]+"', this.div_list."+carArr[i]+".value)");
        		}	
        	}
        }

        this.fn_rowInsert = function(){
        	var row = this.ds_car.addRow();
        			
        	for(var i = 0; i < dataDArr.length; i++){
        		this.getCompInfo().ds_car.setColumn(row, "PHD_NA_BZPLC", '8808983300108');
        		//this.getCompInfo().ds_car.setColumn(row, "SPYPL_VHC_PHD_IDVD_NO", this.gfn_today("YYYYMMdd")); //개별번호
        		
        		//권한사업장이 있을경우와 없을경우 설정
        		trace("application.gv_mbcoType==>" + application.gv_mbcoType);				
        		
        		if(application.gv_mbcoType == 1){
        			//본사:1 일경우
        			this.getCompInfo().ds_car.setColumn(row, "NA_TRPL_C", this.div_auth.cbo_authorityWorkplace.value);
        			//권한사업장 명
        			this.getCompInfo().ds_car.setColumn(row, "CLNTNM", (this.div_auth.cbo_authorityWorkplace.text).substr(16));
        			
        		}else{
        			//지사:2 일경우
        			this.getCompInfo().ds_car.setColumn(row, "NA_TRPL_C", application.gv_glnCode);
        			this.getCompInfo().ds_car.setColumn(row, "CLNTNM", application.gv_companyName);		
        		}
          
        		if(dataDArr[i] == 'TELNO'){			
        			var tel = this.gfn_nullToEmpty(this.div_list.cbo_num01.value) + "-" + this.gfn_nullToEmpty(this.div_list.mae_num02.value) + "-" + this.gfn_nullToEmpty(this.div_list.mae_num03.value);						
        			
        			eval("this.ds_car.setColumn("+ row +", 'TELNO', '"+tel+"')");
        		}else{		
        			eval("this.ds_car.setColumn("+ row +", '"+dataDArr[i]+"', this.div_list."+carArr[i]+".value)");		}
        	}
        }

        this.getCompInfo = function(){
        	
        	var compInfo = {};
        	compInfo.ds_car = this.ds_car;
        	compInfo.rdo_searchType = this.div_search.rdo_searchType;
        	compInfo.edt_searchWord = this.div_search.edt_searchWord;
        	compInfo.edt_vhcno = this.div_list.edt_vhcno;
        	compInfo.edt_phd_dvy_caffnm = this.div_list.edt_phd_dvy_caffnm;
        	compInfo.cbo_num01 = this.div_list.cbo_num01;
        	compInfo.mae_num02 = this.div_list.mae_num02;
        	compInfo.mae_num03 = this.div_list.mae_num03;	
        	compInfo.chk_userYn = this.div_list.chk_userYn;
        	compInfo.chk_delYn = this.div_list.chk_delYn;
        	return compInfo;
        	
        };
        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_list.btn_rowUpdate.addEventHandler("onclick", this.div_list_btn_rowUpdate_onclick, this);
            this.div_list.btn_clear.addEventHandler("onclick", this.div_list_btn_clear_onclick, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0410.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
