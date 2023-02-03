let baseID = 0;

const usersDB = [
    {
        id: baseID++,
        firstName: "Sahid",
        lastName: "Kick",
        email: "sahid.kick@academlo.com",
        password: "root",
        age: 22,
    },
];

// CREATE AN USER
const createAnUser = async (userObj) => {
    const user = {
        id: baseID++,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        password: userObj.password,
        age: userObj.age,
    };

    await usersDB.push(user);
    return user;
};

// FIND ALL USERS
const findAllUser = async () => {
    return await usersDB;
};

// FIND USER BY ID
const findUserByID = async (id) => {
    const filteredUser = await usersDB.find((user) => user.id === id);

    return filteredUser;
};

module.exports = {
    createAnUser,
    findAllUser,
    findUserByID,
};
