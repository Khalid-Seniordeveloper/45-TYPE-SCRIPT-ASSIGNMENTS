var personName = "KHALID";
console.log("in upper case ".concat(personName.toUpperCase(), " in lower case ").concat(personName.toLowerCase(), " in title case ").concat(personName.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); })));
// (personName.charAt(0).toUpperCase() + personName.substr(1).toLowerCase()))
