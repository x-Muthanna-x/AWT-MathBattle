var Hashes = require('jshashes')
var SHA1 = new Hashes.SHA1();
export function hashPassword(pwd: string) : string{
return SHA1.b64(pwd);
}