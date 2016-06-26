var app  = require('express')(),
    http = require('http').Server(app),
    io   = require('socket.io')(http);

http.listen(3000, function(){
  console.log('listening on *:3000');
});
