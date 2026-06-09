import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const Cat = mongoose.model('Cat', { name: String });

const gato = await Cat.findById('6a28415ea020ed99b88392ff');
gato.name = 'Garfield';
await gato.save();