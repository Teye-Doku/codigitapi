const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/',(req,res,next) => {
    res.status(200).send('it is working');
});

app.listen(PORT,()=> console.log(`server is running on port ${PORT}`))