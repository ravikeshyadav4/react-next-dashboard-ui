"use client"

import { Button, FormControl, Reshaped, TextField, useFormControl } from "reshaped";
import { Form, Formik } from 'formik';
import "reshaped/themes/reshaped/theme.css";
import InputField from "@/src/components/InputField";
import SignUpForm from "@/src/auth/signup/SignUpForm";

const SignUp = () => {


    return <Reshaped theme="reshaped">
        <div className="flex items-center justify-center h-screen">
        <div className="bg-white shadow-md p-6 rounded-md w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          <SignUpForm />
          </div>
      </div>
    </Reshaped>
}

export default SignUp;