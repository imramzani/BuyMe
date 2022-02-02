const {User, Details} = require("../models")
const bcrypt = require("bcryptjs")
class UserController {
  static home(req, res){
    res.render("home")
  }

  static getUser(req, res){
    User.findAll()
      .then( data =>{
        console.log(data)
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
        res.send(data)
      })
  }

  static getDetails(req,res) {
    res.render("regisdetails")
  }

  static postDetails(req,res) {
    console.log(Details.length)
    const id = Details.length
    const {firstName, lastName, dateOfBirth, contact} = req.body
    console.log(req.body)
    Details.create({firstName, lastName, dateOfBirth, contact})
      .then( data => {
        console.log("details berhasil")
        res.redirect(`/regis/:id`)
      })
      .catch( err => {
        res.send(err)
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
    const {error} = req.query
    res.render("loginPage" , {error})
  }

  static postLogin (req, res){
    const{username, password} = req.body
    // console.log(req.body)
    User.findOne({
      where:{username}
    })
      .then( user => {
        if(user){
        const isValidPass = bcrypt.compareSync(password, user.password)
        
          if( isValidPass){

            req.session.userId = user.id
            req.session.role = user.role

            return res.redirect("/products")
          } else {
            const error = "invalid username/password"
            return res.redirect(`/login?error=${error}`)
          }
        } else {
          const error = "user not found"
            return res.redirect(`/login?error=${error}`)
        }
        
      })
      .catch(err=> {
        res.send(err)
      })
  }

  
}

module.exports = UserController