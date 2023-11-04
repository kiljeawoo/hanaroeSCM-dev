package com.nh.escm.common.dao;

import com.esum.appetizer.dao.AbstractDao;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

public class LiqBizPlaceSelectDao extends AbstractDao {
    public List<Map<String,Object>> get_gds_alcoholic_drink_biz_place(){
//        return getSqlSession().selectList("LiqBizPlaceSelectDao.get_gds_liq_biz_place");
        return getSqlSession().selectList("LiqBizPlaceSelectDao.get_gds_alcoholic_drink_biz_place");
    }
}
