const rootHandler = (req, res) => {
    res.end(`Client requested resource: ${req.url}`);
};


export {
    rootHandler
}