// JavaScript Documen

window.onload=function(){
	
//主页侧边栏
	
	var oQBox1=document.getElementById('qz_box1');
	var oQPos1=document.getElementById('qz_pos1');
	var oQDiv1=document.getElementById('qz_div1');
	
	
	oQBox1.onmouseover=function (){
		oQPos1.style.display='block';
		oQDiv1.style.width='208px';
		oQDiv1.style.background='#fff';
	};
	oQBox1.onmouseout=function (){
		oQPos1.style.display='none';
		oQDiv1.style.width='191px';
		oQDiv1.style.background='';
	};
	
	var oQBox2=document.getElementById('qz_box2');
	var oQPos2=document.getElementById('qz_pos2');
	var oQDiv2=document.getElementById('qz_div2');
	
	
	oQBox2.onmouseover=function (){
		oQPos2.style.display='block';
		oQDiv2.style.width='208px';
		oQDiv2.style.background='#fff';
		
		
	};
	oQBox2.onmouseout=function (){
		oQPos2.style.display='none';
		oQDiv2.style.width='191px';
		oQDiv2.style.background='';
	};
	
	var oQBox3=document.getElementById('qz_box3');
	var oQPos3=document.getElementById('qz_pos3');
	var oQDiv3=document.getElementById('qz_div3');
	
	
	oQBox3.onmouseover=function (){
		oQPos3.style.display='block';
		oQDiv3.style.width='208px';
		oQDiv3.style.background='#fff';
		
		
	};
	oQBox3.onmouseout=function (){
		oQPos3.style.display='none';
		oQDiv3.style.width='191px';
		oQDiv3.style.background='';
	};
	
	var oQBox4=document.getElementById('qz_box4');
	var oQPos4=document.getElementById('qz_pos4');
	var oQDiv4=document.getElementById('qz_div4');
	
	oQBox4.onmouseover=function (){
		oQPos4.style.display='block';
		oQDiv4.style.width='208px';
		oQDiv4.style.background='#fff';
		
		
	};
	oQBox4.onmouseout=function (){
		oQPos4.style.display='none';
		oQDiv4.style.width='191px';
		oQDiv4.style.background='';
	};
	
	var oQBox5=document.getElementById('qz_box5');
	var oQPos5=document.getElementById('qz_pos5');
	var oQDiv5=document.getElementById('qz_div5');
	
	oQBox5.onmouseover=function (){
		oQPos5.style.display='block';
		oQDiv5.style.width='208px';
		oQDiv5.style.background='#fff';
		
		
	};
	oQBox5.onmouseout=function (){
		oQPos5.style.display='none';
		oQDiv5.style.width='191px';
		oQDiv5.style.background='';
	};
	
	var oQBox6=document.getElementById('qz_box6');
	var oQPos6=document.getElementById('qz_pos6');
	var oQDiv6=document.getElementById('qz_div6');
	
	oQBox6.onmouseover=function (){
		oQPos6.style.display='block';
		oQDiv6.style.width='208px';
		oQDiv6.style.background='#fff';
		
		
	};
	oQBox6.onmouseout=function (){
		oQPos6.style.display='none';
		oQDiv6.style.width='191px';
		oQDiv6.style.background='';
	};
	
	var oQBox7=document.getElementById('qz_box7');
	var oQPos7=document.getElementById('qz_pos7');
	var oQDiv7=document.getElementById('qz_div7');
	
	oQBox7.onmouseover=function (){
		oQPos7.style.display='block';
		oQDiv7.style.width='208px';
		oQDiv7.style.background='#fff';
		
		
	};
	oQBox7.onmouseout=function (){
		oQPos7.style.display='none';
		oQDiv7.style.width='191px';
		oQDiv7.style.background='';
	};
	
	var oQBox8=document.getElementById('qz_box8');
	var oQPos8=document.getElementById('qz_pos8');
	var oQDiv8=document.getElementById('qz_div8');
	
	oQBox8.onmouseover=function (){
		oQPos8.style.display='block';
		oQDiv8.style.width='208px';
		oQDiv8.style.background='#fff';
		
		
	};
	oQBox8.onmouseout=function (){
		oQPos8.style.display='none';
		oQDiv8.style.width='191px';
		oQDiv8.style.background='';
	};
	
	var oQBox9=document.getElementById('qz_box9');
	var oQPos9=document.getElementById('qz_pos9');
	var oQDiv9=document.getElementById('qz_div9');
	
	oQBox9.onmouseover=function (){
		oQPos9.style.display='block';
		oQDiv9.style.width='208px';
		oQDiv9.style.height='27px';
		oQDiv9.style.background='#fff';
		
		
	};
	oQBox9.onmouseout=function (){
		oQPos9.style.display='none';
		oQDiv9.style.width='191px';
		oQDiv9.style.background='';
	};
	

//主页广告

	var oQMore=document.getElementById('qzz_more');
	var oQZPos=document.getElementById('qzz_pos');
	
	
	
	oQMore.onmouseover=function (){
		oQZPos.style.display='block';
		
	};
	oQMore.onmouseout=function (){
		oQZPos.style.display='none';
		
	};


//主页广告下部
	var oQZBtn=document.getElementById('qz_button');
	var aQZSp=oQZBtn.getElementsByTagName('span');
	var oQZBox=document.getElementById('qz_bot_box');
	var aQZdl=oQZBox.getElementsByTagName('dl');
	
	for( var i=0; i<aQZSp.length;i++){
		aQZSp[i].index=i;
		aQZSp[i].onmouseover=function(){
			for(var i=0; i<aQZSp.length; i++){
				
			aQZSp[i].className='';
			aQZdl[i].className='';
				
		}
		this.className='active';
		aQZdl[this.index].className='show';
		}

		};
		
};