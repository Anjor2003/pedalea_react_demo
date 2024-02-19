import Link from 'next/link'
import { BiSolidError } from "react-icons/bi";


const ErrorPage = () => {
  return (
    <section className="py-44 xl:py-72">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center gap-5 mx-auto">
          <BiSolidError className="text-7xl text-accent" />
          <h3 className="text-4xl mb-4">Something went wrong!</h3>
        </div>
        <p className="text-3xl font-semibold mb-4"> Please, try again</p>
        <Link href={"/"}>
          <button className="btn btn-accent mx-auto">Back to the Home</button>
        </Link>
      </div>
    </section>
  );
}

export default ErrorPage