import userJWTDTO from '#Dto/user-JWT.dto.js'
import userLoginDTO from '#Dto/user-login.dto.js'
import userRegisterDTO from '#Dto/user-register.dto.js'
import userUnregisterDTO from '#Dto/user-unregister.dto.js'
import userUpdateDataDTO from '#Dto/user-update-data.dto.js'
import userUpdateEmailDTO from '#Dto/user-update-email.dto.js'
import userUpdatePasswordDTO from '#Dto/user-update-password.dto.js'
import {Router} from 'express'

const userRouter= Router()

userRouter.post("/register", userRegisterDTO, (req, res) =>{
    res.send()
})

userRouter.post("/login",userLoginDTO)

userRouter.get("/profile", userJWTDTO)
userRouter.patch("/update-data",userJWTDTO, userUpdateDataDTO)
userRouter.patch("/update-email",userJWTDTO, userUpdateEmailDTO)
userRouter.patch("/update-password",userJWTDTO, userUpdatePasswordDTO)
userRouter.delete("/unsubscribe", userUnregisterDTO)

export default userRouter