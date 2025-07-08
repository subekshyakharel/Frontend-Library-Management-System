import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import JustInSection from '../../components/pageSection/JustInSection'
import BestRead from '../../components/pageSection/BestRead'
import Recomendation from '../../components/pageSection/Recomendation'
import CustomCarousel from '../../components/cutomCarousel/CustomCarousel'

const HomePage = () => {
  return (
    <>
    <Container className='mb-4'>
      <Row>
        <Col>
         {/* Hero Secton  */}
         <CustomCarousel/>

       {/* Just in section  */}
       <JustInSection/>

       {/* Best read Section  */}
       <BestRead/>

       {/* Reccomendation section  */}
       <Recomendation/>

        </Col>
      </Row>
    </Container>
    </>
  )
}

export default HomePage