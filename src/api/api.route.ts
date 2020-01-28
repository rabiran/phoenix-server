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

api.get('/getgroup/:groupid', wa(controller.getGroup))

api.get('/find/:name', wa(controller.findPerson))

api.get('/findbyrespo/:resp', wa(controller.findByResponsibility))

api.put('/updaterespo', validation(dataValidation.updateRespo), wa(controller.updateResponsibility))

api.put('/updateunit', validation(dataValidation.updateUnit), wa(controller.updateAkaUnit))

api.delete('/deleterespo', validation(dataValidation.deleteRespo), wa(controller.deleteResponsibility))

export default api;