import validar from "./validaciones/clientes.js";

class Servicio {
  obtenerClientes = async (_) => {
    const clientes = await this.model.obtenerClientes();
    return clientes;
  };

  guardarCliente = async (cliente) => {
    const error = validar(cliente);
    if (!error) {
      const clienteGuardado = await this.model.guardarCliente(cliente);
      return clienteGuardado;
    } else {
      throw new Error(error.details[0].message);
    }
  };
}

export default Servicio;
