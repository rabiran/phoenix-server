import { Request, Response,NextFunction } from 'express';
import AppError from '../helpers/error';

export default class Validator {

    static async isAllowed(req: Request, res: Response, next: NextFunction) {
        if(req.session.user != "user") {
            throw new AppError(401, 'not allowed')
        }
        else 
            next();
    }
}
