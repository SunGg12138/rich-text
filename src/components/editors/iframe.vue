<template>
  <div class="editor-iframe">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.editor-iframe {
  cursor: pointer;
  position: relative;
}
.editor-iframe::after {
  content: ' ';
  display: block;
  visibility: hidden;
  height: 0;
  line-height: 0;
  font-size: 0;
  clear: both;
}
.editor-iframe .btn-group {
  float: right;
  position: relative;
  top: 6px;
}
</style>
