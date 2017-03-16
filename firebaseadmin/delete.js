var admin = require("firebase-admin");
var serviceAccount = require("./key.json");


//this prints random values into the specified path in firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://e-ray-e7f7e.firebaseio.com/"
});

delref=admin.database().ref('erays/');
    delref.remove().then(function() {
    console.log("Remove succeeded.")
  })
  .catch(function(error) {
    console.log("Remove failed: " + error.message)
  }); 
