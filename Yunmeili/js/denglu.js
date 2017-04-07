
$(".left ul:nth-child(2) li:nth-child(1)>input").blur(function(){
			var yonghu=$(this).val();
			var re=/^[a-zA-z]\w{3,15}$/;
			var result1=re.test(yonghu);
			if(result1){
				$(".left ul:nth-child(2) li:nth-child(1)>p").text("√");
				$(".left ul:nth-child(2) li:nth-child(1)>p").addClass("green")
			}else{
				$(".left ul>li:nth-child(1)>p").text("×用户名不正确，请重新输入")
				$(".left ul>li:nth-child(1)>p").addClass("red");
			}
		})


$(".left ul:nth-child(2) li:nth-child(2)>input").blur(function(){
			var mima=$(this).val();
			var re=/^[0-9a-zA-Z]{6,20}/
			var result1=re.test(mima);
			console.log(mima);
			if(result1){
				$(".left ul:nth-child(2) li:nth-child(2)>p").text("√");
				$(".left ul:nth-child(2) li:nth-child(2)>p").addClass("green")
			}else{
				$(".left ul:nth-child(2) li:nth-child(2)>p").text("×密码不正确，请重新输入")
				$(".left ul:nth-child(2) li:nth-child(2)>p").addClass("red");
			}
		})

//阻止跳转
$(".left ul:nth-child(2)>li:last-child a").click(function(event){
	event.preventDefault()
})