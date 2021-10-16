import React, {useEffect, useState} from 'react';
//import callApi from '../../api';
import ProductMaster from './components/ProductMaster';

const ProductsScreen = () => {



  return (
    <div className = "container mt-5">
      <h2>Maestro de Productos</h2>
      <ProductMaster/>  
    </div>
  );
};

export default ProductsScreen;
