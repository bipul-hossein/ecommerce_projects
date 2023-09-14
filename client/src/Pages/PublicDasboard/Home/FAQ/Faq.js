import React from "react";

const Faq = () => {
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

  return (
    <section className="md:w-3/4 mx-auto my-10">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold mb-3">Frequently Ask Questions</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      {questions.map((que, i) => (
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300 hover:text-primary">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-base font-bold">
              <p className="">{que.question}</p>
            </div>
            <div className="collapse-content text-gray-500 hover:text-black">
              <p>{que.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Faq;
