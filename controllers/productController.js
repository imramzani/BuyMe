const {Product} = require("../models")
const bcrypt = require("bcryptjs")
class ProductController {
  static getProduct(req, res){
    res.render("product")
  }
}

module.exports= ProductController