import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import emptyCartpng from "../../assets/emptycart.png";
import { Link, useNavigate } from "react-router-dom";
import { emptyCart, removeBookFromCart, setRecentBorrow } from "../../features/cart/cartSlice";
import { postBorrowApi } from "../../features/cart/cartApi";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart } = useSelector((state) => state.cartInfo);
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleOnBookRemove = (_id) => {
    dispatch(removeBookFromCart(_id));
  };

  const handleOnBurrow =async()=>{
    if(confirm("Are you sure you want to burrow?")){
        //TODO
        //1. have a API to send user and the cart book list to create new borrowing transaction in the database
        const borrowArg = cart.map(({_id, title, imgUrl, slug})=>{
          return {bookId: _id, bookTitle: title, thumbnail: imgUrl, bookSlug: slug}
        } )

        const pending =  postBorrowApi(borrowArg);
        toast.promise(pending, {
          pending:"Please wait..."
        })

        const {status, message, payload} = await pending;
        // toast[status](message)
        //1. store the payload fro thankyou page
        dispatch(setRecentBorrow(payload))
        //2. clear cart state
        dispatch(emptyCart())
        //3. send user to thank you page
        navigate("/user/thank-you")
    }
  }
  return (
    <Container>
      <h2 className="py-3">My Cart List</h2>
<hr />
      <div>
        <Table>
          <tbody>
            {cart.map((book) => (
              <tr key={book._id}>
                <td>
                  <img
                    src={
                      import.meta.env.VITE_BASE_API_URL + book.imgUrl.slice(6)
                    }
                    width="60px"
                    alt=""
                  />
                </td>
                <td>{book.title}</td>
                <td>Returning: 2025-09-10</td>
                <td>
                  <Button
                    onClick={() => handleOnBookRemove(book._id)}
                    variant="link"
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {cart.length > 0 ? (
          <div className="text-end">
            {user._id ? (
                <Button variant="dark" onClick={handleOnBurrow}>
                Proceed to burrow
              </Button>
                
             
            ) : (
              <Link to="/login" state={{from:"/cart"}}>
                 <Button variant="dark">
                Login to burrow 
              </Button>
                </Link>
            )}
          </div>
        ) : (
          <div>
            <div className="d-flex  justify-content-center">
              <img src={emptyCartpng} width={"300px"} alt="no items in cart" />
            </div>
            <h4 className="text-center">Your cart is empty!</h4>

            <div className="d-flex  justify-content-center mt-4">
              <Link to="/all-books">
                <Button variant="dark">Keep Browsing </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Cart;
