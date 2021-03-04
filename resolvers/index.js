const Todo = require('./Todo');
const User = require('./User');

const resolvers = {

    Query:{
        fetchUser:(_,{userId},ctx) => new User().fetchUser(userId,ctx),
        fetchUsers:(_,__,ctx) => new User().fetchUsers(ctx),
        fetchTodos:(_,{userId},ctx) => new Todo().fetchTodos(userId,ctx),
        fetchTodo:(_,{todoId},ctx) => new Todo().fetchTodo(todoId,ctx)
    },
    Mutation:{
        addUser:(_,{user_input},ctx) => new User().addUser(user_input,ctx),
        addTodo:(_,{todo_input},ctx) => new Todo().addTodo(todo_input,ctx),
        updateTodo:(_,{todoId},ctx) => new Todo().updateTodo(todoId,ctx),
        deleteTodo:(_,{todoId},ctx) => new Todo().deleteTodo(todoId,ctx)
    }

};

module.exports = resolvers;