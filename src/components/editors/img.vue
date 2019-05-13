<template>
  <div>
    <Iframe>
      <div class="editor-title">图片地址：</div>
      <el-input class="el-input-img" v-model="src"></el-input>
    </Iframe>
  </div>
</template>

<script>
import Iframe from './iframe';
export default {
  data () {
    return {
      src: ''
    };
  },

  props: {
    json: {}
  },

  created () {
    this.init();
  },

  watch: {
    json: {
      handler() {
        this.init();
      },
      deep: true
    },

    src () {
      this.confirm();
    }
  },

  methods: {
    init () {
      this.src = this.json.attrs.src;
    },

    confirm () {
      this.json.attrs.src = this.src;
      this.$emit('confirm', this.json);
    }
  },

  components: {
    Iframe
  }
}
</script>

<style>
.el-input-img .el-input__inner {
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  padding: 0 8px;
}
</style>