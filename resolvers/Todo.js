class Todo {

    //fetching todos.
    async fetchTodos(userId,ctx){

        let todos = await ctx.todo.findMany({
            where:{
                userId:parseInt(userId)
            },
            include:{
                user:true
            }
        });

        return todos;

    };

    //fetch todo.
    async fetchTodo(todoId,ctx){

        let todo = await ctx.todo.findUnique({
            where:{
                id:parseInt(todoId)
            },
            include:{
                user:true
            }
        });

        return todo;

    };

    //adding todo.
    async addTodo(todo_input,ctx){

        let {title,userId} = todo_input;

        let todo = await ctx.todo.create({
            data:{
                title,
                userId:parseInt(userId),
                completed:false
            },
            include:{
                user:true
            }
        });

        return todo;
    };

    //updating todo.
    async updateTodo(todoId,ctx){

        //updating a todo involves toggling completed.
        let todo = await ctx.todo.update({
            where:{
                id:parseInt(todoId)
            },
            data:{
                completed:true
            },
            include:{
                user:true
            }
        });

        return todo

    };

    //deleting todo.
    async deleteTodo(todoId,ctx){

        let todo = await ctx.todo.delete({
            where:{
                id:parseInt(todoId)
            },
            include:{
                user:true
            }
        });

        return todo;
    };

};

module.exports = Todo;