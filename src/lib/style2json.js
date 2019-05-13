function style2json(style){
  let ret = {};

  style = style.split(';');

  style.forEach(item => {
    // 最后的分号
    if (!item.trim()) return;

    let k_v = item.split(':');
    let k = k_v[0].trim(), v = k_v[1].trim();
    // 特殊属性处理
    special(k, v, ret);
  });

  // 如果一些值没有，需要初始化值
  initVal(ret);

  return ret;
};

// 特殊处理
function special (k, v, ret) {
  switch (k) {
    case 'margin':
    case 'padding':
      specialVal(v, k, ret);
      break;
    default:
      k = k.split('-');
      if (k.length === 1) {
        ret[k[0]] = v;
      } else {
        let _k = k[0];
        for (let i = 1; i < k.length; i++) {
          _k += k[i].substr(0, 1).toUpperCase() + k[i].substr(1);
        }
        ret[_k] = v;
      }
    break;
  }
}

// 特殊属性处理
function specialVal (v, prefix, ret) {
  v = v.split(/\s+/);
  if (v.length === 1) {
    ret[prefix + 'Top'] = v[0];
    ret[prefix + 'Right'] = v[0];
    ret[prefix + 'Bottom'] = v[0];
    ret[prefix + 'Left'] = v[0];
  } else if (v.length === 2) {
    ret[prefix + 'Top'] = v[0];
    ret[prefix + 'Right'] = v[1];
    ret[prefix + 'Bottom'] = v[0];
    ret[prefix + 'Left'] = v[1];
  } else if (v.length === 3) {
    ret[prefix + 'Top'] = v[0];
    ret[prefix + 'Right'] = v[1];
    ret[prefix + 'Bottom'] = v[1];
    ret[prefix + 'Left'] = v[2];
  } else if (v.length === 4) {
    ret[prefix + 'Top'] = v[0];
    ret[prefix + 'Right'] = v[1];
    ret[prefix + 'Bottom'] = v[2];
    ret[prefix + 'Left'] = v[3];
  }
}

function initVal (ret){
  if (!ret.marginTop) {
    special('margin', '0', ret);
  }
  if (!ret.paddingTop) {
    special('padding', '0', ret);
  }
  if (!ret.color) {
    ret.color = '#333333';
  }
  if (!ret.backgroundColor) {
    ret.backgroundColor = '#ffffff';
  }
}

export default style2json;