import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';

const PageHeader = ({categoryName, setFilterSidebar}) => {
    return (
        <div>
        <h3 className="text-xl text-center font-bold text-gray-600 my-2 md:hidden">
          {categoryName}
        </h3>

        {/* small device filter handle */}
        <div className="bg-slate-50 border-[1px] p-[10px] flex justify-between mb-5 rounded-md">
          <h3 className="hidden md:block text-xl font-bold pl-2">
            {categoryName}
          </h3>
          <div
            onClick={() => setFilterSidebar(true)}
            className="flex items-center gap-1 md:hidden px-2 rounded bg-slate-200"
          >
            <BiMenuAltLeft className=" h-6 w-6 font-bold" />
            <p className="font-light text-sm text-black">Filter</p>
          </div>
          <div className="flex">
            <div className="flex items-center pr-2">
              <label
                for="price-select"
                className="px-1 text-xs md:text-sm font-semibold opacity-80"
              >
                Short By:{" "}
              </label>
              <select
                name="price"
                id="price-select"
                className="bg-slate-200 w-24 md:w-auto text-xs md:text-sm px-1 py-[6px] rounded"
              >
                <option value="">Default</option>
                <option value="">Price (Low - High)</option>
                <option value="">Price (High - Low)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PageHeader;