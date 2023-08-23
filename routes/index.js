var express = require('express');
var router = express.Router();
var adminhelper =require('../helpers/adminhelper');




const verfylogin=(req,res,next)=>{
  if(req.session.admin){

    next()
  }else{
    res.redirect('/admin')
  }
}

router.get('/',async(req, res, next)=>{
  if(req.session.admin){
   adminhelper.getAllmembers().then((members)=>{
   res.render('admin/showmembers',{status:true,members})
  })
}
else{
  res.render('admin/login',{admin:true,'logerror':req.session.adminlogerr});
  req.session.adminlogerr=null
}
});
router.post('/login',(req,res,next)=>{
  console.log(req.body)
  adminhelper.doLogin(req.body).then((response)=>{

  
    if(response.status){
      req.session.admin=true
      res.redirect('/admin')
    /*  adminhelper.getAllmembers().then((members)=>{
        console.log('in index')
        console.log(members)
        res.redirect('admin/showmembers')
      })*/
    }
    else{
    console.log('in else')
    req.session.adminlogerr="Invalid Username or Password"
      res.redirect('/admin')

     }
  })
})

router.get('/logout',(req,res,next)=>{
  req.session.admin=null
  res.redirect('/')
})

router.get('/add-members',verfylogin,(req,res,next)=>{
  console.log('add member')
  res.render('admin/addmembers',{'add':req.session.admiAdd,status:true})
 
  req.session.admiAdd=false
  console.log("admin==="+req.session.admin)
}) 
router.post('/add-memberse',(req,res,next)=>{
  req.session.admin=true 
  console.log("admin===add1"+req.session.admin)
  console.log(req.body)
adminhelper.addMembers(req.body,(id)=>{
  console.log("admin===add2"+req.session.admin)
  let image = req.files.image
  image.mv('../skssf/public/images/meberse-images/'+id+'.jpg',(err,done)=>{
    if(!err){
      console.log(image)
      req.session.admiAdd=true
      console.log('hiiiiiiiiiiiiiiiii')
      console.log(req.session.admin)
      res.redirect('/admin/add-members')
    }
    else{
      console.log(err)
    }
  })
})
 
})
router.get('/add-events',(req,res)=>{
  res.render('admin/addevents',{add:req.session.admiAdd})
  req.session.admiAdd=false;
})
router.post('/add-events',(req,res)=>{
 adminhelper.addEvents(req.body,(id)=>{
  let image = req.files.image;
  image.mv('../skssf/public/images/events-images/'+id+'.jpg',(err,done)=>{
    if(!err){
      req.session.admiAdd=true;
      res.redirect('/admin/add-events')
    }else{
      console.log(err)
    }
  })
 })
 
})
module.exports = router;
