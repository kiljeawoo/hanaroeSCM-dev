package com.nh.escm.common.vo;
import com.esum.appetizer.util.DateUtil;

public class SQLNames {
	
	public enum RightsBizPlace {
		NA_TRPL_C, CLNTNM, NA_MBCO_DSC
	}
	
	public enum CommonSimpleCode {
		SIMP_C, SIMP_CNM, SIMP_C_EXPL
	}
	
	public enum CommonSequence {
		NAME, CURRENT_KEY, CURRENT_HEX
	}
	
	public enum SequenceKeyName {
		TB_GD_WRS_RG_REQ(10),
		TB_OD_ORDER_M(16),
		TB_GD_WRS_RG_REQ_TEMP(20),
		TB_OD_DLVPNSHT_M(16, "VAN"),
		TB_OD_DLVPNSHT_TEMP_M(20),
		TB_PUSH_MSG(38),	
		TB_LG_SPYPLVHC(13, DateUtil.getCurrentDate("yyyyMMdd")),
		TB_GD_EVENT_CPN_TEMP(20),
		TB_LG_VHCBKG_M(13,"V"+DateUtil.getCurrentDate("yyMMdd")),	
		TB_TR_HANARO_REQ(20),
		TB_TR_FLEX_REQ(20),
		TB_OD_GOODDQPD_REQ(20),
		TB_GD_TRPLTP_RG_REQ_FILE(10);


		public int length;
		public String prefix;
		private SequenceKeyName(int length) {
			this.length = length;
		}
		private SequenceKeyName(int length, String prefix) {
			this.length = length;
			this.prefix = prefix;
		}		
	}
	
	
	/*포털 시퀀스*/
	public enum PortalSequenceKeyName {
		 SEQ, SQ_NAME
	}
	public enum PortalSequenceTableName {
		PT_MENU_AMN
	}
	public enum PortalSequenceKeySeqName {
		SQ_MENU, SQ_CSLT, SQ_BBRD, SQ_APDFL, SQ_ELT
	}
}
