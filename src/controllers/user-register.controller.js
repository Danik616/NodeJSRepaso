import { SALT } from "#Constants/salt.js";
import UserModel from "#Schemas/user.schema.js";
import { hash } from "bcrypt";
// Se instala la libreria bcrypt. npm i bcrypt
const userRegisterController = async (req, res) => {
    const {_id, name, surname, email, password} =req.body;

    const existingUserById = await UserModel.findById(_id).exec()
    if(existingUserById) return res.status(409).send({errors:["Este usuario ya existe"]})

    const existingUserByEmail = await UserModel.findOne({email}).exec()
    if(existingUserByEmail) return res.status(409).send({errors:["Este usuario ya existe"]})

    const hashedPassword= await hash(password, SALT)

    const user = new UserModel({
        _id, name, surname, email, password:hashedPassword
    })

    await user.save()

    return res.send('usuario registrado con exito')
}

export default userRegisterController