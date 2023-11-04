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
                this.set_titletext("전자계약조회 상세조회양식");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,941,460);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KDNM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"UID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_form", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"256\" prop=\"\"/><Column id=\"VALUE\" type=\"string\" size=\"256\" prop=\"\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrw", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TYPE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_M\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_D\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrw41", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"string\" size=\"256\"/><Column id=\"VALUE\" type=\"string\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KDNM\" type=\"STRING\" size=\"256\"/><Column id=\"UID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ETC9</Col><Col id=\"VALUE\">계약사업장명</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC9</Col></Row><Row><Col id=\"CODE\">ETC10</Col><Col id=\"VALUE\">임대차목적물의 표시 우편번호 앞자리</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC10</Col></Row><Row><Col id=\"CODE\">ETC11</Col><Col id=\"VALUE\">임대차목적물의 표시 우편번호 뒷자리</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC11</Col></Row><Row><Col id=\"CODE\">ETC12</Col><Col id=\"VALUE\">임대차목적물의 표시 주소</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC12</Col></Row><Row><Col id=\"CODE\">ETC13</Col><Col id=\"VALUE\">임대차목적물의 표시 상세주소</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC13</Col></Row><Row><Col id=\"CODE\">ETC14</Col><Col id=\"VALUE\">점유면적</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC14</Col></Row><Row><Col id=\"CODE\">ETC15</Col><Col id=\"VALUE\">공유면적</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC15</Col></Row><Row><Col id=\"CODE\">ETC16</Col><Col id=\"VALUE\">면적(계)</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC16</Col></Row><Row><Col id=\"CODE\">ETC17</Col><Col id=\"VALUE\">임대차기간 시작일</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC17</Col></Row><Row><Col id=\"CODE\">ETC18</Col><Col id=\"VALUE\">임대차기간 종료일</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC18</Col></Row><Row><Col id=\"CODE\">ETC19</Col><Col id=\"VALUE\">임대보증금</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC19</Col></Row><Row><Col id=\"CODE\">ETC20</Col><Col id=\"VALUE\">월임대료 금액</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC20</Col></Row><Row><Col id=\"CODE\">ETC21</Col><Col id=\"VALUE\">월임대료 %</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC21</Col></Row><Row><Col id=\"CODE\">ETC22</Col><Col id=\"VALUE\">업종</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC22</Col></Row><Row><Col id=\"CODE\">ETC23</Col><Col id=\"VALUE\">매장명</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC23</Col></Row><Row><Col id=\"CODE\">ETC24</Col><Col id=\"VALUE\">주요판매상품</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC24</Col></Row><Row><Col id=\"CODE\">ETC29</Col><Col id=\"VALUE\">임대보증금 전액 납부기일</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC29</Col></Row><Row><Col id=\"CODE\">ETC30</Col><Col id=\"VALUE\">임대보증금 연체료 비율</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC30</Col></Row><Row><Col id=\"CODE\">ETC31</Col><Col id=\"VALUE\">임대보증금 공제액</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC31</Col></Row><Row><Col id=\"CODE\">ETC32</Col><Col id=\"VALUE\">월 임대료 납부기일</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC32</Col></Row><Row><Col id=\"CODE\">ETC33</Col><Col id=\"VALUE\">임대료 연체료시 연체료 비율</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC33</Col></Row><Row><Col id=\"CODE\">ETC34</Col><Col id=\"VALUE\">상품판매대금 지급일</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC34</Col></Row><Row><Col id=\"CODE\">ETC35</Col><Col id=\"VALUE\">관리비 및 시설 이용료 납부</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC35</Col></Row><Row><Col id=\"CODE\">ETC36</Col><Col id=\"VALUE\">비밀유지 의무기간</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC36</Col></Row><Row><Col id=\"CODE\">ETC37</Col><Col id=\"VALUE\">위약벌 비율</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC37</Col></Row><Row><Col id=\"CODE\">ETC38</Col><Col id=\"VALUE\">지연이자 비율</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC38</Col></Row><Row><Col id=\"CODE\">ETC39</Col><Col id=\"VALUE\">계약해지 위약벌</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC39</Col></Row><Row><Col id=\"CODE\">ETC40</Col><Col id=\"VALUE\">상품판매조건 판매장소</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC40</Col></Row><Row><Col id=\"CODE\">ETC41</Col><Col id=\"VALUE\">상품판매조건 판매기간</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC41</Col></Row><Row><Col id=\"CODE\">ETC42</Col><Col id=\"VALUE\">상품판매조건 판매상품내역</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC42</Col></Row><Row><Col id=\"CODE\">ETC46</Col><Col id=\"VALUE\">매장의 위치 점포명</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC46</Col></Row><Row><Col id=\"CODE\">ETC47</Col><Col id=\"VALUE\">매장의 위치 운영층</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC47</Col></Row><Row><Col id=\"CODE\">ETC48</Col><Col id=\"VALUE\">매장의 위치 매장위치</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC48</Col></Row><Row><Col id=\"CODE\">ETC51</Col><Col id=\"VALUE\">매장의 위치 매장면적</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC51</Col></Row><Row><Col id=\"CODE\">ETC52</Col><Col id=\"VALUE\">매장의 위치 기타특약사항</Col><Col id=\"MN_CTRW_KD\">41</Col><Col id=\"MN_CTRW_KDNM\">임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">41ETC52</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrw43", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"string\" size=\"256\"/><Column id=\"VALUE\" type=\"string\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KDNM\" type=\"STRING\" size=\"256\"/><Column id=\"UID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ETC9</Col><Col id=\"VALUE\">계약사업장명</Col><Col id=\"MN_CTRW_KD\">43</Col><Col id=\"MN_CTRW_KDNM\">특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">43ETC9</Col></Row><Row><Col id=\"CODE\">ETC10</Col><Col id=\"VALUE\">현금지급조건</Col><Col id=\"MN_CTRW_KD\">43</Col><Col id=\"MN_CTRW_KDNM\">특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">43ETC10</Col></Row><Row><Col id=\"CODE\">ETC11</Col><Col id=\"VALUE\">상품판매대금 공제가능 판매수익</Col><Col id=\"MN_CTRW_KD\">43</Col><Col id=\"MN_CTRW_KDNM\">특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">43ETC11</Col></Row><Row><Col id=\"CODE\">ETC12</Col><Col id=\"VALUE\">판매수수료율 마진율</Col><Col id=\"MN_CTRW_KD\">43</Col><Col id=\"MN_CTRW_KDNM\">특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">43ETC12</Col></Row><Row><Col id=\"CODE\">ETC13</Col><Col id=\"VALUE\">판매수수료율 부가가치세율</Col><Col id=\"MN_CTRW_KD\">43</Col><Col id=\"MN_CTRW_KDNM\">특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">43ETC13</Col></Row><Row><Col id=\"CODE\">ETC14</Col><Col id=\"VALUE\">하자보증보험증권의 금액 또는 보증금</Col><Col id=\"MN_CTRW_KD\">43</Col><Col id=\"MN_CTRW_KDNM\">특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">43ETC14</Col></Row><Row><Col id=\"CODE\">ETC17</Col><Col id=\"VALUE\">계약기간 시작일</Col><Col id=\"MN_CTRW_KD\">43</Col><Col id=\"MN_CTRW_KDNM\">특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">43ETC17</Col></Row><Row><Col id=\"CODE\">ETC18</Col><Col id=\"VALUE\">계약기간 종료일</Col><Col id=\"MN_CTRW_KD\">43</Col><Col id=\"MN_CTRW_KDNM\">특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">43ETC18</Col></Row><Row><Col id=\"CODE\">ETC21</Col><Col id=\"VALUE\">매장의 위치 점포명</Col><Col id=\"MN_CTRW_KD\">43</Col><Col id=\"MN_CTRW_KDNM\">특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">43ETC21</Col></Row><Row><Col id=\"CODE\">ETC22</Col><Col id=\"VALUE\">매장의 위치 운영층</Col><Col id=\"MN_CTRW_KD\">43</Col><Col id=\"MN_CTRW_KDNM\">특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">43ETC22</Col></Row><Row><Col id=\"CODE\">ETC23</Col><Col id=\"VALUE\">매장의 위치 영업시간</Col><Col id=\"MN_CTRW_KD\">43</Col><Col id=\"MN_CTRW_KDNM\">특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">43ETC23</Col></Row><Row><Col id=\"CODE\">ETC24</Col><Col id=\"VALUE\">매장의 위치 매장위치</Col><Col id=\"MN_CTRW_KD\">43</Col><Col id=\"MN_CTRW_KDNM\">특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">43ETC24</Col></Row><Row><Col id=\"CODE\">ETC25</Col><Col id=\"VALUE\">매장의 위치 매장면적</Col><Col id=\"MN_CTRW_KD\">43</Col><Col id=\"MN_CTRW_KDNM\">특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">43ETC25</Col></Row><Row><Col id=\"CODE\">ETC26</Col><Col id=\"VALUE\">매장의 위치 판촉사원 수</Col><Col id=\"MN_CTRW_KD\">43</Col><Col id=\"MN_CTRW_KDNM\">특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">43ETC26</Col></Row><Row><Col id=\"CODE\">ETC51</Col><Col id=\"VALUE\">매장의 위치 기타특약사항</Col><Col id=\"MN_CTRW_KD\">43</Col><Col id=\"MN_CTRW_KDNM\">특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">43ETC51</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrw95", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"string\" size=\"256\"/><Column id=\"VALUE\" type=\"string\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KDNM\" type=\"STRING\" size=\"256\"/><Column id=\"UID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ETC32</Col><Col id=\"VALUE\">계약사업장명</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC32</Col></Row><Row><Col id=\"CODE\">ETC1</Col><Col id=\"VALUE\">부속계약서 추가내용 매장의 추가입점여부</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC1</Col></Row><Row><Col id=\"CODE\">ETC2</Col><Col id=\"VALUE\">부속계약서 추가내용 매장도면 첨부여부</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC2</Col></Row><Row><Col id=\"CODE\">ETC3</Col><Col id=\"VALUE\">부속계약서 추가내용 대표자 변경여부</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC3</Col></Row><Row><Col id=\"CODE\">ETC4</Col><Col id=\"VALUE\">부속계약서 추가내용 계약기간 연장여부</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC4</Col></Row><Row><Col id=\"CODE\">ETC5</Col><Col id=\"VALUE\">부속계약서 추가내용 추가임시임대료(율)</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC5</Col></Row><Row><Col id=\"CODE\">ETC6</Col><Col id=\"VALUE\">부속계약서 추가내용 임시임대료(율) 적용기간</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC6</Col></Row><Row><Col id=\"CODE\">ETC7</Col><Col id=\"VALUE\">부속계약서 추가내용 기타합의사안</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC7</Col></Row><Row><Col id=\"CODE\">ETC8</Col><Col id=\"VALUE\">약정기간 시작일</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC8</Col></Row><Row><Col id=\"CODE\">ETC9</Col><Col id=\"VALUE\">약정기간 종료일</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC9</Col></Row><Row><Col id=\"CODE\">ETC10</Col><Col id=\"VALUE\">임시임대료(율) 적용기간 시작일</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC10</Col></Row><Row><Col id=\"CODE\">ETC11</Col><Col id=\"VALUE\">임시임대료(율) 적용기간 종료일</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC11</Col></Row><Row><Col id=\"CODE\">ETC12</Col><Col id=\"VALUE\">목적물의 주소</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC12</Col></Row><Row><Col id=\"CODE\">ETC13</Col><Col id=\"VALUE\">매장면적(전용)</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC13</Col></Row><Row><Col id=\"CODE\">ETC14</Col><Col id=\"VALUE\">매장면적(공용)</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC14</Col></Row><Row><Col id=\"CODE\">ETC15</Col><Col id=\"VALUE\">매장면적(합계)</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC15</Col></Row><Row><Col id=\"CODE\">ETC16</Col><Col id=\"VALUE\">계약담당자 혹은 계약상대자의 변경</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC16</Col></Row><Row><Col id=\"CODE\">ETC17</Col><Col id=\"VALUE\">임대료(율) 값</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC17</Col></Row><Row><Col id=\"CODE\">ETC18</Col><Col id=\"VALUE\">임대료(율) 단위(\\, %)</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC18</Col></Row><Row><Col id=\"CODE\">ETC52</Col><Col id=\"VALUE\">기타특약사항</Col><Col id=\"MN_CTRW_KD\">95</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">95ETC52</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrw96", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"string\" size=\"256\"/><Column id=\"VALUE\" type=\"string\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KDNM\" type=\"STRING\" size=\"256\"/><Column id=\"UID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ETC32</Col><Col id=\"VALUE\">계약사업장명</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC32</Col></Row><Row><Col id=\"CODE\">ETC1</Col><Col id=\"VALUE\">부속계약서 추가내용 매장의 추가입점여부</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC1</Col></Row><Row><Col id=\"CODE\">ETC2</Col><Col id=\"VALUE\">부속계약서 추가내용 매장도면 첨부여부</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC2</Col></Row><Row><Col id=\"CODE\">ETC3</Col><Col id=\"VALUE\">부속계약서 추가내용 대표자 변경여부</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC3</Col></Row><Row><Col id=\"CODE\">ETC4</Col><Col id=\"VALUE\">부속계약서 추가내용 계약기간 연장여부</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC4</Col></Row><Row><Col id=\"CODE\">ETC5</Col><Col id=\"VALUE\">부속계약서 추가내용 추가임시임대료(율)</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC5</Col></Row><Row><Col id=\"CODE\">ETC6</Col><Col id=\"VALUE\">부속계약서 추가내용 임시임대료(율) 적용기간</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC6</Col></Row><Row><Col id=\"CODE\">ETC7</Col><Col id=\"VALUE\">부속계약서 추가내용 기타합의사안</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC7</Col></Row><Row><Col id=\"CODE\">ETC8</Col><Col id=\"VALUE\">약정기간 시작일</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC8</Col></Row><Row><Col id=\"CODE\">ETC9</Col><Col id=\"VALUE\">약정기간 종료일</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC9</Col></Row><Row><Col id=\"CODE\">ETC10</Col><Col id=\"VALUE\">임시수수료 적용기간 시작일</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC10</Col></Row><Row><Col id=\"CODE\">ETC11</Col><Col id=\"VALUE\">임시수수료 적용기간 종료일</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC11</Col></Row><Row><Col id=\"CODE\">ETC12</Col><Col id=\"VALUE\">목적물의 주소</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC12</Col></Row><Row><Col id=\"CODE\">ETC13</Col><Col id=\"VALUE\">매장면적(전용)</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC13</Col></Row><Row><Col id=\"CODE\">ETC14</Col><Col id=\"VALUE\">매장면적(공용)</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC14</Col></Row><Row><Col id=\"CODE\">ETC15</Col><Col id=\"VALUE\">매장면적(합계)</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC15</Col></Row><Row><Col id=\"CODE\">ETC16</Col><Col id=\"VALUE\">계약담당자 혹은 계약상대자의 변경</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC16</Col></Row><Row><Col id=\"CODE\">ETC21</Col><Col id=\"VALUE\">판매수수료율(마진율)</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC21</Col></Row><Row><Col id=\"CODE\">ETC22</Col><Col id=\"VALUE\">판매수수료율(부가가치세율)</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC22</Col></Row><Row><Col id=\"CODE\">ETC23</Col><Col id=\"VALUE\">판매수수료율(합계)</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC23</Col></Row><Row><Col id=\"CODE\">ETC52</Col><Col id=\"VALUE\">기타특약사항</Col><Col id=\"MN_CTRW_KD\">96</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">96ETC52</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrw45", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"string\" size=\"256\"/><Column id=\"VALUE\" type=\"string\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KDNM\" type=\"STRING\" size=\"256\"/><Column id=\"UID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ETC9</Col><Col id=\"VALUE\">계약사업장명</Col><Col id=\"MN_CTRW_KD\">45</Col><Col id=\"MN_CTRW_KDNM\">단기 특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">45ETC9</Col></Row><Row><Col id=\"CODE\">ETC10</Col><Col id=\"VALUE\">현금지급조건</Col><Col id=\"MN_CTRW_KD\">45</Col><Col id=\"MN_CTRW_KDNM\">단기 특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">45ETC10</Col></Row><Row><Col id=\"CODE\">ETC11</Col><Col id=\"VALUE\">상품판매대금 공제가능 판매수익</Col><Col id=\"MN_CTRW_KD\">45</Col><Col id=\"MN_CTRW_KDNM\">단기 특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">45ETC11</Col></Row><Row><Col id=\"CODE\">ETC12</Col><Col id=\"VALUE\">판매수수료율 마진율</Col><Col id=\"MN_CTRW_KD\">45</Col><Col id=\"MN_CTRW_KDNM\">단기 특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">45ETC12</Col></Row><Row><Col id=\"CODE\">ETC13</Col><Col id=\"VALUE\">판매수수료율 부가가치세율</Col><Col id=\"MN_CTRW_KD\">45</Col><Col id=\"MN_CTRW_KDNM\">단기 특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">45ETC13</Col></Row><Row><Col id=\"CODE\">ETC14</Col><Col id=\"VALUE\">하자보증보험증권의 금액 또는 보증금</Col><Col id=\"MN_CTRW_KD\">45</Col><Col id=\"MN_CTRW_KDNM\">단기 특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">45ETC14</Col></Row><Row><Col id=\"CODE\">ETC17</Col><Col id=\"VALUE\">계약기간 시작일</Col><Col id=\"MN_CTRW_KD\">45</Col><Col id=\"MN_CTRW_KDNM\">단기 특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">45ETC17</Col></Row><Row><Col id=\"CODE\">ETC18</Col><Col id=\"VALUE\">계약기간 종료일</Col><Col id=\"MN_CTRW_KD\">45</Col><Col id=\"MN_CTRW_KDNM\">단기 특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">45ETC18</Col></Row><Row><Col id=\"CODE\">ETC21</Col><Col id=\"VALUE\">매장의 위치 점포명</Col><Col id=\"MN_CTRW_KD\">45</Col><Col id=\"MN_CTRW_KDNM\">단기 특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">45ETC21</Col></Row><Row><Col id=\"CODE\">ETC22</Col><Col id=\"VALUE\">매장의 위치 운영층</Col><Col id=\"MN_CTRW_KD\">45</Col><Col id=\"MN_CTRW_KDNM\">단기 특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">45ETC22</Col></Row><Row><Col id=\"CODE\">ETC23</Col><Col id=\"VALUE\">매장의 위치 영업시간</Col><Col id=\"MN_CTRW_KD\">45</Col><Col id=\"MN_CTRW_KDNM\">단기 특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">45ETC23</Col></Row><Row><Col id=\"CODE\">ETC24</Col><Col id=\"VALUE\">매장의 위치 매장위치</Col><Col id=\"MN_CTRW_KD\">45</Col><Col id=\"MN_CTRW_KDNM\">단기 특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">45ETC24</Col></Row><Row><Col id=\"CODE\">ETC25</Col><Col id=\"VALUE\">매장의 위치 매장면적</Col><Col id=\"MN_CTRW_KD\">45</Col><Col id=\"MN_CTRW_KDNM\">단기 특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">45ETC25</Col></Row><Row><Col id=\"CODE\">ETC26</Col><Col id=\"VALUE\">매장의 위치 판촉사원 수</Col><Col id=\"MN_CTRW_KD\">45</Col><Col id=\"MN_CTRW_KDNM\">단기 특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">45ETC26</Col></Row><Row><Col id=\"CODE\">ETC51</Col><Col id=\"VALUE\">매장의 위치 기타특약사항</Col><Col id=\"MN_CTRW_KD\">45</Col><Col id=\"MN_CTRW_KDNM\">단기 특약매입 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">45ETC51</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrw98", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"string\" size=\"256\"/><Column id=\"VALUE\" type=\"string\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KDNM\" type=\"STRING\" size=\"256\"/><Column id=\"UID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ETC32</Col><Col id=\"VALUE\">계약사업장명</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC32</Col></Row><Row><Col id=\"CODE\">ETC1</Col><Col id=\"VALUE\">부속계약서 추가내용 매장의 추가입점여부</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC1</Col></Row><Row><Col id=\"CODE\">ETC2</Col><Col id=\"VALUE\">부속계약서 추가내용 매장도면 첨부여부</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC2</Col></Row><Row><Col id=\"CODE\">ETC3</Col><Col id=\"VALUE\">부속계약서 추가내용 대표자 변경여부</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC3</Col></Row><Row><Col id=\"CODE\">ETC4</Col><Col id=\"VALUE\">부속계약서 추가내용 계약기간 연장여부</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC4</Col></Row><Row><Col id=\"CODE\">ETC5</Col><Col id=\"VALUE\">부속계약서 추가내용 추가임시임대료(율)</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC5</Col></Row><Row><Col id=\"CODE\">ETC6</Col><Col id=\"VALUE\">부속계약서 추가내용 임시임대료(율) 적용기간</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC6</Col></Row><Row><Col id=\"CODE\">ETC7</Col><Col id=\"VALUE\">부속계약서 추가내용 기타합의사안</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC7</Col></Row><Row><Col id=\"CODE\">ETC8</Col><Col id=\"VALUE\">약정기간 시작일</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC8</Col></Row><Row><Col id=\"CODE\">ETC9</Col><Col id=\"VALUE\">약정기간 종료일</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC9</Col></Row><Row><Col id=\"CODE\">ETC10</Col><Col id=\"VALUE\">임시수수료 적용기간 시작일</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC10</Col></Row><Row><Col id=\"CODE\">ETC11</Col><Col id=\"VALUE\">임시수수료 적용기간 종료일</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC11</Col></Row><Row><Col id=\"CODE\">ETC12</Col><Col id=\"VALUE\">목적물의 주소</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC12</Col></Row><Row><Col id=\"CODE\">ETC13</Col><Col id=\"VALUE\">매장면적(전용)</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC13</Col></Row><Row><Col id=\"CODE\">ETC14</Col><Col id=\"VALUE\">매장면적(공용)</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC14</Col></Row><Row><Col id=\"CODE\">ETC15</Col><Col id=\"VALUE\">매장면적(합계)</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC15</Col></Row><Row><Col id=\"CODE\">ETC16</Col><Col id=\"VALUE\">계약담당자 혹은 계약상대자의 변경</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC16</Col></Row><Row><Col id=\"CODE\">ETC21</Col><Col id=\"VALUE\">판매수수료율(마진율)</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC21</Col></Row><Row><Col id=\"CODE\">ETC22</Col><Col id=\"VALUE\">판매수수료율(부가가치세율)</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC22</Col></Row><Row><Col id=\"CODE\">ETC23</Col><Col id=\"VALUE\">판매수수료율(합계)</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC23</Col></Row><Row><Col id=\"CODE\">ETC52</Col><Col id=\"VALUE\">기타특약사항</Col><Col id=\"MN_CTRW_KD\">98</Col><Col id=\"MN_CTRW_KDNM\"> 부속계약서(테넌트_단기 특약매입)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">98ETC52</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrw44", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"string\" size=\"256\"/><Column id=\"VALUE\" type=\"string\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KDNM\" type=\"STRING\" size=\"256\"/><Column id=\"UID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ETC9</Col><Col id=\"VALUE\">계약사업장명</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC9</Col></Row><Row><Col id=\"CODE\">ETC10</Col><Col id=\"VALUE\">임대차목적물의 표시 우편번호 앞자리</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC10</Col></Row><Row><Col id=\"CODE\">ETC11</Col><Col id=\"VALUE\">임대차목적물의 표시 우편번호 뒷자리</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC11</Col></Row><Row><Col id=\"CODE\">ETC12</Col><Col id=\"VALUE\">임대차목적물의 표시 주소</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC12</Col></Row><Row><Col id=\"CODE\">ETC13</Col><Col id=\"VALUE\">임대차목적물의 표시 상세주소</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC13</Col></Row><Row><Col id=\"CODE\">ETC14</Col><Col id=\"VALUE\">점유면적</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC14</Col></Row><Row><Col id=\"CODE\">ETC15</Col><Col id=\"VALUE\">공유면적</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC15</Col></Row><Row><Col id=\"CODE\">ETC16</Col><Col id=\"VALUE\">면적(계)</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC16</Col></Row><Row><Col id=\"CODE\">ETC17</Col><Col id=\"VALUE\">임대차기간 시작일</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC17</Col></Row><Row><Col id=\"CODE\">ETC18</Col><Col id=\"VALUE\">임대차기간 종료일</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC18</Col></Row><Row><Col id=\"CODE\">ETC21</Col><Col id=\"VALUE\">월임대료 %</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC21</Col></Row><Row><Col id=\"CODE\">ETC22</Col><Col id=\"VALUE\">업종</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC22</Col></Row><Row><Col id=\"CODE\">ETC23</Col><Col id=\"VALUE\">매장명</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC23</Col></Row><Row><Col id=\"CODE\">ETC32</Col><Col id=\"VALUE\">월 임대료 납부기일</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC32</Col></Row><Row><Col id=\"CODE\">ETC33</Col><Col id=\"VALUE\">임대료 연체료시 연체료 비율</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC33</Col></Row><Row><Col id=\"CODE\">ETC34</Col><Col id=\"VALUE\">상품판매대금 지급일</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC34</Col></Row><Row><Col id=\"CODE\">ETC42</Col><Col id=\"VALUE\">상품판매조건 판매상품</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC42</Col></Row><Row><Col id=\"ISCHECKED\">0</Col><Col id=\"CODE\">ETC41</Col><Col id=\"VALUE\">상품판매조건 브랜드</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"UID\">44ETC41</Col></Row><Row><Col id=\"CODE\">ETC46</Col><Col id=\"VALUE\">매장의 위치 점포명</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC46</Col></Row><Row><Col id=\"CODE\">ETC47</Col><Col id=\"VALUE\">매장의 위치 운영층</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC47</Col></Row><Row><Col id=\"CODE\">ETC48</Col><Col id=\"VALUE\">매장의 위치 매장위치</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC48</Col></Row><Row><Col id=\"CODE\">ETC52</Col><Col id=\"VALUE\">매장의 위치 기타특약사항</Col><Col id=\"MN_CTRW_KD\">44</Col><Col id=\"MN_CTRW_KDNM\">단기 임대차 거래계약서(테넌트)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">44ETC52</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrw97", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"string\" size=\"256\"/><Column id=\"VALUE\" type=\"string\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KDNM\" type=\"STRING\" size=\"256\"/><Column id=\"UID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ETC32</Col><Col id=\"VALUE\">계약사업장명</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC32</Col></Row><Row><Col id=\"CODE\">ETC1</Col><Col id=\"VALUE\">부속계약서 추가내용 매장의 추가입점여부</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC1</Col></Row><Row><Col id=\"CODE\">ETC2</Col><Col id=\"VALUE\">부속계약서 추가내용 매장도면 첨부여부</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC2</Col></Row><Row><Col id=\"CODE\">ETC3</Col><Col id=\"VALUE\">부속계약서 추가내용 대표자 변경여부</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC3</Col></Row><Row><Col id=\"CODE\">ETC4</Col><Col id=\"VALUE\">부속계약서 추가내용 계약기간 연장여부</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC4</Col></Row><Row><Col id=\"CODE\">ETC5</Col><Col id=\"VALUE\">부속계약서 추가내용 추가임시임대료(율)</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC5</Col></Row><Row><Col id=\"CODE\">ETC6</Col><Col id=\"VALUE\">부속계약서 추가내용 임시임대료(율) 적용기간</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC6</Col></Row><Row><Col id=\"CODE\">ETC7</Col><Col id=\"VALUE\">부속계약서 추가내용 기타합의사안</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC7</Col></Row><Row><Col id=\"CODE\">ETC8</Col><Col id=\"VALUE\">약정기간 시작일</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC8</Col></Row><Row><Col id=\"CODE\">ETC9</Col><Col id=\"VALUE\">약정기간 종료일</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC9</Col></Row><Row><Col id=\"CODE\">ETC10</Col><Col id=\"VALUE\">임시임대료(율) 적용기간 시작일</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC10</Col></Row><Row><Col id=\"CODE\">ETC11</Col><Col id=\"VALUE\">임시임대료(율) 적용기간 종료일</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC11</Col></Row><Row><Col id=\"CODE\">ETC12</Col><Col id=\"VALUE\">목적물의 주소</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC12</Col></Row><Row><Col id=\"CODE\">ETC13</Col><Col id=\"VALUE\">매장면적(전용)</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC13</Col></Row><Row><Col id=\"CODE\">ETC14</Col><Col id=\"VALUE\">매장면적(공용)</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC14</Col></Row><Row><Col id=\"CODE\">ETC15</Col><Col id=\"VALUE\">매장면적(합계)</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC15</Col></Row><Row><Col id=\"CODE\">ETC16</Col><Col id=\"VALUE\">계약담당자 혹은 계약상대자의 변경</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC16</Col></Row><Row><Col id=\"CODE\">ETC17</Col><Col id=\"VALUE\">임대료(율) 값</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC17</Col></Row><Row><Col id=\"CODE\">ETC18</Col><Col id=\"VALUE\">임대료(율) 단위(\\, %)</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC18</Col></Row><Row><Col id=\"CODE\">ETC52</Col><Col id=\"VALUE\">기타특약사항</Col><Col id=\"MN_CTRW_KD\">97</Col><Col id=\"MN_CTRW_KDNM\">부속계약서(테넌트_단기 임대차)</Col><Col id=\"ISCHECKED\">0</Col><Col id=\"UID\">97ETC52</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static08", "absolute", "16", "67", "300", "29", null, null, this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "42", "153", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("계약서 및 계약서 항목 선택");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_text("전자계약 상세조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("brn_cls", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "42", "65", "21", "17", null, this);
            obj.set_taborder("11");
            obj.set_text("선택완료");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_form", "absolute", "350", "102", null, null, "17", "50", this);
            obj.set_taborder("31");
            obj.set_binddataset("ds_search");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"113\"/><Column size=\"254\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"계약서 종류\"/><Cell col=\"2\" text=\"계약서 선택 항목\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:MN_CTRW_KDNM\"/><Cell col=\"2\" text=\"bind:VALUE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("text_title00", "absolute", "350", "42", "153", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("상세조회 항목");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_mnCtrw", "absolute", "20", "71", "291", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_innerdataset("@ds_mnCtrw");
            obj.set_codecolumn("CD_D");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Button("btn_remove", "absolute", null, "75", "50", "21", "17", null, this);
            obj.set_taborder("42");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_item", "absolute", "16", "102", "300", null, null, "50", this);
            obj.set_taborder("43");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"254\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"계약서 항목\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:VALUE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add", "absolute", "34.22%", "255", "22", "22", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("btn_WF_ShuttleR");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_remove_all", "absolute", null, "75", "63", "21", "73", null, this);
            obj.set_taborder("47");
            obj.set_text("전체삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "16", null, "859", "47", null, "0", this);
            obj.set_taborder("48");
            obj.set_text("- 더블클릭 또는 체크박스 선택 후 [>] 버튼을 눌러 추가할 수 있습니다.");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 941, 460, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("전자계약조회 상세조회양식");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2110_P02.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2110_P02.xfdl", function() {
        /*
        - 계약서 컬럼은 데이터셋으로 미리 생성했기 때문에, 추후 대상 계약서 추가 시 대응하는 데이터셋도 함께 추가해야 함.
        - ds_mnCtrw## (##은 전자계약코드)
        - this.setMnCtrwItem()에 조건 추가
        */
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        this.BUYER_DSC;

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e) //공통
        {
        	this.gfn_setInitForm(obj, e);
        }

        this.fn_afterFormOnload = function() //페이지 로딩후 실행부분
        {
        	this.BUYER_DSC = this.parent.BUYER_DSC;
        	this.getDS(this.BUYER_DSC);
        	
        	if (!this.gfn_isNull(this.parent.XML)) {
        		this.ds_search.loadXML(this.parent.XML);
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.cbo_form_onitemchanged = function(obj,e)
        {
        	if (obj.id == "cbo_mnCtrw") {
        		this.setMnCtrwItem(obj.value);
        	}
        }

        // 팝업 닫기
        this.fn_popupClose = function()
        {
        	this.close(false);
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.setMnCtrwItem = function(mnCtrwKd)
        {	
        	if (mnCtrwKd == "0000") {
        		this.grd_item.set_binddataset("");
        		this.btn_add.set_enable(false);
        		return;
        	}
        	
        	var ds;
        	if (mnCtrwKd == "41") {
        		// 임대차(테넌트)
        		ds = this.ds_mnCtrw41;
        	} else if (mnCtrwKd == "43") {
        		// 특약매입(테넌트)
        		ds = this.ds_mnCtrw43;
        	} else if (mnCtrwKd == "44") {
        		// 단기 임대차(테넌트)
        		ds = this.ds_mnCtrw44;
        	} else if (mnCtrwKd == "45") {
        		// 단기 특약매입(테넌트)
        		ds = this.ds_mnCtrw45;
        	} else if (mnCtrwKd == "95") {
        		// 부속계약서(임대차_테넌트)
        		ds = this.ds_mnCtrw95;
        	} else if (mnCtrwKd == "96") {
        		// 부속계약서(특약매입_테넌트)
        		ds = this.ds_mnCtrw96;
        	} else if (mnCtrwKd == "97") {
        		// 부속계약서(단기 임대차_테넌트)
        		ds = this.ds_mnCtrw97;
        	} else if (mnCtrwKd == "98") {
        		// 부속계약서(단기 특약매입_테넌트)
        		ds = this.ds_mnCtrw98;
        	}
        	
        	for (var i=0; i<ds.rowcount; i++) {
        		ds.setColumn(i, "ISCHECKED", "0");
        	}
        	this.grd_item.setBindDataset(ds);
        	this.grd_item.setCellProperty("Head", 0, "text", "0");
        	this.btn_add.set_enable(true);
        }

        this.getDS = function(buyerDsc)
        {
        	var sSvcID        = "getDS";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltctrwDSList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_mnCtrw=ds_mnCtrwKdMC";
        	var sArgument     = "BUYER_DSC=" + buyerDsc;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID =="getDS") {
        			if (this.ds_mnCtrw.rowcount != 0) {
        				this.ds_mnCtrw.insertRow(0);
        				this.ds_mnCtrw.setColumn(0, "CD_D", "0000");
        				this.ds_mnCtrw.setColumn(0, "SIMP_CNM", "=== 계약서 선택 ===");
        				this.cbo_mnCtrw.set_index(0);
        			}
        		}
        	}
        }

        this.btn_add_onclick = function(obj,e)
        {
        	this.fn_addItem(false);
        }

        this.btn_remove_onclick = function(obj,e)
        {
        	if (obj.id == "btn_remove_all") {
        		this.ds_search.clearData();
        	} else {
        		var idx = this.ds_search.findRow("ISCHECKED", "1");
        		while (idx != -1) {
        			this.ds_search.deleteRow(idx);
        			idx = this.ds_search.findRow("ISCHECKED", "1");
        		}
        	}
        }

        this.btn_save_onclick = function(obj,e)
        {
        	this.close(this.ds_search.saveXML());
        }

        this.Grid00_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

        this.Grid00_oncellclick = function(obj,e)
        {
        	if (e.cell == 0 || obj.id == "grd_form") {
        		var chk = obj.getBindDataset().getColumn(e.row, "ISCHECKED");
        		if (chk != "1") {
        			obj.getBindDataset().setColumn(e.row, "ISCHECKED", "1");
        		} else {
        			obj.getBindDataset().setColumn(e.row, "ISCHECKED", "0");
        		}
        	}
        }

        this.grd_item_oncelldblclick = function(obj,e)
        {
        	this.fn_addItem(true);
        }

        this.fn_addItem = function(isSingle)
        {
        	var ds = this.grd_item.getBindDataset();
        	var mnCd = this.cbo_mnCtrw.value;
        	var mnNm = this.cbo_mnCtrw.text;
        	
        	this.ds_search.set_enableevent(false);
        	
        	if (isSingle) {
        		if (ds.rowposition != -1) {
        			var uid = ds.getColumn(ds.rowposition, "UID");
        			var value = ds.getColumn(ds.rowposition, "VALUE");
        			
        			if (this.ds_search.findRow("UID", uid) != -1) {
        				this.alert("이미 추가한 항목입니다.");
        			} else {
        				this.fn_addItemRow2(ds, ds.rowposition);
        			}
        			
        			//this.fn_addItemRow(code, value, mnCd, mnNm);
        		}
        	} else {
        		var dup = 0;
        		if (ds.findRow("ISCHECKED", "1") != -1) {
        			for (var i=0; i<ds.rowcount; i++) {
        				if (ds.getColumn(i, "ISCHECKED") == "1") {
        					this.fn_addItemRow2(ds, i);
        				}
        			}
        			if (dup > 0) {
        				this.alert("중복된 항목을 제외하고 추가하였습니다.");
        			}
        		} else {
        			this.alert("선택된 항목이 없습니다.");
        		}
        	}
        	this.ds_search.set_enableevent(true);
        }

        this.fn_addItemRow2 = function(ds,idx)
        {
        	var row = this.ds_search.addRow();
        	this.ds_search.copyRow(row, ds, idx);
        	this.ds_search.setColumn(row, "ISCHECKED", "0");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.brn_cls.addEventHandler("onclick", this.fn_popupClose, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.grd_form.addEventHandler("onheadclick", this.Grid00_onheadclick, this);
            this.grd_form.addEventHandler("oncellclick", this.Grid00_oncellclick, this);
            this.cbo_mnCtrw.addEventHandler("onitemchanged", this.cbo_form_onitemchanged, this);
            this.btn_remove.addEventHandler("onclick", this.btn_remove_onclick, this);
            this.grd_item.addEventHandler("oncellclick", this.Grid00_oncellclick, this);
            this.grd_item.addEventHandler("onheadclick", this.Grid00_onheadclick, this);
            this.grd_item.addEventHandler("oncelldblclick", this.grd_item_oncelldblclick, this);
            this.btn_add.addEventHandler("onclick", this.btn_add_onclick, this);
            this.btn_remove_all.addEventHandler("onclick", this.btn_remove_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2110_P02.xfdl");

       
    };
}
)();
