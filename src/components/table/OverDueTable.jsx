import Table from 'react-bootstrap/Table';

const OverDueTable = ({overdueBooks}) => {
   
  return (
    <div>
        <Table striped>
      <thead>
        <tr>
            <th></th>
          <th>Title</th>
          <th>Is Returned</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {
            overdueBooks.map((book, i)=> <tr key={i}>
          <td>{i+1}</td>
          <td>{book.bookTitle}</td>
          <td>{book.isReturned? "Yes":"No"}</td>
          <td>{book.dueDate.slice(0, 10)}</td>
        </tr>)
        }

        

      </tbody>
    </Table>
    </div>
  )
}

export default OverDueTable