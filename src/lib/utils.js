import settings from '../settings';

export default {
  // 生成一个新的模块
  createModule (type) {
    return JSON.parse(JSON.stringify(settings.MODULES[type].json));
  }
};