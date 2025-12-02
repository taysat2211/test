import React from 'react';

function News({params}) {

  return (
    <div className='container'>
        <h1>Product ID: {params.id}</h1>
    </div>
  )
}

export default News;