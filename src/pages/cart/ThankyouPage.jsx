import { useEffect } from "react";
import { Alert, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  Link, useNavigate } from "react-router-dom";
import { emptyRecentBorrow } from "../../features/cart/cartSlice";

const ThankyouPage = () => {
  const { recentBorrow } = useSelector((state) => state.cartInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(()=>{
    //logic
    return ()=>{
        //will only execute on unmount
        dispatch(emptyRecentBorrow())
    }
  },[dispatch])

  return (
    <Container>
        <Alert variant="success my-3">
            <h2 className="text-center">Thank you!</h2>
        </Alert>

        <div className="text-center">
            <Link to="/user/my-borrow">Go to your account to view your book list</Link>
        </div>
      

      <div className=" mt-3">
        <Table className="border">
          <tbody>
            { recentBorrow.length > 0 &&    
            recentBorrow.map((borrow) => (
              <tr key={borrow._id}>
                <td>
                  <img
                    src={
                      import.meta.env.VITE_BASE_API_URL + borrow.thumbnail.slice(6)
                    }
                    width="60px"
                    alt=""
                  />
                </td>
                <td>{borrow.title}</td>
                <td>ID: {borrow._id}</td>
                <td>Return Due: {borrow.dueDate.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default ThankyouPage;
