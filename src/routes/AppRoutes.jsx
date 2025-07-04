import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  DashboardPage,
  DefaultLayout,
  SignupPage,
  SigninPage,
  ForgetPassword,
  UserLayout,
  Book,
  BookLandingPage, 
  EditBookPage, 
  NewBookPage,
  ReviewsPage, 
  UserPage, 
  Borrow, 
  Profile,
  VerifyUser
} from "../pages";


const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Public page  */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignupPage />} /> 
          <Route path="activate-user" element={<VerifyUser />} /> 
          <Route path="login" element={<SigninPage />} />
          <Route path="forget-password" element={<ForgetPassword />} />
        </Route>

        {/* private pages  */}
        <Route path="/user" element={<UserLayout />}>
        <Route index element={<DashboardPage/>}/>
        <Route path="book" element={<Book/>}/>
        <Route path="new-book" element={<NewBookPage/>}/>
        <Route path="review" element={<ReviewsPage/>}/>
        <Route path="all" element={<UserPage/>}/>
        <Route path="borrow-history" element={<Borrow/>}/>
        <Route path="profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
