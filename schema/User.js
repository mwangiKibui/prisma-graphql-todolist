const {gql} = require('apollo-server');

const User = gql`
    #type User

    type User {
        id:ID!
        name:String!
        email:String!
        Todo:[Todo!]
    }
`;

const UserInput = gql`
    #input user

    input UserInput {
        name:String!
        email:String!
    }

`;

module.exports = {
    User,
    UserInput
}