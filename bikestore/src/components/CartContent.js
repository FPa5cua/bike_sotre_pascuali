import Table from 'react-bootstrap/Table';

function CartContent() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Item</th>
            <th>Item Name</th>
            <th>Item Description</th>
            <th>Item Brand</th>
            <th>Item Id Code</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Handle Bars</td>
            <td>Brooks</td>
            <td>50</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Fork Spacer generic</td>
            <td>$15</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default CartContent;