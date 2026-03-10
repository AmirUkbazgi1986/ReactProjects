import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/product";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = getProductById(id);
    if (!foundProduct) {
      navigate("/");
      return;
    }
    setProduct(foundProduct);
  }, [id, navigate]);
  if (!product) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="flex-1 py-8 px-0">
      <div className="max-w-[1200px] my-0 mx-auto py-0 px-8">
        <div className="grid grid-cols-2 gap-[3rem] bg-[#fff] py-8 px-8 rounded-lg shadow-[0 2px 8px rgba(0,0,0,0.1)]">
          <div className="w-full h-auto rounded-lg">
            <img src={product?.image} alt={product?.name} />
          </div>
          <div className="">
            <h1 className="text-[2rem] mb-4 text-[#333]">{product?.name}</h1>
            <p className="text-[2rem] font-bold text-[#007bff] mb-6">
              ${product?.price}
            </p>
            <p className="text-[1.1rem] text-[#666] mb-8 leading-[1.8]">
              {product?.description}
            </p>
            <button className="py-3 px-7 border-none rounded-sm text-base font-medium cursor-pointer transition- background-color duration-[0.2s] transform-[0.1s] no-underline inline-block  text-center bg-[#007bff] hover:bg-[#0056b3] text-[#fff]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
