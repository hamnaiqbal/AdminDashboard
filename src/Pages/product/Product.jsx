import React from 'react'
import "./product.css";

import {Link } from "react-router-dom";

export default function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h3 className="productTitle">[Product</h3>

            <Link to="/newProduct">

            <button className="AddProduct"> Create </button>
            </Link>
          
        </div>
      
    </div>
  )
}
