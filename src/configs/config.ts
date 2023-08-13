require('dotenv').config();

const Env = {
    env: String(process.env.NODE_ENV),
    APP_PORT: Number(process.env.APP_PORT),
    DB_HOST: String(process.env.DB_HOST),
    DB_PORT: Number(process.env.DB_PORT),
    DB_USER: String(process.env.DB_USER),
    DB_PASS: String(process.env.DB_PASS),
    DB_NAME: String(process.env.DB_NAME)
}

export default Env;