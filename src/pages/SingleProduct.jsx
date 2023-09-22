import { Link, useLoaderData, useParams } from "react-router-dom";
import { customFetch, formatPrice, generateAmountOptions } from "../utils";
import { useState } from "react";

export const loader = async({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return {
    product: response.data.data
  }
}

function SingleProduct() {
  const { product } = useLoaderData();
  console.log(product);

  const { image, title, price, description, colors, company, category } = product.attributes;
  const rupeeAmount = formatPrice(price);

  const [productColor, setProductColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(e.target.value);

  }




  return (
    <section>

      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </div>

      {/* PRODUCTs */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* image */}
        <img src={image} className="w-96 h-96 object-cover rounded-lg lg:w-full" />

        {/* product */}
        <div>
          <h1 className="capitalize text-3xl font-bold ">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">{company}</h4>
          <p className="mt-3 text-2xl">{rupeeAmount}</p>
          <p className="mt-6 leading-8 ">{description}</p>

            {/* color */}
          <div className="mt-6">
            <h4 className="font-medium text-md tracking-order capitalize"> colors </h4>
            <div className="mt-2">
              {
                colors.map( (color) => {
                  return(
                    <button
                      key={color} type="btn"
                      className={`badge w-6 h-6 mr-2 ${ color === productColor && `border-2 border-secondary`} `}
                      style={ { backgroundColor: color} }
                      onClick = {() => setProductColor(color)}
                    >
                    </button>
                  )
                })
              }
            </div>
          </div>
              {/* amount / quantity */}
          
          <div className="form-control w-full max-w-xs mt-6">
            <label htmlFor="amount" className="label">
              <h4 className="text-md font-medium tracking-wider capitalize ">Amount</h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              id="amount"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(10)}
            </select>
            {/* ADD TO BAG BTN */}
          <div className="mt-11">
              <button 
                className="btn btn-secondary btn-md"
              >
                Add to Bag
              </button>
          </div>
          </div>

        </div>
      </div>


    </section>
  )
}

export default SingleProduct