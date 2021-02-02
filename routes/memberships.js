const express = require("express");
const {getMemberships,insertMembership} = require("../controllers/memberships");

const router = express.Router();

router.get("/memberships",getMemberships);
router.get("/memberships/:id");
router.post("/memberships",insertMembership);
router.put("/memberships/:id");

module.exports = router;