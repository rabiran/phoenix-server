import { Request, Response, NextFunction } from 'express';
import send from '../helpers/send';
import axios from 'axios';
import AppError from '../helpers/error';
import config from '../config/config';

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
        const person = await axios.get(`${config.kartoffelUrl}/api/persons/search?fullname=${name}`);
        if(person.data.length === 0)
            throw new AppError(404, 'not found')
        send(res,200,person.data);
    }

    static async findByResponsibility(req: Request, res: Response, next: NextFunction) {
        const resp = req.params.resp;
        const persons = await axios.get(`${config.kartoffelUrl}/api/persons/`);
        const filtered = persons.data.filter((person)=> person.responsibility === resp);
        send(res,200,filtered);
    }

    static async getGroup(req: Request, res: Response) {
        
    }

    static async updateResponsibility(req: Request, res: Response) {
        //'5e241572686a840017ad762c';
        const personid = req.body.personid;
        //5e241572686a840017ad7552
        const groupid = req.body.groupid;
        const response = await axios.put(`${config.kartoffelUrl}/api/persons/${personid}`,{responsibility: "HR",responsibilityLocation:groupid});
        console.log(response.status);
        if(response.status === 400 || response.status === 404 )
            throw new AppError(response.status, 'Error updating person');
        send(res,200,"ok");
    }

    static async updateAkaUnit(req: Request, res: Response) {
        const groupid = req.body.groupid;
        const akaUnit = req.body.akaUnit;
        const response = await axios.put(`${config.kartoffelUrl}/api/organizationGroups/${groupid}`,{akaUnit: akaUnit});
        console.log(response.status);
        if(response.status === 400 || response.status === 404 )
            throw new AppError(response.status, 'Error updating group');
        send(res,200,"ok");
    }
}