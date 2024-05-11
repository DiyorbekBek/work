import { Link } from "react-router-dom";

function EarPhones() {
  return (
    <div className="max-container flex flex-col items-center mt-16">
      <section className="flex flex-col items-center md:flex-row md:justify-between pb-28">
        <picture>
          <source
            srcSet="/assets/product-yx1-earphones/desktop/image-product.jpg"
            media="(min-width: 1020px)"
            width={600}
            height={500}
          />
          <img
            src="/assets/product-yx1-earphones/mobile/image-product.jpg"
            alt=""
          />
        </picture>
        <div className="flex flex-col items-center mt-8 gap-6 md:w-[574px]">
          <h4 className="text-sm font-[Manrope] tracking-[10px] text-[#D87D4A]">
            NEW PRODUCT
          </h4>
          <h1 className="text-[28px] md:text-[40px] font-bold font-[Manrope] text-center tracking-[1px]">
            YX1 WIRELESS <br /> EARPHONES
          </h1>
          <p className="text-base  font-[Manrope] text-center opacity-50 md:w-[476px]">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <Link
            to={`/mark2/${"yx1-earphones"}`}
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

export default EarPhones;
