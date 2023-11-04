//XJS=comNamo.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(exports) {
        /**
         * 나모에디터 설치 팝업
         * 설치되어 있지 않을 때 팝업 표시
         * _obj : plugin, 나모에디터 플러그인 객체
         * _ret : boolean, 설치되어 있을 때 알림(alert) 표시여부
         */
        this.gfn_installNamoPopup = function(_obj,_ret)
        {
        	try {
        		_obj.callMethod("IsDirty");
        		if (_ret != undefined && _ret) {
        			this.alert("이미 나모에디터가 설치되어 있습니다.");
        		}
        	} catch(e) {
        		window.open("OpenWeb_Namo/namo.html", "_blank", "width=550,height=300");
        	}
        }

        this.gfn_replaceImgPath = function(wrs,html,img,path)
        {
        	if (img != "" && wrs != "") {
        		html = html.replace(/(\/ce\/image\/)/gm, path);
        		var imgList = img.split(",");
        		for (var i=0; i<imgList.length; i++) {
        			var seq;
        			if ((i+1) < 10) {
        				seq = "00" + (i+1);
        			} else if ((i+1) < 100) {
        				seq = "0" + (i+1);
        			}
        			html = html.replace(imgList[i], wrs + "_ceimg" + seq);
        		}
        	}
        	return html;
        }
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();
