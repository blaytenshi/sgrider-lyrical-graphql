const path = require('path');
const express = require('express');
const app = require('./server/server');

// why do we have this?
// https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually
// https://tylermcginnis.com/react-router-cannot-get-url-refresh/
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'), function (error) {
        if (error) {
            res.status(500).send(error);
        }
    });
});

app.listen(4000, () => {
    console.log('Listening');
});
