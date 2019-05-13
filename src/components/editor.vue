<template>
  <div class="editor editor-component">
    <component :is="editComponent" :json="json" @confirm="confirm"></component>
  </div>
</template>

<script>
import documentfy from '@/lib/documentfy';
export default {
  data () {
    return {
      editComponent: ''
    };
  },

  props: {
    json: {},
    // 当前进入编辑状态的组件序号
    focus: Number,
  },

  watch: {
    focus (newValue, oldValue) {
      if (newValue === oldValue) return;
      this.toEdit();
    }
  },

  methods: {
    // 确认编辑信息
    confirm (json) {
      this.$emit('update', this.json, this.focus);
    },
    // 切换成编辑状态
    toEdit () {
      switch (this.json.name) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
        case 'p':
          this.editComponent = 'TextEditor';
          break;
        case 'img':
          this.editComponent = 'ImgEditor';
          break;
        case 'imgs':
          this.editComponent = 'ImgsEditor';
          break;
      }
    },
    // 删除当前模块
    del () {
      this.$emit('del', this.index);
    }
  },

  components: {
    TextEditor: () => import('./editors/text.vue'),
    ImgEditor: () => import('./editors/img.vue'),
    ImgsEditor: () => import('./editors/imgs.vue'),
  }
}
</script>

<style scoped>
.dom {
  cursor: pointer;
}
</style>
