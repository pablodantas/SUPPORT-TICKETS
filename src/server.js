import http from "node:http"

function listener(request, response){
    return response.end("Óla Mundo");
}


http.createServer(listener).listen(3333)