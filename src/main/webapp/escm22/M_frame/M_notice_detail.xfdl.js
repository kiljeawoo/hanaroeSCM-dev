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
                this.set_name("M_setting");
                this.set_classname("M_setting");
                this.set_titletext("공지사항_Detail");
                this._setFormPosition(0,0,540,609);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("grd01", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">시스템 정기 점검 안내드립니다.</Col><Col id=\"Column1\">2015-04-20</Col></Row><Row><Col id=\"Column0\">[수정공지] 서버 다운로드 및 스트리밍 일반 서비..</Col><Col id=\"Column1\">2015-04-20</Col></Row><Row><Col id=\"Column0\">[수정공지] 서버 다운로드 및 스트리밍 일반 서비..</Col><Col id=\"Column1\">2015-04-20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", "540", "65", null, null, this);
            obj.getSetter("taborder").set("0");
            obj.set_cssclass("sta_WF_Toptitle");
            obj.set_text("공지사항");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "64", "540", "94", null, null, this);
            obj.getSetter("taborder").set("14");
            obj.set_cssclass("sta_WF_Noticetitle");
            obj.set_text("농협하나로 eSCM App버전 업그레이드..\r\n<fs v='14'>2015 - 05 - 12</fs>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "158", "540", "451", null, null, this);
            obj.getSetter("taborder").set("15");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #bfbfbfff,0 none #808080");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "17", "179", "508", "409", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("txt_WF_Notice");
            obj.set_value("안녕하세요.\r\n귀사의 무궁한 발전과 건승을 기원합니다.");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "15", "89", "66", "49", null, null, this);
            obj.getSetter("taborder").set("17");
            obj.set_cssclass("sta_WF_Noticeico01");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "603", "87", "66", "49", null, null, this);
            obj.getSetter("taborder").set("18");
            obj.set_cssclass("sta_WF_Noticeico02");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 609, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("M_setting");
            		p.set_titletext("공지사항_Detail");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("M_notice_detail.xfdl");

       
    };
}
)();
