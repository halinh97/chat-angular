var express = require("express");
var app = express();

app.set("view engine", "ejs");
// app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

var mangUsers=[];
var a =[];

io.on("connection", function(socket){
  console.log("Co nguoi ket noi " + socket.id);

  socket.on("client-send-Username", function(data){
    if(mangUsers.indexOf(data)>=0){
      socket.emit("server-send-dki-thatbai");
    }else{
      mangUsers.push(data);
      socket.Username = data;
      socket.emit("server-send-dki-thanhcong", data);
      io.sockets.emit("server-send-danhsach-Users", mangUsers);
    }
  });

  // socket.on("logout", function(){
  //   mangUsers.splice(
  //     mangUsers.indexOf(socket.Username), 1
  //   );
  //   io.sockets.emit("server-send-danhsach-Users",mangUsers);
  // });

  socket.on("user-send-message", function(data){
    a.push(data);
    io.sockets.emit("server-send-msg", a);
    io.sockets.emit("server-send-mesage", {un:socket.Username, nd:data} );
  });


  socket.on('disconnect', function () {
    mangUsers.splice(
      mangUsers.indexOf(socket.Username), 1
    );
    io.sockets.emit("server-send-danhsach-Users",mangUsers);
 });
});

app.get("/", function(req, res){
  res.render("index");
});
