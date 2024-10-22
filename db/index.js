require('dotenv').config();


const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect(process.env.mongoo_url).then(() => console.log('connected mongo db')).catch((e) => console.log(e));
