import { getHandler } from "./methods/get.mjs";

const rootHandler = (req, res) => {
    switch(req.method) {
        case "GET":
            getHandler(req, res);
            break;
        default:
            res.end("Unhandled method");
            break;
    }
};


export {
    rootHandler
}