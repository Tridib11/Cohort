import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { lazy } from "react";
const Dashboard = lazy(()=>import("./components/Dashboard"));
const Landing = lazy(()=>import("./components/Landing"));
function LazyLoading() {
  return (
    <div>
      <BrowserRouter>
        <Navigator />
          <Routes>
            <Route path="/dashboard" element={ <Suspense fallback={'...loading'}><Dashboard/></Suspense>} />
            <Route path="/"element={ <Suspense fallback={'...loading'}><Landing/></Suspense>}/>
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