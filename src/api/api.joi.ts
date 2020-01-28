import { Joi, Segments } from 'celebrate';

export default {
    updateRespo: {[Segments.BODY]: Joi.object().keys({
            personid: Joi.string().required(),
            responsibility: Joi.string().required(),
            hierarchy: Joi.string().required() })},

    deleteRespo: {[Segments.BODY]: Joi.object().keys({
            personid: Joi.string().required() })}, 

    updateUnit: {[Segments.BODY]: Joi.object().keys({
            groupid: Joi.string().required(),
            akaUnit: Joi.string().required() })}
}