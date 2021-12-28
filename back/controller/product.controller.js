const productModel = require("../model/products.model")
const axios = require("axios")
 module.exports={

read: function(req,res,next) {
        productModel.find({},function(err,item){
            if(err) {
                res.status(406).json({status: 406,message:'error read all products'+err,data:null})

            }
            else {
                res.status(201).json({status:201,message:'read all products',data:item})
            }
        })

    },

FindById : function(req,res,next){

        productModel.findById(req.params.id,function(err,item){
            if(err) {
                res.status(406).json({status: 406,message:'error Find product ID',data:null})

            }
            else {
                res.status(201).json({status:200,message:'Find product',data:item})
            }
        })


    },
    

/*Fetch :  function(req, res, next) {
  console.log("/processing fetching and storing tasks");
  const url ="https://tech.dev.ats-digital.com/api/products?size=100";
  axios.get(url)
  .then(function (response) {
    // handle success
    response.data.products.forEach(element => {
    //console.log(element.productName);
    let newProduct = new productModel();
    newProduct.productName = element.productName;
    newProduct.description = element.description;
    newProduct.price = element.price;
    newProduct.category = element.category;
    newProduct.imageUrl = element.imageUrl;
    newProduct.reviews = element.reviews;
    //console.log(newProduct);
    newProduct.save();

  })
    
    console.log("Data fetched and stored");
  })
  .catch(function (error) {
    // handle error
    throw error
  })
  .then(function () {
    console.log("Process finished");
  });

}*/ 

 }