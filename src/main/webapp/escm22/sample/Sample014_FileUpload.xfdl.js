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
                this.set_name("SAMPLE_FileUpload");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,925,371);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_uploadresult", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new FileUpload("FileUpload00", "absolute", null, "43", "72", "21", "186", null, this);
            obj.set_taborder("0");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.set_multiselect("true");
            obj.set_visible("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", null, "43", "70", "21", "109", null, this);
            obj.set_taborder("1");
            obj.set_text("Single");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "26", "77", null, "275", "27", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_uploadresult");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"FILENAME\"/><Cell col=\"2\" text=\"FILETYPE\"/><Cell col=\"3\" text=\"FILESIZE\"/><Cell col=\"4\" text=\"ORGFNAME\"/><Cell col=\"5\" text=\"SYSTEMFILENAME\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILENAME\"/><Cell col=\"2\" text=\"bind:FILETYPE\"/><Cell col=\"3\" text=\"bind:FILESIZE\"/><Cell col=\"4\" text=\"bind:ORGFNAME\"/><Cell col=\"5\" text=\"bind:SYSTEMFILENAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute", "32", "29", "0", "0", null, null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", null, "43", "70", "21", "30", null, this);
            obj.set_taborder("4");
            obj.set_text("Multi");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 925, 371, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SAMPLE_FileUpload");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Sample014_FileUpload.xfdl", "lib::comLib.xjs");
        this.registerScript("Sample014_FileUpload.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        //UPLOAD
        this.FileUpload00_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        //SINGLE DOWNLOAD
        this.Button01_onclick = function(obj,e)
        {
        	this.gfn_callDownload(this.ds_uploadresult);	
        }

        //MULTI DOWNLOAD
        this.Button02_onclick = function(obj,e)
        {
        	this.gfn_callDownload(this.ds_uploadresult, "CHK");	// 두번째 인자에 체크박스에 bind된 컬럼명
        }

        this.FileUpload00_onsuccess = function(obj,e)
        {	

        	if( e.datasets == null )
        	{
        		trace("업로드 실패");
        	} else {
        		trace("업로드 성공");
        	
        		this.ds_uploadresult.clear();
        		this.ds_uploadresult.copyData(e.datasets[0]);		
        		this.ds_uploadresult.addColumn("CHK", "string"); //멀티건 인경우 'CHK'컬럼추가
        	}	
        }

        this.FileUpload00_onerror = function(obj,e)
        {
        	trace("FileUpload00_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.FileUpload00.addEventHandler("onitemchanged", this.FileUpload00_onitemchanged, this);
            this.FileUpload00.addEventHandler("onerror", this.FileUpload00_onerror, this);
            this.FileUpload00.addEventHandler("onsuccess", this.FileUpload00_onsuccess, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("Sample014_FileUpload.xfdl", true);

       
    };
}
)();
