import mysql from 'mysql2'

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'ticketing'
})

export default db