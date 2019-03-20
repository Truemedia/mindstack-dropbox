const db = require('dropbox-stream');

function uploadStream(token, filename)
{
  return db.createDropboxUploadStream({
    token: token,
    path: '/test/' + filename,
    chunkSize: 1000 * 1024,
    autorename: true,
    mode: 'add'
  })
  .on('error', err => console.log(err))
  .on('progress', res => console.log(res))
  .on('metadata', metadata => console.log('Metadata', metadata));
}

module.exports = uploadStream;
