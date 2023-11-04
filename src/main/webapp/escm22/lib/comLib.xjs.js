//XJS=comLib.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path, "lib::comForm.xjs");
        this.addIncludeScript(path, "lib::comUtil.xjs");
        this.addIncludeScript(path, "lib::comTran.xjs");
        this.addIncludeScript(path, "lib::comDs.xjs");
        this.addIncludeScript(path, "lib::comGrid.xjs");
        this.addIncludeScript(path, "lib::comDate.xjs");
        this.addIncludeScript(path, "lib::comMenu.xjs");
        this.addIncludeScript(path, "lib::comUpload.xjs");
        this.addIncludeScript(path, "lib::comEsum.xjs");
        this.registerScript(path, function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comForm.xjs", null, exports); }	//include "lib::comForm.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comUtil.xjs", null, exports); }	//include "lib::comUtil.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comTran.xjs", null, exports); }	//include "lib::comTran.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comDs.xjs", null, exports); }	//include "lib::comDs.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comGrid.xjs", null, exports); }	//include "lib::comGrid.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comDate.xjs", null, exports); }	//include "lib::comDate.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comMenu.xjs", null, exports); }	//include "lib::comMenu.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comUpload.xjs", null, exports); }	//include "lib::comUpload.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comEsum.xjs", null, exports); }	//include "lib::comEsum.xjs";
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();
