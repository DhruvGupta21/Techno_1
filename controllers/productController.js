const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const Techno = db.Techno;

// 1. Adding a Student
const addStudent = async(req, res) => {
    const { Serial_no, Name, School, DOB, username, password } = req.body;

    const info = {
        Serial_no,
        Name,
        School,
        DOB,
        username,
        password
    };

    const Techno_b = await Techno.create(info);
    res.status(200).send(Techno_b);
    console.log(Techno_b);
};

// 2. Logging in 
const login = async(req, res) => {
    const { username, password } = req.body;

    const user = await Techno.findOne({ where: { username } });

    if (!user) {
        return res.status(404).send('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).send('Invalid password');
    }

    const token = jwt.sign({ username: user.username }, 'your-secret-key', { expiresIn: '1h' });

    res.status(200).json({ token, student: user });
};

// 3. Get all Students
const getAllStudents = async(req, res) => {
    const Techno_b = await Techno.findAll({});
    res.status(200).send(Techno_b);
};

// 4. Get single Student
const getOneStudent = async(req, res) => {
    const id = req.params.id;
    const Techno_b = await Techno.findOne({ where: { id } });
    res.status(200).send(Techno_b);
};

// 5. Update Student
const updateStudent = async(req, res) => {
    const id = req.params.id;
    const Techno_b = await Techno.update(req.body, { where: { id } });
    res.status(200).send(Techno_b);
};

// 6. Delete student by id
const deleteStudent = async(req, res) => {
    const id = req.params.id;
    await Techno.destroy({ where: { id } });
    res.status(200).send('Student is deleted!');
};

module.exports = {
    addStudent,
    login,
    getAllStudents,
    getOneStudent,
    updateStudent,
    deleteStudent
};
