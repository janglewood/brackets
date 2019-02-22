module.exports = function check(str, bracketsConfig) {
  bracketsConfig.map(function (item, i) {
      let open = item[0];
      let close = item[1];
      let newstr;

      while(str.includes(open) && str.includes(close)) {
        str = str.replace(open, '');
        str = str.replace(close, '');
      }
  });
  return str ?  false : true;
}