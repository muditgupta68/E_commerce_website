const {app} = require('./app');
const dotenv = require('dotenv');

//config
dotenv.config({path:"backend/config/config.env"})


const PORT = process.env.PORT||8000;
const connectDatabase = require('./database/db');

//connect database
connectDatabase();

const server = app.listen(PORT,()=>{
    console.log(`Server listening @${PORT}`);
})

//unhandled promise rejection
process.on("unhandledRejection",(err)=>{
    console.log("Shuting down server");
    server.close(()=>{
        process.exit(1);
    })
})