import React from 'react'
import { useSelector } from 'react-redux'
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

const DashboardPage = () => {
  const {user} = useSelector((state)=> state.userInfo)
  const isAdmin =  user.role==="admin";

  return (
    <div>
    {
      isAdmin? <AdminDashboard isAdmin={isAdmin}/> : <UserDashboard/>
    }
    </div>
  )
}

export default DashboardPage