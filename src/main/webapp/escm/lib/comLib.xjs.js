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
        this.registerScript(path, function() {
        //include "lib::comForm.xjs";
        //include "lib::comUtil.xjs";
        //include "lib::comTran.xjs";
        //include "lib::comDs.xjs";
        //include "lib::comGrid.xjs";
        //include "lib::comDate.xjs";
        //include "lib::comMenu.xjs";
        //include "lib::comUpload.xjs";
        //include "lib::comEsum.xjs";
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
