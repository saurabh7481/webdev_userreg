const express = require("express");
const router = express.Router();

const {getUsers, addUser, deleteUser} = require("../controller/user");

router.get("/getusers", getUsers);
router.post("/addnewuser", addUser);
router.delete("/deleteuser/:id", deleteUser);

module.exports = router;