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
                this.set_titletext("관련 계약서 보기");
                this._setFormPosition(0,0,329,240);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_elt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_elt", "absolute", "15", "14", null, "176", "15", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_elt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\"/><Column size=\"162\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"계약서 번호\"/><Cell col=\"1\" text=\"계약서 종류\"/></Band><Band id=\"body\"><Cell text=\"bind:ELT_CTRW_NO\"/><Cell col=\"1\" text=\"bind:MN_CTRW_KD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", "137", "198", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 329, 240, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("관련 계약서 보기");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POPUP_ELT_RELATED.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_ELT_RELATED.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.fn_retrieveRelatedElt();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.fn_retrieveRelatedElt = function()
        {
        	this.ds_elt.clearData();
        	
        	var relno = this.gfn_nullToEmpty(this.parent.BF_CTR_NO);
        	var relseq = this.gfn_nullToEmpty(this.parent.BF_CTR_SQNO);
        	
        	if (relno == "") {
        		relno = this.gfn_nullToEmpty(this.parent.ELT_CTRW_NO);
        		relseq = this.gfn_nullToEmpty(this.parent.CHG_SQNO);
        	}

        	var param = "relno=" + relno
        		+ " relseq=" + relseq
        		//+ " sts=A"
        	;

        	var sSvcID        = "search";//통신아이디
        	var sURL          = "svc::rest/ct/eltctrw/retrieveRelatedEltCtrw";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_elt=ds_elt";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	} else {
        		if (svcID == "search") {
        			if (this.ds_elt.rowcount == 0) {
        				this.grd_elt.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        			} else {
        				this.ds_elt.filter("ELT_CTRW_NO != '" + this.gfn_nullToEmpty(this.parent.ELT_CTRW_NO) + "'");
        			}
        		}
        	}
        }

        this.grd_buyer_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.btn_ok_onclick();
        	}
        }

        this.grd_elt_oncellclick = function(obj,e)
        {
        	this.btn_ok_onclick();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.grd_elt.addEventHandler("onkeydown", this.grd_buyer_onkeydown, this);
            this.grd_elt.addEventHandler("oncelldblclick", this.grd_elt_oncellclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("POPUP_ELT_RELATED.xfdl", true);

       
    };
}
)();
