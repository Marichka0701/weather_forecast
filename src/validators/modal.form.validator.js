import Joi from 'joi';

const modalFormValidator = Joi.object({
    city: Joi.string().required().messages({
        'string.empty': 'Поле \'City\' є обов\'язковим',
    }),

    startDate: Joi.string().required().messages({
    'string.empty': 'Поле \'Start date\' є обов\'язковим',
    }),
    endDate: Joi.string().required().messages({
        'string.empty': 'Поле \'End date\' є обов\'язковим',
    })
})

export {
    modalFormValidator,
}