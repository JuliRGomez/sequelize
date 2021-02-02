const {payments,users,membership} = require ("../models");

const getPayments = async (req,res) => {
    try {
        const results = await payments.findAll({
            include: [membership,users]
        });
        res.json(results);
    }
    catch(error) {
        console.log(error);
    }
}

const insertPayment = async (req,res) => {
    const data = req.body;
    try {
        const results = await payments.create(data);
        res.json({message:results})
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    getPayments,
    insertPayment
}