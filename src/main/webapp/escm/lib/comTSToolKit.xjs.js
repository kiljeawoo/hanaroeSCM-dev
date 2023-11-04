//XJS=comTSToolKit.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        //** 환경 설정시 주의사항 ***************************************************************	//
        //
        // . 인증기관 LDAP 정보 모음 은 LDAP 에서 인증서를 가져올 때 반드시 사용된다.
        //
        //**************************************************************************************//

        //** 기본정보 설정			************************************************************//

        // == 인증기관 관련 정보 모음		================================= //
        var CA_LDAP_INFO = "KISA:dirsys.rootca.or.kr:389|KICA:ldap.signgate.com:389|SignKorea:dir.signkorea.com:389|Yessign:ds.yessign.or.kr:389|CrossCert:dir.crosscert.com:389|TradeSign:ldap.tradesign.net:389|NCASign:ds.nca.or.kr:389|";
        // 허용 인증기관 리스트
        var CA_LIST_REAL_SHA2="cn=TradeSignCA2,ou=AccreditedCA,o=TradeSign,c=KR|cn=yessignCA Class 1,ou=AccreditedCA,o=yessign,c=kr|cn=SignKorea CA2,ou=AccreditedCA,o=SignKorea,c=KR|cn=signGATE CA4,ou=AccreditedCA,o=KICA,c=KR|cn=CrossCertCA2,ou=AccreditedCA,o=CrossCert,c=KR|";
        var CA_LIST_REAL_SHA1="cn=TradeSignCA,ou=AccreditedCA,o=TradeSign,c=KR|cn=yessignCA,ou=AccreditedCA,o=yessign,c=kr|cn=SignKorea CA,ou=AccreditedCA,o=SignKorea,c=KR|cn=signGATE CA2,ou=AccreditedCA,o=KICA,c=KR|cn=CrossCert Certificate Authority,ou=AccreditedCA,o=CrossCert,c=KR|";
        var CA_LIST_TEST_TRADESIGN="cn=TradeSignCA2011Test2,ou=AccreditedCA,o=TradeSign,c=KR|cn=TestTradeSignCA2008,ou=AccreditedCA,o=TradeSign,c=KR|";
        // ============================================================== //

        // == 인증서 정책  관련 		===================================== //
        // -- 기업/기관 범용 OID 모음
        var FIRST_COMP_CERT_POLICIES = "1 2 410 200012 1 1 3:전자거래범용(기업용)|1 2 410 200004 5 1 1 7:전자거래범용(기업용)|1 2 410 200005 1 1 5:전자거래범용(기업용)|1 2 410 200004 5 2 1 1:전자거래범용(기업용)|1 2 410 200004 5 4 1 2:전자거래범용(기업용)|1 2 410 200004 5 3 1 1:전자거래범용(기관용)|1 2 410 200004 5 3 1 2:전자거래범용(기업용)|";
        //-- 개인 범용 OID 모음
        var FIRST_INDI_CERT_POLICIES = "1 2 410 200012 1 1 1:전자거래범용(개인용)|1 2 410 200004 5 1 1 5:전자거래범용(개인용)|1 2 410 200005 1 1 1:전자거래범용(개인용)|1 2 410 200004 5 2 1 2:전자거래범용(개인용)|1 2 410 200004 5 4 1 1:전자거래범용(개인용)|1 2 410 200004 5 3 1 9:전자거래범용(개인용)|";
        //-- 개인 + 기업/기관 범용 OID 모음
        var GENERAL_PURPOSE_CERT_POLICIES = FIRST_COMP_CERT_POLICIES + FIRST_INDI_CERT_POLICIES;

        //-- 전자세금계산서 서명 허용 인증서
        //KTNET 범용 + 전세금 허용 인증서. 데모 사이트 배포용.
        var ETAX_SIGN_POLICIES = "1 2 410 200012 1 1 3:전자거래범용(기업용)|1 2 410 200012 5 28 1 21:코리아세븐 전세금용|1 2 410 200012 5 18 1 31:이니스프리빌(개인사업자용) 전세금용|1 2 410 200012 5 18 1 33:이니스프리빌(법인사업자용) 전세금용|1 2 410 200012 1 1 4101:블루웹(자체발행) 전세금용|1 2 410 200012 1 1 481:청우식품(자체발행) 전세금용|1 2 410 200012 1 1 491:오라이언빌 전세금용|1 2 410 200012 1 1 4111:ESN 전세금용|1 2 410 200012 5 14 1 11:매트릭스빌 전세금용|1 2 410 200012 5 14 1 21:가톨릭재단SCM 전세금용|1 2 410 200012 5 11 1 101:기맥(자체발행) 전세금용|1 2 410 200012 5 4 1 21:탐즈(TAMZ) 전세금용|1 2 410 200012 5 27 1 1:코참빌 전세금용|1 2 410 200012 5 26 1 11:에스엔소프트빌 전세금용|1 2 410 200012 1 1 471:CJ빌 전세금용|1 2 410 200012 5 4 1 61:TSIS빌 전세금용|1 2 410 200012 1 1 431:링크빌 전세금용|1 2 410 200012 1 1 441:머스트빌 전세금용|1 2 410 200012 1 1 451:웹빌 전세금용|1 2 410 200012 1 1 401:메가마트 전세금용|1 2 410 200012 5 1 1 321:GS빌 전세금용|1 2 410 200012 5 1 1 281:나이스데이터 전세금용|1 2 410 200012 5 1 1 331:삼우종합건축사 전세금용|1 2 410 200012 5 21 1 11:바로빌 전세금용|1 2 410 200012 5 20 1 21:팝빌 전세금용|1 2 410 200012 5 19 1 1:더존 전세금용|1 2 410 200012 5 13 1 1:스마트빌 전세금용|1 2 410 200012 5 1 1 171:다큐빌 전세금용|1 2 410 200012 5 6 1 31:CS빌 전세금용|1 2 410 200012 1 1 411:스피드빌 전세금용|1 2 410 200012 5 11 1 81:트레이드빌 전세금용|1 2 410 200012 5 1 1 191:시큐빌 전세금용|1 2 410 200012 1 1 801:이트레이드빌 전세금용|1 2 410 200012 1 1 9:유트레이드빌 전세금용|1 2 410 200012 5 18 1 21:하나팩스빌 전세금용|1 2 410 200012 5 17 1 11:스마일EDI 전세금용|1 2 410 200012 5 15 1 11:EDI4U 전세금용|";

        //-- 모든 인증서 허용
        var ALL_CERT_POLICIES = "";
        //-- 은행 거래용 , 인터넷 뱅킹용
        var BANK_POLICIES =   "1 2 410 200004 5 4 1 101:인터넷뱅킹용|"//한국전자인증(주)SignGate
        					+ "1 2 410 2000012 1 1 101:인터넷뱅킹용(은행)|"//한국전자인증(주)SignGate
        					+ "1 2 410 200004 5 4 1 106:인터넷뱅킹용/전자민원용|"//한국전자인증(주)SignGate
        					+ "1 2 410 200004 5 4 1 108:인터넷뱅킹용/전자민원용|"//한국전자인증(주)SignGate
        					+ "1 2 410 200012 11 31:은행거래용(서명용)|"//㈜한국무역정보통신
        					+ "1 2 410 200012 1 1 101:개인은행용|"//㈜한국무역정보통신
        					+ "1 2 410 200005 1 1 4:은행거래용(서명용)|"//금융결제원Yessign
        					+ "1 2 410 200005 1 1 2:법인은행/보험/신용카드용|"//금융결제원Yessign
        					+ "1 2 410 200004 5 1 1 9:금융거래|"//한국증권전산(코스콤)
        					+ "1 2 410 200004 5 1 1 9 2:금융거래|"//한국증권전산(코스콤)
        					+ "1 2 410 200004 5 2 1 7 1:개인은행용|"//한국정보인증(주)SignGate
        					;
        //--
        var COMMON_CERT_POLICIES = "1 2 410 200012 1 1 7:전자무역용(개인)서명용|1 2 410 200012 1 1 8:전자무역용(개인)암호용|1 2 410 200012 1 1 9:전자무역용(법인)서명용|1 2 410 200012 1 1 10:전자무역용(법인)암호용|1 2 410 200012 1 1 11:전자무역용(서버)서명용|1 2 410 200012 1 1 12:전자무역용(서버)암호용|1 2 410 200012 1 1 97:테스트용서명용|1 2 410 200012 1 1 98:테스트용암호용|1 2 410 200012 1 1 13:특수목적용(개인)서명용|1 2 410 200012 1 1 14:특수목적용(개인)암호용|1 2 410 200012 1 1 15:특수목적용(법인)서명용|1 2 410 200012 1 1 16:특수목적용(법인)암호용|1 2 410 200012 5 2 1 11:CJFood특수목적용서명용|1 2 410 200012 5 2 1 12:CJFood특수목적용암호용|1 2 410 200012 1 1 5:dvcs서명용|1 2 410 200012 5 2 1 1:iCompia특수목적용서명용|1 2 410 200012 5 2 1 2:iCompia특수목적용암호용|1 2 410 200012 5 9 1 11:고려개발특수목적용서명용|1 2 410 200012 5 9 1 12:고려개발특수목적용암호용|1 2 410 200012 5 2 1 31:도레이새한특수목적용서명용|1 2 410 200012 5 2 1 32:도레이새한특수목적용암호용|1 2 410 200012 1 1 71:DocuOn 관리자용서명용|1 2 410 200012 1 1 72:DocuOn 관리자용암호용|1 2 410 200012 1 1 73:DocuOn 서버관리자용서명용|1 2 410 200012 1 1 74:DocuOn 서버관리자용암호용|1 2 410 200012 5 2 1 41:전기연구원특수목적용서명용|1 2 410 200012 5 2 1 42:전기연구원특수목적용암호용|1 2 410 200012 5 11 1 11:포스코특수강특수목적용서명용|1 2 410 200012 5 11 1 12:포스코특수강특수목적용암호용|1 2 410 200012 5 11 1 21:넥슨특수목적용서명용|1 2 410 200012 5 11 1 22:넥슨특수목적용암호용|1 2 410 200012 5 11 1 31:63시티특수목적용서명용|1 2 410 200012 5 11 1 32:63시티특수목적용암호용|1 2 410 200012 5 1 1 131:CJEnt특수목적용서명용|1 2 410 200012 5 1 1 132:CJEnt특수목적용암호용|1 2 410 200012 5 10 1 1:KOITA특수목적용서명용|1 2 410 200012 5 10 1 2:KOITA특수목적용암호용|1 2 410 200012 5 1 1 141:LS산전특수목적용서명용|1 2 410 200012 5 1 1 142:LS산전특수목적용암호용|1 2 410 200012 5 4 1 11:게임위특수목적용서명용|1 2 410 200012 5 4 1 12:게임위특수목적용암호용|1 2 410 200012 5 2 1 51:경신공업특수목적용서명용|1 2 410 200012 5 2 1 52:경신공업특수목적용암호용|1 2 410 200012 5 6 1 21:홈플러스특수목적용서명용|1 2 410 200012 5 6 1 22:홈플러스특수목적용암호용|1 2 410 200012 5 6 1 41:KCP특수목적용서명용|1 2 410 200012 5 6 1 42:KCP특수목적용암호용|1 2 410 200012 5 6 1 51:한화에스엔씨특목용서명용|1 2 410 200012 5 6 1 52:한화에스엔씨특목용암호용|1 2 410 200012 5 15 1 11:EDI4U특수목적용서명용|1 2 410 200012 5 15 1 12:EDI4U특수목적용암호용|1 2 410 200012 5 1 1 171:docubill특목용서명용|1 2 410 200012 5 1 1 172:docubill특목용암호용|1 2 410 200012 5 1 1 181:kyobolife특목용서명용|1 2 410 200012 5 1 1 182:kyobolife특목용암호용|1 2 410 200012 5 1 1 191:시큐빌 특수목적용서명용|1 2 410 200012 5 1 1 192:시큐빌 특수목적용암호용|1 2 410 200012 5 1 1 201:두산인프라코어특목용서명용|1 2 410 200012 5 1 1 202:두산인프라코어특목용암호용|1 2 410 200012 5 1 1 211:결제계좌 신고 특목용서명용|1 2 410 200012 5 1 1 212:결제계좌 신고 특목용암호용|1 2 410 200012 5 1 1 221:전자세금계산서 공용서명용|1 2 410 200012 5 1 1 222:전자세금계산서 공용암호용|1 2 410 200012 5 1 1 231:LG이노텍특수목적용서명용|1 2 410 200012 5 1 1 232:LG이노텍특수목적용암호용|1 2 410 200012 5 13 1 21:대한항공 특수목적용서명용|1 2 410 200012 5 13 1 22:대한항공 특수목적용암호용|1 2 410 200012 5 1 1 241:docube 특수목적용서명용|1 2 410 200012 5 1 1 242:docube 특수목적용암호용|1 2 410 200012 1 1 21:SSL용암호용|1 2 410 200012 1 1 301:의료용(개인)서명용|1 2 410 200012 1 1 302:의료용(개인)암호용|1 2 410 200012 5 3 1 1:광물자원공사 특수목적용서명용|1 2 410 200012 5 3 1 2:광물자원공사 특수목적용암호용|1 2 410 200012 5 2 1 21:CJ특수목적용서명용|1 2 410 200012 5 2 1 22:CJ특수목적용암호용|1 2 410 200012 5 6 1 11:토파스 특수목적용서명용|1 2 410 200012 5 6 1 12:토파스 특수목적용암호용|1 2 410 200012 5 8 1 11:하나투어특수목적용서명용|1 2 410 200012 5 8 1 12:하나투어특수목적용암호용|1 2 410 200012 1 1 61:TradeSign 관리자용서명용|1 2 410 200012 1 1 62:TradeSign 관리자용암호용|1 2 410 200012 5 4 1 21:이크레더블특목용서명용|1 2 410 200012 5 4 1 22:이크레더블특목용암호용|1 2 410 200012 5 14 1 21:평화특수목적용서명용|1 2 410 200012 5 14 1 22:평화특수목적용암호용|1 2 410 200012 5 6 1 31:CSBill특수목적용서명용|1 2 410 200012 5 6 1 32:CSBill특수목적용암호용|1 2 410 200012 5 13 1 11:삼성중공업특목용서명용|1 2 410 200012 5 13 1 12:삼성중공업특목용암호용|1 2 410 200012 5 1 1 161:전력기반조성사업센터특목용서명용|1 2 410 200012 5 1 1 162:전력기반조성사업센터특목용암호용|1 2 410 200012 5 11 1 71:korail 특수목적용서명용|1 2 410 200012 5 11 1 72:korail 특수목적용암호용|1 2 410 200012 5 16 1 11:현대정보기술 특목용서명용|1 2 410 20012 5 16 1 12:현대정보기술 특목용암호용|1 2 410 200012 5 17 1 11:Smile EDI 특수목적용서명용|1 2 410 200012 5 17 1 12:Smile EDI 특수목적용암호용|1 2 410 200012 5 18 1 11:개인특수목적용서명용|1 2 410 200012 5 18 1 12:개인특수목적용암호용|1 2 410 200012 5 1 1 251:KC코트렐 특수목적용서명용|1 2 410 200012 5 1 1 252:KC코트렐 특수목적용암호용|1 2 410 200012 5 1 1 261:동부건설 특수목적용서명용|1 2 410 200012 5 1 1 262:동부건설 특수목적용암호용|1 2 410 200012 5 1 1 121:WellCamp특수목적용서명용|1 2 410 200012 5 1 1 122:WellCamp특수목적용암호용|1 2 410 200012 5 5 1 11:asianaIDT특수목적용서명용|1 2 410 200012 5 5 1 12:asianaIDT특수목적용암호용|1 2 410 200012 5 5 1 21:asianaAbacus특수목적용서명용|1 2 410 200012 5 5 1 22:asianaAbacus특수목적용암호용|1 2 410 200012 5 1 1 83:POSTECH특수목적용(횟수제한)서명용|1 2 410 200012 5 1 1 84:POSTECH특수목적용(횟수제한)암호용|1 2 410 200012 5 4 1 31:티브로드특수목적용(개인)서명용|1 2 410 200012 5 4 1 32:티브로드특수목적용(개인)암호용|1 2 410 200012 5 4 1 1:Vaatz특수목적용서명용|1 2 410 200012 5 4 1 2:Vaatz특수목적용암호용|1 2 410 200012 5 11 1 41:인희특수목적용서명용|1 2 410 200012 5 11 1 42:인희특수목적용암호용|1 2 410 200012 5 12 1 1:한국환경공단특수목적용서명용|1 2 410 200012 5 12 1 2:한국환경공단특수목적용암호용|1 2 410 200012 5 13 1 1:SmartBill특수목적용서명용|1 2 410 200012 5 13 1 2:SmartBill특수목적용암호용|1 2 410 200012 5 11 1 51:고속도로관리공단특수목적용서명용|1 2 410 200012 5 11 1 52:고속도로관리공단특수목적용암호용|1 2 410 200012 1 1 3:전자거래범용전환(사업자)서명용|1 2 410 200012 1 1 4:전자거래범용전환(사업자)암호용|1 2 410 200012 5 14 1 11:M2B특수목적용서명용|1 2 410 200012 5 14 1 12:M2B특수목적용암호용|1 2 410 200012 5 4 1 41:환경관리공단특수목적용서명용|1 2 410 200012 5 4 1 42:환경관리공단특수목적용암호용|1 2 410 200012 5 1 1 151:아모레특수목적용(개인사업자)서명용|1 2 410 200012 5 1 1 152:아모레특수목적용(개인사업자)암호용|1 2 410 200012 5 1 1 153:아모레특수목적용(법인사업자)서명용|1 2 410 200012 5 1 1 154:아모레특수목적용(법인사업자)암호용|1 2 410 200012 5 2 1 61:조폐공사특수목적용서명용|1 2 410 200012 5 2 1 62:조폐공사특수목적용암호용|1 2 410 200012 1 1 121:나라장터특수목적용(수요기관)서명용|1 2 410 200012 1 1 122:나라장터특수목적용(수요기관)암호용|1 2 410 200012 5 11 1 61:이랜드시스템특수목적용서명용|1 2 410 200012 5 11 1 62:이랜드시스템특수목적용암호용|1 2 410 200012 5 1 1 21:LGCNS특수목적용(폐기)서명용|1 2 410 200012 5 1 1 22:LGCNS특수목적용(폐기)암호용|1 2 410 200012 5 1 1 31:삼성석유화학특수목적용서명용|1 2 410 200012 5 1 1 32:삼성석유화학특수목적용암호용|1 2 410 200012 5 1 1 41:제일모직특수목적용서명용|1 2 410 200012 5 1 1 42:제일모직특수목적용암호용|1 2 410 200012 5 1 1 51:SK네트웍스특수목적용서명용|1 2 410 200012 5 1 1 52:SK네트웍스특수목적용암호용|1 2 410 200012 5 1 1 61:동양제철화학특수목적용서명용|1 2 410 200012 5 1 1 62:동양제철화학특수목적용암호용|1 2 410 200012 5 1 1 11:LGM특수목적용(폐기)서명용|1 2 410 200012 5 1 1 12:LGM특수목적용(폐기)암호용|1 2 410 200012 5 1 1 71:일진그룹특수목적용서명용|1 2 410 200012 5 1 1 72:일진그룹특수목적용암호용|1 2 410 200012 5 1 1 81:POSTECH특수목적용서명용|1 2 410 200012 5 1 1 82:POSTECH특수목적용암호용|1 2 410 200012 5 1 1 91:한화유통특수목적용서명용|1 2 410 200012 5 1 1 92:한화유통특수목적용암호용|1 2 410 200012 1 1 201:LGM특수목적용서명용|1 2 410 200012 1 1 202:LGM특수목적용암호용|1 2 410 200012 1 1 111:기획재정부특수목적용서명용|1 2 410 200012 5 1 1 112:기획재정부특수목적용암호용|1 2 410 200012 5 1 1 101:풍림산업특수목적용서명용|1 2 410 200012 5 1 1 102:풍림산업특수목적용암호용|1 2 410 200012 5 1 1 111:SK브로드밴드특수목적용서명용|1 2 410 200012 5 1 1 112:SK브로드밴드특수목적용암호용|1 2 410 200012 1 1 211:화학물질관리협회특수목적용서명용|1 2 410 200012 1 1 212:화학물질관리협회특수목적용암호용|1 2 410 200012 1 1 1:전자거래범용(개인)서명용|1 2 410 200012 1 1 2:전자거래범용(개인)암호용|1 2 410 200004 5 9 1:KCDSA서명용|1 2 410 200004 5 9 1:KCDSA암호용|1 2 410 200012 1 1 3:전자거래범용(사업자용)서명용|1 2 410 200012 1 1 4:전자거래범용(사업자용)암호용|1 2 410 200012 1 1 5:전자거래범용(서버)서명용|1 2 410 200012 1 1 6:전자거래범용(서버)암호용|1 2 410 200012 5 1 1 271:엘지엔시스 특목용서명용|1 2 410 200012 5 1 1 272:엘지엔시스 특목용암호용|1 2 410 200012 5 1 1 281:나이스데이터 특목용서명용|1 2 410 200012 5 1 1 282:나이스데이터 특목용암호용|1 2 410 200012 5 11 1 81:TradeBill 특수목적용서명용|1 2 410 200012 5 11 1 82:TradeBill 특수목적용암호용|1 2 410 200012 5 1 1 291:넥스원 특수목적용서명용|1 2 410 200012 5 1 1 292:넥스원 특수목적용암호용|1 2 410 200012 5 1 1 301:Smarttax 특수목적용서명용|1 2 410 200012 5 1 1 302:Smarttax 특수목적용암호용|1 2 410 200012 1 1 401:MegaMart 특수목적용서명용|1 2 410 200012 1 1 402:MegaMart 특수목적용암호용|1 2 410 200012 1 1 401:메가마트 특수목적용(3개월용)서명용|1 2 410 200012 1 1 402:메가마트 특수목적용(3개월용)암호용|1 2 410 200012 5 17 1 11:전자세금계산서 특수목적용서명용|1 2 410 200012 5 17 1 12:전자세금계산서 특수목적용암호용|1 2 410 200012 5 1 1 311:오뚜기 특수목적용서명용|1 2 410 200012 5 1 1 312:오뚜기 특수목적용암호용|1 2 410 200012 5 19 1 1:더존 특수목적용서명용|1 2 410 200012 5 19 1 2:더존 특수목적용암호용|1 2 410 200012 5 11 1 91:산학연협회특목용서명용|1 2 410 200012 5 11 1 92:산학연협회특목용암호용|1 2 410 200012 5 6 1 61:아이마켓코리아특목용서명용|1 2 410 200012 5 6 1 62:아이마켓코리아특목용암호용|1 2 410 200012 5 6 1 71:디앤샵 전자계약시스템 전용서명용|1 2 410 200012 5 6 1 72:디앤샵 전자계약시스템 전용암호용|1 2 410 200012 1 1 411:스피드빌전용서명용|1 2 410 200012 1 1 412:스피드빌전용암호용|1 2 410 200012 5 20 1 11:엔터빌특목용서명용|1 2 410 200012 5 20 1 12:엔터빌특목용암호용|1 2 410 200012 5 20 1 21:팝빌특목용서명용|1 2 410 200012 5 20 1 22:팝빌특목용암호용|1 2 410 200012 5 21 1 11:바로빌특목용서명용|1 2 410 200012 5 21 1 12:바로빌특목용암호용|1 2 410 200012 1 1 801:etb서비스특목용서명용|1 2 410 200012 1 1 802:etb서비스특목용암호용|1 2 410 200012 5 18 1 21:하나팩스빌 특수목적용서명용|1 2 410 200012 5 18 1 22:하나팩스빌 특수목적용암호용|1 2 410 200012 1 1 421:엔투비특수목적용서명용|1 2 410 200012 1 1 422:엔투비특수목적용암호용|1 2 410 200012 5 6 1 81:농심전자계약전용서명용|1 2 410 200012 5 6 1 82:농심전자계약전용암호용|1 2 410 200012 5 4 1 51:대학구매사이트전용서명용|1 2 410 200012 5 4 1 52:대학구매사이트전용암호용|1 2 410 200012 5 4 1 61:tsisBill 전용 인증서서명용|1 2 410 200012 5 4 1 62:tsisBill 전용 인증서암호용|1 2 410 200012 5 22 1 11:세무신고닷컴특목용서명용|1 2 410 200012 5 22 1 12:세무신고닷컴특목용암호용|1 2 410 200012 5 23 1 1:모두웨어특목용서명용|1 2 410 200012 5 23 1 2:모두웨어특목용암호용|1 2 410 200012 1 1 131:국세청전자세금계산용서명용|1 2 410 200012 1 1 132:국세청전자세금계산용암호용|1 2 410 200012 5 24 1 11:한전KDN특목용서명용|1 2 410 200012 5 24 1 12:한전KDN특목용암호용|1 2 410 200012 5 25 1 11:스카이빌 특수목적용서명용|1 2 410 200012 5 25 1 12:스카이빌 특수목적용암호용|1 2 410 200012 5 1 1 321:GSBill특목용서명용|1 2 410 200012 5 1 1 322:GSBill특목용암호용|1 2 410 200012 5 1 1 331:삼우특수목적용서명용|1 2 410 200012 5 1 1 332:삼우특수목적용암호용|1 2 410 200012 1 1 431:링크빌특목용서명용|1 2 410 200012 1 1 432:링크빌특목용암호용|1 2 410 200012 1 1 801:제일모직 용도제한용서명용|1 2 410 200012 1 1 802:제일모직 용도제한용암호용|1 2 410 200012 1 1 441:머스트빌특수목적용서명용|1 2 410 200012 1 1 442:머스트빌특수목적용암호용|1 2 410 200012 1 1 451:웹빌특수목적용서명용|1 2 410 200012 1 1 452:웹빌특수목적용암호용|1 2 410 200012 5 1 1 341:KT파워텔특목용서명용|1 2 410 200012 5 1 1 342:KT파워텔특목용암호용|1 2 410 200012 5 1 1 351:네오위즈벅스특목용서명용|1 2 410 200012 5 1 1 352:네오위즈벅스특목용암호용|1 2 410 200012 1 1 461:G4B 특수목적용서명용|1 2 410 200012 1 1 462:G4B 특수목적용암호용|1 2 410 200012 5 26 1 11:SNSoft전자세금계산서용서명용|1 2 410 200012 5 26 1 12:SNSoft전자세금계산서용암호용|1 2 410 200012 1 1 471:cjbill특수목적용서명용|1 2 410 200012 1 1 472:cjbill특수목적용암호용|1 2 410 200012 5 27 1 1:코참빌특수목적용서명용|1 2 410 200012 5 27 1 2:코참빌특수목적용암호용|1 2 410 200012 5 4 1 71:kodit전자세금계산서용서명용|1 2 410 200012 5 4 1 72:kodit전자세금계산서용암호용|1 2 410 200012 5 1 1 361:환경산업기술원특목용서명용|1 2 410 200012 5 1 1 362:환경산업기술원특목용암호용|1 2 410 200012 1 1 481:청우 특수목적용서명용|1 2 410 200012 1 1 482:청우 특수목적용암호용|1 2 410 200012 1 1 491:오라이언특목용서명용|1 2 410 200012 1 1 492:오라이언특목용암호용|1 2 410 200012 1 1 4101:블루웹특수목적용서명용|1 2 410 200012 1 1 4102:블루웹특수목적용암호용|1 2 410 200012 1 1 4111:이상네트웍스특목용서명용|1 2 410 200012 1 1 4112:이상네트웍스특목용암호용|1 2 410 200012 5 11 1 101:기맥특목용서명용|1 2 410 200012 5 11 1 102:기맥특목용암호용|1 2 410 200012 1 1 4121:v-money특목용서명용|1 2 410 200012 1 1 4122:v-money특목용암호용|1 2 410 200012 5 28 1 11:롯데마트전자계약특목용서명용|1 2 410 200012 5 28 1 12:롯데마트전자계약특목용암호용|1 2 410 200012 1 1 4131:KG티지특목용서명용|1 2 410 200012 1 1 4132:KG티지특목용암호용|1 2 410 200012 5 28 1 21:코리아세븐특목용서명용|1 2 410 200012 5 28 1 22:코리아세븐특목용암호용|1 2 410 200012 5 18 1 31:이니스프리개인특목용서명용|1 2 410 200012 5 18 1 32:이니스프리개인특목용암호용|1 2 410 200012 5 29 1 11:동부제철 특수목적용서명용|1 2 410 200012 5 29 1 12:동부제철 특수목적용암호용|1 2 410 200012 5 18 1 41:에뛰드개인특목용서명용|1 2 410 200012 5 18 1 42:에뛰드개인특목용암호용|1 2 410 200012 1 1 471:스포츠토토특목용서명용|1 2 410 200012 1 1 472:스포츠토토특목용암호용|1 2 410 200012 1 1 1:전자거래범용(개인-단기)서명용|1 2 410 200012 1 1 2:전자거래범용(개인-단기)암호용|1 2 410 200012 5 4 1 81:한국생산기술연구원특목용서명용|1 2 410 200012 5 4 1 82:한국생산기술연구원특목용암호용|1 2 410 200012 5 29 1 21:소방방재청 전자계약용서명용|1 2 410 200012 5 29 1 22:소방방재청 전자계약용암호용|1 2 410 200012 5 18 1 13:아모레전자약정법인특목용서명용|1 2 410 200012 5 18 1 14:아모레전자약정법인특목용암호용|1 2 410 200012 5 18 1 33:이니스프리법인특목용서명용|1 2 410 200012 5 18 1 34:이니스프리법인특목용암호용|1 2 410 200012 5 18 1 43:에뛰드법인특목용서명용|1 2 410 200012 5 18 1 44:에뛰드법인특목용암호용|1 2 410 200012 5 19 1 1:전자세금계산서 전용서명용|1 2 410 200012 5 19 1 2:전자세금계산서 전용암호용|1 2 410 200012 5 17 1 11:빌메이트 특수목적용서명용|1 2 410 200012 5 17 1 12:빌메이트 특수목적용암호용|1 2 410 200012 1 1 4141:KISCON 특수목적용서명용|1 2 410 200012 1 1 4142:KISCON 특수목적용암호용|1 2 410 200012 1 1 4151:GXS홈플러스 특수목적용서명용|1 2 410 200012 1 1 4152:GXS홈플러스 특수목적용암호용|1 2 410 200012 5 1 1 23:LG CNS 전자구매시스템용서명용|1 2 410 200012 5 1 1 24:LG CNS 전자구매시스템용암호용|1 2 410 200012 1 1 4151:GXS 홈플러스 특목용서명용|1 2 410 200012 1 1 4152:GXS 홈플러스 특목용암호용|1 2 410 200012 5 1 1 203:두산산업차량 특수목적용서명용|1 2 410 200012 5 1 1 204:두산산업차량 특수목적용암호용|1 2 410 200012 5 30 1 1:CJ헬로비전특목용서명용|1 2 410 200012 5 30 1 2:CJ헬로비전특목용암호용|1 2 410 200012 5 6 1 91:GS홈쇼핑특목용서명용|1 2 410 200012 5 6 1 92:GS홈쇼핑특목용암호용|1 2 410 200012 5 6 1 101:쿠팡전자계약시스템전용서명용|1 2 410 200012 5 6 1 102:쿠팡전자계약시스템전용암호용|1 2 410 200012 5 4 1 91:노무시스템전용서명용|1 2 410 200012 5 4 1 92:노무시스템전용암호용|1 2 410 200012 5 29 1 31:파리크라상전자계약전용서명용|1 2 410 200012 5 29 1 32:파리크라상전자계약전용암호용|1 2 410 200012 1 1 4161:중소기업청특수목적용서명용|1 2 410 200012 1 1 4162:중소기업청특수목적용암호용|1 2 410 200012 5 18 1 61:풍산특수목적용서명용|1 2 410 200012 5 18 1 62:풍산특수목적용암호용|1 2 410 200012 1 1 901:샵메일특수목적용서명용(개인)|1 2 410 200012 1 1 902:샵메일특수목적용암호용(개인)|1 2 410 200012 1 1 903:샵메일특수목적용서명용(법인)|1 2 410 200012 1 1 904:샵메일특수목적용암호용(법인)|1 2 410 200012 5 31 1 11:이니시스특수목적용서명용|1 2 410 200012 5 31 1 12:이니시스특수목적용암호용|1 2 410 200012 5 18 1 71:SFA특수목적용서명용|1 2 410 200012 5 18 1 72:SFA특수목적용암호용|1 2 410 200004 5 1 1 5:전자거래범용(개인용)|1 2 410 200004 5 1 1 7:전자거래범용(기업용)|1 2 410 200004 5 2 1 1:전자거래범용(기업용)|1 2 410 200004 5 2 1 2:전자거래범용(개인용)|1 2 410 200004 5 3 1 1:전자거래범용(기관용)|1 2 410 200004 5 3 1 2:전자거래범용(기업용)|1 2 410 200004 5 3 1 9:전자거래범용(개인용)|1 2 410 200004 5 4 1 1:전자거래범용(개인용)|1 2 410 200004 5 4 1 2:전자거래범용(기업용)|1 2 410 200005 1 1 1:전자거래범용(개인용)|1 2 410 200005 1 1 5:전자거래범용(기업용)|1 2 410 200012 1 1 1:전자거래범용(개인용)|1 2 410 200012 1 1 3:전자거래범용(기업용)|1 2 410 200005 1 1 4:개인뱅킹|1 2 410 200005 1 1 2:기업뱅킹|";

        // ============================================================== //

        // == 인증서 저장매체 관련 	===================================== //
        var HARD_DISK 		= 0;
        var REMOVABLE_DISK 	= 1;
        var IC_CARD 		= 2;
        var PKCS11	 		= 3;
        var MOBILE_PHONE	 		= 4;
        // ============================================================== //

        // == 인증서 Type 관련 		===================================== //
        var CERT_TYPE_SIGN 		= 1;
        var CERT_TYPE_KM 		= 2;
        var DATA_TYPE_PEM		= 0;
        var DATA_TYPE_BASE64 	= 1;
        var DATA_TYPE_FILE		= 1;
        // ============================================================== //

        // == 기타 Type 관련 		===================================== //
        var DATA_TYPE_DATA		= 0;
        var DATA_TYPE_ORIGINAL	= 2;
        var FILE_TYPE_DATA		= 0;
        var FILE_TYPE_CERT		= 1;
        var FILE_TYPE_ENCKEY	= 2;
        // ============================================================== //

        // == HASH 알고리즘		========================================= //
        var HASH_ID_MD5				= 1;
        var HASH_ID_RIPEMD160		= 2;
        var HASH_ID_SHA1			= 3;		// 기본적으로 사용함.
        var HASH_ID_HAS160			= 4;
        var HASH_ID_SHA256			= 5;
        var HASH_ID_SHA384			= 6;
        var HASH_ID_SHA512			= 7;
        // ============================================================== //

        // == 대칭키 알고리즘 & 모드	===================================== //
        //var SYMMETRIC_ID_DES		= 1;		// 지원안함
        var SYMMETRIC_ID_3DES		= 2;		// 기본적으로 사용함.
        var SYMMETRIC_ID_SEED		= 3;
        var SYMMETRIC_MODE_ECB		= 1;
        var SYMMETRIC_MODE_CBC		= 2;		// 기본적으로 사용함.
        var SYMMETRIC_MODE_CFB		= 3;
        var SYMMETRIC_MODE_OFB		= 4;
        // ============================================================== //

        // == 인증서 정보 관련 설정값		================================= //
        var CERT_ATTR_VERSION						= 1;
        var CERT_ATTR_SERIAL_NUBMER 				= 2;
        var CERT_ATTR_SIGNATURE_ALGO_ID 			= 3;
        var CERT_ATTR_ISSUER_DN 					= 4;
        var CERT_ATTR_SUBJECT_DN 					= 5;
        var CERT_ATTR_SUBJECT_PUBLICKEY_ALGO_ID 	= 6;
        var CERT_ATTR_VALID_FROM 					= 7;
        var CERT_ATTR_VALID_TO 						= 8;
        var CERT_ATTR_PUBLIC_KEY 					= 9;
        var CERT_ATTR_SIGNATURE 					= 10;
        var CERT_ATTR_KEY_USAGE 					= 11;
        var CERT_ATTR_AUTORITY_KEY_ID 				= 12;
        var CERT_ATTR_SUBJECT_KEY_ID 				= 13;
        var CERT_ATTR_EXT_KEY_USAGE 				= 14;
        var CERT_ATTR_SUBJECT_ALT_NAME 				= 15;
        var CERT_ATTR_BASIC_CONSTRAINT 				= 16;
        var CERT_ATTR_POLICY 						= 17;
        var CERT_ATTR_CRLDP 						= 18;
        var CERT_ATTR_AIA 							= 19;
        var CERT_ATTR_VALID 						= 20;
        var CERT_ATTR_SAN_REALNAME					= 21;
        // ============================================================== //

        // == 인증서 Type 관련 		===================================== //
        var DATA_TYPE_CACERT 		= 1;
        var DATA_TYPE_SIGN_CERT 	= 2;
        var DATA_TYPE_KM_CERT		= 3;
        var DATA_TYPE_CRL	 		= 4;
        var DATA_TYPE_ARL	 		= 5;
        // ============================================================== //

        // == 입출력 데이터 Type 관련 		==============================//
        var INOUT_DATA_TYPE_STRING		= 101;
        var INOUT_DATA_TYPE_BASE64 		= 102;
        var INOUT_DATA_TYPE_FILE		= 103;
        // ============================================================== //

        
        //**************************************************************************************//

        //** 환경 설정				************************************************************//

        // 인증서 선택시 기본 매체.
        var STORAGE_TYPE = HARD_DISK;

        // 보고자하는 인증서 정책 모음.
        var POLICIES = FIRST_COMP_CERT_POLICIES + FIRST_INDI_CERT_POLICIES;
        var SET_POLICIES = "";

        // 서명시 필요한 Config 조절.
        // 서명 생성시 인증서 포함 여부, 0 : 서명자 인증서만 포함.(기본), 1 : 서명자 & CA 인증서 포함.
        var INC_CERT_SIGN 		= 0;
        // 서명 생성시 CRL 인증서 포함 여부, 0 : 미포함 (기본), 1 : 포함,
        var INC_CRL_SIGN		= 0;
        // 서명 생성시 서명시간 포함 여부, 0 : 미포함, 1 : 포함(기본)
        var INC_SIGN_TIME_SIGN	= 0;
        // 서명 생성시 원본데이타 포함 여부 , 0 : 미포함, 1 : 포함(기본)
        var INC_CONTENT_SIGN 	= 1;

        // 인증서 검증에 필요한 Config 조절
        // 사용자 인증서 검증 조건, 0 : CRL 체크 안함. 1 : 현재시간기준으로 유효한 CRL 사용(기본), 2 : 현재 시간기준으로 유효한 CRL 못 구할 시 이전 CRL 사용.
        var USING_CRL_CHECK		= 1;
        // CA 인증서 검증 조건, 0 : ARL 체크 안함. 1 : 현재시간기준으로 유효한 ARL 사용(기본), 2 : 현재 시간기준으로 유효한 CRL 못 구할 시 이전 ARL 사용.
        var USING_ARL_CHECK		= 1;

        var CTL_INFO = "";

        // Envelop 테스트시 사용하는 상대방 인증서
        var pemSignCert, pemSignKey, pemKMCert, pemKMKey;
        pemSignCert = "-----BEGIN CERTIFICATE-----MIIFijCCBHKgAwIBAgIEWYHSVDANBgkqhkiG9w0BAQsFADBPMQswCQYDVQQGEwJLUjESMBAGA1UECgwJVHJhZGVTaWduMRUwEwYDVQQLDAxBY2NyZWRpdGVkQ0ExFTATBgNVBAMMDFRyYWRlU2lnbkNBMjAeFw0xMjA3MDQwNjIzMDJaFw0xMzA3MDYwNTUyMDlaMGExCzAJBgNVBAYTAktSMRIwEAYDVQQKDAlUcmFkZVNpZ24xEzARBgNVBAsMCkxpY2Vuc2VkQ0ExDjAMBgNVBAsMBUtUTkVUMRkwFwYDVQQDDBDthYzsiqTtirgoS1RORVQpMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvPExzL5m+anrkH+gg1CFfG3RhdP/dtN184idc1Jo5HjppkDQ28zy5Fv3/zecepIFjrXa6E7RaiuB+fPZ9+NPLPTelJu9oIXcc4ki0T3hNUTA7j49jBP+Lvvq0kS1wSmZCsDxgu3IYeHm3GRHNsKt4F8dVluyAi/CEwPOnRR1PEHkCPVzaypVan9pln4kh8nBP23Ek0MIvBfYjDUSSGW72AsKJyHB3hNtCQWRlcYyKgg+ihDUcX0mWNdBIE8WgM2oAj5roNwQOcuX1OSROY1lgu7jmb+mqSFz8KJ8RIqYcWB802EeU3mASL74pqCbElDmkQEZiVzFmGbIQYM6oURMlwIDAQABo4ICWjCCAlYwgY8GA1UdIwSBhzCBhIAUTV1WCgcD34PK89Vtjxn8EqyQooqhaKRmMGQxCzAJBgNVBAYTAktSMQ0wCwYDVQQKDARLSVNBMS4wLAYDVQQLDCVLb3JlYSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eSBDZW50cmFsMRYwFAYDVQQDDA1LSVNBIFJvb3RDQSA0ggIQCTAdBgNVHQ4EFgQUe3ektBhbm75fTFRGnMHh55ACIswwDgYDVR0PAQH/BAQDAgbAMHoGA1UdIAEB/wRwMG4wbAYJKoMajJpMAQEDMF8wLgYIKwYBBQUHAgIwIh4gx3QAIMd4yZ3BHLKUACCs9cd4x3jJncEcACDHhbLIsuQwLQYIKwYBBQUHAgEWIWh0dHA6Ly93d3cudHJhZGVzaWduLm5ldC9jcHMuaHRtbDBoBgNVHREEYTBfoF0GCSqDGoyaRAoBAaBQME4MCe2FjOyKpO2KuDBBMD8GCiqDGoyaRAoBAQEwMTALBglghkgBZQMEAgGgIgQgUCC6GCptgXgiyPT1lWK3M+7zdNOD6uIvWkSICZxhg6AwZQYDVR0fBF4wXDBaoFigVoZUbGRhcDovL2xkYXAudHJhZGVzaWduLm5ldDozODkvY249Y3JsMWRwNjAsb3U9Y3JsZHAyLG91PUFjY3JlZGl0ZWRDQSxvPVRyYWRlU2lnbixjPUtSMEYGCCsGAQUFBwEBBDowODA2BggrBgEFBQcwAYYqaHR0cDovL29jc3AudHJhZGVzaWduLm5ldDoxODAwMC9PQ1NQU2VydmVyMA0GCSqGSIb3DQEBCwUAA4IBAQA/g4SEXMZOHsY7MA6npjGukUwwJHhpBtcPIFxTqxHIP417/I2r2IZ/GlT0EiH0HAPkc6nYoWpo6At0JfGHE9jxgg7+R/b6AO3wXOOByZ8TEXBT5Av/6RDipCtkcaxoc3foo/rvno0kbRZoIuBedw9AuN1vwA7lH+P4wt12WY8xKcKLk3IGj3Mx5TPqQSNT0yypg9vbUF3kIyhnL4U5gBqYEyhYk0mmyIgp2djTC6uE2vzSyCBc87dGrgxRlvwee7Iznq8q+wQc1/M3dYBDiTSzFjLewrnzMxmBCcYNRCnFRtcu2NdbDbgmuYPqcXQeSUkVLEvl4SE7w0w6jP75+Df2-----END CERTIFICATE-----";
        pemSignKey = "-----BEGIN ENCRYPTED PRIVATE KEY-----MIIFPjBIBgkqhkiG9w0BBQ0wOzAbBgkqhkiG9w0BBQwwDgQIbc2v5UAPe6YCAgQAMBwGCCqDGoyaRAEEBBCGhPc9Oxm+oZvCTuwi20sfBIIE8GjsMhH2wgbjIaOwHiipO2tDDkaKhtYCSugTnpgl/eff2gez7x2fb53Mi4w4K1vgBk0Aj+my455GHDAQB5B5+LDXRwVxjrrOoiJregTjV5Xuxorzp5scGqEsIaB8q2wye2S7tOC2CFRD3dgs7UuiUXnHvEQDuJJqyomEeIbnwKfu2Ya0Hrs/MSEoMAVStlIdefuzDaapNEYWx0/NNWwb6imyRuQ7xKMjrTngdC7eWa4Fkddr4o+kOJCQ58qFmgZ21UI9O5QwU4SAswSFR7dH+Bnnj30loVsPEWimAnnWcz239OJaOFUh0qpXAS+AtzeV/hiFCJE95/xYjNDZf92HlT/ZpT/EPa/EIyEe2XPHybjCPhlDOFQxxCDaRpCvEGKk4EHPlQiJU7Yo/R2hVD4UrDYrUUkb5fkz9zlrbfYJltW54qPdf+SLIln9z+ImyM7cMqkALyIlkCD7cq7rLlBV574A/gyUI0xbh5PiKT9nVq5vIe6ML3rSctZK2gB2RIXfMuTQ42uhud7l+49b7OlY05hNnJIpVjbiYKKsn6LHVEwv785FZn165PN27sSa+s5alMJixkBWie/fPpYsZzuHi9SOzs4nq/7LDs4uRhM3vB5+ljetwauhXQ2N7F6X/3eHleCJKGmzYW4Olm0pz/jIPn/DTYWrOpCez3SLXdf8W4Ja+g1ebwiuB3Pkwt5xB+dj8ueqge3+vUIrlxJEBIXUOGunc/0aaWD3keP6+byWYcc4Zn7OIZGbDVpHrn7DDGy/odIs0zQ/XBM+LQySbk59+UaT/Xb3XF7D2nc4K9vw+IUO3NZV4mkUBiBIr2IsL0f3I2yBLLDnV3ko2r1pRqk/MG54pIVJvCaRzrBpSe8eq3GVdQI+fQngKojSyQIFBd4vlaN3P+pZkcwQjH+KXD2RCyVPo8ZT6yVoS6gkMDiHEFtLd8lIEb15NUUxkfANTm4RypeUjJeGOMmHm88JSgd+rT1tCgnX9u1Z/47h6fFWoq+njjESRTO+rUXRttPg10Oc7nQot6Dae3Jxh/Asz32CvOvxRZNKyNlLeWPA3Z3CZsAC9VmBCge0Sd/SUbhy0hWgRLpJF482KvAwHOtu/5aH1+kEEWnbIT9V2sJOhzfv7ZLwcRikIPCIlviddMJg/OAU69o8hUd6CcvIYy+3SET/pG4Mqbz7kNjT4QNot6AtyTKQFjtLVT+rjAa7rcaonKCpyLV8bQ/2nUyCqPFRYhQTeyn7Xh7sGwDfqfYiXW0Vyt1EErvwqEqogtFe3krvMMPhzWNmoSXq3SUpGWI/JJ/c5dsBwpkIFbrHGtiGkHBzrniqdzJvYQdihuKR0menuJ5emAYI//MeEEiRx19cCGfK2FVju6WgiiaGM7cEbMtRHNeJpc5KzYTnO2NnHLmLN7XhBMn0i+OzRe1Uyv+gi4b/qfhF5Kyyx1B3Rh38Oa6jaPHqpO+LhsmMRFte1iCz3hjO7mSU1Lg/G2ukx5jmYwlT8hgcdQVuTHK7LbPdTqgZTMxa8gXQ/TD7SmLpyzn7AOr5DWnjbESJuaNasQzJlDZljZ219R/fRHeFHw3Ox7ia6FSZ9v7i5i+7SUombVGfiwo/OMGcZ75D6pC2TtqsquuixsgnX53983lVtrP/hJYA0hd89bS19VaIB8xKxvVI7oD/43OsNiAud8Me7shqLJSwm7o=-----END ENCRYPTED PRIVATE KEY-----";
        pemKMCert = "-----BEGIN CERTIFICATE-----MIIFIDCCBAigAwIBAgIEWYHSVTANBgkqhkiG9w0BAQsFADBPMQswCQYDVQQGEwJLUjESMBAGA1UECgwJVHJhZGVTaWduMRUwEwYDVQQLDAxBY2NyZWRpdGVkQ0ExFTATBgNVBAMMDFRyYWRlU2lnbkNBMjAeFw0xMjA3MDQwNjIzMDJaFw0xMzA3MDYwNTUyMDlaMGExCzAJBgNVBAYTAktSMRIwEAYDVQQKDAlUcmFkZVNpZ24xEzARBgNVBAsMCkxpY2Vuc2VkQ0ExDjAMBgNVBAsMBUtUTkVUMRkwFwYDVQQDDBDthYzsiqTtirgoS1RORVQpMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1XVxr5Ukm79GJvafnc+PyE4Ikoy3d5ukaUe4fmAWsvWAgaPPJM/z+AZ4C5Kbf9dRYJDvgg5eCchAn2JkMXlZVq46pxlOJfsp9/ehKcISG/pwi9a6mBoyVYoTUtCNNwYOQOaZ1VQhbY6BUARKG+owtm/jyLtTBKB5ieM1GAMw+BWjDYcMjlGbZdaX6SNQhz7X0w55sN/ZAAAdOTeiLSFpvAMwUENp7BCSCkctUmkwg1CkA9xsQpsfJQAyopLLnOBMNgy7ipJ6OW48wzjBvlJuojBSkHqCTqhCAnM/gLi5jYZQUMYak5dLwjyvNblkYosOX6rKuRO5s3xdEqJ8HE8NDQIDAQABo4IB8DCCAewwgY8GA1UdIwSBhzCBhIAUTV1WCgcD34PK89Vtjxn8EqyQooqhaKRmMGQxCzAJBgNVBAYTAktSMQ0wCwYDVQQKDARLSVNBMS4wLAYDVQQLDCVLb3JlYSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eSBDZW50cmFsMRYwFAYDVQQDDA1LSVNBIFJvb3RDQSA0ggIQCTAdBgNVHQ4EFgQUezD3ouSPagh+rOL4lGJJ9p8hdLEwDgYDVR0PAQH/BAQDAgUgMHoGA1UdIAEB/wRwMG4wbAYJKoMajJpMAQEEMF8wLgYIKwYBBQUHAgIwIh4gx3QAIMd4yZ3BHLKUACCs9cd4x3jJncEcACDHhbLIsuQwLQYIKwYBBQUHAgEWIWh0dHA6Ly93d3cudHJhZGVzaWduLm5ldC9jcHMuaHRtbDBlBgNVHR8EXjBcMFqgWKBWhlRsZGFwOi8vbGRhcC50cmFkZXNpZ24ubmV0OjM4OS9jbj1jcmwxZHA2MCxvdT1jcmxkcDIsb3U9QWNjcmVkaXRlZENBLG89VHJhZGVTaWduLGM9S1IwRgYIKwYBBQUHAQEEOjA4MDYGCCsGAQUFBzABhipodHRwOi8vb2NzcC50cmFkZXNpZ24ubmV0OjE4MDAwL09DU1BTZXJ2ZXIwDQYJKoZIhvcNAQELBQADggEBAEmdLVbfeEnNk40mnJn0uU0Yy/qTeDKW7k+Nqt9QIB3zxl16L32yKY7aabXC2Bb9b/vSQhvdUZQdV6msQWRy7aKXCaxkNVZPNxRWzUNGcXP4sagOJ9Z8nxidN9CZBcnlhNSceEtgQtKaXKBme6QzG/8WN0wyQSSFmfsxQK8+J+wHEbL2OL+KT7h0R0aRu7uohsykJGIR05L5+H/SuKl73t/nvIO+L17hMqWgdyeeHoe4A0VM6HsOtHqZXD2DDZbaBoGgIomLadabjTZasNr3F7nyvKTuKWLjweTvGd8fThSJ0Tk+A1/4jlpR4oPVcL0r4CL9dSF0IEQ5GDBK4n0g6Vk=-----END CERTIFICATE-----";
        pemKMKey = "-----BEGIN ENCRYPTED PRIVATE KEY-----MIIFHjBIBgkqhkiG9w0BBQ0wOzAbBgkqhkiG9w0BBQwwDgQI1W5pGAtqRLkCAgQAMBwGCCqDGoyaRAEEBBCuENCZRD3nygBT1GS4ty/5BIIE0Em6dLEepOYMGphDvXHUi1iTPmgg6MiTXG8CZERMilBYR/gtFQSerj38EiiYjlPQ2rU9zt1C9mTjsaeRrJVLDLSScEgpt9UBXiqjLsqQi7jkvvcjqGWiaUWUIn2lGSyUPgPBkfXkzvSz9lgp5SkM7LA9mp5vh+DiXsqohqLCL6gBs4V30cYymMofAs+vxk5dX7QLdfOKHU80+d5We+OpjVe5ezQ46fOAF7fMtoSluphpYcsR7xWzE0LTqu0/77uDvsBX9fySu6p0a1TtnUmRb7zkPGD31umlKcMR71eyPtwmltcDHeNW5098/riIbZ//C1r1DhykJ7tWd443n312nKipzle18W9K7McWu7Eyj3tsvM9anbsfjana0Ordq5q0yK9cBuL175PjUeRrH4boKphtJnW149/T8q6/wizubI3DCwun+5Y/Ei+S82ZJnU4wBiT1E1kEC006D631QWpVF4rpxt/5fv+FvdsRsAm/TplhqvCE7y0jxHg90sZnm97L2YFKGa56VwNgvrjHJJWDr46nt092h/el3eZUPiirmevO/S8via0gRu3i43/i4WPypkf5C9QF+RwS1f7RRbSaXhQcd8TM+b903GtL5+xMQ+WzwIJHy9HYXzxWCEnKjHJaX9uizkRNYSuM2d76CC/vYr5bNjOFtBmmzvsYcep49sat3wczAKSTMqqgHnkN6XJd8YvUUoTuQmbQJNycRsi3MNcYOgzBjgi/t/6RXx3T5/TqIVCazSqqAVBzQlY/S6SM9tXI2Dxzg9RrVo9lGSmAtwzZy7+eUuAFxbOpBSvh88gXhVmeJq7uXbqydJ/N07rtDIZhRXCPV8euVRjaLwhf3BEE18sB+G35Dq3l9PzjFg01HzObNz0jaSTb1xcpsWCfdrirEiVu2fz5kZQ6hz9BdyFd61Er7SHWiFQ6kazIlZAmDQBgoLYtWzTZSU7C/7o8Xi3YwYAUTFAr/lV6V7WUxrWODo3sK7ZX1M7AbIYN4qMWTVXM2fo6nlkgDXHZPw9jal9JhdrmaORRvB89RMzDGRDB50zQpr5OGLQQeEQqJjWd5m1B+aRQzqcPPRh6YUqWDYUZccmsAqbtPV/Pzqoof9SHFpgqYwU4djxL2pNoglVnELdlZ6LNaoy4wzy6m9OjVHTsDQtmjeFmCXJxijMWBYwmg1T5ia6UtlUzwfnYVqe5teCQq+n+kPfYVjOAlqOPPiEtXMV9QQ1F/1K8UGQjfhnWyP6beqhKO5KuRcy7gKywaRB2pTXVrpoDi9Nl8UU619h9xGG5LwAh8X0airT61avv5gLSs+Xc4VN0TsikEUlj0RleZteGb8WEGBJfE8PtQGMadgOFkLEJdU3H/DMWJu9HaVLkLwqDlNeSbhSIhhbyHNMCNwPyo2kghNfz75qjxvYG+P7ni1nGBatdyvAmRs9qiWW6a7YL8jxgFregNIyARiWRht0DEZoI6hBmHh47Lak9nhSEFkJdPl6UTfJZTJddgeMNdoX8O5mf5vkGTmO7AVaQOReJGX6rkPa7HArdbvfaB+Kpp3MB6nFDTBCcRV18ZOAQbwwyUCHY+RKXjd9yDRXmecs/XXz6I6iqVlgk+nSaESmdXixvdgTtYc2uQ4V1+26GiQ9EM9wcakwgL6uj-----END ENCRYPTED PRIVATE KEY-----";

        
        /*******************************************************************/
        var rtn = false;

        this.rtnValue = "";
        this.objPlg = "";
        this.signData = "";
        this.bzno = "";
        this.signId = "";
        this.signCallBackFunc = "";

        //OpenWeb사용을 위해서 WebBrowser컴포넌트 생성
        this.gfn_createOpenWeb = function()
        {
        	var obj  = this.lookup("objWeb");
        	if (!this.gfn_isNull(obj)) {
        		obj.destroy();
        		obj = null;
        	}

        	this.setWaitCursor(true);
        	/******** 동적으로 WebBrowser 생성 ***********/
        	var objWeb = new WebBrowser("objWeb", "absolute", 0, 0, 100, 100, null, null);
        	this.addChild("objWeb", objWeb);
        	objWeb.show();

        	objWeb.set_visible(false);
        	objWeb.set_url(application.gv_serviceHtml_url + "escm/OpenWeb_PKI/pki/pki.html");

        	//#2 onusernotify OpenWeb의 설치여부가 확인되고 this.gfn_onusernotify 결과를 return 한다.
        	objWeb.setEventHandler("onusernotify", this.gfn_onusernotify, this);
        	objWeb.setEventHandler("onloadcompleted", this.gfn_onloadcompleted, this);
        	objWeb.setEventHandler("onerror", this.gfn_onerror, this);
        	/************************************************/
        	return;
        }

        this.gfn_onerror = function(obj,e)
        {
        	alert("OpenWeb 로딩에 실패하였습니다.");
        	this.setWaitCursor(false);
        	this.gfn_signActiveX();
        }

        //OpenWeb에서 리턴되는 상태를 notify한다.
        this.gfn_onusernotify = function(obj,e)
        {
        	this.setWaitCursor(false);
        	if (e.userdata == "SUC") { //OpenWeb인증서 서명완료!!
        		var doc = obj.document;
        		var signedData = doc.getElementById("signedData");
        		this.rtnValue = signedData.value;
        		try {
        			this.lookupFunc(this.signCallBackFunc).call(this.rtnValue, this.signId);
        		} catch (e) {
        		}
        	} else if (e.userdata == "ERROR") {
        		try {
        			this.lookupFunc(this.signCallBackFunc).call("ERROR", this.signId);
        		} catch (e) {
        		}
        	} else if (e.userdata == "FAIL") {
        		//#3-1 OpenWeb이 설치가 되어 있지 않으면 exe를 다운로드를 권유한다..
        		if (this.confirm("하나로 eSCM 전자서명 시 보안이 취약한 ActiveX 프로그램을 대체하기 위한 OpenWeb 프로그램을 다운로드 후 설치해주세요.")) {
        			//#3-1-1 확인을 누르면 다운로드 한다.
        			obj.set_url(application.gv_serviceHtml_url + "escm/OpenWeb_PKI/install/pki/notInstall.html");
        		} else {
        			//#3-1-1 취소를 누르면 ActiveX로 서명 시도한다.
        			if (system.navigatorname != 'IE') {
        				if (this.confirm("인증서 설치를 하지 않으면 진행할 수 없습니다. \n다운로드 하시겠습니까?")) {
        					obj.set_url(application.gv_serviceHtml_url + "escm/OpenWeb_PKI/install/pki/notInstall.html");
        				} else {
        					return;
        				}
        			}
        			this.gfn_signActiveX();
        		}
        	} else if (e.userdata == "INSTALLED") {
        		//설치확인 후 싸인
        		this.gfn_signOpenWeb(obj);
        	} else if (e.userdata == "DONE") {
        		//설치완료
        	} else {
        		// trace("notify");
        		// trace("e.userdata :: " + e.userdata);
        		this.gfn_signActiveX();
        	}
        }

        this.gfn_onloadcompleted = function(obj,e)
        {
        	//this.gfn_signOpenWeb(obj);
        	this.setWaitCursor(false);
        	// trace("nloadcompleted");
        }

        //OpenWeb을 이용하여 서명한다.
        this.gfn_signOpenWeb = function(obj)
        {
        	obj.callMethod("SetConfig", "nhVan", CA_LDAP_INFO, SET_POLICIES);
        	obj.callMethod("signTradeSign", this.signData, this.bzno);
        }

        //ActiveX를 이용하여 서명한다.
        this.gfn_signActiveX = function()
        {
        	var sBzno = this.bzno;
        	var obj = this.objPlg;
        	var bzno = this.bzno;
        	var sVal = this.signData;

        	if (system.navigatorname != 'IE' && system.navigatorname != "nexacro") {
        		alert("ActiveX방식의 인증서 전자서명은 Internet Explorer에서만 지원합니다.");
        		return;
        	}
        	var nRet;
        	// 모든 Condition 설정.
        	try {
        		nRet = obj.callMethod("SetConfig","test", CA_LDAP_INFO, CTL_INFO, SET_POLICIES,
        								INC_CERT_SIGN, INC_SIGN_TIME_SIGN, INC_CRL_SIGN, INC_CONTENT_SIGN,
        								USING_CRL_CHECK, USING_ARL_CHECK);

        		if (nRet > 0) {
        			alert(nRet + " : " + obj.getProperty("GetErrorMessage"));
        			try {
        				this.lookupFunc(this.signCallBackFunc).call("ERROR", this.signId);
        			} catch (e) {
        			}
        			return false;
        		}
        	} catch(e) {
        		if (this.confirm("인증서 설치가 완료되어야 진행이 가능합니다.")) {
        			//#3-1-1-1 ActiveX도 설치되어 있지 않으면 OpenWeb인증서 다운&설치를 한다.
        			this.objWeb.set_url(application.gv_serviceHtml_url+ "escm/OpenWeb_PKI/install/pki/notInstall.html");
        		}
        		//#3-1-1-2 설치 취소를 누르면 진행이 불가능하다.
        		try {
        			this.lookupFunc(this.signCallBackFunc).call("ERROR", this.signId);
        		} catch (e) {
        		}
        	}

        	// 하드디스크를 첫 번째 버튼으로 설정
        	obj.callMethod("SetEachConfig", "FIRST_BUTTON", "HDD");

        	// 인증서 로딩시 KM 인증서 검증 옵션 켜기
        	obj.callMethod("SetEachConfig", "LOAD_CERT_KM", "TRUE");

        	// 사용자가 자신의 인증서를 선택.
        	nRet = obj.callMethod("SelectCertificate",STORAGE_TYPE, 0, "");
        	if (nRet > 0) {
        		alert(nRet + " : " + obj.callMethod("GetErrorMessage"));
        		try {
        			this.lookupFunc(this.signCallBackFunc).call("ERROR", this.signId);
        		} catch (e) {
        		}
        		return ;
        	}

        	if (!this.gfn_isNull(this.bzno)) {
        		nRet = obj.callMethod("VerifyVID", this.bzno)// TSToolkit.VerifyVID(ssn);
        		if (nRet > 0) {
        			alert(nRet + " : " + obj.callMethod("GetErrorMessage"));
        			try {
        				this.lookupFunc(this.signCallBackFunc).call("ERROR", this.signId);
        			} catch (e) {
        			}
        			return;
        		}

        		if (obj.getProperty("OutData") != "true") {
        			alert("회원정보의 사업자 번호와 공인인증서의 사업자 번호가 일치하지 않습니다.");
        			try {
        				this.lookupFunc(this.signCallBackFunc).call("ERROR", this.signId);
        			} catch (e) {
        			}
        			return false;
        		}
        	}

        	nRet = obj.callMethod("SignData", this.signData);
        	if (nRet > 0) {
        		alert(nRet + " : " + obj.getProperty("GetErrorMessage"));
        		try {
        			this.lookupFunc(this.signCallBackFunc).call("ERROR", this.signId);
        		} catch (e) {
        		}
        		return false;
        	}

        	var sRtnVal = obj.getProperty("OutData");

        	this.rtnValue = sRtnVal;

        	try {
        	    this.lookupFunc(this.signCallBackFunc).call(this.rtnValue, this.signId);
        	} catch (e) {
        	}
        }

        
        //****************************************사용자 화면에서 호출되는 함수****************************************/
        //obj : ActiveX PlugIn
        //sVal : 서명할 데이터
        //sBzno : 사용자 본인 인증시 필요한 데이터 - 본인확인 필요없을시 ""
        //callback : 서명 완료시 콜백받을 함수
        //id : 함수구분값
        this.gfn_signTradeSign = function(obj,sVal,sBzno,callback,id)
        {
        	this.objPlg = obj;
        	this.signData = sVal;
        	this.bzno = sBzno;
        	this.signId = id;
        	this.signCallBackFunc = callback;

        	/******"**** 사용자의 사업자 번호를 체크한다. 디버그 정보를 쿠키에 저장한다. *************/
        	if (this.gfn_isNull(this.bzno)) {
        		this.bzno = this.gfn_replace(this.gfn_trim(application.gv_bizNumber), "-", "");
        	} else {
        		this.bzno = this.gfn_replace(this.gfn_trim(this.bzno), "-", "");
        	}

        	if (application.gv_serverType != "ADMIN") { //개발
        		this.bzno = '1234567890';
        	}

        	if (this.gfn_isNull(this.bzno)) {
        		/**************** 디 버 그 *******************/
        		alert("사업자번호나 주민등록번호가 필요합니다.\n관리자에게 문의하세요.");
        		// trace('application.gv_bizNumber :: ' + application.gv_bizNumber);
        		// trace('bzno :: ' + bzno);
        		// trace('trim_replace :: ' + this.gfn_replace(this.gfn_trim(application.gv_bizNumber)));
        		// trace('trim :: ' + this.gfn_trim(application.gv_bizNumber));

        		nexacro._setCookie('application.gv_bizNumber',application.gv_bizNumber,1);
        		nexacro._setCookie('bzno',bzno,1);
        		nexacro._setCookie('trim_replace',this.gfn_replace(this.gfn_trim(application.gv_bizNumber)),1);
        		nexacro._setCookie('trim',this.gfn_trim(application.gv_bizNumber),1);

        		var cookies = "";
        		cookies = "escmTmp=" + application.gv_bizNumber + "_" + bzno + "_"+ this.gfn_replace(this.gfn_trim(application.gv_bizNumber)) +"_"+ this.gfn_trim(application.gv_bizNumber)+ '; path=/ ';
        		document.cookie = cookies;
        		try {
        			this.lookupFunc(this.signCallBackFunc).call("ERROR", this.signId);
        		} catch(e) {
        		}
        		return false;
        		/**************** 디 버 그 *******************/
        	}

        	//인증서OID를 설정한다.
        	SET_POLICIES = "";
        	SET_POLICIES += POLICIES;
        	SET_POLICIES += "1 2 410 200004 5 2 1 6 460:농협하나로유통 특법인 인증서|";

        	//#1 OpenWeb이 설치 되어 있는지 확인한 후 설치가 되어 있으면 OpenWeb으로 서명한다.
        	this.gfn_createOpenWeb(obj, sVal, sBzno);
        }

        //본인확인을 하지 않는다.(지사 회원가입 사용)
        this.gfn_signTradeSignForJoin = function(obj,sVal,callback,id)
        {
        	this.objPlg = obj;
        	this.signData = sVal;
        	this.bzno = "";
        	this.signId = id;
        	this.signCallBackFunc = callback;

        	SET_POLICIES = "";
        	SET_POLICIES += BANK_POLICIES;
        	SET_POLICIES += POLICIES;
        	SET_POLICIES += "1 2 410 200005 1 1 6 8:전자세금계산서용(금결원)|";
        	//#1 OpenWeb이 설치 되어 있는지 확인한 후 설치가 되어 있으면 OpenWeb으로 서명한다.
        	this.gfn_createOpenWeb();
        }

        //****************************************채권채무 잔액확인서 접수화면에서 호출되는 함수****************************************/

        /*
        	obj : ActiveX PlugIn
        	sVal : 서명할 데이터
        	sBzno : 사용자 본인 인증시 필요한 데이터 - 본인확인 필요없을시 ""
        	callback : 서명 완료시 콜백받을 함수
        	id : 함수구분값
        */
        this.gfn_signTradeSignForBas = function(obj,sVal,sBzno,callback,id)
        {
        	this.objPlg = obj;
        	this.signData = sVal;
        	this.bzno = sBzno;
        	this.signId = id;
        	this.signCallBackFunc = callback;

        	/******"**** 사용자의 사업자 번호를 체크한다. 디버그 정보를 쿠키에 저장한다. *************/
        	if (this.gfn_isNull(this.bzno)) {
        		this.bzno = this.gfn_replace(this.gfn_trim(application.gv_bizNumber), "-", "");
        	} else {
        		this.bzno = this.gfn_replace(this.gfn_trim(this.bzno), "-", "");
        	}

        	if (application.gv_serverType != "ADMIN") { //개발
        		this.bzno = '1234567890';
        	}

        	if (this.gfn_isNull(this.bzno)) {
        		/**************** 디 버 그 *******************/
        		alert("사업자번호나 주민등록번호가 필요합니다.\n관리자에게 문의하세요.");
        		// trace('application.gv_bizNumber :: ' + application.gv_bizNumber);
        		// trace('bzno :: ' + bzno);
        		// trace('trim_replace :: ' + this.gfn_replace(this.gfn_trim(application.gv_bizNumber)));
        		// trace('trim :: ' + this.gfn_trim(application.gv_bizNumber));

        		nexacro._setCookie('application.gv_bizNumber',application.gv_bizNumber,1);
        		nexacro._setCookie('bzno',bzno,1);
        		nexacro._setCookie('trim_replace',this.gfn_replace(this.gfn_trim(application.gv_bizNumber)),1);
        		nexacro._setCookie('trim',this.gfn_trim(application.gv_bizNumber),1);

        		var cookies = "";
        		cookies = "escmTmp=" + application.gv_bizNumber + "_" + bzno + "_"+ this.gfn_replace(this.gfn_trim(application.gv_bizNumber)) +"_"+ this.gfn_trim(application.gv_bizNumber)+ '; path=/ ';
        		document.cookie = cookies;
        		try {
        			this.lookupFunc(this.signCallBackFunc).call("ERROR", this.signId);
        		} catch (e) {
        		}
        		return false;
        		/**************** 디 버 그 *******************/
        	}

        	//인증서OID를 설정한다.
        	SET_POLICIES = "";
        	SET_POLICIES += POLICIES;
        	SET_POLICIES += "1 2 410 200004 5 2 1 6 460:농협하나로유통 특법인 인증서|";
        	SET_POLICIES += "1 2 410 200005 1 1 6 8:전자세금계산서용(금결원)|";

        	//#1 OpenWeb이 설치 되어 있는지 확인한 후 설치가 되어 있으면 OpenWeb으로 서명한다.
        	this.gfn_createOpenWeb(obj, sVal, sBzno);
        }

        //**************************검증하기(ActiveX)
        this.gfn_verifyTradeSign = function(obj,sVal)
        {
        	if (system.navigatorname != 'IE' && system.navigatorname != "nexacro") {
        		alert("현재 전자서명은 Internet Explorer에서만 지원합니다.");
        		return;
        	}

        	//검증할 signedData 설정.
        	var dataMsg, signerDN;
        	var nRet;
        	
        	// 모든 Condition 설정.
        	nRet = obj.callMethod("SetConfig","test", CA_LDAP_INFO, CTL_INFO, POLICIES,
        							INC_CERT_SIGN, INC_SIGN_TIME_SIGN, INC_CRL_SIGN, INC_CONTENT_SIGN,
        							USING_CRL_CHECK, USING_ARL_CHECK);
            if (nRet > 0) {
        		alert(nRet + " : " + obj.getProperty("GetErrorMessage"));
        		return false;
        	}
        	
        	nRet = obj.callMethod("VerifySignedData", sVal, "");
        	if (nRet > 0) {
        		alert(nRet + " : " + obj.getProperty("GetErrorMessage"));
        		return false;
        	}
        	// 서명된 데이타 꺼내기.
        	var sRtnVal = obj.getProperty("OutData");
        	
        	// 서명 갯수 꺼내기.
        	var signerIndex;
        	nRet = obj.callMethod("GetSignerCount");
        	if (nRet > 0) {
        		alert(nRet + " : " + obj.getProperty("GetErrorMessage"));
        		return false;
        	}
        	signerIndex = obj.getProperty("OutDataNum");

        	for (i=1; i<=signerIndex; i++) {
        		// 서명자 인증서 DN 꺼내기.
        		var signerDN;
        		nRet = obj.callMethod("GetSignerDN",i);
        		if (nRet > 0) {
        			alert(nRet + " : " + obj.getProperty("GetErrorMessage"));
        			return false;
        		}
        		signerDN = obj.getProperty("OutData");
        		
        		// 서명자 인증서 꺼내기
        		var signerCert;
        		nRet = obj.callMethod("GetSignerCert",i);
        		if (nRet > 0) {
        			alert(nRet + " : " + obj.getProperty("GetErrorMessage"));
        			return false;
        		}
        		signerCert = obj.getProperty("OutData");
        		
        		// 서명시간 꺼내기
        		var signingTime;
        		nRet = obj.callMethod("GetSigningTime",i);
        		if (nRet > 0) {
        			alert(nRet + " : " + obj.getProperty("GetErrorMessage"));
        			return false;
        		}
        		signingTime = obj.getProperty("OutData");
        		alert(i + " 번째  : " + signerDN + "\r\n서명시간 : " + signingTime);

        		// 인증서 검증하기
        		nRet = obj.callMethod("CertificateValidation", signerCert);
        		if (nRet > 0) {
        			alert(nRet + " : " + obj.getProperty("GetErrorMessage"));
        			if (nRet == 141) {
        				var revokedTime;
        				revokedTime = obj.getProperty("OutData");
        				alert("폐지 또는 효력정지 시각 : " + revokedTime);
        			}
        		}
        	}
        	
        	// 메모리 정리하기.
        	nRet = obj.callMethod("ClearMemory");
        	if (nRet > 0) {
        		alert(nRet + " : " + obj.getProperty("GetErrorMessage"));
        		return false;
        	}
        	return sRtnVal;
        }

        /************************    TSXMLTOOLKIT   ********************************************/
        this.dsTax;
        this.dsTaxDtl;
        this.webDti;
        this.dtiDs;

        /* DB에서 세금계산서 데이터 조회 */
        this.fn_retrieveTaxBillListForSign = function(dsTaxList)
        {
        	var pbcSqno = "";

        	// 데이터셋이 생성되어 있지 않으면 추가
        	if (!(this.dsTax instanceof Dataset)) {
        		// trace("DS생성..");
        		this.dsTax = new Dataset();
        		this.dsTaxDtl = new Dataset();
        		this.dsTax.set_name("this.dsTax");
        		this.dsTaxDtl.set_name("this.dsTaxDtl");
        		this.addChild("this.dsTax", this.dsTax);
        		this.addChild("this.dsTaxDtl", this.dsTaxDtl);
        	}

        	this.dsTax.clear();
        	this.dsTaxDtl.clear();

        	for (var i = 0; i < dsTaxList.rowcount; i++) {
        		if (i > 0) { pbcSqno += ","; }
        		pbcSqno += dsTaxList.getColumn(i, "PBC_SQNO");
        	}

        	var sSvcID        = "retrieveTaxBillListForSign";
        	var sURL          = "svc::rest/tx/retrieveTaxBillListForSign";
        	var sInDatasets   = "";
        	var sOutDatasets  = this.dsTax.name + "=ds_tax " +  this.dsTaxDtl.name + "=ds_taxDetail";
        	var sArgument     = "PBC_SQNO=" + pbcSqno;
        	var sCallbackFunc = "fn_callBackDTI";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /* DB에서 조회한 세금계산서 데이터를 DTI에서 처리하기 위한 데이터로 가공 */
        this.fn_callBackDTI = function(svcID,ErrorCode,ErrorMsg)
        {
        	/*********************************************************************/
        	//트렌젝션으로 데이타셋 두개 생성
        	//nxTSDTIParam오프젝트 생성
        	//for
        	//String 값으로 txbil, txbilDetail 을 인자 값 두개로 묶어서 보내준다. (서버에서 잘라서 사용)
        	//end for
        	//signedti값과 rvalue를 retrun 받는다.

        	/*********************************************************************/
        	var txbil = "";
        	var txbilDetail = "";
        	var lastPbc = "";

        	// 세금계산서 기본 데이터
        	//  (COL1#:VAL1#;COL2#:VAL2)#&(COL1#:VAL1#;COL2#:VAL2)
        	for (var m = 0; m < this.dsTax.rowcount; m++) {
        		if (this.gfn_nullToEmpty(txbil) != "") {
        			txbil += "#&"; // 세금계산서 발행일련번호 구분자
        		}
        		for (var i = 0; i < this.dsTax.getColCount(); i++) {
        			if (i > 0) { txbil += "#;"; } // 세금계산서 데이터 구분자
        			txbil += this.dsTax.getColID(i) + "#:" + this.gfn_trim(this.gfn_nullToEmpty(this.dsTax.getColumn(m, i)));
        		}
        	}

        	// 세금계산서 항목 데이터
        	// [{(COL1#:VAL1#;COL2#:VAL2)#@(COL1#:VAL1#;COL2#:VAL2)}#@{(COL1#:VAL1#;COL2#:VAL2)#@(COL1#:VAL1#;COL2#:VAL2)}]#&{(COL1#:VAL1#;COL2#:VAL2)#@(COL1#:VAL1#;COL2#:VAL2)}
        	for (var n = 0; n < this.dsTaxDtl.rowcount; n++) {
        		if (txbilDetail != "" && lastPbc != "" && lastPbc != this.dsTaxDtl.getColumn(n, "PBC_SQNO")) {
        			txbilDetail += "#&"; // 세금계산서 발행일련번호 구분자
        		} else if (lastPbc == this.dsTaxDtl.getColumn(n, "PBC_SQNO")) {
        			txbilDetail += "#@"; // 세금계산서 항목 구분자
        		}

        		lastPbc = this.dsTaxDtl.getColumn(n, "PBC_SQNO");
        		for (var j = 0; j < this.dsTaxDtl.getColCount(); j++) {
        			if (j > 0) { txbilDetail += "#;"; } // 세금계산서 항목 데이터 구분자
        			txbilDetail += this.dsTaxDtl.getColID(j) + "#:" + this.gfn_trim(this.gfn_nullToEmpty(this.dsTaxDtl.getColumn(n, j)));
        		}
        	}

        	// trace("txbil=>"+txbil);
        	// trace("txbilDetail=>"+txbilDetail);

        	this.setWaitCursor(true);
        	var stime = this.gfn_getServerTime("yyyyMMddHHmmss");
        	var svType = application.gv_serverType;
        	this.webDti.callMethod("inputTaxSignData", txbil, txbilDetail, stime, svType);
        }

        /* Open web 방식 - WebBrowser Bridge */
        this.gfn_onusernotifDti = function(obj,e)
        {
        	this.setWaitCursor(false);

        	if (e.userdata == "SUC") { //서명완료
        		var doc = this.webDti.document;
        		var signedTaxInvoice = doc.getElementById("signedTaxInvoice");
        		var rvalueResult = doc.getElementById("rvalueResult");

        		try {
        			//this.lookupFunc(this.callbackFn).call(rvalueResult.value, signedTaxInvoice.value);
        			this.lookupFunc(this.callbackFn).call("SUC", rvalueResult.value, signedTaxInvoice.value);
        		} catch (e) {
        		}
        	} else if (e.userdata == "ERROR") {
        		try {
        			this.lookupFunc(this.callbackFn).call("ERROR");
        		} catch (e) {
        		}
        	} else if (e.userdata == "FAIL") {
        		//#3-1 OpenWeb이 설치가 되어 있지 않으면 exe를 다운로드를 권유한다..
        		if (this.confirm("SCORE DTI for OpenWeb 프로그램이 설치 되어 있지 않거나, 이전 버전이 설치되어 있습니다. \n\n다운로드 하시겠습니까?")) {
        			//#3-1-1 확인을 누르면 다운로드 한다.
        			obj.set_url(application.gv_serviceHtml_url + "escm/OpenWeb_DTI/install/dti/notInstall.html");
        		}
        	} else if (e.userdata == "INSTALLED") {
        		//설치확인 후 싸인
        		this.fn_retrieveTaxBillListForSign(this.dtiDs);
        	} else if (e.userdata == "DONE") {
        		//설치완료
        	}
        }

        /* Open web 방식 */
        this.gfn_eTaxSignOpenWeb = function(objDs,callback)
        {
        	this.callbackFn = callback;
        	this.dtiDs = objDs;

        	var obj  = this.lookup("objWebDti");
        	if (!this.gfn_isNull(obj)) {
        		obj.destroy();
        		obj = null;
        	}

        	/******** 동적으로 WebBrowser 생성 ***********/
        	var objWebDti = new WebBrowser("objWebDti", "absolute", 0, 0, 100, 100, null, null);
        	this.addChild("objWebDti", objWebDti);
        	objWebDti.show();

        	objWebDti.set_visible(false);
        	objWebDti.set_url(application.gv_serviceHtml_url + "escm/OpenWeb_DTI/dti/dti.html");
        	//#2 onusernotify OpenWeb의 설치여부가 확인되고 this.gfn_onusernotify 결과를 return 한다.
        	objWebDti.setEventHandler("onusernotify", this.gfn_onusernotifDti, this);
        	objWebDti.setEventHandler("onloadcompleted", this.gfn_onloadcompletedDti, this);
        	objWebDti.setEventHandler("onerror", this.gfn_onerrorDti, this);
        	/************************************************/
        	this.webDti = objWebDti;
        }

        this.gfn_onloadcompletedDti = function(obj,e)
        {
        	this.setWaitCursor(false);
        	// trace("gfn_onloadcompletedDti");
        	// this.fn_retrieveTaxBillListForSign(this.dtiDs);
        }

        this.gfn_onerrorDti = function(obj,e)
        {
        	this.setWaitCursor(false);
        	alert("ERROR :: ");
        }

        this.fn_callback = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) { //에러
        		alert(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
        		rtn = false;
         	}
        }

        this.fn_eTaxSignContent = function(form)
        {
        	var nRet, rvalue, signedti;

        	nRet = obj.callMethod("init");
         	if (nRet != 0) alert(obj.getProperty("errorMessage"));
        	obj.setProperty("taxInvoice", form.data3.value);

        	nRet = obj.callMethod("loadKeyAndCert",0,"","","");
        	if (nRet != 0) alert(obj.getProperty("errorMessage"));

        	nRet = obj.callMethod("sign",1,"");
        	if (nRet != 0) alert(obj.getProperty("errorMessage"));

        	signedti = obj.getProperty("signedTaxInvoice");
        	form.data2.value = signedti;
        	form.rValue.value =  obj.RValue;
        }

        /* ActiveX(IE) 방식 */
        this.gfn_eTaxSign = function(obj,objDs,objDsTax ,objDsItem)
        {
        	if (system.navigatorname != 'IE' && system.navigatorname != "nexacro") {
        		alert("현재 전자서명은 Internet Explorer에서만 지원합니다.");
        		return;
        	}
        	
        	var nRet, rvalue, signedti;
        	rtn = true;
        	nRet = obj.callMethod("init");
        	
        	if (nRet != 0) {
        		alert("인증서 설치가 제대로 되지 않았습니다. \nTSToolkit v2.0.6.4를 설치하여 주십시오.");
        		//alert(obj.getProperty("errorMessage"));
        		rtn = false;
        		return false;
        	} else {
        		//var policySet = POLICIES + "1 2 410 200005 1 1 6 8:전자세금계산서용(금결원)|1 2 410 200004 5 2 1 6 460:농협하나로유통 특법인 인증서|";
        		var policySet = POLICIES + "1 2 410 200005 1 1 6 8:전자세금계산서용(금결원)|";
        		policySet = policySet + "1 2 410 200004 5 2 1 6 460:농협하나로유통 특법인 인증서|";
        		
        		obj.setProperty("policySet", policySet);
        		nRet = obj.callMethod("loadKeyAndCert", 0, "", "", ""); // 인증서 선택 및 서명
        		
        		if (nRet != 0) {
        			alert(obj.getProperty("errorMessage"));
        			rtn = false;
        			return false;
        		}
        		this.setWaitCursor(true, true);
        		
        		for (var i = 0; i < objDs.rowcount; i++) {
        			objDsTax.clearData();
        			objDsItem.clearData();
        			
        			var sSvcID        = "retrieveSlTxbilForSvc";
        			var sURL          = "svc::rest/tx/retrieveSlTxbilForSvc";
        			var sInDatasets   = "";
        			var sOutDatasets  = objDsTax.name + "=ds_tax " +
        								objDsItem.name + "=ds_taxDetail";	
        			var sArgument     = "PBC_SQNO=" + objDs.getColumn(i, "PBC_SQNO");
        			var sCallbackFunc = "";
        			var sTranType     = "S"; // U:저장/삭제, S:조회
        			
        			this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType, true);
        			
        			/******************************관리정보**************************************/
        			var t = new Date();
        			//var time = "" + this.gfn_today("yyyyMMdd") + String(t.getHours()).padLeft(2,"0") + String(t.getMinutes()).padLeft(2,"0") + String(t.getSeconds()).padLeft(2,"0"); 
        			//var time = "" + this.gfn_getServerTime("YYYYMMdd").substr(0,8) + String(t.getHours()).padLeft(2,"0") + String(t.getMinutes()).padLeft(2,"0") + String(t.getSeconds()).padLeft(2,"0");
        			var time = "" + this.gfn_getServerTime("yyyyMMddHHmmss");
        			
        			//초기화
        			nRet = obj.callMethod("initXML");
        			if (nRet != 0) {
        				alert(obj.getProperty("errorMessage"));
        				rtn = false;
        				return false;
        			}

        			//서비스 사업자 관리번호, 사업자 관리 번호, 전자세금계산서 발행일시 
        			nRet = obj.callMethod("exchangedDocument", objDsTax.getColumn(0, "PBC_SQNO"),objDsTax.getColumn(0, "PBC_SQNO"), time);
        			if (nRet != 0) {
        				alert(obj.getProperty("errorMessage"));
        				rtn = false;   
        				return;
        			}

        			/******************************기본정보**************************************/			       			
        			nRet = obj.callMethod(  "taxInvoiceDocumentV3"
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "NTS_TMS_SQNO"))    //IssueID
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "CRT_DT"))      //IssueDateTime
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "TXBIL_KD"))    //TypeCode(4자리) 세금계산서 종류(2자리) : 01(세금계산서),02(수정세금계산서), 03(계산서), 04(수정계산서)
        																	  //                 세금계산서 분류(2자리) : 01(일반), 02(영세율),03(위수탁), 04(수입), 05(영세율 위수탁)
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "RCT_RQS_DSC")) // "01:영수 02:청구"
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "MOD_C"))   //AmendmentStatus.Code 수정코드 01 : 기재사항의 착오·정정, 02: 공급가액 변동, 03: 환입, 04 : 계약의 해제, 05 : 내국신용장 사후 개설
        								  , ""          //DescriptionText 비고
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "MOD_TAX_NTS_TMS_SQNO")) //OriginalIssueID
        								 );

        			if (nRet != 0) {
        				alert(obj.getProperty("errorMessage"));
        				rtn = false;
        				return;
        			}
        			
        			/******************************공급자정보**************************************/
        			var objS = objDsTax.getColumn(0, "SPLR_BZNO");
        			nRet = obj.callMethod( "invoicerParty"  				  //함수이름
        								  , this.gfn_nullToEmpty(objS.trim())  //공급자사업자번호
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "SPLR_MTALNM")) //공급자상호명
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "SPLR_REPMNM")) //공급자대표자명
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "SPLR_BZTPNM")) //공급자업태
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "SPLR_BZC"))    //공급자종목
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "SPLR_ID_TXREG"))  // TaxRegistrationID 공급자 종사업장번호
        								 );
        			if (nRet != 0) {
        				alert(obj.getProperty("errorMessage"));
        				rtn = false;
        				return;
        			}

        			nRet = obj.callMethod( "invoicerPartyDefinedContact"  //함수이름
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "SPLR_DEPTNM")) //공급자담당부서명
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "SPLR_CHRRNM")) //공급자담당자명
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "SPLR_CHRR_TELNO")) //공급자담당자전화번호
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "SPLR_CHRR_EMAIL")) //공급자담당자이메일
        								 );
        			if (nRet != 0) {
        				alert(obj.getProperty("errorMessage"));
        				rtn = false;
        				return;
        			}

        			nRet = obj.callMethod("invoicerPartySpecifiedAddress"
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "SPLR_ADR")) //공급자주소
        								 );
        			if (nRet != 0) {
        				alert(obj.getProperty("errorMessage"));
        				rtn = false;
        				return;
        			}
        	
        			/******************************공급받는자정보**************************************/
        			var objSs = objDsTax.getColumn(0, "BUY_BZNO");
        			nRet = obj.callMethod( "invoiceeParty"
        								  , this.gfn_nullToEmpty(objSs.trim()) //InvoiceeCorpNum : ID
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "BUY_DSC"))//BusinessType :BUY_DSC
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "BUY_MTALNM")) //Name  상호명
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "BUY_REPMNM"))//SpecifiedPersonName 대표자명
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "BUY_BZTPNM")) //업태
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "BUY_BZC"))//종목
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "BUY_ID_TXREG"))  // TaxRegistrationID 공급받는자 종사업장번호
        								 );
        						 
        			if (nRet != 0) {
        				alert(obj.getProperty("errorMessage"));
        				rtn = false;
        				return;
        			}

        			nRet = obj.callMethod( "invoiceePartySpecifiedAddress"
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "BUY_ADR")) //사업장주소
        								 );

        			if (nRet != 0) {
        				alert(obj.getProperty("errorMessage"));
        				rtn = false;
        				return;
        			}

        			nRet = obj.callMethod( "invoiceePartyPrimaryDefinedContact"
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "BUY_DEPTNM1")) //DepartmentName
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "BUY_CHRRNM1")) //PersonName
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "BUY_CHRR_TELNO1")) //"연락처"
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "BUY_CHRR_EMAIL1")) //"Email"+"@"+"naver.com"
        								 );

        			if (nRet != 0) {
        				alert(obj.getProperty("errorMessage"));
        				rtn = false;
        				return;
        			}

        			nRet = obj.callMethod( "invoiceePartySecondaryDefinedContact"
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "BUY_DEPTNM2")) //DepartmentName
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "BUY_CHRRNM2")) //PersonName
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "BUY_CHRR_TELNO2")) //"연락처"
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "BUY_CHRR_EMAIL2")) //"Email"+"@"+"naver.com"
        								 );

        			if (nRet != 0) {
        				alert(obj.getProperty("errorMessage"));
        				rtn = false;
        				return;
        			}

        			/************************************************************************************/
        			
        			/*결제정보-결제방법별금액(SpecifiedPaymentMeans) :: 10:현금, 20:수표, 30:어음, 40:외상*/
        			if (!this.gfn_isNull(objDsTax.getColumn(0, "STL_METHC1"))) {
        				nRet = obj.callMethod("specifiedPaymentMeans", objDsTax.getColumn(0, "STL_METHC1"), this.gfn_nullToEmpty(objDsTax.getColumn(0, "STL_AM1")));
        				if (nRet != 0) {
        					alert(obj.getProperty("errorMessage"));
        					rtn = false;
        					return;
        				}
        			}

        			if (!this.gfn_isNull(objDsTax.getColumn(0, "STL_METHC2"))) {
        				nRet = obj.callMethod("specifiedPaymentMeans",objDsTax.getColumn(0, "STL_METHC2"),this.gfn_nullToEmpty( objDsTax.getColumn(0, "STL_AM2")));
        				if (nRet != 0) {
        					alert(obj.getProperty("errorMessage"));
        					rtn = false;
        					return;
        				}
        			}
        	
        			if (!this.gfn_isNull(objDsTax.getColumn(0, "STL_METHC3"))) {
        				nRet = obj.callMethod("specifiedPaymentMeans",objDsTax.getColumn(0, "STL_METHC3"), this.gfn_nullToEmpty(objDsTax.getColumn(0, "STL_AM3")));
        				if (nRet != 0) {
        					alert(obj.getProperty("errorMessage"));
        					rtn = false;
        					return;
        				}
        			}
        		
        			if (!this.gfn_isNull(objDsTax.getColumn(0, "STL_METHC4"))) {
        				nRet = obj.callMethod("specifiedPaymentMeans",objDsTax.getColumn(0, "STL_METHC4"), this.gfn_nullToEmpty(objDsTax.getColumn(0, "STL_AM4")));
        				if (nRet != 0) {
        					alert(obj.getProperty("errorMessage"));
        					rtn = false;
        					return;
        				}
        			}
        	
        			/*************************************************************************************/	
        		
        			//결제정보-Summary(SpecifiedMoneySummation)*****************************************
        			nRet = obj.callMethod("specifiedMonetarySummation"
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "SPRTT"))//공급가액합계ChargeTotal
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "TXA_TT"))//세액합계TaxTotal
        								  , this.gfn_nullToEmpty(objDsTax.getColumn(0, "TOT_AM"))//총금액GrandTotal
        								 );
        			if (nRet != 0) {
        				alert(obj.getProperty("errorMessage"));
        				rtn = false;
        				return;
        			}
        			//상품정보(TaxInvoiceTradeLineItem)*************************************************
        			for (var j = 0; j < objDsItem.rowcount; j++) {
        				nRet = obj.callMethod("tradeLineItem"
        									  , this.gfn_nullToEmpty(objDsItem.getColumn(j, "DTL_SQNO"))   //Sequence물품 일련번호
        									  , this.gfn_nullToEmpty(objDsItem.getColumn(j, "TR_DT"))      //PurchaseExpiry
        									  , this.gfn_nullToEmpty(objDsItem.getColumn(j, "LATCNM"))     //Name
        									  , this.gfn_nullToEmpty(objDsItem.getColumn(j, "STD"))        //INFORMATION  규격
        									  , this.gfn_nullToEmpty(objDsItem.getColumn(j, "RMK"))        //Description
        									  , this.gfn_nullToEmpty(objDsItem.getColumn(j, "QT"))         //ChargeableUnit물품 수량
        									  , this.gfn_nullToEmpty(objDsItem.getColumn(j, "UPR"))        //UnitPrice
        									  , this.gfn_nullToEmpty(objDsItem.getColumn(j, "SPPR"))       //InvoiceAmount
        									  , this.gfn_nullToEmpty(objDsItem.getColumn(j, "TXA"))        //TotalTax
        									 );
        			}
        		
        			if (nRet != 0) alert(obj.getProperty("errorMessage"));
        			
        			nRet = obj.callMethod("sign", 0, "");
        			
        			if (nRet != 0) {
        				alert(obj.getProperty("errorMessage")); 
        				rtn = false;
        				return;
        			}
        			 
        			signedti = obj.getProperty("signedTaxInvoice");
        			rvalue   = obj.getProperty("RValue");
        			
        			if (application.gv_serverType == "ADMIN") { //운영에서만 본인확인
        				nRet = obj.callMethod("checkRvalue", rvalue, signedti);
        				if (nRet != 0) {
        					alert(obj.getProperty("errorMessage"));
        					rtn = false;
        					return;
        				}
        			}
        			
        			if (this.gfn_isNull(signedti) || this.gfn_isNull(rvalue)) {
        				alert("xml생성실패");
        				rtn = false;
        				return;
        			}
        			
        		//	nRet = obj.callMethod("saveToTaxInvoiceFile", "D://_농협하나로eSCM/_TaxInvoice/tax" + objDsTax.getColumn(0, "PBC_SQNO") +  ".xml");
        // 			if (nRet != 0)
        // 			{
        // 				alert(obj.getProperty("errorMessage"));
        // 				rtn = false;
        // 				return;
        // 			}
        			objDs.setColumn(i, "ELSG_CNTN", signedti);//생성된 taxInvoice return
        			objDs.setColumn(i, "SIGN_R_VAL", rvalue);//생성된 rvalue return
        		}//for
        		 this.setWaitCursor(false);
        	}//if else
        	return rtn;
        }
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
