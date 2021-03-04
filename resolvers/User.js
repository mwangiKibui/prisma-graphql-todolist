class User {

    //fetching a user.
    async fetchUser(userId,ctx){

        let user = await ctx.user.findUnique({
            where:{
                id:parseInt(userId)
            },
            include:{
                Todo:true
            }
        });

        return user;
        
    };

    //adding a user.
    async addUser(user_input,ctx){

        let {name,email} = user_input;

        const user = await ctx.user.create({

            data:{
                name,
                email
            }

        });

        return user;
    };

    //fetching users.
    async fetchUsers(ctx){

        const users  = await ctx.user.findMany({
            include:{
                Todo:true
            }
        });

        return users;

    };

    

};

module.exports = User;