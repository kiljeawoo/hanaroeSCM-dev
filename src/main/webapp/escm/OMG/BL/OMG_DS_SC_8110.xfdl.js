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
                this.set_name("OMG_DS_SC_8111");
                this.set_titletext("농협정산 등록");
                this._setFormPosition(0,0,803,747);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mmadj", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"TMP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMS_MM\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_TOT_AM1_1\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_TOT_AM1_2\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_TOT_AM2_1\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_TOT_AM2_2\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM1\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM2\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM3\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM4\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM5\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM6\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM7\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM8\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM9\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM10\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM11\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM12\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM13\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM14\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM15\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM16\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM17\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM18\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_LATE_AM19\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_TOT_AM2_3\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_TOT_AM3_1\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_TOT_AM3_2\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM1_1\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM1_2\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM2_1\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM2_2\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM2_3\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM2_4\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM2_5\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM2_6\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_1\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_2\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_3\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_4\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_5\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_6\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_7\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_8\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_9\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_10\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_11\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_12\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_13\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_14\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_15\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_16\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_17\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_18\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_19\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_20\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_21\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_22\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_TOT_AM3_23\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_TOT_AM1_1\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_TOT_AM2_1\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_TOT_AM2_2\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_TOT_AM2_3\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_TOT_AM2_4\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_TOT_AM2_5\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_TOT_AM2_6\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_TOT_AM3_1\" type=\"STRING\" size=\"256\"/><Column id=\"REMARKS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_adjc", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"DSC_C\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_C\" type=\"STRING\" size=\"256\"/><Column id=\"DSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rqs", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"DSC_C\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_C\" type=\"STRING\" size=\"256\"/><Column id=\"DSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AM\" type=\"INT\" size=\"256\"/><Column id=\"REMARKS\" type=\"STRING\" size=\"256\"/><Column id=\"COLUNM\" type=\"STRING\" size=\"256\"/><Column id=\"TMP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REMARKS1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cts", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj.getSetter("userdata").set("0");
            obj._setContents("<ColumnInfo><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"DSC_C\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_C\" type=\"STRING\" size=\"256\"/><Column id=\"DSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AM\" type=\"INT\" size=\"256\"/><Column id=\"REMARKS\" type=\"STRING\" size=\"256\"/><Column id=\"COLUNM\" type=\"STRING\" size=\"256\"/><Column id=\"TMP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_adj", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"DSC_C\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_C\" type=\"STRING\" size=\"256\"/><Column id=\"DSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AM\" type=\"INT\" size=\"256\"/><Column id=\"REMARKS\" type=\"STRING\" size=\"256\"/><Column id=\"COLUNM\" type=\"STRING\" size=\"256\"/><Column id=\"TMP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("68");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("정산월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_by_dt", "absolute", "10.31%", "10", null, "21", "76.72%", null, this.div_search);
            obj.set_taborder("13");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);

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

            obj = new Static("Static01", "absolute", "0.12%", "30", null, "42", "98.01%", null, this);
            obj.set_taborder("88");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("107");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "8", "71", null, null, "15", "-1344", this);
            obj.set_taborder("108");
            obj.set_text("Div02");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "347", "0", null, "12", "363", null, this.Div02);
            obj.set_taborder("82");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "26", "466", "21", null, null, this.Div02);
            obj.set_taborder("83");
            obj.set_text("청구부분");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "586", "466", "21", null, null, this.Div02);
            obj.set_taborder("85");
            obj.set_text("비용부분");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "613", null, "605", "0", null, this.Div02);
            obj.set_taborder("86");
            obj.set_binddataset("ds_cts");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"내역\"/><Cell col=\"2\" text=\"금액\"/><Cell col=\"3\" text=\"부가세\"/><Cell col=\"4\" text=\"합계\"/><Cell col=\"5\" text=\"비고(부가세포함)\"/></Band><Band id=\"body\"><Cell style=\"line:EXPR(dataset.getRowLevel(currow) &gt; 0 ? '1 solid #e5e5e5 , 0 solid #e5e5e5':''&quot;);selectline:EXPR(dataset.getRowLevel(currow) &gt; 0 ? '1 solid #e5e5e5 , 0 solid #e5e5e5':''&quot;);\" text=\"expr:dataset.getRowLevel(currow) &gt; 0 ? (dataset.getRowLevel(currow) == 1 ? (DSC_C == &quot;CTS1&quot; ? ' 인건비 합계' : DSC_C == &quot;CTS2&quot; ? ' 관리비 합계' : ' 변동료 합계') : ' 비용합계'):DSC_NM\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CONT_NM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:comp.parent.parent.fn_ctsHap(currow, DSC_C, 1, TOT_AM)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:comp.parent.parent.fn_ctsHap(currow, DSC_C, 2, TOT_AM)\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"expr:TMP_YN == &quot;Y&quot; ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:TOT_AM\" expr=\"expr:comp.parent.parent.fn_ctsHap(currow, DSC_C, 3, TOT_AM)\"/><Cell col=\"5\" edittype=\"none\" style=\"align:left;\" text=\"bind:REMARKS\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "1238", "466", "21", null, null, this.Div02);
            obj.set_taborder("87");
            obj.set_text("정산부분");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid02", "absolute", "0", "1265", null, "500", "0", null, this.Div02);
            obj.set_taborder("88");
            obj.set_binddataset("ds_adj");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"내역\"/><Cell col=\"2\" text=\"금액\"/><Cell col=\"3\" text=\"부가세\"/><Cell col=\"4\" text=\"합계\"/><Cell col=\"5\" text=\"비고(부가세포함)\"/></Band><Band id=\"body\"><Cell style=\"line:EXPR(dataset.getRowLevel(currow) &gt; 0 ? '1 solid #e5e5e5 , 0 solid #e5e5e5':''&quot;);selectline:EXPR(dataset.getRowLevel(currow) &gt; 0 ? '1 solid #e5e5e5 , 0 solid #e5e5e5':''&quot;);\" text=\"expr:dataset.getRowLevel(currow) &gt; 0 ? (dataset.getRowLevel(currow) == 1 ? (DSC_C == &quot;ADJ1&quot; ? ' 농협 정산액' : DSC_C == &quot;ADJ2&quot; ? '운영사 정산액' : '') : ' 정산합계'):DSC_NM\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CONT_NM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:comp.parent.parent.fn_adjHap(currow, DSC_C, 1)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:comp.parent.parent.fn_adjHap(currow, DSC_C, 2)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:comp.parent.parent.fn_adjHap(currow, DSC_C, 3)\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:REMARKS\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "1785", "466", "21", null, null, this.Div02);
            obj.set_taborder("89");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div02.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "0", "1811", null, "179", "0", null, this.Div02);
            obj.set_taborder("90");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "53", null, "500", "0", null, this.Div02);
            obj.set_taborder("91");
            obj.set_binddataset("ds_rqs");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"내역\"/><Cell col=\"2\" text=\"금액\"/><Cell col=\"3\" text=\"부가세\"/><Cell col=\"4\" text=\"합계\"/><Cell col=\"5\" text=\"비고(부가세포함)\"/></Band><Band id=\"body\"><Cell style=\"line:EXPR(dataset.getRowLevel(currow) &gt; 0 ? '1 solid #e5e5e5 , 0 solid #e5e5e5':''&quot;);selectline:EXPR(dataset.getRowLevel(currow) &gt; 0 ? '1 solid #e5e5e5 , 0 solid #e5e5e5':''&quot;);\" text=\"expr:dataset.getRowLevel(currow) &gt; 0 ? (dataset.getRowLevel(currow) == 1 ? (DSC_C == &quot;RQS1&quot; ? ' 청구합계(세금계산서발행액)' : DSC_C == &quot;RQS2&quot; ? '입금합계' : '미납합계') : '정산기준액'):DSC_NM\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CONT_NM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:comp.parent.parent.fn_rqsHap(currow, DSC_C, 1, TOT_AM)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:comp.parent.parent.fn_rqsHap(currow, DSC_C, 2, TOT_AM)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:comp.parent.parent.fn_rqsHap(currow, DSC_C, 3, TOT_AM)\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:REMARKS\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("109");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("103");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 1688, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("108");
            		p.set_text("Div02");
            		p.set_enable("true");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 747, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("농협정산 등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div02.TextArea00","value","ds_mmadj","REMARKS");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data", "", "ds_mmadj");
            this._addPreloadList("data", "", "ds_adjc");
            this._addPreloadList("data", "", "ds_rqs");
            this._addPreloadList("data", "", "ds_cts");
            this._addPreloadList("data", "", "ds_adj");
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8110.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8110.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var chkDay = "";
        var ctsTotAm2_6 = 0; //비용부분 통신및 상면비 사무실 이용료
        var ctsTotAm3_23 = 0; //비용부분 유동성비용 위탁수수료
        var ctsHapAm = 0;  // 비용부분 총계
        var rqsHap = "";
        var adjHap1 = "";
        var adjHap2 = ""
        var adjHap3 = "";
        var regex = /[^0-9]/g; // 숫자가 아닌 문자열을 매칭하는 정규식

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        /* Form Init */
        this.form_init = function(obj,e)
        {	
        	// 페이지 로딩후 실행부분
        	var toDay = this.gfn_today("yyyyMMdd");
        	chkDay = this.gfn_minusMonth(toDay, 2);
        	
        	this.div_search.cal_by_dt._setValue(chkDay.substr(0, 6));
        }

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	
        }

        this.fn_afterFormOnload = function()
        {
        	// 페이지 로딩후 실행부분
        	this.fn_retrieveBlMmAdjList();
        }
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* 콜백 함수 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        //	trace(this.ds_rqbrk.saveXML());
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	else
        	{
        		if(svcID == "retrieveMmAdj")
        		{
        			if(this.ds_mmadj.getRowCount() > 0)
        			{
        				rqsHap = 0;
        				adjHap1 = 0;
        				adjHap2 = 0;
        				adjHap3 = 0;
        			
        				if(this.ds_mmadj.getColumn(0, "TMP_YN") == "Y")
        				{
        					alert("임시 내역 입니다.");
        					this.btn_save.set_enable(true);
        					this.Div02.TextArea00.set_enable(true);
        				}else{
        					this.btn_save.set_enable(false);
        					this.Div02.TextArea00.set_enable(false);
        				}
        				
        				this.fn_rqsList();
        			}else{
        				this.ds_rqs.deleteAll(); //청구부분 데이터 삭제
        				this.ds_cts.deleteAll(); //비용부분 데이터 삭제
        				this.ds_adj.deleteAll(); //정산부분 데이터 삭제
        				this.Div02.Grid00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        				this.Div02.Grid01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        				this.Div02.Grid02.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        		else if(svcID == "createMmAdj")
        		{
        			alert("저장되었습니다.");
        			this.fn_retrieveBlMmAdjList();
        		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	

        /* 조회버튼 이벤트 */
        this.btn_search_onclick = function(obj,e)
        {
            this.fn_retrieveBlMmAdjList();
        }

        /* 리스트  조회*/
        this.fn_retrieveBlMmAdjList = function()
        {
        	if(this.fn_validationCheck()){
        		
        		var rqsdt = this.div_search.cal_by_dt._getValue() + "01";
        		var rmsDt = rqsdt.substr(0, 6);
        		var rvDt = this.gfn_minusMonth(this.div_search.cal_by_dt._getValue() + "01", -1).substr(0, 6);
        		var calDt = this.gfn_minusMonth(this.div_search.cal_by_dt._getValue() + "01", -2);
        	
        		var sParams	= "RQS_DT="		+ rqsdt
        					+ " RMS_DT="	+ rmsDt
        					+ " CAL_DT="	+ calDt
        					+ " RV_DT="		+ rvDt
        					;
        		
        		var sSvcID			= "retrieveMmAdj";
        		var sURL			= "svc::rest/bl/retrieveBlMmAdj";
        		var sInDatasets		= "";
        		var sOutDatasets	= "ds_mmadj=ds_mmadj ds_adjc=ds_adjc";
        		var sArgument		= sParams;
        		var sCallbackFunc	= "fn_callBack";
        		var sTranType		= "S"; // U:저장/삭제, S:조회
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		
        	}	
        }

        
        this.btn_save_onclick = function(obj,e)
        {
        	var sSvcID        = "createMmAdj";
        	var sURL          = "svc::rest/bl/createMmAdj";	
        	var sInDatasets   = "ds_mmadj=ds_mmadj";
        	var sOutDatasets  = "";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회			
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_validationCheck = function(){

        	if((this.div_search.cal_by_dt._getValue() + "").substr(0, 6) > chkDay.substr(0, 6)){
        	
        		alert("확정되지 않은 정산월 입니다.");
        		this.div_search.cal_by_dt._setValue(chkDay.substr(0, 6));
        		return false;
        	}
        	
        	return true;
        }

        
        this.fn_rqsList = function(){
        	
        	this.ds_rqs.deleteAll(); //청구부분 데이터 삭제
        	
            // 청구부분 시작
        	this.ds_adjc.filter("String(DSC_C).substr(0, 3).indexOf('RQS') >= 0");
        	
        	var rqsRemark = "";
        	var rqsTotAm1 = 0;  //  금액
        	
        	for (var i=0; i< this.ds_adjc.getRowCount(); i++) {
        		this.Div02.Grid00.mergeContentsCell
        		var result = this.ds_adjc.getColumn(i, "DSC_C").replace(regex, "");    //구분번호
        		var result1 = this.ds_adjc.getColumn(i, "CONT_C").replace(regex, ""); // 내역번호
        		
        		var orgRqsTotAm=this.ds_mmadj.getColumn(0, "RQS_TOT_AM"+result+"_"+result1); // 합계
        		
        		if(!this.gfn_isNull(orgRqsTotAm)){
        			var row = this.ds_rqs.addRow();
        			var rqsTotAm = nexacro.toNumber(orgRqsTotAm);
        			this.ds_rqs.setColumn(row, "GROUP", "RQS");
        			this.ds_rqs.setColumn(row, "DSC_C", this.ds_adjc.getColumn(i, "DSC_C"));
        			this.ds_rqs.setColumn(row, "CONT_C", this.ds_adjc.getColumn(i, "CONT_C"));
        			this.ds_rqs.setColumn(row, "DSC_NM", this.ds_adjc.getColumn(i, "DSC_NM"));
        			this.ds_rqs.setColumn(row, "CONT_NM", this.ds_adjc.getColumn(i, "CONT_NM"));
        			this.ds_rqs.setColumn(row, "TOT_AM", rqsTotAm);
        			this.ds_rqs.setColumn(row, "COLUNM", "RQS_TOT_AM"+result+"_"+result1);
        			this.ds_rqs.setColumn(row, "TMP_YN", this.ds_mmadj.getColumn(0, "TMP_YN"));
        			
        			if(result == "1"){ // 이용료청구액 매출액(전산자료) 
        				rqsTotAm1 += rqsTotAm;
        			}
        			if(result == "2" && result1 == "2"){ // 이용료입금액 연체료 
        				for(var j =1; j<20; j++){ // 상세내역 19개월분 
        					var orgRqsLateAm = this.ds_mmadj.getColumn(0, "RQS_LATE_AM"+j);
        					if(!this.gfn_isNull(orgRqsLateAm)){
        						var rqsLateAm = nexacro.toNumber(orgRqsLateAm);
        						var lateDt = this.gfn_minusMonth(this.ds_mmadj.getColumn(0, "RMS_MM") + "01", 20 - j);
        						rqsRemark +=lateDt.substr(0, 4)+"년"+lateDt.substr(4, 2)+"월 입금 "+rqsLateAm.toLocaleString()+"\n"
        					}
        				}
        				this.ds_rqs.setColumn(row, "REMARKS",  rqsRemark.substr(0, rqsRemark.length - 1));
        			}
        			if(result == "2" && result1 == "3"){ // 이용료입금액 연체료 
        				this.ds_rqs.setColumn(row, "REMARKS",  "대손처리입금액 "+rqsTotAm.toLocaleString());
        			}
        			if(result == "3" && result1 == "1"){ //미납액 당월분 비고내역 계산(100-(당월분미납 금액/ 매출금액) *100)
        				rqsRemark = "";
        				rqsRemark = 100-(nexacro.round(rqsTotAm/1.1)/ nexacro.round(rqsTotAm1/1.1)) *100; 
        				
        				if(nexacro.toNumber(this.ds_mmadj.getColumn(0, "RMS_MM")) < 201604){ 
        					this.ds_rqs.setColumn(row, "REMARKS",  nexacro.round(rqsRemark)+"%");
        				}else{
        					this.ds_rqs.setColumn(row, "REMARKS",  nexacro.round(rqsRemark, 2)+"%");
        				}	
        			}
        		}
        		
        	}
        	// 그룹핑
        	this.ds_rqs.set_keystring("G:GROUP,DSC_C");
        	
        	this.fn_ctsList();
        }

        this.fn_ctsList = function(){

        	this.ds_cts.deleteAll(); //비용부분 데이터 삭제
        	
        	this.ds_cts.userdata = 0;
        	// 비용부분 시작
        	this.ds_adjc.filter("String(DSC_C).substr(0, 3).indexOf('CTS') >= 0");
        	
        	for (var i=0; i< this.ds_adjc.getRowCount(); i++) {
        		var result = this.ds_adjc.getColumn(i, "DSC_C").replace(regex, "");    //구분번호
        		var result1 = this.ds_adjc.getColumn(i, "CONT_C").replace(regex, ""); // 내역번호		
        		var orgCtsTotAm=this.ds_mmadj.getColumn(0, "CTS_TOT_AM"+result+"_"+result1);// 합계
        		var row = "";
        		var ctsTotAm = 0;	
        		//농협정산 전 임시 데이터
        		if (this.ds_mmadj.getColumn(0, "TMP_YN")  == "Y"){
        			row = this.ds_cts.addRow();
        			ctsTotAm = nexacro.toNumber(orgCtsTotAm);
        			
        			if(ctsTotAm == 0)
        			{
        				if(this.gfn_isNull(orgCtsTotAm))
        				{
        					ctsTotAm = orgCtsTotAm;
        				}
        			}
        			this.ds_cts.setColumn(row, "GROUP", "CTS");
        			this.ds_cts.setColumn(row, "DSC_C", this.ds_adjc.getColumn(i, "DSC_C"));
        			this.ds_cts.setColumn(row, "CONT_C", this.ds_adjc.getColumn(i, "CONT_C"));
        			this.ds_cts.setColumn(row, "DSC_NM", this.ds_adjc.getColumn(i, "DSC_NM"));
        			this.ds_cts.setColumn(row, "CONT_NM", this.ds_adjc.getColumn(i, "CONT_NM"));
        			this.ds_cts.setColumn(row, "TOT_AM", ctsTotAm);
        			this.ds_cts.setColumn(row, "COLUNM", "CTS_TOT_AM"+result+"_"+result1);
        			this.ds_cts.setColumn(row, "TMP_YN", this.ds_mmadj.getColumn(0, "TMP_YN"));			
        		}else{
        			if(!this.gfn_isNull(orgCtsTotAm)){
        				row = this.ds_cts.addRow();
        				ctsTotAm = nexacro.toNumber(orgCtsTotAm);
        				//2016.01 ~ 2016.11 유동성비용 위탁수수료 -> 정산부분 운영사(나) 위탁수수료 항목으로 변경
        				if(nexacro.toNumber(this.ds_mmadj.getColumn(0, "RMS_MM")) < 201612){ 
        					if(result == "3" && result1 == "23"){
        						ctsTotAm3_23 = ctsTotAm;
        						this.ds_cts.deleteRow(row);
        					}else{
        						this.ds_cts.setColumn(row, "GROUP", "CTS");
        						this.ds_cts.setColumn(row, "DSC_C", this.ds_adjc.getColumn(i, "DSC_C"));
        						this.ds_cts.setColumn(row, "CONT_C", this.ds_adjc.getColumn(i, "CONT_C"));
        						this.ds_cts.setColumn(row, "DSC_NM", this.ds_adjc.getColumn(i, "DSC_NM"));
        						this.ds_cts.setColumn(row, "CONT_NM", this.ds_adjc.getColumn(i, "CONT_NM"));
        						this.ds_cts.setColumn(row, "TOT_AM", ctsTotAm);
        						this.ds_cts.setColumn(row, "COLUNM", "CTS_TOT_AM"+result+"_"+result1);
        						this.ds_cts.setColumn(row, "TMP_YN", this.ds_mmadj.getColumn(0, "TMP_YN"));
        					}
        				}else{
        					this.ds_cts.setColumn(row, "GROUP", "CTS");
        					this.ds_cts.setColumn(row, "DSC_C", this.ds_adjc.getColumn(i, "DSC_C"));
        					this.ds_cts.setColumn(row, "CONT_C", this.ds_adjc.getColumn(i, "CONT_C"));
        					this.ds_cts.setColumn(row, "DSC_NM", this.ds_adjc.getColumn(i, "DSC_NM"));
        					this.ds_cts.setColumn(row, "CONT_NM", this.ds_adjc.getColumn(i, "CONT_NM"));
        					this.ds_cts.setColumn(row, "TOT_AM", ctsTotAm);
        					this.ds_cts.setColumn(row, "COLUNM", "CTS_TOT_AM"+result+"_"+result1);
        					this.ds_cts.setColumn(row, "TMP_YN", this.ds_mmadj.getColumn(0, "TMP_YN"));
        				}	
        			}
        		}				
        	}
        	
        	// 그룹핑
        	this.ds_cts.set_keystring("G:GROUP,DSC_C");

        	this.ds_cts.userdata = 1;
        	this.fn_adjList();	
        }

        this.fn_adjList = function(){
        	
        	ctsHapAm = this.ds_cts.getColumn(this.ds_cts.getRowCount()-1, "TOT_AM"); // 비용부분 총계
        	
        	for (var i=0; i< this.ds_cts.getRowCount(); i++) { 
        		if(this.ds_cts.getColumn(i, "DSC_C") == "CTS2" && this.ds_cts.getColumn(i, "CONT_C") == "CTS6")
        		{
        			ctsTotAm2_6 = this.ds_cts.getColumn(i, "TOT_AM");
        		}
        	}
        	
        	this.ds_adj.deleteAll(); //정산부분 데이터 삭제
        	// 정산부분 시작
        	this.ds_adjc.filter("String(DSC_C).substr(0, 3).indexOf('ADJ') >= 0");
        	
        	//농협정산 전 임시 데이터
        	if (this.ds_mmadj.getColumn(0, "TMP_YN")  == "Y"){
        		for (var i=0; i< this.ds_adjc.getRowCount(); i++) {
        		var result = this.ds_adjc.getColumn(i, "DSC_C").replace(regex, "");    //구분번호
        		var result1 = this.ds_adjc.getColumn(i, "CONT_C").replace(regex, ""); // 내역번호		
        		var orgAdjTotAm=this.ds_mmadj.getColumn(0, "ADJ_TOT_AM"+result+"_"+result1);// 합계
        		var row = "";
        		var adjTotAm = 0;
        			if(!this.gfn_isNull(orgAdjTotAm)){
        				row = this.ds_adj.addRow();
        				adjTotAm = nexacro.toNumber(orgAdjTotAm);
        				this.ds_adj.setColumn(row, "GROUP", "ADJ");
        				this.ds_adj.setColumn(row, "DSC_C", this.ds_adjc.getColumn(i, "DSC_C"));
        				this.ds_adj.setColumn(row, "CONT_C", this.ds_adjc.getColumn(i, "CONT_C"));
        				this.ds_adj.setColumn(row, "DSC_NM", this.ds_adjc.getColumn(i, "DSC_NM"));
        				this.ds_adj.setColumn(row, "CONT_NM", this.ds_adjc.getColumn(i, "CONT_NM"));
        				this.ds_adj.setColumn(row, "TOT_AM", adjTotAm);
        				this.ds_adj.setColumn(row, "COLUNM", "ADJ_TOT_AM"+result+"_"+result1);
        				this.ds_adj.setColumn(row, "TMP_YN", this.ds_mmadj.getColumn(0, "TMP_YN"));
        			}		
        		}
        	
        		for (var i=0; i< this.ds_adj.getRowCount(); i++) { 
        			if (this.ds_adj.getColumn(i, "DSC_C") == "ADJ2"){ // 운영사(나)
        				if(this.ds_adj.getColumn(i, "CONT_C") == "ADJ1") // 비용합계(D) 
        				{
        					this.ds_adj.setColumn(i, "TOT_AM", ctsHapAm);
        				}else if(this.ds_adj.getColumn(i, "CONT_C") == "ADJ2") // 사무실이용료(E) 
        				{
        					this.ds_adj.setColumn(i, "TOT_AM", ctsTotAm2_6);
        				}
        			}
        		}
        		
        		this.ds_mmadj.setColumn(0, "ADJ_TOT_AM2_1", ctsHapAm);
        		this.ds_mmadj.setColumn(0, "ADJ_TOT_AM2_2", ctsTotAm2_6);
        	
        	}else{
        		for (var i=0; i< this.ds_adjc.getRowCount(); i++) {
        			var result = this.ds_adjc.getColumn(i, "DSC_C").replace(regex, "");    //구분번호
        			var result1 = this.ds_adjc.getColumn(i, "CONT_C").replace(regex, ""); // 내역번호		
        			var orgAdjTotAm=this.ds_mmadj.getColumn(0, "ADJ_TOT_AM"+result+"_"+result1);// 합계
        			if(!this.gfn_isNull(orgAdjTotAm)){
        				row = this.ds_adj.addRow();
        				adjTotAm = nexacro.toNumber(orgAdjTotAm);
        				if(nexacro.toNumber(this.ds_mmadj.getColumn(0, "RMS_MM")) < 201808){
        					if(this.ds_adjc.getColumn(i, "DSC_C") == "ADJ2" && this.ds_adjc.getColumn(i, "CONT_C") == "ADJ2"){
        						this.ds_adj.setColumn(row, "GROUP", "ADJ");
        						this.ds_adj.setColumn(row, "DSC_C", "ADJ1");
        						this.ds_adj.setColumn(row, "CONT_C", "ADJ1_1");
        						this.ds_adj.setColumn(row, "DSC_NM", "농협(가)");
        						this.ds_adj.setColumn(row, "CONT_NM", "사무실이용료");
        						this.ds_adj.setColumn(row, "TOT_AM", adjTotAm);
        						this.ds_adj.setColumn(row, "COLUNM", "");
        						this.ds_adj.setColumn(row, "TMP_YN", this.ds_mmadj.getColumn(0, "TMP_YN"));
        						if(!this.gfn_isNull(ctsTotAm3_23)){
        							row = this.ds_adj.addRow();
        							this.ds_adj.setColumn(row, "GROUP", "ADJ");
        							this.ds_adj.setColumn(row, "DSC_C", this.ds_adjc.getColumn(i, "DSC_C"));
        							if(this.ds_mmadj.getColumn(0, "RMS_MM") == '201603'){
        								this.ds_adj.setColumn(row, "CONT_C", "ADJ99_1");
        							}else{
        								this.ds_adj.setColumn(row, "CONT_C", "ADJ1_1");
        							}
        							this.ds_adj.setColumn(row, "DSC_NM", this.ds_adjc.getColumn(i, "DSC_NM"));
        							this.ds_adj.setColumn(row, "CONT_NM", "위탁수수료");
        							this.ds_adj.setColumn(row, "TOT_AM", ctsTotAm3_23);
        							this.ds_adj.setColumn(row, "COLUNM", "ADJ_TOT_AM"+result+"_"+result1);
        							this.ds_adj.setColumn(row, "TMP_YN", this.ds_mmadj.getColumn(0, "TMP_YN"));
        						}
        					} else{
        						this.ds_adj.setColumn(row, "GROUP", "ADJ");
        						this.ds_adj.setColumn(row, "DSC_C", this.ds_adjc.getColumn(i, "DSC_C"));
        						this.ds_adj.setColumn(row, "CONT_C", this.ds_adjc.getColumn(i, "CONT_C"));
        						this.ds_adj.setColumn(row, "DSC_NM", this.ds_adjc.getColumn(i, "DSC_NM"));
        						this.ds_adj.setColumn(row, "CONT_NM", this.ds_adjc.getColumn(i, "CONT_NM"));
        						this.ds_adj.setColumn(row, "TOT_AM", adjTotAm);
        						this.ds_adj.setColumn(row, "COLUNM", "ADJ_TOT_AM"+result+"_"+result1);
        						this.ds_adj.setColumn(row, "TMP_YN", this.ds_mmadj.getColumn(0, "TMP_YN"));
        					}
        				}else{
        					this.ds_adj.setColumn(row, "GROUP", "ADJ");
        					this.ds_adj.setColumn(row, "DSC_C", this.ds_adjc.getColumn(i, "DSC_C"));
        					this.ds_adj.setColumn(row, "CONT_C", this.ds_adjc.getColumn(i, "CONT_C"));
        					this.ds_adj.setColumn(row, "DSC_NM", this.ds_adjc.getColumn(i, "DSC_NM"));
        					this.ds_adj.setColumn(row, "CONT_NM", this.ds_adjc.getColumn(i, "CONT_NM"));
        					this.ds_adj.setColumn(row, "TOT_AM", adjTotAm);
        					this.ds_adj.setColumn(row, "COLUNM", "ADJ_TOT_AM"+result+"_"+result1);
        					this.ds_adj.setColumn(row, "TMP_YN", this.ds_mmadj.getColumn(0, "TMP_YN"));
        				}		
        			}
        		}
        	}		
        	
        	this.ds_adj.set_keystring("G:GROUP,DSC_C");
        	
        	if (this.ds_mmadj.getColumn(0, "TMP_YN")  == "Y"){
        		if(this.ds_adj.getColumn(0, "DSC_C") == "ADJ1" && this.ds_adj.getColumn(0, "CONT_C") == "ADJ1"){
        			this.ds_adj.setColumn(0, "TOT_AM", rqsHap-adjHap2);
        		}
        	}	
        }

        // 청구부분 금액, 부가세, 합계 계산
        this.fn_rqsHap = function(row,dsc_c,dsc,totAm)
        {	
        	if(this.ds_rqs.getRowLevel(row) > 0) // 소계 및 총계
        	{
        		if(this.ds_rqs.getRowLevel(row) == 1) //소계
        		{	
        			if(dsc_c == "RQS2")
        			{
        				rqsHap = totAm;
        			}
        			if(dsc == '1'){
        				return nexacro.round(totAm/1.1);
        			}else if(dsc == '2'){
        				return nexacro.round(totAm/1.1 * 0.1);
        			}else{
        				return totAm;
        			}
        		}else{ //총계
        			if(dsc == '1'){
        				return nexacro.round(rqsHap/1.1);
        			}else if(dsc == '2'){
        				return nexacro.round(rqsHap/1.1 * 0.1);
        			}else{
        				return rqsHap;
        			}
        		}
        	}else{ // 내역부분
        		if(dsc == '1'){
        			return nexacro.round(totAm/1.1);
        		}else if(dsc == '2'){
        			return nexacro.round(totAm/1.1 * 0.1);
        		}else{
        			return totAm;
        		}
        	}
        }

        // 비용부분 금액, 부가세계산
        this.fn_ctsHap = function (row,dsc_c,dsc,totAm)
        {	
        	if(totAm.toString().length > 0)
        	{
        		if(this.ds_mmadj.getColumn(0, "RMS_MM") == '201612')
        		{
        			if(this.ds_cts.getRowLevel(row) > 0) // 소계 및 총계
        			{
        				var totAm_1 = nexacro.toNumber(totAm)-1;
        				if(this.ds_cts.getRowLevel(row) == 1) //소계
        				{	
        					if(dsc_c == "CTS3")
        					{
        						if(dsc == '1'){
        							return nexacro.round(totAm_1/1.1);
        						}else if(dsc == '2'){
        							return nexacro.round(totAm_1/1.1 * 0.1);
        						}else{
        							return totAm_1;
        						}
        					}else{
        						if(dsc == '1'){
        							return nexacro.round(totAm/1.1);
        						}else if(dsc == '2'){
        							return nexacro.round(totAm/1.1 * 0.1);
        						}else{
        							return totAm;
        						}
        					}	
        				}else{ //총계
        					if(dsc == '1'){
        						return nexacro.round(totAm_1/1.1);
        					}else if(dsc == '2'){
        						return nexacro.round(totAm_1/1.1 * 0.1);
        					}else{
        						return totAm_1;
        					}
        				}
        			}else{ // 내역부분
        				if(dsc == '1'){
        					return nexacro.round(totAm/1.1);
        				}else if(dsc == '2'){
        					return nexacro.round(totAm/1.1 * 0.1);
        				}else{
        					return totAm;
        				}
        			}
        		}else{
        		   if(dsc == '1'){
        				return nexacro.round(totAm/1.1);
        			}else if(dsc == '2'){
        				return nexacro.round(totAm/1.1 * 0.1);
        			}else{
        				return totAm;	
        			}
        		}	
        	}else{
        		return "";	
        	}
        }

        // 정산부분 금액, 부가세, 합계 계산
        this.fn_adjHap = function (row,dsc_c,dsc)
        {
        	if(this.ds_adj.getRowLevel(row) > 0)
        	{
        	
        		if(this.ds_adj.getRowLevel(row) == 1)
        		{
        			adjHap =0;
        			if(dsc_c == "ADJ1")
        			{
        				row1 = row;
        				for (var j=0; j< row; j++) {
        					
        					if(!this.gfn_isNull(this.ds_adj.getColumn(j, "CONT_C"))){
        						if((this.ds_adj.getColumn(j, "CONT_C")).substr(0,4) == "ADJ1"){
        							adjHap += nexacro.toNumber(this.ds_adj.getColumn(j, "TOT_AM"));
        						}
        					}	
        				}
        				adjHap1 = adjHap;		
        			}else if(dsc_c == "ADJ2")
        			{
        				adjHap =0;	
        				row2 = row;
        				for (var j=row1; j< row; j++) {
        					if(!this.gfn_isNull(this.ds_adj.getColumn(j, "CONT_C"))){
        						if(this.ds_adj.getColumn(j, "CONT_C").substr(0,4) == "ADJ1"){
        							adjHap += nexacro.toNumber(this.ds_adj.getColumn(j, "TOT_AM"));
        						}else if(this.ds_adj.getColumn(j, "CONT_C") == "ADJ2"){
        							adjHap = adjHap - nexacro.toNumber(this.ds_adj.getColumn(j, "TOT_AM"));							
        						}else if(this.ds_adj.getColumn(j, "CONT_C") == "ADJ3"){
        							adjHap = adjHap - nexacro.toNumber(this.ds_adj.getColumn(j, "TOT_AM"));
        						}else if(this.ds_adj.getColumn(j, "CONT_C") == "ADJ4"){
        							adjHap = adjHap + nexacro.toNumber(this.ds_adj.getColumn(j, "TOT_AM"));
        						}else if(this.ds_adj.getColumn(j, "CONT_C") == "ADJ5"){
        							adjHap = adjHap - nexacro.toNumber(this.ds_adj.getColumn(j, "TOT_AM"));
        						}else if(this.ds_adj.getColumn(j, "CONT_C") == "ADJ6"){
        							adjHap = adjHap - nexacro.toNumber(this.ds_adj.getColumn(j, "TOT_AM"));
        						}
        					}
        				}
        				adjHap2 = adjHap;
        				
        			}else
        			{
        				adjHap =0;
        				for (var j=row2; j< row; j++) {
        					if(this.ds_adj.getColumn(j, "CONT_C") == "ADJ1"){
        						adjHap = nexacro.toNumber(this.ds_adj.getColumn(j, "TOT_AM"));
        					}
        				}
        				adjHap3 = adjHap;
        			}
        			if(!this.gfn_isNull(adjHap)){
        				if(dsc == '1'){
        					return nexacro.round(adjHap/1.1);
        				}else if(dsc == '2'){
        					return nexacro.round(adjHap/1.1 * 0.1);
        				}else{
        					return adjHap;
        				}
        			}		
        		}else{
        			adjHap = adjHap1 + adjHap2;
        			if(!this.gfn_isNull(adjHap)){
        				if(dsc == '1'){
        					return nexacro.round(adjHap/1.1);
        				}else if(dsc == '2'){
        					return nexacro.round(adjHap/1.1 * 0.1);
        				}else{
        					return adjHap;
        				}
        			}	
        		}
        	}else{
        		if(!this.gfn_isNull(this.ds_adj.getColumn(row, "TOT_AM"))){
        			if(dsc == '1'){
        				return nexacro.round(this.ds_adj.getColumn(row, "TOT_AM")/1.1);
        			}else if(dsc == '2'){
        				return nexacro.round(this.ds_adj.getColumn(row, "TOT_AM")/1.1 * 0.1);
        			}else{
        				return this.ds_adj.getColumn(row, "TOT_AM");
        			}
        		}	
        	}
        }

        this.ds_cts_oncolumnchanged = function(obj,e)
        {
        	if(this.ds_cts.userdata == 1){
        		this.fn_data(e.row);
        		this.fn_adjList();		
        	}
        }

        this.fn_data = function(row)
        {	
        	this.ds_mmadj.setColumn(0, this.ds_cts.getColumn(row, "COLUNM"), this.ds_cts.getColumn(row, "TOT_AM"));
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_cts.addEventHandler("oncolumnchanged", this.ds_cts_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.cal_by_dt.addEventHandler("onkillfocus", this.div_search_cal_by_dt_onkillfocus, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.Div02.Button75.addEventHandler("onclick", this.Div02_Button75_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8110.xfdl");
        this.loadPreloadList();
       
    };
}
)();
