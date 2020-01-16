import { Request, Response } from 'express';
import send from '../helpers/send';

export default class Controller {

    static async test(req: Request, res: Response) {
        console.log("setting user..");
        req.session.user = "user";
        send(res,200,"ok");
    }

    static async getPeopleByType(req: Request, res: Response) {
        console.log("getting people..");
        send(res,200,{haha: "test"});
    }

    static async findPerson(req: Request, res: Response) {
        send(res,200,{id: '324234', name:"sajdajsd"});
    }
}