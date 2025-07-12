import React from 'react'
import BorrowTable from '../../components/table/BorrowTable'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const Borrow = () => {
  const { user } = useSelector((state) => state.userInfo);
  const location = useLocation();
  

  const isHistoryPage = location.pathname.includes("borrow-history"); // "/user/borrow-history"
  

  const isAdmin = user.role === "admin" && isHistoryPage;
  return (
    <div className='p-3'>
      <h3>{isHistoryPage ? "All Borrow History" : "My Borrow List"}</h3>
      <hr />
      <div className="all-borrow-table">
        <BorrowTable isAdmin={isAdmin} />
      </div>
    </div>
  )
}

export default Borrow;
