import React from "react";
import { Link, Outlet, ReactLocation, Router } from "@tanstack/react-location";

import "./App.css";

// Set up a ReactLocation instance
const location = new ReactLocation();

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
        <Link to="/posts">Post</Link>
      </header>
    </div>
  );
}

function Posts() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Posts</h1>
        <Link to="/" activeOptions={{ exact: true }}>
          Home
        </Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router
      location={location}
      routes={[
        { path: "/", element: <Home /> },
        {
          path: "posts",
          element: <Posts />,
        },
      ]}
    >
      <Outlet />
    </Router>
  );
}

export default App;
