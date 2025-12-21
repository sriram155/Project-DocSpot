const userRouter=require("express").Router()
const { insertUser,getUser,updateUser,deleteUser }=require("../controllers/studentController")

userRouter.post("/insert-user",insertUser)
userRouter.get("/get-user",getUser)
userRouter.put("/update-user/:id",updateUser)
userRouter.delete("/delete-user/:id",deleteUser)
module.exports = userRouter;