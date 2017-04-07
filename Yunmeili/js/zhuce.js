// $(".shouji").addClass("active");
// 		$("ul li:first-child h3").click(function(){
// 			$(".shouji").addClass("active").siblings().removeClass("active");
// 		})
// 		$("ul li:last-child h3").click(function(){
// 			$(".youxiang").addClass("active").siblings().removeClass("active");
// 		})



		$(".left ul>li:nth-child(1)>input").blur(function(){
			var zhanghao=$(this).val();
			var re=/^[0-9a-zA-Z][0-9A-z]{3,20}@(qq|QQ|sina|163|126).(com|cn|com.cn)/
			var result=re.test(zhanghao);
			if(result){
				$(".left ul>li:nth-child(1)>p").text("√")
				$(".left ul>li:nth-child(1)>p").addClass("green")
			}else{
				$(".left ul>li:nth-child(1)>p").text("×邮箱格式不正确，请重新输入");
				$(".left ul>li:nth-child(1)>p").addClass("red");
			}
		})
		$(".left ul>li:nth-child(2)>input").blur(function(){
			var zhanghao=$(this).val();
			var re=/[a-zA-Z0-9_\一-\龥]+/
			var result=re.test(zhanghao);
			if(result){
				$(".left ul>li:nth-child(2)>p").text("√");
				$(".left ul>li:nth-child(2)>p").addClass("green")
			}else{
				$(".left ul>li:nth-child(2)>p").text("×该昵称已存在，请重新输入");
				$(".left ul>li:nth-child(2)>p").addClass("red");
			}
		})
		$(".left ul>li:nth-child(4)>input").blur(function(){
			var mima=$(this).val();
			var re=/^[0-9a-zA-Z]{6,20}/
			var result1=re.test(mima);
			console.log(mima);
			if(result1){
				$(".left ul>li:nth-child(4)>p").text("√");
				$(".left ul>li:nth-child(4)>p").addClass("green")
			}else{
				$(".left ul>li:nth-child(4)>p").text("×该密码已存在，请重新输入")
				$(".left ul>li:nth-child(4)>p").addClass("red");
			}
		})
		$(".left ul>li:nth-child(5)>input").blur(function(){
			var qrmima=$(this).val();
			var mi=$(".left ul>li:nth-child(4)>input").val();
			console.log(qrmima);
			if(qrmima==mi){
				$(".left ul>li:nth-child(5)>p").text("√");
				$(".left ul>li:nth-child(5)>p").addClass("green")
			}else{
				$(".left ul>li:nth-child(5)>p").text("×确认密码输入错误，请重新输入")
				$(".left ul>li:nth-child(5)>p").addClass("red");
			}
		})
//阻止跳转
$(".left a").click(function(event){
	event.preventDefault()
})