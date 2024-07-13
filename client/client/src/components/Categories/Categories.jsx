import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        
        <div className="row">
          <img
            src="/img/1.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>

        
        <div className="row">
          <img
            src="/img/sale2.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>


      <div className="col">
        <div className="row">
          {" "}
          <img
            src="/img/newseason.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>


      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="/img/mens.png"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>

          <div className="col">
            <div className="row">
              {" "}
              <img
                src="/img/accesories.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <img
            src="/img/shoes3.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;