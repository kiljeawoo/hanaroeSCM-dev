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
                this.set_name("upload");
                this.set_classname("upload");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_file", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new FileDialog("FileDialog00", this);
            obj.set_filter("All(*.*)|*.*|");
            obj.set_filterindex("0");
            obj.set_defaultextension("false");
            this.addChild(obj.name, obj);

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "47.66%", "46", null, "21", "40.63%", null, this);
            obj.set_taborder("0");
            obj.set_text("Add");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "3.42%", "95", null, "274", "24.9%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_file");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"FILENAME\"/><Cell col=\"1\" disptype=\"normal\" text=\"FILETYPE\"/><Cell col=\"2\" disptype=\"normal\" text=\"FILESIZE\"/><Cell col=\"3\" disptype=\"normal\" text=\"ORGFNAME\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:FILENAME\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:FILETYPE\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:FILESIZE\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:ORGFNAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "62.5%", "46", null, "21", "25.78%", null, this);
            obj.set_taborder("2");
            obj.set_text("Up");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00", "absolute", "16.21%", "32", null, "22", "62.5%", null, this);
            obj.set_taborder("3");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            obj.set_multiselect("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("upload");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("upload.xfdl", "lib::comLib.xjs");
        this.registerScript("upload.xfdl", function() {
        /*
        3. gfn_AddMultiFile() : Multi 업로드할 경우 파일을 선택 추가..
        	ex)
        		gfn_AddMultiFile(ds_File, "ATTCH_FILE_NAME", "ATTCH_FILE_TYPE_CD", "FILE_SIZE", "ATTCH_FILE_PATH_NAME");
        		

        		
        4. gfn_UploadMultiFile() : Multi File 업로드
        	ex)
        		gfn_UploadMultiFile(ds_File, "on_upload", "ATTCH_FILE_ID", "ATTCH_FILE_NAME", "ATTCH_FILE_TYPE_CD", "ATTCH_FILE_PATH_NAME", "ATTCH_FILE_PATH_NAME");
        		
        		//업로드 후처리, 업로드 결과는 ds_File에 저장됨
        		function on_upload(bSuccess)
        		{
        			if (bSuccess){
        				alert("파일 업로드 성공, 이부분에서 저장 함수 Call!!!! ");
        			} else {
        				alert("업로드 실패");
        			}
        		}
        	*/
        //include "lib::comLib.xjs";

        this.Button00_onclick = function(obj,e)
        {
        	//this.gfn_AddMultiFile(this.ds_file, "ATTCH_FILE_NAME", "ATTCH_FILE_TYPE_CD", "FILE_SIZE", "ATTCH_FILE_PATH_NAME");
        	//var fileDlg = this.fn_createFileDialog(this);  // 파일 대화상자 생성
        	
        	//var objFileList = fileDlg.open("File Upload", FileDialog.MULTILOAD);
        	var objFileList = this.FileDialog00.open("File Upload", FileDialog.MULTILOAD);

        
        	trace(this.gfn_isNull(objFileList));

            if (!this.gfn_isNull(objFileList))
            {
                var nFileSize = 0;
        		for (var i = 0; i < objFileList.length; i++) 
        		{		
                    if (objFileList[i].open(VirtualFile.openRead| VirtualFile.openBinary)) 
                    {
                        nFileSize = objFileList[i].getFileSize();
                        objFileList[i].close();
                    }
                    var nRow = this.ds_file.addRow();
                    this.ds_file.setColumn(nRow, fileName, objFileList[i].filename);
                    this.ds_file.setColumn(nRow, fileType, String(objFileList[i].filename).substr(String(objFileList[i].filename).lastIndexOf(".")+1, String(objFileList[i].filename).length));
                    this.ds_file.setColumn(nRow, fileSize, nFileSize); 
                    this.ds_file.setColumn(nRow, fullPath, objFileList[i].fullpath);
                }  
            }
           
        	trace(this.ds_file.saveXML());
        }

        this.fn_createFileDialog = function(obj)
        {
        	if(this.fileDlg == null) {
        		this.fileDlg = new FileDialog("__gv_Comp_FileUpload");
        		this.addChild("__gv_Comp_FileDlg", this.fileDlg);
        	}
        	return this.fileDlg;
        }

        this.Button01_onclick = function(obj,e)
        {
        	//this.gfn_UploadMultiFile(this.ds_File, "on_upload", "ATTCH_FILE_ID", "ATTCH_FILE_NAME", "ATTCH_FILE_TYPE_CD", "ATTCH_FILE_PATH_NAME", "ATTCH_FILE_PATH_NAME");	
        }

        // this.on_upload = function(bSuccess)
        // {
        // 	if (bSuccess){
        // 		alert("파일 업로드 성공, 이부분에서 저장 함수 Call!!!! ");
        // 	} else {
        // 		alert("업로드 실패");
        // 	}
        // }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("upload.xfdl");

       
    };
}
)();
