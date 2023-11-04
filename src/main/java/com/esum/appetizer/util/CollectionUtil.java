package com.esum.appetizer.util;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

public class CollectionUtil {

	/**
	 * <pre>
	 * List --> Set
	 * </pre> 
	 * @param list
	 * @return
	 */
	public static Set<Object> convertList2Set(List<Object> list) {
		if (list == null) {
			return new HashSet<Object>();
		}

		Set<Object> set = new HashSet<Object>();
		for(Object o:list) {
			set.add(o);
		}
		return set;
	}
	
	/**
	 * <pre>
	 * Set --> List
	 * </pre>
	 * @param set
	 * @return
	 */
	public static List<Object> convertSet2List(Set<Object> set) {
		if (set == null) {
			return new ArrayList<Object>();
		}

		List<Object> list = new ArrayList<Object>();
		Iterator<Object> iterator = set.iterator();
		Object o;
		while (iterator.hasNext()) {
			o = iterator.next();
			list.add(o);
		}
		return list;
	}
	
	/**
	 * <pre>
	 * List<String> --> String[]
	 * </pre>
	 * @param stringList
	 * @return
	 */
	public static String[] getStringArrayFromStringList(List<String> stringList) {
		if (stringList == null) {
			return null;
		}

		String o;
		int listSize = stringList.size();
		String[] stringArray = new String[listSize];
		for (int i = 0; i < listSize; i++) {
			o = (String) stringList.get(i);
			stringArray[i] = o;
		}

		return stringArray;
	}

	public static String[] getStringArrayFromObjectArray(Object[] objectArray) {
		if (objectArray == null) {
			return null;
		}

		String o;
		String[] stringArray = new String[objectArray.length];
		for (int i = 0; i < objectArray.length; i++) {
			o = (String) objectArray[i];
			stringArray[i] = o;
		}
		return stringArray;
	}
    
    public static boolean isEmpty(Collection<?> collection)
    {
        if(collection == null || collection.size() <= 0)
        {
            return true;
        }
        return false;
    }
}
