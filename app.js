const express = require('express');
const app = express();

//get :-

// app.use(express.json());
//home or root route
app.get("", (req, res) => {
    // res.send("Hello");
    console.log("Hello");
})

app.get("/books", (req, res) => {
    const data = {
        "books" : [
            "Harray Potter",
            "White Tiger",
            "Three Mistakes Of My Life",
            "Macbeth"
    ]
    }
    // res.send(data);
    console.log(data);
})


app.listen(8001, () => {
    console.log("Listening on port 8001.");
})