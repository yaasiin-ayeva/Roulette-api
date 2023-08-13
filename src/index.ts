import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "./data-source";
import apiRouter from "./routes/index.route";
import ErrorResponse from "./utils/errorResponse.util";
import express = require("express");
import Env from "./configs/config";
const bodyParser = require('body-parser');
const helmet = require('helmet');

const publicContent = require('../app.json');

const PORT = Env.APP_PORT || 9009;

const cors = require('cors');
const whitelist = ['https://roulette-stats.vercel.app/'];

const corsOptions = {
    origin: function (origin: any, callback: any) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new ErrorResponse('Not allowed by CORS', 403));
        }
    }
}

AppDataSource.initialize().then(async () => {
    console.log('Datasource initialized successfully');
}).catch((error => {
    console.log(`DataSource Error: ${error.message}`);
}));

const app = express();

app.use(
    bodyParser.json({ limit: '100mb' }),
    bodyParser.urlencoded({ limit: '100mb', extended: true }),
    express.json(),
    helmet(),
);

app.use(cors());

app.use('/api/v1', apiRouter);

app.get('/', (_, res) => {
    res.send(publicContent);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = error.statusCode || 500;

    console.log(`Erreur ${error.statusCode}: ${error.message}`, { url: req.url, method: req.method });

    return res.status(statusCode).json({
        success: false,
        message: error.message
    });
});