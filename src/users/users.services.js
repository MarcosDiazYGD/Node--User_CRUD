// en servisios
const userControllers = require("./users.controllers");

const postNewUser = (req, res) => {
    const userObj = req.body;

    userControllers
        .createAnUser(userObj)
        .then((data) => res.status(201).json(data))
        .catch((err) => res.status(400).json(err));
};

const getAllUsers = (req, res) => {
    userControllers
        .findAllUser()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(404).json(err));
};

const getUserById = (req, res) => {
    const id = Number(req.params.id);
    userControllers.findUserByID(id)
        .then((user) => res.status(200).json(user))
        .catch((error) => res.status(404).json(error));
};

module.exports = {
  postNewUser,
  getAllUsers,
  getUserById
}