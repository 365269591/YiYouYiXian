<template>
	<div class="login">
		<p><span>用户名</span><input type="text" placeholder="请输入用户名" id="username" v-model="username"/></p>
		<p><span>密&nbsp;&nbsp;&nbsp;码</span><input type="password" placeholder="请输入密码" id="psw" v-model="psw"/></p>
		<button id="btn" @click="login()">登录</button>
		<div class="login-1">
			<a href="javascript:;">忘记密码?</a>
			<a href="javascript:;">立即注册</a>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name :"Login",
		data () {
			return {
				username:"",
				psw:""
			}
		},
		methods:{
			login:function(){
				axios.post('/api/login', {
				    username: this.username,
				    psw:this.psw
				  })
				  .then(function (res) {
				    console.log(res);
					    if(res.code == 1){
					    alert(res.message);
						location.href = "/dashboard?r=" + new Date().getTime();
				    }

				  })
				  .catch(function (error) {
				    console.log(error);
				  });
			}
		}
	}
</script>

<style scoped>
	.login{width: 100%;height: 100%;background: #eeeeee;overflow: hidden;}
	.login p{
		width: 100%;height: 1rem;background: #FFFFFF;margin-bottom: 0.02rem;color: #666666;
	}
	.login p span{
		display: inline-block;height:1rem;
	}
	.login p:nth-child(1){
		line-height: 1rem;padding-left: 0.14rem;margin-top: 0.1rem;
	}
	.login p:nth-child(2){
		line-height: 1rem;padding-left: 0.14rem;margin-top: 0.1rem;
	}
	 #username{
		border: none;height: 0.8rem;margin-left: 0.1rem;
	}
	 #psw{
		border: none;height: 1rem;margin-left: 0.1rem;
	}
	#btn{
		width: 97%;height: 1rem;background: #980000;border: none;color: #ffffff;text-align: center;line-height: 1rem;
		margin-left: 0.1rem;border-radius: 0.1rem;margin-top: 0.1rem;margin-bottom: 0.1rem;
	}
	.login-1{
		width: 100%;height: 100%;
	}
	.login-1>a:nth-child(1){
		display: inline-block;float: left;font-size: 16px;
	}
	.login-1>a:nth-child(2){
		display: inline-block;float: right;font-size: 16px;
	}
</style>