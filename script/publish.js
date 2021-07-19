var ghpages = require('gh-pages');
var execa = require('execa');

execa.commandSync('gitbook install');
execa.commandSync('gitbook build');
ghpages.publish('_book', function(err) {
    console.log(err)
});