import Joi from 'joi';

const validar = cliente => {
    const clienteSchema = Joi.object({
        nombre: Joi.string().min(2).max(20).required(),
        apellido: Joi.string().min(2).max(20).required(),
        edad: Joi.number().required(),
        DNI: Joi.number().required(),
    })


    const { error } = clienteSchema.validate(cliente)
    return error
}

export default validar;