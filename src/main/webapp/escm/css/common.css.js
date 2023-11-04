//CSS=common.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("MainFrame", "background", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#maxbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#normalbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#closebutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("StatusBarControl>#progressbar", "background", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "background", obj, ["normal"]);
    this._addCss("Static", "background", obj, ["normal", "mouseover"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("CheckBox", "background", obj, ["normal"]);
    this._addCss("Div", "background", obj, ["normal"]);
    this._addCss("Div>#vscrollbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Div>#hscrollbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("PopupDiv", "background", obj, ["normal"]);
    this._addCss("Radio", "background", obj, ["normal"]);
    this._addCss("StepControl", "background", obj, ["normal"]);
    this._addCss("Tab", "background", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "background", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Tabpage>#vscrollbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Tabpage>#hscrollbar", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("MainFrame", "border", obj, ["normal"]);
    this._addCss("ChildFrame", "border", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl", "border", obj, ["normal", "disabled"]);
    this._addCss("HScrollBarControl", "border", obj, ["normal", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "border", obj, ["normal"]);
    this._addCss("Form", "border", obj, ["normal"]);
    this._addCss("Static", "border", obj, ["normal", "mouseover"]);
    this._addCss("Combo>#comboedit", "border", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Combo>#dropbutton", "border", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "border", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "border", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("CheckBox", "border", obj, ["normal"]);
    this._addCss("Div", "border", obj, ["normal"]);
    this._addCss("Div>#vscrollbar", "border", obj, ["normal", "disabled"]);
    this._addCss("Div>#hscrollbar", "border", obj, ["normal", "disabled"]);
    this._addCss("FileUpload", "border", obj, ["normal"]);
    this._addCss("Grid>#summ", "border", obj, ["normal"]);
    this._addCss("Grid>#summary", "border", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlexpand", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Menu", "border", obj, ["normal"]);
    this._addCss("PopupDiv", "border", obj, ["normal"]);
    this._addCss("Radio", "border", obj, ["normal"]);
    this._addCss("StepControl", "border", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Tabpage>#vscrollbar", "border", obj, ["normal", "disabled"]);
    this._addCss("Tabpage>#hscrollbar", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("MainFrame", "color", obj, ["normal"]);
    this._addCss("StatusBarControl>#progressbar", "color", obj, ["normal"]);
    this._addCss("Button", "color", obj, ["normal", "focused", "selected"]);
    this._addCss("FileDownload", "color", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["normal"]);
    this._addCss("PopupDiv", "color", obj, ["normal"]);
    this._addCss("Tab", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("");
    this._addCss("MainFrame", "font", obj, ["normal"]);
    this._addCss("ChildFrame", "font", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "font", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "font", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "font", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "font", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "menubarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "openstatuseffect", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "statusbarheight", obj, ["normal"]);
    this._addCss("ChildFrame", "statusbarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("32");
    this._addCss("MainFrame", "titlebarheight", obj, ["normal"]);
    this._addCss("ChildFrame", "titlebarheight", obj, ["normal"]);

    obj = new nexacro.Style_border("2","solid","#235798ff","");
    this._addCss("MainFrame", "border", obj, ["deactivate"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("ChildFrame", "align", obj, ["normal"]);
    this._addCss("TextArea", "align", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("ChildFrame", "background", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "background", obj, ["normal"]);
    this._addCss("Form", "background", obj, ["normal"]);
    this._addCss("Edit", "background", obj, ["normal"]);
    this._addCss("MaskEdit", "background", obj, ["normal"]);
    this._addCss("TextArea", "background", obj, ["normal"]);
    this._addCss("Combo", "background", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Combo>#combolist", "background", obj, ["normal"]);
    this._addCss("ListBox", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Spin", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("SpinControl", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "background", obj, ["normal"]);
    this._addCss("Grid", "background", obj, ["normal"]);
    this._addCss("Grid>#body", "background", obj, ["normal", "focused"]);
    this._addCss("Grid>#controledit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "background", obj, ["normal"]);
    this._addCss("GroupBox", "background", obj, ["normal"]);
    this._addCss("ImageViewer", "background", obj, ["normal"]);
    this._addCss("PopupMenu", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("ChildFrame", "color", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "color", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "color", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "color", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "color", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "color", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("TitleBarControl", "align", obj, ["normal"]);
    this._addCss("StatusBarControl", "align", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo", "align", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "align", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "align", obj, ["normal"]);
    this._addCss("Static", "align", obj, ["normal", "mouseover"]);
    this._addCss("Edit", "align", obj, ["normal"]);
    this._addCss("Combo", "align", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "align", obj, ["normal"]);
    this._addCss("Combo>#combolist", "align", obj, ["normal"]);
    this._addCss("ListBox", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar", "align", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "align", obj, ["normal"]);
    this._addCss("CheckBox", "align", obj, ["normal"]);
    this._addCss("FileUpload", "align", obj, ["normal"]);
    this._addCss("Grid>#controledit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "align", obj, ["normal"]);
    this._addCss("Radio", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("#40b3ccff","","","0","0","0","0","true");
    this._addCss("TitleBarControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("2","solid","#1d8ea7ff","","2","solid","#1d8ea7ff","","0","none","","","2","solid","#1d8ea7ff","");
    this._addCss("TitleBarControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("TitleBarControl", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("HScrollBarControl", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("Form", "bordertype", obj, ["normal"]);
    this._addCss("Static", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("MaskEdit", "bordertype", obj, ["normal"]);
    this._addCss("TextArea", "bordertype", obj, ["normal"]);
    this._addCss("Combo", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#combolist", "bordertype", obj, ["normal", "selected"]);
    this._addCss("ListBox", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Spin", "bordertype", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("SpinControl", "bordertype", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("CheckBox", "bordertype", obj, ["normal"]);
    this._addCss("Div", "bordertype", obj, ["normal"]);
    this._addCss("Div>#vscrollbar>#trackbar", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Div>#hscrollbar>#trackbar", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("FileUpload", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#body", "bordertype", obj, ["normal", "focused"]);
    this._addCss("Grid>#summ", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#summary", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlexpand", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlprogressbar", "bordertype", obj, ["normal"]);
    this._addCss("GroupBox", "bordertype", obj, ["normal"]);
    this._addCss("ImageViewer", "bordertype", obj, ["normal"]);
    this._addCss("Menu", "bordertype", obj, ["normal"]);
    this._addCss("PopupMenu", "bordertype", obj, ["normal"]);
    this._addCss("ProgressBar", "bordertype", obj, ["normal"]);
    this._addCss("ProgressBarControl", "bordertype", obj, ["normal"]);
    this._addCss("Radio", "bordertype", obj, ["normal"]);
    this._addCss("StepControl", "bordertype", obj, ["normal"]);
    this._addCss("Tab", "bordertype", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Tabpage>#vscrollbar>#trackbar", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Tabpage>#hscrollbar>#trackbar", "bordertype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#f9ff61");
    this._addCss("TitleBarControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 10 Gulim");
    this._addCss("TitleBarControl", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("TitleBarControl", "icon", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 18");
    this._addCss("TitleBarControl", "padding", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("TitleBarControl", "stepalign", obj, ["normal"]);
    this._addCss("StatusBarControl", "stepalign", obj, ["normal"]);
    this._addCss("Form", "stepalign", obj, ["normal"]);
    this._addCss("PopupDiv", "stepalign", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("TitleBarControl", "stepshowtype", obj, ["normal"]);
    this._addCss("StatusBarControl", "stepshowtype", obj, ["normal"]);
    this._addCss("Form", "stepshowtype", obj, ["normal"]);
    this._addCss("PopupDiv", "stepshowtype", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("TitleBarControl>#minbutton", "align", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "align", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "align", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "align", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "align", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "align", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "align", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "align", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","");
    this._addCss("TitleBarControl>#minbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#maxbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#normalbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#closebutton", "border", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("");
    this._addCss("TitleBarControl>#minbutton", "cursor", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "cursor", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "cursor", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "cursor", obj, ["normal"]);
    this._addCss("StatusBarControl", "cursor", obj, ["normal"]);
    this._addCss("StatusBarControl>#progressbar", "cursor", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo", "cursor", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "cursor", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("TitleBarControl>#minbutton", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "gradation", obj, ["normal"]);
    this._addCss("StatusBarControl", "gradation", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo", "gradation", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "gradation", obj, ["normal"]);
    this._addCss("StepControl", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_min.png')");
    this._addCss("TitleBarControl>#minbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("TitleBarControl>#minbutton", "imagealign", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "imagealign", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "imagealign", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("TitleBarControl>#minbutton", "opacity", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "opacity", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "opacity", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "opacity", obj, ["normal"]);
    this._addCss("StatusBarControl", "opacity", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo", "opacity", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "opacity", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "opacity", obj, ["normal"]);
    this._addCss("VScrollBarControl", "opacity", obj, ["normal", "disabled"]);
    this._addCss("HScrollBarControl", "opacity", obj, ["normal", "disabled"]);
    this._addCss("Calendar>#popupcalendar", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "opacity", obj, ["normal"]);
    this._addCss("StepControl", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("TitleBarControl>#minbutton", "padding", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "padding", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "padding", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "padding", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl", "padding", obj, ["normal", "disabled"]);
    this._addCss("HScrollBarControl", "padding", obj, ["normal", "disabled"]);
    this._addCss("Grid", "padding", obj, ["normal"]);
    this._addCss("Grid>#summ", "padding", obj, ["normal"]);
    this._addCss("Grid>#summary", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlexpand", "padding", obj, ["normal", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_shadow("");
    this._addCss("TitleBarControl>#minbutton", "shadow", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "shadow", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "shadow", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "shadow", obj, ["normal"]);
    this._addCss("StatusBarControl", "shadow", obj, ["normal"]);
    this._addCss("StatusBarControl>#progressbar", "shadow", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo", "shadow", obj, ["normal"]);
    this._addCss("StepControl", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_min_O.png')");
    this._addCss("TitleBarControl>#minbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_min_P.png')");
    this._addCss("TitleBarControl>#minbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_max.png')");
    this._addCss("TitleBarControl>#maxbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_max_O.png')");
    this._addCss("TitleBarControl>#maxbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_max_P.png')");
    this._addCss("TitleBarControl>#maxbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_normal.png')");
    this._addCss("TitleBarControl>#normalbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_normal_O.png')");
    this._addCss("TitleBarControl>#normalbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_normal_P.png')");
    this._addCss("TitleBarControl>#normalbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_PopupClose.png')");
    this._addCss("TitleBarControl>#closebutton", "image", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_PopupCloseP.png')");
    this._addCss("TitleBarControl>#closebutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_background("#f2f2efff","","","0","0","0","0","true");
    this._addCss("StatusBarControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#a8a8a2ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("StatusBarControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","3","3","false","false","true","true");
    this._addCss("StatusBarControl", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#46463d");
    this._addCss("StatusBarControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("StatusBarControl", "font", obj, ["normal"]);
    this._addCss("StatusBarControl>#progressbar", "font", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo", "font", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "font", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_grip.png')");
    this._addCss("StatusBarControl", "gripimage", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 12");
    this._addCss("StatusBarControl", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("5");
    this._addCss("StatusBarControl", "progressbargap", obj, ["normal"]);

    obj = new nexacro.Style_value("21");
    this._addCss("StatusBarControl", "progressbarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("260");
    this._addCss("StatusBarControl", "progressbarwidth", obj, ["normal"]);

    obj = new nexacro.Style_value("10");
    this._addCss("StatusBarControl", "zoomcombogap", obj, ["normal"]);

    obj = new nexacro.Style_value("21");
    this._addCss("StatusBarControl", "zoomcomboheight", obj, ["normal"]);

    obj = new nexacro.Style_value("80");
    this._addCss("StatusBarControl", "zoomcombowidth", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("StatusBarControl>#progressbar", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "align", obj, ["normal"]);
    this._addCss("Button", "align", obj, ["normal", "focused", "selected"]);
    this._addCss("Calendar>#popupcalendar", "align", obj, ["normal"]);
    this._addCss("Div", "align", obj, ["normal"]);
    this._addCss("Div>#vscrollbar>#trackbar", "align", obj, ["normal", "disabled"]);
    this._addCss("Div>#hscrollbar>#trackbar", "align", obj, ["normal", "disabled"]);
    this._addCss("FileDownload", "align", obj, ["normal"]);
    this._addCss("Grid", "align", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "align", obj, ["normal"]);
    this._addCss("Grid>#controlprogressbar", "align", obj, ["normal"]);
    this._addCss("ImageViewer", "align", obj, ["normal"]);
    this._addCss("PopupDiv", "align", obj, ["normal"]);
    this._addCss("ProgressBar", "align", obj, ["normal"]);
    this._addCss("ProgressBarControl", "align", obj, ["normal"]);
    this._addCss("StepControl", "align", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Tabpage>#vscrollbar>#trackbar", "align", obj, ["normal", "disabled"]);
    this._addCss("Tabpage>#hscrollbar>#trackbar", "align", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#cdcdc8");
    this._addCss("StatusBarControl>#progressbar", "barcolor", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("StatusBarControl>#progressbar", "bargradation", obj, ["normal"]);

    obj = new nexacro.Style_value("normal");
    this._addCss("StatusBarControl>#progressbar", "bartype", obj, ["normal"]);
    this._addCss("Grid>#controlprogressbar", "bartype", obj, ["normal"]);
    this._addCss("ProgressBar", "bartype", obj, ["normal"]);
    this._addCss("ProgressBarControl", "bartype", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#a8a8a2ff","");
    this._addCss("StatusBarControl>#progressbar", "border", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo", "border", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "border", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("StatusBarControl>#progressbar", "bordertype", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo", "bordertype", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "bordertype", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("forward");
    this._addCss("StatusBarControl>#progressbar", "direction", obj, ["normal"]);
    this._addCss("Grid>#controlprogressbar", "direction", obj, ["normal"]);
    this._addCss("ProgressBar", "direction", obj, ["normal"]);
    this._addCss("ProgressBarControl", "direction", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("StatusBarControl>#progressbar", "endimage", obj, ["normal"]);
    this._addCss("ProgressBar", "endimage", obj, ["normal"]);
    this._addCss("ProgressBarControl", "endimage", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 1 1 1");
    this._addCss("StatusBarControl>#progressbar", "padding", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("StatusBarControl>#progressbar", "progressimage", obj, ["normal"]);
    this._addCss("ProgressBar", "progressimage", obj, ["normal"]);
    this._addCss("ProgressBarControl", "progressimage", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("StatusBarControl>#progressbar", "smooth", obj, ["normal"]);
    this._addCss("Grid>#controlprogressbar", "smooth", obj, ["normal"]);
    this._addCss("ProgressBar", "smooth", obj, ["normal"]);
    this._addCss("ProgressBarControl", "smooth", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("StatusBarControl>#progressbar", "startimage", obj, ["normal"]);
    this._addCss("ProgressBar", "startimage", obj, ["normal"]);
    this._addCss("ProgressBarControl", "startimage", obj, ["normal"]);

    obj = new nexacro.Style_background("#f2f2efff","theme://images/ico_zoomcombo.png","","0","0","0","50","true");
    this._addCss("StatusBarControl>#zoomcombo", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("16");
    this._addCss("StatusBarControl>#zoomcombo", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#5a280b");
    this._addCss("StatusBarControl>#zoomcombo", "color", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "color", obj, ["normal"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("StatusBarControl>#zoomcombo", "itemaccessibility", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("StatusBarControl>#zoomcombo", "itembackground", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "itembackground", obj, ["normal"]);
    this._addCss("Combo>#combolist", "itembackground", obj, ["normal"]);
    this._addCss("ListBox", "itembackground", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["normal"]);
    this._addCss("PopupMenu", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("StatusBarControl>#zoomcombo", "itemborder", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "itemborder", obj, ["normal"]);
    this._addCss("Combo>#combolist", "itemborder", obj, ["normal"]);
    this._addCss("ListBox", "itemborder", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "itemborder", obj, ["normal"]);
    this._addCss("Menu", "itemborder", obj, ["normal"]);
    this._addCss("PopupMenu", "itemborder", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("StatusBarControl>#zoomcombo", "itembordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#6e6e63");
    this._addCss("StatusBarControl>#zoomcombo", "itemcolor", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "itemcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("StatusBarControl>#zoomcombo", "itemfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("StatusBarControl>#zoomcombo", "itemgradation", obj, ["normal"]);

    obj = new nexacro.Style_value("20");
    this._addCss("StatusBarControl>#zoomcombo", "itemheight", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "itemheight", obj, ["normal"]);
    this._addCss("Combo", "itemheight", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemheight", obj, ["normal"]);
    this._addCss("PopupMenu", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 8");
    this._addCss("StatusBarControl>#zoomcombo", "itempadding", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#f2f2efff","","","0","0","0","0","true");
    this._addCss("StatusBarControl>#zoomcombo", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#5a280b");
    this._addCss("StatusBarControl>#zoomcombo", "itemcolor", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_background("#e0e0d9ff","","","0","0","0","0","true");
    this._addCss("StatusBarControl>#zoomcombo", "itembackground", obj, ["selected"]);

    obj = new nexacro.Style_padding("0 0 0 20");
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_color("#3da2df");
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "caretcolor", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "compositecolor", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("#3da2df");
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "selectbackground", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "selectcolor", obj, ["mouseover", "focused"]);
    this._addCss("Edit", "selectcolor", obj, ["normal"]);
    this._addCss("MaskEdit", "selectcolor", obj, ["normal"]);
    this._addCss("TextArea", "selectcolor", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "selectcolor", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "selectcolor", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "selectcolor", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controledit", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","theme://images/img_drop_N.png","stretch","6","6","0","0","true");
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #e3e3dd");
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "gradation", obj, ["normal", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_drop_N.png')");
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "image", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "imagealign", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Spin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Tab>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab>#extrabutton", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_background("@gradation","theme://images/img_drop_O.png","stretch","6","6","0","0","true");
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ddddd6 0,100 #acaca6");
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_drop_O.png')");
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Combo>#dropbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("#e1e1daff","","","0","0","0","0","true");
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_color("#6e6e63");
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("#d1d1d1ff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl", "background", obj, ["normal", "disabled"]);
    this._addCss("HScrollBarControl", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid>#resizebutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBarControl", "barminsize", obj, ["normal", "disabled"]);
    this._addCss("HScrollBarControl", "barminsize", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBarControl", "baroutsize", obj, ["normal", "disabled"]);
    this._addCss("HScrollBarControl", "baroutsize", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("auto");
    this._addCss("VScrollBarControl", "cursor", obj, ["normal", "disabled"]);
    this._addCss("HScrollBarControl", "cursor", obj, ["normal", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("Form", "cursor", obj, ["normal"]);
    this._addCss("Static", "cursor", obj, ["normal", "mouseover"]);
    this._addCss("Calendar", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "cursor", obj, ["normal"]);
    this._addCss("CheckBox", "cursor", obj, ["normal"]);
    this._addCss("FileUpload", "cursor", obj, ["normal"]);
    this._addCss("FileDownload", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlprogressbar", "cursor", obj, ["normal"]);
    this._addCss("PopupMenu", "cursor", obj, ["normal"]);
    this._addCss("ProgressBar", "cursor", obj, ["normal"]);
    this._addCss("ProgressBarControl", "cursor", obj, ["normal"]);
    this._addCss("Radio", "cursor", obj, ["normal"]);
    this._addCss("Tab", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_value("11");
    this._addCss("VScrollBarControl", "decbtnsize", obj, ["normal", "disabled"]);
    this._addCss("HScrollBarControl", "decbtnsize", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBarControl", "imgoutsize", obj, ["normal", "disabled"]);
    this._addCss("HScrollBarControl", "imgoutsize", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("11");
    this._addCss("VScrollBarControl", "incbtnsize", obj, ["normal", "disabled"]);
    this._addCss("HScrollBarControl", "incbtnsize", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("11");
    this._addCss("VScrollBarControl", "scrollbarsize", obj, ["normal", "disabled"]);
    this._addCss("HScrollBarControl", "scrollbarsize", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBarControl", "trackbarsize", obj, ["normal", "disabled"]);
    this._addCss("HScrollBarControl", "trackbarsize", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#ffffff00","","","0","0","0","0","true");
    this._addCss("VScrollBarControl>#incbutton", "background", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "background", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "background", obj, ["normal", "mouseover", "focused", "readonly"]);
    this._addCss("Combo>#dropbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Spin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "background", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "background", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Calendar>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("FileUpload", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Menu", "background", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vinc_N.png')");
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vinc_O.png')");
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vinc_D.png')");
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vdec_N.png')");
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vdec_O.png')");
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vdec_D.png')");
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Button", "background", obj, ["normal", "focused", "selected"]);
    this._addCss("FileDownload", "background", obj, ["normal"]);
    this._addCss("Grid>#head", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#8d8d8dff","");
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","1","1","true","true","true","true");
    this._addCss("VScrollBarControl>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #bababa 100,0 #9c9c9c");
    this._addCss("VScrollBarControl>#trackbar", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #b5b5b5 100,0 #949494");
    this._addCss("VScrollBarControl>#trackbar", "gradation", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#727272ff","");
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["mouseover", "pushed"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #c8c8c8 100,0 #bcbcbc");
    this._addCss("VScrollBarControl>#trackbar", "gradation", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#b6b6b6ff","");
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hinc_N.png')");
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hinc_O.png')");
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hinc_D.png')");
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hdec_N.png')");
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hdec_O.png')");
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hdec_D.png')");
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #bababa 0,100 #9c9c9c");
    this._addCss("HScrollBarControl>#trackbar", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #b5b5b5 0,100 #949494");
    this._addCss("HScrollBarControl>#trackbar", "gradation", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #c8c8c8 0,100 #bcbcbc");
    this._addCss("HScrollBarControl>#trackbar", "gradation", obj, ["disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Form", "color", obj, ["normal"]);
    this._addCss("Static", "color", obj, ["normal", "mouseover"]);
    this._addCss("Edit", "color", obj, ["normal"]);
    this._addCss("MaskEdit", "color", obj, ["normal"]);
    this._addCss("TextArea", "color", obj, ["normal"]);
    this._addCss("Combo", "color", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "color", obj, ["normal"]);
    this._addCss("ListBox", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "color", obj, ["normal"]);
    this._addCss("CheckBox", "color", obj, ["normal"]);
    this._addCss("FileUpload", "color", obj, ["normal"]);
    this._addCss("Grid", "color", obj, ["normal"]);
    this._addCss("Grid>#controledit", "color", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "color", obj, ["normal"]);
    this._addCss("PopupMenu", "color", obj, ["normal"]);
    this._addCss("Radio", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("Form", "font", obj, ["normal"]);
    this._addCss("Static", "font", obj, ["normal", "mouseover"]);
    this._addCss("Edit", "font", obj, ["normal"]);
    this._addCss("MaskEdit", "font", obj, ["normal"]);
    this._addCss("TextArea", "font", obj, ["normal"]);
    this._addCss("Button", "font", obj, ["normal", "focused", "selected"]);
    this._addCss("Combo", "font", obj, ["normal"]);
    this._addCss("ListBox", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar", "font", obj, ["normal"]);
    this._addCss("CheckBox", "font", obj, ["normal"]);
    this._addCss("FileUpload", "font", obj, ["normal"]);
    this._addCss("FileDownload", "font", obj, ["normal"]);
    this._addCss("Grid", "font", obj, ["normal"]);
    this._addCss("Grid>#controledit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "font", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "font", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "font", obj, ["normal"]);
    this._addCss("PopupMenu", "font", obj, ["normal"]);
    this._addCss("Radio", "font", obj, ["normal"]);
    this._addCss("Tab", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("2 0 0 0");
    this._addCss("Static", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Button", "padding", obj, ["normal", "focused", "selected"]);
    this._addCss("Radio", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("5");
    this._addCss("Static", "linespace", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Static", "color", obj, ["disabled"]);
    this._addCss("Edit", "color", obj, ["disabled"]);
    this._addCss("MaskEdit", "color", obj, ["disabled"]);
    this._addCss("TextArea", "color", obj, ["disabled"]);
    this._addCss("Button", "color", obj, ["disabled"]);
    this._addCss("Combo", "color", obj, ["disabled"]);
    this._addCss("Combo>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Combo>#combolist", "color", obj, ["disabled"]);
    this._addCss("ListBox", "color", obj, ["disabled"]);
    this._addCss("Spin", "color", obj, ["disabled"]);
    this._addCss("SpinControl", "color", obj, ["disabled"]);
    this._addCss("Calendar", "color", obj, ["disabled"]);
    this._addCss("CheckBox", "color", obj, ["disabled"]);
    this._addCss("FileDownload", "color", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlprogressbar", "color", obj, ["disabled"]);
    this._addCss("ProgressBar", "color", obj, ["disabled"]);
    this._addCss("ProgressBarControl", "color", obj, ["disabled"]);
    this._addCss("Radio", "color", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#bfbfbfff","");
    this._addCss("Edit", "border", obj, ["normal"]);
    this._addCss("MaskEdit", "border", obj, ["normal"]);
    this._addCss("TextArea", "border", obj, ["normal"]);
    this._addCss("Combo", "border", obj, ["normal"]);
    this._addCss("Spin", "border", obj, ["normal"]);
    this._addCss("SpinControl", "border", obj, ["normal"]);
    this._addCss("Calendar", "border", obj, ["normal"]);
    this._addCss("Grid>#controledit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["normal"]);
    this._addCss("GroupBox", "border", obj, ["normal"]);
    this._addCss("ImageViewer", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Edit", "bordertype", obj, ["normal"]);
    this._addCss("Button", "bordertype", obj, ["normal", "focused", "selected"]);
    this._addCss("FileDownload", "bordertype", obj, ["normal"]);
    this._addCss("Grid", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#head", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#resizebutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controledit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_padding("2 5 0 5");
    this._addCss("Edit", "padding", obj, ["normal"]);
    this._addCss("MaskEdit", "padding", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#29a5c0");
    this._addCss("Edit", "selectbackground", obj, ["normal"]);
    this._addCss("MaskEdit", "selectbackground", obj, ["normal"]);
    this._addCss("TextArea", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#6e7a82ff","");
    this._addCss("Edit", "border", obj, ["mouseover", "focused"]);
    this._addCss("MaskEdit", "border", obj, ["mouseover", "focused"]);
    this._addCss("TextArea", "border", obj, ["mouseover", "focused"]);
    this._addCss("Combo", "border", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Combo>#combolist", "border", obj, ["normal"]);
    this._addCss("ListBox", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Spin", "border", obj, ["mouseover", "focused"]);
    this._addCss("SpinControl", "border", obj, ["mouseover", "focused"]);
    this._addCss("Calendar", "border", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Calendar>#popupcalendar", "border", obj, ["normal"]);
    this._addCss("Grid>#controledit", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["mouseover", "selected"]);
    this._addCss("Grid>#controlcombo>#combolist", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["mouseover", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "border", obj, ["normal"]);
    this._addCss("PopupMenu", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#e4e4e4ff","","","0","0","0","0","true");
    this._addCss("Edit", "background", obj, ["disabled"]);
    this._addCss("MaskEdit", "background", obj, ["disabled"]);
    this._addCss("TextArea", "background", obj, ["disabled"]);
    this._addCss("Combo", "background", obj, ["disabled"]);
    this._addCss("Combo>#comboedit", "background", obj, ["disabled"]);
    this._addCss("Combo>#dropbutton", "background", obj, ["disabled"]);
    this._addCss("ListBox", "background", obj, ["disabled"]);
    this._addCss("Spin", "background", obj, ["disabled"]);
    this._addCss("Spin>#spinedit", "background", obj, ["disabled"]);
    this._addCss("SpinControl", "background", obj, ["disabled"]);
    this._addCss("Calendar", "background", obj, ["disabled"]);
    this._addCss("Calendar>#calendaredit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#c2c2c2ff","");
    this._addCss("Edit", "border", obj, ["disabled"]);
    this._addCss("MaskEdit", "border", obj, ["disabled"]);
    this._addCss("TextArea", "border", obj, ["disabled"]);
    this._addCss("Combo", "border", obj, ["disabled"]);
    this._addCss("ListBox", "border", obj, ["disabled"]);
    this._addCss("Spin", "border", obj, ["disabled"]);
    this._addCss("SpinControl", "border", obj, ["disabled"]);
    this._addCss("Calendar", "border", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["disabled"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("MaskEdit", "align", obj, ["normal"]);
    this._addCss("Spin", "align", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "align", obj, ["normal"]);
    this._addCss("SpinControl", "align", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("3");
    this._addCss("TextArea", "linespace", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("TextArea", "padding", obj, ["normal"]);
    this._addCss("ListBox", "padding", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Spin", "padding", obj, ["normal"]);
    this._addCss("SpinControl", "padding", obj, ["normal"]);
    this._addCss("Calendar", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CheckBox", "padding", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_border("1","solid","#aeaeaeff","");
    this._addCss("Button", "border", obj, ["normal", "focused", "selected"]);
    this._addCss("FileDownload", "border", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefefe 0,100 #efefef");
    this._addCss("Button", "gradation", obj, ["normal", "focused", "selected"]);
    this._addCss("FileDownload", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#616161ff","");
    this._addCss("Button", "border", obj, ["mouseover", "pushed"]);
    this._addCss("FileDownload", "border", obj, ["pushed"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fdfdfd 0,100 #dadada");
    this._addCss("Button", "gradation", obj, ["mouseover"]);
    this._addCss("Grid>#controlbutton", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #d9d9d9 0,100 #fcfcfc");
    this._addCss("Button", "gradation", obj, ["pushed"]);
    this._addCss("FileDownload", "gradation", obj, ["pushed"]);
    this._addCss("Grid>#controlbutton", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_background("#f0f0f0ff","","","0","0","0","0","true");
    this._addCss("Button", "background", obj, ["disabled"]);
    this._addCss("FileDownload", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#bababaff","");
    this._addCss("Button", "border", obj, ["disabled"]);
    this._addCss("FileDownload", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("19");
    this._addCss("Combo", "buttonsize", obj, ["normal"]);
    this._addCss("Spin", "buttonsize", obj, ["normal"]);
    this._addCss("SpinControl", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_padding("2 1 0 5");
    this._addCss("Combo>#comboedit", "padding", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#29a5c0");
    this._addCss("Combo>#comboedit", "selectbackground", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "selectbackground", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "selectbackground", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controledit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_drop_D.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Combo>#combolist", "itembordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembordertype", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 11 0 11");
    this._addCss("Combo>#combolist", "itempadding", obj, ["normal"]);
    this._addCss("ListBox", "itempadding", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#e4e4e4ff","","","0","0","0","0","true");
    this._addCss("Combo>#combolist", "itembackground", obj, ["mouseover", "disabled"]);
    this._addCss("ListBox", "itembackground", obj, ["mouseover", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["mouseover", "disabled"]);

    obj = new nexacro.Style_background("#6e7a82ff","","","0","0","0","0","true");
    this._addCss("Combo>#combolist", "itembackground", obj, ["selected"]);
    this._addCss("ListBox", "itembackground", obj, ["selected"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["selected"]);
    this._addCss("PopupMenu", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Combo>#combolist", "color", obj, ["selected"]);
    this._addCss("ListBox", "color", obj, ["selected"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "color", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Menu", "color", obj, ["normal"]);
    this._addCss("PopupMenu", "color", obj, ["mouseover"]);
    this._addCss("Tab", "color", obj, ["selected", "focused"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("ListBox", "itembordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Menu", "itembordertype", obj, ["normal"]);
    this._addCss("PopupMenu", "itembordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("21");
    this._addCss("ListBox", "itemheight", obj, ["normal", "mouseover", "focused"]);
    this._addCss("FileUpload", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_value("right");
    this._addCss("Spin", "buttonalign", obj, ["normal"]);
    this._addCss("SpinControl", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spinup_N.png')");
    this._addCss("Spin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spinup_O.png')");
    this._addCss("Spin>#spinupbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Calendar>#spinupbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spinup_D.png')");
    this._addCss("Spin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spindown_N.png')");
    this._addCss("Spin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spindown_O.png')");
    this._addCss("Spin>#spindownbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Calendar>#spindownbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spindown_D.png')");
    this._addCss("Spin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("17");
    this._addCss("Calendar", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar", "dayborder", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "dayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "dayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "dayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar", "daybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Calendar", "daycolor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "daycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daycolor", obj, ["normal"]);

    obj = new nexacro.Style_font("8 Tahoma");
    this._addCss("Calendar", "dayfont", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "dayfont", obj, ["normal", "mouseover", "selected"]);
    this._addCss("Grid>#controlcalendar", "dayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "dayfont", obj, ["normal", "mouseover", "selected"]);

    obj = new nexacro.Style_value("24 22");
    this._addCss("Calendar", "daysize", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "daysize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daysize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daysize", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/cal_WF_Bg.png","stretch","5","50","0","0","true");
    this._addCss("Calendar", "popupbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar", "popupborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupborder", obj, ["normal"]);
    this._addCss("Menu", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar", "popupbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupbordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("182 184");
    this._addCss("Calendar", "popupsize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupsize", obj, ["normal"]);

    obj = new nexacro.Style_background("#6e7a82ff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar", "daybackground", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar", "daycolor", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Calendar>#popupcalendar", "daycolor", obj, ["mouseover", "selected"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["mouseover", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daycolor", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_background("#4197aaff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["selected"]);
    this._addCss("Calendar>#popupcalendar", "daybackground", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybackground", obj, ["selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_CalDrop_N.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Calendar>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_CalDrop_O.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_CalDrop_D.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_font("8 Tahoma");
    this._addCss("Calendar>#popupcalendar", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("27 0 0 0");
    this._addCss("Calendar>#popupcalendar", "ncpadding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "ncpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("yyyy.MM");
    this._addCss("Calendar>#popupcalendar", "headerformat", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerformat", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "daybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybackground", obj, ["normal"]);

    obj = new nexacro.Style_value("27");
    this._addCss("Calendar>#popupcalendar", "headerheight", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerheight", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "headercolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headercolor", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 11 Tahoma");
    this._addCss("Calendar>#popupcalendar", "headerfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerfont", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "headerbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Calendar>#popupcalendar", "headborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headborder", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "headerborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "headerbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerbordertype", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "bodybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "bodyborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodyborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "bodybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "weekcolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("Calendar>#popupcalendar", "weekfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekfont", obj, ["normal"]);

    obj = new nexacro.Style_value("일 월 화 수 목 금 토");
    this._addCss("Calendar>#popupcalendar", "weekformat", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekformat", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "weekbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "todaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#cb5475ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "todaybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaybackground", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "todaybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("8 Tahoma");
    this._addCss("Calendar>#popupcalendar", "todayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todayfont", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Calendar>#popupcalendar", "usetrailingday", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "usetrailingday", obj, ["normal"]);

    obj = new nexacro.Style_color("#bebebe");
    this._addCss("Calendar>#popupcalendar", "trailingdaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "trailingdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "saturdayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("8 Tahoma");
    this._addCss("Calendar>#popupcalendar", "saturdayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdayfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#40b2cc");
    this._addCss("Calendar>#popupcalendar", "saturdaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "sundaybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "sundayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "sundaybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#f46089");
    this._addCss("Calendar>#popupcalendar", "sundaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaycolor", obj, ["normal"]);

    obj = new nexacro.Style_font("8 Tahoma");
    this._addCss("Calendar>#popupcalendar", "sundayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundayfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#6e7a82ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybackground", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#6e7a82ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "sundaybackground", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#4197aaff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybackground", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["selected"]);

    obj = new nexacro.Style_background("#4197aaff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "sundaybackground", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_N.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_O.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_D.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_N.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_O.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_D.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("#59616bff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar>#yearspin", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar>#popupcalendar>#yearspin", "buttonalign", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "buttonalign", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "buttonalign", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "buttonalign", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("8");
    this._addCss("Calendar>#popupcalendar>#yearspin", "buttonsize", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "buttonsize", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "buttonsize", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "buttonsize", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_font("bold 11 Tahoma");
    this._addCss("Calendar>#popupcalendar>#yearspin", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_CalSpinUp.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_CalSpinDown.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("CheckBox", "buttonalign", obj, ["normal"]);
    this._addCss("Radio", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/bg_check.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("CheckBox", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_check.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["normal", "mouseover", "focused", "pushed"]);
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["normal", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("13");
    this._addCss("CheckBox", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonsize", obj, ["normal"]);
    this._addCss("Radio", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 5");
    this._addCss("CheckBox", "textpadding", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "textpadding", obj, ["normal"]);
    this._addCss("Radio", "textpadding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/bg_check_O.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/bg_check_D.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/img_check_D.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Div>#vscrollbar", "decbtnsize", obj, ["normal", "disabled"]);
    this._addCss("Div>#hscrollbar", "decbtnsize", obj, ["normal", "disabled"]);
    this._addCss("Tabpage>#vscrollbar", "decbtnsize", obj, ["normal", "disabled"]);
    this._addCss("Tabpage>#hscrollbar", "decbtnsize", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Div>#vscrollbar", "incbtnsize", obj, ["normal", "disabled"]);
    this._addCss("Div>#hscrollbar", "incbtnsize", obj, ["normal", "disabled"]);
    this._addCss("Tabpage>#vscrollbar", "incbtnsize", obj, ["normal", "disabled"]);
    this._addCss("Tabpage>#hscrollbar", "incbtnsize", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("6");
    this._addCss("Div>#vscrollbar", "scrollbarsize", obj, ["normal", "disabled"]);
    this._addCss("Div>#hscrollbar", "scrollbarsize", obj, ["normal", "disabled"]);
    this._addCss("Tabpage>#vscrollbar", "scrollbarsize", obj, ["normal", "disabled"]);
    this._addCss("Tabpage>#hscrollbar", "scrollbarsize", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#ddddddff","","","0","0","0","0","true");
    this._addCss("Div>#vscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Div>#hscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Tabpage>#vscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Tabpage>#hscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#cfcfcfff","");
    this._addCss("Div>#vscrollbar>#trackbar", "border", obj, ["normal", "disabled"]);
    this._addCss("Div>#hscrollbar>#trackbar", "border", obj, ["normal", "disabled"]);
    this._addCss("Tabpage>#vscrollbar>#trackbar", "border", obj, ["normal", "disabled"]);
    this._addCss("Tabpage>#hscrollbar>#trackbar", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#b0b0b0ff","","","0","0","0","0","true");
    this._addCss("Div>#vscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Div>#hscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Tabpage>#vscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Tabpage>#hscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#a6a6a6ff","");
    this._addCss("Div>#vscrollbar>#trackbar", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Div>#hscrollbar>#trackbar", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Tabpage>#vscrollbar>#trackbar", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Tabpage>#hscrollbar>#trackbar", "border", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["normal"]);
    this._addCss("Radio", "buttonbackground", obj, ["disabled"]);
    this._addCss("StepControl", "buttonbackground", obj, ["normal"]);
    this._addCss("Tab", "buttonbackground", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_value("1 solid #aeaeae");
    this._addCss("FileUpload", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("FileUpload", "buttonbordertype", obj, ["normal"]);
    this._addCss("Tab", "buttonbordertype", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("FileUpload", "buttoncolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("FileUpload", "buttonfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefefe 0,100 #efefef");
    this._addCss("FileUpload", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("FileUpload", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("70");
    this._addCss("FileUpload", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_value("파일추가");
    this._addCss("FileUpload", "buttontext", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#bfbfbfff","");
    this._addCss("FileUpload", "editborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("FileUpload", "editbordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("FileUpload", "editcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("FileUpload", "editfont", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 10 0 10");
    this._addCss("FileUpload", "editpadding", obj, ["normal"]);

    obj = new nexacro.Style_color("#29a5c0");
    this._addCss("FileUpload", "editselectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("FileUpload", "editselectcolor", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 2");
    this._addCss("FileUpload", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #616161");
    this._addCss("FileUpload", "buttonborder", obj, ["mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fdfdfd 0,100 #dadada");
    this._addCss("FileUpload", "buttongradation", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#6e7a82ff","");
    this._addCss("FileUpload", "editborder", obj, ["mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #d9d9d9 0,100 #fcfcfc");
    this._addCss("FileUpload", "buttongradation", obj, ["pushed"]);

    obj = new nexacro.Style_background("#f0f0f0ff","","","0","0","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("1 solid #bababa");
    this._addCss("FileUpload", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("FileUpload", "buttoncolor", obj, ["disabled"]);

    obj = new nexacro.Style_background("#e4e4e4ff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#c2c2c2ff","");
    this._addCss("FileUpload", "editborder", obj, ["disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("FileDownload", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#d6d6d6ff","","1","solid","#d6d6d6ff","","1","solid","#d6d6d6ff","");
    this._addCss("Grid", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_treeclose.png')");
    this._addCss("Grid", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_treecollapse.png')");
    this._addCss("Grid", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_treeexpand.png')");
    this._addCss("Grid", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_treeitem.png')");
    this._addCss("Grid", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_value("0 0 0 0");
    this._addCss("Grid", "treeitemmargin", obj, ["normal"]);

    obj = new nexacro.Style_line("1","dotted","#a5b6b6ff","");
    this._addCss("Grid", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_treeopen.png')");
    this._addCss("Grid", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#5c6169ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Grid>#head", "border", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_align("center miidle");
    this._addCss("Grid>#head", "cellalign", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground2", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Grid>#head", "cellcolor", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Grid>#head", "cellcolor2", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_font("bold 9 Gulim");
    this._addCss("Grid>#head", "cellfont", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#summ", "cellfont", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fcfcfc 0,100 #f4f4f4");
    this._addCss("Grid>#head", "cellgradation", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fcfcfc 0,100 #f4f4f4");
    this._addCss("Grid>#head", "cellgradation2", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_border("1","solid","#cfcfcfff","");
    this._addCss("Grid>#head", "cellline", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_padding("3 3 3 3");
    this._addCss("Grid>#head", "cellpadding", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#body", "cellpadding", obj, ["normal", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fcfcfc 0,100 #f4f4f4");
    this._addCss("Grid>#head", "gradation", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_border("1","solid","#d6d6d6ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Grid>#body", "border", obj, ["normal", "focused"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid>#body", "cellalign", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#body", "cellcolor", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#body", "cellcolor2", obj, ["normal", "focused"]);

    obj = new nexacro.Style_border("1","solid","#d6d6d6ff","");
    this._addCss("Grid>#body", "cellline", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("exhor");
    this._addCss("Grid>#body", "celllinetype", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("#e3f2f7");
    this._addCss("Grid>#body", "selectbackground", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#body", "selectborder", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#body", "selectcolor", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("Grid>#body", "selectfont", obj, ["normal", "focused"]);

    obj = new nexacro.Style_border("1","solid","#d6d6d6ff","");
    this._addCss("Grid>#body", "selectline", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#f1f1f1ff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f1f1f1ff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#fffbceff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "background", obj, ["normal"]);
    this._addCss("Grid>#summary", "background", obj, ["normal"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Grid>#summ", "cellalign", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_background("#fffbceff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#fffbceff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#444339");
    this._addCss("Grid>#summ", "cellcolor", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#444339");
    this._addCss("Grid>#summ", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e7e7e7ff","");
    this._addCss("Grid>#summ", "cellline", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 10 0 10");
    this._addCss("Grid>#summ", "cellpadding", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 10 0 10");
    this._addCss("Grid>#controledit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#ffffff");
    this._addCss("Grid>#controltextarea", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#46463d");
    this._addCss("Grid>#controltextarea", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_Searchbtn.png","","0","0","100","50","true");
    this._addCss("Grid>#controlexpand", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("Grid>#controlcheckbox", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Grid>#controlcheckbox", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 10");
    this._addCss("Grid>#controlcombo>#comboedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#6e7a82ff","","","0","0","0","0","true");
    this._addCss("Grid>#controlprogressbar", "background", obj, ["normal"]);
    this._addCss("ProgressBar", "background", obj, ["normal"]);
    this._addCss("ProgressBarControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#5fa4b3");
    this._addCss("Grid>#controlprogressbar", "barcolor", obj, ["normal"]);
    this._addCss("ProgressBar", "barcolor", obj, ["normal"]);
    this._addCss("ProgressBarControl", "barcolor", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#464c50ff","");
    this._addCss("Grid>#controlprogressbar", "border", obj, ["normal"]);
    this._addCss("ProgressBar", "border", obj, ["normal"]);
    this._addCss("ProgressBarControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#777777ff","");
    this._addCss("Grid>#controlprogressbar", "border", obj, ["disabled"]);
    this._addCss("ProgressBar", "border", obj, ["disabled"]);
    this._addCss("ProgressBarControl", "border", obj, ["disabled"]);

    obj = new nexacro.Style_background("#9d9d9dff","","","0","0","0","0","true");
    this._addCss("Grid>#controlprogressbar", "background", obj, ["disabled"]);
    this._addCss("ProgressBar", "background", obj, ["disabled"]);
    this._addCss("ProgressBarControl", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#aeaeae");
    this._addCss("Grid>#controlprogressbar", "barcolor", obj, ["disabled"]);
    this._addCss("ProgressBar", "barcolor", obj, ["disabled"]);
    this._addCss("ProgressBarControl", "barcolor", obj, ["disabled"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("GroupBox", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("GroupBox", "titleimage", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_align("lefttext middle");
    this._addCss("GroupBox", "titleimagealign", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("GroupBox", "titleview", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e2e2e2ff","");
    this._addCss("GroupBox", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#7d7d7d");
    this._addCss("GroupBox", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("100");
    this._addCss("ImageViewer", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#7ec3d2ff","");
    this._addCss("ImageViewer", "border", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#efefefff","","","0","0","0","0","true");
    this._addCss("ImageViewer", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#dededeff","");
    this._addCss("ImageViewer", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Menu", "autohotkey", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_menu_check.png')");
    this._addCss("Menu", "checkboximage", obj, ["normal"]);
    this._addCss("PopupMenu", "checkboximage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_expand_N.png')");
    this._addCss("Menu", "expandimage", obj, ["normal", "mouseover"]);
    this._addCss("PopupMenu", "expandimage", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 11 Gulim");
    this._addCss("Menu", "font", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Menu", "itemalign", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffff00","","","0","0","0","0","true");
    this._addCss("Menu", "itembackground", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_padding("0 7 0 7");
    this._addCss("Menu", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/pmnu_WF_Bg.png","stretch","30","3","0","0","true");
    this._addCss("Menu", "popupbackground", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Menu", "popupbordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#344a4f");
    this._addCss("Menu", "popupcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Gulim");
    this._addCss("Menu", "popupfont", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Menu", "popupitembackground", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Menu", "popupitemborder", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Menu", "popupitembordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("31");
    this._addCss("Menu", "popupitemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 10");
    this._addCss("Menu", "popupitempadding", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Menu", "popuppadding", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Menu", "popuptype", obj, ["normal"]);

    obj = new nexacro.Style_color("#e8ff47");
    this._addCss("Menu", "color", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_color("#0086a2");
    this._addCss("Menu", "popupcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_font("underline bold 9 Gulim");
    this._addCss("Menu", "popupfont", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#b0d8e4");
    this._addCss("Menu", "color", obj, ["disabled"]);

    obj = new nexacro.Style_color("#c4c4c4");
    this._addCss("Menu", "popupcolor", obj, ["disabled"]);

    obj = new nexacro.Style_padding("0 10 0 10");
    this._addCss("PopupMenu", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_value("none");
    this._addCss("PopupMenu", "popuptype", obj, ["normal"]);

    obj = new nexacro.Style_color("#c4c4c4");
    this._addCss("PopupMenu", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("1 solid #c0c0c0");
    this._addCss("Radio", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_radio.png')");
    this._addCss("Radio", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #717d85");
    this._addCss("Radio", "buttonborder", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #e0e0e0 0,30 #d5d5d5");
    this._addCss("Radio", "buttongradation", obj, ["disabled"]);

    obj = new nexacro.Style_value("1 solid #c3c3c3");
    this._addCss("Radio", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_radio_D.png')");
    this._addCss("Radio", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_value("1px solid #868686ff");
    this._addCss("StepControl", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","7","7","true","true","true","true");
    this._addCss("StepControl", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fdfdfd 0,100 #f0f0f0");
    this._addCss("StepControl", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_radio_N.png')");
    this._addCss("StepControl", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("StepControl", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("15");
    this._addCss("StepControl", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#3f3f3f");
    this._addCss("StepControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("StepControl", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Dotum");
    this._addCss("StepControl", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("5 5 5 5");
    this._addCss("StepControl", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("50");
    this._addCss("StepControl", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#a6a6a6ff","","0","none","","");
    this._addCss("Tab", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #bfbfbf");
    this._addCss("Tab", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Tab", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fcfcfc 0,100 #f4f4f4");
    this._addCss("Tab", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_padding("8 10 7 10");
    this._addCss("Tab", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Tab", "showextrabutton", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #8a9b9f");
    this._addCss("Tab", "buttonborder", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f0f9fa 0,100 #eaf7f8");
    this._addCss("Tab", "buttongradation", obj, ["mouseover"]);

    obj = new nexacro.Style_line("0","none","","");
    this._addCss("Tab", "focusborder", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #6e7880 0,100 #646e75");
    this._addCss("Tab", "buttongradation", obj, ["selected", "focused"]);

    obj = new nexacro.Style_value("1 solid #555b5f");
    this._addCss("Tab", "buttonborder", obj, ["selected", "focused"]);

    obj = new nexacro.Style_color("#b7bbc3");
    this._addCss("Tab", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("1 solid #d1d7dd");
    this._addCss("Tab", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_background("#eceeefff","","","0","0","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spinup.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spinup_O.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spinup_D.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spindn.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spindn_O.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spindn_D.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_extra.png')");
    this._addCss("Tab>#extrabutton", "image", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Tabpage", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("12 0 12 0");
    this._addCss("Tabpage", "padding", obj, ["normal"]);

    obj = null;
    
//[add theme images]
  };
})();
