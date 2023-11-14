import React, { useState } from "react";
import './Faq.css';
//import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { useQuery } from "react-query";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const { data: userFaq = []} = useQuery({
    queryKey: ["faq"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_ServerUrl}/api/faqs`);
      const data = await res.json();
      return data?.payload;
    },
  });

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    else setSelected(i)
  }

  return (
    <section className="mx-auto my-10">
      <div className="text-center mb-6">
        <h1 className="text-lg md:text-4xl text-[#000C2A] font-bold mb-3">Frequently asked questions</h1>
      </div>
      {userFaq?.map((item, i) => (
        <div onClick={() => toggle(i)} className="mx-auto mt-12 bg-[#F9FAFE] max-w-[864px] p-5 border border-solid border-[#D6DCEA] rounded-md">
          <div className="text-lg font-semibold flex justify-between items-center cursor-pointer">
            <h2 >{item?.question}</h2>
            <span>{selected === i ? <AiOutlineMinus className="font-semibold" /> || "-" : <AiOutlinePlus className="font-semibold" /> || "+"}</span>
          </div>
   
          <article className={selected === i ? "content show hr" : "content"} 
          >{item?.answer}</article>
        </div>
      ))}
    </section>
  );
};

export default Faq;
