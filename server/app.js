require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.routes");
const chatRouter = require("./routes/chat.routes");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/user", userRouter);
app.use("/", chatRouter);



server.listen(process.env.API_PORT, function () {
        console.log("server is listening on 8080")
});
