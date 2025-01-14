const { buildSchema } = require('graphql');

module.exports = buildSchema(`

    type User {
        _id: ID!
        email: String!
        username: String!
        password: String
    }

    input UserInputData {
        email: String!
        username: String!
        password: String!
    }

    type RootQuery {
        login(email: String!, password: String!): User
    }

    type RootMutation {
        createUser(userInput: UserInputData): User
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
