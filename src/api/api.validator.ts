import { Request, Response,NextFunction } from 'express';

export default class Validator {

    static async isAllowed(req: Request, res: Response, next: NextFunction) {
        console.log("validating...");
        if(req.session.user != "user") {
            res.status(401);
            res.send("Not allowed");
        }
        else 
            next();
    }

}