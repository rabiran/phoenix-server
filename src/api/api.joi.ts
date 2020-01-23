import { Joi, Segments } from 'celebrate';

export default {
    updaterespo: {[Segments.BODY]: Joi.object().keys({
            personid: Joi.string().required(),
            groupid: Joi.string().required() })},
    updateUnit: {[Segments.BODY]: Joi.object().keys({
            groupid: Joi.string().required(),
            akaUnit: Joi.string().required() })}
}