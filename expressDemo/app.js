const express=require('express');
const chalk=require('chalk');
const path=require('path');

var app=new express();

app.use(express.static(path.join(__dirname,"/public")))