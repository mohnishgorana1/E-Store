import { Form, Link } from "react-router-dom";
import { FormInput, SubmitButton } from "../components/index";

function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="card-title text-center text-3xl font-bold"></h4>

        <FormInput
          type="text"
          label="Username"
          name="identifier"
          defaultValue="Mohnish Gorana"
        />

        <FormInput
          type="email"
          label="Email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="Password"
          name="identifier"
          defaultValue="secret"
        />
        <div className="mt-4 ">
          <SubmitButton text="Register" type="submit" />
        </div>
        
        <p className="text-center ">
          Already a member? {" "}
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Register;
