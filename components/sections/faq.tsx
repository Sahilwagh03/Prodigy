import React from "react";
import TalkButton from "../talk-button";
import FaqAccordion from "../faq-accordion";

const Faq = () => {
  return (
    <section className="h-auto bg-cover py-8 lg:py-28 bg-no-repeat bg-position-[50%] bg-[url(/dotted-bg.webp)]">
      <div className="w-full h-full px-4 max-w-340 mx-auto">
        <div className="h-full flex lg:flex-row gap-7">
          <div className="flex-3 flex flex-col justify-between h-auto">
            <div className="flex flex-col gap-6">
              <h2 className="text-[2rem] lg:text-[2.5rem] font-semibold leading-tight tracking-[-.075rem]">
                Frequently asked any questions
              </h2>
              <p className="text-[#4d4d4d]">
                Find clear answers about our process, services and how we work
                with clients.
              </p>
            </div>
            <div className="px-7.5 py-9 space-y-4 bg-white rounded-xl">
                <h3 className="text-[1.25rem] font-semibold tracking-[-.0375rem] leading-normal">Can’t find your answer?</h3>
                <p className="text-[#4d4d4d]">If you have questions or need more details, feel free to reach out.</p>
                <TalkButton className="w-fit bg-black text-white hover:bg-[#f3350c]" />
            </div>
          </div>
          <div className="flex-7 h-full">
            <FaqAccordion/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
