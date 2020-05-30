const config = require('config.json');
const db = require('_helpers/db');
const userService = require('./user.service');
const Product = db.Product;
const Compani = db.Compani;



module.exports = {
    create,
    getAll,
    delete: _delete,  
    update
};



//crate compani
async function create(companiParam) {
    // validateنام کمپانی 
    if (await Compani.findOne({compani_name : companiParam.compani_name })) {
        throw 'نام کمپانی "' + companiParam.compani_name  + '" قبلا ثبت نام شده است';
    }
    Object.assign(companiParam);
    const compani = new Compani(companiParam);
    // save compani
    await compani.save();
}


//list compani

async function getAll() {
    return await Compani.find().select('-hash');
}



//edit compani

async function update(id, companiParam) {
    const compani = await Compani.findById(id);
    if (!compani) throw 'کمپانی پیدا نشد';

    // validate کمپانی
    if ( await Compani.findOne({ compani_name: companiParam.compani_name})) {
        throw 'قبلا استفاده شده است"' + companiParam.compani_name + '"نام کمپانی ';
    }

    Object.assign(compani, companiParam);
    await compani.save();
}


async function _delete(id) {

    const compani = await Compani.findById(id);
    name =compani.compani_name;
//delete in product
    await (Product).deleteMany({compani_name:name});
//delete in compani
    await (Compani).findByIdAndRemove(id);
}


