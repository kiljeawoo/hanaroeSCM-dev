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
                this.set_name("VAN_DS_SC_1850");
                this.set_titletext("관심 사업장/상품 등록");
                this._setFormPosition(0,0,801,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_selectList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECK_BOX\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_saveList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECK_BOX\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"INT\" size=\"256\"/><Column id=\"YMD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_locMain", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "282", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "786", "0", "15", "490", null, null, this);
            obj.set_taborder("39");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("58");
            obj.set_cssclass("div_WFSA_Searchbg");
            obj.set_applystyletype("cascade,keep");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("sta_searchType", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_text("설정항목");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_analysis", "absolute", "94", "10", "170", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_analysis_innerdataset = new Dataset("rdo_analysis_innerdataset", this.div_search.rdo_analysis);
            rdo_analysis_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사업장</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품</Col></Row></Rows>");
            obj.set_innerdataset(rdo_analysis_innerdataset);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("sta_location", "absolute", "270", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("지역");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_locMain", "absolute", "349", "10", "200", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_innerdataset("@ds_locMain");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("61");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_save", "absolute", "52.93%", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("24");
            obj.set_binddataset("ds_saveList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"사업장코드\"/><Cell col=\"3\" text=\"사업장명\"/><Cell col=\"4\" text=\"등록일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECK_BOX\"/><Cell col=\"1\" text=\"bind:NO\"/><Cell col=\"2\" text=\"bind:CODE\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:NAME\"/><Cell col=\"4\" text=\"bind:YMD\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_select", "absolute", "0", "42", null, null, "52.29%", "0", this.div_list);
            obj.set_taborder("25");
            obj.set_binddataset("ds_selectList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"120\"/><Column size=\"300\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"사업장명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECK_BOX\"/><Cell col=\"1\" text=\"bind:CODE\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_select", "absolute", "0", "17", null, "21", "53.94%", null, this.div_list);
            obj.set_taborder("26");
            obj.set_text("선택목록");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_save", "absolute", "53.05%", "17", null, "21", "1.27%", null, this.div_list);
            obj.set_taborder("27");
            obj.set_text("저장목록(최대 10개)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_leftMove", "absolute", "49.11%", "263", "22", "22", null, null, this.div_list);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_rightMove", "absolute", "49.11%", "240", "22", "22", null, null, this.div_list);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_show", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_search", "absolute", "70", "15", "200", "22", null, null, this.div_list);
            obj.set_taborder("32");
            obj.set_readonly("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "313", "15", "49", "22", null, null, this.div_list);
            obj.set_taborder("33");
            obj.set_text("초기화");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "271", "15", "40", "22", null, null, this.div_list);
            obj.set_taborder("34");
            obj.set_text("검색");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "71.29%", "72", null, "42", "15.73%", null, this);
            obj.set_taborder("67");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "116", null, this);
            obj.set_taborder("68");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "46.82%", "311", "10", "42", null, null, this);
            obj.set_taborder("69");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "50.81%", "311", null, "42", "47.94%", null, this);
            obj.set_taborder("70");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("60");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("58");
            		p.set_cssclass("div_WFSA_Searchbg");
            		p.set_applystyletype("cascade,keep");
            		p.set_scrollbars("none");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("61");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 801, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("관심 사업장/상품 등록");

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
        this.addIncludeScript("VAN_DS_SC_1850.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1850.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e){
        	
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.btn_show_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        };

        this.fn_afterFormOnload = function(){ //onload

        	this.div_list.edt_search.set_value('조회후에 필터링 사용가능합니다.');
        	this.div_list.edt_search.set_readonly(true);
        	
        	var param = [this.div_list.grd_select, this.div_list.grd_save];
        	this.ds_selectList.addEventHandler("onload", function(ds, e){
        		if(ds.getRowCount() > 0){
        			this.div_list.edt_search.set_value('');
        			this.div_list.edt_search.set_readonly(false);
        			this.div_list.edt_search.setFocus();
        		}else{
        			this.div_list.edt_search.set_value('조회후에 필터링 사용가능합니다.');
        			this.div_list.edt_search.set_readonly(true);
        		}
        	}, this);	
        	//엔터키 검색 이벤트 등록
        	var searchParam =
        	{
        				form: this,
        				param:[{									
        						edit: this.div_list.edt_search,
        						fnc: 'ds_filter'
        				}]
        	};
        	this.addEventEnterSearch(searchParam);	
        	this.gridCheckboxInit([this.div_list.grd_save]); //체크박스 이벤트 등록	
        	this.div_list.grd_select.set_nodatatext(this.gfn_getTextMessage('msg.van_ds_sc_1850.view.grid.nodata1'));
        	this.div_list.grd_save.set_nodatatext(this.gfn_getTextMessage('msg.van_ds_sc_1850.view.grid.nodata2'));
        	this.gridSortInit(this.div_list.grd_select,[1,2]);
        	this.gridSortInit(this.div_list.grd_save,[1,2]);
        	this.authChkDisable();
        	this.addEventAuth();
        	this.search('init');
        };

        this.divChange = function(obj,e){
        	if(e && e.preindex == 1){
        		if(!this.div_search.cbo_locMain.value){ 
        			this.div_search.sta_location.set_visible(true);
        			this.div_search.cbo_locMain.set_visible(true);
        			this.ds_selectList.clearData();
        			//return;
        		}
        	}	
        	this.search('div');
        };

        //조회
        this.search = function(trId){

        	var div = this.div_search.rdo_analysis.value;
        	if(div == '1'){
        		this.div_search.sta_location.set_visible(true);
        		this.div_search.cbo_locMain.set_visible(true);
        	}else{
        		this.div_search.sta_location.set_visible(false);
        		this.div_search.cbo_locMain.set_visible(false);
        	}

        	if(!trId) trId = 'list';

        	//데이터셋 초기화
        	this.ds_selectList.clearData();
        	
        	//파라미터
        	var json = this.getParamJson(this.components);
        	json.TRPL_C = this.getTrplCode();
        	json.pageType = trId;
        	var param = this.getParamJsonToString(json);	
        	var in_ds = "ds_selectList=ds_selectList ds_locMain=ds_locMain";
        	in_ds += " ds_saveList=ds_saveList";
        	
        	if(trId == 'init' || trId == 'div'){
        		this.ds_saveList.clearData();
        	}else{
        		/*
        		if(!json.LOCMAIN && div == '1'){
        			this.alert(this.gfn_getTextMessage('validation.message.select.location'));
        			this.div_list.edt_search.set_value('조회후에 필터링 사용가능합니다.');
        			this.div_list.edt_search.set_readonly(true);
        			return;
        		}
        		*/
        	}
        	
        	var ds = this.ds_saveList;
        	var str = "";
        	for(var i=0 ; i < ds.getRowCount() ; i++){
        		var code = ds.getColumn(i, "CODE");
        		str += code +",";		
        		if(i==ds.getRowCount()-1) str = str.substring(0,str.length-1);
        	}
        	param += " saveDs="+str;
        	
        	this.gfn_callService(
        						trId, 
        						"svc::rest/analysis/info/infoChange/retrieveInterestList", 
        						"", 
        						in_ds,
        						param,
        						"fn_callback",
        						'S'
        						);
        };

        //설정저장
        this.btn_save = function(sqlType){
        	
        	var ds = "";
        	var confirmMsg = '';
        	if(sqlType == 'INS'){ 
        		confirmMsg = 'msg.isInsert';
        		ds = 'ds=ds_selectList'; 
        	}else if(sqlType == 'DEL'){
        		confirmMsg = 'msg.isDelete';
        		ds = 'ds=ds_saveList'; 
        	}
        	
        	if(!this.confirm(this.gfn_getTextMessage(confirmMsg))){
        		return;
        	}
        	
        	//파라미터
        	var analysis = this.div_search.rdo_analysis.value;
        	
        	//트랜젝션 아이디
        	var trId = sqlType;
        	
        	this.gfn_callService(
        						trId, 
        						"svc::rest/analysis/info/infoChange/saveInterestList", 
        						ds, 
        						"", 
        						"analysis="+analysis+" sqlType="+sqlType, 
        						"fn_callback",
        						'S'
        						);
        };

        //저장,삭제
        this.btn_moveData_onclick = function(obj,e){
        	
        	var trpl_c = this.getTrplCode();
        	var my_trpl_c = application.gv_glnCode;	
        	if(this.isHeadquarters()){ //본사
        		if(trpl_c != my_trpl_c){
        			this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1850.alert.save1'));
        			return;
        		}
        	}
        	
        	var sqlType = '';
        	if(obj.id == 'btn_rightMove') sqlType = 'INS';
        	else sqlType = 'DEL';
        	
        	if(sqlType == 'INS'){		
        		var saveCnt = this.ds_saveList.getRowCount();
        		var selectCnt = this.checkIndexCnt(this.div_list.grd_select);		
        		if(selectCnt == 0){
        			this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1850.alert.save3'));
        			return;
        		}
        		//trace(saveCnt+selectCnt);
        		if(saveCnt+selectCnt > this.maxSaveCnt()){
        			this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1850.alert.save2'));
        			return;
        		}
        	
        	}else{
        		var selectCnt = this.checkIndexCnt(this.div_list.grd_save);
        		if(selectCnt == 0){
        			this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1850.alert.save3'));
        			return;
        		}
        	}
        	
        	this.btn_save(sqlType);
        };

        //콜백
        this.fn_callback = function(trId,errCode,errMsg){

        	if(errCode < 0){
        		this.gfn_getMessage("alert", errMsg);
        		return;
        	}
        	
        	this.setNo(this);
        	
        	if(trId == 'init'){
        		var ds = this.ds_locMain;
        		ds.insertRow(0);
        		ds.setColumn(0,'SIMP_C','');
        		//ds.setColumn(0,'SIMP_CNM',this.gfn_getTextMessage('validation.message.select.location'));
        		ds.setColumn(0,'SIMP_CNM','- 전체 -');
        		this.div_search.cbo_locMain.set_index(0);
        		return;
        	};
        	
        	if(trId == 'list' || trId == 'div'){		//조회		
        		var codeText = '';
        		var nameText = '';
        		var analysis = this.div_search.rdo_analysis.value;
        		if(analysis == 1){
        			codeText = '사업장코드';
        			nameText = '사업장명';
        		}
        		else if(analysis == 2){
        			codeText = '상품코드';
        			nameText = '상품명';
        		}		
        		this.div_list.grd_select.setCellProperty("Head", 1, "text", codeText);
        		this.div_list.grd_select.setCellProperty("Head", 2, "text", nameText);
        		this.div_list.grd_save.setCellProperty("Head", 2, "text", codeText);
        		this.div_list.grd_save.setCellProperty("Head", 3, "text", nameText);
        		return;
        	}
        	
        	if(trId == 'INS'){
        		this.alert(this.gfn_getTextMessage('msg.comp.insert'));
        		this.search();
        		return;		
        	}
        	
        	if(trId == 'DEL'){
        		this.alert(this.gfn_getTextMessage('msg.comp.delete'));
        		this.search();
        		return;		
        	}
        };

        this.setNo = function(form){
        	
        	var ds = form.ds_saveList;
        	for(var i=0 ; i<ds.getRowCount();i++){
        		ds.setColumn(i,"NO",(i+1));
        	}
        };
        //최대 저장 갯수
        this.maxSaveCnt = function(){
        	return 10;
        };

        //데이터셋 필터링
        this.div_list_Button00_onclick = function(obj,e){
        	
        	this.div_list.edt_search.set_value('');
        	this.ds_selectList.filter('');
        	this.div_list.edt_search.setFocus();
        };

        this.ds_filter = function(obj,e){

        	var txt = this.div_list.edt_search.value;
        	if(txt != '' && !txt) return;
            var s = "NAME.indexOf('" + txt.replace("'","\\'") + "') != -1";
        	this.ds_selectList.filter(s);
        };
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.rdo_analysis.addEventHandler("onitemchanged", this.divChange, this);
            this.div_search.sta_location.addEventHandler("onclick", this.div_search_sta_location_onclick, this);
            this.div_search.cbo_locMain.addEventHandler("onitemchanged", this.search, this);
            this.div_list.btn_leftMove.addEventHandler("onclick", this.btn_moveData_onclick, this);
            this.div_list.btn_rightMove.addEventHandler("onclick", this.btn_moveData_onclick, this);
            this.div_list.btn_show.addEventHandler("onclick", this.btn_show_onclick, this);
            this.div_list.Button00.addEventHandler("onclick", this.div_list_Button00_onclick, this);
            this.div_list.Button01.addEventHandler("onclick", this.ds_filter, this);
            this.btn_search.addEventHandler("onclick", this.search, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1850.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
