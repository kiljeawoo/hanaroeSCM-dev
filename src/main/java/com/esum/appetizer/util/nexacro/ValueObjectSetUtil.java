package com.esum.appetizer.util.nexacro;

import java.beans.BeanInfo;
import java.beans.IntrospectionException;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.springframework.util.ReflectionUtils;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.LoggerUtil;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.Variable;
import com.nexacro.xapi.data.VariableList;

/**
 * ValueObject 관련 유틸리티
 * @author YunChang.Lee
 *
 */
public class ValueObjectSetUtil {
	private static Logger logger = LoggerUtil.getServerLogger(ValueObjectSetUtil.class);
	
	/**
	 * 넥스크로의  VariableList으로 부터 VO을 만들어 낸다.
	 * @param clazz
	 * @param variableList
	 * @return
	 * @throws InstantiationException
	 * @throws IllegalAccessException
	 * @throws IntrospectionException
	 */
	public static <T> T setVariables(Class<T> clazz, VariableList variableList) throws InstantiationException, IllegalAccessException, IntrospectionException {
		T vo = clazz.newInstance();

		BeanInfo info = Introspector.getBeanInfo(clazz);  
		PropertyDescriptor[] props = info.getPropertyDescriptors();
		for (PropertyDescriptor pd : props) 
		{  
			Variable variable = variableList.get(pd.getName());
			if(variable != null) {
				if( pd.getPropertyType()  == long.class) {
					ReflectionUtils.invokeMethod(pd.getWriteMethod(), vo, Long.parseLong(variable.getString()));	
				} else if( pd.getPropertyType() == int.class) {
					ReflectionUtils.invokeMethod(pd.getWriteMethod(), vo, Integer.parseInt(variable.getString()));
				} else {
					ReflectionUtils.invokeMethod(pd.getWriteMethod(), vo, variable.getString());
				}
			}	
		}
		return vo;		
	}
	
	/**
	 * 넥사크로 DataSet으로 부터 VO List 을 생성하는  API
	 * @param clazz
	 * @param dataSet
	 * @return
	 * @throws InstantiationException
	 * @throws IllegalAccessException
	 * @throws IntrospectionException
	 */
	public static <T> List<T> setVariables(Class<T> clazz, DataSet dataSet) throws InstantiationException, IllegalAccessException, IntrospectionException {
		
		if(dataSet == null || dataSet.getRowCount() == 0) {
			return null;
		}
		
		List<T> voList = new ArrayList<T>(dataSet.getRowCount());
		
		BeanInfo info = Introspector.getBeanInfo(clazz);  
		PropertyDescriptor[] props = info.getPropertyDescriptors();

		for(int i =0 ; i<dataSet.getRowCount(); i++) {
			T vo = clazz.newInstance();
			for (PropertyDescriptor pd : props) {
				if(dataSet.containsColumn(pd.getName())){
					if(pd.getPropertyType() != List.class){
						if( pd.getPropertyType()  == long.class) {
							ReflectionUtils.invokeMethod(pd.getWriteMethod(), vo, dataSet.getLong(i, pd.getName()));	
						} else if( pd.getPropertyType() == int.class) {
							ReflectionUtils.invokeMethod(pd.getWriteMethod(), vo, dataSet.getInt(i, pd.getName()));
						} else if( pd.getPropertyType() == double.class) {
							ReflectionUtils.invokeMethod(pd.getWriteMethod(), vo, dataSet.getDouble(i, pd.getName()));
						} else {
							ReflectionUtils.invokeMethod(pd.getWriteMethod(), vo, dataSet.getString(i, pd.getName()));
						}	
					}
				}
			}
			voList.add(vo);
		}
		return voList;		
	}
	
	//데이터셋 VO로 변환
	public static <T> List<T> dataSetToVO(DataSet ds, Class<T> t){	
		
		String dsRowType = "setDsRowType";
		List<T> list = new ArrayList<T>();
		
		try {
		
			if(ds == null || ds.getRowCount() == 0) {
				return null;
			}	
			
			for(int i = 0 ; i < ds.getRowCount(); i++){
								
				T vo = t.newInstance();
				
				for(int j = 0; j < ds.getColumnCount(); j++) {
					
					String colName = ds.getColumn(j).getName();
					
					Object val = ds.getObject(i, j);
					int dsType = getDsType(vo, colName);				
					/*
					if(dsType == -1){
						throw new AppetizerException("[dataSetToVO] VO의 프로퍼티명과 일치하는 데이터셋 컬럼명이 없습니다.\n("+colName+") is not found!");
					}
					*/
					if(dsType == DataTypes.STRING){
						val = ds.getString(i, j);				
					}
					else if(dsType == DataTypes.INT){
						val = ds.getInt(i, j);
					}
					else if(dsType == DataTypes.LONG){
						val = ds.getLong(i, j);
					}
					else if(dsType == DataTypes.DOUBLE){
						val = ds.getDouble(i, j);					
					}
					else if(dsType == DataTypes.FLOAT){
						val = ds.getFloat(i, j);
					}
					else if(dsType == DataTypes.BIG_DECIMAL){
						val = ds.getBigDecimal(i, j);					
					}
					else if(dsType == DataTypes.BOOLEAN){
						val = ds.getBoolean(i, j);					
					}
					else if(dsType == DataTypes.DATE_TIME){ //java.util.Date
						val = (Date)val;					
					}
					else if(dsType == -100){ //java.sql.Date
						java.util.Date utilDate = (Date)val;
					    java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());					
						val = sqlDate;
					}
					
					String methodName = colName.substring(0,1).toUpperCase();
					methodName += colName.substring(1, colName.length());
					methodName = "set" + methodName;				
					callSetMethod(vo, methodName, new Object[]{val});			
				}
				callSetMethod(vo, dsRowType, new Object[]{ds.getRowType(i)});
				list.add(vo);
			}
			
		}catch(AppetizerException e1){
			throw e1;		
		}catch(InstantiationException e2){
			throw new AppetizerException("");
		}catch(IllegalAccessException e3){
			throw new AppetizerException("");
		}
			
		return list;		
	}
	
	
	//해당 데이터셋의 자료형 리턴
	public static int getDsType(Object vo, String propName){
		
		int dataType = -1;
		
		try {
			
			BeanInfo info = Introspector.getBeanInfo(vo.getClass());  
			PropertyDescriptor[] props = info.getPropertyDescriptors();
			for (PropertyDescriptor pd : props){  			
												
				if(pd.getPropertyType() == Class.class){					
					continue;					
				}
				
				String fieldName = pd.getName();
				
				if(fieldName.equals(propName)){				
					if(pd.getPropertyType() == int.class){						
						dataType = DataTypes.INT;
					}
					else if(pd.getPropertyType() == long.class){
						dataType = DataTypes.LONG;
					}
					else if(pd.getPropertyType() == double.class){
						dataType = DataTypes.DOUBLE;
					}
					else if(pd.getPropertyType() == float.class){
						dataType = DataTypes.FLOAT;
					}
					else if(pd.getPropertyType() == BigDecimal.class){
						dataType = DataTypes.BIG_DECIMAL;
					}
					else if(pd.getPropertyType() == boolean.class){
						dataType = DataTypes.BOOLEAN;
					}
					else if(pd.getPropertyType() == Date.class){ //util.Date
						dataType = DataTypes.DATE_TIME;
					}
					else if(pd.getPropertyType() == java.sql.Date.class){ //sql.Date
						dataType = -100;
					}					
					else{
						dataType = DataTypes.STRING;
					}
				}				
			}
			
		} catch (IntrospectionException e) {
			throw new AppetizerException("[getDsType] 데이터셋 자료형 리턴 Error!");
		}
		
		return dataType;
	}
	
	//set메소드 호출
	public static void callSetMethod(Object vo, String callName, Object[] param){
		
		try{
			
			Method methods [] = vo.getClass().getMethods();
			for(int i=0 ; i < methods.length ; i++){			
				String methodName = methods[i].getName();			
				if(methodName.equals(callName)){
					methods[i].invoke(vo, param);
				}			
			}
		} catch (InvocationTargetException ie) {
			throw new AppetizerException("[callSetMethod] Set 메소드 호출 에러 !\n(파라미터 타입 불일치)");
		} catch (IllegalAccessException iae) {
			throw new AppetizerException("[callSetMethod] Set 메소드 호출 에러 !\n(파라미터 타입 불일치)");
		} catch (AppetizerException ae) {
			throw new AppetizerException("[callSetMethod] Set 메소드 호출 에러 !\n(파라미터 타입 불일치)");
		}
	}
	
	//데이터셋 로그 출력
	public static void dataSetPrint(DataSet ds){
		
		if(ds == null){
			logger.debug("해당 데이터셋이 NULL입니다.");
			return;
		}
		String colName = "";
		String data = "";
		logger.debug("데이터셋 이름: "+ds.getName());
		for(int j=0; j<ds.getColumnCount();j++){
			colName += ds.getColumn(j).getName()+"\t\t\t";
		}
		logger.debug(colName);
		for(int i=0; i< ds.getRowCount() ; i++){
			for(int j=0; j<ds.getColumnCount();j++){
				data += ds.getObject(i, j)+"\t\t\t";
			}
			logger.debug(data);
			data = "";
		}
	} 
	
	/**
	 * Object to Map
	 * @param obj
	 * @return
	 */
	public static Map<String, Object> ConverObjectToMap(Object obj){
        try {
            Field[] fields = obj.getClass().getDeclaredFields();
            Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
            for(int i=0; i<=fields.length-1;i++){
                fields[i].setAccessible(true);
                resultMap.put(fields[i].getName(), fields[i].get(obj));
            }
            return resultMap;
        } catch (IllegalArgumentException e) {
        	logger.error(e.getMessage(), e);
        } catch (IllegalAccessException e) {
        	logger.error(e.getMessage(), e);
        }
        return null;
    }
	
	/**
	 * Map to Object
	 * @param map
	 * @param objClass
	 * @return
	 */
	public static Object convertMapToObject(Map<String, Object> map, Object objClass){
        String keyAttribute = null;
        String setMethodString = "set";
        String methodString = null;
        Iterator<String> itr = map.keySet().iterator();
        while(itr.hasNext()){
            keyAttribute = (String) itr.next();
            methodString = setMethodString+keyAttribute.substring(0,1).toUpperCase()+keyAttribute.substring(1);
            try {
                Method[] methods = objClass.getClass().getDeclaredMethods();
                for(int i=0;i<=methods.length-1;i++){
                    if(methodString.equals(methods[i].getName())){
                        System.out.println("invoke : "+methodString);
                        methods[i].invoke(objClass, map.get(keyAttribute));
                    }
                }
            } catch (InvocationTargetException | IllegalAccessException | IllegalArgumentException e) {
                logger.error(e.getMessage());
            }
        }
        return objClass;
    }
}
