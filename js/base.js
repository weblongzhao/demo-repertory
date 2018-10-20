// JavaScript Document

//  ready

function ready(fn)
{
	if(document.addEventListener)
	{
		document.addEventListener('DOMContentLoaded',fn,false);
	}
	else
	{
		document.attachEvent('onreadystatechange',function (){
			if(document.readyState == 'complete')
			{
				fn();
			}	
		});	
	}
};


//  获取非行间样式

function getStyle(obj,sName)
{
	return (obj.currentStyle || getComputedStyle(obj,false))[sName];	
};


//  到页面距离

function getPos(obj){
	var left=0;
	var top=0;
	
	while (obj){
		left+=obj.offsetLeft;
		top+=obj.offsetTop;
		
		obj=obj.offsetParent;	
	};
	
	return {left:left,top:top};
};


// 拉勾网的例子

// 获取n
function getN(obj,ev){
	var top=getPos(obj).top;
	var left=getPos(obj).left;
	var x=left+obj.offsetWidth/2-ev.clientX;
	var y=top+obj.offsetHeight/2-ev.clientY;
	return Math.round((d2a(Math.atan2(y,x))+180)/90)%4;
};
function d2a(d){
	return d*180/Math.PI;	
};
// 进入
function enter(obj){
	var oSpan=obj.getElementsByTagName('span')[0];	
	obj.onmouseenter=function (ev){
		var oEvent=ev || event;
		var n=getN(obj,oEvent);
		oSpan.style.transition='';
		switch (n){
			case 0:
				oSpan.style.left='150px';
				oSpan.style.top=0;
				break;
			case 1:
				oSpan.style.left=0;
				oSpan.style.top='150px';
				break;
			case 2:
				oSpan.style.left='-150px';
				oSpan.style.top=0;
				break;
			case 3:
				oSpan.style.left='0';
				oSpan.style.top='-150px';
				break;
		};
		setTimeout(function (){
			oSpan.style.transition='0.5s all ease';
			oSpan.style.left=0;
			oSpan.style.top=0;
		},10);
	};
};
// 离开
function leave(obj){
	var oSpan=obj.getElementsByTagName('span')[0];	
	obj.onmouseleave=function (ev){
		var oEvent=ev || event;
		var n=getN(obj,oEvent);
		oSpan.style.transition='0.2s all ease';
		switch (n){
			case 0:
				oSpan.style.left='150px';
				oSpan.style.top=0;
				break;
			case 1:
				oSpan.style.left=0;
				oSpan.style.top='150px';
				break;
			case 2:
				oSpan.style.left='-150px';
				oSpan.style.top=0;
				break;
			case 3:
				oSpan.style.left='0';
				oSpan.style.top='-150px';
				break;
		};
	};

};





























































