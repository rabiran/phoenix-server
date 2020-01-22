import { Request, Response,NextFunction } from 'express';
import AppError from '../helpers/error';


export default class Validator {

    static async isAllowed(req: Request, res: Response, next: NextFunction) {
        console.log("validating...");
        if(req.session.user != "user") {
            throw new AppError(401, 'not allowed')
        }
        else 
            next();
    }

    // static async isAllowed(req: Request, res: Response, next: NextFunction) {
    //     celebrate({[Segments.QUERY]: Joi.object().keys({ name: Joi.string().required() })});
    // }
}

// celebrate({[Segments.QUERY]: Joi.object().keys({ name: Joi.string().required() })})