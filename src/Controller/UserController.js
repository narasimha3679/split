const UserModel = require('../Model/UserModel');
const bcrypt = require('bcrypt');

class UserController {

    async registerUser(req, res) {
        try {
            console.log(req.body)
            // Check if user exists
            const userExists = await UserModel.findOne({email: req.body.email});
            if (userExists) {
                return res.status(400).send('User already exists');
            }

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);


            const user = new UserModel({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            });

            await user.save();
            res.send('User registered successfully');
        } catch (error) {
            console.log(error);
            res.status(500).send('Error while registering user');
        }
    }

    loginUser(req, res) {
        // Login logic here
        // Ensure to verify the user's password here
        res.send('User logged in successfully');
    }
}

module.exports = new UserController();
