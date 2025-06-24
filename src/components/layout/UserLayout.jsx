import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import AuthRoute from "../auth/AuthRoute";

const UserLayout = () => {
  return (
    <AuthRoute>
      {/* navbar  */}
      <Header />

      <div className="d-flex">
        <div className="bg-dark text-white p-3" style={{ minWidth: "200px" }}>
          <div>
            <div>Welcome Back</div>
            <h4>Subekshya kharel</h4>
          </div>
          <hr />
          <Sidebar />
        </div>

        {/* main  */}
        <main className="user-main">
          <Outlet />
        </main>
      </div>

      {/* footer  */}
      <Footer />
    </AuthRoute>
  );
};

export default UserLayout;
