package com.esum.appetizer.util.nexacro;

import java.beans.IntrospectionException;
import java.beans.PropertyDescriptor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Map;
import java.util.Set;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.util.ReflectionUtils;

import com.esum.appetizer.util.DateUtil;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;

public class DataSetHelper {
	protected final Log logger = LogFactory.getLog(getClass());
	private DataSet ds;
	
	public DataSetHelper(String dataSetName) {
		 ds = new DataSet(dataSetName);
	}
	
	public DataSet getDataSet() {
		return ds;
	}
	
	public void addColumns(Class<?> clazz) {
		Field[] fields =  clazz.getDeclaredFields();
		
		if(clazz.isEnum()) {
			for(Field field : fields) {	
				if(!field.getName().equals("ENUM$VALUES"))	
					ds.addColumn(field.getName(), DataTypes.STRING);
			}
		} else {
			for(Field field : fields) {	
				if(!Modifier.isStatic(field.getModifiers())) {
					if(field.getType() == long.class) {
						ds.addColumn(field.getName(), DataTypes.LONG);
					} else if (field.getType() == int.class) {
						ds.addColumn(field.getName(), DataTypes.INT);
					} else if (field.getType() == double.class) {
						ds.addColumn(field.getName(), DataTypes.DOUBLE);
					} else if (field.getType() == Date.class) {
						ds.addColumn(field.getName(), DataTypes.DATE_TIME);
					} else if (field.getType() == Timestamp.class) {
						ds.addColumn(field.getName(), DataTypes.DATE_TIME);
					} else if (field.getType() == byte[].class) {
						ds.addColumn(field.getName(), DataTypes.BLOB);
					} else {
						ds.addColumn(field.getName(), DataTypes.STRING);
					}
				}
			}
		}
	}
	
	public void setData(Map<String, Object> valueMap) {
		int row = ds.newRow();
		Object o = null;
		for(int i = 0; i < ds.getColumnCount(); i++) {
			o = valueMap.get(ds.getColumn(i).getName());

			if(o != null) {
				if( o instanceof BigDecimal) {
					ds.set(row, ds.getColumn(i).getName(), ((BigDecimal)o).toString());
				}else if( o instanceof Date) {
					ds.set(row, ds.getColumn(i).getName(), DateUtil.convertDateToString(DateUtil.DATEFORM, (Date)o));
				}else if( o instanceof Timestamp) {
					ds.set(row, ds.getColumn(i).getName(), DateUtil.convertDateToString(DateUtil.DATEFORM, (Timestamp)o));
				}else if( o instanceof byte[]) {
					ds.set(row, ds.getColumn(i).getName(), (byte[])o);
				} else {
					ds.set(row, ds.getColumn(i).getName(),o.toString());
				}
			}
			System.out.println(ds.getColumn(i).getName());
			System.out.println(ds.getString(row, ds.getColumn(i).getName()));
		}
		System.out.println(row);
		System.out.println(ds.getString(row,"MFT_NA_TRPL_C"));
	}
	
	public void setData(Object vo){
		
		int row = ds.newRow();
		
		Field[] fields =  vo.getClass().getDeclaredFields();
		try {
			for(Field field : fields) {	
				if(!Modifier.isStatic(field.getModifiers()) && ds.getColumn(field.getName()) != null) {

						Method readMethod =  new PropertyDescriptor(field.getName(), vo.getClass()).getReadMethod();
						Object o = ReflectionUtils.invokeMethod(readMethod, vo);
						
						if(o != null) {
							if(ds.getColumn(field.getName()).getDataType() == DataTypes.INT) {
								ds.set(row, field.getName(), (int)o);							
							} else if(ds.getColumn(field.getName()).getDataType() == DataTypes.LONG) {
								ds.set(row, field.getName(), (long)o);
							} else if(ds.getColumn(field.getName()).getDataType() == DataTypes.DOUBLE) {
								ds.set(row, field.getName(), (double)o);
							} else if(ds.getColumn(field.getName()).getDataType() == DataTypes.DATE_TIME) {
								ds.set(row, field.getName(), (Date)o);
							} else if(ds.getColumn(field.getName()).getDataType() == DataTypes.DATE_TIME) {
								ds.set(row, field.getName(), (Timestamp)o);
							} else if(ds.getColumn(field.getName()).getDataType() == DataTypes.BLOB) {
								ds.set(row, field.getName(), (byte[])o);
							} else {
								ds.set(row, field.getName(), o.toString());
							}							
						}
					}
			}
		} catch (IntrospectionException e) {
			logger.error("DataSetHelper SetData Error", e);
		}
	}
	
	public DataSet makeDataSet(String dataSetName, Class<?> clazz) {
		DataSet ds = new DataSet(dataSetName);
		
		Field[] fields =  clazz.getDeclaredFields();
		for(Field field : fields) {	
			if(!Modifier.isStatic(field.getModifiers())) {
				if(field.getType() == long.class) {
					ds.addColumn(field.getName(), DataTypes.LONG);
				} else if (field.getType() == int.class) {
					ds.addColumn(field.getName(), DataTypes.INT);
				} else if (field.getType() == double.class) {
					ds.addColumn(field.getName(), DataTypes.DOUBLE);		
				} else if (field.getType() == Date.class) {
					ds.addColumn(field.getName(), DataTypes.DATE_TIME);		
				} else if (field.getType() == Timestamp.class) {
					ds.addColumn(field.getName(), DataTypes.DATE_TIME);			
				} else { 
					ds.addColumn(field.getName(), DataTypes.STRING);
				}
			}
		}	
		return ds;
	}
	
	public void addColumns(Set<String> mapKeys) {
		for(String key : mapKeys) {
			ds.addColumn(key, DataTypes.STRING);
		}
	}	
}
