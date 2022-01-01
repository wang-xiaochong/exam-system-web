
export function isNumber(rule, value, callback) {
  var number = /^\d+$|^\d+[.]?\d+$/
  if (value == "") {
    callback();
    }
    if (!number.test(value)) {
      callback(new Error("格式有误,只能为数字"));
    } else {
      callback();
    }
};
  

