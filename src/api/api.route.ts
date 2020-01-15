import { Router } from 'express';
import controller from './api.controller';
import validator from './api.validator';

const api = Router();

api.get('/test', controller.test)

api.get('/', validator.isAllowed, controller.getPeopleByType)

api.get('/find', validator.isAllowed, controller.findPerson)

export default api;