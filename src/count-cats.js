const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((pre,itm)=>{
    return pre + itm.reduce((pre,itm)=>{
      return (itm == "^^"? (pre = pre +1) : pre);
    },0)
  },0)
};
