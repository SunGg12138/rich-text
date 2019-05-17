import RickText from '../src/index.js'
import App from './App';
import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';

import {
  Tooltip,
  ColorPicker,
  Button,
  Input,
  Aside,
  Container,
  Main,
  Menu,
  MenuItem
} from 'element-ui'

Vue.use(RickText);

// element 的一些组件
Vue.component(Tooltip.name, Tooltip);
Vue.component(ColorPicker.name, ColorPicker);
Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(Container.name, Container);
Vue.component(Aside.name, Aside);
Vue.component(Main.name, Main);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);

new Vue({
  el: '#app',
  render: h => h(App)
});
