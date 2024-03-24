import { readFile } from "node:fs/promises";


const read = (relativePath, encoding = "utf-8") => {
    const filePath = `${process.cwd()}/${relativePath}`;
    return readFile(filePath, encoding).then(fileContent => {
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

export {
    read
}
