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
  return (
    <>
    </>
  )
}

export default SingleProduct