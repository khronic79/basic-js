const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {throw new Error();}

  let arrNew = arr.slice();


for (let i=0; i<arrNew.length; i++) {
  if (arrNew[i] == "--discard-next") {
    if (i == (arrNew.length - 1)) {
      arrNew.splice(i,1,"-!-!-!");
    } else {
      arrNew.splice(i,2,"-!-!-!");
      }
  }

  if (arrNew[i] == "--discard-prev") {
    if (i == 0) {
      arrNew.splice(i,1,"-!-!-!");
    } else {
      arrNew.splice(i-1,2,"-!-!-!");
      }
  }
  
  if (arrNew[i] == "--double-next") {
    if (i == (arrNew.length - 1)) {
      arrNew.splice(i,1,"-!-!-!");
    } else {
    let ins = arrNew[i+1];
    arrNew.splice(i,1,"-!-!-!",ins);
      }
  }

  if (arrNew[i] == "--double-prev") {
    if (i == 0) {
      arrNew.splice(i,1,"-!-!-!");
     } else {
    let ins = arrNew[i-1];
    arrNew.splice(i,1,ins,"-!-!-!");
     }
  }

}

  
   while (arrNew.indexOf('-!-!-!')>=0) {
    arrNew.splice(arrNew.indexOf('-!-!-!'),1);
  }

  return arrNew;

};
