const m = require('mongoose');

const dbcon = ()=>{
    m.connect("mongodb://127.0.0.1:27017/Tryser").then(() => {
        console.log("Conected...");
        
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = dbcon;
