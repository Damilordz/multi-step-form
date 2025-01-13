// import "./App.css";
import { useState, useContext } from "react";
import { PlanProvider } from "./context/PlanContext";
import IndexContext from "./context/IndexContext";
import Navigation from "./components/Navigation";
import Buttons from "./components/Buttons";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import SuccessfulPage from "./components/SuccessfulPage";

const pageData = [
  {
    name: "Your Info",
    title: "Personal Info",
    description: "Please provide your name, email address, and phone number.",
  },
  {
    name: "Select Plan",
    title: "Select your Plan",
    description: "You have the option of monthly or yearly billing.",
  },
  {
    name: "Adds-On",
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  {
    name: "Summary",
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
  },
];

const addOnsData = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

function App() {
  const [selectedAddOns, setSelectedAddOns] = useState([0, 1]);

  const {
    currentIndex,
    nextStep,
    prevStep,
    subnitForm,
    updateIndex,
    isSubmitted,
    handleOnChange,
    formValidated,
    isNavbutton,
    formData,
  } = useContext(IndexContext);

  const handleAddOns = (index) => {
    if (selectedAddOns.includes(index)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== index));
    } else {
      setSelectedAddOns([...selectedAddOns, index]);
    }
  };

  return (
    <PlanProvider>
      <div className="h-screen w-screen flex lg:flex-row flex-col lg:gap-20 lg:pr-20 items-center lg:h-[600px] lg:w-[950px] lg:bg-neutral-alabaster lg:p-4 lg:rounded-2xl lg:shadow-lg">
        <Navigation pageData={pageData} currentIndex={currentIndex} />
        <div className="h-full lg:pt-8 lg:pb-4 flex flex-col gap-3 lg:gap-6 justify-between items-center flex-grow w-screen mt-[-80px] lg:mt-0">
          <div className="p-4 lg:p-0 flex-grow w-full sm:w-3/4 lg:w-full">
            {currentIndex === 0 && (
              <PersonalInfo
                handleOnChange={handleOnChange}
                formValidated={formValidated}
                isNavbutton={isNavbutton}
                formData={formData}
                pageData={pageData}
                currentIndex={currentIndex}
              />
            )}
            {currentIndex === 1 && (
              <SelectPlan pageData={pageData} currentIndex={currentIndex} />
            )}
            {currentIndex === 2 && (
              <AddOns
                handleAddOns={handleAddOns}
                addOnsData={addOnsData}
                selectedAddOns={selectedAddOns}
                pageData={pageData}
                currentIndex={currentIndex}
              />
            )}
            {currentIndex === 3 && !isSubmitted && (
              <Summary
                addOnsData={addOnsData}
                selectedAddOns={selectedAddOns}
                updateIndex={updateIndex}
                pageData={pageData}
                currentIndex={currentIndex}
              />
            )}
            {isSubmitted && <SuccessfulPage />}
          </div>
          {!isSubmitted && (
            <Buttons
              currentIndex={currentIndex}
              nextStep={nextStep}
              prevStep={prevStep}
              subnitForm={subnitForm}
            />
          )}
        </div>
      </div>
    </PlanProvider>
  );
}

export default App;
