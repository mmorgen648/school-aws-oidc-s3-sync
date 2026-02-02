console.log("Test läuft...");

const zahl = 2 + 2;

if (zahl === 4) {
  console.log("TEST OK");
  process.exit(0);
} else {
  console.log("TEST FEHLER");
  process.exit(1);
}
