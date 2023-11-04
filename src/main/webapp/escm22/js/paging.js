<!-- 사용방법 
/******************************/
/*프로그램:페이징 (자바스크립트)
/*작성자 : 김영진
/*작성일 : 2004년 3월
/*수정일 : 2004년 12월
/******************************/
//   <style type="text/css">
//   .page_no{
//     font-size: 9pt;
//     color: #000000;
//     text-decoration:none;
//   }
//   
//   .cur_page{
//     font-size: 11pt;
//     color: #9E9E9E;
//   }
//   </style>
//   <script type="text/javascript" src="paging.js"></script>
//   <script type="text/javascript">
//      var pag = new Paging(전체카운트수);  
//      pag.page = pag.GetPage()           // 현재페이지 구하기
//      pag.intpagesize = 10               //리스트 개수
//      pag.intblocksize = 10              //페이지 목록 수
//      pag.clsName       = 'page_no'      //페이지 스타일 시트
//      pag.cur_clsName   = 'cur_page'     // 현재 페이지 스타일 시트
//      pag.ico_prepage   = '<img src=63_63.gif border=0 title=이전페이지>' //이전1페이지 아이콘
//      pag.ico_nextpage  = '<img src=63_63.gif border=0 title=다음페이지>' //다음1페이지 아이콘
//      pag.ico_preblock  = '<img src=63_63.gif border=0 title=이전10개>'   //이전 10개 아이콘
//      pag.ico_nextblock = '<img src=63_63.gif border=0 title=다음10개>'   //다음 10개 아이콘
//      pag.ico_startpage = '<img src=63_63.gif border=0 title=처음>'       // 처음 가기 아이콘
//      pag.ico_lastpage  = '<img src=63_63.gif border=0 title=마지막>'     // 마지막가기 아이콘
//      pag.moveone = true  //이전1 다음1 보이기
//      pag.moveten = true  //이전10개 다음10개 보이기
//      pag.moveEnd  = true  //처음, 마지막 보이기
//      pag.Print();
//   </script>
//-->
<!--
function QueryString(){
   var str = document.location.href;
   this.argv = new Array();
   this.queryString = str.split('?')[1];
   this.filename = str.split('?')[0];
   
   if(!this.queryString) this.queryString = '';
   var _argv = this.queryString.split('&');
   
   if(_argv == '' ) return;
   for(var i=0; i < _argv.length; i++){
       	var cur_argv = _argv[i].split('=');
       	var item  = cur_argv[0];
       	var value = cur_argv[1];
       	this.argv[item] = cur_argv[1];
   }
   	
}

QueryString.prototype.Let_Page = function(no){
   if(!this.argv) this.argv = new Array();
   this.argv['page'] = no;
   var retVal = '';
   for(var item in this.argv){
        retVal += '&'+item+'='+ this.argv[item];
   }
   return '?'+ retVal.substr(1, retVal.length);
};

QueryString.prototype.Get_Page = function(){
   if(!this.argv) this.argv = new Array();
   if(typeof this.argv['page'] == 'undefined'  || this.argv['page'] == '' || this.argv['page'] == 0)  this.argv['page'] = 1;	
   
   return this.argv['page'];
};





function Paging(cnt)
{
   if (typeof(cnt) == 'undefined') return;

   this.totalcnt = cnt;
   this.intpagesize = 10;
   this.intblocksize = 10;
   this.page = 1;
   this.clsName = "page_no";
   this.cur_clsName = "cur_page";
   this.ico_prepage = "[이전]";
   this.ico_nextpage = "[다음]";
   this.ico_preblock = "[이전 10개]";
   this.ico_nextblock = "[다음 10개]";
   this.ico_startpage = "[처음]";
   this.ico_lastpage = "[마지막]";
   this.moveten = true;   
   this.moveEnd = true;  
   this.moveone = false;    

}

Paging.prototype.GetPage = function(){
   var page_no = new QueryString();	
   return page_no.Get_Page();
};

Paging.prototype.Print = function(){
   
   var str = new QueryString();
   
   if(typeof(this.totalcnt) == 'undefined') return;

   
   this.totalpage = Math.floor((this.totalcnt-1)/this.intpagesize) + 1;   
   this.totalblock = Math.ceil(this.totalpage/this.intblocksize);	
   this.block = Math.ceil(this.page/this.intblocksize);
   this.firstpage = (this.block-1)*this.intblocksize;
   this.lastpage = this.block*this.intblocksize;
   
   

   var message = '';
   var my_page;
   
	if(this.totalblock <= this.block){
		this.lastpage = this.totalpage;
	}
	
	
        if(this.moveEnd){
	   if (this.page > 1)
	   	message += " <a href="+str.filename+str.Let_Page(1)+" class="+this.clsName+">"+this.ico_startpage+"</a> ";
           else 
                message += " <font class="+this.clsName+">"+this.ico_startpage +"</font>";
        }

        if(this.moveten) {
	   if ( this.block > 1 )
	   {
	   	my_page = this.firstpage-this.intblocksize+1;
	   	message += " <a href="+str.filename+str.Let_Page(my_page)+" class="+this.clsName+">"+this.ico_preblock+"</a> ";
	   }else{
	   	message += " <font class="+this.clsName+">"+this.ico_preblock+"</font> ";		
	   }
        }

        if(this.moveone){
      	
        	if (this.page > 1){
                   my_page = eval(this.page) - 1;          		
		   message += " <a href="+str.filename+str.Let_Page(my_page)+" class="+this.clsName+">"+this.ico_prepage+"</a> ";        		
        	} else {
		   message += " <font class="+this.clsName+">"+this.ico_prepage+"</font> ";         		
        	}
        }

	message += " ";

	for(direct_page = this.firstpage+1; direct_page <= this.lastpage; direct_page++)
	{
		if(this.page == direct_page){
			message += "<font class="+this.cur_clsName+">"+direct_page+"</font>";
		} else {
			message += "<a href="+str.filename+str.Let_Page(direct_page)+" class="+this.clsName+">"+direct_page+"</a>";
		}
	
		if(direct_page < this.lastpage){
			message += " ";
		}
		
	}

	message += " ";
	
        if(this.moveone){
        	if (this.page < this.totalpage){
                   my_page = eval(this.page) + 1;
		   message += " <a href="+str.filename+str.Let_Page(my_page)+" class="+this.clsName+">"+this.ico_nextpage+"</a>";
        	} else {
		   message += " <font class="+this.clsName+">"+this.ico_nextpage+"</font>";         		
        	}
        }	

        if( this.moveten ) { 
	   if( this.block < this.totalblock ){
	   	my_page = this.lastpage+1;
	   	message += " <a href="+str.filename+str.Let_Page(my_page)+" class="+this.clsName+">"+this.ico_nextblock+"</a>";
	   } else {
	   	message += " <font class="+this.clsName+">"+this.ico_nextblock+"</font>";
	   }    
	}
	   
        if(this.moveEnd){
	   if (this.page < this.totalpage)
	   	message += " <a href="+str.filename+str.Let_Page(this.totalpage)+" class="+this.clsName+">"+this.ico_lastpage+"</a>";
           else 
                message += " <font class="+this.clsName+">"+this.ico_lastpage +"</font>";
        }	   
        document.writeln(message);		
};


//-->