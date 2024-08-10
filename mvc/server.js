const express = require('express');
const dbcon = require('./cons');
const emprouts = require('./routing/emp_routs');
const a = express()
dbcon()



a.use(express.json())
a.use(express.urlencoded({extended : true}))
a.use(emprouts)

a.listen(4000,()=>{
    console.log("runing on 4000");
})