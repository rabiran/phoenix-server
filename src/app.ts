import express from 'express';
import config from './config/config';
import * as bodyParser    from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import errorMiddleware from './helpers/error.method'
import apiRouter from './api/api.route';
import morgan from 'morgan';

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.setupMiddlewares();
    this.setupRoutes();
    this.errorHandler();
  }

  public start() {
    this.app.listen(config.port, () => {
      console.log((' Phoenix server is running at http://localhost:%d in %s mode'), config.port, config.nodeEnv);
      console.log(' Press CTRL-C to stop\n');
    });
  }

  private setupMiddlewares() {
    this.app.use(morgan('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(cookieParser());
    this.app.use(session( {
      secret: config.sessionSecret,
      resave: false,
      saveUninitialized: true
    }));
  }

  private setupRoutes() {
    this.app.use('/api', apiRouter);
  }

  private errorHandler(){
    this.app.use(errorMiddleware);
  }
}

const server = new Server();
server.start();