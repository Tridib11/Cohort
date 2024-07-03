import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Landing } from "./components/Landing";
import { lazy } from "react";
import Dashboard from React.lazy(()=>"./components/Dashboard");
import Landing from lazy(()=>"./components/Landing");
function LazyLoading() {
  return (
    <div>
      <BrowserRouter>
        <Navigator />

          <Routes>
            <Route path="/dashboard" element={
              <Dashboard/>
            } />
            <Route path="/" element={<Landing />} />
          </Routes>
  
      </BrowserRouter>
    </div>
  );
}

function Navigator() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
}

export default LazyLoading;