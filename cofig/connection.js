const mongoclient = require('mongodb').MongoClient
const state={
db:null
}
module.exports.connect=function(done){
    const url= 'mongodb+srv://jafuj856:jpcp1234@cluster0.c57ci1c.mongodb.net/'
    const dbname = 'skssf'


    mongoclient.connect(url,(err,data)=>{
        console.log(err)
        if(err) return done(err)
         state.db=data.db(dbname)
         
        done()
    })
    
}
module.exports.get=function(){
    return state.db
}