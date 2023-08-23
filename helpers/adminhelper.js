var db = require('../cofig/connection')
var collection =require('../cofig/collection')
module.exports={
doLogin:(logindetails)=>{
   return new Promise((resolve,reject)=>{
    if(logindetails.email=='admin@gmail.com'&&logindetails.pwd=='admin123'){
      resolve({status:true})
    }
    else{
        resolve({status:false})
    } 
   })
},

addMembers:(member,id)=>{

        db.get().collection('members').insertOne(member).then((data)=>{
            console.log(data.ops[0]._id)
            id(data.ops[0]._id)
    
    })

},
getAllmembers:()=>{
    return new Promise(async(resolve,reject)=>{
    var members =await db.get().collection(collection.MEMBERS_COLLECTION).find().toArray()
     console.log('#################################################')
     resolve(members)
})
},
addEvents:(event,id)=>{
 db.get().collection(collection.SKSSF_EVENTS).insertOne(event).then((data)=>{
    id(data.ops[0]._id)
 })
}

}  