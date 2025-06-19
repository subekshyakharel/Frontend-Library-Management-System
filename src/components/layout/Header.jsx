import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { HiOutlineLogin } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDashboard } from "react-icons/ai";
import { IoExitSharp } from "react-icons/io5";
import { logoutUserApi } from "../../services/authApi";
import { setUser } from "../../features/user/userSlice";

const Header = () => {
  const {user} = useSelector((state)=>state.userInfo);
  const dispatch = useDispatch();
  const handleOnLogout = async()=>{
    //call api to logout from backend
    logoutUserApi()

    //logput from frontend
    sessionStorage.removeItem('accessJWT');
    localStorage.removeItem('refreshJWT');
    dispatch(setUser({}))
    
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
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              <IoMdHome /> Home
            </Link>
            {
              user?._id ? (
                <>
                <Link className="nav-link" to="/user">
              <AiFillDashboard /> Dashboard
            </Link>
            <Link className="nav-link" to="/logout" onClick={handleOnLogout}>
              <IoExitSharp /> LogOut
            </Link>
            </>
              ):(
                <>
              <Link className="nav-link" to="/signup">
              <FaUser /> SignUp
            </Link>
            <Link className="nav-link" to="/login">
              <HiOutlineLogin /> Login
            </Link>
            </>)
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
