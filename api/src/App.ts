import * as express from 'express';
import { sampleController } from './controllers/dummy/sampleController';

var createError = require("http-errors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

class App {

    public express: express.Express;

    constructor () {
        this.express = express();

        // view engine setup
        this.express.set("views", path.join(__dirname, "../views"));
        this.express.set("view engine", "jade");
        
        // Mount all routes
        this.mountRoutes();
    }

    private mountRoutes (): void {
        const router = express.Router();

        // Allow external use. Disable if you're going to use this api for the same domain
        router.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        router.use(cors());
        router.use(logger("dev"));
        router.use(express.json());
        router.use(express.urlencoded({ extended: false }));
        router.use(cookieParser());

        /**
         * START CUSTOM ROUTES
         */
        router.get('/', sampleController);
        /**
         * END CUSTOM ROUTES
         */

        // catch 404 and forward to error handler
        router.use((req, res, next) => {
            next(createError(404));
        });

        // error handler
        router.use((err, req, res, next) => {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get("env") === "development" ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.render("error");
        });

        this.express.use('/', router);
    }
        
}

export default new App().express;
