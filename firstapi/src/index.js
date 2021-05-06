const http  = require('http')
const routes = require('./routes');
const url = require('url')
const server = http.createServer((request,response)=>{
    const parsedUrl = url.parse(request.url)
    console.log(parsedUrl)
    console.log(`Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`)

    const route  = routes.find((routeObj => (
        routeObj.endpoint == parsedUrl.pathname && routeObj.method == request.method
    )))

    if(route){
        request.query = parsedUrl.query 
        route.handler(request,response)
    }else{
        response.writeHead(404,{'Content-Type': 'text/html'});
        response.end(`Cannot  ${request.method} ${parsedUrl.pathname}`)
    }

    /*
    if(request.url == '/users' && request.method == 'GET'){
       userController.listUsers(request,response)
    }else{
    
    }*/

    
})

server.listen(3000,()=>console.log('Server Started at http://localhost:3000'))