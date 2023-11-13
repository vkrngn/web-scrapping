const request = require("request");
// cheerio - parses HTML and traverse it so that data can be manupulated according to user's need
const cheerio = require("cheerio");

request("https://www.worldometers.info/coronavirus/", cb);

function cb(err, res, body) {
  console.log("error ", err);
  // console.log(res);
  console.log(body);

  // Extracting data from HTML
}
