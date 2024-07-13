import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  // Ensure sort defaults to an empty string if undefined
  const sortParam = sort ? `&sort=price:${sort}` : '';

  // Constructing sub-categories filter
  const subCategoriesFilter = subCats.map(item => `&filter[sub_categories][id][$eq]=${item}`).join('');

  // Fetching products based on filters
  const { data, loading, error } = useFetch(
    `/products?populate=*&filter[categories][id][$eq]=${catId}${subCategoriesFilter}&filter[price][$lte]=${maxPrice}${sortParam}`
  );

  if (loading) return <div className="list">Loading...</div>;
  if (error) return <div className="list">Error: {error.message}</div>;
  
  return (
    <div className="list">
      {data?.map(item => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;