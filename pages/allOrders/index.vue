<template>
	<view>
		<view class="container">
			<scroll-view 
			class="scroll-container" 
			scroll-x 
			scroll-with-animation 
			v-if="brands.length > 1" 
			:scroll-into-view="'s' + currentIndex">
				<view :class="['scroll-item', { active: index == currentId }]" 
				:id="'s' + index" 
				v-for="(item, index) in brands"
				:key="index" 
				@tap="handleScroll(index)">
				{{ item }}
					<view class="bottom-border" v-if="index == currentId">
						<!-- 底部蓝色短border -->
					</view>
				</view>
			</scroll-view>
		</view>
		
		<!--预约-->
		<view v-if="currentId===0">
			<Orders></Orders>
		</view>
		<!--预约-->
		
		
		<!--交易-->
		<view v-else-if="currentId===1">
			<Trade></Trade>
		</view>
		<!--交易-->
		
		<!--预约失败-->
		<view v-else-if="currentId===3">
			<Fail></Fail>
		</view>
		<!--预约失败-->
		
		<!--物流配送-->
		<view v-else>
			<Logistic></Logistic>
		</view>
		<!--物流配送-->
	</view>
	
</template>

<script>
	import Fail from '../components/fail.vue'
	import Trade from '../components/trade.vue'
	import Logistic from '../components/logistic.vue'
	import Orders from '../components/orders.vue'
	export default {
		data() {
			return {
				currentId:'',/* 控制被选中 */
				brands:[
					'线上预约中',
					'面对面交易中',
					'物流配送中',
					'预约失败',
				]
			};
		},

		onLoad: function() {},
		components: {
			Fail,
			Orders,
			Trade,
			Logistic,
		},
		onNavigationBarButtonTap(e) {
		    console.log("success")        
		},
		methods: {
			handleScroll(index) {
				this.currentId = index;
				console.log(this.currentId)
			},
		},
	}

</script>

<style lang="scss" scoped>
	/* 交易 */
	
	/* 交易 */
.scroll-container {
    // box-sizing: border-box;
    padding-left: 20upx;
    white-space: nowrap;
    height: 90upx;
    background: #fff;
	border-top: 15upx solid #EEEEEE;
    border-bottom: 15upx solid #EEEEEE;
    .scroll-item {
      text-align: center;
      display: inline-block;
      padding: 0 30upx;
      line-height: 70upx;
      font-size: 25upx;
      font-weight: 400;
      color: #1e1e1e;

      &.active {
        display: inline-block;
        font-weight: bold;
        color: #00BFFF;
        font-size: 25upx;
      }
    }

    .bottom-border {
      margin: 0 auto;
      width: 135upx;
      height: 10upx;
	  background: #00BFFF;
      // border-radius: 5upx;
	  border: 1upx;
	  // background-color:;
    }
  }
  .per{
	  margin-bottom: 30upx;
	  // align-items: center;
	  width: 100%;
	  margin-top: 20upx;
	  height: 60upx;
	  border-bottom: 1upx solid #bbbbbb;
  }
  .btn{
	  height: 80upx;
	  // width: 300upx;
	  color: 	#00BFFF;
	  border-radius: 0upx;
  }
  .per1{
  	  margin-left: 50upx;
  }
  .t1{
  	  margin-left: 10upx;
	  // align-items: center;
  }
 .tt1{
	 display: flex;
	 margin-left: 50upx;
	 font-size: 25upx;
	 color: #808080;
	 margin-top: -20upx;
 }
 .tt2{
	 text-align: center;
	 font-size: 23upx;
	 margin-left: 500upx;
	 margin-bottom: 30upx;
 }
 
 .s8{
 	margin-top: 50upx;
 	border-bottom: 1upx solid #BBBBBB;
	
 }
  
  .btn{
	  background-color:#00BFFF;
	  margin-top: -15upx;
	  color: #FFFFFF;
  }
  .mid {	
  	margin-top:20rpx;
  	width: 100%;
  	height: 300rpx;
  }
  .zt1{
  	color: #00BFFF;
  	font-size: 22rpx;
  	margin-left: 50rpx;
  	line-height: center;
  	margin-top: 25rpx;
  }
  .zt{
  	/* height: 40rpx; */
  	border-bottom:solid 1rpx;
  	/* border-top:solid 1rpx; */
  	margin-top: -5rpx;
  	height: 80rpx;
  	color: #BBBBBB;
  }
  .midone {
  	width: 100%;
  	height: 240rpx;
  	font-size: 30rpx;
  	margin-top: 35rpx;
  	align-items: center;
  	border-bottom: 1rpx solid #bbbbbb;
	// border-top: 1rpx solid #bbbbbb;
  }
  .zhengti {
  	display: flex;
  	width: 100%;
	margin-top: 40upx;
  }
  .imag{
  	margin-left:30rpx;
  }
  .midwz {
  	font-size: 28rpx;
  	height:35rpx;
  	margin-top: -5rpx;
  	align-items: center;
  	margin-left: 30rpx;
  	width: auto;
  	/* background-color:  #333333; */
  }
  .s1{
  	font-size: 20rpx;
  	height:35rpx;
  	margin-top: -120rpx;
  	align-items: center;
  	margin-left: 190rpx;
  	color: #999999;
  	display: flex;
  }
  .s2{
  	font-size: 20rpx;
  	height:35rpx;
  	margin-top: 0rpx;
  	align-items: center;
  	margin-left: 190rpx;
  	color: #999999;
  }
  .s3{
  	font-size: 20rpx;
  	height:35rpx;
  	margin-top: 0rpx;
  	align-items: center;
  	margin-left: 190rpx;
  	color: #999999;
  }
  .s4{
  	font-size: 20rpx;
  	height:35rpx;
  	margin-top: 0rpx;
  	align-items: center;
  	margin-left: 190rpx;
  	color: #F0AD4E;
  }
  .s5{
  	font-size: 20rpx;
  	height:35rpx;
  	margin-top: -26rpx;
  	align-items: center;
  	margin-left: 100rpx;
  	color: #555555;
  }
  .s6{
  	color: #DD524D;
  	
  }
  
  .s7{
  	height:35rpx;
  	align-items: center;
  	width: auto;
  	/* display: flex; */
  }
  
  
  
  .s9{
  	position: relative;
  	margin-left: 300rpx;
  	margin-top: -5rpx;
  	height: 20rpx;
  	width: 100rpx;
  }
  .btn1{
  	color: #F8F8F8;
  	width: 137rpx;
  	height: 55rpx;
  	margin-right: 20rpx;
  	margin-top: -45rpx;
	align-items: center;
  	background-color: #00BFFF;
  	border-radius: 15rpx;
  	}
  .btn2{
  	color: #F8F8F8;
  	width: 137rpx;
  	height: 55rpx;
  	margin-right: 20rpx;
  	margin-top: -60rpx;
  	background-color: #F0AD4E;
  	border-radius: 15rpx;
  	}
  .btn3{
  		color: #F8F8F8;
  		width: 137rpx;
  		height: 55rpx;
  		margin-right: 20rpx;
  		margin-top: -60rpx;
  		background-color: #4CD964;
  		border-radius: 15rpx;
  		}
  .btn4{
  		color: #F8F8F8;
  		width: 137rpx;
  		height: 55rpx;
  		
  		background-color: #00BFFF;
  		border-radius: 15rpx;
  		position: relative;
  		}
  .btn5{
  	color: #F8F8F8;
  	width: 137rpx;
  	height: 55rpx;
  	margin-right: 20rpx;
  	margin-top: -60rpx;
  	background-color: #DD524D;
  	border-radius: 15rpx;
  	text-align: center;
  	}
  .flesh{
  	
  }
  .wz{
  	font-size: 16rpx;
  	margin-top: 8rpx;
  	/* width: 137rpx; */
  	margin-left: 5rpx;
  	text-align: center;
  	position: absolute;
  }
  .wz1{
  	font-size: 16rpx;
  	margin-top: 8rpx;
  	/* width: 137rpx; */
  	margin-left: 20rpx;
  	text-align: center;
  	position: absolute;
  }
  .shumu {
  	margin-left: 180rpx;
  	font-size: 25rpx;
  	margin-top: -130rpx;
  	color:   #999999;
  	width: 120rpx;
  	display: block;
  }
  .shumuone{
  	margin-left: 180rpx;
  	font-size: 25rpx;
  	color: #999999;
  	/* background-color: #4CD964; */
  }
  .shumutwo{
  	margin-left: 250rpx;
  	font-size: 20rpx;
  	color:  #00BFFF;
  	margin-top: -30rpx;
  	/* background-color: #F0AD4E; */
  }
  .shumuthree{
  	margin-top: 10rpx;
  	font-size: 25rpx;
  	color: #F0AD4E;
  	margin-left: 180rpx;
  }
</style>