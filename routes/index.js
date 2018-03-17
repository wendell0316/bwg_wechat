var express = require('express');
var router = express.Router();
const fs = require('fs')
const path = require('path')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getInform',function(req,res,next){
  var informs = '';
  var file="./spider/data/articleInfo.json";
  var result=fs.readFileSync(file); 
  informs = JSON.parse(result);
  res.render('getInform',{
    title:'最新动态',
    informs:informs
  })
})
router.get('/getInform/:id',function(req,res,next){
  var informs = ''
  var inform = ''
  var id = ''
  var file="./spider/data/articleInfo.json";
  var result=fs.readFileSync(file);
  informs = JSON.parse(result);
  id = req.params.id
  inform = informs[id]
  res.render('inform',{
    title:'动态详情',
    inform:inform
  })
})
router.get('/getDynamic',function(req,res,next){
  var informs = '';
  var file="./spider/data/dynamicEntry.json";
  var result=fs.readFileSync(file); 
  informs = JSON.parse(result);
  res.render('getDynamic',{
    title:'学术园地',
    informs:informs
  })
})
router.get('/getDynamic/:id',function(req,res,next){
  var informs = ''
  var inform = ''
  var id = ''
  var file="./spider/data/dynamicEntry.json";
  var result=fs.readFileSync(file);
  informs = JSON.parse(result);
  id = req.params.id
  inform = informs[id]
  res.render('inform',{
    title:'动态详情',
    inform:inform
  })
})
module.exports = router;
