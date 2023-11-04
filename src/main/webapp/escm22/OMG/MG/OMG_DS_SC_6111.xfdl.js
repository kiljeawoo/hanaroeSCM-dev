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
                this.set_name("OMG_DS_SC_6111");
                this.set_titletext("농협공통코드수정");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,767,415);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_in", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"SIMP_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"SIMP_C\" type=\"STRING\" size=\"20\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"150\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"100\"/><Column id=\"SIMP_C_SORT_SQ\" type=\"INT\" size=\"256\"/><Column id=\"BIZ_TYPE\" type=\"STRING\" size=\"50\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_in_backup", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"SIMP_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"SIMP_C\" type=\"STRING\" size=\"20\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"150\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"100\"/><Column id=\"SIMP_C_SORT_SQ\" type=\"INT\" size=\"256\"/><Column id=\"BIZ_TYPE\" type=\"STRING\" size=\"50\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static38", "absolute", "126", "132", null, "29", "17", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "126", "160", null, "29", "17", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "126", "76", null, "29", "17", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("upper_level1", "absolute", "126", "104", null, "29", "17", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "47", "41", "21", "13", null, this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "51", "187", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("농협공통코드등록/수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "104", "110", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_text("단순코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "17", "132", "110", "29", null, null, this);
            obj.set_taborder("16");
            obj.set_text("단순코드명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "17", "160", "110", "29", null, null, this);
            obj.set_taborder("17");
            obj.set_text("단순코드설명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "750", "76", "17", "67", null, null, this);
            obj.set_taborder("70");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "32", "91", "15", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.set_taborder("72");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "674", "68", "91", "8", null, null, this);
            obj.set_taborder("73");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("74");
            obj.set_text("농협공통코드관리");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("brn_cls", "absolute", "729", "0", "37", "32", null, null, this);
            obj.set_taborder("75");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "47", "43", "21", "55", null, this);
            obj.set_taborder("95");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_simpTpc", "absolute", "130", "80", "186", "21", null, null, this);
            obj.set_taborder("106");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "76", "110", "29", null, null, this);
            obj.set_taborder("127");
            obj.set_text("단순유형코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_simpC", "absolute", "130", "109", "186", "21", null, null, this);
            obj.set_taborder("128");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_simpCnm", "absolute", "130", "136", "580", "21", null, null, this);
            obj.set_taborder("129");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_simpCexpl", "absolute", "130", "164", "580", "21", null, null, this);
            obj.set_taborder("130");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "456", "104", "110", "29", null, null, this);
            obj.set_taborder("132");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_simp_C_Sort_Sq", "absolute", "569", "109", "110", "21", null, null, this);
            obj.set_taborder("137");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "17", "188", "110", "29", null, null, this);
            obj.set_taborder("138");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "126", "188", null, "29", "17", null, this);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn", "absolute", "130", "192", "158", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_useYn_innerdataset = new Dataset("rdo_useYn_innerdataset", this.rdo_useYn);
            rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용안함</Col></Row></Rows>");
            obj.set_innerdataset(rdo_useYn_innerdataset);
            obj.set_taborder("140");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("Y");
            obj.set_direction("vertical");
            obj.set_index("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 415, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("농협공통코드수정");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_simpTpc","value","ds_in","SIMP_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_simpC","value","ds_in","SIMP_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_simp_C_Sort_Sq","value","ds_in","SIMP_C_SORT_SQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_simpCnm","value","ds_in","SIMP_CNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_simpCexpl","value","ds_in","SIMP_C_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","rdo_useYn","value","ds_in","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6111.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6111.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e) //공통
        {
           this.gfn_setInitForm(obj, e);
        }

        this.fn_afterFormOnload = function() //페이지 로딩후 실행부분
        {
        	this.rdo_useYn.set_index(0);
        	
        	this.edt_simpTpc.set_readonly(true);
        	
        	this.edt_simpC.set_readonly(true);
        	this.edt_simp_C_Sort_Sq.set_readonly(true);
        	this.edt_simpCnm.set_readonly(true);
        	this.edt_simpCexpl.set_readonly(true);
        	this.search();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/	

        /*저장 버튼 이벤트*/
        this.btn_save_onclick = function(obj,e)
        {	
            this.update();
        }

        /*창닫기 버튼 이벤트*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

         /*농협공통코드조회 화면에서 체크박스 선택 후 수정버튼 클릭시 해당 row 정보 조회*/
        this.search = function()
        {	
        	var ds_parent = this.parent.dsArg;
        	this.ds_in.copyRow(0,ds_parent,0);
        	this.ds_in_backup.copyRow(0,ds_parent,0);
        	
        }

        /*수정*/
        this.update = function()
        {
        	var sParams = "simp_tpc_pk="+this.ds_in_backup.getColumn(0,"SIMP_TPC")
        				+ " simp_c_pk="+this.ds_in_backup.getColumn(0,"SIMP_C");
        		
        	var sSvcID        = "update";
        	var sURL          = "svc::rest/mg/updateNacfComnC"
        	var sInDatasets   = "ds_in=ds_in";
        	var sOutDatasets  = "";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        					
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	
        	if(ErrorCode < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        			if(ErrorCode == 1){
        				this.gfn_getMessage("alert", "result.message.save.success");
        				this.close();
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
            this.edt_simpTpc.addEventHandler("oneditclick", this.edt_simpTpc_oneditclick, this);
            this.edt_simpC.addEventHandler("oneditclick", this.edt_simpC_oneditclick, this);
            this.rdo_useYn.addEventHandler("onitemclick", this.Radio00_onitemclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6111.xfdl", true);

       
    };
}
)();
