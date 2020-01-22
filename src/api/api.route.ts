import { Router } from 'express';
import controller from './api.controller';
import validator from './api.validator';
// import ch from '../helpers/controller.helper';
import wa from '../helpers/wrapAsync';
// import { celebrate, Joi, errors, Segments } from 'celebrate';

const api = Router();

// test
api.get('/test', wa(controller.test))

api.get('/', wa(validator.isAllowed), wa(controller.getPeopleByType))

// -------------

api.get('/find/:name', wa(controller.findPerson))

api.get('/findbyrespo/:resp', wa(controller.findByResponsibility))

api.post('/updaterespo', wa(controller.updateResponsibility))

api.put('/updateunit', wa(controller.updateAkaUnit))

export default api;