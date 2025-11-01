const {Client} = require('pg');

const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"root",
    database:"FDE"
})

client.connect();

client.query(`SELECT * from landing.lnd_products_api`,(err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end();
})