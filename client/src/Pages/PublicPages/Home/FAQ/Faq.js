import React, { useState } from "react";
import './Faq.css';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md"

const Faq = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    else setSelected(i)
  }


  return (
    <section className=" mx-auto w-11/12 my-10">
      <div className="text-center mb-6">
        <h1 className="text-lg md:text-xl font-bold mb-3">Frequently Ask Questions</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit</p>
      </div>
      {questions.map((item, i) => (
        <div onClick={() => toggle(i)} className=" px-3 w-full">
          <div className="text-base py-5 font-semibold flex justify-between items-center cursor-pointer">
            <h2 >{item.question}</h2>
            <span>{selected === i ? <MdOutlineKeyboardArrowUp className="font-semibold" /> || "-" : <MdOutlineKeyboardArrowDown className="font-semibold" /> || "+"}</span>
          </div>
          <article className={selected === i ? "content show " : "content"}
          >{item.answer}</article>
        </div>
      ))}
    </section>
  );
};

export default Faq;


const questions = [
  {
    question: "Proin congue viverra imperdiet nam laoreet blandit fermentum?",
    answer:
      "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
  },
  {
    question:
      "Ultrices mauris morbi congue viverra netus litora consectetuer?",
    answer:
      "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
  },
  {
    question: "Ut phasellus litora in metus molestie?",
    answer:
      "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
  },
  {
    question:
      "Ad quisque eleifend mauris himenaeos mattis amet fermentum ac vel?",
    answer:
      "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
  },
  {
    question: "Cras non felis tristique nostra si ipsum sodales accumsan ex?",
    answer:
      "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
  },
];
