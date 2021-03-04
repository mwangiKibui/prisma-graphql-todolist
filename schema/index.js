const {gql} = require('apollo-server');

const {Todo,TodoInput} = require('./Todo');

const {User,UserInput} = require('./User');

// query
const Query = gql`
    #type query 
    type Query {
        fetchUser(userId:String!):User
        fetchUsers:[User!]!
        fetchTodos(userId:String!):[Todo!]!
        fetchTodo(todoId:String!):Todo
    }
`;

//mutation
const Mutation = gql`
    #type mutation
    type Mutation {
        addUser(user_input:UserInput):User,
        addTodo(todo_input:TodoInput):Todo,
        updateTodo(todoId:String!):Todo,
        deleteTodo(todoId:String!):Todo
    }
`;

module.exports = [
    Todo,
    TodoInput,
    User,
    UserInput,
    Query,
    Mutation
];