import randomNumber from '../models/schema.js';
/*Imports the faker library, which is used to generate fake data such as names, emails, and phone
 numbers.*/
import { faker } from '@faker-js/faker';

/* Defines a helper function to generate a random username.*/
const generateUsername = () => {
  /*Uses the faker library to generate a random username
  Removes any non-letter characters from the generated */
return faker.internet.userName().replace(/[^a-zA-Z]/g, '');
};
// Helper function to generate a valid phone number with exactly 10 digits
const generatePhoneNumber = () => {
  return faker.string.numeric(10);
};
// Populate the database with random users
export const populateDatabase = async (req, res) => {
  try {
    for (let i = 0; i < 1000; i++) {
      const randomUser = {
        username: generateUsername(),
        /*faker: Main object of the Faker library.
        internet: Namespace within faker that includes methods related to internet data.
         userName: Method within the internet namespace that generates a fake user name.*/
        email: faker.internet.email(),
        phone: generatePhoneNumber(),
      };
 const user = new randomNumber(randomUser);
//This is a method provided by Mongoose that saves the current document 
      await user.save();
      console.log('Saved user' ,randomUser);
      console.log('User saved successfully');
    }
    console.log('Database populated with 10 random users');
    res.status(200).json({ message: 'Database populated with 10 random users' });
  } catch (error) {
    res.status(500).json({ message: 'Error populating database', error });
  }
};
// Get users from the database
export const getUsers = async (req, res) => {
  try {
    const users = await randomNumber.find(); // Find all users
    console.log(`Number of users retrieved: ${users.length}`);
    if (users.length === 0) {
      console.warn('No users found.');
    }
    res.status(200).json(users); // Return users as JSON
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};


export const deleteAllUsers = async (req, res) => {
  console.log('Deleting all users');
  try {
    await randomNumber.deleteMany({});
    console.log('All users deleted');
    res.status(200).send('All users deleted');
  } catch (error) {
    console.error('Error deleting users:', error);
    res.status(500).send('Error deleting users');
  }
};
 



 

 