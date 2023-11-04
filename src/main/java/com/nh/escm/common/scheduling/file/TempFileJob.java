package com.nh.escm.common.scheduling.file;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.Iterator;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.filefilter.FileFilterUtils;
import org.apache.commons.io.filefilter.IOFileFilter;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.time.DateUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.exception.AppetizerException;

public class TempFileJob {
	protected final Log logger = LogFactory.getLog(getClass());
	
	public void start() {
		String currentServer = System.getProperty("SERVER");
		String mainServer = Configurer.getProperty("scheduling.main.server");
		
		logger.debug("Current Server:" + currentServer);
		logger.debug("Main Server:" + mainServer);
		
		if (currentServer != null && currentServer.equals(mainServer)) {
			logger.debug("This System is Main Server. Ready to run Scheduling.");
			cleanTemp(); // Job 실행
		} else {
			logger.debug("This System is not Main Server. Do not run Scheduling.");
		}
	}
	
	private void cleanTemp() {
		logger.info("!!Running... TempFileJob");
		
		String tempPath = Configurer.getProperty("file.temp.path");
		if (StringUtils.isEmpty(tempPath)) {
			throw new AppetizerException("file.temp.path is empty.");
		}
		
		File tempDir = new File(tempPath);
		int count = 0;
		
		if (tempDir.exists() && tempDir.isDirectory()) {
			IOFileFilter oldFileFilter = FileFilterUtils.ageFileFilter(DateUtils.addDays(new Date(), -1));
			Iterator<File> oldFiles = FileUtils.iterateFiles(tempDir, oldFileFilter, null);
			
			while (oldFiles.hasNext()) {
				try {
					FileUtils.forceDelete(oldFiles.next());
					count++;
				} catch (IOException e) {
					logger.error(e.getMessage());
				} catch (AppetizerException e) {
					logger.error(e.getMessage());
				}
			}
		}
		
		logger.info("!!End... TempFileJob - file.temp.path: " + tempPath + ", Deleted file count: " + count);
	}
}
