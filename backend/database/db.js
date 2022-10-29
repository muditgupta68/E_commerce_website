const mongoose = require('mongoose')

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI)
    .then((data)=>{
        console.log(`Connection Established: @${data.connection.name} DB`)
    })
}

module.exports = connectDatabase;
