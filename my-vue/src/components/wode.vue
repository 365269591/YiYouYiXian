<template>
	<div class="wode">
		<forms v-if="flag"></forms>
		<div class="Chowhound" v-if="!flag">
			<div class="head">
				
				<div class="head_t">
					<div class="username">
							{{$store.state.username}}
							<button @click="tuichu()">退出登录</button>
					</div>
				
					<div class="xbox">
						<i class="iconfont icon-erweima"></i>
						<span>会员码</span>
					</div>
				</div>
				<div class="head_f">
					<ul>
						<li>
							<span>积分</span>
							<span>0</span>
						</li>
						<li>
							<span>余额</span>
							<span>0</span>
						</li>
						<li>
							<span>优惠卷</span>
							<span>0</span>
						</li>
						<li>
							<span>礼品</span>
							<span>0</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="nav">
				<div class="nav-1">
					<i class="iconfont icon-dingdan"></i>
					<span>我的订单</span>
				</div>
				<div class="nav-2">
					<span>全部订单</span>
					<i class="iconfont icon-you"></i>
				</div>
			</div>
			<div class="banner">
				<ul>
					<li>
						<i class="iconfont icon-icon-test"></i>
						<span>待付款</span>
					</li>
					<li>
						<i class="iconfont icon-daifahuo"></i>
						<span>待发货</span>
					</li>
					<li>
						<i class="iconfont icon-daishouhuo"></i>
						<span>待收货</span>
					</li>
					<li>
						<i class="iconfont icon-daipingjia"></i>
						<span>待评价</span>
					</li>
					<li>
						<i class="iconfont icon-icon-test"></i>
						<span>退换货</span>
					</li>
				</ul>
			</div>
			<div id="foot">
				<div class="foot-1">
					<i class="iconfont icon-huiyuanzhongxin"></i>
					<span>会员中心</span>
				</div>
				<div class="foot-2">
					<span>享等级特权</span>
					<i class="iconfont icon-you"></i>
				</div>
			</div>
			<div class="foot1">
				<div class="foot1-1">
					<i class="iconfont icon-qiyefuwu"></i>
					<span>企业服务</span>
				</div>
				<div class="foot1-2">
					<i class="iconfont icon-you"></i>
				</div>
			</div>
			<div class="foot2">
				<div class="foot2-1">
					<i class="iconfont icon-2zaixiankefucheng"></i>
					<span>在线客服</span>
				</div>
				<div class="foot2-2">
					<i class="iconfont icon-you"></i>
				</div> 
			</div>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import foot from "./foot"
	import forms from "./form"
	import { Toast } from 'mint-ui';
	export default{
		name:"Chowhound",
		data(){
			return{
				flag :true
			}
		},
		components:{
			foot,
			forms
		},
		mounted(){
			this.init()
		},
		methods:{
			tuichu(){
				localStorage.clear();
				Toast('退出成功');
				this.$store.state.username = "";
				this.$store.state.nums = 0;
				this.$router.history.push("/")
			},
			init(){
				if(this.$store.state.username == ""){
					this.flag = true
				}else{
					this.flag = false
				}
			}
		}
	}
</script>

<style scoped>
	@import '../assets/css/Chowhound.css';
	@import '../assets/iconfont/iconfont.css';
</style>