
const express = require('express');

const app = express();

app.use(express.static('www'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/www/index.html');
});


// Start the webbserver
// tell it what port to listen to
app.listen(3000, () => console.log('Listening on port 3000'));