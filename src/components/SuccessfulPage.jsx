import thankyou from "/assets/images/icon-thank-you.svg";

const SuccessfulPage = () => {
  return (
    <div className=" flex flex-col gap-4 items-center justify-center mx-4 h-[70vh] lg:mx-0 sm:h-[500px] sm:w-4/5 lg:w-full lg:h-full bg-neutral-alabaster p-8 rounded-lg shadow-lg">
      <img src={thankyou} alt="Thank you" className="mx-auto" />
      <h1 className="text-2xl lg:text-3xl font-bold text-center">Thank you!</h1>
      <p className="lg:text-lg text-center text-neutral-coolGray text-[15px]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default SuccessfulPage;
