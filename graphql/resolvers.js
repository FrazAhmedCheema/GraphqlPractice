const User = require('../models/user');

module.exports = {
    login: async ({ email, password }) => {
        // Return dummy data
        return {
            _id: '1',
            email: email,
            username: 'dummyUser',
            password: password
        };
    },
    createUser: async ({ userInput }) => {
        // Return dummy data
        return {
            _id: '2',
            email: userInput.email,
            username: userInput.username,
            password: userInput.password
        };
    }
};