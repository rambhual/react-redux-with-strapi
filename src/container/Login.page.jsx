import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import { Form, Input } from 'reactstrap';
import { isAuthenticated } from '../utils/auth';
// import actions
import { userLogin } from '../store/actions/user.actions';

const LoginPage = (props) => {
  const { userInfo } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      identifier: 'anita',
      password: 'anita@1234',
    },
  });
  const onSubmit = (data) => {
    dispatch(userLogin(data));
    history.push('/app/dashboard');
  };

  useEffect(() => {
    if (isAuthenticated(localStorage.getItem('token'))) {
      history.push('/app/dashboard');
    }
  }, [history, userInfo]);

  return (
    <section>
      <div className='container text-center'>
        <div className='row justify-content-center'>
          <div className='col-md-5 col-lg-4'>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <label className='sr-only' htmlFor='input1-signin-01'>
                Email
              </label>
              <Input
                className='form-control my-3 bg-light'
                name='identifier'
                innerRef={register({ required: true })}
                type='text'
                invalid={!!errors.identifier}
                placeholder='Email'
              />
              <label className='sr-only' htmlFor='input2-signin-01'>
                Password
              </label>
              <Input
                className='form-control my-3 bg-light'
                type='password'
                name='password'
                invalid={!!errors.password}
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

export default LoginPage;
