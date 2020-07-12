import React from "react";
import { useForm } from "react-hook-form";

import { Form } from "reactstrap";
import { Link } from "react-router-dom";
import InputComponent from "../components/Input/Input";

const RegisterPage = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    // dispatch(userLogin(data))
  };

  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-4 mt-5">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputComponent
                label="User Name"
                name="username"
                invalid={!!errors.username}
                innerRef={register({ required: true })}
              />

              <InputComponent
                label="Email"
                name="email"
                invalid={!!errors.email}
                innerRef={register({ required: true })}
              />
              <InputComponent
                label="Password"
                name="password"
                invalid={!!errors.password}
                type="password"
                innerRef={register({ required: true })}
              />
              <button
                type="submit"
                className="btn btn-primary btn-block py-2 my-3"
              >
                Sign in!
              </button>
              <Link to="/login">or sign in with Facebook</Link>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
