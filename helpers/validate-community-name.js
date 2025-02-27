const namehash = require("@ensdomains/eth-ens-namehash"), validation = require("@ensdomains/ens-validation");

function isEncodedLabelhash(a) {
  return a.startsWith("[") && a.endsWith("]") && 66 === a.length;
}

const validRegex = new RegExp("^[A-Za-z0-9-_]+$");

function validateName(a) {
  var e = a.startsWith("op_") ? "op_" : "", a = a.replace("op_", "").split(".");
  if (a.some(a => 0 == a.length)) throw new Error("Domain cannot have empty labels");
  a = a.map(a => "[root]" === a || isEncodedLabelhash(a) ? a : namehash.normalize(a)).join(".");
  if (!validation.validate(a)) throw new Error("Domain cannot have invalid characters");
  if (validRegex.test(a.replace(".beb", "").replace(".cast", ""))) return e + a;
  throw new Error("Domain cannot have invalid characters valid=(A-Za-z0-9-_)");
}

module.exports = {
  validateName: validateName
};