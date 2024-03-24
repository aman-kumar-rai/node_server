import http from "node:http";
import { PORT } from "./constants/index.mjs";
import { rootHandler } from "./handlers/index.mjs";


const server = http.createServer(rootHandler);

server.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
})
