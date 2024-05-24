import { agregarEstudianteQuery, registrosQuery, rutEstudianteQuery, editarEstudianteQuery, borrarEstudianteQuery } from "../model/queries.js"

export const agregarEstudiante = async (req, res) => {
    const { nombre, rut, curso, nivel } = req.body
    const student = await agregarEstudianteQuery(nombre, rut, curso, nivel)
    res.send(student);
}

export const registros = async (req, res) => {
    const registro = await registrosQuery()
    res.send(registro);
}

export const rutEstudiante = async (req, res) => {
    const { rut } = req.query
    const estudiante = await rutEstudianteQuery(rut)
    res.send(estudiante)
}

export const editarEstudiante = async (req, res) => {
    const { rut } = req.query
    const { nombre, curso, nivel } = req.body
    const estudiante = await editarEstudianteQuery(nombre, curso, nivel, rut)
    res.send('Editado con éxito')
}

export const borrarEstudiante = async (req, res) => {
    const { nombre } = req.query
    const estudiante = await borrarEstudianteQuery(nombre)
    res.send('Eliminado con éxito')
}