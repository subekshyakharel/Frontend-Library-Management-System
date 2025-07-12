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
  VerifyUser,
} from "../pages";
import AllBook from "../pages/books/AllBook";
import Search from "../pages/books/Search";
import Cart from "../pages/cart/Cart";
import ThankyouPage from "../pages/cart/ThankyouPage";
import { useSelector } from "react-redux";

const noAccess = <h1>You do not have acces to this page</h1>
const AppRoutes = () => {
  const {user}= useSelector((state)=>state.userInfo)
  const isAdmin = user.role === "admin";
  return (
    <>
      <Routes>
        {/* Public page  */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/book/:slug" element={<BookLandingPage />} />
          <Route path="all-books" element={<AllBook />} />
          <Route path="search" element={<Search />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="activate-user" element={<VerifyUser />} />
          <Route path="login" element={<SigninPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="forget-password" element={<ForgetPassword />} />
        </Route>

        {/* private pages  */}
        <Route path="/user" element={<UserLayout />}>
          {/* all users  */}
          <Route index element={<DashboardPage />} />
          <Route path="my-borrow" element={<Borrow />} />
          <Route path="profile" element={<Profile />} />
          <Route path="thank-you" element={<ThankyouPage />} />

          {/* only admin access pages  */}
          <Route path="book" element={isAdmin? <Book /> : noAccess} />
          <Route path="new-book" element={isAdmin? <NewBookPage />: noAccess} />
          <Route path="edit-book/:_id" element={isAdmin? <EditBookPage />: noAccess} />
          <Route path="review" element={isAdmin? <ReviewsPage />: noAccess} />
          <Route path="all" element={isAdmin? <UserPage />: noAccess} />
          <Route path="borrow-history" element={isAdmin? <Borrow />: noAccess} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
