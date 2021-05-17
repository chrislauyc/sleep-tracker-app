import * as yup from 'yup';
export const schema = yup.object().shape({
    first_name:yup.string().required('First name is required'),
    last_name:yup.string().required('Last name is required'),
    email:yup.string().email('Email address is invalid').required('Email address is required'),
    password:yup.string().min(6,'Password must have at leat 6 characters'),
    birthdate:yup.date().required('Please enter your birthdate'),
    bedtime:yup.string().required('Please enter your prefered bedtime'),
    hoursOfSleep:yup.number().required('Please enter your prefered hours of sleep'),
    terms:yup.boolean().oneOf([true],'Must accept terms of service to continue')
});