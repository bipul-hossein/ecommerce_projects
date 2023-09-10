import React from "react";
import useCategoryData from "../../../hooks/useCategoryData";

const Card = () => {
    const [categoryData] = useCategoryData();
    console.log(categoryData);
    return (
        <>
            {categoryData?.slice(0, 8)?.map((data, i) => (
                <>
                    <div
                        key={i}
                        className="flex flex-col rounded-md justify-between items-start h-auto w-full bg-white p-2 md:p-4 border-[1px] hover:border-[#fa6602] relative"
                    >
                        <div>
                            <div className="absolute rounded-full right-1 md:right-2 top-1 md:top-2 md:uppercase bg-[#fed700] ">
                                <p className="text-black text-[3px] md:text-xs md:font-bold py-[6px] md:py-3 px-[2px] md:px-1">sale!</p>
                            </div>
                            <div className=" overflow-hidden rounded-sm ">
                                <img className="aspect-square" src={data?.image} alt="" />
                            </div>
                            <h2 className="text-[14px] md:text-[19px] font-medium md:font-semibold py-[7px] md:py-2 md:tracking-[-.2px] ">
                                {data?.productName}
                            </h2>
                            <div className="card-actions justify-start items-center my-2 md:my-3">
                                <div className="text-[13px] md:text-sm whitespace-no-wrap text-[#fa6602] leading-6 font-bold">
                                    ৳535
                                </div>
                                <div className="text-[13px] md:text-sm text-[#132a36] opacity-50  line-through pl-1">
                                    ৳354
                                </div>
                            </div>
                        </div>
                        <button className="bg-primary hover:bg-[#fa6602] py-[4px] md:py-[8px] px-[8px] md:px-[14px] text-[13px] md:text-sm rounded-[4px] md:rounded-md text-white">
                            Add to Cart
                        </button>
                    </div>
                </>
            ))}
        </>
    );
};

export default Card;
