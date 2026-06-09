import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const Cat = mongoose.model('Cat', { name: String });

const gatos = await Cat.find({name: 'Zildjian' }, {__v: 0});
console.log(gatos);