/**
 * Summary of /controllers/users.js:
 * 
 *      Receives data from the routes, performs operations, and sends the data in the JSON format
 * 
 * Description:
 * 
 *      We import uuid to allow us to give users a unique id. Each function will do its assigned 
 *      CRUD method (get, post, patch, delete) and modify the mock database with the speciified
 *      data.
 */

import { v4 as uuidv4 } from 'uuid'; // used to create unique ids for each user

let users = []; // this is our mock database, data is not stored between sessions

// returns all the users in the database
const getUsers = (req, res) => {
    res.send(users);
};

// returns user with the specified id from the database
const getUser = (req,res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
};

// adds a new user to the database
const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4()});

    res.send(`User with the name ${user.firstName} added to the database.`);
};

// finds user by id and updates the fields that are specified
const updateUser = (req,res) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id == id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated.`);
    
};

// finds user by id and removes them from the database
const deleteUser = (req,res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id)

    res.send(`User with the id ${id} deleted from the database.`);
};

export  { getUsers, createUser, getUser, deleteUser, updateUser };