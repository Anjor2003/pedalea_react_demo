import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-24 md:py-0 xl:h-[620px] relative overflow-hidden bg-gradient-to-b from-gray-600 to-gray-100 bg-no-repeat">
      <div className="container mx-auto bg-[url('/hero/bike.png')] bg-no-repeat  xl:bg-none ">
        <div className="flex items-center justify-between">
          {/* text */}
          <div className="w-full xl:max-w-[580px] md:h-[420px] xl:h-[620px] flex flex-col justify-center items-start">
            <h1 className="text-center xl:text-left mb-8 text-white xl:text-black">
              Where <span>Joyful</span> Cycling Begins
            </h1>
            <p className="mb-10 text-lg max-w-[580px] mx-auto text-center font-medium xl:text-left xl:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              voluptates. Ipsum alias quo sapiente iure pariatur ut distinctio.
              Eaque, laboriosam?
            </p>
            {/* btn group */}
            <div className="flex items-center gap-4 mx-auto xl:mx-0">
              <Link href={"/our-bikes"} className="mx-auto md:mx-0">
                <button className="btn btn-primary">Shop now</button>
              </Link>
              <Link href={"/our-bikes"} className="mx-auto md:mx-0">
                <button className="btn btn-accent">Our Bikes</button>
              </Link>
            </div>
          </div>
          {/* images */}
          <div className="hidden xl:flex object-cover">
            <Image
              src={"/hero/bike.png"}
              width={765}
              height={480}
              alt=""
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
