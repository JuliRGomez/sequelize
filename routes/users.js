const express = require("express");
const {getUsers,insertUser,findUser} = require("../controllers/users");
const router = express.Router();

router.get("/users",getUsers);
router.get("/users/:id",findUser);
router.post("/users",insertUser);
router.put("/users/:id");

module.exports = router;