const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if((arguments.length == undefined) || (Array.isArray(members) == false)) {
    return false;
  }
  
  return members.reduce((s,itm) => {
    let symb = '';
    if ((typeof itm == 'string') && (itm.trim() !='')) {
      itm = itm.trim();
      symb = itm[0].toUpperCase();
    }
    else {symb = '';}
    return s = s+symb;
  },'').split('').sort().join('');
};
