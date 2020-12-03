const mongoose = require("mongoose");
const validator = require("mongoose-validator");
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");


const UserSchema = new Schema({
    username: {
        type: String,
        minlength: 2,
        maxlength: 30,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate: [
            validator({
                validator: "isEmail",
                message: "this mail is not valid"
            })
        ]
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 100,
        required: true,
    }
})

module.exports = mongoose.model('User', UserSchema);

