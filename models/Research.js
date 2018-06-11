const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var researcherSchema = new Schema({
    _id: {type:Schema.Types.ObjectId, require: true },
    username: {type: String, required: true},
    password: {type: String, required: true},
    cardTitle: {type: String, required: true},
    cardBody: {type: String, required: true},
    published_date: { type: Date },
    date: {type: Date, required: Date.now},
    
}, {_id:false});

var researcher = mongoose.model("researcher", researcherSchema);

model.exports = research;