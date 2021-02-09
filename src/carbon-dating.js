const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (arguments.length == 0) {return false}
  if (typeof sampleActivity != 'string') {return false}
  if (((sampleActivity * 1) <= 0) || ((sampleActivity * 1) > 15) || isNaN(sampleActivity * 1)) {return false}
  return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(Math.LN2/HALF_LIFE_PERIOD));
};
