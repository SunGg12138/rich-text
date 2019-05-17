import RickText from './RickText.vue';
import '../lib/icomoon/style.css';

/* istanbul ignore next */
RickText.install = function(Vue) {
  Vue.component(RickText.name, RickText);
};

export default RickText;