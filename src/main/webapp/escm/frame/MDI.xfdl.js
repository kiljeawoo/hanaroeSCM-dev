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
                this.set_name("MDI");
                this._setFormPosition(0,0,818,32);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", null, "32", "0", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MDI_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "15", "5", "28", "27", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MDI_Home");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ctrMax", "absolute", null, "4", "26", "23", "108", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MDI_CtrMax");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ctrV", "absolute", null, "4", "26", "23", "86", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_MDI_CtrV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ctrH", "absolute", null, "4", "26", "23", "64", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_CtrH");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ctrOut", "absolute", null, "4", "26", "23", "42", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_MDI_CtrOut");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeAll", "absolute", null, "4", "26", "23", "20", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_MDI_CtrAllX");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, "10", "5", "11", "136", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MDI_BtnLine");
            obj.set_wordwrap("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "673", "71", "25", "26", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_MDI_PrevTab");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", "707", "71", "25", "25", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_MDI_NextTab");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_openList", "absolute", "15", "5", null, "26", "6.6%", null, this);
            obj.set_taborder("13");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_MDI_Mdi");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage_defalut", this.tab_openList);
            obj.set_text("상품상세조회");
            this.tab_openList.addChild(obj.name, obj);

            obj = new Static("Sta", "absolute", "8.8%", "56", null, "21", "76.53%", null, this);
            obj.set_taborder("14");
            obj.set_text("5.5%");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_MDIOpen", "absolute", null, "0", "15", "32", "1", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MDI_OpenBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_MDIClose", "absolute", null, "0", "15", "32", "1", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MDI_CloseBtn");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "10", "5", "11", "43", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MDI_BtnLine");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 818, 32, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MDI");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MDI.xfdl", "lib::comLib.xjs");
        this.registerScript("MDI.xfdl", function() {
        //include "lib::comLib.xjs";

        /**********************************************************************************************
        *프로그램명  :  
        *작  성  자  :  
        *작  성  일  :  
        *설      명  :  
        *수  정  일  : 
        *수  정  자  :
        *수정내용    :
        ***********************************************************************************************/
        this.form_onload = function(obj,e)
        { 
        	var nCnt = this.tab_openList.getTabpageCount();
        	
            for (var i=0; i<nCnt; i++) 
            {
                this.tab_openList.removeTabpage(0);
            }
        }

        this.gfn_formAddList = function (arg_id,arg_title)
        {
            var nIndex;
        	
            nIndex = this.tab_openList.insertTabpage(arg_id,-1,"", " " + arg_title + " ");

        	if (nIndex >= 0) 
            {
                this.tab_openList.set_visible(true);
                   
                this.tab_openList.style.set_color("");
        		this.tab_openList.style.set_buttonbackground("");
            }    
        }

        this.tab_openList_onextrabuttonclick = function(obj,e)
        {
        	
            var strFormId = this.tab_openList.tabpages[e.index].name;
        	
        	application.afrm_FrameSet.frames[strFormId].form.close();
        }

        this.formDelList = function (strId)
        {	
            var bResult;

            if (this.tab_openList.tabindex >= 0) 
            {       
                bResult = this.formPosition(strId);
                
                this.tab_openList.removeTabpage(bResult);
            }
        }

        this.formPosition = function (strName,strOpen)
        {
            var nCnt = this.tab_openList.getTabpageCount();

            for (var i=0; i<nCnt; i++) 
            {		
                if (this.tab_openList.tabpages[i].name == strName) 
                {
        			if(strOpen=="true"){
        				this.tab_openList.set_tabindex(i);
        			}
                    return i;
                }
            }
            
            return -1;
        }

        this.tab_openList_onlbuttonup = function(obj,e)
        {
        	if(e.index == -1) return;
        	this._gfn_tapChange(obj,e.index);
        }

        this.tab_openList_onchanged = function(obj,e)
        {
        	this._gfn_tapChange(obj,e.postindex);
        }

        this._gfn_tapChange = function (obj,nIndex) 
        {

        	//선택 보더 컨트롤 
        	this.tab_openList.style.set_color("");
        	this.tab_openList.style.set_buttonbackground("");

        	var strFormId = obj.tabpages[nIndex].name;

        	if(strFormId != "tabpage_defalut") ////초기값제외하고
        	{
        		application.afrm_FrameSet[strFormId].form.setFocus();
        	}
        	
        	var form = application.afrm_FrameSet[strFormId].form.div_work;
        	this.formOnActivate(form);
        }

        
        /***********************************************************************************/
        this.btn_MDIOpen_onclick = function(obj,e)
        {
        	application.afrm_VFrameSet0.set_separatesize("0,65,*");
        	this.btn_MDIClose.set_visible(true);
        	this.btn_MDIOpen.set_visible(false);
        }

        this.btn_MDIClose_onclick = function(obj,e)
        {
        	application.afrm_VFrameSet0.set_separatesize("0,0,*");
        	this.btn_MDIClose.set_visible(false);
        	this.btn_MDIOpen.set_visible(true);
        }

        this.btn_closeAll_onclick = function(obj,e)
        {
        	if(this.tab_openList.getTabpageCount() > 0){
        		var bFlag = confirm("현재창을 제외하고 종료하겠습니까?");
        		
        		if(!bFlag){
        			return;
        		}
        		
        		var strFormId;
        	
        		var nCnt = this.tab_openList.getTabpageCount()-1;
        		
        		var nIndex = this.tab_openList.tabindex;
        		var objFrameNm = this.tab_openList.tabpages[nIndex].name;
        		
        		for (var i=nCnt; i>=0; i--)
        		{			
        			strFormId = this.tab_openList.tabpages[i].name;
        						
        			if(objFrameNm == strFormId) continue;
        			
        			application.gds_openMenu.deleteRow(i);		
        			application.afrm_FrameSet[strFormId].form.close();			
        		}
        	}
        }

        this.btn_ctrMax_onclick = function(obj,e)
        {
        	var nCnt         = this.tab_openList.getTabpageCount()-1;
        	var fv_strFormId = this.tab_openList.tabpages[nCnt].name;
        	application.afrm_FrameSet[fv_strFormId].set_openstatus("maximize");	
        }

        this.btn_ctrV_onclick = function(obj,e)
        {
        	application.afrm_FrameSet.arrange("tilevertical");
        }

        this.btn_ctrH_onclick = function(obj,e)
        {
        	application.afrm_FrameSet.arrange("tilehorizontal");
        }

        this.btn_ctrOut_onclick = function(obj,e)
        {
        	application.afrm_FrameSet.arrange("cascade");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_ctrMax.addEventHandler("onclick", this.btn_ctrMax_onclick, this);
            this.btn_ctrV.addEventHandler("onclick", this.btn_ctrV_onclick, this);
            this.btn_ctrH.addEventHandler("onclick", this.btn_ctrH_onclick, this);
            this.btn_ctrOut.addEventHandler("onclick", this.btn_ctrOut_onclick, this);
            this.btn_closeAll.addEventHandler("onclick", this.btn_closeAll_onclick, this);
            this.tab_openList.addEventHandler("onextrabuttonclick", this.tab_openList_onextrabuttonclick, this);
            this.tab_openList.addEventHandler("onchanged", this.tab_openList_onchanged, this);
            this.btn_MDIOpen.addEventHandler("onclick", this.btn_MDIOpen_onclick, this);
            this.btn_MDIClose.addEventHandler("onclick", this.btn_MDIClose_onclick, this);

        };

        this.loadIncludeScript("MDI.xfdl");

       
    };
}
)();
