import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Lightbox from 'lightbox.js-react';

const DemoTableWithLightbox = () => {
  const columns = [
    {
      dataField: 'id',
      text: 'ID',
      sort: true
    },
    {
      dataField: 'name',
      text: 'Name',
      sort: true
    },
    {
      dataField: 'image',
      text: 'Image',
      formatter: (cell, row) => (
        <img 
          src={cell} 
          alt={row.name} 
          style={{ width: '100px', cursor: 'pointer' }}
          onClick={() => window.lightbox.show(cell)}
        />
      )
    }
  ];

  const data = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Demo: Bootstrap Table with Lightbox</h2>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        pagination={paginationFactory()}
      />
      <Lightbox
        ref={(ref) => {
          window.lightbox = ref;
        }}
      />
    </div>
  );
};

export default DemoTableWithLightbox;
