
import express from 'express';
import bodyParser from 'body-parser';

import { MongoDBInstance } from "./db/mongodb.connection.mjs"
import { RoutesManager } from "./routes/RoutesManager.mjs"


const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json());
const router = express.Router();

app.get('/status', (req, res) => {
    res.send('Hello World!')
  })
  
RoutesManager.register(app);


MongoDBInstance.connect(()=>{
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
})
