<template>
	<div class="regist">
		<p><span>用&nbsp;户&nbsp;&nbsp;名</span><input type="text" placeholder="请输入用户名" id="username"/><i>字母与数字相结合</i></p>
		<p><span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</span><input type="password" placeholder="请输入密码" id="psw"/><i>请输入6位数的密码</i></p>
		<p><span>确认密码</span><input type="password" placeholder="请确认密码" id="psw1"/><i>两次的密码不一致</i></p>
		<p><span>手机号码</span><input type="number" placeholder="手机号" id="phone"/><i>请输入11位数字的密码</i></p>
		<p><span>验&nbsp;证&nbsp;&nbsp;码</span><input type="password" placeholder="验证码" id="code"/><a href="javascript:;">&nbsp;&nbsp;免费获取验证码&nbsp;&nbsp;</a></p>
		<button id="bt" onclick="regist()">注册</button>

	</div>
</template>

<script>
	export default {
		name :"Regist",
		data () {
			return {
				
			}
		},
		mounted(){
			var oInput = document.getElementsByTagName('input');
			var oSpan = document.getElementsByTagName('i');
			var oBtn = document.getElementById('bt');
			oInput[0].onblur = function(){
				var re = /^[\u4e00-\u9fa5]{6,12}$/g;
				if(re.test(oInput[0].value) == false || oInput[0].value == ""){
					oSpan[0].style.display = "block";
				}else{
					oSpan[0].style.display = "none";
				}
			};
			oInput[1].onblur = function(){
				var re = /^([0-9])([\w\.\+\*\$\/\\]{6})$/g;
				if(re.test(oInput[1].value) == false || oInput[1].value == ""){
					oSpan[1].style.display = "block";
				}else{
					oSpan[1].style.display = "none";
				}
			};
			oInput[2].onblur = function(){
				var re = /^([0-9])([\w\.\+\*\$\/\\]{6})$/g;
				if(re.test(oInput[2].value) == false || oInput[2].value == ""){
					oSpan[2].style.display = "block";
				}else{
					oSpan[2].style.display = "none";
				}
			};
			oInput[3].onblur = function(){
				var re = /^(158|156|188|135|155)\d{9}$/g;
				if(re.test(oInput[3].value) == false || oInput[3].value == ""){
					oSpan[3].style.display = "block";
				}else{
					oSpan[3].style.display = "none";
				}
			};
		}
	}
</script>

<style scoped>
	.regist{width: 100%;height: 100%;background: #FFFFFF;overflow: hidden;}
	.regist p{
		width: 100%;height: 1rem;margin-bottom: 0.01rem;color: #333333;line-height:1rem;
	}
	.regist p span{
		display: inline-block;height:1rem;width: 1.2rem;text-align: right;margin-right: 0.2rem;float: left;
	}
	.regist p input{
		height: 1rem;float: left;
	}
	.regist p i{
		color: red;display: inline-block;height: 1rem;float: left;display: none;
	}
	input{
		border: none;
	}
	.regist p:nth-child(5) a{
		display: inline-block;background: #ff6309;color: #FFFFFF;border-radius: 0.05rem;height: 0.64rem;line-height: 0.64rem;
	}
	#bt{
		width: 97%;height: 1rem;background: #ff0000;border: none;color: #ffffff;text-align: center;line-height: 1rem;
		margin-left: 0.1rem;border-radius: 0.1rem;margin-top: 0.1rem;margin-bottom: 0.1rem;
	}
</style>