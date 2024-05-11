import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function CategoryPro() {
  return (
    <section className="max-container py-[170px]">
      <ul className="flex flex-col md:flex-row md:gap-[80px] gap-[180px]">
        <li className="bg-[#F1F1F1] rounded-xl flex flex-col items-center">
          <img
            className="relative bottom-32"
            src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            alt=""
          />
          <h3 className="text-base font-bold font-[Manrope] tracking-[1.27px]">
            HEADPHONES
          </h3>
          <Link
            to="/headphones"
            onClick={() => window.scrollTo({ top: top, behavior: "smooth" })}
            className="flex items-center pb-[22px] text-sm tracking-[1px] font-[Manrope] uppercase opacity-50 mt-4 font-bold gap-2"
          >
            Shop <IoIosArrowForward className="text-[#D87D4A] text-lg" />
          </Link>
        </li>
        <li className="bg-[#F1F1F1] rounded-xl flex flex-col items-center">
          <img
            className="relative bottom-32"
            src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            alt=""
          />
          <h3 className="text-base font-bold font-[Manrope] tracking-[1.27px]">
            SPEAKERS
          </h3>
          <Link
            to="/speakers"
            onClick={() => window.scrollTo({ top: top, behavior: "smooth" })}
            className="flex items-center pb-[22px] text-sm tracking-[1px] font-[Manrope] uppercase opacity-50 mt-4 font-bold gap-2"
          >
            Shop <IoIosArrowForward className="text-[#D87D4A] text-lg" />
          </Link>
        </li>
        <li className="bg-[#F1F1F1] rounded-xl flex flex-col items-center">
          <img
            className="relative bottom-28"
            src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt=""
          />
          <h3 className="text-base font-bold font-[Manrope] tracking-[1.27px]">
            EARPHONES
          </h3>
          <Link
            to="/earphones"
            onClick={() => window.scrollTo({ top: top, behavior: "smooth" })}
            className="flex items-center pb-[22px] text-sm tracking-[1px] font-[Manrope] uppercase opacity-50 mt-4 font-bold gap-2"
          >
            Shop <IoIosArrowForward className="text-[#D87D4A] text-lg" />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default CategoryPro;
