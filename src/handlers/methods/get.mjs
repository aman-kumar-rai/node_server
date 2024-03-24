const getHandler = (req, res) => {
    res.end(`GET method was called for resource: ${req.url}`);
}

export {
    getHandler
}