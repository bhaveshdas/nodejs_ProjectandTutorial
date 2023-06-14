const http = require('http');
const _ = require('lodash');
const server = http.createServer((req, res) =>{
    //lodash
    const num = _.random(0,20);
    console.log(num);
    res.setHeader('Content-Type', 'text/html');

    const greet = _.once(() => {
        console.log('hello');
    })
    greet();
    greet()
    res.end();
}); // creates a server

server.listen(3000, 'localhost', () =>{
    console.log("listening now @ 3000");
});