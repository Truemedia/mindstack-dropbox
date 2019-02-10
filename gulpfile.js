require('dotenv').config();
const Dropbox = require('dropbox').Dropbox;
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const {watch} = require('gulp');

let accessToken = process.env['DROPBOX_OAUTH_TOKEN']; // OAuth generated token. See app page for generate token button
var dbx = new Dropbox({accessToken, fetch});

let txtGlob = './*.txt';
let imgGlob = './*.jpg';

const watcher = watch([txtGlob, imgGlob], {events: 'add'});

// Move added files to dropbox
watcher.on('add', function(filePath, stats) {
    let cloudPath = `/${filePath}`;
    fs.readFile(path.join(__dirname, cloudPath), function (err, contents) {
      if (err) { console.log('Error: ', err); }

      // This uploads test.txt to the root of your dropbox
      dbx.filesUpload({ path: cloudPath, contents: contents })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (err) {
          console.log(err);
        });
    });
});
