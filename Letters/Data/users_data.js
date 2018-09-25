const fs = require('fs');
const mongoose = require('mongoose');

// The schema of the data collection
const schema = {
  name: String,
  height: Number,
  profession: String,
  id: Number
};

// Prepare the output data
let out_data = [];
let collection = '';

data = fs.readFileSync('./users.json','utf8');
data = JSON.parse(data);
for (let prop in data){
  if (data.hasOwnProperty(prop)) {
    if (prop === 'collection'){
      collection = data[prop];
    } else {
      out_data.push(data[prop]);
    }
  }
}

// Output the related mongoose model
const mongoose_schema = mongoose.Schema(schema);
const mongoose_model = mongoose.model(collection, mongoose_schema, collection);

module.exports = { schema:schema, data:out_data, model:mongoose_model };
