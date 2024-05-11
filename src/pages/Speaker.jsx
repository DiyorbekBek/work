import { Link } from "react-router-dom";

function Speaker() {
  return (
    <div className="max-container flex flex-col items-center mt-16">
      <section className="flex flex-col items-center md:flex-row md:justify-between pb-28">
        <picture>
          <source
            srcSet="/assets/product-zx9-speaker/desktop/image-product.jpg"
            media="(min-width: 1020px)"
            width={600}
            height={500}
          />
          <img
            src="/assets/product-zx9-speaker/mobile/image-product.jpg"
            alt=""
          />
        </picture>
        <div className="flex flex-col items-center mt-8 gap-6 md:w-[574px]">
          <h4 className="text-sm font-[Manrope] tracking-[10px] text-[#D87D4A]">
            NEW PRODUCT
          </h4>
          <h1 className="text-[28px] md:text-[40px] font-bold font-[Manrope] text-center tracking-[1px]">
            ZX9 <br /> SPEAKER
          </h1>
          <p className="text-base  font-[Manrope] text-center opacity-50 md:w-[476px]">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <Link
            to={`/mark2/${"zx9-speaker"}`}
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
            srcSet="/assets/product-zx7-speaker/desktop/image-product.jpg"
            media="(min-width: 1020px)"
            width={600}
            height={500}
          />
          <img
            src="/assets/product-zx7-speaker/mobile/image-product.jpg"
            alt=""
          />
        </picture>
        <div className="flex flex-col items-center mt-8 gap-6 md:w-[574px]">
          <h4 className="text-sm font-[Manrope] tracking-[10px] text-[#D87D4A]">
            NEW PRODUCT
          </h4>
          <h1 className="text-[28px] md:text-[40px] font-bold font-[Manrope] text-center tracking-[1px]">
            ZX7 <br /> SPEAKER
          </h1>
          <p className="text-base  font-[Manrope] text-center opacity-50 md:w-[476px]">
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.
          </p>
          <Link
            to={`/mark2/${"zx7-speaker"}`}
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

export default Speaker;
