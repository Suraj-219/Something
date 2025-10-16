const mongoose = require('mongoose');
const config = require('config');
const dbgr = require("debug")("development:mongoose");

// const mongoUri = process.env.MONGO_URI;

mongoose.connect(`${config.get("MONGO_URI")}`)
.then(()=>{
    dbgr("MongoDB connected");
}).catch((err)=>{
    dbgr("MongoDB connected error:", err.message);
});

module.exports = mongoose.connection;