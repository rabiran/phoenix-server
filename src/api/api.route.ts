import { Router } from 'express';
 import { celebrate as validation }  from 'celebrate';
import controller from './api.controller';
import validator from './api.validator';
import dataValidation from './api.joi';
import wa from '../helpers/wrapAsync';


const api = Router();

// test
api.get('/test', wa(controller.test))

api.get('/', wa(validator.isAllowed), wa(controller.getPeopleByType))

// -------------

api.get('/find/:name', wa(controller.findPerson))

api.get('/findbyrespo/:resp', wa(controller.findByResponsibility))

api.post('/updaterespo', validation(dataValidation.updaterespo), wa(controller.updateResponsibility))

api.put('/updateunit', validation(dataValidation.updateUnit), wa(controller.updateAkaUnit))

export default api;