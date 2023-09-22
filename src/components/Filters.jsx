import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckBox from "./FormCheckBox";

function Filters() {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;  //* Imp to undersrnad

  const categories = meta.categories;
  const companies = meta.companies;
  const pagination = meta.pagination;

  return (
    <Form className="bg-base-200 rounded-lg px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEarch */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/*Categories */}
      <FormSelect
        label="select category"
        name=""
        list={categories}
        size="select-sm"
        defaultValue={category}
      />

      {/* Companies */}
      <FormSelect
        label="select companies"
        name="category"
        list={companies}
        size="select-sm"
        defaultValue={company}
      />

      {/* Sort by */}
      <FormSelect
        label="Sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />

      {/* Range */}
      <FormRange
        label="Select Price"
        name="price"
        price={price}
        size="range-sm"
      />

      {/* Form checkbox shipping */}

      <FormCheckBox
        label="Free Shipping"
        name="shipping"
        defaultValue={shipping}
        size="checkbox-sm"
      />

      {/* {Buttons} */}
      <button type="submit" className="btn btn-sm btn-primary">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm ">
        Reset
      </Link>
    </Form>
  );
}

export default Filters;
