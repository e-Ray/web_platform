var admin = require("firebase-admin");

var serviceAccount = require("../../e-Ray-77c79a986d29.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://e-Ray-e7f7e.firebaseio.com"
});

