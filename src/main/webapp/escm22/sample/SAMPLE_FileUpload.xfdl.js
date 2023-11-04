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
                this.set_classname("SAMPLE_FileUpload");
                this.getSetter("inheritanceid").set("");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">C:\\Documents and Settings\\Administrator\\My Documents\\Cap.jpg</Col><Col id=\"Column1\">Y</Col></Row><Row><Col id=\"Column0\">C:\\Documents and Settings\\Administrator\\My Documents\\chocochip-1.jpg</Col><Col id=\"Column1\">N</Col></Row><Row><Col id=\"Column0\">C:\\Documents and Settings\\Administrator\\My Documents\\chocochip-3.jpg</Col><Col id=\"Column1\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uploadresult", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"fileName\" type=\"STRING\" size=\"32\"/><Column id=\"fileSize\" type=\"BIGDECIMAL\" size=\"8\"/><Column id=\"fileType\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Ds_Del", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FileNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FileNm\">00501.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new FileUpload("FileUpload00", "absolute", "16", "61", "307", "43", null, null, this);
            obj.set_taborder("0");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.set_index("0");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.set_multiselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "16", "112", "111", "44", null, null, this);
            obj.set_taborder("1");
            obj.set_text("FileUpload");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "332", "112", "111", "44", null, null, this);
            obj.set_taborder("1");
            obj.set_text("FileDownload");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "332", "61", "284", "41", null, null, this);
            obj.set_taborder("1");
            obj.getSetter("retry").set("0");
            obj.getSetter("onload").set("FileDownload00_onload");
            obj.set_text("FileDownload00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "26", "32", "280", "19", null, null, this);
            obj.set_text("FileUpload 컴포넌트");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "330", "32", "280", "19", null, null, this);
            obj.set_text("FileDownload 컴포넌트(클릭시 다운가능)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "76", "175", "645", "264", null, null, this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_uploadresult");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"fileName\"/><Cell col=\"1\" disptype=\"normal\" text=\"fileSize\"/><Cell col=\"2\" disptype=\"normal\" text=\"fileType\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:fileName\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:fileSize\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:fileType\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
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
        this.registerScript("SAMPLE_FileUpload.xfdl", function() {

        function FileDownload00_onload(obj,e)
        {
        	alert("다운로드 성공");
        }

        function fn_callback(svcID,nCD ,sMSG)
        {
        	if (nCD < 0 )
        	{
        		alert("실패");
        		return;
        	}
        	
        }

        this.Button00_onclick = function(obj,e)
        {
        	var strUrl = "http://172.10.11.156:8080/xplatform9-ajax-20140225-ajax/Work_Yong/fileupload.jsp?PATH=up_11";	
        	var bSucc = this.FileUpload00.upload(strUrl);	
        }

        this.Button01_onclick = function(obj,e)
        {
        	var strFileName = this.ds_uploadresult.getColumn(0,"fileName");
        	//FileDownload00.downloadfilename = strFileName;

        	this.FileDownload00.set_downloadurl("http://172.10.11.156:8080/xplatform9-ajax-20140225-ajax/Work_Yong/fileDownload.jsp?file="+strFileName);
        	var bSucc = this.FileDownload00.download();
        }

        this.FileUpload00_onitemchanged = function(obj,e)
        {
        	
        }

        this.FileUpload00_onerror = function(obj,e)
        {
        	trace("FileUpload00_onerror");
        	trace(e.errorcode);
        	trace(e.errormsg);
        }

        
        this.FileUpload00_onsuccess = function(obj,e)
        {
        	//trace(e);
        	for(a in e)
        	{
        		//trace(a + ">>> : " + e[a]);
        	}
        	//trace("FileUpload00_onload");
        	if( e.datasets == null )
        	{
        		this.alert("업로드 실패");
        	} else {
        		this.alert("업로드 성공");
        		this.alert(e.datasets[0]);
        		
        //		업로드 성공 후 받은 데이터셋에서 해당 파일의 파일명을 데이터셋에 저장.
        		//this.ds_uploadresult.setColumn(0,"fileName",e.datasets[0].getColumn(0,"fileName"));
        // 		this.Ds_Del.setColumn(0,"FileNm",e.datasets[0].getColumn(0,"fileName"));
        // 		
        // //		FileDown컴포넌트를 클릭시 다운로드 되도록 셋팅.
        // 		this.FileDownload00.set_text(e.datasets[0].getColumn(0,"fileName"));
        // 		this.FileDownload00.downloadfilename = e.datasets[0].getColumn(0,"fileName");
        // 		this.FileDownload00.set_downloadurl("http://172.10.11.156:8080/xplatform9-20140418-ajax/Yong_04/nexa_fileDownload.jsp?file="+e.datasets[0].getColumn(0,"fileName"));	
        // 		this.ds_uploadresult.copyData(e.datasets[0]);
        	}	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.FileUpload00.addEventHandler("onitemchanged", this.FileUpload00_onitemchanged, this);
            this.FileUpload00.addEventHandler("onerror", this.FileUpload00_onerror, this);
            this.FileUpload00.addEventHandler("onsuccess", this.FileUpload00_onsuccess, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.FileDownload00.addEventHandler("onclick", this.FileDownload00_onclick, this);
            this.FileDownload00.addEventHandler("onerror", this.FileDownload00_onerror, this);

        };

        this.loadIncludeScript("SAMPLE_FileUpload.xfdl");

       
    };
}
)();
