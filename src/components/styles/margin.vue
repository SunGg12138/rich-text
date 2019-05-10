<template>
  <div class="margin editor-component">
    <div class="editor-title">外边距（px）：</div>
    <div class="side">
      <label for="">上</label>
      <input type="number" v-model="marginTop" @change="change('marginTop')">
    </div>
    <div class="side">
      <label for="">右</label>
      <input type="number" v-model="marginRight" @change="change('marginRight')">
    </div>
    <div class="side">
      <label for="">下</label>
      <input type="number" v-model="marginBottom" @change="change('marginBottom')">
    </div>
    <div class="side">
      <label for="">左</label>
      <input type="number" v-model="marginLeft" @change="change('marginLeft')">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0
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
      this.marginTop = parseInt(this.styles.marginTop);
      this.marginRight = parseInt(this.styles.marginRight);
      this.marginBottom = parseInt(this.styles.marginBottom);
      this.marginLeft = parseInt(this.styles.marginLeft);
    },
    change (type) {
      this.$emit('change', type, this[type] + 'px');
    }
  }
}
</script>

<style scoped>
.padding {
  padding: 10px 5px;
}
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
