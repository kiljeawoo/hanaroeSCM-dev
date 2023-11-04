/**
 * Created by jhkoo77 on 2015-09-10.
 */

var nxTSDTIConfig = {version:{},options:{}};

nxTSDTIConfig.version.nx             = "1,0,1,5";
nxTSDTIConfig.version.tsxmltoolkit   = "3,0,1,3";
nxTSDTIConfig.installPage            = "../install/dti/notInstall.html";
nxTSDTIConfig.installMessage         = "SCORE DTI for OpenWeb 프로그램이 설치 되어 있지 않거나, 이전 버전이 설치되어 있습니다. \n\n다운로드 하시겠습니까?";
nxTSDTIConfig.processingImageUrl     = "../../img/processing2.gif"


nxTSDTIConfig.options.policySet = "1 2 410 200012 1 1 3:전자거래범용(기업용)|1 2 410 200004 5 1 1 7:전자거래범용(기업용)|1 2 410 200005 1 1 5:전자거래범용(기업용)|1 2 410 200004 5 2 1 1:전자거래범용(기업용)|1 2 410 200004 5 4 1 2:전자거래범용(기업용)|1 2 410 200004 5 3 1 1:전자거래범용(기관용)|1 2 410 200004 5 3 1 2:전자거래범용(기업용)|1 2 410 200012 1 1 1:전자거래범용(개인용)|1 2 410 200004 5 1 1 5:전자거래범용(개인용)|1 2 410 200005 1 1 1:전자거래범용(개인용)|1 2 410 200004 5 2 1 2:전자거래범용(개인용)|1 2 410 200004 5 4 1 1:전자거래범용(개인용)|1 2 410 200004 5 3 1 9:전자거래범용(개인용)|1 2 410 200005 1 1 6 8:전자세금계산서용(금결원)|1 2 410 200004 5 2 1 6 460:농협하나로유통 특법인 인증서|";
nxTSDTIConfig.options.storageType = -1;


nxTSMessage.iframeTimeout = "응답이 지연되었습니다 잠시후 다시 시도해주세요..";
nxTSMessage.ajaxTimeout = "응답이 지연되었습니다 잠시후 다시 시도해주세요.";