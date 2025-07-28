import Carousel from 'react-bootstrap/Carousel';
import a from '../../assets/img/a.jpg'
import b from '../../assets/img/b.jpg'
import c from '../../assets/img/c.jpg'
import d from '../../assets/img/d.jpeg'

const CustomCarousel = () => {
   return (
    <Carousel className='mt-4'>
      <Carousel.Item>
        <img src={a} alt="First slide" className='d-block w-100' />
        <Carousel.Caption className='carousel-caption-bg rounded p-2'>
          <h3>Explore our extensive collection</h3>
          <hr />
          <p>Dive into thousands of books across every genre — curated just for you.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={d} alt="Second slide"  className='d-block w-100'/>
        <Carousel.Caption className='carousel-caption-bg rounded p-2'>
          <h3>Borrow Books in a Click</h3>
          <hr />
          <p>Experience hassle-free borrowing, quick returns, and real-time updates.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={c} alt="Third slide"  className='d-block w-100' />
        <Carousel.Caption className='carousel-caption-bg rounded p-2'>
          <h3>Track Your Reading Journey</h3>
          <hr />
          <p>
            View your borrow history, get personalized recommendations, and level up your reading habit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel