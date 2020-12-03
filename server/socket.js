const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
//**TODO build socket logic

io.on("connection", function (socket) {

})


//**TODO socket connection




//**TODO room join





//**TODO room leave





