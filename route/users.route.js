const express = require('express');

const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const users = []
    // {
    //    firstName: "Ben",
    //    lastName: "Great",
    //    age: 25
    // },{
    // firstName: "John",
    // lastName: "Doe",
    // age: 28 }


router.get('/', (req,res) =>{
    res.send(users);
     //res.send('how far')
});

router.post('/', (req, res) => {
        const user = req.body;
        
    users.push({ ...user, id: uuidv4()});

    res.send(`user with the name ${user.firstName} added to the database!`)
});

router.get('/:id', (req, res) => {
    res.send('THE GET ID ROUTE');
})

module.exports = router;