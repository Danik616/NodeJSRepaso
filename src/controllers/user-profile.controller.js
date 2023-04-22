import UserModel from "#Schemas/user.schema.js";

const userProfileController = async (req, res) => {
    
    const { id } =req;
    const existingUserByID = await UserModel.findById(id).exec()
    if(!existingUserByID) return res.status(400).send("Usuario no autorizado")

    const {_id, name, surname, email} =existingUserByID

    return res.send({_id, name, surname, email})

}

export default userProfileController