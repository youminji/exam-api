const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Hello, Nodejs!'));
app.get('/service', (req, res) => {
    var status = req.param('status');
    res.send('The system is running [Status:' + status + ']');
});

app.listen(port, () => console.log('Example app listening on port 3000'))