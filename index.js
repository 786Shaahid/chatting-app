const express=require('express');
const app=express();

const http=require('http').createServer(app);

http.listen(5000,()=>{
    console.log('Server is running...');
})

app.get('/',(res,req)=>{
    req.sendFile(__dirname+'/index.html');
})

// Socket 
const io=require('socket.io')(http);
// connection of socket
io.on('connection',(socket)=>{
    console.log('Connecting');
    socket.on('message',(msg)=>{
         socket.broadcast.emit('message',msg)
    })


})
