<template>
  <div class="editor-component">
    <div class="editor-title">文字颜色：</div>
    <div>
      <el-color-picker v-model="color" @change="change('color')"></el-color-picker>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color: '#ffffff'
    };
  },

  props: {
    styles: {}
  },

  watch: {
    styles () {
      this.init();
    }
  },

  created () {
    this.init();
  },

  methods: {
    init () {
      this.color = this.styles.color;
    },
    change (type) {
      this.$emit('change', type, this[type]);
    }
  }
}
</script>

<style scoped>
.side {
  width: 65px;
  position: relative;
  font-size: 12px;
  display: inline-block;
  line-height: 20px;
}
.side input {
  width: 100%;
  box-sizing: border-box;
}
</style>
