import React, { useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBorrowAction } from '../../features/borrow/borrowAction';
import Box from '../../components/dashboardBox/Box';
import LineChart from '../../components/chart/LineChart';
import {
  FaBook,
  FaCheckCircle,
  FaExclamationTriangle,
  FaLayerGroup,
} from 'react-icons/fa';


const UserDashboard = ({ isAdmin = false }) => {
  const dispatch = useDispatch();
  const { myBorrows } = useSelector((state) => state.borrowInfo);

  useEffect(() => {
    dispatch(getAllBorrowAction(isAdmin));
  }, [dispatch, isAdmin]);

  // ----- CATEGORIZE BORROWS -----
  const overdueUserBooks = myBorrows.filter(
    (item) => !item.isReturned 
  );
  const returnedBooks = myBorrows.filter((item) => item.isReturned);
  const reviewedBooks = myBorrows.filter((item) => item.reviewId);
  const upcomingDueBooks = myBorrows.filter(
    (item) => !item.isReturned && new Date(item.dueDate) >= new Date()
  );

  // ----- SUMMARY BOXES -----
  const boxes = [
    {
      title: 'Borrowed Books',
      amount: myBorrows.length || 0,
      Icon: FaBook,
      color: '#0d6efd',
    },
    {
      title: 'Returned Books',
      amount: returnedBooks.length || 0,
      Icon: FaCheckCircle,
      color: '#198754',
    },
    {
      title: 'Reviewed Books',
      amount: reviewedBooks.length || 0,
      Icon: FaLayerGroup,
      color: '#6f42c1',
    },
    {
      title: 'Overdue Books',
      amount: overdueUserBooks.length || 0,
      Icon: FaExclamationTriangle,
      color: '#dc3545',
    },
  ];

  // ----- CHART DATA -----
  const getMonthlyData = (items, key) => {
    const monthlyData = Array(12).fill(0);
    items.forEach((item) => {
      const date = new Date(item[key]);
      if (!isNaN(date)) {
        monthlyData[date.getMonth()]++;
      }
    });
    return monthlyData;
  };

  const borrowedMonthly = getMonthlyData(myBorrows, 'createdAt');
  const returnedMonthly = getMonthlyData(returnedBooks, 'returnedDate');

  const monthLabels = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  return (
    <Container className="mt-4">
      {/* BOXES */}
      <Row className="justify-content-center gap-3">
        {boxes.map((box, i) => (
          <Box key={i} {...box} />
        ))}
      </Row>

      {/* CHART */}
      <div className="my-5">
        <LineChart
          text="Your Reading Stats (Monthly)"
          labels={monthLabels}
          label1="Borrowed"
          data1={borrowedMonthly}
          label2="Returned"
          data2={returnedMonthly}
        />
      </div>

      {/* DUE DATE REMINDER */}
      <div className="my-5">
        <h4> Upcoming Due Dates</h4>
        {upcomingDueBooks.length === 0 ? (
          <p className="text-muted">No upcoming due dates.</p>
        ) : (
          <Table striped hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {upcomingDueBooks.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.bookTitle}</td>
                  <td>{new Date(item.dueDate).toLocaleDateString()}</td>
                  <td className="text-warning fw-bold">Pending</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </Container>
  );
};

export default UserDashboard;
