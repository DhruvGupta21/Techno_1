const db = require('../models');

const Techno = db.Techno;

// 1. add Student

const addStudent = async(req, res) => {
    let info = {
        Serial_no: req.body.Serial_no,
        Name: req.body.Name,
        School: req.body.School,
        DOB: req.body.DOB
    };

    const Techno_b = await Techno.create(info);
    res.status(200).send(Techno_b);
    console.log(Techno_b);
};

// 2. get all students

const getAllStudents = async(req, res) => {
    let Techno_b = await Techno.findAll({});
    res.status(200).send(Techno_b);
};

// 3. get single student

const getOneStudent = async(req, res) => {
    let id = req.params.id;
    let Techno_b = await Techno.findOne({ where: { id: id } });
    res.status(200).send(Techno_b);
};

// 4. update Student

const updateStudent = async(req, res) => {
    let id = req.params.id;
    const Techno_b = await Techno.update(req.body, { where: { id: id } });
    res.status(200).send(Techno_b);
};

// 5. delete Student by id

const deleteStudent = async(req, res) => {
    let id = req.params.id;
    await Techno.destroy({ where: { id: id } });
    res.status(200).send('Student is deleted!');
};

module.exports = {
    addStudent,
    getAllStudents,
    getOneStudent,
    updateStudent,
    deleteStudent
};