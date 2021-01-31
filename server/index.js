const express = require('express');
const path = require('path');
const INDEX = path.resolve('./dist/index.html');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(`dist`));

app.get('*', function (req, res) {
    res.sendFile(INDEX);
});

app.listen(PORT, () => {
    console.log(`Server running at at http://localhost:${PORT}`);
});