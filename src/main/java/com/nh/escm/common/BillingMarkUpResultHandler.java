package com.nh.escm.common;

import org.apache.ibatis.session.ResultContext;
import org.apache.ibatis.session.ResultHandler;

import java.util.List;
import java.util.Map;

public class BillingMarkUpResultHandler implements ResultHandler {

    public List<Map<String, Object>> returnList = null;

    public BillingMarkUpResultHandler() {

    }
    public BillingMarkUpResultHandler(List<Map<String, Object>> returnList) {
        this.returnList = returnList;
    }

    @Override
    public void handleResult(ResultContext context) {
    	Object object = context.getResultObject();
        returnList.add((Map<String, Object>) object);
    }
}