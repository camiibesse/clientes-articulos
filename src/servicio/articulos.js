import validar from './validaciones/articulo.js'


class Servicio {
    obtenerArticulos = async () => {
            const articulos = await this.model.obtenerArticulos()
            return articulos
        
    }

    guardarArticulo = async articulo => {
        const error = validar(articulo)
        if(!error) {
            const articuloGuardado = await this.model.guardarArticulo(articulo)
            return articuloGuardado
        }
        else {
            throw new Error(error.details[0].message)
        }
    }
}

export default Servicio

