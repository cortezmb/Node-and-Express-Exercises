//Hello World
//Make an express program that will display "Hello, world!" at the root URL: /

// app.get('/', (req, res) =>{
//     res.send('Hello World!')
//  });

const express = require('express');

const app = express();

// const axios = require('axios');

// app.use(express.static('public'))

// app.get('/api', (req, res) => {

//     axios.get('https://corona.lmao.ninja/v2/states')
//     .then((response) => {
//         console.log(response);

//         res.json(response)
//     })
//     res.send('hello world')
// })

// Routes
// Add to your program the following pages:

// "Meow" at the URL /cats
// "Woof" at the URL /dogs
// "Living together" at the URL /cats_and_dogs

app.get('/cats', (req, res) => {
    res.send("Meow")
})

app.get('/dogs', (req, res) => {
    res.send("Woof")
})

app.use('/dogs/id', (req, res) => {

    let id = req.params.id

    console.log(data.data[0].name.img);

    res.send(`Hello World`)
})

    let data = { data: [{

        id: 0, 
        name: "Labrador",
        img: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/29150201/Labrador-Retrievers-three-colors.jpg"
    },
    {
        id: 1, 
        name: "Golden Retriever",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGolden_Retriever&psig=AOvVaw3NwN4dysANH_OTo83Cctp5&ust=1595014193159000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjQyoXB0uoCFQAAAAAdAAAAABAD"
    },
    {
        id: 2, 
        name: "Chihauhua",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.akc.org%2Fdog-breeds%2Fchihuahua%2F&psig=AOvVaw3yUMkMhSXBrxXzfKVWw5ls&ust=1595014270878000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCIyarB0uoCFQAAAAAdAAAAABAD"
    }]

    // res.send(${req.params.id});
    }

app.listen(3000, () => {
    console.log("Port 3000");
})