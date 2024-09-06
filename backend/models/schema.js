import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    match: /^[a-zA-Z]+$/, // Allows only alphabets
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/, // Basic email validation
  },
  phone: {
    type: String,
    required: true,
    match: /^\d{10}$/, // Exactly 10 digits
  },
});

// Renaming 'randomNumber' to 'User' for clarity
const randomNumber = mongoose.model('randomNumber', userSchema);

export default randomNumber;
