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
                this.set_name("frm_VAN_DS_SC_0700");
                this.set_titletext("Page Button");
                this._setFormPosition(0,0,803,605);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd_detail01", "absolute", "-1", "8", null, "135", "1", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_gridDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"68\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"73\"/><Column size=\"120\"/><Column size=\"75\"/><Column size=\"76\"/><Column size=\"120\"/><Column size=\"78\"/></Columns><Rows><Row size=\"47\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"입수\"/><Cell col=\"6\" text=\"단가\"/><Cell col=\"7\" text=\"수주량\"/><Cell col=\"8\" text=\"BOX수량\"/><Cell col=\"9\" text=\"수주금액\"/><Cell col=\"10\" text=\"공병금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:PHD_NA_BZPLC\"/><Cell col=\"2\" text=\"bind:SHRT_BZPLNM\"/><Cell col=\"3\" text=\"bind:PHD_DLR_DSC\"/><Cell col=\"4\" text=\"bind:NA_TRPL_C\"/><Cell col=\"5\" text=\"bind:CLNTNM\"/><Cell col=\"6\" text=\"bind:NA_WRS_C\" mask=\"#,##0\"/><Cell col=\"7\" text=\"bind:WRSNM\" mask=\"#,##0\"/><Cell col=\"8\" text=\"bind:WRS_STDNM\" mask=\"#,##0\"/><Cell col=\"9\" text=\"bind:INPD_QT\" mask=\"#,##0\"/><Cell col=\"10\" text=\"bind:BYNG_UPR\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_detail00", "absolute", "0", "182", null, "141", "0", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_gridDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"68\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"73\"/><Column size=\"120\"/><Column size=\"75\"/><Column size=\"76\"/><Column size=\"120\"/><Column size=\"78\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"99\"/><Column size=\"106\"/><Column size=\"120\"/></Columns><Rows><Row size=\"47\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"입수\"/><Cell col=\"6\" text=\"단가\"/><Cell col=\"7\" text=\"수주량\"/><Cell col=\"8\" text=\"BOX수량\"/><Cell col=\"9\" text=\"수주금액\"/><Cell col=\"10\" text=\"부가세액\"/><Cell col=\"11\" text=\"공병금액\"/><Cell col=\"12\" text=\"최초등록자&#13;&#10;개인번호\"/><Cell col=\"13\" text=\"최초등록일시\"/><Cell col=\"14\" text=\"최종변경일시\"/><Cell col=\"15\" text=\"최종변경자&#13;&#10;개인번호\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:PHD_NA_BZPLC\"/><Cell col=\"2\" text=\"bind:SHRT_BZPLNM\"/><Cell col=\"3\" text=\"bind:PHD_DLR_DSC\"/><Cell col=\"4\" text=\"bind:NA_TRPL_C\"/><Cell col=\"5\" text=\"bind:CLNTNM\"/><Cell col=\"6\" text=\"bind:NA_WRS_C\" mask=\"#,##0\"/><Cell col=\"7\" text=\"bind:WRSNM\" mask=\"#,##0\"/><Cell col=\"8\" text=\"bind:WRS_STDNM\" mask=\"#,##0\"/><Cell col=\"9\" text=\"bind:INPD_QT\" mask=\"#,##0\"/><Cell col=\"10\" text=\"bind:BYNG_UPR\" mask=\"#,##0\"/><Cell col=\"11\" text=\"bind:PHD_OUT_QT\" mask=\"#,##0\"/><Cell col=\"12\" text=\"bind:PHD_OUT_PER_QT\"/><Cell col=\"13\" text=\"bind:CUS_CNR_QT\"/><Cell col=\"14\" text=\"bind:CUS_CNR_PER_QT\"/><Cell col=\"15\" text=\"bind:CUS_CNR_AMT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_detail02", "absolute", "0", "361", null, "141", "0", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_gridDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"68\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"102\"/><Column size=\"120\"/><Column size=\"75\"/><Column size=\"76\"/><Column size=\"120\"/><Column size=\"78\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"99\"/><Column size=\"106\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"47\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"BOX당 입수\"/><Cell col=\"6\" text=\"단가\"/><Cell col=\"7\" text=\"수주량\"/><Cell col=\"8\" text=\"BOX수량\"/><Cell col=\"9\" text=\"수주금액\"/><Cell col=\"10\" text=\"부가세액\"/><Cell col=\"11\" text=\"공병금액\"/><Cell col=\"12\" text=\"최초등록자&#13;&#10;개인번호\"/><Cell col=\"13\" text=\"최초등록일시\"/><Cell col=\"14\" text=\"최종변경일시\"/><Cell col=\"15\" text=\"최종변경자&#13;&#10;개인번호\"/><Cell col=\"16\" text=\"삭제일시\"/><Cell col=\"17\" text=\"물류기능코드\"/><Cell col=\"18\" text=\"소분여부\"/><Cell col=\"19\" text=\"소분단위수량\"/><Cell col=\"20\" text=\"박스당입수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:PHD_NA_BZPLC\"/><Cell col=\"2\" text=\"bind:SHRT_BZPLNM\"/><Cell col=\"3\" text=\"bind:PHD_DLR_DSC\"/><Cell col=\"4\" text=\"bind:NA_TRPL_C\"/><Cell col=\"5\" text=\"bind:CLNTNM\" mask=\"#,##0\"/><Cell col=\"6\" text=\"bind:NA_WRS_C\"/><Cell col=\"7\" text=\"bind:WRSNM\" mask=\"#,##0\"/><Cell col=\"8\" text=\"bind:WRS_STDNM\" mask=\"#,##0\"/><Cell col=\"9\" text=\"bind:INPD_QT\" mask=\"#,##0\"/><Cell col=\"10\" text=\"bind:BYNG_UPR\" mask=\"#,##0\"/><Cell col=\"11\" text=\"bind:PHD_OUT_QT\" mask=\"#,##0\"/><Cell col=\"12\" text=\"bind:PHD_OUT_PER_QT\"/><Cell col=\"13\" text=\"bind:CUS_CNR_QT\"/><Cell col=\"14\" text=\"bind:CUS_CNR_PER_QT\"/><Cell col=\"15\" text=\"bind:CUS_CNR_AMT\"/><Cell col=\"16\" text=\"bind:CUS_CNR_AMT\"/><Cell col=\"17\" text=\"bind:CUS_CNR_AMT\"/><Cell col=\"18\" text=\"bind:CUS_CNR_AMT\"/><Cell col=\"19\" text=\"bind:CUS_CNR_AMT\" mask=\"#,##0\"/><Cell col=\"20\" text=\"bind:CUS_CNR_AMT\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_detail03", "absolute", "7", "528", null, "141", "-7", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_gridDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"68\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"73\"/><Column size=\"120\"/><Column size=\"75\"/><Column size=\"76\"/><Column size=\"120\"/><Column size=\"78\"/></Columns><Rows><Row size=\"47\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"발주일자\"/><Cell col=\"2\" text=\"발주번호\"/><Cell col=\"3\" text=\"정산처\"/><Cell col=\"4\" text=\"정산처명\"/><Cell col=\"5\" text=\"수주량\"/><Cell col=\"6\" text=\"수주금액\"/><Cell col=\"7\" text=\"부가세액\"/><Cell col=\"8\" text=\"공병금액\"/><Cell col=\"9\" text=\"발주상태\"/><Cell col=\"10\" text=\"발주자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:PHD_NA_BZPLC\"/><Cell col=\"2\" text=\"bind:SHRT_BZPLNM\"/><Cell col=\"3\" text=\"bind:PHD_DLR_DSC\"/><Cell col=\"4\" text=\"bind:NA_TRPL_C\"/><Cell col=\"5\" text=\"bind:CLNTNM\" mask=\"#,##0\"/><Cell col=\"6\" text=\"bind:NA_WRS_C\" mask=\"#,##0\"/><Cell col=\"7\" text=\"bind:WRSNM\" mask=\"#,##0\"/><Cell col=\"8\" text=\"bind:WRS_STDNM\" mask=\"#,##0\"/><Cell col=\"9\" text=\"bind:INPD_QT\"/><Cell col=\"10\" text=\"bind:BYNG_UPR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "426", "697", "79", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("배송구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_spypl_type00", "absolute", "496", "697", "301", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_spypl_type00_innerdataset = new Dataset("rdo_spypl_type00_innerdataset", this.rdo_spypl_type00);
            rdo_spypl_type00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체 </Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">일반</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">직송</Col></Row></Rows>");
            obj.set_innerdataset(rdo_spypl_type00_innerdataset);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");

            obj = new Static("Static05", "absolute", "426", "723", "79", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("배송구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_spypl_type01", "absolute", "496", "723", "279", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_spypl_type01_innerdataset = new Dataset("rdo_spypl_type01_innerdataset", this.rdo_spypl_type01);
            rdo_spypl_type01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예정서번호</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">배송예정일</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">발주처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_spypl_type01_innerdataset);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");

            obj = new Static("Static09", "absolute", "426", "749", "79", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_spypl_type02", "absolute", "496", "749", "301", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_spypl_type02_innerdataset = new Dataset("rdo_spypl_type02_innerdataset", this.rdo_spypl_type02);
            rdo_spypl_type02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">수주처+공급처</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">수주처</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">공급처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_spypl_type02_innerdataset);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");

            obj = new Combo("cbo_wmc_loc_rgn_dsc", "absolute", "535", "765", "81", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_rgn_c00");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Combo("cbo_ht_lov_rgn_c", "absolute", "618", "765", "85", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_rgn_c01");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 605, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("Page Button");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","rdo_spypl_type00","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","rdo_spypl_type01","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","rdo_spypl_type02","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("xxx.xfdl", "lib::comLib.xjs");
        this.registerScript("xxx.xfdl", function() {
        //include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        
        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	//trace("fn_commonAfterOnload");
        	
        	//this.div_search.cbo_contract_type.set_index(0);

        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {

        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),1));	
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	

        	this.fn_divListView();
        	
        	var rdo1 = this.div_search.rdo_search_type;
        	var rdo2 = this.div_search.rdo_search_period;
        	var rdo3 = this.div_search.rdo_spypl_type;
        	var rdoArr = [rdo1,rdo2,rdo3];
        	this.rdoAutoSize(rdoArr);
        				

        	this.fn_divListView();
        	
        	var rdo1 = this.div_search.rdo_search_type;
        	var rdo2 = this.div_search.rdo_search_period;
        	var rdo3 = this.div_search.rdo_spypl_type;
        	var rdoArr = [rdo1,rdo2,rdo3];
        	this.rdoAutoSize(rdoArr);

        }

        

        /* 조회구분에 따른 화면 변경 */
        this.div_search_rdo_search_type_onitemchanged = function(obj,e)
        {
        		this.fn_divListView();
        }

        this.fn_divListView  = function(){
        	var obj = this.div_search.rdo_search_type;
        	var divArray = new Array('', 'div_list00', 'div_list01', 'div_list02', 'div_list03');
        	for(var i = 1; i < divArray.length; i++){
        		if(obj.value == i){
        			eval("this."+divArray[i]+".set_visible(true)");
        			eval("this."+divArray[i]+".set_top(149)");
        		}else{
        			eval("this."+divArray[i]+".set_visible(false)");
        		}
        	}
        		
        	if(obj.value != "4"){
        		this.div_search.edt_na_wrs_c.set_value('');
        		this.div_search.edt_wrsnm.set_value('');
        		this.div_search.edt_na_wrs_c.set_visible(false);
        		this.div_search.edt_wrsnm.set_visible(false);
        		this.div_search.btn_popup.set_visible(false);
        	}else{
        		this.div_search.edt_na_wrs_c.set_visible(true);
        		this.div_search.edt_wrsnm.set_visible(true);
        		this.div_search.btn_popup.set_visible(true);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.cbo_wmc_loc_rgn_dsc.addEventHandler("onitemchanged", this.div_search_cbo_wmc_loc_rgn_dsc_onitemchanged, this);
            this.cbo_ht_lov_rgn_c.addEventHandler("onitemchanged", this.Div00_Combo01_onitemchanged, this);

        };

        this.loadIncludeScript("xxx.xfdl");

       
    };
}
)();
