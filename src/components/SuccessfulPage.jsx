import thankyou from "/assets/images/icon-thank-you.svg";

const SuccessfulPage = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full">
      <img src={thankyou} alt="Thank you" className="mx-auto" />
      <h1 className="text-3xl font-bold text-center">Thank you!</h1>
      <p className="text-lg text-center text-neutral-coolGray text-[14px]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default SuccessfulPage;
