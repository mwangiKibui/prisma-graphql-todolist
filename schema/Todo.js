const {gql} = require('apollo-server');

const Todo = gql`
    #todo
    type Todo {
        id: ID!
        title: String!
        completed: Boolean!
        user:User!
    }
`;

const TodoInput = gql`
    #todoInput
    input TodoInput {
        title:String!
        userId:ID!
    }
`;

module.exports = {
    Todo,
    TodoInput
}