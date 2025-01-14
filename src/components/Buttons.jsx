import { useContext } from "react";
import IndexContext from "../context/IndexContext";

const Buttons = () => {
  const { prevStep, nextStep, currentIndex, subnitForm } =
    useContext(IndexContext);
    
  return (
    <div className="flex justify-between bg-neutral-alabaster p-4 lg:p-0 w-full">
      {currentIndex > 0 && (
        <button
          onClick={prevStep}
          className="text-gray-400 font-semibold hover:text-gray-800"
        >
          Go Back
        </button>
      )}
      {currentIndex < 3 && (
        <button
          onClick={nextStep}
          className="ml-auto text-white bg-primary-marine hover:opacity-85 py-2 px-4 rounded-md text-center justify-self-end"
        >
          Next Step
        </button>
      )}

      {currentIndex === 3 && (
        <button
          onClick={subnitForm}
          className="ml-auto text-white bg-primary-purplish hover:opacity-85 py-2 px-4 rounded-md text-center justify-self-end"
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default Buttons;
