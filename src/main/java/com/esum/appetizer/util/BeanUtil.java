package com.esum.appetizer.util;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanFactoryUtils;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

public class BeanUtil implements ApplicationContextAware {
	
	private static ApplicationContext ctx;
	
	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		ctx = applicationContext;
	}
	
	public static <T> T getBean(Class<T> requiredType) {
		return BeanFactoryUtils.beanOfType(ctx, requiredType); // ctx.getBean(requiredType);
	}
	
}
