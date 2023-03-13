const express = require("express");
const port = 5000;
const cluster = require("cluster");
const totalCPUs = require("os").cpus().length;
const {getTicketTotalByRole} = require('./services')

if (cluster.isMaster) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Master ${process.pid} is running`);
 
  // Fork workers.
  for (let i = 0; i < totalCPUs - 1; i++) {
    const worker = cluster.fork();
    worker.on('message', (mes)=>{
      if(mes.data){
        console.log(`Message received to master from worker pid ${mes.pid}: ${JSON.stringify(mes.data)}`)
      }
    })
  }
 
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });
} else {
  const app = express();
  getTicketTotalByRole(process.pid).then((data)=>{
    process.send({data: data, pid: process.pid})
   })
  app.listen(port, () => {
    console.log(`App listening on port ${port}`, `Worker ${process.pid} started`);
  });
}
