import React, { useState } from "react";
import './Faq.css';
//import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { useQuery } from "react-query";

const Faq = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    else setSelected(i)
  }
  const { data: userFaq = [], refetch } = useQuery({
    queryKey: ["faq"],
    queryFn: async () => {
      const res = await fetch(`https://faithful-jade-tie.cyclic.app/api/faqs`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <section className="mx-auto my-10">
      <div className="text-center mb-6">
        <h1 className="text-lg md:text-4xl text-[#000C2A] font-bold mb-3">Frequently asked questions</h1>
      </div>
      {userFaq?.map((item, i) => (
        <div onClick={() => toggle(i)} className="mx-auto mt-6 bg-[#F9FAFE] max-w-[864px] p-5 border border-solid border-[#D6DCEA] rounded-md">
          <div className="text-lg font-semibold flex justify-between items-center cursor-pointer">
            <h2 >{item.question}</h2>
            <span>{selected === i ? <AiOutlineMinus className="font-semibold" /> || "-" : <AiOutlinePlus className="font-semibold" /> || "+"}</span>
          </div>
   
          <article className={selected === i ? "content show hr" : "content"} 
          >{item.answer}</article>
        </div>
      ))}
    </section>
  );
};

export default Faq;


// const questions = [
//   {
//     question: "Proin congue viverra imperdiet nam laoreet blandit fermentum?",
//     answer:
//       "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
//   },
//   {
//     question:
//       "Ultrices mauris morbi congue viverra netus litora consectetuer?",
//     answer:
//       "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
//   },
//   {
//     question: "Ut phasellus litora in metus molestie?",
//     answer:
//       "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
//   },
//   {
//     question:
//       "Ad quisque eleifend mauris himenaeos mattis amet fermentum ac vel?",
//     answer:
//       "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
//   },
//   {
//     question: "Cras non felis tristique nostra si ipsum sodales accumsan ex?",
//     answer:
//       "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
//   },
// ];
