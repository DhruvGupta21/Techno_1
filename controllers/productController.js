const db = require('../models')

const Techno = db.Techno

// 1. add Student

const addStudent = async(req, res) => {

    let info = {
        Serial_no: req.body.Serial_no,
        Name: req.body.Name,
        School: req.body.School,
        DOB: req.body.DOB,
        published: req.body.published ? req.body.published : false
    }

    const Techno = await Techno.create(info)
    res.status(200).send(Techno)
    console.log(Techno)

}

// 2. get all students

const getAllStudents = async(req, res) => {

    let Techno = await Techno.findAll({})
    res.status(200).send(Techno)

}

// 3. get single student

const getOneStudent = async(req, res) => {

    let id = req.params.id
    let Techno = await Techno.findOne({ where: { id: id } })
    res.status(200).send(Techno)

}

// 4. update Student

const updateStudent = async(req, res) => {

    let id = req.params.id
    const Techno = await Techno.update(req.body, { where: { id: id } })
    res.status(200).send(Techno)

}

// 5. delete Student by id

const deleteStudent = async(req, res) => {

    let id = req.params.id
    await Techno.destroy({ where: { id: id } })
    res.status(200).send('Student is deleted !')

}

// 6. get published student

const getPublishedStudent = async(req, res) => {

    const Techno = await Techno.findAll({ where: { published: true } })
    res.status(200).send(Techno)

}

module.exports = {
    addStudent,
    getAllStudents,
    getOneStudent,
    updateStudent,
    deleteStudent,
    getPublishedStudent
}