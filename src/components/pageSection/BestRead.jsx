import React from 'react'
import SectionTitle from '../sectionTitle/SectionTitle'
import CustomCard from '../customCard/CustomCard'

const BestRead = () => {
  return (
    <div>
        <SectionTitle title="Best Read"/>

        <div className='d-flex justify-content-center flex-wrap gap-3'>
            <CustomCard/>
            <CustomCard/>
            <CustomCard/>
            <CustomCard/>
            
        </div>
    </div>
  )
}

export default BestRead