import cryptoRandomString from 'crypto-random-string';
const cryptico = require('cryptico');

export default {
  generateKeyPair(bits = 1024) {
    const passphrase = cryptoRandomString(20);
    const private_key = cryptico.generateRSAKey(passphrase, bits);
    const public_key = cryptico.publicKeyString(private_key);

    return {
      public_key,
      private_key
    };
  },

  stringifyPrivateKey(privkey: any) {
    return JSON.stringify(privkey.toJSON());
  },

  privateKeyfromString(str: string) {
    const json = JSON.parse(str);
    var rsa = new cryptico.RSAKey();
    rsa.setPrivateEx(
      json.n,
      json.e,
      json.d,
      json.p,
      json.q,
      json.dmp1,
      json.dmq1,
      json.coeff
    );

    return rsa;
  }
};
