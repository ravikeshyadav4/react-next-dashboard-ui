"use client"

import { Button, FormControl, Reshaped, TextField, useFormControl } from "reshaped";
import { Form, Formik } from 'formik';
import "reshaped/themes/reshaped/theme.css";
import InputField from "@/src/components/InputField";
import SignUpForm from "@/src/auth/signup/SignUpForm";
import LoginForm from "@/src/auth/login/LoginForm";

const Login = () => {
    

    return <Reshaped theme="reshaped">
        <div className="flex items-center justify-center h-screen">
        <div className="bg-white shadow-md p-6 rounded-md w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <LoginForm />
          </div>
      </div>
    </Reshaped>
}

export default Login;