var express = require('express');
var router = express.Router();
var userhelper =require('../helpers/userhelper');
var adminhelper =require('../helpers/adminhelper');




/* GET users listing. */
router.get('/',async(req, res, next)=>{
  let allmembers=await adminhelper.getAllmembers()
 userhelper.getAllMembers().then((threeeMembers)=>{
  console.log('three#########################')
    console.log(allmembers)
    console.log('three#########################')
 
    res.render('user/index',{threeeMembers,allmembers});

    

    })
  })
  
router.get('/all-members',(req,res)=>{
  userhelper.getAllMembers().then((members)=>{
    console.log(members)
    res.render('user/allmembers',{members})
  })
})
router.get('/view-photos',async(req,res)=>{
  let allmembers=await adminhelper.getAllmembers()
  res.render('user/viewphoto',{allmembers})
})
module.exports = router;
