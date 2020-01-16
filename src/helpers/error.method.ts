import { NextFunction, Request, Response } from 'express';
import ErrorHandler from '../helpers/error';

const errorMiddleware = (error: ErrorHandler, request: Request, response: Response, next: NextFunction) => {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    response
      .status(status)
      .send({
        status,
        message,
      })
}

export default errorMiddleware;