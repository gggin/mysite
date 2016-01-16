/**
 * Created by GGGin on 2015/12/28.
 */

var cryptor = require('./cryptor.js')
var key = "c5760$%^1d6191202487a94d4()_2d1a";

var args = process.argv.slice(2);

//var result = cryptor.encryptAES(args[0], key);
//console.log(result);


var crypto = require('crypto');
function md5 (text) {
    return crypto.createHash('md5').update(text).digest('hex');
};

var mm = md5('1000540' + '1182368658');

var rere = cryptor.decryptAES("upTxN0ZiHOvss4LZWjtrKw==", mm);
console.log(rere);
