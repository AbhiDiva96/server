
import express from "express";

const app = express();

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

 app.get('/notifications' , (req, res) => {
    console.log("notifications sections")
    res.json({
        network: getRandomNumber(100),
        jobs: getRandomNumber(10),
        messaging: getRandomNumber(100),
        notifications: getRandomNumber(1000)
      })
    
 });

app.listen(8080);