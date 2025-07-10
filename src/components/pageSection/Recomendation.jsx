import React from 'react'
import SectionTitle from '../sectionTitle/SectionTitle'
import {CustomCard} from '../customCard/CustomCard'

const Recomendation = () => {
  return (
    <div>
        <SectionTitle title="Recommendation For You"/>

        <div className='d-flex justify-content-center flex-wrap gap-3'>
            <CustomCard/>
            <CustomCard/>
            <CustomCard/>
            <CustomCard/>
            
        </div>
    </div>
  )
}

export default Recomendation