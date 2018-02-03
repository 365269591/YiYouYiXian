<template>
	<div class="main" >
		<div class="header">
			<div class="inps" @click="changeFlag()">
				<div class="inp1" v-if="flag" >
					<i class="iconfont">&#xe633;</i>
					<span>搜索</span>
				</div>
				<div class="inp2" v-if="!flag">
					<i class="iconfont">&#xe633;</i>
					<input class="blur" @blur="changeFlagA()"  type="text"  placeholder="搜索"/>
					<button type="button">搜索</button>
				</div>
			</div>
			<keep-alive>
				<banner></banner>
			</keep-alive>
			<keep-alive>
				<list></list>
			</keep-alive>
		</div>
		<keep-alive>
			<foot></foot>
		</keep-alive>
	</div>
</template>

<script>
	import banner from "./banner";
	import list from "./list";
	import foot from "./foot";
	export default {
		name : "main",
		data(){
			return {
				flag:true
			}
		},
		components:{
			banner,
			list,
			foot
		},
		methods:{
			changeFlag(){
				this.flag = false
			},
			changeFlagA(){
				if(document.getElementsByClassName("blur")[0].value == ''){		
					this.flag = true
				}
			}	
			
		}
	}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";
	.main{
		width: 100%;
		height: 100%;
		display: flex;
		font-size: 0.14rem;
		flex-direction: column;
	}
	.header{
		width: 100%;
		flex: 1;
	
		overflow-y: auto;
	}
	.inps{
		width: 100%;
		height: 0.28rem;
		position: absolute;
		top: 0.1rem;
		z-index: 999;
		
	}
	.inp1{
		width: 95%;
		margin: 0 auto;
		border: 1px solid #e6e6ea;
		height: 100%;
		text-align: center;
		line-height:0.28rem ;
		color: #9b9b9b;
		border-radius: 5px;
		background: #fff;
	}
	.inp2{
		width: 95%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		height: 100%;
		position: relative;
		
	}
	.inp2 input{
		width: 85%;
		height: 100%;
		border: 1px solid #e6e6ea;
		padding-left: 0.2rem;
		background: #fff;
	}
	.inp2 i{
		display: inline-block;
		height: 100%;
		line-height: 32px;
		position: absolute;
		left: 5px;
	}
	.inp2 button{
		width: 13%;
		height: 100%;
		text-align: center;
		border: 0;
		color: #333;
		background: #cc0000;
		border-radius: 5px;
	}
	.inp1 span{
		margin-left: 5px;
	}
</style>