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
                this.set_name("OMG_DS_SC_8221_P01");
                this.set_titletext("동영상교육관리 등록/수정");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,767,231);
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"1\"/><Column id=\"MENU_ID\" type=\"string\" size=\"12\"/><Column id=\"MENU_NM\" type=\"string\" size=\"250\"/><Column id=\"VIDEO_LNGTH\" type=\"STRING\" size=\"30\"/><Column id=\"VIDEO_DSC\" type=\"string\" size=\"250\"/><Column id=\"TAGS\" type=\"STRING\" size=\"250\"/><Column id=\"VIDEO_LVL\" type=\"STRING\" size=\"12\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menuS", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tags", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"1\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_close", "absolute", null, "47", "41", "21", "13", null, this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "51", "199", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("동영상교육관리 등록/수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "132", "110", "71", null, null, this);
            obj.set_taborder("2");
            obj.set_text("내용");
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
            obj.set_text("동영상교육관리");
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

            obj = new Static("Static01", "absolute", "17", "76", "110", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "126", "104", null, "29", "17", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "17", "104", "110", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("강의명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_bsnDsc", "absolute", "131", "80", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NM");
            obj.set_innerdataset("@ds_menuS");

            obj = new TextArea("txt_videoDsc", "absolute", "143", "136", null, "63", "32", null, this);
            obj.set_taborder("29");
            obj.set_imemode("none");
            obj.set_wordwrap("char");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("txt_WF_file");
            obj.style.set_background("#ffffff00");
            obj.set_maxlength("250");
            obj.set_dragscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_videoNm", "absolute", "131", "108", "309", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_input", "absolute", "445", "329", "337", "144", null, null, this);
            obj.set_text("PopupDiv00");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_input", "absolute", "0", "0", "337", "97", null, null, this.pdiv_input);
            obj.set_taborder("3");
            obj.set_binddataset("ds_tags");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.pdiv_input.addChild(obj.name, obj);
            obj = new Button("btn_execute0", "absolute", "215", "99", "60", "21", null, null, this.pdiv_input);
            obj.set_taborder("4");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdiv_input.addChild(obj.name, obj);
            obj = new Button("btn_execute1", "absolute", "276", "99", "60", "21", null, null, this.pdiv_input);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdiv_input.addChild(obj.name, obj);

            obj = new Edit("edt_output", "absolute", "377", "80", "337", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "282", "76", "91", "29", null, null, this);
            obj.set_taborder("33");
            obj.set_text("관련동영상");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "447", "104", "110", "29", null, null, this);
            obj.set_taborder("34");
            obj.set_text("강의시간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_videoLngth", "absolute", "561", "108", "178", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new Button("btn_execute", "absolute", "714", "80", "25", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("v");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 337, 144, this.pdiv_input,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv00");

            	}
            );
            this.pdiv_input.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 767, 231, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("동영상교육관리 등록/수정");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_videoNm","value","ds_block","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cbo_bsnDsc","value","ds_block","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","txt_videoDsc","text","ds_bbs","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","txt_videoDsc","value","ds_block","VIDEO_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_videoLngth","value","ds_block","VIDEO_LNGTH");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8221_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8221_P01.xfdl", function() {
        /***************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";
        var sDataCd = "";
        var fv_paramMode ="";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e) //공통
        {
           this.gfn_setInitForm(obj, e);
        }

        this.fn_afterFormOnload = function() //페이지 로딩후 실행부분
        {
        	fv_paramMode = this.getOwnerFrame().paramMode;
        	
        	this.ds_block.clearData();
        	this.ds_block.addRow();
        	
        	// 전체 메뉴 조회 호출
        	this.fn_callAllMenuList();
        	
            
        }

        /***************************************
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
        /*조회-서비스 Call*/ 
        this.fn_callAllMenuList = function()
        {
        	var sSvcID        = "retrieveEducationAllMenuList";
        	var sURL          = "svc::rest/mg/edu/retrieveEducationAllMenuList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_menuS=ds_menuS ds_tags=ds_tags";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        }

        /* 등록 및 수정시 사용되는 Validation Check */
        this.fn_validationCheck = function(){
        	// 입력값 체크
        	if(this.gfn_isNull(this.edt_videoNm.value)){
        		this.alert('강의명을 입력바랍니다.');
        		this.edt_videoNm.setFocus();
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_videoLngth.value)){
        		this.alert('강의시간을 입력바랍니다.');
        		this.edt_videoLngth.setFocus();
        		return false;
        	}
        	if(this.gfn_isNull(this.txt_videoDsc.value)){
        		this.alert('내용을 입력바랍니다.');
        		this.txt_videoDsc.setFocus();
        		return false;
        	}
            return true;
        }

        /*추가등록*/
        this.insert = function()
        {
        	if(this.fn_validationCheck()){
        		var n = this.ds_menuS.findRow("MENU_ID", this.gfn_nullToEmpty(this.cbo_bsnDsc.value));
        		this.ds_block.setColumn(0, "UP_MENU_ID", this.ds_menuS.getColumn(n, "UP_MENU_ID"));			//상위메뉴 
        		
        		/* 
        		this.ds_block.setColumn(0, "MENU_ID", this.gfn_nullToEmpty(this.cbo_bsnDsc.value));			//메뉴명-메뉴ID
        		this.ds_block.setColumn(0, "MENU_NM", this.gfn_nullToEmpty(this.edt_videoNm.value));		//강의명
        		this.ds_block.setColumn(0, "VIDEO_LNGTH", this.gfn_nullToEmpty(this.edt_videoLngth.value));	//강의시간
        		this.ds_block.setColumn(0, "VIDEO_DSC", this.gfn_nullToEmpty(this.txt_videoDsc.value));		//내용
        		*/
        		if (sDataCd == null || new String(sDataCd).valueOf() == "undefined"){
        			this.ds_block.setColumn(0, "TAGS", sDataCd);											//관련동영상-메뉴ID
        		}else{
        			this.ds_block.setColumn(0, "TAGS", sDataCd.substr(0, sDataCd.length - 1));				//관련동영상-메뉴ID
        		}
        		
          		var sSvcID        = "insert";
          		var sURL          = "svc::rest/mg/edu/insertEducationVideoInfo";
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
         	
         	if(!this.gfn_isNull(this.ds_block.getColumn(0, "TAGS"))){
        	
        		var arrData = this.ds_block.getColumn(0, "TAGS").split(",");
        		for (var i = 0; i < this.ds_tags.rowcount; i++)
        		{
        			this.ds_tags.setColumn(i, "CHK", "0");
        		}	
        		
        		for (var i = 0; i < arrData.length; i++)
        		{
        			for (var j = 0; j < this.ds_tags.rowcount; j++)
        			{	
        				if (arrData[i] == this.ds_tags.getColumn(j, "MENU_ID"))
        				{   
        					this.ds_tags.setColumn(j, "CHK", "1");
        				}
        			}
        		}
        		this.pdiv_input_btn_execute0_onclick();
         	}
        }	

        /*수정*/
        this.update = function()
        {
        	if(this.fn_validationCheck()){
        		/*
        		this.ds_block.setColumn(0, "VIDEO_NM", this.gfn_nullToEmpty(this.edt_videoNm.value));
        		this.ds_block.setColumn(0, "VIDEO_LNGTH", this.gfn_nullToEmpty(this.edt_videoLngth.value));
        		this.ds_block.setColumn(0, "VIDEO_DSC", this.gfn_nullToEmpty(this.txt_videoDsc.value));
        		*/
        		if (sDataCd == null || new String(sDataCd).valueOf() == "undefined"){
        			this.ds_block.setColumn(0, "TAGS", sDataCd);											//관련동영상-메뉴ID
        		}else{
        			this.ds_block.setColumn(0, "TAGS", sDataCd.substr(0, sDataCd.length - 1));				//관련동영상-메뉴ID
        		}
        		var sSvcID        = "update";
        		var sURL          = "svc::rest/mg/edu/updateEducationVideoInfo";
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
        		}else if(svcID=="retrieveEducationAllMenuList"){
        			if (this.ds_menuS.rowcount > 0) {
        				if(fv_paramMode == "I"){
        					this.cbo_bsnDsc.set_index(0);
        				}else if(fv_paramMode == "U"){
        					this.search();
        				}
        			}
        		}
        	}
        }
         
        //멀티셀렉트 박스 v버튼 클릭시
        this.btn_execute_onclick = function(obj,e)
        {   
            this.fn_comboData(this.edt_output.value);
            this.pdiv_input.trackPopupByComponent(this.edt_output, 0, this.edt_output.getOffsetHeight());
        }

        //멀티셀렉트 박스 저장 버튼 클릭시
        this.pdiv_input_btn_execute0_onclick = function(obj,e)
        {
        	var sDataNm = "";		
        	sDataCd = "";
        	for (var i = 0; i < this.ds_tags.rowcount; i++)
        	{
        		if (this.ds_tags.getColumn(i, "CHK") == 1)
        		{
        			sDataNm += this.ds_tags.getColumn(i, "MENU_NM") + ",";
        			sDataCd += this.ds_tags.getColumn(i, "MENU_ID") + ",";
        		}
        	}

            this.edt_output.set_value(sDataNm.substr(0, sDataNm.length - 1));
        	this.pdiv_input.closePopup();		
        }

        //멀티셀렉트 박스 초기화 버튼 클릭시
        this.pdiv_input_btn_execute1_onclick = function(obj,e)
        {
        	for (var i = 0; i < this.ds_menuS.rowcount; i++)
        	{
        		this.ds_tags.setColumn(i, "CHK", "0");
        	}	
        }

        //멀티셀렉트 박스 콤보 데이타
        this.fn_comboData = function(sData)
        {
            if (sData == null || new String(sData).valueOf() == "undefined")
            {
                return;
            }
            
            var arrData = sData.split(",");
        	
        	for (var i = 0; i < this.ds_tags.rowcount; i++)
        	{
        		this.ds_tags.setColumn(i, "CHK", "0");
        	}	
        	
            for (var i = 0; i < arrData.length; i++)
            {
                for (var j = 0; j < this.ds_tags.rowcount; j++)
                {
        			
                    if (arrData[i] == this.ds_tags.getColumn(j, "MENU_NM"))
                    {
                        this.ds_tags.setColumn(j, "CHK", "1");
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
            this.txt_videoDsc.addEventHandler("oneditclick", this.txt_content_oneditclick, this);
            this.edt_videoNm.addEventHandler("oneditclick", this.edt_blockTi_oneditclick, this);
            this.pdiv_input.btn_execute0.addEventHandler("onclick", this.pdiv_input_btn_execute0_onclick, this);
            this.pdiv_input.btn_execute1.addEventHandler("onclick", this.pdiv_input_btn_execute1_onclick, this);
            this.btn_execute.addEventHandler("onclick", this.btn_execute_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8221_P01.xfdl");

       
    };
}
)();
