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
                this.set_titletext("회원유형 변경 이력");
                this._setFormPosition(0,0,767,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_hst", this);
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"HST_RG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BEFORE_USR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"BEFORE_ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_usr", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">협력업체</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">세금계산서</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_stsc", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"status\">완료</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"status\">거절</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"status\">수정요청중</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"status\">수정요청거절</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"status\">해지</Col></Row><Row><Col id=\"code\">0</Col><Col id=\"status\">진행중</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static08", "absolute", "126", "44", null, "29", "17", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "15", "41", "21", "13", null, this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "18", "135", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("회원유형/상태 이력");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "750", "44", "17", "67", null, null, this);
            obj.set_taborder("70");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "0", "91", "15", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "67", "17", "67", null, null, this);
            obj.set_taborder("72");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "674", "36", "91", "8", null, null, this);
            obj.set_taborder("73");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_MB_ID", "absolute", "131", "48", "186", "21", null, null, this);
            obj.set_taborder("106");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "44", "110", "29", null, null, this);
            obj.set_taborder("127");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "17", "73", "733", "310", null, null, this);
            obj.set_taborder("128");
            obj.set_binddataset("ds_hst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"121\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"194\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"등록 시간\"/><Cell col=\"1\" text=\"전 유형\"/><Cell col=\"2\" text=\"현재 유형\"/><Cell col=\"3\" text=\"전 상태\"/><Cell col=\"4\" text=\"현재 상태\"/><Cell col=\"5\" text=\"처리 내용\"/><Cell col=\"6\" text=\"처리자\"/></Band><Band id=\"body\"><Cell text=\"bind:HST_RG_DTM\" mask=\"####-##-## ##:##:##\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:BEFORE_USR_TPC\" combodataset=\"ds_usr\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:USR_TPC\" combodataset=\"ds_usr\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:BEFORE_ENT_PRG_STSC\" combodataset=\"ds_stsc\" combocodecol=\"code\" combodatacol=\"status\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:ENT_PRG_STSC\" combodataset=\"ds_stsc\" combocodecol=\"code\" combodatacol=\"status\"/><Cell col=\"5\" text=\"bind:ENT_PRG_CNTN\"/><Cell col=\"6\" text=\"bind:LS_CHGM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "375", "44", "110", "29", null, null, this);
            obj.set_taborder("129");
            obj.set_text("거래처 코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_NA_TRPL_C", "absolute", "489", "48", "186", "21", null, null, this);
            obj.set_taborder("130");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("회원유형 변경 이력");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","ed_NA_TRPL_C","value","ds_hst","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","ed_MB_ID","value","ds_hst","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6413.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6413.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {	
        	
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {	

         
        	//페이지 로딩후 실행부분      		
        	this.ds_param.copyData(this.parent.dsArg);
        	
        	var sSvcID        = "changehstMbApvrqr";
        	var sURL          = "svc::rest/mg/usrinf/changehstMbApvrqr";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_hst=ds_hst";
        	var sArgument     = "MB_ID="+this.ds_param.getColumn(0,"MB_ID");
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회		 

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        }

        
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(svcID == "changehstMbApvrqr"){
        		if(this.ds_hst.rowcount > 0){
        	
        		for(var i = 0; i < this.ds_hst.rowcount; i++){
        			if(this.ds_hst.getColumn(i,"CH_HST") == "USR_TPC"){
        				this.ds_hst.setColumn(i,"BEFORE_ENT_PRG_STSC","");
        				this.ds_hst.setColumn(i,"ENT_PRG_STSC","");
        			
        			}else if(this.ds_hst.getColumn(i,"CH_HST") == "STSC"){
        				this.ds_hst.setColumn(i,"BEFORE_USR_TPC","");
        				this.ds_hst.setColumn(i,"USR_TPC","");
        			}
        		}
        		
        		}else if(this.ds_hst.rowcount == 0){
        			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        		}
        	}
        }

        this.fn_close_onclick = function(obj,e)
        {
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.fn_close_onclick, this);
            this.ed_MB_ID.addEventHandler("oneditclick", this.edt_simpTpc_oneditclick, this);
            this.ed_NA_TRPL_C.addEventHandler("oneditclick", this.edt_simpTpc_oneditclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6413.xfdl", true);

       
    };
}
)();
