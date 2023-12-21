import React from 'react';
import { Form, Formik } from 'formik';
import InputField from "@/src/components/InputField";
import * as Yup from "yup";
import { Button } from 'reshaped';
import { useRouter } from 'next/navigation';

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .min(3,"Username is not correct"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});


const LoginForm = () => {
  const router = useRouter();
  React.useEffect(() => {
    localStorage.removeItem('user');
  }, [router]);

  return (
    <Formik
        validationSchema={schema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          localStorage.setItem('user', JSON.stringify(values));
          router.push('/dashboard');
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <InputField
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter name"
                  className="form-control inp_text"
                  id="email"
                  label="Email" 
                    errorMessage={errors.email} 
                    error={(errors.email && touched.email) ? true : false}
                />
                
                <InputField
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                  label="Password" 
                    errorMessage={errors.password} error={(errors.password && touched.password) ? true : false}
                />
                <Button variant='solid' type="submit" className="w-full">Login</Button>
              </Form>
        )}
      </Formik>
  );
};
export default LoginForm;