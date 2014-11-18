var request = require('request');
var promise = require('promise');
var fs = require('fs');
var json = require('./fbid.json');


// input your config
var yourAccessToken = 'CAACEdEose0cBABdrnB2fJZBsiiNmIYg0WXt9EgzK6MQ4PPSbcHc6cbqPnnHLRWJdCW4tCNbZC4YL2cVxp2a46pIBEHJf4i4T9bQ57h9CnECm1IM9ZC3MmnlBrF2H5atpcgNr7jdwxgRLu6Gk3hsfAbMoVfSqLMszjqlpTE5j371At6ZCng8YKkyomM9MuMzTIau3ZC7anOeZABOaA34XlBiAqBJxEwBiMZD';
var yourQueryDateLength = 30;//json.length;

var apiURL = 'https://graph.facebook.com/v2.2/';
var num = 0;

for (var i=0, l=yourQueryDateLength; i < l; i++) {
    var FBID = json[i][100000194132065];
    var result = '';

    request(apiURL + FBID + '?access_token=' + yourAccessToken, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var o = JSON.parse(body);
            var id = o.id;
            var name = o.name;
            var print = num + ':' + id + '->' + name + '\n';

            console.log(print)
            result += print;
            num++;

            if(num == yourQueryDateLength) {

                fs.writeFile("./result.txt", result, function(err) {
                     if(err) {
                         console.log(err);
                     } else {
                         console.log("The result.txt was saved!");
                     }
                 });
            }
        }
    })
};