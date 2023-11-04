var $ = namo$;
var CrossEditor;

if (!window.NEXACROHTML) {
	  window.NEXACROHTML = {};
}

function domLoaded() {
	window.NEXACROHTML.Init();
}

var bInit = false;
window.NEXACROHTML.Init = function() {
	console.log("nexa caaaaaaaaaaaa ");
	var loopCnt = 0;
	var interval = setInterval(function() {
		if (loopCnt > 20 || window.NEXACROWEBBROWSER) {
			console.log("11111111111");
			console.log("INIT NEXABROWSER : " + loopCnt);
			console.log(window.NEXACROWEBBROWSER);
			console.log("11111111111");
			bInit = true;
			clearInterval(interval);
		}
		loopCnt++;
  	}, 50);
}

window.NEXACROHTML.FireUserNotify = function(userdata) {
	console.log("2222");
	console.log(window.NEXACROWEBBROWSER);
	console.log("2222");
	if (window.NEXACROWEBBROWSER) {
		//넥사크로 html5 버전
		console.log(userdata);
		console.log(window.NEXACROWEBBROWSER.on_fire_onusernotify); 
		window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, userdata);
	} else {
		//런타임 버전
		window.document.title = userdata;
	}
}

/**
* 크로스에디터 입력 값 체크 (텍스트 또는 이미지 업로드)
*/
function getEditorInput(sep) {
  var len = CrossEditor.GetTextValueLength();
  var imgList = CrossEditor.GetBodyElementsByTagName("img").length;
  
  var result;
  if (sep == "Y") {
  	result = len + "," + imgList;
  } else {
  	result = len + imgList;
  }
  window.NEXACROHTML.FireUserNotify("#EDIT@" + result);
}

/**
* 크로스에디터 입력 값 가져오기
* isBody body태그 내용만 가져올지 여부
*/
function getValue(isBody) {
  var val;
  if (isBody) {
    val = CrossEditor.GetBodyValue();
  } else {
    val = CrossEditor.GetValue();
  }
  window.NEXACROHTML.FireUserNotify("#HTML@" + val);
}

/**
* 크로스에디터 내용 입력
* isBody body태그 입력할지 여부
*/
function setValue(val, isBody) {
  var val;
  if (isBody) {
    CrossEditor.SetBodyValue(val);
  } else {
    CrossEditor.SetValue(val);
  }
}

/**
* 크로스에디터 삽입 이미지 가져오기(업로드 건만)
*/
function getImgList() {
  var imgList = CrossEditor.GetBodyElementsByTagName("img");
  var nameList = new Array();
  for (i=0; i<imgList.length; i++){
    var src = imgList[i].src;
    
    if (src != "" && src.indexOf("/ce/image/") != -1) {
      nameList.push(src.substring(src.lastIndexOf("/")+1));
    }else if(src != "" && src.indexOf("/pt/image/") != -1){
      nameList.push(src.substring(src.lastIndexOf("/")+1));
    }
  }

  var result = "";
  if (nameList.length > 0) {
    result = nameList.toString();
  }
  window.NEXACROHTML.FireUserNotify("#IMGS@" + result);
}

/**
 * 크로스에디터 편집창 상태 가져오기
 */
function getReadonly() {
  var val;
  val = CrossEditor.params.Readonly;
  
  window.NEXACROHTML.FireUserNotify("#READ@" + val);  
}

/**
 * 크로스에디터 편집창 상태 변경
 * true: 읽기 전용, false: 편집 모드
 */
function setReadonly(val) {
  if (val) {
    CrossEditor.SetReadonly(val);
  } else {
    CrossEditor.SetReadonly(false);
  }  
}