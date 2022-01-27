const express = require("express")
const router =  express.Router()
const userRoute = require("./user")
const productRoute = require("./product")
const UserController = require("../controllers/UserController")
const ProductController = require("../controllers/productController")

router.use("/products", productRoute)
router.use("/users", userRoute)
router.get("/", UserController.home)

// router.get('/products', ProductController.allproduct)

router.get("/regisdetails/", UserController.getDetails)
router.post("/regisdetails/", UserController.postDetails)

router.get("/regis/:id", UserController.getRegis)
router.post("/regis/:id", UserController.postRegis)

router.get("/login", UserController.getLogin)
router.post("/login", UserController.postLogin)
 
const session = function (req, res, next) {
  console.log(req.session)
  if(req.session.id){
    let error = `Please login`
    res.redirect(`/login?error=${error}`)
  } else {
    next()
  }
}

const isAdmin = function (req,res, next){
  console.log(req.session)
  if (req.session.role === "admin"){
    res.redirect("/user")
  } else if (req.session.role !== "admin"){
    res.redirect("/products")
  } else {
    next()
  }
}

router.get("/user", isAdmin , UserController.getUser)



module.exports = router
