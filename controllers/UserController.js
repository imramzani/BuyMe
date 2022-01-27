const {User} = require("../models")

class UserController {
  static getUser(req, res){
    User.findAll()
      .then( data =>{
        res.render("user", {data})
      })
      .catch( err => {
        console.log(err)
        res.send(err)
      })
  }
  static getUserById(req, res){
    const {id} = req.params
    console.log(req.params)
    console.log("bbbbbbb")
    User.findAll({
      include: {
        model: Details
      },
      where : { DetailsId : id }
    })
      .then(data => {
        console.log(data)
      })
  }

  static getRegis(req,res) {
    res.render("regisPage")
  }

  static postRegis(req,res) {
    const {username, password, email, role} = req.body
    User.create({username, password, email, role})
      .then( data => {
        res.redirect("/login")
      })
      .catch( err => {
        res.send(err)
      })
  }

  
  static getLogin(req, res){
    res.render("loginPage")
  }

  static postLogin (req, res){
    const{username, password} = req.body
  }
}

module.exports = UserController