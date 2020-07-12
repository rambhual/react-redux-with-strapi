import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import { Form } from "reactstrap";
import { isAuthenticated } from "../utils/auth";
// import actions
import { userLogin } from "../store/actions/user";
import InputComponent from "../components/Input/Input";

const LoginPage = () => {
  const { userInfo } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      identifier: "anita",
      password: "anita@1234",
    },
  });
  const onSubmit = (data) => {
    dispatch(userLogin(data));
    history.push("/app/dashboard");
  };

  useEffect(() => {
    if (isAuthenticated(localStorage.getItem("token"))) {
      history.push("/app/dashboard");
    }
  }, [history, userInfo]);

  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-4 mt-5">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputComponent
              label="Email"
              name="identifier"
              invalid={!!errors.identifier}
              innerRef={register({ required: true })}
            />
            <InputComponent
              label="Password"
              name="password"
              type="password"
              innerRef={register({ required: true })}
              invalid={!!errors.password}
            />
            <button
              type="submit"
              className="btn btn-primary btn-block py-2 my-3"
            >
              Sign in!
            </button>
            <Link to="/register">New user?</Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
