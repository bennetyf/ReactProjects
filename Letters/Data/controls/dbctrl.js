const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;

class dbController {
  static async dbconnect(url, callback = null){
    mongoose.connect(url,{useNewUrlParser:true});
    this.db = mongoose.connection;
    this.db.on('error', console.error.bind(console,'connection error:'));
    await this.db.once('open', function (callback) {
      console.log('MongoDB Connected!');
    });
  }

  static async dbadd(schema, collection, objs) {
    await this.db.once('open', function (callback) {
      const mongoose_schema = mongoose.Schema(schema);
      const mongoose_model = mongoose.model(collection, mongoose_schema, collection);
      mongoose_model.insertMany(objs, function (err, data) {
        if (err) {
            console.error('dbadd:saving error');
        } else {
          console.log('Saved into: ' + collection);
        }
      });
    });
  }

  static dbshow(schema, collection){
    const mongoose_schema = mongoose.Schema(schema);
    const mongoose_model = mongoose.model(collection, mongoose_schema, collection);

    return async (ctx) => {
      const results = await mongoose_model.find({});
      if (!results){
        console.error("dbshow:Error!");
      }else{
        ctx.body = results;
      }
    }
  }

}
// const dbctrl = new dbController();

module.exports = dbController;
