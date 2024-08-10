const { model } = require('mongoose');
const emodel = require('../model/emp_str');

const addEmp = async(req,res)=>{
    try {
        const d = new emodel(req.body)
        const r = await d.save()
        res.json(r)
    } catch (error) {
        console.log(error);
    }
}

const show = async (req,res)=>{
    try {
        const re = await emodel.find({})
        res.json(re)
    } catch (error) {
        console.log(error);
    }
}

const upDate = async (req,res)=>{
    try {
        let id = req.params.id
        let b = await emodel.findById(id)
        const re = await emodel.findByIdAndUpdate(id,req.body)
        if (re) {
            res.send("massage : Before Update" , b ,"massage : After update", await emodel.findById(id))
                }
        else{
            res.send("not Found")
        }
    } catch (error) {
        console.log(error); 
    }
}

const dEl = async (req,res)=>{
    try {
        let id = req.params.id
        let b = {id : req.body};
        console.log(b);
        const re = await emodel.findByIdAndDelete(id)
        if (re) {

            res.send("Done")
        }
        else{
            res.send("not Found")
        }
    } catch (error) {
        console.log(error); 
    }
}

const sBi = async (req,res)=>{
    try {
        let id = req.params.id
        const re = await emodel.findById(id)
        res.json(re)
    } catch (error) {
        console.log(error);
    }
}


module.exports={addEmp,show,upDate,dEl,sBi}