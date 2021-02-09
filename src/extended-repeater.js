const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = null) {
  if (options == null) return str;
  str = String(str);
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition;
  if (options.addition === undefined) {addition = '';}
    else {
      addition = String(options.addition);
    }
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  let s = addition;

  for (let i = 1; i< additionRepeatTimes; i++) {
    s = s + additionSeparator + addition;
  }

  str = str + s;

  s = str;

  for (let j = 1; j < repeatTimes;j++) {
    str = str + separator + s;
  }


  return str;
}
  