import UserModel from "#Schemas/user.schema.js";

// Se instala la libreria bcrypt. npm i bcrypt
const userProfileController = async (req, res) => {
    // Habia un error y es que al pedir el id que nosotros le habiamos enviado en jwt se estaba llamando a req.body
    // y simplemente tocaba llamara a req
    const { id } =req;
    const existingUserByID = await UserModel.findById(id).exec()
    if(!existingUserByID) return res.status(400).send("Usuario no autori")

    const {_id, name, surname, email} =existingUserByID

    return res.send({_id, name, surname, email})

}

export default userProfileController