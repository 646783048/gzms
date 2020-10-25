// 创建服务器
const express =require('express');
const server = express();
const cors = require('cors'); 
server.listen(3000,()=>{
    console.log('server is running ');
});

// 跨域请求

server.use(cors({ 
    origin:['http://127.0.0.1:8080','http://localhost:8080'] 
  })); 


// 数据库的创建
const mysql =require('mysql')
const pool = mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'',
    database:'tour',
    connectionLimit:10
})


server.get('/lists',(req,res)=>{
    let sql='SELECT uid,utitle,subject,description,image FROM tour_article'
    pool.query(sql,(err,results)=>{ 
        if(err)throw err;
        res.send({message:'查询成功',code:1,results:results});
    })
})
