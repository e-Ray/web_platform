var admin = require("firebase-admin");
var serviceAccount = require("./key.json");
var express = require("express");
var app = express();
var request = require('request');


//this prints random values into the specified path in firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://e-ray-e7f7e.firebaseio.com/"
});
//console.log("test");
ref=admin.database().ref("erays/eray2/");
ref.once("value", (snapshot) => {
    //str = JSON.stringify(snapshot.val());
    str = JSON.stringify(snapshot.val(), null, 4); // (Optional) beautiful indented output.
    console.log(str)});
  //console.log(snapshot.val())});

app.get("/erays.json", function(request, response) {
   // response.sendfile('')
    res.json({})

request('/erays.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
  else {
    console.log("Error "+response.statusCode)
  }
});

request(options, callback);
    /*ref=admin.database().ref("erays/waterlevel");
    ref.once("value", (snapshot) =>{
        
    })*/
});
app.listen(port);
