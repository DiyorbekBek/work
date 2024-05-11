import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/features/basket/basketSlice";

async function getData(url) {
  const req = await fetch(url);
  const data = await req.json();
  return data;
}

function Mark2() {
  const { total } = useSelector((store) => store.products);
  const alldata = useSelector((store) => store.products);
  console.log(alldata);
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [data, setData] = useState([]);

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData("http://localhost:3000/data?slug=" + slug);
        // console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error ", error);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <>
      <section className="max-container flex flex-col py-6">
        {data &&
          data.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex flex-col items-center md:flex-row md:justify-between">
                  <picture>
                    <source
                      srcSet={item.categoryImage.desktop.slice(1)}
                      media="(min-width: 1020px)"
                      width={600}
                      height={500}
                    />
                    <img src={item.categoryImage.mobile.slice(1)} alt="" />
                  </picture>
                  <div className="flex flex-col md:items-start mt-8 gap-6 md:w-[574px]">
                    <h4 className="text-sm text-center font-[Manrope] tracking-[10px] text-[#D87D4A]">
                      NEW PRODUCT
                    </h4>
                    <h1 className="text-[28px] md:text-[40px] font-bold font-[Manrope] text-center md:text-left tracking-[1px]">
                      {item.name}
                    </h1>
                    <p className="text-base  font-[Manrope] text-center md:text-left opacity-50 md:w-[476px]">
                      {item.description}
                    </p>
                    <span className="text-lg md:text-xl font-bold">
                      ${item.price}
                    </span>
                    <div className="flex items-center justify-center gap-4 mb-[88px]">
                      <div className="flex items-center bg-[#F1F1F1]">
                        <button
                          onClick={() => setCounter((prev) => prev - 1)}
                          className="p-[11px] md:p-4"
                        >
                          -
                        </button>
                        <span className="text-sm md:text-base font-bold">
                          {counter}
                        </span>
                        <button
                          onClick={() => setCounter((prev) => prev + 1)}
                          className="p-[11px] md:p-4"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() =>
                          dispatch(addProduct({ ...item, amount: counter }))
                        }
                        className="py-[15px] font-[Manrope] text-xs md:text-xl tracking-[1px] px-[29px] bg-[#D87D4A] hover:bg-[#4C4C4C] duration-300 text-white uppercase"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:mt-[160px] gap-[88px]">
                  <div className="flex flex-col items-start gap-6 md:w-[728px]">
                    <h2 className="text-2xl md:text-[32px] font-bold font-[Manrope]">
                      FEATURES
                    </h2>
                    <p className="text-base md:text-lg font-[Manrope] opacity-50">
                      {item.features}
                    </p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl md:text-[32px] font-bold font-[Manrope] uppercase">
                      in the box
                    </h3>
                    <ul className="flex flex-col gap-2">
                      <li className="flex items-center gap-6">
                        <span className="text-base md:text-lg font-[Manrope] text-[#D87D4A]">
                          {item.includes[0].quantity}x
                        </span>
                        <p className="text-base md:text-lg font-[Manrope] opacity-50">
                          {item.includes[0].item}
                        </p>
                      </li>
                      <li className="flex items-center gap-6">
                        <span className="text-base md:text-lg font-[Manrope] text-[#D87D4A]">
                          {item.includes[1].quantity}x
                        </span>
                        <p className="text-base md:text-lg font-[Manrope] opacity-50">
                          {item.includes[1].item}
                        </p>
                      </li>
                      <li className="flex items-center gap-6">
                        <span className="text-base md:text-lg font-[Manrope] text-[#D87D4A]">
                          {item.includes[2].quantity}x
                        </span>
                        <p className="text-base md:text-lg font-[Manrope] opacity-50">
                          {item.includes[2].item}
                        </p>
                      </li>
                      <li className="flex items-center gap-6">
                        <span className="text-base md:text-lg font-[Manrope] text-[#D87D4A]">
                          {item.includes[3].quantity}
                        </span>
                        <p className="text-base md:text-lg font-[Manrope] opacity-50">
                          {item.includes[3].item}
                        </p>
                      </li>
                      {/* <li className="flex items-center gap-6">
                        <span className="text-base md:text-lg font-[Manrope] text-[#D87D4A]">
                          {item.includes[4].quantity}x
                        </span>
                        <p className="text-base md:text-lg font-[Manrope] opacity-50">
                          {item.includes[4].item}
                        </p>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="mt-[88px]">
                  <ul className="grid md:grid-rows-2 md:grid-flow-col gap-3">
                    <li className="col-span-1">
                      <picture>
                        <source
                          srcSet={item.gallery.first.mobile.slice(1)}
                          media="(min-width: 1020px)"
                        />

                        <img
                          className="rounded-lg"
                          src={item.gallery.first.desktop.slice(1)}
                          alt=""
                        />
                      </picture>
                    </li>
                    <li className="col-span-1">
                      <picture>
                        <source
                          srcSet={item.gallery.second.mobile.slice(1)}
                          media="(min-width: 1020px)"
                        />

                        <img
                          className="rounded-lg"
                          src={item.gallery.second.desktop.slice(1)}
                          alt=""
                        />
                      </picture>
                    </li>
                    <li className="row-span-2">
                      <picture>
                        <source
                          srcSet={item.gallery.third.mobile.slice(1)}
                          media="(min-width: 1020px)"
                        />

                        <img
                          className="rounded-lg"
                          src={item.gallery.third.desktop.slice(1)}
                          alt=""
                        />
                      </picture>
                    </li>
                  </ul>
                </div>
                <h2 className="text-2xl md:text-center font-bold font-[Manrope] uppercase mt-12 tracking-[1px]">
                  you may also like
                </h2>
                <ul className="py-8 flex flex-col items-center gap-14 md:flex-row">
                  <li className="flex flex-col items-center gap-8">
                    <picture>
                      <source
                        srcSet={item.others[0].image.desktop.slice(1)}
                        media="(min-width: 1020px)"
                      />

                      <img
                        className="rounded-lg"
                        src={item.others[0].image.mobile.slice(1)}
                        alt=""
                      />
                    </picture>
                    <h2 className="text-xl font-bold font-[Manrope] uppercase tracking-[1px]">
                      {item.others[0].name}
                    </h2>
                    <Link
                      to={`/mark2/${"xx99-mark-two-headphones"}`}
                      onClick={() =>
                        window.scrollTo({ top: top, behavior: "smooth" })
                      }
                      className="py-[15px] font-[Manrope] text-xs md:text-xl tracking-[1px] px-[29px] bg-[#D87D4A] hover:bg-[#4C4C4C] duration-300 text-white uppercase"
                    >
                      See Product
                    </Link>
                  </li>
                  <li className="flex flex-col items-center gap-8">
                    <picture>
                      <source
                        srcSet={item.others[1].image.desktop.slice(1)}
                        media="(min-width: 1020px)"
                      />

                      <img
                        className="rounded-lg"
                        src={item.others[1].image.mobile.slice(1)}
                        alt=""
                      />
                    </picture>
                    <h2 className="text-xl font-bold font-[Manrope] uppercase tracking-[1px]">
                      {item.others[1].name}
                    </h2>
                    <Link
                      to={`/mark2/${"xx59-headphones"}`}
                      onClick={() =>
                        window.scrollTo({ top: top, behavior: "smooth" })
                      }
                      className="py-[15px] font-[Manrope] text-xs md:text-xl tracking-[1px] px-[29px] bg-[#D87D4A] hover:bg-[#4C4C4C] duration-300 text-white uppercase"
                    >
                      See Product
                    </Link>
                  </li>
                  <li className="flex flex-col items-center gap-8">
                    <picture>
                      <source
                        srcSet={item.others[2].image.desktop.slice(1)}
                        media="(min-width: 1020px)"
                      />

                      <img
                        className="rounded-lg"
                        src={item.others[2].image.mobile.slice(1)}
                        alt=""
                      />
                    </picture>
                    <h2 className="text-xl font-bold font-[Manrope] uppercase tracking-[1px]">
                      {item.others[2].name}
                    </h2>
                    <Link
                      to={`/mark2/${"zx9-speaker"}`}
                      onClick={() =>
                        window.scrollTo({ top: top, behavior: "smooth" })
                      }
                      className="py-[15px] font-[Manrope] text-xs md:text-xl tracking-[1px] px-[29px] bg-[#D87D4A] hover:bg-[#4C4C4C] duration-300 text-white uppercase"
                    >
                      See Product
                    </Link>
                  </li>
                </ul>
              </div>
            );
          })}
      </section>
    </>
  );
}

export default Mark2;
