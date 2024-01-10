import CnxMongoDB from "../../DBMongo.js"

class ModelMongoDB {

    obtenerClientes = async () => {
        if(!CnxMongoDB.connection) return []
        const clientes = await CnxMongoDB.db.collection('clientes').find({}).toArray()
        return clientes
    }

    guardarCliente = async cliente => {
        if(!CnxMongoDB.connection) return {}
        await CnxMongoDB.db.collection('clientes').insertOne(cliente)
        return cliente
    }
}

export default ModelMongoDB;