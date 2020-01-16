import { Request, Response,NextFunction } from 'express';
import ErrorHandler from '../helpers/error';

export default class Validator {

    static async isAllowed(req: Request, res: Response, next: NextFunction) {
        console.log("validating...");
        try {
            if(req.session.user != "user") {
                throw new ErrorHandler(401, 'not allowed')
            }
            else 
                next();
        }
        catch(error) {
            next(error)
        }
    }

}