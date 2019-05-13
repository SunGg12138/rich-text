const B = 'font-weight: bold;';

// 每个组件的json配置结构
const MODULES = {
  'h2': {
    styles: [ 'padding', 'margin', 'font-size', 'color', 'background-color', 'font-styles' ],
    json: { name: 'h2', attrs: { 'rick-text-type': 'h2', class: 'rick-text-h2', style: 'margin: 20px 0;' + B + 'font-size: 24px;' }, children: [ { type: 'text', text: '标题' } ] }
  },
  'p': {
    styles: [ 'padding', 'margin', 'font-size', 'color', 'background-color', 'font-styles' ],
    json: { name: 'p', attrs: { 'rick-text-type': 'p', class: 'rick-text-p', style: 'margin: 16px 0;' + B + 'font-size: 16px;' }, children: [ { type: 'text', text: '段落' } ] }
  },
  'img': {
    styles: [ 'padding', 'margin', 'background-color' ],
    json: { name: 'img', attrs: { 'rick-text-type': 'img',class: 'rick-text-img', src: '/static/images/image.png', style: 'width: 100%;' } }
  },
  'imgs': {
    styles: [ 'padding', 'margin', 'background-color' ],
    json: { name: 'div', attrs: { 'rick-text-type': 'imgs', class: 'rick-text-imgs', style: "" }, children: [ 
      { name: 'div', attrs: {}, children: [
        { name: 'img', attrs: { src: '/static/images/image.png', style: 'width: 47%;' } },
        { name: 'img', attrs: { src: '/static/images/image.png', style: 'width: 47%;margin-left: 6%;' } }
      ]},
      { name: 'div', attrs: { style: 'margin-top: 6%;' }, children: [
        { name: 'img', attrs: { src: '/static/images/image.png', style: 'width: 47%;' } },
        { name: 'img', attrs: { src: '/static/images/image.png', style: 'width: 47%;;margin-left: 6%;' } }
      ]}
    ]}
  },
};

export default {
  MODULES
};