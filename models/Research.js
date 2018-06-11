const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var researcherSchema = new Schema({
    _id: {type:Schema.Types.ObjectId, require: true },
    cardTitle: {type: String, required: true},
    cardBody: {type: String, required: true},
    date: {type: Date, required: Date.now}
    
}, {_id:false});

var researcher = mongoose.model("researcher", researcherSchema);

model.exports = research;