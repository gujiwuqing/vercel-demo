const express = require('express');

const app = express();

app.get('/',(req,res)=>{
  res.send('hello world')
})


app.listen(8888,()=>{
  console.log('已运行');
})
