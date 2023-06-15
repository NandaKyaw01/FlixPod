import Joi from "joi";
import { useRef, useState } from "react";
import AuthService from "../../services/authService";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [validationError, setValidationError] = useState();
  const navigate = useNavigate();

  const validateUser = (req) => {
    const schema = Joi.object({
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

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const { error } = validateUser({ email: email, password: password });
    if (error) return setValidationError(error.details[0]?.message);

    AuthService.login(email, password).then(
      () => {
        navigate("/");
        window.location.reload();
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

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="login">
      <div className="title">Login</div>
      <form onSubmit={handleSubmit}>
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
          <div id="emailHelp" className="form-text text-danger">
            {validationError}
          </div>
        </div>
        <button type="submit" className="btn btn-primary loginbtn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
