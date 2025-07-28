import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "../../components/dashboardBox/Box";
import { Col, Container, Row } from "react-bootstrap";
import { getAllBorrowAction } from "../../features/borrow/borrowAction";
import { FaExclamationTriangle, FaBook, FaCheckCircle, FaLayerGroup } from "react-icons/fa";
import LineChart from "../../components/chart/LineChart";
import OverDueTable from "../../components/table/OverDueTable";
import BarChart from "../../components/chart/BarChart";

const AdminDashboard = ({ isAdmin }) => {
  const { publicBooks } = useSelector((state) => state.bookInfo);
  const { allBorrows } = useSelector((state) => state.borrowInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBorrowAction(isAdmin));
  }, [dispatch, isAdmin]);

  const returnedBooks = allBorrows?.filter((item) => item.isReturned) || [];
  const overdueBooks = allBorrows?.filter(
    (item) => !item.isReturned) || [];

  // ✅ Grouping by month
  const getMonthlyCounts = (data, dateField) => {
    const counts = Array(12).fill(0); // Jan to Dec
    data.forEach((item) => {
      const date = new Date(item[dateField]);
      if (!isNaN(date)) {
        const month = date.getMonth();
        counts[month]++;
      }
    });
    return counts;
  };

  const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const borrowedCounts = getMonthlyCounts(allBorrows || [], "createdAt");
  const returnedCounts = getMonthlyCounts(returnedBooks || [], "returnedDate");

  const input = [
    {
      title: "Total Borrowed Books",
      amount: allBorrows?.length || 0,
      Icon: FaBook,
      color: "#0d6efd",
    },
    {
      title: "Returned Books",
      amount: returnedBooks?.length || 0,
      Icon: FaCheckCircle,
      color: "#198754",
    },
    {
      title: "Total Books",
      amount: publicBooks?.length || 0,
      Icon: FaLayerGroup,
      color: "#6f42c1",
    },
    {
      title: "Overdue Books",
      amount: overdueBooks?.length || 0,
      Icon: FaExclamationTriangle,
      color: "#dc3545",
    },
  ];

  // Count how many times each book was borrowed
const borrowCountsArray = [];

allBorrows?.forEach((borrow) => {
  const title = borrow.bookTitle || "Unknown";

  const existing = borrowCountsArray.find((item) => item.title === title);
  if (existing) {
    existing.count += 1;
  } else {
    borrowCountsArray.push({ title, count: 1 });
  }
});

const top5 = borrowCountsArray.sort((a, b) => b.count - a.count).slice(0, 5);
const top5Labels = top5.map((item) => item.title);
const top5Data = top5.map((item) => item.count);


  return (
    <div>
    <Container>
      <div className="d-flex mt-4 justify-content-center flex-wrap gap-3">
        {input.map((item, i) => (
          <Box key={i} {...item} />
        ))}
      </div>

        {/* Line Chart and Overdue Table */}
        <LineChart
            text={"Monthly Borrowed vs Returned Books"}
            labels={labels}
            label1={"Borrowed"}
            label2={"Returned"}
            data1={borrowedCounts}
            data2={returnedCounts}
          />
       
    </Container>
      <div className="border mt-5 p-4">
             <h3>Overdue History</h3>
          <OverDueTable overdueBooks={overdueBooks} />
          </div>

{/* // most borrowed book  */}
       <div className="mt-5 border p-4">
        <h3>Top most borrowed book</h3>
        <BarChart  labels={top5Labels}
    data={top5Data}
    text={"Top 5 Most Borrowed Books"}/>
       </div>
    </div>
  );
};

export default AdminDashboard;
