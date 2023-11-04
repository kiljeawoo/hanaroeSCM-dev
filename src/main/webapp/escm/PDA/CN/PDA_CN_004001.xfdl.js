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
                this.set_name("PDA_CN_004001");
                this.set_titletext("PDA 검수내역 다운로드");
                this.set_visible("false");
                this._setFormPosition(0,0,881,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("centerBzplc", this);
            obj._setContents("<ColumnInfo><Column id=\"bzplc\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("68");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("72");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "72", "56", "41", null, null, this);
            obj.set_taborder("87");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0.12%", "30", null, "42", "98.01%", null, this);
            obj.set_taborder("88");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", "1000", "150", null, null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "13", "10", "110", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("PDA 검수기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "130", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "250", "10", "98", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static00", "absolute", "568", "10", "94", "21", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("물류센터");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_excelListDown01", "absolute", "368", "93", "188", "21", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_text("센터-마트별 상세 엑셀 다운로드");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "234", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("21");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("centerId", "absolute", "668", "10", "175", "21", null, null, this.div_search);
            obj.set_taborder("106");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("false");
            obj.style.set_align("left middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_STAT_CD", "absolute", "668", "10", "175", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_STAT_CD_innerdataset = new Dataset("cbo_STAT_CD_innerdataset", this.div_search.cbo_STAT_CD);
            cbo_STAT_CD_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">8808983304892</Col><Col id=\"datacolumn\">북부물류센터</Col></Row><Row><Col id=\"codecolumn\">8808983300108</Col><Col id=\"datacolumn\">평택물류센터</Col></Row><Row><Col id=\"codecolumn\">8808983000312</Col><Col id=\"datacolumn\">광주물류센터</Col></Row><Row><Col id=\"codecolumn\">8808983000916</Col><Col id=\"datacolumn\">제주물류센터</Col></Row><Row><Col id=\"codecolumn\">8808983000510</Col><Col id=\"datacolumn\">경북물류센터</Col></Row><Row><Col id=\"codecolumn\">8808983305950</Col><Col id=\"datacolumn\">군위물류센터</Col></Row><Row><Col id=\"codecolumn\">8808983000411</Col><Col id=\"datacolumn\">경남물류센터</Col></Row><Row><Col id=\"codecolumn\">8808983327631</Col><Col id=\"datacolumn\">횡성물류센터</Col></Row></Rows>");
            obj.set_innerdataset(cbo_STAT_CD_innerdataset);
            obj.set_taborder("22");
            obj.set_value("A");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("true");
            obj.set_index("0");

            obj = new WebBrowser("web_downExcel", "absolute", "13.95%", "7", null, "14", "80.57%", null, this);
            obj.set_taborder("104");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelListDown00", "absolute", "368", "78", "188", "21", null, null, this);
            obj.set_taborder("105");
            obj.set_text("PDA 센터별 집계 엑셀 다운로드");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 126, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("103");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 881, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("PDA 검수내역 다운로드");
            		p.set_visible("false");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item23","centerId","value","centerBzplc","bzplc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_search.centerId","value","centerBzplc","bzplc");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PDA_CN_004001.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_004001.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        var bzplc = application.gv_glnCode;

        /* Form Init: 페이지 호출 후 실행 */
        this.form_init = function(obj,e)
        {
        	this.centerBzplc.addRow();
        	this.centerBzplc.setColumn(0,"bzplc",bzplc);
        	var temp1 = this.centerBzplc.getColumn(0,"bzplc");
        	if (application.gv_glnCode == "8808983000015" || application.gv_glnCode == "8808983304892" || application.gv_glnCode == "8808983300108" || application.gv_glnCode == "8808983000312" || application.gv_glnCode == "8808983000916" || application.gv_glnCode == "8808983000510" || application.gv_glnCode == "8808983305950" || application.gv_glnCode == "8808983000411" || application.gv_glnCode == "8808983327631" || application.gv_glnCode == "8808990646589" ) { // 회원의 권한 목록에 없는 경우
                }else{
                alert("권한이 없습니다.");
        		this.fn_close();
                }
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.div_search.cal_from.set_value(this.gfn_firstDate(toDay));
        	this.div_search.cal_to.set_value(toDay);
        	if(application.gv_glnCode == "8808983304892" || application.gv_glnCode == "8808983300108" || application.gv_glnCode == "8808983000312" || application.gv_glnCode == "8808983000916" || application.gv_glnCode == "8808983000510" || application.gv_glnCode == "8808983305950" || application.gv_glnCode == "8808983000411" || application.gv_glnCode == "8808983327631"){
        		this.div_search.cbo_STAT_CD.set_visible(true);
        		this.div_search.centerId.set_visible(false);
        	}else{
        		this.div_search.cbo_STAT_CD.set_visible(true);
        		this.div_search.centerId.set_visible(false);
        	}
        }

        
        /* Form Onload: DataSet 로딩 후 실행 */
        this.form_onload = function(obj,e)
        {	// 페이지 로딩후 실행부분
        	this.gfn_setPortalCommonCode(param); 
        }

        
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /* 조회조건 영역 펼치기, 접기 */
        this.Div02_Button75_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.Div02);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	
        this.fn_close = function()
        {	
        	var nLength = application.afrm_FrameSet.frames.length;
        	
        	for(var i=nLength-1; i >= 0 ; i--){
        		
        		application.afrm_FrameSet.frames[i].form.close();	
        	}
        	
        	application.gds_openMenu.clearData();	
        	
        	
        	if(this.gfn_isNull(application.gv_userKey))
        	{
        		application.afrm_VFrameSet0.set_separatesize("*,0,0");
        	}
        	else
        	{	
        		if(application.gv_userTPC == "user"){
        			application.afrm_TopFrame.set_formurl("");
        			application.afrm_LeftFrame.set_formurl("");
        			application.afrm_PotalFrame.set_formurl("");
        			
        			application.afrm_TopFrame.set_formurl("frame::TopFrame.xfdl");
        			application.afrm_LeftFrame.set_formurl("frame::LeftFrame.xfdl");
        			application.afrm_PotalFrame.set_formurl("frame::Potal.xfdl");
        		}else{
        			application.afrm_TopFrame.set_formurl("frame::TopFrame_portal_admin.xfdl");
        			application.afrm_LeftFrame.set_formurl("frame::LeftFrame_admin.xfdl");
        			application.afrm_PotalFrame.set_formurl("frame::Potal_admin.xfdl");
        		}
        	}
        	
        }

        /* 검색결과 그리드 엑셀다운로드 */
        this.btn_excelListDown_onclick = function(obj,e)
        {
        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) < 0){
        		this.alert(this.gfn_getTextMessage('validation.message.fromDate.toDate.reConfirm'));
        		return false;
        	}else{
        		if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 31){
        			this.alert(this.gfn_getTextMessage('validation.message.selectDateIn31Day'));
        			return false;
        		}
        	}
        	var fromDt			= this.div_search.cal_from.value;
        	var toDt			= this.div_search.cal_to.value;
        	var tmpbzplc        = this.div_search.cbo_STAT_CD.value;
        	var sParams			= "FROM_DT="	+ fromDt
        						+ "&TO_DT="		+ toDt
        						+ "&TRPL_C="	+ tmpbzplc;
        	sParams = encodeURI(encodeURI(sParams));
        	trace("엑셀 다운로드 params >>> " + sParams);
        	if(application.gv_userTPC == "admin")
        	excelDownHandler(application.gv_serverAdmin_url + "rest/excel/pda/downloadExcelPda?" + sParams, this);
        	excelDownHandler(application.gv_server_url + "rest/excel/pda/downloadExcelPda?" + sParams, this);
        }

        this.btn_excelListDown01_onclick = function(obj,e)
        {
        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) < 0){
        		this.alert(this.gfn_getTextMessage('validation.message.fromDate.toDate.reConfirm'));
        		return false;
        	}else{
        		if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 31){
        			this.alert(this.gfn_getTextMessage('validation.message.selectDateIn31Day'));
        			return false;
        		}
        	}
        	var fromDt			= this.div_search.cal_from.value;
        	var toDt			= this.div_search.cal_to.value;
        	var tmpbzplc        = this.div_search.cbo_STAT_CD.value;

        	var sParams			= "FROM_DT="	+ fromDt
        						+ "&TO_DT="		+ toDt
        						+ "&TRPL_C="	+ tmpbzplc;
        	sParams = encodeURI(encodeURI(sParams));
        	trace("엑셀 다운로드 params >>> " + sParams);
        	if(application.gv_userTPC == "admin")
        	excelDownHandler(application.gv_serverAdmin_url + "rest/excel/pda/downloadExcelPdaDetail?" + sParams, this);
        	excelDownHandler(application.gv_server_url + "rest/excel/pda/downloadExcelPdaDetail?" + sParams, this);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.Static05.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_search.cal_from.addEventHandler("oneditclick", this.div_search_cal_from_oneditclick, this);
            this.div_search.cal_to.addEventHandler("oneditclick", this.div_search_cal_to_oneditclick, this);
            this.div_search.btn_excelListDown01.addEventHandler("onclick", this.btn_excelListDown01_onclick, this);
            this.div_search.cbo_STAT_CD.addEventHandler("onitemchanged", this.div_search_cbo_displayYn_onitemchanged, this);
            this.btn_excelListDown00.addEventHandler("onclick", this.btn_excelListDown_onclick, this);

        };

        this.loadIncludeScript("PDA_CN_004001.xfdl");
        this.loadPreloadList();
       
    };
}
)();
