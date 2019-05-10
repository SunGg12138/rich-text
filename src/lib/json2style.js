function json2style(json){
  let style = '';
  for (let key in json) {
    let _key = key;
    if (/[A-Z]/.test(_key)) {
      let uppers = _key.match(/[A-Z]/g);
      uppers.forEach(item => {
        _key = _key.replace(item, '-' + item.toLowerCase());
      });
    }
    style += _key + ': ' + json[key] + ';';
  }
  return style;
}

export default json2style;