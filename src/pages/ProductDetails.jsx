import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ProductDetails() {
  let { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProductDetail(res))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div>
        <h4>{productDetail?.title}</h4>
        <img src={productDetail?.images[0]} alt={productDetail?.title} />
      </div>
    </div>
  );
}
export default ProductDetails;

// product/123
