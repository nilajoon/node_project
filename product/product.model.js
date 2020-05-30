const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const schema = new Schema({
    product_name : { type: String,required: true }, 
    compani_name:{ type: String ,required: true},
    product_type : { type: String,required: true }, 
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Product', schema);

