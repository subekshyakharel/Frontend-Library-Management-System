import React, { useState } from 'react'
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap'
import { CustomCard, CustomListCard } from '../customCard/CustomCard';
import CustomPagination from '../customPagination/CustomPagination';

const BookListing = ({bookList}) => {
      const [view, setView] = useState("card");
  const [active, setActive] = useState(1)
  const booksperScreen = 8;
  const pages = Math.ceil(bookList.length / booksperScreen)
//   let items = [];
//   for (let number = 1; number <= pages; number++) {
//     items.push(
//       <Pagination.Item key={number} onClick={()=>setActive(number)} active={number === active}>
//         {number}
//       </Pagination.Item>
//     );
//   }

  const startIndex = (active-1) *booksperScreen
  const endIndex = startIndex + booksperScreen
  const displayBooks = bookList.slice(startIndex, endIndex)
  return (
    <div>      
        <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <div className="my-2">{bookList.length} Books found!</div>
            <div>
              <ButtonGroup aria-label="Basic example">
                <Button onClick={() => setView("card")} variant="secondary">
                  Card
                </Button>
                <Button onClick={() => setView("list")} variant="dark">
                  List
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <div
            className={
              view === "card"
                ? "mt-3 bookList-container d-flex gap-3 flex-wrap justify-content-center"
                : "mt-3 bookList-container gap-3 flex-wrap justify-content-center"
            }
          >
            {displayBooks.length >0 &&
            displayBooks.map((book) =>
              view === "card" ? (
                <CustomCard key={book._id} {...book} />
              ) : (
                <CustomListCard key={book._id} {...book} />
              )
            )}
          </div>

          <div className="d-flex justify-content-center mt-3">
           <CustomPagination active={active} setActive={setActive} pages={pages}/>
          </div>
        </Col>
      </Row>
      </div>
  )
}

export default BookListing