//Schema/ layout of data in mongo

const mongoose = require ('mongoose');


const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        dafault: Date.now
    }
});


module.exports = mongoose.model('Posts', PostSchema);