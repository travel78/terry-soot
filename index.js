const express = require('express');
const path = require('path');

// start server
const app = express();

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.use(express.static(path.resolve(__dirname, 'public')));
app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on 3000`)
});
