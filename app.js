const express = require('express');
const http = require('http'); //a
const { sequelize } = require('./models');
const cors = require('cors');
const SERVER_PORT = 3000;

const app = express();
const server = http.createServer(app);  //a
const io  = require('socket.io')(server); //a

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const serialPort = require('serialport'); //a
const readline = require('@serialport/parser-readline');  //a

const serial = new serialPort('COM3', {
  baudRate : 9600
}); //a
//
// serial.on("open",() => {
//   console.log('on');
// });
//
// serial.on('data',(data) => {
//   console.log(data.toString());
// });

app.use('/', require('./routers'));

const parser = serial.pipe(new readline({delimiter:'\r\n'})); //a
//
// app.get('/',async (req,res) => {
//   console.log('hllo');
//   let total = "";
//   try {
//   await serial.on("open",() => {
//     console.log('on');
//   });
//   await parser.on('data',(data) => {
//     total = data.toString();
//     console.log(total);
//     res.status(200).json({
//         "Temperature": total
//     });
//   });
//   await serial.removeListener("open",() => {});
//   }
//   catch (e) {
//     res.status(500).json({
//       message : e.message
//     })
//   }
// }); //a

io.on('connection',client => {
  console.log(client);
  console.log('connection');
}); //a


sequelize.sync();

server.listen(SERVER_PORT, () => {
  console.log(`Start the server at ${SERVER_PORT}`);
});
