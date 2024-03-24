import { readFile } from "node:fs/promises";
import { hasItem, getItem, setItem } from "../cache/index.mjs";


const read = (relativePath, encoding = "utf-8") => {
    const filePath = `${process.cwd()}/${relativePath}`;

    if(hasItem(relativePath)) {
        return Promise.resolve({
            error: false,
            data: getItem(relativePath)
        })
    }
    else {
        return readFile(filePath, encoding).then(fileContent => {
            setItem(relativePath, fileContent);

            return {
                error: false,
                data: fileContent
            }
        }).catch((error) => {
            return {
                error: true,
                data: error
            }
        })
    }
}

export {
    read
}
