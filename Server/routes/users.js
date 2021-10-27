const {User, validate} = require('../models/user');

const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");

router.post('/', async (req, res) => {
    try {

        const {error} = validate(req.body)
        if (error) return res.status(400).send(error.details[0].message) 

        const existingUserEmail = await User.findOne({email: req.body.email})
        if (existingUserEmail) return res.status(400).send('User Already exists')

        const user = new User(req.body)
        const salt =  await bcrypt.genSalt(Number(process.env.SALT))
        user.password = await bcrypt.hash(user.password, salt);

        await user.save();
        res.send(user);

    } catch (error) {
        res.send("An error occured");
    }
})

router.post('/reset-password', async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if (!user) return res.status(400).send('Invalid password or email')

        console.log(req.body.password, user.password)
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) return res.status(400).send("Invalid password");

        const salt =  await bcrypt.genSalt(Number(process.env.SALT))
        user.password = await bcrypt.hash(req.body.newPassword, salt);
        await user.save();
        res.send(user);

    } catch (error) {
        console.log(error);
        res.send("An error occured");
    }
})

router.get("/me", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password -__v");
        res.send(user);
    } catch (error) {
        console.log(error);
        res.send("An error occured");
    }
});


module.exports = router