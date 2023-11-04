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
                this.set_name("OMG_DS_SC_5161");
                this.set_titletext("서비스차단등록/수정");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,767,247);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_block", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"1\"/><Column id=\"BLOCK_SQNO\" type=\"string\" size=\"12\"/><Column id=\"BLOCK_TI\" type=\"string\" size=\"250\"/><Column id=\"BLOCK_ST_DTM\" type=\"STRING\" size=\"30\"/><Column id=\"BLOCK_ED_DTM\" type=\"string\" size=\"30\"/><Column id=\"BLOCK_CNTN\" type=\"string\" size=\"250\"/><Column id=\"BSN_DSC\" type=\"STRING\" size=\"16\"/><Column id=\"BLOCK_STATE\" type=\"STRING\" size=\"1\"/><Column id=\"UYN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_close", "absolute", null, "47", "41", "21", "13", null, this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "51", "153", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("서비스차단등록/수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "132", "110", "71", null, null, this);
            obj.set_taborder("2");
            obj.set_text("차단내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "126", "132", null, "71", "17", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "126", "76", null, "29", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "750", "76", "17", "67", null, null, this);
            obj.set_taborder("5");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "32", "91", "15", null, null, this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.set_taborder("7");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "674", "68", "91", "8", null, null, this);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_text("서비스차단관리");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("brn_cls", "absolute", "729", "0", "37", "32", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "47", "43", "21", "55", null, this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "76", "110", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "17", "202", "110", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "126", "202", null, "29", "17", null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn", "absolute", "131", "206", "158", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_useYn_innerdataset = new Dataset("rdo_useYn_innerdataset", this.rdo_useYn);
            rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용안함</Col></Row></Rows>");
            obj.set_innerdataset(rdo_useYn_innerdataset);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("Y");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Static("Static01", "absolute", "17", "104", "110", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "126", "104", null, "29", "17", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "282", "104", "91", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("차단일시");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_blockTi", "absolute", "131", "80", "414", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_bsnDsc", "absolute", "131", "108", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_bsnDsc_innerdataset = new Dataset("cbo_bsnDsc_innerdataset", this.cbo_bsnDsc);
            cbo_bsnDsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ESCM</Col><Col id=\"datacolumn\">ESCM</Col></Row><Row><Col id=\"codecolumn\">TAX</Col><Col id=\"datacolumn\">세금계산서</Col></Row><Row><Col id=\"codecolumn\">CONSULT</Col><Col id=\"datacolumn\">컨설팅</Col></Row><Row><Col id=\"codecolumn\">DVY</Col><Col id=\"datacolumn\">배송예정서</Col></Row></Rows>");
            obj.set_innerdataset(cbo_bsnDsc_innerdataset);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Calendar("dt_blockStDtm", "absolute", "377", "108", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_value("null");
            obj.set_editformat("yyyy-MM-dd HH:mm");

            obj = new Calendar("dt_blockEdDtm", "absolute", "533", "108", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_value("null");
            obj.set_editformat("yyyy-MM-dd HH:mm");

            obj = new Static("Static11", "absolute", "511", "108", "15", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_blockCntn", "absolute", "143", "136", null, "63", "32", null, this);
            obj.set_taborder("29");
            obj.set_imemode("none");
            obj.set_wordwrap("char");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("txt_WF_file");
            obj.style.set_background("#ffffff00");
            obj.set_maxlength("250");
            obj.set_dragscrolltype("both");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 247, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("서비스차단등록/수정");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_blockTi","value","ds_block","BLOCK_TI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cbo_bsnDsc","value","ds_block","BSN_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","dt_blockStDtm","value","ds_block","BLOCK_ST_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","dt_blockEdDtm","value","ds_block","BLOCK_ED_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","rdo_useYn","value","ds_block","UYN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","txt_blockCntn","text","ds_bbs","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","txt_blockCntn","value","ds_block","BLOCK_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6312_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6312_P01.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e) //공통
        {
           this.gfn_setInitForm(obj, e);
        }

        this.fn_afterFormOnload = function() //페이지 로딩후 실행부분
        {
        	var fv_paramMode = this.getOwnerFrame().paramMode;
        	
        	this.ds_block.clearData();
        	this.ds_block.addRow();
        	
        	// 체크박스로 선택된 row의 수정업데이트  모드일 경우 실행
        	if(fv_paramMode == "U"){
        		this.cbo_bsnDsc.set_enable(false);
        		this.search();
            } else {
         		var today = new Date();		
        		var d1 = this.gfn_today("yyyyMMdd") + String(today.getHours()).padLeft(2, "0") + String(today.getMinutes()).padLeft(2, "0");
        		today.setHours(today.getHours()+1);
        		var d2 = this.gfn_today("yyyyMMdd") + String(today.getHours()).padLeft(2, "0") + String(today.getMinutes()).padLeft(2, "0");
        		
        		this.dt_blockStDtm.set_value(d1);
        		this.dt_blockEdDtm.set_value(d2);
        		this.rdo_useYn.set_index(0);
        		this.cbo_bsnDsc.set_index(0);
        		this.edt_blockTi.setFocus();
            }
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /*저장 버튼 이벤트*/
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.getOwnerFrame().paramMode== "I"){ //추가등록
        		this.insert();
        	}else if(this.getOwnerFrame().paramMode== "U"){	 //수정업데이트
        	    this.update();
        	}
        }

        /*창닫기 버튼 이벤트*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /* 등록 및 수정시 사용되는 Validation Check */
        this.fn_validationCheck = function(){
        	// 입력값 체크
        	if(this.gfn_isNull(this.edt_blockTi.value)){
        		this.alert('제목을 입력바랍니다.');
        		this.edt_blockTi.setFocus();
        		return false;
        	}
        	if(this.gfn_isNull(this.txt_blockCntn.value)){
        		this.alert('차단사유를 입력바랍니다.');
        		this.txt_blockCntn.setFocus();
        		return false;
        	}
        	
        	var stDtm = this.gfn_nullToEmpty(this.dt_blockStDtm.value);
        	var edDtm = this.gfn_nullToEmpty(this.dt_blockEdDtm.value);
        	
        	if(this.gfn_isNull(stDtm) || this.gfn_isNull(edDtm)) {
        		this.alert('차단일시를 입력바랍니다.');
        		return false;
        	}
        	
        	if(stDtm >= edDtm) {
        		this.alert('차단종료일시가 올바르지 않습니다.');
        		this.dt_blockEdDtm.setFocus();
        		return false;
        	}
        	
        	// 사용여부가 '사용'일 때 차단일시에 현시간이 포함되어 있으면 추가 확인(등록 즉시 적용되는 경우)
        	if (this.gfn_nullToEmpty(this.rdo_useYn.value) == 'Y') {
        		var today = new Date();
        		var todayStr = this.gfn_today("yyyyMMdd") + String(today.getHours()).padLeft(2, "0") + String(today.getMinutes()).padLeft(2, "0") + "00000";
        		if (stDtm < todayStr && todayStr < edDtm && !application.confirm("입력한 차단일시에 현재 시간이 포함되어 있습니다. 저장하시겠습니까?")) {
        			return false;
        		}
        	}
        	
            return true;
        }

        /*추가등록*/
        this.insert = function()
        {
        	if(this.fn_validationCheck()){
        		this.ds_block.setColumn(0, "BLOCK_TI", this.gfn_nullToEmpty(this.edt_blockTi.value));
        		this.ds_block.setColumn(0, "BLOCK_ST_DTM", this.gfn_nullToEmpty(this.dt_blockStDtm.value));
        		this.ds_block.setColumn(0, "BLOCK_ED_DTM", this.gfn_nullToEmpty(this.dt_blockEdDtm.value));
        		this.ds_block.setColumn(0, "BLOCK_CNTN", this.gfn_nullToEmpty(this.txt_blockCntn.value));
        		this.ds_block.setColumn(0, "BSN_DSC", this.gfn_nullToEmpty(this.cbo_bsnDsc.value));
        		this.ds_block.setColumn(0, "UYN", this.gfn_nullToEmpty(this.rdo_useYn.value));

        		var sSvcID        = "insert";
        		var sURL          = "svc::rest/mg/block/insertLoginBlockServcie";

        		var sInDatasets   = "ds_block=ds_block";
        		var sOutDatasets  = "";
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

         /*공통코드조회 화면에서 체크박스 선택 후 수정버튼 클릭시 해당 row 정보 조회*/
        this.search = function()
        {
         	var ds_parent = this.parent.dsArg;
         	this.ds_block.copyRow(0,ds_parent,0);
        }

        /*수정*/
        this.update = function()
        {
        	if(this.fn_validationCheck()){
        		this.ds_block.setColumn(0, "BLOCK_TI", this.gfn_nullToEmpty(this.edt_blockTi.value));
        		this.ds_block.setColumn(0, "BLOCK_ST_DTM", this.gfn_nullToEmpty(this.dt_blockStDtm.value));
        		this.ds_block.setColumn(0, "BLOCK_ED_DTM", this.gfn_nullToEmpty(this.dt_blockEdDtm.value));
        		this.ds_block.setColumn(0, "BLOCK_CNTN", this.gfn_nullToEmpty(this.txt_blockCntn.value));
        		this.ds_block.setColumn(0, "UYN", this.gfn_nullToEmpty(this.rdo_useYn.value));

        		var sSvcID        = "update";
        		var sURL          = "svc::rest/mg/block/updateLoginBlockService";
        		var sInDatasets   = "ds_block=ds_block";
        		var sOutDatasets  = "";
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID =="insert"){
        			if(ErrorCode == 1){
        				this.gfn_getMessage("alert", "result.message.save.success");
        				this.close();
        			}
        		}else if(svcID=="update"){
        			if(ErrorCode == 1){
        				this.gfn_getMessage("alert", "result.message.save.success");
        				this.close();
        			}
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Static07.addEventHandler("onclick", this.Static07_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.brn_cls.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static07_onclick, this);
            this.txt_blockCntn.addEventHandler("oneditclick", this.txt_content_oneditclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6312_P01.xfdl");

       
    };
}
)();
