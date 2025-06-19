import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

 const Sidebar= ()=> {
  return (
    <Stack gap={3}>
      <div className="p-2">
        <Link to='/user' className='nav-link'>Dashboard</Link>
      </div>
      <div className="p-2">
        <Link to='/user/book' className='nav-link'>Book</Link>
      </div>
      <div className="p-2">
        <Link to='/user/review' className='nav-link'>Reviews</Link>
      </div>
      <div className="p-2">
        <Link to='/user/all' className='nav-link'>All Users</Link>
      </div>
      <div className="p-2">
        <Link to='/user/borrow-history' className='nav-link'>Borrow History</Link>
      </div>
      <div className="p-2">
        <Link to='/user/profile' className='nav-link'>Profile</Link>
      </div>
      
    </Stack>
  );
}
export default Sidebar;
