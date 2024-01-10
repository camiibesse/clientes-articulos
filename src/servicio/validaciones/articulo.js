import Joi from 'joi'

const validar = articulo => {
    const articuloSchema = Joi.object({
        nombre: Joi.string().min(2).max(20).required(),
        precio: Joi.number().required(),
        stock: Joi.number().required(),
    })


    const { error } = articuloSchema.validate(articulo)
    return error
}

export default validar