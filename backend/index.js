const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const secretkey = 'dashboard';

const app = express();
app.use(express.json());
app.use(cors());

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: "Token required" });

    try {
        const decoded = jwt.verify(token.split(" ")[1], secretkey);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};

const studentSchema = mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

const Student = mongoose.model('Student', studentSchema);

const staffSchema = mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

const Staff = mongoose.model('Staff', staffSchema);

const noticeSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    branch: { type: [String], required: true },
    announcer: { type: String, required: true }
});

const Notice = mongoose.model('Notice', noticeSchema);

app.get("/notices", verifyToken, async (req, res) => {
        const notices = await Notice.find();
        res.json(notices);
});

app.get("/notices/:branch", verifyToken, async (req, res) => {
    const branch = req.params.branch;
    if (branch) {
        const notices = await Notice.find({ branch: branch });
        res.json(notices);
    }
});

app.post("/notices/add",verifyToken, async (req, res) => {
    console.log("Inserted1")
    await Notice.create(req.body);
    console.log("Inserted2")
    res.json("Inserted successfully");
});

app.post("/student/add", async (req, res) => {
    await Student.create(req.body);
    res.json("Student created successfully");
});

app.post("/staff/add", async (req, res) => {
    await Staff.create(req.body);
    res.json("Staff created successfully");
});

app.post('/student/login', async (req, res) => {
    const { id, password } = req.body;
    const student = await Student.findOne({ id, password });
    if (!student) return res.status(404).json("No student found");
    const token = jwt.sign({ id: id, role: 'student' }, secretkey, { expiresIn: '1h' });
    res.json({ token });
});

app.post('/staff/login', async (req, res) => {
    const { id, password } = req.body;
    const staff = await Staff.findOne({ id, password });
    if (!staff) return res.status(404).json("No staff found");
    const token = jwt.sign({ id: id, role: 'staff' }, secretkey, { expiresIn: '1h' });
    res.json({ token });
    console.log(token);
});

app.listen(2000, async () => {
    console.log("Server started at 2000");
    await mongoose.connect('mongodb+srv://saidhruvatheratipally:11032005@cluster0.zs1tsw6.mongodb.net/dashboard');
    console.log("Database connected");
});