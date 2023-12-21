"use client"

import { Button } from "reshaped";
import { Form, Formik } from 'formik';
import "reshaped/themes/reshaped/theme.css";
import InputField from "@/src/components/InputField";

const SignUpForm = () => {


    return <Formik
       initialValues={{ name: '', email: '', password: '' }}
       validate={values => {
        console.log("value", values);
        
         const errors = {
            "name": '',
            "email": '',
            "password": '',
         };
         if (!values.name) {
            errors.name = 'Name is required';
          } 
         if (!values.password) {
            errors.password = 'Password is required';
          } 
         if (!values.email) {
           errors.email = 'Email is required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        console.log("submit value", values);
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >{({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
            <InputField name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} label="Full name" 
                errorMessage={errors.name} placeholder="Name" error={(errors.name && touched.name) ? true : false}
            />
            <InputField type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} label="Email" 
                errorMessage={errors.email} placeholder="Email" error={(errors.email && touched.email) ? true : false}
            />
            <InputField type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} label="Password" 
                errorMessage={errors.password} error={(errors.password && touched.password) ? true : false} placeholder="Password"
            />
            <Button type="submit" disabled={isSubmitting} className="w-full">
                Submit
            </Button>
        </Form>
        )}
    </Formik>
}

export default SignUpForm;