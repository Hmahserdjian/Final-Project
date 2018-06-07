const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const research = new Schema({
    _id: {type:Schema.Types.ObjectId, require: true },
    username: {type: String, required: true},
    password: {type: String, required: true},
    cardTitle: {type: String, required: true},
    cardBody: {type: String, required: true},
    date: {type: Date, required: Date.now},
    
}, {_id:false});

const research = mongoose.model("research", researchSchema);

model.exports = research;