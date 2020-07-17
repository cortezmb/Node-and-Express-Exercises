const express = require('express');

const app = express();

const PORT = 3000 ;

app.use(express.static('public'))

app.get('/', (req, res) => {

    res.send(`
    
        <link rel="stylesheet" href="style.css">
        <h1>Front Page</h1>
    `)
})

app.get('/about us', (req, res) => {

    console.log("About Us");
})

app.get('/faq', (req, res) => {

    console.log("FAQs");
})

app.get('*', (req, res) => {

    console.log("You've reached an error");
} )

app.listen(PORT, () => {

    console.log(`Listening on port ${PORT}`);
})