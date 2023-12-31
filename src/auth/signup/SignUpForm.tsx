import React from 'react';
import { Form, Formik } from 'formik';
import InputField from "@/src/components/InputField";
import * as Yup from "yup";
import { Button } from 'reshaped';
import { useRouter } from 'next/navigation';
const schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is a required field")
    .min(3, "Name must be at least 3 characters"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});
const SignUpForm = () => {
    const router = useRouter();
  React.useEffect(() => {
    const storedValue = localStorage.getItem('user');
    if (storedValue) {
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <Formik
        validationSchema={schema}
        initialValues={{ name: '', email: '', password: '' }}
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
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Enter name"
                  className="form-control inp_text"
                  id="name"
                  label="Full name" 
                  errorMessage={errors.name} 
                    error={(errors.name && touched.name) ? true : false}
                />
                
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
                <Button variant='solid' type="submit" className="w-full">Sign up</Button>
              </Form>
        )}
      </Formik>
  );
};
export default SignUpForm;