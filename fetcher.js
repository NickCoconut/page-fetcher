const request = require('request');
const fs = require("fs");
const args = process.argv.slice(2);
const domain = args[0];
const path = args[1];

request(domain, (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  
  fs.writeFile(`${path}`, body, "utf8", (err) => {
     if (error) {
       console.log(error);
     }
     console.log(`Dowloaded and saved ${body.length} bytes to ${path}`);
  });
});






// get the file size / 1 character is equal to 1 byte