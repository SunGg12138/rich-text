<template>
  <div class="styles">
    <Margin :styles="styles" @change="change" v-show="styleModules.includes('margin')"></Margin>
    <Padding :styles="styles" @change="change" v-show="styleModules.includes('padding')"></Padding>
    <fontSize :styles="styles" @change="change" v-show="styleModules.includes('font-size')"></fontSize>
    <Color :styles="styles" @change="change" v-show="styleModules.includes('color')"></Color>
    <backgroundColor :styles="styles" @change="change" v-show="styleModules.includes('background-color')"></backgroundColor>
    <fontStyles :styles="styles" @change="change" v-show="styleModules.includes('font-styles')"></fontStyles>
  </div>
</template>

<script>
import style2json from '@/lib/style2json';
import json2style from '@/lib/json2style';
import Margin from './styles/margin.vue';
import Padding from './styles/padding.vue';
import fontSize from './styles/font-size.vue';
import Color from './styles/color.vue';
import backgroundColor from './styles/background-color.vue';
import fontStyles from './styles/font-styles.vue';
import settings from '@/settings'
export default {
  data () {
    return {
      styleModules: [],
      styles: {}
    };
  },
  props: {
    json: null,
    focus: Number
  },

  watch: {
    json () {
      this.init();
    }
  },

  created () {
    this.init();
  },

  methods: {
    init () {
      if (!this.json || !this.json.attrs) return;
      let moduleType = this.json.attrs['rick-text-type'];
      this.styles = style2json(this.json.attrs.style);
      this.styleModules = settings.MODULES[moduleType].styles;
    },

    change (key, value) {
      if (value) {
        this.styles[key] = value;
      } else {
        delete this.styles[key];
      }
      this.json.attrs.style = json2style(this.styles);
      this.$emit('update', this.json, this.focus);
    },
  },

  components: {
    Margin, Padding, fontSize, Color, backgroundColor, fontStyles
  }
}
</script>

<style scoped>

</style>
