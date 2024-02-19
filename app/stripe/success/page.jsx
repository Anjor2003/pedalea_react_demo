import Link from "next/link";
import { IoCheckmarkDone } from "react-icons/io5";


const SuccessPage = () => {
  return (
    <section className="py-44 xl:py-72">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center gap-5 mx-auto">
          <IoCheckmarkDone className="text-7xl" />
          <h3 className="text-4xl mb-4">Your payment was successful!</h3>
        </div>
        <p className="text-3xl font-semibold mb-4"> Thank You!</p>
        <Link href={"/"}>
          <button className="btn btn-primary mx-auto">Back to the Home</button>
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
