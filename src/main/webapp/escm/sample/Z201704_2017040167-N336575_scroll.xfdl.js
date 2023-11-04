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
                this.set_name("Temp_Empty");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,800,800);
            }
            this.style.set_border("1 solid darkmagenta");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_keystring("Column0");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column2\">zxcv</Col><Col id=\"Column0\">1234</Col><Col id=\"Column1\">22.22</Col><Col id=\"Column3\">테스트&#10;테스트테스트&#10;테스트</Col><Col id=\"Column4\">20170313153000000</Col><Col id=\"Column5\">20170313153000000</Col></Row><Row><Col id=\"Column0\">2135151</Col><Col id=\"Column4\">20170309</Col><Col id=\"Column5\">20170309</Col></Row><Row/><Row/><Row/><Row/><Row/><Row><Col id=\"Column4\"/></Row><Row/><Row/><Row><Col id=\"Column4\">fff</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row><Col id=\"Column4\">a</Col></Row><Row><Col id=\"Column4\">b</Col></Row><Row><Col id=\"Column4\">c</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1.1</Col></Row><Row><Col id=\"Column0\">11</Col></Row><Row><Col id=\"Column0\">222</Col></Row><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new FileDialog("FileDialog00", this);
            obj.set_filter("All(*.*)|*.*|");
            obj.set_filterindex("0");
            obj.set_defaultextension("false");
            this.addChild(obj.name, obj);
            obj = new VirtualFile("VirtualFile00", this);
            this.addChild(obj.name, obj);
            obj = new Dataset("Dataset02", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column2\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">7.62</Col></Row><Row><Col id=\"Column0\">123</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">6.411</Col></Row><Row><Col id=\"Column0\">123</Col><Col id=\"Column1\">4</Col><Col id=\"Column2\">4699.39</Col></Row><Row><Col id=\"Column0\">1231</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">4893.171</Col></Row><Row><Col id=\"Column0\">23</Col><Col id=\"Column1\">6</Col><Col id=\"Column2\">0.036</Col></Row><Row><Col id=\"Column2\">0.036</Col></Row><Row><Col id=\"Column2\">0.036</Col></Row><Row><Col id=\"Column2\">0.036</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset03", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column2\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">2016-01-01 00:00</Col><Col id=\"Column1\">-14999</Col><Col id=\"Column2\">-14999</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset04", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"DATETIME\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가나다라마마사아자자</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">1</Col></Row><Row><Col id=\"Column1\">1</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column1\">1</Col><Col id=\"Column2\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset05", this);
            obj._setContents("<ColumnInfo><Column id=\"corpcoEvalItmCd\" type=\"STRING\" size=\"256\"/><Column id=\"evalFrmNo\" type=\"STRING\" size=\"256\"/><Column id=\"evalTypCd\" type=\"STRING\" size=\"256\"/><Column id=\"evalSpCd\" type=\"STRING\" size=\"256\"/><Column id=\"evalItmNm\" type=\"STRING\" size=\"256\"/><Column id=\"evalCont\" type=\"STRING\" size=\"256\"/><Column id=\"evalWghtvlNumB\" type=\"STRING\" size=\"256\"/><Column id=\"evalWghtvlNum\" type=\"STRING\" size=\"256\"/><Column id=\"evalScorngScor\" type=\"STRING\" size=\"256\"/><Column id=\"corpcoEvalItmStdrdNm\" type=\"STRING\" size=\"256\"/><Column id=\"corpcoEvalItmStdrdCd\" type=\"STRING\" size=\"256\"/><Column id=\"stdrdStrtSecNum\" type=\"STRING\" size=\"256\"/><Column id=\"stdrdEndSecNum\" type=\"STRING\" size=\"256\"/><Column id=\"rank\" type=\"STRING\" size=\"256\"/><Column id=\"dsplyOdr\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"evalItmNm\">정성평가-정해영-0706-01</Col><Col id=\"evalSpCd\">1</Col><Col id=\"evalCont\">정성평가-정해영-0706-01정성평가-정해영-0706-01정성평가-정해영-0706-01정성평가-정해영-0706-01정성평가-정해영-0706-01</Col><Col id=\"evalTypCd\">1</Col><Col id=\"evalFrmNo\">1000000001</Col><Col id=\"corpcoEvalItmCd\">10030</Col><Col id=\"evalWghtvlNumB\">15</Col><Col id=\"evalWghtvlNum\">10</Col><Col id=\"evalScorngScor\">10</Col><Col id=\"corpcoEvalItmStdrdNm\">011</Col><Col id=\"corpcoEvalItmStdrdCd\">매우좋음</Col></Row><Row><Col id=\"evalItmNm\">정성평가-정해영-0706-01</Col><Col id=\"evalCont\">정성평가-정해영-0706-01정성평가-정해영-0706-01정성평가-정해영-0706-01정성평가-정해영-0706-01정성평가-정해영-0706-01</Col><Col id=\"evalSpCd\">1</Col><Col id=\"evalTypCd\">1</Col><Col id=\"evalFrmNo\">1000000001</Col><Col id=\"corpcoEvalItmCd\">10030</Col><Col id=\"evalWghtvlNumB\">15</Col><Col id=\"evalWghtvlNum\">10</Col><Col id=\"evalScorngScor\">7</Col><Col id=\"corpcoEvalItmStdrdNm\">012</Col><Col id=\"corpcoEvalItmStdrdCd\">좋음</Col></Row><Row><Col id=\"corpcoEvalItmCd\">10030</Col><Col id=\"evalFrmNo\">1000000001</Col><Col id=\"evalTypCd\">1</Col><Col id=\"evalSpCd\">1</Col><Col id=\"evalItmNm\">정성평가-정해영-0706-01</Col><Col id=\"evalCont\">정성평가-정해영-0706-01정성평가-정해영-0706-01정성평가-정해영-0706-01정성평가-정해영-0706-01정성평가-정해영-0706-01</Col><Col id=\"evalWghtvlNumB\">15</Col><Col id=\"evalWghtvlNum\">10</Col><Col id=\"evalScorngScor\">5</Col><Col id=\"corpcoEvalItmStdrdNm\">013</Col><Col id=\"corpcoEvalItmStdrdCd\">보통</Col></Row><Row><Col id=\"corpcoEvalItmCd\">10030</Col><Col id=\"evalFrmNo\">1000000001</Col><Col id=\"evalTypCd\">1</Col><Col id=\"evalSpCd\">1</Col><Col id=\"evalItmNm\">정성평가-정해영-0706-01</Col><Col id=\"evalCont\">정성평가-정해영-0706-01정성평가-정해영-0706-01정성평가-정해영-0706-01정성평가-정해영-0706-01정성평가-정해영-0706-01</Col><Col id=\"evalWghtvlNumB\">15</Col><Col id=\"evalWghtvlNum\">10</Col><Col id=\"evalScorngScor\">1</Col><Col id=\"corpcoEvalItmStdrdNm\">015</Col><Col id=\"corpcoEvalItmStdrdCd\">매우나쁨</Col></Row><Row><Col id=\"corpcoEvalItmCd\">10030</Col><Col id=\"evalFrmNo\">1000000001</Col><Col id=\"evalTypCd\">1</Col><Col id=\"evalSpCd\">1</Col><Col id=\"evalItmNm\">정성평가-정해영-0706-01</Col><Col id=\"evalCont\">정성평가-정해영-0706-01정성평가-정해영-0706-01정성평가-정해영-0706-01정성평가-정해영-0706-01정성평가-정해영-0706-01</Col><Col id=\"evalWghtvlNumB\">15</Col><Col id=\"evalWghtvlNum\">10</Col><Col id=\"evalScorngScor\">3</Col><Col id=\"corpcoEvalItmStdrdNm\">014</Col><Col id=\"corpcoEvalItmStdrdCd\">나쁨</Col></Row><Row><Col id=\"corpcoEvalItmCd\">10031</Col><Col id=\"evalFrmNo\">1000000001</Col><Col id=\"evalTypCd\">1</Col><Col id=\"evalSpCd\">1</Col><Col id=\"evalItmNm\">정성평가-정해영-0706-02</Col><Col id=\"evalCont\">정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02</Col><Col id=\"evalWghtvlNumB\">15</Col><Col id=\"evalWghtvlNum\">20</Col><Col id=\"evalScorngScor\">20</Col><Col id=\"corpcoEvalItmStdrdNm\">012</Col><Col id=\"corpcoEvalItmStdrdCd\">좋음</Col></Row><Row><Col id=\"corpcoEvalItmCd\">10031</Col><Col id=\"evalFrmNo\">1000000001</Col><Col id=\"evalTypCd\">1</Col><Col id=\"evalSpCd\">1</Col><Col id=\"evalItmNm\">정성평가-정해영-0706-02</Col><Col id=\"evalCont\">정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02정성평가-정해영-0706-02</Col><Col id=\"evalWghtvlNumB\">15</Col><Col id=\"evalWghtvlNum\">20</Col><Col id=\"evalScorngScor\">10</Col><Col id=\"corpcoEvalItmStdrdNm\">013</Col><Col id=\"corpcoEvalItmStdrdCd\">보통</Col></Row><Row><Col id=\"corpcoEvalItmCd\">10032</Col><Col id=\"evalFrmNo\">1000000001</Col><Col id=\"evalTypCd\">2</Col><Col id=\"evalSpCd\">1</Col><Col id=\"evalItmNm\">정량평가-정해영-0706-01</Col><Col id=\"evalCont\">정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01</Col><Col id=\"evalWghtvlNumB\">35</Col><Col id=\"evalWghtvlNum\">20</Col><Col id=\"evalScorngScor\">10</Col><Col id=\"corpcoEvalItmStdrdNm\">101</Col><Col id=\"corpcoEvalItmStdrdCd\">10000000 ~ 50000000</Col><Col id=\"stdrdStrtSecNum\">10000000</Col></Row><Row><Col id=\"corpcoEvalItmCd\">10032</Col><Col id=\"evalFrmNo\">1000000001</Col><Col id=\"evalTypCd\">2</Col><Col id=\"evalSpCd\">1</Col><Col id=\"evalItmNm\">정량평가-정해영-0706-01</Col><Col id=\"evalCont\">정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01정량평가-정해영-0706-01</Col><Col id=\"evalWghtvlNumB\">35</Col><Col id=\"evalWghtvlNum\">20</Col><Col id=\"evalScorngScor\">50</Col><Col id=\"corpcoEvalItmStdrdNm\">102</Col><Col id=\"corpcoEvalItmStdrdCd\">50000000 ~ 100000000</Col><Col id=\"stdrdStrtSecNum\">50000000</Col></Row><Row><Col id=\"corpcoEvalItmCd\">10033</Col><Col id=\"evalFrmNo\">1000000001</Col><Col id=\"evalTypCd\">2</Col><Col id=\"evalSpCd\">1</Col><Col id=\"evalItmNm\">정량평가-정해영-0706-02</Col><Col id=\"evalCont\">정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02</Col><Col id=\"evalWghtvlNumB\">35</Col><Col id=\"evalWghtvlNum\">50</Col><Col id=\"evalScorngScor\">5</Col><Col id=\"corpcoEvalItmStdrdNm\">101</Col><Col id=\"corpcoEvalItmStdrdCd\">1 ~ 10</Col><Col id=\"stdrdStrtSecNum\">1</Col></Row><Row><Col id=\"corpcoEvalItmCd\">10033</Col><Col id=\"evalFrmNo\">1000000001</Col><Col id=\"evalTypCd\">2</Col><Col id=\"evalSpCd\">1</Col><Col id=\"evalItmNm\">정량평가-정해영-0706-02</Col><Col id=\"evalCont\">정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02</Col><Col id=\"evalWghtvlNumB\">35</Col><Col id=\"evalWghtvlNum\">50</Col><Col id=\"evalScorngScor\">10</Col><Col id=\"corpcoEvalItmStdrdNm\">104</Col><Col id=\"corpcoEvalItmStdrdCd\">100 ~ 1000</Col><Col id=\"stdrdStrtSecNum\">100</Col></Row><Row><Col id=\"corpcoEvalItmCd\">10033</Col><Col id=\"evalFrmNo\">1000000001</Col><Col id=\"evalTypCd\">2</Col><Col id=\"evalSpCd\">1</Col><Col id=\"evalItmNm\">정량평가-정해영-0706-02</Col><Col id=\"evalCont\">정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02</Col><Col id=\"evalWghtvlNumB\">35</Col><Col id=\"evalWghtvlNum\">50</Col><Col id=\"evalScorngScor\">30</Col><Col id=\"corpcoEvalItmStdrdNm\">103</Col><Col id=\"corpcoEvalItmStdrdCd\">50 ~ 100</Col><Col id=\"stdrdStrtSecNum\">50</Col></Row><Row><Col id=\"corpcoEvalItmCd\">10033</Col><Col id=\"evalFrmNo\">1000000001</Col><Col id=\"evalTypCd\">2</Col><Col id=\"evalSpCd\">1</Col><Col id=\"evalItmNm\">정량평가-정해영-0706-02</Col><Col id=\"evalCont\">정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02정량평가-정해영-0706-02</Col><Col id=\"evalWghtvlNumB\">35</Col><Col id=\"evalWghtvlNum\">50</Col><Col id=\"evalScorngScor\">1</Col><Col id=\"corpcoEvalItmStdrdNm\">102</Col><Col id=\"corpcoEvalItmStdrdCd\">10 ~ 50</Col><Col id=\"stdrdStrtSecNum\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">a</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">b</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">c</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRadio", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Individual</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">Yearly</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">Half Year</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">Quarterly</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">Monthly</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset06", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">가</Col><Col id=\"Column2\">a</Col><Col id=\"Column3\">a</Col><Col id=\"Column4\">34534</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">나</Col><Col id=\"Column2\">b</Col><Col id=\"Column3\">b</Col><Col id=\"Column4\">3453</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">다</Col><Col id=\"Column2\">c</Col><Col id=\"Column3\">a</Col><Col id=\"Column4\">5677</Col></Row><Row><Col id=\"Column3\">c</Col><Col id=\"Column0\">0</Col><Col id=\"Column1\">라</Col><Col id=\"Column2\">d</Col><Col id=\"Column4\">12</Col></Row><Row><Col id=\"Column3\">a</Col><Col id=\"Column0\">0</Col><Col id=\"Column1\">마</Col><Col id=\"Column2\">e</Col><Col id=\"Column4\">312</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCalendar", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column5\">20170401</Col></Row><Row><Col id=\"Column5\">20170501</Col></Row><Row><Col id=\"Column5\">20161205</Col></Row><Row><Col id=\"Column5\">20170406</Col></Row><Row><Col id=\"Column5\">20181208</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "5.38%", "995", null, "587", "36.25%", null, this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "75.38%", "11", null, "50", "9.63%", null, this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Temp_Empty");
            		p.set_titletext("New Form");
            		p.style.set_border("1 solid darkmagenta");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Z201704_2017040167-N336575_scroll.xfdl", function() {
        this.btnOrgL;
        this.btnOrgT;

        this.Temp_Empty_onvscroll = function(obj,e)
        {
        	trace("e.pos : " + e.pos + " e.type : " + e.type);
        	trace("btnOrgL : " + this.btnOrgL);
        	trace("btnOrgT : " + this.btnOrgT);
        	this.Button01.move(this.btnOrgL, this.btnOrgT+e.pos);	
        	
        }

        this.Temp_Empty_onload = function(obj,e)
        {
        	this.btnOrgL = this.Button01.getOffsetLeft();
        	this.btnOrgT = this.Button01.getOffsetTop();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Dataset00.addEventHandler("cancolumnchange", this.Dataset00_cancolumnchange, this);
            this.Dataset00.addEventHandler("oncolumnchanged", this.Dataset00_oncolumnchanged, this);
            this.Dataset01.addEventHandler("oncolumnchanged", this.Dataset01_oncolumnchanged, this);
            this.addEventHandler("onbeforeclose", this.Temp_Empty_onbeforeclose, this);
            this.addEventHandler("onload", this.Temp_Empty_onload, this);
            this.addEventHandler("onvscroll", this.Temp_Empty_onvscroll, this);

        };

        this.loadIncludeScript("Z201704_2017040167-N336575_scroll.xfdl");

       
    };
}
)();
