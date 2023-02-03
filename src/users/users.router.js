const usersService = require("./users.services");
const router = require("express").Router();

router.post("/users", usersService.postNewUser);
router.get("/users", usersService.getAllUsers);
router.get("/users/:id", usersService.getUserById);


module.exports = router;