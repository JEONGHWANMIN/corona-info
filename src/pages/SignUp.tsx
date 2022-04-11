import React, { useState } from 'react';
import Nav from '../components/Nav';
import { FormBox } from '../components/styles/FormBox.styeld';
import { MainPage } from '../components/styles/MainPage.styled';
import Title from '../components/Title';

type FormType = {
  email: string;
  name: string;
  password: string;
  confirm_password: string;
};

function SignUp() {
  const [form, setForm] = useState<FormType>({
    email: '',
    name: '',
    password: '',
    confirm_password: '',
  });
  const [validStatus, setValidStatus] = useState<string | null>(null);
  const { email, name, password, confirm_password } = form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);
    if (password !== confirm_password) {
      setValidStatus('error');
    } else if (password === confirm_password) {
      setValidStatus('success');
      // send To Backend FormData
      // response => 201 navigation home
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <Nav />
      <MainPage>
        <Title>CREATE ACCOUNT</Title>

        <FormBox>
          <form onSubmit={handleSubmit}>
            {/* <label>Email</label> */}
            <div>
              <input
                type='email'
                placeholder='Email'
                name={'email'}
                onChange={handleChange}
                value={email}
              />
            </div>
            <div>
              <input
                type='text'
                placeholder='Name'
                name={'name'}
                onChange={handleChange}
                value={name}
              />
            </div>
            {/* <label>Password</label> */}
            <div>
              <input
                type='password'
                placeholder='password'
                name={'password'}
                onChange={handleChange}
                value={password}
              />
            </div>
            {/* <label>Confirm Password</label> */}
            <div>
              <input
                type='password'
                placeholder='Confirm password'
                name={'confirm_password'}
                onChange={handleChange}
                value={confirm_password}
              />
            </div>
            <button type='submit'>Sign Up</button>
            {validStatus === 'error' ? (
              <p>* Plase Checking Input Password *</p>
            ) : null}
          </form>
        </FormBox>
      </MainPage>
    </div>
  );
}

export default SignUp;
