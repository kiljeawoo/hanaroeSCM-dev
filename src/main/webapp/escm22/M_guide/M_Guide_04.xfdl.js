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
                this.set_name("guide02_new");
                this.set_classname("guide02_new");
                this.set_titletext("Grid");
                this._setFormPosition(0,0,1008,1711);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("da_grd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">abcdefg</Col><Col id=\"Column2\">농협유통VAN</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">abcdefg</Col><Col id=\"Column2\">농협유통VAN</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">abcdefg</Col><Col id=\"Column2\">농협유통VAN</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">abcdefg</Col><Col id=\"Column2\">농협유통VAN</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">abcdefg</Col><Col id=\"Column2\">농협유통VAN</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">ABCDEFG</Col><Col id=\"Column2\">농협유통VAN</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">ABCDEFG</Col><Col id=\"Column2\">농협유통VAN</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">ABCDEFG</Col><Col id=\"Column2\">농협유통VAN</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">ABCDEFG</Col><Col id=\"Column2\">농협유통VAN</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">ABCDEFG</Col><Col id=\"Column2\">농협유통VAN</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"Column0\">999</Col><Col id=\"Column1\">ABCDEFG</Col><Col id=\"Column2\">농협유통VAN</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_comp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">3</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("da_grd02", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">4</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">6</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">7</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">8</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">9</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">10</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">11</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid08", "absolute", "15", "955", "978", "303", null, null, this);
            obj.set_taborder("63");
            obj.set_binddataset("ds_comp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"192\"/><Column size=\"150\"/><Column size=\"194\"/><Column size=\"190\"/><Column size=\"110\"/><Column size=\"90\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"Column0\"/><Cell col=\"1\" text=\"Edit\"/><Cell col=\"2\" text=\"MaskEdit\"/><Cell col=\"3\" text=\"Combo\"/><Cell col=\"4\" text=\"Calendar\"/><Cell col=\"5\" text=\"Expand\"/><Cell col=\"6\" text=\"Button\"/><Cell col=\"7\" text=\"Button\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:Column1\" editdisplay=\"display\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"mask\" style=\"align:right middle;\" text=\"bind:Column2\" mask=\"###,###\" editdisplay=\"display\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left middle;\" text=\"bind:Column3\" combodisplayrowcount=\"0\" combodisplay=\"display\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"align:left middle;\" text=\"bind:Column4\" calendardisplay=\"display\"/><Cell col=\"5\" edittype=\"expand\" text=\"bind:Column9\" expandshow=\"show\" expandsize=\"40\"/><Cell col=\"6\" displaytype=\"button\" edittype=\"button\" style=\"cursor:hand;\" text=\"bind:Column10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "15", "82", null, "366", "453", null, this);
            obj.set_taborder("20");
            obj.set_binddataset("da_grd");
            obj.set_autofittype("col");
            obj.set_useselcolor("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"65\"/><Column size=\"290\"/><Column size=\"130\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column5\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" cssclass=\"grd_essential\" text=\"제목\"/><Cell col=\"3\" text=\"작성자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column5\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: ;\" text=\"bind:Column0\"/><Cell col=\"2\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: ;\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04", "absolute", "15", "528", "540", "353", null, null, this);
            obj.set_taborder("26");
            obj.set_binddataset("da_grd02");
            obj.set_useselcolor("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"158\"/><Column size=\"158\"/><Column size=\"158\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"Column1\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"Column2\"/><Cell row=\"1\" col=\"1\" text=\"Column1-1\"/><Cell row=\"1\" col=\"2\" text=\"Column1-2\"/><Cell row=\"1\" col=\"3\" cssclass=\"Cellgrd_WF_Head\" text=\"Column2-1\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:Column1\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:Column2\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:Column3\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:Column4\"/><Cell row=\"1\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column1\"/><Cell row=\"1\" col=\"1\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column2\"/><Cell row=\"1\" col=\"2\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column3\"/><Cell row=\"1\" col=\"3\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "0", "0", "1008", "30", null, null, this);
            obj.getSetter("taborder").set("64");
            obj.set_text("Grid");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "15", "1338", "540", "98", null, null, this);
            obj.set_taborder("65");
            obj.set_binddataset("da_grd");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_Wf_SumData");
            obj.set_scrollbars("none");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"47\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" cssclass=\"grd_essential\" text=\"공급금액\"/><Cell col=\"2\" text=\"총공급금액\"/><Cell col=\"3\" text=\"총공제금액\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band><Band id=\"summary\"><Cell style=\"align:center middle;color:#ffffffff;color2:#ffffffff;\" text=\"합계\"/><Cell col=\"1\" text=\"3456789\" mask=\"#,###,###\"/><Cell col=\"2\" text=\"12456000\" mask=\"##,###,###\"/><Cell col=\"3\" text=\"98765000\" mask=\"##,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "564", "82", "1", "114", null, null, this);
            obj.getSetter("taborder").set("68");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "559", "82", "10", "1", null, null, this);
            obj.getSetter("taborder").set("69");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "560", "132", "10", "1", null, null, this);
            obj.getSetter("taborder").set("70");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "571", "98", "21", "17", null, null, this);
            obj.getSetter("taborder").set("71");
            obj.set_text("50");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "560", "195", "10", "1", null, null, this);
            obj.getSetter("taborder").set("72");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "571", "156", "21", "17", null, null, this);
            obj.getSetter("taborder").set("73");
            obj.set_text("63");
            obj.style.set_color("red");
            obj.style.set_font("9 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "569", "594", "183", "18", null, null, this);
            obj.getSetter("taborder").set("74");
            obj.set_text("class : <b v='true'>Cellgrd_WF_Head</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "535", "603", "28", "1", null, null, this);
            obj.getSetter("taborder").set("75");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "577", "714", "161", "18", null, null, this);
            obj.getSetter("taborder").set("76");
            obj.set_text("class : <b v='true'>Cellgrd_WF_txt</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "543", "723", "28", "1", null, null, this);
            obj.getSetter("taborder").set("77");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "502", "191", "21", null, null, this);
            obj.getSetter("taborder").set("78");
            obj.set_text("→ Head 두줄일 때");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "56", "191", "21", null, null, this);
            obj.getSetter("taborder").set("79");
            obj.set_text("→ Default");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "15", "1312", "191", "21", null, null, this);
            obj.getSetter("taborder").set("80");
            obj.set_text("→ 합계 그리드");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "389", "484", "241", "18", null, null, this);
            obj.getSetter("taborder").set("81");
            obj.set_text("class : <b v='true'>Cellgrd_WF_HeadEssential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "420", "499", "1", "40", null, null, this);
            obj.getSetter("taborder").set("82");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "15", "1584", "540", "58", null, null, this);
            obj.getSetter("taborder").set("83");
            obj.set_cssclass("sta_WF_Gridbg");
            this.addChild(obj.name, obj);

            obj = new Button("Button36", "absolute", "320", "1590", "70", "46", null, null, this);
            obj.set_taborder("84");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button37", "absolute", "395", "1590", "70", "46", null, null, this);
            obj.set_taborder("85");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button38", "absolute", "470", "1590", "70", "46", null, null, this);
            obj.set_taborder("86");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "15", "1514", "540", "48", null, null, this);
            obj.getSetter("taborder").set("87");
            obj.set_cssclass("sta_WF_Gridbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "15", "1519", "208", "38", null, null, this);
            obj.getSetter("taborder").set("88");
            obj.set_text("검색결과 <fc v='#fff44f'><fs v='17'>002</fs></fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_GridCount01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "584", "1529", "161", "18", null, null, this);
            obj.getSetter("taborder").set("89");
            obj.set_text("class : <b v='true'>sta_WF_Gridbg</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "550", "1538", "28", "1", null, null, this);
            obj.getSetter("taborder").set("90");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "584", "1604", "161", "18", null, null, this);
            obj.getSetter("taborder").set("91");
            obj.set_text("class : <b v='true'>sta_WF_Gridbg</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "550", "1613", "28", "1", null, null, this);
            obj.getSetter("taborder").set("92");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "577", "1360", "161", "18", null, null, this);
            obj.getSetter("taborder").set("93");
            obj.set_text("class : <b v='true'>grd_Wf_SumData</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "543", "1369", "28", "1", null, null, this);
            obj.getSetter("taborder").set("94");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "59", "1479", "196", "18", null, null, this);
            obj.getSetter("taborder").set("95");
            obj.set_text("class : <b v='true'>sta_WF_GridCount01</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "114", "1496", "1", "34", null, null, this);
            obj.getSetter("taborder").set("96");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "304", "1660", "161", "18", null, null, this);
            obj.getSetter("taborder").set("97");
            obj.set_text("class : <b v='true'>btn_WF_GridBtn</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "377", "1624", "1", "34", null, null, this);
            obj.getSetter("taborder").set("98");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1008, 1711, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("guide02_new");
            		p.set_titletext("Grid");

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

        this.loadIncludeScript("M_Guide_04.xfdl");

       
    };
}
)();
