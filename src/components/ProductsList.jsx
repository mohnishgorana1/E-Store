import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

function ProductsList() {
  const { products } = useLoaderData();

  console.log(products);
  return (
    <div className="mt-12 grid gap-y-8  ">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const id = product.id;
        const rupeeAmount = formatPrice(price);

        return (
          <Link
            key={id}
            to={`/products/${id}`}
            className="p-8 flex flex-col  rounded-lg sm:flex-row sm:justify-between gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt=""
                className="rounded-lg h-24 sm:h-32 sm:w-32 object-cover md:h-48 w-full group-hover:scale-105 transition duration-300"
              />
            </figure>
            <div className="card-body items-center text-center relative">
              <h3 className="card-title sm:self-start  capitalize font-medium text-lg tracking-wider">
                {title}
              </h3>
              <h4 className="card-title sm:self-start capitalize font-normal text-lg tracking-wider">
                {company}
              </h4>
              <span className="text-secondary sm:self-end  sm:absolute sm:right-0 sm:top-5 sm:pt-5 ">
                {rupeeAmount}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsList;
