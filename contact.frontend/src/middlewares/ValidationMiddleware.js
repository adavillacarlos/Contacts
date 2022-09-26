import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
    username: yup.string().required(), 
    email: yup.string().email().required(),
    password: yup.string().required(),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null])
}); 


export const signInSchema = yup.object().shape({
    username: yup.string().required(), 
    password: yup.string().required(),
}); 

export const contactSchema = yup.object().shape({
    firstName: yup.string().required(), 
    lastName: yup.string().required(),
    billingAddress: yup.string().required(),
    deliveryAddress: yup.string().required(),
}); 