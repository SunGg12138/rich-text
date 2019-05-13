<template>
  <div class="editor-component">
    <div class="editor-title">内边距（px）：</div>
    <div class="side">
      <label for="">上</label>
      <input type="number" v-model="paddingTop" @change="change('paddingTop')">
    </div>
    <div class="side">
      <label for="">右</label>
      <input type="number" v-model="paddingRight" @change="change('paddingRight')">
    </div>
    <div class="side">
      <label for="">下</label>
      <input type="number" v-model="paddingBottom" @change="change('paddingBottom')">
    </div>
    <div class="side">
      <label for="">左</label>
      <input type="number" v-model="paddingLeft" @change="change('paddingLeft')">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0
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
      this.paddingTop = parseInt(this.styles.paddingTop);
      this.paddingRight = parseInt(this.styles.paddingRight);
      this.paddingBottom = parseInt(this.styles.paddingBottom);
      this.paddingLeft = parseInt(this.styles.paddingLeft);
    },
    change (type) {
      this.$emit('change', type, this[type] + 'px');
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
  padding: 0 0 0 25px;
  box-sizing: border-box;
}
.side label {
  position: absolute;
  left: 5px;
}
</style>
