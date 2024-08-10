const express = require('express');
const aa = require('../contr/emp_com')

const r = express.Router()


r.post("/",aa.addEmp)
r.get("/",aa.show)
r.put("/:id",aa.upDate)
r.delete("/:id",aa.dEl)
r.get("/:id",aa.sBi)

module.exports = r;

