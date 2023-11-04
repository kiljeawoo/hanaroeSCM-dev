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
	var loopCnt = 0;
	var interval = setInterval(function() {
		if (loopCnt > 20 || window.NEXACROWEBBROWSER) {
			bInit = true;
			clearInterval(interval);
		}
		loopCnt++;
  	}, 50);
}

window.NEXACROHTML.FireUserNotify = function(userdata) {
	if (window.NEXACROWEBBROWSER) {
		//�ػ�ũ�� html5 ����
		window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, userdata);
	} else {
		//��Ÿ�� ����
		window.document.title = userdata;
	}
}

/**
* ũ�ν������� �Է� �� üũ (�ؽ�Ʈ �Ǵ� �̹��� ���ε�)
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
* ũ�ν������� �Է� �� ��������
* isBody body�±� ���븸 �������� ����
*/
function getValue(isBody) {
  var val;
  if (isBody) {
    val = CrossEditor.GetBodyValue();
  } else {
    val = CrossEditor.GetValue();
  }
  console.log("HTML:" + val);  
  
  window.NEXACROHTML.FireUserNotify("#HTML@" + val);
}

/**
* ũ�ν������� ���� �Է�
* isBody body�±� �Է����� ����
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
* ũ�ν������� ���� �̹��� ��������(���ε� �Ǹ�)
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
 * ũ�ν������� ����â ���� ��������
 */
function getReadonly() {
  var val;
  val = CrossEditor.params.Readonly;
  
  window.NEXACROHTML.FireUserNotify("#READ@" + val);  
}

/**
 * ũ�ν������� ����â ���� ����
 * true: �б� ����, false: ���� ���
 */
function setReadonly(val) {
  if (val) {
    CrossEditor.SetReadonly(val);
  } else {
    CrossEditor.SetReadonly(false);
  }  
}

function getImgSize() {
  var sizeList = size.substring(1, size.length-1);
  window.NEXACROHTML.FireUserNotify("#SIZE@" + sizeList);  
}

console.log(this.parentNode);