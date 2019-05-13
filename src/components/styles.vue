<template>
  <div class="styles">
    <Margin :styles="styles" @change="change"></Margin>
    <Padding :styles="styles" @change="change"></Padding>
    <fontSize :styles="styles" @change="change"></fontSize>
    <Color :styles="styles" @change="change"></Color>
    <backgroundColor :styles="styles" @change="change"></backgroundColor>
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
export default {
  data () {
    return {
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
      if (!this.json || !this.json.attrs || !this.json.attrs.style) return;
      this.styles = style2json(this.json.attrs.style);
    },

    change (key, value) {
      this.styles[key] = value;
      this.json.attrs.style = json2style(this.styles);
      this.$emit('update', this.json, this.focus);
    },
  },

  components: {
    Margin, Padding, fontSize, Color, backgroundColor
  }
}
</script>

<style scoped>

</style>
