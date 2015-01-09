var flags = require('flags');

flags.defineString('token', 'CAACEdEose0cBAAxXD4slJyLZAvbf8uwzM278pB3mVh31NszJmkiILU04ogn541CT3NSPvqAawcy47Ue4JBvp7tidcZBT3xBtAMrBPb5cEwAsLEEBEcT250ZAURuWwBcpRO3JYZAJT6fgZAzLz9f2ur4ZCZAuVvUqgo8E8WtZCxF5APVy50MNEJsO7uJGo42V7v3fS6NjoBZCHlmHxTG6b6PgI2tvdkHdSctEZD', 'Your name');
flags.defineInteger('l', 30, 'Your age in whole years');

flags.parse();

// input your config
var yourAccessToken = flags.get('token');
var yourQueryDateLength = flags.get('l');

// require package
var Converter = require("csvtojson").core.Converter;
var fs = require("fs");
var request = require('request');

// src 
var json = require('./fbid.json');
var csvFileName = "./src/20150109_beatles.csv";
var fileStream = fs.createReadStream(csvFileName);

//new converter instance
var param = {};
var csvConverter = new Converter(param);
var GEN_EMAIL = {
	apiURL: 'https://graph.facebook.com/v2.2/',
	num: 0,

	// 產生最後 EMAIL
	write: function () {

		console.log('======  start produce result  ======')
		for (var i=0, l=yourQueryDateLength; i < l; i++) {
		    var FBID = json[i][100000194132065];
		    var result = '';

		    request(GEN_EMAIL.apiURL + FBID + '?access_token=' + yourAccessToken, function (error, response, body) {
		        if (!error && response.statusCode == 200) {
		            var o = JSON.parse(body);
		            var id = o.id;
		            var name = o.name;
		            var print = GEN_EMAIL.num + 1 + ':' + id + '->' + name + '\n';

		            console.log(print)
		            result += print;
		            GEN_EMAIL.num++;

		            if(GEN_EMAIL.num == yourQueryDateLength) {

		                fs.writeFile("./output/result.txt", result, function(err) {
		                     if(err) {
		                         console.log(err);
		                     } else {
		                        console.log("The result.txt was saved!");
		                     }
		                 });
		            }
		        } else {
		            console.log(error)
		        }
		    })
		};

	}
}

//end_parsed will be emitted once parsing finished
csvConverter.on("end_parsed",function(jsonObj){
    // console.log(jsonObj); //here is your result json object

    var json = JSON.stringify(jsonObj);

    fs.writeFile("./fbid.json", json, function(err) {
         if(err) {
            console.log(err);
         } else {
            console.log("The fbid.json was saved!");
            GEN_EMAIL.write();
         }
    });


});

//read from file
fileStream.pipe(csvConverter);

