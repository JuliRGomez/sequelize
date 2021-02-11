const {payments,users,membership} = require ("../models");

const getPayments = async (req,res) => {
    try {
        const results = await payments.findAll({
          
            include: [{model:users,
                    attributes:['name']
                
            }]
           // attributes: ['user.id', 'user.name','user.email','user.phonenumber','membership.price']
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