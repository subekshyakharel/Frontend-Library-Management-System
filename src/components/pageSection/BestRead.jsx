import React from 'react'
import SectionTitle from '../sectionTitle/SectionTitle'
import {CustomCard} from '../customCard/CustomCard'
import { useSelector } from 'react-redux'

const BestRead = () => {
  const {publicBooks}= useSelector((state)=> state.bookInfo)
  let books = []
  if (publicBooks.length) {
  const bestRead = [...publicBooks].sort((a, b) => b.averageRating - a.averageRating)
  books = bestRead.slice(0, 4)
}

  return (
    <div>
        <SectionTitle title="Best Read"/>

        <div className='d-flex justify-content-center flex-wrap gap-3'>
                    {
                        books.map((book)=> <CustomCard key={book._id} {...book}/>)
                    }
                    
                    
                </div>
    </div>
  )
}

export default BestRead