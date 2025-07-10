import React from 'react'
import { Pagination } from 'react-bootstrap'

const CustomPagination = ({active, setActive, pages}) => {
     let items = [];
      for (let number = 1; number <= pages; number++) {
        items.push(
          <Pagination.Item key={number} onClick={()=>setActive(number)} active={number === active}>
            {number}
          </Pagination.Item>
        );
      }
  return (
  <div className="">
              <Pagination className="">{items}</Pagination>
              <br />
            </div>
  )
}

export default CustomPagination