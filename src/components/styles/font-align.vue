<template>
  <div>
    <div class="editor-title">文字样式：</div>
    <el-button size="mini" icon="icon-bold" circle :class="{active: bold}" @click="change('bold')"></el-button>
    <el-button size="mini" icon="icon-italic" circle :class="{active: italic}" @click="change('italic')"></el-button>
    <el-button size="mini" icon="icon-underline" circle :class="{active: underline}" @click="change('underline')"></el-button>
    <el-button size="mini" icon="icon-strikethrough" circle :class="{active: strikethrough}" @click="change('strikethrough')"></el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bold: false,
      italic: false,
      underline: true,
      strikethrough: false,
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
      this.bold = this.styles.fontWeight === 'bold';
      this.italic = this.styles.fontStyle === 'italic';
      this.underline = this.styles.textDecoration === 'underline';
      this.strikethrough = this.styles.textDecoration === 'line-through';
    },
    change (type) {
      switch (type) {
        case 'bold':
          this.$emit('change', 'fontWeight', !this[type]? 'bold' : 'normal');
          break;
        case 'italic':
          this.$emit('change', 'fontStyle', !this[type]? 'italic' : 'normal');
          break;
        case 'underline':
          this.$emit('change', 'textDecoration', !this[type]? 'underline' : 'normal');
          this.strikethrough = false;
          break;
        case 'strikethrough':
          this.$emit('change', 'textDecoration', !this[type]? 'line-through' : 'normal');
          this.underline = false;
          break;
      }
      this[type] = !this[type];
    }
  }
}
</script>


<style scoped>
.active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: 0;
}
</style>
