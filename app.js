//const db = require('./model');
const express = require('express');
require('dotenv').config()
const app = express();
const bodyParser = require('body-parser');
//const {Sequelize} = require('sequelize');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const AppError = require("./utils/appError");
const adminRouter = require('./routes/admin.router');
const prestataireRouter = require("./routes/prestataire.router");
const vitrineRouter = require("./routes/vitrine.router");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



/** Swagger Initialization - START */
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        info: {
            title: "API REST",
            description: "API documentation",
            contact: {
                name: "Groupe 13",
            },
            servers: ["http://localhost:3000/"],
        },
    }),
    apis: ["app.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve,swaggerUi.setup(swaggerDocs));
app.use("/admin", adminRouter);
app.use("/prestataire", prestataireRouter);
app.use("/", vitrineRouter);

app.all("*", (req, res,next) => {
    throw new AppError(`Requested URL ${req.path} not found !`, 404)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port http://localhost:${process.env.PORT}`)
})
