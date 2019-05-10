// html json转化成dom
function documentfy (json, parent) {
  let dom;
  if (json.type === "text") {
    dom = document.createTextNode(json.text);
  } else {
    dom = document.createElement(json.name);
  }

  // 添加属性
  if (json.attrs) {
    for (let key in json.attrs) {
      dom.setAttribute(key, json.attrs[key]);
    }
  }

  // 添加子元素
  if (json.children) {
    json.children.forEach(child => {
      documentfy(child, dom);
    });
  }

  if (parent) parent.appendChild(dom);
  else return dom;
} 

export default documentfy;