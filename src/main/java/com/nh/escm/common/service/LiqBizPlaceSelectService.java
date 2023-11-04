package com.nh.escm.common.service;

import com.nh.escm.common.dao.LiqBizPlaceSelectDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class LiqBizPlaceSelectService {

    @Autowired
    private LiqBizPlaceSelectDao liqBizPlaceSelectDao;

    public List<Map<String,Object>> get_gds_alcoholic_drink_biz_place(){
        return liqBizPlaceSelectDao.get_gds_alcoholic_drink_biz_place();
    }
}
