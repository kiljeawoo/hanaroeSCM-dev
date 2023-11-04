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
                this.set_name("Sample013_Paging");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_msg", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BZPLCNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"NBY_QT\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"NBY_AM\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"SRH_NBY_DT_FR\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SRH_NBY_DT_TO\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SRH_CHK_ALL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SRH_TRPL_C\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO1", this);
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

            obj = new Dataset("ds_pageVO2", this);
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

            obj = new Dataset("ds_msg2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BZPLCNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"NBY_QT\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"NBY_AM\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"SRH_NBY_DT_FR\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SRH_NBY_DT_TO\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SRH_CHK_ALL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SRH_TRPL_C\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "10", "13", null, "467", "9", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_background("beige");
            this.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "28.44%", "171", "338", "29", null, null, this.Div00);
            obj.set_taborder("0");
            obj.style.set_background("transparent");
            obj.set_url("common::pagingBTN.xfdl");
            this.Div00.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "17", "52", null, "120", "20", null, this.Div00);
            obj.set_taborder("1");
            obj.set_binddataset("ds_msg");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"BZPLC\"/><Cell col=\"1\" disptype=\"normal\" text=\"BZPLCNM\"/><Cell col=\"2\" disptype=\"normal\" text=\"NBY_QT\"/><Cell col=\"3\" disptype=\"normal\" text=\"NBY_AM\"/><Cell col=\"4\" disptype=\"normal\" text=\"SRH_NBY_DT_FR\"/><Cell col=\"5\" disptype=\"normal\" text=\"SRH_NBY_DT_TO\"/><Cell col=\"6\" disptype=\"normal\" text=\"SRH_CHK_ALL\"/><Cell col=\"7\" disptype=\"normal\" text=\"SRH_TRPL_C\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:BZPLC\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:BZPLCNM\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:NBY_QT\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:NBY_AM\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:SRH_NBY_DT_FR\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:SRH_NBY_DT_TO\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:SRH_CHK_ALL\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:SRH_TRPL_C\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", null, "16", "120", "21", "23", null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "2.17%", "244", null, "120", "2.55%", null, this.Div00);
            obj.set_taborder("3");
            obj.set_binddataset("ds_msg2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"BZPLC\"/><Cell col=\"1\" disptype=\"normal\" text=\"BZPLCNM\"/><Cell col=\"2\" disptype=\"normal\" text=\"NBY_QT\"/><Cell col=\"3\" disptype=\"normal\" text=\"NBY_AM\"/><Cell col=\"4\" disptype=\"normal\" text=\"SRH_NBY_DT_FR\"/><Cell col=\"5\" disptype=\"normal\" text=\"SRH_NBY_DT_TO\"/><Cell col=\"6\" disptype=\"normal\" text=\"SRH_CHK_ALL\"/><Cell col=\"7\" disptype=\"normal\" text=\"SRH_TRPL_C\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:BZPLC\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:BZPLCNM\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:NBY_QT\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:NBY_AM\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:SRH_NBY_DT_FR\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:SRH_NBY_DT_TO\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:SRH_CHK_ALL\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:SRH_TRPL_C\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            obj = new Div("div_page00", "absolute", "28.44%", "363", "338", "29", null, null, this.Div00);
            obj.set_taborder("4");
            obj.style.set_background("transparent");
            obj.set_url("common::pagingBTN.xfdl");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 467, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.style.set_background("beige");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample013_Paging");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Sample013_Paging.xfdl", "lib::comLib.xjs");
        this.registerScript("Sample013_Paging.xfdl", function() {
        //include "lib::comLib.xjs";

        this.Button00_onclick = function(obj,e)
        {
        	//페이징이 하나일때
        	this.fn_paging(1);       // 처음조회시 1페이지를 조회한다.
        	
        	//페이징이 두개이상일때
        	//this.fn_paging(1,this.Div00.div_page.name);    // 처음조회시 1페이지를 조회한다.
        	//this.fn_paging(1,this.Div00.div_page00.name);  // 처음조회시 1페이지를 조회한다.
        }

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum,objDivNm)
        {
        	var oDs, oBindDs;
        		
        	if(this.gfn_isNull(objDivNm)){
        		objDivNm = "div_page";
        	}
        	
        	if(objDivNm == "div_page"){
        		oDs     = this.ds_pageVO1;
        		oBindDs = this.ds_msg;
        	}else if(objDivNm == "div_page00"){
        		oDs     = this.ds_pageVO2;
        		oBindDs = this.ds_msg2;
        	}else{
        		
        	}
        	
        	oDs.clearData();  
        	oBindDs.clearData();     //Grid에 Binding된 Dataset명
        	
        	oDs.addRow(); 
        	
        	var vPageSize   =  oDs.getColumn(0, "PAGE_SIZE"); 	    //Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount =  oDs.getColumn(0, "TOTAL_ROW_COUNT"); 	//전체건수. 화면조회후 리턴받아 사용
        	
         	oDs.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	oDs.setColumn(0,"PAGE_SIZE",vPageSize);
         	oDs.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);	 
        	 
        	var argumentObj = "";
        	
         	lsNowPage = vPageNum;//현재페이지 설정 

        	this.fn_search();
        	
        	
        	// 	this.Div00.all[objDivNm].fn_pageSet(vTotalCount, vPageSize,objDivNm,lsNowPage);	
         
        }

        this.fn_search = function()
        {
        	//trace(this.ds_pageVO.saveXML());
        	var param = "NBY_DT_FR=20150601 NBY_DT_TO=20150630 CHK_ALL=Y TRPL_C=8809111690016";

        	var sSvcID        = "retrieveNPeriodStoreSum";
        	var sURL          = "svc::rest/pds/retrieveNPeriodStoreSum";		// svc = http://localhost:8080/nhvan/
        	var sInDatasets   = "ds_pageVO=ds_pageVO1";
        	var sOutDatasets  = "ds_msg=ds_dataM ds_pageVO1=ds_pageVO";
        	var sArgument     = param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType, true);
        }

        this.fn_callBack = function (svcId,errorCode,errorMsg)
        {	
        	if (errorCode == 0) 
        	{
        		if (svcId == "retrieveNPeriodStoreSum") 
        		{ 
        			if(this.ds_msg.rowcount > 0)
        			{ 
        				var sTotal    = this.ds_pageVO1.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO1.getColumn(0, "PAGE_SIZE");
        							
        				this.Div00.div_page.fn_pageSet(sTotal, sPagesize,"div_page",lsNowPage);	
        				                  
        			}
        			else if(this.ds_msg.rowcount == 0)
        			{
        				alert("조회할 내용이 없습니다.");
        				this.Div00.div_page.fn_pageSet(0, 0,"div_page",lsNowPage);//페이징 설정			
        			}
        		}
        	}	
        }

        this.Div00_onsize = function(obj,e)
        {
        	var nLeft = (e.cx/2)-(this.Div00.div_page.width/2);
        	this.Div00.div_page.set_left(nLeft);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Div00.addEventHandler("onsize", this.Div00_onsize, this);
            this.Div00.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("Sample013_Paging.xfdl");
        this.loadPreloadList();
       
    };
}
)();
