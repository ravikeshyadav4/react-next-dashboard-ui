"use client"

import { Input } from "postcss";
import React, { ChangeEvent, useState } from "react";
import { Button, Container, TextField, View } from "reshaped";

interface ReshapedOnchange {
  name: string;
  value: string;
  event?: React.ChangeEvent<HTMLInputElement> | undefined;
}

const Page : React.FC = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
    
    const handleInputChange = (e: ReshapedOnchange) => {
      const { name, value } = e;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form Data Submitted:', formData);
    };

    return <Container>
        <View gap={3}>
          <form onSubmit={handleSubmit}>
          <TextField
              name="firstName"
              placeholder="Enter your firstName"
              onChange={handleInputChange}
              className="mt-2"
            />
            <TextField
              name="lastName"
              placeholder="Enter your lastName"
              onChange={handleInputChange}
              className="mt-2"
            />
            <TextField
              name="email"
              placeholder="Enter your email"
              onChange={handleInputChange}
              className="mt-2"
            />
            <TextField
              name="password"
              placeholder="Enter your password"
              onChange={handleInputChange}
              className="mt-2"
            />
            <br />
            <Button type="submit" className="mt-2">Submit</Button>
          </form>
        </View>
    </Container>
  }

  export default Page;