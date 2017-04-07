$("#list a").click(function(event){
			var ind=$(this).parent().index();
			$(".main-nav-bot").eq(ind).removeClass("active").siblings().addClass("active")
			event.preventDefault()
		})
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

//变心
var kaiguan=1;
document.getElementsByClassName('xihuantongji')[0].getElementsByTagName("a")[0].onclick=function(){
			if(kaiguan==1){
				var num=parseInt(this.parentNode.getElementsByTagName('span')[0].innerHTML);
				num+=1;
				this.parentNode.getElementsByTagName('span')[0].innerHTML=num;
				this.getElementsByTagName('img')[0].setAttribute("src","../images/lb-shixin_03_02.png");
				this.style.color="#666";
				kaiguan=0;
			}else{
				var num=parseInt(this.parentNode.getElementsByTagName('span')[0].innerHTML);
				num-=1;
				this.parentNode.getElementsByTagName('span')[0].innerHTML=num;
				this.getElementsByTagName('img')[0].setAttribute("src","../images/lb-kongxin.png")
				this.style.color="#fff";
				kaiguan=1;
			}
		}
$(".jianjie a").click(function(event){
	event.preventDefault()
})

//点击分类
function G(id){
	return document.getElementById(id)
}
var arra=G("paixu").getElementsByTagName("a");
for (var i = 0; i < arra.length; i++) {
	arra[i].onclick=function(event){
				for (var j = 0; j < arra.length; j++) {
					removeClass(arra[j],"color")
				}
				addClass(this,"color")
				event.preventDefault()
			}
}

var arra1=G("jiage").getElementsByTagName("a");
for (var k = 0; k < arra1.length; k++) {
	arra1[k].onclick=function(event){
				for (var l = 0; l < arra1.length; l++) {
					removeClass(arra1[l],"color")
				}
				addClass(this,"color")
				event.preventDefault()
			}
}

var arra2=G("yanse").getElementsByTagName("a");
for (var m = 0; m < arra2.length; m++) {
	arra2[m].onclick=function(event){
				for (var n = 0; n < arra2.length; n++) {
					removeClass(arra2[n].parentNode,"bg")
				}
				addClass(this.parentNode,"bg")
				event.preventDefault()
			}
}
//点击图片到详情页
$(".pic>img").click(function(){
	window.location.href="xiangqingye.html"
})
$(".pic-reapt>img").click(function(){
	window.location.href="xiangqingye.html"
})
$(".pic-reapt a").click(function(event){
	event.preventDefault()
})

//页码
var arryema=G("yema").getElementsByTagName("a");
for (var i = 0; i < arryema.length; i++) {
	arryema[i].onclick=function(event){
				for (var j = 0; j < arryema.length; j++) {
					removeClass(arryema[j],"bolder")
				}
				addClass(this,"bolder")
				event.preventDefault()
			}
}
//header阻止跳转
$(".nav-right a").click(function(event){
	event.preventDefault()
})

//main-nav-bot阻止跳转
$(".main-nav-bot a").click(function(event){
	event.preventDefault()
})