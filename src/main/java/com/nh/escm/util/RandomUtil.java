package com.nh.escm.util;


import java.util.Random;

import org.apache.commons.lang.math.RandomUtils;
import org.springframework.context.ApplicationContextAware;

public abstract  class RandomUtil  implements ApplicationContextAware {
	

	/*****************************
	 * 설명 : 6자리 랜덤숫자 생성로직
	 *****************************/
	public static String getRandomNumber() {
		
		String sRandom = String.valueOf(RandomUtils.nextInt(new Random(),999999));
		String tmp = "";
		if(sRandom.length() < 6){
			for (int i = 0 ; i < 6-sRandom.length(); i++){
				tmp = tmp+"0";
			}
			sRandom = sRandom+tmp;
		}		
		 return sRandom;
	}
 
}
