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
                this.set_name("Sample0024_txbilTest");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_taxCopy", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_KD\" type=\"STRING\" size=\"256\"/><Column id=\"RCT_RQS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_C\" type=\"STRING\" size=\"256\"/><Column id=\"RMK1\" type=\"STRING\" size=\"256\"/><Column id=\"RMK2\" type=\"STRING\" size=\"256\"/><Column id=\"RMK3\" type=\"STRING\" size=\"256\"/><Column id=\"REV_RPT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_ISU_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_ISU_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REV_TTCN\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DEPTNM1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRRNM1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_TELNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_EMAIL1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_MPNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DEPTNM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRRNM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_TELNO2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_EMAIL2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_MPNO2\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC1\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM1\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC2\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM2\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC3\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM3\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC4\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM4\" type=\"STRING\" size=\"256\"/><Column id=\"SPRTT\" type=\"STRING\" size=\"256\"/><Column id=\"TXA_TT\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"RQR_STS_C\" type=\"STRING\" size=\"256\"/><Column id=\"RPBC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_SL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"RQR_CHAN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_TAX_PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_TAX_NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ISTT_PBC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PBC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ERP_REF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_TMS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_RSP_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_C\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BRC\" type=\"STRING\" size=\"256\"/><Column id=\"BRNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNT_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNT_TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DTI_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DTI_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXBZ_TP_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"TXBZ_TP_PBCNM\" type=\"STRING\" size=\"256\"/><Column id=\"RC_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"HOFC_BAT_RG_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"INPMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"APVMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"ELSG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DCZ_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_ETR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_R_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"VENDER_C\" type=\"STRING\" size=\"256\"/><Column id=\"ORR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ORR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG1\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG2\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG3\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG4\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG5\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG6\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG7\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG8\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG9\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG10\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG11\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG12\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG13\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG14\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG15\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG16\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG17\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG18\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG19\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG20\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG21\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG22\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG23\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG24\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG25\" type=\"STRING\" size=\"256\"/><Column id=\"SOAC_PBC_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"NTS_PRC_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"PKG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_MPNO_ENCR\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZNO_ENCR\" type=\"STRING\" size=\"256\"/><Column id=\"ELSG_CNTN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PBC_SQNO\">20111027112244nheba12083</Col><Col id=\"NTS_TMS_SQNO\">2011102741000044a103xghp</Col><Col id=\"TXBIL_CNT\"/><Col id=\"TXBIL_NO\"/><Col id=\"TXBIL_SQNO\"/><Col id=\"CRT_DT\">20111027</Col><Col id=\"TXBIL_KD\">0101</Col><Col id=\"RCT_RQS_DSC\">02</Col><Col id=\"MOD_C\"/><Col id=\"RMK1\"/><Col id=\"RMK2\"/><Col id=\"RMK3\"/><Col id=\"REV_RPT_NO\"/><Col id=\"BAT_ISU_ST_DT\"/><Col id=\"BAT_ISU_ED_DT\"/><Col id=\"REV_TTCN\"/><Col id=\"SPLR_BZNO\">1268200875</Col><Col id=\"SPLR_NA_TRPL_C\"/><Col id=\"SPLR_MTALNM\">모가농협</Col><Col id=\"SPLR_REPMNM\">김교환</Col><Col id=\"SPLR_ADR\">경기 이천시 모가면 진가1리갈매울길 56</Col><Col id=\"SPLR_BZTPNM\">금융,소매</Col><Col id=\"SPLR_BZC\">그외 기타 종합 소매업</Col><Col id=\"SPLR_DEPTNM\">하나로마트</Col><Col id=\"SPLR_CHRRNM\">류제니</Col><Col id=\"SPLR_CHRR_TELNO\">0316328537</Col><Col id=\"SPLR_CHRR_EMAIL\">nh233082-2@nonghyup.com</Col><Col id=\"SPLR_CHRR_MPNO\">01045128742</Col><Col id=\"SPLR_FAXNO\"/><Col id=\"BUY_DSC\">01</Col><Col id=\"BUY_BZNO\">1268300042</Col><Col id=\"BUY_NA_TRPL_C\"/><Col id=\"BUY_MTALNM\">이천경찰서</Col><Col id=\"BUY_REPMNM\">이호준</Col><Col id=\"BUY_ADR\">경기 이천시 중리동3501</Col><Col id=\"BUY_BZTPNM\">국가기관</Col><Col id=\"BUY_BZC\">기타 사법 및 공공질서 행정</Col><Col id=\"BUY_FAXNO\"/><Col id=\"BUY_DEPTNM1\"/><Col id=\"BUY_CHRRNM1\">신둔파출소</Col><Col id=\"BUY_CHRR_TELNO1\">0316323112</Col><Col id=\"BUY_CHRR_EMAIL1\">hks0835@naver.com</Col><Col id=\"BUY_CHRR_MPNO1\">01053970835</Col><Col id=\"BUY_DEPTNM2\"/><Col id=\"BUY_CHRRNM2\"/><Col id=\"BUY_CHRR_TELNO2\"/><Col id=\"BUY_CHRR_EMAIL2\"/><Col id=\"BUY_CHRR_MPNO2\"/><Col id=\"ETR_BZNO\"/><Col id=\"ETR_NA_TRPL_C\"/><Col id=\"ETR_MTALNM\"/><Col id=\"ETR_REPMNM\"/><Col id=\"ETR_ADR\"/><Col id=\"ETR_BZTPNM\"/><Col id=\"ETR_BZC\"/><Col id=\"ETR_DEPTNM\"/><Col id=\"ETR_CHRRNM\"/><Col id=\"ETR_CHRR_TELNO\"/><Col id=\"ETR_CHRR_EMAIL\"/><Col id=\"STL_METHC1\"/><Col id=\"STL_AM1\"/><Col id=\"STL_METHC2\"/><Col id=\"STL_AM2\"/><Col id=\"STL_METHC3\"/><Col id=\"STL_AM3\"/><Col id=\"STL_METHC4\"/><Col id=\"STL_AM4\"/><Col id=\"SPRTT\">119900</Col><Col id=\"TXA_TT\">11990</Col><Col id=\"TOT_AM\">131890</Col><Col id=\"RQR_STS_C\"/><Col id=\"RPBC_DSC\">1</Col><Col id=\"BYNG_SL_DSC\">1</Col><Col id=\"RSP_C\">000000</Col><Col id=\"RSP_MSG\">정상적으로 처리되었습니다.</Col><Col id=\"RQR_CHAN_DSC\"/><Col id=\"EMAIL_PBC_RQR_YN\">Y</Col><Col id=\"SMS_PBC_RQR_YN\">Y</Col><Col id=\"FAX_PBC_RQR_YN\"/><Col id=\"MOD_TAX_PBC_SQNO\"/><Col id=\"MOD_TAX_NTS_TMS_SQNO\"/><Col id=\"ISTT_PBC_YN\">Y</Col><Col id=\"PBC_DT\">20111027</Col><Col id=\"ERP_REF_NO\">12011102721067224</Col><Col id=\"ASP_TMS_DTM\">20111027114656</Col><Col id=\"ASP_RSP_DTM\">20111027114657</Col><Col id=\"DEPT_C\"/><Col id=\"DEPTNM\"/><Col id=\"BRC\">233082</Col><Col id=\"BRNM\">모가농협</Col><Col id=\"NA_BZPLC\">8808983622873</Col><Col id=\"NA_BZPLNM\">모가농협하나로마트</Col><Col id=\"NA_TEAM_C\">00</Col><Col id=\"NA_TEAMNM\"/><Col id=\"NA_TRPL_C\">2910000133647</Col><Col id=\"NA_CLNTNM\">이천경찰서신둔파출소</Col><Col id=\"NA_CLNT_TEAM_C\">00</Col><Col id=\"NA_CLNT_TEAMNM\"/><Col id=\"NA_WRS_LCLC\">000</Col><Col id=\"NA_WRS_LCLFNM\"/><Col id=\"NA_WRS_MCLC\">000</Col><Col id=\"NA_WRS_MCLFNM\"/><Col id=\"NA_TOT_DSC\">03</Col><Col id=\"NA_TOT_DSNM\">수기등록분</Col><Col id=\"NA_TOT_DTI_DSC\">1010</Col><Col id=\"NA_TOT_DTI_DSNM\">일반</Col><Col id=\"TXBZ_TP_DSC\">010</Col><Col id=\"TXBZ_TP_PBCNM\">상품</Col><Col id=\"RC_MSG\"/><Col id=\"HOFC_BAT_RG_DSC\"/><Col id=\"INPMN_ENO\">129702365</Col><Col id=\"APVMN_ENO\"/><Col id=\"ELSG_YN\">N</Col><Col id=\"DCZ_UYN\">Y</Col><Col id=\"ASP_ETR_YN\">N</Col><Col id=\"SIGN_R_VAL\"/><Col id=\"SPYPL_C\"/><Col id=\"VENDER_C\"/><Col id=\"ORR_DT\"/><Col id=\"ORR_NO\"/><Col id=\"RSR_HDNG1\">05</Col><Col id=\"RSR_HDNG2\">마트사업</Col><Col id=\"RSR_HDNG3\">03</Col><Col id=\"RSR_HDNG4\"/><Col id=\"RSR_HDNG5\"/><Col id=\"RSR_HDNG6\"/><Col id=\"RSR_HDNG7\"/><Col id=\"RSR_HDNG8\"/><Col id=\"RSR_HDNG9\"/><Col id=\"RSR_HDNG10\"/><Col id=\"RSR_HDNG11\"/><Col id=\"RSR_HDNG12\"/><Col id=\"RSR_HDNG13\"/><Col id=\"RSR_HDNG14\"/><Col id=\"RSR_HDNG15\"/><Col id=\"RSR_HDNG16\"/><Col id=\"RSR_HDNG17\"/><Col id=\"RSR_HDNG18\"/><Col id=\"RSR_HDNG19\"/><Col id=\"RSR_HDNG20\"/><Col id=\"RSR_HDNG21\"/><Col id=\"RSR_HDNG22\"/><Col id=\"RSR_HDNG23\"/><Col id=\"RSR_HDNG24\"/><Col id=\"RSR_HDNG25\"/><Col id=\"SOAC_PBC_STSC\">06</Col><Col id=\"FSRG_DTM\"/><Col id=\"FS_RGM\"/><Col id=\"LSCHG_DTM\"/><Col id=\"LS_CHGM\"/><Col id=\"NTS_PRC_STSC\">01</Col><Col id=\"PKG_SQNO\"/><Col id=\"SPLR_CHRR_MPNO_ENCR\"/><Col id=\"SPLR_BZNO_ENCR\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTaxForSvc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_item", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "307", "32", "135", "33", null, null, this);
            obj.set_taborder("0");
            obj.set_text("계산서발행");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "56", "32", "243", "33", null, null, this);
            obj.set_taborder("1");
            obj.set_value("20111027112244nheba12083");
            this.addChild(obj.name, obj);

            obj = new Plugin("TSXMLToolkit", "absolute", "462", "38", null, "21", "424", null, this);
            obj.setProperty("classid", "{BBC1A21F-05A2-44ED-B67E-E7C762F0BE23}");
            obj.setProperty("taborder", "2");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "37", "87", "964", "409", null, null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample0024_txbilTest");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Sample024_txbilTest.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("Sample024_txbilTest.xfdl", "lib::comTSToolKit.xjs");
        this.registerScript("Sample024_txbilTest.xfdl", function() {
        //include "lib::comLib.xjs";
        //include "lib::comTSToolKit.xjs";
        this.Button00_onclick = function(obj,e)
        {
        	var rtnvalue = this.gfn_eTaxSign(this.TSXMLToolkit, this.ds_taxCopy, this.dsTaxForSvc, this.ds_item);
        			
        	if(rtnvalue)
        	{
        		//this.fn_insertTxbilElsg(this.ds_taxCopy);
        		//trace(this.ds_taxCopy.getColumn(0, "ELSG_CNTN"));
        		this.TextArea00.set_value(this.ds_taxCopy.getColumn(0, "ELSG_CNTN"));
        		
        	}
        	else
        	{
        		alert("인증실패");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("Sample024_txbilTest.xfdl");

       
    };
}
)();
