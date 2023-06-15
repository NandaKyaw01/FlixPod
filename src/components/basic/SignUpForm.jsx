import Joi from "joi";
import AuthService from "../../services/authService";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [validationError, setValidationError] = useState();
  const navigate = useNavigate();

  const validateUser = (req) => {
    const schema = Joi.object({
      username: Joi.string().required(),
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required(),
      password: Joi.string().min(3).max(30).required(),
    });

    return schema.validate(req);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const { error } = validateUser({
      username: username,
      email: email,
      password: password,
    });
    if (error) return setValidationError(error.details[0]?.message);

    AuthService.register(username, email, password).then(
      (res) => {
        console.log(res);
        navigate("/login");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.error) ||
          error.message ||
          error.toString();
        setValidationError(resMessage);
      }
    );

    usernameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <div className="login">
      <div className="title">SignUp</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input
            type="text"
            ref={usernameRef}
            className="form-control"
            id="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            ref={emailRef}
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            ref={passwordRef}
            className="form-control"
            id="password"
          />
        </div>
        <div className="mb-3">
          <div id="error" className="form-text text-danger">
            {validationError}
          </div>
        </div>
        <button type="submit" className="btn btn-primary loginbtn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
