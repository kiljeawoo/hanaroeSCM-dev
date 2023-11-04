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
                this.set_name("popup01");
                this.set_cssclass("frm_WF_PopupBg");
                this.set_titletext("계약서 파일 첨부 팝업");
                this._setFormPosition(0,0,812,437);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_fyn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서 번호\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uploadresult00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_C\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_in", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서 번호\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("btn_newTop", "absolute", "0", "0", "812", "30", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "771", "0", "37", "32", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "36", "41", "21", "11", null, this);
            obj.set_taborder("26");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new TextArea("bigo", "absolute", "1.72%", "65", null, "175", "1.72%", null, this);
            obj.set_taborder("27");
            obj.set_lengthunit("ascii");
            obj.set_wordwrap("char");
            obj.set_maxlength("500");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file", "absolute", "8", "287", null, "141", "7", null, this);
            obj.set_taborder("29");
            obj.set_binddataset("ds_fyn");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"225\"/><Column size=\"350\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"서류명\"/><Cell col=\"2\" text=\"UPLOAD 파일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:DCM_NM\"/><Cell col=\"2\" text=\"bind:ORGFNAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fileDel", "absolute", "596", "261", "72", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("파일삭제");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload01", "absolute", "522", "261", "72", "21", null, null, this);
            obj.set_taborder("31");
            obj.getSetter("retry").set("0");
            obj.set_visible("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down", "absolute", "451", "261", "72", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("파일다운");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "8", "264", "76", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("첨부 파일");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "40", "301", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add", "absolute", null, "261", "53", "21", "64", null, this);
            obj.set_taborder("35");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del", "absolute", null, "261", "53", "21", "8", null, this);
            obj.set_taborder("36");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 812, 437, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("계약서 파일 첨부 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("popup02.xfdl", "lib::comLib.xjs");
        this.registerScript("popup02.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {   
        	this.gfn_setInitForm(obj, e); //공통
        	this.search();
        }

        /*조회*/
        this.search = function()
        {	
        	var eltCtrwNo =  this.gfn_isEmpty(this.getOwnerFrame().ELT_CTRW_NO);
        	
        	var sSvcID        = "search";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltCtrwApd";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_in=ds_in ds_fyn=ds_fyn";

        	var sArgument     = "eltCtrwNo="+ eltCtrwNo;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.btn_down_onclick = function(obj,e)
        {	
        	var row = 0;
        	for (var i = this.ds_fyn.getRowCount()-1; i >= 0; i--) {
        		var nCheck = 0;
        		
        		nCheck = this.ds_fyn.getColumn(i, "ISCHECKED");
        		if(nCheck == 1){
        			row += 1;
        		}
        	}
        	
        	if (row > 1) {
        		alert("파일 다운로드는 한 건만 할 수 있습니다.");
        		return;
        	}
        	
        	if (this.ds_fyn.getColumn(this.ds_fyn.rowposition, "ISCHECKED") && this.ds_fyn.getColumn(this.ds_fyn.rowposition, "ISCHECKED") == 0) {
        		alert("파일을 다운할 서류를 선택 하세요.");
        	} else {
        		this.gfn_callDownload(this.ds_fyn);
        	}
        }

        this.FileUpload01_onlbuttondown = function(obj,e)
        {
        	var row = 0;
        	for(var i = this.ds_fyn.getRowCount()-1; i >= 0; i--) {
        		var nCheck = 0;
        		nCheck = this.ds_fyn.getColumn(i, "ISCHECKED");
        		if(nCheck == 1){
        			row += 1;
        		}
        	}
        }

        this.btn_fileDel_onclick = function(obj,e)
        {
        	if (this.ds_fyn.getColumn(this.ds_fyn.rowposition, "ISCHECKED") && this.ds_fyn.getColumn(this.ds_fyn.rowposition, "ISCHECKED") == 0) {
        		alert("파일을 삭제할 서류를 선택 하세요.");
        	} else {
        		for (var i = this.ds_fyn.getRowCount()-1; i >= 0; i--) {
        			var nCheck = this.ds_fyn.getColumn(i, "ISCHECKED");
        			
        			if (this.ds_fyn.getColumn(i, "ISCHECKED") == 1) {
        				 if (this.ds_fyn.getColumn(i, "ISCHECKED") !="SYSTEM"  && this.fn_BuyerApvSts  == "Y" ) {
        					alert("파일을 삭제 할 수 없습니다. ");
        					return false;
        				 } else {
        					//this.ds_fyn.deleteRow(i);
        					this.ds_fyn.setColumn(i,"FILENAME","");
        					this.ds_fyn.setColumn(i,"FILETYPE","");
        					this.ds_fyn.setColumn(i,"FILESIZE","");
        					this.ds_fyn.setColumn(i,"ORGFNAME","");
        					//this.ds_fyn.setColumn(i,"SYSTEMFILENAME","");
        					
        					return true;
        				}
        			}
        		}
        	}
        }

        this.FileUpload01_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_addRow_onclick = function(obj,e)
        {
        	this.ds_fyn.addRow();
        }

        this.btn_delRow_onclick = function(obj,e)
        {
        	for (var i = this.ds_fyn.rowcount ; i > -1; i--) {
        		var nCheck = this.ds_fyn.getColumn(i, "ISCHECKED");

        		if (nCheck == 1)  {
        			this.ds_fyn.deleteRow(i);
        		}
        	}	
        }
        this.FileUpload01_onsuccess = function(obj,e)
        {
        	if (e.datasets == null) {
        		trace("업로드 실패");
        	} else {
        		trace("업로드 성공");
        		
        		var elt_ctrw_no = this.getOwnerFrame().ELT_CTRW_NO;
        		
        		this.ds_uploadresult00.clear();
        		this.ds_uploadresult00.copyData(e.datasets[0]);
        		//trace(this.ds_uploadresult00.saveXML());	
        		
        		var fName = this.ds_uploadresult00.getColumn(0,"FILENAME");
        		var fType = this.ds_uploadresult00.getColumn(0,"FILETYPE");
        		var fSize = this.ds_uploadresult00.getColumn(0,"FILESIZE");
        		var orgName = this.ds_uploadresult00.getColumn(0,"ORGFNAME");
        		var sysName = this.ds_uploadresult00.getColumn(0,"SYSTEMFILENAME");
        		
        		this.ds_fyn.setColumn(this.ds_fyn.rowposition,"ELT_CTRW_NO",elt_ctrw_no);
        		this.ds_fyn.setColumn(this.ds_fyn.rowposition,"BIGO",this.bigo.value);
        		this.ds_fyn.setColumn(this.ds_fyn.rowposition,"FILENAME",fName);
        		this.ds_fyn.setColumn(this.ds_fyn.rowposition,"FILETYPE",fType);
        		this.ds_fyn.setColumn(this.ds_fyn.rowposition,"FILESIZE",fSize);
        		this.ds_fyn.setColumn(this.ds_fyn.rowposition,"ORGFNAME",orgName);
        		this.ds_fyn.setColumn(this.ds_fyn.rowposition,"SYSTEMFILENAME",sysName);
        		this.ds_fyn.setColumn(this.ds_fyn.rowposition,"SEAL","ELT");
        	}
        	//trace(this.ds_fyn.saveXML());
        }

        this.FileUpload01_onerror = function(obj,e)
        {
        	trace("FileUpload01_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }

        this.btn_save_onclick = function(obj,e)
        {
        	var elt_ctrw_no = this.getOwnerFrame().ELT_CTRW_NO;
        	
        	this.ds_in.addRow();
        	this.ds_in.setColumn(0,"ELT_CTRW_NO",elt_ctrw_no);
        	this.ds_in.setColumn(0,"BIGO",this.bigo.value);

        	var sSvcID        = "insert";
        	var sURL          = "svc::rest/ct/eltctrw/saveEltCtrwApd";// 호출할 서버 페이지 주소							     
        	var sInDatasets   = "ds_in=ds_in ds_fyn=ds_fyn:A";
        	var sOutDatasets  = "";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	//trace("ds_in"  +this.ds_in.saveXML()) ;
        	//trace("ds_fyn"  +this.ds_fyn.saveXML()) ;
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID =="insert") {
        			this.gfn_getMessage("alert", "result.message.save.success");		
        			this.reload();
        		}
        		
        		if (svcID == 'search') {
        			//trace(this.ds_in.getColumn("BIGO"));
        			this.bigo.set_value(this.ds_in.getColumn(0,"BIGO"));
        		}
        	}	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_uploadresult00.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.bigo.addEventHandler("oneditclick", this.bigo_oneditclick, this);
            this.grd_file.addEventHandler("oncellclick", this.grd_file_oncellclick, this);
            this.btn_fileDel.addEventHandler("onclick", this.btn_fileDel_onclick, this);
            this.FileUpload01.addEventHandler("onlbuttondown", this.FileUpload01_onlbuttondown, this);
            this.FileUpload01.addEventHandler("onsuccess", this.FileUpload01_onsuccess, this);
            this.FileUpload01.addEventHandler("onerror", this.div_seal_FileUpload_onerror, this);
            this.FileUpload01.addEventHandler("onitemchanged", this.FileUpload01_onitemchanged, this);
            this.btn_down.addEventHandler("onclick", this.btn_down_onclick, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.btn_add.addEventHandler("onclick", this.btn_addRow_onclick, this);
            this.btn_del.addEventHandler("onclick", this.btn_delRow_onclick, this);

        };

        this.loadIncludeScript("popup02.xfdl", true);

       
    };
}
)();
