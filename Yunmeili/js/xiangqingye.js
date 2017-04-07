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

		function G(id){
			return document.getElementById(id)
		}
		var arrLi=G("yanjingsuolue").getElementsByTagName('li')
		for (var i = 0; i < arrLi.length; i++) {
			arrLi[i].onclick=function(){
				var src=this.getElementsByTagName('img')[1].getAttribute("src")
				for (var j = 0; j < arrLi.length; j++) {
					removeClass(arrLi[j],"active");
					var img=arrLi[j].getElementsByTagName('img')[0];
					addClass(img,"dn")
				}
				var img1=this.getElementsByTagName('img')[0];
				removeClass(img1,"dn")
				addClass(this,"active")
				G("show").setAttribute("src",src)
			}
		}
//变心
var kaiguan=1;
document.getElementsByClassName('xq-xihuan')[0].onclick=function(event){
			if(kaiguan==1){
				var num=parseInt(this.parentNode.parentNode.getElementsByClassName('xihuanshu')[0].innerHTML);
				num+=1;
				this.parentNode.parentNode.getElementsByClassName('xihuanshu')[0].innerHTML=num;
				this.parentNode.getElementsByTagName('img')[0].setAttribute("src","../images/xq-shixin22.png");
				this.style.color="#666";
				kaiguan=0;
			}else{
				var num=parseInt(this.parentNode.parentNode.getElementsByClassName('xihuanshu')[0].innerHTML);
				num-=1;
				this.parentNode.parentNode.getElementsByClassName('xihuanshu')[0].innerHTML=num;
				this.parentNode.getElementsByTagName('img')[0].setAttribute("src","../images/xq-kongxin22_03.jpg");
				this.style.color="#fff";
				kaiguan=1;
			}
		event.preventDefault()
		}
//
$(".taobaopinglun a").click(function(event){
	event.preventDefault()
})
$(".xiaochen a").click(function(event){
	event.preventDefault()
})
$(".nav-right a").click(function(event){
	event.preventDefault()
})
//页码
var arra=document.getElementsByClassName("yema")[0].getElementsByTagName('a');
console.log(arra)
for (var i = 0; i < arra.length; i++) {
	arra[i].onclick=function(event){
				for (var j = 0; j < arra.length; j++) {
					removeClass(arra[j],"bolder")
				}
				addClass(this,"bolder")
				event.preventDefault()
			}
}