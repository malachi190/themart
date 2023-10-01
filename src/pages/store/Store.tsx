import React from "react";
import Navbar from "../../components/navbar/Navbar";
import {data} from "../../data/data";
import StoreItems from "../../components/storeItems/StoreItems";

export default function Store() {
  return (
    <>
      <Navbar />
      <div className="relative top-0 mt-10 p-5 w-full max-w-full block">
        <div className="mt-10 px-4 text-start w-full">
          <h1 className="text-3xl text-slate-800">Store</h1>
        </div>

        {/* Products */}
        <div className="w-full h-full grid grid-cols-3 grid-flow-row gap-10 justify-center items-center p-5 relative top-[5rem]">
          {data?.map((item, index) => (
            <div key={index} className="">
              <StoreItems {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
