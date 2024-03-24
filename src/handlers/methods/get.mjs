import { read } from "../../util/file.mjs";

// res.setHeader("X-Content-Type-Options", "nosniff");

const getHandler = (req, res) => {
    read(`public${req.url}`).then(({error, data}) => {
        if(error) {
            res.end(`Server error: 500`)
        }
        else {
            res.end(data);
        }
    })
}

export {
    getHandler
}