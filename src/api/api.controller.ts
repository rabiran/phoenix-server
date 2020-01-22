import { Request, Response, NextFunction } from 'express';
import send from '../helpers/send';
import axios from 'axios';
import kartoffelAPI from '../helpers/kartoffel.api';
import AppError from '../helpers/error';
import config from '../config/config';
import KartoffelAPI from '../helpers/kartoffel.api';

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

    static async findPerson(req: Request, res: Response, next: NextFunction) {
        const name = req.params.name;
        const person = await kartoffelAPI.findPerson(name);
        if(person.length === 0)
            throw new AppError(404, 'not found')
        send(res,200,person);
    }

    static async findByResponsibility(req: Request, res: Response, next: NextFunction) {
        const resp = req.params.resp;
        const persons = await KartoffelAPI.getAllPersons();
        const filtered = persons.filter((person)=> person.responsibility === resp);
        send(res,200,filtered);
    }

    static async getGroup(req: Request, res: Response) {
        
    }

    static async updateResponsibility(req: Request, res: Response) {
        //'5e241572686a840017ad762c';
        const personid = req.body.personid;
        //5e241572686a840017ad7552
        const groupid = req.body.groupid;
        const body = {responsibility: "HR",responsibilityLocation:groupid};
        await kartoffelAPI.updateResponsibility(personid,body);
        send(res,200,"ok");
    }

    static async updateAkaUnit(req: Request, res: Response) {
        const groupid = req.body.groupid;
        const akaUnit = req.body.akaUnit;
        const body = {akaUnit: akaUnit};
        await kartoffelAPI.updateAkaUnit(groupid,body);
        send(res,200,"ok");
    }
}