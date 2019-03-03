module.exports = function check(str, bracketsConfig) {
  let stack = [];
  if (str.length % 2 !== 0) return false;
      for (let i = 0; i < str.length; i++) {
          for (let k = 0; k < bracketsConfig.length; k++) {
              if (str[i] === bracketsConfig[k][1] && stack[stack.length - 1] === bracketsConfig[k][0]) {
                  stack.pop();
              } else if (str[i] === bracketsConfig[k][0]) {
                  stack.push(str[i]);
              }
          }
      }
      return stack.length === 0;
}