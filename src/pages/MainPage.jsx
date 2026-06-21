import { lazy, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Skeleton from "@mui/material/Skeleton";
import WrapperComponent from "../hoc/wrapper";
import useFetch from "../hooks/useFetch";

function MainPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const data = useFetch("https://dummyjson.com/products");

  const handleCardClick = (e, itemId) => {
    navigate(`/product/${itemId}`);
  };
  return (
    <div>
      <h4>Main Page</h4>
      <div className="product__container">
        {data?.products?.map((item) => {
          return (
            // <Link to={`/product/${item.id}`}>
            <div
              key={item.id}
              className="card"
              onClick={(e) => handleCardClick(e, item.id)}
            >
              <h4>{item.title}</h4>
              {item ? (
                <img
                  style={{
                    width: 210,
                    height: 118,
                  }}
                  alt={item.title}
                  src={item.images[0]}
                />
              ) : (
                <Skeleton variant="rectangular" width={210} height={118} />
              )}
            </div>
            // </Link>
          );
        })}
      </div>
    </div>
  );
}
export default WrapperComponent(MainPage);
