// ------- ICONS ------
import { FiAlignJustify } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";

// RRD imports
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-black ">
      <header className="max-container flex items-center justify-between py-8 border-b-[1px] border-b-gray-600">
        <button className="md:hidden text-xl text-white">
          <FiAlignJustify className="text-xl text-white" />
        </button>
        <Link to="/">
          <h1 className="font-bold text-3xl">
            Sport<span className="text-red-600 font-bold text-3xl">Shop</span>
            .uz
          </h1>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-white">
            <li>
              <Link
                to="/"
                className="text-[13px] font-bold tracking-[2px] font-[Manrope]  hover:text-[#D87D4A] duration-300"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-[13px] font-bold tracking-[2px] font-[Manrope] hover:text-[#D87D4A] duration-300"
              >
                BALLS
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-[13px] font-bold tracking-[2px] font-[Manrope] hover:text-[#D87D4A] duration-300"
              >
                FITNES
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-[13px] font-bold tracking-[2px] font-[Manrope] hover:text-[#D87D4A] duration-300"
              >
                BOXING
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <div className="flex items-center gap-4">
            <label className="input flex input-bordered items-center gap-2 ">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-yellow-300" />
              <h3 className="font-bold">Fergana</h3>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <div className="flex items-center">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-yellow-300" />
              <h3 className="font-bold">Fergana</h3>
            </div>
          </div>
        </div>
        <div className="text-xl md:text-2xl text-white hover:text-[#D87D4A] duration-300">
          <div className="dropdown z-50 dropdown-end">
            <div tabIndex={0} role="button">
              <SlBasket />
            </div>
            <div
              tabIndex={0}
              className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[377px] h-[488px]"
            >
              <div className="mx-8">
                <div className="flex justify-between my-8 items-center">
                  <p className="text-[#000000] font-bold text-[18px] tracking-[1.29px]">
                    CART (3)
                  </p>
                  <p className="text-[#000000] hover:text-[#D87D4A] transition text-[15px] opacity-[50%]">
                    Remove all
                  </p>
                </div>
                <div className="grid w-full grid-cols-2 mb-6 items-center">
                  <div className="flex items-center">
                    <div className="max-w-16 w-full h-16 bg-[#F1F1F1] rounded-lg">
                      <img
                        className="w-[50%] h-full m-auto"
                        src="/XX99Mark.svg"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-[#000000] font-bold text-[15px]">
                        XX99 MK II
                      </p>
                      <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                        $ 2,999
                      </p>
                    </div>
                  </div>
                  <div className="w-[96px] h-[32px] bg-[#F1F1F1] flex justify-between items-center px-6 ml-auto">
                    <button className="hover:text-[#FBAF85]">-</button>
                    <p className="font-bold text-[#000000] text-[13px]">1</p>
                    <button className="hover:text-[#FBAF85]">+</button>
                  </div>
                </div>
                <div className="grid w-full grid-cols-2 mb-6 items-center">
                  <div className="flex items-center">
                    <div className="max-w-16 w-full h-16 bg-[#F1F1F1] rounded-lg">
                      <img
                        className="w-[50%] h-full m-auto"
                        src="/XX99Mark.svg"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-[#000000] font-bold text-[15px]">
                        XX99 MK II
                      </p>
                      <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                        $ 2,999
                      </p>
                    </div>
                  </div>
                  <div className="w-[96px] h-[32px] bg-[#F1F1F1] flex justify-between items-center px-6 ml-auto">
                    <button className="hover:text-[#FBAF85]">-</button>
                    <p className="font-bold text-[#000000] text-[13px]">1</p>
                    <button className="hover:text-[#FBAF85]">+</button>
                  </div>
                </div>
                <div className="grid w-full grid-cols-2 mb-6 items-center">
                  <div className="flex items-center">
                    <div className="max-w-16 w-full h-16 bg-[#F1F1F1] rounded-lg">
                      <img
                        className="w-[50%] h-full m-auto"
                        src="/XX99Mark.svg"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-[#000000] font-bold text-[15px]">
                        XX99 MK II
                      </p>
                      <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                        $ 2,999
                      </p>
                    </div>
                  </div>
                  <div className="w-[96px] h-[32px] bg-[#F1F1F1] flex justify-between items-center px-6 ml-auto">
                    <button className="hover:text-[#FBAF85]">-</button>
                    <p className="font-bold text-[#000000] text-[13px]">1</p>
                    <button className="hover:text-[#FBAF85]">+</button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[#000000] opacity-[50%] text-[15px]">
                    TOTAL
                  </p>
                  <p className="text-[#000000] text-[18px] font-bold">
                    $ 5,396
                  </p>
                </div>
                <button className="text-[#FFFFFF] hover:bg-[#FBAF85] transition font-bold text-[13px] bg-[#D87D4A] max-w-[313px] w-full h-12 mt-6">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
