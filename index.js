const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    return res.send('Hello World!');
}
) // This is the root route

app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`))