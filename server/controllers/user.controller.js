const User = require("../models/user.model")
const usersController = {
    async createUser(req, res) {
        console.log(req.body)
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
            console.log(newUser)
            res.status(201).json({ message: "User created successfully!", data: newUser })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    },
    getUsers(req, res) {
        res.send("Get all users")
    }
}

module.exports = usersController