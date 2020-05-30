const config = require('config.json');
const db = require('_helpers/db');

const Product = db.Product;


module.exports = {
   
    create,
    update,
    getAll,
    getproductfilter,
    delete: _delete,   

 
};

//add_product
async function create(productParam ) {
 
    Object.assign(productParam);
    const product = new Product(productParam);

    // save product
    await product.save();

}

async function update(id,productParam) {

    const product = await Product.findById(id);

    // validate
    if (!product) throw 'محصول پیدا نشد';

    Object.assign(product, productParam);

   await product.save();
}


//list Product

async function getAll() {
    return await Product.find().select('-hash');
}


async function  getproductfilter(productParam) {
//اگر فیلتر براساس نام محصول باشد

    if(productParam.product_type=="" && productParam.compani_name==""){
            return await Chat.find({product_name:productParam.product_name})
        }

//اگر فیلتر براساس نوع محصول باشد

if(productParam.product_type=="" && productParam.compani_name==""){
    return await Chat.find({product_name:productParam.product_name})
}
//اگر فیلتر براساس نام کمپانی باشد

if(productParam.product_name=="" && productParam.product_type==""){
    return await Chat.find({compani_name:productParam.compani_name})
}
//اگر فیلتر براساس نام محصول و نام کمپانی باشد

if(productParam.product_type==""){
    return await Chat.find({product_name:productParam.product_name,compani_name:productParam.compani_name})
}
//اگر فیلتر براساس نام محصول و نوع محصول باشد

if( productParam.compani_name==""){
    return await Chat.find({product_name:productParam.product_name,product_type:productParam.product_type})
}
//اگر فقط فیلتر براساس نام کمپانی و نوع محصول باشد

if(productParam.product_name==""){
    return await Chat.find({product_type:productParam.product_type,compani_name:productParam.compani_name })
}

  else{
        return await Chat.find({product_type:productParam.product_type,compani_name:productParam.compani_name
        ,product_name:productParam.product_name })
    } }




async function _delete(id) {
    await (Product).findByIdAndRemove(id);
}

