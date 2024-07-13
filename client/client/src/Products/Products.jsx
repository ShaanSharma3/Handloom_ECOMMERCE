import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../components/List/List";
import useFetch from "../hooks/useFetch";
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?&filter[categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">


        {/* <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div> */}


        {/* <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={10000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div> */}

        
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
          <div>
            <p>
              
              <h2>OFFERS</h2>
              <div className="colorchange">
              <h3>⚪EVERY SUNDAY 18% OFF </h3>
              <h3>⚪B1G1 ON ACCESSORIES </h3>
              <h3>⚪5% OFF ON YALKWOOL  </h3>
              <h3>⚪B3G1 ON ALL SHAWLS </h3>
              <h3>⚪SPECIAL OFF FOR COUPLE </h3>
              <h3>⚪12% OFF ON LOCALPATTU </h3>
              <h3>⚪VALANTINE DAY OFFER </h3>
              <h3>⚪BLACK FRIDAY 4% OFF </h3>
              <h3>⚪5% OFF ON SHEEP WOOL  </h3>
              </div>

              {/* <div className="colorchange1">
              <h1>Season End</h1>
              <h1>Sale Start from</h1>
              <h1>1st of July</h1>
              </div> */}
              
          
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="/img/12.jpg"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  );
};

export default Products;