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
                this.set_name("GridTest");
                this.set_titletext("그리드간 C&P 테스트");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_buseoList01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"UP_BUSEO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSEO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSEO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUSEO_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SAYONG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"STRING\" size=\"256\"/><Column id=\"SEOLCHI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PYEJI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"UP_BUSEO_CD\">SYS</Col><Col id=\"BUSEO_CD\">00000000</Col><Col id=\"BUSEO_NM\">아카넷대학교</Col><Col id=\"BUSEO_LVL\">1</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">1</Col><Col id=\"SORT3\">01</Col></Row><Row><Col id=\"UP_BUSEO_CD\">00000000</Col><Col id=\"BUSEO_CD\">10000000</Col><Col id=\"BUSEO_NM\">총장</Col><Col id=\"BUSEO_LVL\">2</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">2</Col><Col id=\"SORT3\">02</Col></Row><Row><Col id=\"UP_BUSEO_CD\">00000000</Col><Col id=\"BUSEO_CD\">20000000</Col><Col id=\"BUSEO_NM\">대학본부</Col><Col id=\"BUSEO_LVL\">2</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">2</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">3</Col><Col id=\"SORT3\">03</Col></Row><Row><Col id=\"UP_BUSEO_CD\">00000000</Col><Col id=\"BUSEO_CD\">30000000</Col><Col id=\"BUSEO_NM\">대학</Col><Col id=\"BUSEO_LVL\">2</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">3</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">4</Col><Col id=\"SORT3\">04</Col></Row><Row><Col id=\"UP_BUSEO_CD\">00000000</Col><Col id=\"BUSEO_CD\">40000000</Col><Col id=\"BUSEO_NM\">대학원</Col><Col id=\"BUSEO_LVL\">2</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">4</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">5</Col><Col id=\"SORT3\">05</Col></Row><Row><Col id=\"UP_BUSEO_CD\">00000000</Col><Col id=\"BUSEO_CD\">50000000</Col><Col id=\"BUSEO_NM\">부속기관</Col><Col id=\"BUSEO_LVL\">2</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">5</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">6</Col><Col id=\"SORT3\">06</Col></Row><Row><Col id=\"UP_BUSEO_CD\">00000000</Col><Col id=\"BUSEO_CD\">60000000</Col><Col id=\"BUSEO_NM\">부설교육기관</Col><Col id=\"BUSEO_LVL\">2</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">6</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">7</Col><Col id=\"SORT3\">07</Col></Row><Row><Col id=\"UP_BUSEO_CD\">00000000</Col><Col id=\"BUSEO_CD\">70000000</Col><Col id=\"BUSEO_NM\">부설연구기관</Col><Col id=\"BUSEO_LVL\">2</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">7</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">8</Col><Col id=\"SORT3\">08</Col></Row><Row><Col id=\"UP_BUSEO_CD\">00000000</Col><Col id=\"BUSEO_CD\">80000000</Col><Col id=\"BUSEO_NM\">특수법인</Col><Col id=\"BUSEO_LVL\">2</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">8</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">9</Col><Col id=\"SORT3\">09</Col></Row><Row><Col id=\"UP_BUSEO_CD\">00000000</Col><Col id=\"BUSEO_CD\">90000000</Col><Col id=\"BUSEO_NM\">기타</Col><Col id=\"BUSEO_LVL\">2</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">9</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">10</Col><Col id=\"SORT3\">10</Col></Row><Row><Col id=\"UP_BUSEO_CD\">80000000</Col><Col id=\"BUSEO_CD\">80100000</Col><Col id=\"BUSEO_NM\">산학협력단</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">11</Col><Col id=\"SORT3\">11</Col></Row><Row><Col id=\"UP_BUSEO_CD\">80000000</Col><Col id=\"BUSEO_CD\">80200000</Col><Col id=\"BUSEO_NM\">학교기업</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">2</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">12</Col><Col id=\"SORT3\">12</Col></Row><Row><Col id=\"UP_BUSEO_CD\">80000000</Col><Col id=\"BUSEO_CD\">80300000</Col><Col id=\"BUSEO_NM\">종합환경분석센터</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">3</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">13</Col><Col id=\"SORT3\">13</Col></Row><Row><Col id=\"UP_BUSEO_CD\">70000000</Col><Col id=\"BUSEO_CD\">70100000</Col><Col id=\"BUSEO_NM\">산업기술연구소</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">14</Col><Col id=\"SORT3\">14</Col></Row><Row><Col id=\"UP_BUSEO_CD\">70000000</Col><Col id=\"BUSEO_CD\">70200000</Col><Col id=\"BUSEO_NM\">지역전략산업연구소</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">2</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">15</Col><Col id=\"SORT3\">15</Col></Row><Row><Col id=\"UP_BUSEO_CD\">70000000</Col><Col id=\"BUSEO_CD\">70300000</Col><Col id=\"BUSEO_NM\">칠문화연구소</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">3</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">16</Col><Col id=\"SORT3\">16</Col></Row><Row><Col id=\"UP_BUSEO_CD\">70000000</Col><Col id=\"BUSEO_CD\">70400000</Col><Col id=\"BUSEO_NM\">IT공학연구소</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">4</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">17</Col><Col id=\"SORT3\">17</Col></Row><Row><Col id=\"UP_BUSEO_CD\">70000000</Col><Col id=\"BUSEO_CD\">70500000</Col><Col id=\"BUSEO_NM\">공학연구소</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">5</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">18</Col><Col id=\"SORT3\">18</Col></Row><Row><Col id=\"UP_BUSEO_CD\">50000000</Col><Col id=\"BUSEO_CD\">50100000</Col><Col id=\"BUSEO_NM\">전산정보원</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">19</Col><Col id=\"SORT3\">19</Col></Row><Row><Col id=\"UP_BUSEO_CD\">50000000</Col><Col id=\"BUSEO_CD\">50200000</Col><Col id=\"BUSEO_NM\">생활관</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">2</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">20</Col><Col id=\"SORT3\">20</Col></Row><Row><Col id=\"UP_BUSEO_CD\">50000000</Col><Col id=\"BUSEO_CD\">50300000</Col><Col id=\"BUSEO_NM\">평생교육원</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">3</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">21</Col><Col id=\"SORT3\">21</Col></Row><Row><Col id=\"UP_BUSEO_CD\">50000000</Col><Col id=\"BUSEO_CD\">50400000</Col><Col id=\"BUSEO_NM\">원격평생교육원</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">4</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">22</Col><Col id=\"SORT3\">22</Col></Row><Row><Col id=\"UP_BUSEO_CD\">50000000</Col><Col id=\"BUSEO_CD\">50500000</Col><Col id=\"BUSEO_NM\">예비군연대</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">5</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">23</Col><Col id=\"SORT3\">23</Col></Row><Row><Col id=\"UP_BUSEO_CD\">50000000</Col><Col id=\"BUSEO_CD\">50600000</Col><Col id=\"BUSEO_NM\">박물관</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">6</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">24</Col><Col id=\"SORT3\">24</Col></Row><Row><Col id=\"UP_BUSEO_CD\">50000000</Col><Col id=\"BUSEO_CD\">50700000</Col><Col id=\"BUSEO_NM\">교수학습지원센터</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">7</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">25</Col><Col id=\"SORT3\">25</Col></Row><Row><Col id=\"UP_BUSEO_CD\">50000000</Col><Col id=\"BUSEO_CD\">50800000</Col><Col id=\"BUSEO_NM\">도서관</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">8</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">26</Col><Col id=\"SORT3\">26</Col></Row><Row><Col id=\"UP_BUSEO_CD\">50000000</Col><Col id=\"BUSEO_CD\">50900000</Col><Col id=\"BUSEO_NM\">방송국</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">9</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">27</Col><Col id=\"SORT3\">27</Col></Row><Row><Col id=\"UP_BUSEO_CD\">50000000</Col><Col id=\"BUSEO_CD\">51000000</Col><Col id=\"BUSEO_NM\">신문사</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">10</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">28</Col><Col id=\"SORT3\">28</Col></Row><Row><Col id=\"UP_BUSEO_CD\">50000000</Col><Col id=\"BUSEO_CD\">51100000</Col><Col id=\"BUSEO_NM\">학군단</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">11</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">29</Col><Col id=\"SORT3\">29</Col></Row><Row><Col id=\"UP_BUSEO_CD\">60000000</Col><Col id=\"BUSEO_CD\">60100000</Col><Col id=\"BUSEO_NM\">다문화교육센타</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">30</Col><Col id=\"SORT3\">30</Col></Row><Row><Col id=\"UP_BUSEO_CD\">60000000</Col><Col id=\"BUSEO_CD\">60200000</Col><Col id=\"BUSEO_NM\">외국어교육센타</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">2</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">31</Col><Col id=\"SORT3\">31</Col></Row><Row><Col id=\"UP_BUSEO_CD\">60000000</Col><Col id=\"BUSEO_CD\">60300000</Col><Col id=\"BUSEO_NM\">교양교육지원센타</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">3</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">32</Col><Col id=\"SORT3\">32</Col></Row><Row><Col id=\"UP_BUSEO_CD\">60000000</Col><Col id=\"BUSEO_CD\">60400000</Col><Col id=\"BUSEO_NM\">교수학습지원센터</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">4</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">33</Col><Col id=\"SORT3\">33</Col></Row><Row><Col id=\"UP_BUSEO_CD\">50100000</Col><Col id=\"BUSEO_CD\">50100100</Col><Col id=\"BUSEO_NM\">정보기술팀</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">34</Col><Col id=\"SORT3\">34</Col></Row><Row><Col id=\"UP_BUSEO_CD\">50100000</Col><Col id=\"BUSEO_CD\">50100200</Col><Col id=\"BUSEO_NM\">정보관리팀</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">2</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">35</Col><Col id=\"SORT3\">35</Col></Row><Row><Col id=\"UP_BUSEO_CD\">50300000</Col><Col id=\"BUSEO_CD\">50300100</Col><Col id=\"BUSEO_NM\">교무팀</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">36</Col><Col id=\"SORT3\">36</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30000000</Col><Col id=\"BUSEO_CD\">30100000</Col><Col id=\"BUSEO_NM\">학부과</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">37</Col><Col id=\"SORT3\">37</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30100100</Col><Col id=\"BUSEO_NM\">디지털기계학부</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">38</Col><Col id=\"SORT3\">38</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30100200</Col><Col id=\"BUSEO_NM\">전기전자학부</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">2</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">39</Col><Col id=\"SORT3\">39</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30100300</Col><Col id=\"BUSEO_NM\">환경화학공업과</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">3</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">40</Col><Col id=\"SORT3\">40</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30100400</Col><Col id=\"BUSEO_NM\">산업경영과</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">4</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">41</Col><Col id=\"SORT3\">41</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30100500</Col><Col id=\"BUSEO_NM\">공간디자인학부</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">5</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">42</Col><Col id=\"SORT3\">42</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30100600</Col><Col id=\"BUSEO_NM\">컴퓨터정보학부</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">6</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">43</Col><Col id=\"SORT3\">43</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30100700</Col><Col id=\"BUSEO_NM\">디지털콘텐츠디자인과</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">7</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">44</Col><Col id=\"SORT3\">44</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30100800</Col><Col id=\"BUSEO_NM\">간호과</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">8</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">45</Col><Col id=\"SORT3\">45</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30100900</Col><Col id=\"BUSEO_NM\">물리치료과</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">9</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">46</Col><Col id=\"SORT3\">46</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30101000</Col><Col id=\"BUSEO_NM\">치위생과</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">10</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">47</Col><Col id=\"SORT3\">47</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30101100</Col><Col id=\"BUSEO_NM\">호텔조리과</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">11</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">48</Col><Col id=\"SORT3\">48</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30101200</Col><Col id=\"BUSEO_NM\">유아교육과</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">12</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">49</Col><Col id=\"SORT3\">49</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30101300</Col><Col id=\"BUSEO_NM\">사회복지과</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">13</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">50</Col><Col id=\"SORT3\">50</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30101400</Col><Col id=\"BUSEO_NM\">세무회계과</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">14</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">51</Col><Col id=\"SORT3\">51</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30101500</Col><Col id=\"BUSEO_NM\">유통경영과</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">15</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">52</Col><Col id=\"SORT3\">52</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30101600</Col><Col id=\"BUSEO_NM\">관광통역과</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">16</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">53</Col><Col id=\"SORT3\">53</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30101700</Col><Col id=\"BUSEO_NM\">사회체육과</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">17</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">54</Col><Col id=\"SORT3\">54</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30101800</Col><Col id=\"BUSEO_NM\">기계시스템학과</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">18</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">55</Col><Col id=\"SORT3\">55</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100000</Col><Col id=\"BUSEO_CD\">30101900</Col><Col id=\"BUSEO_NM\">환경생활화학과</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">19</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">56</Col><Col id=\"SORT3\">56</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100100</Col><Col id=\"BUSEO_CD\">30100101</Col><Col id=\"BUSEO_NM\">기계설비전공</Col><Col id=\"BUSEO_LVL\">5</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">57</Col><Col id=\"SORT3\">57</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100100</Col><Col id=\"BUSEO_CD\">30100102</Col><Col id=\"BUSEO_NM\">기계시스템전공</Col><Col id=\"BUSEO_LVL\">5</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">2</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">58</Col><Col id=\"SORT3\">58</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100100</Col><Col id=\"BUSEO_CD\">30100103</Col><Col id=\"BUSEO_NM\">금형디자인전공</Col><Col id=\"BUSEO_LVL\">5</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">3</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">59</Col><Col id=\"SORT3\">59</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100100</Col><Col id=\"BUSEO_CD\">30100104</Col><Col id=\"BUSEO_NM\">조선해양전공</Col><Col id=\"BUSEO_LVL\">5</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">4</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">60</Col><Col id=\"SORT3\">60</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100200</Col><Col id=\"BUSEO_CD\">30100201</Col><Col id=\"BUSEO_NM\">전기전공</Col><Col id=\"BUSEO_LVL\">5</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">61</Col><Col id=\"SORT3\">61</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100200</Col><Col id=\"BUSEO_CD\">30100202</Col><Col id=\"BUSEO_NM\">전자및통신전공</Col><Col id=\"BUSEO_LVL\">5</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">2</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">62</Col><Col id=\"SORT3\">62</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100200</Col><Col id=\"BUSEO_CD\">30100203</Col><Col id=\"BUSEO_NM\">반도체응용전공</Col><Col id=\"BUSEO_LVL\">5</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">3</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">63</Col><Col id=\"SORT3\">63</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100500</Col><Col id=\"BUSEO_CD\">30100501</Col><Col id=\"BUSEO_NM\">실내건축전공</Col><Col id=\"BUSEO_LVL\">5</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">64</Col><Col id=\"SORT3\">64</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100500</Col><Col id=\"BUSEO_CD\">30100502</Col><Col id=\"BUSEO_NM\">건축전공</Col><Col id=\"BUSEO_LVL\">5</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">2</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">65</Col><Col id=\"SORT3\">65</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100500</Col><Col id=\"BUSEO_CD\">30100503</Col><Col id=\"BUSEO_NM\">공간환경전공</Col><Col id=\"BUSEO_LVL\">5</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">3</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">66</Col><Col id=\"SORT3\">66</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100500</Col><Col id=\"BUSEO_CD\">30100504</Col><Col id=\"BUSEO_NM\">토목환경전공</Col><Col id=\"BUSEO_LVL\">5</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">4</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">67</Col><Col id=\"SORT3\">67</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100600</Col><Col id=\"BUSEO_CD\">30100601</Col><Col id=\"BUSEO_NM\">모바일정보기술전공</Col><Col id=\"BUSEO_LVL\">5</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">68</Col><Col id=\"SORT3\">68</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100600</Col><Col id=\"BUSEO_CD\">30100602</Col><Col id=\"BUSEO_NM\">컴퓨터정보관리전공</Col><Col id=\"BUSEO_LVL\">5</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">2</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">69</Col><Col id=\"SORT3\">69</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100600</Col><Col id=\"BUSEO_CD\">30100603</Col><Col id=\"BUSEO_NM\">컴퓨터정보기술전공</Col><Col id=\"BUSEO_LVL\">5</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">3</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">70</Col><Col id=\"SORT3\">70</Col></Row><Row><Col id=\"UP_BUSEO_CD\">30100600</Col><Col id=\"BUSEO_CD\">30100604</Col><Col id=\"BUSEO_NM\">컴퓨터정보처리전공</Col><Col id=\"BUSEO_LVL\">5</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">4</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">71</Col><Col id=\"SORT3\">71</Col></Row><Row><Col id=\"UP_BUSEO_CD\">20000000</Col><Col id=\"BUSEO_CD\">20100000</Col><Col id=\"BUSEO_NM\">교무처</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">72</Col><Col id=\"SORT3\">72</Col></Row><Row><Col id=\"UP_BUSEO_CD\">20000000</Col><Col id=\"BUSEO_CD\">20200000</Col><Col id=\"BUSEO_NM\">기획처</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">2</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">73</Col><Col id=\"SORT3\">73</Col></Row><Row><Col id=\"UP_BUSEO_CD\">20000000</Col><Col id=\"BUSEO_CD\">20300000</Col><Col id=\"BUSEO_NM\">총무처</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">3</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">74</Col><Col id=\"SORT3\">74</Col></Row><Row><Col id=\"UP_BUSEO_CD\">20000000</Col><Col id=\"BUSEO_CD\">20400000</Col><Col id=\"BUSEO_NM\">학생처</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">4</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">75</Col><Col id=\"SORT3\">75</Col></Row><Row><Col id=\"UP_BUSEO_CD\">20000000</Col><Col id=\"BUSEO_CD\">20500000</Col><Col id=\"BUSEO_NM\">국제교류처</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">5</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">76</Col><Col id=\"SORT3\">76</Col></Row><Row><Col id=\"UP_BUSEO_CD\">20000000</Col><Col id=\"BUSEO_CD\">20600000</Col><Col id=\"BUSEO_NM\">입학홍보처</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">6</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">77</Col><Col id=\"SORT3\">77</Col></Row><Row><Col id=\"UP_BUSEO_CD\">20100000</Col><Col id=\"BUSEO_CD\">20100100</Col><Col id=\"BUSEO_NM\">교무팀</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">78</Col><Col id=\"SORT3\">78</Col></Row><Row><Col id=\"UP_BUSEO_CD\">20200000</Col><Col id=\"BUSEO_CD\">20200100</Col><Col id=\"BUSEO_NM\">기획팀</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">79</Col><Col id=\"SORT3\">79</Col></Row><Row><Col id=\"UP_BUSEO_CD\">20200000</Col><Col id=\"BUSEO_CD\">20200200</Col><Col id=\"BUSEO_NM\">시설관리팀</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">2</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">80</Col><Col id=\"SORT3\">80</Col></Row><Row><Col id=\"UP_BUSEO_CD\">20300000</Col><Col id=\"BUSEO_CD\">20300100</Col><Col id=\"BUSEO_NM\">회계팀</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">81</Col><Col id=\"SORT3\">81</Col></Row><Row><Col id=\"UP_BUSEO_CD\">20400000</Col><Col id=\"BUSEO_CD\">20400100</Col><Col id=\"BUSEO_NM\">복지팀</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">82</Col><Col id=\"SORT3\">82</Col></Row><Row><Col id=\"UP_BUSEO_CD\">20400000</Col><Col id=\"BUSEO_CD\">20400200</Col><Col id=\"BUSEO_NM\">교양지원팀</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">2</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">83</Col><Col id=\"SORT3\">83</Col></Row><Row><Col id=\"UP_BUSEO_CD\">20500000</Col><Col id=\"BUSEO_CD\">20500100</Col><Col id=\"BUSEO_NM\">국제교류팀</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">84</Col><Col id=\"SORT3\">84</Col></Row><Row><Col id=\"UP_BUSEO_CD\">20500000</Col><Col id=\"BUSEO_CD\">20500200</Col><Col id=\"BUSEO_NM\">대외협력팀</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">2</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">85</Col><Col id=\"SORT3\">85</Col></Row><Row><Col id=\"UP_BUSEO_CD\">20600000</Col><Col id=\"BUSEO_CD\">20600100</Col><Col id=\"BUSEO_NM\">입학관리팀</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">86</Col><Col id=\"SORT3\">86</Col></Row><Row><Col id=\"UP_BUSEO_CD\">20600000</Col><Col id=\"BUSEO_CD\">20600200</Col><Col id=\"BUSEO_NM\">홍보팀</Col><Col id=\"BUSEO_LVL\">4</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">2</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">87</Col><Col id=\"SORT3\">87</Col></Row><Row><Col id=\"UP_BUSEO_CD\">10000000</Col><Col id=\"BUSEO_CD\">10100000</Col><Col id=\"BUSEO_NM\">부총장</Col><Col id=\"BUSEO_LVL\">3</Col><Col id=\"JUYA_GBCD\">1</Col><Col id=\"SAYONG_YN\">1</Col><Col id=\"SORT\">1</Col><Col id=\"SEOLCHI_DT\">20121118</Col><Col id=\"SORT2\">88</Col><Col id=\"SORT3\">88</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("buseoGrid01", "absolute", "5", "130", null, "180", "313", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_buseoList01");
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"UP_BUSEO_CD\"/><Cell col=\"1\" text=\"BUSEO_CD\"/><Cell col=\"2\" text=\"BUSEO_NM\"/><Cell col=\"3\" text=\"BUSEO_LVL\"/><Cell col=\"4\" text=\"JUYA_GBCD\"/></Band><Band id=\"body\"><Cell text=\"bind:UP_BUSEO_CD\"/><Cell col=\"1\" text=\"bind:BUSEO_CD\"/><Cell col=\"2\" text=\"bind:BUSEO_NM\"/><Cell col=\"3\" text=\"bind:BUSEO_LVL\"/><Cell col=\"4\" text=\"bind:JUYA_GBCD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "5", "340", null, "215", "313", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:Column3\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.46%", "15", null, "36", "44.14%", null, this);
            obj.set_taborder("2");
            obj.set_text("Grid Copy & Paste (완료)");
            obj.style.set_font("dotum,20,bold");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("GridTest");
            		p.set_titletext("그리드간 C&P 테스트");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CommonGridCopyAndPaste.xfdl", function() {
        /* Grid 키다운 이벤트 */
        this.Grid_onkeydown = function(obj,e)
        {
        	//복사(Ctrl + C), 붙여넣기(Ctrl + V) 키입력처리 공통함수 호출
        	this.gfn_grdCopy_Paste(obj, e);
        }

        this.Grid00_onkeydown = function(obj,e)
        {
        	this.gfn_grdCopy_Paste(obj, e);
        }

        /**
        * Grid/Excel간 Copy & Paste
        * @param : obj	- Grid Object
        * @param e		- Event Info
        * @return : N/A
        * @example : gfn_grdCopy_Paste(obj, e)
        */
        this.gfn_grdCopy_Paste = function (obj,e)
        {
        	if(e.ctrlKey){
        		if(e.keycode == 67){
        			//데이터 복사 ctrl + c 키 동작
        			var strGrdDsNm = obj.binddataset;
        			var v_clip = "";
        			var strSeperate = "	";
        			
        			for (var i=obj.selectstartrow;i<=obj.selectendrow;i++) {
        				for (var j=obj.selectstartcol;j<=obj.selectendcol;j++) {
        					if (j < obj.selectendcol) {
        						v_clip += obj.getCellValue(i,j) + strSeperate;
        					} else {
        						v_clip += obj.getCellValue(i,j);
        					}
        				}
        				if (i < obj.selectendrow) {
        					v_clip += "\r\n";
        				}
        			}
        			v_clip += "\r\n";
        			system.clearClipboard();
        			system.setClipboard("CF_TEXT",v_clip);				
        		} else if(e.keycode == 86) {
        			//데이터 붙여넣기
        			//에디트 가능할 경우 return;
        			var vCurEditType = obj.getCurEditType();
        			if(vCurEditType != "none"){
        				var isT = this.Grid00.getEditCaret();
        				if(!this.utlf_IsNull(isT)){
        					return;
        				}
        			}
        	
        			var bAddrow = true;
        			if (!this.utlf_IsNull(this.gfn_grdCopy_Paste.arguments[2])) {
        				bAddrow = this.gfn_grdCopy_Paste.arguments[2];
        			}
        			
        			//Grid Binddataset
        			var strGrdDsNm = obj.binddataset;
        			//cell count
        			var nGrdCellCnt = obj.getCellCount("body");
        			//cell position
        			var nGrdCellPos = obj.getCellPos();		
        			//row position
        			var nRowPos = eval("this." + strGrdDsNm).rowposition;
        			//arrText2 index
        			var k = 0;
        			//Dataset rowcount
        			var nDsRowCnt = eval("this." + strGrdDsNm).getRowCount();		
        			var t_clip = system.getClipboard("CF_TEXT");
        			var strText = new String(t_clip);
        			var arrText = new Array();
        			var arrText2 = new Array();
        			arrText = strText.split("\r\n");
        			
        			if (nDsRowCnt < (arrText.length + nRowPos -1)) {
        				if (bAddrow) {
        					
        				} else {
        					return false;
        				}			
        			}			
        			//복사한 Row만큼
        			var oDs =  eval("this." + strGrdDsNm);
        			for (var i=0;i<arrText.length;i++) {
        				
        				if (this.utlf_IsNull(arrText[i])) {
        					return;
        				}
        				arrText2 = arrText[i].split("	");
        				
        				//기존 dataset갯수보다 많은 경우
        				if ( nDsRowCnt <= nRowPos) {
        					var nAddrow = oDs.addRow();
        				}
        				
        				var nLoopCnt = (nGrdCellPos + arrText2.length);
        				if (nLoopCnt > nGrdCellCnt) {
        					nLoopCnt = nGrdCellCnt;
        				}
        				
        				//Dataset setcolumn
        				k = 0;
        				for (var j=nGrdCellPos;j<nLoopCnt;j++) {
        					var colid = obj.getCellProperty("body", j, "text").substr(5);
        				
        					oDs.setColumn(nRowPos, colid, arrText2[k]);
        					
        					k++;
        				}				
        				nRowPos++;
        				eval("this." + strGrdDsNm).rowposition = nRowPos;
        			}
        		}
        	}

        }

        /**

        * Null에 해당하는 값 체크.
        * @param : sValue - Null 확인 밗
        * @return : true/false
        * @example : utlf_IsNull(sValue);
        */
        this.utlf_IsNull = function (sValue)
        {
        	if( new String(sValue).valueOf() == "undefined") 
        		return true;
        	if( sValue == null )
        		return true;
        	if( ("x"+sValue == "xNaN") && ( new String(sValue.length).valueOf() == "undefined" ) )
        		return true;
        	if( sValue.length == 0 )
        		return true;
        	return false;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Form_onload, this);
            this.buseoGrid01.addEventHandler("onkeydown", this.Grid_onkeydown, this);
            this.Grid00.addEventHandler("onkeydown", this.Grid00_onkeydown, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);

        };

        this.loadIncludeScript("CommonGridCopyAndPaste.xfdl");

       
    };
}
)();
