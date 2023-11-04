﻿(function()
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
                this.set_name("TEST_4000");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new TextArea("TextArea00", "absolute", "2.73%", "56", null, "193", "3.03%", null, this);
            obj.set_taborder("0");
            obj.set_wordwrap("char");
            obj.set_value(" 농협중앙회 마트상품부(이하 \"계약담당자\"라 함)와                                       (이하 \"계약상대자\"라 함)간에 다음과 같이 상품매입에 관한 기본적인 사항을 상호 합의함에 따라 아래와 같이 특약매입 거래계약(이하\"계약\"이라 함)을 체결한다.\r\n\r\n제 1 조 (목적) ① 이 계약서의 목적은 “계약담당자”와 “계약담당자”의 계통조직 전체(이하\"농협계통조직\"이라 함)와“계약상대자”가 상품의 특약매입거래(“계약담당자”가 매입한 상품 중 판매되지 아니한 상품을 반품할 수 있는 조건으로 “계약상대자”로부터 상품을 외상 매입하고 상품판매 후 일정률(마진율)이나 일정액의 판매수익을 공제한 상품판매대금을 “계약상대자”에게 지급하는 형태의 거래를 말한다)를 함에 있어 양 당사자 사이의 기본적인 권리와 의무를 정하기 위함에 있다.\r\n② 본 계약서에 나오는 용어정의는 다음과 같다.\r\n   1. 농협계통조직이라 함은 농협법에 의해 설립된 농협중앙회, 지역조합(지역농협,\r\n      지역축협), 품목조합(품목별조합,업종별조합) 및 농협중앙회 계열사 전체를 칭한다.\r\n   2. 중앙회 매장 공급용이라 함은 \"계약담당자\"가 계약한 상품을 \"계약담당자\"와 동일법인내 매장에 공급하는 것을 칭한다.\r\n   3. 계열사매장 및 회원조합매장 공급용이라 함은 농협계통조직에서 중앙회 매장을 제외한 법인에게 공급하는 특약매입 거래계약을 칭한다.        \r\n   4. \"계약담당자\"라 함은 회장 또는 회장으로부터 계약에 관한 권한을 위임 받은 농협의 직원을 말하고, \"계약상대자\"라 함은 농협과 특약매입 거래계약서를 체결한 자연인 또는 법인을 말한다. \r\n  \r\n제 2 조 (기본원칙) ① \"계약담당자\"와 \"계약상대자\"는 상호이익을 존중하고 이 계약상\r\n의무를 신의에 따라 성실히 이행함으로써 상호 공정한 거래관계와 동반성장을 추구한다.\r\n② \"계약담당자\"와 \"계약상대자\"는 이 계약의 이행에 있어서 「독점규제 및 공정거래에 관한 법률」 및 그 시행령, 「대규모유통업에서의 거래 공정화에 관한 법률」등 관련 법규의 제 규정을 준수한다.\r\n\r\n제 3 조 (공정거래 준수 및 동반성장 지원) \"계약담당자\"와 \"계약상대자\"는 공정하고 투명한 거래를 위하여 다음 각 호의 내용을 준수한다.\r\n   1. 상대방에게 금품, 향응, 편의 또는 접대를 요구하거나 제공하여서는 아니되며, \r\n      위법하거나 부당한 행위를 하지 않는다.\r\n   2. 공정한 거래질서에 반하는 행위를 요구하거나 지위를 남용하여 거래를 강요하지 않는다.\r\n   3. 유통분야 대·중소기업 동반성장을 위한 합의의 내용을 충실히 이행한다.\r\n   4. \"계약담당자\"는 불공정 신고센터를 설치·운영한다.(전화번호 : 02-2022-4411) \r\n\r\n제 4 조 (서면계약체결의무) \"계약담당자\"와 \"계약상대자\"는 사전에 충분한 협의를 통하여 서면계약서(「전자거래기본법」제2조제1호에 따른 전자문서를 포함한다. 이하 같다)로 계약을 체결하여야 하고, 계약서에는 거래당사자가 서명(「전자서명법」 제2조 제3호에 따른 공인전자서명을 포함한다) 또는 기명 날인하여야 한다.\r\n\r\n제 5 조 (계약범위) ① \"계약담당자\"와 \"계약상대자\"의 계약은 농협(협동조합) 설립목적에 따라 \"계약담당자\"가 \"농협계통조직을 대표하여\" 하는 행위이며, \"계약상대자\"는 본 계약으로 \"중앙회 매장\"과 \"계열사 및 회원조합 매장\"에  별도의 계약절차 없이 \"계약담당자\"와 계약한 상품을 공급할 수 있다. \r\n② 제1항에 따라 \"계약상대자\"가 공급해야 하는 매장은 \"계약담당자\"의 \"정보시스템\"에 등록된 농협계통조직 및 \"계약담당자\"의 영업정책으로 인해 \"계약담당자\"가 요구하는 장소로 한다.\r\n③ \"계약상대자\"가 \"계약담당자\"에게 공급하여야 하는 상품의 종류, 수량 등은 발주의뢰서, 매입전표, 세금계산서 등으로 대신할 수 있다.\r\n\r\n제 6 조 (계약가격) ① 계약가격은 부가가치세액을 포함하는 금액으로 한다.\r\n② 상품별 세부사항은 별도 \"계약상대자\"가 제시한 가격을 기준으로 한다. \r\n③  \"계약상대자\"가 업태별 시장가격을 고려하여 농협계통조직 매장의 규모 등에 따라 매장유형별로 계약가격을 달리 하고자 하는 경우, 계약가격에 \"계약상대자\"가 제시하는 일정율을 적용하여 조정할 수 있다. 본항에 대한 약정은 상품 등록 시 \"계약상대자\"가 제시한 상품거래 조건으로 갈음하며 상품별 조정이 필요한 경우 \"계약담당자\"와 \"계약상대자\"는 \"계약상대자\"가 제시하는 거래조건을 기준으로 상호 협의하여 결정한다.\r\n④ \"계약상대자\"는 \"계약담당자\"와 상호 협의하에 상품을 대량 판매하거나, 매출 확대 등에 필요하다고 판단할 경우 일시적으로 계약가격의 조정을 \"계약담당자\"에게 요청할 수 있다.\r\n\r\n제 7 조 (계약기간 등) ① 계약기간은    $CTR_ST_DT_Y   년 $CTR_ST_DT_M    월 $CTR_ST_DT_D   일부터   $CTR_ED_DT_Y     년   $CTR_ED_DT_M   월  $CTR_ED_DT_D  일까지로 정한다.\r\n② 계약기간 만료30일 전까지 \"계약담당자\" 또는 \"계약상대자\"가 별도의 이의를 제기하지 않는 한\r\n1년씩 자동 연장되는 것으로 하되 마진율 등 기타 거래조건은 \"계약담당자\"와 \"계약상대자\" 상호 협의 하에 변경 할 수 있다.\r\n\r\n제 8 조 (계약조건 변경) ① \"계약상대자\"는 계약조건에 영향을 미치는 제 요인이 발생   하였을 때에는 \"계약담당자\" 에게 지체없이 통보하여야 한다. \r\n② 이 계약서의 내용은 \"계약담당자\"와 \"계약상대자\" 사이의 서면 합의에 의해서만 변경되거나 수정될 수 있으며, 그 변경 및 수정은 \"계약담당자\"와 \"계약상대자\"가 해당 서면에 서명 또는기명 날인함과 동시에 그 효력을 발생한다.\r\n③ \"계약담당자\"는 \"계약상대자\"가 다음 각호의 1에 해당하는 경우 \"계약상대자\"와 합의없이 문서통보에 의거 계약품목을 삭제할 수 있다.\r\n   1. 신규등록 후 6개월이상 경과한 품목으로서 분기별 월평균 매출액이 30만원 미만 품목\r\n   2. 감독관청으로부터 행정처분을 받은 품목\r\n   3. 기타 원산지표시 등 상품 표시사항을 위반하여 사회적 물의를 일으킨 품목\r\n   4. \"계약상대자\"가 취급하는 상품 중 법적 요건 위반사항이 발견되어 판매에 상당한 지장을 초래한 품목\r\n\r\n제 9 조 (상품요건) ① \"계약상대자\"는 공급하는 상품에 대하여 제반 법적 요건(식품위생법, 농수산물품질관리법, 농수산물의원산지표시에관한법률, 건강기능식품에관한법률, 품질경영 및 공산품안전관리법, 주세법 등)을 완전히 준수하여야 하며, \"계약담당자\"는 \"계약상대자\"가 공급한 상품에서 법적 요건 위반사항을 발견하였을 경우 즉시 해당상품의 판매중지, 반품을 할 수 있으며, \"계약담당자\"가 상당한 기간을 정하여 시정요구를 하였음에도 불구하고 시정요구 불응 시 해당 계약을 해지할 수 있다.\r\n② \"계약상대자\"는 소비자의 안전, 상품의 신선도 유지, 상품의 분실 방지, 소비자의 오해방지 등을 위한 포장 및 표시요건 등을 준수하여야 한다.\r\n③ \"계약상대자\"는 적절한 자체 품질관리 및 위생관리를 통하여 정상적인 품질의 상품만을 공급하여야 한다.\r\n\r\n제9-1조(전용상품 개발 공급) 계약담당자\"와 \"계약상대자\"는 판매활성화를 위하여 전용상품을 상호 협의하여 개발할 수 있다.\r\n\r\n제 10 조 (상품의 공급제한) ① \"계약상대자\"가 \"계약담당자\"에게 공급하는 완제품이 곡물가루인 상품 중 쌀, 보리, 찹쌀, 밀쌀, 현미, 현미눈, 흑미, 대두, 율무, 수수, 조,참깨, 들깨, 흑임자, \r\n서리태, 백태, 흑태, 기장을 가공원료로 하는 상품은 국산원료로만 사용하여야 한다.\r\n② \"계약상대자\"는 완제품이 곡물가루인 상품 중 OEM생산 또는 판매대행 상품을 \"계약담당자\"에게 공급하여서는 아니되며, \"계약상대자\"가 생산공장을 직접 보유·운영하여 생산한 상품만을 공급하여야 한다.\r\n③ 완제품이 곡물가루가 아닌 상품이라도  \"계약담당자\"의 영업정책상 필요할 경우 \"계약 담당자\"와 \"계약상대자\"는 상호 협의하여 공급을 중단할 수 있다. \r\n\r\n제 11 조 (매장 위치 및 면적 등)\r\n ① “계약상대자”의 점포명, 운영층, 매장위치, 매장면적 및 판촉사원의 수는 특약서에 의하되 POG(상품진열도)로 대체할 수 있다\r\n ② “계약담당자”는 점포의 상품재구성 등의 목적으로 “계약상대자”와 협의하여 매장의 위치를 변경시킬 수 있다.\r\n ③ “계약담당자”는 정당한 사유 없이 “계약상대자”에게 다음 각 호의 행위를 해서는 아니 된다.\r\n  1. 일정한 점포의 매장에서 퇴점하는 것을 방해하거나 “계약상대자”의 의사에 반하여 “계약담당자”의 다른 점포의 매장에 입점하게 하는 행위\r\n  2. 계약기간 중에 “계약상대자”의 매장의 위치ㆍ면적ㆍ시설을 변경하는 행위\r\n ④“계약담당자”와 “계약상대자”가 매장 위치 또는 매장 인테리어를 변경(이하 “설비변경”이라 한다)하는 경우 다음 각 호의 내용을 준수한다.\r\n  1. 매장 바닥, 조명, 벽체 등 기초시설 공사에 관한 비용은 “계약담당자”가 부담한다. 단 기초시설 공사는 “계약담당자”의 고유사양에 의하며, “계약상대자”가 자신의 고유사양에 의해 기초 공사를 시행하려는 경우 추가되는 소요비용에 대해 “계약담당자”와 “계약상대자”는 사전 서면 약정을 체결하여 비용을 분담한다.\r\n  2. MD개편, 매장 리뉴얼 등 “계약담당자”의 사유로 설비 변경하는 경우, 이에 소요되는 비용은 “계약담당자”가 부담한다. 다만, 좋은 위치로의 매장 이동, “계약상대자”의 내부 매뉴얼에 따른 설비 변경 등 동 설비 변경이 “계약상대자”에게도 이익이 되는 경우에는 “계약담당자”와 “계약상대자”가 상호 협의하여 사전 서면 약정에 의해 비용을 분담할 수 있으며, 이 경우에도 “계약상대자”의 분담비율은 100분의 50을 초과하지 않는다.(기초시설 공사비용은 제1호에 의한다.)\r\n  3. 제2호에서 규정하고 있는 MD4개편, 매장 리뉴얼 등 “계약담당자”의 사유 이외에 “계약상대자”의 개별적인 사유(예:브랜드 컨셉 변경, “계약상대자”가 희망하여 매장위치를 변경하는 경우 등)로 설비 변경하는 경우, 이에 소요되는 비용은 “계약담당자”와 “계약상대자”가 상호 협의하여 분담비율을 정한다. (기초시설 공사비용은 제1호에 의한다.)\r\n  4. 제3호에서 규정한 “계약상대자”의 사유로 인한 설비변경을 실시하는 경우 타 입점업체의 영업활동에 방해가 발생하지 않도록 공사 일정 등에 대해 “계약상대자”는 “계약담당자”와 사전 협의하여야 한다.\r\n  5. “계약담당자”와 “계약상대자”가 설비 변경 비용을 분담하는 경우 설비 변경과 관련된 제반사항(자재, 디자인, 시공사, 감리 등)의 분쟁을 사전에 방지하기 위하여 시공 전 “계약담당자”와 “계약상대자”가 협의한 후, “계약담당자”또는 “계약상대자”의 공개입찰시스템을 통해 선정된 시공사를 통해 시행한다. \r\n ⑤ “계약담당자”는 다음 각 호의 어느 하나에 해당하는 행위를 하는 경우에는 “계약상대자”가 지출한 해당 매장에 대한 설비비용 총액에 전체 계약기간에서 다음 각 호의 어느 하나에 해당하는 행위가 발생한 날부터 계약기간의 마지막 날까지의 기간이 차지하는 비율을 곱한 금액 이상을 해당 매장 설비비용에 대한 보상으로 “계약상대자”에게 지급한다. 계약기간이 1년 미만인 경우는 계약기간을 1년으로 본다.\r\n  1. “계약상대자”와 거래를 중단하거나 거절하는 행위\r\n  2. “계약상대자”의 매장 위치ㆍ면적ㆍ시설을 변경하는 행위\r\n ⑥ “계약상대자”는  “계약담당자”가 지정하는 매장의 시설물 및 장비를 사용함에 있어 선량한 관리자로서의 주의의무를 다하여야 하고,  “계약담당자”의 승인없이 개ㆍ보수, 이동ㆍ교체ㆍ변경할 수 없으며 그 사용에 있어 통상적인 유지관리비용은 “계약상대자”가 부담하여야 한다.\r\n ⑦ “계약상대자”는 기간만료, 중도해지 등으로 인해 거래가 종료될 경우 “계약상대자”가 투입한 시설물 및 장비를 “계약상대자”의 비용으로 조속한 시일 내에 철수하여야 한다.\r\n\r\n제 12 조 (공급) ① \"계약상대자\"의 공급구역은 원칙적으로 전국으로 한다.\r\n② \"계약상대자\"는  \"계약담당자\"또는  \"계약담당자\"의 지정인(\"농협계통조직\")의 발주서에 의거 거래명세표(정보시스템 표준문서 포함)를 작성하여 납기일(발주일로부터 2영업일, 단 도서산간지역은 3영업일)까지 지정된 장소에 공급하여야 하며 공급에 따른 비용은 \"계약상대자\"의 부담 으로 한다.\r\n③ 물류비용 절감을 위하여 \"계약상대자\"는 공급 물품 중 합리적인 사유로  \"계약담당자\"의 물류센터를 통해 계통배송 하고자 할 때  \"계약담당자\"에게 요청할 수 있다. \r\n④ 제3항에 의하여 물류센터를 통한 계통배송을 할 경우에는  \"계약담당자\"와 \"계약상대자\"는 별도로 \"물류센터 공급계약서\"를 체결한다.\r\n⑤ 제2항의 기간내에 공급이 불가능한 경우에는 \"계약상대자\"는 \"정보시스템\"을 통해  \"계약담당자\" 또는  \"계약담당자\"의 지정인의 사전동의를 받아 공급기간을 연장할 수 있다. 단, 정보시스템 사용이 불가능할 경우에 한해 전화로 사전 동의가 가능하다.\r\n⑥ \"계약담당자\"는 다음 각 호의 어느 하나에 해당하는 경우를 제외하고는 \"계약상대자\"가 \r\n이 계약에 따라 공급하는 상품을 지체없이 수령한다.\r\n   1. 공급받은 상품이 \"계약상대자\"의 책임있는 사유로 인하여 훼손된 경우\r\n   2. 공급받은 상품에 하자가 있는 경우\r\n   3. 공급받은 상품이  \"계약담당자\"가 주문한 상품과 다른 경우\r\n   4. 일정한 기간 동안 주로 판매되는 상품으로서 해당 기간을 넘겨 공급한 경우\r\n   5. 그 밖에 제1호부터 제4호까지의 규정에 준하는 사유로  \"계약담당자\"가 상품의  수령을 지체하거나 거부할 수 있는 정당한 사유가 있는 경우\r\n⑦ \"계약상대자\"는 \"계약상대자\"의 책임있는 사유로 공급한 상품이 오손 또는 훼손되거나 상품에 하자가 있는 경우, \"계약상대자\"가 이 계약내용과 다르게 상품을 공급하는 경우에는  \"계약담당자\"와 협조하여 필요한 조치를 강구하여야 한다.\r\n⑧ \"계약담당자\"는 계약사항이 명시된 서면을 \"계약상대자\"에게 주기 전까지 \"계약상대자\"에게 이 계약에 따라 공급해야 하는 상품을 제조·주문하게 하거나, 공급할 상품을 위한 설비·장치를 준비 하도록 해서는 아니된다. 다만,  \"계약담당자\"가 서명 또는 기명 날인한 별도의 서면으로 요구하는 경우는 그러하지 아니하다.\r\n⑨ \"계약담당자\"는 공급과 관련하여 \"계약상대자\"에게 정당한 사유없이 다음 각 호의 행위를 해서는 아니되며 이 경우 \"계약상대자\"가  \"계약담당자\"의 요구에 응하지 않더라도  \"계약담당자\"는 \"계약상대자\"에게 이에 관한 책임을 물을 수 없다.\r\n   1. 통상적인 시장의 공급가격보다 현저히 낮은 가격으로 공급하게 하는 행위\r\n   2. 판촉행사의 실시를 목적으로 통상의 공급수량보다 현저히 많은 수량을 공급하게 하는 행위\r\n   3. 한시적으로 인하하기로 약정한 공급가격을 기한이 경과한 후에도 정상가격으로 \r\n      환원하지 아니하거나 환원을 지연하는 행위 \r\n\r\n제 13 조 (교체, 반품) ① \"계약담당자\"는  \"계약상대자\"로부터 매입한 상품의 전부 또는 일부를 \"계약상대자\"에게 반품(매입한 상품을 다른 상품과 바꾸는 등 실질적으로 반품이 되는 경우를 포함한다)할 수 있다. \r\n   1. 반품대상상품 및 반품기한 : 납품일로부터 1 개월 이내로 한다.\r\n   2. 반품절차 : 계약담당자는 반품대상 상품을 반품거래명세서를 작성하여 점포에서 계약상대자에게 반품상품을 인도한다.\r\n   3. 반품비용의 부담 : 교체, 반품에 소요되는 비용은 \"계약상대자\"가 부담한다.\r\n② 제1항제1호 및 제2호에 따라 신선농·수·축산품을 반품하는 경우에는  \"계약담당자\"가 공급받은 시점부터 해당 상품의 검수 및 매입을 마치기 전까지의 기간(특별한 사유가 없으면 2일을 초과할 수 없다)에만 반품할 수 있다.\r\n제 14 조 (대금지급) ① 물품대금은 정보시스템의 검수확정서상 검수일로부터 ($CNR_DT       )일 경과분에 대하여 월( $PSG_MM      )회 지급하되, 매월($PSG_DD  )일에 지급하며  \"계약상대자\"가 사전 신청한 통장으로 자동 이체한다. 단, 물품대금을 지급하는 기일은 물품을 받은 날로부터 60일 이내로 한다. \r\n② 지급일이 휴일인 경우에는 익 영업일에 지급하고, 휴일인 말일이 지급기일인 경우에는 직전 영업일에 지급할 수 있다.\r\n③ \"계약상대자\"는 본 계약에 의거 공급한 물품대금을 약정 기일전에  \"계약담당자\"의 관련 규정에 따라 선지급 요청을 할 수 있으며, \"계약담당자\"는 이에 응할 수 있다.\r\n④ 다음 각호의 1에 해당되어 대금지급이 지연되는 경우, \"계약담당자\"는 \"계약상대자\"에게 지연책임을 지지 아니한다.\r\n  1. 천재지변, 국책상조치, 방역 등으로 인한 출입제한, 파업, 전쟁 등의 사유로 \r\n     인하여 계약을 이행할 수 없는 경우\r\n  2. \"계약상대자\"가 지급받아야 할 대금에 대하여 압류,가압류,체납처분, 정부 및 공공기관의 지급정지 요청, 기타 강제집행을 받는 경우\r\n⑤ \"계약담당자\"는 물품대금을 감액하거나, 상품 또는 상품권으로 지급하지 아니한다.\r\n⑥ \"계약담당자\"는 제5항에도 불구하고 다음 각호의 어느 하나에 해당하는 경우에는 공급받은 날부터 거래관행상 합리적이라고 인정되는 기간 안에서 \"계약상대자\"와 서면으로 합의한 후에 감액 할 수 있다. 다만, 신선농·수·축산물의 경우 해당상품의 대금은  \"계약담당자\"가 공급받은 시점부터 상품의 검수 및 매입을 마치기 전까지의 기간(2일을 초과할 수 없다)에만 감액할 수 있다.  \r\n   1. 공급받은 상품이 계약한 상품과 다른 경우\r\n   2. \"계약상대자\"의 책임있는 사유로 인하여 오손·훼손된 경우\r\n   3. 공급받은 상품에 하자가 있는 경우\r\n   4. 제1호부터 제3호까지에 준하는 정당한 사유가 있는 경우\r\n⑦ \"계약담당자\"는 \"계약상대자\"와 합의하여 이 계약에 따라  \"계약담당자\"가 \"계약상대자\"에게 지급하여야 하는 상품대금에서 \"계약상대자\"가  \"계약담당자\"에게 지급하여야 하는 비용을 공제한 후 지급할 수 있다.\r\n⑧ \"계약담당자\"의 특약매입 거래를 위한 전산개발 완료시까지 대금정산은 사업장에서 처리한다. \r\n\r\n제 15 조 (마진율 등) ①마진율은 상품의 판매대금에서 ( $SEL_PMNY ) % 로 한다.\r\n ② “계약담당자”는 정당한 사유 없이 계약기간 중에 제1항의 마진율을 변경하지 아니한다.\r\n ③ “계약담당자”는 마진율의 결정 및 변경 절차를 사전에 “계약상대자”에게 공개한다.\r\n ④ “계약담당자” 또는 “계약상대자”가 계약기간의 만료에 따라 마진율을 변경하려는 경우에는 계약기간의 만료일로부터 1개월 전까지 변경을 희망하는 마진율 및 변경사유를 상대방에게 서면으로 통보한 후 매출액의 증감, 시장상황 등을 고려해서 상호 협의하여 결정한다.\r\n ⑤ 제4항에서 새로운 계약기간이 시작된 이후에도 마진율에 대한 합의가 이루어지지 아니하는 경우 종전의 마진율을 적용하고, 최종 합의가 이루어지는 시점부터 변경된 마진율을 적용한다.\r\n ⑥ 이 계약 체결 당시 “계약담당자” 또는 “계약상대자”가 예상하지 못한 비용이 발생한 경우 그에 따른 추가 비용은 “계약담당자”와 “계약상대자”의 수익에 비례하여 결정한다.\r\n\r\n제 16 조 (채권ㆍ채무 확인) ① \"계약담당자\"와 \"계약상대자\"사이의 본 계약과 관련된 채권ㆍ채무 확인은 \"정보시스템\"의 \"매월말 잔액장 조회표\" 등 기타 거래관련 자료로 갈음한다.\r\n② 채권ㆍ채무는 연 1회 이상  \"계약담당자\"와 \"계약상대자\"가 상호대사하여 확인한다. 다만, \"계약상대자\"의 합리적인 사유로 인하여 별도의 확인이 필요한 경우 \"계약상대자\"는  \"계약담당자\"에게 서면으로 요청할 수 있다.\r\n\r\n제 17 조 ((세금)계산서 발행) ① \"계약상대자\" 는  \"계약담당자\"가 인수한 금액(정보시스템자료기준)을 매월말일 마감기준으로 익월 10일까지 월합계 (세금)계산서를 작성,  \"계약담당자\"에게 제출하여야 한다.\r\n② (세금)계산서를 지정기일까지 미제출할 경우  \"계약담당자\"는 대금지급정지 등의 조치를 취할 수 있다.\r\n제 18 조 (행사) ① 판매촉진을 위한 행사나 활동(이하 \"판촉행사\"라 한다)을 하려면\r\n \"계약담당자\"와 \"계약상대자\"는 사전에 다음 각호의 사항이 명시된 서면으로 합의를 한 후 진행한다. \r\n    1. 판촉행사의 명칭·성격·기간\r\n   2. 판촉행사를 통해 판매할 상품의 품목\r\n   3. 판촉행사에 소요될 것으로 예상되는 비용의 규모 및 사용내역\r\n   4. 해당 판촉행사를 통해  \"계약담당자\"와 \"계약상대자\"가 직접적으로 얻을 것으로 예상되는 경제적 이익(이하 이 조에서 \"예상이익\"이라 한다)의 비율\r\n   5. 판촉행사에 소요되는 모든 비용(명칭에 상관없이 상품의 판촉행사에 소요되는 모든비용을 말하며, 이하 \"판촉비용\"이라 한다)의 분담비율 또는 액수 \r\n②  \"계약담당자\"는 정당한 사유없이 \"계약상대자\"에게 \"계약상대자\"의 의사에 반하여 판촉행사에 참여하게 하거나 \"계약상대자\"의 상품에 관한 광고를 하게 하지 아니한다.\r\n③ 제1항 제5호의 판촉비용 분담비율은  \"계약담당자\"와 \"계약상대자\"가 예상이익의 비율에 \r\n따라 정하는 것을 원칙으로 하되, 구체적인 비율을 산정하기 곤란한 경우에는  \"계약담당자\"와 \"계약상대자\"의 예상이익이 동일한 것으로 추정한다.\r\n④ 제3항에 따른 \"계약상대자\"의 판촉비용 분담비율은 100분의 50을 초과할 수 없다.\r\n⑤ 제1항부터 제4항까지의 규정에도 불구하고 \"계약상대자\"가  \"계약담당자\"에게 요청하여 다른 계약상대자와 차별화되는 판촉행사를 실시하려는 경우에는  \"계약담당자\"와 \"계약상대자\"가 상호 협의하여 판촉비용의 분담비율을 정할 수 있다.\r\n\r\n제 19 조 (판촉사원 파견) ① \"계약담당자\"는 \"계약상대자\"로부터 \"계약상대자\"의 종업원이나 \"계약상대자\"가 고용한 인력(이하 \"판촉사원\"이라 한다)을 파견받아 판매업무 등에 종사하게 하거나,  \"계약담당자\"가 고용한 직원의 인건비를 \"계약상대자\"에게 부담하게 하지 아니한다. 다만, 다음 각호의 어느 하나에 해당하는 경우에는  \"계약담당자\"가 \"계약상대자\"의 판촉사원을 \"계약상대자\"가 공급하는 상품의 판매 및 관리 업무에 종사하게 할 수 있다.\r\n   1. \"계약담당자\"가 파견된 판촉사원의 인건비, 식비·교통비 등 각종 실비, 상품의 판매 및 관련 업무 종사를 위해 소요되는 비용을 부담하는 경우\r\n   2. \"계약상대자\"가 판촉사원의 파견에 따른 예상이익과 비용의 내역 및 산출근거를 객관적·구체적으로 명시하여 서명 또는 기명날인한 서면에 따라  \"계약담당자\"에게 자발적으로 파견을 요청하는 경우\r\n   3. \"계약담당자\"가 특수한 판매기법 또는 능력을 지닌 숙련된 판촉사원을 \"계약상대자\"로부터 파견받는 경우\r\n② 판촉사원의 근무기간, 근무시간, 종사할 업무내역 등 구체적인 내용에 대해서 \"계약상대자\"는  농협 계통조직별로 별도로 약정한다.  \"계약담당자\"는 약정서에 명시되지 않은 판촉사원의 파견을 강요하거나 파견된 판촉사원이 \"계약담당자\"의 고유업무에 종사하도록 해서는\r\n아니되며, \"계약상대자\"는 판촉사원 근무에 따른 자기의 예상이익과 비용의 구체적인 내역 및 산출근거를 서면으로 제출하여야 한다.\r\n\r\n제 20 조 (식품안전관리) ① \"계약담당자\"는 \"계약상대자\"의 공급상품 및 제조공장에 대하여 다음 각호에 해당하는 사항에 대하여 식품안전점검 및 증빙자료제출 요청을 할 수 있다. \r\n   1. 원ㆍ부재료 입ㆍ출입에 관련된 서류(원료수불대장, 작업일지 등)\r\n   2. 원산지 증명서 등 원산지 관련서류\r\n   3. 원료창고에 보관 중인 원ㆍ부재료에 대한 원산지 관리\r\n   4. 자가품질검사 실시 여부\r\n   5. 기타 식품위생법상 준수사항 이행 여부 등\r\n② 점검을 통하여 필요하다고 판단될 경우  \"계약담당자\"는 검사에 필요한 시료를 현장에서 채취하여 식품위생검사기관에 검사를 의뢰할 수 있다.\r\n③ \"계약담당자\"는 본조 제1항, 제2항에 따라 점검한 결과 \"계약상대자\"에게 문제점의 시정을 요구할 수 있고, \"계약상대자\"는 즉시 적절한 시정조치를 하여야 한다.\r\n\r\n제 21 조 (안전성 관리) ① \"계약상대자\"는  \"계약담당자\"에게 공급하는 상품 중 안전성관리를 위하여 필요한 상품은 원료의 보관관리, 작업장·작업자·생산설비 등에 대한 위생 관리, 환기·습도관리, 용수·배수관리, 위생환경, 급수시설 등 식품위생법 기준에 적합하도록 관리하여야 한다.\r\n② \"계약상대자\"는 생산에 종사하는 작업자에 대한 개인위생관리 점검 및 위생교육을 분기별로 실시하고 이에 대한 기록을 보관하여야 한다.\r\n③ \"계약상대자\"는 제품의 안전성 확보를 위해 원료 및 완제품검사와 품질위생점검을 자체적으로 실시하고 이에 대한 기록을 관리·비치하여야 한다. 다만, 자가품질검사 시설이 없을 경우에는 농협식품안전연구원이나 식품의약품안전청으로부터 지정받은 식품위생검사기관에 위탁 검사 할 수 있다.\r\n\r\n제 22 조 (수거검사) ① \"계약담당자\"는 \"계약상대자\"로부터 공급받는 상품 중 안전성 관리를 위하여 필요한 상품은 상품 및 가공 원·부재료 등에 대한 정기 또는 수시 수거검사를 실시할 수 있다.\r\n② \"계약상대자\"가 공급하는 상품의 안전성 확보를 위해 \"계약담당자\"가 수거한 시료의 검사비용 실비는 \"계약상대자\"가 부담한다.\r\n\r\n제 23 조 (원산지 표시) 원산지 표시대상 농식품은 다음 각 호의 기준에 따라 원산지를\r\n의무적으로 표시하여야 한다.\r\n1. 국산농수산물 및 그 가공품에 대한 원산지 표시\r\n  가. 농산물 : \"국산\" 또는 \"시ㆍ군명\"으로 표시\r\n  나. 수산물 : \"국산\" 또는 \"연근해산\" 또는 \"시ㆍ군명\" 으로 표시하고, 원양어선이  \r\n      포획한 수산물은 \"원양산(필요시 해역명 병기 가능)\"으로 표시\r\n  다. 가공품 : \"국산\"으로 표시하고, 수산가공품 중 원양산은 \"원양산\"으로 표시한다.\r\n  2. 수입농수산물 및 그 가공품에 대한 원산지 표시는 대외무역법 시행령에 따라 \"수입국명\"으로 표시한다. 다만, 북한으로부터 반입된 농수산물은 \"북한산\"으로 표시하여야 한다.\r\n  3. 표준규격품ㆍ품질인증ㆍ지리적표시를 한 경우는 원산지를 표시한 것으로 본다.\r\n\r\n제 24 조 (원산지 허위표시 등의 금지) ① \"계약상대자\"는 \"계약담당자\"에게 공급하는 상품의 원산지표시 및 관리에 있어 다음 각 호의 행위를 하여서는 아니 된다.\r\n   1. 원산지 표시를 허위로 하거나 이를 혼동하게 할 우려가 있는 표시를 하는 행위\r\n   2. 원산지 표시를 혼동하게 할 목적으로 그 표시를 손상·변경하는 행위\r\n   3. 원산지를 위장 또는 원산지가 다른 농식품을 혼합하여 판매하거나 판매할 목적\r\n      으로 보관 또는 진열하는 행위\r\n   4. 원산지를 증명하는 서류(원산지 증명서, 생산자 증명서 등)를 허위로 작성하여\r\n      제출하는 행위\r\n② 법령에서 정한 상품표시 및 원산지표시 의무를 고의 또는 과실로 위반함으로써 \"계약상대자\"의 귀책사유로 발생하는 일체의 책임은 전적으로 \"계약상대자\"가 부담한다.\r\n\r\n제 25 조 (원산지 증명서류 관리) ① \"계약상대자\"는 \"계약담당자\"에게 공급하는 상품의 가공원료에 대한 원산지 증명서류를 확보하여 생산자와 원산지를 항상 확인할 수 있도록 하여야 한다.\r\n② \"계약상대자\"가 \"계약담당자\"에게 제출하는 원산지 증명서에는 제품(품목)명, 생산자(성명 또는 상호, 주소, 전화번호), 공급자(성명 또는 상호, 주소, 전화번호), 공급받는자, 제조(포장)일자, 공급일자, 공급수량(중량), 서류발급일자 등의 내용이 있어야 한다.\r\n③ \"계약상대자\"는 원산지 증명서류를 2년간 보관·관리하여야 한다.\r\n\r\n제 26 조 (협조의무) ① \"계약상대자\"는 \"계약담당자\"에게 공급하는 상품 중 원산지 및 안전성 검사가 필요한 상품은 시료 수거 및 현장점검에 협력하여야 한다.\r\n② \"계약상대자\"는 자가품질검사 및 외부기관 점검결과 부적합 상품으로 판정된 경우 해당상품의 생산 및 계통매장 공급중단, 정밀검사 등  \"계약담당자\"가 요구하는 필요한 조치를 취하여야 한다.\r\n③ \"계약상대자\"는 가공원료 구매시 최초 생산자까지 역추적이 가능한 거래처와 거래하고,  생산자와 유통경로가 불명확한 제품은 취급하지 아니한다.\r\n④ \"계약상대자\"는  \"계약담당자\"가 요청할 경우 원산지증명서 또는 생산일지, 원·부재료수불대장, 제품별 원료일지 등 원산지 증명관련 서류를  \"계약담당자\"에게 제출하여야 한다.\r\n\r\n제 27 조 (정보시스템 처리) \"계약담당자\"는 \"계약상대자\"의 정상적인 정보처리를 위해 최대한 지원하고, \"계약상대자\"는  \"계약담당자\"의 \"정보시스템\" 처리를 위하여 최대한 노력하여야 하며, \"계약상대자\"의 고의 또는 과실 등으로 인하여 발생한 사항에 대하여 책임을 진다.\r\n\r\n제 28 조 (인ㆍ허가,특허 및 상표권) \"계약상대자\"는 계약을 이행함에 있어 \"계약상대자\"의 제조, 납품과 관련하여 발생하는 인ㆍ허가, 특허,상표권 문제 및 분쟁 등 \"계약상대자\"의 귀책사유로 인해 발생하는 제반문제 및 분쟁에 대하여 \"계약상대자\"가 전적으로 책임진다.\r\n\r\n제 29 조 (손해배상) ① \"계약담당자\"는 \"계약상대자\"의 귀책사유로 인해 제12조 공급기간까지 공급받지 못한 때에는 미공급액에 대한 1,000분의 15의 지체이율과 지체일수를 곱한 해당액을 지체상금으로 받을 수 있다.\r\n② 가격결정의 기준이 되는 증빙서류의 허위제출 또는 미제출로 계약가격이 고가로 약정되어 발생된 \"계약담당자\"의 손해액은 \"계약상대자\"의 부담으로 한다. \r\n③ \"계약담당자\"에게 기 제출한 서류(사업자등록증,등기부등본,인감증명서,거래인감계 등)내용에 변동사항이 있었으나, \"계약상대자\"가 관련자료의 등기후 30일 이내 관련 서류 미제출 또는 허위 제출함에 따라 발생한  \"계약담당자\"의 손해에 대하여는 \"계약상대자\"가책임져야 하며 \"계약담당자\"는 본 계약을 해지 할 수도 있다.\r\n④\"계약상대자\"가 공급한 상품을  \"계약담당자\" 또는 \"계약담당자\"의 지정인이 소비자에게 판매한 후, \"계약상대자\"의 귀책사유에 의한 상품의 하자로 인하여 소비자에게 신체적 또는 재산적 피해가 발생하여 소비자에게 그 손해를 배상하는 경우, 발생한 손해 일체를 \"계약상대자\"가 배상하여야 한다.\r\n\r\n제 30 조 (제증빙서류 제출 및 열람) \"계약상대자\"는 계약 및 판매에 관한 증빙서류에 대하여 \"계약담당자\"의 제출 또는 열람요구가 있을 때에는 이에 응하여야 하며 정당한 사유없이 이에 불응하거나 위조, 변조 또는 사실과 상이한 증빙서류를 제출하였을 때에는  \"계약담당자\"는 위약으로 간주 처리할 수 있다.\r\n\r\n제 31 조 (거래질서 준수) ① \"계약상대자\"는  \"계약담당자\"와 반드시 사전에 약정된 사항으로만 \"농협 계통조직\"과 거래를 하여야 한다.\r\n② \"계약상대자\"는  \"계약담당자\"와 사전에 약정되지 않은 사항에 대하여 \"농협계통조직\"에 별도 지원의 필요성이 있을 경우  \"계약담당자\"와 협의하고,  \"계약담당자\"의 승낙 후 지원할 수 있다.\r\n③ \"계약담당자\"는 \"계약상대자\"가 동조의 거래질서를 위반하였을 경우 \"계약상대자\"에 대하여 계약해지를 포함한 상당한 제재조치를 할 수 있다.\r\n④  \"계약담당자\"와 \"계약상대자\"는 상호간의 거래로 인하여 알게 된 상대방의 영업비밀을 제3자에게 누설하지 아니한다. 다만, 다른 법령에 근거한 정부 또는 공공기관의 요청에 \r\n따르거나 법원의 판결에 따라 누설하는 경우는 예외로 한다.\r\n\r\n제 32 조 (거래정지 등)  \"계약담당자\"는 \"계약상대자\"가 다음 각 호의 1에 해당하는 경우 \"계약상대자\"에 대하여 일정기간 거래정지, 대금지급유보, 품목추가금지 등 제재조치를 할 수 있다.\r\n   1. \"계약상대자\"가 특별한 이유없이 계약품목의 공급을 지연, 거절하거나 규격상위 품목 또는 계약내용과 다른 품목을 공급함으로 인해  \"계약담당자\"에게 공신력 손상 및 불이익을 가져오게 한 경우\r\n   2. \"계약상대자\"가 증빙서류를 허위로 제출하거나 또는 미제출한 경우\r\n   3. \"계약담당자\"의 물류센터 내에 현장검수장을 설치·운영하는 \"계약상대자\"가 비계약 품목을 전시, 보관 또는 판매하였을 경우 \r\n   4. 기타 \"계약상대자\"가  \"계약담당자\"와 체결한 계약서 및 물류센터(또는 전시장 및 창고)사용에 관한 약정서상의 준수사항을 위반한 경우 \r\n   5. \"계약상대자\"가  \"계약담당자\"의 영업정책과 배치되는 행위를 함으로 인해  \"계약담당자\"의 영업을 방해 또는 거래 질서를 문란하게 한 경우\r\n   6. 공급상품에 법적요건 위반사항이 발견된 경우 또는 공급상품의 품질에 대하여 공공\r\n      기관, 언론 및 소비자 단체 등에서 사회적 문제를 제기함으로써 정상적인 판매가 어려운 경우 \r\n\r\n제 33 조 (부적합품 위반사항 등에 대한 제재 조치) ① \"계약담당자\"는 \"계약상대자\"로부터 공급받는 상품 중 식품안전 부적합품 및 위반사항 상품에 대하여 <별표>와 같이 처리한다.\r\n② 처분조치에 대하여는 다음 각 호와 같이 처리한다.\r\n   1. 품질검사 결과 부적합품은 당해 상품을 즉각 수거폐기 조치하고, 판매정지된 상품은\r\n      시정조치 완료일 또는 재검사 결과 적합 판정일로부터 판매를 재개한다.\r\n   2. 취급중단 상품은 \"계약상대자\"의 책임하에 \"계약담당자\"의 매장 및 소비자 구입분에 대하여 전량 반품·환불 조치를 취하여야 한다.\r\n③ \"계약담당자\"가 정한 식품안전점검표에서 \"계약상대자\"의 평가점수가 기본수준 이하인 경우 최소 이행 점수를 초과할 때까지 해당상품에 대한 공급 중단조치를 취할 수 있으며,  \"계약담당자\"가 정한 기한 내까지 보완조치를 취하지 않을 경우 해당상품은 품목삭제 할 수 있다.\r\n\r\n④ \"계약상대자\"가 공급하는 상품의 안전성과 관련하여  \"계약담당자\"의 요구사항 및 법률적 위반·미비사항에 대한 개선 등 \"계약담당자\"의 요구에도 불구하고 \"계약상대자\"가 사후조치에 대한 이행을 거부하거나 개선조치가 불가능한 경우에는  \"계약담당자\"는 \"계약상대자\"와의 물품공급 계약을 해지하거나 고발조치 등 필요한 조치를 취할 수 있다.\r\n제 34 조 (각종 불이익 제공 금지 등)  \"계약담당자\"는 \"계약상대자\"에게 다음 각 호의 어느 하나에 해당하는 행위를 하여서는 아니된다.\r\n   1. \"계약상대자\"의 상품을 무상 또는 저가로 취득하거나 요구하는 등 부당한 이익을 취득하는 행위\r\n   2. 거래관계를 자신만으로 한정하거나 다른 특정 사업자와 거래하는 것을 강요 \r\n      또는 방해하는 행위\r\n   3. 상품원가, \"계약상대자\"가 다른 사업자에게 공급하는 상품의 공급조건이나 판촉행사 조건 등 경영정보의 제공을 요구하는 행위\r\n   4. 정당한 사유없이 상품권이나 물품을 구입하도록 요구하는 행위\r\n   5. 이 계약과 관련하여 인지한 쌍방의 영업비밀이나 정보를 누설하거나 부당하게 \r\n      이용하는 행위\r\n\r\n제35조 (사후 고객관리를 위한 조치)\r\n ⓛ “계약담당자”는 “계약상대자”가 매장을 철수한 후에 “계약상대자”의 상품에 대한 고객의 교환, 환불요구 등에 대한 사후관리를 위하여 계약 종료일 직전 월에 판매된 상품대금의 ( $SEL_WRS_PMNY   )%에 해당하는 금액의 하자보증보험증권 가입 또는 보증금을 “계약담당자”에게 예치하게 할 수 있다. “계약상대자”가 보증금을 예치하지 않은 상태에서 “계약담당자”가 고객의 교환, 환불요구에 응한 경우 “계약상대자”는 이로 인하여 지출된 비용을 “계약담당자”에게 지급한다.\r\n ② “계약상대자”는 “계약담당자”에게 퇴점 1개월 전까지 보증보험증권을 제출하거나 퇴점 전일까지 보증금을 예치하여야 한다.\r\n ③ 사후 고객관리를 위한 조치의 유효기간은 이 계약 종료일로부터 3개월까지로 한다.\r\n\r\n제 36 조 (계약해지 등) ① \"계약담당자\"는 \"계약상대자\"가 다음 각호의 어느 하나에 해당하는 경우 \"계약상대자\"에 대하여 30일전에 서면통보로써 계약을 해지할 수 있다.\r\n   1. \"계약상대자\"가 제32조의 거래정지처분을 최근 1년간 2회 이상 받게 된 경우 \r\n   2. 거래정지처분을 받은 \"계약상대자\"가 거래정지 기간 중 의무사항을 준수하지 아니한 경우\r\n   3. \"계약상대자\"의 고의나 중대한 과실로 인해 \"계약담당자\"의 사업추진에 지장을 초래하거나 계약유지가 불가능하다고 판단될 경우\r\n   4. \"계약상대자\"의 부도 등으로 재무상태 및 신용이 부실하여  \"계약담당자\"와의 계약이행이 불가능 하다고 판단되는 경우. 단, 화의ㆍ법정관리 등으로 제품의 생산공급에 지장이 없다고 인정되는 경우에는 예외로 한다.\r\n   5. \"계약상대자\"가 계약해지를 요청한 경우 \r\n   6. 상관례에 벗어난 상행위로 말미암아  \"계약담당자\"에게 상당한 불이익을 초래케 한 경우 \r\n   7. \"계약상대자\"가 감독관청으로부터 영업허가 및 영업등록의 취소처분을 받은 경우\r\n   8. \"계약상대자\"가 제8,제9조,제28조에서 정한  \"계약담당자\"의 요구사항에 정당한 사유없이 응하지 않는 경우\r\n   9. 언론의 부정적인 보도 등 사회적 물의를 야기한 경우 \r\n  10. \"계약상대자\"가 본 계약을 이행할 수 없다고 상호 합의한 경우 \r\n② \"계약상대자\"의 연단위 계약기간 동안의 계통공급실적이 50백만원 미만인 경우에는 계약기간 만료 시 거래를 종료할 수 있다. 이 경우  \"계약담당자\"는 계약만료일 30일전에 \"계약상대자\"에게 서면으로 통보한다.\r\n③ 본 계약을 해지 또는 종료하는 경우에  \"계약담당자\"는 \"계약상대자\"가 공급한 비정상품에 대한 손해보전을 받기 위하여 다음과 같이 처리하며 \"계약담당자\"는 \"계약상대자\"에게 해당사항을 통지한다.\r\n   1. 해지,종료월 기준 1년전부터 시작하여 3월간 월평균 공급액의 20% 해당액을 \r\n     해지, 종료일 이후 최종 대금지급기일로부터 A/S보증기간 등을 감안 3개월간 \r\n     보증금으로 \"계약담당자\"에게 예치하게 할 수 있다.\r\n   2. 제1호의 기간 내에  \"계약담당자\" 또는 \"계약담당자\"의 지정인이 비정상품에 대한\r\n      교체 보충 공급 또는 반품 요청이 있을 경우 \"계약상대자\"가 이에 불응하거나 업종변경\r\n       등으로 이를 처리하지 못할 경우 또는 \"계약담당자\"의 통보가 불가능한 경우에는 \r\n      \"계약담당자\"에게 예치한 보증금에서 비정상품 해당액을 차감한다.  \r\n\r\n\r\n제 37 조 (의무면제) 천재지변, 국책상조치, 방역 등으로 인한 출입제한, 파업, 전쟁 등의 사유로 인하여 계약을 이행할 수 없는 사례가 발생하였을 경우 제29조,제32조 및 제35조는 적용하지 아니할 수 있다. \r\n\r\n제 38 조 (권리·의무 양도 및 담보 금지) \"계약상대자\"는 \"계약담당자\"의 승낙없이 본  계약상 권리ㆍ의무를 제3자에게 양도하거나 담보로 제공할 수 없다. \r\n\r\n제 39 조 (분쟁해결 및 재판관할) ① 이 계약에서 정하지 아니한 사항 또는 이 계약의 내용에 대하여  \"계약담당자\"와 \"계약상대자\" 사이에 의견이 다른 경우에는 \"계약담당자\"와 \"계약상대자\"의 합의된 의사에 따르고,  \"계약담당자\"와 \"계약상대자\" 사이에 계약 해석과 관련한 합의가 이루어지지 않은 경우에는 일반 상관례 및 관련 법령에 따른다.\r\n② 제1항에 의해서도 이 계약과 관련한 분쟁이 해결되지 아니한 경우에는 「대규모유통업에서의 거래 공정화에 관한 법률」제26조제1항에 따라 한국공정거래조정원의 대규모유통업거래 분쟁조정협의회에 조정을 신청할 수 있다\r\n③  \"계약담당자\"와 \"계약상대자\"가 제2항에 따른 조정을 신청하지 아니하는 경우, 이 계약에 관한 분쟁의 해결은 통상의 민사재판에 의한다. 이 경우 양 당사자는 합의로써 관할법원을 정할 수 있다.\r\n제 40조 (특약사항)\r\n위와 같이 계약을 체결함에 있어 \"계약담당자\"와 \"계약상대자\"는 본 계약서의 모든 조항을 확인하고 본 계약을 성실히 이행할 것을 확약함과 동시에 이 계약이 체결되었음을 증명하기 위하여 본 계약서 2통을 작성하여 각각 1통씩 보관한다. \r\n\r\n\r\n");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "85.16%", "16", null, "21", "3.13%", null, this);
            obj.set_taborder("1");
            obj.set_text("4000");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "2.73%", "337", null, "193", "3.03%", null, this);
            obj.set_taborder("2");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "85.25%", "296", null, "21", "3.03%", null, this);
            obj.set_taborder("3");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "85.25%", "562", null, "21", "3.03%", null, this);
            obj.set_taborder("4");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02", "absolute", "2.73%", "593", null, "121", "3.03%", null, this);
            obj.set_taborder("5");
            obj.set_wordwrap("char");
            obj.set_value("aaaaaaaaaa^bbbbbbbbbbbbbbbbbb^cccccccccccccccccccccc^ddddddddddddddddddd");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TEST_4000");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Sample022_CLOB4000.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {
        	this.fn_cutLength(this.TextArea00, this.Dataset00, 4000);
        }

        this.fn_cutLength = function(obj,oDs,cutNum)
        {	
        	var objVal = obj.value.toString();
        	var objLen = objVal.length;
        	var nShare = objLen/cutNum;
        	var nRest  = objLen%cutNum;
        	
        	for(var i=0; i < nShare; i++){
        		
        		var sVal = objVal.substr(i*cutNum, cutNum);
        		var nRow = oDs.addRow();		
        		oDs.setColumn(nRow,"SQNO",i+1);
        		oDs.setColumn(nRow,"CTRW_CNTN",sVal);	
        	}
        }

        this.Button01_onclick = function(obj,e)
        {
        	var sColVal = "";
        	
        	for(var j=0; j<this.Dataset00.rowcount; j++){
        		
        		sColVal += this.Dataset00.getColumn(j,"CTRW_CNTN");
        	}
        	
        	this.TextArea01.set_value(sColVal);
        }

        this.Button02_onclick = function(obj,e)
        {
        	var arrVal = this.TextArea02.value.split("^");
        	
        	for(var v=0; v<arrVal.length; v++)
        	{
        		var nARow = this.Dataset01.addRow();
        		this.Dataset01.setColumn(nARow,"SQNO",v+1);
        		this.Dataset01.setColumn(nARow,"CTRW_CNTN",arrVal[v]);
        	}
        	
        	trace(this.Dataset01.saveXML());
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("Sample022_CLOB4000.xfdl", true);

       
    };
}
)();
