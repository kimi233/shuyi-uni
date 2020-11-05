# c-page

作者：kimi233

Email: 15870290085@163.com

作为所有页面的根容器， 封装了大量全局组件的调用方法和一些全局的工具方法

## 使用方式

**在 template 中使用组件**

```vue
<c-page></c-page>
```

# 属性说明



## props

|属性名 |是否必填 |	类型 |	默认值 |	说明 |
|-------|---------|--------|-----|-----|
|scroll-y |否 |	Boolean |	true |	是否开启垂直滚动 |
|refresher-enabled |否 |	Boolean |	false |	是否开启下拉刷新 |
|refresher-triggered |否 |	Boolean |	false |	当前是否处于下拉刷新状态 |
|tabbar |否 |	Boolean |	false |	是否显示全局的tabbar |
|border-bottom |否 |	Boolean |	true |	是否显示导航栏下边框 |
|type |否 |	String |	full |	full,content.full为全屏，content内容区域会有一个统一的padding |
|backgroundColor |否 |	String |	#f3f4f6 |	内容区背景 |
|hide-scroll |否 |	Boolean |	true |	是否隐藏滚动条 |

# 事件说明




## event

| 事件名	| 是否必填	| 事件说明 | 返回参数 |
|-------|---------|--------|--------|
|@refresherrefresh|否|下拉刷新时触发|无 |
|@scrolltoupper|否|滚动到顶部时触发| |
|@scrolltolower|否|滚动到底部时触发| |





# c-page提供的全局组件调用方式

this.$xxxxx调用方式已经弃用

## **loadingOpen loadingDown**

`c-loading` 组件调用方式


**loadingOpen(config)**

启动一个loading

| 参数   | 类型   | 说明 |
| ------ | ------ | ---- |
| config | Object |      |

config

| 属性  | 类型   | 说明               |
| ----- | ------ | ------------------ |
| title | String | loadin中显示的文字 |



**loadingDown()**

关闭loading



```js
loadingOpen({title: "定位中..."})//开启loding

loadingDown()//关闭loading
```

> Tips:
>
> 目前loading组件全局仅共用一个，也就是说，当你在一个loading未结束时开启一个新的loading会直接覆盖掉原来的loading
>
> 结束的loading总是最新的







## messageOpen(params)



用于开启一个提示,该方法调用的是全局的 c-toast 组件的show方法，所以参数一一致

**params**

| 属性           | 显示的文本                                           | 类型     | 默认值  | 可选择                                     |
| -------------- | ---------------------------------------------------- | -------- | ------- | ------------------------------------------ |
| title           | 提示内容                        | String   | - |
| type           | 主题类型，不填默认为`default`                        | String   | default | primary / success / error / warning / info |
| duration       | toast的持续时间，单位ms                              | Nubmer   | 2000    | -                                          |
| url            | toast结束跳转的url，不填不跳转，优先级高于`back`参数 | String   | -       | -                                          |
| icon           | 是否显示显示`type`对应的图标，为`false`不显示图标    | Boolean  | true    | false                                      |
| position       | toast出现的位置                                      | String   | center  | top / bottom                               |
| callback 1.3.6 | toast结束后执行的回调方法                            | Function | -       | -                                          |
| isTab          | toast结束后，跳转tab页面时需要配置为`true`           | Boolean  | false   | true                                       |
| back 1.4.0     | toast结束后，是否返回上一页，优先级低于`url`参数     | Boolean  | false   | true                                       |

> Tips:
>
> message与loading一致，全局都只使用一个message组件，当你在一个message未结束时开启一个新的message会直接覆盖掉原来的message







## ~~this.$pageStack~~
已弃用


~~改数组中存放的是路由栈中每一个页面中的 page 组件实例，最后一个为当前页面的page，倒数第二个为上一个页面的 page。~~<br/>

>  ~~请勿修改该数组,会导致返回功能异常。~~

~~可以借助此调用其中 page 组件的方法~~

