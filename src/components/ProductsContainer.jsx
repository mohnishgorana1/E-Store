import { BsFillGridFill, BsList } from "react-icons/bs";
import { ProductsGrid, ProductsList } from "../components";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function ProductsContainer() {
  
  const { meta } = useLoaderData();
  console.log(meta);

  const totalProduct = meta.pagination.total;

  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `
            text-xl btn btn-circle btn-sm ${
              pattern === layout
                ? "btn-primary text-primary-content"
                : "btn-ghost text-based-content"
            } 
        `
  };

  return (
    <>
      {/* {HEADER} */}
      <div className="flex justify-between mt-8 border-b border-base-300 pb-5 ">
        <h4 className="font-medium text-md">
          {totalProduct} product{totalProduct > 1 && "s"}
        </h4>

        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>

          <button
            type="button"
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {
        totalProduct === 0 ? ( <h5 className="text-2xl mt-16">Sorry, no products matched...</h5>) 
        : 
        layout === "grid" ?  <ProductsGrid /> : <ProductsList />
      }
    </>
  );
}

export default ProductsContainer;
