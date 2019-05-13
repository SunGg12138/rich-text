<template>
  <div class="tools-bar">
    <table class="table">
      <tr>
        <td @click="add('h2')">
          <i class="icon icon-font"></i>
          <div>标题</div>
        </td>
        <td @click="add('p')">
          <i class="icon icon-font-size"></i>
          <div>段落</div>
        </td>
        <td @click="add('img')">
          <i class="icon icon-image"></i>
          <div>图片</div>
        </td>
        <td @click="add('imgs')">
          <i class="icon icon-images"></i>
          <div>图片组</div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'toolsBar',
  methods: {
    add (type) {
      this.$emit('add', type);
    }
  }
}
</script>

<style scoped>
.tools-bar {
  padding: 12px 0;
  background-color: #fff;
  margin-bottom: 10px;
}
.table {
  margin: 0 auto;
  border-collapse: collapse;
}
.table .icon {
  font-size: 20px;
}
.table td {
  width: 54px;
  height: 54px;
  text-align: center;
  border: 1px solid #eee;
  cursor: pointer;
  box-sizing: border-box;
}
.table td:hover {
  color: #eb5648;
}

.tools-bar .table {
  font-size: 12px;
}
</style>
