var ghpages = require('gh-pages');
var execa = require('execa');

execa.commandSync('gitbook install', {
    stdout: process.stdout
});
execa.commandSync('gitbook build',{
    stdout: process.stdout
});
ghpages.publish('_book', function(err) {
    if(err) {
        console.log("publish Error", err)
    }
    console.log('publish Success')
});