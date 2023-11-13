const request = require("request");
// cheerio - parses HTML and traverse it so that data can be manupulated according to user's need
// cheerio stores data in the form of objects
const cheerio = require("cheerio");

request("https://www.worldometers.info/coronavirus/", cb);

function cb(err, res, body) {
  if (err) {
    console.error("error ", err);
  } else {
    handleHtml(body);
  }
}

function handleHtml(html) {
  let selectTool = cheerio.load(html);

  let coronaStats = selectTool(".maincounter-number");

  //   console.log(coronaStats.text());
  let totalCases = selectTool(coronaStats[0]).text();
  console.log(`Total Cases -> ${totalCases}`);

  let totalDeath = selectTool(coronaStats[1]).text();
  console.log(`Total Deaths -> ${totalDeath}`);

  let totalRecovered = selectTool(coronaStats[2]).text();
  console.log(`Total Recovered -> ${totalRecovered}`);
}
