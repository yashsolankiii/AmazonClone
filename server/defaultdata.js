const Products = require("./models/productSchema");
const productsdata = require("./constant/productsdata");

const DefaltData = async()=>{
    try{

        await Products.deleteMany({});

        const storeData = await Products.insertMany(productsdata);
        console.log(storeData);
    } catch (error) { 
        console.log("error" + error.meesage);
    }
}

module.exports = DefaltData;