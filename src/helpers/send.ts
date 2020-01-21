import { NextFunction, Request, Response } from 'express';

const send = (response: Response, statusCode: number, json: any) => {
    const status: number = statusCode || 500;
    // const message: any = json || {message: 'Something went wrong'};
    response
      .status(status)
      .send(
        json
      )
}

export default send;