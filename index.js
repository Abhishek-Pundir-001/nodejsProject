// Answer-1
// package.json file has been created using npm init command
// ----------------------------------------------------------------------------------
// const fs = require("fs");
// Answer-2
// let text = "nodejs is a platform and is primarily employed for developing web application that are highly focussed on input/output operation,including but not listed to chat application and multimedia streaming website. The paltform is constructed using Google chrome v8 javascript engine.A web application is a type of software that executes on a server and is dislpayed by client's browser that obtains all the application's resources over the internet."
// fs.writeFile(
//   "nodejs_architecture.txt",text,
//   function (err) {
//     if (err) {
//       console.log("ERROR: ", err);
//     } else {
//       console.log("Data written successfully");
//     }
//   }
// );
// -----------------------------------------------------------------------------------
// Answer-3
// fs.readFile('nodejs_architecture.txt',function(err,data){
//     if(err){
//         console.log("Error: ",err)
//     }
//     console.log(data.toString())
// })

// Answer-4
// let appendedText = "comapred to other server's side languages node js has distinct advantages.its asynchronous model and non blocking I/O operation improve the scalability and performance of consuming less memory and resoures.Additionally, it is highly scalable and provide high performance node js is also flexible with many frameworks and make the development process easier";
// fs.appendFile('nodejs_architecture.txt',appendedText,function(err){
//     if(err){
//         console.log("Error: ",err)
//     }
//     else{
//         console.log('Data appended successfully');
//     }
// })
// ----------------------------------------------------------------------------------------
// Answer-5
// fs.unlink('nodejs_architecture.txt',function(err){
//     if(err){
//         console.log("Error",err)
//     }
//     else{
//         console.log("file deleted sucessfully")
//     }
// })
// -----------------------------------------------------------------------------------------------
// Answer-6
// const os =  require('os');
// console.log("operating system name: ",os.type())
// console.log("OS release: ",os.release());
// ------------------------------------------------------------------------------------------------
// Answer-7
// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.write(
//     "<h1>I am Happy to Learn Full Stack Web development from PW Skills"
//   );
//   res.end();
// });

// server.listen(4001);
// console.log("server is running at port 4001");

// Answer-8
// const EventEmitter = require('node:events');
// const eventEmitter = new EventEmitter();
// eventEmitter.on('start',(a,b)=>{
//     console.log(`Thanks for ${a} ${b}`)
// })

// eventEmitter.emit('start','subscribe','college wallah')
// --------------------------------------------------------------------------------------------

// Answer-9
// const EventEmitter = require('node:events');
// const eventEmitter = new EventEmitter();
// eventEmitter.on('start',(a,b)=>{
//     console.log(`Thanks for ${a} ${b}`)
// })

// eventEmitter.off();
// eventEmitter.emit('start','subscribing','college wallah');

// output----The listner argument must be type function.
// ----------------------------------------------------------------------------------------

// Answer-10
// const EventEmitter = require('node:events');
// const eventEmitter = new EventEmitter();
// eventEmitter.on('start',(a,b)=>{
//     console.log(`Thanks for ${a} ${b}`)
// })


// console.log(`The default maximum number of eventlistners are: ${eventEmitter.getMaxListeners()}`);
// eventEmitter.setMaxListeners(5);
// console.log(`The updated maximum number of eventlistners are: ${eventEmitter.getMaxListeners(5)}`)
