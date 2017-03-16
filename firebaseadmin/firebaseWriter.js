var admin = require("firebase-admin");
var serviceAccount = require("./key.json");



admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://e-ray-e7f7e.firebaseio.com/"
});

let i=1;
let j=0;
let hour=0;
let minute=0;
let day=1;
let month=1;
let year=2017;
let test=0;
//function test(){
/*ref=admin.database().ref('/users/9paFU7idD5X24edYeAr7aE9vpKm1/');
ref.set({
    erayid: 'eray1'
});
}
*/
function user(uid){
    ref=admin.database().ref('/users/'+ uid+'/erays/');
    ref.set({
        eray1:'eray1',
        eray2:'eray2'
    });
}
function writeInfo(eray){
    ref=admin.database().ref("erays/eraylist/eray1");
    ref.set({location:'Ort A',
            owner:"Ln9oCdCQQ8YWQzHY2mlqFQZ3TmQ2"
            });
    ref2=admin.database().ref("erays/eraylist/eray2");
    ref2.set({location:'Ort B',
            owner:"Ln9oCdCQQ8YWQzHY2mlqFQZ3TmQ2"
            });
}
function write(timeid, value, x, date, sensor, eray){
    tag='tag'+x;
    //console.log('Write done');
    kw='kw'+Math.floor(day/7);
    ref=admin.database().ref(//'/RYkqzVga1AUwvfHPX12sAuaBDbZ2/eray/'+sensor+'/werte/'
    'erays/'+ eray + '/'
    +sensor+'/'+ date+ '/'+timeid);
    ref.set({/*location:'bla',
            owner:"müll",
            date:date*/
        date: date,
        timestamp:timeid,
        value:value//Math.ceil(Math.random()*4) + '.' + Math.ceil(Math.random()*4)
            //value*/
    });
            

}
function loop(sensor, random, range, eray){

while(j<150){
    if(test>10000){
    if(i<96){
        if(minute>=60){
            hour++;
            minute=0;
        }
        if(hour>=24){
            day++;
            hour=0;
        }
        
        if((day>=32 && month%2==0)||(day>=31 && month%2==1)){
            month++;
            day=1;
        }
        if(month>=13){
            year++;
            month=1;
        }
        
        if(hour<10){hour2="0"+hour;}
        else hour2=hour;
        if(minute<10)minute2="0"+minute;
        else minute2=minute;
        timeid=hour2+'_'+minute2;
        if(month<10){month2=month;}
        else month2=month;
        if(day<10){day2="0"+day;}
        else day2=day;
        date=year+"_"+month2+"_"+day;
        test=Math.random();
        while(test>0.5){
            test=Math.random();
        }
        write(timeid,(random+Math.random()*range), i,date, sensor, eray);
        //console.log(hour2);
        i++;
        minute=minute+15;
    }
    else {
        i=1;
        j++;
        
    }
        test=0;
    }
    else test++;
}
console.log('loop finished');
 i=1;
 j=0;
 hour=0;
 minute=0;
 day=1;
 month=1;
year=2017;

}

//loop('winddir', 2,2);
writeInfo();
/*loop('performance', 100, 10, "eray1");
loop('waterlevel', 5, 3, "eray1");
loop('rpm', 3000, 15, "eray1");
loop('watertemp', 10, 10, "eray1");
loop('temp', 14,10, "eray1");
loop('rain', 100, 200, "eray1");
loop('windspeed', 5, 4, "eray1");
loop('performance', 100, 10, "eray2");
loop('waterlevel', 5, 3, "eray2");
loop('rpm', 3000, 15, "eray2");
loop('watertemp', 10, 10, "eray2");
loop('temp', 14,10, "eray2");
loop('rain', 100, 200, "eray2");
loop('windspeed', 5, 4, "eray2");
*/
//user('Ln9oCdCQQ8YWQzHY2mlqFQZ3TmQ2');
