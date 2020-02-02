import axios from 'axios';
import AppError from '../helpers/error';
import config from '../config/config';

export default class KartoffelAPI {

    static async findPerson(name: string) {
        try { 
            const person = await axios.get(`${config.kartoffelUrl}/api/persons/search?fullname=${name}`);
            return person.data;
        }
        catch(err) {
            throw new AppError(err.response.status, err.response.data.message)
        }
    }

    static async getAllPersons() {
        try { 
            const persons = await axios.get(`${config.kartoffelUrl}/api/persons/`);
            return persons.data;
        }
        catch(err) {
            throw new AppError(err.response.status, err.response.data.message)
        }
    }
    
    static async getGroup(groupid: string) {
        try { 
            const group = await axios.get(`${config.kartoffelUrl}/api/organizationgroups/${groupid}`);
            return group.data;
        }
        catch(err) {
            throw new AppError(err.response.status, err.response.data.message)
        }
    }

    static async getGroupByPath(path: string) {
        const encodedPath = encodeURIComponent(path); // for hebrew and stuff
        try { 
            const group = await axios.get(`${config.kartoffelUrl}/api/organizationgroups/path/${encodedPath}`);
            return group.data;
        }
        catch(err) {
            throw new AppError(err.response.status, err.response.data.message)
        }
    }

    static async updateResponsibility(personid: string, body) {
        try { 
            await axios.put(`${config.kartoffelUrl}/api/persons/${personid}`, body);
        }
        catch(err) {
            throw new AppError(err.response.status, err.response.data.message)
        }
    }

    static async updateAkaUnit(groupid: string, body) {
        try { 
            await axios.put(`${config.kartoffelUrl}/api/organizationGroups/${groupid}`, body);
        }
        catch(err) {
            throw new AppError(err.response.status, err.response.data.message)
        }
    }
}