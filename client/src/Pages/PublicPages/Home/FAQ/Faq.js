import React, { useState } from "react";
import "./Faq.css";
//import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useQuery } from "react-query";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const { data: userFaq = [] } = useQuery({
    queryKey: ["faq"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_ServerUrl}/api/faqs`);
      const data = await res.json();
      return data?.payload;
    },
  });

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    } else setSelected(i);
  };
  const text = {
    bg: "red",
    mt: "16px",
    mb: "16px",
  };
  return (
    <section className="md:mx-auto md:max-w-[864px] my-10 ">
      <div className="text-center mb-6 md:pt-20">
        <h1 className="text-lg md:text-4xl text-[#000C2A] font-bold mb-3">
          Frequently asked questions
        </h1>
      </div>
      <div className="md:pt-11">
        {userFaq?.map((item, i) => (
          <div
            key={i}
            onClick={() => toggle(i)}
            className="mt-6 bg-[#F9FAFE] p-5 border border-solid border-[#D6DCEA] rounded-md"
          >
            <div className="text-lg font-semibold flex justify-between items-center cursor-pointer">
              <h2 className="text-[081B4B]">{item?.question}</h2>
              <span>
                {selected === i
                  ? <AiOutlineMinus className="font-semibold" /> || "-"
                  : <AiOutlinePlus className="font-semibold" /> || "+"}
              </span>
            </div>

            <article className={`content text-[#4D5B7C] ${selected === i && "show"}`}>
              <hr />
              {item?.answer}
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
