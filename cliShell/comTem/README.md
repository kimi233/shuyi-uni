# {{componentName}}
作者：{{user.name}}

Email: {{user.email}}

这里是 {{componentName}} 组件的基本作用,记得写这个组件是干嘛的。

## 使用方式
**在 script 中引用组件**

```vue
import {{componentName1}} from "@/components/{{componentName}}"
export default {
    components: { {{componentName1}} }
}
```

**在 template 中使用组件**

```vue
<{{componentName}}></{{componentName}}>
```

# 属性说明

## props
|属性名 |是否必填 |	类型 |	默认值 |	说明 |
|-------|---------|--------|-----|-----|
|无 |否 |	无 |	无 |	无 |


# 事件说明

## event
| 事件名	| 是否必填	| 事件说明 | 返回参数 |
|-------|---------|--------|--------|
|无|否|无|无 |