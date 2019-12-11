const server = require("./server.js");

const port = 6006;

server.listen(port, () => {
    console.log(`/n Server running on http://localhost:${port} n/`)
});