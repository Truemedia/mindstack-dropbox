const Dropbox = require('dropbox').Dropbox;
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

let accessToken = ''; // OAuth generated token. See app page for generate token button
  var dbx = new Dropbox({accessToken, fetch});

  fs.readFile(path.join(__dirname, '/test.txt'), 'utf8', function (err, contents) {
    if (err) {
      console.log('Error: ', err);
    }

    // This uploads test.txt to the root of your dropbox
    dbx.filesUpload({ path: '/test.txt', contents: contents })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  });
