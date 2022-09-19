/**
 * Summary of /routes/users.js:
 *      
 *      Handles the HTTP requests by assigning the requests to our handler called controller.
 * 
 * Description:
 *  
 *      The routes will handle our 4 HTTP methods (get, post, patch, delete) and pass control 
 *      to our specific controllers (getUsers, createUser, getUser, deleteUser, updateUser)
 * 
 *      Note: we use '/' instead of '/user' due to redundency (i.e. /user/user)
 */

import express from 'express';

import { getUsers, createUser, getUser, deleteUser, updateUser }  from '../controllers/users.js';

const router = express.Router();
 
router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;