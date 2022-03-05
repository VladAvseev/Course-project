require('dotenv').config();
const express = require('express');
const cors = require('cors')
const conn = require('./database');
const router = require("./routes/index");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

async function start() {
    try {
        conn.connect((err) => {
                if (err) throw err;
                console.log('Database connected!')
            }
        )

        setInterval(function () {
            conn.query('SELECT 1');
        }, 5000);

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}...`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();