import ProductsGrid from "./ProductsGrid"
import SectionTitle from "./SectionTitle"

function FeaturedProducts() {
  return (
    <div className="pt-24">
        <SectionTitle title={"Featured Products"} />
        <ProductsGrid />
    </div>
  )
}

export default FeaturedProducts