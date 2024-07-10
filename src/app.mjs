
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from "cors";
import { MongoDBInstance } from "./db/mongodb.connection.mjs";
import { RoutesManager } from "./routes/routes.manager.mjs";
import { ErrorMiddleware } from './middlewares/error.middleware.mjs';


const app = express();
const port = process.env.PORT || 5000;
app.use(cookieParser());
app.use(bodyParser.json());

app.get('/status', (req, res) => {
    res.status(200).send('ok!');
});
  
RoutesManager.register(app);

app.use(ErrorMiddleware.register);


MongoDBInstance.connect(()=>{
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })                  
});
