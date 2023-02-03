const usersRouter = require("./users/users.router");
const express = require("express");
const app = express();

app.use(express.json());
app.use('/', usersRouter)

// let baseID = 1;

// const usersDB = [
//     {
//         id: baseID++,
//         firstName: "Sahid",
//         lastName: "Kick",
//         email: "sahid.kick@academlo.com",
//         password: "root",
//         age: 22,
//     }
// ];

// // CREATE A USER
// app.post("/users", (req, res) => {

//     const formatUser = {
//         id: baseID++,
//         firstName: req.body?.firstName,
//         lastName: req.body?.lastName,
//         email: req.body?.email,
//         password: req.body?.password,
//         age: req.body?.age,
//     };

//     usersDB.push(formatUser);

//     res.status(201).send(formatUser);
// });

// // VIEW USERS
// app.get("/users", (req, res) => {
//     res.status(200).send(usersDB);
// });

// // VIEW USER BY ID
// app.get("/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const selectedUser = usersDB.find((user) => user.id === id);
//     res.status(200).json(selectedUser);
// });

app.listen(9000, () => {
    console.log("the server is listening on port 9000");
});

module.exports = app;
