//CSS=workFrame.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("","theme://images/btn_WFSA_Searchbtn.png","","0","0","50","50","true");
    this._addCss("Button.btn_WFSA_Searchbtn", "background", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Button.btn_WFSA_Searchbtn", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFSA_SearchOpen", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WFSA_SearchClose", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_CRUD", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Group", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_PopupClose", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Bookmark", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_BookmarkS", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Calendarmm", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Calendarmm_S", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_CalendarPrev", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CalendarNext", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_cmb", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_POP_Brwsbtn", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Div.div_WF_ScrollWidth>#vscrollbar", "border", obj, ["normal", "disabled"]);
    this._addCss("Div.div_WF_ScrollWidth>#hscrollbar", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_pdiv>#body", "border", obj, ["normal", "focused"]);
    this._addCss("Radio.rdo_WF_Essential", "border", obj, ["normal"]);
    this._addCss("Edit.edt_WF_Error", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("MaskEdit.msk_WF_Error", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo.cmb_WF_Error", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo.cmb_WF_Error>#comboedit", "border", obj, ["normal"]);
    this._addCss("TextArea.txt_WF_file", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WFSA_Searchbtn_O.png","","0","0","50","50","true");
    this._addCss("Button.btn_WFSA_Searchbtn", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WFSA_Searchbtn_P.png","","0","0","50","50","true");
    this._addCss("Button.btn_WFSA_Searchbtn", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_WFSA_Searchbtn_D.png","","0","0","50","50","true");
    this._addCss("Button.btn_WFSA_Searchbtn", "background", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Searchbtn.png')");
    this._addCss("Button.btn_WF_Searchbtn", "image", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_WF_Searchbtn", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleU", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleD", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_PagePreviousP", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_PageNextP", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_PagePrevious", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_PageNext", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Grdexpand", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Grdreduce", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CalendarPrev", "imagealign", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_CalendarNext", "imagealign", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_cmb", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Searchbtn_O.png')");
    this._addCss("Button.btn_WF_Searchbtn", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Searchbtn_P.png')");
    this._addCss("Button.btn_WF_Searchbtn", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Searchbtn_D.png')");
    this._addCss("Button.btn_WF_Searchbtn", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WFSA_SearchOpen.png","","0","0","50","50","true");
    this._addCss("Button.btn_WFSA_SearchOpen", "background", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WFSA_SearchOpen_O.png","","0","0","50","50","true");
    this._addCss("Button.btn_WFSA_SearchOpen", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WFSA_SearchOpen_P.png","","0","0","50","50","true");
    this._addCss("Button.btn_WFSA_SearchOpen", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_WFSA_SearchClose.png","","0","0","50","50","true");
    this._addCss("Button.btn_WFSA_SearchClose", "background", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WFSA_SearchClose_O.png","","0","0","50","50","true");
    this._addCss("Button.btn_WFSA_SearchClose", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WFSA_SearchClose_P.png","","0","0","50","50","true");
    this._addCss("Button.btn_WFSA_SearchClose", "background", obj, ["pushed"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_WF_CRUD", "align", obj, ["normal", "focused", "selected"]);
    this._addCss("Grid.grd_WF_pdiv", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_Label_c", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Page", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_PageS", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_MiniTitle", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Calendaryy", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_POP_Brwsmsg", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GID_Title", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_CRUD.png","stretch","7","7","0","0","true");
    this._addCss("Button.btn_WF_CRUD", "background", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Button.btn_WF_CRUD", "bordertype", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_Group", "bordertype", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_ShuttleL", "bordertype", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_ShuttleR", "bordertype", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_ShuttleU", "bordertype", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_ShuttleD", "bordertype", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Grdexpand", "bordertype", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Grdreduce", "bordertype", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Popup", "bordertype", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_PopupClose", "bordertype", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Div.div_WFSA_Searchbg", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_pdiv", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Button.btn_WF_CRUD", "color", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_Group", "color", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_Calendarmm", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Calendarmm_S", "color", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_POP_Brwsbtn", "color", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Static.sta_WF_MiniTitle", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Calendaryy", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Menulist", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("Button.btn_WF_CRUD", "font", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_Group", "font", obj, ["normal", "focused", "selected"]);
    this._addCss(".Cellgrd_WF_sum01", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_DescriptionB01", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DescriptionE01", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DescriptionB02", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DescriptionE02", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_POP_Brwsmsg", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_CRUD_O.png","stretch","7","7","0","0","true");
    this._addCss("Button.btn_WF_CRUD", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_CRUD_P.png","stretch","7","7","0","0","true");
    this._addCss("Button.btn_WF_CRUD", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("#f0f0f0ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_CRUD", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleU", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleD", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PagePreviousP", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PageNextP", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PagePrevious", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PageNext", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Grdexpand", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Grdreduce", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Popup", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#bababaff","");
    this._addCss("Button.btn_WF_CRUD", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleU", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleD", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PagePreviousP", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PageNextP", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PagePrevious", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PageNext", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Grdexpand", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Grdreduce", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Popup", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Button.btn_WF_CRUD", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Group", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleU", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleD", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Grdexpand", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Grdreduce", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Popup", "color", obj, ["disabled"]);
    this._addCss("Static.sta_GID_txt02", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Button.btn_WF_Group", "align", obj, ["normal", "focused", "selected"]);
    this._addCss("Radio.rdo_WF_Essential", "align", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_AlignLeft", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_Menulist", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_Group.png","stretch","13","0","0","0","true");
    this._addCss("Button.btn_WF_Group", "background", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_padding("0 0 0 12");
    this._addCss("Button.btn_WF_Group", "padding", obj, ["normal", "focused", "selected"]);
    this._addCss("Static.sta_INFO_title", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_Group_O.png","stretch","13","0","0","0","true");
    this._addCss("Button.btn_WF_Group", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_Group_P.png","stretch","13","0","0","0","true");
    this._addCss("Button.btn_WF_Group", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_Group_D.png","stretch","13","0","0","0","true");
    this._addCss("Button.btn_WF_Group", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_ShuttleL", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_ShuttleR", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_ShuttleU", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_ShuttleD", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_PagePreviousP", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_PageNextP", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_PagePrevious", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_PageNext", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Grdexpand", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Grdreduce", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Popup", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefefe 0,100 #f1f1f1");
    this._addCss("Button.btn_WF_ShuttleL", "gradation", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_ShuttleR", "gradation", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_ShuttleU", "gradation", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_ShuttleD", "gradation", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_Grdexpand", "gradation", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_Grdreduce", "gradation", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_Popup", "gradation", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#aeaeaeff","");
    this._addCss("Button.btn_WF_ShuttleL", "border", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_ShuttleR", "border", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_ShuttleU", "border", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_ShuttleD", "border", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_PagePreviousP", "border", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_PageNextP", "border", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_PagePrevious", "border", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_PageNext", "border", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_Grdexpand", "border", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_Grdreduce", "border", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_Popup", "border", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["normal", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fcfcfc 0,100 #dbdbdb");
    this._addCss("Button.btn_WF_ShuttleL", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_ShuttleR", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_ShuttleU", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_ShuttleD", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Grdexpand", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Grdreduce", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Popup", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#29a5c0ff","");
    this._addCss("Button.btn_WF_ShuttleL", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_WF_ShuttleR", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_WF_ShuttleU", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_WF_ShuttleD", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_WF_PagePreviousP", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_WF_PageNextP", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_WF_PagePrevious", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_WF_PageNext", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Grdexpand", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Grdreduce", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Popup", "border", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL_O.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #dbdbdb 0,100 #fcfcfc");
    this._addCss("Button.btn_WF_ShuttleL", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleR", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleU", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleD", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_Grdexpand", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_Grdreduce", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_Popup", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL_D.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["normal", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR_O.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR_D.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleU.png')");
    this._addCss("Button.btn_WF_ShuttleU", "image", obj, ["normal", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleU_O.png')");
    this._addCss("Button.btn_WF_ShuttleU", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleU_D.png')");
    this._addCss("Button.btn_WF_ShuttleU", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleD.png')");
    this._addCss("Button.btn_WF_ShuttleD", "image", obj, ["normal", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleD_O.png')");
    this._addCss("Button.btn_WF_ShuttleD", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleD_D.png')");
    this._addCss("Button.btn_WF_ShuttleD", "image", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefefe 0,100 #f0f0f0");
    this._addCss("Button.btn_WF_PagePreviousP", "gradation", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_PageNextP", "gradation", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_PagePrevious", "gradation", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_PageNext", "gradation", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_PagePreviousP.png')");
    this._addCss("Button.btn_WF_PagePreviousP", "image", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fafafa 0,100 #dcdcdc");
    this._addCss("Button.btn_WF_PagePreviousP", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_PageNextP", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_PagePrevious", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_PageNext", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_PagePreviousP_O.png')");
    this._addCss("Button.btn_WF_PagePreviousP", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #dadada 0,100 #fcfcfc");
    this._addCss("Button.btn_WF_PagePreviousP", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_PageNextP", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_PagePrevious", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_PageNext", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_PagePreviousP_D.png')");
    this._addCss("Button.btn_WF_PagePreviousP", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_PageNextP.png')");
    this._addCss("Button.btn_WF_PageNextP", "image", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_PageNextP_O.png')");
    this._addCss("Button.btn_WF_PageNextP", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_PageNextP_D.png')");
    this._addCss("Button.btn_WF_PageNextP", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_PagePrevious.png')");
    this._addCss("Button.btn_WF_PagePrevious", "image", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_PagePrevious_O.png')");
    this._addCss("Button.btn_WF_PagePrevious", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_PagePrevious_D.png')");
    this._addCss("Button.btn_WF_PagePrevious", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_PageNext.png')");
    this._addCss("Button.btn_WF_PageNext", "image", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_PageNext_O.png')");
    this._addCss("Button.btn_WF_PageNext", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_PageNext_D.png')");
    this._addCss("Button.btn_WF_PageNext", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Grdexpand.png')");
    this._addCss("Button.btn_WF_Grdexpand", "image", obj, ["normal", "focused", "selected", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Grdexpand_P.png')");
    this._addCss("Button.btn_WF_Grdexpand", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Grdexpand_D.png')");
    this._addCss("Button.btn_WF_Grdexpand", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Grdreduce.png')");
    this._addCss("Button.btn_WF_Grdreduce", "image", obj, ["normal", "focused", "selected", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Grdreduce_P.png')");
    this._addCss("Button.btn_WF_Grdreduce", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Grdreduce_D.png')");
    this._addCss("Button.btn_WF_Grdreduce", "image", obj, ["disabled"]);

    obj = new nexacro.Style_font("bold 9 Gulim");
    this._addCss("Button.btn_WF_Popup", "font", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_POP_Brwsbtn", "font", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Static.sta_WF_Subtitle", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Location", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_PopupClose.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_PopupClose", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_PopupCloseP.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_PopupClose", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_Bookmark.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_Bookmark", "background", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_padding("0 0 2 0");
    this._addCss("Button.btn_WF_Bookmark", "padding", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Button.btn_WF_BookmarkS", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_Bookmark_P.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_Bookmark", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_BookmarkS", "background", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_Bookmark_D.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_Bookmark", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Calendarmm", "background", obj, ["normal", "disabled", "pushed", "focused", "selected"]);
    this._addCss("Div.div_WF_Calendar", "background", obj, ["normal"]);
    this._addCss("PopupDiv.pdiv_WF_Calendar", "background", obj, ["normal"]);
    this._addCss("Div.div_WF_MenuList", "background", obj, ["normal"]);
    this._addCss("PopupDiv.pdiv_WF_MenuList", "background", obj, ["normal"]);
    this._addCss("Combo.cmb_WF_Error>#combolist", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_Labelbg", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Labelbg_R", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#a9b0b4ff","");
    this._addCss("Button.btn_WF_Calendarmm", "border", obj, ["normal", "disabled", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_font("11 Verdana");
    this._addCss("Button.btn_WF_Calendarmm", "font", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Calendarmm_S", "font", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Button.btn_WF_Calendarmm", "color", obj, ["normal", "disabled", "pushed", "focused", "selected"]);
    this._addCss("Static.sta_WF_GridCount", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_Calendarmm.png","stretch","3","3","0","0","true");
    this._addCss("Button.btn_WF_Calendarmm", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Calendarmm_S", "background", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_CalendarPrev", "background", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_CalendarNext", "background", obj, ["normal", "focused", "selected"]);
    this._addCss("Div.div_WF_ScrollWidth>#vscrollbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Div.div_WF_ScrollWidth>#hscrollbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Radio.rdo_WF_Essential", "background", obj, ["normal"]);
    this._addCss("Static.sta_INFO_txt1", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_INFO_txt2", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Button.btn_WF_CalendarPrev", "bordertype", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_CalendarNext", "bordertype", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_POP_Brwsbtn", "bordertype", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid.grd_WF_pdiv>#body", "bordertype", obj, ["normal", "focused"]);
    this._addCss("Radio.rdo_WF_Essential", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_N.png')");
    this._addCss("Button.btn_WF_CalendarPrev", "image", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_O.png')");
    this._addCss("Button.btn_WF_CalendarPrev", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_D.png')");
    this._addCss("Button.btn_WF_CalendarPrev", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_N.png')");
    this._addCss("Button.btn_WF_CalendarNext", "image", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_O.png')");
    this._addCss("Button.btn_WF_CalendarNext", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_D.png')");
    this._addCss("Button.btn_WF_CalendarNext", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffff00","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_cmb", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid.grd_WF_pdiv", "background", obj, ["normal"]);
    this._addCss("Grid.grd_WF_pdiv>#body", "background", obj, ["normal", "focused"]);
    this._addCss("TextArea.txt_WF_file", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_drop_N.png')");
    this._addCss("Button.btn_WF_cmb", "image", obj, ["normal", "focused", "selected"]);
    this._addCss("Combo.cmb_WF_Readonly>#dropbutton", "image", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_drop_O.png')");
    this._addCss("Button.btn_WF_cmb", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Combo.cmb_WF_Essential>#dropbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_drop_D.png')");
    this._addCss("Button.btn_WF_cmb", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_POP_Brwsbtn.png","stretch","7","7","0","0","true");
    this._addCss("Button.btn_POP_Brwsbtn", "background", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_POP_Brwsbtn_O.png","stretch","7","7","0","0","true");
    this._addCss("Button.btn_POP_Brwsbtn", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_POP_Brwsbtn_P.png","stretch","7","7","0","0","true");
    this._addCss("Button.btn_POP_Brwsbtn", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_POP_Brwsbtn_D.png","stretch","7","7","0","0","true");
    this._addCss("Button.btn_POP_Brwsbtn", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#e0e0e0");
    this._addCss("Button.btn_POP_Brwsbtn", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/chk_WF_allSlct.png","","0","0","0","0","true");
    this._addCss("CheckBox.chk_WF_allSlct", "buttonbackground", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/img_chk_WF_allSlct.png')");
    this._addCss("CheckBox.chk_WF_allSlct", "buttonimage", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_value("15");
    this._addCss("CheckBox.chk_WF_allSlct", "buttonsize", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_background("#f6f6f6ff","","","0","0","0","0","true");
    this._addCss("Div.div_WFSA_Searchbg", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d2d2d2ff","");
    this._addCss("Div.div_WFSA_Searchbg", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#6e7a82ff","");
    this._addCss("Div.div_WF_Calendar", "border", obj, ["normal"]);
    this._addCss("PopupDiv.pdiv_WF_Calendar", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Div.div_WF_ScrollWidth>#vscrollbar", "decbtnsize", obj, ["normal", "disabled"]);
    this._addCss("Div.div_WF_ScrollWidth>#hscrollbar", "decbtnsize", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Div.div_WF_ScrollWidth>#vscrollbar", "incbtnsize", obj, ["normal", "disabled"]);
    this._addCss("Div.div_WF_ScrollWidth>#hscrollbar", "incbtnsize", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("10");
    this._addCss("Div.div_WF_ScrollWidth>#vscrollbar", "scrollbarsize", obj, ["normal", "disabled"]);
    this._addCss("Div.div_WF_ScrollWidth>#hscrollbar", "scrollbarsize", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#067394ff","");
    this._addCss("Div.div_WF_MenuList", "border", obj, ["normal"]);
    this._addCss("PopupDiv.pdiv_WF_MenuList", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/frm_WF_PopupBg.png","stretch","6","37","0","0","true");
    this._addCss("Form.frm_WF_PopupBg", "background", obj, ["normal"]);
    this._addCss("Div.div_WF_PopupBg", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d6d6d6ff","");
    this._addCss("Grid.grd_WF_pdiv", "border", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid.grd_WF_pdiv>#body", "cellalign", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#ffffff00","","","0","0","0","0","true");
    this._addCss("Grid.grd_WF_pdiv>#body", "cellbackground", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#ffffff00","","","0","0","0","0","true");
    this._addCss("Grid.grd_WF_pdiv>#body", "cellbackground2", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid.grd_WF_pdiv>#body", "cellcolor", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid.grd_WF_pdiv>#body", "cellcolor2", obj, ["normal", "focused"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_WF_pdiv>#body", "cellline", obj, ["normal", "focused"]);

    obj = new nexacro.Style_padding("3 3 3 3");
    this._addCss("Grid.grd_WF_pdiv>#body", "cellpadding", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("#e3f2f7");
    this._addCss("Grid.grd_WF_pdiv>#body", "selectbackground", obj, ["normal", "focused"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_WF_pdiv>#body", "selectborder", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid.grd_WF_pdiv>#body", "selectcolor", obj, ["normal", "focused"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("Grid.grd_WF_pdiv>#body", "selectfont", obj, ["normal", "focused"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_WF_pdiv>#body", "selectline", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_suppress>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_suppress>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f0fafcff","","","0","0","0","0","true");
    this._addCss("Edit.edt_WF_Essential", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("MaskEdit.msk_WF_Essential", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("TextArea.txt_WF_Essential", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar.cal_WF_Essential", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Spin.spn_WF_Essential", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo.cmb_WF_Essential", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo.cmb_WF_Essential>#combolist", "background", obj, ["normal"]);
    this._addCss("ListBox.lst_WF_Essential", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#7ec3d2ff","");
    this._addCss("Edit.edt_WF_Essential", "border", obj, ["normal"]);
    this._addCss("MaskEdit.msk_WF_Essential", "border", obj, ["normal"]);
    this._addCss("TextArea.txt_WF_Essential", "border", obj, ["normal"]);
    this._addCss("Calendar.cal_WF_Essential", "border", obj, ["normal"]);
    this._addCss("Spin.spn_WF_Essential", "border", obj, ["normal"]);
    this._addCss("Combo.cmb_WF_Essential", "border", obj, ["normal"]);
    this._addCss("Combo.cmb_WF_Essential>#combolist", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#4197aaff","");
    this._addCss("Edit.edt_WF_Essential", "border", obj, ["mouseover", "focused"]);
    this._addCss("MaskEdit.msk_WF_Essential", "border", obj, ["mouseover", "focused"]);
    this._addCss("TextArea.txt_WF_Essential", "border", obj, ["mouseover", "focused"]);
    this._addCss("Calendar.cal_WF_Essential", "border", obj, ["mouseover", "focused"]);
    this._addCss("Spin.spn_WF_Essential", "border", obj, ["mouseover", "focused"]);
    this._addCss("Combo.cmb_WF_Essential", "border", obj, ["mouseover", "focused"]);
    this._addCss("ListBox.lst_WF_Essential", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/cal_WF_Essential.png')");
    this._addCss("Calendar.cal_WF_Essential>#dropbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spinup_O.png')");
    this._addCss("Spin.spn_WF_Essential>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spindown_O.png')");
    this._addCss("Spin.spn_WF_Essential>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_background("#f0fafcff","","","0","0","0","0","true");
    this._addCss("Combo.cmb_WF_Essential>#combolist", "itembackground", obj, ["normal"]);
    this._addCss("ListBox.lst_WF_Essential", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#4197aaff","","","0","0","0","0","true");
    this._addCss("Combo.cmb_WF_Essential>#combolist", "itembackground", obj, ["selected"]);
    this._addCss("ListBox.lst_WF_Essential", "itembackground", obj, ["selected"]);

    obj = new nexacro.Style_background("#e4e4e4ff","","","0","0","0","0","true");
    this._addCss("ListBox.lst_WF_Essential", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/chk_WF_Essential.png","","0","0","0","0","true");
    this._addCss("CheckBox.chk_WF_Essential", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("Radio.rdo_WF_Essential", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/rdo_WF_Essential.png","","0","0","0","0","true");
    this._addCss("Radio.rdo_WF_Essential", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_radio.png')");
    this._addCss("Radio.rdo_WF_Essential", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Radio.rdo_WF_Essential", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_background("#ecececff","","","0","0","0","0","true");
    this._addCss("Edit.edt_WF_Readonly", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("MaskEdit.msk_WF_Readonly", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Edit.msk_WF_Readonly", "background", obj, ["disabled"]);
    this._addCss("TextArea.txt_WF_Readonly", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_WF_Readonly", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.cal_WF_Readonly", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.spn_WF_Readonly", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("ListBox.lst_WF_Readonly", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#c2c2c2ff","");
    this._addCss("Edit.edt_WF_Readonly", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("MaskEdit.msk_WF_Readonly", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Edit.msk_WF_Readonly", "border", obj, ["disabled"]);
    this._addCss("TextArea.txt_WF_Readonly", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_WF_Readonly", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.cal_WF_Readonly", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.spn_WF_Readonly", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("ListBox.lst_WF_Readonly", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_CalDrop_D.png')");
    this._addCss("Calendar.cal_WF_Readonly>#dropbutton", "image", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spinup_D.png')");
    this._addCss("Spin.spn_WF_Readonly>#spinupbutton", "image", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spindown_D.png')");
    this._addCss("Spin.spn_WF_Readonly>#spindownbutton", "image", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("ListBox.lst_WF_Readonly", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_POP_Brwsmsg", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#ecececff","","","0","0","0","0","true");
    this._addCss("ListBox.lst_WF_Readonly", "itembackground", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/WF_Error.png","stretch","17","0","0","0","true");
    this._addCss("Edit.edt_WF_Error", "background", obj, ["normal"]);
    this._addCss("MaskEdit.msk_WF_Error", "background", obj, ["normal"]);
    this._addCss("Combo.cmb_WF_Error", "background", obj, ["normal"]);
    this._addCss("Combo.cmb_WF_Error>#comboedit", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("2 0 0 18");
    this._addCss("Edit.edt_WF_Error", "padding", obj, ["normal"]);
    this._addCss("Combo.cmb_WF_Error", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/WF_Error_O.png","stretch","17","0","0","0","true");
    this._addCss("Edit.edt_WF_Error", "background", obj, ["mouseover", "focused"]);
    this._addCss("MaskEdit.msk_WF_Error", "background", obj, ["mouseover", "focused"]);
    this._addCss("Combo.cmb_WF_Error", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_padding("2 5 0 0");
    this._addCss("MaskEdit.msk_WF_Error", "padding", obj, ["normal"]);

    obj = new nexacro.Style_padding("2 0 0 0");
    this._addCss("Combo.cmb_WF_Error>#comboedit", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WF_PageS", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/cmb_WF_Error.png')");
    this._addCss("Combo.cmb_WF_Error>#dropbutton", "image", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#cb5475ff","");
    this._addCss("Combo.cmb_WF_Error>#combolist", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Combo.cmb_WF_Error>#combolist", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#cb5475ff","","","0","0","0","0","true");
    this._addCss("Combo.cmb_WF_Error>#combolist", "itembackground", obj, ["selected"]);

    obj = new nexacro.Style_background("","theme://images/grd_WF_HeadEssential.png","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_HeadEssential", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss(".Cellgrd_WF_HeadLink", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss(".Cellgrd_WF_HeadLink", "color2", obj, ["normal"]);

    obj = new nexacro.Style_font("underline bold 9 Gulim");
    this._addCss(".Cellgrd_WF_HeadLink", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("underline bold 9 Gulim");
    this._addCss(".Cellgrd_WF_HeadLink", "font2", obj, ["normal"]);

    obj = new nexacro.Style_color("#004db7");
    this._addCss(".Cellgrd_WF_HeadLink", "selectcolor", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_BodyLink", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("underline bold 9 Gulim");
    this._addCss(".Cellgrd_WF_HeadLink", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#004db7");
    this._addCss(".Cellgrd_WF_BodyLink", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#004db7");
    this._addCss(".Cellgrd_WF_BodyLink", "color2", obj, ["normal"]);

    obj = new nexacro.Style_font("underline 9 Gulim");
    this._addCss(".Cellgrd_WF_BodyLink", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("underline 9 Gulim");
    this._addCss(".Cellgrd_WF_BodyLink", "font2", obj, ["normal"]);

    obj = new nexacro.Style_font("underline 9 Gulim");
    this._addCss(".Cellgrd_WF_BodyLink", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss(".Cellgrd_WF_AlignRight", "align", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum01", "align", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "align", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_Labelbg_R", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_GridCount", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 10 0 0");
    this._addCss(".Cellgrd_WF_AlignRight", "padding", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 10");
    this._addCss(".Cellgrd_WF_AlignLeft", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffefd8ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum01", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 10 0 10");
    this._addCss(".Cellgrd_WF_sum01", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#f1f9ffff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum02", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#faf1ffff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum03", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/sta_WFSA_Label.png","","0","0","0","50","true");
    this._addCss("Static.sta_WFSA_Label", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 15 0 11");
    this._addCss("Static.sta_WFSA_Label", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_Subtitle.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_Subtitle", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#222222");
    this._addCss("Static.sta_WF_Subtitle", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 1 14");
    this._addCss("Static.sta_WF_Subtitle", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f2f8faff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_Label", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_c", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#ccd3d5ff","");
    this._addCss("Static.sta_WF_Label", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_c", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Labelbg", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Labelbg_R", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#353e41");
    this._addCss("Static.sta_WF_Label", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_c", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("2 7 0 11");
    this._addCss("Static.sta_WF_Label", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("2 7 0 7");
    this._addCss("Static.sta_WF_Labelbg", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Labelbg_R", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#4e4d47");
    this._addCss("Static.sta_WF_Location", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold underline 10 arial");
    this._addCss("Static.sta_WF_PageS", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#29a5c0");
    this._addCss("Static.sta_WF_PageS", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#83c5d1ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_MiniTitle", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#6dafbdff","");
    this._addCss("Static.sta_WF_MiniTitle", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("Static.sta_WF_MiniTitle", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_Vdash.png","repeat-y","0","0","0","0","true");
    this._addCss("Static.sta_WF_Vdash", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_DescriptionB01.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_DescriptionB01", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss("Static.sta_WF_DescriptionB01", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DescriptionB02", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 15");
    this._addCss("Static.sta_WF_DescriptionB01", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DescriptionE01", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_DescriptionE01.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_DescriptionE01", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#ac131a");
    this._addCss("Static.sta_WF_DescriptionE01", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DescriptionE02", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#6e7a82ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_Calendaryy", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("11 Tahoma");
    this._addCss("Static.sta_WF_Calendaryy", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 1 0");
    this._addCss("Static.sta_WF_Calendaryy", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#067394ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_Menulist", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("10 Gulim");
    this._addCss("Static.sta_WF_Menulist", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 18");
    this._addCss("Static.sta_WF_Menulist", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_PopupTitle", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#f9ff61");
    this._addCss("Static.sta_WF_PopupTitle", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold 10 Gulim");
    this._addCss("Static.sta_WF_PopupTitle", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_POP_Brwsbg.png","stretch","5","5","0","0","true");
    this._addCss("Static.sta_POP_Brwsbg", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_POP_Brwstitle.png","","0","0","0","0","true");
    this._addCss("Static.sta_POP_Brwstitle", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_POP_Brwsmsg.png","stretch","10","10","0","0","true");
    this._addCss("Static.sta_POP_Brwsmsg", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_POP_Brwstxt01.png","","0","0","0","0","true");
    this._addCss("Static.sta_POP_Brwstxt01", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_POP_Brwstxt02.png","","0","0","0","0","true");
    this._addCss("Static.sta_POP_Brwstxt02", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("8");
    this._addCss("TextArea.txt_WF_file", "linespace", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#edeee6ff","","","0","0","0","0","true");
    this._addCss("Static.sta_GID_Title", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#c6c6c5ff","");
    this._addCss("Static.sta_GID_Title", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Static.sta_GID_Title", "color", obj, ["normal", "mouseover"]);
    this._addCss("Edit.edt_delivery", "color", obj, ["disabled"]);
    this._addCss("MaskEdit.mae_delivery", "color", obj, ["disabled"]);
    this._addCss("Combo.cbo_delivery>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Calendar.cal_delivery", "color", obj, ["disabled"]);

    obj = new nexacro.Style_font("bold antialias 9 Tahoma");
    this._addCss("Static.sta_GID_Title", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#00779b");
    this._addCss("Static.sta_GID_txt", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("8 Gulim");
    this._addCss("Static.sta_GID_txt", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GID_txt02", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#c6c6c5ff","","","0","0","0","0","true");
    this._addCss("Static.sta_GID_line", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/new/icon_title.png","","0","0","0","50","true");
    this._addCss("Static.sta_INFO_title", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#0e78c4ff");
    this._addCss("Static.sta_INFO_title", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold 12 '맑은 고딕', Gulim");
    this._addCss("Static.sta_INFO_title", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/new/icon_list.png","","0","0","2","50","true");
    this._addCss("Static.sta_INFO_txt1list", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#4d4d4dff");
    this._addCss("Static.sta_INFO_txt1list", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_INFO_txt1", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("10 '맑은 고딕', Gulim");
    this._addCss("Static.sta_INFO_txt1list", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_INFO_txt1", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_INFO_txt2list", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_INFO_txt2", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 27");
    this._addCss("Static.sta_INFO_txt1list", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_INFO_txt1", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/new/blet_arr01.png","","0","0","4","50","true");
    this._addCss("Static.sta_INFO_txt2list", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#4d4d4eff");
    this._addCss("Static.sta_INFO_txt2list", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_INFO_txt2", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 40");
    this._addCss("Static.sta_INFO_txt2list", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_INFO_txt2", "padding", obj, ["normal", "mouseover"]);

    obj = null;
    
//[add theme images]
  };
})();
