# rick-text

针对微信小程序富文本标签<rich-text>的编辑器，正在构建中

[标签<rich-text>文档](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html)

## 安装

```bash
$ npm install vue-rich-text --save
```

## 使用

```javascript
import Vue from 'vue';
import ElementUI from 'element-ui'
import RickText from 'vue-rich-text';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(RickText);
```

## 编辑器展示

![编辑器展示](./static/images/view.png)

## 规划

- 支持更多组件
- 支持更多style编辑
- 美化界面样式