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
                this.set_name("OMG_DS_SC_1630");
                this.set_titletext("농협공지사항(목록)");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_notice", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_SQNO\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ST_DTM\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ED_DTM\" type=\"string\" size=\"32\"/><Column id=\"OFANC_TINM\" type=\"string\" size=\"32\"/><Column id=\"OFANC_CNTN\" type=\"string\" size=\"32\"/><Column id=\"OFANC_PRU_NT\" type=\"string\" size=\"32\"/><Column id=\"BBRD_DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"CKNL_DSC\" type=\"string\" size=\"32\"/><Column id=\"BBRD_PUP_ST_DT\" type=\"string\" size=\"32\"/><Column id=\"BBRD_PUP_ED_DT\" type=\"string\" size=\"32\"/><Column id=\"BBRD_PUP_YN\" type=\"string\" size=\"32\"/><Column id=\"LS_CHGM\" type=\"string\" size=\"32\"/><Column id=\"LSCHG_DTM\" type=\"string\" size=\"32\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"32\"/><Column id=\"FS_RGM\" type=\"string\" size=\"32\"/><Column id=\"REPALY\" type=\"STRING\" size=\"256\"/><Column id=\"REIMG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">13</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"CONDITION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_delete", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_write", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("10");
            obj.set_text("쓰기");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("11");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("13");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_search", "absolute", "118", "10", "249", "21", null, null, this.div_search);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_search", "absolute", "15", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_search_innerdataset = new Dataset("cbo_search_innerdataset", this.div_search.cbo_search);
            cbo_search_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">내용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">작성자</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">글번호</Col></Row></Rows>");
            obj.set_innerdataset(cbo_search_innerdataset);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displayrowcount("5");
            obj = new Combo("cbo_num", "absolute", "524", "10", "55", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_num_innerdataset = new Dataset("cbo_num_innerdataset", this.div_search.cbo_num);
            cbo_num_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(cbo_num_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Static("Static05", "absolute", "421", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_text("출력할 갯수");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1", "30", "15", "42", null, null, this);
            obj.set_taborder("16");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "72", "56", "41", null, null, this);
            obj.set_taborder("17");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_notice", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("20");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "226", null, "338", "29", null, "0", this.div_notice);
            obj.set_taborder("14");
            obj.set_text("Div03");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_notice.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "363", "0", null, "12", "362", null, this.div_notice);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_notice.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "41", null, null, "0", "29", this.div_notice);
            obj.set_taborder("16");
            obj.set_binddataset("ds_notice");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\" band=\"left\"/><Column size=\"65\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"351\"/><Column size=\"56\"/><Column size=\"84\"/><Column size=\"77\"/><Column size=\"63\"/><Column size=\"55\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"첨부\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"작성자\"/><Cell col=\"5\" text=\"등록자사업장\"/><Cell col=\"6\" text=\"날짜\"/><Cell col=\"7\" text=\"조회수\"/><Cell col=\"8\" text=\"삭제여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:BBRD_SQNO\"/><Cell col=\"2\" text=\"expr:APDFL_YN=='Y'?'@':''\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:OFANC_TINM\"/><Cell col=\"4\" text=\"bind:FS_RGM\"/><Cell col=\"5\" text=\"bind:CLNTNM\"/><Cell col=\"6\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:FSRG_DTM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:OFANC_PRU_NT\"/><Cell col=\"8\" text=\"expr:BBRD_DEL_YN == '1' ? '삭제' : ''\"/></Band></Format></Formats>");
            this.div_notice.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 419, this.div_notice,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("20");
            		p.set_text("Div02");

            	}
            );
            this.div_notice.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("농협공지사항(목록)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.edt_search","value","ds_condition","SEARCH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.cbo_search","value","ds_condition","CONDITION");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4510.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4510.xfdl", function() {
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
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
            //페이지 로딩후 실행부분
            this.div_notice.Grid01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_search.edt_search.set_value("");
        	this.div_search.cbo_search.set_index(0);
        	this.div_search.cbo_num.set_index(0);
        	this.btn_search.click();
        }

        
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveNacfOfancList = function()
        {
        	var sSvcID        = "retrieveNacfOfancList";
        	var sURL          = "svc::rest/pt/blbd/retrieveNacfOfancList";
        	var sInDatasets   = "ds_condition=ds_condition ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_notice=ds_notice ds_pageVO=ds_pageVO";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0) //에러
         	{
        		trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
         	}
         	else 
         	{
        		switch(svcID)
        		{
        			case "retrieveNacfOfancList":
        				if(this.ds_notice.rowcount > 0)
        				{ 
        					var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        					var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        								
        					this.div_notice.div_paging.fn_pageSet(sTotal, sPagesize,"Grid01,div_page",lsNowPage);	
        									  
        				}
        				else if(this.ds_notice.rowcount == 0)
        				{
        					this.div_paging.fn_pageSet(0, 0,"Grid01,div_page",lsNowPage);//페이징 설정			
        				}
        				break;
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_search":	
        			this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        			break;
        		case "btn_write":
        			//this.go("OMG.PT::OMG_DS_SC_1631.xfdl");
        			break;
        		case "btn_delete":
        			break;
        	}
        }

        this.grd_oncellclick = function(obj,e)
        { 
        	this.fn_openNoticeDetail(e.row);
        }

        this.div_search_edt_search_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.btn_search.click();
        	}
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_openNoticeDetail = function(nRow)
        {
        	var oArg = {noticeSeq:this.ds_notice.getColumn(nRow, "BBRD_SQNO")};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("OMG_DS_SC_4511","OMG.PT::OMG_DS_SC_4511.xfdl",oArg,sOption,sPopupCallBack);	   
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        	this.fn_retrieveNacfOfancList();
        }
        /************************************************************************************************
         * 페이징처리
        ************************************************************************************************/
        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_notice.clearData();     //Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = this.div_search.cbo_num.value; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; 	//전체건수. 화면조회후 리턴받아 사용
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);	 
        	 
        	var argumentObj = "";
        		
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	this.fn_retrieveNacfOfancList();
         
        }

        this.div_notice_btn_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_notice);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_delete.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_write.addEventHandler("onclick", this.btn_onclick, this);
            this.div_search.edt_search.addEventHandler("onkeydown", this.div_search_edt_search_onkeydown, this);
            this.div_notice.Button75.addEventHandler("onclick", this.div_notice_btn_onclick, this);
            this.div_notice.Grid01.addEventHandler("oncellclick", this.grd_oncellclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4510.xfdl");
        this.loadPreloadList();
       
    };
}
)();
