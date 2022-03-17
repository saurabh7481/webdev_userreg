const User = require("../models/user");

exports.getUsers = (req, res, next) => {
    User.findAll()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.addUser = (req, res, next) => {
    console.log("here", req.body)
    const name = req.body.name;
    const email = req.body.email;
    User.create({
        name: name,
        email: email
    })
    .then(() => {
        console.log("created")
        res.status(200).send({data: "User created"});
    })
    .catch(err => {
        console.log(err);
        res.status(400).send(() => console.log("error"));
    })
}

exports.deleteUser = (req, res, next) => {
    const id = req.params.id;
    User.findByPk(id)
        .then(user => {
            user.destroy();
        })
        .then(() => {
            res.status(200).send({data: "user deleted"});
        })
        .catch(err => {
            console.log(err);
        })
}