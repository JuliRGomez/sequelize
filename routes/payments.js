const express = require("express");
const {getPayments,insertPayment} = require("../controllers/payments");

const router = express.Router();

router.get("/payments",getPayments);
router.get("/payments/:id");
router.post("/payments",insertPayment);
router.put("/payments/:id");

module.exports = router;