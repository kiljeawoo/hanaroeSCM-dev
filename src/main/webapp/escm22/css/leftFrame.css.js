//CSS=leftFrame.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("","theme://images/btn_LF_Search.png","","0","0","50","50","true");
    this._addCss("Button.btn_LF_Search", "background", obj, ["normal", "focused", "selected", "mouseover"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Button.btn_LF_Search", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_MyMenu", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_MyMenuS", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_2DepthMenu", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_2DepthMenuS", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Open", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_LF_Close", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Edit.edt_LF_Search", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_LF_Menu", "border", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Menu>#body", "border", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_Menu>#vscrollbar", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Menu>#hscrollbar", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Menu>#vscrollbar>#trackbar", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid.grd_LF_Menu>#hscrollbar>#trackbar", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu", "border", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "border", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar>#trackbar", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar>#trackbar", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_LF_Search_P.png","","0","0","50","50","true");
    this._addCss("Button.btn_LF_Search", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_LF_Search_D.png","","0","0","50","50","true");
    this._addCss("Button.btn_LF_Search", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_LF_MyMenu.png","stretch","7","7","0","0","true");
    this._addCss("Button.btn_LF_MyMenu", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold 10 Gulim");
    this._addCss("Button.btn_LF_MyMenu", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_MyMenuS", "font", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_2DepthMenu", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_2DepthMenuS", "font", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_color("#e4e6e7");
    this._addCss("Button.btn_LF_MyMenu", "color", obj, ["normal"]);
    this._addCss("Button.btn_LF_2DepthMenu", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Button.btn_LF_MyMenu", "color", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_LF_MyMenuS", "color", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_2DepthMenu", "color", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_LF_2DepthMenuS", "color", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_LF_MyMenu_S.png","stretch","7","7","0","0","true");
    this._addCss("Button.btn_LF_MyMenu", "background", obj, ["focused", "selected", "pushed"]);
    this._addCss("Button.btn_LF_MyMenuS", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_2DepthMenuS", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_LF_MyMenu_D.png","stretch","7","7","0","0","true");
    this._addCss("Button.btn_LF_MyMenu", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#afb4b8");
    this._addCss("Button.btn_LF_MyMenu", "color", obj, ["disabled"]);
    this._addCss("Button.btn_LF_2DepthMenu", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_LF_2DepthMenu.png","stretch","7","7","0","0","true");
    this._addCss("Button.btn_LF_2DepthMenu", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_LF_2DepthMenu_S.png","stretch","7","7","0","0","true");
    this._addCss("Button.btn_LF_2DepthMenu", "background", obj, ["focused", "selected", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_LF_2DepthMenu_D.png","stretch","7","7","0","0","true");
    this._addCss("Button.btn_LF_2DepthMenu", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_LF_Open.png","","0","0","50","50","true");
    this._addCss("Button.btn_LF_Open", "background", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_LF_Open_O.png","","0","0","50","50","true");
    this._addCss("Button.btn_LF_Open", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_LF_Open_P.png","","0","0","50","50","true");
    this._addCss("Button.btn_LF_Open", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_LF_Close.png","","0","0","50","50","true");
    this._addCss("Button.btn_LF_Close", "background", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_LF_Close_O.png","","0","0","50","50","true");
    this._addCss("Button.btn_LF_Close", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_LF_Close_P.png","","0","0","50","50","true");
    this._addCss("Button.btn_LF_Close", "background", obj, ["pushed"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Edit.edt_LF_Search", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/edt_LF_Search.png","stretch","5","5","0","0","true");
    this._addCss("Edit.edt_LF_Search", "background", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Edit.edt_LF_Search", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Menu", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Edit.edt_LF_Search", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("Edit.edt_LF_Search", "font", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Menu", "font", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("2 5 0 5");
    this._addCss("Edit.edt_LF_Search", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#29a5c0");
    this._addCss("Edit.edt_LF_Search", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Edit.edt_LF_Search", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Menu>#body", "selectcolor", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "selectcolor", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/edt_LF_Search_O.png","stretch","5","5","0","0","true");
    this._addCss("Edit.edt_LF_Search", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("","theme://images/edt_LF_Search_D.png","stretch","5","5","0","0","true");
    this._addCss("Edit.edt_LF_Search", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Edit.edt_LF_Search", "color", obj, ["disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid.grd_LF_Menu", "align", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Menu>#vscrollbar>#trackbar", "align", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid.grd_LF_Menu>#hscrollbar>#trackbar", "align", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu", "align", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar>#trackbar", "align", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar>#trackbar", "align", obj, ["normal", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_background("#ffffff00","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Menu", "background", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Menu>#body", "background", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_Menu>#vscrollbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Menu>#hscrollbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu", "background", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "background", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#4f4c40");
    this._addCss("Grid.grd_LF_Menu", "color", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "color", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("Grid.grd_LF_Menu", "padding", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_LF_treeclose.png')");
    this._addCss("Grid.grd_LF_Menu", "treeclosebuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_LF_Menu", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_LF_Menu", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_LF_treeitem.png')");
    this._addCss("Grid.grd_LF_Menu", "treeitemimage", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_LF_Menu", "treeitemmargin", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "treeitemmargin", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_LF_treeopen.png')");
    this._addCss("Grid.grd_LF_Menu", "treeopenbuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Grid.grd_LF_Menu>#body", "bordertype", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_Menu>#vscrollbar>#trackbar", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid.grd_LF_Menu>#hscrollbar>#trackbar", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "bordertype", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar>#trackbar", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar>#trackbar", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid.grd_LF_Menu>#body", "cellalign", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellalign", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/grd_LF_Menu_1dpth.png","repeat-x","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Menu>#body", "cellbackground", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/grd_LF_Menu_1dpth.png","repeat-x","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Menu>#body", "cellbackground2", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_color("#4f4c40");
    this._addCss("Grid.grd_LF_Menu>#body", "cellcolor", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellcolor", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_color("#4f4c40");
    this._addCss("Grid.grd_LF_Menu>#body", "cellcolor2", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellcolor2", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_LF_Menu>#body", "cellline", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellline", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_padding("1 3 0 3");
    this._addCss("Grid.grd_LF_Menu>#body", "cellpadding", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellpadding", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/grd_LF_Menu_S.png') repeat-x");
    this._addCss("Grid.grd_LF_Menu>#body", "selectbackground", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "selectbackground", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_LF_Menu>#body", "selectborder", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "selectborder", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("Grid.grd_LF_Menu>#body", "selectfont", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "selectfont", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_LF_Menu>#body", "selectline", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "selectline", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Grid.grd_LF_Menu>#vscrollbar", "decbtnsize", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Menu>#hscrollbar", "decbtnsize", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "decbtnsize", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "decbtnsize", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Grid.grd_LF_Menu>#vscrollbar", "incbtnsize", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Menu>#hscrollbar", "incbtnsize", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "incbtnsize", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "incbtnsize", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/grd_LF_Vscrollbar.png","stretch","10","10","0","0","true");
    this._addCss("Grid.grd_LF_Menu>#vscrollbar>#trackbar", "background", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar>#trackbar", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/grd_LF_Vscrollbar_O.png","stretch","10","10","0","0","true");
    this._addCss("Grid.grd_LF_Menu>#vscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/grd_LF_Vscrollbar_D.png","stretch","10","10","0","0","true");
    this._addCss("Grid.grd_LF_Menu>#vscrollbar>#trackbar", "background", obj, ["disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar>#trackbar", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/grd_LF_Hscrollbar.png","stretch","10","10","0","0","true");
    this._addCss("Grid.grd_LF_Menu>#hscrollbar>#trackbar", "background", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar>#trackbar", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/grd_LF_Hscrollbar_O.png","stretch","10","10","0","0","true");
    this._addCss("Grid.grd_LF_Menu>#hscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/grd_LF_Hscrollbar_D.png","stretch","10","10","0","0","true");
    this._addCss("Grid.grd_LF_Menu>#hscrollbar>#trackbar", "background", obj, ["disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar>#trackbar", "background", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/grd_WF_dummy.png')");
    this._addCss("Grid.grd_LF_Mymenu", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/grd_WF_dummy.png')");
    this._addCss("Grid.grd_LF_Mymenu", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffff00","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellbackground", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_background("#ffffff00","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellbackground2", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Static.sta_LF_MenuBg", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #74828b 0,100 #78868f");
    this._addCss("Static.sta_LF_MenuBg", "gradation", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_LF_MenuGrdBg.png","stretch","7","7","0","0","true");
    this._addCss("Static.sta_LF_MenuGrdBg", "background", obj, ["normal", "mouseover"]);

    obj = null;
    
//[add theme images]
  };
})();
