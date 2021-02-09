const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length == 0) {
      this.chain.push(' ');
    } else if (value === null) {
        this.chain.push('null');
      } 
    
      else {
        this.chain.push(value);
      }
    return this;
  },
  removeLink(position) {
    if (this.chain[position-1] === undefined) {
      this.chain = [];
      throw new Error();
    } else {
        this.chain.splice(position-1,1);
        return this;
      }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let s = '( ' + this.chain.join(' )~~( ') + ' )';
    this.chain = [];
    return s;
  },
  chain: [],
};

module.exports = chainMaker;
