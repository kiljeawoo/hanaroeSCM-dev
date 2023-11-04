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
                this.set_name("form");
                this.set_classname("TEMPLATE008");
                this.getSetter("inheritanceid").set("");
                this.set_titletext("TREE FORM");
                this._setFormPosition(0,0,790,576);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_TreeCommunity", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY_ID\" type=\"string\" size=\"16\"/><Column id=\"TEXT_NAME\" type=\"string\" size=\"150\"/><Column id=\"CATEGORY_NAME\" type=\"string\" size=\"150\"/><Column id=\"CATEGORY_DESC\" type=\"string\" size=\"300\"/><Column id=\"CATE_REGDATE\" type=\"date\" size=\"0\"/><Column id=\"COMMUNITY_ID\" type=\"string\" size=\"16\"/><Column id=\"COMMUNITY_NAME\" type=\"string\" size=\"150\"/><Column id=\"COMMUNITY_DESC\" type=\"string\" size=\"300\"/><Column id=\"REG_ID\" type=\"string\" size=\"20\"/><Column id=\"REG_DATE\" type=\"date\" size=\"0\"/><Column id=\"DEPTH\" type=\"bigdecimal\" size=\"0\"/><Column id=\"USERID\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CATEGORY_ID\">CATEGORY-0001</Col><Col id=\"TEXT_NAME\">컴퓨터</Col><Col id=\"CATEGORY_NAME\">컴퓨터</Col><Col id=\"CATEGORY_DESC\">컴퓨터에 관련된 커뮤니티들이 모여있습니다.</Col><Col id=\"CATE_REGDATE\">20090623</Col><Col id=\"COMMUNITY_ID\"/><Col id=\"COMMUNITY_NAME\"/><Col id=\"COMMUNITY_DESC\"/><Col id=\"REG_ID\"/><Col id=\"REG_DATE\">20120712</Col><Col id=\"DEPTH\">0</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0001</Col><Col id=\"TEXT_NAME\">HTML CSS 자바스크립트</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0003</Col><Col id=\"COMMUNITY_NAME\">HTML CSS 자바스크립트</Col><Col id=\"COMMUNITY_DESC\">HTML CSS  자바스크립트 개발을 위한 커뮤니티입니다.</Col><Col id=\"REG_ID\">subman</Col><Col id=\"REG_DATE\">20090623</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0001</Col><Col id=\"TEXT_NAME\">FLEX 쉽게 배워보기</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0004</Col><Col id=\"COMMUNITY_NAME\">FLEX 쉽게 배워보기</Col><Col id=\"COMMUNITY_DESC\">FLEX개발과 실무에 대한 의견을 나누는 커뮤니티입니다.</Col><Col id=\"REG_ID\">zoon73</Col><Col id=\"REG_DATE\">20090623</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0001</Col><Col id=\"TEXT_NAME\">Spring Framework 사용자 모임</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0005</Col><Col id=\"COMMUNITY_NAME\">Spring Framework 사용자 모임</Col><Col id=\"COMMUNITY_DESC\">Spring Framework 사용자 모임입니다.</Col><Col id=\"REG_ID\">howrock</Col><Col id=\"REG_DATE\">20090623</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0001</Col><Col id=\"TEXT_NAME\">THE PRACTICAL SQL</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0002</Col><Col id=\"COMMUNITY_NAME\">THE PRACTICAL SQL</Col><Col id=\"COMMUNITY_DESC\">SQL 학습을 위한 커뮤니티입니다.</Col><Col id=\"REG_ID\">bowman</Col><Col id=\"REG_DATE\">20090623</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0001</Col><Col id=\"TEXT_NAME\">컴퓨터 만들기</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0012</Col><Col id=\"COMMUNITY_NAME\">컴퓨터 만들기</Col><Col id=\"COMMUNITY_DESC\">컴퓨터 조립해서 써요~</Col><Col id=\"REG_ID\">hong80</Col><Col id=\"REG_DATE\">20090805</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0002</Col><Col id=\"TEXT_NAME\">자동차</Col><Col id=\"CATEGORY_NAME\">자동차</Col><Col id=\"CATEGORY_DESC\">자동차에 관련된 커뮤니티들이 모여 있습니다.</Col><Col id=\"CATE_REGDATE\">20090623</Col><Col id=\"COMMUNITY_ID\"/><Col id=\"COMMUNITY_NAME\"/><Col id=\"COMMUNITY_DESC\"/><Col id=\"REG_ID\"/><Col id=\"REG_DATE\">20120712</Col><Col id=\"DEPTH\">0</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0002</Col><Col id=\"TEXT_NAME\">어느 주유소에서 기름 넣으세요?</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0010</Col><Col id=\"COMMUNITY_NAME\">어느 주유소에서 기름 넣으세요?</Col><Col id=\"COMMUNITY_DESC\">전국 주유소 기름값 정보를 공유 할 수 있습니다.</Col><Col id=\"REG_ID\">babopack</Col><Col id=\"REG_DATE\">20090623</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0002</Col><Col id=\"TEXT_NAME\">JAVA 개발정보 나누기</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0001</Col><Col id=\"COMMUNITY_NAME\">JAVA 개발정보 나누기</Col><Col id=\"COMMUNITY_DESC\">JAVA 개발자들이 모여 정보를 공유하는 커뮤니티입니다.</Col><Col id=\"REG_ID\">hong80</Col><Col id=\"REG_DATE\">20090623</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0002</Col><Col id=\"TEXT_NAME\">SM3 같이 타요</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0006</Col><Col id=\"COMMUNITY_NAME\">SM3 같이 타요</Col><Col id=\"COMMUNITY_DESC\">SM3 차량 정보를 공유하고 친목을 동호하기 위한 커뮤니티입니다.</Col><Col id=\"REG_ID\">minminmin</Col><Col id=\"REG_DATE\">20090623</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0002</Col><Col id=\"TEXT_NAME\">자동차 보험에 대한 모든 것</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0008</Col><Col id=\"COMMUNITY_NAME\">자동차 보험에 대한 모든 것</Col><Col id=\"COMMUNITY_DESC\">자동차 보험에 대한 모든 정보가 있습니다.</Col><Col id=\"REG_ID\">whatsub</Col><Col id=\"REG_DATE\">20090623</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0002</Col><Col id=\"TEXT_NAME\">자동차 함께 타기</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0011</Col><Col id=\"COMMUNITY_NAME\">자동차 함께 타기</Col><Col id=\"COMMUNITY_DESC\">고유가 시대에 카풀을 원하시는 분들을 위한모임입니다.</Col><Col id=\"REG_ID\">eugene</Col><Col id=\"REG_DATE\">20090623</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0002</Col><Col id=\"TEXT_NAME\">중고차 비싸게 팔고 싸게 사기</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0007</Col><Col id=\"COMMUNITY_NAME\">중고차 비싸게 팔고 싸게 사기</Col><Col id=\"COMMUNITY_DESC\">중고차 매매 정보를 공유하는 커뮤니티입니다.</Col><Col id=\"REG_ID\">urobba</Col><Col id=\"REG_DATE\">20090623</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0002</Col><Col id=\"TEXT_NAME\">혼자서 자동차 고치지</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0009</Col><Col id=\"COMMUNITY_NAME\">혼자서 자동차 고치지</Col><Col id=\"COMMUNITY_DESC\">자동차 정비 관련 정보를 나눠요.</Col><Col id=\"REG_ID\">bigblue</Col><Col id=\"REG_DATE\">20090623</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0003</Col><Col id=\"TEXT_NAME\">연원조기축구</Col><Col id=\"CATEGORY_NAME\">연원조기축구</Col><Col id=\"CATEGORY_DESC\">연원조기축구 수정 테스트</Col><Col id=\"CATE_REGDATE\">20090623</Col><Col id=\"COMMUNITY_ID\"/><Col id=\"COMMUNITY_NAME\"/><Col id=\"COMMUNITY_DESC\"/><Col id=\"REG_ID\"/><Col id=\"REG_DATE\">20120712</Col><Col id=\"DEPTH\">0</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0003</Col><Col id=\"TEXT_NAME\">K리그 봐요</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0017</Col><Col id=\"COMMUNITY_NAME\">K리그 봐요</Col><Col id=\"COMMUNITY_DESC\">K리그에 관심이 있는 분들이면 누구나 환영합니다.</Col><Col id=\"REG_ID\">test</Col><Col id=\"REG_DATE\">20090806</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0003</Col><Col id=\"TEXT_NAME\">MLB 매니아</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0013</Col><Col id=\"COMMUNITY_NAME\">MLB 매니아</Col><Col id=\"COMMUNITY_DESC\">MLB 매니아</Col><Col id=\"REG_ID\">test</Col><Col id=\"REG_DATE\">20090806</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0003</Col><Col id=\"TEXT_NAME\">연원조기축구</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-1019</Col><Col id=\"COMMUNITY_NAME\">연원조기축구</Col><Col id=\"COMMUNITY_DESC\">연원조기축구</Col><Col id=\"REG_ID\">test</Col><Col id=\"REG_DATE\">20090926</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0004</Col><Col id=\"TEXT_NAME\">친목</Col><Col id=\"CATEGORY_NAME\">친목</Col><Col id=\"CATEGORY_DESC\">친목에 관련된 커뮤니티들이 모여 있습니다.</Col><Col id=\"CATE_REGDATE\">20090623</Col><Col id=\"COMMUNITY_ID\"/><Col id=\"COMMUNITY_NAME\"/><Col id=\"COMMUNITY_DESC\"/><Col id=\"REG_ID\"/><Col id=\"REG_DATE\">20120712</Col><Col id=\"DEPTH\">0</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0004</Col><Col id=\"TEXT_NAME\">동기모임</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0018</Col><Col id=\"COMMUNITY_NAME\">동기모임</Col><Col id=\"COMMUNITY_DESC\">동기야 반갑다.</Col><Col id=\"REG_ID\">hong80</Col><Col id=\"REG_DATE\">20090806</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0005</Col><Col id=\"TEXT_NAME\">레몬테라스</Col><Col id=\"CATEGORY_NAME\">레몬테라스</Col><Col id=\"CATEGORY_DESC\">내집을 잡지에 나오는 집처럼 예쁘게 꾸밀 수 있다.</Col><Col id=\"CATE_REGDATE\">20090623</Col><Col id=\"COMMUNITY_ID\"/><Col id=\"COMMUNITY_NAME\"/><Col id=\"COMMUNITY_DESC\"/><Col id=\"REG_ID\"/><Col id=\"REG_DATE\">20120712</Col><Col id=\"DEPTH\">0</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0005</Col><Col id=\"TEXT_NAME\">레몬테라스</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-1009</Col><Col id=\"COMMUNITY_NAME\">레몬테라스</Col><Col id=\"COMMUNITY_DESC\">내집을 잡지에 나오는 집처럼 예쁘게 꾸밀 수 있습니다.</Col><Col id=\"REG_ID\">test</Col><Col id=\"REG_DATE\">20090926</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0005</Col><Col id=\"TEXT_NAME\">목공 나들이</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0020</Col><Col id=\"COMMUNITY_NAME\">목공 나들이</Col><Col id=\"COMMUNITY_DESC\">책상을 내손으로 만들어 쓸 수 있습니다.</Col><Col id=\"REG_ID\">test</Col><Col id=\"REG_DATE\">20090821</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0006</Col><Col id=\"TEXT_NAME\">봉사</Col><Col id=\"CATEGORY_NAME\">봉사</Col><Col id=\"CATEGORY_DESC\">봉사에 관련된 커뮤니티들이 모여 있습니다.</Col><Col id=\"CATE_REGDATE\">20090623</Col><Col id=\"COMMUNITY_ID\"/><Col id=\"COMMUNITY_NAME\"/><Col id=\"COMMUNITY_DESC\"/><Col id=\"REG_ID\"/><Col id=\"REG_DATE\">20120712</Col><Col id=\"DEPTH\">0</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0006</Col><Col id=\"TEXT_NAME\">농활</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0015</Col><Col id=\"COMMUNITY_NAME\">농활</Col><Col id=\"COMMUNITY_DESC\">농촌 봉사활동</Col><Col id=\"REG_ID\">test</Col><Col id=\"REG_DATE\">20090821</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0006</Col><Col id=\"TEXT_NAME\">복지관 청소</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-1017</Col><Col id=\"COMMUNITY_NAME\">복지관 청소</Col><Col id=\"COMMUNITY_DESC\">복지관 청소</Col><Col id=\"REG_ID\">test</Col><Col id=\"REG_DATE\">20090926</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0006</Col><Col id=\"TEXT_NAME\">탄천 환경 정화</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0014</Col><Col id=\"COMMUNITY_NAME\">탄천 환경 정화</Col><Col id=\"COMMUNITY_DESC\">탄천을 깨끗하게</Col><Col id=\"REG_ID\">test</Col><Col id=\"REG_DATE\">20090806</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0006</Col><Col id=\"TEXT_NAME\">컴퓨터 도우미</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-0019</Col><Col id=\"COMMUNITY_NAME\">컴퓨터 도우미</Col><Col id=\"COMMUNITY_DESC\">컴퓨터 공부를 도와드립니다.</Col><Col id=\"REG_ID\">test</Col><Col id=\"REG_DATE\">20090821</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-0006</Col><Col id=\"TEXT_NAME\">엑스포 자원봉사</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-1010</Col><Col id=\"COMMUNITY_NAME\">엑스포 자원봉사</Col><Col id=\"COMMUNITY_DESC\">엑스포 자원봉사</Col><Col id=\"REG_ID\">test</Col><Col id=\"REG_DATE\">20090926</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-1009</Col><Col id=\"TEXT_NAME\">놀이</Col><Col id=\"CATEGORY_NAME\">놀이</Col><Col id=\"CATEGORY_DESC\">놀이에 관련된 커뮤니티들이 모여 있습니다.</Col><Col id=\"CATE_REGDATE\">20090925</Col><Col id=\"COMMUNITY_ID\"/><Col id=\"COMMUNITY_NAME\"/><Col id=\"COMMUNITY_DESC\"/><Col id=\"REG_ID\"/><Col id=\"REG_DATE\">20120712</Col><Col id=\"DEPTH\">0</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-1009</Col><Col id=\"TEXT_NAME\">온갖 놀이</Col><Col id=\"CATEGORY_NAME\"/><Col id=\"CATEGORY_DESC\"/><Col id=\"CATE_REGDATE\">20120712</Col><Col id=\"COMMUNITY_ID\">COMMUNITY-1003</Col><Col id=\"COMMUNITY_NAME\">온갖 놀이</Col><Col id=\"COMMUNITY_DESC\">알고 있는 모든 놀이를 다 해봅시다.</Col><Col id=\"REG_ID\">test</Col><Col id=\"REG_DATE\">20090925</Col><Col id=\"DEPTH\">1</Col><Col id=\"USERID\"/></Row><Row><Col id=\"CATEGORY_ID\">CATEGORY-1101</Col><Col id=\"TEXT_NAME\">테스트</Col><Col id=\"CATEGORY_NAME\">테스트</Col><Col id=\"CATEGORY_DESC\">테스트</Col><Col id=\"CATE_REGDATE\">20120705</Col><Col id=\"COMMUNITY_ID\"/><Col id=\"COMMUNITY_NAME\"/><Col id=\"COMMUNITY_DESC\"/><Col id=\"REG_ID\"/><Col id=\"REG_DATE\">20120712</Col><Col id=\"DEPTH\">0</Col><Col id=\"USERID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_TreeCommunity", "absolute", "0", "80", "284", null, null, "0", this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_TreeCommunity");
            obj.set_treeinitstatus("collapse,all");
            obj.set_treeusecheckbox("false");
            obj.set_autofittype("col");
            obj.set_treeuseline("false");
            obj.set_selecttype("treecell");
            obj.set_scrollpixel("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"342\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:TEXT_NAME\" treelevel=\"bind:DEPTH\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 790, 576, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TEMPLATE008");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("TREE FORM");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Z201410_2014100097-tree_grid.xfdl", function() {
        this.nCurRow = 0;
        this.treeStatus = 0;
        /***********************************************************************
         * Event 처리 부분
         ************************************************************************/

        

        // Tree Grid  클릭 이벤트 처리
        this.grd_TreeCommunity_oncellclick = function (obj,e)
        {
        	trace(e.canvasX);
        	
        	//추가 - 트리버튼의 영역이 눌렸을 경우는 로직을 타지 않도록 처리 함.
        	if( e.canvasX < 18 ){ 
        		return; 
        	}
        	
        	var objDs = this[obj.binddataset];

        	if (this.treeStatus == 1){
        		this.treeStatus = 0;
        		return;
        	}

        	var childRow = obj.getTreeChildRow(objDs.rowposition, 0, true);

        	// 자식 노드가 존재할 경우
        	if (childRow >= 0) 
        	{
        		var gridRow = obj.getTreeRow(objDs.rowposition);
        		if (obj.isTreeCollapsedRow(childRow, true)) 
        		{
        			obj.setTreeStatus(gridRow, true);
        		}
        		else 
        		{
        			obj.setTreeStatus(gridRow, false);
        		}
        	}
        	this.treeStatus = 0;
        }

        this.grd_TreeCommunity_cantreestatuschange = function (obj,e)
        {
        	//this.treeStatus = 1;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_TreeCommunity.addEventHandler("canrowposchange", this.ds_TreeCommunity_canrowposchange, this);
            this.ds_TreeCommunity.addEventHandler("onrowposchanged", this.ds_TreeCommunity_onrowposchanged, this);
            this.grd_TreeCommunity.addEventHandler("cantreestatuschange", this.grd_TreeCommunity_cantreestatuschange, this);
            this.grd_TreeCommunity.addEventHandler("oncellclick", this.grd_TreeCommunity_oncellclick, this);

        };

        this.loadIncludeScript("Z201410_2014100097-tree_grid.xfdl");

       
    };
}
)();
