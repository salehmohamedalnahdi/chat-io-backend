// server.js

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('Server is running');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (data) => {
    console.log('Received message:', data);
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const port = 8000;
http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/*const express= require('express')
const socket= require('socket.io')

const app= express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const blogRoutes=require('./routes/blogRoute.js')


app.use('/',blogRoutes)
const server=app.listen(3000,()=>console.log("connecting is done"))

var sio=socket(server)
sio.on('connection',function (visitor) {
    console.log("vistor as",visitor.id)

    visitor.on("message",function (data) {
        sio.sockets.emit("new_msg",data)
    })
    
})*/















