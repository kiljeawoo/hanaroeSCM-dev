package com.nh.escm.vo;

public class Menu {
	private String menuSeq      ;
	private String menuId       ;
	private String menuLevel    ;
	private String upperMenu    ;
	private String svcGroup     ;
	private String fileName     ;
	private String FileType     ;
	private String FilePath     ;
	private String displayYn	;
	private String useYn        ;	
	private String initRegDt 	;
	private String initRegUser 	;
	private String lastChgDt	;
	private String lastChgUser	;
	public String getMenuSeq() {
		return menuSeq;
	}
	public void setMenuSeq(String menuSeq) {
		this.menuSeq = menuSeq;
	}
	public String getMenuId() {
		return menuId;
	}
	public void setMenuId(String menuId) {
		this.menuId = menuId;
	}
	public String getMenuLevel() {
		return menuLevel;
	}
	public void setMenuLevel(String menuLevel) {
		this.menuLevel = menuLevel;
	}
	public String getUpperMenu() {
		return upperMenu;
	}
	public void setUpperMenu(String upperMenu) {
		this.upperMenu = upperMenu;
	}
	public String getSvcGroup() {
		return svcGroup;
	}
	public void setSvcGroup(String svcGroup) {
		this.svcGroup = svcGroup;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getFileType() {
		return FileType;
	}
	public void setFileType(String fileType) {
		FileType = fileType;
	}
	public String getFilePath() {
		return FilePath;
	}
	public void setFilePath(String filePath) {
		FilePath = filePath;
	}
	public String getDisplayYn() {
		return displayYn;
	}
	public void setDisplayYn(String displayYn) {
		this.displayYn = displayYn;
	}
	public String getUseYn() {
		return useYn;
	}
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
	public String getInitRegDt() {
		return initRegDt;
	}
	public void setInitRegDt(String initRegDt) {
		this.initRegDt = initRegDt;
	}
	public String getInitRegUser() {
		return initRegUser;
	}
	public void setInitRegUser(String initRegUser) {
		this.initRegUser = initRegUser;
	}
	public String getLastChgDt() {
		return lastChgDt;
	}
	public void setLastChgDt(String lastChgDt) {
		this.lastChgDt = lastChgDt;
	}
	public String getLastChgUser() {
		return lastChgUser;
	}
	public void setLastChgUser(String lastChgUser) {
		this.lastChgUser = lastChgUser;
	}
	@Override
	public String toString() {
		return "Menu [menuSeq=" + menuSeq + ", menuId=" + menuId
				+ ", menuLevel=" + menuLevel + ", upperMenu=" + upperMenu
				+ ", svcGroup=" + svcGroup + ", fileName=" + fileName
				+ ", FileType=" + FileType + ", FilePath=" + FilePath
				+ ", displayYn=" + displayYn + ", useYn=" + useYn
				+ ", initRegDt=" + initRegDt + ", initRegUser=" + initRegUser
				+ ", lastChgDt=" + lastChgDt + ", lastChgUser=" + lastChgUser
				+ "]";
	}
 	
}
