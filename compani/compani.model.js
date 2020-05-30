const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
   compani_name: { type: String, unique: true, required: true },
   compani_tel: { type: String, required: true },
   createdDate: { type: Date, default: Date.now }, 
 });
 schema.set('toJSON', { virtuals: true });
 const Compani=module.exports = mongoose.model('Compani', schema );
