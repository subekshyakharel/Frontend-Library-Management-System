import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { HiOutlineLogin } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDashboard } from "react-icons/ai";
import { IoExitSharp } from "react-icons/io5";
import { logoutUserApi } from "../../services/authApi";
import { setUser } from "../../features/user/userSlice";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { useRef } from "react";
import { BsCart4 } from "react-icons/bs";
import { setAllBorrows, setMyBorrows } from "../../features/borrow/borrowSlice";

const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const { cart } = useSelector((state) => state.cartInfo);
  const dispatch = useDispatch();
  const searchRef = useRef("")
  const navigate = useNavigate();
  const handleOnLogout = async () => {
    //call api to logout from backend
    logoutUserApi();

    //logput from frontend
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    dispatch(setUser({}));
     dispatch(setMyBorrows([]))
    dispatch(setAllBorrows([]))
   
  };

  const handleOnSearch =(e)=>{
    e.preventDefault()
    const str =searchRef.current.value
 navigate("/search?query=" + str)
    console.log(searchRef.current.value)
  }
  return (
    <Navbar expand="md" variant="dark" className="bg-dark">
      <Container>
        <Navbar.Brand href="/">
          <div>
            <img src={logo} width="100px" alt="" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="w-100 d-flex justify-content-between flex-column flex-md-row">
           <div></div>
            <Form style={{ width: "40%" }} onSubmit={handleOnSearch}>
              <InputGroup className="">
                <Form.Control
                  placeholder="Search book by name"
                  aria-label="Search book by name"
                  aria-describedby="basic-addon2"
                  ref={searchRef}
                  name="s"

                />
                <InputGroup.Text id="basic-addon2" as={"button"}>
                  <FaSearch />
                </InputGroup.Text>
              </InputGroup>
            </Form>

            <Nav className="">
              <Link className="nav-link" to="/">
                <IoMdHome /> Home
              </Link>
              <Link className="nav-link" to="/all-books">
                <SiBookstack /> Books
              </Link>
              {user?._id ? (
                <>
                  <Link className="nav-link" to="/user">
                    <AiFillDashboard /> Dashboard
                  </Link>
                  <Link
                    className="nav-link"
                    to="/logout"
                    onClick={handleOnLogout}
                  >
                    <IoExitSharp /> LogOut
                  </Link>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/signup">
                    <FaUser /> SignUp
                  </Link>
                  <Link className="nav-link" to="/login">
                    <HiOutlineLogin /> Login
                  </Link>
                </>
              )}
              <Link to="/cart" className="nav-link position-relative d-flex">
              <div className="cart-count position-absolute">{cart.length}</div>
              <BsCart4 className="fs-3" />
              </Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
