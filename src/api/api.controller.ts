import { Request, Response } from 'express';

export default class Controller {

    static async test(req: Request, res: Response) {
        console.log("setting user..");
        req.session.user = "user";
        res.status(200);
        res.send("ok");
    }

    static async getPeopleByType(req: Request, res: Response) {
        console.log("getting people..");
        res.status(200);
        res.json({haha:"test"});
    }

    static async findPerson(req: Request, res: Response) {
        res.status(200);
        res.json({id: '324234',name:"sajdajsd"});
    }
}