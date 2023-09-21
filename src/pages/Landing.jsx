
import {FeaturedProducts, Hero} from '../components/index'
import { customFetch } from '../utils'

const url = '/products?featured=true'

export const loader = async() => {
  const response = await customFetch(url)
  console.log(response);

  const products = response.data.data;
  return { products }
}

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Landing