const {Category, Product} = require('../models')
const convertRp = require('../helpers/convertRp')

class ProductController{

  static allproduct(req, res){
    const {CategoryId} = req.query
    if(!CategoryId){
      Product.findAll()
      .then(data => {
        res.render('allproduct', {data, convertRp})
      })
      .catch(err => {
        res.send(err)
      })
    } else {
      Product.findAll({
        where: {
          CategoryId
        },
        include: {model: Category}
      })
        .then(data => {
          console.log(data)
          res.render('allproduct', {data, convertRp})
        })
        .catch(err => {
          console.log(err)
          res.send(err)
        })
    }
  }

  static detail(req,res){
    let id = req.params.id
    Product.findByPk(id)
    .then(data => {
      res.render('detail',{data,convertRp})
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleted(req,res){
    const {id} = req.params
    Product.destroy({
      where: {
        id: +id
      }
    })
    .then(()=> {
      res.redirect("/products")
    })
    .catch((err) => {
      res.send(err)
    })
  }
}

module.exports = ProductController