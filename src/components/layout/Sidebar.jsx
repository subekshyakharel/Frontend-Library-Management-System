import Stack from "react-bootstrap/Stack";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { user } = useSelector((state) => state.userInfo);
  const isAdmin = user.role === "admin";
  return (
    <Stack gap={3} className="">
      <div className="p-2">
        <Link to="/user" className="nav-link">
          Dashboard
        </Link>
      </div>

      <div className="p-2">
        <Link to="/user/my-borrow" className="nav-link">
          My Borrow List
        </Link>
      </div>
      <div className="p-2">
        <Link to="/user/profile" className="nav-link">
          Profile
        </Link>
      </div>

      {isAdmin && (
        <>
          <div className="p-2">
            <Link to="/user/book" className="nav-link">
              Book
            </Link>
          </div>
          <div className="p-2">
            <Link to="/user/review" className="nav-link">
              Reviews
            </Link>
          </div>
          <div className="p-2">
            <Link to="/user/all" className="nav-link">
              All Users
            </Link>
          </div>
          <div className="p-2">
            <Link to="/user/borrow-history" className="nav-link">
              All Borrow History
            </Link>
          </div>
        </>
      )}
    </Stack>
  );
};
export default Sidebar;
