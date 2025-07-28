import React from 'react'
import SectionTitle from '../sectionTitle/SectionTitle'
import { CustomCard } from '../customCard/CustomCard'
import { useSelector } from 'react-redux'

const Recommendation = () => {
  const { publicBooks } = useSelector((state) => state.bookInfo)

  // Get top 4 rated books for Best Read
  const bestRead = [...publicBooks]
    .sort((a, b) => b.averageRating - a.averageRating)
    .slice(0, 4)

  // Get latest 4 books for Just In
  const justIn = [...publicBooks]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4)

  // Filter out books in Best Read and Just In
  const recommendedBooks = publicBooks.filter(book => {
    const inBestRead = bestRead.some(b => b._id === book._id)
    const inJustIn = justIn.some(b => b._id === book._id)
    return !inBestRead && !inJustIn
  })

  return (
    <div>
      <SectionTitle title="Recommendation For You" />
      <div className='d-flex justify-content-center flex-wrap gap-3'>
        {
          recommendedBooks.length
            ? recommendedBooks.map((book) => (
                <CustomCard key={book._id} {...book} />
              ))
            : <p>No more books to recommend.</p>
        }
      </div>
    </div>
  )
}

export default Recommendation
