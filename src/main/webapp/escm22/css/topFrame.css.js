//CSS=topFrame.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("#ffffff00","","","0","0","0","0","true");
    this._addCss("Button.btn_TF_UtilMenu", "background", obj, ["normal", "selected", "disabled", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Button.btn_TF_UtilMenu", "border", obj, ["normal", "selected", "disabled", "mouseover", "pushed", "focused"]);
    this._addCss("Button.btn_TF_Help", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Static.sta_TF_Bg", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#eaf59d");
    this._addCss("Button.btn_TF_UtilMenu", "color", obj, ["normal", "selected", "disabled", "mouseover"]);
    this._addCss("Static.sta_TF_User", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#e4ff2b");
    this._addCss("Button.btn_TF_UtilMenu", "color", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_font("underline 9 Gulim");
    this._addCss("Button.btn_TF_UtilMenu", "font", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_TF_Help.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_Help", "background", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_TF_Help_O.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_Help", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_TF_Help_P.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_Help", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/sta_TF_Bg.png","repeat-x","0","0","0","0","true");
    this._addCss("Static.sta_TF_Bg", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_shadow("outer 0,1 3 #b0b0b0ff");
    this._addCss("Static.sta_TF_Bg", "shadow", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_TF_Logo.png","","0","0","0","50","true");
    this._addCss("Static.sta_TF_Logo", "background", obj, ["normal", "mouseover"]);

    obj = null;
    
//[add theme images]
  };
})();
