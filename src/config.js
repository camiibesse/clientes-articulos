import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 9000;
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://0.0.0.0/0";
const BASE = process.env.BASE;

export default {
  PORT,
  MODO_PERSISTENCIA,   
  MONGODB_URI,
  BASE
}

