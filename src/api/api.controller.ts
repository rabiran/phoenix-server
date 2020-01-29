import { Request, Response, NextFunction } from 'express';
import send from '../helpers/send';
import kartoffelAPI from '../helpers/kartoffel.api';
import AppError from '../helpers/error';
import config from '../config/config';
import utils from '../helpers/controller.utils';

export default class Controller {

    static async auth(req: Request, res: Response) {
        console.log("Type set");
        req.session.type = {value: "HR", label: "שליש"};
        send(res,200,req.session.type);
    }
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
        const persons = await kartoffelAPI.getAllPersons();
        const filtered = persons.filter((person)=> person.responsibility === resp);
        const tableData = await Promise.all(filtered.map(utils.materialTableData));
        send(res,200,tableData);
    }

    static async getGroup(req: Request, res: Response) {
        //5e241572686a840017ad7552
        const groupid = req.params.groupid;
        console.log(groupid);
        const group = await kartoffelAPI.getGroup(groupid);
        if(group.length === 0)
            throw new AppError(404, 'not found')
        send(res,200,group);
    }

    static async updateResponsibility(req: Request, res: Response) {
        //'5e241572686a840017ad762c';
        //5e241572686a840017ad7552
        const personid = req.body.personid;
        const hierarchy = req.body.hierarchy;
        const responsibility = req.body.responsibility;
        const group = await kartoffelAPI.getGroupByPath(hierarchy);
        const groupid = group.id;
        const body = {responsibility: responsibility, responsibilityLocation: groupid};
        await kartoffelAPI.updateResponsibility(personid, body);
        send(res,200,"ok");
    }
    
    static async updateAkaUnit(req: Request, res: Response) {
        const hierarchy = req.body.hierarchy;
        const group = await kartoffelAPI.getGroupByPath(hierarchy);
        const groupid = group.id;
        const akaUnit = req.body.akaUnit;
        const body = {akaUnit: akaUnit};
        await kartoffelAPI.updateAkaUnit(groupid, body);
        send(res,200,"ok");
    }

    static async deleteResponsibility(req: Request, res: Response) {
        const personid = req.params.personid;
        const body = {responsibility: 'none', responsibilityLocation: null}
        await kartoffelAPI.updateResponsibility(personid, body);
        send(res,200,"ok");
    }
}