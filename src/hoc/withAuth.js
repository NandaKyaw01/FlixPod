import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  const AuthHOC = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
      // Check if the user is authenticated
      const current = JSON.parse(localStorage.getItem("user"));
      if (!current) navigate("/login"); // Implement your logic to check authentication, e.g., by validating the JWT token
    }, []);

    return <WrappedComponent {...props} />;
  };

  return AuthHOC;
};

export default withAuth;
