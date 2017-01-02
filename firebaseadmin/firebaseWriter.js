var admin = require("firebase-admin");
var serviceAccount = require("./key.json");


//this prints random values into the specified path in firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://e-ray-e7f7e.firebaseio.com/"
});

let i=0;


function write(timeid, value, x){
    ref=admin.database().ref('/users/9paFU7idD5X24edYeAr7aE9vpKm1/erays/eray1/sensor2/' + timeid);
    ref.set({
        timestamp:x,
        value:value
    });
}

while(true){
    
    if(i<1000){
        timeid="timeid"+i;
        write(timeid,(100+Math.random()*10000), i);
        console.log(i);
        i++;
    }
    else {
        break;
    }
}
