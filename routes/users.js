const express=require('express')

const usersController=require('../controllers/users_controller')
const router=express.Router();

router.get('/profile',usersController.profile)


console.log("router loaded")




module.exports=router;

 