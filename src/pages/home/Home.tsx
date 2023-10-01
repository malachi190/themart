import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative top-0 mt-0 p-0 h-[100vh] w-full max-w-full bg-slate-700">
        <div className="w-full px-8 overflow-x-hidden flex flex-1 justify-between items-center gap-5">
          <div className="flex flex-col justify-start text-start px-5 items-start w-[50%] gap-7">
            <h1 className="mt-0 text-white text-start text-[3rem] font-semibold capitalize text-clip">
              Your one stop shop for everything you need and more!
            </h1>
            <Link to={'/store'} className="bg-white text-slate-800 px-10 py-3 rounded-none">Shop Now</Link>
          </div>
          <img
            src="https://img.freepik.com/premium-vector/young-woman-is-happily-running-with-purchases-discount-coupon-discount-sale-customer-bonus-concept-vector-concept-illustration-flat-cartoon-style_350272-8.jpg"
            alt=""
            className="mt-[8rem] w-[45%] h-[70%] rounded-full"
          />
        </div>
      </div>
    </>
  );
}
