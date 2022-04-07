let io;


module.exports={
    init:httpServer=>{
        io=required("socket.io")(httpServer)
    }
}