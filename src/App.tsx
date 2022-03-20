import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAuth } from "context/auth-context";
import { AuthenticatedApp } from "authenticated-app";
import { UnauthenticatiedApp } from "unauthenticated-app";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatiedApp />}
    </div>
  );
}

export default App;
