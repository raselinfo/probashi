const User = require("../models/user.model")
const usersController = {
    async createUser(req, res) {
        const { name, fatherName, motherName, address, issueDate } = req.body
        if (!name || !fatherName || !motherName || !address || !issueDate) {
            return res.status(400).json({ message: "All fields are required!" })
        }
        try {
            const user = new User({
                name,
                fatherName,
                motherName,
                address,
                issueDate
            })
            const newUser = await user.save()
            const url = `${process.env.CLIENT_URL}/c/t/${newUser._id}`
            res.status(201).json({ message: "User created successfully!", data: url })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    },
    async getUsers(_req, res) {
        console.log("hello")
        try {
            const users = await User.find()
            console.log("user", users)
            res.status(200).json({ data: users.length })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
}

module.exports = usersController