<template>
  <div id="app">
    <el-container>
      <el-main style="padding: 0;">
        <ToolsBar @add="add"></ToolsBar>
        <div style="text-align: center;">
          <el-menu :default-active="view_active" class="el-menu-view" mode="horizontal" @select="handleSelect">
            <el-menu-item index="view">视图</el-menu-item>
            <el-menu-item index="html">HTML</el-menu-item>
            <el-menu-item index="json">JSON</el-menu-item>
          </el-menu>
          <div class="container">
            <div class="view" v-show="view_active === 'view'" style="padding: 10px;">
              <div v-for="(item, index) in modules" :key="index">
                <Module :json="item" :index="index" :focus.sync="focus" @del="del"></Module>
              </div>
            </div>
            <div class="html" v-show="view_active === 'html'">
              <el-input type="textarea" class="el-input-view" :disabled="true" v-model="html"></el-input>
            </div>
            <div class="json" v-show="view_active === 'json'">
              <el-input type="textarea" class="el-input-view" :disabled="true" v-model="json"></el-input>
            </div>
          </div>
        </div>
      </el-main>
      <el-aside width="320px">
        <h2>组件编辑器</h2>
        <div v-show="focus == null" class="editor-title">选中组件后进行编辑...</div>
        <div v-show="focus != null">
          <Editor :json="modules[focus]" :focus="focus" @update="update"></Editor>
          <Styles :json="modules[focus]" :focus="focus" @update="update"></Styles>
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
      view_active: 'view',
      focus: null,
      html: '',
      json: '',
      modules: []
    };
  },

  created () {
    this.modules = [
      tagJson('h2'), tagJson('p'), tagJson('img')
    ];
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

    handleSelect (view) {
      if (view === 'html') {
        this.html = documentfy({ name: 'div', children: this.modules }).innerHTML;
      } else if (view === 'json') {
        this.json = JSON.stringify(this.modules, null, 2);
      }
      this.view_active = view;
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
#app {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-aside {
  position: relative;
  padding: 10px;
  border-left: 1px solid #eee;
  background-color: #fff;
}
.container {
  display: inline-block;
  height: 568px;
  overflow-y: auto;
}
.el-menu-view {
  width: 320px;
  margin: 0 auto;
}
.el-menu-view .el-menu-item {
  height: 30px;
  line-height: 30px;
}
.view, .html, .json {
  width: 320px;
  border-radius: 4px;
  box-sizing: border-box;
  min-height: 568px;
  text-align: left;
  color: #000;
  font-size: 1rem;
  background-color: #fff;
}
.el-input-view textarea {
  height: 568px;
  resize: none;
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
