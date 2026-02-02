const fs = require("fs");

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

fs.writeFileSync("dist/output.txt", "Build erfolgreich!");

console.log("Build fertig.");
