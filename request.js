// 1. npm init -y
// 2. npm install request
const request = require("request");

request("http://results.beup.ac.in/", cb);

function cb(err, res, body) {
  console.log("error", err);
  //   console.log(res);
  console.log(body);
}
