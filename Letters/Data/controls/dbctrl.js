const mongoose = require('mongoose');

class dbController {
  static dbconnect(url, callback = null){
    mongoose.connect(url,{useNewUrlParser:true});
    this.db = mongoose.connection;
    this.db.on('error', console.error.bind(console,'connection error:'));
    this.db.once('open', function (callback) {
      console.log('MongoDB Connected!');
    });
  }

  static async dbadd(model, objs) {
    await model.insertMany(objs, function (err, data) {
      if (err) {
        console.error('dbadd:saving error');
      } else {
        console.log('Data saved into: ' + model.collection.collectionName);
      }
    });
  }

  static async dbdrop(model){
    await model.collection.drop();
  }

  static async dbinsert(model, objs) {
    await objs.forEach((element)=>{model.create(element, function(err,data){})});
  }

  static dbmgshow(model){
    return async (ctx) => {
      const results = await model.find({});
      if (!results){
        console.error("dbshow:Error!");
      }else{
        ctx.body = results;
      }
    }
  }
}

module.exports = dbController;
