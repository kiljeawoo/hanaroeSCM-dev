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
                this.set_name("OMG_DS_SC_6411_P01");
                this.set_titletext("회원납부정보 수정 이력");
                this._setFormPosition(0,0,767,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_hst", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_INF_RG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METH_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"HOP_DRW_DD\" type=\"STRING\" size=\"256\"/><Column id=\"DPRNM\" type=\"STRING\" size=\"256\"/><Column id=\"PSCRP_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DPR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BNK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNO\" type=\"STRING\" size=\"256\"/><Column id=\"BB_FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZ_RGWRRT_FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_basicInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_stlMethDsc", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">농협자동이체</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">자동이체</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">가상계좌</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hopDrwDD", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">15</Col><Col id=\"name\">15일</Col></Row><Row><Col id=\"code\">25</Col><Col id=\"name\">25일</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pscrpDsc", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">개인</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">법인</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_entPrgStsc", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"name\">진행중</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">완료</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">거절</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">수정요청중</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"name\">수정요청거절</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"name\">해지</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"name\">휴면</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_close", "absolute", null, "15", "41", "21", "13", null, this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "18", "135", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("수정이력");
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

            obj = new Grid("Grid00", "absolute", "17", "41", "733", "310", null, null, this);
            obj.set_taborder("128");
            obj.set_binddataset("ds_hst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"121\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"121\"/><Column size=\"80\"/><Column size=\"99\"/><Column size=\"152\"/><Column size=\"221\"/><Column size=\"149\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"등록 시간\"/><Cell col=\"1\" text=\"결제방식\"/><Cell col=\"2\" text=\"희망출금일\"/><Cell col=\"3\" text=\"예금주\"/><Cell col=\"4\" text=\"예금주구분\"/><Cell col=\"5\" text=\"생년월일\"/><Cell col=\"6\" text=\"거래은행\"/><Cell col=\"7\" text=\"계좌번호\"/><Cell col=\"8\" text=\"통장사본\"/><Cell col=\"9\" text=\"사업자등록증 사본\"/><Cell col=\"10\" text=\"가입진행상태\"/></Band><Band id=\"body\"><Cell text=\"bind:PAY_INF_RG_DTM\" mask=\"####-##-## ##:##:##\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:STL_METH_DSC\" combodataset=\"ds_stlMethDsc\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:HOP_DRW_DD\" combodataset=\"ds_hopDrwDD\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"3\" displaytype=\"normal\" text=\"bind:DPRNM\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:PSCRP_DSC\" combodataset=\"ds_pscrpDsc\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"5\" text=\"bind:DPR_NO\"/><Cell col=\"6\" text=\"bind:BNK_NM\"/><Cell col=\"7\" text=\"bind:ACNO\"/><Cell col=\"8\" text=\"bind:BB_FLNM\"/><Cell col=\"9\" text=\"bind:BZ_RGWRRT_FLNM\"/><Cell col=\"10\" displaytype=\"combo\" text=\"bind:ENT_PRG_STSC\" combodataset=\"ds_entPrgStsc\" combocodecol=\"code\" combodatacol=\"name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("회원납부정보 수정 이력");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6411_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6411_P01.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {	
        	
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {	

         
        	//페이지 로딩후 실행부분      		
        	this.ds_basicInfo.copyData(this.parent.dsArg);
        	
        	var sSvcID        = "changeBlChgHstMbApvrqr";
        	var sURL          = "svc::rest/mg/usrinf/changeBlChgHstMbApvrqr";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_hst=ds_hst";
        	var sArgument     = "NA_TRPL_C="+this.ds_basicInfo.getColumn(0,"NA_TRPL_C");
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

        };

        this.loadIncludeScript("OMG_DS_SC_6411_P01.xfdl", true);

       
    };
}
)();
