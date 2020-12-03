const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function register(req, res) {
    const {username, email, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    let user = await User.findOne({email: email});

    if (!user) {
        bcrypt.hash(password, salt, function (err, hash) {
            user = new User({
                username: username,
                email: email,
                password: hash
            });
            user.save()
                .then(doc => {
                    console.log("saved" + doc)
                    res.json({
                        msg: "user is stored"
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        })
    } else {
        res.status(400).send({
            errorMsg: "this email is already used"
        })
    }
}

async function login(req, res) {
    const {email, password} = req.body;
    let user = await User.findOne({email: email});

    bcrypt.compare(password, user.password, function (err, result) {

        if (!result) {
            console.log(err);
            res.status(404).json({
                errorMsg: "email or password incorrect"
            });
        } else {
            console.log("password match with collection");

            const accessToken = jwt.sign({
                email: email,

            }, process.env.SECRET_JWT);

            res.status(200).json({
                msg: "token is init",
                token: accessToken
            });
        }

    });

}

module.exports = {
    "login": login,
    "register": register
}