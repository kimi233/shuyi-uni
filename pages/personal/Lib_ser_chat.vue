<template>
	<view class="bgConston">
		<view class="userSession" :style="{ height: sHeight + 'px' }">
			<block v-for="(userContext,index) in userContextItem " :key="userContext.userId">
			<view class="userH" :class="{'userMe' :userContext.userId==''}">
				<view class="userImg">
					<image :src="userContext.userImg" mode="scaleToFill"></image>
				</view>
				<view class="userType">
					<!-- 是否显示用户昵称 -->
					<!-- <template v-if="userContext.userId !=''">
						<view class="userN">
							<text>{{userContext.userName}}</text>
							<text>{{userContext.Time}}</text>
						</view>
					</template> -->
					<!-- 文本格式 -->
					<template v-if="userContext.type =='text'">
						<view class="textType">
							<text>{{userContext.context}}</text>
						</view>
					</template>
					<!-- 图片格式 -->
					<template v-else-if="userContext.type =='img'">
						<view class="imgType">
							<image :src="userContext.picImg" mode="scaleToFill"></image>
						</view>
					</template>
					<!-- 视频格式 -->
					<template v-else-if="userContext.type =='video'">
						<view class="videoType">
							<video :src="userContext.videoSrc" controls ="false"></video>
						</view>
					</template>
					
				</view>
			</view>
			</block>
		</view>
		<!-- 底部输入框 -->
		<view class="userInput">
			<input type="text" v-model="text" placeholder="文明发言" adjust-position="false" />
			<view class="sumText" @tap="submit(text)">发送</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			sHeight:500,
			
			userContextItem:[{
				
				userId:1,
				meId:"",
				userName:"",
				userImg:"../../static/image/service_woman.png",
				type:"text",
				context:"吾问无为谓jhhhh哈哈哈哈哈哈哈哈哈哈哈hh哇哇哇哇",
				time:(new Date().getTime())
			},
			{
				userId:"",
				meId:2,
				userName:"白百合",
				userImg:"../../static/image/头像2.jpg",
				type:"text",
				context:"哈哈哈",
				time:(new Date().getTime())
			},
			{
			userId:1,
			meId:"",
			userName:"",
			userImg:"../../static/image/service_woman.png",
			type:"text",
			context:"吾问无为谓哇哇哇哇",
			time:(new Date().getTime())
			}
			]
		}
	},
	onLoad() {
		//获取系统信息
		uni.getSystemInfo({
			success: (res) => {
				let height=res.windowHeight-uni.upx2px(100);
				this.sHeight=height;
			}
		})
	},
	
	methods: {
		submit(text){
			// 创建一组数据
			let obj = {
				userId:"",
				meId: 2,
				userName: "白百合",
				userImg:"../../static/image/头像2.jpg",
				type:"text",
				context:text,
				time:(new Date().getTime())
			};
			this.userContextItem.push(obj);
		}
		}
}
</script>

<style>
	.bgConston{
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		margin: 0;
		padding: 0;
	}
	/* 聊天 */
	.userSession{
		width: 100%;
		height: auto;
		border-top: 1upx solid #EDEDED;
		overflow: auto;
	}
	.userH{
		width: 80%;
		height: auto;
		display: flex;
		flex: 1;
		flex-wrap: wrap;
		padding: 20upx;
	}
	.userMe{
		width: 95%;
		height: auto;
		display: flex;
		flex: 1;
		flex-wrap: wrap;
		padding: 20upx;
		justify-content: flex-start;
		flex-direction: row-reverse;
		text-align: right;
	}
	.userImg{
		width: 70upx;
		height: 70upx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 15upx;
		margin-left: 15upx;
	}
	.userImg>image{
		width: 65upx;
		height: 65upx;
		border-radius: 100%;
	}
	.userType{
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding: 10upx;
	}
	.userN{
		height: 50upx;
		display: flex;
		justify-content: space-around;
	}
	.userN>text{
		height: 50upx;
		min-height: 100upx;
		color: #666;
	}
	.textType{
		max-width: 400upx;
		background-color: #FFFFFF;
		border-radius: 10upx;
		box-shadow: 3upx 3upx 3upx 3upx #E3E3E3;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10upx;
	}
	.textType>text{
		font-size: 28upx;
		color: #666;
	}
	.imgType{
		max-width: 300upx;
		max-height: 420upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #FFFFFF;
		border-radius: 20upx;
		box-shadow: 3upx 3upx 3upx 3upx #E3E3E3;
	}
	.imgType>image{
		width: 250upx;
		height: 350upx;
		padding: 20upx;
	}
	.videoType{
		width: 300upx;
		height: 400upx;
		display: flex;
		background-color: #FFFFFF;
		border-radius: 20upx;
		box-shadow: 3upx 3upx 3upx 3upx #E3E3E3;
		align-items: center;
		justify-content: center;
		padding: 10upx;
	}
	.videoType>video{
		width: 270upx;
		height: 370upx;
	}
	.userInput{
		height: 100upx;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 0 10upx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		box-shadow: 0 0 5upx 0 #E3E3E3;
	}
	.userInput>input{
		height: 50upx;
		background: #F4F5F6;
		border-radius: 15upx;
		padding: 10upx 10upx;
		flex: 1;
		margin-right: 20upx;
		font-size: 28upx;
		
	}
	.userInput>view{
		width: 120upx;
		font-size: 24upx;
		color: #FFFFFF;
		height: 60upx;
		background-color: #18C7F2;
		border-radius: 20upx;
		text-align: center;
		line-height: 60upx;
	}
</style>
