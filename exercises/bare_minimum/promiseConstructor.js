/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');
var cbReview = require('./callbackReview');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  //let aPromise = new Promise();
  //console.log('----', cbReview.pluckFirstLineFromFile(filePath,() => console.log(data)));

  let aPromise = new Promise(function(resolve, reject) {
    fs.readFile(filePath, 'utf8',(err, data) => {
      if (err) {
        reject(err)
      } else { 
        resolve(data.split('\n')[0]);
      }
    });
  })  
  return aPromise;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  let myPromise = new Promise(function(resolve, reject) {
    
    request.get(url, (err, response, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(response.statusCode);
      }    
    })

  });

  return myPromise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
