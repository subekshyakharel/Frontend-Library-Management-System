import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import{ Container, Row, Col} from 'react-bootstrap'
import Sidebar from './Sidebar'
import AuthRoute from '../auth/AuthRoute'

const UserLayout = () => {
  return (
    <AuthRoute>
    {/* navbar  */}
    <Header/>

       <Container fluid>
      <Row>
        <Col className='bg-dark text-white p-3' md={3} xl={2}>
        <div>
          <div>Welcome Back</div>
          <h4>Subekshya kharel</h4>
        </div>
        <hr />
        <Sidebar/>
        </Col>
        <Col md={9} xl={10}>
            {/* main  */}
    <main className="main">
  <Outlet/>
    </main>
        </Col>
      </Row>
    </Container>



    {/* footer  */}
    <Footer/>
    </AuthRoute>
  )
}

export default UserLayout;