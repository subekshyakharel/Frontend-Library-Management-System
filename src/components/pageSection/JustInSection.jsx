import React from 'react'
import SectionTitle from '../sectionTitle/SectionTitle'
import CustomCard from '../customCard/CustomCard'
import { useSelector } from 'react-redux'

const JustInSection = () => {
    const {publicBooks} = useSelector((state)=> state.bookInfo)

    let books = []
    if(publicBooks.length){
       const sorted =  [...publicBooks].sort((a, b)=> new Date(b.createdAt) - new Date(a.createdAt) )
       books = sorted.slice(0, 4) 
    }
    console.log(books);
  return (
    <div>
        <SectionTitle title="Just In"/>

        <div className='d-flex justify-content-center flex-wrap gap-3'>
            {
                books.map((book)=> <CustomCard key={book._id} {...book}/>)
            }
            
            
        </div>
    </div>
  )
}

export default JustInSection