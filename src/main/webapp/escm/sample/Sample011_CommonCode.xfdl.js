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
                this.set_name("Sample011_CommonCode");
                this.set_titletext("공통코드호출");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_QSLPR_TPC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_PHD_DLR_DSC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_PRGR_C00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"SIMP_C\">00</Col><Col id=\"SIMP_CNM\">센터입고</Col></Row><Row><Col id=\"SIMP_C\">01</Col><Col id=\"SIMP_CNM\">유통(계통)</Col></Row><Row><Col id=\"SIMP_C\">02</Col><Col id=\"SIMP_CNM\">유통(업체)</Col></Row><Row><Col id=\"SIMP_C\">03</Col><Col id=\"SIMP_CNM\">대형점</Col></Row><Row><Col id=\"SIMP_C\">04</Col><Col id=\"SIMP_CNM\">중형점</Col></Row><Row><Col id=\"SIMP_C\">05</Col><Col id=\"SIMP_CNM\">일반점1</Col></Row><Row><Col id=\"SIMP_C\">60</Col><Col id=\"SIMP_CNM\">FMS</Col></Row><Row><Col id=\"SIMP_C\">10</Col><Col id=\"SIMP_CNM\">DS</Col></Row><Row><Col id=\"SIMP_C\">11</Col><Col id=\"SIMP_CNM\">DS2</Col></Row><Row><Col id=\"SIMP_C\">20</Col><Col id=\"SIMP_CNM\">SSM</Col></Row><Row><Col id=\"SIMP_C\">40</Col><Col id=\"SIMP_CNM\">SM</Col></Row><Row><Col id=\"SIMP_C\">50</Col><Col id=\"SIMP_CNM\">SMS</Col></Row><Row><Col id=\"SIMP_C\">06</Col><Col id=\"SIMP_CNM\">일반점2</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_PHD_DLR_DSC00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"SIMP_C\">01</Col><Col id=\"SIMP_CNM\">정상출고</Col><Col id=\"SIMP_C_EXPL\">정상출고</Col></Row><Row><Col id=\"SIMP_C\">03</Col><Col id=\"SIMP_CNM\">덤출고</Col><Col id=\"SIMP_C_EXPL\">덤출고</Col></Row><Row><Col id=\"SIMP_C\">05</Col><Col id=\"SIMP_CNM\">반품출고</Col><Col id=\"SIMP_C_EXPL\">반품출고</Col></Row><Row><Col id=\"SIMP_C\">07</Col><Col id=\"SIMP_CNM\">행사출고</Col><Col id=\"SIMP_C_EXPL\">행사출고</Col></Row><Row><Col id=\"SIMP_C\">08</Col><Col id=\"SIMP_CNM\">현장판매출고</Col><Col id=\"SIMP_C_EXPL\">현장판매출고</Col></Row><Row><Col id=\"SIMP_C\">09</Col><Col id=\"SIMP_CNM\">폐기출고</Col><Col id=\"SIMP_C_EXPL\">폐기출고</Col></Row><Row><Col id=\"SIMP_C\">10</Col><Col id=\"SIMP_CNM\">직매출</Col><Col id=\"SIMP_C_EXPL\">직매출</Col></Row><Row><Col id=\"SIMP_C\">11</Col><Col id=\"SIMP_CNM\">긴급출고</Col><Col id=\"SIMP_C_EXPL\">긴급출고</Col></Row><Row><Col id=\"SIMP_C\">13</Col><Col id=\"SIMP_CNM\">간선출고</Col><Col id=\"SIMP_C_EXPL\">간선출고</Col></Row><Row><Col id=\"SIMP_C\">25</Col><Col id=\"SIMP_CNM\">직송반품출고</Col><Col id=\"SIMP_C_EXPL\">직송반품출고</Col></Row><Row><Col id=\"SIMP_C\">15</Col><Col id=\"SIMP_CNM\">간선덤출고</Col><Col id=\"SIMP_C_EXPL\">간선덤출고</Col></Row><Row><Col id=\"SIMP_C\">50</Col><Col id=\"SIMP_CNM\">물류장비출고</Col><Col id=\"SIMP_C_EXPL\">물류장비출고</Col></Row><Row><Col id=\"SIMP_C\">20</Col><Col id=\"SIMP_CNM\">직송출고</Col><Col id=\"SIMP_C_EXPL\">직송출고</Col></Row><Row><Col id=\"SIMP_C\">60</Col><Col id=\"SIMP_CNM\">유통가공출고</Col><Col id=\"SIMP_C_EXPL\">유통가공출고</Col></Row><Row><Col id=\"SIMP_C\">71</Col><Col id=\"SIMP_CNM\">원물투입출고</Col><Col id=\"SIMP_C_EXPL\">원물투입출고</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Combo("Combo00", "absolute", "178", "107", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_QSLPR_TPC");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Combo("Combo01", "absolute", "362", "107", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@ds_PHD_DLR_DSC");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Static("Static00", "absolute", "180", "82", "120", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("ds_QSLPR_TPC");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "364", "82", "120", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("ds_PHD_DLR_DSC");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample011_CommonCode");
            		p.set_titletext("공통코드호출");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Sample011_CommonCode.xfdl", "lib::comLib.xjs");
        this.registerScript("Sample011_CommonCode.xfdl", function() {
        //include "lib::comLib.xjs";

        /***************************************************************************************
        	code        : 호출할 공통코드
        	dsName      : 호출된 공통코드를 담을 Dataset
        	selecttype  : ComboBox 최상단에 추가할 문구( A: -전체-, S:-선택-, N: 빈칸)
        	 
        	selecttype은 추후 변경될 수 있음.
        	this.fn_commonAfterOnload를 화면에 선언하면 gfn_setCommonCode처리후 호출됨.
        *****************************************************************************************/

        this.form_onload = function(obj,e)
        {
        	var param = [  
         		{code:"QSLPR_TPC",   dsName:"ds_QSLPR_TPC",   selecttype:"A"},
         		{code:"PHD_DLR_DSC", dsName:"ds_PHD_DLR_DSC", selecttype:"N"}
            ];

        	this.gfn_setCommonCode(param);
        	//this.gfn_setPortalCommonCode(param);  portal공통코드호출용
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	trace("fn_commonAfterOnload");
        	
        	//콤보에 최상단Row보이도록 설정
        	this.Combo00.set_index(0);
        	this.Combo01.set_index(0);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("Sample011_CommonCode.xfdl");

       
    };
}
)();
