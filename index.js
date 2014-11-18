//Converter Class
var Converter = require("csvtojson").core.Converter;
var fs = require("fs");

var csvFileName = "./source.csv";
var fileStream = fs.createReadStream(csvFileName);
//new converter instance
var param = {};
var csvConverter = new Converter(param);

//end_parsed will be emitted once parsing finished
csvConverter.on("end_parsed",function(jsonObj){
    // console.log(jsonObj); //here is your result json object

    var json = JSON.stringify(jsonObj);

    fs.writeFile("./fbid.json", json, function(err) {
         if(err) {
             console.log(err);
         } else {
             console.log("The fbid.json was saved!");
         }
     });


});

//read from file
fileStream.pipe(csvConverter);




