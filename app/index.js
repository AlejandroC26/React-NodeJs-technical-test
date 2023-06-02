const app = require("./app.js");

async function main() {
  const port = process.env.PORT || 4000;
  app.listen(port);
  console.log(`Server on port ${port}`);
}

main();
