const express = require("express")
const router =  express.Router()
const userRoute = require("./user")
const UserController = require("../controllers/UserController")
const ProductController = require("../controllers/productController")

router.get("/", UserController.home)

router.get("/regisdetails/", UserController.getDetails)
router.post("/regisdetails/", UserController.postDetails)

router.get("/regis/:id", UserController.getRegis)
router.post("/regis/:id", UserController.postRegis)

router.get("/login", UserController.getLogin)
router.post("/login", UserController.postLogin)
 

// router.use( function (req, res, next) {
//   console.log(req.session)
//   if(req.session.id){
//     let error = `Please login`
//     res.redirect(`/login?error=${error}`)
//   } else {
//     next()
//   }
// })

// const isAdmin = function (req,res, next){
//   console.log(req.session)
//   if (req.session.role === "admin"){
//     res.redirect("/user")
//   }else if (req.session.role !== "admin"){
//     res.redirect("/")
//   } else {
//     next()
//   }
// }

router.get("/user", UserController.getUser)



module.exports = router
