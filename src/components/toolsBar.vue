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
          <div>文字</div>
        </td>
        <td @click="add('img')">
          <i class="icon icon-image"></i>
          <div>图片</div>
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
