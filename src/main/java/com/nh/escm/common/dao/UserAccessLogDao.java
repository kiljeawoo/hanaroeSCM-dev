package com.nh.escm.common.dao;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.common.vo.UserAccessLogVO;

public class UserAccessLogDao extends AbstractDao {
	
	public void insert(UserAccessLogVO vo) {
		getSqlSession().insert("common.insertUserAccessLog", vo);
	}
	
}
