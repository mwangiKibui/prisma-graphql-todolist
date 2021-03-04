const {ApolloServer} = require('apollo-server');

const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const typeDefs = require('./schema');

const resolvers = require('./resolvers');

async function main(){

    const PORT = process.env.PORT || 4000;

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context:prisma
    });

    let result = await server.listen(PORT).catch(console.log);

    console.log(
        `🚀 server started at ${result.url} `
    );

    //add a user.

    

    // console.log(user);

    
    

    //add a todo.
    // const todo = await prisma.todo.create({
    //     data:{
    //         title:"Working on pacha-ler-solutions",
    //         completed:false,
    //         userId:1
    //     }
    // });

    // console.log(todo)

    //fetch the todos.
    // const todos = await prisma.todo.findMany({
    //     include:{
    //         user:true
    //     }
    // });
    
    // console.log(todos)

    /**
     * We will now introduce types and use a GraphQL API.
     */

};

main()
    .catch(e => {
        throw e;
    })
    .finally( async () => {
        await prisma.$disconnect()
    });