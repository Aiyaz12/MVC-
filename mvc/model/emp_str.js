const mongoose = require('mongoose');

const es = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sal:{
        type:String,
        required:true
    },
})

const emodel = mongoose.model('emps',es)

module.exports = emodel;