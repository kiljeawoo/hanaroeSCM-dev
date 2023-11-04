package com.nh.escm.util;

public class QueryMaker {
	
	public static void main(String[] args) {
		
		QueryMaker qm = new QueryMaker();
		
		String sql = "SELECT A.STPL_DT AS YMD ,TRUNC(A.STPL_AM/1000) AS AMOUNT ,A.STPL_QT AS QTY ,A.WRS_C AS CODE ,A.WRSNM AS NAME FROM IAS_STPL_DD_WRS_C A, IAS_INTE_WRS_C B WHERE A.TRPL_C = B.TRPL_C AND A.WRS_C = B.WRS_C AND A.TRPL_C = ? AND A.STPL_DT BETWEEN ? AND ? ORDER BY A.STPL_DT DESC, A.STPL_AM DESC, A.STPL_QT DESC ";
		String param = "8801038000015(String), 20150601(String), 20150630(String)";
		
		qm.make(sql, param);
		
	}
	
	
	public void make(String sql,String param){
		
		sql = sql.trim();
		param = param.trim();
		
		String _param[] = param.split(",");
		
		for(int i=0; i<_param.length;i++){
			
			String str = _param[i].trim();
			int s = str.indexOf("(");
			if(s != -1) str = str.substring(0,s);
			_param[i] = "'"+str+"'";
			//System.out.println(_param[i]);
		}
		
		int index = 0;
		String s = "";
		
		for(int i=0; i<sql.length();i++){
			
			
			char a = sql.charAt(i);
			
			if(a == 63){				
				s += _param[index];
				index++;
			}else{
				s += a;				
			}		
		}
		
		System.out.println(s);
		
	}

}
