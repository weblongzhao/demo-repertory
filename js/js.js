// JavaScript Document


//   start
ready(function (){
	var oMyself=document.getElementById('myself');
	var oTwo=document.getElementById('two')
	var oThree=document.getElementById('three')
	var oWork=document.getElementById('work')


	
	var oSlogan=document.getElementById('slogan');
	var oColumn=document.getElementById('column');
	var oRight=document.getElementById('right');


	var clientHeight=document.documentElement.clientHeight;
	var clientWidth=document.documentElement.clientWidth;
	
	//  屏幕滚动
	window.onscroll=window.onresize=function (){
		
		oTwo.style.height=clientHeight+'px';
		
		//滚动距离
		var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		
		
		// 导航条变化
		if(scrollTop>350 && scrollTop<1900)
		{
			oTwo.style.top=0;
		}
		else if(scrollTop<350 || scrollTop>1800)
		{
			oTwo.style.top=(-clientHeight)+'px';
		}
		
		
		// 第二屏滚动
		oWork.style.top=(300-scrollTop)+'px';
		document.onmousewheel=function (ev)
		{
			oEvent=ev || event;	
			
			if(oEvent.wheelDelta<0)
			{
				oWork.style.top=(300-scrollTop)+'px';	
			}
			else if(oEvent.wheelDelta>0)
			{
				oWork.style.top=(300-scrollTop)+'px';
			}
		};
		
	};
	
	
	// Myself
	
	oColumn.style.left=-(clientWidth*0.19)+'px';
	oRight.style.right=-(clientWidth*0.8)+'px';
	
	setTimeout(function (){
		oSlogan.style.top=0;
		oColumn.style.left='1px';;
		oRight.style.right=0;
	},1);

	//top
	
	// left
	var oPhoto=document.getElementsByClassName('photo')[0];
	
	var oPhotoWidth=getStyle(oPhoto,'width');
	
	oPhoto.style.height=oPhotoWidth;
	
	
	// right
	//  轮番
	var oRight=document.getElementById('right');
	var oUl=oRight.getElementsByTagName('ul')[0];
	var oLiWidth=oUl.getElementsByTagName('li')[0].offsetWidth;
			
	var oNow=1;
	function aaa(){
		if(oNow>=4)
		{
			oUl.style.transition='';
			oNow=1;	
			oUl.style.left=-(oNow*oLiWidth)+'px';
		}
	};
	var timer=null;
	clearInterval(timer);
	timer=setInterval(function (){
		oNow++;
		oUl.style.transition='2s all ease';
		oUl.style.left=-(oNow*oLiWidth)+'px';
		
		oUl.removeEventListener('transitionend',aaa,false);
		oUl.addEventListener('transitionend',aaa,false);
	},3000);
	
	//  移入暂停
	oUl.onmouseover=function (){
		clearInterval(timer);	
	};
	oUl.onmouseout=function (){
		timer=setInterval(function (){
			oNow++;
			oUl.style.transition='3s all ease';
			oUl.style.left=-(oNow*oLiWidth)+'px';
			
			oUl.removeEventListener('transitionend',aaa,false);
			oUl.addEventListener('transitionend',aaa,false);
		},4000);
	};
	
	
	
	//第二屏
	
	// HTML CSS
	var oFirst=document.getElementById('first');
	var aFirstLi=oFirst.getElementsByTagName('li');
	
	for(var i=0;i<aFirstLi.length;i++){
		enter(aFirstLi[i]);
		leave(aFirstLi[i]);
	};
	
	// JavaScript
	var oSecond=document.getElementById('second');
	var aDiv=oSecond.getElementsByTagName('div');
	
	for(var i=0;i<aDiv.length;i++){
		aDiv[i].onmouseover=function (){
			this.style.top='-150px';	
		};
		aDiv[i].onmouseout=function (){
			this.style.top=0;	
		};
	};
	
	
	// HTML5 CSS3
	var oMain=document.getElementById('main');
	var aHF=oMain.getElementsByTagName('li');
	var oPrev=document.getElementById('prev');
	var oNext=document.getElementById('next');
	
	var aClass=[];
	for(var i=0;i<aHF.length;i++){
		aClass[i]=aHF[i].className;
	};
	
	function tab(){
		for(var i=0;i<aHF.length;i++){
			aHF[i].className=aClass[i];	
		};	
	};
	
	oNext.onclick=function (){
		aClass.unshift(aClass.pop());
		tab();	
	};
	oPrev.onclick=function(){
		aClass.push(aClass.shift());	
		tab();
	};

	
window.onresize=function (){
	
	//可视区宽高
	clientHeight=document.documentElement.clientHeight;
	clientWidth=document.documentElement.clientWidth;
	
	//第二屏高度
	oTwo.style.height=clientHeight+'px';

	// Myself
	oColumn.style.left=-(clientWidth*0.19)+'px';
	oRight.style.right=-(clientWidth*0.8)+'px';
	setTimeout(function (){
		oSlogan.style.top=0;
		oColumn.style.left='1px';;
		oRight.style.right=0;
	},1);
	

	// left
	var oPhoto=document.getElementsByClassName('photo')[0];
	var oPhotoWidth=getStyle(oPhoto,'width');
	oPhoto.style.height=oPhotoWidth;



	//  right
	oLiWidth=oUl.getElementsByTagName('li')[0].offsetWidth;
};






})











































