<template>
  <div class="styles">
    <Margin :styles="styles" @change="change"></Margin>
  </div>
</template>

<script>
import style2json from '@/lib/style2json';
import json2style from '@/lib/json2style';
import Margin from './styles/margin.vue';
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
    Margin
  }
}
</script>

<style scoped>

</style>
