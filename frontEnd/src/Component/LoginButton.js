import React from 'react';

function LoginButton() {
  const handleLogin = () => {
    // Save the current location
    const redirectUri = window.location.pathname;
    localStorage.setItem("postLoginRedirect", redirectUri);

    // Redirect to Spring Boot's OAuth2 login
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <button onClick={handleLogin}>Login with Google</button>
  );
}

export default LoginButton;
