const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName: {type: String, required: true},
    password: {type: String, required: true},
});
module.exports = mongoose.model('Product', productSchema);