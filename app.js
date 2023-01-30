const http = require("http");
const express = require("express");
const firebase = require("firebase/app");
const firebaseAnalytics = require("firebase/analytics");

const firebaseConfig = {
  apiKey: "AIzaSyCxujbKJELoefbd0VlGiitCyTYMUYhzfjU",
  authDomain: "claro-video-c48c7.firebaseapp.com",
  databaseURL: "https://claro-video-c48c7.firebaseio.com",
  projectId: "claro-video-c48c7",
  storageBucket: "claro-video-c48c7.appspot.com",
  messagingSenderId: "639595339410",
  appId: "1:639595339410:web:5ced33f6f6c7a0b154904b",
  measurementId: "G-KGSBWZQGVT",
};

const app = express();


const hostname = "127.0.0.1";
const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Firebase");
  // console.info('firebase app', firebase);
  // console.info('firebase analytics', firebaseAnalytics);
// });

app.get('/', function(req, res) {
    console.info('firebase app', firebase.initializeApp(firebaseConfig));
    console.info('firebase analytics', firebaseAnalytics.getAnalytics(firebase.initializeApp(firebaseConfig)));
    res.sendFile('./index.html', {root: __dirname })
})

app.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
