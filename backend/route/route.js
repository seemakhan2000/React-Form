import { Router } from 'express';
import { populateDatabase, getUsers } from '../controller/controller.js';
import { deleteAllUsers } from '../controller/controller.js';

const router = Router();

// Route to populate database
router.post('/populate', populateDatabase);

// Route to get users
router.get('/users', getUsers);

router.delete('/deleteAll', deleteAllUsers);


export default router;
