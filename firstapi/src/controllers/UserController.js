let users = require('../mocks/users')

module.exports = {
    listUsers(request,response){
        const { order } = request.query;
        console.log(request.query)
        console.log(order)
        const sortedUsers = users.sort((a,b)=>{
            if(order == 'desc'){
                return a.id < b.id ? 1 : -1;
            }
            return a.id > b.id ? 1 : -1
        })
        console.log(sortedUsers)
        response.send(200,sortedUsers)
        
    },

    getuserById(request,response){
        const {id} = request.params

        const user = users.find((user) => user.id ===Number(id))

        if(!user){
          return  response.send(400,{error: "user not found"})
            
        }
        return response.send(200,user)
            
        
    },
    createUser(request,response){
        const {body} = request

        const lastIdUser = users[users.length -1].id
        const newUser = {
            id : lastIdUser + 1,
            name : body.name
        }
        users.push(newUser)

        response.send(200,newUser)
        
    },
    updateUser(request,response){
        let {id} = request.params
        const {name} = request.body
        id = Number(id)

        const userExists = users.find( (user)=> user.id === id);

        if(!userExists){
            return response.send(400, {error: 'User not found'})
        }

        users = users.map((user) => {
            if(user.id === id){
                return {
                    ...user,
                    name
                }
            }

            return user
        })

        return response.send(200,{id,name})
    
    }
}
