<template>
  <div>
    <Iframe>
      <div class="editor-title">图片地址：</div>
      <el-input v-model="src1"><template slot="prepend">图1</template></el-input>
      <el-input v-model="src2"><template slot="prepend">图2</template></el-input>
      <el-input v-model="src3"><template slot="prepend">图3</template></el-input>
      <el-input v-model="src4"><template slot="prepend">图4</template></el-input>
    </Iframe>
  </div>
</template>

<script>
import Iframe from './iframe';
export default {
  data () {
    return {
      src1: '',
      src2: '',
      src3: '',
      src4: '',
    };
  },

  props: {
    json: {}
  },

  created () {
    this.init();
  },

  watch: {
    json: {
      handler() {
        this.init();
      },
      deep: true
    },

    src1 () {
      this.confirm();
    },
    src2 () {
      this.confirm();
    },
    src3 () {
      this.confirm();
    },
    src4 () {
      this.confirm();
    },
  },

  methods: {
    init () {
      this.src1 = this.json.children[0].children[0].attrs.src;
      this.src2 = this.json.children[0].children[1].attrs.src;
      this.src3 = this.json.children[1].children[0].attrs.src;
      this.src4 = this.json.children[1].children[1].attrs.src;
    },

    confirm () {
      this.json.children[0].children[0].attrs.src = this.src1;
      this.json.children[0].children[1].attrs.src = this.src2;
      this.json.children[1].children[0].attrs.src = this.src3;
      this.json.children[1].children[1].attrs.src = this.src4;
      this.$emit('confirm', this.json);
    }
  },

  components: {
    Iframe
  }
}
</script>

<style scoped>
</style>