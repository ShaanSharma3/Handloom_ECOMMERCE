import React from "react";
import Card from "../Card/Card";
import "./Feature.scss";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
const Feature = ({ type }) => {
  const { data, loading, error } = useFetch(
   `/products?populate=*&[filters][type][$eq]=${type}`  //to filter images feature type from all *&imag
  );

    return (
        <div className='feature'>
      <div className="top">
        <h1>{type} products</h1>
        <p>
          
  Welcome to Himachali Handloom, where tradition meets craftsmanship.
  Discover the exquisite beauty of handcrafted textiles,
  woven with love and care by skilled artisans from the 
  heart of Himachal Pradesh. Each piece tells a story of heritage and artistry,
  offering you a unique blend of culture and elegance. 
  Embrace the vibrant colors and intricate designs that reflect the rich legacy 
  of Himachali craftsmanship. Explore our collection and bring home a piece of 
  timeless tradition.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} 
          key={item.id} />)}
      </div>

      <div className="all_products">
    
          <button>
            <Link className="link" to="/products/1">
              TAP TO SEE ALL PRODUCTS
            </Link>
          </button>
          </div>
    </div>
  );
};

export default Feature