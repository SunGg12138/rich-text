const B = 'font-weight: bold;';

const jsons = {
  'h1': { name: 'h1', attrs: {}, children: [ { type: 'text', text: '标题' } ] },
  'h2': { name: 'h2', attrs: { style: 'margin: 20px 0;' + B + 'font-size: 24px;' }, children: [ { type: 'text', text: '标题' } ] },
  'h3': { name: 'h3', attrs: {}, children: [ { type: 'text', text: '标题' } ] },
  'h4': { name: 'h4', attrs: {}, children: [ { type: 'text', text: '标题' } ] },
  'h5': { name: 'h5', attrs: {}, children: [ { type: 'text', text: '标题' } ] },
  'h6': { name: 'h6', attrs: {}, children: [ { type: 'text', text: '标题' } ] },
  'p': { name: 'p', attrs: { style: 'margin: 16px 0;' + B + 'font-size: 16px;' }, children: [ { type: 'text', text: '段落' } ] },
  'img': { name: 'img', attrs: { src: '/static/images/image.png', style: 'width: 100%;' } },
  'imgs': { name: 'div', attrs: {}, children: [ 
    { name: 'div', attrs: {}, children: [
      { name: 'img', attrs: { src: '/static/images/image.png', style: 'width: 50%;' } },
      { name: 'img', attrs: { src: '/static/images/image.png', style: 'width: 50%;' } }
    ]},
    { name: 'div', attrs: {}, children: [
      { name: 'img', attrs: { src: '/static/images/image.png', style: 'width: 50%;' } },
      { name: 'img', attrs: { src: '/static/images/image.png', style: 'width: 50%;' } }
    ]}
   ]},
};

export default function(type){
  return JSON.parse(JSON.stringify(jsons[type]));
};