const express = require("express");
const path = require("path")
const pool = require('../database');
const app = express();
app.set("port", process.env.PORT || 3000);

app.get('/si', async(req,res)=>{
    const obj = { respuest: "si"}
    await pool.query('INSERT INTO respuesta set ?', [obj]);
    res.send("dijo que si")
});
app.get('/no', async(req,res)=>{
    const obj = { respuest: "no"}
    await pool.query('INSERT INTO respuesta set ?', [obj]);
    res.send("dijo que no")
});
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), ()=>{
    console.log(`Server on port ${app.get("port")}`);
});