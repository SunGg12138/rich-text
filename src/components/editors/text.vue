<template>
  <div>
    <Iframe @cancel="cancel" @confirm="confirm">
      <div class="editor-title">文本内容：</div>
      <el-input type="textarea" v-model="text"></el-input>
    </Iframe>
  </div>
</template>

<script>
import Iframe from './iframe';
export default {
  data () {
    return {
      text: ''
    };
  },

  props: {
    json: {}
  },

  watch: {
    json: {
      handler() {
        this.init();
      },
      deep: true
    },

    text () {
      this.confirm();
    }
  },

  created () {
    this.init();    
  },

  methods: {
    init () {
      this.text = this.json.children[0].text;
    },
    confirm () {
      this.json.children[0].text = this.text;
      this.$emit('confirm', this.json);
    },

    cancel () {
      this.$emit('cancel');
    }
  },

  components: {
    Iframe
  }
}
</script>

<style scoped>

</style>
