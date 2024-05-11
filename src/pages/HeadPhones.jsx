import { Link } from "react-router-dom";

function HeadPhones() {
  return (
    <div className="max-container mt-16">
      <section className="flex flex-col items-center md:flex-row md:justify-between pb-28">
        <div className="">
          <picture>
            <source
              srcSet="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
              media="(min-width: 1020px)"
              width={600}
              height={500}
            />
            <img
              src="/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
              alt=""
            />
          </picture>
        </div>
        <div className="flex flex-col items-center mt-8 gap-6 md:items-start">
          <h4 className="text-sm font-[Manrope] tracking-[10px] text-[#D87D4A]">
            NEW PRODUCT
          </h4>
          <h1 className="text-[28px] md:text-[40px] font-bold font-[Manrope] text-center tracking-[1px]">
            XX99 Mark II <br /> Headphones
          </h1>
          <p className="text-base  font-[Manrope] text-center md:text-left opacity-50 md:w-[476px]">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <Link
            to={`/mark2/${"xx99-mark-two-headphones"}`}
            onClick={() => window.scrollTo({ top: top, behavior: "smooth" })}
            className="py-[15px] font-[Manrope] text-xs md:text-xl tracking-[1px] px-[29px] bg-[#D87D4A] hover:bg-[#4C4C4C] duration-300 text-white uppercase"
          >
            See Product
          </Link>
        </div>
      </section>
      <section className="flex flex-col items-center md:flex-row-reverse md:justify-between pb-28">
        <picture>
          <source
            srcSet="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
            media="(min-width: 1020px)"
            width={600}
            height={500}
          />
          <img
            src="/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg"
            alt=""
          />
        </picture>
        <div className="flex flex-col items-center mt-8 gap-6 md:w-[574px]">
          <h4 className="text-sm font-[Manrope] tracking-[10px] text-[#D87D4A]">
            NEW PRODUCT
          </h4>
          <h1 className="text-[28px] md:text-[40px] font-bold font-[Manrope] text-center tracking-[1px]">
            XX99 Mark I <br /> Headphones
          </h1>
          <p className="text-base  font-[Manrope] text-center opacity-50 md:w-[476px]">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <Link
            to={`/mark2/${"xx99-mark-one-headphones"}`}
            onClick={() => window.scrollTo({ top: top, behavior: "smooth" })}
            className="py-[15px] font-[Manrope] text-xs md:text-xl tracking-[1px] px-[29px] bg-[#D87D4A] hover:bg-[#4C4C4C] duration-300 text-white uppercase"
          >
            See Product
          </Link>
        </div>
      </section>
      <section className="flex flex-col items-center md:flex-row md:justify-between">
        <picture>
          <source
            srcSet="/assets/product-xx59-headphones/desktop/image-product.jpg"
            media="(min-width: 1020px)"
            width={600}
            height={500}
          />
          <img
            src="/assets/product-xx59-headphones/mobile/image-product.jpg"
            alt=""
          />
        </picture>
        <div className="flex flex-col items-center mt-8 gap-6 md:w-[574px]">
          <h4 className="text-sm font-[Manrope] tracking-[10px] text-[#D87D4A]">
            NEW PRODUCT
          </h4>
          <h1 className="text-[28px] md:text-[40px] font-bold font-[Manrope] text-center tracking-[1px]">
            XX59 <br /> Headphones
          </h1>
          <p className="text-base  font-[Manrope] text-center opacity-50 md:w-[476px]">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <Link
            to={`/mark2/${"xx59-headphones"}`}
            onClick={() => window.scrollTo({ top: top, behavior: "smooth" })}
            className="py-[15px] font-[Manrope] text-xs md:text-xl tracking-[1px] px-[29px] bg-[#D87D4A] hover:bg-[#4C4C4C] duration-300 text-white uppercase"
          >
            See Product
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HeadPhones;
