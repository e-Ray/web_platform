This file shows the database rules which are strongly adviced to use.

```sh
{
  "rules": {
    ".read": "auth != null && root.child('users').child(auth.uid).child('info').child('admin').val() == 'true' || auth.uid === 'api'",
    ".write": "auth != null && newData.child('users').child(auth.uid).child('info').child('admin').val() == 'true'",
    "erays": {
      "$erayid": {
        "waterlevel": {
          ".read": "auth != null"
        },
        "watertemp": {
          ".read": "auth != null"
        },
        "temp": {
          ".read": "auth != null"
        },
        "winddir": {
          ".read": "auth != null"
        },
        "info": {
          ".read": "auth != null && auth.uid == root.child('erays').child($erayid).child('info').child('owner').val()",
          "location": {
            ".read": "auth != null"
          }
        },
        "windspeed": {
          ".read": "auth != null"
        },
        "rain": {
          ".read": "auth != null"
        },
        "rpm": {
          ".read": "auth != null && auth.uid == root.child('erays').child($erayid).child('info').child('owner').val()"
        },
        "performance": {
          ".read": "auth != null && auth.uid == root.child('erays').child($erayid).child('info').child('owner').val()"
        }
      },
      "eraylist": {
        ".validate": "true",
        ".read": "auth != null"
      }
    }
  }
}

```