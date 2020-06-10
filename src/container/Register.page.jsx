import React from 'react';
import { useForm } from 'react-hook-form';

import { Form, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
const RegisterPage = () => {
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    // dispatch(userLogin(data))
  };

  return (
    <section>
      <div className='container text-center'>
        <div className='row justify-content-center'>
          <div className='col-md-5 col-lg-4'>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <label className='sr-only'>User Name</label>
              <Input
                className='form-control my-3 bg-light'
                name='username'
                innerRef={register({ required: true })}
                type='text'
                placeholder='User Name'
              />

              <label className='sr-only'>Email</label>
              <Input
                className='form-control my-3 bg-light'
                name='identifier'
                innerRef={register({ required: true })}
                type='email'
                placeholder='Email'
              />
              <label className='sr-only'>Password</label>
              <Input
                className='form-control my-3 bg-light'
                type='password'
                name='password'
                innerRef={register({ required: true })}
                placeholder='Password'
              />
              <button
                type='submit'
                className='btn btn-primary btn-block py-2 my-3'>
                Sign in!
              </button>
              <Link to='/register'>or sign in with Facebook</Link>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
