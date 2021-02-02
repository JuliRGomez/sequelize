const {users} = require ("../models");

const getUsers = async (req,res) => {
    try {
        const results = await users.findAll();
        res.json(results);
    }
    catch(error) {
        console.log(error);
    }
}

const insertUser = async (req,res) => {
    const data = req.body;
    try {
        const results = await users.create(data);
        res.json({message:results})
    }
    catch(error){
        console.loog(error);
    }
}

const findUser = async (req,res) => {
    try {
        const results = await users.findOne({where: {id: req.params.id}});
        res.json(results);
    }
    catch(error){
        console.log(error);
    }
    
}

module.exports = {
    getUsers,
    insertUser,
    findUser
}