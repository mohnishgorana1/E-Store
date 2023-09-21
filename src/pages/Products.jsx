import { Filters, PaginationContainer, ProductsContainer } from "../components"
import { customFetch } from "../utils"


const url = '/products';
export const loader = async({ request }) =>{

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),

  ])
  /*
   * It takes a URL string from the request.url property.
   * It creates a URL object from that URL string.
   * It extracts the query parameters using the searchParams property.
   * It converts the query parameters into an iterable of key-value pairs using the entries() method.
   * It spreads these key-value pairs into an array.
   * It uses Object.fromEntries() to create a new object where the key-value pairs become properties of the object.
   */

  const response = await customFetch(url, {params});

  const products = response.data.data;
  const meta = response.data.meta;
  
  return{ products, meta, params };
  
}
function Products() {


  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default Products