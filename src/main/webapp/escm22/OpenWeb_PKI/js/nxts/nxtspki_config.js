/**
 * Created by jhkoo77 on 2015-08-26.
 */

var nxTSPKIConfig = {version:{},options:{}};

nxTSPKIConfig.version.nx             = "1,0,0,6";
nxTSPKIConfig.version.tstoolkit      = "2,0,6,6";
nxTSPKIConfig.installPage            = "../install/pki/notInstall.html";
nxTSPKIConfig.installMessage         = "하나로 eSCM 전자서명 시 보안이 취약한 ActiveX 프로그램을 대체하기 위한 OpenWeb 프로그램을 다운로드 후 설치해주세요.";
nxTSPKIConfig.processingImageUrl     = "../img/processing2.gif";


nxTSPKIConfig.options.siteName = "test";
nxTSPKIConfig.options.ldapInfo = "KISA:dirsys.rootca.or.kr:389|KICA:ldap.signgate.com:389|SignKorea:dir.signkorea.com:389|Yessign:ds.yessign.or.kr:389|CrossCert:dir.crosscert.com:389|TradeSign:ldap.tradesign.net:389|NCASign:ds.nca.or.kr:389|";
nxTSPKIConfig.options.ctlInfo = "";
nxTSPKIConfig.options.initPolicies = "1 2 410 200012 1 1 3:범용기업|1 2 410 200004 5 1 1 7:범용기업|1 2 410 200005 1 1 5:범용기업|1 2 410 200004 5 2 1 1:범용기업|1 2 410 200004 5 4 1 2:범용기업|1 2 410 200004 5 3 1 1:범용기관|1 2 410 200004 5 3 1 2:범용기업|1 2 410 200005 1 1 6 8:국세청신고용";
nxTSPKIConfig.options.includeCertPath = false;
nxTSPKIConfig.options.includeSigningTime = true;
nxTSPKIConfig.options.includeCRL = false;
nxTSPKIConfig.options.includeContent = true;
nxTSPKIConfig.options.crlCheckOption = true;
nxTSPKIConfig.options.arlCheckOption = true;
nxTSPKIConfig.options.loginDataKmCert = "-----BEGIN CERTIFICATE-----MIIFnjCCBIagAwIBAgIEWZHJYTANBgkqhkiG9w0BAQsFADBPMQswCQYDVQQGEwJLUjESMBAGA1UECgwJVHJhZGVTaWduMRUwEwYDVQQLDAxBY2NyZWRpdGVkQ0ExFTATBgNVBAMMDFRyYWRlU2lnbkNBMjAeFw0xNTA1MTEwOTI1NDlaFw0xNjA2MDkwMjE4MzlaMG0xCzAJBgNVBAYTAktSMRIwEAYDVQQKDAlUcmFkZVNpZ24xFTATBgNVBAsMDEFjY3JlZGl0ZWRDQTENMAsGA1UECwwEVEVTVDEkMCIGA1UEAwwb7YWM7Iqk7Yq4MV9LVE5FVF8wMDAwMDY4NzI1MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxMlPX/bXTMChBEZmhZcCV3pTQ1hQXNYi4ccYDU5yOjLO0jVkH3RFhJqHuxHcrAi5wSn4K85TwGWNM9xDUGbRCS8x2vPgCvgnt32sBGhvASExJ3vUFfy2L/nP69g4pf0qNdl4wwbQ+6p9qSjpMCtNdLfgGhp/D/e7MVCYuJVVcgcs1r6MrG9/Pw2N5xt/X0aIwQV8gniWsZoE9vg+Dh97O7veieZluo0PbQDMBbTt2FEu2GEk1dbiGDVUF54UGGo2mN9MNT5QN0WpU0njIr7Qjh1t+iI91sMTGZT8DkTvMhXqqiUqz/UIrUg/GAomNo0YAV+l46marYJDsnEIK7MaCQIDAQABo4ICYjCCAl4wgY8GA1UdIwSBhzCBhIAUTV1WCgcD34PK89Vtjxn8EqyQooqhaKRmMGQxCzAJBgNVBAYTAktSMQ0wCwYDVQQKDARLSVNBMS4wLAYDVQQLDCVLb3JlYSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eSBDZW50cmFsMRYwFAYDVQQDDA1LSVNBIFJvb3RDQSA0ggIQCTAdBgNVHQ4EFgQUCtRrJK2rQLkqHCA1n/OcTKUeWKAwDgYDVR0PAQH/BAQDAgbAMHoGA1UdIAEB/wRwMG4wbAYJKoMajJpMAQEDMF8wLgYIKwYBBQUHAgIwIh4gx3QAIMd4yZ3BHLKUACCs9cd4x3jJncEcACDHhbLIsuQwLQYIKwYBBQUHAgEWIWh0dHA6Ly93d3cudHJhZGVzaWduLm5ldC9jcHMuaHRtbDBvBgNVHREEaDBmoGQGCSqDGoyaRAoBAaBXMFUMEO2FjOyKpO2KuDFfS1RORVQwQTA/BgoqgxqMmkQKAQEBMDEwCwYJYIZIAWUDBAIBoCIEICbtJ2uzRKnAoHO/WR3+tCkRJ/qIPdSjHRHTHrJ7pt2/MGYGA1UdHwRfMF0wW6BZoFeGVWxkYXA6Ly9sZGFwLnRyYWRlc2lnbi5uZXQ6Mzg5L2NuPWNybDFkcDU4MyxvdT1jcmxkcDIsb3U9QWNjcmVkaXRlZENBLG89VHJhZGVTaWduLGM9S1IwRgYIKwYBBQUHAQEEOjA4MDYGCCsGAQUFBzABhipodHRwOi8vb2NzcC50cmFkZXNpZ24ubmV0OjE4MDAwL09DU1BTZXJ2ZXIwDQYJKoZIhvcNAQELBQADggEBAIE6DplwEq9PqwW/2M3uEnPOt70LS7aRFVSM+uDO/OeUjRdQ//0CKWnldZ3/qbsT8dwUIRl9A1E/GwDsJJIQ7/QLcFA8swk5EiXkCDkZyPT6JFuS45ibS0xKwbp1xDYXyX2iYEXsrFw/2In2hG4QjGDunMuA7N1YSBTiEMbaDh5LxXrJPoXlo3BOJziVUFbFeneX/8GiusBkuvWwqOxSjkY82GJIDX51zF9l629iUxGVURpJN6cV3RBdDk3r6FXXGPGnfhswruL8uGoFIp4/BX6lE5ZTLc8hZ1GA1oLdrTC3yC9qNsPACnP+6Y5OQk2UomxZHzEMYlHQrar0lAd4/ls=-----END CERTIFICATE-----";
nxTSPKIConfig.options.selectCertFirstButton = "HDD";
nxTSPKIConfig.options.bannerUrl = "pkidemo.tradesign.net/MultiToolkitDemo/images/test.bmp";
nxTSPKIConfig.options.infovine = {};
nxTSPKIConfig.options.infovine.phoneUrl = "";
nxTSPKIConfig.options.infovine.phoneVersion  = "";
nxTSPKIConfig.options.infovine.phoneParam = "";

nxTSPKIConfig.options.loadKmCert   = true;
nxTSPKIConfig.options.tsaHashAlg   = "sha256";
nxTSPKIConfig.options.tsaUrl       = "http://tsatest.tradesign.net:8090/service/timestamp/issue";
nxTSPKIConfig.options.tsaId        = "test";
nxTSPKIConfig.options.tsaPassword  = "testPwd";

nxTSPKIConfig.options.encryptionAlgorithm = "";
nxTSPKIConfig.options.defaultMediaType = "";


nxTSMessage.iframeTimeout = "응답이 지연되었습니다 잠시후 다시 시도해주세요..";
nxTSMessage.ajaxTimeout = "응답이 지연되었습니다 잠시후 다시 시도해주세요.";
