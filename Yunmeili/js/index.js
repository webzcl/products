//图片跳详情页
$(".pic>img").click(function(){
	window.location.href="pages/xiangqingye.html"
})
$(".dapei img").click(function(){
	window.location.href="pages/xiangqingye.html"
})
$(".leftpic>img").click(function(){
	window.location.href="pages/xiangqingye.html"
})
$(".rightpic li>img:first-child").click(function(){
	window.location.href="pages/xiangqingye.html"
})
//阻止a跳转
$(".banner a").click(function(event){
	event.preventDefault()
})
$(".fenxiangtop a").click(function(event){
	event.preventDefault()
})
//banner轮播
var num1=0;
function G(id){
	return document.getElementById(id)
}
function addClass(obj,name){
	var old=obj.getAttribute("class");
	
	if(old==null){
			obj.setAttribute("class",name);
	}else{
		if(old.match(name) == null){
			if(old!=null){	
				obj.setAttribute("class",old+" "+name);
			}else{
				obj.setAttribute("class",name);
			}
			// old!=null?obj.setAttribute("class",old+" "+name):
			// obj.setAttribute("class",name)
		}
	}
}
function removeClass(obj1,name1){
	var old=obj1.getAttribute("class");
	
	if(old!=null){
		var arr=old.split(" ");
		function fun(num){
			return num!=name1;
			
		}
		var newArr=arr.filter(fun);//当括号里返回值是ture
		var newName=newArr.join(" ");
		obj1.className=newName;	
	}
}

var arra=G("list").getElementsByTagName("a");
var num=arra.length;

for(var i=0;i<num;i++){
	arra[i].index=i;
	arra[i].onclick=function(){
		var idx=this.index;
		num1=idx;
		var ml=-num1*940+"px";
		G("pic").style.marginLeft=ml;
		for(var j=0;j<num;j++){
			removeClass(arra[j],"bg2");
		}
		addClass(this,"bg2");
	}
}
function lunbo(){
	if(num1<3){
		num1=num1+1;
	}else{
		num1=0;
	}
	var ml1=-num1*940+"px";
	G("pic").style.marginLeft=ml1;
	for(var k=0;k<num;k++){
		removeClass(arra[k],"bg2");
	}
	addClass(arra[num1],"bg2");
}
var stop=setInterval(lunbo,2000);
G("picShow").onmouseenter=function(){
	clearInterval(stop)
}
G("picShow").onmouseleave=function(){
	stop=setInterval(lunbo,2000)
}

//爱心添加喜欢

var arrFx=document.getElementsByClassName("fenxiang")
for (var i = 0; i <arrFx.length; i++) {
	var arrp=arrFx[i].getElementsByTagName("p");
	var kaiguan=1;
	for (var j = 0; j < arrp.length; j++) {
		arrp[j].getElementsByTagName('img')[0].onclick=function(){
			if(kaiguan==1){
				var num=parseInt(this.parentNode.childNodes[1].innerHTML);
				console.log(num)
				num+=1;
				this.parentNode.childNodes[1].innerHTML=num;
				this.setAttribute("src","images/indexxiaoxin_03.png")
				kaiguan=0;
			}else{
				var num=parseInt(this.parentNode.getElementsByTagName('span')[0].innerHTML);
				num-=1;
				this.parentNode.getElementsByTagName('span')[0].innerHTML=num;
				this.setAttribute("src","images/indexkongxin.png")
				kaiguan=1;
			}
		}
	}
}