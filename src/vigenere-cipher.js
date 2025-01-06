const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
      this.direct = direct;
  }

  encrypt(message, key) {
      if (!message || !key) {
          throw new Error('Incorrect arguments!');
      }

      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let result = '';
      let keyIndex = 0;

      message = message.toUpperCase();
      key = key.toUpperCase();

      for (let char of message) {
          if (alphabet.includes(char)) {
              const messageIndex = alphabet.indexOf(char);
              const keyChar = key[keyIndex % key.length];
              const keyIndexValue = alphabet.indexOf(keyChar);

              const encryptedIndex = (messageIndex + keyIndexValue) % 26;
              result += alphabet[encryptedIndex];

              keyIndex++;
          } else {
              result += char;  // Non-alphabet characters are not modified
          }
      }

      return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
      if (!encryptedMessage || !key) {
          throw new Error('Incorrect arguments!');
      }

      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let result = '';
      let keyIndex = 0;

      encryptedMessage = encryptedMessage.toUpperCase();
      key = key.toUpperCase();

      for (let char of encryptedMessage) {
          if (alphabet.includes(char)) {
              const encryptedIndex = alphabet.indexOf(char);
              const keyChar = key[keyIndex % key.length];
              const keyIndexValue = alphabet.indexOf(keyChar);

              const decryptedIndex = (encryptedIndex - keyIndexValue + 26) % 26;
              result += alphabet[decryptedIndex];

              keyIndex++;
          } else {
              result += char;  // Non-alphabet characters are not modified
          }
      }

      return this.direct ? result : result.split('').reverse().join('');
  }
}
const directMachine = new VigenereCipheringMachine();

const reverseMachine = new VigenereCipheringMachine(false);

directMachine.encrypt('attack at dawn!', 'alphonse') //=> 'AEIHQX SX DLLU!'

directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') //=> 'ATTACK AT DAWN!'

reverseMachine.encrypt('attack at dawn!', 'alphonse')// => '!ULLD XS XQHIEA'

reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')// => '!NWAD TA KCATTA'


module.exports = {
  VigenereCipheringMachine
};
