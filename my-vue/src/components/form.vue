<template>
		<div class="form" v-if="!($store.state.username)">
			<div class="input-group">
				<span>用户名</span>
				<input type="text" id="username" placeholder="请输入用户名"/>
			</div>
			<div class="input-group">
				<span>密&ensp;&thinsp;&thinsp;码</span>
				<input type="password" id="psw" placeholder="请输入密码"/>
			</div>		
			<button type="button"@click="login()">登录</button>
			<div class="bot">
				<a href="javascript:;">忘记密码</a>
				<a href="javascript:;" @click="regin()">立即注册</a>
			</div>
		</div>
</template>

<script>
	import $ from "jquery";
	import axios from "axios";
	import { Toast } from 'mint-ui';
	export default {
		name : "form", 
		methods:{
			regin(){
				this.$router.history.push("/regin")
			},
			login(){
				var username = $("#username").val();
				var psw = $("#psw").val();
				axios.get(`/good/login/?username=${username}&psw=${psw}`)
				.then((res)=>{
					console.log(res)
					if(res.data == "登录成功"){
						Toast('登录成功');
						this.$router.history.push("/");
						this.$store.dispatch("setUserNameA",username);
					}else{
						Toast('用户名和密码输入不一致!!!')
					}
				})
			}
		}
	}
</script>

<style scoped>
		
	.form{
		width: 100%;
		padding: 0.1rem 0.02rem 0 0.02rem;
		flex: 1;
		overflow-y: auto;
	}
	.input-group{
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #e2e2e2;
		display: flex;
		background: #FFF;
	}
	
	.form span{
		width: 0.7rem;
		height: 100%;
		padding: 0.1rem 0.12rem;
		line-height: 0.28rem;
	}
	.input-group input{
		border: 0;
		flex:1;
	}
	.form button{
		width: 100%;
		margin-top: 10px;
		background: #980000;
		color: #FFF;
		font-size: 0.2rem;
		height: 0.4rem;
		border: 0;
		border-radius: 0.05rem;
	}
	.bot{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.bot a{
		color: #000;
		text-decoration: none;
	}
</style>