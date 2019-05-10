<template>
  <div id="app">
    <el-container>
      <el-main>
        <ToolsBar @add="add"></ToolsBar>
        <div style="text-align: center;">
          <div id="container">
            <div id="view">
              <div v-for="(item, index) in modules" :key="index">
                <Module :json="item" :index="index" :focus.sync="focus" @del="del"></Module>
              </div>
            </div>
          </div>
        </div>
      </el-main>
      <el-aside width="400px">
        <h2>组件编辑器</h2>
        <div v-show="focus == null" class="editor-title">选中组件后进行编辑...</div>
        <div v-show="focus != null">
          <Editor :json="modules[focus]" :focus="focus" @update="update"></Editor>
          <Styles :json="modules[focus]" :focus="focus" @update="update"></Styles>
        </div>
        <div class="export">
          <div class="editor-title">导出：</div>
          <div style="text-align: center">
            <el-button size="mini" @click="spawnHtml">HTML</el-button>
            <el-button size="mini" @click="spawnJson">JSON</el-button>
          </div>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import documentfy from '@/lib/documentfy';
import Editor from '@/components/editor.vue';
import Module from '@/components/module.vue';
import ToolsBar from '@/components/toolsBar.vue';
import Styles from '@/components/styles.vue';
import tagJson from '@/lib/tagJson.js';

export default {
  name: "App",
  data () {
    return {
      focus: null,
      modules: [
        { name: 'h2', attrs: { style: 'margin: 20px 0;font-size: 24px;' }, children: [ { type: 'text', text: '标题' } ] },
        { name: 'p', attrs: { style: 'margin: 16px 0;font-size: 16px;' }, children: [ { type: 'text', text: '段落' } ] },
        { name: 'img', attrs: { style: 'width: 100%;margin: 0;', src: '/static/images/image.png' } }
      ]
    };
  },

  methods: {
    update (json, index) {
      this.modules[index] = json;
    },
    del (_index) {
      this.modules.splice(_index, 1);
    },
    add (type) {
      let json = tagJson(type);
      this.modules.push(json);
    },

    spawnHtml () {
      let domAll = documentfy({ name: 'div', children: this.modules });
      console.log(domAll.innerHTML)
    },
    spawnJson () {
      console.log(JSON.stringify(this.modules, null, 2));
    }
  },

  components: {
    Editor,
    Module,
    ToolsBar,
    Styles
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
.el-aside {
  position: relative;
  padding: 10px;
  border-left: 1px solid #eee;
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
#container {
  display: inline-block;
  height: 667px;
  overflow-y: auto;
}
#view {
  width: 375px;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
  min-height: 667px;
  text-align: left;
  color: #000;
  font-size: 1rem;
}

.tools-bar .table {
  margin-bottom: 20px;
  font-size: 12px;
}
.export {
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 10px;
  box-sizing: border-box;
}
</style>
