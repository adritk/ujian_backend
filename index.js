const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req,res) => {
    res.status(200).send('<h1>Selamat Datang API</h1>')
})

const {categoriesRouter,productRouter,catLeafRouter} = require('./router')
app.use(categoriesRouter)
app.use(productRouter)
app.use(catLeafRouter)


app.listen(port, () => console.log(`API berhasil aktif di port ${port}`))