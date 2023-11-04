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
                this.set_titletext("Grid");
                this._setFormPosition(0,0,1008,1672);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("da_grd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">ABX12345</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">1,000,000,000</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">CSD12345</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">1,000,000</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">ERSA12345</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">1,000</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">GFHS12345</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">EWRWE12345</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">SAD12345</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">YI12345</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">DFGZ12345</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">ABX12345</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">GJF12345</Col></Row><Row><Col id=\"Column0\">999</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">RYGJ12345</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_comp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">3</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("grd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Lev\" type=\"STRING\" size=\"256\"/><Column id=\"Column\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">1 depth title 01</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">1 depth title 02</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">1 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("da_grd02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">999999</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">4</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">6</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">7</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">8</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">9</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">10</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">11</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">농협유통eSCM</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">농협유통eSCM</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">농협유통eSCM</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">농협유통eSCM</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">농협유통eSCM</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid08", "absolute", "15", "681", null, "199", "15", null, this);
            obj.set_taborder("63");
            obj.set_binddataset("ds_comp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"125\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"Column0\"/><Cell col=\"1\" text=\"Edit\"/><Cell col=\"2\" text=\"MaskEdit\"/><Cell col=\"3\" text=\"Combo\"/><Cell col=\"4\" text=\"Calendar\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_HeadLink\" text=\"링크\"/><Cell col=\"6\" text=\"정형텍스트\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"비정형텍스트\"/><Cell col=\"8\" text=\"데이터텍스트\"/><Cell col=\"9\" text=\"Expand\"/><Cell col=\"10\" text=\"Button\"/><Cell col=\"11\" text=\"Button\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align: ;\" text=\"bind:Column1\" editdisplay=\"display\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"mask\" style=\"align:right middle;\" text=\"bind:Column2\" mask=\"###,###\" editdisplay=\"display\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left middle;\" text=\"bind:Column3\" combodisplayrowcount=\"0\" combodisplay=\"display\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"align:left middle;\" text=\"bind:Column4\" calendardisplay=\"display\"/><Cell col=\"5\" displaytype=\"normal\" cssclass=\"Cellgrd_WF_BodyLink\" text=\"bind:Column5\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:center;\" text=\"bind:Column6\"/><Cell col=\"7\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:Column7\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:Column8\"/><Cell col=\"9\" edittype=\"expand\" text=\"bind:Column9\" expandshow=\"show\" expandsize=\"20\"/><Cell col=\"10\" displaytype=\"button\" edittype=\"button\" style=\"cursor:hand;\" text=\"bind:Column10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "15", "82", null, "367", "15", null, this);
            obj.set_taborder("20");
            obj.set_binddataset("da_grd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"45\"/><Column size=\"428\"/><Column size=\"134\"/><Column size=\"110\"/><Column size=\"105\"/><Column size=\"111\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/><Row size=\"28\" band=\"summ\"/><Row size=\"28\" band=\"summ\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column5\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" cssclass=\"grd_essential\" text=\"제목(Left)\"/><Cell col=\"3\" text=\"단위(Right)\"/><Cell col=\"4\" text=\"작성자(Center)\"/><Cell col=\"5\" text=\"작성일(Center)\"/><Cell col=\"6\" text=\"코드(Center)\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column5\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: ;\" text=\"bind:Column0\"/><Cell col=\"2\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:Column1\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: ;\" text=\"bind:Column3\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"align: ;\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_sum03\" text=\"소계\"/><Cell col=\"3\" colspan=\"3\" style=\"align: ;\" cssclass=\"Cellgrd_WF_sum03\" text=\"43,843,145\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_sum03\"/><Cell row=\"1\" colspan=\"3\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_sum02\" text=\"소계\"/><Cell row=\"1\" col=\"3\" cssclass=\"Cellgrd_WF_sum02\"/><Cell row=\"1\" col=\"4\" cssclass=\"Cellgrd_WF_sum02\"/><Cell row=\"1\" col=\"5\" cssclass=\"Cellgrd_WF_sum02\" text=\"43,843,145\"/><Cell row=\"1\" col=\"6\" cssclass=\"Cellgrd_WF_sum02\"/><Cell row=\"2\" colspan=\"3\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_sum01\" text=\"소계\"/><Cell row=\"2\" col=\"3\" cssclass=\"Cellgrd_WF_sum01\"/><Cell row=\"2\" col=\"4\" cssclass=\"Cellgrd_WF_sum01\"/><Cell row=\"2\" col=\"5\" cssclass=\"Cellgrd_WF_sum01\" text=\"43,843,145\"/><Cell row=\"2\" col=\"6\" cssclass=\"Cellgrd_WF_sum01\"/><Cell row=\"3\" colspan=\"3\" style=\"align:left middle;\" text=\"합계\"/><Cell row=\"3\" col=\"3\" colspan=\"3\" text=\"43,843,145\"/><Cell row=\"3\" col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03", "absolute", "15", "957", "206", "227", null, null, this);
            obj.set_taborder("21");
            obj.set_binddataset("grd");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("true");
            obj.set_treeuseline("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"188\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Grid Tree\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:Column\" treelevel=\"bind:Lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "1220", "123", "22", null, null, this);
            obj.set_taborder("23");
            obj.set_text("Multi Head");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "15", "1477", null, "163", "15", null, this);
            obj.set_taborder("25");
            obj.set_binddataset("da_grd02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"45\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"90\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"Column0\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"Double&#13;&#10;line\" wordwrap=\"true\"/><Cell col=\"3\" text=\"Double&#13;&#10;line\" wordwrap=\"true\"/><Cell col=\"4\" text=\"Double&#13;&#10;line\" wordwrap=\"true\"/><Cell col=\"5\" text=\"Double&#13;&#10;line\" wordwrap=\"true\"/><Cell col=\"6\" text=\"Double&#13;&#10;line\" wordwrap=\"true\"/><Cell col=\"7\" text=\"Date\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:Column3\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:Column4\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:Column5\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:Column6\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04", "absolute", "15", "1245", null, "173", "15", null, this);
            obj.set_taborder("26");
            obj.set_binddataset("da_grd02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"45\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"Column0\"/><Cell col=\"1\" rowspan=\"2\" text=\"No\"/><Cell col=\"2\" colspan=\"2\" text=\"Column1\"/><Cell col=\"4\" colspan=\"3\" text=\"Column2\"/><Cell col=\"7\" rowspan=\"2\" text=\"Date\"/><Cell row=\"1\" col=\"2\" text=\"Column1-1\"/><Cell row=\"1\" col=\"3\" text=\"Column1-2\"/><Cell row=\"1\" col=\"4\" text=\"Column2-1\"/><Cell row=\"1\" col=\"5\" text=\"Column2-2\"/><Cell row=\"1\" col=\"6\" text=\"Column2-3\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:Column3\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:Column4\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:Column5\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:Column6\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "15", "933", "76", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("Tree Grid");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "455", "83", "1", "58", null, null, this);
            obj.set_taborder("31");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "444", "82", "23", "1", null, null, this);
            obj.set_taborder("29");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "444", "112", "23", "1", null, null, this);
            obj.set_taborder("30");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "444", "140", "23", "1", null, null, this);
            obj.set_taborder("33");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "389", "1246", "1", "87", null, null, this);
            obj.set_taborder("34");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "378", "1245", "23", "1", null, null, this);
            obj.set_taborder("35");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "378", "1275", "23", "1", null, null, this);
            obj.set_taborder("36");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "378", "1305", "23", "1", null, null, this);
            obj.set_taborder("38");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "378", "1333", "23", "1", null, null, this);
            obj.set_taborder("39");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "464", "88", "40", "18", null, null, this);
            obj.set_taborder("40");
            obj.set_text("H : 30");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "464", "118", "40", "18", null, null, this);
            obj.set_taborder("41");
            obj.set_text("H : 28");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "406", "1312", "39", "18", null, null, this);
            obj.set_taborder("42");
            obj.set_text("H : 28");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "406", "1282", "39", "18", null, null, this);
            obj.set_taborder("43");
            obj.set_text("H : 30");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "406", "1253", "39", "18", null, null, this);
            obj.set_taborder("44");
            obj.set_text("H : 30");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "378", "1477", "23", "1", null, null, this);
            obj.set_taborder("45");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "378", "1527", "23", "1", null, null, this);
            obj.set_taborder("46");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "389", "1478", "1", "77", null, null, this);
            obj.set_taborder("47");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "406", "1496", "39", "18", null, null, this);
            obj.set_taborder("48");
            obj.set_text("H : 50");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "390", "326", "1", "222", null, null, this);
            obj.set_taborder("55");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "584", "331", "1", "142", null, null, this);
            obj.set_taborder("58");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "517", "869", "1", "45", null, null, this);
            obj.set_taborder("61");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "0", "0", null, "30", "0", null, this);
            obj.set_taborder("64");
            obj.set_text("Grid");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "364", "544", "197", "18", null, null, this);
            obj.set_taborder("65");
            obj.set_text("class : <b v='true'>Cellgrd_WF_AlignLeft</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#0385adff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "548", "469", "198", "18", null, null, this);
            obj.set_taborder("66");
            obj.set_text("class : <b v='true'>Cellgrd_WF_AlignRight</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#0385adff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "575", "601", "235", "18", null, null, this);
            obj.set_taborder("67");
            obj.set_text("class : <b v='true'>Cellgrd_WF_HeadEssential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#0385adff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "488", "909", "210", "18", null, null, this);
            obj.set_taborder("69");
            obj.set_text("class : <b v='true'>Cellgrd_WF_BodyLink</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#0385adff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "157", "488", "197", "18", null, null, this);
            obj.set_taborder("70");
            obj.set_text("class : <b v='true'>Cellgrd_WF_sum01</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#0385adff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "103", "516", "197", "18", null, null, this);
            obj.set_taborder("71");
            obj.set_text("class : <b v='true'>Cellgrd_WF_sum02</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#0385adff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "59", "544", "197", "18", null, null, this);
            obj.set_taborder("72");
            obj.set_text("class : <b v='true'>Cellgrd_WF_sum03</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#0385adff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "179", "351", "1", "142", null, null, this);
            obj.set_taborder("73");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "122", "379", "1", "142", null, null, this);
            obj.set_taborder("74");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "80", "407", "1", "142", null, null, this);
            obj.set_taborder("75");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "479", "630", "203", "18", null, null, this);
            obj.set_taborder("76");
            obj.set_text("class : <b v='true'>Cellgrd_WF_HeadLink</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#0385adff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "688", "615", "1", "76", null, null, this);
            obj.set_taborder("77");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "543", "646", "1", "45", null, null, this);
            obj.set_taborder("78");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "23", "59", "19", "17", null, null, this);
            obj.set_taborder("80");
            obj.set_text("30");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "15", "76", "76", "1", null, null, this);
            obj.set_taborder("85");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "15", "72", "1", "10", null, null, this);
            obj.set_taborder("86");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "45", "72", "1", "10", null, null, this);
            obj.set_taborder("87");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "60", "59", "19", "17", null, null, this);
            obj.set_taborder("88");
            obj.set_text("45");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "90", "72", "1", "10", null, null, this);
            obj.set_taborder("89");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "444", "421", "23", "1", null, null, this);
            obj.set_taborder("90");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "444", "448", "23", "1", null, null, this);
            obj.set_taborder("91");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "464", "427", "40", "18", null, null, this);
            obj.set_taborder("92");
            obj.set_text("H : 28");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "455", "337", "1", "111", null, null, this);
            obj.set_taborder("93");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "444", "392", "23", "1", null, null, this);
            obj.set_taborder("94");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "444", "364", "23", "1", null, null, this);
            obj.set_taborder("95");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "444", "336", "23", "1", null, null, this);
            obj.set_taborder("96");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "464", "399", "40", "18", null, null, this);
            obj.set_taborder("97");
            obj.set_text("H : 28");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "464", "370", "40", "18", null, null, this);
            obj.set_taborder("98");
            obj.set_text("H : 28");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "464", "342", "40", "18", null, null, this);
            obj.set_taborder("99");
            obj.set_text("H : 28");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "378", "1555", "23", "1", null, null, this);
            obj.set_taborder("100");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "406", "1534", "39", "18", null, null, this);
            obj.set_taborder("101");
            obj.set_text("H : 28");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", null, "655", "53", "21", "70", null, this);
            obj.set_taborder("102");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", null, "655", "53", "21", "15", null, this);
            obj.set_taborder("103");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", null, "655", "114", "21", "124", null, this);
            obj.set_taborder("104");
            obj.set_text("[처리대상건수 <fc v='#0084ab'><b v='true'>0</b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_GridCount");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "981", "676", "18", "5", null, null, this);
            obj.set_taborder("105");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "938", "649", "2", "23", null, null, this);
            obj.set_taborder("106");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static167", "absolute", "884", "649", "1", "28", null, null, this);
            obj.set_taborder("111");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static168", "absolute", "875", "649", "1", "28", null, null, this);
            obj.set_taborder("112");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static170", "absolute", "936", "631", "14", "17", null, null, this);
            obj.set_taborder("114");
            obj.set_text("2");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "1004", "669", "14", "17", null, null, this);
            obj.set_taborder("115");
            obj.set_text("5");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "873", "631", "22", "17", null, null, this);
            obj.set_taborder("116");
            obj.set_text("10");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "748", "571", "183", "18", null, null, this);
            obj.set_taborder("117");
            obj.set_text("class : <b v='true'>sta_WF_GridCount</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#0385adff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "807", "585", "1", "74", null, null, this);
            obj.set_taborder("118");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "15", "1452", "241", "22", null, null, this);
            obj.set_taborder("119");
            obj.set_text("Head text가 두줄로 들어갈 경우");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1008, 1672, this,
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

        this.loadIncludeScript("Guide_05.xfdl");

       
    };
}
)();
