"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_random_string_1 = __importDefault(require("crypto-random-string"));
var cryptico = require('cryptico');
exports.default = {
    generateKeyPair: function (bits) {
        if (bits === void 0) { bits = 1024; }
        var passphrase = crypto_random_string_1.default(20);
        var private_key = cryptico.generateRSAKey(passphrase, bits);
        var public_key = cryptico.publicKeyString(private_key);
        return {
            public_key: public_key,
            private_key: private_key
        };
    },
    stringifyPrivateKey: function (privkey) {
        return JSON.stringify(privkey.toJSON());
    },
    privateKeyfromString: function (str) {
        var json = JSON.parse(str);
        var rsa = new cryptico.RSAKey();
        rsa.setPrivateEx(json.n, json.e, json.d, json.p, json.q, json.dmp1, json.dmq1, json.coeff);
        return rsa;
    }
};
