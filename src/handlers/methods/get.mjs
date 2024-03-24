import { readFile } from "node:fs/promises";

// res.setHeader("X-Content-Type-Options", "nosniff");

const getHandler = (req, res) => {
    const filePath = `${process.cwd()}/public${req.url}`;
    readFile(filePath, {
        encoding: "utf-8"
    }).then((fileContent) => {
        res.end(fileContent);
    }).catch((error) => {
        console.error(error);
        res.end(`Server error`);
    })
}

export {
    getHandler
}