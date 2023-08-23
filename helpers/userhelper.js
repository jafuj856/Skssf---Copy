var db = require('../cofig/connection')
var collection =require('../cofig/collection')
module.exports={
    getAllMembers:()=>{
        return new Promise(async(resolve,reject)=>{
           let president=await db.get().collection(collection.MEMBERS_COLLECTION).findOne( {designation:'president'})
           let G_secretary=await db.get().collection(collection.MEMBERS_COLLECTION).findOne( {designation:'secretary'})
           let treasurer=await db.get().collection(collection.MEMBERS_COLLECTION).findOne( {designation:'treasurer'})
           let vic_president=await db.get().collection(collection.MEMBERS_COLLECTION).findOne( {designation:'vice-president'})
           let wr_secretary=await db.get().collection(collection.MEMBERS_COLLECTION).findOne( {designation:'working secretary'})
           let trend=await db.get().collection(collection.MEMBERS_COLLECTION).findOne( {designation:'trend'})
           let thwalaba=await db.get().collection(collection.MEMBERS_COLLECTION).findOne( {designation:'thwalaba'})
           let viqaya=await db.get().collection(collection.MEMBERS_COLLECTION).findOne( {designation:'viqaya'})
           let ibadh=await db.get().collection(collection.MEMBERS_COLLECTION).findOne( {designation:'ibadh'})
           let sargalaya=await db.get().collection(collection.MEMBERS_COLLECTION).findOne( {designation:'sargalaya'})
           let sahajari=await db.get().collection(collection.MEMBERS_COLLECTION).findOne( {designation:'sahajari'})
       let allMembers={
        vic_president:vic_president,
        wr_secretary:wr_secretary,
        trend:trend,
        thwalaba:thwalaba,
        viqaya:viqaya,
        ibadh:ibadh,
        sargalaya:sargalaya,
        sahajari:sahajari
       }
           resolve({president,G_secretary,treasurer,allMembers})
        })
    }
}