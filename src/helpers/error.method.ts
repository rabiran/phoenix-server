import { NextFunction, Request, Response } from 'express';
import AppError from '../helpers/error';

const errorMiddleware = (error: any, request: Request, response: Response, next: NextFunction) => {
    const status = error.joi ? 400 : error.status || 500;
    const message = error.message || 'Something went wrong';
    response
      .status(status)
      .send({
        status,
        message,
      })
}

export default errorMiddleware;