const users = require('../mocks/users')
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
        response.writeHead(200,{'Content-Type': 'application/json'});
        response.end(JSON.stringify(sortedUsers))
    },
}