import Servicio from '../servicio/clientes.js'

class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    obtenerClientes = async (req,res) => {
        const {id} = req.params
        const clientes = await this.servicio.obtenerClientes(id)
        res.json(clientes)
    }

    guardarCliente = async (req,res) => {
        try {
            const cliente = req.body
            const clienteGuardado = await this.servicio.guardarCliente(cliente)
            res.json(clienteGuardado)
        }
        catch(error) {
            res.json({ errMsg: error.message })
        }
    }
}


export default Controlador;