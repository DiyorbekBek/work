function Bitmap() {
  return (
    <div className="max-container flex flex-col items-center py-8 md:flex-row-reverse md:justify-between">
      <img
        className="rounded-lg mb-6"
        src="/assets/shared/mobile/image-best-gear.jpg"
        alt=""
      />
      <div className="md:w-[25rem]">
        <h1 className="text-3xl md:text-[40px] md:leading-[44px] md:tracking-[1.43px] uppercase text-center md:text-left font-bold tracking-[1px] font-[Manrope] mb-8">
          Bringing you the{" "}
          <span className="text-[#D87D4A] uppercase">best</span> audio gear
        </h1>
        <p className="text-base font-[Manrope] md:text-left opacity-50 text-center">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default Bitmap;
