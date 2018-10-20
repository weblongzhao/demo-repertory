// JavaScript 

//header

window.onload=function (){
	
	//设置360为主页
	var oMadeMain=document.getElementById('madeMain');
	oMadeMain.onmouseover=function (){
		oMadeMain.style.color='red';	
	};
	oMadeMain.onmouseout=function (){
		oMadeMain.style.color='#666';	
	};
	

	//切换经典  创新	
	var oSwitch=document.getElementById('switch');
	var aSwitch=oSwitch.getElementsByTagName('a');
	for (var i=0; i<aSwitch.length;i++)
	{
		aSwitch[i].onclick=function (){
			for ( var i=0; i<aSwitch.length;i++)
			{
				aSwitch[i].className='';
			}
			this.className='active';
		};
	}
	
	
	//搜素 头部
	var oSearch_hd=document.getElementById('search_hd');
	var aSearch_hd_li=oSearch_hd.getElementsByTagName('li');
	var aSearch_hd_a=oSearch_hd.getElementsByTagName('a');
	var oMainLogo=document.getElementById('main_logo');
	var oSearchButton=document.getElementById('search_button');
	var buttonContent=[
		'好搜一下',
		'360新闻',
		'好搜视频',
		'好搜图片',
		'好搜音乐',
		'微博搜索',
		'好搜地图',
		'搜索答案',
		'淘宝搜索',
		'机票',
		'汽车',
	];
	for (var i=0;i<aSearch_hd_li.length;i++)
	{
		aSearch_hd_li[i].index=i;
		aSearch_hd_li[i].onclick=function (){
			for(var i=0;i<aSearch_hd_li.length;i++)
			{
				aSearch_hd_li[i].className='';
				aSearch_hd_a[i].className='';
			}
			this.className='active';	
			var n=this.index;
			aSearch_hd_a[n].className='active';
			oSearchButton.value=buttonContent[n];
			
		};
		
		aSearch_hd_li[i].onmouseover=function (){
			var n=this.index;
			if(this.className=='active')
			{
				
				aSearch_hd_a[n].className='active';
			}
			else
			{
				aSearch_hd_a[n].className='over';
			}
		};
		aSearch_hd_li[i].onmouseout=function (){
			var n=this.index;
			if(this.className=='active')
			{
				aSearch_hd_a[n].className='active';
			}
			else
			{
				aSearch_hd_a[n].className='';
			}
		};
	}
	
	
	//more_logo   更多的搜素logo
	var oMoreLogo=document.getElementById('more_logo');
	var oMoreLogoContent=document.getElementById('more_logo_content');
	oMoreLogo.onclick=function (){
		if(oMoreLogoContent.style.display=='block')
		{
			oMoreLogoContent.style.display='none'
		}
		else
		{
			oMoreLogoContent.style.display='block'
		}
		
	};
	
	
	//search_last_more   展开
	var oSearchLastMore=document.getElementById('search_last_more');
	var oSearchLastMoreList=document.getElementById('search_last_more_list');
	oSearchLastMore.onclick=function (){
		if(oSearchLastMoreList.style.display=='block')
		{
			oSearchLastMoreList.style.display='none'
		}
		else
		{
			oSearchLastMoreList.style.display='block'
		}
		
	};
	
	
	//换一下
	var oChange=document.getElementById('change');
	var oChange_content=document.getElementById('change_content');
	oChange.onclick=function (){
		if(oChange_content.style.display=='block')
		{
			oChange_content.style.display='none'
		}	
		else
		{
			oChange_content.style.display='block'	
		}
	};
	
	
	
	
	
	//多用   选项卡
	tab('nav_box');
	tab('mucic_last');
	tab('ml_main_content');
	tab('yourlove_box');
	tab('relax_box');
	function tab(oClass)
	{
		var aClass=document.getElementsByClassName(oClass);
		for(var i=0;i<aClass.length;i++)
		{
			var aLi=aClass[i].getElementsByClassName('for_js');
			
			var aDiv=aClass[i].getElementsByClassName('open');
			show(aLi,aDiv);
		}
		function show(oParent,oParent_open)
		{
			for(var i=0;i<oParent.length;i++)
			{
				oParent[i].index=i;
				oParent[i].onclick=function(){
					var n=this.index;
					for(var i=0;i<oParent.length;i++)
					{
						oParent[i].className='for_js';
						oParent_open[i].style.display='none';
					}
					this.className='active for_js';
					oParent_open[n].style.display='block';
					
				};
				
				oParent[i].onmouseover=function(){
					if(this.className=='active for_js')
					{
						this.className='active for_js';
					}	
					else
					{
						this.className='over for_js';
					}
				};
				oParent[i].onmouseout=function(){
					if(this.className=='active for_js')
					{
						this.className='active for_js';
					}	
					else
					{
						this.className='for_js';
					}
				};
			}
		}
	}
	
	
	
	
	//多用   移入  移出
		
	var aAline=document.getElementsByClassName('aLine');
	
	for (var i=0;i<aAline.length;i++)
	{
		aAline[i].onmouseover=function (){
			this.style.background='#bcc';	
		};
		aAline[i].onmouseout=function (){
			this.style.background='';	
		};
	}
	
};












