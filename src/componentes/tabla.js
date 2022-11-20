import React from 'react';

const Ordenes = () => {
    return ( <table class="table">
    <thead>
      <tr>
        <th scope="col">Order #</th>
        <th scope="col">Register Id</th>
        <th scope="col">First name</th>
        <th scope="col">Last name</th>
        <th scope="col">Handled by</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <th scope="row">234</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <th scope="row">456</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <th scope="row">678</th>
        <td colspan="2">Larry</td>
        <td> the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table> );
}
 
export default Ordenes;