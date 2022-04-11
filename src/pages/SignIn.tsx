import React, { useState } from 'react';
import Nav from '../components/Nav';
import { FormBox } from '../components/styles/FormBox.styeld';
import { MainPage } from '../components/styles/MainPage.styled';
import Title from '../components/Title';

type FormType = {
  email: string;
  password: string;
};
function SignIn() {
  const [form, setForm] = useState<FormType>({
    email: '',
    password: '',
  });
  const [validStatus, setValidStatus] = useState<string | null>(null);
  const { email, password } = form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <Title>Sign In</Title>

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
            <button type='submit'>LogIn</button>
            {/* {validStatus === 'error' ? (
              <p>* Plase Checking Input Password *</p>
            ) : null} */}
          </form>
        </FormBox>
      </MainPage>
    </div>
  );
}

export default SignIn;
