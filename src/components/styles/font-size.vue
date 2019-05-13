<template>
  <div class="editor-component">
    <div class="editor-title">字号（px）：</div>
    <div class="side">
      <input type="number" v-model="fontSize" @change="change('fontSize')">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fontSize: 0
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
      this.fontSize = parseInt(this.styles.fontSize);
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
  box-sizing: border-box;
}
</style>
