const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(`dist`));

app.listen(PORT, () => {
    console.log(`Server running at at http://localhost:${PORT}`);
});