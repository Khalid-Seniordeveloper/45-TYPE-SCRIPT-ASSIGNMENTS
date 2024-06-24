let personName: string = "KHALID";
console.log(`in upper case ${personName.toUpperCase()} in lower case ${personName.toLowerCase()} in title case ${personName.replace(/\w\S*/g , (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())  }`);


// (personName.charAt(0).toUpperCase() + personName.substr(1).toLowerCase()))
