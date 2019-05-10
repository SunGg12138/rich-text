<template>
  <div class="module">
    <el-tooltip class="item" effect="dark" placement="right">
      <div slot="content">
        <el-button size="mini" type="info" round @click="toEdit">编辑</el-button>
        <el-button size="mini" type="info" round @click="del">删除</el-button>
      </div>
      <div ref="dom" class="dom"></div>
    </el-tooltip>

    <div class="focus" v-show="this.focus === this.index">编辑中...</div>
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
    focus: Number,
    index: Number
  },

  watch: {
    json: {
      handler(newName, oldName) {
        this.toDom();
      },
      deep: true
    }
  },

  created () {
    this.$nextTick(() => {
      this.toDom();
    });
  },

  methods: {
    toEdit () {
      this.$emit('update:focus', this.index);
    },
    // 切换成dom状态
    toDom () {
      let dom = documentfy(this.json);
      this.$refs.dom.innerHTML = '';
      this.$refs.dom.appendChild(dom);
    },
    del () {
      this.$emit('del', this.index);
    },
  },

  components: {
    TextEditor: () => import('./editors/text.vue'),
    ImgEditor: () => import('./editors/img.vue'),
  }
}
</script>

<style scoped>
.dom {
  cursor: pointer;
}
.module {
  position: relative;
}
.focus {
  padding: 0 6px;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  color: #fff;
  background-color: #ff0000;
}
</style>
