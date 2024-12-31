import { routes } from "../routes/index.js";
import { DataBase } from "../database/database.js";

const database = new DataBase()

export function routeHandler(request, response) {
    const route = routes.find((route) => {
        return route.method === request.method && route.path === request.url
    })

    if(route){
        return route.controller({ request, response, database });
    }
    
    return response.writeHead(404).end("not found")
}