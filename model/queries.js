import pool from "../config/config.js"

const agregarEstudianteQuery = async (nombre, rut, curso, nivel) => {
    try {
        const sql = {
            text: "INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) returning *",
            values: [nombre, rut, curso, nivel]
        }

        const response = await pool.query(sql)
        return response.rows
    } catch (error) {
        console.log(error.message)
    }
}

const registrosQuery = async () => {
    try {
        const sql = {
            text: "Select * from estudiantes",
            rowMode: "array"
        }
        const response = await pool.query(sql)
        return response.rows
    } catch (error) {
        console.log(error.message)
    }
}

const rutEstudianteQuery = async (rut) => {
    try {
        const sql = {
            text: "SELECT * from estudiantes WHERE rut = $1",
            values: [rut]
        }
        const response = await pool.query(sql)
        return response.rows
    } catch (error) {
        console.log(error.message)
    }
}

const editarEstudianteQuery = async (nombre, curso, nivel, rut) => {
    try {
        const sql = {
            text: "UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4",
            values: [nombre, curso, nivel, rut]
        }
        const response = await pool.query(sql)
        return response.rows
    } catch (error) {
        console.log(error.message)
    }
}

const borrarEstudianteQuery = async (nombre) => {
    try {
        const sql = {
            text: "DELETE FROM estudiantes WHERE nombre = $1",
            values: [nombre]
        }
        const response = await pool.query(sql)
        return response.rows
    } catch (error) {
        console.log(error.message)
    }
}

export { agregarEstudianteQuery, registrosQuery, rutEstudianteQuery, editarEstudianteQuery, borrarEstudianteQuery }