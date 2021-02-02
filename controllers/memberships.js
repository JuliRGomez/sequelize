const {membership} = require ("../models");


const getMemberships = async (req,res) => {
    try {
        const results = await membership.findAll();
        res.json(results);
    }
    catch(error) {
        console.log(error);
    }
}

const insertMembership = async (req,res) => {
    const data = req.body;
    try {
        const results = await membership.create(data);
        res.json({message:results})
    }
    catch(error){
        console.loog(error);
    }
}

module.exports = {
    getMemberships,
    insertMembership
}