 var mysql = require("mysql");
 var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'biblioteca'
 });
 con.connect(
    (err)=>{
        if (!err) {
            console.log("Conexion base datos extablecida");
    }else{
        console.log("Conexion base datos NO extablecida");
    }
});
module.exports=con;