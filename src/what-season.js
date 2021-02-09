const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (arguments.length == 0) {
    return "Unable to determine the time of year!";
  }

  if ((!(date instanceof Date) || (Object.prototype.toString.call(date) != '[object Date]'))) {
    throw new Error("FAIL");
  }


  let season = [
    'winter',
    'winter',
    'spring',
    'spring',
    'spring',
    'summer',
    'summer',
    'summer',
    'autumn (fall)',
    'autumn (fall)',
    'autumn (fall)',
    'winter',
    ];
  return season[date.getMonth()];
};
