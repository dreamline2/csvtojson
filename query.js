var request = require('request');
var promise = require('promise');
var fs = require('fs');
var json = require('./fbid.json');


// input your config
var yourAccessToken = 'CAACEdEose0cBADqCnHpm4MvFZApONvZClwukDZBnO0OgI3Q0HyZCQ7tTy4Ao9487DDDuXxdFI7SZAgF9ca5cDoOJasKUl7Xg0PCT5noyC6FQU6s7vTt2ZC23Ly5K8LE0pIRA8l2WyENZCbWKNAv4M8QJZCfG7rB6E8lj5pA4DOaiqQvGVCIVmxCZApTUHNOA9z34DiJtEkCNyYD8A2syeqApgZCCZBQEJZACbV8ZD';
var yourQueryDateLength = 30;//json.length;

var apiURL = 'https://graph.facebook.com/v2.2/';
var num = 0;

for (var i=0, l=yourQueryDateLength; i < l; i++) {
    var FBID = json[i][100000194132065];
    var result = '';

    request(apiURL + FBID + '?access_token=' + yourAccessToken, function (error, response, body) {
        // console.log(body)
      if (!error && response.statusCode == 200) {

        var o = JSON.parse(body);
        var id = o.id;
        var name = o.name;
        var print = num + ':' + id + '->' + name;
        console.log(print + '\n')
        result += print;
        num++;
        // result = '1';
        // console.log(result)
      }
    })
};

// console.log(result)


// fs.writeFile("./result.txt", result, function(err) {
//      if(err) {
//          console.log(err);
//      } else {
//          console.log("The file was saved!");
//      }
//  });

// var image = 'https://camo.githubusercontent.com/ca2eb1f11ce6d8f03babb72a74e962e3624913c2/68747470733a2f2f6e6f6465692e636f2f6e706d2f726571756573742e706e673f646f776e6c6f6164733d7472756526646f776e6c6f616452616e6b3d747275652673746172733d74727565';
// request(image).pipe(fs.createWriteStream('doodle.png'))