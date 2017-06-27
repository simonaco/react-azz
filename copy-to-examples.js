var fs = require('fs-extra');

var source = './server/index.js';
var dest = './index.js';

fs.copy(source, dest, function (err) {

    if (err)
    {
        return console.error(err);
    }

    console.log('Copied to ' + dest);

});

var source_p = './server/package.json';
var dest_p = './package.json';

fs.copy(source_p, dest_p, function (err) {

    if (err)
    {
        return console.error(err);
    }

    console.log('Copied to ' + dest);

});