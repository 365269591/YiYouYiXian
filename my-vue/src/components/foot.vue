<template>
	<div class="foot">
			<ul>
				<router-link to="/" activeClass="act" exact>
				<li>		
					<i class="iconfont">&#xe636;</i>
					<p>首页</p>	
				</li>
				</router-link>
				<router-link to="/" activeClass="act" exact>
				<li>
					<i class="iconfont">&#xe506;</i>
					<p>县优资讯</p>	
				</li>
				</router-link>
				<router-link to="/login" activeClass="act" exact><li class="l">
			
					<i class="iconfont">&#xf01d2;</i>
					<p>购物车</p>
					<b v-if="flag">{{$store.state.nums}}</b>
				</li>
				</router-link>
				<router-link to="/wode" activeClass="act" exact>
					<li>
						<i class="iconfont">&#xe606;</i>
						<p>吃货中心</p>	
					</li>
				</router-link>
			</ul>
		</div>
</template>

<script>
	import $ from "jquery";
	export default{
		name:"foot",
		mounted(){
			this.changeColor()
			this.show();
		},
		data(){
			return{
				sum:0,
				flag:false
			}
		},
		methods:{
			changeColor(){
				$("li").click(function(){
					$(this).addClass("active").siblings().removeClass("active")				
				})
			},
			show(){
				if(this.$store.state.nums == ""){
					this.flag = false;
				}else{
					this.flag = true;
				}
			}
			
		}
	}
</script>

<style scoped>
	@import "../assets/iconfont/iconfont.css";
	.foot{
		width: 100%;
		height: 0.5rem;	
		background: #fff;
	}
	.foot ul{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		
		padding-top: 10px;
	}
	a{
		text-decoration: none;
		color: #333;
	}
	.act{
		color: red;
	}
	.foot a{
		flex: 1;
	}
	.foot li{
		list-style: none;
		
		display: flex;
		flex-wrap: wrap;
		
		align-content: space-around;
	}
	.foot i{
		width: 100%;
		text-align: center;
		font-size: 0.2rem;
	}
	.active{
		color: #980000;
	}
	.foot p{
		width: 100%;
		text-align: center;
		font-size: 0.12rem;
	}
	.l{
		position: relative;
	}
	.l b{
		width: 0.2rem;
		height: 0.2rem;
		border-radius: 50%;
		position: absolute;
		right: 0.05rem;
		background: red;
		top: -3px;
		font-size: 0.1rem;
		color: #fff;
		text-align: center;
		line-height: 0.2rem;
	}
</style>