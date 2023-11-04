var strScripts ="<OBJECT ID='Wec' CLASSID='CLSID:91BFB438-3A14-460B-8846-78D45838B564' style='width:1px; height:1px;' CodeBase='install/NamoWec8.cab#Version=8,0,0,41'>";
strScripts +="<PARAM NAME='UserLang' VALUE=kor>";
strScripts +="<PARAM NAME='InitFileURL' VALUE='./As8Init.xml'>";
strScripts +="<PARAM NAME='InitFileVer' VALUE='-9999'>";
strScripts +="<PARAM NAME='InitFileWaitTime' VALUE='3000'>";
strScripts +="<PARAM NAME='EditorAutoSaveInterval' VALUE='10'>";
strScripts +="<PARAM NAME='EditorBackupOnOff' VALUE='True'>";
strScripts +="<PARAM NAME='InstallSourceURL' VALUE='http://comp.namoeditor.co.kr/as8/AS8_update/'>";
strScripts +="</OBJECT>";

document.write(strScripts);