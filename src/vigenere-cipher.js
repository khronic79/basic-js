const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (mode = true) {
    this.mode = mode;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  
  encrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let s = "";
    let keyInd = 0;
    let char = '';
    let code;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) < 0){
        char = message[i];
      } else {
          if ((this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[keyInd])) < (this.alphabet.length)) {
            code = this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[keyInd]);
          } else {
              code = -this.alphabet.length + this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[keyInd]);
          }
          
          char = this.alphabet[code];
          keyInd = (keyInd == (key.length - 1)) ? 0 : keyInd+1;
      }
      s = s + char;
    }
    return this.mode ? s: s.split('').reverse().join('');
  }    
  decrypt(encryptedMessage, key) {
    let message = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let s = "";
    let keyInd = 0;
    let char = '';
    let code;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) < 0){
        char = message[i];
      } else {
          if ((this.alphabet.indexOf(message[i]) - this.alphabet.indexOf(key[keyInd])) >= 0) {
            code = this.alphabet.indexOf(message[i]) - this.alphabet.indexOf(key[keyInd]);
          } else {
              code = this.alphabet.length + this.alphabet.indexOf(message[i]) - this.alphabet.indexOf(key[keyInd]);
          }
          
          char = this.alphabet[code];
          keyInd = (keyInd == (key.length - 1)) ? 0 : keyInd+1;
      }
      s = s + char;
    }
    return this.mode ? s: s.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
