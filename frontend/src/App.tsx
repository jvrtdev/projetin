import { useState } from "react"
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import { json } from "react-router-dom";

interface MyFormValues {
  login: string;
  password: string;
}

export default function App() {
  const [ data, setData ] = useState<JSON>()

  const initialValues: MyFormValues = {
    login: '',
    password: ''
  }

  const handleClickLogin = (values: any) => setData(values)

  axios.post('http://localhost:3000/user', JSON.stringify(data))
  .then((response) => console.log(response) )
  .catch((error) => console.error('Deu ruim menor', error))
  return (
    <div>
        <h1>Login</h1>
        <Formik
        initialValues={initialValues}
        onSubmit={handleClickLogin}
        >
          <Form>

            <Field name="login" placeholder="Login"></Field>
            <ErrorMessage 
            component="span"
            name="login"

            />
            <Field name="password" placeholder="Senha"></Field>
            <ErrorMessage 
            component="span"
            name="password"
            />

            <button type="submit" >Login</button>
          </Form>

        </Formik>
    </div>
  )
}


