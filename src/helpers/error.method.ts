import { NextFunction, Request, Response } from 'express';
import AppError from '../helpers/error';

const errorMiddleware = (error: AppError, request: Request, response: Response, next: NextFunction) => {
    console.log("do i get here");
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